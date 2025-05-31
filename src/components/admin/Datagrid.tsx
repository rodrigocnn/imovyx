import { Button, Table, TextInput } from "flowbite-react";
import { MouseEventHandler, useEffect, useState } from "react";

interface DatagridColumn {
  field: keyof any;
  headerName: string;
  width?: number;
  sortable?: boolean;
}

interface ColumnFormatter<T> {
  field: string;
  component: React.ComponentType<{ row: T }>;
  label?: string;
}

interface AddAction {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface DataGridProps<T> {
  rows: T[] | [] | undefined;
  columns: DatagridColumn[];
  columnsFormatters?: ColumnFormatter<T>[];
  addAction: AddAction;
  searchField?: keyof T;
}

export function DataGrid<T>(props: DataGridProps<T>) {
  const { rows, columns, columnsFormatters, addAction, searchField } = props;
  const [dataSource, setDataSource] = useState(rows);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = dataSource?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((dataSource?.length || 0) / itemsPerPage);

  useEffect(() => {
    setDataSource(rows);
    setCurrentPage(1); // Resetar página ao trocar os dados
  }, [rows]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value.toLowerCase();

    if (!searchField) {
      setDataSource(rows); // sem filtro se não houver campo definido
      return;
    }

    const filteredData = rows?.filter((item) => {
      const fieldValue = String(item[searchField] ?? "").toLowerCase();
      return fieldValue.includes(value);
    });

    setDataSource(filteredData);
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <Button
          onClick={addAction.onClick}
          className=" text-white  rounded hover:bg-red-600"
        >
          {addAction.label}
        </Button>

        <TextInput
          onChange={handleSearch}
          type="text"
          placeholder="Pesquisar"
          required
        />
      </div>

      <Table striped className="border border-gray-300">
        <Table.Head className="border-b border-gray-300">
          {columns.map((col) => (
            <Table.HeadCell
              key={col.field as string}
              className="border-r border-gray-300"
              style={{ width: col.width ? `${col.width}px` : "auto" }}
            >
              {col.headerName}
            </Table.HeadCell>
          ))}

          {columnsFormatters?.map((formatter, index) => (
            <Table.HeadCell
              key={`formatter-head-${index}`}
              className="border-r border-gray-300 text-center"
            >
              {formatter.label ?? ""}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {paginatedData?.map((item, rowIndex) => (
            <Table.Row
              key={rowIndex}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-300"
            >
              {columns.map((col) => (
                <Table.Cell
                  key={col.field as string}
                  className="border-r border-gray-300"
                >
                  {/* Aqui mostra o valor direto */}
                  {String(item[col.field as keyof typeof item])}
                </Table.Cell>
              ))}

              {columnsFormatters?.map((formatter, index) => (
                <Table.Cell
                  key={`formatter-${index}`}
                  className="border-r border-gray-300 text-center"
                >
                  <formatter.component row={item} />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex p-2 justify-end mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            size="xs"
            className="p-2 rounded-none"
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
}

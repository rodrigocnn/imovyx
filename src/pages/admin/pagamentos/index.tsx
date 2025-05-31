import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { RentalPayment } from "@/modules/rental-payments/interfaces";
import { DeleteRentalPaymentButton } from "@/modules/rental-payments/component/deleteRentalPaymentButton";
import { EditRentalPaymentButton } from "@/modules/rental-payments/component/editRentalPaymentButton";
import { propsFindAllRentalPayments } from "@/modules/rental-payments/constants";
import { useContext, useEffect } from "react";
import { columnsRentalPayment } from "@/modules/rental-payments/constants/columns";
import { FilterPayment } from "@/modules/rental-payments/component/filterPayment";
import { RentalPaymentContext } from "@/modules/rental-payments/context";

export default function Pagamentos() {
  const router = useRouter();
  const { data, isLoading } = useFindAllQuery<RentalPayment>(
    propsFindAllRentalPayments
  );
  const { setPayments, payments } = useContext(RentalPaymentContext);

  useEffect(() => {
    setPayments(data);
  }, [data]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/pagamentos/cadastrar");
  }

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Pagamentos</h2>
      <FilterPayment />

      <div className="bg-white p-4 rounded h-screen">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner aria-label="Carregando pagamentos..." />
            </div>
          ) : (
            <DataGrid
              rows={payments}
              columns={columnsRentalPayment}
              addAction={{
                label: "Cadastrar Pagamento",
                onClick: handleClick,
              }}
              columnsFormatters={[
                {
                  component: EditRentalPaymentButton,
                  label: "Editar",
                  field: "editar",
                },
                {
                  component: DeleteRentalPaymentButton,
                  label: "Excluir",
                  field: "excluir",
                },
              ]}
              searchField="due_date"
            />
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
}

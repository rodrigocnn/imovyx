export const ptBRGridLocaleText = {
  // Root
  noRowsLabel: "Nenhum registro",
  noResultsOverlayLabel: "Nenhum resultado encontrado.",

  // Density selector toolbar button text
  toolbarDensity: "Densidade",
  toolbarDensityLabel: "Densidade",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Padrão",
  toolbarDensityComfortable: "Confortável",

  // Columns selector toolbar button text
  toolbarColumns: "Colunas",
  toolbarColumnsLabel: "Selecionar colunas",

  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Esconder filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count: number) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Pesquisar…",
  toolbarQuickFilterLabel: "Pesquisar",
  toolbarQuickFilterDeleteIconLabel: "Limpar",

  // Export selector toolbar button text
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Baixar como CSV",
  toolbarExportPrint: "Imprimir",

  // Columns panel text
  columnsPanelTextFieldLabel: "Localizar coluna",
  columnsPanelTextFieldPlaceholder: "Título da coluna",
  columnsPanelDragIconLabel: "Reordenar coluna",
  columnsPanelShowAllButton: "Mostrar todas",
  columnsPanelHideAllButton: "Ocultar todas",

  // Filter panel text
  filterPanelAddFilter: "Adicionar filtro",
  filterPanelDeleteIconLabel: "Excluir",
  filterPanelOperators: "Operadores",
  filterPanelOperatorAnd: "E",
  filterPanelOperatorOr: "Ou",
  filterPanelColumns: "Colunas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor do filtro",

  // Filter operators text
  filterOperatorContains: "contém",
  filterOperatorEquals: "é igual a",
  filterOperatorStartsWith: "começa com",
  filterOperatorEndsWith: "termina com",
  filterOperatorIs: "é",
  filterOperatorNot: "não é",
  filterOperatorAfter: "é depois",
  filterOperatorOnOrAfter: "é em ou depois",
  filterOperatorBefore: "é antes",
  filterOperatorOnOrBefore: "é em ou antes",
  filterOperatorIsEmpty: "está vazio",
  filterOperatorIsNotEmpty: "não está vazio",
  filterOperatorIsAnyOf: "é qualquer um de",

  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuFilter: "Filtrar",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Limpar ordenação",
  columnMenuSortAsc: "Ordenar por ASC",
  columnMenuSortDesc: "Ordenar por DESC",

  // Column header text
  columnHeaderFiltersTooltipActive: (count: number) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
  columnHeaderFiltersLabel: "Mostrar filtros",
  columnHeaderSortIconLabel: "Ordenar",

  // Rows selected footer text
  footerRowSelected: (count: number) =>
    count !== 1
      ? `${count.toLocaleString()} linhas selecionadas`
      : `${count.toLocaleString()} linha selecionada`,

  // Total row amount footer text
  footerTotalRows: "Total de linhas:",

  // Pagination footer text
  footerPaginationRowsPerPage: "Linhas por página:",

  // Checkbox selection text
  checkboxSelectionHeaderName: "Seleção de caixa",
  checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
  checkboxSelectionUnselectAllRows: "Desmarcar todas as linhas",
  checkboxSelectionSelectRow: "Selecionar linha",
  checkboxSelectionUnselectRow: "Desmarcar linha",

  // Boolean cell text
  booleanCellTrueLabel: "sim",
  booleanCellFalseLabel: "não",

  // Actions cell more text
  actionsCellMore: "mais",
};

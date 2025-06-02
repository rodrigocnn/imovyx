"use client";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { CardDashboard } from "@/components/admin/CardDashboard";
import { useDashboard } from "@/modules/dashboard/hooks/useDashboard";
import { formatarToCurrencyBR } from "@/utils";

import LayoutAdmin from "@/components/LayoutAdmin";

export default function Home() {
  const { data, chartRegisters, chartRental } = useDashboard();

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <CardDashboard
          title="Carteira de Aluguel"
          value={formatarToCurrencyBR(data?.rental_portfolio as number)}
          miniDescription="No ano atual"
          color="blue"
          link="#"
        />

        <CardDashboard
          title="Aluguéis Vencidos"
          value={formatarToCurrencyBR(data?.overdue_rents as number)}
          miniDescription="No último mês"
          color="rose"
          link="#"
        />

        <CardDashboard
          title="Aluguéis Recebidos"
          value={formatarToCurrencyBR(data?.received_rents as number)}
          miniDescription="No último mês"
          color="green"
          link="#"
        />
      </div>

      <div className="mt-5 hidden   lg:flex  lg:gap-3 ">
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Cadastros</h2>
          <ReactApexChart
            options={chartRegisters}
            type="bar"
            series={chartRegisters?.series}
          />
        </div>
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Recebimento - Aluguéis</h2>
          <ReactApexChart
            type="bar"
            options={chartRental}
            series={chartRental?.series}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}

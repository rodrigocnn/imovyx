"use client";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { CardDashboard } from "@/components/admin/CardDashboard";
import { useDashboard } from "@/modules/dashboard/hooks/useDashboard";
import { chartCallServices, chartData } from "./charts";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Home() {
  const { data, chartRegisters, chartRental } = useDashboard();

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <CardDashboard
          title="Pacientes"
          value={"+50"}
          miniDescription="Em relação ao mês passado"
          color="blue"
          link="/admin/contratos"
        />

        <CardDashboard
          title="Agendados"
          value={"+30"}
          miniDescription="Em relação ao mês passado"
          color="blue"
          link="/admin/contratos"
        />

        <CardDashboard
          title="Atendimentos"
          value={"+25"}
          miniDescription="Em relação ao mês passado"
          color="blue"
          link="/admin/contratos"
        />
        <CardDashboard
          title="Não Compareceu"
          value={"+25"}
          miniDescription="Em relação ao mês passado"
          color="blue"
          link="/admin/contratos"
        />
      </div>

      <div className="mt-5 hidden   lg:flex  lg:gap-3 ">
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Novos Pacientes</h2>
          <ReactApexChart options={chartData} series={chartData.series} />
        </div>
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Atendimentos</h2>
          <ReactApexChart
            options={chartCallServices}
            type="bar"
            series={chartCallServices.series}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}

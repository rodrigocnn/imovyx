import { useQuery } from "@tanstack/react-query";
import { findAllInfoDashboard } from "../api";
import { useEffect, useState } from "react";
import { createChartOptions, rentalReceived } from "../charts";
import { ApexOptions } from "apexcharts";

export function useDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => findAllInfoDashboard(),
  });

  const [chartRegisters, setChartRegisters] = useState<
    ApexOptions | undefined
  >();

  const [chartRental, setChartRental] = useState<ApexOptions | undefined>();

  useEffect(() => {
    if (data) {
      const cadastros = [
        data?.total_clients,
        data?.total_owners,
        data?.total_properties,
        data?.total_rental_contracts,
        data?.total_cities,
        data?.total_neighborhoods,
      ];

      const options = createChartOptions(cadastros);
      setChartRegisters(options);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const received = data.monthly_received_rents.map((item) => item.amount);
      const options = rentalReceived(received);

      setChartRental(options);
    }
  }, [data]);

  return { data, isLoading, chartRegisters, chartRental };
}

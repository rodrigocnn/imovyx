import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Neighborhood } from "../interfaces";
import { NeighborhoodsFindByCity } from "../api/neighborhoodApi";

export function useFindAllNeighborhoodsByCity() {
  const [cityId, setCityId] = useState<string | null>(null);

  const { data, isLoading, refetch, isError, error } = useQuery<Neighborhood[]>(
    {
      queryKey: ["neighborhoodsByCity", cityId],
      queryFn: () => {
        if (!cityId) return Promise.resolve([]);
        return NeighborhoodsFindByCity(cityId);
      },
      enabled: !!cityId,
    }
  );

  const fetchNeighborhoodsByCityId = (id: string) => {
    setCityId(id);
  };

  return {
    neighborhoods: data,
    isLoading,
    isError,
    error,
    fetchNeighborhoodsByCityId,
    refetch,
  };
}

import api from "@/services/api";

export const findAllInfoDashboard = async (): Promise<DashboardData> => {
  const response = await api.index("dashboard");
  return response.data;
};

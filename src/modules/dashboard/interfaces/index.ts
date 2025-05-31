interface MonthlyReceivedRent {
  month: string; // Ex: "January"
  year: number; // Ex: 2025
  amount: number; // Ex: 1000
}

interface DashboardData {
  rental_portfolio: number;
  overdue_rents: number;
  received_rents: number;
  total_clients: number;
  total_owners: number;
  total_properties: number;
  total_rental_contracts: number;
  total_cities: number;
  total_neighborhoods: number;
  monthly_received_rents: MonthlyReceivedRent[];
}

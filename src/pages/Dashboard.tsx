import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MetricCard } from "../components/MetricCard";
import { RevenueChart } from "../components/RevenueChart";

export function DashboardPage() {
  const { data: stats } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: () => axios.get("/api/stats").then((r) => r.data),
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <MetricCard label="Revenue" value={stats?.revenue ?? 0} format="currency" />
        <MetricCard label="Orders" value={stats?.orders ?? 0} />
        <MetricCard label="Customers" value={stats?.customers ?? 0} />
        <MetricCard label="Avg. Order" value={stats?.avgOrder ?? 0} format="currency" />
      </div>
      <RevenueChart />
    </div>
  );
}

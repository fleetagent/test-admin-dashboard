import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function RevenueChart() {
  const { data } = useQuery({
    queryKey: ["revenue-chart"],
    queryFn: () => axios.get("/api/stats/revenue-chart").then((r) => r.data),
  });

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Revenue (30 days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data ?? []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

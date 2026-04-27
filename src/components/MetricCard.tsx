interface MetricCardProps {
  label: string;
  value: number;
  format?: "currency" | "number";
}

export function MetricCard({ label, value, format = "number" }: MetricCardProps) {
  const formatted = format === "currency"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
    : new Intl.NumberFormat("en-US").format(value);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{formatted}</p>
    </div>
  );
}

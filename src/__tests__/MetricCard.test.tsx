import { render, screen } from "@testing-library/react";
import { MetricCard } from "../components/MetricCard";

describe("MetricCard", () => {
  it("renders label and formatted number", () => {
    render(<MetricCard label="Orders" value={1234} />);
    expect(screen.getByText("Orders")).toBeTruthy();
    expect(screen.getByText("1,234")).toBeTruthy();
  });

  it("formats currency values", () => {
    render(<MetricCard label="Revenue" value={9999.5} format="currency" />);
    expect(screen.getByText("Revenue")).toBeTruthy();
    expect(screen.getByText("$9,999.50")).toBeTruthy();
  });

  it("handles zero", () => {
    render(<MetricCard label="Empty" value={0} />);
    expect(screen.getByText("0")).toBeTruthy();
  });

  it("formats zero as currency", () => {
    render(<MetricCard label="No Revenue" value={0} format="currency" />);
    expect(screen.getByText("$0.00")).toBeTruthy();
  });
});

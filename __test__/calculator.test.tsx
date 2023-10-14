import Calculator from "@/pages/calculator";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  it("Renders a calculator", () => {
    render(<Calculator />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
  });
});

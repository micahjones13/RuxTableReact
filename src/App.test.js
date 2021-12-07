import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders RuxTable", () => {
  render(<App />);
  const table = screen.getByTestId("table");
  expect(table).toBeTruthy();
  //Making sure it can fail
  // expect(table).toBeNull();
});

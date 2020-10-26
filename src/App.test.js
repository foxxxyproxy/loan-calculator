import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  let { container, unmount } = render(<App />);
  unmount();
});

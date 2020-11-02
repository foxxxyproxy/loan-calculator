import React from "react";
//import { render, unmountComponentAtNode } from "react-dom";
import Calculator from "./Calculator";
import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

let container, unmount;

beforeEach(() => {
  const utils = render(<Calculator />);
  container = utils.container;
  unmount = utils.unmount;
});

afterEach(() => {
  unmount();
});

it("on Submit without selected data - Error", () => {
  const button = screen.getByTestId("button-submit");

  expect(button).toHaveTextContent("Get offer");

  expect(container.querySelector("[data-testid='button-error']")).toBe(null);

  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const buttonError = screen.getByTestId("button-error");
  expect(buttonError).toBeInTheDocument();
});

it("Dropdowns are rendering", () => {
  const dropdowns = container.querySelectorAll(".dropdown-wrapper__item");
  expect(dropdowns).not.toBe(null);
  expect(dropdowns.length).toBe(2);
});

it("Sliders are rendering", () => {
  const sliders = container.querySelectorAll(".slider-wrapper__item");
  expect(sliders).not.toBe(null);
  expect(sliders.length).toBe(2);
});

it("Product dropdown is working", () => {
  const productSelect = container.querySelectorAll("select")[0];
  expect(productSelect).not.toBe(null);
  expect(productSelect).toHaveValue("");

  userEvent.selectOptions(productSelect, ["Equipment"]);
  expect(productSelect).toHaveValue("Equipment");
  expect(screen.getByText("Equipment").selected).toBe(true);

  userEvent.selectOptions(productSelect, ["Marketing"]);
  expect(productSelect).toHaveValue("Marketing");
  expect(screen.getByText("Marketing").selected).toBe(true);
});

it("Legal dropdown is working", () => {
  const legalSelect = container.querySelectorAll("select")[1];
  expect(legalSelect).not.toBe(null);
  expect(legalSelect).toHaveValue("");

  userEvent.selectOptions(legalSelect, ["BV"]);
  expect(legalSelect).toHaveValue("BV");
  expect(screen.getByText("BV").selected).toBe(true);

  userEvent.selectOptions(legalSelect, ["Eenmanszak"]);
  expect(legalSelect).toHaveValue("Eenmanszak");
  expect(screen.getByText("Eenmanszak").selected).toBe(true);
});

it("on Submit all selected data - no Error", () => {
  const button = container.querySelector("[data-testid='button-submit']");
  const productSelect = container.querySelectorAll("select")[0];
  const legalSelect = container.querySelectorAll("select")[1];

  expect(button.innerHTML).toBe("Get offer");
  expect(container.querySelector("[data-testid='button-error']")).toBe(null);

  userEvent.selectOptions(productSelect, ["Equipment"]);
  userEvent.selectOptions(legalSelect, ["BV"]);
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(container.querySelector("[data-testid='button-error']")).toBe(null);
  expect(button.innerHTML).toBe("Your interest rate: 6.1%");
});

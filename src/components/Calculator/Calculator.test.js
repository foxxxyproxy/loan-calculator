import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Calculator from "./Calculator";
import { fireEvent } from "@testing-library/dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

  render(<Calculator />, container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("on Submit without selected data - Error", () => {
  const button = container.querySelector("[data-testid='button-submit']");

  expect(button.innerHTML).toBe("Get offer");
  expect(container.querySelector("[data-testid='button-error']")).toBe(null);

  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const buttonError = container.querySelector("[data-testid='button-error']");
  expect(buttonError).not.toBe(null);
});

it("Dropdowns are rendering", () => {
  const dropdowns = container.querySelectorAll(".dropdown-wrapper__item");
  expect(dropdowns).not.toBe(null);
  expect(dropdowns.length).toBe(2);
});

it("Seliders are rendering", () => {
  const sliders = container.querySelectorAll(".slider-wrapper__item");
  expect(sliders).not.toBe(null);
  expect(sliders.length).toBe(2);
});

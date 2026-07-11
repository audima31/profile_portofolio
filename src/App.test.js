import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio identity and primary sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /Audima Oktasena/i, level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Interfaces built for real momentum/i })
  ).toBeInTheDocument();
});

test("mobile navigation opens, closes with Escape, and restores focus", () => {
  render(<App />);

  const openButton = screen.getByRole("button", {
    name: /open navigation menu/i,
  });

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  fireEvent.click(openButton);

  expect(screen.getByRole("dialog", { name: /navigation menu/i })).toBeInTheDocument();
  expect(document.body).toHaveClass("menu-is-open");

  fireEvent.keyDown(window, { key: "Escape" });

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(document.body).not.toHaveClass("menu-is-open");
  expect(openButton).toHaveFocus();
});

test("email actions stay in the same browsing context", () => {
  render(<App />);

  const emailLinks = screen.getAllByRole("link", {
    name: /audimasena@gmail.com|let's talk/i,
  });

  emailLinks.forEach((link) => {
    expect(link).toHaveAttribute("href", "mailto:audimasena@gmail.com");
    expect(link).not.toHaveAttribute("target");
  });
});

// src/test-utils.tsx
import { render } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const customRender = (ui: ReactNode, options = {}) =>
  render(<MantineProvider>{ui}</MantineProvider>, options);

export * from "@testing-library/react";
export { customRender as render };

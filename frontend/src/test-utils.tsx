// test-utils.tsx
import { render } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <MantineProvider withNormalizeCSS withGlobalStyles>
    {children}
  </MantineProvider>
);

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };

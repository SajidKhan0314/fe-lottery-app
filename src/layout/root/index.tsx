"use client";

//types
import type { ReactNode } from "react";

// @mui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";

// theme
import { createTheme } from "theme";

// interfaces
interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  const theme = createTheme();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}

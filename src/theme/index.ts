// export const theme = {
//   spacing: 10,
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         "*": {
//           boxSizing: "border-box",
//         },
//         html: {
//           fontSize: "62.5%",
//         },
//       },
//     },
//   },
//   typography: {
//     htmlFontSize: 10,
//   },
// };

import "@mui/material";
import type { Theme } from "@mui/material/styles/createTheme";
import { createTheme as createMuiTheme } from "@mui/material/styles";

export const createTheme = (): Theme => {
  let theme = createMuiTheme({
    spacing: 1,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            boxSizing: "border-box",
          },
          html: {
            fontSize: "62.5%",
          },
        },
      },
    },
    shape: {
      borderRadius: 1,
    },
    typography: {
      fontFamily: "inherit",
    },
  });
  return theme;
};

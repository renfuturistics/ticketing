import { createTheme } from "@mui/material/styles";
import { teal, amber, grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: teal[700], // A deep teal color
    },
    secondary: {
      main: amber[600], // A warm amber color
    },
    error: {
      main: "#d32f2f", // A vibrant red for errors
    },
    text: {
      primary: grey[900], // Almost black, easy on the eyes
      secondary: grey[700], // A lighter grey for secondary text
    },
    background: {
      default: "#f0f4f8", // A soft off-white background color
      paper: "#ffffff", // Pure white for paper-like elements
    },
  },
  typography: {
    fontFamily: ["Circular Std Book", "sans-serif"].join(","),
    fontSize: 12,

    h1: {
      fontFamily: ["Circular Std Bold", "sans-serif"].join(","),
      fontSize: 36,
      color: teal[800], // Matching the primary color but darker
    },
    h2: {
      fontFamily: ["Circular Std Bold", "sans-serif"].join(","),
      fontSize: 30,
      color: teal[800],
    },
    h3: {
      fontFamily: ["Circular Std Bold", "sans-serif"].join(","),
      fontSize: 24,
      color: teal[800],
    },
    h4: {
      fontFamily: ["Circular Std Bold", "sans-serif"].join(","),
      fontSize: 20,
      color: teal[800],
    },
    h5: {
      fontFamily: ["Circular Std Medium", "sans-serif"].join(","),
      fontSize: 16,
      color: grey[800],
    },
    h6: {
      fontFamily: ["Circular Std Medium", "sans-serif"].join(","),
      fontSize: 14,
      color: grey[800],
    },
    body1: {
      fontFamily: ["Circular Std Book", "sans-serif"].join(","),
      color: grey[900], // Standard body text color
    },
    button: {
      fontFamily: ["Circular Std Bold", "sans-serif"].join(","),
      textTransform: "none", // Disable uppercase transform for buttons
    },
  },
});

export default theme;

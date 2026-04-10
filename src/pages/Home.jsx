import { Box, Stack, createTheme } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import Feed from "../components/Feed/Feed";
import RightBar from "../components/Rightbar/RightBar";
import AddIcon from "../components/AddIcon";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const darkModeHandler = () => setDarkMode((s) => !s);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#0a7ea4",
        light: "#06b6d4",
        dark: "#0c4a65",
      },
      secondary: {
        main: "#d946ef",
        light: "#ec4899",
        dark: "#be185d",
      },
      background: {
        default: darkMode ? "#0f0f1e" : "#f5f5f7",
        paper: darkMode ? "#1a1a2e" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#e0e0e0" : "#1a1a1a",
        secondary: darkMode ? "#a0a0a0" : "#666666",
      },
      divider: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    },
    typography: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 700,
        letterSpacing: "-0.5px",
      },
      h6: {
        fontWeight: 600,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 12,
            transition: "all 0.3s ease",
          },
          contained: {
            background: "linear-gradient(135deg, #0a7ea4 0%, #06b6d4 100%)",
            boxShadow: "0 8px 32px rgba(10, 126, 164, 0.3)",
            "&:hover": {
              boxShadow: "0 12px 48px rgba(10, 126, 164, 0.5)",
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: darkMode
              ? "rgba(26, 26, 46, 0.8)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: darkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: darkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: darkMode
                ? "0 16px 48px rgba(0, 0, 0, 0.5)"
                : "0 16px 48px rgba(0, 0, 0, 0.12)",
              borderColor: darkMode
                ? "rgba(217, 70, 239, 0.3)"
                : "rgba(10, 126, 164, 0.1)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode
              ? "rgba(15, 15, 30, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            border: darkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor="background.default"
        color="text.primary"
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)"
            : "linear-gradient(135deg, #f5f5f7 0%, #efefef 100%)",
        }}
      >
        <Navbar darkMode={darkMode} />
        <Stack
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            gap: { lg: 2 },
            px: { lg: 2 },
            pt: 2,
          }}
        >
          <SideBar mode={darkMode} darkModeHandler={darkModeHandler} />
          <Feed darkMode={darkMode} />
          <RightBar darkMode={darkMode} />
        </Stack>
        <AddIcon darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
}

export default Home;

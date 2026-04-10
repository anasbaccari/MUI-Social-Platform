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
        main: "#00d9ff",
        light: "#00ffff",
        dark: "#0099cc",
      },
      secondary: {
        main: "#ff006e",
        light: "#ff3385",
        dark: "#cc0055",
      },
      background: {
        default: darkMode ? "#0a0e27" : "#f8f9ff",
        paper: darkMode ? "#1118340" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#0a0e27",
        secondary: darkMode ? "#b0b0c0" : "#666666",
      },
      divider: darkMode ? "rgba(0, 217, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
    },
    typography: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      h6: {
        fontWeight: 700,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 20,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 700,
            borderRadius: 14,
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            "&:active": {
              transform: "scale(0.95)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)",
            boxShadow: "0 12px 48px rgba(0, 217, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            "&:hover": {
              boxShadow: "0 20px 80px rgba(0, 217, 255, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              transform: "translateY(-3px)",
              background: "linear-gradient(135deg, #00ffff 0%, #ff3385 100%)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: darkMode
              ? "linear-gradient(135deg, rgba(17, 24, 52, 0.7) 0%, rgba(20, 30, 60, 0.5) 100%)"
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: darkMode
              ? "1px solid rgba(0, 217, 255, 0.2)"
              : "1px solid rgba(0, 217, 255, 0.1)",
            boxShadow: darkMode
              ? "0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
              : "0 12px 48px rgba(0, 0, 0, 0.08)",
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent)",
              transition: "left 0.5s ease",
            },
            "&:hover": {
              transform: "translateY(-8px) rotateX(2deg)",
              boxShadow: darkMode
                ? "0 24px 72px rgba(0, 217, 255, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.2)"
                : "0 24px 72px rgba(0, 217, 255, 0.15)",
              borderColor: "#00d9ff",
              "&::before": {
                left: "100%",
              },
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode
              ? "linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(17, 24, 52, 0.7) 100%)"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 255, 0.95) 100%)",
            backdropFilter: "blur(30px) saturate(180%)",
            border: darkMode
              ? "1px solid rgba(0, 217, 255, 0.15)"
              : "1px solid rgba(0, 217, 255, 0.1)",
            boxShadow: darkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
              : "0 8px 32px rgba(0, 0, 0, 0.08)",
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
            ? "linear-gradient(135deg, #0a0e27 0%, #1a0f3d 50%, #0a0e27 100%)"
            : "linear-gradient(135deg, #f8f9ff 0%, #f0e8ff 50%, #f8f9ff 100%)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: darkMode
              ? "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.08) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        <Navbar darkMode={darkMode} />
        <Stack
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            gap: { lg: 3 },
            px: { lg: 3 },
            py: 2,
            position: "relative",
            zIndex: 1,
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

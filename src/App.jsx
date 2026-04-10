import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import RightBar from "./components/Rightbar/RightBar";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Groups from "./pages/Groups";
import Marketplace from "./pages/Marketplace";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AddIcon from "./components/AddIcon";

function App() {
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
        paper: darkMode ? "#111834" : "#ffffff",
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
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
          <SideBar darkMode={darkMode} />
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Navbar darkModeHandler={darkModeHandler} darkMode={darkMode} />
            <Box sx={{ display: "flex", flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/pages" element={<Pages darkMode={darkMode} />} />
                <Route path="/groups" element={<Groups darkMode={darkMode} />} />
                <Route path="/marketplace" element={<Marketplace darkMode={darkMode} />} />
                <Route path="/friends" element={<Friends darkMode={darkMode} />} />
                <Route path="/settings" element={<Settings darkMode={darkMode} />} />
                <Route path="/profile" element={<Profile darkMode={darkMode} />} />
              </Routes>
              <RightBar darkMode={darkMode} />
            </Box>
          </Box>
          <AddIcon darkMode={darkMode} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

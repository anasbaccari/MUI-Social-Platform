import { Box, Stack, createTheme } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import Feed from "../components/Feed/Feed";
import RightBar from "../components/Rightbar/RightBar";
import AddIcon from "../components/AddIcon";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeHandler = () => setDarkMode((s) => !s);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack
          sx={{
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <SideBar mode={darkMode} darkModeHandler={darkModeHandler} />
          <Feed />
          <RightBar />
        </Stack>
        <AddIcon />
      </Box>
    </ThemeProvider>
  );
}

export default Home;

/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Tooltip,
  styled,
} from "@mui/material";
import { data } from "../../data/SideBarData";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  transition: "all 0.3s ease",
  borderRadius: "12px",
  margin: "4px 0",
  "&:hover": {
    backgroundColor: "rgba(217, 70, 239, 0.1)",
    transform: "translateX(4px)",
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: "12px 16px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: "#d946ef",
    fontWeight: 600,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "inherit",
  minWidth: "40px",
  transition: "all 0.3s ease",
  fontSize: "24px",
}));

function SideBar({ mode, darkModeHandler }) {
  return (
    <Box
      flex="1"
      sx={{
        display: { xs: "none", lg: "block" },
        maxWidth: "280px",
      }}
    >
      <Box
        position="sticky"
        top={0}
        left={0}
        sx={{
          p: 2,
          background: mode
            ? "rgba(26, 26, 46, 0.6)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(10px)",
          border: mode
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          margin: "2px",
        }}
      >
        <List sx={{ width: "100%" }}>
          {data.map((item) => {
            return (
              <Tooltip key={crypto.randomUUID()} title={item.title} arrow>
                <StyledListItem disablePadding>
                  <StyledListItemButton>
                    <StyledListItemIcon>
                      {item.icon}
                    </StyledListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 500,
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                        },
                      }}
                    />
                  </StyledListItemButton>
                </StyledListItem>
              </Tooltip>
            );
          })}

          <Box sx={{ my: 2, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

          <StyledListItem disablePadding>
            <StyledListItemButton
              onClick={darkModeHandler}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <StyledListItemIcon>
                  {mode ? (
                    <WbSunnyIcon sx={{ fontSize: "20px" }} />
                  ) : (
                    <DarkModeIcon sx={{ fontSize: "20px" }} />
                  )}
                </StyledListItemIcon>
                <ListItemText
                  primary={mode ? "Light Mode" : "Dark Mode"}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 500,
                      fontSize: "14px",
                    },
                  }}
                />
              </Box>
              <Switch
                checked={mode}
                onChange={darkModeHandler}
                sx={{
                  ml: "auto",
                  "& .MuiSwitch-switchBase": {
                    transition: "all 0.3s ease",
                  },
                  "& .Mui-checked": {
                    color: "#d946ef",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: mode
                      ? "rgba(217, 70, 239, 0.3)"
                      : "rgba(100, 100, 100, 0.3)",
                  },
                }}
              />
            </StyledListItemButton>
          </StyledListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;

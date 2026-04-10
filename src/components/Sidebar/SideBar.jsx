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
import { useState } from "react";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  borderRadius: "14px",
  margin: "6px 0",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-100%",
    top: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.15), transparent)",
    transition: "left 0.5s ease",
  },
  "&:hover": {
    "&::before": {
      left: "100%",
    },
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: "14px 18px",
  borderRadius: "14px",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  color: theme.palette.text.secondary,
  background: theme.palette.mode === "dark"
    ? "transparent"
    : "transparent",
  border: "1.5px solid transparent",
  "&:hover": {
    color: "#00ffff",
    fontWeight: 700,
    background: theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)"
      : "linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(255, 0, 110, 0.03) 100%)",
    borderColor: "rgba(0, 217, 255, 0.3)",
    transform: "translateX(6px)",
    textShadow: "0 0 15px rgba(0, 217, 255, 0.3)",
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "inherit",
  minWidth: "42px",
  transition: "all 0.4s ease",
  fontSize: "24px",
  "&:hover": {
    transform: "rotate(20deg) scale(1.2)",
    filter: "drop-shadow(0 0 12px rgba(0, 217, 255, 0.5))",
  },
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  p: 2,
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.5) 0%, rgba(20, 30, 60, 0.3) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 249, 255, 0.6) 100%)",
  backdropFilter: "blur(20px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  margin: "2px",
  boxShadow: theme.palette.mode === "dark"
    ? "0 12px 48px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
    : "0 12px 48px rgba(0, 0, 0, 0.08)",
}));

function SideBar({ mode, darkModeHandler }) {
  const [activeItem, setActiveItem] = useState("home");

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
          zIndex: 100,
        }}
      >
        <SidebarContainer>
          <List sx={{ width: "100%" }}>
            {data.map((item, idx) => {
              return (
                <Tooltip key={item.id} title={item.title} arrow>
                  <StyledListItem disablePadding sx={{ animationDelay: `${idx * 0.1}s` }}>
                    <StyledListItemButton
                      selected={activeItem === item.id}
                      onClick={() => setActiveItem(item.id)}
                      sx={{
                        "&.Mui-selected": {
                          background: mode
                            ? "linear-gradient(135deg, rgba(0, 217, 255, 0.16) 0%, rgba(255, 0, 110, 0.08) 100%)"
                            : "linear-gradient(135deg, rgba(0, 217, 255, 0.12) 0%, rgba(255, 0, 110, 0.05) 100%)",
                          borderColor: "rgba(0, 217, 255, 0.3)",
                          color: mode ? "#dffbff" : "#0d2e3d",
                        },
                        "&.Mui-selected:hover": {
                          color: mode ? "#dffbff" : "#0d2e3d",
                        },
                      }}
                    >
                      <StyledListItemIcon>
                        {item.icon}
                      </StyledListItemIcon>
                      <ListItemText
                        primary={item.title}
                        secondary={item.subtitle}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontWeight: 600,
                            fontSize: "14px",
                            transition: "all 0.4s ease",
                            letterSpacing: "0.3px",
                          },
                          "& .MuiListItemText-secondary": {
                            fontSize: "11px",
                            lineHeight: 1.35,
                            opacity: 0.8,
                            mt: "2px",
                          },
                        }}
                      />
                    </StyledListItemButton>
                  </StyledListItem>
                </Tooltip>
              );
            })}

            <Box
              sx={{
                my: 2,
                height: "1.5px",
                background: "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)",
              }}
            />

            <StyledListItem disablePadding>
              <StyledListItemButton
                onClick={darkModeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: mode
                    ? "linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(255, 0, 110, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.02) 100%)",
                  border: mode
                    ? "1.5px solid rgba(0, 217, 255, 0.2)"
                    : "1.5px solid rgba(0, 217, 255, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <StyledListItemIcon sx={{ ml: 0 }}>
                    {mode ? (
                      <WbSunnyIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <DarkModeIcon sx={{ fontSize: "20px" }} />
                    )}
                  </StyledListItemIcon>
                  <ListItemText
                    primary={mode ? "Switch to Light" : "Switch to Dark"}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 700,
                        fontSize: "14px",
                        background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
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
                      transition: "all 0.4s ease",
                    },
                    "& .Mui-checked": {
                      color: "#00ffff",
                    },
                    "& .Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "rgba(0, 217, 255, 0.4)",
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "rgba(100, 100, 100, 0.3)",
                    },
                  }}
                />
              </StyledListItemButton>
            </StyledListItem>
          </List>
        </SidebarContainer>
      </Box>
    </Box>
  );
}

export default SideBar;

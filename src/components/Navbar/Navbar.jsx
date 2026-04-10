import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AvatarIMG from "../../assets/avatar.jpg";
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 24px",
});

const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(255, 0, 110, 0.08) 100%)"
      : "rgba(0, 217, 255, 0.05)",
  padding: "12px 18px",
  borderRadius: "14px",
  border:
    theme.palette.mode === "dark"
      ? "1.5px solid rgba(0, 217, 255, 0.3)"
      : "1.5px solid rgba(0, 217, 255, 0.2)",
  flex: 1,
  maxWidth: "500px",
  margin: "0 24px",
  backdropFilter: "blur(20px) saturate(180%)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)",
    transition: "left 0.6s ease",
  },
  "&:hover": {
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(255, 0, 110, 0.15) 100%)"
        : "rgba(0, 217, 255, 0.1)",
    borderColor: "#00d9ff",
    boxShadow: "0 0 30px rgba(0, 217, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
    "&::before": {
      left: "100%",
    },
  },
  "&:focus-within": {
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%)"
        : "rgba(0, 217, 255, 0.15)",
    borderColor: "#00ffff",
    boxShadow: "0 0 50px rgba(0, 217, 255, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "200px",
    margin: "0 10px",
  },
}));

const BadgeIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  position: "relative",
  "&:hover": {
    color: "#00ffff",
    transform: "scale(1.2) rotate(15deg)",
    textShadow: "0 0 20px rgba(0, 217, 255, 0.6)",
  },
}));

const Logo = styled(Typography)({
  fontWeight: 900,
  fontSize: "28px",
  background: "linear-gradient(135deg, #00ffff 0%, #ff006e 50%, #00ffff 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-1px",
  transition: "all 0.3s ease",
  "&:hover": {
    textShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
  },
});

const GlowingBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(255, 0, 110, 0.3)",
    animation: "pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%, 100%": {
      boxShadow: "0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(255, 0, 110, 0.3)",
    },
    "50%": {
      boxShadow: "0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(255, 0, 110, 0.5)",
    },
  },
});

function Navbar({ darkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const onOpenMenuHandler = (event) => setAnchorEl(event.currentTarget);
  const onCloseMenuHandler = () => setAnchorEl(null);

  return (
    <Box>
      <AppBar position="sticky" sx={{ top: 0, zIndex: 1200 }}>
        <StyledToolbar>
          <Logo variant="h5" sx={{ display: { xs: "none", md: "block" } }}>
            SocialHub
          </Logo>

          <IconButton
            aria-label="Open quick actions"
            sx={{
              display: { xs: "block", md: "none" },
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "28px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "rotate(20deg) scale(1.15)",
              },
            }}
          >
            <ForumIcon fontSize="large" />
          </IconButton>

          <StyledSearch>
            <SearchIcon sx={{ opacity: 0.8, color: "#00ffff" }} />
            <InputBase
              inputProps={{ "aria-label": "Search in social hub" }}
              sx={{
                width: "100%",
                "& input": {
                  fontSize: "14px",
                  fontWeight: 600,
                },
                "& input::placeholder": {
                  opacity: 0.5,
                  fontStyle: "italic",
                },
              }}
              fullWidth
              placeholder="Search creators, posts, and events..."
            />
          </StyledSearch>

          <Box gap="12px" sx={{ display: "flex", alignItems: "center" }}>
            <GlowingBadge
              sx={{ display: { xs: "none", md: "flex" } }}
              badgeContent={7}
              color="secondary"
              overlap="circular"
            >
              <BadgeIcon aria-label="Messages">
                <MailIcon />
              </BadgeIcon>
            </GlowingBadge>
            <GlowingBadge
              sx={{ display: { xs: "none", md: "flex" } }}
              badgeContent={3}
              color="secondary"
              overlap="circular"
            >
              <BadgeIcon aria-label="Notifications">
                <NotificationsIcon />
              </BadgeIcon>
            </GlowingBadge>
            <IconButton
              onClick={onOpenMenuHandler}
              aria-label="Open profile menu"
              sx={{
                p: "4px",
                ml: "12px",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  transform: "scale(1.15) rotate(-10deg)",
                },
              }}
            >
              <Avatar
                alt="User"
                src={AvatarIMG}
                sx={{
                  width: 44,
                  height: 44,
                  border: "2.5px solid",
                  borderImage: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%) 1",
                  boxShadow: "0 0 30px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={onCloseMenuHandler}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            background: darkMode
              ? "linear-gradient(135deg, rgba(17, 24, 52, 0.95) 0%, rgba(20, 30, 60, 0.8) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 255, 0.95) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: darkMode
              ? "1.5px solid rgba(0, 217, 255, 0.2)"
              : "1.5px solid rgba(0, 217, 255, 0.1)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)",
            borderRadius: "16px",
            mt: "12px",
          },
          "& .MuiMenuItem-root": {
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%)",
              color: "#00ffff",
              transform: "translateX(4px)",
            },
          },
        }}
      >
        <MenuItem onClick={onCloseMenuHandler}>Profile</MenuItem>
        <MenuItem onClick={onCloseMenuHandler}>Settings</MenuItem>
        <MenuItem onClick={onCloseMenuHandler}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;

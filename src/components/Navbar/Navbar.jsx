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
// icons
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 20px",
});

const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: theme.palette.mode === "dark" 
    ? "rgba(255, 255, 255, 0.08)" 
    : "rgba(0, 0, 0, 0.05)",
  padding: "10px 16px",
  borderRadius: "12px",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  flex: 1,
  maxWidth: "500px",
  margin: "0 20px",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.12)"
      : "rgba(0, 0, 0, 0.08)",
    borderColor: theme.palette.mode === "dark"
      ? "rgba(217, 70, 239, 0.3)"
      : "rgba(10, 126, 164, 0.2)",
  },
  "&:focus-within": {
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.1)",
    borderColor: "#d946ef",
    boxShadow: "0 0 20px rgba(217, 70, 239, 0.2)",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "200px",
    margin: "0 10px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    margin: "0",
  },
}));

const BadgeIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#d946ef",
    transform: "scale(1.1)",
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "24px",
  background: "linear-gradient(135deg, #0a7ea4 0%, #d946ef 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-0.5px",
}));

function Navbar({ darkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenMenuHandler = () => setOpenMenu(true);
  const onCloseMenuHandler = () => setOpenMenu(false);

  return (
    <Box>
      <AppBar position="sticky" sx={{ top: 0, zIndex: 1200 }}>
        <StyledToolbar>
          <Logo variant="h5" sx={{ display: { xs: "none", md: "block" } }}>
            SocialHub
          </Logo>

          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "#d946ef",
              fontSize: "28px",
            }}
          >
            <ForumIcon fontSize="large" />
          </IconButton>

          <StyledSearch>
            <SearchIcon sx={{ opacity: 0.7 }} />
            <InputBase
              sx={{
                width: "100%",
                "& input": {
                  fontSize: "14px",
                  fontWeight: 500,
                },
                "& input::placeholder": {
                  opacity: 0.6,
                  fontStyle: "italic",
                },
              }}
              fullWidth
              placeholder="Search people, posts, events..."
            />
          </StyledSearch>

          <Box gap="8px" sx={{ display: "flex", alignItems: "center" }}>
            <Badge
              sx={{ display: { xs: "none", md: "flex" } }}
              badgeContent={7}
              color="secondary"
              overlap="circular"
              variant="dot"
            >
              <BadgeIcon>
                <MailIcon />
              </BadgeIcon>
            </Badge>
            <Badge
              sx={{ display: { xs: "none", md: "flex" } }}
              badgeContent={3}
              color="secondary"
              overlap="circular"
              variant="dot"
            >
              <BadgeIcon>
                <NotificationsIcon />
              </BadgeIcon>
            </Badge>
            <IconButton
              onClick={onOpenMenuHandler}
              sx={{
                p: "4px",
                ml: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Avatar
                alt="User"
                src={AvatarIMG}
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #d946ef",
                  boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)",
                }}
              />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={onCloseMenuHandler}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            background: darkMode
              ? "rgba(26, 26, 46, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: darkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            mt: "8px",
          },
          "& .MuiMenuItem-root": {
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(217, 70, 239, 0.1)",
              color: "#d946ef",
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

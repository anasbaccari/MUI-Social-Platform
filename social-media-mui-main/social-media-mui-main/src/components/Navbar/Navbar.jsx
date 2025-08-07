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
import { blue } from "@mui/material/colors";
import AvatarIMG from "../../assets/avatar.jpg";
// icons
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "3px 10px",
  margin: "0 10px",
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    margin: "0 50px",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 150px",
  },
}));

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenMenuHandler = () => setOpenMenu(true);
  const onCloseMenuHandler = () => setOpenMenu(false);

  return (
    <Box>
      <AppBar sx={{ backgroundColor: blue["A700"] }} position="sticky">
        <StyledToolbar>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Viachat
          </Typography>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          >
            <ForumIcon fontSize="large" />
          </IconButton>

          <StyledSearch>
            <InputBase
              sx={{ color: "GrayText" }}
              fullWidth
              placeholder="Search..."
            />
          </StyledSearch>

          <Box gap="20px" sx={{ display: "flex", alignItems: "center" }}>
            <Badge
              sx={{ display: { xs: "none", md: "block" } }}
              badgeContent={7}
              color="error"
            >
              <MailIcon />
            </Badge>
            <Badge
              sx={{ display: { xs: "none", md: "block" } }}
              badgeContent={9}
              color="error"
            >
              <NotificationsIcon />
            </Badge>

            <Box>
              <IconButton onClick={onOpenMenuHandler}>
                <Avatar
                  alt="Anas Baccari"
                  src={AvatarIMG}
                  sx={{
                    width: "40px",
                    height: "40px",
                    boxShadow: "0 0 10px #444",
                  }}
                />
              </IconButton>

              <Menu
                color="primary.light"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openMenu}
                onClose={onCloseMenuHandler}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>

              <Typography sx={{ display: { md: "none" } }} variant="caption">
                Mehdi
              </Typography>
            </Box>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

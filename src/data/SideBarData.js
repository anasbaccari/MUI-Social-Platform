// icons
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const data = [
  {
    id: "home",
    title: "Home",
    subtitle: "Your personal feed",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    id: "pages",
    title: "Pages",
    subtitle: "Saved and followed pages",
    icon: <ArticleIcon />,
    path: "/pages",
  },
  {
    id: "groups",
    title: "Groups",
    subtitle: "Community updates",
    icon: <GroupIcon />,
    path: "/groups",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    subtitle: "Buy and sell quickly",
    icon: <StorefrontIcon />,
    path: "/marketplace",
  },
  {
    id: "friends",
    title: "Friends",
    subtitle: "People you know",
    icon: <PersonIcon />,
    path: "/friends",
  },
  {
    id: "settings",
    title: "Settings",
    subtitle: "Privacy and preferences",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    id: "profile",
    title: "Profile",
    subtitle: "Your public timeline",
    icon: <AccountBoxIcon />,
  },
];

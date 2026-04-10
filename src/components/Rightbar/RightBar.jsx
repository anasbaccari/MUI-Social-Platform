import { Box, styled } from "@mui/material";
import OnlineFriends from "./OnlineFriends";
import LatestPhotos from "./LatestPhotos";
import UserLists from "./UserLists";

const RightBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    textAlign: "center",
    paddingBottom: "100px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "320px",
  },
}));

function RightBar({ darkMode }) {
  return (
    <RightBarContainer
      flex="1"
      sx={{
        position: { lg: "sticky" },
        top: { lg: "80px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        <OnlineFriends />
        <LatestPhotos />
        <UserLists />
      </Box>
    </RightBarContainer>
  );
}

export default RightBar;

import { Box } from "@mui/material";
import OnlineFriends from "./OnlineFriends";
import LatestPhotos from "./LatestPhotos";
import UserLists from "./UserLists";

function RightBar() {
  return (
    <Box
      flex="1"
      sx={{
        p: { xs: "10px 10px 100px 10px", lg: "10px" },
        borderLeft: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "start" },
          textAlign: { xs: "center", lg: "start" },
        }}
        position="sticky"
        top={0}
        left={0}
      >
        <OnlineFriends />
        <LatestPhotos />
        <UserLists />
      </Box>
    </Box>
  );
}

export default RightBar;

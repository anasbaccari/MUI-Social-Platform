import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  styled,
  Tooltip,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  border: "2px solid rgba(217, 70, 239, 0.3)",
  boxShadow: "0 0 12px rgba(217, 70, 239, 0.2)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 0 24px rgba(217, 70, 239, 0.5)",
    borderColor: "rgba(217, 70, 239, 0.6)",
  },
  "& .online-indicator": {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "14px",
    height: "14px",
    backgroundColor: "#10b981",
    borderRadius: "50%",
    border: "2px solid rgba(26, 26, 46, 1)",
    boxShadow: "0 0 8px #10b981",
  },
}));

const OnlineFriendsContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  background: theme.palette.mode === "dark"
    ? "rgba(26, 26, 46, 0.6)"
    : "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: "16px",
  marginBottom: "16px",
}));

function OnlineFriends() {
  const friends = [
    { name: "Chris Evans", src: "https://i.insider.com/644956d7b81bcf00183730f1?width=700" },
    { name: "Keanu Reeves", src: "https://img.devrant.com/devrant/rant/c_3842640_QZJUe.jpg" },
    { name: "Sadie Sink", src: "https://media.glamourmagazine.co.uk/photos/645a1da4956bd7a79f28a2ea/1:1/w_1280,h_1280,c_limit/SADIE%20090523.jpg" },
    { name: "Brad Pitt", src: "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg" },
    { name: "Charlie Hunnam", src: "https://assets1.cbsnewsstatic.com/hub/i/2013/09/03/266ea9f6-20ff-11e3-9283-005056850598/173232199.jpg" },
  ];

  return (
    <OnlineFriendsContainer>
      <Typography
        variant="h6"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          marginBottom: "12px",
          background: "linear-gradient(135deg, #0a7ea4 0%, #d946ef 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        🟢 Online Now
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "start" }}>
        {friends.map((friend) => (
          <Tooltip key={friend.name} title={friend.name} arrow>
            <Box sx={{ position: "relative" }}>
              <StyledAvatar alt={friend.name} src={friend.src}>
                <div className="online-indicator" />
              </StyledAvatar>
              <FiberManualRecordIcon
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  color: "#10b981",
                  fontSize: "12px",
                  filter: "drop-shadow(0 0 4px #10b981)",
                }}
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </OnlineFriendsContainer>
  );
}

export default OnlineFriends;

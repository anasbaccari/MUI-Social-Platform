import {
  Avatar,
  Box,
  Typography,
  styled,
  Tooltip,
  keyframes,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toExperience } from "../../utils/navigation";

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.6), inset 0 0 10px rgba(16, 185, 129, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.9), inset 0 0 20px rgba(16, 185, 129, 0.2);
  }
`;

const friends = [
  { id: "friend-chris", name: "Chris Evans", src: "https://i.insider.com/644956d7b81bcf00183730f1?width=700" },
  { id: "friend-keanu", name: "Keanu Reeves", src: "https://img.devrant.com/devrant/rant/c_3842640_QZJUe.jpg" },
  { id: "friend-sadie", name: "Sadie Sink", src: "https://media.glamourmagazine.co.uk/photos/645a1da4956bd7a79f28a2ea/1:1/w_1280,h_1280,c_limit/SADIE%20090523.jpg" },
  { id: "friend-brad", name: "Brad Pitt", src: "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg" },
  { id: "friend-charlie", name: "Charlie Hunnam", src: "https://assets1.cbsnewsstatic.com/hub/i/2013/09/03/266ea9f6-20ff-11e3-9283-005056850598/173232199.jpg" },
];

const StyledAvatar = styled(Avatar)({
  width: 52,
  height: 52,
  border: "2.5px solid rgba(16, 185, 129, 0.5)",
  boxShadow: "0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 15px rgba(16, 185, 129, 0.1)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "scale(1.15) rotate(-10deg)",
    boxShadow: "0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 25px rgba(0, 217, 255, 0.2)",
    borderColor: "#00ffff",
  },
  animation: `${pulse} 2.5s ease-in-out infinite`,
});

const OnlineFriendsContainer = styled(Box)(({ theme }) => ({
  padding: "18px",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(17, 24, 52, 0.5) 0%, rgba(20, 30, 60, 0.3) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 249, 255, 0.6) 100%)",
  backdropFilter: "blur(20px) saturate(180%)",
  border:
    theme.palette.mode === "dark"
      ? "1.5px solid rgba(0, 217, 255, 0.2)"
      : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  marginBottom: "18px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 12px 48px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
      : "0 12px 48px rgba(0, 0, 0, 0.08)",
}));

function OnlineFriends() {
  const navigate = useNavigate();

  return (
    <OnlineFriendsContainer>
      <Typography
        variant="h6"
        sx={{
          fontSize: "14px",
          fontWeight: 800,
          marginBottom: "14px",
          background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Online Now
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "start" }}>
        {friends.map((friend) => (
          <Tooltip key={friend.id} title={friend.name} arrow>
            <Box
              sx={{ position: "relative", cursor: "pointer" }}
              onClick={() =>
                navigate(
                  toExperience("friend", {
                    title: friend.name,
                    context: friend.id,
                  }),
                )
              }
            >
              <StyledAvatar alt={friend.name} src={friend.src} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
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

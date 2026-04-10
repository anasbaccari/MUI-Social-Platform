import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
  Button,
  Tooltip,
  keyframes,
} from "@mui/material";

const slideIn = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const UserListContainer = styled(Box)(({ theme }) => ({
  padding: "18px",
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.5) 0%, rgba(20, 30, 60, 0.3) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 249, 255, 0.6) 100%)",
  backdropFilter: "blur(20px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  boxShadow: theme.palette.mode === "dark"
    ? "0 12px 48px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
    : "0 12px 48px rgba(0, 0, 0, 0.08)",
}));

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  padding: 0,
  "& .MuiListItem-root": {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
    borderRadius: "14px",
    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    marginBottom: "8px",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(0, 217, 255, 0.05)",
    animation: `${slideIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`,
    "&:hover": {
      backgroundColor: "rgba(0, 217, 255, 0.1)",
      borderColor: "rgba(0, 217, 255, 0.3)",
      transform: "translateX(8px)",
      boxShadow: "0 8px 24px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(0, 217, 255, 0.1)",
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  border: "2.5px solid rgba(0, 217, 255, 0.4)",
  boxShadow: "0 0 16px rgba(0, 217, 255, 0.3), inset 0 0 12px rgba(0, 217, 255, 0.1)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&:hover": {
    boxShadow: "0 0 28px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.2)",
    borderColor: "#00ffff",
    transform: "scale(1.1)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 800,
  fontSize: "12px",
  padding: "10px 16px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.08) 100%)",
  color: "#00ffff",
  border: "1.5px solid rgba(0, 217, 255, 0.3)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  letterSpacing: "0.5px",
  "&:hover": {
    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
    color: "#0a0e27",
    borderColor: "#00ffff",
    transform: "scale(1.05)",
    boxShadow: "0 8px 24px rgba(0, 217, 255, 0.4)",
  },
}));

function UserLists() {

  const chats = [
    {
      name: "Brunch this weekend?",
      to: "Mehdi Zandian",
      message: "I'll be in your neighborhood doing errands...",
      avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    },
    {
      name: "Meeting at 3pm?",
      to: "Sarah Johnson",
      message: "Don't forget about our sync call...",
      avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    },
    {
      name: "Vacation photos!",
      to: "Alex Chen",
      message: "Check out these amazing pictures from...",
      avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    },
  ];

  return (
    <UserListContainer>
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
        💬 Latest Chats
      </Typography>

      <StyledList>
        {chats.map((chat, idx) => (
          <Tooltip key={idx} title={`Message from ${chat.to}`} arrow>
            <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
              <ListItemAvatar>
                <StyledAvatar alt={chat.to} src={chat.avatar} />
              </ListItemAvatar>
              <ListItemText
                sx={{ flex: 1 }}
                primary={
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: "4px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {chat.name}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Typography
                      sx={{
                        display: "inline",
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#00ffff",
                        textShadow: "0 0 12px rgba(0, 217, 255, 0.3)",
                      }}
                      component="span"
                      variant="body2"
                    >
                      {chat.to}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="span"
                      sx={{
                        display: "block",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                        mt: "2px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {chat.message}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </Tooltip>
        ))}
      </StyledList>

      <StyledButton fullWidth sx={{ mt: "14px" }}>
        View All Messages
      </StyledButton>
    </UserListContainer>
  );
}

export default UserLists;

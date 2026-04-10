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
  Chip,
  keyframes,
} from "@mui/material";

const slideIn = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const chats = [
  {
    id: "chat-mehdi",
    title: "Brunch this weekend?",
    user: "Mehdi Zandian",
    message: "I will be in your neighborhood doing errands this afternoon.",
    avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    time: "10m",
    unread: 2,
  },
  {
    id: "chat-sarah",
    title: "Meeting at 3pm?",
    user: "Sarah Johnson",
    message: "Do not forget our sync call. I shared the agenda in chat.",
    avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    time: "35m",
    unread: 0,
  },
  {
    id: "chat-alex",
    title: "Vacation photos",
    user: "Alex Chen",
    message: "These mountain pictures came out great, sending you the best ones now.",
    avatar: "https://i.insider.com/644956d7b81bcf00183730f1?width=700",
    time: "1h",
    unread: 1,
  },
];

const UserListContainer = styled(Box)(({ theme }) => ({
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
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 12px 48px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
      : "0 12px 48px rgba(0, 0, 0, 0.08)",
}));

const StyledList = styled(List)({
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
});

const StyledAvatar = styled(Avatar)({
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
});

const StyledButton = styled(Button)({
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
});

function UserLists() {
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
        Latest Chats
      </Typography>

      <StyledList>
        {chats.map((chat) => (
          <Tooltip key={chat.id} title={`Message from ${chat.user}`} arrow>
            <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
              <ListItemAvatar>
                <StyledAvatar alt={chat.user} src={chat.avatar} />
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
                    {chat.title}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
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
                        {chat.user}
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: "11px", opacity: 0.7 }}>
                        {chat.time}
                      </Typography>
                    </Box>
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
                    {chat.unread > 0 && (
                      <Chip
                        size="small"
                        label={`${chat.unread} new`}
                        sx={{
                          mt: "6px",
                          height: "20px",
                          fontSize: "10px",
                          background: "rgba(0, 217, 255, 0.12)",
                          color: "#00ffff",
                          border: "1px solid rgba(0, 217, 255, 0.3)",
                        }}
                      />
                    )}
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

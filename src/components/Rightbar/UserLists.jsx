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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const UserListContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  background: theme.palette.mode === "dark"
    ? "rgba(26, 26, 46, 0.6)"
    : "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: "16px",
}));

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  padding: 0,
  "& .MuiListItem-root": {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "12px",
    paddingBottom: "12px",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(217, 70, 239, 0.08)",
      paddingLeft: "8px",
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 44,
  height: 44,
  border: "2px solid rgba(217, 70, 239, 0.3)",
  boxShadow: "0 0 12px rgba(217, 70, 239, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 20px rgba(217, 70, 239, 0.4)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "12px",
  padding: "6px 12px",
  borderRadius: "8px",
  backgroundColor: "rgba(217, 70, 239, 0.1)",
  color: "#d946ef",
  border: "1px solid rgba(217, 70, 239, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#d946ef",
    color: "#fff",
    borderColor: "#d946ef",
    transform: "scale(1.05)",
  },
}));

function UserLists() {
  const theme = useTheme();

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
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "text.primary",
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
                        color: "primary.main",
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
                        color: "text.secondary",
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

      <StyledButton fullWidth sx={{ mt: "12px" }}>
        View All Messages
      </StyledButton>
    </UserListContainer>
  );
}

export default UserLists;

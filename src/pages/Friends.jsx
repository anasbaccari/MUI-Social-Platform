import { Box, Card, CardContent, Avatar, Typography, styled, Button, Grid, Chip } from "@mui/material";
import { PersonAdd, PersonRemove, Message } from "@mui/icons-material";
import { useState } from "react";

const FriendCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)"
      : "0 30px 80px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 217, 255, 0.2)",
    borderColor: "#00d9ff",
  },
}));

function Friends() {
  const [friends, setFriends] = useState({});

  const people = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=20",
      mutualFriends: 12,
    },
    {
      id: 2,
      name: "Alex Chen",
      title: "Full Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=21",
      mutualFriends: 8,
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=22",
      mutualFriends: 15,
    },
    {
      id: 4,
      name: "Michael Brown",
      title: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=23",
      mutualFriends: 5,
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?img=24",
      mutualFriends: 11,
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=25",
      mutualFriends: 20,
    },
    {
      id: 7,
      name: "Nina Rodriguez",
      title: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=26",
      mutualFriends: 7,
    },
    {
      id: 8,
      name: "David Lee",
      title: "Graphic Designer",
      avatar: "https://i.pravatar.cc/150?img=27",
      mutualFriends: 9,
    },
  ];

  const toggleFriend = (id) => {
    setFriends((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box flex="3" sx={{ padding: { xs: "20px 10px", md: "20px 40px" } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 4,
          background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        👫 Friends & Connect
      </Typography>

      <Grid container spacing={3}>
        {people.map((person) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={person.id}>
            <FriendCard>
              <CardContent>
                <Avatar
                  src={person.avatar}
                  alt={person.name}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 16px",
                    border: "3px solid rgba(0, 217, 255, 0.4)",
                    boxShadow: "0 0 24px rgba(0, 217, 255, 0.3)",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7, display: "block", mb: 2 }}>
                  {person.title}
                </Typography>
                <Chip
                  label={`${person.mutualFriends} mutual friends`}
                  size="small"
                  sx={{
                    background: "rgba(0, 217, 255, 0.15)",
                    color: "#00ffff",
                    fontWeight: 600,
                    mb: 2,
                  }}
                />
                <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={friends[person.id] ? <PersonRemove /> : <PersonAdd />}
                    onClick={() => toggleFriend(person.id)}
                    sx={{
                      background: friends[person.id]
                        ? "rgba(255, 0, 110, 0.3)"
                        : "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                      color: friends[person.id] ? "#ff006e" : "#0a0e27",
                      fontWeight: 700,
                    }}
                  >
                    {friends[person.id] ? "Added" : "Add"}
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Message />}
                    sx={{
                      borderColor: "rgba(0, 217, 255, 0.4)",
                      color: "#00ffff",
                    }}
                  >
                    Chat
                  </Button>
                </Box>
              </CardContent>
            </FriendCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Friends;

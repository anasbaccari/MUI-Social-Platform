import { Box, Card, CardContent, CardHeader, Avatar, Typography, styled, Button, Grid, Chip } from "@mui/material";
import { PeopleAlt, TrendingUp } from "@mui/icons-material";

const GroupCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)"
      : "0 30px 80px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 217, 255, 0.2)",
    borderColor: "#00d9ff",
  },
}));

function Groups() {
  const groups = [
    {
      id: 1,
      name: "Web Developers Community",
      members: "12.5K",
      posts: "2,345",
      avatar: "https://i.pravatar.cc/150?img=10",
      description: "A vibrant community for web developers to share tips & tricks",
      tags: ["Development", "Web"],
    },
    {
      id: 2,
      name: "Design Professionals",
      members: "8.9K",
      posts: "1,890",
      avatar: "https://i.pravatar.cc/150?img=11",
      description: "Connect with designers and share your best work",
      tags: ["Design", "Creative"],
    },
    {
      id: 3,
      name: "Startup Founders",
      members: "15.3K",
      posts: "3,456",
      avatar: "https://i.pravatar.cc/150?img=12",
      description: "For entrepreneurs building the future",
      tags: ["Business", "Startup"],
    },
    {
      id: 4,
      name: "Digital Marketing Masters",
      members: "22.1K",
      posts: "5,234",
      avatar: "https://i.pravatar.cc/150?img=13",
      description: "Latest strategies in digital marketing and growth",
      tags: ["Marketing", "Business"],
    },
    {
      id: 5,
      name: "AI & Machine Learning",
      members: "18.7K",
      posts: "4,123",
      avatar: "https://i.pravatar.cc/150?img=14",
      description: "Explore the frontiers of artificial intelligence",
      tags: ["AI", "Tech"],
    },
    {
      id: 6,
      name: "Creative Content Creators",
      members: "31.2K",
      posts: "7,891",
      avatar: "https://i.pravatar.cc/150?img=15",
      description: "Where creators showcase and collaborate",
      tags: ["Creative", "Content"],
    },
  ];

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
        👥 Discover Groups
      </Typography>

      <Grid container spacing={3}>
        {groups.map((group) => (
          <Grid item xs={12} md={6} key={group.id}>
            <GroupCard>
              <CardHeader
                avatar={
                  <Avatar
                    src={group.avatar}
                    alt={group.name}
                    sx={{
                      width: 56,
                      height: 56,
                      border: "2.5px solid rgba(0, 217, 255, 0.4)",
                      boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                    }}
                  />
                }
                title={
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {group.name}
                  </Typography>
                }
                subheader={
                  <Box sx={{ display: "flex", gap: 2, mt: 0.5 }}>
                    <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <PeopleAlt sx={{ fontSize: 14 }} /> {group.members}
                    </Typography>
                    <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <TrendingUp sx={{ fontSize: 14 }} /> {group.posts} posts
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                  {group.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                  {group.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        background: "rgba(0, 217, 255, 0.15)",
                        color: "#00ffff",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    color: "#0a0e27",
                    fontWeight: 700,
                  }}
                >
                  Join Group
                </Button>
              </CardContent>
            </GroupCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Groups;

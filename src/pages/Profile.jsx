import { Box, Card, CardContent, Avatar, Typography, styled, Button, Grid, Chip, Divider, LinearProgress } from "@mui/material";
import { Edit, Share, Settings } from "@mui/icons-material";
import AvatarImage from "../assets/avatar.jpg";

const ProfileHeader = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  marginBottom: "24px",
}));

const StatCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.4s ease",
  textAlign: "center",
}));

function Profile() {
  const stats = [
    { label: "Posts", value: "342", color: "#00ffff" },
    { label: "Followers", value: "12.5K", color: "#ff006e" },
    { label: "Following", value: "856", color: "#00ffff" },
  ];

  const skills = [
    "UI/UX Design",
    "React",
    "Web Development",
    "JavaScript",
    "Figma",
    "CSS",
    "TypeScript",
    "Design Systems",
  ];

  const activities = [
    { action: "Posted", item: "New design showcase", time: "2 hours ago", progress: 100 },
    { action: "Liked", item: "Design inspiration post", time: "4 hours ago", progress: 75 },
    { action: "Commented on", item: "Web development thread", time: "6 hours ago", progress: 50 },
    { action: "Started following", item: "Creative Studio", time: "1 day ago", progress: 25 },
  ];

  return (
    <Box flex="3" sx={{ padding: { xs: "20px 10px", md: "20px 40px" } }}>
      {/* Profile Header */}
      <ProfileHeader>
        <CardContent>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <Avatar
              src={AvatarImage}
              alt="Profile"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto 16px",
                border: "4px solid rgba(0, 217, 255, 0.4)",
                boxShadow: "0 0 40px rgba(0, 217, 255, 0.3)",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 0.5,
                background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sarah Anderson
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>
              Product Designer & Creative Developer
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, mb: 3 }}>
              Based in San Francisco • Passionate about digital design
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                startIcon={<Edit />}
                sx={{
                  background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                  color: "#0a0e27",
                  fontWeight: 700,
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="outlined"
                startIcon={<Share />}
                sx={{
                  borderColor: "rgba(0, 217, 255, 0.4)",
                  color: "#00ffff",
                  fontWeight: 700,
                }}
              >
                Share Profile
              </Button>
              <Button
                variant="outlined"
                startIcon={<Settings />}
                sx={{
                  borderColor: "rgba(0, 217, 255, 0.4)",
                  color: "#00ffff",
                  fontWeight: 700,
                }}
              >
                Settings
              </Button>
            </Box>
          </Box>
        </CardContent>
      </ProfileHeader>

      {/* Stats */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <StatCard>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${stat.color} 0%, #ff006e 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
        ))}
      </Grid>

      {/* Skills */}
      <Card
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
              : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(30px) saturate(180%)",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1.5px solid rgba(0, 217, 255, 0.2)"
              : "1.5px solid rgba(0, 217, 255, 0.1)",
          borderRadius: "20px",
          marginBottom: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  background: "rgba(0, 217, 255, 0.15)",
                  color: "#00ffff",
                  fontWeight: 600,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
              : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(30px) saturate(180%)",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1.5px solid rgba(0, 217, 255, 0.2)"
              : "1.5px solid rgba(0, 217, 255, 0.1)",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Recent Activity
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {activities.map((activity, idx) => (
              <Box key={idx}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {activity.action} <span style={{ color: "#00ffff" }}>"{activity.item}"</span>
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.6 }}>
                    {activity.time}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={activity.progress}
                  sx={{
                    background: "rgba(0, 217, 255, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;

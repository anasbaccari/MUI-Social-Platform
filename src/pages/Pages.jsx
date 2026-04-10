import { Box, Card, CardContent, CardHeader, Avatar, Typography, styled, Button, Grid, Tooltip } from "@mui/material";
import { Share, Favorite, FavoriteBorder, Verified } from "@mui/icons-material";
import { useState } from "react";

const PageCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
    : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)"
      : "0 30px 80px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 217, 255, 0.2)",
    borderColor: "#00d9ff",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  border: "2.5px solid rgba(0, 217, 255, 0.4)",
  boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
}));

function Pages() {
  const [liked, setLiked] = useState({});

  const pages = [
    {
      id: 1,
      name: "Design Inspiration Hub",
      handle: "@designhub",
      followers: "125.4K",
      description: "Daily design trends, inspiration & resources for creative professionals",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true,
    },
    {
      id: 2,
      name: "Tech Innovations Daily",
      handle: "@techdaily",
      followers: "89.3K",
      description: "Latest technology news and breakthrough announcements",
      avatar: "https://i.pravatar.cc/150?img=2",
      verified: true,
    },
    {
      id: 3,
      name: "Creative Coding",
      handle: "@codecreative",
      followers: "76.8K",
      description: "Web development tutorials and coding best practices",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: false,
    },
    {
      id: 4,
      name: "Digital Marketing Pro",
      handle: "@marketerpro",
      followers: "234.1K",
      description: "Marketing strategies, analytics, and growth hacking tips",
      avatar: "https://i.pravatar.cc/150?img=4",
      verified: true,
    },
    {
      id: 5,
      name: "UX/UI Design Trends",
      handle: "@uiuxtrends",
      followers: "98.5K",
      description: "Explore the latest user experience and interface design trends",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true,
    },
    {
      id: 6,
      name: "Business Strategy Lab",
      handle: "@bizlab",
      followers: "156.2K",
      description: "Expert insights on scaling businesses and entrepreneurship",
      avatar: "https://i.pravatar.cc/150?img=6",
      verified: true,
    },
  ];

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
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
        📄 Discover Pages
      </Typography>

      <Grid container spacing={3}>
        {pages.map((page) => (
          <Grid item xs={12} md={6} key={page.id}>
            <PageCard>
              <CardHeader
                avatar={<StyledAvatar src={page.avatar} alt={page.name} />}
                title={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                      {page.name}
                    </Typography>
                    {page.verified && (
                      <Verified sx={{ fontSize: "18px", color: "#00ffff" }} />
                    )}
                  </Box>
                }
                subheader={
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {page.handle} • {page.followers} followers
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                  {page.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, justifyContent: "space-between", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                      color: "#0a0e27",
                      fontWeight: 700,
                    }}
                  >
                    Follow Page
                  </Button>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Tooltip title="Like">
                      <Box
                        sx={{
                          cursor: "pointer",
                          color: liked[page.id] ? "#ff006e" : "inherit",
                          transition: "all 0.3s ease",
                          "&:hover": { transform: "scale(1.2)" },
                        }}
                        onClick={() => toggleLike(page.id)}
                      >
                        {liked[page.id] ? <Favorite /> : <FavoriteBorder />}
                      </Box>
                    </Tooltip>
                    <Tooltip title="Share">
                      <Box sx={{ cursor: "pointer", transition: "all 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <Share />
                      </Box>
                    </Tooltip>
                  </Box>
                </Box>
              </CardContent>
            </PageCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Pages;

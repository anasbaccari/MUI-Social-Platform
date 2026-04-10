import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  styled,
  Tooltip,
} from "@mui/material";
import AvatarImage from "../../assets/avatar.jpg";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";

const posts = [
  {
    id: "post-1",
    author: "Sarah Anderson",
    publishedAt: "2h ago",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=480&fit=crop",
    text: "Captured this sunset while exploring side streets near the river. Travel always resets my creativity.",
    likes: "2.4K",
    comments: "342",
  },
  {
    id: "post-2",
    author: "Sarah Anderson",
    publishedAt: "4h ago",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1495704686750-30318e92e68f?w=900&h=480&fit=crop",
    text: "Quick team meetup before launch week. Great momentum and even better conversations.",
    likes: "1.8K",
    comments: "128",
  },
  {
    id: "post-3",
    author: "Sarah Anderson",
    publishedAt: "6h ago",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=900&h=480&fit=crop",
    text: "Late-night city walks are underrated. This skyline always feels like a movie set.",
    likes: "3.2K",
    comments: "456",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "650px",
  margin: "0 auto 24px",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(17, 24, 52, 0.6) 0%, rgba(20, 30, 60, 0.4) 100%)"
      : "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(30px) saturate(180%)",
  border:
    theme.palette.mode === "dark"
      ? "1.5px solid rgba(0, 217, 255, 0.2)"
      : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  overflow: "hidden",
  position: "relative",
  perspective: "1000px",
  "&:hover": {
    transform: "translateY(-12px) rotateX(2deg) rotateY(-1deg)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.2)"
        : "0 30px 80px rgba(0, 0, 0, 0.15), 0 0 60px rgba(0, 217, 255, 0.2)",
    borderColor: "#00d9ff",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, rgba(17, 24, 52, 0.8) 0%, rgba(20, 30, 60, 0.6) 100%)"
        : "rgba(255, 255, 255, 1)",
  },
}));

const StyledCardHeader = styled(CardHeader)({
  paddingBottom: "12px",
  "& .MuiCardHeader-action": {
    marginTop: 0,
    marginRight: 0,
  },
});

const StyledAvatar = styled(Avatar)({
  width: 52,
  height: 52,
  border: "2.5px solid",
  borderImage: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%) 1",
  boxShadow: "0 0 25px rgba(0, 217, 255, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.1)",
  transition: "all 0.4s ease",
  "&:hover": {
    boxShadow: "0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 25px rgba(0, 217, 255, 0.2)",
    transform: "scale(1.08)",
  },
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: "#00ffff",
    transform: "scale(1.25) rotate(20deg)",
    textShadow: "0 0 20px rgba(0, 217, 255, 0.6)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: "360px",
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, transparent 0%, rgba(0, 217, 255, 0.1) 100%)",
    opacity: 0,
    transition: "opacity 0.6s ease",
  },
  "&:hover": {
    filter: "brightness(1.1) contrast(1.1)",
    "&::after": {
      opacity: 1,
    },
  },
});

function Feed({ darkMode }) {
  const [liked, setLiked] = useState(
    Object.fromEntries(posts.map((post) => [post.id, false])),
  );

  const handleLike = (postId) => {
    setLiked((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <Box flex="3" sx={{ padding: { xs: "20px 10px 0", md: "20px 24px 0" } }}>
      {posts.map((post) => (
        <StyledCard key={post.id}>
          <StyledCardHeader
            avatar={<StyledAvatar alt={post.author} src={AvatarImage} />}
            action={
              <Tooltip title="More options" arrow>
                <StyledIconButton aria-label="Open post settings">
                  <MoreVert />
                </StyledIconButton>
              </Tooltip>
            }
            title={
              <Typography variant="body1" sx={{ fontWeight: 700, fontSize: "16px" }}>
                {post.author}
              </Typography>
            }
            subheader={
              <Typography variant="caption" sx={{ opacity: 0.7, fontSize: "12px" }}>
                {post.publishedAt} · {post.location}
              </Typography>
            }
          />
          <StyledCardMedia component="img" image={post.image} alt={post.location} loading="lazy" />
          <CardContent>
            <Typography variant="body2" sx={{ lineHeight: 1.8, fontSize: "15px", fontWeight: 500 }}>
              {post.text}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{
              padding: "12px 20px",
              gap: "16px",
              background: darkMode ? "rgba(0, 217, 255, 0.05)" : "rgba(0, 217, 255, 0.02)",
              borderTop: darkMode
                ? "1px solid rgba(0, 217, 255, 0.1)"
                : "1px solid rgba(0, 217, 255, 0.05)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Tooltip title="Like" arrow>
                <StyledIconButton
                  aria-label={`Like post from ${post.author}`}
                  onClick={() => handleLike(post.id)}
                >
                  <Checkbox
                    checked={liked[post.id]}
                    icon={<FavoriteBorder />}
                    checkedIcon={
                      <Favorite
                        sx={{
                          color: "#ff006e",
                          filter: "drop-shadow(0 0 10px #ff006e)",
                        }}
                      />
                    }
                  />
                </StyledIconButton>
              </Tooltip>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "13px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {post.likes}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Tooltip title="Comment" arrow>
                <StyledIconButton aria-label={`Comment on post from ${post.author}`}>
                  <CommentIcon />
                </StyledIconButton>
              </Tooltip>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00ffff",
                }}
              >
                {post.comments}
              </Typography>
            </Box>

            <Tooltip title="Share" arrow>
              <StyledIconButton aria-label={`Share post from ${post.author}`} sx={{ ml: "auto" }}>
                <Share />
              </StyledIconButton>
            </Tooltip>
          </CardActions>
        </StyledCard>
      ))}
    </Box>
  );
}

export default Feed;

/* eslint-disable no-unused-vars */
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

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "600px",
  margin: "0 auto 20px",
  background: theme.palette.mode === "dark"
    ? "rgba(26, 26, 46, 0.8)"
    : "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(217, 70, 239, 0.2)"
      : "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(10, 126, 164, 0.1)",
    borderColor: theme.palette.mode === "dark"
      ? "rgba(217, 70, 239, 0.4)"
      : "rgba(10, 126, 164, 0.2)",
  },
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  paddingBottom: "12px",
  "& .MuiCardHeader-action": {
    marginTop: 0,
    marginRight: 0,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  border: "2px solid rgba(217, 70, 239, 0.3)",
  boxShadow: "0 0 16px rgba(217, 70, 239, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 24px rgba(217, 70, 239, 0.4)",
    borderColor: "rgba(217, 70, 239, 0.6)",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.3s ease",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: "#d946ef",
    transform: "scale(1.15)",
  },
}));

function Feed({ darkMode }) {
  const handleLike = (event) => {
    event.stopPropagation();
  };

  return (
    <Box flex="3" sx={{ padding: { xs: "20px 10px 0", md: "20px 20px 0" } }}>
      {Array(3)
        .fill()
        .map((_, idx) => (
          <StyledCard key={crypto.randomUUID()}>
            <StyledCardHeader
              avatar={
                <StyledAvatar
                  alt="Mehdi Zandian"
                  src={AvatarImage}
                />
              }
              action={
                <Tooltip title="More options" arrow>
                  <StyledIconButton aria-label="settings">
                    <MoreVert />
                  </StyledIconButton>
                </Tooltip>
              }
              title={
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: "15px" }}
                >
                  Anas Baccari
                </Typography>
              }
              subheader={
                <Typography
                  variant="caption"
                  sx={{
                    opacity: 0.7,
                    fontSize: "12px",
                  }}
                >
                  2 hours ago · {idx === 0 ? "📍 Paris, France" : idx === 1 ? "📍 Dubai, UAE" : "📍 New York, USA"}
                </Typography>
              }
              sx={{
                "& .MuiCardHeader-title": {
                  marginBottom: "4px",
                },
              }}
            />
            <CardMedia
              component="img"
              height="350"
              image={
                idx === 0
                  ? "https://images.unsplash.com/photo-1642895106379-307f3c889f9a?w=800&h=400&fit=crop"
                  : idx === 1
                  ? "https://images.unsplash.com/photo-1495704686750-30318e92e68f?w=800&h=400&fit=crop"
                  : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              }
              alt="Post"
              sx={{
                objectFit: "cover",
                transition: "all 0.4s ease",
                "&:hover": {
                  filter: "brightness(0.95)",
                },
              }}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.7,
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {idx === 0
                  ? "✨ Just captured this stunning sunset moment! Perfect day exploring the beauty of European architecture. Who else loves travel? #wanderlust #paris"
                  : idx === 1
                  ? "🎉 Amazing weekend with the team! Nothing beats good vibes and better company. Let's keep building something great together! #teamwork #dubai"
                  : "🌟 New York energy is unbeatable! The city that never sleeps has my heart. What's your favorite NYC experience? #newyork #citylife"}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                padding: "12px 16px",
                gap: "8px",
                "& .MuiIconButton-root": {
                  padding: "8px",
                },
              }}
            >
              <Tooltip title="Like" arrow>
                <StyledIconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "#d946ef" }} />}
                  />
                </StyledIconButton>
              </Tooltip>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "13px",
                  opacity: 0.8,
                  fontWeight: 600,
                  minWidth: "30px",
                }}
              >
                {idx === 0 ? "2.4K" : idx === 1 ? "1.8K" : "3.2K"}
              </Typography>

              <Tooltip title="Comment" arrow>
                <StyledIconButton aria-label="comment">
                  <CommentIcon />
                </StyledIconButton>
              </Tooltip>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "13px",
                  opacity: 0.8,
                  fontWeight: 600,
                }}
              >
                {idx === 0 ? "342" : idx === 1 ? "128" : "456"}
              </Typography>

              <Tooltip title="Share" arrow>
                <StyledIconButton aria-label="share" sx={{ ml: "auto" }}>
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

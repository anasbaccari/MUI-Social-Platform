import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  styled,
  Tooltip,
  keyframes,
} from "@mui/material";

const photoHover = keyframes`
  0% { opacity: 0; transform: scale(0.8) rotate(-5deg); }
  50% { transform: scale(1.05) rotate(2deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`;

const PhotoContainer = styled(Box)(({ theme }) => ({
  padding: "18px",
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(17, 24, 52, 0.5) 0%, rgba(20, 30, 60, 0.3) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 249, 255, 0.6) 100%)",
  backdropFilter: "blur(20px) saturate(180%)",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "20px",
  marginBottom: "18px",
  boxShadow: theme.palette.mode === "dark"
    ? "0 12px 48px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(0, 217, 255, 0.1)"
    : "0 12px 48px rgba(0, 0, 0, 0.08)",
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  position: "relative",
  border: "2px solid rgba(0, 217, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  background: "rgba(10, 15, 39, 0.3)",
  "&:hover": {
    transform: "translateY(-8px) scale(1.08)",
    boxShadow: "0 16px 48px rgba(0, 217, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    borderColor: "#00ffff",
    "& .photo-overlay": {
      opacity: 1,
      animation: `${photoHover} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
    },
  },
  "& .photo-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 0, 110, 0.3) 0%, rgba(0, 217, 255, 0.2) 100%)",
    opacity: 0,
    transition: "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    backdropFilter: "blur(5px)",
  },
}));

function LatestPhotos() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      label: "Nature",
      emoji: "🏔️",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      label: "Mountains",
      emoji: "⛰️",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      label: "Adventure",
      emoji: "🌄",
    },
  ];

  return (
    <PhotoContainer>
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
        📸 Latest Photos
      </Typography>

      <ImageList rowHeight={120} gap={10} cols={3} sx={{ m: 0 }}>
        {photos.map((photo) => (
          <Tooltip key={photo.label} title={photo.label} arrow>
            <StyledImageListItem>
              <img
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  filter: "brightness(0.95) contrast(1.1)",
                }}
                src={photo.src}
                alt={photo.label}
              />
              <div className="photo-overlay">{photo.emoji}</div>
            </StyledImageListItem>
          </Tooltip>
        ))}
      </ImageList>
    </PhotoContainer>
  );
}

export default LatestPhotos;

import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  styled,
  Tooltip,
} from "@mui/material";

const PhotoContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  background: theme.palette.mode === "dark"
    ? "rgba(26, 26, 46, 0.6)"
    : "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: "16px",
  marginBottom: "16px",
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 24px rgba(217, 70, 239, 0.3)",
    "& .photo-overlay": {
      opacity: 1,
    },
  },
  "& .photo-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(217, 70, 239, 0.2), rgba(10, 126, 164, 0.2))",
    opacity: 0,
    transition: "opacity 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
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
        📸 Latest Photos
      </Typography>

      <ImageList rowHeight={120} gap={8} cols={3} sx={{ m: 0 }}>
        {photos.map((photo) => (
          <Tooltip key={photo.label} title={photo.label} arrow>
            <StyledImageListItem>
              <img
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
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

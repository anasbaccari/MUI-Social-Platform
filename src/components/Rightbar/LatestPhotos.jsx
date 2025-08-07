import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

function LatestPhotos() {
  return (
    <Box sx={{ mb: "20px" }}>
      <Typography
        variant="h6"
        color="text.primary"
        sx={{ opacity: "0.8", mb: "5px" }}
      >
        Latest Photots
      </Typography>

      <ImageList rowHeight={200} gap={5} cols={3}>
        <ImageListItem sx={{ borderRadius: "20px", overflow: "hidden" }}>
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1200px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg"
            alt="Nature"
          />
        </ImageListItem>

        <ImageListItem sx={{ borderRadius: "20px", overflow: "hidden" }}>
          <img
            src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg"
            alt="Nature"
          />
        </ImageListItem>

        <ImageListItem sx={{ borderRadius: "20px", overflow: "hidden" }}>
          <img
            src="https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg"
            alt="Nature"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default LatestPhotos;

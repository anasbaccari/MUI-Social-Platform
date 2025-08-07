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
} from "@mui/material";
import AvatarImage from "../../assets/avatar.jpg";

function Feed() {
  return (
    <Box flex="3" sx={{ padding: "40px 10px 0 10px" }}>
      {Array(3)
        .fill()
        .map((_) => (
          <Card
            key={crypto.randomUUID()}
            sx={{ maxWidth: "750px", mx: "auto", mb: "30px" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "red" }}
                  alt="Mehdi Zandian"
                  src={AvatarImage}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title="Anas Baccari"
              subheader="June 8, 2023"
            />
            <CardMedia
              component="img"
              height="15%"
              image="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}

export default Feed;

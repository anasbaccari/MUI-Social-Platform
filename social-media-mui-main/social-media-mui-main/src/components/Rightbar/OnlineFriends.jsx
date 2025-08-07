import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

function OnlineFriends() {
  return (
    <Box sx={{ mb: "15px" }}>
      <Typography variant="h6" color="text.primary" sx={{ opacity: "0.8" }}>
        Online Friends
      </Typography>
      <AvatarGroup sx={{ justifyContent: "start", mt: "5px" }} max={4}>
        <Avatar
          alt="Chris Evans"
          src="https://i.insider.com/644956d7b81bcf00183730f1?width=700"
        />
        <Avatar
          alt="Keanu Reeves"
          src="https://img.devrant.com/devrant/rant/c_3842640_QZJUe.jpg"
        />
        <Avatar
          alt="Sadie Sink"
          src="https://media.glamourmagazine.co.uk/photos/645a1da4956bd7a79f28a2ea/1:1/w_1280,h_1280,c_limit/SADIE%20090523.jpg"
        />
        <Avatar
          alt="Brad Pitt"
          src="https://flxt.tmsimg.com/assets/1366_v9_bc.jpg"
        />
        <Avatar
          alt="Charlie Hunnam"
          src="https://assets1.cbsnewsstatic.com/hub/i/2013/09/03/266ea9f6-20ff-11e3-9283-005056850598/173232199.jpg"
        />
      </AvatarGroup>
    </Box>
  );
}

export default OnlineFriends;

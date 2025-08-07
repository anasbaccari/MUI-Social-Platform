import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import AvatarIMG from "../assets/avatar.jpg";
// icons
import MoodIcon from "@mui/icons-material/Mood";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledUserBox = styled("div")({
  padding: "10px 0",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

function AddIcon() {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModalHandler = () => setOpenModal(true);
  const onCloseModalHandler = () => setOpenModal(false);

  return (
    <>
      <Tooltip
        onClick={onOpenModalHandler}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "15px",
          left: { xs: "calc(50% - 25px)", lg: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={openModal}
        onClose={onCloseModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "400px",
            height: "300px",
            backgroundColor: "background.default",
            p: "10px 15px",
            borderRadius: "20px",
          }}
        >
          <Typography textAlign="center" variant="h6" color="text.primary">
            Create a Post
          </Typography>

          <Divider />

          <StyledUserBox>
            <Avatar
              alt="Mehdi Zandian"
              src={AvatarIMG}
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
            <Typography component="span" color="text.primary">
              Mehdi Zandian
            </Typography>
          </StyledUserBox>

          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Box gap="5px" pt="10px">
            <IconButton>
              <MoodIcon color="primary" />
            </IconButton>
            <IconButton>
              <PermMediaIcon color="secondary" />
            </IconButton>
            <IconButton>
              <PersonAddIcon color="secondary" />
            </IconButton>
          </Box>

          <ButtonGroup
            color="success"
            variant="contained"
            sx={{ mt: "10px" }}
            fullWidth
          >
            <Button>
              <SendIcon />
            </Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default AddIcon;

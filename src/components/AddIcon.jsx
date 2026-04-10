import {
  Avatar,
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
  styled,
  Divider,
  Chip,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { useState } from "react";
import AvatarIMG from "../assets/avatar.jpg";
// icons
import MoodIcon from "@mui/icons-material/Mood";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(4px)",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  width: "95%",
  maxWidth: "540px",
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(26, 26, 46, 0.8) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "24px",
  border: theme.palette.mode === "dark"
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  maxHeight: "90vh",
  overflowY: "auto",
  animation: "slideUp 0.3s ease-out",
  "@keyframes slideUp": {
    from: {
      transform: "translateY(20px)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.02)",
    borderRadius: "12px",
    border: theme.palette.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.04)",
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)",
      borderColor: "#d946ef",
      boxShadow: "0 0 20px rgba(217, 70, 239, 0.2)",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    opacity: 0.6,
    fontStyle: "italic",
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  background: "linear-gradient(135deg, #0a7ea4 0%, #d946ef 100%)",
  boxShadow: "0 8px 24px rgba(217, 70, 239, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 12px 40px rgba(217, 70, 239, 0.5)",
    transform: "scale(1.1) rotate(90deg)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
}));

const ActionIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#d946ef",
    transform: "scale(1.15)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  borderRadius: "10px",
  background: "linear-gradient(135deg, #0a7ea4 0%, #06b6d4 100%)",
  boxShadow: "0 4px 16px rgba(10, 126, 164, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 32px rgba(10, 126, 164, 0.5)",
    transform: "translateY(-2px)",
  },
}));

const StyledUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px",
  backgroundColor: theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.02)",
  borderRadius: "12px",
  marginBottom: "16px",
}));

function AddIcon({ darkMode }) {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModalHandler = () => setOpenModal(true);
  const onCloseModalHandler = () => setOpenModal(false);
  const [postContent, setPostContent] = useState("");

  return (
    <>
      <Tooltip title="Create Post" arrow>
        <StyledFab
          onClick={onOpenModalHandler}
          color="primary"
          aria-label="create-post"
          sx={{
            position: "fixed",
            bottom: { xs: "20px", lg: "40px" },
            left: { xs: "calc(50% - 28px)", lg: "50px" },
            zIndex: 1100,
          }}
        >
          <Add />
        </StyledFab>
      </Tooltip>

      <StyledModal
        open={openModal}
        onClose={onCloseModalHandler}
        aria-labelledby="create-post-modal"
      >
        <ModalContent>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography
              id="create-post-modal"
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                background: "linear-gradient(135deg, #0a7ea4 0%, #d946ef 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ✨ Create a Post
            </Typography>
            <IconButton
              onClick={onCloseModalHandler}
              sx={{
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": { color: "#d946ef", transform: "rotate(90deg)" },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2, opacity: 0.3 }} />

          {/* User Info */}
          <StyledUserBox>
            <Avatar
              alt="User"
              src={AvatarIMG}
              sx={{
                width: 44,
                height: 44,
                border: "2px solid rgba(217, 70, 239, 0.3)",
                boxShadow: "0 0 12px rgba(217, 70, 239, 0.2)",
              }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, fontSize: "14px" }}
              >
                Sarah Anderson
              </Typography>
              <Chip
                label="Public"
                size="small"
                variant="outlined"
                sx={{
                  height: "20px",
                  fontSize: "11px",
                  mt: "2px",
                  borderColor: "rgba(217, 70, 239, 0.3)",
                  color: "#d946ef",
                }}
              />
            </Box>
          </StyledUserBox>

          {/* Text Input */}
          <StyledTextField
            multiline
            rows={4}
            fullWidth
            placeholder="What's on your mind? Share your thoughts, ideas, or moments..."
            variant="outlined"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            sx={{ mb: "16px" }}
          />

          {/* Action Icons */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              padding: "12px",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.02)",
              borderRadius: "12px",
              marginBottom: "16px",
            }}
          >
            <Tooltip title="Add Emoji" arrow>
              <ActionIcon size="small">
                <EmojiEmotionsIcon />
              </ActionIcon>
            </Tooltip>
            <Tooltip title="Add Photo" arrow>
              <ActionIcon size="small">
                <PermMediaIcon />
              </ActionIcon>
            </Tooltip>
            <Tooltip title="Tag Friends" arrow>
              <ActionIcon size="small">
                <PersonAddIcon />
              </ActionIcon>
            </Tooltip>
            <Tooltip title="Add Feeling" arrow>
              <ActionIcon size="small">
                <MoodIcon />
              </ActionIcon>
            </Tooltip>
          </Box>

          <Divider sx={{ mb: 2, opacity: 0.3 }} />

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: "12px" }}>
            <StyledButton
              fullWidth
              variant="contained"
              startIcon={<SendIcon />}
              onClick={() => {
                setPostContent("");
                onCloseModalHandler();
              }}
            >
              Share Post
            </StyledButton>
            <Button
              fullWidth
              variant="outlined"
              onClick={onCloseModalHandler}
              sx={{
                borderColor: "rgba(217, 70, 239, 0.3)",
                color: "#d946ef",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#d946ef",
                  backgroundColor: "rgba(217, 70, 239, 0.1)",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </ModalContent>
      </StyledModal>
    </>
  );
}

export default AddIcon;

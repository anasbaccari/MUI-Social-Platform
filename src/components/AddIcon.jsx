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
  keyframes,
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

const slideUp = keyframes`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% { boxShadow: 0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(255, 0, 110, 0.1); }
  50% { boxShadow: 0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(255, 0, 110, 0.2); }
`;

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  width: "95%",
  maxWidth: "560px",
  background: theme.palette.mode === "dark"
    ? "linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(20, 30, 60, 0.85) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 255, 0.94) 100%)",
  backdropFilter: "blur(30px) saturate(180%)",
  borderRadius: "24px",
  padding: "28px",
  border: theme.palette.mode === "dark"
    ? "1.5px solid rgba(0, 217, 255, 0.2)"
    : "1.5px solid rgba(0, 217, 255, 0.1)",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(0, 217, 255, 0.1)",
  maxHeight: "90vh",
  overflowY: "auto",
  animation: `${slideUp} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
    borderRadius: "4px",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(0, 217, 255, 0.05)"
      : "rgba(0, 217, 255, 0.02)",
    borderRadius: "16px",
    border: "1.5px solid rgba(0, 217, 255, 0.15)",
    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark"
        ? "rgba(0, 217, 255, 0.08)"
        : "rgba(0, 217, 255, 0.04)",
      borderColor: "rgba(0, 217, 255, 0.3)",
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette.mode === "dark"
        ? "rgba(0, 217, 255, 0.1)"
        : "rgba(0, 217, 255, 0.06)",
      borderColor: "#00ffff",
      boxShadow: "0 0 24px rgba(0, 217, 255, 0.3), inset 0 1px 0 rgba(0, 217, 255, 0.1)",
    },
  },
  "& .MuiInputBase-input": {
    color: "inherit",
    fontSize: "15px",
    fontWeight: 500,
    "&::placeholder": {
      opacity: 0.5,
      fontStyle: "italic",
      color: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
    },
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  background: "linear-gradient(135deg, #00ffff 0%, #ff006e 50%, #00ffff 100%)",
  boxShadow: "0 12px 40px rgba(0, 217, 255, 0.4), 0 0 60px rgba(255, 0, 110, 0.2)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  animation: `${pulse} 3s ease-in-out infinite`,
  "&:hover": {
    boxShadow: "0 16px 60px rgba(0, 217, 255, 0.6), 0 0 80px rgba(255, 0, 110, 0.3)",
    transform: "scale(1.15)",
    filter: "drop-shadow(0 0 20px rgba(255, 0, 110, 0.4))",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
}));

const ActionIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "rgba(0, 255, 255, 0.7)" : "rgba(0, 100, 120, 0.6)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  borderRadius: "12px",
  padding: "8px",
  "&:hover": {
    color: "#00ffff",
    background: "rgba(0, 217, 255, 0.15)",
    transform: "scale(1.2) rotate(10deg)",
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 700,
  borderRadius: "14px",
  fontSize: "14px",
  padding: "12px 24px",
  background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
  boxShadow: "0 8px 32px rgba(0, 217, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  color: "#0a0e27",
  letterSpacing: "0.5px",
  "&:hover": {
    boxShadow: "0 12px 48px rgba(0, 217, 255, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
    transform: "translateY(-3px)",
    filter: "brightness(1.1) saturate(120%)",
  },
  "&:active": {
    transform: "translateY(-1px)",
  },
}));

const StyledUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "14px",
  backgroundColor: theme.palette.mode === "dark"
    ? "rgba(0, 217, 255, 0.05)"
    : "rgba(0, 217, 255, 0.03)",
  border: "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "16px",
  marginBottom: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "rgba(0, 217, 255, 0.2)",
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(0, 217, 255, 0.08)"
      : "rgba(0, 217, 255, 0.05)",
  },
}));

const ActionIconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  padding: "14px",
  backgroundColor: theme.palette.mode === "dark"
    ? "rgba(0, 217, 255, 0.05)"
    : "rgba(0, 217, 255, 0.03)",
  border: "1.5px solid rgba(0, 217, 255, 0.1)",
  borderRadius: "16px",
  marginBottom: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "rgba(0, 217, 255, 0.2)",
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(0, 217, 255, 0.08)"
      : "rgba(0, 217, 255, 0.05)",
  },
}));

function AddIcon() {
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
              marginBottom: "18px",
            }}
          >
            <Typography
              id="create-post-modal"
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: "20px",
                background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              Create a Post
            </Typography>
            <IconButton
              onClick={onCloseModalHandler}
              sx={{
                color: "#00ffff",
                transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  color: "#ff006e",
                  transform: "rotate(90deg) scale(1.2)",
                  boxShadow: "0 0 20px rgba(255, 0, 110, 0.4)",
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider
            sx={{
              mb: 2.5,
              background: "linear-gradient(135deg, rgba(0, 217, 255, 0.3) 0%, rgba(255, 0, 110, 0.3) 100%)",
              opacity: 0.5,
            }}
          />

          {/* User Info */}
          <StyledUserBox>
            <Avatar
              alt="User"
              src={AvatarIMG}
              sx={{
                width: 48,
                height: 48,
                border: "2.5px solid rgba(0, 217, 255, 0.4)",
                boxShadow: "0 0 16px rgba(0, 217, 255, 0.3), inset 0 0 12px rgba(0, 217, 255, 0.1)",
              }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, fontSize: "15px", background: "linear-gradient(135deg, #00ffff 0%, #ff006e 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Sarah Anderson
              </Typography>
              <Chip
                label="Public"
                size="small"
                variant="outlined"
                sx={{
                  height: "22px",
                  fontSize: "11px",
                  mt: "3px",
                  borderColor: "rgba(0, 217, 255, 0.4)",
                  color: "#00ffff",
                  background: "rgba(0, 217, 255, 0.08)",
                  fontWeight: 700,
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
          <ActionIconsBox>
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
          </ActionIconsBox>

          <Divider
            sx={{
              mb: 2.5,
              background: "linear-gradient(135deg, rgba(0, 217, 255, 0.3) 0%, rgba(255, 0, 110, 0.3) 100%)",
              opacity: 0.5,
            }}
          />

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
                borderColor: "rgba(0, 217, 255, 0.4)",
                color: "#00ffff",
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "14px",
                padding: "12px",
                transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                border: "1.5px solid rgba(0, 217, 255, 0.4)",
                "&:hover": {
                  borderColor: "#00ffff",
                  backgroundColor: "rgba(0, 217, 255, 0.15)",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                  transform: "translateY(-2px)",
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


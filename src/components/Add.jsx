import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Box, Stack } from "@mui/system";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 5,
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <IconButton onClick={() => setOpen(true)}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "60%" },
            height: { xs: "70%", sm: "60%" },
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 5,
            opacity: 0.9,
            p: 3,
          }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            {" "}
            Add New Post{" "}
          </Typography>
          <UserBox>
            <Avatar />
            <Typography variant="span" fontWeight="500">
              {" "}
              User Name
            </Typography>
          </UserBox>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={5}
            placeholder="Tell me what you think"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <Image />
            <VideoCameraBack />
            <PersonAdd />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ width: "80%" }}>Post</Button>
            <Button sx={{ width: "20%" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

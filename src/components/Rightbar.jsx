import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import imageList from "../assets/imageList";
import ConversationList from "./ConversationList";

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width="300px">
        <Typography margin="30px 0" fontWeight="300" mt={2} mb={2}>
          {" "}
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography fontWeight="300" mt={2} mb={2}>
          {" "}
          Latest Images
        </Typography>

        <ImageList gap={5} cols={3} rowHeight={100}>
          {imageList.slice(0, 3).map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography fontWeight="300" mt={2} mb={2}>
          {" "}
          Conversations
        </Typography>
        <ConversationList />
      </Box>
    </Box>
  );
};

export default Rightbar;

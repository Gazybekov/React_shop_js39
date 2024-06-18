import { Box, Modal } from "@mui/material";
import React from "react";

const Detail = ({ elem, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div>
          <img width={300} src={elem.image} alt="" />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}</p>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;

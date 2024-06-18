import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteProduct } = useProduct();
  return (
    <Card
      sx={{
        height: 650,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent
        sx={{
          padding: "20px 5px 0px 5px",
          display: "flex",
          height: 300,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontSize="20" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.price}kgs
        </Typography>
        <Typography color="gray" fontSize="24px" fontWeight={700}>
          {elem.description}
        </Typography>
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          onClick={() => deleteProduct(elem.id)}
        >
          Delete
        </Button>
        <Button
          onClick={() => navigate(`/edit/${elem.id}`)}
          variant="outlined"
          color="primary"
          size="medium"
        >
          Edit
        </Button>
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProductCard;

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>SubPrice</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((elem) => (
            <TableRow
              key={elem.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component={"th"} scope="row">
                <img src={elem.item.image} alt="" width={70} />
              </TableCell>
              <TableCell>{elem.item.title}</TableCell>
              <TableCell>{elem.item.category}</TableCell>
              <TableCell>{elem.item.price}</TableCell>
              <TableCell>
                <input
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={elem.count}
                />
              </TableCell>
              <TableCell>{elem.subPrice}</TableCell>
              <TableCell>
                <Button>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;

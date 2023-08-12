import {
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./Reducer/InventorySlice";

const AddProducts = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: "",
    department: "",
    sku: "",
    description: "",
    stock: "",
    price: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormValues(formValues);
    dispatch(addData(formValues));
  };
  return (
    <Container
      style={{
        paddingTop: "75px 150px",
      }}
    >
      <form noValidate onSubmit={handleSubmit}>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your name"
            label="Deparment"
            name="department"
            variant="outlined"
            onChange={handleChange}
            error={formValues.name.error}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your name"
            label="Description"
            name="description"
            variant="outlined"
            required
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="Price"
            name="price"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your name"
            label="Stock"
            name="stock"
            variant="outlined"
            onChange={handleChange}
            error={formValues.name.error}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="SKU"
            name="sku"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="Supplier"
            name="supplier"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="Delivered"
            name="delivered"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <TextField
            placeholder="Enter your age"
            label="Image Url"
            name="imageUrl"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <Button type="submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddProducts;

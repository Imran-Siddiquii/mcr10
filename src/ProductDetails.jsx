import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.dataList);
  const [details, setDetails] = useState();

  useEffect(() => {
    const productDetail = data.find((ele) => ele.id == id);
    setDetails(productDetail);
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop:"110px"
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`${details?.imageUrl}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details?.name}
          </Typography>
          <Typography variant="body2" color="text">
            Price : {details?.price}
          </Typography>
          <Typography variant="body2" color="text">
            Stock : {details?.stock}
          </Typography>
          <Typography variant="body2" color="text">
            Supplier : {details?.supplier}
          </Typography>
          <Typography variant="body2" color="text">
            Department : {details?.department}
          </Typography>
          <Typography variant="body2" color="text">
            SKU : {details?.sku}
          </Typography>
          <Typography variant="body2" color="text">
            Deliverd : {details?.delivered}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description : {details?.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;

import { Box, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const { data } = useSelector((state) => state.dataList);
  const summary = data?.reduce(
    (accumulator, item) => {
      accumulator.totalStock += item.stock;
      accumulator.totalDelivered += item.delivered;

      if (item.stock <= 10) {
        accumulator.lowStockItems.push(item);
      }

      return accumulator;
    },
    { totalStock: 0, totalDelivered: 0, lowStockItems: [] }
  );
  const resultArray = [
    { item: "Total Stock", value: summary?.totalStock, color: "green" },
    {
      item: "Total Delivered",
      value: summary?.totalDelivered,
      color: "yellow",
    },
    {
      item: "Low Stock Count",
      value: summary?.lowStockItems.length,
      color: "red",
    },
  ];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "60px 15px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {resultArray.map((item, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Item>
                <h2 style={{ color: `${item.color}` }}>{item.value}</h2>
                <h4>{item.item}</h4>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;

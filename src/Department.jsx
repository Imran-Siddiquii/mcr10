import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Department = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.dataList);

  const uniqueDepartments = [...new Set(data.map((item) => item.department))];
  return (
    <div style={{ marginLeft: "275px" }}>
      {" "}
      <Box sx={{ flexGrow: 1 }} style={{ padding: "60px 15px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {uniqueDepartments.map((item, index) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
              onClick={() => navigate(`/products/?q=${item}`)}
            >
              <Item>
                <h2>{item}</h2>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Department;

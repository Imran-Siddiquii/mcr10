import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.dataList);
  const [sort, setSort] = useState(data);
  const [department, setDepartment] = useState("");
  const [accending, setAccending] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let name = params.get("q");
    if (name) {
      setSort((pre) => pre.filter((ele) => ele.department === name));
    } else {
      setSort(data);
    }
  }, [location]);
  const uniqueDepartments = [...new Set(data.map((item) => item.department))];

  const handleChangeDepartment = (event) => {
    const { value } = event.target;
    setSort(() => {
      const findValue = data.find((item) => item.department === value);
      return findValue ? data.filter((ele) => ele?.department === value) : data;
    });
    setDepartment(value);
    setAccending("");
    setCheckValue(false);
  };
  const handleChangeAccending = (event) => {
    const { value } = event.target;
    let sortedData;
    if (value === "name") {
      sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedData = [...data].sort((a, b) => a[value] - b[value]);
    }
    setSort(sortedData);
    setAccending(value);
    setDepartment("");
    setCheckValue(false);
  };

  const handleLowStock = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCheckValue(true);
      setSort((pre) => data.filter((ele) => ele.stock <= 10));
    } else {
      setCheckValue(false);

      setSort(data);
    }
  };
  return (
    <div style={{ marginLeft: "260px", padding: "75px 30px" }}>
      <TableContainer
        component={Paper}
        style={{ height: "75vh", overflow: "auto" }}
      >
        <Table sx={{ Width: 650 }} size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="start" style={{ fontSize: "30px" }}>
                Products
              </TableCell>
              <TableCell align="center">
                <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                  <InputLabel id="demo-select-small-label">
                    Department
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={department}
                    label="Department"
                    onChange={handleChangeDepartment}
                  >
                    <MenuItem>All Department</MenuItem>
                    {uniqueDepartments.map((depart) => (
                      <MenuItem value={depart}>{depart}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={checkValue} />}
                    onChange={handleLowStock}
                    label="Low Stock Items"
                  />
                </FormGroup>
              </TableCell>
              <TableCell align="center">
                <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                  <InputLabel id="demo-select-small-label">Name</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={accending}
                    label="Name"
                    onChange={handleChangeAccending}
                  >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="stock">Stock</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => navigate("/add-product")}
                >
                  Add New
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Image
              </TableCell>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Name
              </TableCell>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Descriptions
              </TableCell>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Price
              </TableCell>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Stock
              </TableCell>
              <TableCell style={{ fontSize: "20px", fontWeight: 700 }}>
                Supplier
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sort.map((row) => (
              <TableRow
                key={row.name}
                onClick={() => navigate(`/product/${row.id}`)}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={`${row.imageUrl}`}
                    width={200}
                    height={120}
                    alt={`${row.imageUrl}`}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.supplier}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;

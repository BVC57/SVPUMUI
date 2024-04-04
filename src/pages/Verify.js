import React from "react";
import { styled, alpha } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import "../Styles/Verify.css";
import Table from '../pages/Table';
const Verify = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"1px solid gray",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft:0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <div className="vmain">
      <div className="vtophead">
        <Typography variant="h6">Credential</Typography>
        <Button
          variant="contained"
          style={{
            marginLeft: "50px",
          }}>
          Verifie New Credential
        </Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className="vtable">
          <Table/>
      </div>
    </div>
  );
};

export default Verify;

import {Link} from "react-router-dom";
import styled from "styled-components";
import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Stack from '@mui/material/Stack';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                <Stack direction="row" spacing={2}>
                    <Link to="/">
                        <Button color="primary" variant="contained" size="large"> Home </Button>
                    </Link>

                    <Link to="/about">
                        <Button color="primary" variant="contained" size="large"> About </Button>
                    </Link>

                    <Link to="/photos">
                        <Button color="primary" variant="contained" size="large"> Photos</Button>
                    </Link>
                    </Stack>
                </div>
            </nav>

            

        </div>
    );
}

export default Navbar;
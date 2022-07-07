import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './NavBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categorias = ["Budines", "Combos", "Tartas"]

  return (
    <AppBar position="static" className="header-primary">
      <Toolbar className="color">
        <div className="container-logo">
        <Link to="/">
          <img src="/logo.png"></img>
          </Link>
        </div>

        <ul className='navbar'>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              aria-haspopup="true"
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              Productos
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {categorias.map((cat)=>{
                return <MenuItem onClick={handleClose}><Link to={`/products/${cat}`}>{cat}</Link></MenuItem>
              })}
            </Menu>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/FAQ">Preguntas Frecuentes</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/nosotros">Nosotros</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/contact">Contacto</Link>
            </Button>
          </li>
          <Button>

          </Button>
        </ul>
        <CartWidget/>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
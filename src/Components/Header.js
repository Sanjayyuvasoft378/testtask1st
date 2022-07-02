import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
  
export default function Header() {
  const user_token = localStorage.getItem("Token");
  const navigater = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
             
           
          </IconButton>
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <>
          { user_token ?
          <>
          <Button color="inherit" onClick={()=>navigater('/home')}>Home</Button>
          <Button color="inherit" onClick={()=>navigater('/dashboard')}>Dashboard</Button>
          <Button color="inherit" onClick={()=>navigater('/about')}>AboutUs</Button>
          <Button color="inherit" onClick={()=>navigater('/contact')}>ContactUs</Button>
          <Button color="inherit" onClick={()=>navigater('/logout')}>Logout</Button>
          </>
          :
          <>
          <Button color="inherit" onClick={()=>navigater('/home')}>Home</Button>
          <Button color="inherit" onClick={()=>navigater('/')}>Login</Button>
          <Button color="inherit" onClick={()=>navigater('/registration')}>Registration</Button>
          <Button color="inherit" onClick={()=>navigater('/about')}>AboutUs</Button>
          </>
}
</>
        </Toolbar>
      </AppBar>
      </div>
  );
}
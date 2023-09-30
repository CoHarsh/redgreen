import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);



  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      // onLogin({ email, password });
      const rguser = {
        email: email,
        password: password,
        collge:"daiictpc"
      }
      localStorage.setItem('rg-user',JSON.stringify(rguser));
      //redirect to localhost:3000/collge
      window.location.href = `${rguser.collge}`;
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        error={loginError && !email.trim()}
        helperText={loginError && "Email is required"}
      />
      <TextField
        margin="dense"
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        error={loginError && !password.trim()}
        helperText={loginError && "Password is required"}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: "20px" }}
      >
        Login
      </Button>
    </div>
  );
};

export default UserLogin;

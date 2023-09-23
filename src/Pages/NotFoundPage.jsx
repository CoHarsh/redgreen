import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="85vh"
      >
        <ErrorOutlineIcon
          color="error"
          sx={{ fontSize: "6rem", marginBottom: "16px" }}
        />
        <Typography variant="h3" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for might have been removed or does not
          exist.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go to Home
        </Button>
      </Box>
      <Box textAlign="center" mt={4}>
        <Typography variant="caption" color="textSecondary">
          Need assistance? Contact us at{" "}
          <Link href="mailto:harshmp492@gmail.com">harshmp492@gmail.com</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFoundPage;

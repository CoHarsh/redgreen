import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const Examples = (props) => {
  return (
    <>
      <DemoPaper
        variant="elevation"
        sx={{
          width: "95%",
          height: "auto",
          padding: "0",
          paddingBottom: "3rem",
        }}
      >
        <Box
          mt={0}
          sx={{
            backgroundColor: "#08203d17",
            textAlign: "left",
            padding: "0.5rem 0 0.5rem 2rem",
          }}
        >
          Examples:
        </Box>
        {props.examples.map((example)=>{
           return <>
        <Box
          mt={0}
          sx={{
            textAlign: "left",
            padding: "0.5rem 2rem 0.5rem 2rem",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            input
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              width: "98%",
              borderRadius: "5px",
              padding: "10px",
              fontFamily:"monospace"
            }}
            style={{ whiteSpace: "pre-line" }}
          >
            {example.input}
          </Typography>
        </Box>
        <Box
          mt={0}
          sx={{
            textAlign: "left",
            padding: "0.5rem 2rem 0.5rem 2rem",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            output
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              width: "98%",
              borderRadius: "5px",
              padding: "10px",
              fontFamily:"monospace"
            }}
            style={{ whiteSpace: "pre-line" }}
          >
            {example.output}
          </Typography>
        </Box>
        </>
        })}
        
      </DemoPaper>
    </>
  );
};

export default Examples;

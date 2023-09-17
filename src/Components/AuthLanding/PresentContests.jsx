import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Chip from '@mui/material/Chip';

const columns = [
  {
    field: "contestname",
    headerName: "Name",
    width: 260,
    sortable:false,
    editable: false,
  },
  {
    field: "writesname",
    headerName: "Writers",
    width: 200,
    sortable:false,
    editable: false,
  },
  {
    field: "length",
    headerName: "Length",
    width: 100,
    sortable: false,
    editable: true,
  },
  {
    field: "starttime",
    headerName: "Start",
    description: "Show the start time of the contest",
    sortable: false,
    editable:false,
    width: 180,

  },
  {
    field:"registered",
    headerName: "Register",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable:false,
    width: 130,
    renderCell: (params) => {
        const isRejected = params.value === false;
        const label = isRejected ? "Register Now" : "Registred";
        return <Chip  label={label}  color={isRejected ? "error" : "success"} />;
    }
  }
];

const rows = [
    {
      "id": 1,
      "writesname": "John Doe",
      "contestname": "Coding Challenge 1",
      "starttime": "2023-09-17T10:00:00Z",
      "length": "2 hours",
      "registered": true
    },
    {
      "id": 2,
      "writesname": "Jane Smith",
      "contestname": "Algorithm Contest",
      "starttime": "2023-09-18T14:30:00Z",
      "length": "1.5 hours",
      "registered": true
    },
    {
      "id": 3,
      "writesname": "Alice Johnson",
      "contestname": "CodeJam",
      "starttime": "2023-09-19T09:15:00Z",
      "length": "3 hours",
      "registered": false
    },
    {
      "id": 4,
      "writesname": "Bob Williams",
      "contestname": "Python Challenge",
      "starttime": "2023-09-20T11:45:00Z",
      "length": "2.5 hours",
      "registered": true
    },
    {
      "id": 5,
      "writesname": "Eva Brown",
      "contestname": "Java Coding Contest",
      "starttime": "2023-09-21T08:00:00Z",
      "length": "2 hours",
      "registered": false
    },
    {
      "id": 6,
      "writesname": "David Lee",
      "contestname": "Programming Olympics",
      "starttime": "2023-09-22T13:00:00Z",
      "length": "4 hours",
      "registered": true
    },
    {
      "id": 7,
      "writesname": "Sophia White",
      "contestname": "Web Development Challenge",
      "starttime": "2023-09-23T16:30:00Z",
      "length": "2.5 hours",
      "registered": false
    },
    {
      "id": 8,
      "writesname": "Oliver Davis",
      "contestname": "Mathematics Olympiad",
      "starttime": "2023-09-24T09:30:00Z",
      "length": "3 hours",
      "registered": true
    },
    {
      "id": 9,
      "writesname": "Emma Martin",
      "contestname": "AI Hackathon",
      "starttime": "2023-09-25T12:15:00Z",
      "length": "5 hours",
      "registered": true
    },
    {
      "id": 10,
      "writesname": "William Johnson",
      "contestname": "Data Science Challenge",
      "starttime": "2023-09-26T15:00:00Z",
      "length": "2.5 hours",
      "registered": false
    }
  ]
  
  

export default function PresentContests() {
  return (
    <div>
        <h1 >Current or upcoming contests</h1>
        <Box sx={{ height: "auto", width: "100%" }}>
        <DataGrid
            rows={rows}
            columns={columns}
            // checkboxSelection
            disableRowSelectionOnClick
            hideFooter="true"
            disableColumnMenu={true} 
            className="subtitle-font-1"
        />
        </Box>
    </div>
  );
}

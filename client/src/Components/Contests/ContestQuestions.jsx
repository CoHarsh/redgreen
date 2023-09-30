import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from "react-router-dom";

const ContestQuestions = () => {
    const columns = [
        {
            field: 'questionname',
            headerName: 'Question names',
            sortable:false,
            editable: false,
            width: 600,
            headerAlign: 'center',
            renderCell: (params)=>{
                return (
                    <span>
                        <Link to={params.row.id} className="link-styling">
                            {params.value}
                        </Link>
                    </span>
                )
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable:false,
            editable: false,
            width: 100,
            renderCell: (params) => {
                let color = 'white'
                if(params.value == 'done'){
                    color = '#7af5a5'
                }else if(params.value == 'attended'){
                    color = "#f57a89";
                }else{
                    color = 'white';
                }
                return <div style={{width:"100%",height:"100%",backgroundColor: color}} className="flex-center-center">
                    {params.value}
                </div>
            }
        },
        {
            field: 'totalsubmittion',
            headerName: 'Submittion',
            sortable:false,
            editable: false,
            width: 100,
            headerAlign: 'center',
            renderCell: (params) => {
                return <div className="flex-center-center-row">
                    <ArrowUpwardIcon></ArrowUpwardIcon>
                    <span style={{width:'10px'}}></span>
                    <span>X {params.value}</span>
                </div>
            }
        }
    ];

    const rows = [
        {
            id:'1',
            questionname: 'Question 1',
            status: 'Pending',
            totalsubmittion: 10
        },
        {
            id:'2',
            questionname: 'Question 2',
            status: 'attended',
            totalsubmittion: 10
        },
        {
            id:'3',
            questionname: 'Question 3',
            status: 'done',
            totalsubmittion: 10
        }
    ];
    return (
        <div className="listing-container card-shadow">
            <h1>Contest Name</h1>
            <Box sx={{ height: "auto", width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter="true"
                    disableColumnMenu={true} 
                    className="subtitle-font-1"
                />
        </Box>
        </div>
    );
};

export default ContestQuestions;
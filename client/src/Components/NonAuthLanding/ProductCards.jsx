import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

export default function ProductCards(props) {
  return (
    <Box className="card-props">
      <Card className='card-shadow rounded-10'>
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div" className='card-font-title align-center'>
                    <CloudDoneIcon style={{marginRight:"1rem"}}></CloudDoneIcon>
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 ,mt : 3}} color="text.secondary" className='card-font-subtitle'>
                    {props.description}
                </Typography>
            </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
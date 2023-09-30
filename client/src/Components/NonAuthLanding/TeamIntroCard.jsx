import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


export default function TeamIntroCard(props) {

  return (
    <Card className="card-shadow rounded-10">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        title={props.name}
        subheader={props.subheading}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{fontSize:'1.1rem'}}>
            {props.responsibilty}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SP_Card = ({title,content,BG_Color,Color,B_Radius}) => {

  return (
    <Card sx={{ display: 'flex',justifyContent:'center',cursor:'pointer',alignItems:'center',backgroundColor:BG_Color,height:'100%',color:Color,borderRadius:B_Radius }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {content}
          </Typography>
        </CardContent>
      </Box>
      
    </Card>
  );
}

export default SP_Card;


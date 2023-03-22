import {Grid, Card, CardContent,styled,Box,Chip,Typography} from '@mui/material';
const UserImg = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  height: 80,
  width: 80,
  objectFit: 'cover',
  objectPosition: 'top center'
}));

const CardElement = ({user}) => {
    const { img, name, role} = user; 
    return(
      <Card variant="outlined">
        <CardContent>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <UserImg component="img" src={`${process.env.PUBLIC_URL}/img/${img}`} alt="" />
            <Box sx={{ml: 2}} align="left">
                <Chip label={role}/>
                <Typography variant="h6">
                  {name}
                </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    )
}

export default CardElement;
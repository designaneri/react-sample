import {
  Grid,
  Card,
  CardContent,
  styled,
  Box,
  Chip,
  Typography,
} from '@mui/material';
import CardElement from '../card/card.component';

const CardList = ({ users }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => {
        return (
          <Grid item xs={4} key={user.id}>
            <CardElement user={user} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;

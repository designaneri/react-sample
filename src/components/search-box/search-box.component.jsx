import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Box,
  Grid,
  InputLabel
} from '@mui/material';

const SearchBox = (props) => {
  const { placeholder, onChangeHandler, role, onSelectHandler } = props;
  const options = [
    {value: 'All', label: 'All'},
    {value: 'Business Analyst', label: 'Business Analyst'},
    {value: 'Software Developer', label: 'Software Developer'}
  ];
  return (
    <Box>
      <Grid container spacing={2}>

      <Grid item xs={6} md={8}>
        <FormControl
          fullWidth={true}
          margin='dense'
          variant='filled'
          sx={{ mb: 2, background: 'white' }}
        >
          <TextField
            variant='outlined'
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl  fullWidth={true} margin='dense' sx={{ mb: 2, background: 'white' }}>
        <InputLabel>Role</InputLabel>
          <Select label="Role" defaultValue='All' variant='outlined' options={options} value={role} onChange={onSelectHandler}>
            <MenuItem value='All'>All</MenuItem>
            <MenuItem value='Business Analyst'>Business Analyst</MenuItem>
            <MenuItem value='Software Developer'>Software Developer</MenuItem>
          </Select>
        </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBox;

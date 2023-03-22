import { useEffect, useState } from 'react';
import {Container,Typography} from '@mui/material';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [myUser, setMyUser] = useState([]);
  // filtered users
  const [filteredUsers, setFilteredUsers] = useState(myUser);
  // Filter User Role
  // value filled in use state will help set the default value of the select
  const [filterRole, setFilterRole] = useState('All');

  useEffect(() => {
    fetch('http://127.0.0.1:5501/src/data.json')
      .then((response) => response.json())
      .then((user) => setMyUser(user));
  }, []);

  useEffect(() => {
    const newFilteredUsers = myUser.filter((user) => {
      const userNameMatch = user.name.toLocaleLowerCase().includes(searchString);
      const roleMatch = filterRole === 'All' || user.role === filterRole;
      return userNameMatch && roleMatch;
    });
    setFilteredUsers(newFilteredUsers);
  }, [myUser, searchString, filterRole]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  };
  const handleFilterChange = (event) => {
    setFilterRole(event.target.value);
  };

  return (
    <div className='App'>
       <Container fixed>
        <Typography variant="h5" sx={{mb:3, mt:3}}>Search & Filter User Cards</Typography>
        <SearchBox
          placeholder='search new users'
          onChangeHandler={onSearchChange}
          onSelectHandler={handleFilterChange}
          role={filterRole}
        />
        <CardList users={filteredUsers} />
      </Container>
    </div>
  );
};
export default App;

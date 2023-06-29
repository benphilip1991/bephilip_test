import Container from '@mui/material/Container'
import { UserTable } from '../../components/UserTable';
import { SearchBar } from "../../components/SearchBar";

const LandingPage = () => {
  return (
      <Container>
        <SearchBar data-testid="search-bar" />
        <UserTable data-testid="user-table" />
      </Container>
  );
}

export default LandingPage;

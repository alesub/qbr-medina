import { Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import { shadows } from '@mui/system';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container className="MainContainer" maxWidth="lg" sx={{ boxShadow: 3 }}>

      </Container>
    </div>
  );
}

export default App;

import { Container } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container className="MainContainer" maxWidth="lg" sx={{ boxShadow: 3 }}>
        <ItemListContainer></ItemListContainer>
      </Container>
    </div>
  );
}

export default App;

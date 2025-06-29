import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./pages/homepage";
import Destinations from "./pages/Destinations";
import Trips from "./pages/Trips";
import Contacts from "./pages/Contacts";
import Footer from "./components/common/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: `#388e3c`,
    },
    secondary: {
      main: `#1b5e20`,
    },
    background: {
      default: `#c8e6c9`,
    },
    text: {
      primary: `#1a1a1a`,
      secondary: `#e8f5e9`,
    },
  },
  typography: {
    body1: {
      fontFamily: `"Roboto", sans-serif`,
      fontSize: `.8rem`,
    },
    h2: {
      fontFamily: `"Fleur De Leah", cursive`,
    },
    h4: {
      fontFamily: `"IBM Plex Serif", serif`,
      fontSize: `1.5rem`,
    },
    h3: {
      fontFamily: `"IBM Plex Serif", serif`,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    </ThemeProvider>
  );
};

export default App;

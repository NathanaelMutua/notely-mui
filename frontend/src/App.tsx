import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

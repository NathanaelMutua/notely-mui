import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import DefaultFooter from "./components/DefaultFooter";
import Protected from "./components/RouteProtector";
import MyNotesPage from "./pages/MyNotesPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route
              path="/notes"
              element={
                <Protected>
                  <MyNotesPage />
                </Protected>
              }
            />
          </Routes>
          <DefaultFooter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

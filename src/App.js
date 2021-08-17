import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./pageContent";
import ThemeProvider from "./contexts/ThemeContext";
import LanguageProvider from "./contexts/LanguageContexts";

function App() {
  
    return (
      
      <ThemeProvider>
        <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
}

export default App;

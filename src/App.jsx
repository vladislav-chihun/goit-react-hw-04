import { apiFoo } from "./api"
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react";
function App() {
  const onSubmit = async (query) => {
    try {
      await axios.get(apiFoo(query))} catch { console.log("error") } 
    
  }
  return (<>
    <SearchBar onSubmit={onSubmit} />
  </>)
}

export default App

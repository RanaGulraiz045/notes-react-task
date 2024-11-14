import logo from "./logo.svg";
import "./App.css";
import DenseTable from "./table/Table";
import { Button } from "@mui/material";
import BasicModal from "./modal/Modal";
import EnhancedTable from "./table/TableNew";

function App() {
  return (
    <div className="py-[50px]  px-[100px]">
      <div className="my-[20px]"></div>
      <EnhancedTable />
    </div>
  );
}

export default App;

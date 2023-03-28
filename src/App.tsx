import { Navbar } from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import AddNewProduct from "./components/AddNewProduct";

export const App = () => {
  return (
    <ProSidebarProvider>
      <div className="  flex  ">
        <Sidebar />
        <div className="flex-1">
         
          <Navbar />
          <AddNewProduct/>
        </div>
      </div>
    </ProSidebarProvider>
  );
};

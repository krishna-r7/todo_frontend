import { lazy } from "react";
import { Suspense } from "react";
import loader from "./assets/images/loader.gif"
import { Routes, Route } from "react-router-dom";
import TodoPage from "@/pages/common/TodoPage";

function AppRoutes() {

  return (
    <>
      <Suspense fallback={
        <div className=" flex items-center justify-center h-screen">
          <img src={loader || "/placeholder.svg"} className="w-60" />
        </div>
      }>
        <Routes>
          
          <Route path="/"  element={<TodoPage />} />  

        </Routes>
      </Suspense>

    </>
  );
}

export default AppRoutes;

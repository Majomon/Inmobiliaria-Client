import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "sonner";
import { getAllProperties } from "../../../redux/actions";
import AllProperties from "../AllProperties/AllProperties";
import CreateProperty from "../CreateProperty/CreateProperty";
import MenuLateralDashBoard from "../MenuLateralDashBoard/MenuLateralDashBoard";

function MainDashBoard() {
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState("home");

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="w-full h-full flex">
      <Toaster />
      <MenuLateralDashBoard
        activeComponent={activeComponent}
        handleButtonClick={handleButtonClick}
      />
      <div className="w-9/12 ml-auto p-6">
        {activeComponent === "home" && <AllProperties />}
        {activeComponent === "addProperty" && <CreateProperty />}
      </div>
    </div>
  );
}

export default MainDashBoard;

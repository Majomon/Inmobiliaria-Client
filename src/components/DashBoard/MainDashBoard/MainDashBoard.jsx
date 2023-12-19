import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../../redux/actions";
import AllProperties from "../AllProperties/AllProperties";
import EnabledProperties from "../EnabledProperties/EnabledProperties";
import MenuLateralDashBoard from "../MenuLateralDashBoard/MenuLateralDashBoard";
import { Toaster, toast } from "sonner";

function MainDashBoard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const [activeComponent, setActiveComponent] = useState("home");
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="w-full h-full flex">
      <MenuLateralDashBoard
        activeComponent={activeComponent}
        handleButtonClick={handleButtonClick}
      />
      <div className="w-full px-10 pt-10">
        {activeComponent === "home" && <AllProperties />}
        {activeComponent === "enabled" && <EnabledProperties />}
      </div>
    </div>
  );
}

export default MainDashBoard;

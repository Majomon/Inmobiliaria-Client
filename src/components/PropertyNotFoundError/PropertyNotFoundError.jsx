import React from "react";

function PropertyNotFoundError() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <h2 className="text-xl text-red-500">
        La propiedad que buscas no está disponible
      </h2>
    </div>
  );
}

export default PropertyNotFoundError;

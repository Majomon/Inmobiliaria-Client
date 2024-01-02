import React from "react";

function EnabledProperties() {
  return (
    <div>
      <button
        className="text-xs font-semibold p-2 bg-green-500 rounded-md"
        onClick={() => setActiveFormCreate(true)}
      >
        Crear propiedad
      </button>
    </div>
  );
}

export default EnabledProperties;

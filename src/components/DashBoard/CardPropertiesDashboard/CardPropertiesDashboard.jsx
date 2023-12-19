import React from "react";

function CardPropertiesDashboard({ elem }) {
  return (
    <tr className="flex ">
      <td src={elem.images[0]} alt="imagen" className="" />
      <td>{elem.name}</td>
      <tf>{elem.description}</tf>
    </tr>
  );
}

export default CardPropertiesDashboard;

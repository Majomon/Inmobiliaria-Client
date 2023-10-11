import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPropertiesId } from "../redux/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.details);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getPropertiesId(id))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Cargando</h1>
        </div>
      ) : (
        <div>
          <h1>Info detail</h1>
          <h2>{property.name}</h2>
          <h3>Porqueria</h3>
        </div>
      )}
    </>
  );
}

export default Detail;

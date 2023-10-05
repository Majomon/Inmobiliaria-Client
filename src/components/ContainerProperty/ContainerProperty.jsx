import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import PropertyCard from "../PropertyCard/PropertyCard";

function ContainerProperty() {
  const [loading, setLoading] = useState(true);
  const [dataAxios, setDataAxios] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("/properties")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            setDataAxios(data);
            setLoading(false);
          } else {
            throw new Error("La solicitud no fue exitosa.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener propiedades:", error);
          setLoading(false);
        });
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mx-auto">
          <h2 className="text-center py-4">Propiedades destacadas</h2>

          <div className="flex flex-wrap justify-center">
            {dataAxios.length > 0 ? (
              dataAxios.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            ) : (
              <p>No se encontraron datos de propiedades.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContainerProperty;

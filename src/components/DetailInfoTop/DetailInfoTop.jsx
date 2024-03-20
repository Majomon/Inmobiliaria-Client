import PropTypes from "prop-types";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function DetailInfoTop({ dataAxios }) {
/*   let statePrecio = dataAxios ? dataAxios?.precio?.mount.toLocaleString() : ""; */

  return (
    <div className="w-full h-full  mt-6 md:mt-4">
      {/* Ubicación */}
      <div className="w-10/12 mx-auto h-full flex flex-wrap gap-x-2 font-bold">
        <div className="text-sm flex items-center gap-2 dark:text-gray-100">
          <Link to={`/search?operation=${dataAxios.operation}`} className="">
            {dataAxios.operation}
          </Link>
          <HiArrowNarrowRight />
        </div>
        <div className="text-sm flex items-center gap-2 dark:text-gray-100">
          <Link to={`/search?province=${dataAxios.address.province}`}>
            {dataAxios.address.province}
          </Link>
          <HiArrowNarrowRight />
        </div>
        <div className="text-sm flex items-center gap-2 dark:text-gray-100">
          <Link to={`/search?zone=${dataAxios.address.zone}`}>
            {dataAxios.address.zone}
          </Link>
          <HiArrowNarrowRight />
        </div>
        <div className="text-sm flex items-center gap-2 dark:text-gray-100">
          <h3>{dataAxios.address.street}</h3>
        </div>
      </div>
      {/* Info extra del la publicacion */}
   {/*    <div className="w-full h-full py-1 flex flex-col md:flex-row justify-center items-center bg-white shadow-md dark:bg-black border-b-2 dark:border-yellow-600 dark:shadow-yellow-600">
        <div className="w-10/12 h-full flex flex-col md:flex-row">
          <div className="w-full h-full lg:w-7/12 flex flex-col md:flex-row">
            <div className="w-full lg:w-6/12 h-full py-2">
              <h3 className="text-sm font-bold dark:text-gray-100">
                {dataAxios.name}
              </h3>
              <h4 className="text-sm dark:text-gray-100">
                {dataAxios.address.province}, {dataAxios.address.zone}
              </h4>
              <p className="text-gray-400">{dataAxios.address.street}</p>
            </div>
            <div className="w-full lg:w-6/12 h-full py-2">
              {dataAxios.operation === "Venta" ? (
                <div>
                  <p className="text-gray-400">PRECIO VENTA</p>
                  <div className="flex gap-x-1">
                    <strong className="text-base font-bold dark:text-gray-100">
                      {dataAxios.precio.currency}
                    </strong>
                    <span>{statePrecio}</span>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-400">PRECIO ALQUILER</p>
                  <div className="flex gap-x-1">
                    <strong className="text-base font-bold dark:text-gray-100">
                      {dataAxios.precio.currency}
                    </strong>
                    <span>{statePrecio}</span>
                    <span>
                      {dataAxios.precio.additionalExpense &&
                        ` + ${dataAxios.precio.additionalExpense}`}
                    </span>
                  </div>
                  <p className="text-gray-400">Por mes</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-0 md:w-0 md:h-[5rem] border border-gray-400"></div>
          <div className="w-full lg:w-5/12 flex justify-between items-center md:justify-start">
            <div className="w-[20%] h-full flex flex-col justify-center items-center pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="#E9B824"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5h11" />
                <path d="M12 7l2 -2l-2 -2" />
                <path d="M5 3l-2 2l2 2" />
                <path d="M19 10v11" />
                <path d="M17 19l2 2l2 -2" />
                <path d="M21 12l-2 -2l-2 2" />
                <path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
              </svg>
              <strong className="text-sm dark:text-gray-100">
                {dataAxios.area}
              </strong>
              <span className="text-sm dark:text-gray-100">Sup.</span>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="#E9B824"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
                <path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
              <strong className="text-sm dark:text-gray-100">
                {dataAxios.environments}
              </strong>
              <span className="text-sm dark:text-gray-100">Ambientes</span>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="#E9B824"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                <path d="M4 21l1 -1.5" />
                <path d="M20 21l-1 -1.5" />
              </svg>
              <strong className="text-sm dark:text-gray-100">
                {dataAxios.bathrooms}
              </strong>
              <span className="text-sm dark:text-gray-100">Baños</span>
            </div>
            {dataAxios.garage > 0 && (
              <div className="w-[20%] flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke="#E9B824"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                  <path d="M3 6l9 -4l9 4" />
                </svg>
                <strong className="text-sm dark:text-gray-100">
                  {dataAxios.garage}
                </strong>
                <span className="text-sm dark:text-gray-100">Cochera</span>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}

DetailInfoTop.propTypes = {
  dataAxios: PropTypes.object.isRequired,
};

export default DetailInfoTop;

import PropTypes from "prop-types";
import { HiArrowNarrowRight } from "react-icons/hi";

function DetailInfoTop({ dataAxios }) {
  return (
    <div className="w-full h-full ">
      {/* Info del vendedor o inmobiliaria */}
      <div className="w-full h-[3.5rem] flex justify-end gap-6 px-10">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-home-2"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            //Contorno
            stroke="#E9B824"
            //Background
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M10 12h4v4h-4z" />
          </svg>
          <h2 className="text-lg ml-2 dark:text-white">
            Av. Siempre viva 1234
          </h2>
        </div>
        <p className="flex justify-center items-center dark:text-white">|</p>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-phone"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#E9B824"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <h2 className="text-lg ml-2 dark:text-white">4422-4433</h2>
        </div>
        <p className="flex justify-center items-center dark:text-white">|</p>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#E9B824"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <h2 className="text-lg ml-2 dark:text-white">test@test.com</h2>
        </div>
      </div>
      {/* Ubicación */}
      <div className="w-full h-full flex gap-2 px-16 ">
        <div className="flex items-center gap-2">
          <h3>{dataAxios.operation}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.province}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.zone}</h3>
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center gap-2">
          <h3>{dataAxios.address.street}</h3>
        </div>
      </div>
      {/* Info extra del la publicacion */}
      <div className="w-full h-full flex justify-center items-center bg-white shadow-md px-16 dark:bg-black border-b-2 border-gray-100">
        <div className="w-7/12 h-[7rem] flex py-4">
          <div className="w-6/12 h-full">
            <h3 className="text-base font-bold dark:text-white">
              {dataAxios.name}
            </h3>
            <h4 className="text-base dark:text-white">
              {dataAxios.address.province}, {dataAxios.address.zone}
            </h4>
            <p className="text-gray-400">
              {dataAxios.address.street}, {dataAxios.address.postalCode}
            </p>
          </div>
          <div className="w-6/12 h-full">
            {dataAxios.operation === "Alquiler" ? (
              <div>
                <p className="text-gray-400">PRECIO ALQUILER</p>
                <h3 className="text-base font-bold dark:text-gray-100">
                  ${dataAxios.price}
                </h3>
                <p className="text-gray-400">Por mes</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-400">PRECIO VENTA</p>
                <h3 className="text-base font-bold dark:text-gray-100">
                  U$S{dataAxios.price}
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="h-[5rem] border-l border-gray-400"></div>
        <div className="w-5/12 h-[7rem] flex ">
          <div className="w-[20%] flex flex-col justify-center items-center pl-4">
            {/* <img src={Superficie} alt="Superficice" className="w-[25px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-dimensions"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E9B824"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <strong className="text-lg dark:text-gray-100">{dataAxios.area} m²</strong>
            <span className="text-sm dark:text-gray-100">Sup. Total</span>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            {/*    <img src={Ambientes} alt="Ambientes" className="w-[25px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bed"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E9B824"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
              <path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
            <strong className="text-lg dark:text-gray-100">{dataAxios.environments}</strong>
            <span className="text-sm dark:text-gray-100">Ambientes</span>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            {/* <img src={Baño} alt="Baños" className="w-[25px] text-red-500" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bath"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E9B824"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
              <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
              <path d="M4 21l1 -1.5" />
              <path d="M20 21l-1 -1.5" />
            </svg>
            <strong className="text-lg dark:text-gray-100">{dataAxios.bathrooms}</strong>
            <span className="text-sm dark:text-gray-100">Baños</span>
          </div>
          {dataAxios.garage && (
            <div className="w-[20%] flex flex-col justify-center items-center">
              {/* <img src={Baño} alt="Baños" className="w-[25px] text-red-500" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-car-garage"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#E9B824"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                <path d="M3 6l9 -4l9 4" />
              </svg>
              <strong className="text-lg dark:text-gray-100">1</strong>
              <span className="text-sm dark:text-gray-100">Cochera</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

DetailInfoTop.propTypes = {
  dataAxios: PropTypes.object.isRequired,
};

export default DetailInfoTop;

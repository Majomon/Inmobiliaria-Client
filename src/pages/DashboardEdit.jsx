import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clearDetailsState, getPropertiesId } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import PropertyNotFoundError from "../components/PropertyNotFoundError/PropertyNotFoundError";
import {
  propertiesAddress,
  propertiesDescription,
  propertiesDetail,
  propertiesImages,
  propertiesOptions,
  propertiesOwner,
  propertiesPrice,
  propertiesServices,
  propertiesAdmission,
} from "../components/DashBoard/optionsPostProperty.js";
import { getAllProperties } from "../redux/actions.js";
import { Toaster, toast } from "sonner";
import ImgFirebase from "../components/DashBoard/ImgFirebase.jsx";
import { useNavigate } from "react-router-dom";

function DashboardEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state?.details);
  const [loading, setLoading] = useState(true);
  const [editForm, setEditForm] = useState({
    operation: "Alquiler",
    property: "Departamento",
    environments: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    garage: 0,
    state: "Bueno",
    name: "",
    description: "",
    province: "",
    zone: "",
    street: "",
    runningWater: false,
    airConditioning: false,
    balcony: false,
    kitchen: false,
    parking: false,
    gas: false,
    gym: false,
    laundry: false,
    light: false,
    petfriendly: false,
    houseMaid: false,
    grill: false,
    yard: false,
    swimmingpool: false,
    security: false,
    waterHeater: false,
    dressingRoom: false,
    wifi: false,
    images: [],
    currency: "$",
    ownerNombre: "",
    ownerPhone: "",
    mount: 0,
    additionalExpense: "",
    admission: "Inmediato", // valor inicial definido para la admisión
  });
  const [modificationSuccess, setModificationSuccess] = useState(false);
  const navigate = useNavigate();

  const upParrayImg = (index) => {
    const updatedImages = [...editForm.images];
    updatedImages.splice(index, 1);
    setEditForm({
      ...editForm,
      images: updatedImages,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setEditForm({
        ...editForm,
        services: {
          ...editForm.services,
          [name]: checked,
        },
      });
    } else if (name === "street" || name === "zone" || name === "province") {
      setEditForm({
        ...editForm,
        address: {
          ...editForm.address,
          [name]: value,
        },
      });
    } else if (
      name === "currency" ||
      name === "mount" ||
      name === "additionalExpense"
    ) {
      setEditForm({
        ...editForm,
        precio: {
          ...editForm.precio,
          [name]: value,
        },
      });
    } else if (name === "ownerNombre" || name === "ownerPhone") {
      setEditForm({
        ...editForm,
        owner: {
          ...editForm.owner,
          [name]: value,
        },
      });
    } else {
      setEditForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/properties/${editForm._id}`, editForm);
      setModificationSuccess(true);
      setEditForm({
        operation: "Alquiler",
        property: "Departamento",
        environments: 0,
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        garage: 0,
        state: "Bueno",
        name: "",
        description: "",
        province: "",
        zone: "",
        street: "",
        runningWater: false,
        airConditioning: false,
        balcony: false,
        kitchen: false,
        parking: false,
        gas: false,
        gym: false,
        laundry: false,
        light: false,
        petfriendly: false,
        houseMaid: false,
        grill: false,
        yard: false,
        swimmingpool: false,
        security: false,
        waterHeater: false,
        dressingRoom: false,
        wifi: false,
        images: [],
        currency: "$",
        ownerNombre: "",
        ownerPhone: "",
        mount: 0,
        additionalExpense: "",
        admission: "Inmediato", // valor inicial definido para la admisión
      });
      toast.success("Propiedad modificada con exito perrito");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (modificationSuccess) {
      setModificationSuccess(false);
    }
    return () => {
      dispatch(getAllProperties());
    };
  }, [modificationSuccess]);

  useEffect(() => {
    dispatch(getPropertiesId(id));
    setLoading(false);

    return () => {
      dispatch(clearDetailsState());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (property) {
      setEditForm(property);
    }
  }, [property]);

  if (loading) {
    return <Spinner />;
  }

  if (!property || !property.name) {
    return <PropertyNotFoundError />;
  }

  if (Object.keys(editForm).length === 0) {
    return <Spinner />;
  }

  return (
    <div className="w-full h-full p-20">
      <Toaster></Toaster>
      <div className="w-10/12 mx-auto bg-gray-100 rounded-lg relative">
        <form onSubmit={handlerSubmit}>
          <div className="pt-12 px-10">
            {/* Primeras opciones */}
            <div className="w-full h-full grid grid-cols-4 gap-x-6 pb-4 ">
              {propertiesOptions.map((option, index) => (
                <div key={`${option.id}_${index}`} className="flex flex-col">
                  <label
                    htmlFor={option.component}
                    className="text-sm font-bold"
                  >
                    {option.name}
                  </label>
                  {option.options ? (
                    <select
                      id={option.component}
                      name={option.component}
                      value={editForm[option.component]}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border pl-2"
                    >
                      {option.options.map((optionValue, optionIndex) => (
                        <option key={optionIndex} value={optionValue}>
                          {optionValue}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id={option.component}
                      name={option.component}
                      value={editForm.name}
                      onChange={handleChange}
                      className="bg-gray-50 rounded-sm border pl-2"
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Descripción y detalles */}
            <div className="grid grid-cols-2 gap-x-10 my-2 pb-2">
              {/* Descripción */}
              {propertiesDescription.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="flex flex-col h-40"
                >
                  <label
                    htmlFor={option.component}
                    className="text-sm font-bold"
                  >
                    {option.name}
                  </label>
                  <textarea
                    type="text"
                    id={option.component}
                    name={option.component}
                    value={editForm[option.component]}
                    onChange={handleChange}
                    className="h-64  bg-gray-50 rounded-sm border p-2"
                  />
                </div>
              ))}
              {/* Detalles */}
              <div className="grid grid-cols-2 gap-x-6">
                {propertiesDetail.map((option, index) => (
                  <div
                    key={`${option.id}_${index}`}
                    className="w-full h-full flex flex-col "
                  >
                    <label
                      htmlFor={option.component}
                      className="text-sm font-bold"
                    >
                      {option.name}
                    </label>
                    <input
                      type="number"
                      id={option.component}
                      name={option.component}
                      value={editForm[option.component]}
                      onChange={handleChange}
                      className=" bg-gray-50 rounded-sm border pl-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dirección */}
            <div className="w-full h-full my-2 pb-2">
              <p className="text-sm font-bold mb-2">Dirección</p>
              {propertiesAddress.map((addressOption, addressIndex) => (
                <div
                  key={`${addressOption.id}_${addressIndex}`}
                  className="grid grid-cols-3 gap-x-4"
                >
                  {addressOption.moreOptions.map((subOption, subIndex) => (
                    <div
                      key={`${addressOption.id}_${subIndex}`}
                      className="w-full h-full flex flex-col"
                    >
                      <label
                        htmlFor={subOption.component}
                        className="text-sm font-bold"
                      >
                        {subOption.name}
                      </label>
                      <input
                        type="text"
                        id={subOption.component}
                        name={subOption.component}
                        value={
                          editForm?.address &&
                          editForm.address[subOption.component]
                        }
                        onChange={handleChange}
                        className="bg-gray-50 rounded-sm border pl-2"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Precio y Dueño */}
            <div className="w-full h-full my-2 pb-2">
              <div className="grid grid-cols-2 gap-x-6">
                {/* Precio */}
                <div className="w-full h-full">
                  <p className="text-sm font-bold my-2">Precio</p>
                  {propertiesPrice.map((option, index) => (
                    <div
                      key={`${option.id}_${index}`}
                      className="grid grid-cols-2 gap-x-4"
                    >
                      {option.moreOptions.map((subOption, subIndex) => (
                        <div
                          key={`${option.id}_${subOption.id}_${subIndex}`}
                          className="w-full h-full flex flex-col "
                        >
                          <label
                            htmlFor={subOption.component}
                            className="text-sm font-bold"
                          >
                            {subOption.name}
                          </label>
                          {subOption.component === "currency" ? (
                            <select
                              id={subOption.component}
                              name={subOption.component}
                              value={
                                editForm?.precio &&
                                editForm?.precio[subOption.component]
                              }
                              onChange={handleChange}
                              className="bg-gray-50 rounded-sm border pl-2"
                            >
                              {subOption.options.map(
                                (currencyOption, currencyIndex) => (
                                  <option
                                    key={currencyIndex}
                                    value={currencyOption}
                                  >
                                    {currencyOption}
                                  </option>
                                )
                              )}
                            </select>
                          ) : (
                            <input
                              type="text"
                              id={subOption.component}
                              name={subOption.component}
                              value={
                                editForm?.precio &&
                                editForm?.precio[subOption.component]
                              }
                              onChange={handleChange}
                              className="bg-gray-50 rounded-sm border pl-2"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* Dueño */}
                <div className="w-full h-full">
                  <p className="text-sm font-bold my-2">Dueño</p>
                  {propertiesOwner.map((option, index) => (
                    <div
                      key={`${option.id}_${index}`}
                      className="grid grid-cols-2 gap-x-4"
                    >
                      {option.moreOptions.map((subOption, index) => (
                        <div
                          key={`${option.id}_${index}`}
                          className="w-full h-full flex flex-col "
                        >
                          <label
                            htmlFor={subOption.component}
                            className="text-sm font-bold"
                          >
                            {subOption.name}
                          </label>
                          <input
                            type="text"
                            id={subOption.component}
                            name={subOption.component}
                            value={
                              editForm?.owner &&
                              editForm?.owner[subOption.component]
                            }
                            onChange={handleChange}
                            className=" bg-gray-50 rounded-sm border pl-2"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Servicios */}
            <div className="w-full h-full">
              <p className="text-sm font-bold">Servicios</p>
              {propertiesServices.map((option, index) => (
                <div
                  key={`${option.id}_${index}`}
                  className="grid grid-cols-6 gap-x-10"
                >
                  {option.moreOptions.map((subOption, index) => (
                    <div
                      key={`${option.id}_${index}`}
                      className="w-full h-full flex justify-between py-2"
                    >
                      <label htmlFor={subOption.component} className="text-sm">
                        {subOption.name}
                      </label>
                      <input
                        type="checkbox"
                        id={subOption.component}
                        name={subOption.component}
                        checked={
                          editForm?.services &&
                          editForm?.services[subOption.component]
                        }
                        onChange={handleChange}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Ingreso */}
            {propertiesAdmission.map((option, index) => (
              <div
                key={`${option.id}_${index}`}
                className="w-fit flex flex-col gap-x-4 py-4"
              >
                <label htmlFor={option.component} className="text-sm font-bold">
                  {option.name}
                </label>
                <input
                  type="text"
                  id={option.component}
                  name={option.component}
                  value={editForm[option.component]}
                  onChange={handleChange}
                  className="bg-gray-50 rounded-sm border pl-2"
                />
              </div>
            ))}
            {/* Imagenes */}
            <div className="w-full h-full">
              {propertiesImages.map((option, index) => (
                <div key={`${option.id}_${index}`} className="">
                  <p className="text-sm">Imagenes</p>
                  {/*             <Cloudinary setFormData={setFormData} formData={formData} /> */}
                  <ImgFirebase setFormData={setEditForm} />
                </div>
              ))}
            </div>
            <div className="w-4/12 mx-auto h-full flex justify-center items-center py-10">
              <button className="w-full h-fit bg-gray-950 text-white py-4 rounded-lg">
                Guardar cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardEdit;

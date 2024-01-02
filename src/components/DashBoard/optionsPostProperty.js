export const propertiesOptions = [
  { id: 1, component: "name", name: "Nombre de la propiedad" },
  {
    id: 2,
    component: "operation",
    name: "Operación",
    options: ["Alquiler", "Alquiler temporario"],
  },
  {
    id: 3,
    component: "property",
    name: "Tipo de propiedad",
    options: ["Departamento", "Casa", "PH","Presidencial"],
  },
  {
    id: 4,
    component: "state",
    name: "Estado",
    options: ["Bueno", "Muy bueno", "Excelente"],
  },
];

export const propertiesDescription = [
  { id: 5, component: "description", name: "Descripción" },
];

export const propertiesDetail = [
  { id: 6, component: "environments", name: "Cant. ambientes" },
  { id: 7, component: "bedrooms", name: "Cant. habitaciones" },
  { id: 8, component: "bathrooms", name: "Cant. baños" },
  { id: 9, component: "area", name: "Area" },
  { id: 10, component: "garage", name: "Cant. Garage" },
];

export const propertiesAddress = [
  {
    id: 11,
    component: "address",
    name: "Dirección",
    moreOptions: [
      { id: 111, component: "province", name: "Provincia" },
      { id: 112, component: "zone", name: "Zona" },
      { id: 113, component: "street", name: "Calle" },
    ],
  },
];

export const propertiesPrice = [
  {
    id: 12,
    component: "price",
    name: "Precio",
    moreOptions: [
      { id: 121, component: "currency", name: "Moneda", options: ["$", "U$S"] },
      { id: 122, component: "mount", name: "Monto" },
      { id: 123, component: "additionalExpense", name: "Gastos adicionales" },
    ],
  },
];

export const propertiesOwner = [
  {
    id: 13,
    component: "owner",
    name: "Dueño",
    moreOptions: [
      { id: 131, component: "nombre", name: "Nombre" },
      { id: 132, component: "phone", name: "Teléfono" },
    ],
  },
];

export const propertiesImages = [
  {
    id: 14,
    component: "images",
    name: "Imagenes",
  },
];

export const propertiesServices = [
  {
    id: 15,
    component: "services",
    name: "Servicios",
    moreOptions: [
      { id: 151, component: "runningWater", name: "Agua corriente Central" },
      { id: 152, component: "airConditioning", name: "Aire acondicionado" },
      { id: 153, component: "balcony", name: "Balcón" },
      { id: 154, component: "kitchen", name: "Cocina" },
      { id: 155, component: "parking", name: "Estacionamiento" },
      { id: 156, component: "gas", name: "Gas" },
      { id: 157, component: "gym", name: "Gimnasio" },
      { id: 158, component: "laundry", name: "Lavadero" },
      { id: 159, component: "light", name: "Electricidad" },
      { id: 1510, component: "petfriendly", name: "Apto mascotas" },
      { id: 1511, component: "houseMaid", name: "Mucama" },
      { id: 1512, component: "grill", name: "Parrilla" },
      { id: 1513, component: "yard", name: "Patio" },
      { id: 1514, component: "swimmingpool", name: "Piscina" },
      { id: 1515, component: "security", name: "Seguridad 24hs" },
      { id: 1516, component: "waterHeater", name: "Termotanque" },
      { id: 1517, component: "dressingRoom", name: "Vestidor" },
      { id: 1518, component: "wifi", name: "Internet" },
    ],
  },
];

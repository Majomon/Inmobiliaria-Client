import imgHome from "../assets/home.avif";
import ContainerProperty from "../components/ContainerProperty/ContainerProperty";
import Filter from "../components/Filter/Filter"

function Home() {
  return (
    <div className="w-full h-full py-1 mt-16">
      <img
        className="w-full h-[30rem] border-b-4 border-red-500"
        src={imgHome}
        alt="home"
      />
      <div className="w-11/12 mx-auto">
        <h1 className="w-4/12 px-4 text-2xl font-bold relative top-[-35px] text-white bg-red-500 rounded-sm">
          Buscador de propiedades
        </h1>
      </div>
      <Filter/>
      <ContainerProperty/>
    </div>
  );
}

export default Home;

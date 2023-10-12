import PageNotFound from "../../assets/pageNotFound/5203299.jpg";
function NotFoundPage() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img
        src={PageNotFound}
        alt="notFound"
        className="w-full h-4/6 md:w-6/12"
      />
    </div>
  );
}

export default NotFoundPage;

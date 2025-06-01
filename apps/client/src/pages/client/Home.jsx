import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet title="Home | Client" />

      <div>
        <h1 className="text-3xl font-bold underline">Home, Client</h1>
      </div>
    </>
  );
};

export default Home;

function Home() {
  return (
    <>
      <div className="text-center my-4 lg:flex">
        <img
          className="px-3 lg:w-1/2"
          src="../public/data/pizza.jpg"
          alt="Pizza"
        />
        <div>
          <h2 className="font-semibold text-sky-700 text-2xl lg:text-4xl py-5">
            Welcome! The world of delicious pizza awaits you!!{" "}
          </h2>
          <input
            className="w-64 lg:w-1/2 h-10 rounded-lg px-3 my-5 outline-sky-700"
            type="text"
            placeholder="Enter your name"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

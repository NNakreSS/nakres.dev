import CodeBlock from "./CodeBlock";

const Home = () => (
  <main className="w-full grid grid-cols-10 gap-4 mt-10">
    <CodeBlock />
    <div className="col-span-5 flex flex-wrap items-start justify-center">
      <h3 className="text-4xl font-bold">Bir fikriniz mi var ?</h3>
      <p className="w-full text-center text-xl text-gray-200">
        Hemen iletişime geçin , beraber gerçekleştirelim.
      </p>
      <button className="bg-blue-500 p-2 w-4/12 rounded-md text-2xl font-medium">
        İletişim
      </button>
    </div>
  </main>
);

export default Home;

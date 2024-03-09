import CallToAction from "./CallToAction";
import CodeBlock from "./CodeBlock";
import Technologies from "./Technologies";

const Home = () => (
  <main className="w-full grid grid-cols-10 gap-4 mt-10 gap-y-40">
    <CodeBlock />
    <CallToAction />
    <Technologies />
  </main>
);

export default Home;

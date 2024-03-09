import CallToAction from "./CallToAction";
import CodeBlock from "./CodeBlock";
import Technologies from "./Technologies";

const Home = () => (
  <>
    <div className="flex w-full flex-col gap-10 lg:flex-row">
      <CodeBlock />
      <CallToAction />
    </div>
    <Technologies />
  </>
);

export default Home;

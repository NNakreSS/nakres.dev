import CallToAction from "./CallToAction";
import CodeBlock from "./CodeBlock";
import Technologies from "./Technologies";

const Home = () => (
  <>
    <div className="flex w-full flex-col gap-32 lg:gap-0 lg:flex-row">
      <CodeBlock />
      <CallToAction />
    </div>
    <Technologies />
  </>
);

export default Home;

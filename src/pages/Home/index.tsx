// components
import CallToAction from "./CallToAction";
import CodeBlock from "./CodeBlock";
import Technologies from "./Technologies";
import Services from "./Services";

const Home = () => (
  <>
    <div className="flex w-full flex-col gap-28 lg:gap-10 lg:flex-row">
      <CodeBlock />
      <CallToAction />
    </div>
    <Technologies />
    <Services />
  </>
);

export default Home;

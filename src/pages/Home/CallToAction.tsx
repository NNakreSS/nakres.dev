import Button from "../../components/Button";

const CallToAction = () => (
  <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 justify-center box-content">
    <h3 className="text-4xl font-bold">Bir fikriniz mi var ?</h3>
    <p className="w-full text-center text-xl text-text-second">
      Hemen iletişime geçin, beraber gerçekleştirelim.
    </p>
    <Button type="primary" variant="outlined">
      İletişim
    </Button>
  </div>
);

export default CallToAction;

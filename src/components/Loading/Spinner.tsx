function Spinner() {
  return (
    <div className="w-full col-span-full flex justify-center">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
      </div>
    </div>
  );
}

export default Spinner;

const CodeBlock = () => (
  <div className="col-span-5 bg-zinc-800 rounded-md ">
    <div
      id="code-head"
      className="h-10 w-full bg-zinc-700 rounded-t-md flex items-center cursor-pointer"
    >
      <div className="flex items-center justify-between h-2/4 w-3/12 ml-1 bg-zinc-900 p-4 rounded-sm">
        <span className="font-bold text-yellow-400">JS</span>{" "}
        <span>Hello.js</span> <span className="font-thin text-gray-200">x</span>
      </div>
    </div>
    <div className="p-10 flex flex-wrap gap-5">
      <code className="text-4xl font-bold text-gray-500">
        // Selam , ben Serkan
      </code>
      <div className="text-4xl font-semibold text-green-600">
        {"{"} <span>FullStack</span> <span>Developer</span> {"}"}
      </div>
    </div>
  </div>
);

export default CodeBlock;

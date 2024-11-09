export default function UserInput({
  onChange,
  handleAdd,
  handleSub,
  handleMulti,
  handleDiv,
}) {
  return (
    <section className="flex flex-col items-center p-10 bg-white rounded  ">
      <div className="grid grid-cols-2 gap-1 ">
        <div>
          <input
            className="w-50 p-3 border border-gray-300 rounded "
            type="number"
            required
            name="inputA"
            onChange={(e) => onChange("inputA", e.target.value)}
          />
        </div>

        <div>
          <input
            className="w-50 p-3 border border-gray-300 rounded "
            type="number"
            required
            name="inputB"
            onChange={(e) => onChange("inputB", e.target.value)}
          />
        </div>
      </div>

      <br />
      <div className="grid grid-row-2 grid-flow-col p-8 space-x-4 text-2xl">
        <button
          onClick={handleAdd}
          className="w-10 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={handleSub}
          className="w-10  bg-red-500 text-white rounded "
        >
          -
        </button>
        <button
          onClick={handleMulti}
          className="w-10  bg-yellow-500 text-white rounded"
        >
          *
        </button>
        <button
          onClick={handleDiv}
          className="w-10  bg-green-500 text-white rounded "
        >
          /
        </button>
      </div>
    </section>
  );
}

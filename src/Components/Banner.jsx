import banner1 from "../assets/vector1.png";

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto gap-10  min-h-40 mt-10">
      <div className="relative overflow-hidden bg-linear-to-r from-purple-500 to-indigo-500 text-white p-10 text-center  rounded-xl">
        <img
          src={banner1}
          alt="banner vector"
          className="absolute right-80 -bottom-20 w-80 scale-70 opacity-95"
        />
        <img
          src={banner1}
          alt="banner vector 2"
          className="absolute left-70 -top-10 w-80 opacity-95 scale-70 scale-x-[-1]"
        />
        <h2>In-Progress</h2>
        <p className="text-4xl">{inProgressCount}</p>
      </div>

      <div className="relative overflow-hidden bg-linear-to-r from-green-400 to-teal-500 text-white p-10   text-center rounded-xl ">
        <img
          src={banner1}
          alt="banner vector"
          className="absolute right-80 -bottom-20 w-80 scale-70 opacity-100"
        />
        <img
          src={banner1}
          alt="banner vector 2"
          className="absolute left-70 -top-10 w-80 opacity-100 scale-70 scale-x-[-1]"
        />
        <h2>Resolved</h2>
        <p className="text-4xl">{resolvedCount}</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Customer Tickets</h2>
      </div>
    </div>
  );
}
export default Banner;

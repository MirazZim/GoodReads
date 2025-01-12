import BannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-2xl  mx-auto my-10 px-10" style={{ width: "1170px", height: "554px" }}>
      {/* Text Section */}
      <div className="flex flex-col space-y-6" style={{ marginBottom: "100px", marginRight: "86px" }}>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-800">
          Books to freshen up <br /> your bookshelf
        </h1>
        <br />
        <br />
        <br />
        <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          View The List
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0" style={{ marginBottom: "80px", marginLeft: "260px" }}>
        <img
          src={BannerImg}
          alt="Book Banner"
          className="w-[318px] h-[394px] object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;

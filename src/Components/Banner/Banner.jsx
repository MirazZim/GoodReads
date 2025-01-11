
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <br />
          <br />
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;
// pages/index.js
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Soltech</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/extra.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      <section className="home">
        <div className="container my-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="text-content">
                <p className="text-6xl font-bold">Quality is the secret to creating a target market.</p>
                <h3 className="mb-4 text-2xl">
                  The secret of our success is providing quality <br />
                  with security, which is the main motto for our company.
                </h3>
                <div className="flex space-x-3">
                  <a href="#" className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
                    Get Started Now
                  </a>
                  <a href="#" className="px-6 py-3 border border-gray-700 text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-200">
                    Find Out More
                  </a>
                </div>
              </div>
              <div className="image-content">
                <img
                  src="https://dsathemes.com/html/soltech_1.1/files/images/customer-avatar.svg"
                  width="55px"
                  alt="plp"
                  className="w-40 full pt-5"
                />
                <p className="mt-3">
                  Trusted By 12k+ Worldwide
                  <br />
                  Brands And Customers
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://dsathemes.com/html/soltech_1.1/files/images/hero-7-img.svg"
                height="30px"
                width="450px"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h2 className="text-center text-2xl text-black-500 pt-[15px] pb-[20px]">Trusted by companies, big or not-so-big:</h2>
        <div className="container my-5">
          <div className="flex flex-wrap justify-center">
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p1.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p2.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p3.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p4.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p5.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p6.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p7.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p8.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p9.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p10.webp" alt="Top Companies" className="w-full filter grayscale" />
            </div>
            <div className="m-2">
              <img src="https://www.digital-lync.com/images/p12.webp" alt="Top Companies" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

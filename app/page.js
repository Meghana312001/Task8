// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task8_Nextjs@Meghana</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="extra.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div>

        {/* Header with Navbar */}
        <header className="bg-white shadow-sm">
          <nav className="container flex items-center justify-between py-4">
            <a href="#">
              <img
                src="https://dsathemes.com/html/soltech_1.1/files/images/logo-indigo.png"
                width="180"
                height="40"
                alt="logo"
              />
            </a>
            <button
              className="lg:hidden focus:outline-none"
              type="button"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="hidden lg:block">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-800 bg-blue-300 font-bold ">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <main style={{ backgroundColor: 'white' }}>
        <section className="home"style={{ backgroundImage: 'url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQsVVLo1fccy38GopE_H_p4r-YrI1cjRmMToeocdzmMW3-YVw4_)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container my-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <div className="text-content">
                  <p className="text-6xl font-bold pl-20 pb-10">
                    Quality is the secret to creating a target market.
                  </p>
                  <h3 className="mb-4 text-2xl pl-20">
                    The secret of our success is providing quality <br />
                    with security, which is the main motto for our company.
                  </h3>
                  <div className="flex space-x-3 pl-20">
                    <a
                      href="#"
                      className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600"
                    >
                      Get Started Now
                    </a>
                    <a
                      href="#"
                      className="px-6 py-3 border border-gray-700 text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-200"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
                <div className="image-content pl-20">
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
          <h2 className="text-center text-2xl text-black-500 pt-[15px] pb-[20px]">
            Trusted by companies, big or not-so-big:
          </h2>
          <div className="container my-5">
            <div className="flex flex-wrap justify-center">
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p1.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p2.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p3.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p4.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p5.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-5">
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p6.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p7.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p8.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p9.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p10.webp" alt="Top Companies"
                  className="w-full filter grayscale" />
              </div>
              <div className="m-2">
                <img src="https://www.digital-lync.com/images/p12.webp" alt="Top Companies" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="main2">
          <hr className="my-6" />
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/img-05.svg" alt="" className="w-full" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h3 className="mb-4 text-gray-500 pt-12">PERSONALIZED STRATEGY</h3>
                <h1 className="mb-4 text-5xl text-gray-800 font-bold">
                  Reach your target audience effectively
                </h1>
                <p className="mb-4 text-lg text-gray-600">
                  Sapien tempor sodales quaerat ipsum congue undo laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae purus an ipsum auris suscipit
                </p>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                  <li>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor
                    diam ultrice ipsum aliquam congue and dolor cursus
                  </li>
                  <li>
                    Tempor sapien quaerat ipsum laoreet purus and sapien dolor
                    diam ultrice ipsum aliquam congue and dolor cursus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="main3 bg-white">
          <div className="container my-20">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-secondary mb-4 text-4xl font-bold pl-20">
                  STRATEGIES THAT WORK
                </h3>
                <h1 className="text-gray-800 text-2xl pl-20">
                  Everything you need to get more
                  <br /> leads and sales
                </h1>
                <p className="text-secondary pl-20">
                  Sodales tempor sapien quaerat ipsum congue and undo
                  <br /> laoreet turpis neque auctor turpis vitae dolor luctus
                  <br /> placerat magna ligula cursus vitae
                </p>
                <p className="text-secondary pl-20">
                  Tempor sapien quaerat ipsum laoreet purus and sapien
                  <br />
                  dolor diam ultrice ipsum aliquam congue and dolor cursus
                </p>
              </div>
              <div className="md:w-1/2 space-y-4 pl-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4">
                    <h4 className="font-bold text-2xl pb-10">Digital Marketing</h4>
                    <p className="text-secondary">
                      Porta semper lacus and cursus feugiat at primis
                      <br /> ultrice a ligula auctor
                    </p>
                  </div>
                  <div className="bg-gray-200 p-4">
                    <h4 className="font-bold text-2xl pb-10">Dev and Design</h4>
                    <p className="text-secondary">
                      Porta semper lacus and cursus feugiat at primis
                      <br /> ultrice a ligula auctor
                    </p>
                  </div>
                  <div className="bg-gray-200 p-4">
                    <h4 className="font-bold text-2xl pb-10">Data & Analytics</h4>
                    <p className="text-secondary">
                      Porta semper lacus and cursus feugiat at primis
                      <br /> ultrice a ligula auctor
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4">
                    <h4 className="font-bold text-2xl pb-10">Content Stratergy</h4>
                    <p className="text-secondary">
                      Porta semper lacus and cursus feugiat at primis
                      <br /> ultrice a ligula auctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-gray-900 font-bold text-6xl pb-5">
              Everything in One Place
            </h1>
            <p className="text-secondary text-2xl">
              Ligula risus auctor tempus magna feugiat lacinia fusce blandit
            </p>
            <br />
            <a href="https://www.youtube.com/embed/SZEflIVnhH8">
              <img
                src="https://dsathemes.com/html/soltech_1.1/files/images/dashboard-02.svg"
                className="w-full"
                alt=""
              />
            </a>
          </div>
        </section>

        <section className="my-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 text-center">
              <div>
                <h1 className="text-gray-800 font-bold text-6xl">42%</h1>
                <p className="text-secondary">
                  Augue magna justo <br /> integer and velna
                </p>
              </div>
              <div>
                <h1 className="text-gray-800 font-bold text-6xl">78%</h1>
                <p className="text-secondary">
                  Augue magna justo <br /> integer and velna
                </p>
              </div>
              <div>
                <h1 className="text-gray-800 font-bold text-6xl">46.3k</h1>
                <p className="text-secondary">
                  Augue magna justo <br /> integer and velna
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="main4 py-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img className="w-full" src="https://dsathemes.com/html/soltech_1.1/files/images/img-04.svg" alt="One Stop Solutions" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                <h3 className="text-secondary mb-4 font-bold text-2xl">One Stop Solutions</h3>
                <h1 className="text-gray-800 mb-4 font-bold text-6xl">Cutting-edge solutions for your online business</h1>
                <ul className="list-disc pl-6 space-y-2 text-secondary font-normal">
                  <li>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice quisque and congue aliquam dolor cursus a congue varius</li>
                  <li>Quaerat sapien tempor undo ipsum laoreet purus and sapien dolor ociis ultrice quisque and congue aliquam dolor cursus a varius congue ultrices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-gray-800 mb-4 font-bold text-6xl">Build a customer-centric<br />marketing strategy</h1>
            <p className="text-secondary text-2xl">Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded">
                <h3 className="text-gray-800 mb-4 font-bold text-4xl">Marketing Integrations</h3>
                <ul className="list-disc pl-6 space-y-3 text-secondary">
                  <li>Quaerat ipsum magna congue ipsum laoreet cursus placerat neque auctor purus quaerat</li>
                  <li>Tempor sapien luctus egestas varius laoreet suscipit ipsum a purus sapien dolor cursus</li>
                </ul>
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/integrations.svg" className="w-full" alt="Marketing Integrations" />
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <h3 className="text-gray-800 mb-4 font-bold text-4xl">Personalized Strategy</h3>
                <ul className="list-disc pl-6 space-y-3 text-secondary">
                  <li>Tempor sapien luctus egestas varius laoreet suscipit ipsum a purus sapien dolor cursus</li>
                  <li>Quaerat ipsum magna congue ipsum laoreet cursus placerat neque auctor purus quaerat</li>
                </ul>
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/analytics.svg" className="w-full" alt="Personalized Strategy" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 p-4 rounded">
                <h4 className="text-gray-800 mb-3 font-bold text-4xl">Advanced Analysis</h4>
                <p className="text-secondary mb-4">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/f_05.svg" className="w-full" alt="Advanced Analysis" />
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <h4 className="text-gray-800 mb-3 font-bold text-4xl">Effortless Integration</h4>
                <p className="text-secondary mb-4">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/f_02.svg" className="w-full" alt="Effortless Integration" />
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <h4 className="text-gray-800 mb-3 font-bold text-4xl">Content Management</h4>
                <p className="text-secondary mb-4">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/f_07.svg" className="w-full" alt="Content Management" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-gray-800 mb-4 font-bold text-6xl">The Complete Solutions</h1>
            <p className="text-secondary text-2xl">Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
          </div>
        </section>

        <section className="contents">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">Branding Services</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">Content Creation</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">Competitor Analysis</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">Market Research</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">e-Commerce Solutions</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
                <h3 className="text-gray-800 font-bold mb-3 text-3xl">SEO & SMM Services</h3>
                <p className="text-secondary mb-4">Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit</p>
              </div>
            </div>
          </div>
        </section>
        <section className="main5 pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img className="w-full" src="https://dsathemes.com/html/soltech_1.1/files/images/img-02.svg" alt="Endless Possibilities" />
              </div>
              <div className="md:w-1/2 space-y-4 pl-10">
                <h3 className="text-gray-500 mb-4 pt-20">ENDLESS POSSIBILITIES</h3>
                <h1 className="mb-4 text-4xl font-bold">Unlock the potential of your brand online</h1>
                <p className="text-gray-500 text-lg">Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice quisque and congue aliquam dolor cursus a congue varius</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left pt-20">
                  <div>
                    <h3 className="font-bold text-2xl">Smart</h3>
                    <p className="font-bold text-gray-500">Sodales sapien quaerat diam blandit purus a placerat turpis diam cubilia laoreet mauris</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">Flexible</h3>
                    <p className="font-bold text-gray-500">Sodales sapien quaerat diam blandit purus a placerat turpis diam cubilia laoreet mauris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main6">
          <div className="container mx-auto pt-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 space-y-4 pl-10">
                <p className="text-gray-500 font-bold mb-2">STRATEGY & CONSULTING</p>
                <h1 className="mb-4 text-5xl">Interact with your customers faster</h1>
                <p className="text-gray-500 text-lg">Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice quisque and congue aliquam dolor cursus a congue varius</p>
                <p className="text-gray-500 text-lg">Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice quisque and congue aliquam dolor cursus a congue varius</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                  <div>
                    <h3 className="font-bold text-5xl">65k</h3>
                    <p className="font-bold text-gray-500">Porta justo integer a velna vitae auctor</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-5xl">86%</h3>
                    <p className="font-bold text-gray-500">Porta justo integer a velna vitae auctor</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img className="w-full" src="https://dsathemes.com/html/soltech_1.1/files/images/tablet-01.png" alt="Interact with your customers faster" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-center mb-2 text-5xl pt-10">Our Happy Customers</h1>
          <p className="text-center text-gray-500 text-xl">Read what our lovely customers think about us</p>
        </section>
        <section>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
            <div className="pt-5 space-y-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0ZLRruVcYQUdYntWq6-7dcAIcZKC22E3QQ&s" className="mb-4 ml-10" width="180" height="30" alt="" />
              <h2 className="font-bold ml-10 text-2xl">Great Product, Services</h2>
              <p className="ml-10">Aliquam nullam tempor sapien gravida donec <br />porta congue ipsum justo velna auctor lacus <br />a suscipit egestas magna aliquam and cubiliat</p>
            </div>
            <div className="pt-5 space-y-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0ZLRruVcYQUdYntWq6-7dcAIcZKC22E3QQ&s" className="mb-4" width="180" height="30" alt="" />
              <h2 className="font-bold text-2xl">Best Support</h2>
              <p>Aliquam nullam tempor sapien gravida donec <br />porta congue ipsum justo velna auctor lacus <br />a suscipit egestas magna aliquam and cubilia</p>
            </div>
            <div className="pt-5 space-y-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0ZLRruVcYQUdYntWq6-7dcAIcZKC22E3QQ&s" className="mb-4" width="180" height="30" alt="" />
              <h2 className="font-bold text-2xl">Perfect Choice</h2>
              <p>Aliquam nullam tempor sapien gravida donec <br />porta congue ipsum justo velna auctor lacus <br />a suscipit egestas magna aliquam and cubilia <br />augue blandit</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex justify-between items-start">
              <div className="w-1/2 bg-gray-200 rounded-lg p-6 mr-8">
                <h2 className="text-2xl md:text-4xl text-gray-800 font-semibold mb-4">Solutions that will make your<br /> business successful</h2>
                <ul className="list-disc ml-6 text-lg text-gray-600">
                  <li>Tempor sapien quaerat undo ipsum laoreet purus <br /> and sapien dolor ociis ultrice quisque and congue <br /> aliquam dolor cursus a congue varius</li>
                  <li>Cursus purus suscipit vitae egestas augue volute <br /> placerat undo vitae ultrice sapien</li>
                </ul>
              </div>
              <div className="w-1/2">
                <img className="mx-auto" width="390" height="470" src="https://dsathemes.com/html/soltech_1.1/files/images/progress-left.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-center mb-2 text-5xl pt-20 font-bold">Seamless integration with all <br />your essential tools</h1>
          <p className="text-center text-gray-500 text-2xl pt-5">Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
        </section>

        <section>
          <div className="container mx-auto">
            <div className="flex justify-around items-center pt-20">
              {[
                { src: "https://assets-global.website-files.com/5ff9d835eb709ccb35200fed/5ffbad1005a29e99f937aba2_Vector%402x.png", name: "Zapier" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qs63m0_Y2cLnIu5VcCQHz9-gV1ErR3IKVrIUroqLpOkJSg0YCMFzrBMiX9w7OkI-XXM&usqp=CAU", name: "Intercom" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csLIt6n0Zyh4SK6Ol2C422FXTo1GAF1QnA&s", name: "Zendesk" },
                { src: "https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo=w240-h480-rw", name: "Slack" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XvfMEGCyU0aAHJ6ESc627ahk9Ocd5o85QQ&s", name: "Trello" },
                { src: "https://play-lh.googleusercontent.com/yhSWKwNXmQFWGtxZlfGQXUekQxnSJ4OayrnOZH5KWiPUoXPEfH8-Dp7RwjYD5bNETQ=w240-h480-rw", name: "Notation" }
              ].map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tool.src} alt="Top Companies" width="50" height="50" />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-around items-center pt-20">
              {[
                { src: "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=s48-rw", name: "Discord" },
                { src: "https://play-lh.googleusercontent.com/BbI6xxBrccM3T6cd6D0ReUveoB5-OfFoRUXYFPRVd5dieX-tqnFQh7u7N8-fLf4_wJU=w240-h480-rw", name: "Shopify" },
                { src: "https://play-lh.googleusercontent.com/6mWr6zBNrLByO7wPhcYQ5m6tqEswStT7E2b_FB3lEOvIngXj_hEj_0p6jZaOWHE-i34=w240-h480-rw", name: "Hotspot" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdC0ImgO0HLWfCRH8UPfK4AvK5dWr-JgZGoE9eS2vNOK2e-0w_1LpOgejcsohHeAoxWHY&usqp=CAU", name: "Firebase" },
                { src: "https://play-lh.googleusercontent.com/IBV0NyRdxyNlCgyWnbeZs3rkPYfNXlPJ4-rF0ok3Biox_N-GjLtMZ7Qub5HTmVZiWjg=w240-h480-rw", name: "Mailchimp" },
                { src: "https://play-lh.googleusercontent.com/yZsmiNjmji3ZoOuLthoVvptLB9cZ0vCmitcky4OUXNcEFV3IEQkrBD2uu5kuWRF5_ERA=s48-rw", name: "Zoom" }
              ].map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tool.src} alt="Top Companies" width="50" height="50" />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="last2">
          <hr />
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-full md:w-1/3 pt-20">
                <img className="w-full" decoding="async" src="https://dsathemes.com/html/soltech_1.1/files/images/img-03.svg" alt="" />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-4xl text-dark font-bold pt-40 pl-40 pb-10">Transforming Solutions</h1>
                <p className="text-secondary pl-40">Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris</p>
                <p className="text-secondary pl-40">Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit</p>
                <p className="text-secondary pl-40">Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <h1 className="text-center text-dark pt-40 pb-10 text-5xl">Latest News & Insights</h1>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="shadow-sm">
                <img src="https://masco-html.netlify.app/assets/img/th-4/course-img-1.jpg" className="w-full" alt="" />
                <div className="p-4">
                  <h5 className="text-dark font-bold pb-3 text-2xl">Integer urna turpis donec</h5>
                  <p className="text-secondary">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                </div>
              </div>
              <div className="shadow-sm">
                <img src="https://masco-html.netlify.app/assets/img/th-4/course-img-2.jpg" className="w-full" alt="" />
                <div className="p-4">
                  <h5 className="text-dark font-bold text-2xl">A ligula risus diam auctor</h5>
                  <p className="text-secondary">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                </div>
              </div>
              <div className="shadow-sm">
                <img src="https://masco-html.netlify.app/assets/img/th-4/course-img-3.jpg" className="w-full" alt="" />
                <div className="p-4">
                  <h5 className="text-dark font-bold pb-3 text-2xl">Donec sapien augue cursus</h5>
                  <p className="text-secondary">Aliquam augue suscipit luctus and neque purus an ipsum neque dolor primis ipsum and laoreet dapibus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto my-5 bg-gray-100 p-8 rounded-lg">
            <div className="flex flex-wrap md:flex-nowrap items-center">
              <div className="w-full md:w-3/4 bg-white rounded p-6 shadow-md">
                <h2 className="text-gray-800 text-3xl font-semibold mb-4">Join 25K+ businesses already growing with SolTech</h2>
                <p className="text-gray-600 text-lg">Start your free 14-day trial. No credit card required.</p>
              </div>
              <div className="w-full md:w-1/4 mt-6 md:mt-0 text-right">
                <img src="https://dsathemes.com/html/soltech_1.1/files/images/progress-left.svg" width="420" height="220" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around text-justify">
          <div className="w-full md:w-1/5 flex flex-col pt-20 text-gray-500">
            <img
              src="https://dsathemes.com/html/soltech_1.1/files/images/logo-indigo.png"
              className="pb-2"
              width="145"
              height="45"
              alt="Logo"
            />
            <div>Aliquamnullam hte tempor sapien gravida donec porta congue ipsum</div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col pl-10 pt-20 text-gray-500">
            <b className="pb-2 text-gray-900">About</b>
            <div>About Us</div>
            <div>Our Team</div>
            <div>Careers</div>
            <div>Press & Media</div>
            <div>Contact Us</div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col pt-20 text-gray-500">
            <b className="pb-2 text-gray-900">Discover</b>
            <div>Core Services</div>
            <div>Integration</div>
            <div>Pricing Plans</div>
            <div>Help & Support</div>
            <div>Our Blog</div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col pt-20 text-gray-500">
            <b className="pb-2 text-gray-900">Legal</b>
            <div>Advertising</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
            <div>Site Map</div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col pt-20 text-gray-500">
            <b className="pb-2 text-gray-900">Social</b>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Dribbble</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
      </div>
    </section>
    <footer className="bg-gray-900 text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Meghana. All rights reserved.</p>
      </div>
    </footer>



      </main>
    </div>
  );
}

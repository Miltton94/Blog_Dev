import Header from "../components/Header";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="border-b-8 border-green-500 bg-purple-700 px-4 ">
        <Header />

        <div className="max-w-[1170px] h-full flex1 mx-auto flex gap-7 lg:flex-col-reverse  ">
          <div className="flex flex-col flex-1 items-start pr-12 lg:justify-center">
            <strong className="text-4xl block text-purple-100 leading-10 mb-4">
              Veja o guia definitivo para conquistar seus objetivos como DEV em
              2022
            </strong>
            <p className="text-lg text-white leading-6 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sit commodi repellendus corrupti dolorum? Eius earum quas, omnis
              saepe officia, blanditiis fuga optio iusto laboriosam eum et
              provident. Libero, officiis.
            </p>
            <a
              className="flex gap-1 items-center mb-28"
              href="#">
              <span className="text-purple-100 font-bold text-lg">
                Veja mais
              </span>
              <img
                src="src/assets/arrow-right.svg"
                alt="Ver mais"
              />
            </a>
          </div>

          <div className="w-full flex flex-1 mb-16  lg:justify-center">
            <img
              src="src/assets/featured-image.png"
              alt=""
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white max-w-[1170px] mx-auto px-4">
        <div className="flex items-start  gap-32 py-16 md:flex-col">
          <div>
            <img
              src="src/assets/post-1.png"
              alt=""
              className="w-full object-cover mb-2"
            />
            <Notice title="Começando no ReactJS em 2022" />
          </div>

          <div className="flex flex-col gap-6">
            <Notice title="Conheça as principais técnicas para conseguir uma vaga internacional em programação" />
            <span className="border border-gray-100"></span>
            <Notice title="Veja a evolução do Front-end na prática" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-7 pb-6 md:flex-col">
          <div>
            <img
              src="src/assets/post-2.png"
              alt=""
              className="w-full object-cover mb-2"
            />
            <Notice title="10 dicas para conseguir a vaga desejada" />
          </div>
          <div>
            <img
              src="src/assets/post-3.png"
              alt=""
              className="w-full object-cover mb-2"
            />
            <Notice title="Deixe seu código mais semântico com essas dicas" />
          </div>
          <div>
            <img
              src="src/assets/post-4.png"
              alt=""
              className="w-full object-cover mb-2"
            />
            <Notice title="Use essas dicas nas suas aplicações mobile" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

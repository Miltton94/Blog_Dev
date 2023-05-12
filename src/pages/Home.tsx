import Header from "../components/Header";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

import Arrow from "../assets/arrow-right.svg";
import Featured from "../assets/featured-image.png";
import Post1 from "../assets/post-1.png";
import Post2 from "../assets/post-2.png";
import Post3 from "../assets/post-3.png";
import Post4 from "../assets/post-4.png";

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
                src={Arrow}
                alt="Seta para ver mais"
              />
            </a>
          </div>

          <div className="w-full flex flex-1 mb-16  lg:justify-center">
            <img
              src={Featured}
              alt="Tela de um notebook"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white max-w-[1170px] mx-auto px-4">
        <div className="flex items-start  gap-32 py-16 md:flex-col">
          <div>
            <img
              src={Post1}
              alt="Notebook na mesa"
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
              src={Post2}
              alt="Uma pessoa programando"
              className="w-full object-cover mb-2"
            />
            <Notice title="10 dicas para conseguir a vaga desejada" />
          </div>
          <div>
            <img
              src={Post3}
              alt="Código de programação em uma tela"
              className="w-full object-cover mb-2"
            />
            <Notice title="Deixe seu código mais semântico com essas dicas" />
          </div>
          <div>
            <img
              src={Post4}
              alt="Um celular na mão"
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

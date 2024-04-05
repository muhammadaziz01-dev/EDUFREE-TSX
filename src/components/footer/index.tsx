import "./style.scss";

import { NavLink } from "react-router-dom";

import { Container } from "@containers";

const index = () => {
  return (
    <footer className="bg-[#1C1E53]">
      <Container>
        <div className="flex items-start justify-between pt-[64px]">
          <div className="flec flec-col">
            <NavLink to={"/"} className="text-[24px] text-white font-bold *:">
              [EDUFREE]
            </NavLink>
            <p className="text[16px] text-white w-[300px] mt-[11px]">
              Bangun dan wujudkan cita bersama edufree
            </p>
          </div>
          <ul className="flex items-start gap-[99px]">
            <li>
              <h2 className="text-[20px] font-medium text-white mb-[21px]">
                Sosial Media
              </h2>
              <p className="text-[16px] font-normal text-white mb-1">
                Instagram
              </p>
              <p className="text-[16px] font-normal text-white mb-1">Twitter</p>
              <p className="text-[16px] font-normal text-white mb-1">
                LinkedIn
              </p>
            </li>
            <li>
              <h2 className="text-[20px] font-medium text-white mb-[21px]">
                Program
              </h2>
              <p className="text-[16px] font-normal text-white mb-1">
                Merdeka Belajar
              </p>
              <p className="text-[16px] font-normal text-white mb-1">
                Finterpreneur
              </p>
            </li>
            <li>
              <h2 className="text-[20px] font-medium text-white mb-[21px]">
                DUKUNGAN
              </h2>
              <p className="text-[16px] font-normal text-white mb-1">
                Tentang Kami
              </p>
              <p className="text-[16px] font-normal text-white mb-1">
                Ketentuan
              </p>
              <p className="text-[16px] font-normal text-white mb-1">
                Kebijakan Privasi
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-between max-w-[420px] rounded-t-md bg-[#FCD980] mt-[64px] py-4 px-7">
          <p className="flex flex-col items-start">
            <strong className="text-[18px] font-medium text-[#282938]">
              Email
            </strong>
            <span className="text-[16px] font-normal text-[#282938]">
              contact@website.com
            </span>
          </p>
          <p className="flex flex-col items-start">
            <strong className="text-[18px] font-medium text-[#282938]">
              Telephone
            </strong>
            <span className="text-[16px] font-normal text-[#282938]">
              +6288 999 222 333
            </span>
          </p>
        </div>
      </Container>
      <section className="w-[100%] bg-white">
        <Container>
          <div className="flex items-center justify-between py-[26px]">
            <h2 className="text-[#282938] text-[18px] font-medium">
              © Copyright EDUFREE 2021 - {new Date().getFullYear()}
            </h2>
            <div className=" flex items-center gap-[35px]">
              <NavLink
                to={"/"}
                className="text-[#282938] text-[16px] font-medium"
              >
                HOME
              </NavLink>
              <NavLink
                to={"/tentang"}
                className="text-[#282938] text-[16px] font-medium"
              >
                TENTANG KAMI
              </NavLink>
              <NavLink
                to={"/kursus"}
                className="text-[#282938] text-[16px] font-medium"
              >
                KURSUS
              </NavLink>
              <NavLink
                to={"/faq"}
                className="text-[#282938] text-[16px] font-medium"
              >
                FAQ
              </NavLink>
              <NavLink
                to={"/blog"}
                className="text-[#282938] text-[16px] font-medium"
              >
                BLOG
              </NavLink>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default index;

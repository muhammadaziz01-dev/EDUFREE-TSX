
import { NavLink, Outlet } from "react-router-dom";

import "./style.scss";

import { Container } from "@containers";

const index = () => {
  return (
    <>
      <header className="bg-[#1C1E53]">
        <Container>
          <nav className="flex items-center justify-between py-5">
            <NavLink to={"/"} className="text-[24px] text-white font-bold *:">
              [EDUFREE]
            </NavLink>
            <div className="flex items-center gap-[72px]">
              <ul className="flex items-center gap-7">
                <li>
                  <NavLink
                    to={"/"}
                    className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/tentang"}
                    className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200"
                  >
                    TENTANG KAMI
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/kursus"}
                    className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200"
                  >
                    KURSUS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/faq"}
                    className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/blog"}
                    className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200 flex items-center gap-[6px]"
                  >
                    BLOG <i className="bi bi-box-arrow-up-right"></i>
                  </NavLink>
                </li>
              </ul>
              <NavLink
                to={"/login"}
                className="text-[16px] text-white font-normal hover:bg-white hover:text-[#1C1E53] duration-200 active:bg-transparent active:text-white py-[13px] px-[41px] border rounded-md"
              >
                Login
              </NavLink>
            </div>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default index;

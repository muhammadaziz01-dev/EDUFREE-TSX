import { Route, Routes } from "react-router-dom";
import { Header, Main, Footer } from "./components";

import { Home, Blog , Login ,Faq  , Kursus , Tentang } from "@pages";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kursus" element={<Kursus />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;

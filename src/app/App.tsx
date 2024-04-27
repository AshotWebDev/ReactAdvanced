import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "@/components/shared/NavBar/NavBar";
import LeftSidebar from "@/components/shared/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar/RightSidebar";
import PostPageAsync from "@/pages/PostPage/PostPage.async";
import BurgerMenu from "@/components/shared/BurgerMenu/BurgerMenu";



const App = () => {

  return (
    <main className="relative">
      <Navbar />

      

      <div className="flex ">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 xs:px-2 sm:px-10 md:px-6 md:pb-10 bg-slate-100 dark:bg-zinc-800">
          <div className="mx-autho w-full max-w-5xl">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<MainPageAsync />} />
                <Route path="/posts" element={<PostPageAsync />} /> 
                <Route path="/about" element={<AboutPageAsync />} />
              </Routes>
            </Suspense>
          </div>
        </section>

        <RightSidebar/> 
      </div>
    </main>
  );
};

export default App;
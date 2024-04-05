import { Button } from '@/components/ui/button';
import AboutPageAsync from '@/pages/AboutPage/AboutPage.async';
import MainPageAsync from '@/pages/MainPage/MainPage.async';
import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [changeMode, setChangeMode] = useState<boolean>(false);

  const handleClick = () => {
    setChangeMode(!changeMode);
  };

  const getBackgroundColor = (): string | any => {
    const mediaQuery = window.matchMedia("only screen");
    
    if (mediaQuery.matches) {
      const bgColor = getComputedStyle(document.body).backgroundColor;
      return bgColor;
    } else {
      return null;
    }
  };

  let bgColor: string | any = getBackgroundColor();

  return (
    <div className={`flex flex-col h-screen ${changeMode && bgColor === 'rgb(255, 255, 255)' ? 'bg-white' : 'bg-black'}`}>
      <nav className={`${changeMode && bgColor === 'rgb(255, 255, 255)' ? 'bg-slate-200' : 'bg-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/" className={`px-3 py-2 rounded-md font-semibold ${changeMode && bgColor === 'rgb(255, 255, 255)' ? 'text-black' : 'text-white'}`}>
                Main
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded-md font-semibold ${changeMode && bgColor === 'rgb(255, 255, 255)' ? 'text-black' : 'text-white'}`}>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Button className="absolute top-2 right-0" onClick={handleClick}>
        Change Mode
      </Button>

      <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync  changeMode={changeMode} bgColor={bgColor} />} />
            <Route path="/about" element={<AboutPageAsync changeMode={changeMode} bgColor={bgColor}  />} />
          </Routes>
      </Suspense>
    </div>
  );
};

export default App;

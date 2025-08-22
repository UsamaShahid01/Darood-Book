
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contents from './Components/Contents/Contents';
import Contact from './Components/Contact/Contact';
import Author from './Components/Author/Author';


import ContentsDetail1 from './Components/Contents/ContentsDetail1/ContentsDetail1';
import ContentsDetail2 from './Components/Contents/ContentsDetail2/ContentsDetail2';
import ContentsDetail3 from './Components/Contents/ContentsDetail3/ContentsDetail3';
import ContentsDetail4 from './Components/Contents/ContentsDetail4/ContentsDetail4';
import ContentsDetail5 from './Components/Contents/ContentsDetail5/ContentsDetail5';
import ContentsDetail6 from './Components/Contents/ContentsDetail6/ContentsDetail6';
import ContentsDetail7 from './Components/Contents/ContentsDetail7/ContentsDetail7';
import ContentsDetail8 from './Components/Contents/ContentsDetail8/ContentsDetail8';
import ContentsDetail9 from './Components/Contents/ContentsDetail9/ContentsDetail9';
import ContentsDetail10 from './Components/Contents/ContentsDetail10/ContentsDetail10';
import ContentsDetail11 from './Components/Contents/ContentsDetail11/ContentsDetail11';
import ContentsDetail12 from './Components/Contents/ContentsDetail12/ContentsDetail12';
import ContentsDetail13 from './Components/Contents/ContentsDetail13/ContentsDetail13';
import ContentsDetail14 from './Components/Contents/ContentsDetail14/ContentsDetail14';
import ContentsDetail15 from './Components/Contents/ContentsDetail15/ContentsDetail15';
import ContentsDetail16 from './Components/Contents/ContentsDetail16/ContentsDetail16';

// ✅ Sayings imports
import MujahidHussaini from './Components/Sayings/MujahidHussaini';
import IshaqBhatti from './Components/Sayings/IshaqBhatti';
import Zameerulhaq from './Components/Sayings/Zameerulhaq';
import QariMuhammadTahir from './Components/Sayings/QariMuhammadTahir';
import AbdulMajeed from './Components/Sayings/AbdulMajeed';
import HafeezTaib from './Components/Sayings/HafeezTaib';
import RiazMajeed from './Components/Sayings/RiazMajeed';
import ArifRaza from './Components/Sayings/ArifRaza';
import AshrafArif from './Components/Sayings/AshrafArif';
import NazarMohudin from './Components/Sayings/NazarMohudin';
import MuzafarHussain from './Components/Sayings/MuzafarHussain';
import TariqIsmael from './Components/Sayings/TariqIsmael';
import Rafiq from './Components/Sayings/Rafiq';
import SaeedAnwar from './Components/Sayings/SaeedAnwar';


const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <Navbar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/author" element={<Author language={language} />} />

        

        <Route path="/contents/detail/1" element={<ContentsDetail1 key={language} language={language} />} />
        <Route path="/contents/detail/2" element={<ContentsDetail2 key={language} language={language} />} />
        <Route path="/contents/detail/3" element={<ContentsDetail3 key={language} language={language} />} />
        <Route path="/contents/detail/4" element={<ContentsDetail4 key={language} language={language} />} />
        <Route path="/contents/detail/5" element={<ContentsDetail5 key={language} language={language} />} />
        <Route path="/contents/detail/6" element={<ContentsDetail6 key={language} language={language} />} />
        <Route path="/contents/detail/7" element={<ContentsDetail7 key={language} language={language} />} />
        <Route path="/contents/detail/8" element={<ContentsDetail8 key={language} language={language} />} />
        <Route path="/contents/detail/9" element={<ContentsDetail9 key={language} language={language} />} />
        <Route path="/contents/detail/10" element={<ContentsDetail10 key={language} language={language} />} />
        <Route path="/contents/detail/11" element={<ContentsDetail11 key={language} language={language} />} />
        <Route path="/contents/detail/12" element={<ContentsDetail12 key={language} language={language} />} />
        <Route path="/contents/detail/13" element={<ContentsDetail13 key={language} language={language} />} />
        <Route path="/contents/detail/14" element={<ContentsDetail14 key={language} language={language} />} />
        <Route path="/contents/detail/15" element={<ContentsDetail15 key={language} language={language} />} />
        <Route path="/contents/detail/16" element={<ContentsDetail16 key={language} language={language} />} />

        {/* ✅ Sayings routes now receive language */}
        <Route path="/sayings/mujahid-hussaini" element={<MujahidHussaini key={language} language={language} />} />
        <Route path="/sayings/ishaq-bhatti" element={<IshaqBhatti key={language} language={language} />} />
        <Route path="/sayings/zameerul-haq" element={<Zameerulhaq key={language} language={language} />} />
        <Route path="/sayings/qari-muhammad-tahir" element={<QariMuhammadTahir key={language} language={language} />} />
        <Route path="/sayings/abdul-majeed" element={<AbdulMajeed key={language} language={language} />} />
        <Route path="/sayings/hafeez-taib" element={<HafeezTaib key={language} language={language} />} />
        <Route path="/sayings/riaz-majeed" element={<RiazMajeed key={language} language={language} />} />
        <Route path="/sayings/arif-raza" element={<ArifRaza key={language} language={language} />} />
        <Route path="/sayings/ashraf-arif" element={<AshrafArif key={language} language={language} />} />
        <Route path="/sayings/nazar-mohudin" element={<NazarMohudin key={language} language={language} />} />
        <Route path="/sayings/muzafar-hussain" element={<MuzafarHussain key={language} language={language} />} />
        <Route path="/sayings/tariq-ismael" element={<TariqIsmael key={language} language={language} />} />
        <Route path="/sayings/rafiq" element={<Rafiq key={language} language={language} />} />
        <Route path="/sayings/saeed-anwar" element={<SaeedAnwar key={language} language={language} />} />

      </Routes>
    </Router>
  );
};

export default App;



import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style ={{backgroundImage: "url(/bg_img1.png)"}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>     
      <Footer />
    </div>
    </BrowserRouter>
  );
}
 
export default App;

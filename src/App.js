import './App.css';
import Nav from './sections/navbar/nav'
import Home from './sections/home/home'
import About from './sections/about/about'
import Contact from './sections/contact/contact'
import Footer from './sections/footer/footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

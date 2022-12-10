import './App.css';
import './index.css'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './Containers'
import {Brand, CTA, Navbar} from './Components'
function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import "./App.css";
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "project", description:
        "Snapshots and descriptions of projects job-aid, moviesNme and ArtMart",
    },
    { name: "resume", description: "Resume with highlights about experience" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {/* <div>
          <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div> */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
    </div>
  );
}

export default App;

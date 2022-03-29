import React from 'react'

const Nav = () => {
    const categories = [
        {
          name: "portfolio", description:
            "Snapshots and descriptions of projects job-aid, moviesNme and ArtMart",
        },
        { name: "resume", description: "Resume with highlights about experience" },
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }
      
  return (
    <header>
         <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 💻  Hanan Dadras</span>
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
         <span onClick={categorySelected} >
      {category.name}
    </span>
  </li>
      ))}
    </ul>
  </nav>
</header>
  )
}

export default Nav;
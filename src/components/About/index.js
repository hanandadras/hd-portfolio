import React from 'react'

const About = () => {
  return (
    <section className="my-5">
    <img src="./images/laptop.avif" className="my-2" style={{ width: "100%" }}alt="cover"/>
    {/* <img src={coverImage} className="my-2" style={{ width: "80%" }} alt="cover" /> */}
    <h1 id="about">About me:</h1>
    <p>I am a candidate at UC Davis Full Stack Dev</p>
    <p>I like teamwork, innovative apps and continuous learning.</p> 
    </section>
  )
}

export default About;
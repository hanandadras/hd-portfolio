import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src="https://cdn5.vectorstock.com/i/thumb-large/95/24/asian-business-woman-vector-15479524.jpg"
					alt="my avatar"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer bootcamp candidate at UC Davis. I have developed
					skills in HTML, JavaScript, CSS, React.js. I like developing innovative apps and enjoy teamwork.
				</p>
		
			</div>
		</section>
	);
}

export default About;
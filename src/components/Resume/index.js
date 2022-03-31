import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/resume.jpeg")} download>
					<h4>Resume link</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML5, CSS, Javascript, jQuery, Bootstrap, react. </li>
				
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>NodeJS, Express, MVC, PWA</li>
			
				</ol>
				<br></br>
				<h5>Developer Proficiencies</h5>
				<ol>
					<li>Git, npm, Jest, webpack</li>
			
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL, NoSQL, Sequelize, MongoDB, Mongoose, Graphql</li>
			
				</ol>
			</div>
		</section>
	);
}

export default Resume;
import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'job-aid',
			description:
				'A job search app using APIs to search by position and zipcode',
			image: 'src/assets/images/job-aid.jpeg',
			github: 'https://github.com/hanandadras/job-aid',
		},
		{
			name: 'moviesNme',
			description:
				'A movie streaming app helping movie fans sign up, look by category and save their favorite movies',
			image: 'src/assets/images/moviesNme.jpeg',
			github: 'https://github.com/MeenaAlemiJalal/moviesNme',
		},
		{
			name: 'ArtMart',
			description:
				'An art gallery, blog marketplace app helping artists ahowcase their pieces',
			image: 'src/assets/images/Screen Shot 2022-03-19 at 12.08.47 PM.png',
			github: 'https://github.com/hanandadras/ArtMart',
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">job-aid <br></br> 'https://github.com/hanandadras/job-aid'<br></br>
				moviesNme <br></br>'https://github.com/MeenaAlemiJalal/moviesNme'<br></br>
				ArtMart<br></br> 'https://github.com/hanandadras/ArtMart'</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<projects projects={projects[0]}></projects>
					</li>
					<li className="padding">
						<projects projects={projects[1]}></projects>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<projects projects={projects[2]}></projects>
					</li>
                </ul>
			</div>
		</section>
	);
}

export default Portfolio;
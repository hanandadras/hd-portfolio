import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'job-aid',
      category: 'project',
      description: 'A job search app used by searching zipcode and position',
    },
    {
      name: 'moviesNme',
      category: 'project',
      description: 'A movie streaming app',
    },
    {
      name: 'ArtMart',
      category: 'project',
      description: 'An app used as a gallery, blog and marketplace to showcase artwork',
    },
   
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
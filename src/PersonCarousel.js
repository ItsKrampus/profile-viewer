import React, { useState,useEffect } from 'react';


const peopleData = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'web developer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreusebefore they sold out chambray pop-up. Shaman humblebrag pickled coloring booksalvia hoodie, cold-pressed four dollar toast everyday carry"
    ,
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'web designer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disruptglossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashionaxe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'intern',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },

    {
    id: 4,
    name: 'Bill Anderson',
    job: 'the boss',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
    'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashionaxe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulbpop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    
    
];

const PersonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPerson = () => {
    setCurrentIndex((currentIndex - 1 + peopleData.length) % peopleData.length);
  };

  const nextPerson = () => {
    setCurrentIndex((currentIndex + 1) % peopleData.length);
  };

  const person = peopleData[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevPerson();
      } else if (event.key === 'ArrowRight') {
        nextPerson();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },); 
  return (
    <div className="person-carousel">
      <div className="arrow left-arrow" onClick={prevPerson}>
        &lt;
      </div>
      <div className="person-card">
        <img src={person.image} alt="Person" className="person-image" />
        <h2 className="person-name">{person.name}</h2>
        <p className="person-job">{person.job}</p>
        <p className="person-text">{person.text}</p>
      </div>
      <div className="arrow right-arrow" onClick={nextPerson}>
        &gt;
      </div>
    </div>
    
  );
};

export default PersonCarousel;
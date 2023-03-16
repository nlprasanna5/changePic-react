import React, { useState, useRef, useEffect } from 'react';
import './imageStyle.css';

const imageUrls = [
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg',
  'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
  'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  'https://media.gettyimages.com/id/1246464390/photo/the-lovely-vidhan-soudha.jpg?s=612x612&w=gi&k=20&c=zXOBdw0y-O1QneoVc4YKKsV8nFkZVfWZVj4Nhs9pAQM=',
  'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
  'https://freerangestock.com/thumbnail/109803/meditation--mindfulness--person-meditating-at-sunset-over-the-.jpg',
  'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg',
  'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  'https://thumbs.dreamstime.com/b/beautiful-flowers-over-lake-lucerne-mountains-background-switzerland-91061355.jpg',
  'https://images.livemint.com/img/2022/08/01/1600x900/Cat-andriyko-podilnyk-RCfi7vgJjUY-unsplash_1659328989095_1659328998370_1659328998370.jpg',
  'https://cdn.arstechnica.net/wp-content/uploads/2022/04/GettyImages-997016774.jpg',
];

const Images = () => {
  const [imageUrlIndex, setImageUrlIndex] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.src = imageUrls[imageUrlIndex];
  }, [imageUrlIndex]);

  const handleImageChange = () => {
    setImageUrlIndex((imageUrlIndex + 1) % imageUrls.length);   //0+1=> 1%12=>1
  }

  return (
    <div className="container">
      <div className="image-container">
        <img ref={imgRef} alt="example" />
      </div>
      <div className="button-container">
        <button onClick={handleImageChange}>Change Pic</button>
      </div>
    </div>
  );
}

export default Images;

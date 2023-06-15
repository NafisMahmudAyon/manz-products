
/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
  const carouselOptions = {
    showArrows: true,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 1000,
    showStatus: false,
    dynamicHeight: false,
    emulateTouch: true,
    swipeable: true,
  };
  return (
    <Carousel {...carouselOptions}>
      { Array.isArray(images) ?
        images.map((image) => (
        <div key={image.id} className="pt-10 flex items-center justify-center w-full h-full">
          <img src={image.link} alt={` ${image.id}`}  className=" object-cover"/>
        </div>
      )) : null}
    </Carousel>
  );
};

export default ImageCarousel;


/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
  const carouselOptions = {
    showArrows: true,
    showThumbs: false,
    infiniteLoop: false,
    autoPlay: false,
    interval: 1000,
    showStatus: false,
    dynamicHeight: false,
    emulateTouch: false,
    swipeable: false,
    transitionTime: 800,
    showIndicators: true,
  };
  return (
    <Carousel {...carouselOptions}>
      { Array.isArray(images) ?
        images.map((image) => (
        <div key={image.id} className="">
          <img src={image.link} alt={` ${image.id}`}  className="w-full h-[400px] object-contain my-[10px]"/>
        </div>
      )) : null}
    </Carousel>
  );
};

export default ImageCarousel;

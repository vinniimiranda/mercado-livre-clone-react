import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Container, SliderImage, ArrowButton, Dots, Dot } from './styles';

export default function Slider() {
  const [postion, setPosition] = useState(0);
  const images = [
    'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-8e740347-f6f2-4f78-a30a-af070846e2ca.jpg',
    'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-0368dd63-951e-416f-8889-aaa4f6ec1a5c.jpg',
    'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-57fcd86c-1ad8-437c-8f41-a134ed403f88.jpg',
    'https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLB-carnaval2020/042bc060-4475-11ea-9b8a-854a72f18fe1-home-slider_desktop.jpg',
    'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-793ab0c1-d232-4ad3-8ddd-387d0a845c3a.jpg',
  ];

  function nextPosition() {
    if (postion === images.length - 1) {
      setPosition(0);
    } else {
      setPosition(postion + 1);
    }
  }

  function backPosition() {
    if (postion === 0) {
      setPosition(images.length - 1);
    } else {
      setPosition(postion - 1);
    }
  }
  return (
    <Container>
      <ArrowButton left onClick={backPosition}>
        <FaChevronLeft size={25} color="#3483fa" />
      </ArrowButton>
      <SliderImage>
        <img alt="1" src={images[postion]} />
      </SliderImage>
      <ArrowButton onClick={nextPosition}>
        <FaChevronRight size={25} color="#3483fa" />
      </ArrowButton>

      <Dots>
        {images.map((image, index) => (
          <Dot
            selected={postion === index}
            onClick={() => setPosition(index)}
          />
        ))}
      </Dots>
    </Container>
  );
}

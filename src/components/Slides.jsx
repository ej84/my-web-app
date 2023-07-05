import { CCarousel, CImage, CCarouselItem } from "@coreui/react";


const Slides = () => {

    return (
      <div className="container w-50 h-50 mt-5">
        <CCarousel controls transition="crossfade">
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://raw.githubusercontent.com/ej84/my-web-app/main/src/img/oc_1.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://raw.githubusercontent.com/ej84/my-web-app/main/src/img/oc_2.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://raw.githubusercontent.com/ej84/my-web-app/main/src/img/oc_3.jpg" alt="slide 3" />
        </CCarouselItem>
        </CCarousel>
      </div>
    );
};

export default Slides;
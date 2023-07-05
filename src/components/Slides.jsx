import { CCarousel, CImage, CCarouselItem } from "@coreui/react";


const Slides = () => {

    return (
      <div className="container w-50 h-50 mt-5">
        <CCarousel controls transition="crossfade">
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://pixabay.com/get/g01a576cee3c7750b6b9451e615120af4eb60df4e574c396608bdbc4fa84d715c31e5f620a8201fdf6b2ca85528dbb0610770b2ed1142e4091e6178aea0ded468_1280.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://pixabay.com/get/g99d60d80dfde130764508d27518a9ae30951191a687523938dba614dd2c22b88e62eb0eda0f48e7838c7cab614cd07868337727541fb01553110d18ccf4b15c0_1280.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
        <CImage className="d-block w-100" src="https://pixabay.com/get/gd976466743aba9a05137bea246e996557d129a21cf11e545d4a55f6af53d826bb6fee3784f3308ef3021af3eddaef52782974612540ba239daf32893a1302fe0_1280.jpg" alt="slide 3" />
        </CCarouselItem>
        </CCarousel>
      </div>
    );
};

export default Slides;
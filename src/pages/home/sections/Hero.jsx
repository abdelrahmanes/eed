import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const slides = [
    {
      id: 1,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 2,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 3,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 4,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 5,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 6,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    {
      id: 7,
      title: "",
      description: "",
      image: "bg-footer-texture",
    },
    
  ];
  return (
    <Slider {...settings} className="max-w-full overflow-hidden">
      {slides.map((slide) => {
        return (
          <div
            key={slide.id}
            className="relative flex items-center justify-center w-full"
          >
            <div
              className={`flex flex-col items-center bg-no-repeat bg-cover justify-center h-screen gap-6 text-white bg-center ${slide.image}`}
            >
              <h1 className="text-6xl ">{slide.title}</h1>
              <p className="text-3xl">{slide.description}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Hero;

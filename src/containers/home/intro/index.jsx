import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import HomeData from "../../../data/home.json";
import Intro from "../../../components/intro";
import SocialIcon from "../../../components/social-icon";

SwiperCore.use([Navigation]);
const IntroContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".slider-active .swiper-button-next",
            prevEl: ".slider-active .swiper-button-prev",
        },
    };
    return (
        <div className="section slider-section">
            <Swiper effect="fade" className="slider-active" {...swiperOption}>
                {HomeData[0].slider &&
                    HomeData[0].slider.map((single, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Intro key={key} data={single} />
                            </SwiperSlide>
                        );
                    })}
                <div className="swiper-button-next">
                    <i className="icofont-long-arrow-right"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="icofont-long-arrow-left"></i>
                </div>
            </Swiper>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://twitter.com/shaurabh19"
                        icon="fab fa-twitter"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/ShaurabhT/"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.instagram.com/Shaurabh_/"
                        icon="fab fa-instagram"
                    />
                </li>
            </ul>
        </div>
    );
};

export default IntroContainer;

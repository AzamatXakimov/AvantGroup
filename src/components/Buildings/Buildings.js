import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Buildings.scss";
import { EffectFade, Pagination } from "swiper";
export const Buildings = () => {
    return (
		<>
			<section className='buildings'>
                <div className="buildings-wrapper">
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Pagination]}
                        className='buildingsSwiper'
                    >
                        <SwiperSlide>
                            <div className="buildings-item buildings-item-first">
                                <div className="container">
                                    <div className="buildings-inner buildings-inner-first">
                                        <div className="buildings-infobox">
                                            <div className="buildings-infobox-top buildings-infobox-top-first">
                                                <h3 className="buildings-title">
                                                    «Здание-лотос» The Lotus Building
                                                </h3>
                                                <span className="buildings-text">
                                                    г.Ташкент. Шайхантахурский район.
                                                </span>
                                            </div>
                                            <div className="buildings-infobox-bottom">
                                                <p className="buildings-desc">
                                                    По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="buildings-item buildings-item-second">
                                <div className="container">
                                    <div className="buildings-inner buildings-inner-second">
                                        <div className="buildings-infobox">
                                            <div className="buildings-infobox-top buildings-infobox-top-second">
                                                <h3 className="buildings-title">
                                                    «Здание-лотос» The Lotus Building
                                                </h3>
                                                <span className="buildings-text">
                                                    г.Ташкент. Шайхантахурский район.
                                                </span>
                                            </div>
                                            <div className="buildings-infobox-bottom">
                                                <p className="buildings-desc">
                                                    По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="buildings-item buildings-item-third">
                                <div className="container">
                                    <div className="buildings-inner buildings-inner-third">
                                        <div className="buildings-infobox">
                                            <div className="buildings-infobox-top buildings-infobox-top-third">
                                                <h3 className="buildings-title">
                                                    «Здание-лотос» The Lotus Building
                                                </h3>
                                                <span className="buildings-text">
                                                    г.Ташкент. Шайхантахурский район.
                                                </span>
                                            </div>
                                            <div className="buildings-infobox-bottom">
                                                <p className="buildings-desc">
                                                    По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="buildings-item buildings-item-fourth">
                                <div className="container">
                                    <div className="buildings-inner buildings-inner-fourth">
                                        <div className="buildings-infobox">
                                            <div className="buildings-infobox-top buildings-infobox-top-fourth">
                                                <h3 className="buildings-title">
                                                    «Здание-лотос» The Lotus Building
                                                </h3>
                                                <span className="buildings-text">
                                                    г.Ташкент. Шайхантахурский район.
                                                </span>
                                            </div>
                                            <div className="buildings-infobox-bottom">
                                                <p className="buildings-desc">
                                                    По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
			</section>
		</>
	);
}

<script setup>
    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import { Autoplay } from 'swiper/modules'

    const modules = [Autoplay]

</script>


<template>
    <div class="banner">
        <img src="@/assets/testpic.jpg" alt="">
    </div>

    <div id="swiper">
        <div class="swiper-content">
            <Swiper
            :modules="modules"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :loop="true"
            :speed="800"
            :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }"
            >
                <SwiperSlide>
                    <img src="@/assets/testpic.jpg" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/testpic.jpg" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/testpic.jpg" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/testpic.jpg" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/testpic.jpg" alt="">
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style scoped>
/* 横幅样式 */
.banner {
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-top: 70px;
    margin-bottom: 40px;
}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Swiper 容器样式 */
#swiper {
    width: 100%;
    padding: 40px 0;
    background-color: #f8f9fa;
}

.swiper-content {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

/* Swiper 滑块样式 */
.swiper-slide {
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.swiper-slide:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .banner {
        height: 200px;
        margin-top: 60px;
    }
    
    .swiper-content {
        padding: 0 15px;
    }
    
    .swiper-slide {
        height: 180px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .swiper-slide {
        height: 220px;
    }
    
    .swiper-content {
        padding: 0 30px;
    }
}

@media (min-width: 1024px) {
    .swiper-slide {
        height: 250px;
    }
    
    .swiper-content {
        padding: 0 40px;
    }
}

@media (min-width: 1600px) {
    .banner {
        height: 450px;
    }
    
    .swiper-slide {
        height: 280px;
    }
    
    .swiper-content {
        padding: 0 60px;
    }
}
</style>
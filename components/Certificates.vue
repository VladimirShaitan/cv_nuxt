<template>
    <section id="stats" class="count-up">
        <div>
            <div class="row">
                <div class="col-twelve">
                    <div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                        <div class="carousell-wrapper">
                          <VueSlickCarousel v-bind="settings">
                                  <div class="slide-wrapper" v-for="(cert, index) in certificates.data" :key="index">
                                    <div class="slide"  >
                                        <img class="image-pop" :src="cert.img" alt="">
                                    </div>
                                  </div>
                          </VueSlickCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import modal from '../assets/scripts/popup';
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'


    export default {
        props:['certificates'],
        name: "Certificates",
        components: { VueSlickCarousel },
        data(){
            return {
                settings:{
                  "dots": false,
                  "infinite": true,
                  "autoplay": true,
                  "speed": 1000,
                  "slidesToShow": 5,
                  "slidesToScroll": 1,
                  "initialSlide": 0,
                  "arrows": false,
                  "responsive": [
                    {
                      "breakpoint": 1024,
                      "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                      }
                    },
                    {
                      "breakpoint": 600,
                      "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                      }
                    },
                    {
                      "breakpoint": 480,
                      "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                      }
                    }
                  ]
                },
            }
        }
    }
</script>

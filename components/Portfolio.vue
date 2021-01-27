<template>
    <section id="portfolio">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>{{titles.main}}</h5>
                <h1>{{titles.sub}}</h1>
                <p class="lead">
                    {{titles.desc}}
                </p>
            </div>
        </div>
        <div class="row portfolio-content">
            <div class="col-twelve">
                <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

                    <template v-for="(item, index) in Object.values(portfolio)">


                        <div class="bgrid folio-item" :key="index" :style="index % 2 != 0 &&  index != 1 ?  'transform:translateY(-138px)' : ''">
                            <div class="item-wrap">
                                <img :src="item.img" alt="Liberty">
                                <a href="#modal-01" class="overlay">
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{item.name}}</h3>
                                            <span class="folio-types">
                                                {{item.sub_title}}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
      props:['titles', 'portfolio'],
      name: "Portfolio",
    }
</script>

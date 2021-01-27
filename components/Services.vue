<template>
    <section id="services">
        <div class="overlay"></div>
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>{{services.title}}</h5>
                <h1>{{services.sub_title}}</h1>
                <p class="lead">{{services.description}}</p>
            </div>
        </div>
        <div class="row services-content">
            <div class="services-list">

                <template v-for="(service, index) in services.data">
                    <div class="service" :key="index">
                        <span class="icon"><i :class="service.icon"></i></span>
                        <div class="service-content">
                            <h3>{{service.title}}</h3>
                            <p class="desc">{{service.description}}</p>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </section>
</template>



<script>
    export default {
        props: ['services'],
        name: "Services",
    }
</script>

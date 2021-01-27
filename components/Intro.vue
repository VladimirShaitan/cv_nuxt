<template>
    <section id="intro">
        <div class="intro-overlay"></div>
        <div class="intro-content">
            <div class="row">
                <div class="col-twelve">
                    <h5>{{info.top_title}}</h5>
                    <h1>{{info.top_name}}</h1>
                    <p class="intro-position">
                        <span v-for="(position, index) in info.top_positions" :key="index">
                            {{position}}
                        </span>
                    </p>
                    <a class="button stroke smoothscroll" href="#about" title="">{{info.top_btn}}</a>
                </div>
            </div>
        </div>
        <ul class="intro-social">
            <li v-for="(social, index) of socials" :key="index">
                <a :href="social.url" target="_blank">
                    <i :class="'fa fa-'+social.name"></i>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
      name: "Intro",
      props: ['info', 'socials'],
    }
</script>

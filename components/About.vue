<template>
    <section id="about">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>{{info.title}}</h5>
                <h1>{{info.sub_title}}</h1>
                <div class="intro-info">
                    <img :src="info.img" alt="Profile Picture">
                    <p class="lead">{{info.description}}</p>
                </div>
            </div>
        </div>
        <div class="row about-content">
            <div class="col-six tab-full">
                <h3>{{profile.title}}</h3>
                <ul class="info-list">
                    <li
                      v-for="(data, index) in profile.personal_data"
                      :key="index"
                    >
                        <strong>{{data.title}}:</strong>
                        <span>{{data.description}}</span>
                    </li>
                </ul>
            </div>
            <div class="col-six tab-full">
                <h3>{{skills.title}}</h3>
               <ul class="skill-bars">
                   <template v-for="(skill, index) of skills.data" >
                       <li v-if="index < 5"  :key="index">
                           <div :class="'progress percent'+skill.progress"><span>{{skill.progress}}</span></div>
                           <strong>{{skill.name}}</strong>
                       </li>
                   </template>
                </ul>
            </div>
        </div>
        <div class="row button-section">
            <div class="col-twelve">
                <a href="#contact" title="Contact me" class="button stroke smoothscroll">{{buttons.contact}}</a>
                <a href="https://drive.google.com/uc?authuser=0&id=1MPCsB9DTjUPEcWODXHufUN4ufZHw5QCO&export=download"
                   class="button button-primary"
                   target="_blank">{{buttons.cv}}</a>
            </div>
        </div>
    </section>
</template>

<script>
    import about from '../assets/JSON/about.json';
    import skills from '../assets/JSON/skills.json';
    export default {
        name: "About",
        props: ['info', 'profile', 'skills', 'buttons'],
    }
</script>

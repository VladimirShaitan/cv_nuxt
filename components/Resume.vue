<template>
    <section id="resume" class="grey-section">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>{{titles.main}}</h5>
                <h1>{{titles.sub}}</h1>
                <p class="lead" v-html="titles.desc"></p>
            </div>
        </div>
        <div class="row resume-timeline">
            <div class="col-twelve resume-header">
                <h2>{{experience.title}}</h2>
            </div>
            <div class="col-twelve">
                <div class="timeline-wrap">

                    <template v-for="(jobPlace, index) in experience.data">
                        <div class="timeline-block" :key="index" v-if="index < 4">
                            <div class="timeline-ico">
                                <i class="fa fa-briefcase"></i>
                            </div>
                            <div class="timeline-header">
                                <h3>{{jobPlace.position}}</h3>
                                <p>{{jobPlace.date_start}} - {{jobPlace.date_end}}</p>
                            </div>
                            <div class="timeline-content">
                                <h4>{{jobPlace.company}}</h4>
                                <p>{{jobPlace.description}}</p>
                            </div>
                        </div>
                    </template>

                </div>
            </div>
        </div>
        <div class="row resume-timeline">
            <div class="col-twelve resume-header">
                <h2>{{education.title}}</h2>
            </div>
            <div class="col-twelve">
                <div class="timeline-wrap">

                    <template v-for="(education, index) in education.data">
                        <div class="timeline-block" :key="index">
                            <div class="timeline-ico">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <div class="timeline-header">
                                <h3>{{education.degree}}</h3>
                                <p>{{education.date_from}} - {{education.date_to}}</p>
                            </div>
                            <div class="timeline-content">
                                <h4>{{education.name}}</h4>
                                <p>{{education.description}}</p>
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
      props:['titles', 'experience', 'education'],
      name: "Resume",
    }
</script>

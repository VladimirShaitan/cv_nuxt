<template>


  <div id="app">
    <Intro
      v-if="homePage.base_strings && homePage.socials"
      :info="homePage.base_strings"
      :socials="homePage.socials"
    />

    <About
      :info="homePage.about"
      :profile="homePage.profile"
      :skills="homePage.skills"
      :buttons="{contact:homePage.base_strings.about_contact_text, cv:homePage.base_strings.about_cv }"
    />

    <Resume
      :titles="{main:homePage.base_strings.cv_title, sub:homePage.base_strings.cv_sub_title, desc:homePage.base_strings.cv_block_description}"
      :experience="homePage.experience"
      :education="homePage.education"
    />
    <Portfolio
      :titles="{
        main: homePage.base_strings.portfolio_title,
        sub: homePage.base_strings.portfolio_sub_title,
        desc: homePage.base_strings.portfolio_description,
      }"
      :portfolio="homePage.portfolio"

    />
    <Services
      :services="homePage.services"
    />

    <Certificates
      :certificates="homePage.certificates"
    />
    <Popup />
    <ContactMe
        :contact-form="homePage.contact_form"
        :contact-data="homePage.contact_data"
    />
  </div>



</template>

<script>
import Intro from '@/components/Intro';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Certificates from '@/components/Certificates';
import Popup from '@/components/popup/popup';
import ContactMe from "@/components/ContactMe";

export default {
  name: 'app',
  layout: 'default',
  components: {
    Intro,
    About,
    Resume,
    Portfolio,
    Services,
    Certificates,
    Popup,
    ContactMe
  },
  data: () => {
    return {
      homePage: {}
    }
  },

  async asyncData({store}) {
    await store.dispatch('homepage/getData');
    const homePage = store.getters['homepage/getHomePageData'];
    return {homePage}
  },

}
</script>

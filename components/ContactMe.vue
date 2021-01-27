<template>
    <section id="contact">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>{{contactForm.title}}</h5>
                <h1>{{contactForm.sub_title}}</h1>
            </div>
        </div>
        <div class="row contact-form">
            <div class="col-twelve">
                <form v-if="!sendMessage" @submit.prevent="sendEmail($event)" name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate" >
                    <fieldset>
                        <template v-for="(field, index) in contactForm.fields">
                          <inputText
                            v-if="field.type !== 'textarea'"
                            :key="index"
                            :type="field.type"
                            :placeholder="field.placeholder"
                            :name="field.name"
                            :form="form"
                          />

                          <textArea
                            v-if="field.type === 'textarea'"
                            :key="index"
                            :placeholder="field.placeholder"
                            :name="field.name"
                            :form="form"
                          />

                        </template>


                        <div class="form-field">
                            <button class="submitform">{{contactForm.submit_text}}</button>
                            <div id="submit-loader">
                                <div class="text-loader">Sending...</div>
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div v-else class="success-message">
                    Hey you, I will answer ASAP, Thanks for request!
                </div>

                <div id="message-warning">
                </div>

                <div id="message-success">
                    <i class="fa fa-check"></i>Your message was sent, thank you!<br>
                </div>
            </div>
        </div>
        <div class="row contact-info">
            <div
              class="col-four tab-full"
              v-for="(item, index) in contactData.data"
              :key="index"
            >
                <div class="icon">
                    <i :class="item.icon"></i>
                </div>
                <h5>{{item.title}}</h5>
                <p>{{item.description}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import inputText from '@/components/formControls/inputText';
    import textArea from '@/components/formControls/textArea';

    export default {
        props:['contactForm', 'contactData'],
        components: {inputText, textArea},
        name: "ContactMe",
        data(){
            return {
              form:{},
              formData: {},
              sendMessage: true,
              bot: {
                  token: '1129483343:AAHH9pydDOdFYucj7BRzluMgR1R4xkIieIw',
                  chatId: '-453410566'
              }
            }
        },
        beforeMount() {
          this.contactForm.fields.forEach(item => {
            this.form[item.name] = '';
          })
        },

      mounted() {
        this.sendMessage = localStorage.getItem('sendMessage');
      },

      methods: {
         async sendEmail(){
           let form_data = [];
           for(let prop in this.form) {
              let template =  `%0A%0A<b>${prop}:</b> %0A<i>${this.form[prop]}</i>%0A%0A`
             form_data.push(template);
           }

            let message =  `<b><i>New message from your'e site</i></b>`;
            message += form_data.join('');
            message += '%0A%0AThanks for attention :)';

            await this.$axios.post(`https://api.telegram.org/bot${this.bot.token}/sendMessage?chat_id=${this.bot.chatId}&parse_mode=html&text=${message}&parse_mode=HTML`);
            this.sendMessage = true;
            localStorage.setItem('sendMessage', 'true');
          }
      }

    }
</script>

<style scoped>
    .success-message {
        color: #FF0077;
        border: 3px solid;
        padding: 20px 0;
        text-align: center;
        font-size: 25px;
    }
</style>

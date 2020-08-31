<template>
  <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-full">
    <div class="md:pt-24 md:w-full">
      <p class="font-bold text-center">
        &mdash; Hello
        <span v-show="hasName == true">{{name}},</span> I'm Olivier <span class="opacity-50">(o·li·vyé)</span>
      </p>
      <h1 class="font-display leading-tight mb-6 text-center">
        Remote UI/UX
        <br />
        <span class="hidden">Designer</span>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        <br> 
      </h1>
      <p class="font-body mb-6 lg:w-55ch md:w-full text-center m-auto">
        Maker of timeless digital touchpoints. Want to change direction, change behaviour, or change the world?
        <span v-show="hasName == true">Then {{name}},</span> I can help out.
      </p>
      <div class="md:flex justify-center">
        <a
          href="https://calendly.com/olivier-ui-ux/30min?back=0"
          class="cta text-colorSecondary bg-colorPrimary mt-2 mb-4 text-xl"
        >Get a callback</a>
        <a
          href="https://www.linkedin.com/in/olivierbalaguer"
          class="block md:inline text-center mt-2 mb-4 md:mx-12 cta bg-transparent font-bold text-xl border-colorPrimary border-solid border-2"
        >Connect on LinkedIn</a>
      </div>
    </div>
    <div class="lead"></div>
  </section>
</template>
<style scoped>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: theme('colors.colorPrimary');
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% { background-color: theme('colors.colorPrimary'); }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
</style>
<script>
import ArrowRight from "~/assets/svgs/icon-arrow-right.svg";
export default {
  components: {
    ArrowRight,
  },
  beforeCreate() {
    // this.$store.commit('setName', this.$route.query.hello)
    if (this.$route.query.hello) {
      this.name = this.$route.query.hello;
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    if (this.$route.query.hello) {
      this.hasName = true;
    }
  },
  data() {
    return {
      hasName: false,
      name: this.$route.query.hello,
      message: null,
      hasCopied: false,
      typeValue: "",
      typeStatus: false,
      typeArray: ["Designer.", "Facilitator.", "Specialist."],
      typingSpeed: 100,
      erasingSpeed: 85,
      newTextDelay: 1225,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  }
};
</script>
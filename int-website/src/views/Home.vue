<template>
<div class="home">
    <section class="sec sec_1 hero hero--fixed-content">
        <video class="hero-video" src="https://static.borngroup.com/uploads/2020/09/Born_Header_NoMusic-2.mp4" preload="" muted="" autoplay="" playsinline="" loop=""></video>
        <div class="hero-content-holder">
            <div class="hero-content container">
                <h1
                    class="hero-title text-reveal-animate"
                    v-focus>
                    <div class="text-reveal-line-holder text-reveal-line-holder--to-top">
                        <span class="text-reveal-line">Purpose-Driven Experiences</span>
                    </div>
                    <div class="text-reveal-line-holder text-reveal-line-holder--to-top">
                        <span class="text-reveal-line text-reveal-line--2">and Enterprise Commerce</span>
                    </div>
                </h1>
                <div class="hero-tagline">
                    Combining creative, content, and commerce to drive change. Imagine, build, and run human-centered brand experiences.
                </div>
            </div>
        </div>
    </section>
    <section class="sec sec_2"></section>
    <section class="sec sec_3"></section>
    <section class="sec sec_4"></section>
    <section class="sec sec_5"></section>
</div>
</template>

<script>
import {
  gsap
} from 'gsap'
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Home',
  mounted () {
    gsap.to('.c', {
      scrollTrigger: {
        trigger: '.c',
        start: 'top center',
        end: 'top 100px',
        markers: true,
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      },
      x: 500,
      rotation: 360,
      duration: 3
    })
  },
  components: {

  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.onmouseenter = function (e) {
          gsap.to('.cursor-content', 0.1, {
            scale: 0.7
          })
          document.querySelector('.cursor-content').innerHTML = '打开'
          console.log('进入')
        }
        el.onmouseleave = function (e) {
          console.log('离开')
          document.querySelector('.cursor-content').innerHTML = ''
          gsap.to('.cursor-content', 0.1, {
            scale: 0.18
          })
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.sec {
    width 100%;
    min-height 100vh;
    overflow: hidden;

    &.sec_1 {
        background red;

        & .hero-video {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
        }

        & .hero-content-holder {
            z-index 1;
            color #fff;
            position: absolute;
            top: 40%;
            right: 0;
            bottom: 0;
            left: 10%;
            clip: rect(auto, auto, auto, auto);

            & .hero-content {
                position: fixed;
                width: 100vw;
                padding-top: calc(80 * 2 + 22px);
                padding-bottom: 80px;
                justify-content: center;
            }
        }
    }

    &.sec_2 {
        background orange;
    }

    &.sec_3 {
        background yellow;
    }

    &.sec_4 {
        background green;
    }

    &.sec_5 {
        background purple;
    }
}
</style>

<template>
  <div id="app">
    <div class="logo" @mouseenter="logoIn" @mouseleave="logoOut">
      <div class="dafa">
        <span>DAFA</span>
      </div>
      <div class="international">
        <span>INTERNATIONAL</span>
      </div>
    </div>
    <div class="circle">
      <div class="cursor-content">{{$store.state.cursorText}}</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted () {
    var $circle = document.querySelector('.circle')
    function moveCircle (e) {
      gsap.to($circle, 0, {
        css: {
          translateX: e.x,
          translateY: e.y
        }
      })
    }
    // window.onmousemove(moveCircle)
    window.addEventListener('mousemove', moveCircle)
    // $(window).on('mousemove', moveCircle)
  },
  methods: {
    logoIn () {
      gsap.to('.dafa', 0, {
        width: 130
      })
      gsap.to('.international', 0, {
        width: 360
      })
    },
    logoOut () {
      gsap.to('.dafa', 0, {
        width: 30
      })
      gsap.to('.international', 0, {
        width: 9
      })
    }
  }
}
</script>

<style lang="stylus">
body{
  padding: 0;
  margin: 0;
}
*{
  cursor:none!important;
}
html {
  background: #0E3741;
}

.circle {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  width: 18px;
  height: 18px;
  opacity: 1;
  & .cursor-content{
    background-color #fff
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.18);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(0,176,187,.75);
    border: 2px solid transparent;
    transition: all .3s ease;
    padding: 12px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .03em;
    color: #fff;
    line-height: 1.1;
    text-align: center;
  }
}
.logo{
  letter-spacing 3px;
  font-size 40px;
  position absolute;
  top: 70px;
  left: 100px;
  color #fff;
  z-index 2;
  display: flex;
  font-weight: 700;
  & .dafa{
    width: 30px;
    overflow: hidden;
    transition: 1s all;
  }
  & .international{
    width: 9px;
    transition: 1s all;
    overflow: hidden;
  }
}
</style>

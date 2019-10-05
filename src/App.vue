<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul class="nav">
      <li><router-link to="/">ゲーム</router-link></li>
      <li><router-link to="/score">スコア</router-link></li>
    </ul>
    <div class='inner'>
      <transition name="fade">
        <router-view scores="scores"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App',

  data() {
    return {
      scores: []
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
body {
	font-family: "Nico Moji", "ヒラギノ丸ゴPro W3", "Hiragino Maru Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", Arial, Helvetica, Verdana, sans-serif;
}

h1 {
  margin: 25px 0;
  text-align: center;
  font-size: 48px;
}

.inner {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.nav {
  text-align: center;
  margin: 10px 0 30px;
  padding: 0;
  li {
    display: inline-block;
    list-style: none;
    &:not(:first-child) {
      margin-left: 10px;
    }
    a {
      padding: 5px 15px;
      font-size: 26px;
      text-decoration: none;
      background: #00e8ee;
      color: #333;
    }
  }
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>

<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul class="nav">
      <li><router-link to="/game">ゲーム</router-link></li>
      <li><router-link to="/score">スコア</router-link></li>
    </ul>
    <div class='inner'>
      <transition name="fade">
        <router-view :scores="scores" @updateScore="updateScore" />
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

  created() {
    this.setScores();
  },

  methods: {
    setScores() {
      const savedScores = localStorage.getItem('janken');
      this.scores = savedScores ? savedScores.split(',') : [];
    },

    updateScore(score) {
      this.scores.push(score);
      localStorage.setItem('janken', this.scores);
    }
  }
}
</script>

<style lang="scss">
body {
	font-family: "Nico Moji", "ヒラギノ丸ゴPro W3", "Hiragino Maru Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", Arial, Helvetica, Verdana, sans-serif;
}

h1 {
  margin: 25px 0;
  text-align: center;
  font-size: 48px;
}

.inner {
  position: relative;
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

      &.router-link-active {
        background: #2cb1ee;
        color: #fff;
      }
    }
  }
}

.fade-leave-active {
  position:absolute;
  left:0;
  top:0;
  transition:opacity .3s!important;
}

.fade-enter-active {
  position:absolute;
  left:0;
  top:0;
  transition:opacity .2s!important;
}

.fade-enter,
.fade-leave-active {
  opacity:0;
}
</style>

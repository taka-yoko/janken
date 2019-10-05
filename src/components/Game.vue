<template>
  <div class="game">
    <div v-if="isShowResult" class="result" v-cloak>
      <h2>{{ resultMessage }}</h2>
      <div><button @click="start">もう一度</button></div>
    </div>
    <div class='imgArea'><img :src='src' alt=''></div>
    <ul>
      <li>
        <button @click="onSelected" class="button" type="button" value="0" :disabled="isButtonDisabled">
          <img :src='imgList[0]' alt=''>
        </button>
      </li>
      <li>
        <button @click="onSelected" class="button" type="button" value="1" :disabled="isButtonDisabled">
          <img :src='imgList[1]' alt=''>
        </button>
      </li>
      <li>
        <button @click="onSelected" class="button" type="button" value="2" :disabled="isButtonDisabled">
          <img :src='imgList[2]' alt=''>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    scores: {
      type: Array
    }
  },
  data() {
    return {
      src : require('../assets/choki.png'),
      imgList: [
        require('../assets/gu.png'),
        require('../assets/choki.png'),
        require('../assets/par.png')
      ],
      imgIndex: 0,
      timer: null,
      resultMessage: '',
      isButtonDisabled: false,
      selectedButton: null
    };
  },

  created() {
    this.start();
  },

  computed: {
    isShowResult() {
      return this.resultMessage !== '';
    }
  },

  methods: {
    start() {
      this.reset();
      this.timer = setInterval(() => {
        this.changeImg();
      }, (1000/12));
    },

    changeImg() {
      this.imgIndex = Math.floor(Math.random() * this.imgList.length);
      this.src = this.imgList[this.imgIndex];
    },

    reset() {
      if(this.selectedButton) this.selectedButton.classList.remove('is-selected');
      this.selectedButton = null;
      this.isButtonDisabled = false;

      this.resultMessage = '';
    },

    onSelected(e) {
      clearInterval(this.timer);

      this.selectedButton = e.target.tagName === 'IMG' ? e.target.parentNode : e.target;
      this.selectedButton.classList.add('is-selected');

      this.isButtonDisabled = true;

      const computerNum = this.imgIndex;
      const yourNum = parseInt(this.selectedButton.value, 10);

      const jankenResult = this.judgeJanken(yourNum, computerNum);

      if(jankenResult === 1) {
        this.resultMessage = '勝ち😄';
      } else if(jankenResult === 2) {
        this.resultMessage = '引き分け😌';
      } else {
        this.resultMessage = '負け😭';
      }

      // resultMessageを親のscores arrayに追加
      this.$emit('updateScore', this.resultMessage);
    },

    judgeJanken(yourNum, compNum) {
      let result = 0;

      // グー: 0, チョキ: 1, パー: 2
      switch (compNum) {
        case 0:
          if (yourNum === 0) {
            result = 2;
          } else if (yourNum === 1) {
            result = 0;
          } else {
            result = 1;
          }
          break;
        case 1:
          if (yourNum === 0) {
            result = 1;
          } else if (yourNum === 1) {
            result = 2;
          } else {
            result = 0;
          }
          break;
        case 2:
          if (yourNum === 0) {
            result = 0;
          } else if (yourNum === 1) {
            result = 1;
          } else {
            result = 2;
          }
          break;
        default:
      }
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
.imgArea {
  display: flex;
  width: 298px;
  height: 298px;
  margin: auto;
  text-align: center;
  border: 1px solid #333;
  align-items: center;
  justify-content: center;
}

.result {
  text-align: center;

  button {
    margin: 10px 0;
    font-size: 20px;
    border: 1px solid #00e8ee;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    padding: 5px 15px;
    font-family: inherit;
    background: #aceee9;
  }
}

ul {
  margin: 15px auto;
  padding: 0;
  text-align: center;
  display: flex;
  width: 300px;
  justify-content: space-between;
}

li button {
  font-size: 30px;
  border: 1px solid #00e8ee;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  padding: 10px;
  font-family: inherit;
  background: #aceee9;
  height: 85px;
  img {
    width: 60px;
  }

  &.is-selected[disabled] {
    background: #7ad8ee;
  }
}

li button.is-selected {
  background: #7ad8ee;
}

li {
  list-style: none;

   button[disabled] {
    background: #aceee9;
    pointer-events: none;
  }
}

[v-cloak] {
  display: none;
}
</style>

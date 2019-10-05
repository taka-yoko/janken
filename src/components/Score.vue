<template>
  <div class="score">
    <h2>スコア</h2>
    <ul class="content_list">
      <li v-for="(score, index) in scores" :key="index" class="content_list__item">
        {{ index + 1 }} 回目 : {{ score }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Score',

  data() {
    return {

    };
  },

  props: {
    scores: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.score {
  width: 300px;
  text-align: center;
}

h2 {
  font-size: 36px;
  margin: 0;
  padding: 0;
}

.content_list {
  padding: 0;
  list-style: none;
  &__item {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }
}
</style>

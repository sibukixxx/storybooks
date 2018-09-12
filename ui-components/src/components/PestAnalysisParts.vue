<template>
  <div class="pestAnalysis">
    <div class="pestAnalysis-title" :style="{backgroundColor: backgroundColor, borderColor: backgroundColor}">
      <slot name="title"></slot>
    </div>
    <div class="pestAnalysis-contents" :style="{backgroundColor: backgroundColor, borderColor: backgroundColor}">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        default: 'black'
      }

    }
  }
</script>

<style lang="scss">
  .pestAnalysis {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    &-title {
      width: 15%;
      margin: 0 10px 0 0;
      border: black 1px solid;
      text-align: center;
      background-color: black;
      > span {
        color: white;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        line-height: normal;
        top: calc(50% - 15px);
        left: calc(50% - 80px);
        font-size: 100%;
        font-weight: bold;
      }
    }
    &-contents {
      height:100%;
      width: 80%;
      min-height: 33px;
      border: black 1px solid;
      background-color: black;
      > div {
        color: white;
        margin-left: 5px;
        display: inline-block;
        vertical-align: text-top;
        line-height: normal;

      }
    }
  }
</style>

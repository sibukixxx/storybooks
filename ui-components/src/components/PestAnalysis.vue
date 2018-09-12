<template>
  <div>
    <pest-analysis-parts><span slot="title">経済</span><div slot="body">経済はもっとしっかりせんといかん経済はもっとしっかりせんといかん <br>複数行<br>複数行 </div></pest-analysis-parts>
    <pest-analysis-parts><span slot="title">社会</span><div slot="body">
          社会はもっとしっかりせんといかんa
      <br>社会はもっとしっかりせんといかん　社会はもっとしっかりせんといかん　社会はもっとしっかりせんといかんb
      <br>社会はもっとしっかりせんといかん　社会はもっとしっかりせんといかん　社会はもっとしっかりせんといかんc
    </div></pest-analysis-parts>
    <pest-analysis-parts><span slot="title">政治</span><div slot="body">
      政治はもっとしっかりせんといかんa
      <br>政治はもっとしっかりせんといかん　政治はもっとしっかりせんといかん　政治はもっとしっかりせんといかんb
      <br>政治はもっとしっかりせんといかん　政治はもっとしっかりせんといかん　政治はもっとしっかりせんといかんc
    </div></pest-analysis-parts>
    <pest-analysis-parts><span slot="title">技術</span><div slot="body">
      技術はもっとしっかりせんといかんa
      <br>技術はもっとしっかりせんといかん　技術はもっとしっかりせんといかん　技術はもっとしっかりせんといかんb
      <br>技術はもっとしっかりせんといかん　技術はもっとしっかりせんといかん　技術はもっとしっかりせんといかんc
    </div></pest-analysis-parts>
  </div>
</template>

<script>
  import PestAnalysisParts from './PestAnalysisParts.vue'

  export default {
    props: {},
    components: {
      PestAnalysisParts
    }
  }
</script>

<style lang="scss">
</style>

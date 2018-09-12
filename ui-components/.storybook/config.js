import {configure} from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import MyButton from '../src/components/Button.vue';
import PestAnalysisParts from '../src/components/PestAnalysisParts.vue';
import PestAnalysis from '../src/components/PestAnalysis.vue';
import ThreeCsModel from '../src/components/threeCsModel.vue';

Vue.component('my-button', MyButton);
Vue.component('pest-analysis-parts', PestAnalysisParts);
Vue.component('pest-analysis', PestAnalysis);
Vue.component('three-cs-model', ThreeCsModel);
Vue.use(Vuex);

function loadStories() {
  require('../src/stories')

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)

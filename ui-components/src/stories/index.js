import {storiesOf} from '@storybook/vue'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';
import MyButton from '../../src/components/Button.vue';


storiesOf('Button', module)
  .add('rounded', () => ({
    template: "<my-button :rounded=true><slot></slot>Button with rounded edges</my-button>",
  }))
  .add('square', () => ({
    template: '<my-button :rounded="false">A Button with square edges</my-button>',
  }));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('warning', () => {
    const backgroundColor = color('Color', 'red')
    return {
      components: { MyButton },
      template: `<my-button color="${backgroundColor}" />`
    }
  })

storiesOf('ThreeCsModel', module)
  .add('basic', () => ({
    template: '<three-cs-model>3C分析</three-cs-model><three-cs-model>3C分析</three-cs-model>',
  }))

storiesOf('PestAnalysisParts', module)
  .add('basic', () => ({
    template: '' +
    '<pest-analysis-parts><span slot="title">経済</span><div slot="body">経済はもっとしっかりせんといかん経済はもっとしっかりせんといかん <br>複数行<br>複数行 </div></pest-analysis-parts>'
  }))

storiesOf('PestAnalysisParts', module)
  .addDecorator(withKnobs)
  .add('warning', () => {
    const backgroundColor = color('Color', 'red')
    return {
      components: { MyButton },
      template: '' +
      `<pest-analysis-parts backgroundColor="${backgroundColor}">
      <span slot="title">経済</span>
      <div slot="body">経済はもっとしっかりせんといかん経済はもっとしっかりせんといかん <br>複数行<br>複数行 </div>
      </pest-analysis-parts>`
    }
  })


storiesOf('PestAnalysis', module)
  .add('basic', () => ({
    template: '' +
    '<pest-analysis></pest-analysis>'
  }))


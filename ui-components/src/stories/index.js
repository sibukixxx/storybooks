import {storiesOf} from '@storybook/vue'

// storiesOf('MyButton', module)
//   .add('simple', () => ({
//     template: `<my-button>KEEP IT SIMPLE</my-button>`,
//   }))
//   .add('simple2', () => ({
//     template: `<my-button>あああ</my-button>`,
//   }))

storiesOf('Button', module)
// Works if Vue.component is called in the config.js in .storybook
  .add('rounded', () => ({
    template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
  }))
  .add('square', () => ({
    template: '<my-button :rounded="false">A Button with square edges</my-button>',
  }));

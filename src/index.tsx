import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

// direflowComponent.setProperties({
//   componentTitle: 'Direflow Test',
//   sampleList: [
//     'Create with React',
//     'Build as Web Component',
//     'Use it anywhere!',
//   ],
// });

direflowComponent.setProperties({
  limit: 1,
  user: {
    name: 'Initial name',
  },
});

direflowComponent.render(App, 'direflow-poc');

import { DireflowComponent } from 'direflow-component';
import HelloWorld from './components/hello-world/hello-world';
import HelloEvent from './components/hello-event/hello-event';
import HelloPrimitiveProperty from './components/hello-primitive-property/hello-primitive-property';

// register components
const helloWorldComponent = new DireflowComponent();
helloWorldComponent.render(HelloWorld, 'hello-world');

const helloEventComponent = new DireflowComponent();
helloEventComponent.render(HelloEvent, 'hello-event');

const helloPrimitiveProperty = new DireflowComponent();
helloPrimitiveProperty.setProperties({
    userName: 'John Doe',
    age: 30,
    isMarried: false
});
helloPrimitiveProperty.render(HelloPrimitiveProperty, 'hello-primitive-property');


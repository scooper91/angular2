import {
	ComponentMetadata as Component, 
	ViewMetadata as View, 
	bootstrap
} from 'angular2/angular2';
import {Home} from 'home';

@Component({
  selector: 'main'
})

@View({
  directives: [Home],
  template: `
    <home></home>
  `
})

class Main {

}

bootstrap(Main);

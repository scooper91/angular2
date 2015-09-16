import {
	ComponentMetadata as Component, 
	ViewMetadata as View
} from 'angular2/angular2';
import {Catalogue} from 'catalogue';

@Component({
  selector: 'home'
})

@View({
  template: '<catalogue></catalogue>',
  directives: [Catalogue]
})

export class Home {
  constructor() {
	this.name = "Sophie"  
  }
}

import {
	ComponentMetadata as Component,
	ViewMetadata as View
} from 'angular2/angular2';

@Component({
	selector: 'catalogue'
})

@View({
	templateUrl: 'catalogue.html'
})

export class Catalogue {
	constructor() {
		this.release = {
			name: 'Kaboom!',
			artist: 'I fight dragons'
		}
	}
}

/* beautify ignore:start */
import {
	it,
	//inject,
	injectAsync,
	beforeEachProviders,
	TestComponentBuilder
} from 'angular2/testing';
import {MainComponent} from './main.component.ts';
/* beautify ignore:end */

describe('Component: MainComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(MainComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
/* beautify ignore:start */
import {
	it,
	//inject,
	injectAsync,
	beforeEachProviders,
	TestComponentBuilder
} from 'angular2/testing';
import {TweetListComponent} from './tweet-list.component.ts';
/* beautify ignore:end */

describe('Component: TweetListComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(TweetListComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
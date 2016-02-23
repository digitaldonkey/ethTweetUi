/* beautify ignore:start */
import {
	it,
	//inject,
	injectAsync,
	beforeEachProviders,
	TestComponentBuilder
} from 'angular2/testing';
import {TweetUsersComponent} from './tweet-users.component.ts';
/* beautify ignore:end */

describe('Component: TweetUsersComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(TweetUsersComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
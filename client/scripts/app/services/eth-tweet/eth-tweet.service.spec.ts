/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {EthTweet} from './eth-tweet.service.ts';
/* beautify ignore:end */

describe('Service: EthTweet', () => {

    beforeEachProviders(() => [EthTweet]);

    it('should be defined', inject([EthTweet], (service: EthTweet) => {
        expect(service).toBeDefined();
    }));

});
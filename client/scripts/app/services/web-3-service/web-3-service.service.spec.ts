/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {Web3Service} from './web-3-service.service.ts';
/* beautify ignore:end */

describe('Service: Web3Service', () => {

    beforeEachProviders(() => [Web3Service]);

    it('should be defined', inject([Web3Service], (service: Web3Service) => {
        expect(service).toBeDefined();
    }));

});

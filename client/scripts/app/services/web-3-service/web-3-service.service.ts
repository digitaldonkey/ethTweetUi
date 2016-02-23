/* beautify ignore:start */
import {Injectable, Inject} from 'angular2/core';

// Why I can't import like:
// import {Web3} from 'web3';  ?
import 'web3';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
/* beautify ignore:end */

/// <reference path="/path/to/jquery.d.ts" >

declare module 'Web3' {
  export default class Web3 {
    web3(): Web3;
  }
}

/**
* Provide a global service to use web3 API within all components.
*/
@Injectable()
export class Web3Service {
  name: string;
  web3: Subject<Web3> = new BehaviorSubject<Web3>(null);

  constructor () {
    var server = 'http://localhost:8545';
    this.web3 = new Web3(new Web3.providers.HttpProvider(server));
    this.web3.EthTweet = {
      test: function(test: string) {
        console.log(test);
      }
    };
  }
  getWeb3() {
    return this.web3;
  }
}

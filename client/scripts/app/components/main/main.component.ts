/* beautify ignore:start */
import {Component} from 'angular2/core';
import {EthTweetComponent} from '../eth-tweet/eth-tweet.component';
import {EthTweet} from '../../services/eth-tweet/eth-tweet.service';

/* beautify ignore:end */

@Component({
  selector: 'eth-state',
  directives: [EthTweetComponent],
  styles: [require('./main.component.scss').toString()],
  template: require('./main.component.html')

})
export class MainComponent {
  version: Object;
  ethStatus: boolean;

  constructor(ethTweet: EthTweet) {
    this.version = ethTweet.web3.version;
    this.ethStatus = ethTweet.ethStatus;
  }
}

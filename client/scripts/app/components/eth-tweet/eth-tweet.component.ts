/* beautify ignore:start */
import {Component, Inject} from 'angular2/core';
import {Web3Service} from '../../services/web-3-service/web-3-service.service';
import {TweetUsersComponent} from '../tweet-users/tweet-users.component';

/* beautify ignore:end */

@Component({
  selector: 'eth-tweet',
  directives: [TweetUsersComponent],
  styles: [require('./eth-tweet.component.scss').toString()],
  template: require('./eth-tweet.component.html')

})

export class EthTweetComponent {
  ethStatus: boolean;
  web3: Object;

  constructor(web3api:Web3Service) {
    this.web3 = web3api.getWeb3();
    this.ethStatus = this.web3.isConnected();
  }
}

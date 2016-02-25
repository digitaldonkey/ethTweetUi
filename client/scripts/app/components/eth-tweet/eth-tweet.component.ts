/* beautify ignore:start */
import {Component} from 'angular2/core';
import {EthTweet} from '../../services/eth-tweet/eth-tweet.service';
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

  constructor(ethTweet: EthTweet) {
    this.ethStatus = ethTweet.ethStatus;
  }
}

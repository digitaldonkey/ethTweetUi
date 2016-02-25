/* beautify ignore:start */
import {Component} from 'angular2/core';
import {EthTweet} from '../../services/eth-tweet/eth-tweet.service';
/* beautify ignore:end */

/**
 * @EthTweetUser: A component providing a `EthTweetUser` object
 */
class EthTweetMessage {
  constructor(
    public user: string,
    public message: string,
    public date: Date
  ) {}
}

@Component({
  selector: 'tweet-list',
  inputs: ['user', 'onUserSelected'],
  //directives: [TweetUsersComponent],
  styles: [require('./tweet-list.component.scss').toString()],
  template: require('./tweet-list.component.html')
})
export class TweetListComponent {
  ethStatus: boolean;
  ethTweet: any;

  public user: string;
  userName: string;
  numberOfTweets: number;
  tweets: EthTweetMessage[];

  constructor(ethTweet: EthTweet) {
    this.ethTweet = ethTweet;
    this.ethStatus = ethTweet.ethStatus;
    this.tweets = [];

  }

  /**
   * Load tweets of current user.
   *
  * ngOnChanges is called after every change to input properties.
  */

  ngOnChanges(changeRecord) {
    this.user = changeRecord.user.currentValue;
    this.userName  = this.ethTweet.getUserNameByAddress(this.user);

    // Empty the list first.
    this.tweets = [];

    let tweetAccount = this.ethTweet.tweetAccount(this.user);
    this.numberOfTweets = tweetAccount.getNumberOfTweets().toNumber();

    let i = 0;
    while (i < this.numberOfTweets) {
      let tweet = tweetAccount.getTweet(i);
      let date = new Date(tweet[1].toNumber() * 1000);
      this.tweets[i] = new EthTweetMessage(this.userName, tweet[0], date);
      i++;
    }

  }
}

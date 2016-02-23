/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Web3Service} from '../../services/web-3-service/web-3-service.service';
import {TweetUsersComponent, EthTweetUser} from '../tweet-users/tweet-users.component';
import Web3 from "../../services/web-3-service/web-3-service.service";
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
  web3: Web3;
  public user: String;
  tweets: EthTweetMessage[];

  constructor(web3api: Web3Service) {

    this.web3 = web3api.getWeb3();
    this.ethStatus = this.web3.isConnected();
    this.tweets = [];
    //
    //console.log('TWEET-LIST INIT');
    //// this.user is undefined here!!!
    //// console.log is lying!
    //console.log(Object.keys(this), 'this@constructor() (tweet users list)');
    //
    //
    //console.log(typeof this, 'this.user@constructor() (tweet users list)');
    //
    //
    ////this.user = '0xd25feffa5bb66f6638b07dfec2ab2e65a4b2f94c';
    //
    //// TODO Check if user exists.
    //
    //// TODO: EXTEND web3 API with ethTweet API?
    //let userName = 'no username yet';
    //let tweetAccount = this.tweetAccount(this.user);
    //let tweets = tweetAccount.getNumberOfTweets().toNumber();
    //
    //console.log(tweets, 'Number of tweets');
    //
    //let i = 0;
    //while (i < tweets) {
    //  let tweet = tweetAccount.getTweet(i);
    //  let date = new Date(tweet[1].toNumber() * 1000);
    //  this.tweets[i] = new EthTweetMessage(userName, tweet[0], date);
    //  i++;
    //}
  }

  // Called after every change to input properties
  ngOnChanges(changeRecord) {
    console.log(changeRecord, 'changeRecord@ngOnChanges (tweetlist)');
    console.log(changeRecord.user, 'changeRecord@ngOnChanges (tweetlist)');
    this.user = changeRecord.user.currentValue;

    // Empty the list first.
    this.tweets = [];
    this.web3.EthTweet.test('Hallo :)');
    console.log(this.web3);

    let userName = 'no username yet';
    let tweetAccount = this.tweetAccount(this.user);
    let tweets = tweetAccount.getNumberOfTweets().toNumber();

    console.log(tweets, 'Number of tweets');

    let i = 0;
    while (i < tweets) {
      let tweet = tweetAccount.getTweet(i);
      let date = new Date(tweet[1].toNumber() * 1000);
      this.tweets[i] = new EthTweetMessage(userName, tweet[0], date);
      i++;
    }

  }
  //// TODO: EVENT IS NOT HANDELED :/
  //
  //public userWasSelected(user: string): void {
  //  // Should: this.user = user;
  //  console.log('userWasSelected()@TweetListComponent !!!');
  //}
  //public onUserSelected(user: string): void {
  //  console.log('onUserSelected()@TweetListComponent !!!');
  //}

  tweetAccount (address) {
    return this.web3.eth.contract(
      [
        {
          'constant': true,
          'inputs': [],
          'name': 'getOwnerAddress',
          'outputs': [{'name': 'adminAddress', 'type': 'address'}],
          'type': 'function'
        },
        {
          'constant': false, 'inputs': [], 'name': 'adminDeleteAccount', 'outputs': [], 'type': 'function'
        },
        {
          'constant': false,
          'inputs': [{'name': 'receiver', 'type': 'address'}],
          'name': 'adminRetrieveDonations',
          'outputs': [],
          'type': 'function'
        },
        {
          'constant': true, 'inputs': [], 'name': 'getLatestTweet', 'outputs': [{
          'name': 'tweetString', 'type': 'string'
        },
          {
            'name': 'timestamp', 'type': 'uint256'
          },
          {
            'name': 'numberOfTweets', 'type': 'uint256'
          }], 'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'isAdmin',
          'outputs': [{'name': 'isAdmin', 'type': 'bool'}],
          'type': 'function'
        },
        {
          'constant': true, 'inputs': [{'name': 'tweetId', 'type': 'uint256'}], 'name': 'getTweet', 'outputs': [{
          'name': 'tweetString', 'type': 'string'
        },
          {
            'name': 'timestamp', 'type': 'uint256'
          }], 'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'getNumberOfTweets',
          'outputs': [{'name': 'numberOfTweets', 'type': 'uint256'}],
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [{'name': 'tweetString', 'type': 'string'}],
          'name': 'tweet',
          'outputs': [{'name': 'result', 'type': 'int256'}],
          'type': 'function'
        },
        {
          'inputs': [], 'type': 'constructor'
        }
      ]).at(address);
  }
}

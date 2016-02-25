/* beautify ignore:start */
import {Component, EventEmitter} from 'angular2/core';
import {TweetListComponent} from '../tweet-list/tweet-list.component';
import {EthTweet, EthTweetUser} from '../../services/eth-tweet/eth-tweet.service';
/* beautify ignore:end */

@Component({
    selector: 'tweet-users',
    directives: [TweetListComponent],
    outputs: ['onUserSelected'],
    styles: [require('./tweet-users.component.scss').toString()],
    template: require('./tweet-users.component.html')
})

export class TweetUsersComponent {
  ethStatus: boolean;
  users: EthTweetUser[];
  ethTweet: any;

  /**
   * @property currentUser - local state containing
   *   the EthTweet address of user of the currently selected user.
   */

  public currentUser: String;

  // User object for template.
  user: Object;

  /**
   * @ouput onUserSelected - outputs the current User.
   */
  onUserSelected: EventEmitter<String>;

  constructor(ethTweet: EthTweet) {
    this.ethTweet = ethTweet;
    this.ethStatus = ethTweet.ethStatus;

    this.currentUser = '';
    this.onUserSelected = new EventEmitter();

    if (this.ethStatus) {
      this.users = ethTweet.getAllUsers();
    }
  }

  userWasSelected(event: String): void {
    this.currentUser = event;

    this.user = {
      name: this.ethTweet.getUserNameByAddress(this.currentUser),
      address: this.currentUser
    };

    this.onUserSelected.emit(this.currentUser);
  }
}

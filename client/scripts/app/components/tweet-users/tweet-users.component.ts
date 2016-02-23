/* beautify ignore:start */
import {Component, EventEmitter} from 'angular2/core';
import {Web3Service} from '../../services/web-3-service/web-3-service.service';
import {TweetListComponent} from '../tweet-list/tweet-list.component';
import Web3 from "../../services/web-3-service/web-3-service.service";

/* beautify ignore:end */

/**
 * @EthTweetUser: A component providing a `EthTweetUser` object
 */
export class EthTweetUser {
  constructor(
    public name: string,
    public address: string ) {
  }
}

@Component({
    selector: 'tweet-users',
    directives: [TweetListComponent],
    outputs: ['onUserSelected'],
    styles: [require('./tweet-users.component.scss').toString()],
    template: require('./tweet-users.component.html')
})

export class TweetUsersComponent {
  ethStatus: boolean;
  web3: Web3;
  users: EthTweetUser[];
  public currentUser: String;

  /**
   * @property currentUser - local state containing
   *             the currently selected `EthTweetUser`
   */
  currentUser: String;

  /**
   * @ouput onUserSelected - outputs the current User.
   */
  onUserSelected: EventEmitter<String>;

  constructor(web3api: Web3Service) {
    this.web3 = web3api.getWeb3();
    this.ethStatus = this.web3.isConnected();
    this.users = [];
    this.currentUser = '';
    this.onUserSelected = new EventEmitter();

    if (this.ethStatus) {
      const TweetRegistryAddress = '0xe0f278b72097e563b09d7dc94c6f75aff5e83298';
      let TweetRegistry = this.tweetRegistry(TweetRegistryAddress);

      // Number of Accounts of current user (coinbase)?!
      let numberOfAccounts = TweetRegistry.getNumberOfAccounts().toNumber();

      let i = 0;
      while (i < numberOfAccounts) {
        let address = TweetRegistry.getAddressOfId(i);
        this.users[i] = new EthTweetUser(TweetRegistry.getNameOfAddress(address), address);
        i++;
      }
      //console.log(this.users, 'All tweet User names with account addresses.');
    }
  }

  //changed(event: Event <string>): void {
  //  console.log(event, 'changed@userWasSelected');
  //
  //  // ACtually we don't ned this anymore:
  //  // this.currentUser = this.findUserByAdress(this.users, event.target.value);
  //
  //  this.currentUser = event;
  //  // This value contains the user id Hash.
  //  this.onUserSelected.emit(this.currentUser);
  //  console.log(this, 'This');
  //  console.log(this.currentUser, 'Emit event: "onUserSelected" @TweetUsersComponent this.currentUser@EventEmitter');
  //}

  // TODO This should not be here. Just testing.

  userWasSelected(event: String): void {
    console.log(event, 'event@userWasSelected (tweet-users)');
    console.log(this, 'this');

    this.currentUser = event;
    this.onUserSelected.emit(this.currentUser);
  }

  findUserByAdress (users: EthTweetUser[], address: string) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].address === address) {
        return users[i];
      }
    }
    throw 'Couldn not find User with address: ' + address;
  }

  tweetRegistry (account: string) {
    return this.web3.eth.contract(
      [
        {
          'constant': false,
          'inputs': [{'name': 'name', 'type': 'string'}],
          'name': 'adminUnregister',
          'outputs': [],
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [{'name': 'name', 'type': 'string'}, {'name': 'accountAddress', 'type': 'address'}],
          'name': 'register',
          'outputs': [{'name': 'result', 'type': 'int256'}],
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'getNumberOfAccounts',
          'outputs': [{'name': 'numberOfAccounts', 'type': 'uint256'}],
          'type': 'function'
        },
        {
          'constant': false, 'inputs': [], 'name': 'adminRetrieveDonations', 'outputs': [], 'type': 'function'
        },
        {
          'constant': true,
          'inputs': [{'name': 'name', 'type': 'string'}],
          'name': 'getAddressOfName',
          'outputs': [{'name': 'addr', 'type': 'address'}],
          'type': 'function'
        },
        {
          'constant': false, 'inputs': [], 'name': 'adminDeleteRegistry', 'outputs': [], 'type': 'function'
        },
        {
          'constant': false,
          'inputs': [{'name': 'accountAdmin', 'type': 'address'}],
          'name': 'adminSetAccountAdministrator',
          'outputs': [],
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [{'name': 'registrationDisabled', 'type': 'bool'}],
          'name': 'adminSetRegistrationDisabled',
          'outputs': [],
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [{'name': 'addr', 'type': 'address'}],
          'name': 'getNameOfAddress',
          'outputs': [{'name': 'name', 'type': 'string'}],
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [],
          'name': 'unregister',
          'outputs': [{'name': 'unregisteredAccountName', 'type': 'string'}],
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [{'name': 'id', 'type': 'uint256'}],
          'name': 'getAddressOfId',
          'outputs': [{'name': 'addr', 'type': 'address'}],
          'type': 'function'
        },
        {
          'inputs': [], 'type': 'constructor'
        }
      ]
    ).at(account);
  }
}

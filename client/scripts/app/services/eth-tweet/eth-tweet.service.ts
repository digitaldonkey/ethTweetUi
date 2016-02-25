/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import * as Web3 from 'web3';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
/* beautify ignore:end */

declare module 'EthTweet' {
  export default class EthTweet {
    ethTweet(): EthTweet;
  }
}

/**
 * @EthTweetUser: A component providing a `EthTweetUser` object
 */
export class EthTweetUser {
  constructor(
    public name: string,
    public address: string ) {
  }
}

@Injectable()
export class EthTweet {

  name: string;
  ethTweet: Subject<EthTweet> = new BehaviorSubject<EthTweet>(null);

  // Constants.
  tweetRegistryAddress: string;
  web3HttpServer: string;

  // Variables.
  web3: any;
  // Here we will the tweetRegistry.
  etr: any;
  eth: any;
  ethStatus: boolean;
  users: EthTweetUser[];

  constructor() {

    // Connection to Ethereum server.
    this.web3HttpServer = 'http://localhost:8545';

    // The Eth tweet registry is a pre defined ethereum address.
    // See: https://github.com/yep/eth-tweet#register-account-name
    this.tweetRegistryAddress = '0xe0f278b72097e563b09d7dc94c6f75aff5e83298';

    // Init Web3 Api.
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.web3HttpServer));
    this.eth = this.web3.eth;
    this.ethStatus = this.web3.isConnected();

    // tweetRegistry.
    this.etr = this.tweetRegistry();
  }

  /**
   * tweetRegistry
   *
   * See: https://github.com/yep/eth-tweet#browse-accounts
   *
   * @return <object>
   *   tweetRegistry
   */
  tweetRegistry () {
    return this.eth.contract(
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
    ).at(this.tweetRegistryAddress);
  }

  /**
   * tweetAccount
   *
   * @param address String
   *   Ethereum address of the tweet account.
   *
   * See: https://github.com/yep/eth-tweet#read-tweets
   *
   * @return <object>
   *   tweetAccount of the given user
   */
  tweetAccount (address) {
    return this.eth.contract(
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

  /**
   * getAllUsers.
   *
   */
  getAllUsers() {
    if (typeof this.users === 'undefined') {
      this.loadAllUsers();
    }
    return this.users;
  }

  /**
   * Returns User name for a given address.
   * This is about 1000 times faster compared to etr.getNameOfAddress(address).
   */
  getUserNameByAddress (address: string) {

    if (typeof this.users === 'undefined') {
      this.loadAllUsers();
    }
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].address === address) {
        return this.users[i].name;
      }
    }
    throw 'Could not find User with address: ' + address;
  }

  /**
   * Load all users to this.users[]
   *
   * Using
   *
   *    etr.getNameOfAddress(address)
   *
   * to initially load the users.
   * Limits in performance: 100 users names took about 1sec.
   *
   * If User Array is filled getUserNameByAddress() is 1000 times faster.
   */
  private loadAllUsers() {

    this.users = [];

    // Number of Accounts of current user (coinbase)?!
    let numberOfAccounts = this.etr.getNumberOfAccounts().toNumber();

    let i = 0;
    while (i < numberOfAccounts) {
      let address = this.etr.getAddressOfId(i);
      this.users[i] = new EthTweetUser(this.etr.getNameOfAddress(address), address);
      i++;
    }
    return this.users;
  }

}

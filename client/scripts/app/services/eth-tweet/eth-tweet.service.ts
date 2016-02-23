/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import * as Web3 from 'web3';

/* beautify ignore:end */

@Injectable()
export class EthTweet {

  tweetRegistryAddress: string;
  web3HttpServer: string;
  web3: Web3;

  constructor() {
    // The Eth tweet registry is a pre defined ethereum address.
    // See: https://github.com/yep/eth-tweet#register-account-name
    this.tweetRegistryAddress = '0xe0f278b72097e563b09d7dc94c6f75aff5e83298';
    this.web3HttpServer = 'http://localhost:8545';
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.web3HttpServer));

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
    ).at(this.tweetRegistryAddress);
  }

  /**
   * tweetAccount
   *
   * @param atring address
   *   Ethereum address of the tweet account.
   *
   * See: https://github.com/yep/eth-tweet#read-tweets
   *
   * @return <object>
   *   tweetAccount of the given user
   */
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

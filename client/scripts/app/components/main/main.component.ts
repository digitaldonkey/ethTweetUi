/* beautify ignore:start */
import {Component, Inject} from 'angular2/core';
import {Web3Service} from '../../services/web-3-service/web-3-service.service';
import {EthTweetComponent} from '../eth-tweet/eth-tweet.component';

/* beautify ignore:end */

@Component({
  selector: 'eth-state',
  directives: [EthTweetComponent],
  styles: [require('./main.component.scss').toString()],
  template: require('./main.component.html')

})
export class MainComponent {
  ethStatus: boolean;
  web3: Object;

  constructor(web3api:Web3Service) {
    this.web3 = web3api.getWeb3();
    this.ethStatus = this.web3.isConnected();
  }
}

//if (web3.isConnected()) {
//    this.ethStatus = true;
//    this.web3 = web3;
//
//  var eth = web3.eth;//
//  console.log(eth, '(eth = web3.eth)');
//
//  console.log(eth.accounts, '(eth.accounts)');
//
//  var coinbase = eth.coinbase;
//  console.log(coinbase, 'coinbase');
//
//  // Setting specific account.
//  eth.defaultAccount = coinbase;
//  console.log(eth.defaultAccount, '(web3.eth.defaultAccount changed)');
//
//  // My Ether.
//  var balance = web3.fromWei(eth.getBalance(coinbase), "ether");
//  // balance is type BigNumber:
//  console.log(balance.toNumber(), 'Account balance in ether'); // instanceof BigNumber
//
//  var testAccount = '0xe0f278b72097e563b09d7dc94c6f75aff5e83298';
//  var TweetRegistry = eth.contract([{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"adminUnregister","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"accountAddress","type":"address"}],"name":"register","outputs":[{"name":"result","type":"int256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfAccounts","outputs":[{"name":"numberOfAccounts","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"adminRetrieveDonations","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"getAddressOfName","outputs":[{"name":"addr","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"adminDeleteRegistry","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"accountAdmin","type":"address"}],"name":"adminSetAccountAdministrator","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"registrationDisabled","type":"bool"}],"name":"adminSetRegistrationDisabled","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getNameOfAddress","outputs":[{"name":"name","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"unregister","outputs":[{"name":"unregisteredAccountName","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getAddressOfId","outputs":[{"name":"addr","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]).at(testAccount);
//
//  // Number of Accounts of current user (coinbase)?!
//  var numberOfAccounts = TweetRegistry.getNumberOfAccounts().toNumber();
//  console.log(numberOfAccounts, 'getNumberOfAccounts');
//
//  var accounts = new Array, i = 0;
//  while (i < numberOfAccounts) {
//    var address = TweetRegistry.getAddressOfId(i);
//    var thisAccount = web3.eth.contract([{"constant":true,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"adminAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"adminDeleteAccount","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"}],"name":"adminRetrieveDonations","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getLatestTweet","outputs":[{"name":"tweetString","type":"string"},{"name":"timestamp","type":"uint256"},{"name":"numberOfTweets","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"isAdmin","outputs":[{"name":"isAdmin","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"tweetId","type":"uint256"}],"name":"getTweet","outputs":[{"name":"tweetString","type":"string"},{"name":"timestamp","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfTweets","outputs":[{"name":"numberOfTweets","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"tweetString","type":"string"}],"name":"tweet","outputs":[{"name":"result","type":"int256"}],"type":"function"},{"inputs":[],"type":"constructor"}]).at(address);
//
//    accounts[i] = {
//      name: TweetRegistry.getNameOfAddress(address),
//      address: address,
//      // Todo: This is whon. It will return the first (or last) tweet.
//      // Need to itterate over the number of tweets.
//      tweets: thisAccount.getTweet()
//    };
//    i++;
//  }
//  console.log(accounts, 'All tweet User names with account addresses.');
//
//  console.log(web3.eth.accounts[0], 'web3.eth.accounts[0]');
//  // var MyTweetAccount = eth.contract([{"constant":true,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"adminAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"adminDeleteAccount","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"}],"name":"adminRetrieveDonations","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getLatestTweet","outputs":[{"name":"tweetString","type":"string"},{"name":"timestamp","type":"uint256"},{"name":"numberOfTweets","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"isAdmin","outputs":[{"name":"isAdmin","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"tweetId","type":"uint256"}],"name":"getTweet","outputs":[{"name":"tweetString","type":"string"},{"name":"timestamp","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfTweets","outputs":[{"name":"numberOfTweets","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"tweetString","type":"string"}],"name":"tweet","outputs":[{"name":"result","type":"int256"}],"type":"function"},{"inputs":[],"type":"constructor"}]).new( { from: web3.eth.accounts[0], data: '6060604052600060015560028054600160a060020a031916331790556104f4806100296000396000f36060604052361561006c5760e060020a60003504630c4f65bd811461006e5780633e450fff146100815780635c3e426c1461008c578063ae978f081461009a578063b6db75a014610118578063c3ad5ecb14610134578063ca7dc5b1146101b0578063fb46d4c5146101bb575b005b61020f600254600160a060020a03165b90565b61006c6104df61011c565b61006c6004356104b361011c565b604080516020818101835260008083526001805460001990810183528284528551868420830180546002948116156101000290930190921692909204601f810185900485028301850190965285825261022c95929384939083018282801561048b5780601f106104605761010080835404028352916020019161048b565b6102a85b600254600160a060020a03908116339091161461007e565b6040805160208181018352600080835260043580825281835284518583206001908101805460029281161561010002600019011691909104601f81018690048602830186019097528682526102ba96929594919290918301828280156104445780601f1061041957610100808354040283529160200191610444565b6102a860015461007e565b6102a86004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650505050505050600061032f61011c565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018481526020018381526020018281038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102985780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60408051918252519081900360200190f35b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103205780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b151561033e57506000196103e0565b60a08251111561035157506001196103e0565b6001805460009081526020818152604080832042905583548352822085519084018054818552938390209094600290851615610100026000190190941693909304601f90810183900484019391928701908390106103e557805160ff19168380011785555b506103d29291505b8082111561041557600081556001016103be565b505060018054810190555060005b919050565b828001600101855582156103b6579182015b828111156103b65782518260005055916020019190600101906103f7565b5090565b820191906000526020600020905b81548152906001019060200180831161042757829003601f168201915b5050506000958652505060208490526040909320549293915050565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b5050600154600019810160009081526020819052604090205494989497509550929350505050565b156104dc57604051600160a060020a03828116916000913016319082818181858883f150505050505b50565b156104f257600254600160a060020a0316ff5b56', gas: 3000000 }, function(e, contract){ if (typeof contract.address != 'undefined') { console.log(e, contract); console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash); } });
//
//}

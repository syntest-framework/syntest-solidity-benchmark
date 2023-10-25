const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractA0DTvLs = await IERC20.new({from: accounts[2]});
		const amountqzO8FY4 = BigInt("200")
		const recipientbGCHZCj = accounts[0]
		const senderiJRCQRY = accounts[1]
		const nullenU2gNB = await contractA0DTvLs.totalSupply.call({from: accounts[3]});
		const nullYyAaQdH = await contractA0DTvLs.totalSupply.call({from: accounts[3]});
		const nullSfNQUM = await contractA0DTvLs.transferFrom.call(senderiJRCQRY, recipientbGCHZCj, amountqzO8FY4, {from: "0x0000000000000000000000000000000000000001"});
	});
})
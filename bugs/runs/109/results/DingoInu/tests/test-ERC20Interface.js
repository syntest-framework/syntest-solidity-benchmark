const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractW721Bj0 = await ERC20Interface.new({from: accounts[1]});
		const spenderboTiKRt = accounts[1]
		const tokenOwnerAeLUqjN = accounts[1]
		const tokensx9MxS0H = BigInt("2017")
		const toBQ6ZrH0 = accounts[0]
		const tokensNtrFGwm = BigInt("1362")
		const spenderYHPpKcc = accounts[3]
		const tokenswiwp4h = BigInt("1227")
		const spenderHHLQvst = accounts[2]
		const remainingyJ85f90 = await contractW721Bj0.allowance.call(tokenOwnerAeLUqjN, spenderboTiKRt, {from: accounts[1]});
		const successRa288s9 = await contractW721Bj0.transfer.call(toBQ6ZrH0, tokensx9MxS0H, {from: accounts[2]});
		const successra6ajfL = await contractW721Bj0.approve.call(spenderYHPpKcc, tokensNtrFGwm, {from: accounts[4]});
		const successh9iRHJm = await contractW721Bj0.approve.call(spenderHHLQvst, tokenswiwp4h, {from: accounts[2]});
	});
})
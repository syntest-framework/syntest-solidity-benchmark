const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractlozO1wS = await ERC20Interface.new({from: accounts[3]});
		const tokenswOJ6Bi = BigInt("762")
		const toUOx1K82 = accounts[2]
		const fromzQU0qFh = accounts[5]
		const tokenOwnerAvH1zqO = accounts[0]
		const nullXcrnUg = await contractlozO1wS.totalSupply.call({from: accounts[3]});
		const successJyNo5Mq = await contractlozO1wS.transferFrom.call(fromzQU0qFh, toUOx1K82, tokenswOJ6Bi, {from: accounts[2]});
		const balanceSXsw7dB = await contractlozO1wS.balanceOf.call(tokenOwnerAvH1zqO, {from: accounts[2]});
	});
})
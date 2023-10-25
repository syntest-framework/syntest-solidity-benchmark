const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractlknhdi5 = await ERC20Interface.new({from: accounts[0]});
		const tokensXkAxOQG = BigInt("1868")
		const tofzRbgvu = accounts[2]
		const spenderdqJmqGu = accounts[3]
		const tokenOwnerwlyweWY = accounts[2]
		const tokensZWRrOQ = BigInt("2005")
		const tovhlrKRO = accounts[4]
		const successfsE135t = await contractlknhdi5.transfer.call(tofzRbgvu, tokensXkAxOQG, {from: accounts[3]});
		const remainingnkqbl9k = await contractlknhdi5.allowance.call(tokenOwnerwlyweWY, spenderdqJmqGu, {from: accounts[0]});
		const successAHEkYOG = await contractlknhdi5.transfer.call(tovhlrKRO, tokensZWRrOQ, {from: accounts[0]});
	});
})
const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractPPtKjYK = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensG5hm6dp = BigInt("1046")
		const spenderAb82St7 = accounts[0]
		const tokensdYXSVTq = BigInt("1566")
		const totnrhDX = accounts[3]
		const tokensqpDWmmP = BigInt("1336")
		const spenderkfx1fe = accounts[2]
		const tokenOwnerlGJzrY1 = accounts[5]
		const nulldUVXYUW = await contractPPtKjYK.totalSupply.call({from: accounts[4]});
		const nullDDhW7Ux = await contractPPtKjYK.totalSupply.call({from: accounts[4]});
		const successP2qSezn = await contractPPtKjYK.approve.call(spenderAb82St7, tokensG5hm6dp, {from: accounts[0]});
		const successDYLBWu7 = await contractPPtKjYK.transfer.call(totnrhDX, tokensdYXSVTq, {from: accounts[2]});
		const successzunERHl = await contractPPtKjYK.approve.call(spenderkfx1fe, tokensqpDWmmP, {from: accounts[5]});
		const balance0DwgoU = await contractPPtKjYK.balanceOf.call(tokenOwnerlGJzrY1, {from: accounts[5]});
	});
})
const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractVy7kBES = await ERC20Interface.new({from: accounts[2]});
		const tokenOwnerTX045Vq = accounts[1]
		const tokensJYWv800 = BigInt("247")
		const toYNpREC5 = "0x0000000000000000000000000000000000000001"
		const fromS29fsm9 = accounts[3]
		const tokensqeHUB5 = BigInt("659")
		const spenderL5YYXTq = accounts[2]
		const tokenOwnerYcsGEJN = accounts[1]
		const balanceEvwXbLV = await contractVy7kBES.balanceOf.call(tokenOwnerTX045Vq, {from: "0x0000000000000000000000000000000000000001"});
		const successREhL1Ol = await contractVy7kBES.transferFrom.call(fromS29fsm9, toYNpREC5, tokensJYWv800, {from: accounts[3]});
		const successSwivzqV = await contractVy7kBES.approve.call(spenderL5YYXTq, tokensqeHUB5, {from: accounts[2]});
		const balancedkTOnkD = await contractVy7kBES.balanceOf.call(tokenOwnerYcsGEJN, {from: "0x0000000000000000000000000000000000000001"});
	});
})
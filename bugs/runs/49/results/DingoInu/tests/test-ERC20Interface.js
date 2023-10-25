const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractjs0vrXz = await ERC20Interface.new({from: accounts[4]});
		const tokenOwneryaTwdub = accounts[4]
		const tokensKw9I36w = BigInt("1535")
		const spenderWu0Zs4V = accounts[1]
		const spenderf32wmZR = accounts[3]
		const tokenOwnerRNa8f1N = "0x0000000000000000000000000000000000000001"
		const tokensuQR6zqI = BigInt("1925")
		const tosgLorGw = "0x0000000000000000000000000000000000000001"
		const tokensOGoj8g = BigInt("65")
		const spenderQQQUWPG = accounts[2]
		const balanceie7rID5 = await contractjs0vrXz.balanceOf.call(tokenOwneryaTwdub, {from: accounts[5]});
		const successeBhvUfB = await contractjs0vrXz.approve.call(spenderWu0Zs4V, tokensKw9I36w, {from: accounts[4]});
		const remainingcD4xBm4 = await contractjs0vrXz.allowance.call(tokenOwnerRNa8f1N, spenderf32wmZR, {from: accounts[0]});
		const successollO8f = await contractjs0vrXz.transfer.call(tosgLorGw, tokensuQR6zqI, {from: accounts[1]});
		const successCm24t0g = await contractjs0vrXz.approve.call(spenderQQQUWPG, tokensOGoj8g, {from: accounts[0]});
	});
})
const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractDW6I75D = await IERC20.new({from: accounts[1]});
		const valuefiIy010 = BigInt("152")
		const spenderVk8xKt = accounts[1]
		const spenderuxPkQN6 = "0x0000000000000000000000000000000000000001"
		const ownerH8Qiua0 = accounts[1]
		const valuezShgcTA = BigInt("1211")
		const fromhOIm7Jl = accounts[5]
		const valueC8Jsu51 = BigInt("1783")
		const fromFdgOCi = accounts[1]
		const valuezyw9Zy6 = BigInt("1269")
		const fromeXA5hNW = "0x0000000000000000000000000000000000000001"
		const valueREFqzTV = BigInt("8")
		const spenderbMN30cr = accounts[5]
		const nullv5a02p9 = await contractDW6I75D.approve.call(spenderVk8xKt, valuefiIy010, {from: "0x0000000000000000000000000000000000000001"});
		const nullxg3Vw7P = await contractDW6I75D.allowance.call(ownerH8Qiua0, spenderuxPkQN6, {from: accounts[1]});
		await contractDW6I75D.burnFrom.call(fromhOIm7Jl, valuezShgcTA, {from: accounts[1]});
		await contractDW6I75D.burnFrom.call(fromFdgOCi, valueC8Jsu51, {from: accounts[3]});
		await contractDW6I75D.burnFrom.call(fromeXA5hNW, valuezyw9Zy6, {from: accounts[4]});
		const nullWbACJf = await contractDW6I75D.approve.call(spenderbMN30cr, valueREFqzTV, {from: accounts[1]});
	});
})
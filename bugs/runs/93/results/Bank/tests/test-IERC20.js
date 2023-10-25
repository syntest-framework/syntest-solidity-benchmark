const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracthUw3Cey = await IERC20.new({from: accounts[4]});
		const spenderxzum0YO = accounts[3]
		const ownerxyXeRjI = accounts[0]
		const valuevhf08WY = BigInt("2026")
		const spenderGZNEHS1 = "0x0000000000000000000000000000000000000001"
		const valueho8YZU = BigInt("1775")
		const toZGDRDqV = accounts[1]
		const spenderamUEcqw = accounts[1]
		const ownerVsPmjnz = accounts[4]
		const valueSjZesYh = BigInt("917")
		const toClRScBB = accounts[5]
		const valueBAPIunC = BigInt("1790")
		const toMJewRw = accounts[2]
		const nullmLuqMmV = await contracthUw3Cey.allowance.call(ownerxyXeRjI, spenderxzum0YO, {from: accounts[3]});
		const nullfAO1Jv = await contracthUw3Cey.approve.call(spenderGZNEHS1, valuevhf08WY, {from: accounts[2]});
		const nullN9e6cCx = await contracthUw3Cey.transfer.call(toZGDRDqV, valueho8YZU, {from: accounts[5]});
		const nulloIcqHvx = await contracthUw3Cey.allowance.call(ownerVsPmjnz, spenderamUEcqw, {from: accounts[4]});
		const nullp9CWvIZ = await contracthUw3Cey.transfer.call(toClRScBB, valueSjZesYh, {from: accounts[3]});
		const nullPbbT0xp = await contracthUw3Cey.transfer.call(toMJewRw, valueBAPIunC, {from: accounts[0]});
	});
})
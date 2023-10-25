const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractfvq4zHy = await IERC20.new({from: accounts[2]});
		const valueSxvOc8K = BigInt("1140")
		const toAGjLRdR = accounts[5]
		const periodIFUF20i = BigInt("696")
		const amountAQydljy = BigInt("1977")
		const recipientgFZtZCH = accounts[1]
		const valuel2U3UrZ = BigInt("1873")
		const toCB8QoW = accounts[3]
		const valuenj9bsGd = BigInt("1236")
		const fromq60YDfB = accounts[2]
		const valuermEREPN = BigInt("1513")
		const toSK9jR8H = accounts[0]
		const fromgm9uoFi = accounts[0]
		const nullkfxgIdT = await contractfvq4zHy.totalSupply.call({from: accounts[3]});
		const nullveFguvd = await contractfvq4zHy.mint.call(toAGjLRdR, valueSxvOc8K, {from: accounts[4]});
		await contractfvq4zHy.freezeAndTransfer.call(recipientgFZtZCH, amountAQydljy, periodIFUF20i, {from: accounts[4]});
		const nullZeNtavf = await contractfvq4zHy.mint.call(toCB8QoW, valuel2U3UrZ, {from: accounts[0]});
		await contractfvq4zHy.burnFrom.call(fromq60YDfB, valuenj9bsGd, {from: accounts[2]});
		const nullmUuvsu = await contractfvq4zHy.transferFrom.call(fromgm9uoFi, toSK9jR8H, valuermEREPN, {from: accounts[4]});
	});
})
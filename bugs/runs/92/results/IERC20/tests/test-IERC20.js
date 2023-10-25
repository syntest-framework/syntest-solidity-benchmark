const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractwdQavow = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuesOxS9m9 = BigInt("1000")
		const toypjPaSH = accounts[3]
		const valueOJ3lXNI = BigInt("20")
		const totN41m3e = "0x0000000000000000000000000000000000000001"
		const spenderreGk2JB = accounts[5]
		const ownerpWgZM2u = "0x0000000000000000000000000000000000000001"
		const whoUUxsDPn = accounts[0]
		const nullBJXeimj = await contractwdQavow.transfer.call(toypjPaSH, valuesOxS9m9, {from: accounts[4]});
		const nullWW8lMlI = await contractwdQavow.transfer.call(totN41m3e, valueOJ3lXNI, {from: accounts[4]});
		const nullveVg8pF = await contractwdQavow.allowance.call(ownerpWgZM2u, spenderreGk2JB, {from: accounts[0]});
		const nullStPgbut = await contractwdQavow.balanceOf.call(whoUUxsDPn, {from: accounts[2]});
	});
})
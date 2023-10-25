const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractbEw21nA = await IERC20.new({from: accounts[3]});
		const _valueySNt7MD = BigInt("1428")
		const _spenderrRdBZHm = accounts[2]
		const _valueHGmR26 = BigInt("1003")
		const _spenderSc8WfID = accounts[4]
		const _valueA5mkW4z = BigInt("682")
		const _topvDQi3 = accounts[2]
		const nullfJwjcIu = await contractbEw21nA.approve.call(_spenderrRdBZHm, _valueySNt7MD, {from: accounts[1]});
		const nullgAtyLrR = await contractbEw21nA.totalSupply.call({from: accounts[3]});
		const nullB7EG0fI = await contractbEw21nA.approve.call(_spenderSc8WfID, _valueHGmR26, {from: accounts[1]});
		const nullBorBvdZ = await contractbEw21nA.transfer.call(_topvDQi3, _valueA5mkW4z, {from: accounts[0]});
	});
})
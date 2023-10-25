const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractAYS0v7K = await IERC20.new({from: accounts[4]});
		const whoqE3tqXq = accounts[2]
		const spenderuw4Sfx = accounts[2]
		const ownerhInjY4f = accounts[0]
		const spenderWU4kFfS = accounts[4]
		const ownerXK0cqfk = accounts[2]
		const nullcTboJW0 = await contractAYS0v7K.balanceOf.call(whoqE3tqXq, {from: accounts[2]});
		const nullTml1j3F = await contractAYS0v7K.allowance.call(ownerhInjY4f, spenderuw4Sfx, {from: accounts[1]});
		const nullDzhiGeI = await contractAYS0v7K.allowance.call(ownerXK0cqfk, spenderWU4kFfS, {from: accounts[3]});
	});
})
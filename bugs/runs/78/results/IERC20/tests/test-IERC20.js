const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractqTZMzfE = await IERC20.new({from: accounts[3]});
		const valueOeW34xE = BigInt("44")
		const tofdkAOvB = accounts[2]
		const spenderBC5K3W = accounts[1]
		const ownerBVqTCJ4 = accounts[0]
		const valueoqT1UBI = BigInt("245")
		const toT9G9U6Q = accounts[0]
		const valuenCwlZyL = BigInt("706")
		const spenderFv3wtGD = accounts[4]
		const nullcgeDyam = await contractqTZMzfE.totalSupply.call({from: accounts[4]});
		const nullBIzMNFX = await contractqTZMzfE.transfer.call(tofdkAOvB, valueOeW34xE, {from: accounts[1]});
		const nullSKg0Urv = await contractqTZMzfE.allowance.call(ownerBVqTCJ4, spenderBC5K3W, {from: "0x0000000000000000000000000000000000000001"});
		const nullGrQyIH = await contractqTZMzfE.transfer.call(toT9G9U6Q, valueoqT1UBI, {from: accounts[5]});
		const nullx3WugGm = await contractqTZMzfE.approve.call(spenderFv3wtGD, valuenCwlZyL, {from: accounts[0]});
	});
})
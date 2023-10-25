const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractM1e6o5Q = await IVestingToken.new({from: accounts[0]});
		const _owneroxxa2Yu = accounts[4]
		const _ownerPFeyUW3 = accounts[4]
		const nullQxK75rf = await contractM1e6o5Q.vestedBalanceOf.call(_owneroxxa2Yu, {from: "0x0000000000000000000000000000000000000001"});
		const nullgxKvumY = await contractM1e6o5Q.vestedBalanceOf.call(_ownerPFeyUW3, {from: accounts[2]});
	});
})
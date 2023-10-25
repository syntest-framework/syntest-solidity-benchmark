const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractTUnZchv = await IVestingToken.new({from: accounts[1]});
		const _ownerDOghEGo = accounts[1]
		const _owneritWFEOE = accounts[3]
		const _ownerMHKdLpT = "0x0000000000000000000000000000000000000001"
		const nullmlOhJr = await contractTUnZchv.vestedBalanceOf.call(_ownerDOghEGo, {from: accounts[1]});
		const nulluflRnxS = await contractTUnZchv.vestedBalanceOf.call(_owneritWFEOE, {from: accounts[2]});
		await contractTUnZchv.claim.call({from: accounts[4]});
		await contractTUnZchv.claim.call({from: accounts[4]});
		const nullaWA5I07 = await contractTUnZchv.vestedBalanceOf.call(_ownerMHKdLpT, {from: "0x0000000000000000000000000000000000000001"});
	});
})
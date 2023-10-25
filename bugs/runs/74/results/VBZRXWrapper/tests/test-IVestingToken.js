const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractBXIonf = await IVestingToken.new({from: accounts[0]});
		const _ownerWsMoeyn = accounts[3]
		const _ownerLVoNcoU = "0x0000000000000000000000000000000000000001"
		const _owneraHdYofi = accounts[2]
		const nullz7DDjVf = await contractBXIonf.vestedBalanceOf.call(_ownerWsMoeyn, {from: accounts[0]});
		await contractBXIonf.claim.call({from: accounts[1]});
		const nullEr9mORf = await contractBXIonf.claimedBalanceOf.call(_ownerLVoNcoU, {from: accounts[3]});
		await contractBXIonf.claim.call({from: accounts[4]});
		const nullui3Gq2O = await contractBXIonf.claimedBalanceOf.call(_owneraHdYofi, {from: accounts[5]});
		await contractBXIonf.claim.call({from: accounts[5]});
	});
})
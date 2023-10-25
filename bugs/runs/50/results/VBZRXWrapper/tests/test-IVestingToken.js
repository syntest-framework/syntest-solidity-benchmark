const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractqzaLIaM = await IVestingToken.new({from: accounts[3]});
		const _ownerOxevZ9 = accounts[2]
		const _ownerflBvPfA = accounts[2]
		const _ownerskxNlbu = accounts[0]
		const _ownerPc9Peaa = "0x0000000000000000000000000000000000000001"
		const nullJQbNtif = await contractqzaLIaM.claimedBalanceOf.call(_ownerOxevZ9, {from: accounts[4]});
		const nullOtOwKYG = await contractqzaLIaM.claimedBalanceOf.call(_ownerflBvPfA, {from: accounts[5]});
		const nullatiOXlX = await contractqzaLIaM.vestedBalanceOf.call(_ownerskxNlbu, {from: accounts[4]});
		const nullGSrjiWe = await contractqzaLIaM.vestedBalanceOf.call(_ownerPc9Peaa, {from: accounts[1]});
	});
})
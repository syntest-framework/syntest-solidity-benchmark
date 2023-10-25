const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractDFgtsuS = await IVestingToken.new({from: accounts[2]});
		const _ownerLtstqxF = accounts[3]
		const _ownerf8RAyDs = accounts[5]
		const _ownerbg8ITUq = accounts[3]
		const _ownerKQk3huN = accounts[1]
		const nullC2Eusbf = await contractDFgtsuS.claimedBalanceOf.call(_ownerLtstqxF, {from: accounts[1]});
		const nullD7ascSr = await contractDFgtsuS.claimedBalanceOf.call(_ownerf8RAyDs, {from: accounts[3]});
		const nullmWKT8v4 = await contractDFgtsuS.vestedBalanceOf.call(_ownerbg8ITUq, {from: accounts[2]});
		await contractDFgtsuS.claim.call({from: accounts[5]});
		const nullXjQnuit = await contractDFgtsuS.vestedBalanceOf.call(_ownerKQk3huN, {from: accounts[0]});
	});
})
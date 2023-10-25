const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractAftzPOa = await IVestingToken.new({from: accounts[0]});
		const _ownerhJYZKRT = accounts[5]
		const _ownerblLPBQl = accounts[4]
		const nullhWvqz0r = await contractAftzPOa.claimedBalanceOf.call(_ownerhJYZKRT, {from: accounts[2]});
		const nullJmLmOyj = await contractAftzPOa.vestedBalanceOf.call(_ownerblLPBQl, {from: accounts[4]});
		await contractAftzPOa.claim.call({from: accounts[3]});
		await contractAftzPOa.claim.call({from: accounts[4]});
	});
})
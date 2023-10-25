const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractEZpJxKo = await IVestingToken.new({from: accounts[5]});
		const _ownerW7tj0B1 = "0x0000000000000000000000000000000000000001"
		const _ownergbFK6UY = accounts[2]
		await contractEZpJxKo.claim.call({from: accounts[4]});
		const nullvIzoFFi = await contractEZpJxKo.vestedBalanceOf.call(_ownerW7tj0B1, {from: accounts[4]});
		const nulleDhl5Cv = await contractEZpJxKo.claimedBalanceOf.call(_ownergbFK6UY, {from: "0x0000000000000000000000000000000000000001"});
	});
})
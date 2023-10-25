const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractu5lyIoy = await IVestingToken.new({from: accounts[1]});
		const _ownerYH1jn0O = accounts[5]
		const _ownerwvi6FMN = accounts[0]
		const _ownerRJu3Ib = accounts[1]
		const nullQgv6Gkt = await contractu5lyIoy.claimedBalanceOf.call(_ownerYH1jn0O, {from: accounts[0]});
		const nullOxeFznH = await contractu5lyIoy.vestedBalanceOf.call(_ownerwvi6FMN, {from: accounts[5]});
		await contractu5lyIoy.claim.call({from: accounts[0]});
		const nullQWGQclE = await contractu5lyIoy.claimedBalanceOf.call(_ownerRJu3Ib, {from: accounts[4]});
	});
})
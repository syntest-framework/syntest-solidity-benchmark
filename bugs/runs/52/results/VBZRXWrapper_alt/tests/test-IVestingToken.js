const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contracteALIACz = await IVestingToken.new({from: accounts[1]});
		const _ownerT7qBiK6 = accounts[4]
		const _ownereKhhhX4 = accounts[0]
		const _ownerSD22L3t = accounts[4]
		const _ownerUeQV97R = accounts[2]
		const nullL6byRtY = await contracteALIACz.vestedBalanceOf.call(_ownerT7qBiK6, {from: accounts[3]});
		const nulltdRX8wA = await contracteALIACz.vestedBalanceOf.call(_ownereKhhhX4, {from: accounts[2]});
		await contracteALIACz.claim.call({from: accounts[3]});
		const nullrpdCfvW = await contracteALIACz.vestedBalanceOf.call(_ownerSD22L3t, {from: accounts[3]});
		await contracteALIACz.claim.call({from: accounts[0]});
		const nullkXSs6NQ = await contracteALIACz.claimedBalanceOf.call(_ownerUeQV97R, {from: accounts[1]});
	});
})
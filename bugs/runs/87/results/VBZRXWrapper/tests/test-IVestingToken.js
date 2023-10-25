const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractl3SCC62 = await IVestingToken.new({from: accounts[3]});
		const _ownerFkN5TgW = accounts[1]
		const _ownerYPInrB = accounts[5]
		const _ownerxuDPIO6 = accounts[3]
		const _ownerSjplwn = accounts[5]
		const nullzm30ErB = await contractl3SCC62.vestedBalanceOf.call(_ownerFkN5TgW, {from: accounts[3]});
		const nullzXJ8Kl = await contractl3SCC62.vestedBalanceOf.call(_ownerYPInrB, {from: accounts[1]});
		const null1H9vbV = await contractl3SCC62.claimedBalanceOf.call(_ownerxuDPIO6, {from: accounts[0]});
		const nullCjzG5y8 = await contractl3SCC62.vestedBalanceOf.call(_ownerSjplwn, {from: accounts[0]});
	});
})
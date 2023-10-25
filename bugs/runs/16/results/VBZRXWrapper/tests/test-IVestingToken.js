const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractmUVyeEl = await IVestingToken.new({from: accounts[1]});
		const _ownerHDeedCe = accounts[0]
		const _ownerfnLwghD = accounts[3]
		const _owneryBb3A93 = accounts[3]
		const _ownerdxWUudq = accounts[0]
		const nullaRBq0fc = await contractmUVyeEl.vestedBalanceOf.call(_ownerHDeedCe, {from: accounts[1]});
		const nullBezyorT = await contractmUVyeEl.claimedBalanceOf.call(_ownerfnLwghD, {from: accounts[2]});
		await contractmUVyeEl.claim.call({from: accounts[1]});
		const nullhE0zjhz = await contractmUVyeEl.vestedBalanceOf.call(_owneryBb3A93, {from: accounts[3]});
		const nulltCfPYJs = await contractmUVyeEl.vestedBalanceOf.call(_ownerdxWUudq, {from: accounts[4]});
	});
})
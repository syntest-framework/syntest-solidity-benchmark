const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractNEhnYAK = await IVestingToken.new({from: accounts[1]});
		const _ownerXl7mOgT = accounts[3]
		const _ownerpwOppDo = accounts[1]
		const _ownerdZ6cveJ = accounts[4]
		const nullSWlPba4 = await contractNEhnYAK.vestedBalanceOf.call(_ownerXl7mOgT, {from: accounts[0]});
		const nullJV9htwF = await contractNEhnYAK.vestedBalanceOf.call(_ownerpwOppDo, {from: accounts[0]});
		await contractNEhnYAK.claim.call({from: accounts[3]});
		const nullQdj58er = await contractNEhnYAK.vestedBalanceOf.call(_ownerdZ6cveJ, {from: accounts[1]});
	});
})
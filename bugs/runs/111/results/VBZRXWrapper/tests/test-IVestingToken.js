const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contract10A7VH = await IVestingToken.new({from: accounts[3]});
		const _owneri6rXsNZ = accounts[0]
		const _ownerwna75D6 = accounts[0]
		const _ownerJCY1DMH = accounts[1]
		const nullogoO7b = await contract10A7VH.vestedBalanceOf.call(_owneri6rXsNZ, {from: "0x0000000000000000000000000000000000000001"});
		const nullcR9lq4 = await contract10A7VH.claimedBalanceOf.call(_ownerwna75D6, {from: accounts[2]});
		const nullC2RT2yD = await contract10A7VH.vestedBalanceOf.call(_ownerJCY1DMH, {from: accounts[3]});
	});
})
const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractTIilLYM = await IVestingToken.new({from: accounts[2]});
		const _ownermCCxoc7 = accounts[0]
		const _owner8uC4Mz = "0x0000000000000000000000000000000000000001"
		const _owneriRKgMk = accounts[0]
		const nullfVl55wN = await contractTIilLYM.vestedBalanceOf.call(_ownermCCxoc7, {from: accounts[4]});
		const nullFWAY9o2 = await contractTIilLYM.claimedBalanceOf.call(_owner8uC4Mz, {from: "0x0000000000000000000000000000000000000001"});
		const nullDOlOMea = await contractTIilLYM.vestedBalanceOf.call(_owneriRKgMk, {from: accounts[4]});
	});
})
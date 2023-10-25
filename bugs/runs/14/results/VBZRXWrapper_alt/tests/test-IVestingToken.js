const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractCcHg76Z = await IVestingToken.new({from: accounts[2]});
		const _owner2LFA0D = accounts[2]
		const _owneryuEswpf = accounts[2]
		const _ownerbYLi6o = accounts[1]
		await contractCcHg76Z.claim.call({from: accounts[3]});
		await contractCcHg76Z.claim.call({from: accounts[2]});
		const nullTK1V5mN = await contractCcHg76Z.vestedBalanceOf.call(_owner2LFA0D, {from: "0x0000000000000000000000000000000000000001"});
		const nullMPEIUSo = await contractCcHg76Z.claimedBalanceOf.call(_owneryuEswpf, {from: accounts[0]});
		const nullzOA0Cfa = await contractCcHg76Z.vestedBalanceOf.call(_ownerbYLi6o, {from: "0x0000000000000000000000000000000000000001"});
	});
})
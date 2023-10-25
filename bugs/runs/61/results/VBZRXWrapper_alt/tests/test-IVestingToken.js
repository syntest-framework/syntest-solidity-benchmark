const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractX9ucxW = await IVestingToken.new({from: accounts[2]});
		const _ownermNv8NZ = accounts[0]
		const _ownervoro0Iv = accounts[5]
		const _ownerVuK492R = accounts[1]
		const _ownerkHGHZlk = "0x0000000000000000000000000000000000000001"
		const _owneryhwIT4A = accounts[4]
		const nullFKMcXcC = await contractX9ucxW.vestedBalanceOf.call(_ownermNv8NZ, {from: accounts[0]});
		const nullTbSAjO0 = await contractX9ucxW.vestedBalanceOf.call(_ownervoro0Iv, {from: accounts[0]});
		const nullutesD6F = await contractX9ucxW.vestedBalanceOf.call(_ownerVuK492R, {from: accounts[4]});
		const nulllweTeY = await contractX9ucxW.vestedBalanceOf.call(_ownerkHGHZlk, {from: accounts[2]});
		const nulln70dkZR = await contractX9ucxW.vestedBalanceOf.call(_owneryhwIT4A, {from: accounts[3]});
	});
})
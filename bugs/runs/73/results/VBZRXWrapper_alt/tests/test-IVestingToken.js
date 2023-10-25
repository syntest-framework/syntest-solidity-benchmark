const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractBDbywWD = await IVestingToken.new({from: "0x0000000000000000000000000000000000000001"});
		const _ownerz4xm8HU = accounts[1]
		const _ownerQDzPZVc = accounts[1]
		const _ownerZ57myiq = accounts[4]
		const _ownerxBngjdF = accounts[4]
		const _ownerOR3TmVM = accounts[5]
		const nullvQhGMJy = await contractBDbywWD.claimedBalanceOf.call(_ownerz4xm8HU, {from: accounts[1]});
		const nulliClhOqT = await contractBDbywWD.vestedBalanceOf.call(_ownerQDzPZVc, {from: accounts[0]});
		const nullL2NUbxr = await contractBDbywWD.claimedBalanceOf.call(_ownerZ57myiq, {from: accounts[1]});
		const nullXwr85l = await contractBDbywWD.vestedBalanceOf.call(_ownerxBngjdF, {from: "0x0000000000000000000000000000000000000001"});
		const nullK5E8DIH = await contractBDbywWD.claimedBalanceOf.call(_ownerOR3TmVM, {from: accounts[2]});
	});
})
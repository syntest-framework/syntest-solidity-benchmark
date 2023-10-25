const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractLnefXg0 = await IERC721.new({from: accounts[2]});
		const datag45eMJ0 = "0x07060c06080a10031e1a150311011c12121205011d111c04140c051f13091e"
		const tokenIdnkVmY20 = BigInt("847")
		const toq56Nzxv = accounts[4]
		const fromD1hWgah = accounts[2]
		const tokenIdzOLweny = BigInt("956")
		const totwz0Ncv = accounts[5]
		const fromxQpyf1O = accounts[4]
		const tokenIdkz950p8 = BigInt("1080")
		const operatorxf3a5d0 = accounts[4]
		const ownerjPm673 = accounts[0]
		const tokenIdIfe7Rl = BigInt("1541")
		const to1lblcB = accounts[0]
		const fromlOU9LYr = accounts[4]
		await contractLnefXg0.safeTransferFrom.call(fromD1hWgah, toq56Nzxv, tokenIdnkVmY20, datag45eMJ0, {from: accounts[1]});
		await contractLnefXg0.safeTransferFrom.call(fromxQpyf1O, totwz0Ncv, tokenIdzOLweny, {from: accounts[5]});
		const operatorx3QM5eV = await contractLnefXg0.getApproved.call(tokenIdkz950p8, {from: accounts[0]});
		const nullriK1VCP = await contractLnefXg0.isApprovedForAll.call(ownerjPm673, operatorxf3a5d0, {from: accounts[3]});
		await contractLnefXg0.safeTransferFrom.call(fromlOU9LYr, to1lblcB, tokenIdIfe7Rl, {from: accounts[0]});
	});
})
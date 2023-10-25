const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractFzDmKD7 = await IERC721.new({from: accounts[5]});
		const operatordEcIFcu = accounts[0]
		const ownerW23zz1m = accounts[4]
		const tokenIdL6Gap3k = BigInt("214")
		const tozD2eDpe = accounts[5]
		const fromC83QzfP = accounts[3]
		const tokenIdeGGQ3on = BigInt("1955")
		const toTUHJeRy = accounts[2]
		const fromxGHvOu = accounts[4]
		const tokenIdLPj42p = BigInt("240")
		const operator147Luv = accounts[4]
		const ownervPIFjjL = "0x0000000000000000000000000000000000000001"
		const nullAkS7Qpy = await contractFzDmKD7.isApprovedForAll.call(ownerW23zz1m, operatordEcIFcu, {from: accounts[3]});
		await contractFzDmKD7.safeTransferFrom.call(fromC83QzfP, tozD2eDpe, tokenIdL6Gap3k, {from: accounts[1]});
		await contractFzDmKD7.transferFrom.call(fromxGHvOu, toTUHJeRy, tokenIdeGGQ3on, {from: accounts[1]});
		const owneraK0m6iP = await contractFzDmKD7.ownerOf.call(tokenIdLPj42p, {from: accounts[2]});
		const nullqMhjGU = await contractFzDmKD7.isApprovedForAll.call(ownervPIFjjL, operator147Luv, {from: accounts[4]});
	});
})
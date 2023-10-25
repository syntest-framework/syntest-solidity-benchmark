const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractCZPnnvG = await IERC721.new({from: accounts[3]});
		const tokenIdHqnddmr = BigInt("1974")
		const tokenIdNt0brcz = BigInt("151")
		const tokenIdp8lsXe = BigInt("1704")
		const toxfGHXWU = accounts[3]
		const tokenIdlbQhj2u = BigInt("1634")
		const toIyNLXg7 = accounts[3]
		const fromWoUuhBE = accounts[5]
		const tokenIdwgguTkB = BigInt("417")
		const toS7nufMs = accounts[2]
		const datatGSzCU = "0x0f181d0809160e1a200f160d1f1e1b011c"
		const tokenIdZkxTHD = BigInt("1257")
		const toeSFewS = accounts[5]
		const fromUBU2dz = accounts[0]
		const operatorgMbrZEI = await contractCZPnnvG.getApproved.call(tokenIdHqnddmr, {from: accounts[4]});
		const owner2H5ljP = await contractCZPnnvG.ownerOf.call(tokenIdNt0brcz, {from: accounts[2]});
		await contractCZPnnvG.approve.call(toxfGHXWU, tokenIdp8lsXe, {from: accounts[0]});
		await contractCZPnnvG.transferFrom.call(fromWoUuhBE, toIyNLXg7, tokenIdlbQhj2u, {from: accounts[0]});
		await contractCZPnnvG.approve.call(toS7nufMs, tokenIdwgguTkB, {from: accounts[2]});
		await contractCZPnnvG.safeTransferFrom.call(fromUBU2dz, toeSFewS, tokenIdZkxTHD, datatGSzCU, {from: accounts[1]});
	});
})
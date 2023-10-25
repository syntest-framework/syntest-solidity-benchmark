const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractt579poJ = await IERC721.new({from: accounts[1]});
		const tokenIdHbS6ha1 = BigInt("1847")
		const tokenIdNzRqKJZ = BigInt("2024")
		const tocyWh2K = accounts[5]
		const froma1MyGgV = accounts[0]
		const tokenIdkFObYUs = BigInt("1226")
		const tokenIdbjFYnLQ = BigInt("755")
		const toIBnts62 = accounts[4]
		const fromgLNX8Fd = accounts[4]
		const tokenIdQjFUQpA = BigInt("1219")
		const tooOMJTG = accounts[1]
		const tokenIdIGGmrEW = BigInt("1149")
		const toYDoeBQQ = accounts[0]
		const frome0FSqsE = accounts[0]
		const ownerqx9ioTs = await contractt579poJ.ownerOf.call(tokenIdHbS6ha1, {from: "0x0000000000000000000000000000000000000001"});
		await contractt579poJ.safeTransferFrom.call(froma1MyGgV, tocyWh2K, tokenIdNzRqKJZ, {from: accounts[3]});
		const operatorxkhMNdP = await contractt579poJ.getApproved.call(tokenIdkFObYUs, {from: accounts[3]});
		await contractt579poJ.safeTransferFrom.call(fromgLNX8Fd, toIBnts62, tokenIdbjFYnLQ, {from: accounts[2]});
		await contractt579poJ.approve.call(tooOMJTG, tokenIdQjFUQpA, {from: accounts[3]});
		await contractt579poJ.transferFrom.call(frome0FSqsE, toYDoeBQQ, tokenIdIGGmrEW, {from: accounts[3]});
	});
})
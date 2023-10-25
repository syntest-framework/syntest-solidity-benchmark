const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractg8qMWO8 = await IERC721.new({from: accounts[0]});
		const dataFOzeIfx = "0x1b070a020e1218080e0d11151e100d160d01"
		const tokenId5Xl1eh = BigInt("1127")
		const toLsKqZoC = accounts[3]
		const fromQGh9XJY = accounts[3]
		const tokenIdjEpFWLB = BigInt("273")
		const toUygOouj = accounts[3]
		const fromUdExRSn = accounts[2]
		const tokenIde9PHhF8 = BigInt("804")
		const ownerFRz8hhw = accounts[1]
		const tokenIdPw5JvPD = BigInt("1735")
		await contractg8qMWO8.safeTransferFrom.call(fromQGh9XJY, toLsKqZoC, tokenId5Xl1eh, dataFOzeIfx, {from: accounts[2]});
		await contractg8qMWO8.safeTransferFrom.call(fromUdExRSn, toUygOouj, tokenIdjEpFWLB, {from: accounts[2]});
		const operatorQpbeS3Z = await contractg8qMWO8.getApproved.call(tokenIde9PHhF8, {from: accounts[0]});
		const balanceX4hk9y1 = await contractg8qMWO8.balanceOf.call(ownerFRz8hhw, {from: accounts[5]});
		const ownerdPrcPto = await contractg8qMWO8.ownerOf.call(tokenIdPw5JvPD, {from: accounts[4]});
	});
})
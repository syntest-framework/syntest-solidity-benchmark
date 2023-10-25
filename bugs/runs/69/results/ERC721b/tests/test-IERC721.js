const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract2iz8UF = await IERC721.new({from: accounts[4]});
		const tokenIdD02YnS5 = BigInt("2018")
		const tof9wEVAn = accounts[0]
		const fromRrjUn3X = "0x0000000000000000000000000000000000000001"
		const ownertEvdvgL = accounts[3]
		const tokenIdSI7v67O = BigInt("575")
		const topjtt7VH = accounts[0]
		const fromf9H7Cyr = accounts[4]
		const tokenIdZHb8mzj = BigInt("1368")
		const operatoraEEWxO8 = accounts[3]
		const ownerG2eDCW9 = "0x0000000000000000000000000000000000000001"
		await contract2iz8UF.safeTransferFrom.call(fromRrjUn3X, tof9wEVAn, tokenIdD02YnS5, {from: "0x0000000000000000000000000000000000000001"});
		const balanceiG0jq3U = await contract2iz8UF.balanceOf.call(ownertEvdvgL, {from: accounts[3]});
		await contract2iz8UF.transferFrom.call(fromf9H7Cyr, topjtt7VH, tokenIdSI7v67O, {from: accounts[3]});
		const ownerx46CEd7 = await contract2iz8UF.ownerOf.call(tokenIdZHb8mzj, {from: accounts[0]});
		const nullTLVeb8 = await contract2iz8UF.isApprovedForAll.call(ownerG2eDCW9, operatoraEEWxO8, {from: accounts[3]});
	});
})
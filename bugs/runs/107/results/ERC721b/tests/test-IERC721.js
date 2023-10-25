const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracts2Vn5P8 = await IERC721.new({from: accounts[5]});
		const _approvedtAITSXI = false
		const operatorOZ9EsyK = accounts[3]
		const owner1CCeg4 = accounts[4]
		const tokenIdAjnUNL = BigInt("729")
		const tokenIdbX484u7 = BigInt("264")
		const toXi7rUHM = "0x0000000000000000000000000000000000000001"
		const fromz6ny4MY = accounts[2]
		await contracts2Vn5P8.setApprovalForAll.call(operatorOZ9EsyK, _approvedtAITSXI, {from: accounts[5]});
		const balanceYaeUwSx = await contracts2Vn5P8.balanceOf.call(owner1CCeg4, {from: "0x0000000000000000000000000000000000000001"});
		const ownerCIGpxe = await contracts2Vn5P8.ownerOf.call(tokenIdAjnUNL, {from: accounts[3]});
		await contracts2Vn5P8.safeTransferFrom.call(fromz6ny4MY, toXi7rUHM, tokenIdbX484u7, {from: accounts[3]});
	});
})
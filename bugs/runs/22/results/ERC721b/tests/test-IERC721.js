const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractZYAyKz4 = await IERC721.new({from: accounts[3]});
		const tokenIdJrx9tHj = BigInt("1565")
		const _approvedxd2ZAAu = false
		const operatorH5tH8O8 = accounts[4]
		const tokenIdAYgWB3Z = BigInt("711")
		const toqYH0mTO = accounts[0]
		const fromRGKO6T = accounts[5]
		const ownerDxm1mN = await contractZYAyKz4.ownerOf.call(tokenIdJrx9tHj, {from: accounts[1]});
		await contractZYAyKz4.setApprovalForAll.call(operatorH5tH8O8, _approvedxd2ZAAu, {from: accounts[4]});
		await contractZYAyKz4.safeTransferFrom.call(fromRGKO6T, toqYH0mTO, tokenIdAYgWB3Z, {from: accounts[5]});
	});
})
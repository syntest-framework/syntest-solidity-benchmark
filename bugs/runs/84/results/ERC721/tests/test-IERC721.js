const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractqkHbxG1 = await IERC721.new({from: accounts[2]});
		const tokenIdEdRXjlR = BigInt("476")
		const toXihwXzg = accounts[2]
		const fromIyWKLuL = "0x0000000000000000000000000000000000000001"
		const _approvedqLgVMnc = false
		const operatorQJK5vVh = accounts[1]
		const tokenIdhOPN2Zv = BigInt("1257")
		const touCr1EpC = accounts[3]
		const fromW5VgayW = accounts[1]
		await contractqkHbxG1.safeTransferFrom.call(fromIyWKLuL, toXihwXzg, tokenIdEdRXjlR, {from: accounts[0]});
		await contractqkHbxG1.setApprovalForAll.call(operatorQJK5vVh, _approvedqLgVMnc, {from: accounts[3]});
		await contractqkHbxG1.safeTransferFrom.call(fromW5VgayW, touCr1EpC, tokenIdhOPN2Zv, {from: accounts[2]});
	});
})
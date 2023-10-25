const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractHCSjSPc = await IERC721.new({from: accounts[3]});
		const tokenIdJ598hwa = BigInt("1186")
		const toa0Wy0IL = accounts[3]
		const fromU24Qewb = accounts[0]
		const datawwSYibx = "0x040d061c1f19030503030d0c09010d000a1f141f161b090d0b"
		const tokenIdDh9AhaA = BigInt("681")
		const toqTb2uJx = accounts[3]
		const fromYvSYyzG = accounts[0]
		const tokenIddimqQFN = BigInt("1163")
		const toFXmNJQz = accounts[2]
		const fromNF00zOj = accounts[2]
		const operatorDQlRQVo = accounts[2]
		const ownerp3kRck8 = accounts[5]
		const _approvedozvZMg = false
		const operatorOsb98Ep = accounts[4]
		await contractHCSjSPc.safeTransferFrom.call(fromU24Qewb, toa0Wy0IL, tokenIdJ598hwa, {from: accounts[5]});
		await contractHCSjSPc.safeTransferFrom.call(fromYvSYyzG, toqTb2uJx, tokenIdDh9AhaA, datawwSYibx, {from: "0x0000000000000000000000000000000000000001"});
		await contractHCSjSPc.safeTransferFrom.call(fromNF00zOj, toFXmNJQz, tokenIddimqQFN, {from: accounts[3]});
		const nullOV5aaG1 = await contractHCSjSPc.isApprovedForAll.call(ownerp3kRck8, operatorDQlRQVo, {from: accounts[3]});
		await contractHCSjSPc.setApprovalForAll.call(operatorOsb98Ep, _approvedozvZMg, {from: accounts[1]});
	});
})
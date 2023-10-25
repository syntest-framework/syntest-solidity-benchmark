const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractbKtb1Ti = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorScbfrLy = accounts[2]
		const ownerZ1ZHC4K = accounts[1]
		const tokenIdD7KW0Hc = BigInt("957")
		const toLJcmw0 = accounts[4]
		const fromZlCLLEo = accounts[0]
		const _approvedv5clauZ = true
		const operatorekSln0G = accounts[2]
		const _approvedqsS7PoW = false
		const operatorusMy4Jd = accounts[3]
		const nulluLKKlY9 = await contractbKtb1Ti.isApprovedForAll.call(ownerZ1ZHC4K, operatorScbfrLy, {from: accounts[2]});
		await contractbKtb1Ti.transferFrom.call(fromZlCLLEo, toLJcmw0, tokenIdD7KW0Hc, {from: accounts[3]});
		await contractbKtb1Ti.setApprovalForAll.call(operatorekSln0G, _approvedv5clauZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractbKtb1Ti.setApprovalForAll.call(operatorusMy4Jd, _approvedqsS7PoW, {from: accounts[2]});
	});
})
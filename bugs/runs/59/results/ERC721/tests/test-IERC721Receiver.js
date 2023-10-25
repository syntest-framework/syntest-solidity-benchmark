const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractcJyaOfr = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataU857SXr = "0x06110f1a040c070b10020e1a0703000409081b070d120c1709070509"
		const tokenIdlUnUXmc = BigInt("818")
		const fromnzGFeee = accounts[1]
		const operatorC5L6D25 = accounts[1]
		const dataG1oDDit = "0x1607020a1b130e06070d070603080d11041d0815040c0803031d1a0d0c011c"
		const tokenIdGZ8Qylm = BigInt("487")
		const fromubPCc9x = accounts[2]
		const operatoraTHvedW = accounts[4]
		const null5xjCoq = await contractcJyaOfr.onERC721Received.call(operatorC5L6D25, fromnzGFeee, tokenIdlUnUXmc, dataU857SXr, {from: accounts[2]});
		const nullT4ME1dG = await contractcJyaOfr.onERC721Received.call(operatoraTHvedW, fromubPCc9x, tokenIdGZ8Qylm, dataG1oDDit, {from: accounts[0]});
	});
})
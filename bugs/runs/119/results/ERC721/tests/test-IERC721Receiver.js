const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractY7Sb1a0 = await IERC721Receiver.new({from: accounts[3]});
		const datakdIRgev = "0x141b0c191915091d1e031d0d0e181417100f0d1304061e101f1f1f1f03"
		const tokenIde2OQcVo = BigInt("65")
		const fromIE4h6hs = "0x0000000000000000000000000000000000000001"
		const operatorIc2MYo = accounts[3]
		const datalcJC1S = "0x130d1507050b040c18131c02081f110e1412151c010f151b08021d17"
		const tokenIdtDDBs4B = BigInt("70")
		const fromTVRp7UX = accounts[3]
		const operatore04vSJg = accounts[0]
		const datapd6Plff = "0x1d08"
		const tokenIdsPPThYm = BigInt("672")
		const fromhsolBcU = accounts[3]
		const operatorFIoxHrT = accounts[0]
		const nullqnigSVk = await contractY7Sb1a0.onERC721Received.call(operatorIc2MYo, fromIE4h6hs, tokenIde2OQcVo, datakdIRgev, {from: accounts[2]});
		const nullEJ8j1Eu = await contractY7Sb1a0.onERC721Received.call(operatore04vSJg, fromTVRp7UX, tokenIdtDDBs4B, datalcJC1S, {from: accounts[3]});
		const null7xI6hA = await contractY7Sb1a0.onERC721Received.call(operatorFIoxHrT, fromhsolBcU, tokenIdsPPThYm, datapd6Plff, {from: accounts[3]});
	});
})
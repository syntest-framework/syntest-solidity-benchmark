const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractvk0Nuqm = await IERC721Receiver.new({from: accounts[0]});
		const dataICp5H20 = "0x031a1d131a190616080b20010a0c"
		const tokenIdP8qBjPT = BigInt("1629")
		const fromy6qBxGN = accounts[1]
		const operator8wccu4 = accounts[3]
		const datajORyIWi = "0x1c110e0518041b0f"
		const tokenIdyAP3WA = BigInt("70")
		const fromC2NfSAA = accounts[4]
		const operatoroAEkoEI = accounts[4]
		const nulln5voowq = await contractvk0Nuqm.onERC721Received.call(operator8wccu4, fromy6qBxGN, tokenIdP8qBjPT, dataICp5H20, {from: accounts[3]});
		const nullV3Vd0P8 = await contractvk0Nuqm.onERC721Received.call(operatoroAEkoEI, fromC2NfSAA, tokenIdyAP3WA, datajORyIWi, {from: accounts[2]});
	});
})
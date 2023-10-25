const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractbbaY4S4 = await IERC721Receiver.new({from: accounts[3]});
		const datanyyBaP2 = "0x030f"
		const tokenIdCzvfhaZ = BigInt("624")
		const fromVVEVSo = accounts[2]
		const operatorF5k2lZr = accounts[1]
		const dataOCRlpQR = "0x121f14060d1f1d0a021f0b05170804050d1402"
		const tokenIdx8DGnx = BigInt("1968")
		const fromhVjsQz9 = accounts[1]
		const operatorMcDqBH = accounts[1]
		const dataNyPeeDT = "0x0a15130b1f0d161d"
		const tokenIdb2PnRp = BigInt("583")
		const fromOx8Jcbj = accounts[1]
		const operatort2JwABe = accounts[2]
		const dataCUeMGPF = "0x0e"
		const tokenIdPIOM58 = BigInt("1531")
		const fromCWvewer = accounts[5]
		const operatorGY3D8T5 = accounts[0]
		const nullgIPKMp = await contractbbaY4S4.onERC721Received.call(operatorF5k2lZr, fromVVEVSo, tokenIdCzvfhaZ, datanyyBaP2, {from: accounts[4]});
		const nullLYJp5lg = await contractbbaY4S4.onERC721Received.call(operatorMcDqBH, fromhVjsQz9, tokenIdx8DGnx, dataOCRlpQR, {from: "0x0000000000000000000000000000000000000001"});
		const nullalxWfg4 = await contractbbaY4S4.onERC721Received.call(operatort2JwABe, fromOx8Jcbj, tokenIdb2PnRp, dataNyPeeDT, {from: accounts[4]});
		const nullYB4iCmM = await contractbbaY4S4.onERC721Received.call(operatorGY3D8T5, fromCWvewer, tokenIdPIOM58, dataCUeMGPF, {from: accounts[4]});
	});
})
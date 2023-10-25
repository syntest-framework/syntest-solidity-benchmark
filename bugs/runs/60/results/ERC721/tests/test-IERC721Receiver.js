const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractcuVt1gB = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataOLODps0 = "0x161e051d041d0b060c070a100c0201191f161a1511060d0c0807021407"
		const tokenIdXjsrnQh = BigInt("286")
		const fromhgDHDXr = accounts[3]
		const operatorMfROcHQ = accounts[2]
		const datag0mJqC8 = "0x04070e0b071b1802071614060c191d141c0514010b0b1415041d1701161f111e"
		const tokenIdHLCwQT = BigInt("1355")
		const fromQ3bijVS = accounts[0]
		const operatorpWulFD2 = "0x0000000000000000000000000000000000000001"
		const data8hob93 = "0x0609131f001407041f13"
		const tokenIdarnKQcK = BigInt("641")
		const fromzE3ZzYy = accounts[3]
		const operatorUXd42QC = "0x0000000000000000000000000000000000000001"
		const nullvqWkkNb = await contractcuVt1gB.onERC721Received.call(operatorMfROcHQ, fromhgDHDXr, tokenIdXjsrnQh, dataOLODps0, {from: accounts[0]});
		const nullSSphp9g = await contractcuVt1gB.onERC721Received.call(operatorpWulFD2, fromQ3bijVS, tokenIdHLCwQT, datag0mJqC8, {from: accounts[4]});
		const nulltfJSLAa = await contractcuVt1gB.onERC721Received.call(operatorUXd42QC, fromzE3ZzYy, tokenIdarnKQcK, data8hob93, {from: accounts[2]});
	});
})
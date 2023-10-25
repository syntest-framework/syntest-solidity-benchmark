const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractjOlz1qn = await IERC721Receiver.new({from: accounts[4]});
		const datazqsbox = "0x1d0d030909"
		const tokenIdNo7ByXI = BigInt("485")
		const fromlAJsEFu = accounts[4]
		const operatorWRsR5J5 = accounts[0]
		const dataD2k9HSX = "0x121a000704021b1a1718081a0619"
		const tokenIdmclqWJC = BigInt("2035")
		const fromBQjz3Om = accounts[0]
		const operatorB0zqFDw = accounts[1]
		const dataRpPUcLI = "0x190f021703151903020e0e16150e010d08011d01150a0c1d1b1f0d16031f1e"
		const tokenIdX0miAfF = BigInt("973")
		const fromarLknbH = accounts[4]
		const operatorMeSqTm = accounts[4]
		const nullmDtCOou = await contractjOlz1qn.onERC721Received.call(operatorWRsR5J5, fromlAJsEFu, tokenIdNo7ByXI, datazqsbox, {from: accounts[0]});
		const nullOCu4VmN = await contractjOlz1qn.onERC721Received.call(operatorB0zqFDw, fromBQjz3Om, tokenIdmclqWJC, dataD2k9HSX, {from: accounts[4]});
		const nullrPbhTJ2 = await contractjOlz1qn.onERC721Received.call(operatorMeSqTm, fromarLknbH, tokenIdX0miAfF, dataRpPUcLI, {from: accounts[5]});
	});
})
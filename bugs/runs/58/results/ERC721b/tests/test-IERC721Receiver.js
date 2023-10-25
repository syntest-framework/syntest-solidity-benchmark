const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractuUIlNHc = await IERC721Receiver.new({from: accounts[4]});
		const datavQ5Z5V = "0x1d05181508070119121f17021b081116071316010d01081502"
		const tokenIdgg1DHMb = BigInt("248")
		const fromvPSqJg = accounts[4]
		const operatoraaoLJhQ = accounts[5]
		const dataoPkJVeR = "0x081f020411"
		const tokenIdntS0fbd = BigInt("2023")
		const from3ALfC9 = accounts[3]
		const operatorVKgpqTn = accounts[3]
		const dataSvsfHZ = "0x080818080718131f101302160a2019041d0c050d140b0602011912021d0805"
		const tokenIdno4olJM = BigInt("333")
		const fromMrzMSPw = accounts[3]
		const operatornJlJO0G = accounts[2]
		const dataYf288J = "0x10100f1f0910121816021b0a1611"
		const tokenIdAAWQU8H = BigInt("129")
		const fromc63LecV = accounts[5]
		const operatornwjzpI = accounts[1]
		const nullOKc0KCs = await contractuUIlNHc.onERC721Received.call(operatoraaoLJhQ, fromvPSqJg, tokenIdgg1DHMb, datavQ5Z5V, {from: accounts[0]});
		const nulleydslzK = await contractuUIlNHc.onERC721Received.call(operatorVKgpqTn, from3ALfC9, tokenIdntS0fbd, dataoPkJVeR, {from: accounts[4]});
		const nullYO2AXin = await contractuUIlNHc.onERC721Received.call(operatornJlJO0G, fromMrzMSPw, tokenIdno4olJM, dataSvsfHZ, {from: accounts[4]});
		const null852paP = await contractuUIlNHc.onERC721Received.call(operatornwjzpI, fromc63LecV, tokenIdAAWQU8H, dataYf288J, {from: accounts[2]});
	});
})
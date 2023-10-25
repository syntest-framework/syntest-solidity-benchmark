const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractChB6eH3 = await IERC721Receiver.new({from: accounts[0]});
		const dataU8bGrV3 = "0x1f070b1001191d1b070f041a180309020617100e"
		const tokenIdOSh7h2b = BigInt("1740")
		const fromM0B8HXb = accounts[0]
		const operatorDMtxuq2 = accounts[0]
		const dataxE8IOhG = "0x1103101710031c111604"
		const tokenIdPm0dXn7 = BigInt("372")
		const fromkGrMd3v = accounts[1]
		const operatorhAND9H2 = accounts[1]
		const datanul9clM = "0x0e0e0e071602120f1c0b031c1118021b0c0e1b0e0e1a06"
		const tokenIdkhFBHqN = BigInt("1496")
		const fromVwpuH7i = accounts[0]
		const operatorohwmpDp = accounts[3]
		const nullcXehaP = await contractChB6eH3.onERC721Received.call(operatorDMtxuq2, fromM0B8HXb, tokenIdOSh7h2b, dataU8bGrV3, {from: accounts[2]});
		const nullAOT25M = await contractChB6eH3.onERC721Received.call(operatorhAND9H2, fromkGrMd3v, tokenIdPm0dXn7, dataxE8IOhG, {from: accounts[3]});
		const nullCCk5jcm = await contractChB6eH3.onERC721Received.call(operatorohwmpDp, fromVwpuH7i, tokenIdkhFBHqN, datanul9clM, {from: accounts[4]});
	});
})
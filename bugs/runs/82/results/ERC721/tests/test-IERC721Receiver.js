const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractrJvzPQG = await IERC721Receiver.new({from: accounts[0]});
		const dataOqlpfsx = "0x040d0619090a0c1b1b1d"
		const tokenIdHZf5wpB = BigInt("97")
		const fromVlqZU4l = accounts[0]
		const operatorgBMzLPm = accounts[3]
		const datat7XpRG = "0x161107060d0d181316121f1f1b1e010b171d11130c"
		const tokenIdtZJ8FwQ = BigInt("833")
		const fromGuxYKTX = accounts[3]
		const operatoru5Tu8bE = accounts[3]
		const datae2S0VnO = "0x0c0607050b180a090b051a18021b0b16191e191d1a1c12"
		const tokenIdpAp83m0 = BigInt("1889")
		const fromN8vpUCp = accounts[2]
		const operatorhb177FG = accounts[1]
		const nullFaW6LG3 = await contractrJvzPQG.onERC721Received.call(operatorgBMzLPm, fromVlqZU4l, tokenIdHZf5wpB, dataOqlpfsx, {from: accounts[3]});
		const nullg1A0cRE = await contractrJvzPQG.onERC721Received.call(operatoru5Tu8bE, fromGuxYKTX, tokenIdtZJ8FwQ, datat7XpRG, {from: accounts[1]});
		const nullZ36BwpV = await contractrJvzPQG.onERC721Received.call(operatorhb177FG, fromN8vpUCp, tokenIdpAp83m0, datae2S0VnO, {from: accounts[1]});
	});
})
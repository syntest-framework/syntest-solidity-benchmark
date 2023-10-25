const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractqTSQqy = await IERC721Receiver.new({from: accounts[3]});
		const dataUahBsSw = "0x1710141e13181f190e06020b16130e161b1f060c15031b0111160a1a1202"
		const tokenIdEzh5GD0 = BigInt("577")
		const fromMiGVXQt = accounts[2]
		const operatoripNYhzI = accounts[3]
		const datahKPT2v = "0x080f0c0b1e1b08110f120a100b121b0a08040d040a09070f1f0f11"
		const tokenIdWIK0Q67 = BigInt("647")
		const froma0QfSqY = accounts[2]
		const operatorw0ZOzd6 = accounts[0]
		const nullRmtFRvL = await contractqTSQqy.onERC721Received.call(operatoripNYhzI, fromMiGVXQt, tokenIdEzh5GD0, dataUahBsSw, {from: accounts[3]});
		const nullxbaj6Ef = await contractqTSQqy.onERC721Received.call(operatorw0ZOzd6, froma0QfSqY, tokenIdWIK0Q67, datahKPT2v, {from: accounts[3]});
	});
})
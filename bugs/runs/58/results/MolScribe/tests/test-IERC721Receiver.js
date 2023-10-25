const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractBu6G1OO = await IERC721Receiver.new({from: accounts[1]});
		const dataJkS3cAQ = "0x1c011a1c150919"
		const tokenIdsEud2j = BigInt("530")
		const fromIdVUVQN = accounts[3]
		const operatorgyeIs3z = accounts[4]
		const dataAhmv9xX = "0x0e1a0c1d1503130e10111c1e1b02000705120b"
		const tokenIdXo467F = BigInt("833")
		const fromMbP2fwU = accounts[5]
		const operatorPG6ei1H = accounts[3]
		const dataGCrNzxl = "0x0a0b081f001a1e131b06190204"
		const tokenIdwQUTJCh = BigInt("185")
		const fromn4mT3Fi = accounts[3]
		const operatorCNvAFfY = accounts[1]
		const nullFOnPHtk = await contractBu6G1OO.onERC721Received.call(operatorgyeIs3z, fromIdVUVQN, tokenIdsEud2j, dataJkS3cAQ, {from: accounts[4]});
		const nullLJGjBPo = await contractBu6G1OO.onERC721Received.call(operatorPG6ei1H, fromMbP2fwU, tokenIdXo467F, dataAhmv9xX, {from: accounts[0]});
		const nullXtghYxx = await contractBu6G1OO.onERC721Received.call(operatorCNvAFfY, fromn4mT3Fi, tokenIdwQUTJCh, dataGCrNzxl, {from: accounts[1]});
	});
})
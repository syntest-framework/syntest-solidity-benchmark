const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractUqbJqyr = await IERC721Receiver.new({from: accounts[0]});
		const datad8OAXnK = "0x0e15160e081803150d"
		const tokenIdrcX2G3Y = BigInt("366")
		const froml7FoeA6 = accounts[2]
		const operatoruuMvuoI = accounts[1]
		const dataEc2wvdf = "0x1613001e01200611050e11161615130b0b160f180e0a0e191a17"
		const tokenIdwYulPOv = BigInt("850")
		const fromjM5Bo1E = accounts[1]
		const operatorD4XejsV = accounts[4]
		const data5BNbgA = "0x08040c12050a031c1f0c100016011f021b161c08190d0f0407091e0f"
		const tokenIdA0Xnhuk = BigInt("435")
		const fromWGFmx3K = accounts[1]
		const operatoriz0M56W = accounts[4]
		const dataXPPNNlm = "0x19171109170f1603040814162005130b050e190f010a041f19"
		const tokenIdOtkJSKa = BigInt("1905")
		const fromJdLLUxz = accounts[2]
		const operator90WR1M = accounts[3]
		const nullx6NIJ9A = await contractUqbJqyr.onERC721Received.call(operatoruuMvuoI, froml7FoeA6, tokenIdrcX2G3Y, datad8OAXnK, {from: accounts[1]});
		const nulldGHAo8i = await contractUqbJqyr.onERC721Received.call(operatorD4XejsV, fromjM5Bo1E, tokenIdwYulPOv, dataEc2wvdf, {from: accounts[1]});
		const nullvsPyOQi = await contractUqbJqyr.onERC721Received.call(operatoriz0M56W, fromWGFmx3K, tokenIdA0Xnhuk, data5BNbgA, {from: accounts[2]});
		const nullO5gnc06 = await contractUqbJqyr.onERC721Received.call(operator90WR1M, fromJdLLUxz, tokenIdOtkJSKa, dataXPPNNlm, {from: accounts[1]});
	});
})
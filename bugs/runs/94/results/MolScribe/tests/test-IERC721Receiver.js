const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractH3U6vOP = await IERC721Receiver.new({from: accounts[1]});
		const datalarjPv = "0x0d0d1e18031007030e0b13170c1604170a0e1811000b0317060f0f021a"
		const tokenIdV4XWMMM = BigInt("662")
		const frombXijcLJ = accounts[4]
		const operatorrqbczpb = accounts[4]
		const dataLjM9rlC = "0x0702111711051b1a0a060b170003051f0b1c1d1f1b150d0c032012"
		const tokenIduU0WGa = BigInt("122")
		const fromdbwUA6z = "0x0000000000000000000000000000000000000001"
		const operatorDlziQib = accounts[3]
		const nulloKKvAZe = await contractH3U6vOP.onERC721Received.call(operatorrqbczpb, frombXijcLJ, tokenIdV4XWMMM, datalarjPv, {from: accounts[0]});
		const nullfozrUC7 = await contractH3U6vOP.onERC721Received.call(operatorDlziQib, fromdbwUA6z, tokenIduU0WGa, dataLjM9rlC, {from: accounts[5]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractz9o3Eg = await IERC721Receiver.new({from: accounts[2]});
		const dataBu2hoff = "0x050b1404081e0d1815"
		const tokenIdpM7zj6D = BigInt("116")
		const fromNndLlzt = accounts[3]
		const operatorMt7bLAn = accounts[0]
		const dataQDlDVp = "0x020a0f0b111a"
		const tokenIdWPmdt1 = BigInt("1506")
		const fromjqx67vh = accounts[3]
		const operatorsPQybvp = accounts[2]
		const dataAoNqi4X = "0x0e10090d1c02130f11021b0b06081e1b0e071f181b1d0e150a080018081106"
		const tokenIdKVYjZKe = BigInt("1986")
		const fromtNBSXOU = accounts[2]
		const operator8wPr1Y = accounts[3]
		const datal2jOxH8 = "0x050d1d120e1417180f090d0a0c19161e12191807000c150d0a05"
		const tokenIdqhhJ4X6 = BigInt("1742")
		const fromN1FNI6A = accounts[4]
		const operatorJ6WkHvA = accounts[4]
		const dataEaJP3sc = "0x1f07000a0b081616161103"
		const tokenIdxVQfOiA = BigInt("1095")
		const fromXVXqvZs = accounts[3]
		const operatorlQg3woC = accounts[1]
		const dataTkAw0ct = "0x1505101a0817160f2007130219"
		const tokenIdMyruG2w = BigInt("599")
		const fromchSrTcu = accounts[1]
		const operatorim6gr1A = "0x0000000000000000000000000000000000000001"
		const nullpGDdWp6 = await contractz9o3Eg.onERC721Received.call(operatorMt7bLAn, fromNndLlzt, tokenIdpM7zj6D, dataBu2hoff, {from: accounts[0]});
		const nullj9BKJRg = await contractz9o3Eg.onERC721Received.call(operatorsPQybvp, fromjqx67vh, tokenIdWPmdt1, dataQDlDVp, {from: accounts[0]});
		const nulle6AyoF9 = await contractz9o3Eg.onERC721Received.call(operator8wPr1Y, fromtNBSXOU, tokenIdKVYjZKe, dataAoNqi4X, {from: accounts[4]});
		const nullQSa9q1 = await contractz9o3Eg.onERC721Received.call(operatorJ6WkHvA, fromN1FNI6A, tokenIdqhhJ4X6, datal2jOxH8, {from: accounts[1]});
		const nullx7OmX57 = await contractz9o3Eg.onERC721Received.call(operatorlQg3woC, fromXVXqvZs, tokenIdxVQfOiA, dataEaJP3sc, {from: accounts[0]});
		const nullt2nv1NQ = await contractz9o3Eg.onERC721Received.call(operatorim6gr1A, fromchSrTcu, tokenIdMyruG2w, dataTkAw0ct, {from: accounts[5]});
	});
})
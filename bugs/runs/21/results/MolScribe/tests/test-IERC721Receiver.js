const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractrMFhfd6 = await IERC721Receiver.new({from: accounts[3]});
		const datalE7U0Yp = "0x0e1d010b1505171b0f1f1e1513130d0210011303151b03"
		const tokenIdBC3fa6E = BigInt("1887")
		const fromp8Ceypx = accounts[1]
		const operatorxj8uAnR = accounts[2]
		const datawz3XOYH = "0x1e1b091b"
		const tokenIdnV5Eg6 = BigInt("1592")
		const from5QSkpi = "0x0000000000000000000000000000000000000001"
		const operatorA3lx5Zb = accounts[4]
		const dataz7iZVXr = "0x0a1f110711141e200f0f040d070b070104030c0e1a0f1408021a001a0904"
		const tokenIdOHtgm2M = BigInt("337")
		const fromTNEKuwh = accounts[5]
		const operatoryzZ0atO = accounts[3]
		const nullRtvulaC = await contractrMFhfd6.onERC721Received.call(operatorxj8uAnR, fromp8Ceypx, tokenIdBC3fa6E, datalE7U0Yp, {from: accounts[0]});
		const nulliDM7Hk6 = await contractrMFhfd6.onERC721Received.call(operatorA3lx5Zb, from5QSkpi, tokenIdnV5Eg6, datawz3XOYH, {from: accounts[1]});
		const nullBpsu7oo = await contractrMFhfd6.onERC721Received.call(operatoryzZ0atO, fromTNEKuwh, tokenIdOHtgm2M, dataz7iZVXr, {from: accounts[2]});
	});
})
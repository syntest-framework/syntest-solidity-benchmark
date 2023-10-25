const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractyEe89bD = await IERC721Receiver.new({from: accounts[4]});
		const dataOQnVH4U = "0x131c0717051d200c171a1e0511010e1d1b1e02"
		const tokenIdjTCeEtM = BigInt("717")
		const froma5aPB5N = accounts[1]
		const operatory3gwp6R = accounts[5]
		const dataylVbjZO = "0x130c071b01191a1e031b0801050c14141e110a0c19"
		const tokenIdX6uCBi = BigInt("568")
		const fromcKrSsxY = accounts[1]
		const operatorLJYpBz = "0x0000000000000000000000000000000000000001"
		const datagNHO21 = "0x1111070e1b101a11180a1111"
		const tokenIdFQBe5Wi = BigInt("698")
		const fromMdSZUn8 = accounts[3]
		const operatorA4ynR2 = accounts[3]
		const dataJTi9HxX = "0x0620171a"
		const tokenIdC9DQDpp = BigInt("161")
		const fromuPM6ip = accounts[1]
		const operatorOHQeQI8 = accounts[0]
		const nullXjkw5Ra = await contractyEe89bD.onERC721Received.call(operatory3gwp6R, froma5aPB5N, tokenIdjTCeEtM, dataOQnVH4U, {from: accounts[4]});
		const null55Zee7 = await contractyEe89bD.onERC721Received.call(operatorLJYpBz, fromcKrSsxY, tokenIdX6uCBi, dataylVbjZO, {from: accounts[3]});
		const nullxTPEheu = await contractyEe89bD.onERC721Received.call(operatorA4ynR2, fromMdSZUn8, tokenIdFQBe5Wi, datagNHO21, {from: accounts[3]});
		const nulla6aFHdw = await contractyEe89bD.onERC721Received.call(operatorOHQeQI8, fromuPM6ip, tokenIdC9DQDpp, dataJTi9HxX, {from: accounts[0]});
	});
})
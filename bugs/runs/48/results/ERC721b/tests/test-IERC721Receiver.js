const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractY4759yF = await IERC721Receiver.new({from: accounts[3]});
		const datag1fjvKl = "0x191e"
		const tokenIddvxmQ3 = BigInt("370")
		const fromGsAKuGL = accounts[2]
		const operatorZSraSBf = accounts[5]
		const datagPZbUYV = "0x1c09151a091705142015"
		const tokenIdvCcHJ7v = BigInt("419")
		const fromfgzIkNa = accounts[1]
		const operatorfnauMOd = accounts[4]
		const dataLlokKsv = "0x1f1c0e17061d03011d0a0e020406"
		const tokenIdTb5Li3o = BigInt("1225")
		const fromTiUFgok = accounts[0]
		const operatornYLlBRl = accounts[1]
		const datadL0Jvls = "0x0509171d1e080f1c04170411031e1d1900070d0e10010f17171c16"
		const tokenIdP8CIXeI = BigInt("1262")
		const frombCIdeIN = accounts[1]
		const operatorY5eyBI = "0x0000000000000000000000000000000000000001"
		const nullEripg6J = await contractY4759yF.onERC721Received.call(operatorZSraSBf, fromGsAKuGL, tokenIddvxmQ3, datag1fjvKl, {from: accounts[0]});
		const nullmL6c9bJ = await contractY4759yF.onERC721Received.call(operatorfnauMOd, fromfgzIkNa, tokenIdvCcHJ7v, datagPZbUYV, {from: accounts[4]});
		const nullaGjaMha = await contractY4759yF.onERC721Received.call(operatornYLlBRl, fromTiUFgok, tokenIdTb5Li3o, dataLlokKsv, {from: accounts[5]});
		const nullsrXGAfJ = await contractY4759yF.onERC721Received.call(operatorY5eyBI, frombCIdeIN, tokenIdP8CIXeI, datadL0Jvls, {from: accounts[2]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractg1pPCX = await IERC721Receiver.new({from: accounts[4]});
		const datakBtcQ0j = "0x1c141e13011d0f1118"
		const tokenIdXB5nooW = BigInt("1108")
		const fromQawmWvL = accounts[4]
		const operatorImqodCc = accounts[0]
		const dataNudfhsc = "0x1f030410151703140b0e1a1e191e0b0d0a050610151308040d"
		const tokenIdE8EWmaE = BigInt("918")
		const fromlnvJ0gh = accounts[2]
		const operatorlNOMVdT = accounts[3]
		const dataKByK7O7 = "0x0b12151f0804200c08051e1315191d"
		const tokenIdo4S0Axl = BigInt("448")
		const fromi042pUu = accounts[4]
		const operatorpvLwR2Y = accounts[3]
		const dataE7J61X = "0x160b12080d14180d15130d1d08010e160a161e0a1b0e0605020114"
		const tokenIdKcjXfdm = BigInt("881")
		const fromPKZzH5O = accounts[2]
		const operatork5PX9Sj = accounts[1]
		const datablh4kOU = "0x04011e1a100812031c061f201e090b031015"
		const tokenIdmRIvWvc = BigInt("1294")
		const fromne4luFi = accounts[3]
		const operatorPL1Kc4A = accounts[3]
		const nullmJ9cHa0 = await contractg1pPCX.onERC721Received.call(operatorImqodCc, fromQawmWvL, tokenIdXB5nooW, datakBtcQ0j, {from: accounts[1]});
		const nullvQmCxYP = await contractg1pPCX.onERC721Received.call(operatorlNOMVdT, fromlnvJ0gh, tokenIdE8EWmaE, dataNudfhsc, {from: accounts[3]});
		const nullffsCIJ = await contractg1pPCX.onERC721Received.call(operatorpvLwR2Y, fromi042pUu, tokenIdo4S0Axl, dataKByK7O7, {from: accounts[0]});
		const nullKXEzmvf = await contractg1pPCX.onERC721Received.call(operatork5PX9Sj, fromPKZzH5O, tokenIdKcjXfdm, dataE7J61X, {from: accounts[4]});
		const null1CMWiX = await contractg1pPCX.onERC721Received.call(operatorPL1Kc4A, fromne4luFi, tokenIdmRIvWvc, datablh4kOU, {from: accounts[3]});
	});
})
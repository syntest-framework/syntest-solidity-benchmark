const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractYVBToj = await IERC721Receiver.new({from: accounts[2]});
		const dataMdx06Qk = "0x1a150613181e011e071d181b011d1e1c13011b09201b0b12020405"
		const tokenIdnZkVnVJ = BigInt("1575")
		const frompkvwNC2 = accounts[0]
		const operatorx2aI1l = accounts[3]
		const dataVxjk9MG = "0x121a0e101c0e0f06111d1c181204180109120210071c0a1b0c141d0617"
		const tokenIdvOEWPDi = BigInt("16")
		const fromvT9LNp2 = accounts[1]
		const operatorhY04kHT = "0x0000000000000000000000000000000000000001"
		const dataFv16e3f = "0x0607100d1d1d191a06081113101f050e12091a0219101c14181b150b"
		const tokenIdzjUF5pf = BigInt("883")
		const fromOclVF5D = accounts[3]
		const operatorAclNiRf = accounts[3]
		const dataG3NoTci = "0x0c181107011f1f17171806"
		const tokenIdr23q4yI = BigInt("495")
		const fromQnU3lbD = accounts[3]
		const operatorEV5wBI8 = accounts[0]
		const nullNpZDwMG = await contractYVBToj.onERC721Received.call(operatorx2aI1l, frompkvwNC2, tokenIdnZkVnVJ, dataMdx06Qk, {from: accounts[4]});
		const nullwNKjQZX = await contractYVBToj.onERC721Received.call(operatorhY04kHT, fromvT9LNp2, tokenIdvOEWPDi, dataVxjk9MG, {from: accounts[4]});
		const nullfWerBt0 = await contractYVBToj.onERC721Received.call(operatorAclNiRf, fromOclVF5D, tokenIdzjUF5pf, dataFv16e3f, {from: accounts[5]});
		const nullbOHPWAz = await contractYVBToj.onERC721Received.call(operatorEV5wBI8, fromQnU3lbD, tokenIdr23q4yI, dataG3NoTci, {from: accounts[4]});
	});
})
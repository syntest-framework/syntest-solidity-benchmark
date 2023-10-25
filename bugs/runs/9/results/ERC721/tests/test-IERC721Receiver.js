const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractvO38Hyp = await IERC721Receiver.new({from: accounts[4]});
		const datao7J7PPo = "0x1904191e0a051c"
		const tokenIdLjQhxOK = BigInt("770")
		const fromk126Gmk = accounts[4]
		const operatorpAlVm4S = accounts[2]
		const dataXNtDnlk = "0x0d040a041920061b0a0e02180707081a201c1e050d0015011119170006"
		const tokenIdwiO2bSA = BigInt("1474")
		const fromFWkCNtN = accounts[3]
		const operatoroNbrWXA = accounts[2]
		const dataTglW4jk = "0x13041b1d0a1e0a1a191a1719000c131f1417101e0f1d"
		const tokenIdgFMJRSb = BigInt("184")
		const fromiBM7uxu = accounts[3]
		const operatorW4G0ItR = accounts[1]
		const datap2egprM = "0x0d110b1d151c1d1c02160f1e17010e02"
		const tokenIdnhlzyIa = BigInt("1157")
		const fromSzwkJwR = accounts[4]
		const operatorwvoShC = accounts[0]
		const datar1O7hX = "0x1f0b150f"
		const tokenIdq6Slb2b = BigInt("1656")
		const fromd7IjwFY = accounts[2]
		const operatorFsBnWci = accounts[3]
		const nullg5FYcnK = await contractvO38Hyp.onERC721Received.call(operatorpAlVm4S, fromk126Gmk, tokenIdLjQhxOK, datao7J7PPo, {from: accounts[3]});
		const nullLV06I1 = await contractvO38Hyp.onERC721Received.call(operatoroNbrWXA, fromFWkCNtN, tokenIdwiO2bSA, dataXNtDnlk, {from: accounts[5]});
		const nullSTMYQIA = await contractvO38Hyp.onERC721Received.call(operatorW4G0ItR, fromiBM7uxu, tokenIdgFMJRSb, dataTglW4jk, {from: accounts[1]});
		const nullILNjrlH = await contractvO38Hyp.onERC721Received.call(operatorwvoShC, fromSzwkJwR, tokenIdnhlzyIa, datap2egprM, {from: accounts[2]});
		const nullOHsBJHX = await contractvO38Hyp.onERC721Received.call(operatorFsBnWci, fromd7IjwFY, tokenIdq6Slb2b, datar1O7hX, {from: accounts[3]});
	});
})
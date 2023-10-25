const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contracttmsbYbE = await IERC721Receiver.new({from: accounts[2]});
		const dataEmtjJjV = "0x1113090d16050804191a0d1a181d030b160c07150010190c1b07141302"
		const tokenIdyBagg0W = BigInt("474")
		const fromR9BNzxi = accounts[3]
		const operatoriARBvot = accounts[3]
		const dataZj6hRFp = "0x030c0012141f010b"
		const tokenIdLj28uKZ = BigInt("626")
		const fromdiWmdZ = accounts[0]
		const operatorknVpZJ = accounts[1]
		const dataf8q0QGY = "0x1c120106161b140d101a0e"
		const tokenIdPh72jTP = BigInt("1164")
		const fromqqIFA49 = accounts[3]
		const operatorL2Q19xU = accounts[3]
		const datapoUFRbH = "0x0211141b0d171f060d2020"
		const tokenIdUiwxxAC = BigInt("1903")
		const fromp6J7CsO = accounts[2]
		const operatorbRs2Uos = accounts[4]
		const dataB9ie29h = "0x181d0e08140b0f001518030b050a"
		const tokenIdgG6eL5j = BigInt("1318")
		const fromUTTKk5r = accounts[1]
		const operatorguMnib8 = "0x0000000000000000000000000000000000000001"
		const datazIp0WL = "0x0a1d"
		const tokenIdFYPmJTm = BigInt("1656")
		const fromFRqTSyr = accounts[0]
		const operatorLU1rFJ = accounts[3]
		const nullmgiHwY = await contracttmsbYbE.onERC721Received.call(operatoriARBvot, fromR9BNzxi, tokenIdyBagg0W, dataEmtjJjV, {from: accounts[1]});
		const nulluq0znwP = await contracttmsbYbE.onERC721Received.call(operatorknVpZJ, fromdiWmdZ, tokenIdLj28uKZ, dataZj6hRFp, {from: accounts[3]});
		const nullDfKmfPW = await contracttmsbYbE.onERC721Received.call(operatorL2Q19xU, fromqqIFA49, tokenIdPh72jTP, dataf8q0QGY, {from: accounts[1]});
		const nullt2pdhZM = await contracttmsbYbE.onERC721Received.call(operatorbRs2Uos, fromp6J7CsO, tokenIdUiwxxAC, datapoUFRbH, {from: "0x0000000000000000000000000000000000000001"});
		const nullB2ztR0Z = await contracttmsbYbE.onERC721Received.call(operatorguMnib8, fromUTTKk5r, tokenIdgG6eL5j, dataB9ie29h, {from: accounts[4]});
		const nulliVreeFf = await contracttmsbYbE.onERC721Received.call(operatorLU1rFJ, fromFRqTSyr, tokenIdFYPmJTm, datazIp0WL, {from: accounts[4]});
	});
})
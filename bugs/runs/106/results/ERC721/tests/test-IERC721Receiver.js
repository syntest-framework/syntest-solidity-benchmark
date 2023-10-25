const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractxyqWOC = await IERC721Receiver.new({from: accounts[2]});
		const datag4Lex39 = "0x01170d0b191c191d03100c05181f1109191d110a101e051e0609040c11"
		const tokenIdVEmTqQD = BigInt("959")
		const fromUQCKijl = accounts[0]
		const operatorCVrTPYD = accounts[1]
		const datanseqZ0 = "0x040c11"
		const tokenIdOThY5e = BigInt("1214")
		const fromxXGQ1oU = accounts[4]
		const operatorCIlsIkR = accounts[3]
		const dataHH5KhkQ = "0x1703060f1516101d081b0108000600120c1a0a0a201f0e03060708"
		const tokenIdIwhoN4 = BigInt("1680")
		const fromAFoMgyn = accounts[3]
		const operatorEaEdpYX = accounts[4]
		const datanslPgiW = "0x11160b1408091d06100e0c031b0f081d051805011500"
		const tokenIdkDqUOH1 = BigInt("430")
		const fromXFqRJvx = accounts[3]
		const operatorfv5Vx4s = accounts[2]
		const dataLPK40vp = "0x15"
		const tokenIdIa2ELut = BigInt("286")
		const fromITYLepU = accounts[4]
		const operatorQUwFoFY = "0x0000000000000000000000000000000000000001"
		const dataesa28K = "0x181c"
		const tokenIdyJzBaBp = BigInt("260")
		const fromjK4dilD = accounts[2]
		const operatorbZX8F6y = accounts[2]
		const nullXu3PMR = await contractxyqWOC.onERC721Received.call(operatorCVrTPYD, fromUQCKijl, tokenIdVEmTqQD, datag4Lex39, {from: accounts[4]});
		const null8RbLUt = await contractxyqWOC.onERC721Received.call(operatorCIlsIkR, fromxXGQ1oU, tokenIdOThY5e, datanseqZ0, {from: accounts[2]});
		const nulliCsNVem = await contractxyqWOC.onERC721Received.call(operatorEaEdpYX, fromAFoMgyn, tokenIdIwhoN4, dataHH5KhkQ, {from: accounts[0]});
		const nulloUYNIWG = await contractxyqWOC.onERC721Received.call(operatorfv5Vx4s, fromXFqRJvx, tokenIdkDqUOH1, datanslPgiW, {from: accounts[4]});
		const nullWHterfL = await contractxyqWOC.onERC721Received.call(operatorQUwFoFY, fromITYLepU, tokenIdIa2ELut, dataLPK40vp, {from: accounts[4]});
		const nullelHnPLk = await contractxyqWOC.onERC721Received.call(operatorbZX8F6y, fromjK4dilD, tokenIdyJzBaBp, dataesa28K, {from: "0x0000000000000000000000000000000000000001"});
	});
})
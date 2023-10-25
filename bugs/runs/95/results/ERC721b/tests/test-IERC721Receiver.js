const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractcwon1TR = await IERC721Receiver.new({from: accounts[2]});
		const dataveeru7u = "0x0415190b1105"
		const tokenIdcyqxJ7o = BigInt("1915")
		const fromI3DnJ9Z = accounts[0]
		const operatorfFjwZgh = accounts[3]
		const dataEdXbgZ1 = "0x0a17051212031c1e1d0702180905141105011008"
		const tokenIdmgAnZM5 = BigInt("665")
		const fromuvlEYbi = accounts[1]
		const operatoruYloXcS = accounts[4]
		const dataR4w9HC8 = "0x140020160e081d0a1815200f11101c06140c1b1312010111"
		const tokenIdshDOrK8 = BigInt("370")
		const fromF5XStaj = accounts[3]
		const operatorPUmiJoi = accounts[0]
		const dataBlsHWjb = "0x0e1011110705070a0500031a011d11161f0b131c0c1305171500010b1b"
		const tokenIdQfVuRjs = BigInt("400")
		const fromodW3Q43 = "0x0000000000000000000000000000000000000001"
		const operatorkeMtCFD = accounts[3]
		const nullvmp55O = await contractcwon1TR.onERC721Received.call(operatorfFjwZgh, fromI3DnJ9Z, tokenIdcyqxJ7o, dataveeru7u, {from: accounts[4]});
		const nulljYkP3V = await contractcwon1TR.onERC721Received.call(operatoruYloXcS, fromuvlEYbi, tokenIdmgAnZM5, dataEdXbgZ1, {from: accounts[4]});
		const nullUaOg6Nv = await contractcwon1TR.onERC721Received.call(operatorPUmiJoi, fromF5XStaj, tokenIdshDOrK8, dataR4w9HC8, {from: accounts[2]});
		const nullMyRLDMs = await contractcwon1TR.onERC721Received.call(operatorkeMtCFD, fromodW3Q43, tokenIdQfVuRjs, dataBlsHWjb, {from: accounts[3]});
	});
})
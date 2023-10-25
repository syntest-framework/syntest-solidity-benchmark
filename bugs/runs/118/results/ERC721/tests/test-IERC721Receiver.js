const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract1snWNs = await IERC721Receiver.new({from: accounts[2]});
		const dataB5G3tf8 = "0x021d09110101000c070e0e02170e0d0f010914120411140b12190d0a130300"
		const tokenIdBq3WR0G = BigInt("70")
		const from1bfTMi = accounts[3]
		const operatorDLFpRbb = accounts[0]
		const dataKG3ESxn = "0x131f120204"
		const tokenIdQagEk7f = BigInt("1298")
		const fromKNMjYbb = accounts[3]
		const operatorJVCtMRj = accounts[2]
		const datargJZvV0 = "0x1e01170719011f0b151f041f0a05011f13"
		const tokenIdPZtlpzt = BigInt("1075")
		const fromxUsGtn8 = accounts[4]
		const operatorPpFGs9l = accounts[3]
		const datamwWh4Fo = "0x1917120708170a041f080f0b121f160c1c020d061503"
		const tokenIdp9H1Ipc = BigInt("702")
		const fromJqajUs1 = accounts[3]
		const operatorxdtFVY8 = accounts[0]
		const dataOaATvk = "0x1d06090c1c200b010f161f1f0918080c06071919"
		const tokenIdxtYfRP = BigInt("1879")
		const fromNvsMquH = accounts[0]
		const operatorZBQsEQa = accounts[1]
		const nullFKsbyI = await contract1snWNs.onERC721Received.call(operatorDLFpRbb, from1bfTMi, tokenIdBq3WR0G, dataB5G3tf8, {from: accounts[4]});
		const nullua8BJGc = await contract1snWNs.onERC721Received.call(operatorJVCtMRj, fromKNMjYbb, tokenIdQagEk7f, dataKG3ESxn, {from: accounts[0]});
		const nullg7bmPuG = await contract1snWNs.onERC721Received.call(operatorPpFGs9l, fromxUsGtn8, tokenIdPZtlpzt, datargJZvV0, {from: accounts[4]});
		const nullIDGkeue = await contract1snWNs.onERC721Received.call(operatorxdtFVY8, fromJqajUs1, tokenIdp9H1Ipc, datamwWh4Fo, {from: accounts[0]});
		const nullcWnpZmr = await contract1snWNs.onERC721Received.call(operatorZBQsEQa, fromNvsMquH, tokenIdxtYfRP, dataOaATvk, {from: accounts[2]});
	});
})
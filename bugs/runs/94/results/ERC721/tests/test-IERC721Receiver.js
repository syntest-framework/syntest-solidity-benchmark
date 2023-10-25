const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractOYiOgq = await IERC721Receiver.new({from: accounts[4]});
		const dataCRDXb56 = "0x1d1d18091119"
		const tokenIdQp03eUl = BigInt("1064")
		const fromyANj519 = accounts[0]
		const operatorDutsHb8 = "0x0000000000000000000000000000000000000001"
		const dataAIqcXZ = "0x0c111a071d061b0c05130a00101d07111b0407020c140a13091b"
		const tokenIdRr6zXPV = BigInt("1023")
		const fromxH1mAv2 = accounts[2]
		const operatorEAwKJF1 = "0x0000000000000000000000000000000000000001"
		const dataFuUM2ST = "0x120e0b1b1310201e020e03"
		const tokenIdN4ogf64 = BigInt("674")
		const fromc2J07Jq = accounts[3]
		const operatorlekp5g = "0x0000000000000000000000000000000000000001"
		const databFodEW = "0x1017090a04090c1101071508051715080c07120318000203"
		const tokenIdJfNJs7q = BigInt("1705")
		const fromHR0x5Sv = accounts[2]
		const operatorhR8safm = accounts[2]
		const datao3lfkBS = "0x091b0a0c170b0f09040f08160115101c060f0603"
		const tokenIdXRPBSCG = BigInt("1478")
		const fromlf24Lf9 = accounts[4]
		const operatormQu2edv = accounts[4]
		const nullyDXmENN = await contractOYiOgq.onERC721Received.call(operatorDutsHb8, fromyANj519, tokenIdQp03eUl, dataCRDXb56, {from: accounts[2]});
		const nullZEuz4w4 = await contractOYiOgq.onERC721Received.call(operatorEAwKJF1, fromxH1mAv2, tokenIdRr6zXPV, dataAIqcXZ, {from: accounts[3]});
		const nullmceqID0 = await contractOYiOgq.onERC721Received.call(operatorlekp5g, fromc2J07Jq, tokenIdN4ogf64, dataFuUM2ST, {from: accounts[1]});
		const nullZbKADbR = await contractOYiOgq.onERC721Received.call(operatorhR8safm, fromHR0x5Sv, tokenIdJfNJs7q, databFodEW, {from: accounts[0]});
		const nullpuBovCb = await contractOYiOgq.onERC721Received.call(operatormQu2edv, fromlf24Lf9, tokenIdXRPBSCG, datao3lfkBS, {from: "0x0000000000000000000000000000000000000001"});
	});
})
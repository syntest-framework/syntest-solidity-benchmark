const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractGf5d6Dn = await IERC721Receiver.new({from: accounts[4]});
		const data1juSon = "0x20101301020a0f0b0a111c0f0508100e09190e161b0c"
		const tokenIdIDIM9qE = BigInt("1236")
		const fromuBcwfND = accounts[5]
		const operatorP6gAJXp = accounts[2]
		const dataEti3yW4 = "0x140a07031210010d0a18011a1413071e110e170b1a16160315"
		const tokenIdEFTqIIv = BigInt("62")
		const fromGWKh3RY = accounts[4]
		const operatormHf6lhW = accounts[1]
		const datarIUdv25 = "0x0712041119060c1a011b091d030e0b0318131e051a14011a08"
		const tokenId0xiRTT = BigInt("1529")
		const fromxQZOWty = accounts[2]
		const operatorpRvzUB = accounts[0]
		const dataYAddyO = "0x0b091e170e08051307021c0c061b"
		const tokenIdhAUjuMp = BigInt("1893")
		const fromToNlZqK = accounts[5]
		const operatorqi8qHpO = accounts[0]
		const nullZ1UFcTk = await contractGf5d6Dn.onERC721Received.call(operatorP6gAJXp, fromuBcwfND, tokenIdIDIM9qE, data1juSon, {from: accounts[4]});
		const null33V25b = await contractGf5d6Dn.onERC721Received.call(operatormHf6lhW, fromGWKh3RY, tokenIdEFTqIIv, dataEti3yW4, {from: "0x0000000000000000000000000000000000000001"});
		const nullHW6jYC = await contractGf5d6Dn.onERC721Received.call(operatorpRvzUB, fromxQZOWty, tokenId0xiRTT, datarIUdv25, {from: accounts[1]});
		const nullqZhaiVd = await contractGf5d6Dn.onERC721Received.call(operatorqi8qHpO, fromToNlZqK, tokenIdhAUjuMp, dataYAddyO, {from: "0x0000000000000000000000000000000000000001"});
	});
})
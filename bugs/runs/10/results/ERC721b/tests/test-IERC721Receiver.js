const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractHalcgHU = await IERC721Receiver.new({from: accounts[0]});
		const datao68xLDR = "0x00200d0607111d"
		const tokenIdmmxpTA7 = BigInt("1984")
		const fromdnhtCPN = "0x0000000000000000000000000000000000000001"
		const operatorYBpHjcu = accounts[3]
		const dataGA1eEh7 = "0x070f141d12140a"
		const tokenIddhhnkGc = BigInt("253")
		const fromqylwiLT = accounts[0]
		const operatoraLMChC5 = accounts[2]
		const dataBUVIhee = "0x1a181e021e1204130d161a201d09"
		const tokenIdIdAPcEN = BigInt("1102")
		const fromGyrVR8 = accounts[1]
		const operatork0HEx2R = accounts[4]
		const dataCt2Tbl4 = "0x1d0a0e091c0c0d1116151c"
		const tokenIdGv1y8l = BigInt("1902")
		const fromn411Xt4 = accounts[0]
		const operatorlC44J07 = accounts[1]
		const dataxMUqFeM = "0x120d050103071f1218170e18080e130c1a171d0a0f0c0f1108"
		const tokenIdti8ujcs = BigInt("36")
		const from3sDoFp = accounts[0]
		const operatorCNBiPmI = accounts[0]
		const nullWqSzxhR = await contractHalcgHU.onERC721Received.call(operatorYBpHjcu, fromdnhtCPN, tokenIdmmxpTA7, datao68xLDR, {from: accounts[1]});
		const nulll178Ch2 = await contractHalcgHU.onERC721Received.call(operatoraLMChC5, fromqylwiLT, tokenIddhhnkGc, dataGA1eEh7, {from: accounts[5]});
		const nullFAHInU = await contractHalcgHU.onERC721Received.call(operatork0HEx2R, fromGyrVR8, tokenIdIdAPcEN, dataBUVIhee, {from: accounts[0]});
		const nullvWHLksi = await contractHalcgHU.onERC721Received.call(operatorlC44J07, fromn411Xt4, tokenIdGv1y8l, dataCt2Tbl4, {from: accounts[2]});
		const nullS3DJl7q = await contractHalcgHU.onERC721Received.call(operatorCNBiPmI, from3sDoFp, tokenIdti8ujcs, dataxMUqFeM, {from: accounts[5]});
	});
})
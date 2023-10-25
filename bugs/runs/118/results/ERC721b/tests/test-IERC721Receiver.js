const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractxWxiXDf = await IERC721Receiver.new({from: accounts[4]});
		const dataeSE1Vs2 = "0x1100020e"
		const tokenIdqOCfeDB = BigInt("489")
		const frompdKwjKl = accounts[1]
		const operatorlkWzcro = accounts[2]
		const datafbSLHgR = "0x03181b1b1f1f0d161611051c040f1b170a0612190112011c1e121d121c0317"
		const tokenIdPxz8IBL = BigInt("135")
		const fromkKNElx = accounts[3]
		const operatorpEh8qZ5 = accounts[5]
		const dataHl1iFme = "0x1c0d08061517160d0e1301061a190c00"
		const tokenIdBfGxDjF = BigInt("1809")
		const from21Kuf0 = accounts[4]
		const operatorzXdG7pT = "0x0000000000000000000000000000000000000001"
		const datakOrC6Uy = "0x1d0e0111050800171c06201303080a1715051b121c180e13"
		const tokenIdjzALDLe = BigInt("464")
		const fromJScOvSJ = accounts[2]
		const operatornm6Lh9F = accounts[0]
		const datacuzQRsk = "0x151f112004200d00091805"
		const tokenIdAz4Mu0R = BigInt("977")
		const fromKBEKmLN = accounts[0]
		const operatorxc3JVvn = accounts[2]
		const nullNk08ADm = await contractxWxiXDf.onERC721Received.call(operatorlkWzcro, frompdKwjKl, tokenIdqOCfeDB, dataeSE1Vs2, {from: accounts[0]});
		const nulllQaFyrg = await contractxWxiXDf.onERC721Received.call(operatorpEh8qZ5, fromkKNElx, tokenIdPxz8IBL, datafbSLHgR, {from: accounts[2]});
		const nullcF9z3zp = await contractxWxiXDf.onERC721Received.call(operatorzXdG7pT, from21Kuf0, tokenIdBfGxDjF, dataHl1iFme, {from: accounts[1]});
		const nullyfM7olg = await contractxWxiXDf.onERC721Received.call(operatornm6Lh9F, fromJScOvSJ, tokenIdjzALDLe, datakOrC6Uy, {from: accounts[2]});
		const nullzlyHo4n = await contractxWxiXDf.onERC721Received.call(operatorxc3JVvn, fromKBEKmLN, tokenIdAz4Mu0R, datacuzQRsk, {from: accounts[1]});
	});
})
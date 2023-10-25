const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractHyhCe8K = await IERC721Receiver.new({from: accounts[5]});
		const dataE6LxerA = "0x181506000a07031f191f091d0c11020b190e170f0511160715010114090d13"
		const tokenIdMEfyxBH = BigInt("723")
		const fromEUeoPN = accounts[4]
		const operatornJPdFV = accounts[3]
		const dataekkPzYb = "0x0d0d2016111501071e0e121e1403021d"
		const tokenIdGXH2yM = BigInt("1433")
		const fromp7RbDYv = accounts[3]
		const operatorEc9LG7V = accounts[4]
		const datafXx5ctZ = "0x1b0e1b0913161719151a0703150b"
		const tokenIdCYBfAKS = BigInt("185")
		const fromp8aS8WD = accounts[3]
		const operatorzjvY2vK = accounts[0]
		const nullwIToJTU = await contractHyhCe8K.onERC721Received.call(operatornJPdFV, fromEUeoPN, tokenIdMEfyxBH, dataE6LxerA, {from: accounts[5]});
		const nullQOf0gRH = await contractHyhCe8K.onERC721Received.call(operatorEc9LG7V, fromp7RbDYv, tokenIdGXH2yM, dataekkPzYb, {from: accounts[2]});
		const nulltp1gtH2 = await contractHyhCe8K.onERC721Received.call(operatorzjvY2vK, fromp8aS8WD, tokenIdCYBfAKS, datafXx5ctZ, {from: accounts[3]});
	});
})
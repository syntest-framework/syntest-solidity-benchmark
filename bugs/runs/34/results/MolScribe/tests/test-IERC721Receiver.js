const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractTdOKzfE = await IERC721Receiver.new({from: accounts[4]});
		const datazZ8Fpcq = "0x000e0e10141a0c1b0f111b030d151a0d17090e0212100a141a1f0b"
		const tokenIdzcbty8r = BigInt("578")
		const fromKDeICF6 = accounts[4]
		const operatorSrc7ijU = accounts[4]
		const datajfo7jKd = "0x06180411151a080511091d1f0213071d1f1301"
		const tokenIdTi4N83m = BigInt("1527")
		const fromS28ZdLc = "0x0000000000000000000000000000000000000001"
		const operators796gPU = accounts[0]
		const dataTnVloeN = "0x120e"
		const tokenIdXzPbUhi = BigInt("654")
		const fromouSnQCv = accounts[4]
		const operatorDYD5zez = "0x0000000000000000000000000000000000000001"
		const dataN5jX3hz = "0x0f040b0809051d081e1f0d0d1e0e0c1f000212170017040e01200a130f"
		const tokenIdZnEvgq3 = BigInt("1390")
		const fromCPRK9e4 = accounts[0]
		const operatoreenjdkN = accounts[3]
		const nullqz6ZKWu = await contractTdOKzfE.onERC721Received.call(operatorSrc7ijU, fromKDeICF6, tokenIdzcbty8r, datazZ8Fpcq, {from: accounts[3]});
		const nullujTO1QV = await contractTdOKzfE.onERC721Received.call(operators796gPU, fromS28ZdLc, tokenIdTi4N83m, datajfo7jKd, {from: accounts[0]});
		const nullg8nSGoB = await contractTdOKzfE.onERC721Received.call(operatorDYD5zez, fromouSnQCv, tokenIdXzPbUhi, dataTnVloeN, {from: accounts[2]});
		const nullw4hLa80 = await contractTdOKzfE.onERC721Received.call(operatoreenjdkN, fromCPRK9e4, tokenIdZnEvgq3, dataN5jX3hz, {from: accounts[4]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract90Ddb9 = await IERC721Receiver.new({from: accounts[5]});
		const dataJ91Nk39 = "0x180316071216050b0a0e191513051b1b"
		const tokenIdwKB2QEQ = BigInt("712")
		const fromikFCbsP = accounts[3]
		const operatorTilNvKv = accounts[1]
		const dataVpcXJKD = "0x081c08011112141d07091711101f"
		const tokenIdSeMt2rt = BigInt("817")
		const fromY8EAlbf = accounts[4]
		const operatorJEL7Gp7 = accounts[5]
		const dataab5zBV = "0x060a021e0f0619"
		const tokenIdDagsTyh = BigInt("1632")
		const frome8nQ9C = accounts[2]
		const operatorkxEzL2q = accounts[1]
		const datadHbmK4A = "0x0500170f130e0d111610160b"
		const tokenIdBT8LNTQ = BigInt("443")
		const fromxHum8b = accounts[4]
		const operatorqSZ01Y = accounts[3]
		const dataTlqQJRU = "0x031a05"
		const tokenIdsDtEb96 = BigInt("665")
		const fromYTZSh1Q = accounts[0]
		const operatorc8RiiVS = accounts[4]
		const nulloKqrqTP = await contract90Ddb9.onERC721Received.call(operatorTilNvKv, fromikFCbsP, tokenIdwKB2QEQ, dataJ91Nk39, {from: accounts[3]});
		const nullyBzr1xl = await contract90Ddb9.onERC721Received.call(operatorJEL7Gp7, fromY8EAlbf, tokenIdSeMt2rt, dataVpcXJKD, {from: accounts[2]});
		const nullVYdL5Ux = await contract90Ddb9.onERC721Received.call(operatorkxEzL2q, frome8nQ9C, tokenIdDagsTyh, dataab5zBV, {from: accounts[4]});
		const nullikhQAMM = await contract90Ddb9.onERC721Received.call(operatorqSZ01Y, fromxHum8b, tokenIdBT8LNTQ, datadHbmK4A, {from: accounts[3]});
		const null47ZE7W = await contract90Ddb9.onERC721Received.call(operatorc8RiiVS, fromYTZSh1Q, tokenIdsDtEb96, dataTlqQJRU, {from: accounts[1]});
	});
})
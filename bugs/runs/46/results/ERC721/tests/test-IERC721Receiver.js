const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractz2sdh9S = await IERC721Receiver.new({from: accounts[0]});
		const datazIUx6Q = "0x1b011f121c0610060b030d140713140b05010b14"
		const tokenIdA12rW2 = BigInt("300")
		const fromZ0iANcD = accounts[0]
		const operatorHYdklKx = accounts[2]
		const dataj8ULU15 = "0x090f0c0f0f"
		const tokenIdWcmJK0E = BigInt("403")
		const fromDsJ5R8h = accounts[3]
		const operatorqZePflM = accounts[4]
		const dataX6R4Td2 = "0x0f0908061c11171f080f00140f051c0a1a0d1703"
		const tokenIdg8CHeC5 = BigInt("874")
		const fromNGnhygI = accounts[3]
		const operator54u9SV = accounts[1]
		const nulltOLtMLs = await contractz2sdh9S.onERC721Received.call(operatorHYdklKx, fromZ0iANcD, tokenIdA12rW2, datazIUx6Q, {from: accounts[1]});
		const nullk8TaGmA = await contractz2sdh9S.onERC721Received.call(operatorqZePflM, fromDsJ5R8h, tokenIdWcmJK0E, dataj8ULU15, {from: accounts[4]});
		const nullrYk9va = await contractz2sdh9S.onERC721Received.call(operator54u9SV, fromNGnhygI, tokenIdg8CHeC5, dataX6R4Td2, {from: accounts[4]});
	});
})
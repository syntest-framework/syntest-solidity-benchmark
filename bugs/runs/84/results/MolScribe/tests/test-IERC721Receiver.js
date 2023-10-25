const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractJVzP9Av = await IERC721Receiver.new({from: accounts[1]});
		const dataiPeWo8Q = "0x0f0f0f07150a1e090a1d01151e0e070a141316"
		const tokenIdjzfJdO = BigInt("465")
		const fromBZFwcg = accounts[0]
		const operator5TJxXh = accounts[3]
		const dataOntRzsV = "0x17191b140714180e0606031d07150801071f1a151d"
		const tokenIdrtgdcyc = BigInt("1416")
		const fromz2r6enA = "0x0000000000000000000000000000000000000001"
		const operatorpw0qtsF = accounts[4]
		const dataiaCgDOx = "0x121104110b141010150b030d1f0c0b060f10201002051c0d020f1e0a15061a16"
		const tokenIdnLC01Ig = BigInt("1674")
		const fromeOBNqo = accounts[5]
		const operatorNhrNNQP = accounts[0]
		const dataY3fr8f = "0x1c0b0603140c070c0a131e1e070300051e1c0c1e0b04032006020c"
		const tokenIdXzuSIDd = BigInt("35")
		const fromyvrrAgR = accounts[2]
		const operatorasFnN86 = accounts[5]
		const nullhrm1r8t = await contractJVzP9Av.onERC721Received.call(operator5TJxXh, fromBZFwcg, tokenIdjzfJdO, dataiPeWo8Q, {from: accounts[1]});
		const nullFpq7Wum = await contractJVzP9Av.onERC721Received.call(operatorpw0qtsF, fromz2r6enA, tokenIdrtgdcyc, dataOntRzsV, {from: "0x0000000000000000000000000000000000000001"});
		const nullChSIS1U = await contractJVzP9Av.onERC721Received.call(operatorNhrNNQP, fromeOBNqo, tokenIdnLC01Ig, dataiaCgDOx, {from: accounts[3]});
		const nulln9SsnzA = await contractJVzP9Av.onERC721Received.call(operatorasFnN86, fromyvrrAgR, tokenIdXzuSIDd, dataY3fr8f, {from: accounts[4]});
	});
})
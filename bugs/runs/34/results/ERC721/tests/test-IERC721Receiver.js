const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractgJn012E = await IERC721Receiver.new({from: accounts[3]});
		const dataWQ1DFRD = "0x110c0e18181119140308011d18050b1b1f0e"
		const tokenIdJmVuqmB = BigInt("840")
		const fromPIdTBww = accounts[1]
		const operatorXETuRO = accounts[4]
		const dataTC8QJB4 = "0x18160e121100170d0f111820"
		const tokenIdesHyQJZ = BigInt("1255")
		const fromRle5dkO = accounts[1]
		const operatorLIjo5je = accounts[0]
		const dataowOBTYT = "0x0706141a0a0e0c09191515130c160e111c"
		const tokenIdaJOYXa2 = BigInt("1181")
		const fromGM8aaJE = "0x0000000000000000000000000000000000000001"
		const operatorUpidZm4 = accounts[1]
		const dataNYDx2OK = "0x031c1b111d1c1a1a15091c"
		const tokenIdFOj6puZ = BigInt("389")
		const fromsf4vNDt = accounts[3]
		const operatorNQ3xXsP = accounts[3]
		const dataGwLxEdy = "0x1a1b1f07020d161f0615191f0d0201"
		const tokenIde3ytzdL = BigInt("1507")
		const fromTVnTVBW = accounts[1]
		const operatoroEQmwRo = accounts[3]
		const nullMgK0NYf = await contractgJn012E.onERC721Received.call(operatorXETuRO, fromPIdTBww, tokenIdJmVuqmB, dataWQ1DFRD, {from: accounts[3]});
		const nullKrOWHah = await contractgJn012E.onERC721Received.call(operatorLIjo5je, fromRle5dkO, tokenIdesHyQJZ, dataTC8QJB4, {from: "0x0000000000000000000000000000000000000001"});
		const nullWvtAtgO = await contractgJn012E.onERC721Received.call(operatorUpidZm4, fromGM8aaJE, tokenIdaJOYXa2, dataowOBTYT, {from: accounts[0]});
		const nullEvYS2Gr = await contractgJn012E.onERC721Received.call(operatorNQ3xXsP, fromsf4vNDt, tokenIdFOj6puZ, dataNYDx2OK, {from: accounts[5]});
		const nullNhc8Ma = await contractgJn012E.onERC721Received.call(operatoroEQmwRo, fromTVnTVBW, tokenIde3ytzdL, dataGwLxEdy, {from: accounts[0]});
	});
})
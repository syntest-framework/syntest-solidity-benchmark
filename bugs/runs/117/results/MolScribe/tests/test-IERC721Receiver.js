const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractf88VZNo = await IERC721Receiver.new({from: accounts[0]});
		const datadlvkumX = "0x0912"
		const tokenIdXlY7lpV = BigInt("1436")
		const fromcr5zTET = accounts[0]
		const operatorBhjFHgp = accounts[4]
		const datamtLZqHZ = "0x041415041c110114041f1e061a0d011c120c0313141e1510091012"
		const tokenIdO1JHBsC = BigInt("1465")
		const fromfP1esPt = accounts[1]
		const operatorh9HqIT7 = accounts[3]
		const dataQF34Jp3 = "0x1d020e071b050b191c191c08130e09"
		const tokenIdZxuBTQQ = BigInt("1521")
		const from5kqDKu = accounts[4]
		const operatorT7f2bfz = accounts[0]
		const dataqRfcR1O = "0x190e0d0b0b010c1b"
		const tokenIdJUkQO3G = BigInt("605")
		const frombZeCdo4 = accounts[2]
		const operatorATjpbOn = accounts[3]
		const nullvMnmYRM = await contractf88VZNo.onERC721Received.call(operatorBhjFHgp, fromcr5zTET, tokenIdXlY7lpV, datadlvkumX, {from: accounts[3]});
		const nullJU1Cps = await contractf88VZNo.onERC721Received.call(operatorh9HqIT7, fromfP1esPt, tokenIdO1JHBsC, datamtLZqHZ, {from: "0x0000000000000000000000000000000000000001"});
		const nullvVCoi3I = await contractf88VZNo.onERC721Received.call(operatorT7f2bfz, from5kqDKu, tokenIdZxuBTQQ, dataQF34Jp3, {from: "0x0000000000000000000000000000000000000001"});
		const nullY6egGJD = await contractf88VZNo.onERC721Received.call(operatorATjpbOn, frombZeCdo4, tokenIdJUkQO3G, dataqRfcR1O, {from: accounts[1]});
	});
})
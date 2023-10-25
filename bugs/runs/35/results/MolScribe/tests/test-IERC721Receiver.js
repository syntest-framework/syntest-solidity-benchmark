const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractV1Qju43 = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataz0Sg4JT = "0x201f1d070e0b1e031007111506041a0f0c0e021c091e0d1a0705181e"
		const tokenIdvxJQusI = BigInt("797")
		const fromDDvkg8 = "0x0000000000000000000000000000000000000001"
		const operatorn5dJmA = accounts[3]
		const dataeBwW70q = "0x1d0b0b"
		const tokenIdW3CwXy1 = BigInt("1942")
		const fromVWQ1OLC = accounts[4]
		const operatoryy3u9H2 = accounts[2]
		const dataj19Egk = "0x18061517081d0d110c041e05050c1518020a011703131d0602051f0613"
		const tokenIdiJGjMU = BigInt("1039")
		const fromODU9t6u = accounts[3]
		const operatormXA7SRj = accounts[4]
		const nulleqbUmME = await contractV1Qju43.onERC721Received.call(operatorn5dJmA, fromDDvkg8, tokenIdvxJQusI, dataz0Sg4JT, {from: accounts[3]});
		const nullSbUXm8T = await contractV1Qju43.onERC721Received.call(operatoryy3u9H2, fromVWQ1OLC, tokenIdW3CwXy1, dataeBwW70q, {from: accounts[2]});
		const nulldogmvLQ = await contractV1Qju43.onERC721Received.call(operatormXA7SRj, fromODU9t6u, tokenIdiJGjMU, dataj19Egk, {from: accounts[2]});
	});
})
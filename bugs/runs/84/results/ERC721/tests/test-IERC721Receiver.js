const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractSuOHJzN = await IERC721Receiver.new({from: accounts[5]});
		const dataxuG08AI = "0x0209021e170d060c171f1d06050c0d1f140a1e18180e051f1d11020c"
		const tokenIdceGZyKk = BigInt("645")
		const fromxIqAjSZ = "0x0000000000000000000000000000000000000001"
		const operatorXrl5nzF = accounts[2]
		const dataY4ozZYG = "0x1702101a1a0e1c10"
		const tokenIdYVagys6 = BigInt("23")
		const frommCzwYRS = accounts[0]
		const operatorOYPJ6lu = "0x0000000000000000000000000000000000000001"
		const data3q0YZN = "0x1c1b0a07011219120a0e160b0d09050801171c"
		const tokenIdN30ZHJJ = BigInt("349")
		const fromykYCo2c = accounts[1]
		const operatorX8yz7PK = accounts[0]
		const datadZWUAf2 = "0x1c1f0716"
		const tokenIdMdeFte = BigInt("1788")
		const fromW8b4ONN = "0x0000000000000000000000000000000000000001"
		const operatorkwVbZcu = accounts[4]
		const nulljTFoIh6 = await contractSuOHJzN.onERC721Received.call(operatorXrl5nzF, fromxIqAjSZ, tokenIdceGZyKk, dataxuG08AI, {from: accounts[1]});
		const nullySvwWW9 = await contractSuOHJzN.onERC721Received.call(operatorOYPJ6lu, frommCzwYRS, tokenIdYVagys6, dataY4ozZYG, {from: accounts[5]});
		const nullA1CnAiw = await contractSuOHJzN.onERC721Received.call(operatorX8yz7PK, fromykYCo2c, tokenIdN30ZHJJ, data3q0YZN, {from: "0x0000000000000000000000000000000000000001"});
		const nulllEk3PlA = await contractSuOHJzN.onERC721Received.call(operatorkwVbZcu, fromW8b4ONN, tokenIdMdeFte, datadZWUAf2, {from: accounts[5]});
	});
})
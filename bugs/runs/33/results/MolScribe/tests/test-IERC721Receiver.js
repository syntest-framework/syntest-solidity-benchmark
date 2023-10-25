const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractLi8oqgL = await IERC721Receiver.new({from: accounts[4]});
		const datahE0eASY = "0x041b1905051f14070205010f0e1a041e0518"
		const tokenIdW9NpQOX = BigInt("711")
		const fromuTwqyNa = accounts[0]
		const operatorbPYnFg7 = accounts[5]
		const datafioVi61 = "0x07090112130f190118141b101b080c0d17181e"
		const tokenIdSmaP6F4 = BigInt("731")
		const fromRMHUeb = accounts[4]
		const operatoriomax6v = accounts[2]
		const datatyZ15Dw = "0x0b1e050f141801041f1a190f140109151e031f13001a0c05030f08131a030a05"
		const tokenIdkjRvkd = BigInt("2002")
		const fromrXcRyg = accounts[0]
		const operatorsUdtfTO = accounts[4]
		const nullafPlME = await contractLi8oqgL.onERC721Received.call(operatorbPYnFg7, fromuTwqyNa, tokenIdW9NpQOX, datahE0eASY, {from: "0x0000000000000000000000000000000000000001"});
		const nullQgLSVKE = await contractLi8oqgL.onERC721Received.call(operatoriomax6v, fromRMHUeb, tokenIdSmaP6F4, datafioVi61, {from: accounts[3]});
		const nullx9DkE9 = await contractLi8oqgL.onERC721Received.call(operatorsUdtfTO, fromrXcRyg, tokenIdkjRvkd, datatyZ15Dw, {from: accounts[0]});
	});
})
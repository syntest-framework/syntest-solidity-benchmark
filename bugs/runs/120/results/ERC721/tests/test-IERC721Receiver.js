const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractM06CPcQ = await IERC721Receiver.new({from: accounts[5]});
		const dataUgOiBQu = "0x0e06140c020f1b09120312191d06130820000d100e08160e001e"
		const tokenIdAjPSqZ4 = BigInt("154")
		const fromWpo6OSY = accounts[5]
		const operatorvsv2xve = accounts[2]
		const dataXZ15ZV = "0x061118181008160f000f191b121417181503"
		const tokenIdt29R94g = BigInt("952")
		const fromzkhQYQG = accounts[2]
		const operatorNXAKHxR = accounts[1]
		const dataLn87Rru = "0x190d0d100f1b1c1a1e141715181c02"
		const tokenIdmUzSFNq = BigInt("846")
		const fromEBj3BgF = accounts[4]
		const operatorHGE3Ky1 = accounts[5]
		const datad4BxfZ = "0x0c150b0c1809191b1a1f020810"
		const tokenIdrhmUPcH = BigInt("1051")
		const fromTNUcPGU = accounts[4]
		const operatorn7815YG = accounts[2]
		const nullCcsM0Ju = await contractM06CPcQ.onERC721Received.call(operatorvsv2xve, fromWpo6OSY, tokenIdAjPSqZ4, dataUgOiBQu, {from: accounts[1]});
		const nullIlU2wk = await contractM06CPcQ.onERC721Received.call(operatorNXAKHxR, fromzkhQYQG, tokenIdt29R94g, dataXZ15ZV, {from: accounts[3]});
		const nulliA0UkjW = await contractM06CPcQ.onERC721Received.call(operatorHGE3Ky1, fromEBj3BgF, tokenIdmUzSFNq, dataLn87Rru, {from: accounts[5]});
		const null8BUDuM = await contractM06CPcQ.onERC721Received.call(operatorn7815YG, fromTNUcPGU, tokenIdrhmUPcH, datad4BxfZ, {from: accounts[2]});
	});
})
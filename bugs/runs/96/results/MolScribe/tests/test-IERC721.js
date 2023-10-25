const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractMNJuWwn = await IERC721.new({from: accounts[3]});
		const tokenIdALIzdAA = BigInt("1426")
		const toa15vWyy = accounts[0]
		const dataSkjcCGB = "0x13061c01191916"
		const tokenIdvXR9QkU = BigInt("443")
		const toH1OFMc4 = accounts[0]
		const fromNNe44or = accounts[2]
		const operatorYr9Snun = accounts[2]
		const owneruZpGqKq = accounts[4]
		const tokenIdEhEXNB = BigInt("1049")
		const tov8a6QKC = accounts[0]
		const fromOpZF2cV = accounts[4]
		const tokenIdOURnLL = BigInt("1022")
		const to5VfFH5 = accounts[2]
		await contractMNJuWwn.approve.call(toa15vWyy, tokenIdALIzdAA, {from: accounts[0]});
		await contractMNJuWwn.safeTransferFrom.call(fromNNe44or, toH1OFMc4, tokenIdvXR9QkU, dataSkjcCGB, {from: accounts[3]});
		const nullfk84UjO = await contractMNJuWwn.isApprovedForAll.call(owneruZpGqKq, operatorYr9Snun, {from: accounts[1]});
		await contractMNJuWwn.safeTransferFrom.call(fromOpZF2cV, tov8a6QKC, tokenIdEhEXNB, {from: accounts[3]});
		await contractMNJuWwn.approve.call(to5VfFH5, tokenIdOURnLL, {from: accounts[3]});
	});
})
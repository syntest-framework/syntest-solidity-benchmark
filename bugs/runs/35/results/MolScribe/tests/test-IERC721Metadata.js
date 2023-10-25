const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractFPxRoHc = await IERC721Metadata.new({from: accounts[0]});
		const tokenIdhYwsWF7 = BigInt("1930")
		const tokenIdvvhTIZ = BigInt("1369")
		const nullCElNSBG = await contractFPxRoHc.tokenURI.call(tokenIdhYwsWF7, {from: accounts[5]});
		const nullRZ6ezup = await contractFPxRoHc.tokenURI.call(tokenIdvvhTIZ, {from: "0x0000000000000000000000000000000000000001"});
		const nullcMC84MV = await contractFPxRoHc.symbol.call({from: accounts[0]});
		const nulljQzyN6c = await contractFPxRoHc.symbol.call({from: accounts[2]});
	});
})
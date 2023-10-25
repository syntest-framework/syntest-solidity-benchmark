const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractlgL7Rm = await IERC721Metadata.new({from: accounts[5]});
		const tokenIdv1X2TgV = BigInt("1425")
		const tokenIdLKKSnyw = BigInt("1114")
		const nullvOsmpRN = await contractlgL7Rm.tokenURI.call(tokenIdv1X2TgV, {from: accounts[5]});
		const nullZFHL9fO = await contractlgL7Rm.symbol.call({from: accounts[4]});
		const nullhKaYWU5 = await contractlgL7Rm.tokenURI.call(tokenIdLKKSnyw, {from: "0x0000000000000000000000000000000000000001"});
	});
})
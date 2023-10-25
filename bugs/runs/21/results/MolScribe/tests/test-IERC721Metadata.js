const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractziW62fH = await IERC721Metadata.new({from: accounts[3]});
		const tokenIdwRiFVch = BigInt("1355")
		const tokenIdfvQazgg = BigInt("2035")
		const nullk2bwlv9 = await contractziW62fH.tokenURI.call(tokenIdwRiFVch, {from: accounts[3]});
		const nullvA2rIZ = await contractziW62fH.name.call({from: accounts[2]});
		const nullvGtt7i7 = await contractziW62fH.symbol.call({from: accounts[0]});
		const nullQq08Z3F = await contractziW62fH.name.call({from: accounts[3]});
		const nullUFdefe = await contractziW62fH.symbol.call({from: accounts[3]});
		const nulluE1CCnj = await contractziW62fH.tokenURI.call(tokenIdfvQazgg, {from: accounts[3]});
	});
})
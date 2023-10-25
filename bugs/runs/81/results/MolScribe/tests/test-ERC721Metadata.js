const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namehqu8mfD = "wlU99VqtlJf3251vTI5A2r8xpNRDNeoQb62wM4CeY2xS8"
		const symbolU1cGgNR = "MxakXSagoMLH"
		const contractpH1pT0M = await ERC721Metadata.new(namehqu8mfD, symbolU1cGgNR, {from: accounts[0]});
		const nulltqQJa1u = await contractpH1pT0M.symbol.call({from: accounts[4]});
		const nullHs5eqt = await contractpH1pT0M.name.call({from: accounts[1]});
		const nullL2nMgFv = await contractpH1pT0M.symbol.call({from: accounts[1]});
		const nullOk3QC0A = await contractpH1pT0M.symbol.call({from: accounts[1]});
		const nullaoX1SOi = await contractpH1pT0M.symbol.call({from: accounts[4]});
		const nullnsGafJ6 = await contractpH1pT0M.name.call({from: accounts[1]});
	});
})
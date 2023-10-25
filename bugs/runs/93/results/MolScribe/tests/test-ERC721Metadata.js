const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namef8nBOOg = "MbmBZjfKfpTPPzWfJypgwPfgpucNvIxFkC2oQClPf0Lskq6bMgxo3WFUJ1E1QRCCoKlk96fxPeY2Eccji03nhoX"
		const symbolgOwOf8S = "zdyhrJcseVT2ZaF3sQD6b9MHKNEBxnAsQmC9uXKjIyPGxt6NOBRkGK"
		const contractptCFR4G = await ERC721Metadata.new(namef8nBOOg, symbolgOwOf8S, {from: accounts[1]});
		const nullls9EM5L = await contractptCFR4G.symbol.call({from: accounts[1]});
		const nullCg87InL = await contractptCFR4G.symbol.call({from: accounts[0]});
		const nullwgGXxVo = await contractptCFR4G.symbol.call({from: accounts[4]});
		const nullH6fvf03 = await contractptCFR4G.name.call({from: accounts[0]});
		const nullXREcHSH = await contractptCFR4G.symbol.call({from: accounts[3]});
		const nullgjDNCdp = await contractptCFR4G.symbol.call({from: accounts[5]});
	});
})
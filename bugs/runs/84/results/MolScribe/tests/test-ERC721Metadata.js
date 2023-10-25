const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameSXTb6Cw = "WXY3KfR1oVm4GMTdXAnmsQ4Gd"
		const symbolUCvnZ8 = "8HLNHlBDftbsL15mIBMr5Usgv2V01NC5WRKQXuMKaMrAGIEkkVdE4kdn3HXsAOjnI12BuBAlbWvwWT3NfIL5iStcYK163YB"
		const contractSIAnw1c = await ERC721Metadata.new(nameSXTb6Cw, symbolUCvnZ8, {from: accounts[4]});
		const nulldc10ZjI = await contractSIAnw1c.symbol.call({from: accounts[0]});
		const nullyOLVrZX = await contractSIAnw1c.symbol.call({from: accounts[2]});
	});
})
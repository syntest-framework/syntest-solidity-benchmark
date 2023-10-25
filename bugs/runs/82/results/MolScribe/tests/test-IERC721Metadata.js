const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractt3FwV3u = await IERC721Metadata.new({from: accounts[0]});
		const tokenIdGzJ5XA5 = BigInt("142")
		const tokenIdggplBhM = BigInt("2023")
		const nullX8Tcml = await contractt3FwV3u.symbol.call({from: accounts[5]});
		const nullfKEWooV = await contractt3FwV3u.tokenURI.call(tokenIdGzJ5XA5, {from: accounts[0]});
		const nullooMMl9t = await contractt3FwV3u.name.call({from: accounts[3]});
		const nullLRRyUGk = await contractt3FwV3u.tokenURI.call(tokenIdggplBhM, {from: accounts[1]});
		const nullAEmFSqH = await contractt3FwV3u.symbol.call({from: accounts[2]});
		const nullIo7pxTU = await contractt3FwV3u.name.call({from: accounts[0]});
	});
})
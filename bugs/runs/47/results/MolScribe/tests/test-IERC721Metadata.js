const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contracta18riDY = await IERC721Metadata.new({from: accounts[2]});
		const tokenIdxrZHEZc = BigInt("1080")
		const nullMou4ii8 = await contracta18riDY.symbol.call({from: accounts[2]});
		const nullbbTZin6 = await contracta18riDY.tokenURI.call(tokenIdxrZHEZc, {from: accounts[4]});
		const nullocd4r7h = await contracta18riDY.symbol.call({from: accounts[3]});
		const nullXho8uJm = await contracta18riDY.name.call({from: accounts[0]});
		const nullGTtrTg3 = await contracta18riDY.name.call({from: accounts[2]});
	});
})
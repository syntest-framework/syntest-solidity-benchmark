const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractZ66arH = await IERC721Metadata.new({from: accounts[2]});
		const tokenIdMVHmvbg = BigInt("188")
		const tokenIdRO9udZU = BigInt("413")
		const nullHoRFhpl = await contractZ66arH.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullUuqMF6s = await contractZ66arH.tokenURI.call(tokenIdMVHmvbg, {from: accounts[3]});
		const nullFoNUDFy = await contractZ66arH.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullAspS4N5 = await contractZ66arH.name.call({from: accounts[1]});
		const nullITVRb4E = await contractZ66arH.tokenURI.call(tokenIdRO9udZU, {from: accounts[3]});
		const nullMbKWPLW = await contractZ66arH.name.call({from: accounts[4]});
	});
})
const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameDu70EKO = "ryVQvg2iKRhmDH73fUu5KDdtuYgmtTaE4KwH673eqbyzRS5PBlp83RW6a3ydcs6l2U6KDBN1yGs52sdJ4p8Bk1RgNZxFc33V"
		const symbolyT5aaRK = "DoNFuAX2nxUQiLQ1Yuxklje11d1pL3RGPmFW8autYc9u8w8Wdf3KRYN5qIEHUkyNrOGMrFTW4Kn5xlowcWd5Ny"
		const contractQgll7Dt = await ERC721Metadata.new(nameDu70EKO, symbolyT5aaRK, {from: accounts[3]});
		const nullJ51yoeS = await contractQgll7Dt.name.call({from: accounts[1]});
		const nullS9KCGUy = await contractQgll7Dt.name.call({from: accounts[1]});
		const nullvb0dVQK = await contractQgll7Dt.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullOCTyPAX = await contractQgll7Dt.name.call({from: accounts[4]});
	});
})
const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namesa1DDoc = "XntSXcTliAcoFCKHdOz0USaN"
		const symbolI8E7M5g = "fl1oKpNjnh6CI6swdguUcASFikw6r8KAGUO1wXXfHDRLLHOsmEgubunKxC9cgMzbH"
		const contractNm9h5cz = await ERC721Metadata.new(namesa1DDoc, symbolI8E7M5g, {from: accounts[4]});
		const nulltzzXDm5 = await contractNm9h5cz.name.call({from: accounts[1]});
		const nullUCl92Yf = await contractNm9h5cz.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullynWBTeD = await contractNm9h5cz.symbol.call({from: accounts[1]});
	});
})
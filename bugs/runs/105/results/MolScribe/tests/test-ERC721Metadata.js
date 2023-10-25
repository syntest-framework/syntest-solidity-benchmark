const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameT793Wpr = "QRl1p571YyXYiiLbyLb8cLlRnIfIsX1M9iXkMWscvqOHDyC"
		const symbolfAgwnOf = "T5XbHxzKK8dpenevQDReQujxbUNcQthFsAJHAmNREn9sv7kR6NdlwDgCNcan3NUqrxZA6XFz41eiXnjKNctG2vpRpi1pLssF"
		const contractDvufnPn = await ERC721Metadata.new(nameT793Wpr, symbolfAgwnOf, {from: accounts[3]});
		const nullQ6Noa7w = await contractDvufnPn.name.call({from: accounts[3]});
		const nullUcnPHg1 = await contractDvufnPn.name.call({from: accounts[3]});
		const nullaUZtHZM = await contractDvufnPn.symbol.call({from: accounts[3]});
		const nullBrcl9ZB = await contractDvufnPn.symbol.call({from: accounts[3]});
		const nullHKmv0gU = await contractDvufnPn.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
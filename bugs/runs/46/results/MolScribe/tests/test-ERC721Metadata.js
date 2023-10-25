const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const name73kGJq = "lC0VOG4PUbGXP87cIyJY6NBd9B0w4Tw3gDLcc9E6sBxoPBXK1v7bC2p6j7EAXFYbwOBqZ3eJvV2mg7hAbfegTr2NVy5xYT"
		const symbolyqlodh = "Mz2RaTrUB2UlIBKZ"
		const contractDeEbpqV = await ERC721Metadata.new(name73kGJq, symbolyqlodh, {from: accounts[3]});
		const nulluWIG5T5 = await contractDeEbpqV.name.call({from: accounts[4]});
		const nullvqAy252 = await contractDeEbpqV.symbol.call({from: accounts[3]});
		const nullihjr3Uh = await contractDeEbpqV.name.call({from: accounts[1]});
		const nullpUdLhog = await contractDeEbpqV.name.call({from: accounts[3]});
		const nulldVfLcWY = await contractDeEbpqV.name.call({from: accounts[4]});
	});
})
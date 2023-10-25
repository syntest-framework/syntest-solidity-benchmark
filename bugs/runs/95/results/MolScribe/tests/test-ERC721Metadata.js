const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const name6eyA00 = "MBsQFzNAHGcSsoTCQAQKd6oLh"
		const symboleNfEHUb = "6AqUVScy8sRlQAquCVSUKg"
		const contractgAX1v9p = await ERC721Metadata.new(name6eyA00, symboleNfEHUb, {from: accounts[3]});
		const nullKjeY7dE = await contractgAX1v9p.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullAJIzxTU = await contractgAX1v9p.name.call({from: accounts[0]});
		const nullj556i7 = await contractgAX1v9p.symbol.call({from: accounts[2]});
		const nullDDqkuxT = await contractgAX1v9p.symbol.call({from: accounts[5]});
	});
})
const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameo9mwE7 = "skheGugXeKuD6OeQx1i3m9pFIFwG"
		const symbolPpZUFFD = "qhfbzHv48lgTqAoBBfBtwyaSLePomqV7XkyliFuO"
		const contractVnPfHg = await ERC721Metadata.new(nameo9mwE7, symbolPpZUFFD, {from: accounts[0]});
		const nullSZ20RkE = await contractVnPfHg.symbol.call({from: accounts[0]});
		const nulllhQpBY = await contractVnPfHg.name.call({from: accounts[3]});
	});
})
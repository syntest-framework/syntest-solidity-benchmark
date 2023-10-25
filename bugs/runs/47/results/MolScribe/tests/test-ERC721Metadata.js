const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameCJ6yAeL = "wa11VcqWYHEC3"
		const symboljmd951z = "9iG2QBc8K5jis6ENJQuINZ0UN2iK9JToCVupXDlFJSbU4qRuPj2E4ugVMfQT"
		const contractM4uNlth = await ERC721Metadata.new(nameCJ6yAeL, symboljmd951z, {from: accounts[1]});
		const nullZlW8nHU = await contractM4uNlth.symbol.call({from: accounts[0]});
		const nullSIlKJ9P = await contractM4uNlth.name.call({from: accounts[1]});
		const nullMtiVWGx = await contractM4uNlth.name.call({from: accounts[3]});
		const nullPzJCCA = await contractM4uNlth.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullQruuJUp = await contractM4uNlth.symbol.call({from: accounts[1]});
	});
})
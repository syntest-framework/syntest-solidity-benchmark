const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameYlWJgMP = "PcOuIRMIbes37qfwLLS6xOPpH7dFzYe4o4CzO29gGrWcBEikMMiWAdm"
		const symbolqvPZAoI = "eQuAIOCpTIMAnHNOsq9gJMnLEc6TGWIKrPdEvev9wV9OvPyiMr6qVNlgwpVJPUWikF"
		const contractINiR6NS = await ERC721Metadata.new(nameYlWJgMP, symbolqvPZAoI, {from: accounts[3]});
		const nullc8b9yAq = await contractINiR6NS.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullr1gBs4x = await contractINiR6NS.name.call({from: accounts[3]});
		const nullkgaPL0 = await contractINiR6NS.name.call({from: accounts[2]});
		const nullFoq014R = await contractINiR6NS.name.call({from: accounts[0]});
		const nullZYZHzV1 = await contractINiR6NS.symbol.call({from: accounts[4]});
		const nullVeSfMHE = await contractINiR6NS.symbol.call({from: accounts[4]});
	});
})
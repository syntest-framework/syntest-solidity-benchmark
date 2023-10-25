const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namebOCzOc = "qfHzAtMzRmGYiRrnxqrzrNDJT38S7zwuRWEpMW2"
		const symbolr3m50S = "zulv53WPIINt4gkPZ7NV7id5NWedkktpwsqBtCRmuvsO97uMGa9kPL"
		const contractOicUtqL = await ERC721Metadata.new(namebOCzOc, symbolr3m50S, {from: accounts[2]});
		const nullA3car6j = await contractOicUtqL.symbol.call({from: accounts[0]});
		const nullrMBLutI = await contractOicUtqL.symbol.call({from: accounts[1]});
		const nullrNrdk8Q = await contractOicUtqL.symbol.call({from: accounts[5]});
	});
})
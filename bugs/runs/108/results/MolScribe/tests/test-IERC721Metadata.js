const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractOa1FQIv = await IERC721Metadata.new({from: "0x0000000000000000000000000000000000000001"});
		const nullJf45cQI = await contractOa1FQIv.symbol.call({from: accounts[3]});
		const null9lKleS = await contractOa1FQIv.symbol.call({from: accounts[0]});
		const nullOi4leiy = await contractOa1FQIv.symbol.call({from: accounts[4]});
		const nullmPArhLe = await contractOa1FQIv.symbol.call({from: accounts[1]});
		const nullsls89Xv = await contractOa1FQIv.symbol.call({from: accounts[2]});
	});
})
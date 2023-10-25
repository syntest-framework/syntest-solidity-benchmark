const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractCOlX81J = await ERC165.new({from: accounts[0]});
		const interfaceIdWok7Ok = "0x010e0408"
		const interfaceIdeKANdqA = "0x091f060b"
		const interfaceIdMwugWcw = "0x0e140306"
		const interfaceIdu5mrSbj = "0x0c060d1c"
		const interfaceIdidJNn8v = "0x0f090117"
		const nullturWrZq = await contractCOlX81J.supportsInterface.call(interfaceIdWok7Ok, {from: accounts[0]});
		const nullrQvmd7O = await contractCOlX81J.supportsInterface.call(interfaceIdeKANdqA, {from: accounts[1]});
		const nullC8iDsBk = await contractCOlX81J.supportsInterface.call(interfaceIdMwugWcw, {from: accounts[1]});
		const nullH76ZZxj = await contractCOlX81J.supportsInterface.call(interfaceIdu5mrSbj, {from: accounts[1]});
		const nullGeCqE3E = await contractCOlX81J.supportsInterface.call(interfaceIdidJNn8v, {from: accounts[0]});
	});
})
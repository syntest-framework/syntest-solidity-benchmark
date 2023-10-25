const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractqixtK7p = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdXUrG24 = "0x191f100d"
		const interfaceIdcbUkgL7 = "0x190d0514"
		const interfaceIdJMQwLZs = "0x1c010c0f"
		const nullWWkhaSy = await contractqixtK7p.supportsInterface.call(interfaceIdXUrG24, {from: "0x0000000000000000000000000000000000000001"});
		const nullmGtUuVC = await contractqixtK7p.supportsInterface.call(interfaceIdcbUkgL7, {from: accounts[2]});
		const nullA1rH2c2 = await contractqixtK7p.supportsInterface.call(interfaceIdJMQwLZs, {from: accounts[5]});
	});
})
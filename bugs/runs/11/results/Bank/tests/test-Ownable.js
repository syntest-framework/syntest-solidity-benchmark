const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractcaoC5q4 = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const nullv7PdwcA = await contractcaoC5q4.isOwner.call({from: accounts[1]});
		await contractcaoC5q4.renounceOwnership.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPsr9az4 = await Ownable.new({from: accounts[3]});
		const nullMhej7B = await contractPsr9az4.isOwner.call({from: accounts[1]});
		const nullCSJLX3J = await contractPsr9az4.isOwner.call({from: accounts[2]});
		await contractPsr9az4.renounceOwnership.call({from: accounts[4]});
		await contractPsr9az4.renounceOwnership.call({from: accounts[4]});
		const nullq5lWD0A = await contractPsr9az4.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
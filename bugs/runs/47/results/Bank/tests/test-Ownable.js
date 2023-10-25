const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractnXrB9SF = await Ownable.new({from: accounts[0]});
		const newOwnerlZ5Jn3F = accounts[3]
		await contractnXrB9SF.transferOwnership.call(newOwnerlZ5Jn3F, {from: accounts[2]});
		await contractnXrB9SF.renounceOwnership.call({from: accounts[2]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractJEWISi6 = await Ownable.new({from: accounts[0]});
		const newOwnerfYTGs3 = accounts[4]
		const nullqUoCWmn = await contractJEWISi6.isOwner.call({from: accounts[2]});
		await contractJEWISi6.transferOwnership.call(newOwnerfYTGs3, {from: accounts[4]});
	});
})
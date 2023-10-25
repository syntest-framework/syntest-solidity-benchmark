const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractbzAIlI = await Ownable.new({from: accounts[4]});
		const nullVwTp2HD = await contractbzAIlI.owner.call({from: accounts[0]});
		await contractbzAIlI.renounceOwnership.call({from: accounts[1]});
		await contractbzAIlI.renounceOwnership.call({from: accounts[4]});
		const nullEKR8vHs = await contractbzAIlI.isOwner.call({from: accounts[0]});
	});
})
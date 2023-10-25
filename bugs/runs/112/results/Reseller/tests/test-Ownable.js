const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractMIeMw5o = await Ownable.new({from: accounts[2]});
		await contractMIeMw5o.renounceOwnership.call({from: accounts[2]});
		await contractMIeMw5o.renounceOwnership.call({from: accounts[5]});
		const nullVlqWEyj = await contractMIeMw5o.owner.call({from: accounts[0]});
		const nullHtDOiNh = await contractMIeMw5o.owner.call({from: accounts[0]});
		await contractMIeMw5o.renounceOwnership.call({from: accounts[3]});
	});
})
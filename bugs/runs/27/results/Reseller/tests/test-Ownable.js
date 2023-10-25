const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractyqDlCK1 = await Ownable.new({from: accounts[4]});
		const nullNnReqyD = await contractyqDlCK1.owner.call({from: accounts[4]});
		const nullIK1eYQy = await contractyqDlCK1.owner.call({from: accounts[0]});
		await contractyqDlCK1.renounceOwnership.call({from: accounts[3]});
		const nullJux6W1h = await contractyqDlCK1.owner.call({from: accounts[0]});
		await contractyqDlCK1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
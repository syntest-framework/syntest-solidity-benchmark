const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractKR3jxUN = await Ownable.new({from: accounts[4]});
		const newOwnerTyTOTe1 = accounts[3]
		await contractKR3jxUN.transferOwnership.call(newOwnerTyTOTe1, {from: accounts[4]});
		const nullbG9jzHR = await contractKR3jxUN.owner.call({from: accounts[5]});
	});
})
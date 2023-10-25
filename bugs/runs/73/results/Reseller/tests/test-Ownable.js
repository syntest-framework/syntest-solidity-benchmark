const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractVmGQ2gR = await Ownable.new({from: accounts[0]});
		const newOwnerVrizbcL = accounts[4]
		await contractVmGQ2gR.renounceOwnership.call({from: accounts[0]});
		await contractVmGQ2gR.renounceOwnership.call({from: accounts[4]});
		await contractVmGQ2gR.renounceOwnership.call({from: accounts[4]});
		const nullMwcB9XZ = await contractVmGQ2gR.owner.call({from: accounts[2]});
		await contractVmGQ2gR.transferOwnership.call(newOwnerVrizbcL, {from: accounts[2]});
	});
})
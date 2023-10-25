const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractpjoicMb = await Ownable.new({from: accounts[1]});
		const newOwnerPcZRoOV = accounts[2]
		const newOwnerUy4DksM = accounts[0]
		await contractpjoicMb.transferOwnership.call(newOwnerPcZRoOV, {from: accounts[1]});
		await contractpjoicMb.transferOwnership.call(newOwnerUy4DksM, {from: accounts[4]});
	});
})
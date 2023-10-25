const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractwM2KcHG = await Ownable.new({from: accounts[1]});
		const newOwnerzk93ggp = accounts[3]
		const newOwnerVWTy3uh = accounts[4]
		await contractwM2KcHG.transferOwnership.call(newOwnerzk93ggp, {from: accounts[5]});
		await contractwM2KcHG.renounceOwnership.call({from: accounts[1]});
		await contractwM2KcHG.transferOwnership.call(newOwnerVWTy3uh, {from: accounts[1]});
	});
})
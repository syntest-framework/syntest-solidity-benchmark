const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPRBZrYH = await Ownable.new({from: accounts[1]});
		const newOwnerko1zgKz = accounts[2]
		const nulltAHtDMd = await contractPRBZrYH.owner.call({from: accounts[4]});
		const nullEF8oftM = await contractPRBZrYH.owner.call({from: accounts[2]});
		await contractPRBZrYH.transferOwnership.call(newOwnerko1zgKz, {from: accounts[1]});
		const nulluK1mkpd = await contractPRBZrYH.isOwner.call({from: accounts[1]});
	});
})
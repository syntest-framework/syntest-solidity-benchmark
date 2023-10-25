const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractmJ0Mal = await Ownable.new({from: accounts[2]});
		const nullAIjvgWa = await contractmJ0Mal.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullrTYtWle = await contractmJ0Mal.isOwner.call({from: accounts[1]});
		const nulldNFAVnM = await contractmJ0Mal.isOwner.call({from: accounts[0]});
		await contractmJ0Mal.renounceOwnership.call({from: accounts[2]});
	});
})
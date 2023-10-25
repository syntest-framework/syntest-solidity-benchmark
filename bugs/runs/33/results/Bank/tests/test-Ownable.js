const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractgtdpca = await Ownable.new({from: accounts[3]});
		await contractgtdpca.renounceOwnership.call({from: accounts[5]});
		const nullLVj50mk = await contractgtdpca.isOwner.call({from: accounts[5]});
		await contractgtdpca.renounceOwnership.call({from: accounts[1]});
		const nullkw5h5ZH = await contractgtdpca.isOwner.call({from: accounts[3]});
	});
})
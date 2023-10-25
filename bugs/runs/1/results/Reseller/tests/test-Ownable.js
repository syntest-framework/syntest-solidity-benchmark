const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractARm4vq4 = await Ownable.new({from: accounts[3]});
		await contractARm4vq4.renounceOwnership.call({from: accounts[1]});
		const nullFTlNqtk = await contractARm4vq4.owner.call({from: accounts[5]});
		await contractARm4vq4.renounceOwnership.call({from: accounts[0]});
		await contractARm4vq4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractARm4vq4.renounceOwnership.call({from: accounts[4]});
	});
})
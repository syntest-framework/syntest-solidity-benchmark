const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractbJnmQvq = await Ownable.new({from: accounts[0]});
		await contractbJnmQvq.renounceOwnership.call({from: accounts[4]});
		const nullEuYJn4o = await contractbJnmQvq.isOwner.call({from: accounts[3]});
		const nullNedoilp = await contractbJnmQvq.isOwner.call({from: accounts[5]});
		const nullTXKoVS2 = await contractbJnmQvq.isOwner.call({from: accounts[4]});
		const nullnEYA0X = await contractbJnmQvq.isOwner.call({from: accounts[2]});
	});
})
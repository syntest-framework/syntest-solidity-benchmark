const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractmpRSyY7 = await Ownable.new({from: accounts[0]});
		const nullY4q94R = await contractmpRSyY7.owner.call({from: accounts[3]});
		const nullTqudhuj = await contractmpRSyY7.isOwner.call({from: accounts[0]});
		const nullbeQAyPF = await contractmpRSyY7.isOwner.call({from: accounts[3]});
		const nullUmPVLe = await contractmpRSyY7.isOwner.call({from: accounts[4]});
	});
})
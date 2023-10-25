const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractkNl5J01 = await Ownable.new({from: accounts[2]});
		const nullTwLRgh = await contractkNl5J01.owner.call({from: accounts[0]});
		const nulleS8k08T = await contractkNl5J01.owner.call({from: accounts[2]});
		const nullUv1AGv4 = await contractkNl5J01.owner.call({from: accounts[1]});
		const nullCC1muvv = await contractkNl5J01.isOwner.call({from: accounts[3]});
		const nullMVjhyL = await contractkNl5J01.isOwner.call({from: accounts[4]});
	});
})
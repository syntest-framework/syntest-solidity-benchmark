const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractVsjDrJL = await Ownable.new({from: accounts[0]});
		const nullOad5Iq = await contractVsjDrJL.isOwner.call({from: accounts[3]});
		const nullYOhqy9G = await contractVsjDrJL.isOwner.call({from: accounts[0]});
		const nullBQ51Bc8 = await contractVsjDrJL.owner.call({from: accounts[3]});
	});
})
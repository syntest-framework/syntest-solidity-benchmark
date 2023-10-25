const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractwIO1qa = await Ownable.new({from: accounts[4]});
		const nullRBlCsIG = await contractwIO1qa.isOwner.call({from: accounts[3]});
		const nullt4Dx0tx = await contractwIO1qa.isOwner.call({from: accounts[0]});
		const nullo3zpcbm = await contractwIO1qa.owner.call({from: accounts[0]});
	});
})
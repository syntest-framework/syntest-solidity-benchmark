const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracti6kapRT = await Ownable.new({from: accounts[2]});
		const nullxHoWLrv = await contracti6kapRT.owner.call({from: accounts[1]});
		const nullFmRpVKA = await contracti6kapRT.owner.call({from: accounts[0]});
		const nullP52Alpn = await contracti6kapRT.isOwner.call({from: accounts[3]});
		const nullyWqDbGa = await contracti6kapRT.isOwner.call({from: accounts[4]});
		await contracti6kapRT.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
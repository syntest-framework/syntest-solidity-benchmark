const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractnFRhojP = await Ownable.new({from: accounts[0]});
		const nullxKkSln2 = await contractnFRhojP.isOwner.call({from: accounts[3]});
		const nulldmBgP2N = await contractnFRhojP.owner.call({from: accounts[1]});
		const nulli9Z1fB = await contractnFRhojP.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullqM6LFHo = await contractnFRhojP.isOwner.call({from: accounts[0]});
		const nullPgg9fup = await contractnFRhojP.isOwner.call({from: accounts[3]});
	});
})
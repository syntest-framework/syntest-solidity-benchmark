const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractfLCEeqn = await Ownable.new({from: accounts[0]});
		const nullZ8zHD0L = await contractfLCEeqn.isOwner.call({from: accounts[4]});
		const nullXSjAqR = await contractfLCEeqn.isOwner.call({from: accounts[2]});
		const nullMDLxbUn = await contractfLCEeqn.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractNE889ic = await Ownable.new({from: accounts[1]});
		const newOwnerKmAs8VO = accounts[2]
		const nulleKwWSR = await contractNE889ic.owner.call({from: accounts[3]});
		const nullsdU5bUA = await contractNE889ic.owner.call({from: accounts[4]});
		await contractNE889ic.transferOwnership.call(newOwnerKmAs8VO, {from: accounts[3]});
	});
})
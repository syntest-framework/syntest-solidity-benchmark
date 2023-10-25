const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractv1gjhF = await Ownable.new({from: accounts[2]});
		const newOwnerbQoxpJ = accounts[2]
		const newOwnerOxPGMDi = accounts[1]
		await contractv1gjhF.renounceOwnership.call({from: accounts[0]});
		await contractv1gjhF.renounceOwnership.call({from: accounts[3]});
		const nullLn2YLus = await contractv1gjhF.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await contractv1gjhF.transferOwnership.call(newOwnerbQoxpJ, {from: accounts[5]});
		await contractv1gjhF.transferOwnership.call(newOwnerOxPGMDi, {from: accounts[2]});
	});
})
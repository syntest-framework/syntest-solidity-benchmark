const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPdGF5xa = await Ownable.new({from: accounts[3]});
		const newOwnerNq7vqCP = accounts[1]
		const newOwner0vPloF = accounts[2]
		const nulllVN8FMi = await contractPdGF5xa.owner.call({from: accounts[3]});
		await contractPdGF5xa.transferOwnership.call(newOwnerNq7vqCP, {from: "0x0000000000000000000000000000000000000001"});
		await contractPdGF5xa.transferOwnership.call(newOwner0vPloF, {from: accounts[4]});
		await contractPdGF5xa.renounceOwnership.call({from: accounts[1]});
		const nullirjgXmg = await contractPdGF5xa.owner.call({from: accounts[2]});
		await contractPdGF5xa.renounceOwnership.call({from: accounts[2]});
	});
})
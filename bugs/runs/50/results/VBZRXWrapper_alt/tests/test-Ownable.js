const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractprJ10BC = await Ownable.new({from: accounts[4]});
		const newOwnerB8bITt = accounts[3]
		const nulld5m8Jl1 = await contractprJ10BC.owner.call({from: accounts[1]});
		const nullL8LjXet = await contractprJ10BC.owner.call({from: accounts[1]});
		const nullTizWBn = await contractprJ10BC.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await contractprJ10BC.transferOwnership.call(newOwnerB8bITt, {from: accounts[4]});
		await contractprJ10BC.renounceOwnership.call({from: accounts[4]});
		await contractprJ10BC.renounceOwnership.call({from: accounts[3]});
	});
})
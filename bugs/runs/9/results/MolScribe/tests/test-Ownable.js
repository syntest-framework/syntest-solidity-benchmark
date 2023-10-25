const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractk0Wvaq9 = await Ownable.new({from: accounts[2]});
		const newOwnertH0f235 = accounts[2]
		const nullMs1KTRE = await contractk0Wvaq9.isOwner.call({from: accounts[2]});
		const nullydAsU2H = await contractk0Wvaq9.isOwner.call({from: accounts[4]});
		await contractk0Wvaq9.transferOwnership.call(newOwnertH0f235, {from: accounts[5]});
		const nullpjW9lS5 = await contractk0Wvaq9.owner.call({from: accounts[1]});
		await contractk0Wvaq9.renounceOwnership.call({from: accounts[4]});
	});
})
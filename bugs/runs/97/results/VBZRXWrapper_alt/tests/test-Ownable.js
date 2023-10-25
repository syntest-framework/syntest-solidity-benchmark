const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractXAJw6tk = await Ownable.new({from: accounts[3]});
		const newOwnerHHxQVcW = accounts[4]
		await contractXAJw6tk.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractXAJw6tk.renounceOwnership.call({from: accounts[1]});
		await contractXAJw6tk.renounceOwnership.call({from: accounts[5]});
		await contractXAJw6tk.transferOwnership.call(newOwnerHHxQVcW, {from: accounts[2]});
	});
})
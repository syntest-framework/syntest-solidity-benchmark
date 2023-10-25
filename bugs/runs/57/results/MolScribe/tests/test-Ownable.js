const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractj2e32Az = await Ownable.new({from: accounts[1]});
		const newOwnerD4wG60K = accounts[3]
		const newOwner6MQny8 = accounts[3]
		const newOwnerG8sTKQk = accounts[4]
		await contractj2e32Az.transferOwnership.call(newOwnerD4wG60K, {from: accounts[4]});
		const nullRyJpjGk = await contractj2e32Az.isOwner.call({from: accounts[1]});
		const nullivU6WlA = await contractj2e32Az.isOwner.call({from: accounts[1]});
		await contractj2e32Az.transferOwnership.call(newOwner6MQny8, {from: accounts[1]});
		await contractj2e32Az.transferOwnership.call(newOwnerG8sTKQk, {from: "0x0000000000000000000000000000000000000001"});
	});
})
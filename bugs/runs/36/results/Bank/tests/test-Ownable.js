const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractksLe1mq = await Ownable.new({from: accounts[5]});
		const newOwnerkSe5bcN = "0x0000000000000000000000000000000000000001"
		await contractksLe1mq.renounceOwnership.call({from: accounts[1]});
		const nullMcWHgDm = await contractksLe1mq.isOwner.call({from: accounts[5]});
		await contractksLe1mq.renounceOwnership.call({from: accounts[5]});
		await contractksLe1mq.transferOwnership.call(newOwnerkSe5bcN, {from: accounts[2]});
	});
})
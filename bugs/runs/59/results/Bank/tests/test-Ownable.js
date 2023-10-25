const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractHlzRSI2 = await Ownable.new({from: accounts[3]});
		const newOwner3x826r = accounts[4]
		const nullVbI9SVS = await contractHlzRSI2.isOwner.call({from: accounts[1]});
		const nullTt4npYJ = await contractHlzRSI2.isOwner.call({from: accounts[2]});
		const nullQWRU3as = await contractHlzRSI2.isOwner.call({from: accounts[1]});
		await contractHlzRSI2.transferOwnership.call(newOwner3x826r, {from: accounts[4]});
	});
})
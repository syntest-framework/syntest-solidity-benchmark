const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPwg5CGY = await Ownable.new({from: accounts[4]});
		const newOwnerN8hdPiN = accounts[2]
		const newOwnersZ85frC = accounts[2]
		await contractPwg5CGY.renounceOwnership.call({from: accounts[2]});
		await contractPwg5CGY.renounceOwnership.call({from: accounts[2]});
		await contractPwg5CGY.transferOwnership.call(newOwnerN8hdPiN, {from: accounts[0]});
		await contractPwg5CGY.transferOwnership.call(newOwnersZ85frC, {from: accounts[1]});
	});
})
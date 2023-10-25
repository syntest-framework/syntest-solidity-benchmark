const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractm5TzFnk = await Ownable.new({from: accounts[2]});
		const newOwnerszS2QNO = accounts[1]
		const newOwnerw0zRbdt = accounts[4]
		await contractm5TzFnk.transferOwnership.call(newOwnerszS2QNO, {from: accounts[0]});
		await contractm5TzFnk.transferOwnership.call(newOwnerw0zRbdt, {from: accounts[5]});
		const nullOOUzFqn = await contractm5TzFnk.owner.call({from: accounts[3]});
		const nullrOS0REE = await contractm5TzFnk.isOwner.call({from: accounts[2]});
		const nullXq3mnbo = await contractm5TzFnk.isOwner.call({from: accounts[2]});
	});
})
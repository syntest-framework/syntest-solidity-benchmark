const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractaEhghCz = await Ownable.new({from: accounts[3]});
		const newOwnerIEwBbsO = accounts[4]
		const newOwnerQG5sx5d = accounts[1]
		const nullpHMytMI = await contractaEhghCz.isOwner.call({from: accounts[4]});
		await contractaEhghCz.transferOwnership.call(newOwnerIEwBbsO, {from: accounts[1]});
		await contractaEhghCz.transferOwnership.call(newOwnerQG5sx5d, {from: accounts[2]});
		const nullUIJzUht = await contractaEhghCz.isOwner.call({from: accounts[3]});
		const nullGlGcmdl = await contractaEhghCz.isOwner.call({from: accounts[1]});
		const nullKKg0oDe = await contractaEhghCz.isOwner.call({from: accounts[4]});
	});
})
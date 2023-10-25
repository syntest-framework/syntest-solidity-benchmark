const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractpheFsm = await Ownable.new({from: accounts[1]});
		const newOwnerYT7VNBo = "0x0000000000000000000000000000000000000001"
		const newOwnerboQPb3x = accounts[5]
		const nullScSApEa = await contractpheFsm.isOwner.call({from: accounts[3]});
		await contractpheFsm.transferOwnership.call(newOwnerYT7VNBo, {from: accounts[3]});
		await contractpheFsm.transferOwnership.call(newOwnerboQPb3x, {from: "0x0000000000000000000000000000000000000001"});
	});
})
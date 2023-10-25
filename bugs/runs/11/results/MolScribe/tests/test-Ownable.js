const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracte9Rc0Rt = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const nullVTtoJx7 = await contracte9Rc0Rt.owner.call({from: accounts[3]});
		await contracte9Rc0Rt.renounceOwnership.call({from: accounts[4]});
		const nullXodI8Cn = await contracte9Rc0Rt.isOwner.call({from: accounts[2]});
		await contracte9Rc0Rt.renounceOwnership.call({from: accounts[2]});
		const nullTiDYhXk = await contracte9Rc0Rt.isOwner.call({from: accounts[3]});
		await contracte9Rc0Rt.renounceOwnership.call({from: accounts[2]});
	});
})
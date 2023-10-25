const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractivMy2Ww = await Ownable.new({from: accounts[3]});
		await contractivMy2Ww.renounceOwnership.call({from: accounts[5]});
		await contractivMy2Ww.renounceOwnership.call({from: accounts[1]});
		await contractivMy2Ww.renounceOwnership.call({from: accounts[1]});
		await contractivMy2Ww.renounceOwnership.call({from: accounts[3]});
		const nullXvNmo7I = await contractivMy2Ww.owner.call({from: accounts[0]});
	});
})
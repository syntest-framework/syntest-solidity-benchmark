const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceOUKGet5 = await Reentrance.new({from: accounts[3]});
		const uinttzonNY2 = BigInt("1412")
		const addressZwuqhUr = accounts[3]
		const addressHdmikP = accounts[1]
		const addressECNOFlt = accounts[0]
		const uintr73K48b = await ReentranceOUKGet5.withdraw.call(uinttzonNY2, {from: accounts[2]});
		await ReentranceOUKGet5.topup.call({from: accounts[1]});
		const uinthiwX8EO = await ReentranceOUKGet5.balanceOf.call(addressZwuqhUr, {from: accounts[5]});
		const uintASRszWj = await ReentranceOUKGet5.balanceOf.call(addressHdmikP, {from: accounts[5]});
		const uinta8SQlW = await ReentranceOUKGet5.balanceOf.call(addressECNOFlt, {from: accounts[0]});
		await ReentranceOUKGet5.topup.call({from: accounts[1]});

		await expect(ReentranceOUKGet5.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrancenfc5Xw6 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressY1ROkJ6 = accounts[1]
		const uintF5RjyDH = await Reentrancenfc5Xw6.balanceOf.call(addressY1ROkJ6, {from: "0x0000000000000000000000000000000000000001"});
		await Reentrancenfc5Xw6.topup.call({from: accounts[3]});
		await Reentrancenfc5Xw6.topup.call({from: accounts[1]});
	});
})
const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2iynMzH7 = await BTCParamV2.new({from: accounts[5]});
		const uintIE0pvEQ = BigInt("55")
		const uint256mU9H69U = await BTCParamV2iynMzH7.setBtcTxFeeRewardRate.call(uintIE0pvEQ, {from: accounts[4]});
		await BTCParamV2iynMzH7.onlyParamSetter.call({from: accounts[0]});

		await expect(BTCParamV2iynMzH7.setBtcTxFeeRewardRate.call(uintIE0pvEQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2mUdyN3 = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressX3mrINp = accounts[2]
		const uintK4UGcGj = BigInt("1191")
		const uintnSKyiLh = BigInt("772")
		const booldu6wmir = await BTCParamV2mUdyN3.removeListener.call(addressX3mrINp, {from: accounts[1]});
		const uint256LiuWEDE = await BTCParamV2mUdyN3.setBtcBlockReward.call(uintK4UGcGj, {from: accounts[1]});
		const uint256yc07bgn = await BTCParamV2mUdyN3.setBtcTxFeeRewardRate.call(uintnSKyiLh, {from: accounts[4]});
		await BTCParamV2mUdyN3.onlyOwner.call({from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Hwq9avp = await BTCParamV2.new({from: accounts[4]});
		const addressFc5I75b = accounts[2]
		const addresstIrfpUi = accounts[4]
		await BTCParamV2Hwq9avp.onlyOwner.call({from: accounts[0]});
		const addressLJ7DlqU = await BTCParamV2Hwq9avp.addListener.call(addressFc5I75b, {from: accounts[1]});
		const boolqfxZc91 = await BTCParamV2Hwq9avp.removeListener.call(addresstIrfpUi, {from: accounts[2]});
		await BTCParamV2Hwq9avp.updateBtcPrice.call({from: accounts[0]});

		await expect(BTCParamV2Hwq9avp.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2bh2dWF = await BTCParamV2.new({from: accounts[1]});
		const addressVYwXY7c = accounts[0]
		const addressJjXPvrh = accounts[5]
		const uintH606mS4 = BigInt("1726")
		const addressOLXnUim = await BTCParamV2bh2dWF.setParamSetter.call(addressVYwXY7c, {from: accounts[3]});
		await BTCParamV2bh2dWF.updateBtcPrice.call({from: accounts[2]});
		const addressD0TLy3L = await BTCParamV2bh2dWF.transferOwnership.call(addressJjXPvrh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qXhpw26 = await BTCParamV2bh2dWF.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintH606mS4, {from: accounts[0]});

		await expect(BTCParamV2bh2dWF.setParamSetter.call(addressVYwXY7c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2WhtmZQr = await BTCParamV2.new({from: accounts[3]});
		const uintqqEfDo = BigInt("1522")
		const uintOclApZE = BigInt("1837")
		const uintIruC3Rt = BigInt("1078")
		const uintsQLJtBr = BigInt("915")
		const uint256G3StFdP = await BTCParamV2WhtmZQr.btcPrice.call({from: accounts[2]});
		const uint256LCIGJQs = await BTCParamV2WhtmZQr.setBtcNetDiff.call(uintqqEfDo, {from: accounts[4]});
		const uint256qLuPSU8 = await BTCParamV2WhtmZQr.setBtcNetDiff.call(uintOclApZE, {from: accounts[3]});
		const uint256hCzBb00 = await BTCParamV2WhtmZQr.setBtcBlockReward.call(uintIruC3Rt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YCPD02w = await BTCParamV2WhtmZQr.setBtcTxFeeRewardRate.call(uintsQLJtBr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256G3StFdP, BigInt("0"))
		await expect(BTCParamV2WhtmZQr.setBtcNetDiff.call(uintqqEfDo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2iynMzH7 = await BTCParamV2.new({from: accounts[5]});
		const uint256VbFo0su = await BTCParamV2iynMzH7.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		await BTCParamV2iynMzH7.onlyParamSetter.call({from: accounts[0]});
		await BTCParamV2iynMzH7.updateBtcPrice.call({from: accounts[2]});

		await expect(BTCParamV2iynMzH7.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2iynMzH7 = await BTCParamV2.new({from: accounts[5]});
		const boolZa6D1Dg = true
		const addressqJHGgfW = "0x0000000000000000000000000000000000000001"
		const uinttGgLgJV = BigInt("1294")
		const uintOaIo8vx = BigInt("1285")
		const addressfi7Zbux = accounts[1]
		const addressDHQwBlG = accounts[3]
		const uint256wYDuH8L = await BTCParamV2iynMzH7.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const addressBlyreue = await BTCParamV2iynMzH7.initialize.call(addressDHQwBlG, addressfi7Zbux, uintOaIo8vx, uinttGgLgJV, addressqJHGgfW, boolZa6D1Dg, {from: accounts[4]});
		await BTCParamV2iynMzH7.onlyParamSetter.call({from: accounts[0]});

		assert.equal(uint256wYDuH8L, BigInt("0"))
		await expect(BTCParamV2iynMzH7.initialize.call(addressDHQwBlG, addressfi7Zbux, uintOaIo8vx, uinttGgLgJV, addressqJHGgfW, boolZa6D1Dg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
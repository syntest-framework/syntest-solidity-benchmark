const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2yDbgwOy = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYHfo8v8 = BigInt("1068")
		const addressxmv69fE = "0x0000000000000000000000000000000000000001"
		const uintCrNrc7l = BigInt("883")
		const addressvxvrT6K = accounts[4]
		const uint256VS8yHJf = await BTCParamV2yDbgwOy.setBtcTxFeeRewardRate.call(uintYHfo8v8, {from: accounts[2]});
		const booleSa49Sa = await BTCParamV2yDbgwOy.removeListener.call(addressxmv69fE, {from: accounts[0]});
		const uint256HgE0uym = await BTCParamV2yDbgwOy.setBtcTxFeeRewardRate.call(uintCrNrc7l, {from: "0x0000000000000000000000000000000000000001"});
		const addressfz9xDPu = await BTCParamV2yDbgwOy.addListener.call(addressvxvrT6K, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2SdguQoQ = await BTCParamV2.new({from: accounts[1]});
		const uintquL1lem = BigInt("1011")
		const addressmp5ZWR = accounts[2]
//		const uint256XdrBqgd = await BTCParamV2SdguQoQ.setBtcBlockReward.call(uintquL1lem, {from: accounts[4]});
//		const boolV20V5F7 = await BTCParamV2SdguQoQ.removeListener.call(addressmp5ZWR, {from: accounts[1]});
//		await BTCParamV2SdguQoQ.onlyOwner.call({from: accounts[0]});
//		const uint256EReGTAr = await BTCParamV2SdguQoQ.btcPrice.call({from: accounts[1]});

		await expect(BTCParamV2SdguQoQ.setBtcBlockReward.call(uintquL1lem, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2itYCGhM = await BTCParamV2.new({from: accounts[4]});
//		await BTCParamV2itYCGhM.onlyParamSetter.call({from: accounts[0]});
//		await BTCParamV2itYCGhM.onlyParamSetter.call({from: accounts[5]});
//		const uint256H2mRAgU = await BTCParamV2itYCGhM.btcPrice.call({from: accounts[0]});
//		await BTCParamV2itYCGhM.onlyOwner.call({from: accounts[0]});

		await expect(BTCParamV2itYCGhM.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2aMbkbf = await BTCParamV2.new({from: accounts[3]});
		const addressJOFrTlV = accounts[2]
		const addressU3X0p3a = accounts[2]
//		const addresseYeg5EB = await BTCParamV2aMbkbf.transferOwnership.call(addressJOFrTlV, {from: accounts[0]});
//		const boolXgVqJ51 = await BTCParamV2aMbkbf.removeListener.call(addressU3X0p3a, {from: accounts[4]});
//		await BTCParamV2aMbkbf.updateBtcPrice.call({from: accounts[4]});

		await expect(BTCParamV2aMbkbf.transferOwnership.call(addressJOFrTlV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2MoAD6Mu = await BTCParamV2.new({from: accounts[2]});
		const addresseHkKOHA = accounts[3]
		const addresscCs60vv = accounts[2]
		const addressdSFI9cv = accounts[1]
		const uint256Xtm4y3p = await BTCParamV2MoAD6Mu.btcPrice.call({from: accounts[4]});
//		const addressjOPF4an = await BTCParamV2MoAD6Mu.setParamSetter.call(addresseHkKOHA, {from: accounts[5]});
//		const addressbhjBfME = await BTCParamV2MoAD6Mu.addListener.call(addresscCs60vv, {from: accounts[2]});
//		const boolFhhYgn = await BTCParamV2MoAD6Mu.removeListener.call(addressdSFI9cv, {from: accounts[0]});

		assert.equal(uint256Xtm4y3p, BigInt("0"))
		await expect(BTCParamV2MoAD6Mu.setParamSetter.call(addresseHkKOHA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2jqSius = await BTCParamV2.new({from: accounts[3]});
//		const uint256Xdd5KpZ = await BTCParamV2jqSius.btcIncomePerTPerSecInWei.call({from: accounts[3]});
//		const uint256u92y6Rx = await BTCParamV2jqSius.btcIncomePerTPerSecInWei.call({from: accounts[5]});

		await expect(BTCParamV2jqSius.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2oDgGPcx = await BTCParamV2.new({from: accounts[4]});
		const boolPqk8hF7 = true
		const addresspINnK60 = accounts[5]
		const uintwCSLhJS = BigInt("1416")
		const uintxFdbgQl = BigInt("1531")
		const addressUdPtGTN = accounts[1]
		const addressXH9yeLU = accounts[3]
		const addresscUgaHI0 = accounts[1]
//		const addressDYhwKgg = await BTCParamV2oDgGPcx.initialize.call(addressXH9yeLU, addressUdPtGTN, uintxFdbgQl, uintwCSLhJS, addresspINnK60, boolPqk8hF7, {from: accounts[0]});
//		const uint256GXn7Jgh = await BTCParamV2oDgGPcx.btcPrice.call({from: accounts[3]});
//		const addressrBwYOtV = await BTCParamV2oDgGPcx.transferOwnership.call(addresscUgaHI0, {from: accounts[1]});

		await expect(BTCParamV2oDgGPcx.initialize.call(addressXH9yeLU, addressUdPtGTN, uintxFdbgQl, uintwCSLhJS, addresspINnK60, boolPqk8hF7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
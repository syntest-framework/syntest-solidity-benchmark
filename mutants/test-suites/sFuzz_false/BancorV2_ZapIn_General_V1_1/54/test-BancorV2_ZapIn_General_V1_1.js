const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintg7HmXnL = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintg7HmXnL, {from: accounts[4]});
		const addressVJ1Pw8v = accounts[0]
//		await BancorV2_ZapIn_General_V1_1YPhqXnL.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressVJ1Pw8v, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAvnH67 = BigInt("924")
		const BancorV2_ZapIn_General_V1_1NBTRoR8 = await BancorV2_ZapIn_General_V1_1.new(uintAvnH67, {from: accounts[3]});
		const addressylUCKop = accounts[0]
//		const addressFJy1Ekj = await BancorV2_ZapIn_General_V1_1NBTRoR8.transferOwnership.call(addressylUCKop, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1NBTRoR8.toggleContractActive.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1NBTRoR8.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1NBTRoR8.transferOwnership.call(addressylUCKop, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintCMBsWoC = BigInt("1588")
		const BancorV2_ZapIn_General_V1_1zbsJm9Y = await BancorV2_ZapIn_General_V1_1.new(uintCMBsWoC, {from: accounts[1]});
		const uintxXse1wP = BigInt("1075")
		const addressBnjzQm = accounts[4]
		const uint16j8bBdm = await BancorV2_ZapIn_General_V1_1zbsJm9Y.set_new_goodwill.call(uintxXse1wP, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1zbsJm9Y.stopInEmergency.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1zbsJm9Y.onlyOwner.call({from: accounts[1]});
//		const addressbtTC06I = await BancorV2_ZapIn_General_V1_1zbsJm9Y.transferOwnership.call(addressBnjzQm, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1zbsJm9Y.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintW2QtOG = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintW2QtOG, {from: accounts[4]});
		const addressJJS7PpG = accounts[1]
		const addressWbG573 = await BancorV2_ZapIn_General_V1_1YPhqXnL.owner.call({from: accounts[3]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressJJS7PpG, {from: accounts[1]});

		assert.equal(addressWbG573, 0x233Ad008D687fb19E688a5aeA81C7a8420A78cdb)
		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressJJS7PpG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMEgQLC7 = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintMEgQLC7, {from: accounts[4]});
		const addressIP63KF5 = accounts[1]
//		await BancorV2_ZapIn_General_V1_1YPhqXnL.renounceOwnership.call({from: accounts[4]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressIP63KF5, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYK83Qd7 = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintYK83Qd7, {from: accounts[4]});
		const bytescCfZET = "0x161508010e150a17040c040e1614"
		const addressmFJD0xR = accounts[5]
		const addressIYcfOP0 = accounts[4]
		const uintfdUgOYz = BigInt("332")
		const uintw0R6gVt = BigInt("908")
		const addressErhXNCl = accounts[0]
		const addressBwjaMKx = accounts[0]
		const addressV0QQmGt = accounts[1]
		const addressfh7zOd = accounts[1]
		const boolgxd5faY = await BancorV2_ZapIn_General_V1_1YPhqXnL.isOwner.call({from: accounts[1]});
//		const uint256frHqNlV = await BancorV2_ZapIn_General_V1_1YPhqXnL.ZapInSingleSided.call(addressV0QQmGt, addressBwjaMKx, addressErhXNCl, uintw0R6gVt, uintfdUgOYz, addressIYcfOP0, addressmFJD0xR, bytescCfZET, {from: accounts[1]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressfh7zOd, {from: accounts[1]});

		assert.equal(boolgxd5faY, false)
		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.ZapInSingleSided.call(addressV0QQmGt, addressBwjaMKx, addressErhXNCl, uintw0R6gVt, uintfdUgOYz, addressIYcfOP0, addressmFJD0xR, bytescCfZET, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXO9pLmd = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintXO9pLmd, {from: accounts[4]});
		const addresssZ7QExP = accounts[2]
//		await BancorV2_ZapIn_General_V1_1YPhqXnL.toggleContractActive.call({from: accounts[4]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addresssZ7QExP, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintScYrWv1 = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintScYrWv1, {from: accounts[4]});
		const addressibL5sn8 = accounts[5]
		const addressOluRyxA = accounts[1]
//		const addressNNHl71 = await BancorV2_ZapIn_General_V1_1YPhqXnL.inCaseTokengetsStuck.call(addressibL5sn8, {from: accounts[4]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressOluRyxA, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.inCaseTokengetsStuck.call(addressibL5sn8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA0lGJDV = BigInt("1076")
		const BancorV2_ZapIn_General_V1_1YPhqXnL = await BancorV2_ZapIn_General_V1_1.new(uintA0lGJDV, {from: accounts[4]});
		const addressNeC9mV0 = accounts[1]
//		await BancorV2_ZapIn_General_V1_1YPhqXnL.withdraw.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1YPhqXnL.toggleContractActive.call({from: accounts[4]});
//		const addressyA60tmE = await BancorV2_ZapIn_General_V1_1YPhqXnL.transferOwnership.call(addressNeC9mV0, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YPhqXnL.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDUUUvOE = BigInt("348")
		const BancorV2_ZapIn_General_V1_1tznomLH = await BancorV2_ZapIn_General_V1_1.new(uintDUUUvOE, {from: "0x0000000000000000000000000000000000000001"});
		const addressp9jc1jR = accounts[4]
		const addressZAKyzm9 = accounts[2]
		await BancorV2_ZapIn_General_V1_1tznomLH.renounceOwnership.call({from: accounts[3]});
		const addresspPgV59z = await BancorV2_ZapIn_General_V1_1tznomLH.inCaseTokengetsStuck.call(addressp9jc1jR, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1tznomLH.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1tznomLH.nonReentrant.call({from: accounts[2]});
		const addressm5o4bhB = await BancorV2_ZapIn_General_V1_1tznomLH.transferOwnership.call(addressZAKyzm9, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1tznomLH.nonReentrant.call({from: accounts[3]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiJcGcMC = BigInt("1191")
		const BancorV2_ZapIn_General_V1_1J932QH8 = await BancorV2_ZapIn_General_V1_1.new(uintiJcGcMC, {from: accounts[3]});
		const addresshiB3Zmk = accounts[0]
		const uintxHdPqB = BigInt("884")
		const byteqpCdda1 = "0x080a05050b0104"
		const addressOLYt9y = accounts[0]
		const addressy9dm4Zp = accounts[2]
		const uintheucbzj = BigInt("1452")
		const uintIG7JyTp = BigInt("1909")
		const addressqJlIO2m = accounts[0]
		const addressir5f4bV = accounts[5]
		const addressBkdq7l2 = accounts[0]
		const addressqXJu4r1 = await BancorV2_ZapIn_General_V1_1J932QH8.transferOwnership.call(addresshiB3Zmk, {from: accounts[3]});
//		const uint16OCaOjzb = await BancorV2_ZapIn_General_V1_1J932QH8.set_new_goodwill.call(uintxHdPqB, {from: accounts[5]});
//		const uint256f2dCU8A = await BancorV2_ZapIn_General_V1_1J932QH8.ZapInSingleSided.call(addressBkdq7l2, addressir5f4bV, addressqJlIO2m, uintIG7JyTp, uintheucbzj, addressy9dm4Zp, addressOLYt9y, byteqpCdda1, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1J932QH8.set_new_goodwill.call(uintxHdPqB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
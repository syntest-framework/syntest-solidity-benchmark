const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsHF8hIC = await SSTRewards.new({from: accounts[5]});
		const addressMEpcLld = accounts[0]
		const uintsLsO1WG = BigInt("132")
		await SSTRewardsHF8hIC.checkStart.call({from: accounts[3]});
		const addressuPDrUyV = await SSTRewardsHF8hIC.updateReward.call(addressMEpcLld, {from: accounts[5]});
		const uint256RCcudhA = await SSTRewardsHF8hIC.stake.call(uintsLsO1WG, {from: accounts[1]});
		await SSTRewardsHF8hIC.getReward.call({from: accounts[0]});
		await SSTRewardsHF8hIC.checkStart.call({from: accounts[2]});

		await expect(SSTRewardsHF8hIC.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsVR2MDBt = await SSTRewards.new({from: accounts[1]});
		const addressMDp165f = "0x0000000000000000000000000000000000000001"
		const uintvDWYuar = BigInt("934")
		const uint256CvMRT05 = await SSTRewardsVR2MDBt.earned.call(addressMDp165f, {from: accounts[0]});
		const uint256xx159Xj = await SSTRewardsVR2MDBt.withdraw.call(uintvDWYuar, {from: accounts[5]});

		assert.equal(uint256CvMRT05, BigInt("0"))
		await expect(SSTRewardsVR2MDBt.withdraw.call(uintvDWYuar, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardscfOJ7Bi = await SSTRewards.new({from: accounts[5]});
		const uintyHNHJK = BigInt("1538")
		const uintL3C1Cs7 = BigInt("1123")
		const addressi9thN9U = accounts[3]
		await SSTRewardscfOJ7Bi.getReward.call({from: accounts[4]});
		const uint256gBJHHeF = await SSTRewardscfOJ7Bi.stake.call(uintyHNHJK, {from: accounts[5]});
		await SSTRewardscfOJ7Bi.getReward.call({from: accounts[0]});
		const uint256mYexADi = await SSTRewardscfOJ7Bi.stake.call(uintL3C1Cs7, {from: accounts[3]});
		const addresstAGfNM5 = await SSTRewardscfOJ7Bi.updateReward.call(addressi9thN9U, {from: accounts[3]});
		await SSTRewardscfOJ7Bi.getReward.call({from: accounts[5]});

		await expect(SSTRewardscfOJ7Bi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsmnIXlRM = await SSTRewards.new({from: accounts[0]});
		const uintkqoVfSI = BigInt("1548")
		const addresskhBrpkb = accounts[3]
		const uintyu9saK5 = BigInt("1364")
		await SSTRewardsmnIXlRM.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jRnc7B = await SSTRewardsmnIXlRM.withdraw.call(uintkqoVfSI, {from: accounts[1]});
		await SSTRewardsmnIXlRM.checkStart.call({from: accounts[1]});
		const uint256cRrjQoY = await SSTRewardsmnIXlRM.balanceOf.call(addresskhBrpkb, {from: accounts[2]});
		const uint256w29K6kF = await SSTRewardsmnIXlRM.stake.call(uintyu9saK5, {from: accounts[3]});

		await expect(SSTRewardsmnIXlRM.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdWt65lp = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint5Rl6Dw = BigInt("1976")
		const uintq6trxN = BigInt("1390")
		const uint2566cgyVg = await SSTRewardsdWt65lp.withdraw.call(uint5Rl6Dw, {from: accounts[1]});
		const uint256Q0OhyC7 = await SSTRewardsdWt65lp.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256gIuulP2 = await SSTRewardsdWt65lp.withdraw.call(uintq6trxN, {from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewards6AbJvp = await SSTRewards.new({from: accounts[0]});
		const uintnMSljNq = BigInt("98")
		const uintB6gfg27 = BigInt("65")
		const addressf0HqUMI = accounts[3]
		const uint256Ky7Lf6d = await SSTRewards6AbJvp.notifyRewardAmount.call(uintnMSljNq, {from: accounts[4]});
		const uint256tUBEEJ1 = await SSTRewards6AbJvp.notifyRewardAmount.call(uintB6gfg27, {from: accounts[1]});
		const uint256Z1Lq6zp = await SSTRewards6AbJvp.balanceOf.call(addressf0HqUMI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewards6AbJvp.notifyRewardAmount.call(uintnMSljNq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
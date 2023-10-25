const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtMXA1un = await SLTDETHlpReward.new({from: accounts[0]});
		const uintgJynguA = BigInt("1571")
		const uintdoMJmKX = BigInt("1466")
//		await SLTDETHlpRewardtMXA1un.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256o5QAD1 = await SLTDETHlpRewardtMXA1un.notifyRewardAmount.call(uintgJynguA, {from: accounts[0]});
//		const uint256knRfQjg = await SLTDETHlpRewardtMXA1un.stake.call(uintdoMJmKX, {from: accounts[0]});
//		await SLTDETHlpRewardtMXA1un.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpRewardtMXA1un.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardOlzm9Ze = await SLTDETHlpReward.new({from: accounts[1]});
		const uintafJtiPg = BigInt("1130")
		const uintA7aXCId = BigInt("1620")
		const addressskdOSE = await SLTDETHlpRewardOlzm9Ze.owner.call({from: accounts[1]});
//		const uint256nw9Sk1W = await SLTDETHlpRewardOlzm9Ze.remainingReward.call({from: accounts[0]});
//		const uint256lszP6Z = await SLTDETHlpRewardOlzm9Ze.withdraw.call(uintafJtiPg, {from: accounts[0]});
//		const uint256tV5T4VF = await SLTDETHlpRewardOlzm9Ze.withdraw.call(uintA7aXCId, {from: accounts[1]});

		assert.equal(addressskdOSE, 0x5009a30630F91579D646E88005ee93C01A9aa649)
		await expect(SLTDETHlpRewardOlzm9Ze.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMZ13fIj = await SLTDETHlpReward.new({from: accounts[2]});
		const uintCXbfpJU = BigInt("1624")
		const addressdrRQvrw = accounts[1]
		const uinty5jCq0E = BigInt("183")
//		const uint256zM49zjl = await SLTDETHlpRewardMZ13fIj.notifyRewardAmount.call(uintCXbfpJU, {from: accounts[0]});
//		const boolDIqLSCt = await SLTDETHlpRewardMZ13fIj.isOwner.call({from: accounts[4]});
//		await SLTDETHlpRewardMZ13fIj.exit.call({from: accounts[1]});
//		const uint256y0ZQdLj = await SLTDETHlpRewardMZ13fIj.balanceOf.call(addressdrRQvrw, {from: accounts[5]});
//		const uint256CW42ld = await SLTDETHlpRewardMZ13fIj.stake.call(uinty5jCq0E, {from: accounts[5]});
//		await SLTDETHlpRewardMZ13fIj.onlyOwner.call({from: accounts[2]});

		await expect(SLTDETHlpRewardMZ13fIj.notifyRewardAmount.call(uintCXbfpJU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrZH2KVG = await SLTDETHlpReward.new({from: accounts[2]});
		const addressxd14alZ = await SLTDETHlpRewardrZH2KVG.owner.call({from: accounts[2]});
		const uint256MzumcYG = await SLTDETHlpRewardrZH2KVG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressxd14alZ, 0xaA6255712A18B46bF6d840b83800A11C38766a5E)
		assert.equal(uint256MzumcYG, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLT65KHW = await SLTDETHlpReward.new({from: accounts[0]});
		const uintho3kmpz = BigInt("1612")
		const uintbIOD3p8 = BigInt("1103")
		const addressRiHJfA = accounts[1]
//		const uint256tQUdEoC = await SLTDETHlpRewardLT65KHW.stake.call(uintho3kmpz, {from: accounts[2]});
//		const uint256YSI94Zh = await SLTDETHlpRewardLT65KHW.notifyRewardAmount.call(uintbIOD3p8, {from: accounts[2]});
//		const uint256YGGBv6P = await SLTDETHlpRewardLT65KHW.balanceOf.call(addressRiHJfA, {from: accounts[3]});

		await expect(SLTDETHlpRewardLT65KHW.stake.call(uintho3kmpz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardotLMUZn = await SLTDETHlpReward.new({from: accounts[4]});
		const boolcoEIn2n = await SLTDETHlpRewardotLMUZn.isOwner.call({from: accounts[0]});
		const uint256WIdqRtK = await SLTDETHlpRewardotLMUZn.rewardPerToken.call({from: accounts[0]});
//		await SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]});

		assert.equal(boolcoEIn2n, false)
		assert.equal(uint256WIdqRtK, BigInt("0"))
		await expect(SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrZH2KVG = await SLTDETHlpReward.new({from: accounts[2]});
		const addressi5jwiK = accounts[1]
		const addressxd14alZ = await SLTDETHlpRewardrZH2KVG.owner.call({from: accounts[2]});
//		await SLTDETHlpRewardrZH2KVG.onlyOwner.call({from: accounts[1]});
//		const addressZwNmaog = await SLTDETHlpRewardrZH2KVG.updateReward.call(addressi5jwiK, {from: accounts[4]});
//		const uint256MzumcYG = await SLTDETHlpRewardrZH2KVG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressxd14alZ, 0xaA6255712A18B46bF6d840b83800A11C38766a5E)
		await expect(SLTDETHlpRewardrZH2KVG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLT65KHW = await SLTDETHlpReward.new({from: accounts[0]});
		const uinttc4ylKA = BigInt("1398")
		const uintyoHYzoG = BigInt("1876")
		const uintjOo4OwA = BigInt("1103")
		const addressaihHMhZ = accounts[1]
//		const uint256fuVBXDB = await SLTDETHlpRewardLT65KHW.withdraw.call(uinttc4ylKA, {from: accounts[2]});
//		const uint256tQUdEoC = await SLTDETHlpRewardLT65KHW.stake.call(uintyoHYzoG, {from: accounts[2]});
//		const uint256YSI94Zh = await SLTDETHlpRewardLT65KHW.notifyRewardAmount.call(uintjOo4OwA, {from: accounts[2]});
//		const uint256YGGBv6P = await SLTDETHlpRewardLT65KHW.balanceOf.call(addressaihHMhZ, {from: accounts[3]});

		await expect(SLTDETHlpRewardLT65KHW.withdraw.call(uinttc4ylKA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrZH2KVG = await SLTDETHlpReward.new({from: accounts[2]});
//		await SLTDETHlpRewardrZH2KVG.exit.call({from: accounts[4]});
//		const uint256wm8gZjB = await SLTDETHlpRewardrZH2KVG.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256MzumcYG = await SLTDETHlpRewardrZH2KVG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardrZH2KVG.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIb8smK = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnJSBbBY = accounts[2]
		const uintEVIsrLZ = BigInt("583")
		const uintfY2bA3 = BigInt("1205")
		const addressqBkk4SP = await SLTDETHlpRewardIb8smK.setRewardDistribution.call(addressnJSBbBY, {from: accounts[5]});
		const uint256iO9QHSG = await SLTDETHlpRewardIb8smK.withdraw.call(uintEVIsrLZ, {from: accounts[0]});
		await SLTDETHlpRewardIb8smK.getReward.call({from: accounts[4]});
		await SLTDETHlpRewardIb8smK.exit.call({from: accounts[4]});
		const uint256hvF16ZX = await SLTDETHlpRewardIb8smK.setStartTime.call(uintfY2bA3, {from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLT65KHW = await SLTDETHlpReward.new({from: accounts[0]});
		const uintsKKEj6 = BigInt("1116")
		const uintGSMfODs = BigInt("1567")
		const uint256ZgF3AwU = await SLTDETHlpRewardLT65KHW.notifyRewardAmount.call(uintsKKEj6, {from: accounts[0]});
//		const uint256tQUdEoC = await SLTDETHlpRewardLT65KHW.stake.call(uintGSMfODs, {from: accounts[2]});

		await expect(SLTDETHlpRewardLT65KHW.stake.call(uintGSMfODs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLT65KHW = await SLTDETHlpReward.new({from: accounts[0]});
		const addressnfjxX6B = accounts[2]
		const uintKgfebF3 = BigInt("1590")
		const addressNGyyqHw = await SLTDETHlpRewardLT65KHW.setRewardDistribution.call(addressnfjxX6B, {from: accounts[0]});
//		const uint256tQUdEoC = await SLTDETHlpRewardLT65KHW.stake.call(uintKgfebF3, {from: accounts[2]});

		await expect(SLTDETHlpRewardLT65KHW.stake.call(uintKgfebF3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardotLMUZn = await SLTDETHlpReward.new({from: accounts[4]});
		const uintUUVayeh = BigInt("1623")
		const boolcoEIn2n = await SLTDETHlpRewardotLMUZn.isOwner.call({from: accounts[0]});
		const uint256nLHTiiS = await SLTDETHlpRewardotLMUZn.setStartTime.call(uintUUVayeh, {from: accounts[4]});
//		await SLTDETHlpRewardotLMUZn.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]});

		assert.equal(boolcoEIn2n, false)
		await expect(SLTDETHlpRewardotLMUZn.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw3BxOq = await SLTDETHlpReward.new({from: accounts[3]});
		const addresskCBtJoB = accounts[1]
		const addressC7LcZt = accounts[0]
		const addressdARUr1I = accounts[2]
		const addressqbkCNRv = accounts[4]
		const addressirgeZDg = await SLTDETHlpRewardpw3BxOq.transferOwnership.call(addresskCBtJoB, {from: accounts[3]});
//		const uint256Qhr2l51 = await SLTDETHlpRewardpw3BxOq.remainingReward.call({from: accounts[0]});
//		const uint256k4T5amA = await SLTDETHlpRewardpw3BxOq.earned.call(addressC7LcZt, {from: accounts[5]});
//		const addressoUTTXq1 = await SLTDETHlpRewardpw3BxOq.setStakeAddress.call(addressdARUr1I, {from: accounts[1]});
//		const addresscFh1NfU = await SLTDETHlpRewardpw3BxOq.setRewardDistribution.call(addressqbkCNRv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardpw3BxOq.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardotLMUZn = await SLTDETHlpReward.new({from: accounts[4]});
		const addressHfjZLO = accounts[4]
//		await SLTDETHlpRewardotLMUZn.renounceOwnership.call({from: accounts[4]});
//		await SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]});
//		const uint256jPrtdfx = await SLTDETHlpRewardotLMUZn.earned.call(addressHfjZLO, {from: accounts[4]});

		await expect(SLTDETHlpRewardotLMUZn.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardotLMUZn = await SLTDETHlpReward.new({from: accounts[4]});
		const addressuXQa7VJ = "0x0000000000000000000000000000000000000001"
		const addressk7d9UvO = accounts[3]
		const addressTSJZpoG = await SLTDETHlpRewardotLMUZn.setStakeAddress.call(addressuXQa7VJ, {from: accounts[4]});
		const uint2567emXjd = await SLTDETHlpRewardotLMUZn.balanceOf.call(addressk7d9UvO, {from: accounts[4]});
//		await SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]});

		assert.equal(uint2567emXjd, BigInt("0"))
		await expect(SLTDETHlpRewardotLMUZn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
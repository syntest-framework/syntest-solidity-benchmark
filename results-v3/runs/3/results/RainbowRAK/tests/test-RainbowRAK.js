const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKHEwws7q = await RainbowRAK.new({from: accounts[3]});
		const uintyoE6K0l = BigInt("585")
		const uint256so2fGGK = await RainbowRAKHEwws7q.notifyRewardAmount.call(uintyoE6K0l, {from: accounts[1]});
		const uint256qsiTp40 = await RainbowRAKHEwws7q.rewardPerToken.call({from: accounts[2]});
		const addressarrayMGhxYBD = await RainbowRAKHEwws7q.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKHEwws7q.notifyRewardAmount.call(uintyoE6K0l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLtmWEUy = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressae5kLTB = accounts[1]
		const uintIbjaXAF = BigInt("86")
		const addressybFN2LQ = accounts[0]
		const uint256NElIIZ6 = await RainbowRAKLtmWEUy.getCurrentRewardReserve.call({from: accounts[5]});
		const addressyhDuQW5 = await RainbowRAKLtmWEUy.updateReward.call(addressae5kLTB, {from: accounts[4]});
		const uint256j0rrmv = await RainbowRAKLtmWEUy.stake.call(uintIbjaXAF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fVQ5ZLk = await RainbowRAKLtmWEUy.earned.call(addressybFN2LQ, {from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKT7bF9l9 = await RainbowRAK.new({from: accounts[0]});
		const addressRF9Ttr = accounts[0]
		const boolN0oZ2kp = await RainbowRAKT7bF9l9.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressO7kptAr = await RainbowRAKT7bF9l9.updateReward.call(addressRF9Ttr, {from: accounts[1]});
		const addressarrayJasOl28 = await RainbowRAKT7bF9l9.getCommunity.call({from: accounts[2]});

		assert.equal(boolN0oZ2kp, false)
		await expect(RainbowRAKT7bF9l9.updateReward.call(addressRF9Ttr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKENshp5r = await RainbowRAK.new({from: accounts[0]});
		const uintcveovpc = BigInt("1325")
		const uintr0oItt0 = BigInt("889")
		const uint256kuDH3yu = await RainbowRAKENshp5r.unstake.call(uintcveovpc, {from: accounts[2]});
		const uint256yRz1BIz = await RainbowRAKENshp5r.notifyRewardAmount.call(uintr0oItt0, {from: accounts[1]});

		await expect(RainbowRAKENshp5r.unstake.call(uintcveovpc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKN4MlxES = await RainbowRAK.new({from: accounts[4]});
		const address6mCqxX = accounts[5]
		const uint256lmx5bj9 = await RainbowRAKN4MlxES.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256fpmIum = await RainbowRAKN4MlxES.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressneBy6j = await RainbowRAKN4MlxES.updateReward.call(address6mCqxX, {from: accounts[3]});
		const addressarrayJjyXw5W = await RainbowRAKN4MlxES.getCommunity.call({from: accounts[0]});

		assert.equal(uint256fpmIum, BigInt("0"))
		assert.equal(uint256lmx5bj9, BigInt("0"))
		await expect(RainbowRAKN4MlxES.updateReward.call(address6mCqxX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMxwiuWT = await RainbowRAK.new({from: accounts[0]});
		const addressqCLdIXb = accounts[2]
		await RainbowRAKMxwiuWT.claimRewards.call({from: accounts[3]});
		const uint256mPvHiMI = await RainbowRAKMxwiuWT.getCurrentRewardReserve.call({from: accounts[5]});
		const boolOUEl7Ob = await RainbowRAKMxwiuWT.isOwner.call({from: accounts[3]});
		const addresshcJL4BS = await RainbowRAKMxwiuWT.updateReward.call(addressqCLdIXb, {from: accounts[0]});
		const boolhgxLa3q = await RainbowRAKMxwiuWT.isOwner.call({from: accounts[0]});

		await expect(RainbowRAKMxwiuWT.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKHEwws7q = await RainbowRAK.new({from: accounts[3]});
		const uintWGfUrN = BigInt("597")
		await RainbowRAKHEwws7q.exit.call({from: accounts[3]});
		const addressarrayNI1KuMW = await RainbowRAKHEwws7q.getCommunity.call({from: accounts[0]});
		const uint256so2fGGK = await RainbowRAKHEwws7q.notifyRewardAmount.call(uintWGfUrN, {from: accounts[1]});
		const addressO2Ah4Q = await RainbowRAKHEwws7q.owner.call({from: accounts[5]});
		const uint256qsiTp40 = await RainbowRAKHEwws7q.rewardPerToken.call({from: accounts[2]});
		const addressarrayMGhxYBD = await RainbowRAKHEwws7q.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKHEwws7q.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKvKAqTqD = await RainbowRAK.new({from: accounts[3]});
		const addressEmnzeUb = accounts[3]
		const uintVQIsQbc = BigInt("2041")
		const uint256mbjBDNG = await RainbowRAKvKAqTqD.earned.call(addressEmnzeUb, {from: accounts[3]});
		const addressnd2Curd = await RainbowRAKvKAqTqD.owner.call({from: accounts[2]});
		const uint256oNaIBP = await RainbowRAKvKAqTqD.unstake.call(uintVQIsQbc, {from: accounts[2]});
		await RainbowRAKvKAqTqD.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressnd2Curd, 0x83364eb396aFC790c0Cd95D640B4Bd5bb199CB85)
		assert.equal(uint256mbjBDNG, BigInt("0"))
		await expect(RainbowRAKvKAqTqD.unstake.call(uintVQIsQbc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKENshp5r = await RainbowRAK.new({from: accounts[0]});
		const uintNLxOfAH = BigInt("1301")
		const uintpiKq7o5 = BigInt("1400")
		const addressarrayc40Pgdz = await RainbowRAKENshp5r.getCommunity.call({from: accounts[0]});
		const uint256kuDH3yu = await RainbowRAKENshp5r.unstake.call(uintNLxOfAH, {from: accounts[2]});
		const uint256Y2LyzP9 = await RainbowRAKENshp5r.unstake.call(uintpiKq7o5, {from: accounts[5]});

		assert.equal(addressarrayc40Pgdz, )
		await expect(RainbowRAKENshp5r.unstake.call(uintNLxOfAH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKvzjq29M = await RainbowRAK.new({from: accounts[3]});
		const addressfuWedUY = accounts[4]
		const boolInK3OWc = await RainbowRAKvzjq29M.isOwner.call({from: accounts[1]});
		const addressJ6e9Ion = await RainbowRAKvzjq29M.transferOwnership.call(addressfuWedUY, {from: accounts[3]});

		assert.equal(boolInK3OWc, false)
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKbuitPu2 = await RainbowRAK.new({from: accounts[3]});
		const addresskVj8rTJ = accounts[1]
		const uint9koSnb = BigInt("540")
		const uint256T9hKSlA = await RainbowRAKbuitPu2.getCurrentRewardReserve.call({from: accounts[0]});
		await RainbowRAKbuitPu2.renounceOwnership.call({from: accounts[3]});
		const uint256c0IYxnV = await RainbowRAKbuitPu2.earned.call(addresskVj8rTJ, {from: accounts[5]});
		await RainbowRAKbuitPu2.exit.call({from: accounts[5]});
		await RainbowRAKbuitPu2.renounceOwnership.call({from: accounts[5]});
		const uint256VKWlAy5 = await RainbowRAKbuitPu2.notifyRewardAmount.call(uint9koSnb, {from: accounts[4]});
		await RainbowRAKbuitPu2.renounceOwnership.call({from: accounts[5]});
		const uint256IkpcEqE = await RainbowRAKbuitPu2.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256T9hKSlA, BigInt("0"))
		await expect(RainbowRAKbuitPu2.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDHSK4be = await RainbowRAK.new({from: accounts[2]});
		const uintmymH0fs = BigInt("404")
		const uint256nQHShKP = await RainbowRAKDHSK4be.rewardPerToken.call({from: accounts[3]});
		const uint256eW8EpFV = await RainbowRAKDHSK4be.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256EyBWRBx = await RainbowRAKDHSK4be.stake.call(uintmymH0fs, {from: accounts[3]});

		assert.equal(uint256eW8EpFV, BigInt("0"))
		assert.equal(uint256nQHShKP, BigInt("0"))
		await expect(RainbowRAKDHSK4be.stake.call(uintmymH0fs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
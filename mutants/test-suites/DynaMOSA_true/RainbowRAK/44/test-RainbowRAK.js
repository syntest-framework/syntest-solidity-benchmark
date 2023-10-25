const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKr8NrT99 = await RainbowRAK.new({from: accounts[4]});
		const uintUKEQ3HV = BigInt("160")
		const uintfAvdqab = BigInt("1860")
//		await RainbowRAKr8NrT99.exit.call({from: accounts[3]});
//		const uint2568W1MAl = await RainbowRAKr8NrT99.stake.call(uintUKEQ3HV, {from: accounts[2]});
//		const uint256zRZtIlZ = await RainbowRAKr8NrT99.unstake.call(uintfAvdqab, {from: accounts[0]});

		await expect(RainbowRAKr8NrT99.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDMUUYGC = await RainbowRAK.new({from: accounts[4]});
		const uint256CDYDf8t = await RainbowRAKDMUUYGC.getCurrentRewardReserve.call({from: accounts[1]});
		const addressarrayfPJKQ66 = await RainbowRAKDMUUYGC.getCommunity.call({from: accounts[3]});
//		await RainbowRAKDMUUYGC.exit.call({from: accounts[5]});
//		const uint256pgtLQVN = await RainbowRAKDMUUYGC.rewardPerToken.call({from: accounts[3]});
//		const uint256YGievgq = await RainbowRAKDMUUYGC.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(addressarrayfPJKQ66, )
		assert.equal(uint256CDYDf8t, BigInt("0"))
		await expect(RainbowRAKDMUUYGC.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK64Twl7 = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfbrnT3 = BigInt("487")
		const uintU9GIhsB = BigInt("1182")
		const uint256POmqul7 = await RainbowRAK64Twl7.notifyRewardAmount.call(uintfbrnT3, {from: accounts[5]});
		const uint256RquvjNP = await RainbowRAK64Twl7.stake.call(uintU9GIhsB, {from: accounts[0]});
		const uint256hSERwR5 = await RainbowRAK64Twl7.getCurrentRewardReserve.call({from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXC5djp = await RainbowRAK.new({from: accounts[5]});
		const addressd6sjjz = accounts[2]
		const addressir9maAW = accounts[0]
		const uintv8co4Y = BigInt("984")
//		const addressS1NcTuI = await RainbowRAKXC5djp.transferOwnership.call(addressd6sjjz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ODEcfoF = await RainbowRAKXC5djp.getCurrentRewardReserve.call({from: accounts[1]});
//		const uint256YxerklX = await RainbowRAKXC5djp.earned.call(addressir9maAW, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKXC5djp.onlyOwner.call({from: accounts[2]});
//		const uint256YO2lFXB = await RainbowRAKXC5djp.unstake.call(uintv8co4Y, {from: accounts[4]});

		await expect(RainbowRAKXC5djp.transferOwnership.call(addressd6sjjz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK5w1eMp = await RainbowRAK.new({from: accounts[2]});
		const uintMqQzdmT = BigInt("391")
		const addresspQRKmSL = accounts[4]
//		await RainbowRAK5w1eMp.claimRewards.call({from: accounts[4]});
//		const uint256GNeCDm5 = await RainbowRAK5w1eMp.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256D1WpEn8 = await RainbowRAK5w1eMp.stake.call(uintMqQzdmT, {from: accounts[4]});
//		const uint256Vy4VaYP = await RainbowRAK5w1eMp.rewardPerToken.call({from: accounts[4]});
//		const uint256DOv0Dol = await RainbowRAK5w1eMp.earned.call(addresspQRKmSL, {from: accounts[1]});

		await expect(RainbowRAK5w1eMp.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOnz2D1M = await RainbowRAK.new({from: accounts[0]});
		const uintXmZYE4U = BigInt("1354")
		const uintYVkzvPw = BigInt("1383")
//		const uint256uNCSoZd = await RainbowRAKOnz2D1M.unstake.call(uintXmZYE4U, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Fw3S9vH = await RainbowRAKOnz2D1M.stake.call(uintYVkzvPw, {from: accounts[1]});

		await expect(RainbowRAKOnz2D1M.unstake.call(uintXmZYE4U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyt5NCa = await RainbowRAK.new({from: accounts[4]});
		const uintLgIrqK = BigInt("68")
		const uintcN9PC03 = BigInt("1362")
		const addressTZbM4JM = accounts[2]
//		const uint256FpqXRsM = await RainbowRAKyt5NCa.stake.call(uintLgIrqK, {from: accounts[0]});
//		const uint256cOqohpn = await RainbowRAKyt5NCa.getCurrentRewardReserve.call({from: accounts[2]});
//		const boolNTGoVDQ = await RainbowRAKyt5NCa.isOwner.call({from: accounts[4]});
//		const uint256qgVrFCC = await RainbowRAKyt5NCa.stake.call(uintcN9PC03, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RtXJ3XM = await RainbowRAKyt5NCa.earned.call(addressTZbM4JM, {from: accounts[5]});

		await expect(RainbowRAKyt5NCa.stake.call(uintLgIrqK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuvZDdCM = await RainbowRAK.new({from: accounts[3]});
		const addressYGIQp0s = accounts[1]
		const uint256dmjw31C = await RainbowRAKuvZDdCM.earned.call(addressYGIQp0s, {from: accounts[2]});
//		await RainbowRAKuvZDdCM.onlyOwner.call({from: accounts[3]});
//		await RainbowRAKuvZDdCM.exit.call({from: accounts[2]});
//		await RainbowRAKuvZDdCM.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256dmjw31C, BigInt("0"))
		await expect(RainbowRAKuvZDdCM.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOnz2D1M = await RainbowRAK.new({from: accounts[0]});
		const uintRC6eTzA = BigInt("1383")
		const addressu52GYTT = await RainbowRAKOnz2D1M.owner.call({from: accounts[1]});
//		const uint256Fw3S9vH = await RainbowRAKOnz2D1M.stake.call(uintRC6eTzA, {from: accounts[1]});

		assert.equal(addressu52GYTT, 0x8410fF0972F3C7c41b09c78757016F8c8492f360)
		await expect(RainbowRAKOnz2D1M.stake.call(uintRC6eTzA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOnz2D1M = await RainbowRAK.new({from: accounts[0]});
		const addressSoabs5M = accounts[4]
		const uintaR3RHAL = BigInt("1357")
		const uintUbyVreZ = BigInt("1383")
		const addressZ2YWMR3 = await RainbowRAKOnz2D1M.transferOwnership.call(addressSoabs5M, {from: accounts[0]});
//		const uint256uNCSoZd = await RainbowRAKOnz2D1M.unstake.call(uintaR3RHAL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Fw3S9vH = await RainbowRAKOnz2D1M.stake.call(uintUbyVreZ, {from: accounts[1]});

		await expect(RainbowRAKOnz2D1M.unstake.call(uintaR3RHAL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOnz2D1M = await RainbowRAK.new({from: accounts[0]});
		const uintimZEYbX = BigInt("1918")
		const uintoTMvhoq = BigInt("548")
//		const uint256qMU6aKy = await RainbowRAKOnz2D1M.notifyRewardAmount.call(uintimZEYbX, {from: accounts[0]});
//		await RainbowRAKOnz2D1M.onlyOwner.call({from: accounts[0]});
//		const uint256uNCSoZd = await RainbowRAKOnz2D1M.unstake.call(uintoTMvhoq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKOnz2D1M.notifyRewardAmount.call(uintimZEYbX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOnz2D1M = await RainbowRAK.new({from: accounts[0]});
		const uintYM4IKqU = BigInt("27")
//		await RainbowRAKOnz2D1M.renounceOwnership.call({from: accounts[0]});
//		const uint256uNCSoZd = await RainbowRAKOnz2D1M.unstake.call(uintYM4IKqU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKOnz2D1M.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
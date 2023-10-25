const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsogOjfiO = await DMONDETHRewards.new({from: accounts[0]});
		const addressBLFELDV = accounts[4]
		const addressKCcGAEC = accounts[3]
		await DMONDETHRewardsogOjfiO.checkStart.call({from: accounts[3]});
		const uint256o8POyFy = await DMONDETHRewardsogOjfiO.balanceOf.call(addressBLFELDV, {from: accounts[4]});
		const addressxqENw13 = await DMONDETHRewardsogOjfiO.setRewardDistribution.call(addressKCcGAEC, {from: accounts[2]});

		await expect(DMONDETHRewardsogOjfiO.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsekdKDYu = await DMONDETHRewards.new({from: accounts[2]});
		const uintD18FMZa = BigInt("1356")
		const uinti7l0TPo = BigInt("444")
		const uint256PYvLDQF = await DMONDETHRewardsekdKDYu.totalSupply.call({from: accounts[3]});
		await DMONDETHRewardsekdKDYu.renounceOwnership.call({from: accounts[5]});
		const uint256PxPLXCB = await DMONDETHRewardsekdKDYu.remainingReward.call({from: accounts[4]});
		const uint256qjdJd50 = await DMONDETHRewardsekdKDYu.setStartTime.call(uintD18FMZa, {from: accounts[1]});
		const uint256MxFxyMn = await DMONDETHRewardsekdKDYu.notifyRewardAmount.call(uinti7l0TPo, {from: accounts[1]});
		await DMONDETHRewardsekdKDYu.exit.call({from: accounts[3]});

		assert.equal(uint256PYvLDQF, BigInt("0"))
		await expect(DMONDETHRewardsekdKDYu.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPgdeW5Q = await DMONDETHRewards.new({from: accounts[0]});
		const uintXJ5nOht = BigInt("1828")
		const uintaz5MaMS = BigInt("529")
		const uintaTEaG0B = BigInt("788")
		const uint256cWZFpoa = await DMONDETHRewardsPgdeW5Q.withdraw.call(uintXJ5nOht, {from: accounts[3]});
		await DMONDETHRewardsPgdeW5Q.checkStart.call({from: accounts[3]});
		await DMONDETHRewardsPgdeW5Q.getReward.call({from: accounts[0]});
		const uint256WnibP4T = await DMONDETHRewardsPgdeW5Q.stake.call(uintaz5MaMS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UoTQjUJ = await DMONDETHRewardsPgdeW5Q.withdraw.call(uintaTEaG0B, {from: accounts[2]});
		const uint256LafgCm2 = await DMONDETHRewardsPgdeW5Q.rewardPerToken.call({from: accounts[0]});

		await expect(DMONDETHRewardsPgdeW5Q.withdraw.call(uintXJ5nOht, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD959boU = await DMONDETHRewards.new({from: accounts[3]});
		const uintt6IrWpS = BigInt("1760")
		const uintQr3KrvG = BigInt("347")
		const uintUKL99jT = BigInt("168")
		const uint256H14PAj8 = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintt6IrWpS, {from: accounts[3]});
		const uint256j28eGbi = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintQr3KrvG, {from: accounts[3]});
		const uint256il0acH = await DMONDETHRewardsD959boU.remainingReward.call({from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyOwner.call({from: accounts[3]});
		const uint256S2mK6XX = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintUKL99jT, {from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsD959boU.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWxXjBSK = await DMONDETHRewards.new({from: accounts[1]});
		const addressZgP2mVY = accounts[4]
		const uint256Pf8CZuV = await DMONDETHRewardsWxXjBSK.totalSupply.call({from: accounts[5]});
		const uint256jlbQQBi = await DMONDETHRewardsWxXjBSK.balanceOf.call(addressZgP2mVY, {from: accounts[4]});
		await DMONDETHRewardsWxXjBSK.getReward.call({from: accounts[1]});

		assert.equal(uint256Pf8CZuV, BigInt("0"))
		assert.equal(uint256jlbQQBi, BigInt("0"))
		await expect(DMONDETHRewardsWxXjBSK.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsahqxg1J = await DMONDETHRewards.new({from: accounts[5]});
		const uintObTwB5q = BigInt("1070")
		const addressYtKhVME = "0x0000000000000000000000000000000000000001"
		const addressJ6BrjgI = accounts[6]
		const addressSmajzNT = accounts[2]
		const uint256aqAJoeE = await DMONDETHRewardsahqxg1J.notifyRewardAmount.call(uintObTwB5q, {from: accounts[4]});
		const uint256eI5sDby = await DMONDETHRewardsahqxg1J.remainingReward.call({from: accounts[0]});
		const addressaVPeUE6 = await DMONDETHRewardsahqxg1J.updateReward.call(addressYtKhVME, {from: accounts[4]});
		const addressbvt93bL = await DMONDETHRewardsahqxg1J.setRewardDistribution.call(addressJ6BrjgI, {from: accounts[3]});
		const addresshsOlgZN = await DMONDETHRewardsahqxg1J.setRewardDistribution.call(addressSmajzNT, {from: accounts[2]});

		await expect(DMONDETHRewardsahqxg1J.notifyRewardAmount.call(uintObTwB5q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPgdeW5Q = await DMONDETHRewards.new({from: accounts[0]});
		const uintqGN9kSK = BigInt("1828")
		const uintru5tgR = BigInt("537")
		const uintsQb4Sz8 = BigInt("788")
		await DMONDETHRewardsPgdeW5Q.exit.call({from: accounts[2]});
		const uint256cWZFpoa = await DMONDETHRewardsPgdeW5Q.withdraw.call(uintqGN9kSK, {from: accounts[3]});
		await DMONDETHRewardsPgdeW5Q.checkStart.call({from: accounts[3]});
		await DMONDETHRewardsPgdeW5Q.getReward.call({from: accounts[0]});
		const uint256WnibP4T = await DMONDETHRewardsPgdeW5Q.stake.call(uintru5tgR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UoTQjUJ = await DMONDETHRewardsPgdeW5Q.withdraw.call(uintsQb4Sz8, {from: accounts[2]});
		const uint256LafgCm2 = await DMONDETHRewardsPgdeW5Q.rewardPerToken.call({from: accounts[0]});

		await expect(DMONDETHRewardsPgdeW5Q.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWxXjBSK = await DMONDETHRewards.new({from: accounts[1]});
		const addressNhdmQaH = accounts[0]
		const addressZY64kY = accounts[5]
		const uint256Pf8CZuV = await DMONDETHRewardsWxXjBSK.totalSupply.call({from: accounts[5]});
		const addressjbrKL7U = await DMONDETHRewardsWxXjBSK.setRewardDistribution.call(addressNhdmQaH, {from: accounts[1]});
		const uint256jlbQQBi = await DMONDETHRewardsWxXjBSK.balanceOf.call(addressZY64kY, {from: accounts[4]});
		await DMONDETHRewardsWxXjBSK.getReward.call({from: accounts[1]});

		assert.equal(uint256Pf8CZuV, BigInt("0"))
		assert.equal(uint256jlbQQBi, BigInt("0"))
		await expect(DMONDETHRewardsWxXjBSK.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD959boU = await DMONDETHRewards.new({from: accounts[3]});
		const uintMtHPmOP = BigInt("1108")
		const uintoiPetY9 = BigInt("1760")
		const uintBwq62On = BigInt("347")
		const addressIh6ZTPh = accounts[4]
		const uintqaqXzwG = BigInt("168")
		const uint256ZiLNhn3 = await DMONDETHRewardsD959boU.stake.call(uintMtHPmOP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H14PAj8 = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintoiPetY9, {from: accounts[3]});
		const uint256j28eGbi = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintBwq62On, {from: accounts[3]});
		await DMONDETHRewardsD959boU.onlyOwner.call({from: accounts[3]});
		const uint256jCHAHlk = await DMONDETHRewardsD959boU.earned.call(addressIh6ZTPh, {from: accounts[1]});
		const uint256S2mK6XX = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintqaqXzwG, {from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsD959boU.stake.call(uintMtHPmOP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD959boU = await DMONDETHRewards.new({from: accounts[3]});
		const uintzo72UYG = BigInt("1108")
		const uintC8Iitu = BigInt("1760")
		const uintGmsCkxI = BigInt("347")
		const addressbidZlbS = accounts[4]
		const uintOofhuOA = BigInt("168")
		const addressoGnSpI = await DMONDETHRewardsD959boU.owner.call({from: accounts[5]});
		const uint256ZiLNhn3 = await DMONDETHRewardsD959boU.stake.call(uintzo72UYG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H14PAj8 = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintC8Iitu, {from: accounts[3]});
		const uint256j28eGbi = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintGmsCkxI, {from: accounts[3]});
		await DMONDETHRewardsD959boU.onlyOwner.call({from: accounts[3]});
		const uint256jCHAHlk = await DMONDETHRewardsD959boU.earned.call(addressbidZlbS, {from: accounts[1]});
		const uint256S2mK6XX = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintOofhuOA, {from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(addressoGnSpI, 0x8D3D252B73a11738e538aad4747D57599C0c5c2c)
		await expect(DMONDETHRewardsD959boU.stake.call(uintzo72UYG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCHt6j2t = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLX4CcXR = accounts[1]
		const uintfG6jYak = BigInt("1647")
		const addressTJ762TN = accounts[4]
		const uintAfFfcEu = BigInt("1144")
		const addressFGOQ9Hq = await DMONDETHRewardsCHt6j2t.transferOwnership.call(addressLX4CcXR, {from: accounts[4]});
		const uint256nzWQhuO = await DMONDETHRewardsCHt6j2t.stake.call(uintfG6jYak, {from: accounts[4]});
		const addresscI1w5LA = await DMONDETHRewardsCHt6j2t.setStakeAddress.call(addressTJ762TN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NDtJGgt = await DMONDETHRewardsCHt6j2t.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gZXkx8l = await DMONDETHRewardsCHt6j2t.stake.call(uintAfFfcEu, {from: accounts[2]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTlz1dPK = await DMONDETHRewards.new({from: accounts[3]});
		const addresswahMyhc = accounts[0]
		await DMONDETHRewardsTlz1dPK.renounceOwnership.call({from: accounts[3]});
		const uint256oW9WBDE = await DMONDETHRewardsTlz1dPK.lastTimeRewardApplicable.call({from: accounts[2]});
		await DMONDETHRewardsTlz1dPK.onlyRewardDistribution.call({from: accounts[3]});
		const addressvx375aK = await DMONDETHRewardsTlz1dPK.setStakeAddress.call(addresswahMyhc, {from: accounts[2]});

		await expect(DMONDETHRewardsTlz1dPK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsogOjfiO = await DMONDETHRewards.new({from: accounts[0]});
		const addressEeOLwPG = "0x0000000000000000000000000000000000000001"
		const uintLJd2kBd = BigInt("789")
		const addressnMda0J = await DMONDETHRewardsogOjfiO.transferOwnership.call(addressEeOLwPG, {from: accounts[0]});
		await DMONDETHRewardsogOjfiO.getReward.call({from: accounts[2]});
		const uint256bTAaEu = await DMONDETHRewardsogOjfiO.totalSupply.call({from: accounts[3]});
		await DMONDETHRewardsogOjfiO.checkStart.call({from: accounts[0]});
		const uint256yTJ9cca = await DMONDETHRewardsogOjfiO.stake.call(uintLJd2kBd, {from: accounts[5]});

		await expect(DMONDETHRewardsogOjfiO.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD959boU = await DMONDETHRewards.new({from: accounts[3]});
		const uintSTAH4yK = BigInt("1760")
		const addresso3PVPDz = accounts[3]
		const uintE1ESlR = BigInt("347")
		const uintKjQHXh2 = BigInt("1167")
		const uintrTvDOWh = BigInt("171")
		const uint256H14PAj8 = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintSTAH4yK, {from: accounts[3]});
		const addressVeV3YOR = await DMONDETHRewardsD959boU.setStakeAddress.call(addresso3PVPDz, {from: accounts[3]});
		const uint256j28eGbi = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintE1ESlR, {from: accounts[3]});
		const uint256tL1n0Y6 = await DMONDETHRewardsD959boU.stake.call(uintKjQHXh2, {from: accounts[2]});
		const uint256il0acH = await DMONDETHRewardsD959boU.remainingReward.call({from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyOwner.call({from: accounts[3]});
		const uint256S2mK6XX = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintrTvDOWh, {from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsD959boU.stake.call(uintKjQHXh2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD959boU = await DMONDETHRewards.new({from: accounts[3]});
		const uintvLHqiRy = BigInt("1760")
		const uintUAKzbuX = BigInt("1910")
		const uintFLUJZU = BigInt("347")
		const uintiBwb3qa = BigInt("178")
		const addressgJNEhAW = accounts[3]
		const uint256H14PAj8 = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintvLHqiRy, {from: accounts[3]});
		const uint256PUC4XXj = await DMONDETHRewardsD959boU.setStartTime.call(uintUAKzbuX, {from: accounts[3]});
		const uint256j28eGbi = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintFLUJZU, {from: accounts[3]});
		const uint256il0acH = await DMONDETHRewardsD959boU.remainingReward.call({from: accounts[0]});
		await DMONDETHRewardsD959boU.onlyOwner.call({from: accounts[3]});
		const uint256S2mK6XX = await DMONDETHRewardsD959boU.notifyRewardAmount.call(uintiBwb3qa, {from: accounts[0]});
		const uint256DMVCSmH = await DMONDETHRewardsD959boU.earned.call(addressgJNEhAW, {from: accounts[4]});
		await DMONDETHRewardsD959boU.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsD959boU.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
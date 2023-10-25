const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqmD5O6D = await DMONDETHRewards.new({from: accounts[0]});
		const addressR9mv1KI = accounts[2]
		const addressTSb9dJL = accounts[3]
//		await DMONDETHRewardsqmD5O6D.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsqmD5O6D.onlyOwner.call({from: accounts[5]});
//		const addressnoGgg6I = await DMONDETHRewardsqmD5O6D.updateReward.call(addressR9mv1KI, {from: accounts[0]});
//		const addressaATGL9g = await DMONDETHRewardsqmD5O6D.updateReward.call(addressTSb9dJL, {from: accounts[4]});

		await expect(DMONDETHRewardsqmD5O6D.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmFvtK9P = await DMONDETHRewards.new({from: accounts[3]});
		const addressCDCxeR7 = accounts[1]
		const uintjlBN7hF = BigInt("574")
		const addressNzo6X2e = accounts[0]
		const uintvAj25g8 = BigInt("1073")
//		const addressf9UHwmU = await DMONDETHRewardsmFvtK9P.setRewardDistribution.call(addressCDCxeR7, {from: accounts[4]});
//		const uint256af9AqQH = await DMONDETHRewardsmFvtK9P.withdraw.call(uintjlBN7hF, {from: accounts[4]});
//		const addresslJDrykB = await DMONDETHRewardsmFvtK9P.updateReward.call(addressNzo6X2e, {from: accounts[4]});
//		const uint256o4iUYsB = await DMONDETHRewardsmFvtK9P.notifyRewardAmount.call(uintvAj25g8, {from: accounts[1]});
//		await DMONDETHRewardsmFvtK9P.onlyOwner.call({from: accounts[0]});

		await expect(DMONDETHRewardsmFvtK9P.setRewardDistribution.call(addressCDCxeR7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszXJ8X8K = await DMONDETHRewards.new({from: accounts[2]});
		const uintto2XuEY = BigInt("2040")
//		await DMONDETHRewardszXJ8X8K.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dc6hTCr = await DMONDETHRewardszXJ8X8K.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardszXJ8X8K.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ijqtS0R = await DMONDETHRewardszXJ8X8K.notifyRewardAmount.call(uintto2XuEY, {from: accounts[2]});

		await expect(DMONDETHRewardszXJ8X8K.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsveuftI0 = await DMONDETHRewards.new({from: accounts[4]});
		const addressGEDtb9z = accounts[3]
		const addressw0CjHD2 = await DMONDETHRewardsveuftI0.owner.call({from: accounts[1]});
//		await DMONDETHRewardsveuftI0.exit.call({from: accounts[3]});
//		const addressmFvg0t = await DMONDETHRewardsveuftI0.transferOwnership.call(addressGEDtb9z, {from: accounts[5]});
//		const uint256Uz4UcTq = await DMONDETHRewardsveuftI0.rewardPerToken.call({from: accounts[4]});
//		const uint256wFLBTot = await DMONDETHRewardsveuftI0.totalSupply.call({from: accounts[0]});

		assert.equal(addressw0CjHD2, 0x4b192113e26ba65e1C83fF979e369F1771CBB327)
		await expect(DMONDETHRewardsveuftI0.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKOfGi36 = await DMONDETHRewards.new({from: accounts[2]});
		const uintrTXSFR = BigInt("565")
		const uint256E07CPXh = await DMONDETHRewardsKOfGi36.rewardPerToken.call({from: accounts[1]});
//		const uint256Y54CX90 = await DMONDETHRewardsKOfGi36.withdraw.call(uintrTXSFR, {from: accounts[0]});
//		const uint256wV1LIGt = await DMONDETHRewardsKOfGi36.lastTimeRewardApplicable.call({from: accounts[1]});
//		await DMONDETHRewardsKOfGi36.onlyRewardDistribution.call({from: accounts[1]});

		assert.equal(uint256E07CPXh, BigInt("0"))
		await expect(DMONDETHRewardsKOfGi36.withdraw.call(uintrTXSFR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsNBbYAuj = await DMONDETHRewards.new({from: accounts[2]});
		const uint1H1Kaa = BigInt("2025")
		const addressAmklqqN = accounts[0]
//		const uint256XRQsyQ = await DMONDETHRewardsNBbYAuj.notifyRewardAmount.call(uint1H1Kaa, {from: accounts[3]});
//		const addresshUOKfIo = await DMONDETHRewardsNBbYAuj.updateReward.call(addressAmklqqN, {from: accounts[1]});

		await expect(DMONDETHRewardsNBbYAuj.notifyRewardAmount.call(uint1H1Kaa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const uintjOvH2k5 = BigInt("90")
		const addressPSdoiXZ = accounts[0]
//		const uint256w0IpvFT = await DMONDETHRewardsAQs8hen.stake.call(uintjOvH2k5, {from: accounts[0]});
//		const uint256gxDcRgU = await DMONDETHRewardsAQs8hen.balanceOf.call(addressPSdoiXZ, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsAQs8hen.stake.call(uintjOvH2k5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCUOpeJl = await DMONDETHRewards.new({from: accounts[1]});
		const addressysGbwER = accounts[3]
		const addressRQPgQNX = accounts[0]
		const uintZ55W5si = BigInt("851")
//		const uint256uGUl7US = await DMONDETHRewardsCUOpeJl.remainingReward.call({from: accounts[1]});
//		await DMONDETHRewardsCUOpeJl.renounceOwnership.call({from: accounts[3]});
//		const addressezAVolT = await DMONDETHRewardsCUOpeJl.setStakeAddress.call(addressysGbwER, {from: accounts[0]});
//		const addressMAWJYDC = await DMONDETHRewardsCUOpeJl.updateReward.call(addressRQPgQNX, {from: accounts[3]});
//		const uint256IG1Feaw = await DMONDETHRewardsCUOpeJl.notifyRewardAmount.call(uintZ55W5si, {from: accounts[1]});

		await expect(DMONDETHRewardsCUOpeJl.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const addressc4Bq9Qp = accounts[3]
		const addresshhhsfvh = accounts[2]
		const uint256bmszeLb = await DMONDETHRewardsAQs8hen.earned.call(addressc4Bq9Qp, {from: accounts[2]});
//		await DMONDETHRewardsAQs8hen.renounceOwnership.call({from: accounts[0]});
//		await DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]});
//		const addresshOpfVMG = await DMONDETHRewardsAQs8hen.transferOwnership.call(addresshhhsfvh, {from: accounts[0]});

		assert.equal(uint256bmszeLb, BigInt("0"))
		await expect(DMONDETHRewardsAQs8hen.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const uint3Fjvmv = BigInt("1304")
		const uint256NlF6ynW = await DMONDETHRewardsAQs8hen.notifyRewardAmount.call(uint3Fjvmv, {from: accounts[0]});
//		await DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
//		await DMONDETHRewardsAQs8hen.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsAQs8hen.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const uintdlL9coY = BigInt("1233")
		const addressgCBPLRt = accounts[0]
		const uint256NlF6ynW = await DMONDETHRewardsAQs8hen.notifyRewardAmount.call(uintdlL9coY, {from: accounts[0]});
		const addressvNfjixo = await DMONDETHRewardsAQs8hen.setStakeAddress.call(addressgCBPLRt, {from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const uintkO50tVu = BigInt("1252")
		const addressnjGNRFc = accounts[3]
		const uintzNxwEV = BigInt("1267")
		const uint256NlF6ynW = await DMONDETHRewardsAQs8hen.notifyRewardAmount.call(uintkO50tVu, {from: accounts[0]});
		const uint256PnD2lc9 = await DMONDETHRewardsAQs8hen.balanceOf.call(addressnjGNRFc, {from: accounts[0]});
		const uint256bFJ40mt = await DMONDETHRewardsAQs8hen.setStartTime.call(uintzNxwEV, {from: accounts[0]});

		assert.equal(uint256PnD2lc9, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscqwVv80 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoWBTqAF = BigInt("1255")
		const boolpeTaw1h = await DMONDETHRewardscqwVv80.isOwner.call({from: accounts[0]});
		await DMONDETHRewardscqwVv80.exit.call({from: accounts[2]});
		await DMONDETHRewardscqwVv80.onlyRewardDistribution.call({from: accounts[1]});
		const uint256Q9itb4Z = await DMONDETHRewardscqwVv80.withdraw.call(uintoWBTqAF, {from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const addresszbrS2Y8 = accounts[5]
		const uintzmkpGD = BigInt("1219")
		const addressemktSRz = await DMONDETHRewardsAQs8hen.transferOwnership.call(addresszbrS2Y8, {from: accounts[0]});
		const uint256NlF6ynW = await DMONDETHRewardsAQs8hen.notifyRewardAmount.call(uintzmkpGD, {from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAQs8hen = await DMONDETHRewards.new({from: accounts[0]});
		const addressYj3IoSG = "0x0000000000000000000000000000000000000001"
		const addressbc9N1au = await DMONDETHRewardsAQs8hen.setRewardDistribution.call(addressYj3IoSG, {from: accounts[0]});
//		await DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsAQs8hen.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
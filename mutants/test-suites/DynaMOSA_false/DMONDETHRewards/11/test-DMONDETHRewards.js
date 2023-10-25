const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAVy7y6u = await DMONDETHRewards.new({from: accounts[1]});
		const addresse65w3xy = "0x0000000000000000000000000000000000000001"
//		const addressaAD32Xw = await DMONDETHRewardsAVy7y6u.updateReward.call(addresse65w3xy, {from: accounts[0]});
//		const uint256yoC2Ogj = await DMONDETHRewardsAVy7y6u.rewardPerToken.call({from: accounts[0]});
//		const uint256cazlT8s = await DMONDETHRewardsAVy7y6u.remainingReward.call({from: accounts[0]});
//		const boolJCSyE6r = await DMONDETHRewardsAVy7y6u.isOwner.call({from: accounts[1]});
//		const addressD8eUuW = await DMONDETHRewardsAVy7y6u.owner.call({from: accounts[1]});
//		const boolMx14wMo = await DMONDETHRewardsAVy7y6u.isOwner.call({from: accounts[4]});

		await expect(DMONDETHRewardsAVy7y6u.updateReward.call(addresse65w3xy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscJwQH8k = await DMONDETHRewards.new({from: accounts[3]});
		const uintKElL29u = BigInt("337")
//		const uint256Jok7OyN = await DMONDETHRewardscJwQH8k.remainingReward.call({from: accounts[1]});
//		const uint256SI3Y0Qd = await DMONDETHRewardscJwQH8k.withdraw.call(uintKElL29u, {from: accounts[4]});

		await expect(DMONDETHRewardscJwQH8k.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgUuspMJ = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgRMfBH = BigInt("1727")
		const uint256oHu84w4 = await DMONDETHRewardsgUuspMJ.rewardPerToken.call({from: accounts[2]});
		await DMONDETHRewardsgUuspMJ.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hlhhcC4 = await DMONDETHRewardsgUuspMJ.stake.call(uintgRMfBH, {from: accounts[4]});
		await DMONDETHRewardsgUuspMJ.getReward.call({from: accounts[3]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsoPj1TM0 = await DMONDETHRewards.new({from: accounts[5]});
		const addressPp3OeMw = "0x0000000000000000000000000000000000000001"
		const uintY9pSIPp = BigInt("799")
		const uint256fFoHDSR = await DMONDETHRewardsoPj1TM0.rewardPerToken.call({from: accounts[0]});
//		await DMONDETHRewardsoPj1TM0.onlyOwner.call({from: accounts[0]});
//		const uint256kKxfAAU = await DMONDETHRewardsoPj1TM0.rewardPerToken.call({from: accounts[1]});
//		const uint256GqI0JTm = await DMONDETHRewardsoPj1TM0.earned.call(addressPp3OeMw, {from: accounts[0]});
//		const uint256b3Ora5f = await DMONDETHRewardsoPj1TM0.stake.call(uintY9pSIPp, {from: accounts[3]});

		assert.equal(uint256fFoHDSR, BigInt("0"))
		await expect(DMONDETHRewardsoPj1TM0.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgYMlLTB = await DMONDETHRewards.new({from: accounts[1]});
		const uintDpTHtu = BigInt("1303")
		const uintPZKTGNu = BigInt("204")
		const uintz1DYYoP = BigInt("583")
		const addresskpIqPzJ = accounts[0]
//		const uint256pZUxi3A = await DMONDETHRewardsgYMlLTB.stake.call(uintDpTHtu, {from: accounts[2]});
//		const boollZrIvp = await DMONDETHRewardsgYMlLTB.isOwner.call({from: accounts[4]});
//		const uint256MhhZ64Y = await DMONDETHRewardsgYMlLTB.rewardPerToken.call({from: accounts[4]});
//		const uint256DUv4LXP = await DMONDETHRewardsgYMlLTB.setStartTime.call(uintPZKTGNu, {from: accounts[0]});
//		const uint2566KZ5Fj = await DMONDETHRewardsgYMlLTB.notifyRewardAmount.call(uintz1DYYoP, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswWt0UJ8 = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addresskpIqPzJ, {from: accounts[1]});

		await expect(DMONDETHRewardsgYMlLTB.stake.call(uintDpTHtu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZMuKoas = await DMONDETHRewards.new({from: accounts[3]});
		const uintCBrQQyo = BigInt("1834")
//		await DMONDETHRewardsZMuKoas.renounceOwnership.call({from: accounts[1]});
//		const uint256o5mG8tN = await DMONDETHRewardsZMuKoas.withdraw.call(uintCBrQQyo, {from: accounts[4]});
//		const uint256SPrOoWg = await DMONDETHRewardsZMuKoas.totalSupply.call({from: accounts[2]});

		await expect(DMONDETHRewardsZMuKoas.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAcUOftS = await DMONDETHRewards.new({from: accounts[3]});
		const uintqhrYFlJ = BigInt("277")
		const uintHsgUU7s = BigInt("81")
		const uintBL3Cky6 = BigInt("1186")
//		const uint256b5p8o7 = await DMONDETHRewardsAcUOftS.notifyRewardAmount.call(uintqhrYFlJ, {from: accounts[4]});
//		const uint256tYH0Mph = await DMONDETHRewardsAcUOftS.remainingReward.call({from: accounts[4]});
//		const uint256wzIa8Ij = await DMONDETHRewardsAcUOftS.stake.call(uintHsgUU7s, {from: accounts[3]});
//		const uint256aKqPXOw = await DMONDETHRewardsAcUOftS.withdraw.call(uintBL3Cky6, {from: accounts[3]});
//		await DMONDETHRewardsAcUOftS.renounceOwnership.call({from: accounts[4]});

		await expect(DMONDETHRewardsAcUOftS.notifyRewardAmount.call(uintqhrYFlJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscJwQH8k = await DMONDETHRewards.new({from: accounts[3]});
		const uintDwpUrUJ = BigInt("161")
		const uintWpbHxt9 = BigInt("381")
//		const uint256in3gpmA = await DMONDETHRewardscJwQH8k.withdraw.call(uintDwpUrUJ, {from: accounts[3]});
//		const uint256Jok7OyN = await DMONDETHRewardscJwQH8k.remainingReward.call({from: accounts[1]});
//		const uint256SI3Y0Qd = await DMONDETHRewardscJwQH8k.withdraw.call(uintWpbHxt9, {from: accounts[4]});

		await expect(DMONDETHRewardscJwQH8k.withdraw.call(uintDwpUrUJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgYMlLTB = await DMONDETHRewards.new({from: accounts[1]});
		const uintqgwbi7 = BigInt("1303")
		const uintoT0Exle = BigInt("203")
		const uintSroNrGm = BigInt("583")
		const addresswLBNCba = accounts[1]
		const uint7YHfqj = BigInt("1179")
		const addressOd4jxyM = accounts[0]
//		await DMONDETHRewardsgYMlLTB.getReward.call({from: accounts[0]});
//		const uint256pZUxi3A = await DMONDETHRewardsgYMlLTB.stake.call(uintqgwbi7, {from: accounts[2]});
//		const uint256Kc7lZJ = await DMONDETHRewardsgYMlLTB.totalSupply.call({from: accounts[2]});
//		const uint256MhhZ64Y = await DMONDETHRewardsgYMlLTB.rewardPerToken.call({from: accounts[4]});
//		const uint256DUv4LXP = await DMONDETHRewardsgYMlLTB.setStartTime.call(uintoT0Exle, {from: accounts[0]});
//		const uint2566KZ5Fj = await DMONDETHRewardsgYMlLTB.notifyRewardAmount.call(uintSroNrGm, {from: "0x0000000000000000000000000000000000000001"});
//		const address9zGCwz = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addresswLBNCba, {from: accounts[5]});
//		const uint256O9gzJDF = await DMONDETHRewardsgYMlLTB.stake.call(uint7YHfqj, {from: accounts[2]});
//		const addresswWt0UJ8 = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addressOd4jxyM, {from: accounts[1]});

		await expect(DMONDETHRewardsgYMlLTB.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgYMlLTB = await DMONDETHRewards.new({from: accounts[1]});
		const uintYY0OHM4 = BigInt("1303")
		const uint0UD8XR = BigInt("1608")
		const uintvbTagD4 = BigInt("583")
		const addressan2hgx = accounts[0]
//		await DMONDETHRewardsgYMlLTB.exit.call({from: accounts[2]});
//		const uint256pZUxi3A = await DMONDETHRewardsgYMlLTB.stake.call(uintYY0OHM4, {from: accounts[2]});
//		const uint256DUv4LXP = await DMONDETHRewardsgYMlLTB.setStartTime.call(uint0UD8XR, {from: accounts[0]});
//		const uint2566KZ5Fj = await DMONDETHRewardsgYMlLTB.notifyRewardAmount.call(uintvbTagD4, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsgYMlLTB.renounceOwnership.call({from: accounts[0]});
//		const addresswWt0UJ8 = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addressan2hgx, {from: accounts[1]});

		await expect(DMONDETHRewardsgYMlLTB.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgYMlLTB = await DMONDETHRewards.new({from: accounts[1]});
		const uint7NjmSV = BigInt("1296")
		const addressHGFqiaP = await DMONDETHRewardsgYMlLTB.owner.call({from: accounts[0]});
//		const uint256pZUxi3A = await DMONDETHRewardsgYMlLTB.stake.call(uint7NjmSV, {from: accounts[2]});

		assert.equal(addressHGFqiaP, 0xA93189001F38a62a197637F195B157e817719dbc)
		await expect(DMONDETHRewardsgYMlLTB.stake.call(uint7NjmSV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshenWg1I = await DMONDETHRewards.new({from: accounts[2]});
		const addressJ4cUEgE = accounts[3]
		const addressEK4M6sk = "0x0000000000000000000000000000000000000001"
		const addressEuMcHG0 = await DMONDETHRewardshenWg1I.setStakeAddress.call(addressJ4cUEgE, {from: accounts[2]});
//		const uint256mrV2dsy = await DMONDETHRewardshenWg1I.remainingReward.call({from: accounts[5]});
//		const uint256hjLP24 = await DMONDETHRewardshenWg1I.balanceOf.call(addressEK4M6sk, {from: accounts[2]});
//		await DMONDETHRewardshenWg1I.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardshenWg1I.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxlS1L3 = await DMONDETHRewards.new({from: accounts[0]});
		const uintnC4rKQd = BigInt("1154")
		const uintAsFgQHZ = BigInt("591")
		const uint256YkBIj8r = await DMONDETHRewardsxlS1L3.notifyRewardAmount.call(uintnC4rKQd, {from: accounts[0]});
		const uint256ICaHqp = await DMONDETHRewardsxlS1L3.setStartTime.call(uintAsFgQHZ, {from: accounts[0]});
//		await DMONDETHRewardsxlS1L3.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsxlS1L3.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgYMlLTB = await DMONDETHRewards.new({from: accounts[1]});
		const uintFcx1bBc = BigInt("1292")
		const addresszWTRePv = accounts[1]
		const uintrxhjPtI = BigInt("1179")
		const addressGZsxpUy = accounts[0]
//		await DMONDETHRewardsgYMlLTB.renounceOwnership.call({from: accounts[1]});
//		await DMONDETHRewardsgYMlLTB.getReward.call({from: accounts[0]});
//		const uint256pZUxi3A = await DMONDETHRewardsgYMlLTB.stake.call(uintFcx1bBc, {from: accounts[2]});
//		const uint256Kc7lZJ = await DMONDETHRewardsgYMlLTB.totalSupply.call({from: accounts[2]});
//		const uint256MhhZ64Y = await DMONDETHRewardsgYMlLTB.rewardPerToken.call({from: accounts[4]});
//		const address9zGCwz = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addresszWTRePv, {from: accounts[5]});
//		const uint256O9gzJDF = await DMONDETHRewardsgYMlLTB.stake.call(uintrxhjPtI, {from: accounts[2]});
//		const addresswWt0UJ8 = await DMONDETHRewardsgYMlLTB.setStakeAddress.call(addressGZsxpUy, {from: accounts[1]});

		await expect(DMONDETHRewardsgYMlLTB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXMe5bOz = await DMONDETHRewards.new({from: accounts[1]});
		const addressJVEe31R = accounts[5]
		const addresscIgtqCY = accounts[3]
		const addressRgHWyGZ = await DMONDETHRewardsXMe5bOz.transferOwnership.call(addressJVEe31R, {from: accounts[1]});
//		const addressr0Q21K = await DMONDETHRewardsXMe5bOz.setStakeAddress.call(addresscIgtqCY, {from: accounts[3]});

		await expect(DMONDETHRewardsXMe5bOz.setStakeAddress.call(addresscIgtqCY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxlS1L3 = await DMONDETHRewards.new({from: accounts[0]});
		const uintchJbYpo = BigInt("1142")
		const addressXHtbDEc = accounts[0]
		const uintkbyzCMx = BigInt("193")
		const uintOtKutmS = BigInt("1535")
		const uint256YkBIj8r = await DMONDETHRewardsxlS1L3.notifyRewardAmount.call(uintchJbYpo, {from: accounts[0]});
		const addressXNiPxtm = await DMONDETHRewardsxlS1L3.setRewardDistribution.call(addressXHtbDEc, {from: accounts[0]});
		const uint256ikGj8ir = await DMONDETHRewardsxlS1L3.totalSupply.call({from: accounts[5]});
//		const uint256mRkibDG = await DMONDETHRewardsxlS1L3.stake.call(uintkbyzCMx, {from: accounts[0]});
//		await DMONDETHRewardsxlS1L3.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uVhpE4 = await DMONDETHRewardsxlS1L3.lastTimeRewardApplicable.call({from: accounts[1]});
//		await DMONDETHRewardsxlS1L3.exit.call({from: accounts[3]});
//		const uint256g9Mpjk7 = await DMONDETHRewardsxlS1L3.withdraw.call(uintOtKutmS, {from: accounts[4]});

		assert.equal(uint256ikGj8ir, BigInt("0"))
		await expect(DMONDETHRewardsxlS1L3.stake.call(uintkbyzCMx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
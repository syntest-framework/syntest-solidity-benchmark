const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJBSo0Md = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressokeUm8 = "0x0000000000000000000000000000000000000001"
		const addresshJMWw2U = "0x0000000000000000000000000000000000000001"
		const uintBXFGuD = BigInt("384")
		const uint256yukn2F = await SLTDETHlpRewardJBSo0Md.earned.call(addressokeUm8, {from: accounts[0]});
		const boolKwvVBN7 = await SLTDETHlpRewardJBSo0Md.isOwner.call({from: accounts[3]});
		const address6Emut6 = await SLTDETHlpRewardJBSo0Md.transferOwnership.call(addresshJMWw2U, {from: accounts[0]});
		const uint256BirhCV = await SLTDETHlpRewardJBSo0Md.withdraw.call(uintBXFGuD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const addressyctbcIm = accounts[1]
		const addressc3AyQN0 = accounts[5]
//		const addressmIGFcc4 = await SLTDETHlpRewardMTBWQlE.updateReward.call(addressyctbcIm, {from: accounts[2]});
//		const uint256Ccj3Yk2 = await SLTDETHlpRewardMTBWQlE.balanceOf.call(addressc3AyQN0, {from: accounts[2]});

		await expect(SLTDETHlpRewardMTBWQlE.updateReward.call(addressyctbcIm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzYH5ri6 = await SLTDETHlpReward.new({from: accounts[4]});
		const uinth2QHv58 = BigInt("513")
		const uintfTwp90 = BigInt("345")
//		const uint256XOzCrne = await SLTDETHlpRewardzYH5ri6.withdraw.call(uinth2QHv58, {from: accounts[3]});
//		const uint2562XRqW0 = await SLTDETHlpRewardzYH5ri6.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256UqIaAo9 = await SLTDETHlpRewardzYH5ri6.setStartTime.call(uintfTwp90, {from: accounts[5]});

		await expect(SLTDETHlpRewardzYH5ri6.withdraw.call(uinth2QHv58, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYmieMX = await SLTDETHlpReward.new({from: accounts[4]});
		const addressmJRqjBQ = accounts[1]
		const addressdihnWzT = accounts[3]
		const addressWlNs10P = accounts[0]
		const addressIk6pXjk = accounts[3]
//		const addresswudOeF = await SLTDETHlpRewardYmieMX.setStakeAddress.call(addressmJRqjBQ, {from: accounts[0]});
//		const addressziIjMHR = await SLTDETHlpRewardYmieMX.transferOwnership.call(addressdihnWzT, {from: accounts[0]});
//		const addressbyWXBJK = await SLTDETHlpRewardYmieMX.setStakeAddress.call(addressWlNs10P, {from: accounts[0]});
//		const addresskloYJL8 = await SLTDETHlpRewardYmieMX.transferOwnership.call(addressIk6pXjk, {from: accounts[2]});
//		await SLTDETHlpRewardYmieMX.exit.call({from: accounts[0]});

		await expect(SLTDETHlpRewardYmieMX.setStakeAddress.call(addressmJRqjBQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRWOFKjO = await SLTDETHlpReward.new({from: accounts[5]});
		const uintP7THWdn = BigInt("1996")
		const addresskOTrVgy = accounts[2]
//		const uint256dUFClIK = await SLTDETHlpRewardRWOFKjO.notifyRewardAmount.call(uintP7THWdn, {from: accounts[2]});
//		const addresspE1T0E9 = await SLTDETHlpRewardRWOFKjO.setStakeAddress.call(addresskOTrVgy, {from: accounts[3]});
//		const uint256VOMDo62 = await SLTDETHlpRewardRWOFKjO.rewardPerToken.call({from: accounts[4]});
//		await SLTDETHlpRewardRWOFKjO.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardRWOFKjO.checkStart.call({from: accounts[1]});
//		await SLTDETHlpRewardRWOFKjO.onlyRewardDistribution.call({from: accounts[0]});

		await expect(SLTDETHlpRewardRWOFKjO.notifyRewardAmount.call(uintP7THWdn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLWdBrD2 = await SLTDETHlpReward.new({from: accounts[1]});
		const uintoEtm3Pu = BigInt("403")
//		const uint256uvro9U = await SLTDETHlpRewardLWdBrD2.stake.call(uintoEtm3Pu, {from: accounts[1]});
//		await SLTDETHlpRewardLWdBrD2.getReward.call({from: accounts[0]});
//		await SLTDETHlpRewardLWdBrD2.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardLWdBrD2.getReward.call({from: accounts[2]});
//		await SLTDETHlpRewardLWdBrD2.onlyRewardDistribution.call({from: accounts[5]});
//		await SLTDETHlpRewardLWdBrD2.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardLWdBrD2.stake.call(uintoEtm3Pu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const addressLJ93KO7 = accounts[1]
		const addressbNAUdXq = accounts[5]
		const addresst5m9Ip9 = await SLTDETHlpRewardMTBWQlE.owner.call({from: accounts[3]});
//		const addressmIGFcc4 = await SLTDETHlpRewardMTBWQlE.updateReward.call(addressLJ93KO7, {from: accounts[2]});
//		const uint256Ccj3Yk2 = await SLTDETHlpRewardMTBWQlE.balanceOf.call(addressbNAUdXq, {from: accounts[2]});

		assert.equal(addresst5m9Ip9, 0xf08bABfF239A1d1E3C604A65B4Dc49d4f3419752)
		await expect(SLTDETHlpRewardMTBWQlE.updateReward.call(addressLJ93KO7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const uintGKrblP4 = BigInt("1997")
		const addressXwTiAmV = accounts[5]
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]});
//		const uint256h7H7kkB = await SLTDETHlpRewardMTBWQlE.notifyRewardAmount.call(uintGKrblP4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ccj3Yk2 = await SLTDETHlpRewardMTBWQlE.balanceOf.call(addressXwTiAmV, {from: accounts[2]});

		await expect(SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddwkfou = await SLTDETHlpReward.new({from: accounts[1]});
		const uinttxXbycs = BigInt("775")
		const uintDwNENAv = BigInt("414")
		const uinttQX1Ub = BigInt("536")
		const uintFsc2quk = BigInt("303")
		const uintopLSB4b = BigInt("891")
//		const uint256RtAoGXf = await SLTDETHlpRewarddwkfou.remainingReward.call({from: accounts[4]});
//		const uint256WWG5Q8l = await SLTDETHlpRewarddwkfou.stake.call(uinttxXbycs, {from: accounts[2]});
//		const uint256Q64j9J = await SLTDETHlpRewarddwkfou.stake.call(uintDwNENAv, {from: accounts[0]});
//		const uint256pxm99aA = await SLTDETHlpRewarddwkfou.withdraw.call(uinttQX1Ub, {from: accounts[2]});
//		const uint256lZIJHT6 = await SLTDETHlpRewarddwkfou.stake.call(uintFsc2quk, {from: accounts[5]});
//		const uint2561n4mvK = await SLTDETHlpRewarddwkfou.withdraw.call(uintopLSB4b, {from: accounts[3]});

		await expect(SLTDETHlpRewarddwkfou.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const uintGNC4du1 = BigInt("1825")
		const addressJwlOJ37 = accounts[6]
		const addressDaO6XP = accounts[0]
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]});
//		const uint256qB8q7c4 = await SLTDETHlpRewardMTBWQlE.notifyRewardAmount.call(uintGNC4du1, {from: accounts[1]});
//		const uint256Ccj3Yk2 = await SLTDETHlpRewardMTBWQlE.balanceOf.call(addressJwlOJ37, {from: accounts[2]});
//		const addressY3JXCSB = await SLTDETHlpRewardMTBWQlE.setRewardDistribution.call(addressDaO6XP, {from: accounts[1]});

		await expect(SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const addressAeL5WPj = accounts[6]
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]});
//		const uint256VLWnO84 = await SLTDETHlpRewardMTBWQlE.totalSupply.call({from: accounts[0]});
//		const uint256Ccj3Yk2 = await SLTDETHlpRewardMTBWQlE.balanceOf.call(addressAeL5WPj, {from: accounts[2]});
//		await SLTDETHlpRewardMTBWQlE.exit.call({from: accounts[2]});
//		const uint256Xxty1s3 = await SLTDETHlpRewardMTBWQlE.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddwkfou = await SLTDETHlpReward.new({from: accounts[1]});
		const uintGjB6KHi = BigInt("1864")
		const uintAe3eY9D = BigInt("758")
		const uint256BMYFQwY = await SLTDETHlpRewarddwkfou.setStartTime.call(uintGjB6KHi, {from: accounts[1]});
//		const uint256WWG5Q8l = await SLTDETHlpRewarddwkfou.stake.call(uintAe3eY9D, {from: accounts[2]});

		await expect(SLTDETHlpRewarddwkfou.stake.call(uintAe3eY9D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhTzxhqN = await SLTDETHlpReward.new({from: accounts[1]});
		const addressDaIpus = accounts[1]
		const addressY3B3A6x = accounts[0]
		const uintREAkjnp = BigInt("1052")
		const uintggryuY = BigInt("36")
		const addressxSf9Ssp = await SLTDETHlpRewardhTzxhqN.setStakeAddress.call(addressDaIpus, {from: accounts[1]});
		const uint256MeaeDuJ = await SLTDETHlpRewardhTzxhqN.earned.call(addressY3B3A6x, {from: accounts[4]});
//		const uint256kkQqxXk = await SLTDETHlpRewardhTzxhqN.withdraw.call(uintREAkjnp, {from: accounts[1]});
//		const uint256aF5WXhU = await SLTDETHlpRewardhTzxhqN.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256mu3vvIr = await SLTDETHlpRewardhTzxhqN.notifyRewardAmount.call(uintggryuY, {from: accounts[0]});

		assert.equal(uint256MeaeDuJ, BigInt("0"))
		await expect(SLTDETHlpRewardhTzxhqN.withdraw.call(uintREAkjnp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
		const uintmvgn8m = BigInt("939")
		const addressyYJ9PwQ = accounts[2]
		const addressRNIv9S8 = accounts[1]
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]});
//		const uint256HGqL6ZM = await SLTDETHlpRewardMTBWQlE.notifyRewardAmount.call(uintmvgn8m, {from: accounts[1]});
//		const boolNnoexmG = await SLTDETHlpRewardMTBWQlE.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressqMFbMMN = await SLTDETHlpRewardMTBWQlE.transferOwnership.call(addressyYJ9PwQ, {from: accounts[1]});
//		const uint256MKVkyJ1 = await SLTDETHlpRewardMTBWQlE.earned.call(addressRNIv9S8, {from: accounts[3]});

		await expect(SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMTBWQlE = await SLTDETHlpReward.new({from: accounts[1]});
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[0]});
//		await SLTDETHlpRewardMTBWQlE.renounceOwnership.call({from: accounts[1]});
//		await SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[2]});

		await expect(SLTDETHlpRewardMTBWQlE.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
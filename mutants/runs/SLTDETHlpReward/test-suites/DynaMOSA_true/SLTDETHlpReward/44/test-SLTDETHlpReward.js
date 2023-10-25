const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardXPiS82a = await SLTDETHlpReward.new({from: accounts[2]});
		const addressDFYOIJu = accounts[2]
		const uintidHPQRU = BigInt("848")
		const uintblEV3HX = BigInt("139")
		const addressIg01Wjs = await SLTDETHlpRewardXPiS82a.updateReward.call(addressDFYOIJu, {from: accounts[2]});
		const uint256BMz83v7 = await SLTDETHlpRewardXPiS82a.notifyRewardAmount.call(uintidHPQRU, {from: accounts[1]});
		const uint256H1rpYKA = await SLTDETHlpRewardXPiS82a.withdraw.call(uintblEV3HX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YdRY7zc = await SLTDETHlpRewardXPiS82a.totalSupply.call({from: accounts[3]});

		await expect(SLTDETHlpRewardXPiS82a.updateReward.call(addressDFYOIJu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardvJ5Krt = await SLTDETHlpReward.new({from: accounts[1]});
		const uintJN5CEFG = BigInt("1063")
		const uint256X7lqUTf = await SLTDETHlpRewardvJ5Krt.withdraw.call(uintJN5CEFG, {from: accounts[1]});
		const uint256d5imQz = await SLTDETHlpRewardvJ5Krt.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDETHlpRewardvJ5Krt.withdraw.call(uintJN5CEFG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjsUXqx3 = await SLTDETHlpReward.new({from: accounts[5]});
		const address1lyETH = accounts[0]
		const addressxpAD6Nj = accounts[3]
		const addressPPzm08 = accounts[1]
		const addressXaJnRdW = accounts[1]
		const addressoEOXXSK = accounts[2]
		const addressFBb0kTK = await SLTDETHlpRewardjsUXqx3.setStakeAddress.call(address1lyETH, {from: accounts[0]});
		const addressqtdZLbr = await SLTDETHlpRewardjsUXqx3.transferOwnership.call(addressxpAD6Nj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JbiCxcN = await SLTDETHlpRewardjsUXqx3.earned.call(addressPPzm08, {from: accounts[2]});
		const addresssUBrOWj = await SLTDETHlpRewardjsUXqx3.setRewardDistribution.call(addressXaJnRdW, {from: accounts[2]});
		const uint256M0a3W1 = await SLTDETHlpRewardjsUXqx3.balanceOf.call(addressoEOXXSK, {from: accounts[4]});

		await expect(SLTDETHlpRewardjsUXqx3.setStakeAddress.call(address1lyETH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		const uintzDiIgiG = BigInt("1882")
		await SLTDETHlpRewardk3QQkFs.exit.call({from: accounts[4]});
		const uint256Ra4paLf = await SLTDETHlpRewardk3QQkFs.rewardPerToken.call({from: accounts[0]});
		const uint256ebSHApn = await SLTDETHlpRewardk3QQkFs.stake.call(uintzDiIgiG, {from: accounts[2]});

		await expect(SLTDETHlpRewardk3QQkFs.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu9JVlc = await SLTDETHlpReward.new({from: accounts[2]});
		const addressxebIbs = accounts[5]
		const uintthjix5t = BigInt("672")
		const uintn08eFEZ = BigInt("1560")
		const addressELTNnAv = await SLTDETHlpRewardu9JVlc.setStakeAddress.call(addressxebIbs, {from: accounts[2]});
		const uint256yKK0MGi = await SLTDETHlpRewardu9JVlc.stake.call(uintthjix5t, {from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.renounceOwnership.call({from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.checkStart.call({from: accounts[1]});
		await SLTDETHlpRewardu9JVlc.exit.call({from: accounts[2]});
		const uint256prU4v4I = await SLTDETHlpRewardu9JVlc.stake.call(uintn08eFEZ, {from: accounts[4]});

		await expect(SLTDETHlpRewardu9JVlc.stake.call(uintthjix5t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardM0CWOdh = await SLTDETHlpReward.new({from: accounts[5]});
		const addressQZwIA0n = accounts[0]
		const addressDgILegh = accounts[4]
		const uintfwm40Kz = BigInt("1287")
		const addresswNyqfcE = accounts[4]
		const addressdojlf7b = await SLTDETHlpRewardM0CWOdh.owner.call({from: accounts[0]});
		const uint256saKRx6Q = await SLTDETHlpRewardM0CWOdh.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressojTQJdX = await SLTDETHlpRewardM0CWOdh.transferOwnership.call(addressQZwIA0n, {from: accounts[3]});
		const uint256GVgbqMh = await SLTDETHlpRewardM0CWOdh.earned.call(addressDgILegh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rkwC5d5 = await SLTDETHlpRewardM0CWOdh.withdraw.call(uintfwm40Kz, {from: accounts[0]});
		const addressaLFcxwt = await SLTDETHlpRewardM0CWOdh.transferOwnership.call(addresswNyqfcE, {from: accounts[5]});

		assert.equal(addressdojlf7b, 0x3Bf916652166cd33456c5D333A0a993828d1D525)
		assert.equal(uint256saKRx6Q, BigInt("0"))
		await expect(SLTDETHlpRewardM0CWOdh.transferOwnership.call(addressQZwIA0n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardeba0d7K = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXMVL4FY = accounts[5]
		const addressFlVpXFI = accounts[4]
		const addressOFIKcfJ = await SLTDETHlpRewardeba0d7K.setStakeAddress.call(addressXMVL4FY, {from: accounts[0]});
		const uint2563Le7ff = await SLTDETHlpRewardeba0d7K.rewardPerToken.call({from: accounts[4]});
		const addressGLdUAv7 = await SLTDETHlpRewardeba0d7K.transferOwnership.call(addressFlVpXFI, {from: accounts[3]});
		await SLTDETHlpRewardeba0d7K.exit.call({from: accounts[2]});
		await SLTDETHlpRewardeba0d7K.exit.call({from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		await SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]});
		const uint256u10Pioo = await SLTDETHlpRewardk3QQkFs.totalSupply.call({from: accounts[2]});
		const uint256Ra4paLf = await SLTDETHlpRewardk3QQkFs.rewardPerToken.call({from: accounts[0]});

		await expect(SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu9JVlc = await SLTDETHlpReward.new({from: accounts[2]});
		const addressvHgmsrG = accounts[5]
		const uintXKfhMTS = BigInt("672")
		const uintCZRZyB = BigInt("107")
		const addressELTNnAv = await SLTDETHlpRewardu9JVlc.setStakeAddress.call(addressvHgmsrG, {from: accounts[2]});
		const uint256uqBKrAF = await SLTDETHlpRewardu9JVlc.remainingReward.call({from: accounts[1]});
		await SLTDETHlpRewardu9JVlc.onlyOwner.call({from: accounts[4]});
		const uint256yKK0MGi = await SLTDETHlpRewardu9JVlc.stake.call(uintXKfhMTS, {from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.renounceOwnership.call({from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.checkStart.call({from: accounts[1]});
		await SLTDETHlpRewardu9JVlc.exit.call({from: accounts[2]});
		const uint256prU4v4I = await SLTDETHlpRewardu9JVlc.stake.call(uintCZRZyB, {from: accounts[4]});

		await expect(SLTDETHlpRewardu9JVlc.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu9JVlc = await SLTDETHlpReward.new({from: accounts[2]});
		const addressMqQZzM1 = accounts[5]
		const uintApy8pNN = BigInt("1441")
		const uintk2Fo1q1 = BigInt("688")
		const uintRpbf2CL = BigInt("102")
		const uintD8mAiNS = BigInt("373")
		const addresshn2A1Iy = accounts[4]
		const uintSfUECxm = BigInt("1560")
		const addressELTNnAv = await SLTDETHlpRewardu9JVlc.setStakeAddress.call(addressMqQZzM1, {from: accounts[2]});
		const uint256DG8DmKa = await SLTDETHlpRewardu9JVlc.notifyRewardAmount.call(uintApy8pNN, {from: accounts[0]});
		const uint256yKK0MGi = await SLTDETHlpRewardu9JVlc.stake.call(uintk2Fo1q1, {from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.renounceOwnership.call({from: accounts[4]});
		const uint256I9r0X0S = await SLTDETHlpRewardu9JVlc.notifyRewardAmount.call(uintRpbf2CL, {from: accounts[4]});
		await SLTDETHlpRewardu9JVlc.exit.call({from: accounts[1]});
		await SLTDETHlpRewardu9JVlc.exit.call({from: accounts[2]});
		const uint256qjJjDzF = await SLTDETHlpRewardu9JVlc.setStartTime.call(uintD8mAiNS, {from: accounts[1]});
		const addresseFEbQig = await SLTDETHlpRewardu9JVlc.setRewardDistribution.call(addresshn2A1Iy, {from: accounts[3]});
		const addressK952LN = await SLTDETHlpRewardu9JVlc.owner.call({from: accounts[3]});
		const uint256prU4v4I = await SLTDETHlpRewardu9JVlc.stake.call(uintSfUECxm, {from: accounts[4]});

		await expect(SLTDETHlpRewardu9JVlc.notifyRewardAmount.call(uintApy8pNN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		const uintyJSgHZu = BigInt("1518")
		await SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]});
		const uint256SyPZXgY = await SLTDETHlpRewardk3QQkFs.rewardPerToken.call({from: accounts[3]});
		const uint256u10Pioo = await SLTDETHlpRewardk3QQkFs.totalSupply.call({from: accounts[2]});
		const uint256tLpZf5Z = await SLTDETHlpRewardk3QQkFs.setStartTime.call(uintyJSgHZu, {from: accounts[1]});
		const uint256Ra4paLf = await SLTDETHlpRewardk3QQkFs.rewardPerToken.call({from: accounts[0]});

		await expect(SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		await SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]});
		await SLTDETHlpRewardk3QQkFs.renounceOwnership.call({from: accounts[1]});
		const uint256u10Pioo = await SLTDETHlpRewardk3QQkFs.totalSupply.call({from: accounts[2]});

		await expect(SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		const addressvVnntLI = accounts[3]
		const addressobCxOng = await SLTDETHlpRewardk3QQkFs.setRewardDistribution.call(addressvVnntLI, {from: accounts[1]});
		await SLTDETHlpRewardk3QQkFs.checkStart.call({from: accounts[0]});
		await SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]});
		const boolTVEOmkH = await SLTDETHlpRewardk3QQkFs.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardk3QQkFs.onlyRewardDistribution.call({from: accounts[2]});
		const uint256ZbjncOH = await SLTDETHlpRewardk3QQkFs.rewardPerToken.call({from: accounts[3]});

		await expect(SLTDETHlpRewardk3QQkFs.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk3QQkFs = await SLTDETHlpReward.new({from: accounts[1]});
		const uintyFPx7mR = BigInt("1913")
		const uintTWv7Zqe = BigInt("955")
		const addressDloINfm = accounts[3]
		await SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]});
		const uint256B7mLee9 = await SLTDETHlpRewardk3QQkFs.notifyRewardAmount.call(uintyFPx7mR, {from: accounts[1]});
		const uint256GUgxBiD = await SLTDETHlpRewardk3QQkFs.stake.call(uintTWv7Zqe, {from: accounts[4]});
		const boolCbauXZ3 = await SLTDETHlpRewardk3QQkFs.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardk3QQkFs.exit.call({from: accounts[5]});
		await SLTDETHlpRewardk3QQkFs.onlyRewardDistribution.call({from: accounts[0]});
		const addressixPBHaQ = await SLTDETHlpRewardk3QQkFs.owner.call({from: accounts[2]});
		const addressP9lSLUK = await SLTDETHlpRewardk3QQkFs.setStakeAddress.call(addressDloINfm, {from: accounts[2]});

		await expect(SLTDETHlpRewardk3QQkFs.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
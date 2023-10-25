const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressMymDeEv = accounts[0]
		const addressOxmXH5U = "0x0000000000000000000000000000000000000001"
		const addressfcNTfMJ = accounts[3]
		const MarsStakingRewards25QzuT = await MarsStakingRewards.new(addressMymDeEv, addressOxmXH5U, addressfcNTfMJ, {from: accounts[2]});
		const uintJZjVMA7 = BigInt("1754")
		const uint256lvwWqw4 = await MarsStakingRewards25QzuT.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolqKcsTp = await MarsStakingRewards25QzuT.isOwner.call({from: accounts[5]});
		const uint256pISg7qe = await MarsStakingRewards25QzuT.withdraw.call(uintJZjVMA7, {from: accounts[5]});

		assert.equal(boolqKcsTp, false)
		assert.equal(uint256lvwWqw4, BigInt("0"))
		await expect(MarsStakingRewards25QzuT.withdraw.call(uintJZjVMA7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSEKmDhQ = "0x0000000000000000000000000000000000000001"
		const addressembcHUi = accounts[1]
		const addressXa0Ilg = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskIgsfY = await MarsStakingRewards.new(addressSEKmDhQ, addressembcHUi, addressXa0Ilg, {from: accounts[1]});
		const uintZji6dWX = BigInt("1488")
		const uintZqze1jC = BigInt("806")
		const uinthpm06q = BigInt("43")
		const addressLYQzny6 = accounts[2]
		const uint256jdOPngd = await MarsStakingRewardskIgsfY.notifyRewardAmount.call(uintZqze1jC, uintZji6dWX, {from: accounts[0]});
		const uint256p1E9WoX = await MarsStakingRewardskIgsfY.lastTimeRewardApplicable.call({from: accounts[4]});
		await MarsStakingRewardskIgsfY.nonReentrant.call({from: accounts[3]});
		const addressfWJpW18 = await MarsStakingRewardskIgsfY.inCaseTokensGetStuck.call(addressLYQzny6, uinthpm06q, {from: accounts[0]});

		await expect(MarsStakingRewardskIgsfY.notifyRewardAmount.call(uintZqze1jC, uintZji6dWX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressG0DR3Tr = accounts[1]
		const addresscAVqKYD = accounts[1]
		const addressZXSSfAP = accounts[3]
		const MarsStakingRewardsD8UU0OJ = await MarsStakingRewards.new(addressG0DR3Tr, addresscAVqKYD, addressZXSSfAP, {from: accounts[2]});
		const uint256DxYchh9 = await MarsStakingRewardsD8UU0OJ.totalSupply.call({from: accounts[1]});
		const uint256hBSznZj = await MarsStakingRewardsD8UU0OJ.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256DxYchh9, BigInt("0"))
		assert.equal(uint256hBSznZj, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressfeXsviC = accounts[0]
		const addresszyIBzL8 = "0x0000000000000000000000000000000000000001"
		const addressZlsk9J9 = accounts[4]
		const MarsStakingRewardsufo9bXY = await MarsStakingRewards.new(addressfeXsviC, addresszyIBzL8, addressZlsk9J9, {from: accounts[0]});
		const uinty0FfYAZ = BigInt("1504")
		const uinthI5ReO9 = BigInt("1360")
		await MarsStakingRewardsufo9bXY.exit.call({from: accounts[4]});
		const uint256ue8ckBV = await MarsStakingRewardsufo9bXY.withdraw.call(uinty0FfYAZ, {from: accounts[4]});
		await MarsStakingRewardsufo9bXY.nonReentrant.call({from: accounts[2]});
		const uint256aWk1zjh = await MarsStakingRewardsufo9bXY.stake.call(uinthI5ReO9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsufo9bXY.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressHk0QykY = accounts[1]
		const addressAVvF43B = accounts[3]
		const address7vH7Ys = accounts[4]
		const MarsStakingRewardslC5Om4s = await MarsStakingRewards.new(addressHk0QykY, addressAVvF43B, address7vH7Ys, {from: accounts[2]});
		const addressKZOMlrH = "0x0000000000000000000000000000000000000001"
		const uintJZ21zX = BigInt("202")
		const addressc3hkIg1 = accounts[1]
		const uint256623Fxu = await MarsStakingRewardslC5Om4s.balanceOf.call(addressKZOMlrH, {from: accounts[0]});
		const booloB4xA7f = await MarsStakingRewardslC5Om4s.isOwner.call({from: accounts[1]});
		const addressJ0NIW12 = await MarsStakingRewardslC5Om4s.inCaseTokensGetStuck.call(addressc3hkIg1, uintJZ21zX, {from: accounts[5]});

		assert.equal(booloB4xA7f, false)
		assert.equal(uint256623Fxu, BigInt("0"))
		await expect(MarsStakingRewardslC5Om4s.inCaseTokensGetStuck.call(addressc3hkIg1, uintJZ21zX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslUOJ7fB = accounts[5]
		const addressRa4nkt = accounts[0]
		const addressquFX1eI = accounts[0]
		const MarsStakingRewardsu4HMeQE = await MarsStakingRewards.new(addresslUOJ7fB, addressRa4nkt, addressquFX1eI, {from: accounts[1]});
		const addressGILlHNg = accounts[1]
		const addressYXkMe8 = accounts[3]
		const addressFfyU7Al = await MarsStakingRewardsu4HMeQE.updateReward.call(addressGILlHNg, {from: accounts[4]});
		await MarsStakingRewardsu4HMeQE.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressoWXPEd2 = await MarsStakingRewardsu4HMeQE.transferOwnership.call(addressYXkMe8, {from: accounts[4]});

		await expect(MarsStakingRewardsu4HMeQE.updateReward.call(addressGILlHNg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresseubdmMb = accounts[1]
		const addresssjJy09 = accounts[3]
		const addressHny1k9U = accounts[4]
		const MarsStakingRewardslC5Om4s = await MarsStakingRewards.new(addresseubdmMb, addresssjJy09, addressHny1k9U, {from: accounts[2]});
		const addressTVimyCn = accounts[3]
		const addressOgo3xD = accounts[1]
		const uintATC5tSg = BigInt("239")
		const addressrn4cawL = accounts[1]
		const uint256eH8QXg = await MarsStakingRewardslC5Om4s.earned.call(addressTVimyCn, {from: accounts[1]});
		const uint256623Fxu = await MarsStakingRewardslC5Om4s.balanceOf.call(addressOgo3xD, {from: accounts[0]});
		const booloB4xA7f = await MarsStakingRewardslC5Om4s.isOwner.call({from: accounts[1]});
		const uint256p6wNuUv = await MarsStakingRewardslC5Om4s.getRewardForDuration.call({from: accounts[4]});
		const addressJ0NIW12 = await MarsStakingRewardslC5Om4s.inCaseTokensGetStuck.call(addressrn4cawL, uintATC5tSg, {from: accounts[5]});

		assert.equal(booloB4xA7f, false)
		assert.equal(uint256623Fxu, BigInt("0"))
		assert.equal(uint256eH8QXg, BigInt("0"))
		assert.equal(uint256p6wNuUv, BigInt("0"))
		await expect(MarsStakingRewardslC5Om4s.inCaseTokensGetStuck.call(addressrn4cawL, uintATC5tSg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressi24kRtO = accounts[5]
		const addressgWsaW2 = accounts[0]
		const addressXUQTtqM = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressi24kRtO, addressgWsaW2, addressXUQTtqM, {from: accounts[4]});
		const addressFwpO6x8 = accounts[5]
		const uintowRtpsV = BigInt("1090")
		const uintG64EitD = BigInt("1560")
		const uintPEjpz0U = BigInt("1677")
		const address4xsfKG = await MarsStakingRewardscjpkPz.owner.call({from: accounts[1]});
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressFwpO6x8, {from: accounts[1]});
		const uint256aHkEN4H = await MarsStakingRewardscjpkPz.stake.call(uintowRtpsV, {from: accounts[2]});
		await MarsStakingRewardscjpkPz.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256vuEm98 = await MarsStakingRewardscjpkPz.notifyRewardAmount.call(uintPEjpz0U, uintG64EitD, {from: accounts[3]});

		assert.equal(address4xsfKG, 0x04aafA5744207Cf57084d2921233bFBe16cb4a29)
		assert.equal(uint256ZChCztR, BigInt("0"))
		await expect(MarsStakingRewardscjpkPz.stake.call(uintowRtpsV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressC1sxEQH = accounts[0]
		const addresskYSJqbs = accounts[2]
		const addressyJmmdgs = accounts[3]
		const MarsStakingRewardsoDLFtv = await MarsStakingRewards.new(addressC1sxEQH, addresskYSJqbs, addressyJmmdgs, {from: "0x0000000000000000000000000000000000000001"});
		const addressLTAA8io = accounts[2]
		const addressdngUZFD = accounts[2]
		const addressT3EGrRG = await MarsStakingRewardsoDLFtv.updateReward.call(addressLTAA8io, {from: accounts[5]});
		await MarsStakingRewardsoDLFtv.exit.call({from: accounts[0]});
		const uint256VEyZs8M = await MarsStakingRewardsoDLFtv.balanceOf.call(addressdngUZFD, {from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressBUQQwcf = accounts[5]
		const addresscgiJRYN = accounts[0]
		const addressdsC4U1L = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressBUQQwcf, addresscgiJRYN, addressdsC4U1L, {from: accounts[4]});
		const addressfJ7FyFT = accounts[0]
		const addressk8jhOZP = accounts[4]
		const uintWvmTWml = BigInt("1090")
		const addressQNFRPt0 = accounts[4]
		const uintz0Oa8PI = BigInt("1560")
		const uintwMIRixt = BigInt("1677")
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressfJ7FyFT, {from: accounts[1]});
		const addressMZDHeR4 = await MarsStakingRewardscjpkPz.transferOwnership.call(addressk8jhOZP, {from: accounts[4]});
		const uint256aHkEN4H = await MarsStakingRewardscjpkPz.stake.call(uintWvmTWml, {from: accounts[2]});
		const uint256brZjP7E = await MarsStakingRewardscjpkPz.totalSupply.call({from: accounts[3]});
		await MarsStakingRewardscjpkPz.onlyRewardsDistribution.call({from: accounts[0]});
		const addressAaF33oZ = await MarsStakingRewardscjpkPz.setRewardsDistribution.call(addressQNFRPt0, {from: accounts[5]});
		const uint256vuEm98 = await MarsStakingRewardscjpkPz.notifyRewardAmount.call(uintwMIRixt, uintz0Oa8PI, {from: accounts[3]});

		assert.equal(uint256ZChCztR, BigInt("0"))
		await expect(MarsStakingRewardscjpkPz.stake.call(uintWvmTWml, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressX6A8fct = accounts[5]
		const addresstFBAjCH = accounts[0]
		const address9kkhwc = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressX6A8fct, addresstFBAjCH, address9kkhwc, {from: accounts[4]});
		const addressyHhute8 = accounts[2]
		const uintEZf2NAd = BigInt("401")
		const addressFelfTiz = accounts[0]
		const addressEBm1aZG = accounts[0]
		const uint256t1W1bTA = await MarsStakingRewardscjpkPz.earned.call(addressyHhute8, {from: accounts[2]});
		const addressANFZPqB = await MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressFelfTiz, uintEZf2NAd, {from: accounts[4]});
		await MarsStakingRewardscjpkPz.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressEBm1aZG, {from: accounts[1]});

		assert.equal(uint256t1W1bTA, BigInt("0"))
		await expect(MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressFelfTiz, uintEZf2NAd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLitzXnW = accounts[5]
		const addressSK4x5Fb = accounts[0]
		const addresseWSg4od = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressLitzXnW, addressSK4x5Fb, addresseWSg4od, {from: accounts[4]});
		const addresswLcbDx7 = accounts[2]
		const uintQzdAD3n = BigInt("401")
		const addressnKU3HKm = accounts[5]
		const addressjYJSO12 = accounts[0]
		const uinttcq360c = BigInt("1861")
		const uintci1zBO = BigInt("719")
		const uint256t1W1bTA = await MarsStakingRewardscjpkPz.earned.call(addresswLcbDx7, {from: accounts[2]});
		const addressANFZPqB = await MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressnKU3HKm, uintQzdAD3n, {from: accounts[4]});
		await MarsStakingRewardscjpkPz.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressjYJSO12, {from: accounts[1]});
		const uint256mDJd79a = await MarsStakingRewardscjpkPz.notifyRewardAmount.call(uintci1zBO, uinttcq360c, {from: accounts[2]});

		assert.equal(uint256t1W1bTA, BigInt("0"))
		await expect(MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressnKU3HKm, uintQzdAD3n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressHIDT4Wo = accounts[5]
		const addressBUWLBZT = accounts[0]
		const addressFz0PZp = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressHIDT4Wo, addressBUWLBZT, addressFz0PZp, {from: accounts[4]});
		const addressfS3CDnc = accounts[0]
		const uint4yAbL2 = BigInt("230")
		const address8lPAsb = accounts[3]
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressfS3CDnc, {from: accounts[1]});
		await MarsStakingRewardscjpkPz.renounceOwnership.call({from: accounts[4]});
		const addressa8ALrS3 = await MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(address8lPAsb, uint4yAbL2, {from: accounts[4]});

		assert.equal(uint256ZChCztR, BigInt("0"))
		await expect(MarsStakingRewardscjpkPz.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMU9M9vT = accounts[5]
		const addressrxkjK74 = accounts[0]
		const addressIgpW1HR = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressMU9M9vT, addressrxkjK74, addressIgpW1HR, {from: accounts[4]});
		const addressMGWa7KE = "0x0000000000000000000000000000000000000000"
		const addressq5r0lgC = accounts[2]
		const uintk2xbFH7 = BigInt("401")
		const addressqMUxTN = accounts[1]
		const uinteGoxjAP = BigInt("82")
		const addressctQ460S = accounts[3]
		const addressfzsuzHE = accounts[0]
		const addressMebQXkx = accounts[3]
		const addressgYimpoY = await MarsStakingRewardscjpkPz.transferOwnership.call(addressMGWa7KE, {from: accounts[4]});
		const uint256psL5BGV = await MarsStakingRewardscjpkPz.totalSupply.call({from: accounts[2]});
		const uint256M92Zhuk = await MarsStakingRewardscjpkPz.totalSupply.call({from: accounts[2]});
		const uint256t1W1bTA = await MarsStakingRewardscjpkPz.earned.call(addressq5r0lgC, {from: accounts[2]});
		const addressANFZPqB = await MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressqMUxTN, uintk2xbFH7, {from: accounts[4]});
		const addressxs3URRG = await MarsStakingRewardscjpkPz.inCaseTokensGetStuck.call(addressctQ460S, uinteGoxjAP, {from: accounts[0]});
		await MarsStakingRewardscjpkPz.onlyOwner.call({from: accounts[1]});
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressfzsuzHE, {from: accounts[1]});
		const addressRfcEt2d = await MarsStakingRewardscjpkPz.transferOwnership.call(addressMebQXkx, {from: accounts[4]});

		await expect(MarsStakingRewardscjpkPz.transferOwnership.call(addressMGWa7KE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSvHqiEB = accounts[5]
		const addressFhInSGr = accounts[0]
		const addresszMbbz8 = accounts[5]
		const MarsStakingRewardscjpkPz = await MarsStakingRewards.new(addressSvHqiEB, addressFhInSGr, addresszMbbz8, {from: accounts[4]});
		const addresslJQTHaK = accounts[1]
		const addressvkLvXN8 = accounts[6]
		const addresspbqT36g = await MarsStakingRewardscjpkPz.setRewardsDistribution.call(addresslJQTHaK, {from: accounts[4]});
		const uint256ZChCztR = await MarsStakingRewardscjpkPz.earned.call(addressvkLvXN8, {from: accounts[1]});

		assert.equal(uint256ZChCztR, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresscClHwGD = accounts[0]
		const addressnHPvDl5 = accounts[0]
		const addressqpwPz4G = accounts[1]
		const MarsStakingRewardsFc9P8Ac = await MarsStakingRewards.new(addresscClHwGD, addressnHPvDl5, addressqpwPz4G, {from: accounts[3]});
		const uintPydzfwo = BigInt("217")
		const uintA1ZjjUW = BigInt("1849")
		const uintemS8bEM = BigInt("1700")
		const uint256FLaBqOP = await MarsStakingRewardsFc9P8Ac.totalSupply.call({from: accounts[3]});
		const uint256VfCj4g = await MarsStakingRewardsFc9P8Ac.notifyRewardAmount.call(uintA1ZjjUW, uintPydzfwo, {from: accounts[0]});
		const uint256lYJwut8 = await MarsStakingRewardsFc9P8Ac.withdraw.call(uintemS8bEM, {from: accounts[1]});

		assert.equal(uint256FLaBqOP, BigInt("0"))
		await expect(MarsStakingRewardsFc9P8Ac.notifyRewardAmount.call(uintA1ZjjUW, uintPydzfwo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
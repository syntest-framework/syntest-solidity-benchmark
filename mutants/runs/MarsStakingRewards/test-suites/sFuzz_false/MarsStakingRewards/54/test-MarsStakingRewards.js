const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressgKcO61z = accounts[0]
		const addressI2HXkUz = accounts[1]
		const addressEUVdJEH = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressgKcO61z, addressI2HXkUz, addressEUVdJEH, {from: accounts[4]});
		const addressZpCMkZr = accounts[0]
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressZpCMkZr, {from: accounts[2]});
		await MarsStakingRewardsxMwLPA5.getReward.call({from: accounts[2]});

		await expect(MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressZpCMkZr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbVgIqfK = accounts[0]
		const addresshhCyW8T = accounts[3]
		const addressN4n9KoA = accounts[1]
		const MarsStakingRewardspWRn7St = await MarsStakingRewards.new(addressbVgIqfK, addresshhCyW8T, addressN4n9KoA, {from: accounts[1]});
		const uintbMS4cz3 = BigInt("1962")
		const addressg3thWgS = "0x0000000000000000000000000000000000000001"
		await MarsStakingRewardspWRn7St.onlyRewardsDistribution.call({from: accounts[2]});
		const addressACaBPmC = await MarsStakingRewardspWRn7St.inCaseTokensGetStuck.call(addressg3thWgS, uintbMS4cz3, {from: accounts[1]});

		await expect(MarsStakingRewardspWRn7St.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstUxsOG = "0x0000000000000000000000000000000000000001"
		const addressAEDEstg = accounts[1]
		const addressAcmGQkG = accounts[1]
		const MarsStakingRewardsLVCtnU = await MarsStakingRewards.new(addresstUxsOG, addressAEDEstg, addressAcmGQkG, {from: accounts[5]});
		const uint256AdBKs9W = await MarsStakingRewardsLVCtnU.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256A6zRO9m = await MarsStakingRewardsLVCtnU.totalSupply.call({from: accounts[1]});
		await MarsStakingRewardsLVCtnU.getReward.call({from: accounts[0]});
		const boolDxZuxhO = await MarsStakingRewardsLVCtnU.isOwner.call({from: accounts[2]});

		assert.equal(uint256A6zRO9m, BigInt("0"))
		assert.equal(uint256AdBKs9W, BigInt("0"))
		await expect(MarsStakingRewardsLVCtnU.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressHMJp8nf = accounts[1]
		const addressLguyDnK = accounts[0]
		const addressVRtZsbj = accounts[1]
		const MarsStakingRewardsbuNp9JA = await MarsStakingRewards.new(addressHMJp8nf, addressLguyDnK, addressVRtZsbj, {from: accounts[2]});
		const addressz6qx9S = accounts[3]
		const addressrtVt5Vp = accounts[4]
		const boolkJi6HcR = await MarsStakingRewardsbuNp9JA.isOwner.call({from: accounts[0]});
		const uint256kk4MY6 = await MarsStakingRewardsbuNp9JA.rewardPerToken.call({from: accounts[2]});
		const addressgKewCUv = await MarsStakingRewardsbuNp9JA.updateReward.call(addressz6qx9S, {from: accounts[3]});
		await MarsStakingRewardsbuNp9JA.onlyOwner.call({from: accounts[1]});
		const uint256qYS84ye = await MarsStakingRewardsbuNp9JA.balanceOf.call(addressrtVt5Vp, {from: accounts[2]});

		assert.equal(boolkJi6HcR, false)
		assert.equal(uint256kk4MY6, BigInt("0"))
		await expect(MarsStakingRewardsbuNp9JA.updateReward.call(addressz6qx9S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxIqeB6 = accounts[0]
		const addressZrOVcYS = accounts[1]
		const addressOKDD0kK = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressxIqeB6, addressZrOVcYS, addressOKDD0kK, {from: accounts[4]});
		const addressxSxyZgy = accounts[1]
		const addressCKG4mxj = accounts[1]
		const uint256mPVOVsl = await MarsStakingRewardsxMwLPA5.earned.call(addressxSxyZgy, {from: "0x0000000000000000000000000000000000000001"});
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressCKG4mxj, {from: accounts[2]});
		const uint256cbjPLQ = await MarsStakingRewardsxMwLPA5.rewardPerToken.call({from: accounts[4]});
		await MarsStakingRewardsxMwLPA5.getReward.call({from: accounts[2]});

		assert.equal(uint256mPVOVsl, BigInt("0"))
		await expect(MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressCKG4mxj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstZoRjZ9 = accounts[0]
		const addresscIdMb3K = accounts[1]
		const addressV7oYX8c = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addresstZoRjZ9, addresscIdMb3K, addressV7oYX8c, {from: accounts[4]});
		const addresszlSf2v = accounts[1]
		const addressIwy1ZBw = accounts[1]
		await MarsStakingRewardsxMwLPA5.exit.call({from: accounts[0]});
		await MarsStakingRewardsxMwLPA5.onlyOwner.call({from: accounts[3]});
		const uint256mPVOVsl = await MarsStakingRewardsxMwLPA5.earned.call(addresszlSf2v, {from: "0x0000000000000000000000000000000000000001"});
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressIwy1ZBw, {from: accounts[2]});
		const uint256cbjPLQ = await MarsStakingRewardsxMwLPA5.rewardPerToken.call({from: accounts[4]});
		await MarsStakingRewardsxMwLPA5.getReward.call({from: accounts[2]});
		const addressREMoeqq = await MarsStakingRewardsxMwLPA5.owner.call({from: accounts[4]});

		await expect(MarsStakingRewardsxMwLPA5.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressesD0EDl = accounts[0]
		const address0RbrGN = accounts[1]
		const addressk9ls9BT = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressesD0EDl, address0RbrGN, addressk9ls9BT, {from: accounts[4]});
		const addressoVUZGV9 = accounts[0]
		const uintoHMfppq = BigInt("373")
		const addressJfiCzYW = accounts[2]
		const uint256LD3EDeL = await MarsStakingRewardsxMwLPA5.balanceOf.call(addressoVUZGV9, {from: accounts[1]});
		const uint256zXqb1A1 = await MarsStakingRewardsxMwLPA5.stake.call(uintoHMfppq, {from: accounts[4]});
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressJfiCzYW, {from: accounts[2]});

		assert.equal(uint256LD3EDeL, BigInt("0"))
		await expect(MarsStakingRewardsxMwLPA5.stake.call(uintoHMfppq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmAmkZEa = accounts[4]
		const addressvgii89n = accounts[5]
		const addressXLAswqW = accounts[4]
		const MarsStakingRewardsL3kspJR = await MarsStakingRewards.new(addressmAmkZEa, addressvgii89n, addressXLAswqW, {from: accounts[4]});
		await MarsStakingRewardsL3kspJR.renounceOwnership.call({from: accounts[4]});
		await MarsStakingRewardsL3kspJR.renounceOwnership.call({from: accounts[3]});
		await MarsStakingRewardsL3kspJR.exit.call({from: accounts[4]});
		await MarsStakingRewardsL3kspJR.nonReentrant.call({from: accounts[2]});
		const uint256xQ0NOS4 = await MarsStakingRewardsL3kspJR.getRewardForDuration.call({from: accounts[2]});

		await expect(MarsStakingRewardsL3kspJR.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxWw4pQ7 = accounts[0]
		const addressiJAW38O = accounts[1]
		const addressezfRVmo = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressxWw4pQ7, addressiJAW38O, addressezfRVmo, {from: accounts[4]});
		const uintjK50yom = BigInt("1415")
		const uintTOzDbh = BigInt("1165")
		const addressFXir8CV = accounts[2]
		const uint256J34rXd6 = await MarsStakingRewardsxMwLPA5.notifyRewardAmount.call(uintTOzDbh, uintjK50yom, {from: accounts[4]});
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressFXir8CV, {from: accounts[2]});

		await expect(MarsStakingRewardsxMwLPA5.notifyRewardAmount.call(uintTOzDbh, uintjK50yom, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRsEBcR6 = accounts[0]
		const addressOb8Pjlq = accounts[1]
		const addresstbqhx5m = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressRsEBcR6, addressOb8Pjlq, addresstbqhx5m, {from: accounts[4]});
		const uintrfdAPYH = BigInt("1452")
		const addressCUSF671 = accounts[6]
		const boolZJ0MwDG = await MarsStakingRewardsxMwLPA5.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CEbHJim = await MarsStakingRewardsxMwLPA5.getRewardForDuration.call({from: accounts[2]});
		const uint256yBE6wzv = await MarsStakingRewardsxMwLPA5.stake.call(uintrfdAPYH, {from: accounts[4]});
		const uint256rDvwUrv = await MarsStakingRewardsxMwLPA5.earned.call(addressCUSF671, {from: accounts[0]});

		assert.equal(boolZJ0MwDG, false)
		assert.equal(uint256CEbHJim, BigInt("0"))
		await expect(MarsStakingRewardsxMwLPA5.stake.call(uintrfdAPYH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMwI3XuZ = accounts[0]
		const addressDRnNZ3 = accounts[1]
		const addressPznokBT = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressMwI3XuZ, addressDRnNZ3, addressPznokBT, {from: accounts[4]});
		const addressKC0I59u = accounts[2]
		const addresszv9ECF = accounts[6]
		const addressxIwrWlH = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressKC0I59u, {from: accounts[4]});
		const uint256rDvwUrv = await MarsStakingRewardsxMwLPA5.earned.call(addresszv9ECF, {from: accounts[0]});

		assert.equal(uint256rDvwUrv, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressy0rC51X = accounts[0]
		const addressF20kIpv = accounts[1]
		const addressklOFmD = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressy0rC51X, addressF20kIpv, addressklOFmD, {from: accounts[4]});
		const addressc4FfmZk = accounts[5]
		const addressrrgV3ZN = "0x0000000000000000000000000000000000000001"
		const uint256rDvwUrv = await MarsStakingRewardsxMwLPA5.earned.call(addressc4FfmZk, {from: accounts[0]});
		const addressdhUMKHn = await MarsStakingRewardsxMwLPA5.transferOwnership.call(addressrrgV3ZN, {from: accounts[4]});
		const uint256UVYmQmO = await MarsStakingRewardsxMwLPA5.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256UVYmQmO, BigInt("0"))
		assert.equal(uint256rDvwUrv, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressHFcLKbl = accounts[0]
		const addressC56E45I = accounts[1]
		const addressKCztpfR = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addressHFcLKbl, addressC56E45I, addressKCztpfR, {from: accounts[4]});
		const addressGKR01J8 = accounts[6]
		const uint256rDvwUrv = await MarsStakingRewardsxMwLPA5.earned.call(addressGKR01J8, {from: accounts[0]});
		const uint256E1FwLoX = await MarsStakingRewardsxMwLPA5.rewardPerToken.call({from: accounts[4]});
		const addressAsWk91P = await MarsStakingRewardsxMwLPA5.owner.call({from: accounts[0]});

		assert.equal(addressAsWk91P, 0xfE08cB40e4AD01DB25177724Eba8B1D899030726)
		assert.equal(uint256E1FwLoX, BigInt("0"))
		assert.equal(uint256rDvwUrv, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressfAmFMaL = accounts[0]
		const addresst5lQHQP = "0x0000000000000000000000000000000000000001"
		const addressDgvCyh = accounts[3]
		const MarsStakingRewardsPB7DCaS = await MarsStakingRewards.new(addressfAmFMaL, addresst5lQHQP, addressDgvCyh, {from: "0x0000000000000000000000000000000000000001"});
		const uintWnYng0n = BigInt("180")
		const addressBoBfTAi = accounts[5]
		const addresssaMNH6 = accounts[1]
		const bytedS38Mn = "0x1c1a1b121a05191f1e1a110a030d0a1a1d0907170f091b121f0c1d1a0c1b0118"
		const bytetRbtERF = "0x161a0218141a050015010c1a1b150d181c1b0913010b03060c09031e14160c02"
		const uintKPEYzNU = BigInt("126")
		const uintNGqxIZB = BigInt("1144")
		const uints4DdArX = BigInt("1085")
		const bool9JhxDg = await MarsStakingRewardsPB7DCaS.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsPB7DCaS.nonReentrant.call({from: accounts[4]});
		const addresssDDz1sX = await MarsStakingRewardsPB7DCaS.inCaseTokensGetStuck.call(addressBoBfTAi, uintWnYng0n, {from: accounts[1]});
		const addressN4lWiYt = await MarsStakingRewardsPB7DCaS.updateReward.call(addresssaMNH6, {from: accounts[3]});
		const uint256Zge0KYj = await MarsStakingRewardsPB7DCaS.stakeWithPermit.call(uints4DdArX, uintNGqxIZB, uintKPEYzNU, bytetRbtERF, bytedS38Mn, {from: accounts[2]});
		await MarsStakingRewardsPB7DCaS.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MarsStakingRewards', async () => {
		const addressNdFIeqA = accounts[3]
		const addressLOuYO1Y = accounts[0]
		const addressIDPB1W5 = accounts[4]
		const MarsStakingRewardsFg1xXTN = await MarsStakingRewards.new(addressNdFIeqA, addressLOuYO1Y, addressIDPB1W5, {from: accounts[3]});
		const uintvAlRVXT = BigInt("871")
		const uintjBtdQGj = BigInt("1108")
		const uinthNW4JBt = BigInt("173")
		const uint256Ov3L3hC = await MarsStakingRewardsFg1xXTN.notifyRewardAmount.call(uintjBtdQGj, uintvAlRVXT, {from: accounts[3]});
		const uint256dYXI1Je = await MarsStakingRewardsFg1xXTN.withdraw.call(uinthNW4JBt, {from: accounts[3]});
		const uint256TfUl93T = await MarsStakingRewardsFg1xXTN.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256xSVAosv = await MarsStakingRewardsFg1xXTN.totalSupply.call({from: accounts[3]});

		await expect(MarsStakingRewardsFg1xXTN.notifyRewardAmount.call(uintjBtdQGj, uintvAlRVXT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address7J3yPh = accounts[4]
		const addressAovP9Or = accounts[1]
		const addressk4tw431 = accounts[2]
		const MarsStakingRewardsbv2jXr3 = await MarsStakingRewards.new(address7J3yPh, addressAovP9Or, addressk4tw431, {from: accounts[4]});
		const uintgPlDTkJ = BigInt("309")
		const addressRT98lSm = accounts[2]
		const addressbBVsyuP = accounts[2]
		const byteYWTGdHJ = "0x1b0e1d071d160514051b18121a101719201614180717170115091a14131e1f0d"
		const byteWU1xKfu = "0x13021f1b1e05130806110d19010b0813110d06030e12041c071c141a0c020410"
		const uintn6G8bZv = BigInt("28")
		const uintf4aPvO5 = BigInt("1879")
		const uintTamWd0X = BigInt("198")
		const addressuyP1jYT = accounts[0]
		const addressraDhbd6 = await MarsStakingRewardsbv2jXr3.inCaseTokensGetStuck.call(addressRT98lSm, uintgPlDTkJ, {from: accounts[4]});
		const addresskEPYEXr = await MarsStakingRewardsbv2jXr3.transferOwnership.call(addressbBVsyuP, {from: accounts[0]});
		const uint256KhPE455 = await MarsStakingRewardsbv2jXr3.stakeWithPermit.call(uintTamWd0X, uintf4aPvO5, uintn6G8bZv, byteWU1xKfu, byteYWTGdHJ, {from: accounts[1]});
		const addressYNfJrVs = await MarsStakingRewardsbv2jXr3.transferOwnership.call(addressuyP1jYT, {from: accounts[4]});
		await MarsStakingRewardsbv2jXr3.exit.call({from: accounts[0]});

		await expect(MarsStakingRewardsbv2jXr3.inCaseTokensGetStuck.call(addressRT98lSm, uintgPlDTkJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspWfBKr = accounts[0]
		const addressCwXVTBK = accounts[1]
		const addressVt8bNvG = accounts[0]
		const MarsStakingRewardsxMwLPA5 = await MarsStakingRewards.new(addresspWfBKr, addressCwXVTBK, addressVt8bNvG, {from: accounts[4]});
		const uintMF6tFDo = BigInt("375")
		const addressQe7Jz5B = accounts[3]
		const addressn3F6C7j = accounts[2]
		const addressjqsiSoI = await MarsStakingRewardsxMwLPA5.inCaseTokensGetStuck.call(addressQe7Jz5B, uintMF6tFDo, {from: accounts[4]});
		const addressKJObq7j = await MarsStakingRewardsxMwLPA5.setRewardsDistribution.call(addressn3F6C7j, {from: accounts[2]});

		await expect(MarsStakingRewardsxMwLPA5.inCaseTokensGetStuck.call(addressQe7Jz5B, uintMF6tFDo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
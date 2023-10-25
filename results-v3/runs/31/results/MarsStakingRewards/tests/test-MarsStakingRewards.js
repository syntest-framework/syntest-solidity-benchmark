const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressT75qvfD = "0x0000000000000000000000000000000000000001"
		const addressD4ebIc6 = accounts[4]
		const addressIWxRALg = accounts[2]
		const MarsStakingRewardsYsyuXYb = await MarsStakingRewards.new(addressT75qvfD, addressD4ebIc6, addressIWxRALg, {from: accounts[5]});
		const addressEz7Amtf = accounts[1]
		const addressFUdTaBp = accounts[0]
		const addressOXEyyxb = await MarsStakingRewardsYsyuXYb.transferOwnership.call(addressEz7Amtf, {from: accounts[4]});
		const addressNVTb0S7 = await MarsStakingRewardsYsyuXYb.transferOwnership.call(addressFUdTaBp, {from: accounts[2]});
		await MarsStakingRewardsYsyuXYb.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const boolVMgoq1f = await MarsStakingRewardsYsyuXYb.isOwner.call({from: accounts[3]});
		await MarsStakingRewardsYsyuXYb.renounceOwnership.call({from: accounts[2]});

		await expect(MarsStakingRewardsYsyuXYb.transferOwnership.call(addressEz7Amtf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressK9H5NQJ = accounts[2]
		const addressVjQtv1O = accounts[1]
		const addressEtm7emN = accounts[4]
		const MarsStakingRewardsLIEMkO8 = await MarsStakingRewards.new(addressK9H5NQJ, addressVjQtv1O, addressEtm7emN, {from: accounts[3]});
		const bytes9bht3L = "0x060c151d0d091812170216150606191f111d1c0f0f13100603001a051f081714"
		const byteiDNVsmk = "0x0f0315091702161410010e150b19201a0c13020e11171a1008130c202002101c"
		const uintpqzb4b1 = BigInt("64")
		const uintJQX85U = BigInt("355")
		const uinthnQdmR6 = BigInt("341")
		const addressSAaYDeC = accounts[3]
		const uint256FFAyZDQ = await MarsStakingRewardsLIEMkO8.stakeWithPermit.call(uinthnQdmR6, uintJQX85U, uintpqzb4b1, byteiDNVsmk, bytes9bht3L, {from: accounts[1]});
		const uint256DcjDbR3 = await MarsStakingRewardsLIEMkO8.rewardPerToken.call({from: accounts[0]});
		const uint256abmsdlN = await MarsStakingRewardsLIEMkO8.earned.call(addressSAaYDeC, {from: accounts[1]});

		await expect(MarsStakingRewardsLIEMkO8.stakeWithPermit.call(uinthnQdmR6, uintJQX85U, uintpqzb4b1, byteiDNVsmk, bytes9bht3L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscuZ8FzN = accounts[2]
		const addressUgPQxeg = accounts[3]
		const addressBTrDAq = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addresscuZ8FzN, addressUgPQxeg, addressBTrDAq, {from: accounts[5]});
		const addressviRkvR = accounts[2]
		const addresscCBWA4v = "0x0000000000000000000000000000000000000001"
		const uint256RN9qzar = await MarsStakingRewardsPqZKCNj.rewardPerToken.call({from: accounts[4]});
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(addressviRkvR, {from: accounts[4]});
		await MarsStakingRewardsPqZKCNj.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsPqZKCNj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsPqZKCNj.exit.call({from: accounts[2]});
		const addressOJszwuU = await MarsStakingRewardsPqZKCNj.updateReward.call(addresscCBWA4v, {from: accounts[4]});

		assert.equal(uint256RN9qzar, BigInt("0"))
		assert.equal(uint256X8YGEV7, BigInt("0"))
		await expect(MarsStakingRewardsPqZKCNj.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressypp6UIt = accounts[4]
		const addressI0X6ANB = accounts[4]
		const addressIHtj1H = accounts[2]
		const MarsStakingRewardsUstzsuz = await MarsStakingRewards.new(addressypp6UIt, addressI0X6ANB, addressIHtj1H, {from: accounts[4]});
		const uintNbpWNaK = BigInt("1585")
		const uintcaymi7 = BigInt("939")
		await MarsStakingRewardsUstzsuz.exit.call({from: accounts[2]});
		const boolA0ICFdL = await MarsStakingRewardsUstzsuz.isOwner.call({from: accounts[1]});
		await MarsStakingRewardsUstzsuz.renounceOwnership.call({from: accounts[1]});
		const uint256LZaCCcg = await MarsStakingRewardsUstzsuz.notifyRewardAmount.call(uintcaymi7, uintNbpWNaK, {from: accounts[2]});
		const uint256eGCZwbJ = await MarsStakingRewardsUstzsuz.totalSupply.call({from: accounts[1]});

		await expect(MarsStakingRewardsUstzsuz.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressT2g5dEm = accounts[2]
		const addressYzcOZKP = accounts[2]
		const address6hlQ7B = accounts[4]
		const MarsStakingRewardso2I4f2c = await MarsStakingRewards.new(addressT2g5dEm, addressYzcOZKP, address6hlQ7B, {from: "0x0000000000000000000000000000000000000001"});
		const addressaF1G7dR = accounts[0]
		await MarsStakingRewardso2I4f2c.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256LYqhxrn = await MarsStakingRewardso2I4f2c.balanceOf.call(addressaF1G7dR, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardso2I4f2c.nonReentrant.call({from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressrWsTGKp = accounts[3]
		const addressZqjZ9Lq = accounts[3]
		const addressSiKX4xB = accounts[5]
		const MarsStakingRewardsQ9XE5d6 = await MarsStakingRewards.new(addressrWsTGKp, addressZqjZ9Lq, addressSiKX4xB, {from: accounts[1]});
		const addressPkKI5n5 = accounts[3]
		await MarsStakingRewardsQ9XE5d6.renounceOwnership.call({from: accounts[1]});
		const uint256RtSZxnS = await MarsStakingRewardsQ9XE5d6.getRewardForDuration.call({from: accounts[0]});
		const boolXxWxeOh = await MarsStakingRewardsQ9XE5d6.isOwner.call({from: accounts[1]});
		const uint256IXPBLHR = await MarsStakingRewardsQ9XE5d6.balanceOf.call(addressPkKI5n5, {from: accounts[5]});

		await expect(MarsStakingRewardsQ9XE5d6.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressESDYuZ3 = accounts[2]
		const addressylU3Xn1 = "0x0000000000000000000000000000000000000001"
		const addresswnhRVla = accounts[0]
		const MarsStakingRewardsdLoczMt = await MarsStakingRewards.new(addressESDYuZ3, addressylU3Xn1, addresswnhRVla, {from: accounts[3]});
		const uintDZRxRLU = BigInt("437")
		const uintJ91ju8 = BigInt("1475")
		const uint256HJDXMmQ = await MarsStakingRewardsdLoczMt.notifyRewardAmount.call(uintJ91ju8, uintDZRxRLU, {from: accounts[4]});
		const uint256oaRhqF0 = await MarsStakingRewardsdLoczMt.rewardPerToken.call({from: accounts[0]});

		await expect(MarsStakingRewardsdLoczMt.notifyRewardAmount.call(uintJ91ju8, uintDZRxRLU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQt1ebJ7 = accounts[2]
		const addressSg6ZHb = accounts[3]
		const addressB15ymc3 = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addressQt1ebJ7, addressSg6ZHb, addressB15ymc3, {from: accounts[5]});
		const uintVb9fAsy = BigInt("1527")
		const uintGZK4vaL = BigInt("599")
		const address7Rxwvy = accounts[2]
		const addressS6pvkdm = accounts[3]
		const uint256Owxvnm5 = await MarsStakingRewardsPqZKCNj.notifyRewardAmount.call(uintGZK4vaL, uintVb9fAsy, {from: accounts[2]});
		const uint256RN9qzar = await MarsStakingRewardsPqZKCNj.rewardPerToken.call({from: accounts[4]});
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(address7Rxwvy, {from: accounts[4]});
		const addresseKjH3AB = await MarsStakingRewardsPqZKCNj.setRewardsDistribution.call(addressS6pvkdm, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsPqZKCNj.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsPqZKCNj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsPqZKCNj.exit.call({from: accounts[2]});

		await expect(MarsStakingRewardsPqZKCNj.notifyRewardAmount.call(uintGZK4vaL, uintVb9fAsy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswdtcjhf = accounts[2]
		const addressxfxqe32 = accounts[3]
		const addressyQHXBk4 = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addresswdtcjhf, addressxfxqe32, addressyQHXBk4, {from: accounts[5]});
		const addresshqKMnno = accounts[2]
		const addressXMxbCQq = accounts[2]
		const addressptPTIIN = accounts[4]
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(addresshqKMnno, {from: accounts[4]});
		const uint256oKXPjSt = await MarsStakingRewardsPqZKCNj.getRewardForDuration.call({from: accounts[1]});
		const uint256dVtkKrp = await MarsStakingRewardsPqZKCNj.totalSupply.call({from: accounts[2]});
		const addressRQGI3Ku = await MarsStakingRewardsPqZKCNj.updateReward.call(addressXMxbCQq, {from: accounts[2]});
		await MarsStakingRewardsPqZKCNj.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsPqZKCNj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressOJszwuU = await MarsStakingRewardsPqZKCNj.updateReward.call(addressptPTIIN, {from: accounts[4]});

		assert.equal(uint256X8YGEV7, BigInt("0"))
		assert.equal(uint256dVtkKrp, BigInt("0"))
		assert.equal(uint256oKXPjSt, BigInt("0"))
		await expect(MarsStakingRewardsPqZKCNj.updateReward.call(addressXMxbCQq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslfadiDT = accounts[2]
		const addressslAseCM = accounts[3]
		const addressf3xcBNQ = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addresslfadiDT, addressslAseCM, addressf3xcBNQ, {from: accounts[5]});
		const addressffSELT6 = accounts[1]
		const addressv0XMtqu = accounts[3]
		const uint256RN9qzar = await MarsStakingRewardsPqZKCNj.rewardPerToken.call({from: accounts[4]});
		const uint256sQ4vwBw = await MarsStakingRewardsPqZKCNj.earned.call(addressffSELT6, {from: accounts[1]});
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(addressv0XMtqu, {from: accounts[4]});
		await MarsStakingRewardsPqZKCNj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RN9qzar, BigInt("0"))
		assert.equal(uint256X8YGEV7, BigInt("0"))
		assert.equal(uint256sQ4vwBw, BigInt("0"))
		await expect(MarsStakingRewardsPqZKCNj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyML5DzA = accounts[2]
		const addressOlCg5nk = "0x0000000000000000000000000000000000000001"
		const addresst5ARBpH = accounts[3]
		const MarsStakingRewardsvkRavLW = await MarsStakingRewards.new(addressyML5DzA, addressOlCg5nk, addresst5ARBpH, {from: accounts[5]});
		const addressR3eMWa = accounts[2]
		const byteLP9rHq2 = "0x070c101f120e02171012050c08131f08180f1b0d061e110b1005141319040b15"
		const byteK4qWnNz = "0x070511110e2002131f0e160c100e121c051d0f1308020217201b180f090c200f"
		const uintqQkUX4c = BigInt("46")
		const uintNStRp1z = BigInt("1276")
		const uintKWtMBuF = BigInt("72")
		const uint256c9MUC9b = await MarsStakingRewardsvkRavLW.earned.call(addressR3eMWa, {from: "0x0000000000000000000000000000000000000001"});
		const addressE2Vni0U = await MarsStakingRewardsvkRavLW.owner.call({from: accounts[0]});
		await MarsStakingRewardsvkRavLW.nonReentrant.call({from: accounts[1]});
		const uint256KzkdcZX = await MarsStakingRewardsvkRavLW.stakeWithPermit.call(uintKWtMBuF, uintNStRp1z, uintqQkUX4c, byteK4qWnNz, byteLP9rHq2, {from: accounts[0]});

		assert.equal(addressE2Vni0U, 0x61e3f73f6589945151e358359088c29704C91bF7)
		assert.equal(uint256c9MUC9b, BigInt("0"))
		await expect(MarsStakingRewardsvkRavLW.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSVTZdTb = accounts[2]
		const addressYxclykx = "0x0000000000000000000000000000000000000001"
		const addressChRuHzL = accounts[3]
		const MarsStakingRewardsvkRavLW = await MarsStakingRewards.new(addressSVTZdTb, addressYxclykx, addressChRuHzL, {from: accounts[5]});
		const addressqnAFav4 = accounts[3]
		const addressvP6d6sA = accounts[4]
		const bytegdUcXob = "0x070c101f120e02171012050c08131f08180f1b0d061e110b1005141319040b15"
		const bytes2BOA0q = "0x070511110e2002131f0e160c100e121c051d0f1308020217201b180f090c200f"
		const uintWTHs4ui = BigInt("46")
		const uintCZCT2d5 = BigInt("1276")
		const uintLAwGsRF = BigInt("72")
		const uint256c9MUC9b = await MarsStakingRewardsvkRavLW.earned.call(addressqnAFav4, {from: "0x0000000000000000000000000000000000000001"});
		const addressE2Vni0U = await MarsStakingRewardsvkRavLW.owner.call({from: accounts[0]});
		const addressTHqqfaQ = await MarsStakingRewardsvkRavLW.transferOwnership.call(addressvP6d6sA, {from: accounts[5]});
		await MarsStakingRewardsvkRavLW.nonReentrant.call({from: accounts[1]});
		const uint256KzkdcZX = await MarsStakingRewardsvkRavLW.stakeWithPermit.call(uintLAwGsRF, uintCZCT2d5, uintWTHs4ui, bytes2BOA0q, bytegdUcXob, {from: accounts[0]});

		assert.equal(addressE2Vni0U, 0x61e3f73f6589945151e358359088c29704C91bF7)
		assert.equal(uint256c9MUC9b, BigInt("0"))
		await expect(MarsStakingRewardsvkRavLW.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQ7typSD = accounts[3]
		const addresszFZ8gl8 = accounts[3]
		const addressA4MPcy4 = accounts[1]
		const MarsStakingRewardsHaqmLtv = await MarsStakingRewards.new(addressQ7typSD, addresszFZ8gl8, addressA4MPcy4, {from: accounts[2]});
		const addressxWAesxD = accounts[4]
		const addressHTvimWP = accounts[5]
		const uint256LiPTBxy = await MarsStakingRewardsHaqmLtv.earned.call(addressxWAesxD, {from: accounts[2]});
		const addressb0ee8ob = await MarsStakingRewardsHaqmLtv.setRewardsDistribution.call(addressHTvimWP, {from: accounts[2]});
		const uint256zBZNvFf = await MarsStakingRewardsHaqmLtv.getRewardForDuration.call({from: accounts[3]});

		assert.equal(uint256LiPTBxy, BigInt("0"))
		assert.equal(uint256zBZNvFf, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressdpU0PeL = accounts[2]
		const addressNri38Q = accounts[3]
		const addressLlKYJgJ = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addressdpU0PeL, addressNri38Q, addressLlKYJgJ, {from: accounts[5]});
		const addresskyJemne = accounts[1]
		const addressRyOErKN = accounts[3]
		const uinte6mUr1K = BigInt("560")
		const addressL9P0X3J = accounts[3]
		const bytemZ8i2Sh = "0x08180b01181004081b200d1a1a03190f1a0a080a0d1b15071314180f0b121803"
		const bytezJlFYmO = "0x0c1f15011b051516011a0e14160511170f0d160d181d0f00161a1c0112030a1e"
		const uintSSfLcba = BigInt("66")
		const uintnxjgqm = BigInt("20")
		const uintC2FOpch = BigInt("45")
		const uint256RN9qzar = await MarsStakingRewardsPqZKCNj.rewardPerToken.call({from: accounts[4]});
		const uint256sQ4vwBw = await MarsStakingRewardsPqZKCNj.earned.call(addresskyJemne, {from: accounts[1]});
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(addressRyOErKN, {from: accounts[4]});
		const addressCP0MmI = await MarsStakingRewardsPqZKCNj.inCaseTokensGetStuck.call(addressL9P0X3J, uinte6mUr1K, {from: accounts[5]});
		const uint256OeeZPG = await MarsStakingRewardsPqZKCNj.stakeWithPermit.call(uintC2FOpch, uintnxjgqm, uintSSfLcba, bytezJlFYmO, bytemZ8i2Sh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RN9qzar, BigInt("0"))
		assert.equal(uint256X8YGEV7, BigInt("0"))
		assert.equal(uint256sQ4vwBw, BigInt("0"))
		await expect(MarsStakingRewardsPqZKCNj.inCaseTokensGetStuck.call(addressL9P0X3J, uinte6mUr1K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslRmAcEK = accounts[2]
		const addressOXbukhf = accounts[3]
		const addressof4Lr38 = accounts[0]
		const MarsStakingRewardsPqZKCNj = await MarsStakingRewards.new(addresslRmAcEK, addressOXbukhf, addressof4Lr38, {from: accounts[5]});
		const addressbDTYDk = accounts[1]
		const addressfL82dq = accounts[4]
		const uint3siyRj = BigInt("560")
		const addressVsBslcH = accounts[0]
		const bytevLttJdU = "0x08180b01181004081b200d1a1a03190f1a0a080a0d1b15071314180f0b121803"
		const bytelk1ejnJ = "0x0c1f15011b051516011a0e14160511170f0d160d181d0f00161a1c0112030a1e"
		const uintH4l0Fy = BigInt("66")
		const uintMUgGOxE = BigInt("20")
		const uintqrQRKK = BigInt("45")
		const uint256RN9qzar = await MarsStakingRewardsPqZKCNj.rewardPerToken.call({from: accounts[4]});
		const uint256sQ4vwBw = await MarsStakingRewardsPqZKCNj.earned.call(addressbDTYDk, {from: accounts[1]});
		const uint256X8YGEV7 = await MarsStakingRewardsPqZKCNj.balanceOf.call(addressfL82dq, {from: accounts[4]});
		const addressCP0MmI = await MarsStakingRewardsPqZKCNj.inCaseTokensGetStuck.call(addressVsBslcH, uint3siyRj, {from: accounts[5]});
		const uint256OeeZPG = await MarsStakingRewardsPqZKCNj.stakeWithPermit.call(uintqrQRKK, uintMUgGOxE, uintH4l0Fy, bytelk1ejnJ, bytevLttJdU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RN9qzar, BigInt("0"))
		assert.equal(uint256X8YGEV7, BigInt("0"))
		assert.equal(uint256sQ4vwBw, BigInt("0"))
		await expect(MarsStakingRewardsPqZKCNj.inCaseTokensGetStuck.call(addressVsBslcH, uint3siyRj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
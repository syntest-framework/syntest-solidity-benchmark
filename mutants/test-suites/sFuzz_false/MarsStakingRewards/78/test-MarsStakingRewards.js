const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressaNsQ0aY = accounts[2]
		const addresscuPL5gm = accounts[2]
		const addressIzeOWR = accounts[4]
		const MarsStakingRewardsRjHglo = await MarsStakingRewards.new(addressaNsQ0aY, addresscuPL5gm, addressIzeOWR, {from: accounts[1]});
		const uintY2r6YwJ = BigInt("25")
		const addressPzTaGME = accounts[1]
		const addressNsBWYn5 = accounts[2]
		const uintkxd2SGa = BigInt("1208")
		const addresscF35qo = accounts[5]
		const uintHQemBaW = BigInt("47")
		const addresstk2GC8Z = accounts[3]
//		const addresss3Z3vaV = await MarsStakingRewardsRjHglo.inCaseTokensGetStuck.call(addressPzTaGME, uintY2r6YwJ, {from: accounts[4]});
//		const addressjz7rMj3 = await MarsStakingRewardsRjHglo.updateReward.call(addressNsBWYn5, {from: accounts[2]});
//		const addressxskZht5 = await MarsStakingRewardsRjHglo.inCaseTokensGetStuck.call(addresscF35qo, uintkxd2SGa, {from: accounts[3]});
//		await MarsStakingRewardsRjHglo.onlyOwner.call({from: accounts[3]});
//		const uint256SAwTTW = await MarsStakingRewardsRjHglo.stake.call(uintHQemBaW, {from: accounts[2]});
//		const addressGxAVsoG = await MarsStakingRewardsRjHglo.transferOwnership.call(addresstk2GC8Z, {from: accounts[5]});

		await expect(MarsStakingRewardsRjHglo.inCaseTokensGetStuck.call(addressPzTaGME, uintY2r6YwJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstLQ5jXU = accounts[3]
		const addressQ2FZxhq = accounts[4]
		const addressDMfdWCd = accounts[3]
		const MarsStakingRewardssH4IbhD = await MarsStakingRewards.new(addresstLQ5jXU, addressQ2FZxhq, addressDMfdWCd, {from: accounts[4]});
		const byteSWLEhz6 = "0x0a011011051b160e081d0308141008021b11050e061912040d04180b0a090105"
		const byteJ8EeGQ = "0x150e06001c1d1a0e1f0c0d0f030702001d181811050b1f03071d041418090511"
		const uintR5di03i = BigInt("150")
		const uintBEhiIi6 = BigInt("380")
		const uintHyKdZMP = BigInt("1732")
		const byteyFna8tN = "0x050a0a14190a0d161c1a0d0e170817090d1c0f1c030d0503110c080b0b17041f"
		const byteY07hzVJ = "0x1f14030916131c130f100e01091c190d011f050b0f090d0e130c0d081f140d06"
		const uintL35Rho = BigInt("86")
		const uintaEpXvYe = BigInt("1929")
		const uintQnXnI2V = BigInt("417")
		const bytemyee2xn = "0x1e04181f09030e140e17050806060e0a040614041f0b1b1001091f02060f091c"
		const byteoIuBlB8 = "0x110a0a0f080e201f0f1d03010d060b0a1003170b1a141813061d040e200c1c12"
		const uintAGuvv07 = BigInt("100")
		const uintQ8ayfAn = BigInt("1372")
		const uintbXTuvQe = BigInt("976")
		const uint0ZHibm = BigInt("724")
		const addressOWtGoDB = accounts[1]
//		const uint256JcU3Ix = await MarsStakingRewardssH4IbhD.stakeWithPermit.call(uintHyKdZMP, uintBEhiIi6, uintR5di03i, byteJ8EeGQ, byteSWLEhz6, {from: accounts[2]});
//		const uint256WqgLjiM = await MarsStakingRewardssH4IbhD.stakeWithPermit.call(uintQnXnI2V, uintaEpXvYe, uintL35Rho, byteY07hzVJ, byteyFna8tN, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardssH4IbhD.renounceOwnership.call({from: accounts[2]});
//		const uint256m185SFN = await MarsStakingRewardssH4IbhD.stakeWithPermit.call(uintbXTuvQe, uintQ8ayfAn, uintAGuvv07, byteoIuBlB8, bytemyee2xn, {from: accounts[3]});
//		const addressJ34ZJXA = await MarsStakingRewardssH4IbhD.inCaseTokensGetStuck.call(addressOWtGoDB, uint0ZHibm, {from: accounts[4]});

		await expect(MarsStakingRewardssH4IbhD.stakeWithPermit.call(uintHyKdZMP, uintBEhiIi6, uintR5di03i, byteJ8EeGQ, byteSWLEhz6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmq4oy5 = accounts[3]
		const addressTi04Jc6 = accounts[1]
		const addressYgPEhDo = accounts[4]
		const MarsStakingRewardscrb7pp = await MarsStakingRewards.new(addressmq4oy5, addressTi04Jc6, addressYgPEhDo, {from: accounts[0]});
//		await MarsStakingRewardscrb7pp.onlyRewardsDistribution.call({from: accounts[3]});
//		const addressDb971Ym = await MarsStakingRewardscrb7pp.owner.call({from: accounts[1]});

		await expect(MarsStakingRewardscrb7pp.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmDQdYOn = "0x0000000000000000000000000000000000000001"
		const addressWqTnntI = accounts[4]
		const addressLXr3ldB = accounts[1]
		const MarsStakingRewardsVRD6ZRs = await MarsStakingRewards.new(addressmDQdYOn, addressWqTnntI, addressLXr3ldB, {from: accounts[3]});
		const uintnL8hlP6 = BigInt("1359")
		const addressxi2OxNt = accounts[3]
		const addressPGSOBnl = accounts[4]
		const addressaNSmuP6 = accounts[2]
		const uint256f12rATM = await MarsStakingRewardsVRD6ZRs.rewardPerToken.call({from: accounts[5]});
//		const addressiZnWpB = await MarsStakingRewardsVRD6ZRs.inCaseTokensGetStuck.call(addressxi2OxNt, uintnL8hlP6, {from: accounts[1]});
//		const uint256caVvLO = await MarsStakingRewardsVRD6ZRs.earned.call(addressPGSOBnl, {from: accounts[4]});
//		const addressWKbDWPY = await MarsStakingRewardsVRD6ZRs.updateReward.call(addressaNSmuP6, {from: accounts[3]});

		assert.equal(uint256f12rATM, BigInt("0"))
		await expect(MarsStakingRewardsVRD6ZRs.inCaseTokensGetStuck.call(addressxi2OxNt, uintnL8hlP6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ9fhPF = accounts[4]
		const addressfXUBaVc = accounts[4]
		const addressVVt9op = accounts[5]
		const MarsStakingRewardsR9Rh6yT = await MarsStakingRewards.new(addressJ9fhPF, addressfXUBaVc, addressVVt9op, {from: accounts[3]});
		const addressIYv3pIa = accounts[0]
		const addressje01SmC = accounts[0]
		const uint256yKCL5Dr = await MarsStakingRewardsR9Rh6yT.getRewardForDuration.call({from: accounts[1]});
//		const addressytyWrXX = await MarsStakingRewardsR9Rh6yT.setRewardsDistribution.call(addressIYv3pIa, {from: accounts[4]});
//		const addressOdhLZ3c = await MarsStakingRewardsR9Rh6yT.transferOwnership.call(addressje01SmC, {from: accounts[4]});

		assert.equal(uint256yKCL5Dr, BigInt("0"))
		await expect(MarsStakingRewardsR9Rh6yT.setRewardsDistribution.call(addressIYv3pIa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyMjw668 = accounts[4]
		const addressifeX5dl = accounts[4]
		const addressGG0yiN = accounts[5]
		const MarsStakingRewardsR9Rh6yT = await MarsStakingRewards.new(addressyMjw668, addressifeX5dl, addressGG0yiN, {from: accounts[3]});
		const uintuHqUtS4 = BigInt("1397")
		const addressn36BK7M = accounts[3]
		const addressgvQsE4e = accounts[1]
		const addressD1lO8Vk = accounts[0]
		const uint256yKCL5Dr = await MarsStakingRewardsR9Rh6yT.getRewardForDuration.call({from: accounts[1]});
//		const addressC5fWH2h = await MarsStakingRewardsR9Rh6yT.inCaseTokensGetStuck.call(addressn36BK7M, uintuHqUtS4, {from: accounts[3]});
//		const addressytyWrXX = await MarsStakingRewardsR9Rh6yT.setRewardsDistribution.call(addressgvQsE4e, {from: accounts[4]});
//		const addressOdhLZ3c = await MarsStakingRewardsR9Rh6yT.transferOwnership.call(addressD1lO8Vk, {from: accounts[4]});

		assert.equal(uint256yKCL5Dr, BigInt("0"))
		await expect(MarsStakingRewardsR9Rh6yT.inCaseTokensGetStuck.call(addressn36BK7M, uintuHqUtS4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjZ7GRvj = accounts[4]
		const addressLF9rJPu = accounts[4]
		const addressuC3HLgh = accounts[5]
		const MarsStakingRewardsR9Rh6yT = await MarsStakingRewards.new(addressjZ7GRvj, addressLF9rJPu, addressuC3HLgh, {from: accounts[3]});
		const addressndEHwUh = accounts[0]
		const uint256koeRkrt = await MarsStakingRewardsR9Rh6yT.totalSupply.call({from: accounts[0]});
		const uint256yKCL5Dr = await MarsStakingRewardsR9Rh6yT.getRewardForDuration.call({from: accounts[1]});
//		const addressOdhLZ3c = await MarsStakingRewardsR9Rh6yT.transferOwnership.call(addressndEHwUh, {from: accounts[4]});

		assert.equal(uint256koeRkrt, BigInt("0"))
		assert.equal(uint256yKCL5Dr, BigInt("0"))
		await expect(MarsStakingRewardsR9Rh6yT.transferOwnership.call(addressndEHwUh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressdWgCA4B = accounts[0]
		const addressf5Klazr = accounts[0]
		const addressvudQBEo = accounts[2]
		const MarsStakingRewardsfpz6eFi = await MarsStakingRewards.new(addressdWgCA4B, addressf5Klazr, addressvudQBEo, {from: accounts[2]});
		const uintgWu7Fs5 = BigInt("273")
		const uintfhoYdQ9 = BigInt("1839")
//		const uint256SApFrqa = await MarsStakingRewardsfpz6eFi.notifyRewardAmount.call(uintfhoYdQ9, uintgWu7Fs5, {from: accounts[1]});
//		await MarsStakingRewardsfpz6eFi.nonReentrant.call({from: accounts[3]});

		await expect(MarsStakingRewardsfpz6eFi.notifyRewardAmount.call(uintfhoYdQ9, uintgWu7Fs5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressP602E6T = accounts[3]
		const addresseCSVXEx = accounts[1]
		const address7ew1tf = accounts[4]
		const MarsStakingRewardscrb7pp = await MarsStakingRewards.new(addressP602E6T, addresseCSVXEx, address7ew1tf, {from: accounts[0]});
		const uint256sUlEqP6 = await MarsStakingRewardscrb7pp.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardscrb7pp.onlyRewardsDistribution.call({from: accounts[3]});
//		await MarsStakingRewardscrb7pp.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressDb971Ym = await MarsStakingRewardscrb7pp.owner.call({from: accounts[1]});

		assert.equal(uint256sUlEqP6, BigInt("0"))
		await expect(MarsStakingRewardscrb7pp.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJdMOsZs = accounts[4]
		const addressE0rYJEy = accounts[4]
		const addressgOAUzMq = accounts[5]
		const MarsStakingRewardsR9Rh6yT = await MarsStakingRewards.new(addressJdMOsZs, addressE0rYJEy, addressgOAUzMq, {from: accounts[3]});
		const uintw2R9EGi = BigInt("344")
		const uintsTxF1uz = BigInt("330")
		const addressvbNNgPW = accounts[0]
		const uintulPNSAC = BigInt("1214")
		const uintHX9oY0z = BigInt("532")
//		const uint256jyx7fkH = await MarsStakingRewardsR9Rh6yT.notifyRewardAmount.call(uintsTxF1uz, uintw2R9EGi, {from: accounts[4]});
//		await MarsStakingRewardsR9Rh6yT.onlyRewardsDistribution.call({from: accounts[3]});
//		const addressOdhLZ3c = await MarsStakingRewardsR9Rh6yT.transferOwnership.call(addressvbNNgPW, {from: accounts[4]});
//		const uint256q1sq37 = await MarsStakingRewardsR9Rh6yT.notifyRewardAmount.call(uintHX9oY0z, uintulPNSAC, {from: accounts[4]});

		await expect(MarsStakingRewardsR9Rh6yT.notifyRewardAmount.call(uintsTxF1uz, uintw2R9EGi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIXjZkXu = "0x0000000000000000000000000000000000000001"
		const addressYGKqTxA = accounts[4]
		const addressyj7Onj = accounts[1]
		const MarsStakingRewardsVRD6ZRs = await MarsStakingRewards.new(addressIXjZkXu, addressYGKqTxA, addressyj7Onj, {from: accounts[3]});
		const addressxXXogE8 = accounts[0]
		const addressg0j70yc = accounts[2]
		const uint256f12rATM = await MarsStakingRewardsVRD6ZRs.rewardPerToken.call({from: accounts[5]});
		const addressrXd3M15 = await MarsStakingRewardsVRD6ZRs.transferOwnership.call(addressxXXogE8, {from: accounts[3]});
//		const addressWKbDWPY = await MarsStakingRewardsVRD6ZRs.updateReward.call(addressg0j70yc, {from: accounts[3]});

		assert.equal(uint256f12rATM, BigInt("0"))
		await expect(MarsStakingRewardsVRD6ZRs.updateReward.call(addressg0j70yc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDaxAsP5 = "0x0000000000000000000000000000000000000001"
		const addressqVFIyBv = accounts[4]
		const addressSLWK6be = accounts[1]
		const MarsStakingRewardsVRD6ZRs = await MarsStakingRewards.new(addressDaxAsP5, addressqVFIyBv, addressSLWK6be, {from: accounts[3]});
		const addressuoVdLtF = accounts[4]
		const addressCqpHC3C = accounts[3]
		const uint256f12rATM = await MarsStakingRewardsVRD6ZRs.rewardPerToken.call({from: accounts[5]});
		const uint256G7AtdX = await MarsStakingRewardsVRD6ZRs.earned.call(addressuoVdLtF, {from: accounts[2]});
//		const addressWKbDWPY = await MarsStakingRewardsVRD6ZRs.updateReward.call(addressCqpHC3C, {from: accounts[3]});

		assert.equal(uint256G7AtdX, BigInt("0"))
		assert.equal(uint256f12rATM, BigInt("0"))
		await expect(MarsStakingRewardsVRD6ZRs.updateReward.call(addressCqpHC3C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresszssfoQf = "0x0000000000000000000000000000000000000001"
		const addressQL0Hfz = accounts[4]
		const addressb5VTZ9 = accounts[1]
		const MarsStakingRewardsVRD6ZRs = await MarsStakingRewards.new(addresszssfoQf, addressQL0Hfz, addressb5VTZ9, {from: accounts[3]});
		const uint256QlX7zfw = await MarsStakingRewardsVRD6ZRs.totalSupply.call({from: accounts[3]});
		const uint256f12rATM = await MarsStakingRewardsVRD6ZRs.rewardPerToken.call({from: accounts[5]});
//		await MarsStakingRewardsVRD6ZRs.exit.call({from: accounts[5]});

		assert.equal(uint256QlX7zfw, BigInt("0"))
		assert.equal(uint256f12rATM, BigInt("0"))
		await expect(MarsStakingRewardsVRD6ZRs.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTcu2Jpf = "0x0000000000000000000000000000000000000001"
		const addressKf4qAO9 = accounts[4]
		const addressCOT4Zjp = accounts[1]
		const MarsStakingRewardsVRD6ZRs = await MarsStakingRewards.new(addressTcu2Jpf, addressKf4qAO9, addressCOT4Zjp, {from: accounts[3]});
		const addressD4XxuKv = accounts[3]
		const addressg8L17v0 = accounts[4]
		const addressGpgXm3 = await MarsStakingRewardsVRD6ZRs.setRewardsDistribution.call(addressD4XxuKv, {from: accounts[3]});
		const uint256IQQ7x3L = await MarsStakingRewardsVRD6ZRs.balanceOf.call(addressg8L17v0, {from: accounts[4]});
		const uint256f12rATM = await MarsStakingRewardsVRD6ZRs.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256IQQ7x3L, BigInt("0"))
		assert.equal(uint256f12rATM, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresscCZGCfm = accounts[1]
		const addressW4zUGbj = accounts[0]
		const addressLvvyUav = accounts[5]
		const MarsStakingRewardsatbspz = await MarsStakingRewards.new(addresscCZGCfm, addressW4zUGbj, addressLvvyUav, {from: "0x0000000000000000000000000000000000000001"});
		const uinto9QzfUm = BigInt("1515")
		const addressWvff2Yp = accounts[1]
		const uintBjW6Dkw = BigInt("617")
		const uintyOeXpiT = BigInt("966")
		const uintdLutZRr = BigInt("1911")
		const addressM9fAR8 = await MarsStakingRewardsatbspz.inCaseTokensGetStuck.call(addressWvff2Yp, uinto9QzfUm, {from: accounts[1]});
		const uint256vR8XCT4 = await MarsStakingRewardsatbspz.stake.call(uintBjW6Dkw, {from: accounts[3]});
		await MarsStakingRewardsatbspz.exit.call({from: accounts[0]});
		const uint256KUN4R0b = await MarsStakingRewardsatbspz.rewardPerToken.call({from: accounts[3]});
		const uint256O0i0d4S = await MarsStakingRewardsatbspz.notifyRewardAmount.call(uintdLutZRr, uintyOeXpiT, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressHl05JD5 = accounts[0]
		const addressJftqikv = accounts[1]
		const addressKFXAbv = accounts[4]
		const MarsStakingRewardso4UFFHh = await MarsStakingRewards.new(addressHl05JD5, addressJftqikv, addressKFXAbv, {from: accounts[5]});
		const addresskhVkzx = accounts[1]
		const boolv23SMA = await MarsStakingRewardso4UFFHh.isOwner.call({from: accounts[3]});
//		await MarsStakingRewardso4UFFHh.renounceOwnership.call({from: accounts[5]});
//		const uint256auAqbUy = await MarsStakingRewardso4UFFHh.balanceOf.call(addresskhVkzx, {from: accounts[1]});
//		const uint256oGRgq6X = await MarsStakingRewardso4UFFHh.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolv23SMA, false)
		await expect(MarsStakingRewardso4UFFHh.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
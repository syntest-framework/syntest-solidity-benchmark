const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressPhZLtB = accounts[5]
		const addressb21hKM = accounts[0]
		const addressl1Hi3Wr = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressPhZLtB, addressb21hKM, addressl1Hi3Wr, {from: accounts[1]});
		const addresssMGXr6y = accounts[4]
//		await MarsStakingRewardsJM9hlM1.renounceOwnership.call({from: accounts[2]});
//		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addresssMGXr6y, {from: accounts[3]});

		await expect(MarsStakingRewardsJM9hlM1.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslAKafiD = accounts[1]
		const addressMV1UaQ8 = accounts[2]
		const addressE5ee8vZ = accounts[3]
		const MarsStakingRewardsidbi45t = await MarsStakingRewards.new(addresslAKafiD, addressMV1UaQ8, addressE5ee8vZ, {from: accounts[4]});
		const addressdgEaEp = "0x0000000000000000000000000000000000000001"
		const uintBPKOwUx = BigInt("671")
		const uintdamF1wI = BigInt("1823")
		const uint256JvzIVGS = await MarsStakingRewardsidbi45t.earned.call(addressdgEaEp, {from: accounts[2]});
//		await MarsStakingRewardsidbi45t.nonReentrant.call({from: accounts[5]});
//		await MarsStakingRewardsidbi45t.onlyOwner.call({from: accounts[1]});
//		const uint256QvBMjWj = await MarsStakingRewardsidbi45t.notifyRewardAmount.call(uintdamF1wI, uintBPKOwUx, {from: accounts[2]});

		assert.equal(uint256JvzIVGS, BigInt("0"))
		await expect(MarsStakingRewardsidbi45t.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZVi9WFb = accounts[4]
		const addressXZKb6IW = accounts[5]
		const addressAccTErx = accounts[2]
		const MarsStakingRewardsXki6jy = await MarsStakingRewards.new(addressZVi9WFb, addressXZKb6IW, addressAccTErx, {from: accounts[3]});
		const uintyVHv68 = BigInt("1298")
//		const uint256s8ZOalF = await MarsStakingRewardsXki6jy.withdraw.call(uintyVHv68, {from: accounts[2]});
//		await MarsStakingRewardsXki6jy.nonReentrant.call({from: accounts[5]});

		await expect(MarsStakingRewardsXki6jy.withdraw.call(uintyVHv68, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstu7jCIW = accounts[0]
		const addressjwEAvOa = accounts[3]
		const addresssJZjNdH = accounts[0]
		const MarsStakingRewardsTOyjYUz = await MarsStakingRewards.new(addresstu7jCIW, addressjwEAvOa, addresssJZjNdH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256REK4e9g = await MarsStakingRewardsTOyjYUz.totalSupply.call({from: accounts[3]});
		const addressxZs0PMx = await MarsStakingRewardsTOyjYUz.owner.call({from: accounts[3]});
		const boolMmN0oWJ = await MarsStakingRewardsTOyjYUz.isOwner.call({from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressS49ivh = accounts[2]
		const addressKfhKNgN = accounts[4]
		const addresscCtYzGH = accounts[4]
		const MarsStakingRewardsQIZYfE = await MarsStakingRewards.new(addressS49ivh, addressKfhKNgN, addresscCtYzGH, {from: accounts[4]});
		const addressavvYNce = accounts[5]
		const addressdH5jQu = accounts[3]
		const addressvgIgAsB = "0x0000000000000000000000000000000000000001"
		const uint256XgmCVts = await MarsStakingRewardsQIZYfE.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256uCkKKOS = await MarsStakingRewardsQIZYfE.balanceOf.call(addressavvYNce, {from: accounts[5]});
//		const addressAj2tL3 = await MarsStakingRewardsQIZYfE.updateReward.call(addressdH5jQu, {from: accounts[1]});
//		const addressQDDEvMO = await MarsStakingRewardsQIZYfE.updateReward.call(addressvgIgAsB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XgmCVts, BigInt("0"))
		assert.equal(uint256uCkKKOS, BigInt("0"))
		await expect(MarsStakingRewardsQIZYfE.updateReward.call(addressdH5jQu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxkyji8w = accounts[3]
		const addressn7yYrlV = accounts[3]
		const addresso5OTkJw = accounts[1]
		const MarsStakingRewardsKGNSQq6 = await MarsStakingRewards.new(addressxkyji8w, addressn7yYrlV, addresso5OTkJw, {from: accounts[3]});
//		await MarsStakingRewardsKGNSQq6.exit.call({from: accounts[4]});
//		await MarsStakingRewardsKGNSQq6.nonReentrant.call({from: accounts[0]});

		await expect(MarsStakingRewardsKGNSQq6.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressHjyoFup = accounts[0]
		const addressnplURMG = accounts[1]
		const addresshnKy4nB = accounts[0]
		const MarsStakingRewardsxBkwXMH = await MarsStakingRewards.new(addressHjyoFup, addressnplURMG, addresshnKy4nB, {from: accounts[3]});
		const address7lg8VX = accounts[0]
		const uintdH8hYZz = BigInt("1609")
		const addressB3vP0qa = accounts[1]
		const addressHGt474J = accounts[0]
		const uint256Q52RdXo = await MarsStakingRewardsxBkwXMH.getRewardForDuration.call({from: accounts[0]});
//		const addressBSyXdsM = await MarsStakingRewardsxBkwXMH.updateReward.call(address7lg8VX, {from: accounts[0]});
//		const addressUbtf8Uv = await MarsStakingRewardsxBkwXMH.inCaseTokensGetStuck.call(addressB3vP0qa, uintdH8hYZz, {from: accounts[0]});
//		await MarsStakingRewardsxBkwXMH.getReward.call({from: accounts[1]});
//		const addressoBkXmEB = await MarsStakingRewardsxBkwXMH.owner.call({from: accounts[2]});
//		const addressCbjSLCS = await MarsStakingRewardsxBkwXMH.setRewardsDistribution.call(addressHGt474J, {from: accounts[2]});

		assert.equal(uint256Q52RdXo, BigInt("0"))
		await expect(MarsStakingRewardsxBkwXMH.updateReward.call(address7lg8VX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRazmmJW = accounts[5]
		const addressWx2T9CZ = accounts[0]
		const addressQd3AzTO = accounts[3]
		const MarsStakingRewardsHv3DGty = await MarsStakingRewards.new(addressRazmmJW, addressWx2T9CZ, addressQd3AzTO, {from: accounts[3]});
		const addressiGAiQjr = accounts[2]
		const uinteCiXf0C = BigInt("1178")
		const addressNRi9Wnk = accounts[1]
		const uintTJgZKOU = BigInt("510")
		const uintyVYQSUx = BigInt("1486")
		const addresseVLO9tG = accounts[2]
		const addressrMUOvia = "0x0000000000000000000000000000000000000001"
		const uint256x3haHrR = await MarsStakingRewardsHv3DGty.totalSupply.call({from: accounts[1]});
		const uint256coERL8R = await MarsStakingRewardsHv3DGty.earned.call(addressiGAiQjr, {from: accounts[3]});
//		const addressC7NgASM = await MarsStakingRewardsHv3DGty.inCaseTokensGetStuck.call(addressNRi9Wnk, uinteCiXf0C, {from: accounts[0]});
//		const uint256iSl7hNS = await MarsStakingRewardsHv3DGty.withdraw.call(uintTJgZKOU, {from: accounts[5]});
//		const addresst6HeTq5 = await MarsStakingRewardsHv3DGty.inCaseTokensGetStuck.call(addresseVLO9tG, uintyVYQSUx, {from: accounts[2]});
//		const uint256U44HcbT = await MarsStakingRewardsHv3DGty.balanceOf.call(addressrMUOvia, {from: accounts[1]});

		assert.equal(uint256coERL8R, BigInt("0"))
		assert.equal(uint256x3haHrR, BigInt("0"))
		await expect(MarsStakingRewardsHv3DGty.inCaseTokensGetStuck.call(addressNRi9Wnk, uinteCiXf0C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaqpG0nq = accounts[5]
		const addressXW93Sc = accounts[0]
		const addressZc8KEXX = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressaqpG0nq, addressXW93Sc, addressZc8KEXX, {from: accounts[1]});
		const addressrfE8DiO = accounts[5]
		const uintHE5VEzM = BigInt("156")
		const addressQwuqH7S = accounts[2]
		const uintv9OE3PY = BigInt("1280")
		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addressrfE8DiO, {from: accounts[3]});
//		const addressMpcKpch = await MarsStakingRewardsJM9hlM1.inCaseTokensGetStuck.call(addressQwuqH7S, uintHE5VEzM, {from: accounts[1]});
//		const uint256V4rHvg0 = await MarsStakingRewardsJM9hlM1.totalSupply.call({from: accounts[1]});
//		const uint256jj2OuAc = await MarsStakingRewardsJM9hlM1.withdraw.call(uintv9OE3PY, {from: accounts[5]});

		assert.equal(uint256j4en7SS, BigInt("0"))
		await expect(MarsStakingRewardsJM9hlM1.inCaseTokensGetStuck.call(addressQwuqH7S, uintHE5VEzM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressc0QZPD = accounts[1]
		const addressYChwRq8 = accounts[2]
		const addressu9K5KGt = accounts[3]
		const MarsStakingRewardsidbi45t = await MarsStakingRewards.new(addressc0QZPD, addressYChwRq8, addressu9K5KGt, {from: accounts[4]});
		const addressrE5NfM1 = accounts[0]
		const uintrhbP0G = BigInt("816")
		const uintgwQlyJg = BigInt("1016")
		const uintwmVtui = BigInt("671")
		const uintJ6areOx = BigInt("1823")
		const uint256JvzIVGS = await MarsStakingRewardsidbi45t.earned.call(addressrE5NfM1, {from: accounts[2]});
//		const uint256iG7NaYh = await MarsStakingRewardsidbi45t.notifyRewardAmount.call(uintgwQlyJg, uintrhbP0G, {from: accounts[4]});
//		await MarsStakingRewardsidbi45t.nonReentrant.call({from: accounts[5]});
//		await MarsStakingRewardsidbi45t.onlyOwner.call({from: accounts[1]});
//		await MarsStakingRewardsidbi45t.nonReentrant.call({from: accounts[2]});
//		const uint256QvBMjWj = await MarsStakingRewardsidbi45t.notifyRewardAmount.call(uintJ6areOx, uintwmVtui, {from: accounts[2]});

		assert.equal(uint256JvzIVGS, BigInt("0"))
		await expect(MarsStakingRewardsidbi45t.notifyRewardAmount.call(uintgwQlyJg, uintrhbP0G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVR2BUwp = accounts[5]
		const addressXiqhb7k = accounts[0]
		const addressXRWOYeo = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressVR2BUwp, addressXiqhb7k, addressXRWOYeo, {from: accounts[1]});
		const addressVrfDLn = accounts[5]
		const uintTJY5T49 = BigInt("69")
		const uintydfO00P = BigInt("1387")
		const uintCFpBgYM = BigInt("1049")
		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addressVrfDLn, {from: accounts[3]});
//		const uint256zRSTcRd = await MarsStakingRewardsJM9hlM1.notifyRewardAmount.call(uintydfO00P, uintTJY5T49, {from: accounts[5]});
//		const uint256jj2OuAc = await MarsStakingRewardsJM9hlM1.withdraw.call(uintCFpBgYM, {from: accounts[5]});

		assert.equal(uint256j4en7SS, BigInt("0"))
		await expect(MarsStakingRewardsJM9hlM1.notifyRewardAmount.call(uintydfO00P, uintTJY5T49, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressPjGhLQ = accounts[5]
		const addressZnmiUWj = accounts[0]
		const addressfkPbinf = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressPjGhLQ, addressZnmiUWj, addressfkPbinf, {from: accounts[1]});
		const addresscYqNefp = accounts[5]
		const addressRNHtpm = accounts[0]
		const uintNRzAStD = BigInt("1280")
		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addresscYqNefp, {from: accounts[3]});
		const addresssltVBMV = await MarsStakingRewardsJM9hlM1.setRewardsDistribution.call(addressRNHtpm, {from: accounts[1]});
//		const uint256jj2OuAc = await MarsStakingRewardsJM9hlM1.withdraw.call(uintNRzAStD, {from: accounts[5]});

		assert.equal(uint256j4en7SS, BigInt("0"))
		await expect(MarsStakingRewardsJM9hlM1.withdraw.call(uintNRzAStD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressG8B4WNq = accounts[5]
		const addressU8ScRY = accounts[0]
		const addressOfEx9EP = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressG8B4WNq, addressU8ScRY, addressOfEx9EP, {from: accounts[1]});
		const addressoaEKljX = accounts[5]
		const uinttWZpRH = BigInt("156")
		const addresszJr6UWq = accounts[2]
		const uintQCRiLzQ = BigInt("1280")
		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addressoaEKljX, {from: accounts[3]});
//		await MarsStakingRewardsJM9hlM1.renounceOwnership.call({from: accounts[1]});
//		const addressMpcKpch = await MarsStakingRewardsJM9hlM1.inCaseTokensGetStuck.call(addresszJr6UWq, uinttWZpRH, {from: accounts[1]});
//		const uint256V4rHvg0 = await MarsStakingRewardsJM9hlM1.totalSupply.call({from: accounts[1]});
//		const uint256jj2OuAc = await MarsStakingRewardsJM9hlM1.withdraw.call(uintQCRiLzQ, {from: accounts[5]});

		assert.equal(uint256j4en7SS, BigInt("0"))
		await expect(MarsStakingRewardsJM9hlM1.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjrBCQfk = accounts[5]
		const addressIsM2kMO = accounts[0]
		const addressrOJTYd6 = accounts[4]
		const MarsStakingRewardsJM9hlM1 = await MarsStakingRewards.new(addressjrBCQfk, addressIsM2kMO, addressrOJTYd6, {from: accounts[1]});
		const addressZdJ4vMA = accounts[6]
		const uintGaYLl1g = BigInt("156")
		const addressdAwnPi7 = accounts[4]
		const addressIUgzLpo = accounts[0]
		const byteqFIh5GP = "0x11121816050202180611080c0414050d200a101f1119050b141c04081c020603"
		const byteyyfraoe = "0x101c1f1c05001417201c060c1b0c01091e0907150f180e0d0b17201f0d070f11"
		const uintbPJkn6a = BigInt("74")
		const uintXDhSlx4 = BigInt("1973")
		const uintCzGQcBV = BigInt("824")
		const uintePUeuWI = BigInt("1280")
		const uint256j4en7SS = await MarsStakingRewardsJM9hlM1.earned.call(addressZdJ4vMA, {from: accounts[3]});
//		const addressMpcKpch = await MarsStakingRewardsJM9hlM1.inCaseTokensGetStuck.call(addressdAwnPi7, uintGaYLl1g, {from: accounts[1]});
//		const uint256uEK28kQ = await MarsStakingRewardsJM9hlM1.balanceOf.call(addressIUgzLpo, {from: accounts[2]});
//		const uint256V4rHvg0 = await MarsStakingRewardsJM9hlM1.totalSupply.call({from: accounts[1]});
//		const uint256iU2neks = await MarsStakingRewardsJM9hlM1.stakeWithPermit.call(uintCzGQcBV, uintXDhSlx4, uintbPJkn6a, byteyyfraoe, byteqFIh5GP, {from: accounts[5]});
//		const uint256jj2OuAc = await MarsStakingRewardsJM9hlM1.withdraw.call(uintePUeuWI, {from: accounts[5]});

		assert.equal(uint256j4en7SS, BigInt("0"))
		await expect(MarsStakingRewardsJM9hlM1.inCaseTokensGetStuck.call(addressdAwnPi7, uintGaYLl1g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
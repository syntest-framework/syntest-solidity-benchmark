const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressC9xWNME = accounts[2]
		const addresszK85h1 = accounts[2]
		const addresso7hRL7S = accounts[1]
		const MarsStakingRewardsWNh5ahn = await MarsStakingRewards.new(addressC9xWNME, addresszK85h1, addresso7hRL7S, {from: "0x0000000000000000000000000000000000000001"});
		const uintiP9aGK0 = BigInt("545")
		const addressEGDMACp = accounts[1]
		const uint256BMdIQwb = await MarsStakingRewardsWNh5ahn.rewardPerToken.call({from: accounts[1]});
		const addresszUDs4Ac = await MarsStakingRewardsWNh5ahn.inCaseTokensGetStuck.call(addressEGDMACp, uintiP9aGK0, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresssNVVqdA = accounts[5]
		const addressPh0qjmG = accounts[4]
		const addressSWoTGzm = accounts[3]
		const MarsStakingRewardsc12zbQm = await MarsStakingRewards.new(addresssNVVqdA, addressPh0qjmG, addressSWoTGzm, {from: accounts[1]});
		const addresskOowwKD = accounts[1]
		const byteKsP91xZ = "0x091015040305160e0c081b141319170d1109141f130514061e150a1214121a0e"
		const byteWmfig4 = "0x1d1f03100706170c1c101c1317191b1e152005101e1f140c1d1c0e070f060b0b"
		const uintM5CxDAT = BigInt("130")
		const uinteuGAxJd = BigInt("683")
		const uintNOHmJ5r = BigInt("1887")
		const uintOhehVaI = BigInt("2047")
//		const addressJRiLblP = await MarsStakingRewardsc12zbQm.setRewardsDistribution.call(addresskOowwKD, {from: accounts[2]});
//		const uint256sGkLVoU = await MarsStakingRewardsc12zbQm.stakeWithPermit.call(uintNOHmJ5r, uinteuGAxJd, uintM5CxDAT, byteWmfig4, byteKsP91xZ, {from: accounts[3]});
//		const uint256CCtAE7A = await MarsStakingRewardsc12zbQm.stake.call(uintOhehVaI, {from: accounts[1]});

		await expect(MarsStakingRewardsc12zbQm.setRewardsDistribution.call(addresskOowwKD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskX7Fj9B = accounts[3]
		const addressYSh2sQ6 = "0x0000000000000000000000000000000000000001"
		const addressxFr8CKj = accounts[1]
		const MarsStakingRewardsQXZSoai = await MarsStakingRewards.new(addresskX7Fj9B, addressYSh2sQ6, addressxFr8CKj, {from: accounts[0]});
		const uintV7HSgLu = BigInt("1767")
		const uintyHnWyGA = BigInt("1587")
		const boolEi9FbHq = await MarsStakingRewardsQXZSoai.isOwner.call({from: accounts[0]});
//		await MarsStakingRewardsQXZSoai.nonReentrant.call({from: accounts[1]});
//		const uint256zQkOhsd = await MarsStakingRewardsQXZSoai.stake.call(uintV7HSgLu, {from: accounts[0]});
//		const uint256HsPLaoj = await MarsStakingRewardsQXZSoai.stake.call(uintyHnWyGA, {from: accounts[4]});
//		await MarsStakingRewardsQXZSoai.onlyOwner.call({from: accounts[1]});
//		await MarsStakingRewardsQXZSoai.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolEi9FbHq, true)
		await expect(MarsStakingRewardsQXZSoai.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiWCbgtO = accounts[1]
		const addresswcTYwp6 = accounts[0]
		const addressGDFAnYp = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsaWBwN3N = await MarsStakingRewards.new(addressiWCbgtO, addresswcTYwp6, addressGDFAnYp, {from: accounts[2]});
		const boolxj5kbx4 = await MarsStakingRewardsaWBwN3N.isOwner.call({from: accounts[4]});
		const uint256EWJkJG = await MarsStakingRewardsaWBwN3N.rewardPerToken.call({from: accounts[2]});
		const uint256b2CZOx4 = await MarsStakingRewardsaWBwN3N.totalSupply.call({from: accounts[4]});
//		await MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]});

		assert.equal(boolxj5kbx4, false)
		assert.equal(uint256EWJkJG, BigInt("0"))
		assert.equal(uint256b2CZOx4, BigInt("0"))
		await expect(MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrdfhsVH = accounts[1]
		const addressLvwmTUB = accounts[5]
		const addressDXogFHv = accounts[0]
		const MarsStakingRewardsh9euz98 = await MarsStakingRewards.new(addressrdfhsVH, addressLvwmTUB, addressDXogFHv, {from: accounts[2]});
		const uintPbnooeL = BigInt("359")
		const uint256y1HPMWE = await MarsStakingRewardsh9euz98.rewardPerToken.call({from: accounts[2]});
//		const uint256IVQGdyI = await MarsStakingRewardsh9euz98.withdraw.call(uintPbnooeL, {from: accounts[0]});

		assert.equal(uint256y1HPMWE, BigInt("0"))
		await expect(MarsStakingRewardsh9euz98.withdraw.call(uintPbnooeL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressER8dufi = accounts[1]
		const addressFcZzbZ = accounts[0]
		const addressUXoqlZT = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsaWBwN3N = await MarsStakingRewards.new(addressER8dufi, addressFcZzbZ, addressUXoqlZT, {from: accounts[2]});
		const addressSeouoI = await MarsStakingRewardsaWBwN3N.owner.call({from: accounts[2]});
		const boolxj5kbx4 = await MarsStakingRewardsaWBwN3N.isOwner.call({from: accounts[4]});
		const uint256EWJkJG = await MarsStakingRewardsaWBwN3N.rewardPerToken.call({from: accounts[2]});
//		await MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]});

		assert.equal(addressSeouoI, 0x1AAC62b6904F2F486b19573C66B92D6c4218F710)
		assert.equal(boolxj5kbx4, false)
		assert.equal(uint256EWJkJG, BigInt("0"))
		await expect(MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKdRv2dF = accounts[5]
		const addressC2DMj0O = accounts[2]
		const addressaSMKn8M = accounts[1]
		const MarsStakingRewardsH4Cgdt6 = await MarsStakingRewards.new(addressKdRv2dF, addressC2DMj0O, addressaSMKn8M, {from: accounts[5]});
		const uintioaF9d9 = BigInt("889")
		const uintyCFxx7 = BigInt("1372")
		const addressVNJyJh9 = accounts[4]
		const byteYAfFU0v = "0x161a0c191c0b1302120b08190502050819000d0608030b030613140916010217"
		const bytecolDJaG = "0x19001a0d0a1d141e03051c12121f12021b0215121e180d071e0c071f190d0215"
		const uintC8JF11G = BigInt("52")
		const uintwUeuND = BigInt("208")
		const uintmLx7xe1 = BigInt("1481")
//		const uint256QjpnY8L = await MarsStakingRewardsH4Cgdt6.notifyRewardAmount.call(uintyCFxx7, uintioaF9d9, {from: accounts[2]});
//		const addressr2CIdTg = await MarsStakingRewardsH4Cgdt6.updateReward.call(addressVNJyJh9, {from: accounts[3]});
//		await MarsStakingRewardsH4Cgdt6.exit.call({from: accounts[1]});
//		await MarsStakingRewardsH4Cgdt6.nonReentrant.call({from: accounts[2]});
//		const uint256Ezk1WTR = await MarsStakingRewardsH4Cgdt6.getRewardForDuration.call({from: accounts[1]});
//		const uint256Qbw4roP = await MarsStakingRewardsH4Cgdt6.stakeWithPermit.call(uintmLx7xe1, uintwUeuND, uintC8JF11G, bytecolDJaG, byteYAfFU0v, {from: accounts[3]});
//		const boolVG5Rew = await MarsStakingRewardsH4Cgdt6.isOwner.call({from: accounts[2]});

		await expect(MarsStakingRewardsH4Cgdt6.notifyRewardAmount.call(uintyCFxx7, uintioaF9d9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMyoRc9B = accounts[1]
		const addressyAord1A = accounts[0]
		const addresstkhG5I = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsaWBwN3N = await MarsStakingRewards.new(addressMyoRc9B, addressyAord1A, addresstkhG5I, {from: accounts[2]});
		const addresswBKZ45j = accounts[5]
		const uintQFqOJZX = BigInt("1820")
		const boolxj5kbx4 = await MarsStakingRewardsaWBwN3N.isOwner.call({from: accounts[4]});
		const uint256W1rSuqo = await MarsStakingRewardsaWBwN3N.balanceOf.call(addresswBKZ45j, {from: accounts[1]});
		const uint256F5U9nYh = await MarsStakingRewardsaWBwN3N.getRewardForDuration.call({from: accounts[3]});
		const uint256EWJkJG = await MarsStakingRewardsaWBwN3N.rewardPerToken.call({from: accounts[2]});
//		const uint256sngIyh = await MarsStakingRewardsaWBwN3N.withdraw.call(uintQFqOJZX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256b2CZOx4 = await MarsStakingRewardsaWBwN3N.totalSupply.call({from: accounts[4]});
//		await MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]});

		assert.equal(boolxj5kbx4, false)
		assert.equal(uint256EWJkJG, BigInt("0"))
		assert.equal(uint256F5U9nYh, BigInt("0"))
		assert.equal(uint256W1rSuqo, BigInt("0"))
		await expect(MarsStakingRewardsaWBwN3N.withdraw.call(uintQFqOJZX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstGsi3r = accounts[1]
		const addresswHZx1lV = accounts[5]
		const addresswujaCRw = accounts[0]
		const MarsStakingRewardsh9euz98 = await MarsStakingRewards.new(addresstGsi3r, addresswHZx1lV, addresswujaCRw, {from: accounts[2]});
		const uint256y1HPMWE = await MarsStakingRewardsh9euz98.rewardPerToken.call({from: accounts[2]});
//		await MarsStakingRewardsh9euz98.exit.call({from: accounts[2]});

		assert.equal(uint256y1HPMWE, BigInt("0"))
		await expect(MarsStakingRewardsh9euz98.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressatzEFMa = accounts[4]
		const addressBTTdocA = accounts[1]
		const addresswWIYEJ5 = accounts[2]
		const MarsStakingRewardsnpcWYO7 = await MarsStakingRewards.new(addressatzEFMa, addressBTTdocA, addresswWIYEJ5, {from: accounts[2]});
		const addressLgmqKOU = accounts[0]
		const uintOyZW9sZ = BigInt("1710")
		const addressC5M96a = accounts[3]
		const uint256KSeyzeB = await MarsStakingRewardsnpcWYO7.earned.call(addressLgmqKOU, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsnpcWYO7.renounceOwnership.call({from: accounts[5]});
//		await MarsStakingRewardsnpcWYO7.getReward.call({from: accounts[0]});
//		const addressn2WcVD7 = await MarsStakingRewardsnpcWYO7.inCaseTokensGetStuck.call(addressC5M96a, uintOyZW9sZ, {from: accounts[1]});
//		const addressqsXqI3b = await MarsStakingRewardsnpcWYO7.owner.call({from: accounts[0]});

		assert.equal(uint256KSeyzeB, BigInt("0"))
		await expect(MarsStakingRewardsnpcWYO7.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressFWekwPu = accounts[1]
		const addressaF6RPiK = accounts[0]
		const addressoUUJ3N2 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsaWBwN3N = await MarsStakingRewards.new(addressFWekwPu, addressaF6RPiK, addressoUUJ3N2, {from: accounts[2]});
		const boolxj5kbx4 = await MarsStakingRewardsaWBwN3N.isOwner.call({from: accounts[4]});
		const uint256EWJkJG = await MarsStakingRewardsaWBwN3N.rewardPerToken.call({from: accounts[2]});
		const uint256b2CZOx4 = await MarsStakingRewardsaWBwN3N.totalSupply.call({from: accounts[4]});
		const uint256qjsJwZV = await MarsStakingRewardsaWBwN3N.totalSupply.call({from: accounts[0]});
		const uint256ZkUJGmt = await MarsStakingRewardsaWBwN3N.lastTimeRewardApplicable.call({from: accounts[3]});
//		await MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]});

		assert.equal(boolxj5kbx4, false)
		assert.equal(uint256EWJkJG, BigInt("0"))
		assert.equal(uint256ZkUJGmt, BigInt("0"))
		assert.equal(uint256b2CZOx4, BigInt("0"))
		assert.equal(uint256qjsJwZV, BigInt("0"))
		await expect(MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressU1u01Ne = accounts[1]
		const addressa45EqQ = accounts[0]
		const addressbsdG8RK = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsaWBwN3N = await MarsStakingRewards.new(addressU1u01Ne, addressa45EqQ, addressbsdG8RK, {from: accounts[2]});
		const boolxj5kbx4 = await MarsStakingRewardsaWBwN3N.isOwner.call({from: accounts[4]});
//		await MarsStakingRewardsaWBwN3N.renounceOwnership.call({from: accounts[2]});
//		const uint256EWJkJG = await MarsStakingRewardsaWBwN3N.rewardPerToken.call({from: accounts[2]});
//		const uint256b2CZOx4 = await MarsStakingRewardsaWBwN3N.totalSupply.call({from: accounts[4]});
//		const uint256x3pgXnd = await MarsStakingRewardsaWBwN3N.getRewardForDuration.call({from: accounts[0]});
//		await MarsStakingRewardsaWBwN3N.nonReentrant.call({from: accounts[4]});

		assert.equal(boolxj5kbx4, false)
		await expect(MarsStakingRewardsaWBwN3N.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaVv0V2N = accounts[4]
		const addressOACl4IU = accounts[1]
		const addressMOa7W0F = accounts[2]
		const MarsStakingRewardsnpcWYO7 = await MarsStakingRewards.new(addressaVv0V2N, addressOACl4IU, addressMOa7W0F, {from: accounts[2]});
		const uintl4EwxOS = BigInt("670")
		const uintLTDYXBx = BigInt("1002")
		const addresso5KOvG = accounts[1]
		const uintmrwC80U = BigInt("1038")
//		const uint256Q4M0KXp = await MarsStakingRewardsnpcWYO7.notifyRewardAmount.call(uintLTDYXBx, uintl4EwxOS, {from: accounts[4]});
//		const uint256KSeyzeB = await MarsStakingRewardsnpcWYO7.earned.call(addresso5KOvG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uOhYOjR = await MarsStakingRewardsnpcWYO7.stake.call(uintmrwC80U, {from: accounts[2]});
//		await MarsStakingRewardsnpcWYO7.getReward.call({from: accounts[0]});

		await expect(MarsStakingRewardsnpcWYO7.notifyRewardAmount.call(uintLTDYXBx, uintl4EwxOS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZqZBK3c = accounts[1]
		const addressWAz3G8r = accounts[5]
		const addressNA6kgnZ = accounts[0]
		const MarsStakingRewardsh9euz98 = await MarsStakingRewards.new(addressZqZBK3c, addressWAz3G8r, addressNA6kgnZ, {from: accounts[2]});
		const addressZMG7AfF = accounts[1]
		const uintpzgrzb1 = BigInt("1547")
		const uintjABYeAX = BigInt("721")
		const uint256y1HPMWE = await MarsStakingRewardsh9euz98.rewardPerToken.call({from: accounts[2]});
		const addressWK2BN8F = await MarsStakingRewardsh9euz98.transferOwnership.call(addressZMG7AfF, {from: accounts[2]});
//		const uint256R8GQC3 = await MarsStakingRewardsh9euz98.notifyRewardAmount.call(uintjABYeAX, uintpzgrzb1, {from: accounts[1]});

		assert.equal(uint256y1HPMWE, BigInt("0"))
		await expect(MarsStakingRewardsh9euz98.notifyRewardAmount.call(uintjABYeAX, uintpzgrzb1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiGipBK3 = accounts[1]
		const addressSlbjbU6 = accounts[5]
		const addresseHtykPJ = accounts[0]
		const MarsStakingRewardsh9euz98 = await MarsStakingRewards.new(addressiGipBK3, addressSlbjbU6, addresseHtykPJ, {from: accounts[2]});
		const uintFSjODPb = BigInt("384")
		const addresskgb4bf = accounts[5]
		const addressC5qNWs = accounts[3]
		const uintdXGy6U = BigInt("1456")
		const addressLyd87ic = accounts[3]
		const addressWHLjsEE = accounts[5]
		const uintbTu5uRD = BigInt("297")
		const uintNjga4eI = BigInt("454")
		const uint256y1HPMWE = await MarsStakingRewardsh9euz98.rewardPerToken.call({from: accounts[2]});
//		const addressgbIsmsI = await MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addresskgb4bf, uintFSjODPb, {from: accounts[2]});
//		const addressxwGlpke = await MarsStakingRewardsh9euz98.owner.call({from: accounts[3]});
//		const uint2563Un42W = await MarsStakingRewardsh9euz98.earned.call(addressC5qNWs, {from: accounts[3]});
//		const addressKClN5l = await MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addressLyd87ic, uintdXGy6U, {from: accounts[0]});
//		const uint256IAHlRQF = await MarsStakingRewardsh9euz98.earned.call(addressWHLjsEE, {from: accounts[3]});
//		const uint256cjebLpm = await MarsStakingRewardsh9euz98.notifyRewardAmount.call(uintNjga4eI, uintbTu5uRD, {from: accounts[1]});

		assert.equal(uint256y1HPMWE, BigInt("0"))
		await expect(MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addresskgb4bf, uintFSjODPb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressK0O2biO = accounts[1]
		const addressuPP1PSs = accounts[5]
		const addresspkdBT7e = accounts[0]
		const MarsStakingRewardsh9euz98 = await MarsStakingRewards.new(addressK0O2biO, addressuPP1PSs, addresspkdBT7e, {from: accounts[2]});
		const addresswg5PDhf = accounts[2]
		const uint0v7WTK = BigInt("384")
		const addressT9mr6A0 = accounts[0]
		const uinta8sD1dR = BigInt("1456")
		const addressf9VuNVn = accounts[3]
		const addressTcb9bVA = accounts[5]
		const uintDjvefmC = BigInt("297")
		const uintB2bKH4 = BigInt("454")
		const uint256y1HPMWE = await MarsStakingRewardsh9euz98.rewardPerToken.call({from: accounts[2]});
		const addressQfCuvTq = await MarsStakingRewardsh9euz98.setRewardsDistribution.call(addresswg5PDhf, {from: accounts[2]});
//		const addressgbIsmsI = await MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addressT9mr6A0, uint0v7WTK, {from: accounts[2]});
//		await MarsStakingRewardsh9euz98.nonReentrant.call({from: accounts[4]});
//		const addressxwGlpke = await MarsStakingRewardsh9euz98.owner.call({from: accounts[3]});
//		const addressKClN5l = await MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addressf9VuNVn, uinta8sD1dR, {from: accounts[0]});
//		const uint256IAHlRQF = await MarsStakingRewardsh9euz98.earned.call(addressTcb9bVA, {from: accounts[3]});
//		const uint256cjebLpm = await MarsStakingRewardsh9euz98.notifyRewardAmount.call(uintB2bKH4, uintDjvefmC, {from: accounts[1]});

		assert.equal(uint256y1HPMWE, BigInt("0"))
		await expect(MarsStakingRewardsh9euz98.inCaseTokensGetStuck.call(addressT9mr6A0, uint0v7WTK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
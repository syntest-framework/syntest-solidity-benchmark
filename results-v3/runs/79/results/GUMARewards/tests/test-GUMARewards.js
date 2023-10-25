const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsH7JvxR4 = await GUMARewards.new({from: accounts[4]});
		const addressjlMHrs6 = accounts[5]
		const uint256vlyQZS = await GUMARewardsH7JvxR4.lastTimeRewardApplicable.call({from: accounts[5]});
		await GUMARewardsH7JvxR4.getReward.call({from: accounts[2]});
		const uint256BSrjba = await GUMARewardsH7JvxR4.earned.call(addressjlMHrs6, {from: accounts[3]});
		const uint256VixQEHs = await GUMARewardsH7JvxR4.totalSupply.call({from: accounts[2]});
		await GUMARewardsH7JvxR4.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256vlyQZS, BigInt("0"))
		await expect(GUMARewardsH7JvxR4.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsnGTSzQ = await GUMARewards.new({from: accounts[3]});
		const addressdvdJYG = accounts[1]
		const uintxCoCnya = BigInt("1443")
		const addressDZEAGoY = accounts[4]
		const uintxtS8I4s = BigInt("1539")
		await GUMARewardsnGTSzQ.getReward.call({from: accounts[2]});
		const uint256utcSVIM = await GUMARewardsnGTSzQ.balanceOf.call(addressdvdJYG, {from: accounts[3]});
		const uint256v57Cvl2 = await GUMARewardsnGTSzQ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fTzu6JZ = await GUMARewardsnGTSzQ.stake.call(uintxCoCnya, {from: accounts[0]});
		const uint256rkQgy3J = await GUMARewardsnGTSzQ.earned.call(addressDZEAGoY, {from: accounts[2]});
		const uint256cpiaBKf = await GUMARewardsnGTSzQ.stake.call(uintxtS8I4s, {from: accounts[1]});

		await expect(GUMARewardsnGTSzQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsXJuBNd = await GUMARewards.new({from: accounts[5]});
		const addressWiHuF1 = accounts[0]
		const addressRnATdip = await GUMARewardsXJuBNd.updateReward.call(addressWiHuF1, {from: "0x0000000000000000000000000000000000000001"});
		const uint2566zlsIH = await GUMARewardsXJuBNd.rewardPerToken.call({from: accounts[1]});
		const addressfTwbiMY = await GUMARewardsXJuBNd.owner.call({from: accounts[2]});
		const boolkwn8IVv = await GUMARewardsXJuBNd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsXJuBNd.updateReward.call(addressWiHuF1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGUUQHN = await GUMARewards.new({from: accounts[3]});
		const addressNykvm4V = "0x0000000000000000000000000000000000000001"
		const addressm0uR8z = accounts[0]
		const addressAmVm3iA = accounts[4]
		const addresshhi0k3x = await GUMARewardsGUUQHN.setRewardDistribution.call(addressNykvm4V, {from: "0x0000000000000000000000000000000000000001"});
		const addressLuxtJCB = await GUMARewardsGUUQHN.updateReward.call(addressm0uR8z, {from: accounts[5]});
		const uint256toEidql = await GUMARewardsGUUQHN.earned.call(addressAmVm3iA, {from: accounts[1]});
		const boolYNVTfl = await GUMARewardsGUUQHN.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsGUUQHN.setRewardDistribution.call(addressNykvm4V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBdgMd93 = await GUMARewards.new({from: accounts[2]});
		const addressp3Cd00q = accounts[2]
		const uintTFoSQXe = BigInt("1952")
		const uinttlhuc99 = BigInt("1752")
		const addressucNFBrK = await GUMARewardsBdgMd93.transferOwnership.call(addressp3Cd00q, {from: accounts[2]});
		const uint256PafAh3A = await GUMARewardsBdgMd93.stake.call(uintTFoSQXe, {from: accounts[1]});
		const uint256oXkfjDp = await GUMARewardsBdgMd93.stake.call(uinttlhuc99, {from: accounts[3]});

		await expect(GUMARewardsBdgMd93.stake.call(uintTFoSQXe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLo0MKwt = await GUMARewards.new({from: accounts[2]});
		const addresskwONarl = accounts[2]
		const addressVdaWsFO = accounts[2]
		const addressGRwz34c = accounts[5]
		const uint256tPy50a = await GUMARewardsLo0MKwt.rewardPerToken.call({from: accounts[3]});
		const uint256JPDnhED = await GUMARewardsLo0MKwt.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressh2S9eZ6 = await GUMARewardsLo0MKwt.setGUMA.call(addressVdaWsFO, addresskwONarl, {from: accounts[3]});
		await GUMARewardsLo0MKwt.onlyOwner.call({from: accounts[1]});
		const addressivHaJZs = await GUMARewardsLo0MKwt.updateReward.call(addressGRwz34c, {from: accounts[4]});

		assert.equal(uint256JPDnhED, BigInt("0"))
		assert.equal(uint256tPy50a, BigInt("0"))
		await expect(GUMARewardsLo0MKwt.setGUMA.call(addressVdaWsFO, addresskwONarl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsH7JvxR4 = await GUMARewards.new({from: accounts[4]});
		const addressMLxBXw = accounts[3]
		const addressNqDQzjG = accounts[5]
		const uint256vlyQZS = await GUMARewardsH7JvxR4.lastTimeRewardApplicable.call({from: accounts[5]});
		await GUMARewardsH7JvxR4.getReward.call({from: accounts[2]});
		const addressTOjk6WC = await GUMARewardsH7JvxR4.setRewardDistribution.call(addressMLxBXw, {from: accounts[4]});
		const uint256BSrjba = await GUMARewardsH7JvxR4.earned.call(addressNqDQzjG, {from: accounts[3]});
		const uint256xuVO1M = await GUMARewardsH7JvxR4.totalSupply.call({from: accounts[3]});
		const uint256VixQEHs = await GUMARewardsH7JvxR4.totalSupply.call({from: accounts[2]});
		await GUMARewardsH7JvxR4.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256vlyQZS, BigInt("0"))
		await expect(GUMARewardsH7JvxR4.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsH7JvxR4 = await GUMARewards.new({from: accounts[4]});
		const addressXGCEZzZ = accounts[1]
		const uint256vlyQZS = await GUMARewardsH7JvxR4.lastTimeRewardApplicable.call({from: accounts[5]});
		await GUMARewardsH7JvxR4.getReward.call({from: accounts[2]});
		const uint256VixQEHs = await GUMARewardsH7JvxR4.totalSupply.call({from: accounts[2]});
		const addresssrsYJh6 = await GUMARewardsH7JvxR4.owner.call({from: accounts[4]});
		const boolrihO5vM = await GUMARewardsH7JvxR4.isOwner.call({from: accounts[3]});
		const addressLW55jpy = await GUMARewardsH7JvxR4.updateReward.call(addressXGCEZzZ, {from: accounts[5]});
		await GUMARewardsH7JvxR4.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256vlyQZS, BigInt("0"))
		await expect(GUMARewardsH7JvxR4.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqc0rlEP = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressklEQrc = accounts[5]
		const addressMMujAMK = accounts[4]
		const addressHiEsvpC = accounts[1]
		const addressHV5KYA = accounts[3]
		const uint256Zf7jH3l = await GUMARewardsqc0rlEP.earned.call(addressklEQrc, {from: accounts[5]});
		const uint256LG3pCTY = await GUMARewardsqc0rlEP.balanceOf.call(addressMMujAMK, {from: accounts[5]});
		const addressaw1s9Dn = await GUMARewardsqc0rlEP.updateReward.call(addressHiEsvpC, {from: accounts[4]});
		const addressi09QGHO = await GUMARewardsqc0rlEP.transferOwnership.call(addressHV5KYA, {from: accounts[0]});
	});
})
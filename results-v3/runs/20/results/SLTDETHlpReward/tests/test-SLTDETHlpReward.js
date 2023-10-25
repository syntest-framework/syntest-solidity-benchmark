const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk6h3kjH = await SLTDETHlpReward.new({from: accounts[0]});
		const uintJdvlgpR = BigInt("1691")
		const uint256UCuOU1s = await SLTDETHlpRewardk6h3kjH.notifyRewardAmount.call(uintJdvlgpR, {from: accounts[1]});
		await SLTDETHlpRewardk6h3kjH.onlyOwner.call({from: accounts[2]});
		const uint256e3ToQ6f = await SLTDETHlpRewardk6h3kjH.rewardPerToken.call({from: accounts[4]});
		const uint256a547VX = await SLTDETHlpRewardk6h3kjH.rewardPerToken.call({from: accounts[2]});

		await expect(SLTDETHlpRewardk6h3kjH.notifyRewardAmount.call(uintJdvlgpR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiaoIEVA = await SLTDETHlpReward.new({from: accounts[2]});
		const addressSfxh4de = accounts[2]
		const addressTV4bj7 = "0x0000000000000000000000000000000000000001"
		await SLTDETHlpRewardiaoIEVA.onlyOwner.call({from: accounts[0]});
		const addressauJHKU = await SLTDETHlpRewardiaoIEVA.setStakeAddress.call(addressSfxh4de, {from: accounts[4]});
		const uint256JOWMDqE = await SLTDETHlpRewardiaoIEVA.remainingReward.call({from: accounts[1]});
		const addressx0kojRo = await SLTDETHlpRewardiaoIEVA.transferOwnership.call(addressTV4bj7, {from: accounts[4]});

		await expect(SLTDETHlpRewardiaoIEVA.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRQBetk2 = await SLTDETHlpReward.new({from: accounts[0]});
		const addresszQMtrj = accounts[4]
		const addressJRYObOC = accounts[1]
		const uintxJptOh4 = BigInt("341")
		const addressyxS5dLg = await SLTDETHlpRewardRQBetk2.setRewardDistribution.call(addresszQMtrj, {from: "0x0000000000000000000000000000000000000001"});
		const addressauNm2P4 = await SLTDETHlpRewardRQBetk2.transferOwnership.call(addressJRYObOC, {from: accounts[3]});
		const uint256nfu5W9o = await SLTDETHlpRewardRQBetk2.stake.call(uintxJptOh4, {from: accounts[2]});

		await expect(SLTDETHlpRewardRQBetk2.setRewardDistribution.call(addresszQMtrj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzuSAHh = await SLTDETHlpReward.new({from: accounts[3]});
		const uintzUPlkLl = BigInt("1977")
		const uint256hNkZmRx = await SLTDETHlpRewardzuSAHh.stake.call(uintzUPlkLl, {from: accounts[3]});
		const boolDNEl9Nl = await SLTDETHlpRewardzuSAHh.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardzuSAHh.renounceOwnership.call({from: accounts[5]});

		await expect(SLTDETHlpRewardzuSAHh.stake.call(uintzUPlkLl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZw9QAq2 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthCdpMAd = BigInt("1983")
		const uintIuJtOIe = BigInt("505")
		const uint256ZmLG2L3 = await SLTDETHlpRewardZw9QAq2.notifyRewardAmount.call(uinthCdpMAd, {from: accounts[2]});
		const uint256OiH4J72 = await SLTDETHlpRewardZw9QAq2.notifyRewardAmount.call(uintIuJtOIe, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardZw9QAq2.getReward.call({from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYMujc3H = await SLTDETHlpReward.new({from: accounts[3]});
		const uintn6kgcFT = BigInt("893")
		const uintMwMASgj = BigInt("800")
		const addressIMQSeIL = accounts[3]
		const uintItFfnxv = BigInt("398")
		const uint256QxgnBQF = await SLTDETHlpRewardYMujc3H.withdraw.call(uintn6kgcFT, {from: accounts[5]});
		const uint2566QxvAE = await SLTDETHlpRewardYMujc3H.stake.call(uintMwMASgj, {from: accounts[1]});
		const addressnWgIFHx = await SLTDETHlpRewardYMujc3H.transferOwnership.call(addressIMQSeIL, {from: accounts[1]});
		await SLTDETHlpRewardYMujc3H.checkStart.call({from: accounts[2]});
		const uint256pjaOpb = await SLTDETHlpRewardYMujc3H.setStartTime.call(uintItFfnxv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardYMujc3H.withdraw.call(uintn6kgcFT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkOZJzF = await SLTDETHlpReward.new({from: accounts[4]});
		const uintTZb4QVT = BigInt("2024")
		await SLTDETHlpRewardkOZJzF.getReward.call({from: accounts[4]});
		await SLTDETHlpRewardkOZJzF.renounceOwnership.call({from: accounts[1]});
		const uint256u5TGRp = await SLTDETHlpRewardkOZJzF.setStartTime.call(uintTZb4QVT, {from: accounts[2]});

		await expect(SLTDETHlpRewardkOZJzF.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRQBetk2 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressX73ntoc = accounts[4]
		const addressW5Bfdyr = accounts[1]
		const uintnXY8Yj5 = BigInt("341")
		const uint256iWZd39d = await SLTDETHlpRewardRQBetk2.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyxS5dLg = await SLTDETHlpRewardRQBetk2.setRewardDistribution.call(addressX73ntoc, {from: "0x0000000000000000000000000000000000000001"});
		const addressauNm2P4 = await SLTDETHlpRewardRQBetk2.transferOwnership.call(addressW5Bfdyr, {from: accounts[3]});
		const uint256nfu5W9o = await SLTDETHlpRewardRQBetk2.stake.call(uintnXY8Yj5, {from: accounts[2]});

		await expect(SLTDETHlpRewardRQBetk2.remainingReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzuSAHh = await SLTDETHlpReward.new({from: accounts[3]});
		const uintdKxpJWD = BigInt("1970")
		const addressvEmNhCj = await SLTDETHlpRewardzuSAHh.owner.call({from: accounts[0]});
		const uint256hNkZmRx = await SLTDETHlpRewardzuSAHh.stake.call(uintdKxpJWD, {from: accounts[3]});
		const boolDNEl9Nl = await SLTDETHlpRewardzuSAHh.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardzuSAHh.renounceOwnership.call({from: accounts[5]});

		assert.equal(addressvEmNhCj, 0x5312313EFb15479eAa0fe709fB72fe925CB5f6E7)
		await expect(SLTDETHlpRewardzuSAHh.stake.call(uintdKxpJWD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkOZJzF = await SLTDETHlpReward.new({from: accounts[4]});
		const uintmbErzAg = BigInt("2024")
		await SLTDETHlpRewardkOZJzF.getReward.call({from: accounts[4]});
		await SLTDETHlpRewardkOZJzF.exit.call({from: accounts[0]});
		const uint256u5TGRp = await SLTDETHlpRewardkOZJzF.setStartTime.call(uintmbErzAg, {from: accounts[2]});

		await expect(SLTDETHlpRewardkOZJzF.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzuSAHh = await SLTDETHlpReward.new({from: accounts[3]});
		const address0zQQDq = accounts[1]
		const uintkdkuX5 = BigInt("1977")
		const addresspfSS2ED = accounts[1]
		const addressJpwNYFA = await SLTDETHlpRewardzuSAHh.setRewardDistribution.call(address0zQQDq, {from: accounts[3]});
		const uint256hNkZmRx = await SLTDETHlpRewardzuSAHh.stake.call(uintkdkuX5, {from: accounts[3]});
		await SLTDETHlpRewardzuSAHh.renounceOwnership.call({from: accounts[5]});
		const addressDbPqqFb = await SLTDETHlpRewardzuSAHh.transferOwnership.call(addresspfSS2ED, {from: accounts[4]});

		await expect(SLTDETHlpRewardzuSAHh.stake.call(uintkdkuX5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzuSAHh = await SLTDETHlpReward.new({from: accounts[3]});
		const addressozPgMKb = "0x0000000000000000000000000000000000000001"
		const uintDy35dEn = BigInt("175")
		const addresskFZonx = await SLTDETHlpRewardzuSAHh.setStakeAddress.call(addressozPgMKb, {from: accounts[3]});
		const uint256hNkZmRx = await SLTDETHlpRewardzuSAHh.stake.call(uintDy35dEn, {from: accounts[3]});

		await expect(SLTDETHlpRewardzuSAHh.stake.call(uintDy35dEn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkOZJzF = await SLTDETHlpReward.new({from: accounts[4]});
		const addressSS6ty8U = accounts[5]
		const uinthgZClNJ = BigInt("1556")
		const addresslSHZJK4 = await SLTDETHlpRewardkOZJzF.transferOwnership.call(addressSS6ty8U, {from: accounts[4]});
		const uint256GiyxlhQ = await SLTDETHlpRewardkOZJzF.stake.call(uinthgZClNJ, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardkOZJzF.getReward.call({from: accounts[4]});

		await expect(SLTDETHlpRewardkOZJzF.stake.call(uinthgZClNJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzuSAHh = await SLTDETHlpReward.new({from: accounts[3]});
		const uintGy6ancT = BigInt("1969")
		const addressW9KMCI8 = accounts[3]
		const uintbHHpXHW = BigInt("2009")
		const uint256DPQIiQC = await SLTDETHlpRewardzuSAHh.notifyRewardAmount.call(uintGy6ancT, {from: accounts[3]});
		const addressKw8wlo = await SLTDETHlpRewardzuSAHh.updateReward.call(addressW9KMCI8, {from: accounts[3]});
		const uint256hNkZmRx = await SLTDETHlpRewardzuSAHh.stake.call(uintbHHpXHW, {from: accounts[3]});

		await expect(SLTDETHlpRewardzuSAHh.updateReward.call(addressW9KMCI8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardUeiO9D = await SLTDETHlpReward.new({from: accounts[3]});
		const uintx0dKdQ8 = BigInt("525")
		const addressxQon0oH = accounts[2]
		const uintpAwiaWe = BigInt("612")
		await SLTDETHlpRewardUeiO9D.renounceOwnership.call({from: accounts[3]});
		const uint256UfhpHPN = await SLTDETHlpRewardUeiO9D.setStartTime.call(uintx0dKdQ8, {from: accounts[1]});
		const uint256tpWwCtk = await SLTDETHlpRewardUeiO9D.remainingReward.call({from: accounts[1]});
		await SLTDETHlpRewardUeiO9D.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslsQ1xme = await SLTDETHlpRewardUeiO9D.setStakeAddress.call(addressxQon0oH, {from: accounts[3]});
		const uint256t8TYZhk = await SLTDETHlpRewardUeiO9D.withdraw.call(uintpAwiaWe, {from: accounts[5]});

		await expect(SLTDETHlpRewardUeiO9D.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
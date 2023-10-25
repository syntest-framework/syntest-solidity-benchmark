const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEkx8mqC = await DMONDETHRewards.new({from: accounts[1]});
		const uintujchr09 = BigInt("651")
		const addressdW9Kz0f = accounts[0]
		const uintPKYFfZy = BigInt("1714")
		const addressdhMGlfT = accounts[4]
		const uint2561RMMlG = await DMONDETHRewardsEkx8mqC.stake.call(uintujchr09, {from: accounts[2]});
		const uint256EBITQ1z = await DMONDETHRewardsEkx8mqC.earned.call(addressdW9Kz0f, {from: accounts[2]});
		const uint256iTovyNP = await DMONDETHRewardsEkx8mqC.notifyRewardAmount.call(uintPKYFfZy, {from: "0x0000000000000000000000000000000000000001"});
		const addressbK4O73p = await DMONDETHRewardsEkx8mqC.setStakeAddress.call(addressdhMGlfT, {from: accounts[2]});

		await expect(DMONDETHRewardsEkx8mqC.stake.call(uintujchr09, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsSA6yuX0 = await DMONDETHRewards.new({from: accounts[3]});
		const addressmFb4MDU = accounts[3]
		const uint2561SFdUJ = await DMONDETHRewardsSA6yuX0.rewardPerToken.call({from: accounts[1]});
		const addresse87hZ9 = await DMONDETHRewardsSA6yuX0.setRewardDistribution.call(addressmFb4MDU, {from: accounts[2]});
		const uint256AZy40O0 = await DMONDETHRewardsSA6yuX0.remainingReward.call({from: accounts[1]});

		assert.equal(uint2561SFdUJ, BigInt("0"))
		await expect(DMONDETHRewardsSA6yuX0.setRewardDistribution.call(addressmFb4MDU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLqXigeB = await DMONDETHRewards.new({from: accounts[0]});
		const addressXSpm3jV = accounts[4]
		const uint256x5y5dsF = await DMONDETHRewardsLqXigeB.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsLqXigeB.onlyRewardDistribution.call({from: accounts[2]});
		const uint256R5sM5cF = await DMONDETHRewardsLqXigeB.earned.call(addressXSpm3jV, {from: accounts[4]});
		await DMONDETHRewardsLqXigeB.getReward.call({from: accounts[0]});
		const uint256EyRdBtm = await DMONDETHRewardsLqXigeB.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(DMONDETHRewardsLqXigeB.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfZ9ekj8 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFcmAY5W = BigInt("10")
		const addressetmKIwK = accounts[5]
		const uint256VSMjGvz = await DMONDETHRewardsfZ9ekj8.withdraw.call(uintFcmAY5W, {from: accounts[4]});
		const boolIdad11a = await DMONDETHRewardsfZ9ekj8.isOwner.call({from: accounts[3]});
		const addressiNmpauK = await DMONDETHRewardsfZ9ekj8.transferOwnership.call(addressetmKIwK, {from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsk1sQtiB = await DMONDETHRewards.new({from: accounts[4]});
		const addressGA3RLsf = accounts[3]
		const addresshcggKSU = accounts[3]
		const uintGr7nToB = BigInt("467")
		const addressNVLIbis = accounts[3]
		const addressv2SyEL1 = await DMONDETHRewardsk1sQtiB.updateReward.call(addressGA3RLsf, {from: accounts[4]});
		await DMONDETHRewardsk1sQtiB.renounceOwnership.call({from: accounts[3]});
		const uint256avx4VJI = await DMONDETHRewardsk1sQtiB.earned.call(addresshcggKSU, {from: accounts[5]});
		const uint256Ql30cS7 = await DMONDETHRewardsk1sQtiB.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256asUpuav = await DMONDETHRewardsk1sQtiB.notifyRewardAmount.call(uintGr7nToB, {from: accounts[4]});
		const uint256l8mxVlK = await DMONDETHRewardsk1sQtiB.balanceOf.call(addressNVLIbis, {from: accounts[3]});

		await expect(DMONDETHRewardsk1sQtiB.updateReward.call(addressGA3RLsf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEkx8mqC = await DMONDETHRewards.new({from: accounts[1]});
		const addressH9z4H6O = accounts[0]
		const uintL41bO8J = BigInt("1714")
		const addressmWj3tVy = accounts[4]
		const uintvIOD3X = BigInt("1966")
		await DMONDETHRewardsEkx8mqC.getReward.call({from: accounts[2]});
		const uint256EBITQ1z = await DMONDETHRewardsEkx8mqC.earned.call(addressH9z4H6O, {from: accounts[2]});
		await DMONDETHRewardsEkx8mqC.onlyOwner.call({from: accounts[3]});
		const uint256iTovyNP = await DMONDETHRewardsEkx8mqC.notifyRewardAmount.call(uintL41bO8J, {from: "0x0000000000000000000000000000000000000001"});
		const addressbK4O73p = await DMONDETHRewardsEkx8mqC.setStakeAddress.call(addressmWj3tVy, {from: accounts[2]});
		const uint256cch4YGT = await DMONDETHRewardsEkx8mqC.withdraw.call(uintvIOD3X, {from: accounts[3]});

		await expect(DMONDETHRewardsEkx8mqC.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPdV8CK2 = await DMONDETHRewards.new({from: accounts[0]});
		const uintOvW5S5j = BigInt("1073")
		const uint256xaex6ER = await DMONDETHRewardsPdV8CK2.totalSupply.call({from: accounts[3]});
		const addressjfg6Lcr = await DMONDETHRewardsPdV8CK2.owner.call({from: accounts[2]});
		const uint256sSr9JRr = await DMONDETHRewardsPdV8CK2.withdraw.call(uintOvW5S5j, {from: accounts[2]});

		assert.equal(addressjfg6Lcr, 0xC45ECaEb1a5deAA71BaAd422EDDEE0728558e60F)
		assert.equal(uint256xaex6ER, BigInt("0"))
		await expect(DMONDETHRewardsPdV8CK2.withdraw.call(uintOvW5S5j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEkx8mqC = await DMONDETHRewards.new({from: accounts[1]});
		const uintF1eaoRi = BigInt("795")
		const uintnptZFuQ = BigInt("651")
		const addressbTZjie = accounts[0]
		const uintqzlRax = BigInt("1714")
		const address5OVXHi = accounts[4]
		const uint256c61HXe = await DMONDETHRewardsEkx8mqC.notifyRewardAmount.call(uintF1eaoRi, {from: accounts[2]});
		const uint2561RMMlG = await DMONDETHRewardsEkx8mqC.stake.call(uintnptZFuQ, {from: accounts[2]});
		const uint256EBITQ1z = await DMONDETHRewardsEkx8mqC.earned.call(addressbTZjie, {from: accounts[2]});
		const uint256iTovyNP = await DMONDETHRewardsEkx8mqC.notifyRewardAmount.call(uintqzlRax, {from: "0x0000000000000000000000000000000000000001"});
		const addressbK4O73p = await DMONDETHRewardsEkx8mqC.setStakeAddress.call(address5OVXHi, {from: accounts[2]});

		await expect(DMONDETHRewardsEkx8mqC.notifyRewardAmount.call(uintF1eaoRi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsaPFrR4a = await DMONDETHRewards.new({from: accounts[2]});
		const addressUvCgjoS = accounts[5]
		const addressX11YaUK = await DMONDETHRewardsaPFrR4a.transferOwnership.call(addressUvCgjoS, {from: accounts[2]});
		await DMONDETHRewardsaPFrR4a.getReward.call({from: accounts[4]});
		const uint256tMABtl7 = await DMONDETHRewardsaPFrR4a.remainingReward.call({from: accounts[1]});
		const uint256iHA0AmK = await DMONDETHRewardsaPFrR4a.totalSupply.call({from: accounts[0]});

		await expect(DMONDETHRewardsaPFrR4a.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPdV8CK2 = await DMONDETHRewards.new({from: accounts[0]});
		const uintD7Ea172 = BigInt("929")
		await DMONDETHRewardsPdV8CK2.exit.call({from: accounts[2]});
		const uint256xaex6ER = await DMONDETHRewardsPdV8CK2.totalSupply.call({from: accounts[3]});
		const uint256gaIY1iQ = await DMONDETHRewardsPdV8CK2.stake.call(uintD7Ea172, {from: accounts[2]});
		await DMONDETHRewardsPdV8CK2.getReward.call({from: accounts[5]});
		const addressjfg6Lcr = await DMONDETHRewardsPdV8CK2.owner.call({from: accounts[2]});
		const uint256ZFfkm1z = await DMONDETHRewardsPdV8CK2.totalSupply.call({from: accounts[3]});

		await expect(DMONDETHRewardsPdV8CK2.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD98h7y2 = await DMONDETHRewards.new({from: accounts[0]});
		const addressQ4LVgSQ = accounts[3]
		const uinthksbW1g = BigInt("803")
		const uint256Je59eE2 = await DMONDETHRewardsD98h7y2.earned.call(addressQ4LVgSQ, {from: accounts[2]});
		const uint256TTt0Iah = await DMONDETHRewardsD98h7y2.setStartTime.call(uinthksbW1g, {from: accounts[0]});
		const uint2562n4QHW = await DMONDETHRewardsD98h7y2.remainingReward.call({from: accounts[2]});

		assert.equal(uint256Je59eE2, BigInt("0"))
		await expect(DMONDETHRewardsD98h7y2.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsN7MjPTD = await DMONDETHRewards.new({from: accounts[3]});
		const addressC1IIGl8 = accounts[3]
		const uintDeGLHoO = BigInt("322")
		const addressvP3a4Lr = await DMONDETHRewardsN7MjPTD.setRewardDistribution.call(addressC1IIGl8, {from: accounts[3]});
		const uint256O3ZcD44 = await DMONDETHRewardsN7MjPTD.totalSupply.call({from: accounts[0]});
		const uint256S9UqNU7 = await DMONDETHRewardsN7MjPTD.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsN7MjPTD.getReward.call({from: accounts[1]});
		const uint256NZ0BL2v = await DMONDETHRewardsN7MjPTD.stake.call(uintDeGLHoO, {from: accounts[1]});
		await DMONDETHRewardsN7MjPTD.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256O3ZcD44, BigInt("0"))
		assert.equal(uint256S9UqNU7, BigInt("0"))
		await expect(DMONDETHRewardsN7MjPTD.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsN7MjPTD = await DMONDETHRewards.new({from: accounts[3]});
		const addressRQjEKxb = accounts[4]
		const uintSti5qpg = BigInt("322")
		const addressa2iw1Zr = await DMONDETHRewardsN7MjPTD.setStakeAddress.call(addressRQjEKxb, {from: accounts[3]});
		const uint256O3ZcD44 = await DMONDETHRewardsN7MjPTD.totalSupply.call({from: accounts[0]});
		const uint256S9UqNU7 = await DMONDETHRewardsN7MjPTD.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsN7MjPTD.getReward.call({from: accounts[1]});
		const uint256NZ0BL2v = await DMONDETHRewardsN7MjPTD.stake.call(uintSti5qpg, {from: accounts[1]});
		await DMONDETHRewardsN7MjPTD.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsN7MjPTD.getReward.call({from: accounts[1]});

		assert.equal(uint256O3ZcD44, BigInt("0"))
		assert.equal(uint256S9UqNU7, BigInt("0"))
		await expect(DMONDETHRewardsN7MjPTD.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsN7MjPTD = await DMONDETHRewards.new({from: accounts[3]});
		const addressxOe98qT = accounts[5]
		const uintZomu1iw = BigInt("322")
		const uint256O3ZcD44 = await DMONDETHRewardsN7MjPTD.totalSupply.call({from: accounts[0]});
		await DMONDETHRewardsN7MjPTD.renounceOwnership.call({from: accounts[3]});
		const uint256uhiVktZ = await DMONDETHRewardsN7MjPTD.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256S9UqNU7 = await DMONDETHRewardsN7MjPTD.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nt4hW3w = await DMONDETHRewardsN7MjPTD.earned.call(addressxOe98qT, {from: accounts[5]});
		const uint256NZ0BL2v = await DMONDETHRewardsN7MjPTD.stake.call(uintZomu1iw, {from: accounts[1]});
		await DMONDETHRewardsN7MjPTD.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256O3ZcD44, BigInt("0"))
		await expect(DMONDETHRewardsN7MjPTD.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsiThRJr9 = await DMONDETHRewards.new({from: accounts[4]});
		const uintkIyJYaS = BigInt("1279")
		const uintmDkKnMw = BigInt("1182")
		const addressro1cq1g = accounts[3]
		const uint256Udg20xp = await DMONDETHRewardsiThRJr9.notifyRewardAmount.call(uintkIyJYaS, {from: accounts[4]});
		await DMONDETHRewardsiThRJr9.getReward.call({from: accounts[1]});
		const uint256HlX0G4Q = await DMONDETHRewardsiThRJr9.withdraw.call(uintmDkKnMw, {from: accounts[1]});
		const uint256H2NNX7B = await DMONDETHRewardsiThRJr9.earned.call(addressro1cq1g, {from: accounts[0]});
		const uint256uL8DwC7 = await DMONDETHRewardsiThRJr9.rewardPerToken.call({from: accounts[2]});

		await expect(DMONDETHRewardsiThRJr9.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
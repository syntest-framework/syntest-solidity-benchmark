const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslll48sK = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlykphH = BigInt("1834")
		const uint82yf2F = BigInt("916")
		const addressdF6RwLU = accounts[1]
		const uint256vKtV7m6 = await DMONDETHRewardslll48sK.withdraw.call(uintlykphH, {from: accounts[3]});
		const uint256cI6YBEV = await DMONDETHRewardslll48sK.notifyRewardAmount.call(uint82yf2F, {from: accounts[1]});
		const addresskYMPUR7 = await DMONDETHRewardslll48sK.setRewardDistribution.call(addressdF6RwLU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256t8jLHrw = await DMONDETHRewardslll48sK.totalSupply.call({from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsC7gnpRT = await DMONDETHRewards.new({from: accounts[3]});
		const addressw6w67T3 = accounts[2]
		await DMONDETHRewardsC7gnpRT.checkStart.call({from: accounts[5]});
		const addresspSOtVkB = await DMONDETHRewardsC7gnpRT.transferOwnership.call(addressw6w67T3, {from: accounts[5]});
		await DMONDETHRewardsC7gnpRT.checkStart.call({from: accounts[0]});

		await expect(DMONDETHRewardsC7gnpRT.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKaTSvr9 = await DMONDETHRewards.new({from: accounts[0]});
		const uintW5hTd1t = BigInt("1169")
		const uint256PFPaihO = await DMONDETHRewardsKaTSvr9.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsKaTSvr9.onlyOwner.call({from: accounts[4]});
		await DMONDETHRewardsKaTSvr9.onlyRewardDistribution.call({from: accounts[1]});
		const uint256itJZrhu = await DMONDETHRewardsKaTSvr9.withdraw.call(uintW5hTd1t, {from: accounts[0]});

		await expect(DMONDETHRewardsKaTSvr9.remainingReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsJj91Ngy = await DMONDETHRewards.new({from: accounts[4]});
		const uintNQlKjrO = BigInt("242")
		await DMONDETHRewardsJj91Ngy.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressptctkIj = await DMONDETHRewardsJj91Ngy.owner.call({from: accounts[3]});
		const uint256tDpXmV1 = await DMONDETHRewardsJj91Ngy.stake.call(uintNQlKjrO, {from: accounts[0]});
		await DMONDETHRewardsJj91Ngy.onlyRewardDistribution.call({from: accounts[0]});
		const uint256xj2lR4 = await DMONDETHRewardsJj91Ngy.totalSupply.call({from: accounts[5]});

		await expect(DMONDETHRewardsJj91Ngy.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy18a11s = await DMONDETHRewards.new({from: accounts[0]});
		const uintVuHPS9Y = BigInt("595")
		const uintKLZ1OIF = BigInt("14")
		const uint256GuzlzZ1 = await DMONDETHRewardsy18a11s.stake.call(uintVuHPS9Y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OnhblQK = await DMONDETHRewardsy18a11s.withdraw.call(uintKLZ1OIF, {from: accounts[4]});
		const uint256kqr7BcM = await DMONDETHRewardsy18a11s.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressExsTXSE = await DMONDETHRewardsy18a11s.owner.call({from: accounts[0]});

		await expect(DMONDETHRewardsy18a11s.stake.call(uintVuHPS9Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsFVgwh5E = await DMONDETHRewards.new({from: accounts[1]});
		const uintNk7wY7u = BigInt("1941")
		const uint256l7PItlt = await DMONDETHRewardsFVgwh5E.notifyRewardAmount.call(uintNk7wY7u, {from: accounts[2]});
		const uint256YdrcEfc = await DMONDETHRewardsFVgwh5E.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsFVgwh5E.renounceOwnership.call({from: accounts[0]});

		await expect(DMONDETHRewardsFVgwh5E.notifyRewardAmount.call(uintNk7wY7u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const uint256L3uvTuz = await DMONDETHRewardsxjvavu6.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolO8bopI9 = await DMONDETHRewardsxjvavu6.isOwner.call({from: accounts[1]});
		await DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]});
		const uint256IlT2Oz0 = await DMONDETHRewardsxjvavu6.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolO8bopI9, false)
		assert.equal(uint256L3uvTuz, BigInt("0"))
		await expect(DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const uinte51Z3Vv = BigInt("515")
		const uint256L3uvTuz = await DMONDETHRewardsxjvavu6.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256BMQzonU = await DMONDETHRewardsxjvavu6.withdraw.call(uinte51Z3Vv, {from: "0x0000000000000000000000000000000000000001"});
		const boolO8bopI9 = await DMONDETHRewardsxjvavu6.isOwner.call({from: accounts[1]});
		await DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]});
		const uint256IlT2Oz0 = await DMONDETHRewardsxjvavu6.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256L3uvTuz, BigInt("0"))
		await expect(DMONDETHRewardsxjvavu6.withdraw.call(uinte51Z3Vv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsNxbrcCJ = await DMONDETHRewards.new({from: accounts[0]});
		const addressVFmBitH = accounts[3]
		const uintkRiemjV = BigInt("1151")
		const uint256beZ02vW = await DMONDETHRewardsNxbrcCJ.balanceOf.call(addressVFmBitH, {from: accounts[4]});
		const addressvZgm4i3 = await DMONDETHRewardsNxbrcCJ.owner.call({from: accounts[2]});
		await DMONDETHRewardsNxbrcCJ.onlyRewardDistribution.call({from: accounts[3]});
		await DMONDETHRewardsNxbrcCJ.getReward.call({from: accounts[1]});
		const uint256qDaVKX = await DMONDETHRewardsNxbrcCJ.withdraw.call(uintkRiemjV, {from: accounts[2]});

		assert.equal(addressvZgm4i3, 0xA50eC08E2b9A9F5119d820a184D99d9a6FD2E28f)
		assert.equal(uint256beZ02vW, BigInt("0"))
		await expect(DMONDETHRewardsNxbrcCJ.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardssQtPl1D = await DMONDETHRewards.new({from: accounts[3]});
		const addressI7ZFdOU = accounts[1]
		const addressGQbv5ha = accounts[1]
		await DMONDETHRewardssQtPl1D.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressfpJD5dV = await DMONDETHRewardssQtPl1D.setRewardDistribution.call(addressI7ZFdOU, {from: accounts[4]});
		const addressuuefvWP = await DMONDETHRewardssQtPl1D.transferOwnership.call(addressGQbv5ha, {from: accounts[0]});
		const boolYKxidUr = await DMONDETHRewardssQtPl1D.isOwner.call({from: accounts[2]});

		await expect(DMONDETHRewardssQtPl1D.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const uint7OWTfs = BigInt("1597")
		const uint256IlT2Oz0 = await DMONDETHRewardsxjvavu6.rewardPerToken.call({from: accounts[3]});
		const uint256xIbOPvM = await DMONDETHRewardsxjvavu6.notifyRewardAmount.call(uint7OWTfs, {from: accounts[2]});
		await DMONDETHRewardsxjvavu6.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IlT2Oz0, BigInt("0"))
		await expect(DMONDETHRewardsxjvavu6.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const addresso7ZITsr = accounts[3]
		await DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]});
		const addressfRnSzmr = await DMONDETHRewardsxjvavu6.setRewardDistribution.call(addresso7ZITsr, {from: accounts[2]});

		await expect(DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDA6oqTK = await DMONDETHRewards.new({from: accounts[0]});
		const addressfTcuF1r = accounts[3]
		const uintp1EobMw = BigInt("1607")
		const addressrFzrx11 = await DMONDETHRewardsDA6oqTK.transferOwnership.call(addressfTcuF1r, {from: accounts[0]});
		await DMONDETHRewardsDA6oqTK.checkStart.call({from: accounts[4]});
		const uint256ktjSEVj = await DMONDETHRewardsDA6oqTK.notifyRewardAmount.call(uintp1EobMw, {from: accounts[1]});
		await DMONDETHRewardsDA6oqTK.getReward.call({from: accounts[1]});
		await DMONDETHRewardsDA6oqTK.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsDA6oqTK.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const addressmiMeTCw = accounts[3]
		const addressz8BtGY7 = await DMONDETHRewardsxjvavu6.setStakeAddress.call(addressmiMeTCw, {from: accounts[2]});
		await DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]});

		await expect(DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsC7gnpRT = await DMONDETHRewards.new({from: accounts[3]});
		const uintZSefBeZ = BigInt("521")
		const addressYMs6m9 = accounts[3]
		const uint256fRwThWB = await DMONDETHRewardsC7gnpRT.setStartTime.call(uintZSefBeZ, {from: accounts[3]});
		await DMONDETHRewardsC7gnpRT.checkStart.call({from: accounts[0]});
		const addressDdP7cfc = await DMONDETHRewardsC7gnpRT.setStakeAddress.call(addressYMs6m9, {from: accounts[0]});

		await expect(DMONDETHRewardsC7gnpRT.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxjvavu6 = await DMONDETHRewards.new({from: accounts[2]});
		const addressWTeWFFS = accounts[2]
		await DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]});
		const addressk8YVcjR = await DMONDETHRewardsxjvavu6.transferOwnership.call(addressWTeWFFS, {from: accounts[2]});
		await DMONDETHRewardsxjvavu6.renounceOwnership.call({from: accounts[2]});

		await expect(DMONDETHRewardsxjvavu6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
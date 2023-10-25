const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKWZb6JEP = await RainbowRAK.new({from: accounts[2]});
		const addressCt2dTPD = accounts[4]
		const addressarrayDlLYXvl = await RainbowRAKWZb6JEP.getCommunity.call({from: accounts[3]});
		const addressRafXlVU = await RainbowRAKWZb6JEP.updateReward.call(addressCt2dTPD, {from: accounts[3]});

		assert.equal(addressarrayDlLYXvl, )
		await expect(RainbowRAKWZb6JEP.updateReward.call(addressCt2dTPD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOgdoWJ0 = await RainbowRAK.new({from: accounts[2]});
		const uintNDbFrE = BigInt("823")
		const addressjhjmzmx = accounts[1]
		const uintee85YZ1 = BigInt("1863")
		const addressE5RhrqS = accounts[1]
		const uint256UlbMizQ = await RainbowRAKOgdoWJ0.unstake.call(uintNDbFrE, {from: accounts[5]});
		const addressjnapFb9 = await RainbowRAKOgdoWJ0.owner.call({from: accounts[4]});
		const addressmQF81H = await RainbowRAKOgdoWJ0.transferOwnership.call(addressjhjmzmx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RstR7zH = await RainbowRAKOgdoWJ0.unstake.call(uintee85YZ1, {from: accounts[3]});
		const addressmIXdGaD = await RainbowRAKOgdoWJ0.transferOwnership.call(addressE5RhrqS, {from: accounts[2]});

		await expect(RainbowRAKOgdoWJ0.unstake.call(uintNDbFrE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKmvcXWni = await RainbowRAK.new({from: accounts[3]});
		await RainbowRAKmvcXWni.renounceOwnership.call({from: accounts[5]});
		const uint256JTIwOpE = await RainbowRAKmvcXWni.getCurrentRewardReserve.call({from: accounts[3]});
		await RainbowRAKmvcXWni.claimRewards.call({from: accounts[4]});

		await expect(RainbowRAKmvcXWni.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKq0pKgcR = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXWAjhKA = accounts[5]
		const uintaOlmmDu = BigInt("1859")
		const uintEw9wJSF = BigInt("195")
		const addressxCw7m0K = await RainbowRAKq0pKgcR.transferOwnership.call(addressXWAjhKA, {from: accounts[5]});
		const uint256NONFBG5 = await RainbowRAKq0pKgcR.unstake.call(uintaOlmmDu, {from: accounts[2]});
		const uint256iVhDRLV = await RainbowRAKq0pKgcR.unstake.call(uintEw9wJSF, {from: accounts[4]});
		await RainbowRAKq0pKgcR.claimRewards.call({from: accounts[0]});
		const addressWZO8r4P = await RainbowRAKq0pKgcR.owner.call({from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKiHia2S5 = await RainbowRAK.new({from: accounts[0]});
		const uint256mLUwET = await RainbowRAKiHia2S5.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAMhWoGM = await RainbowRAKiHia2S5.isOwner.call({from: accounts[0]});
		const addressarrayYrdzhgz = await RainbowRAKiHia2S5.getCommunity.call({from: accounts[4]});
		const uint2563OLFtN = await RainbowRAKiHia2S5.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(addressarrayYrdzhgz, )
		assert.equal(boolAMhWoGM, true)
		assert.equal(uint2563OLFtN, BigInt("0"))
		assert.equal(uint256mLUwET, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWZb6JEP = await RainbowRAK.new({from: accounts[2]});
		const uintpQZThP = BigInt("228")
		const addressCByEjiA = accounts[5]
		const uint256wLkoLTn = await RainbowRAKWZb6JEP.stake.call(uintpQZThP, {from: accounts[4]});
		const addressarrayL5CgPdf = await RainbowRAKWZb6JEP.getCommunity.call({from: accounts[1]});
		const addressRafXlVU = await RainbowRAKWZb6JEP.updateReward.call(addressCByEjiA, {from: accounts[3]});

		await expect(RainbowRAKWZb6JEP.stake.call(uintpQZThP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOgdoWJ0 = await RainbowRAK.new({from: accounts[2]});
		const addresssITxx3G = accounts[5]
		const uintPtN3teY = BigInt("818")
		const addressWlaJfJa = accounts[1]
		const uintIoXBPTV = BigInt("644")
		const uintyMcWG17 = BigInt("1863")
		const addressERLnRGx = accounts[1]
		const addressnoNdMo4 = await RainbowRAKOgdoWJ0.transferOwnership.call(addresssITxx3G, {from: accounts[2]});
		const uint256UlbMizQ = await RainbowRAKOgdoWJ0.unstake.call(uintPtN3teY, {from: accounts[5]});
		const addressjnapFb9 = await RainbowRAKOgdoWJ0.owner.call({from: accounts[4]});
		const addressmQF81H = await RainbowRAKOgdoWJ0.transferOwnership.call(addressWlaJfJa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256boSUwjY = await RainbowRAKOgdoWJ0.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256rGG9Jwu = await RainbowRAKOgdoWJ0.stake.call(uintIoXBPTV, {from: accounts[5]});
		const uint256RstR7zH = await RainbowRAKOgdoWJ0.unstake.call(uintyMcWG17, {from: accounts[3]});
		const addressmIXdGaD = await RainbowRAKOgdoWJ0.transferOwnership.call(addressERLnRGx, {from: accounts[2]});

		await expect(RainbowRAKOgdoWJ0.unstake.call(uintPtN3teY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOgdoWJ0 = await RainbowRAK.new({from: accounts[2]});
		const uintW1p6Xz = BigInt("1153")
		const uintoWEOSb5 = BigInt("792")
		const uintccdpqPD = BigInt("1862")
		const addressBdRALCD = accounts[1]
		await RainbowRAKOgdoWJ0.exit.call({from: accounts[3]});
		const uint256yOXig5I = await RainbowRAKOgdoWJ0.stake.call(uintW1p6Xz, {from: accounts[1]});
		const uint256UlbMizQ = await RainbowRAKOgdoWJ0.unstake.call(uintoWEOSb5, {from: accounts[5]});
		const uint256RstR7zH = await RainbowRAKOgdoWJ0.unstake.call(uintccdpqPD, {from: accounts[3]});
		const addressmIXdGaD = await RainbowRAKOgdoWJ0.transferOwnership.call(addressBdRALCD, {from: accounts[2]});

		await expect(RainbowRAKOgdoWJ0.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdiN3nGA = await RainbowRAK.new({from: accounts[0]});
		const uintIz0kyG4 = BigInt("873")
		await RainbowRAKdiN3nGA.claimRewards.call({from: accounts[2]});
		const addressarrayq0rUqq9 = await RainbowRAKdiN3nGA.getCommunity.call({from: accounts[1]});
		const uint256PUcwQO3 = await RainbowRAKdiN3nGA.notifyRewardAmount.call(uintIz0kyG4, {from: accounts[0]});

		await expect(RainbowRAKdiN3nGA.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKZKxd61R = await RainbowRAK.new({from: accounts[4]});
		const addressD31jHou = accounts[4]
		const booldHV2rXS = await RainbowRAKZKxd61R.isOwner.call({from: accounts[4]});
		const uint256LeWQ9yF = await RainbowRAKZKxd61R.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressCO9GxKM = await RainbowRAKZKxd61R.owner.call({from: accounts[3]});
		const addressdmursBC = await RainbowRAKZKxd61R.updateReward.call(addressD31jHou, {from: accounts[4]});

		assert.equal(addressCO9GxKM, 0x973b77527c59Ecf646a31D10c7aAc95C2e3457C0)
		assert.equal(booldHV2rXS, true)
		assert.equal(uint256LeWQ9yF, BigInt("0"))
		await expect(RainbowRAKZKxd61R.updateReward.call(addressD31jHou, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOgdoWJ0 = await RainbowRAK.new({from: accounts[2]});
		const uintAHz8p73 = BigInt("767")
		const uintt94iWyO = BigInt("789")
		await RainbowRAKOgdoWJ0.renounceOwnership.call({from: accounts[2]});
		const uint256UlbMizQ = await RainbowRAKOgdoWJ0.unstake.call(uintAHz8p73, {from: accounts[5]});
		const uint256HxJe8GP = await RainbowRAKOgdoWJ0.unstake.call(uintt94iWyO, {from: accounts[2]});
		await RainbowRAKOgdoWJ0.claimRewards.call({from: accounts[1]});
		const addressarrayUnNb6y = await RainbowRAKOgdoWJ0.getCommunity.call({from: accounts[0]});

		await expect(RainbowRAKOgdoWJ0.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWZb6JEP = await RainbowRAK.new({from: accounts[2]});
		const uintXv2f6qb = BigInt("1259")
		const uintVzgG57p = BigInt("215")
		const uint256KUV4Za8 = await RainbowRAKWZb6JEP.notifyRewardAmount.call(uintXv2f6qb, {from: accounts[2]});
		const uint256wLkoLTn = await RainbowRAKWZb6JEP.stake.call(uintVzgG57p, {from: accounts[4]});

		await expect(RainbowRAKWZb6JEP.notifyRewardAmount.call(uintXv2f6qb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
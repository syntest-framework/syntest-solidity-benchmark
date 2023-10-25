const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAsHtBHy = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM83WJ4M = BigInt("1046")
		const addressTXUlP6v = accounts[2]
		const addressRG7VG6b = accounts[5]
		const uintmh5fJlE = BigInt("786")
		const uint256HmLj7n = await SLTDETHlpRewardAsHtBHy.withdraw.call(uintM83WJ4M, {from: accounts[3]});
		const boolQxPh4QJ = await SLTDETHlpRewardAsHtBHy.isOwner.call({from: accounts[0]});
		const uint2563hlWTH = await SLTDETHlpRewardAsHtBHy.earned.call(addressTXUlP6v, {from: accounts[4]});
		const uint2567MKUxh = await SLTDETHlpRewardAsHtBHy.balanceOf.call(addressRG7VG6b, {from: accounts[5]});
		const uint256xSCO8eE = await SLTDETHlpRewardAsHtBHy.withdraw.call(uintmh5fJlE, {from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqHwV8dz = await SLTDETHlpReward.new({from: accounts[3]});
		const addressYSLnTSP = accounts[2]
//		await SLTDETHlpRewardqHwV8dz.getReward.call({from: accounts[4]});
//		const uint256myMRQVe = await SLTDETHlpRewardqHwV8dz.balanceOf.call(addressYSLnTSP, {from: accounts[5]});
//		await SLTDETHlpRewardqHwV8dz.checkStart.call({from: accounts[5]});
//		const uint256xvbgRii = await SLTDETHlpRewardqHwV8dz.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(SLTDETHlpRewardqHwV8dz.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addresscw8Y34n = accounts[2]
		const uintFP3j8S0 = BigInt("1767")
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addresscw8Y34n, {from: accounts[2]});
//		const uint256HEk362L = await SLTDETHlpRewardb2HGksy.setStartTime.call(uintFP3j8S0, {from: accounts[5]});

		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.setStartTime.call(uintFP3j8S0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQJEPmro = await SLTDETHlpReward.new({from: accounts[2]});
		const addressmpv0GVN = accounts[2]
//		const uint256Lib6nVc = await SLTDETHlpRewardQJEPmro.remainingReward.call({from: accounts[3]});
//		const uint256qnLTaVG = await SLTDETHlpRewardQJEPmro.totalSupply.call({from: accounts[5]});
//		const addresskrVlAga = await SLTDETHlpRewardQJEPmro.transferOwnership.call(addressmpv0GVN, {from: accounts[0]});

		await expect(SLTDETHlpRewardQJEPmro.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbwnLUyg = await SLTDETHlpReward.new({from: accounts[0]});
		const uint256GeY60a4 = await SLTDETHlpRewardbwnLUyg.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SLTDETHlpRewardbwnLUyg.exit.call({from: accounts[3]});
//		await SLTDETHlpRewardbwnLUyg.getReward.call({from: accounts[2]});

		assert.equal(uint256GeY60a4, BigInt("0"))
		await expect(SLTDETHlpRewardbwnLUyg.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYqT4k2w = await SLTDETHlpReward.new({from: accounts[2]});
		const addressudhqSLI = accounts[0]
		const uint256osUtAuZ = await SLTDETHlpRewardYqT4k2w.lastTimeRewardApplicable.call({from: accounts[1]});
		const address3KjFy6 = await SLTDETHlpRewardYqT4k2w.setRewardDistribution.call(addressudhqSLI, {from: accounts[2]});

		assert.equal(uint256osUtAuZ, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtcT5wuK = await SLTDETHlpReward.new({from: accounts[4]});
		const uintlwkSuHo = BigInt("855")
		const addresslpfX2T3 = accounts[0]
		const boolscL62hx = await SLTDETHlpRewardtcT5wuK.isOwner.call({from: accounts[5]});
//		const uint256AiTCsVi = await SLTDETHlpRewardtcT5wuK.stake.call(uintlwkSuHo, {from: accounts[2]});
//		const uint256EyKWEc7 = await SLTDETHlpRewardtcT5wuK.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardtcT5wuK.exit.call({from: accounts[3]});
//		const uint256uNYo0t = await SLTDETHlpRewardtcT5wuK.balanceOf.call(addresslpfX2T3, {from: accounts[1]});

		assert.equal(boolscL62hx, false)
		await expect(SLTDETHlpRewardtcT5wuK.stake.call(uintlwkSuHo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressiE3Qai = accounts[3]
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressiE3Qai, {from: accounts[2]});
		const addresseGaea7s = await SLTDETHlpRewardb2HGksy.owner.call({from: accounts[1]});
//		await SLTDETHlpRewardb2HGksy.onlyRewardDistribution.call({from: accounts[1]});

		assert.equal(addresseGaea7s, 0xD19a31b3CC58310e1df530C8bC0B7f233Fac4660)
		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressZKugdQN = accounts[3]
		const uintipjDBx = BigInt("1299")
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressZKugdQN, {from: accounts[2]});
		const boolnhCbt3V = await SLTDETHlpRewardb2HGksy.isOwner.call({from: accounts[0]});
//		const uint256f1Q7hEs = await SLTDETHlpRewardb2HGksy.withdraw.call(uintipjDBx, {from: accounts[0]});

		assert.equal(boolnhCbt3V, false)
		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.withdraw.call(uintipjDBx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressnIF0EQ = accounts[3]
		const uintfS62dz7 = BigInt("707")
		const addresspxV4BwM = accounts[1]
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressnIF0EQ, {from: accounts[2]});
//		const uint256SE1K7A = await SLTDETHlpRewardb2HGksy.notifyRewardAmount.call(uintfS62dz7, {from: accounts[3]});
//		const uint256hW1gLMr = await SLTDETHlpRewardb2HGksy.balanceOf.call(addresspxV4BwM, {from: accounts[4]});

		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.notifyRewardAmount.call(uintfS62dz7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressQB8wGLj = accounts[2]
		const addressfdOLBre = "0x0000000000000000000000000000000000000001"
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressQB8wGLj, {from: accounts[2]});
		const addressdtIn6mX = await SLTDETHlpRewardb2HGksy.setStakeAddress.call(addressfdOLBre, {from: accounts[1]});
//		await SLTDETHlpRewardb2HGksy.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressgtZK5BR = accounts[2]
		const addressMG6TgsL = accounts[0]
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressgtZK5BR, {from: accounts[2]});
		const addressH7znK1 = await SLTDETHlpRewardb2HGksy.transferOwnership.call(addressMG6TgsL, {from: accounts[1]});

		assert.equal(uint256fygUw88, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqHwV8dz = await SLTDETHlpReward.new({from: accounts[3]});
//		await SLTDETHlpRewardqHwV8dz.getReward.call({from: accounts[4]});
//		await SLTDETHlpRewardqHwV8dz.renounceOwnership.call({from: accounts[3]});

		await expect(SLTDETHlpRewardqHwV8dz.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const uintccgwygs = BigInt("864")
		const uintrQt475v = BigInt("528")
		const addressgWS543 = accounts[2]
		const uintF3OcpA = BigInt("652")
		const uint256E0UTWhL = await SLTDETHlpRewardb2HGksy.setStartTime.call(uintccgwygs, {from: accounts[1]});
//		const uint256PFEsCeB = await SLTDETHlpRewardb2HGksy.stake.call(uintrQt475v, {from: accounts[0]});
//		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressgWS543, {from: accounts[2]});
//		const uint256Or2T2Uk = await SLTDETHlpRewardb2HGksy.withdraw.call(uintF3OcpA, {from: accounts[2]});

		await expect(SLTDETHlpRewardb2HGksy.stake.call(uintrQt475v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb2HGksy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressmVA6tQ6 = accounts[3]
		const uintzgxnAEj = BigInt("298")
		const uintgjsCDZg = BigInt("949")
		const uint256fygUw88 = await SLTDETHlpRewardb2HGksy.earned.call(addressmVA6tQ6, {from: accounts[2]});
		const uint256Ul02tNx = await SLTDETHlpRewardb2HGksy.notifyRewardAmount.call(uintzgxnAEj, {from: accounts[1]});
//		const uint256WFlhnHh = await SLTDETHlpRewardb2HGksy.stake.call(uintgjsCDZg, {from: accounts[2]});

		assert.equal(uint256fygUw88, BigInt("0"))
		await expect(SLTDETHlpRewardb2HGksy.stake.call(uintgjsCDZg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardegTAMX = await SLTDETHlpReward.new({from: accounts[1]});
		const uint256Fblb2N = await SLTDETHlpRewardegTAMX.remainingReward.call({from: accounts[1]});
		await SLTDETHlpRewardegTAMX.renounceOwnership.call({from: accounts[3]});
		await SLTDETHlpRewardegTAMX.getReward.call({from: accounts[4]});

		await expect(SLTDETHlpRewardegTAMX.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyQFIxFR = await SLTDETHlpReward.new({from: accounts[2]});
		const addressH13y1Di = accounts[3]
		const addressBptPD3Y = accounts[4]
		const uint256JoxJWc = await SLTDETHlpRewardyQFIxFR.balanceOf.call(addressH13y1Di, {from: accounts[4]});
		const addressNPlWJ7F = await SLTDETHlpRewardyQFIxFR.updateReward.call(addressBptPD3Y, {from: accounts[3]});
		const booliqRl6re = await SLTDETHlpRewardyQFIxFR.isOwner.call({from: accounts[1]});

		assert.equal(uint256JoxJWc, BigInt("0"))
		await expect(SLTDETHlpRewardyQFIxFR.updateReward.call(addressBptPD3Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFqyISpR = await SLTDETHlpReward.new({from: accounts[0]});
		const addressQ0YA4r = accounts[1]
		const addressu3bZ4S = accounts[1]
		const uintxpphUzb = BigInt("367")
		await SLTDETHlpRewardFqyISpR.exit.call({from: accounts[2]});
		const addressrMfxO24 = await SLTDETHlpRewardFqyISpR.updateReward.call(addressQ0YA4r, {from: accounts[5]});
		const addressWQLOWn3 = await SLTDETHlpRewardFqyISpR.updateReward.call(addressu3bZ4S, {from: accounts[4]});
		const uint256uAFWxTM = await SLTDETHlpRewardFqyISpR.totalSupply.call({from: accounts[2]});
		const uint256TP2NKRM = await SLTDETHlpRewardFqyISpR.withdraw.call(uintxpphUzb, {from: accounts[2]});

		await expect(SLTDETHlpRewardFqyISpR.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIryGWjd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintGFnlLF = BigInt("1919")
		const uints72LnvW = BigInt("661")
		const uintEVzYMp = BigInt("1466")
		const uint256iN8pIwv = await SLTDETHlpRewardIryGWjd.stake.call(uintGFnlLF, {from: accounts[5]});
		const uint256bGrnm4j = await SLTDETHlpRewardIryGWjd.notifyRewardAmount.call(uints72LnvW, {from: accounts[3]});
		const uint256MWPanfD = await SLTDETHlpRewardIryGWjd.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256xHrt03H = await SLTDETHlpRewardIryGWjd.withdraw.call(uintEVzYMp, {from: accounts[4]});

		await expect(SLTDETHlpRewardIryGWjd.stake.call(uintGFnlLF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMgrONir = await SLTDETHlpReward.new({from: accounts[3]});
		const uintFSCF0XL = BigInt("261")
		const uintqddqRUW = BigInt("539")
		const addressHwXh9GS = accounts[1]
		const uint256yJ0Div = await SLTDETHlpRewardMgrONir.withdraw.call(uintFSCF0XL, {from: accounts[4]});
		const boolJCcTkVh = await SLTDETHlpRewardMgrONir.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ISOecSX = await SLTDETHlpRewardMgrONir.rewardPerToken.call({from: accounts[1]});
		const uint256ndKnD4f = await SLTDETHlpRewardMgrONir.withdraw.call(uintqddqRUW, {from: accounts[3]});
		const uint256tFX2nao = await SLTDETHlpRewardMgrONir.lastTimeRewardApplicable.call({from: accounts[4]});
		const addresspY6UGEF = await SLTDETHlpRewardMgrONir.updateReward.call(addressHwXh9GS, {from: accounts[4]});

		await expect(SLTDETHlpRewardMgrONir.withdraw.call(uintFSCF0XL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJgac67h = await SLTDETHlpReward.new({from: accounts[4]});
		const addressBZcKS2W = accounts[5]
		const uintKeD04uI = BigInt("721")
		const addressotzBcPb = accounts[0]
		const addressNe6LvEH = "0x0000000000000000000000000000000000000001"
		const addressifWBDJb = await SLTDETHlpRewardJgac67h.transferOwnership.call(addressBZcKS2W, {from: accounts[1]});
		await SLTDETHlpRewardJgac67h.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256XJ0XqTZ = await SLTDETHlpRewardJgac67h.withdraw.call(uintKeD04uI, {from: accounts[4]});
		const addressQ6rOqPh = await SLTDETHlpRewardJgac67h.setStakeAddress.call(addressotzBcPb, {from: accounts[2]});
		const addressRkQFsX = await SLTDETHlpRewardJgac67h.transferOwnership.call(addressNe6LvEH, {from: accounts[3]});
		const uint256PBrQcLU = await SLTDETHlpRewardJgac67h.totalSupply.call({from: accounts[3]});

		await expect(SLTDETHlpRewardJgac67h.transferOwnership.call(addressBZcKS2W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddLqfqGh = await SLTDETHlpReward.new({from: accounts[0]});
		const uintAqTLj8s = BigInt("1286")
		const uint256Q9BrRIU = await SLTDETHlpRewarddLqfqGh.notifyRewardAmount.call(uintAqTLj8s, {from: accounts[3]});
		const uint256MyC2SUM = await SLTDETHlpRewarddLqfqGh.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KTiHxv = await SLTDETHlpRewarddLqfqGh.lastTimeRewardApplicable.call({from: accounts[0]});
		await SLTDETHlpRewarddLqfqGh.onlyRewardDistribution.call({from: accounts[0]});

		await expect(SLTDETHlpRewarddLqfqGh.notifyRewardAmount.call(uintAqTLj8s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewards6vcz3e = await SLTDETHlpReward.new({from: accounts[1]});
		const addressnY1IrxL = accounts[5]
		const addressmpV4I4 = await SLTDETHlpRewards6vcz3e.setRewardDistribution.call(addressnY1IrxL, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCcJEOav = await SLTDETHlpReward.new({from: accounts[3]});
		await SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardCcJEOav.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCcJEOav = await SLTDETHlpReward.new({from: accounts[3]});
		const addressgSarDzh = await SLTDETHlpRewardCcJEOav.owner.call({from: accounts[3]});
		await SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardCcJEOav.checkStart.call({from: accounts[1]});

		assert.equal(addressgSarDzh, 0xb73598921EF6619d1D4519c3BFa3F1426Ef6E25B)
		await expect(SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCcJEOav = await SLTDETHlpReward.new({from: accounts[3]});
		const addressw4B2zFU = accounts[4]
		await SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardCcJEOav.renounceOwnership.call({from: accounts[3]});
		const addressmlPqLtK = await SLTDETHlpRewardCcJEOav.updateReward.call(addressw4B2zFU, {from: accounts[4]});

		await expect(SLTDETHlpRewardCcJEOav.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZsCYnSw = await SLTDETHlpReward.new({from: accounts[5]});
		const uintYsK9nA0 = BigInt("91")
		const uintiQqU3VX = BigInt("876")
		const uintqHIamad = BigInt("1505")
		const addressv0UOtQU = accounts[4]
		await SLTDETHlpRewardZsCYnSw.getReward.call({from: accounts[4]});
		const uint256WhatIW5 = await SLTDETHlpRewardZsCYnSw.setStartTime.call(uintYsK9nA0, {from: accounts[5]});
		const uint256BumzPxm = await SLTDETHlpRewardZsCYnSw.stake.call(uintiQqU3VX, {from: "0x0000000000000000000000000000000000000001"});
		const boolxZ8S38J = await SLTDETHlpRewardZsCYnSw.isOwner.call({from: accounts[4]});
		const uint256UhaAsB = await SLTDETHlpRewardZsCYnSw.setStartTime.call(uintqHIamad, {from: accounts[4]});
		const addressJuNvA98 = await SLTDETHlpRewardZsCYnSw.setRewardDistribution.call(addressv0UOtQU, {from: accounts[0]});
		await SLTDETHlpRewardZsCYnSw.checkStart.call({from: accounts[2]});
		const addressNAJCJP6 = await SLTDETHlpRewardZsCYnSw.owner.call({from: accounts[0]});

		await expect(SLTDETHlpRewardZsCYnSw.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAxOwDo4 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressV0E6Uo4 = "0x0000000000000000000000000000000000000001"
		const addressRW3rwgo = accounts[1]
		const addressJ7DCgxn = await SLTDETHlpRewardAxOwDo4.transferOwnership.call(addressV0E6Uo4, {from: accounts[0]});
		const addressCsOU8av = await SLTDETHlpRewardAxOwDo4.transferOwnership.call(addressRW3rwgo, {from: accounts[1]});

		await expect(SLTDETHlpRewardAxOwDo4.transferOwnership.call(addressRW3rwgo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardBQKcMif = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFMzzJca = accounts[4]
		const addressaLCS2q = accounts[1]
		const uintkXz0rM = BigInt("1857")
		const address3ag497 = await SLTDETHlpRewardBQKcMif.updateReward.call(addressFMzzJca, {from: accounts[5]});
		const uint256tf2q7FQ = await SLTDETHlpRewardBQKcMif.rewardPerToken.call({from: accounts[3]});
		const addressQrZR908 = await SLTDETHlpRewardBQKcMif.setRewardDistribution.call(addressaLCS2q, {from: accounts[3]});
		const uint256GrhPFyU = await SLTDETHlpRewardBQKcMif.remainingReward.call({from: accounts[3]});
		await SLTDETHlpRewardBQKcMif.renounceOwnership.call({from: accounts[1]});
		const uint256t9aC8Xp = await SLTDETHlpRewardBQKcMif.notifyRewardAmount.call(uintkXz0rM, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZsCYnSw = await SLTDETHlpReward.new({from: accounts[5]});
		const addressu8dlAJ0 = "0x0000000000000000000000000000000000000001"
		const uintUzONy3k = BigInt("91")
		const uintU7A7IFL = BigInt("876")
		const uintlv8fzuc = BigInt("569")
		const uinti0uw89f = BigInt("1509")
		const addressHq5Thd = accounts[4]
		const addresseidP5xF = await SLTDETHlpRewardZsCYnSw.setStakeAddress.call(addressu8dlAJ0, {from: accounts[5]});
		await SLTDETHlpRewardZsCYnSw.getReward.call({from: accounts[4]});
		const uint256WhatIW5 = await SLTDETHlpRewardZsCYnSw.setStartTime.call(uintUzONy3k, {from: accounts[5]});
		const uint256BumzPxm = await SLTDETHlpRewardZsCYnSw.stake.call(uintU7A7IFL, {from: "0x0000000000000000000000000000000000000001"});
		const boolxZ8S38J = await SLTDETHlpRewardZsCYnSw.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardZsCYnSw.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDETHlpRewardZsCYnSw.getReward.call({from: accounts[3]});
		const uint256qiQ5Sw5 = await SLTDETHlpRewardZsCYnSw.stake.call(uintlv8fzuc, {from: accounts[4]});
		const uint256UhaAsB = await SLTDETHlpRewardZsCYnSw.setStartTime.call(uinti0uw89f, {from: accounts[4]});
		const addressJuNvA98 = await SLTDETHlpRewardZsCYnSw.setRewardDistribution.call(addressHq5Thd, {from: accounts[0]});
		await SLTDETHlpRewardZsCYnSw.checkStart.call({from: accounts[2]});
		const addressNAJCJP6 = await SLTDETHlpRewardZsCYnSw.owner.call({from: accounts[0]});

		await expect(SLTDETHlpRewardZsCYnSw.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
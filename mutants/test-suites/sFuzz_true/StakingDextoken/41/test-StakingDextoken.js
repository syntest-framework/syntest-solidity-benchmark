const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addresswojSiup = accounts[2]
		const addresspoP5ym3 = accounts[2]
		const StakingDextokenwwNHsx5 = await StakingDextoken.new(addresswojSiup, addresspoP5ym3, {from: accounts[2]});
		const addressOsTNNzR = accounts[2]
		const uintkETfOHp = await StakingDextokenwwNHsx5.remainingRewards.call({from: accounts[2]});
		const uintw8PNDLj = await StakingDextokenwwNHsx5.getClaimOf.call(addressOsTNNzR, {from: accounts[4]});
		const uintyzk1HI = await StakingDextokenwwNHsx5.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintejpXQGV = await StakingDextokenwwNHsx5.totalRewards.call({from: accounts[2]});

		assert.equal(uintejpXQGV, BigInt("0"))
		assert.equal(uintkETfOHp, BigInt("0"))
		assert.equal(uintw8PNDLj, BigInt("0"))
		assert.equal(uintyzk1HI, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressIflMHmF = accounts[0]
		const addressCIhDU4Q = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressIflMHmF, addressCIhDU4Q, {from: accounts[2]});
		const addressR9bSma = accounts[2]
		const uintlepboRW = await StakingDextokenP3FbnxB.rewardPerToken.call({from: accounts[5]});
		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addressR9bSma, {from: accounts[3]});

		assert.equal(uintlepboRW, BigInt("0"))
		assert.equal(uintnV6jKdK, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressck9AMA = accounts[1]
		const addressTRDB8gb = accounts[2]
		const StakingDextokenl6clSO3 = await StakingDextoken.new(addressck9AMA, addressTRDB8gb, {from: accounts[0]});
		const addresshkXWzPj = "0x0000000000000000000000000000000000000001"
//		await StakingDextokenl6clSO3.claim.call({from: accounts[3]});
//		const uintTycVwa = await StakingDextokenl6clSO3.stakeOf.call(addresshkXWzPj, {from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokenl6clSO3.claim.call({from: accounts[1]});

		await expect(StakingDextokenl6clSO3.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address46wylQ = accounts[2]
		const address3w3zM0 = accounts[1]
		const StakingDextokenMtVyYL3 = await StakingDextoken.new(address46wylQ, address3w3zM0, {from: accounts[3]});
		const addressKeRjB1Q = accounts[1]
		const uints2FT05A = BigInt("381")
		const uintIx1hBa = await StakingDextokenMtVyYL3.remainingRewards.call({from: accounts[0]});
		const uintMfiAGx = await StakingDextokenMtVyYL3.getWithdrawalOf.call(addressKeRjB1Q, {from: accounts[1]});
//		const uintbCYaKOj = await StakingDextokenMtVyYL3.deposit.call(uints2FT05A, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintIx1hBa, BigInt("0"))
		assert.equal(uintMfiAGx, BigInt("0"))
		await expect(StakingDextokenMtVyYL3.deposit.call(uints2FT05A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBpCJCbF = accounts[2]
		const addressOoNiVB9 = accounts[2]
		const StakingDextokenOoFsRF8 = await StakingDextoken.new(addressBpCJCbF, addressOoNiVB9, {from: "0x0000000000000000000000000000000000000001"});
		const uintsPJcEID = BigInt("1530")
		const addressDHayaS3 = accounts[0]
		const uintQPk2Smk = BigInt("1446")
		const addressaArTAWc = accounts[3]
		const uintn2Xsd66 = await StakingDextokenOoFsRF8.withdraw.call(uintsPJcEID, {from: accounts[0]});
		const uintnpn7Bhz = await StakingDextokenOoFsRF8.stakeOf.call(addressDHayaS3, {from: accounts[4]});
		const uintntEXaHR = await StakingDextokenOoFsRF8.deposit.call(uintQPk2Smk, {from: accounts[3]});
		const boolYJwhEr = await StakingDextokenOoFsRF8.freezeAccount.call(addressaArTAWc, {from: accounts[5]});
	});

	it('test for StakingDextoken', async () => {
		const addressFwUSRxR = accounts[2]
		const addresstHvzlzx = accounts[5]
		const StakingDextokenBkuYDW7 = await StakingDextoken.new(addressFwUSRxR, addresstHvzlzx, {from: accounts[1]});
		const addressVoxGjtF = accounts[3]
		const uintbpeyH7m = await StakingDextokenBkuYDW7.getStartTimestamp.call({from: accounts[2]});
		const uintsNq1O6h = await StakingDextokenBkuYDW7.stakeOf.call(addressVoxGjtF, {from: accounts[1]});
		const uintSYriBzJ = await StakingDextokenBkuYDW7.rewardPerToken.call({from: accounts[0]});
		const uintjHd3Izq = await StakingDextokenBkuYDW7.getTotalStakes.call({from: accounts[1]});
		const uintyTtvatZ = await StakingDextokenBkuYDW7.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uintASXrSZ4 = await StakingDextokenBkuYDW7.getStartTimestamp.call({from: accounts[3]});

		assert.equal(uintASXrSZ4, BigInt("0"))
		assert.equal(uintSYriBzJ, BigInt("0"))
		assert.equal(uintbpeyH7m, BigInt("0"))
		assert.equal(uintjHd3Izq, BigInt("0"))
		assert.equal(uintsNq1O6h, BigInt("0"))
		assert.equal(uintyTtvatZ, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressXrl1UVV = accounts[4]
		const addressFB6XYc = accounts[4]
		const StakingDextokenvUIWanr = await StakingDextoken.new(addressXrl1UVV, addressFB6XYc, {from: accounts[4]});
		const addressOXakpzC = accounts[2]
		const addressW5aAfOr = accounts[1]
		const uinteXRpJf = BigInt("626")
//		const addressqTJ8BYW = await StakingDextokenvUIWanr.updateReward.call(addressOXakpzC, {from: accounts[1]});
//		const uinty1MBVNC = await StakingDextokenvUIWanr.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uintX1MYuG2 = await StakingDextokenvUIWanr.getClaimOf.call(addressW5aAfOr, {from: accounts[1]});
//		const uintFPllHHA = await StakingDextokenvUIWanr.withdraw.call(uinteXRpJf, {from: accounts[0]});
//		const uintfZ2F6Tz = await StakingDextokenvUIWanr.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(StakingDextokenvUIWanr.updateReward.call(addressOXakpzC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressL8wxQh = accounts[0]
		const addressmbg2Ksj = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressL8wxQh, addressmbg2Ksj, {from: accounts[2]});
		const uintNMC16dV = BigInt("1600")
		const uintfT108gc = BigInt("1894")
		const uintHH50Tn3 = BigInt("1723")
		const uinteiIc9b5 = BigInt("1843")
		const addressNPItJzp = accounts[2]
		const uintkU4FWoP = await StakingDextokenP3FbnxB.remainingRewards.call({from: accounts[2]});
//		const uintZLrraWG = await StakingDextokenP3FbnxB.setRewardRound.call(uinteiIc9b5, uintHH50Tn3, uintfT108gc, uintNMC16dV, {from: accounts[2]});
//		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addressNPItJzp, {from: accounts[3]});

		assert.equal(uintkU4FWoP, BigInt("0"))
		await expect(StakingDextokenP3FbnxB.setRewardRound.call(uinteiIc9b5, uintHH50Tn3, uintfT108gc, uintNMC16dV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressymrsWK = accounts[0]
		const addressXHXzZn1 = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressymrsWK, addressXHXzZn1, {from: accounts[2]});
		const uintslKYB1z = BigInt("1990")
		const addressPztu0Dh = accounts[2]
//		const uinto3T1GOX = await StakingDextokenP3FbnxB.withdraw.call(uintslKYB1z, {from: accounts[0]});
//		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addressPztu0Dh, {from: accounts[3]});

		await expect(StakingDextokenP3FbnxB.withdraw.call(uintslKYB1z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXkuyW09 = accounts[2]
		const addressJBizuPJ = accounts[3]
		const StakingDextokenJtnD3gB = await StakingDextoken.new(addressXkuyW09, addressJBizuPJ, {from: accounts[3]});
		const addressZFeqfzR = accounts[3]
		const addressXbxDy6l = accounts[0]
		const uintSeFup4K = await StakingDextokenJtnD3gB.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintl6oLAnp = await StakingDextokenJtnD3gB.getEndTimestamp.call({from: accounts[2]});
		const uintgZJmYux = await StakingDextokenJtnD3gB.getEndTimestamp.call({from: accounts[3]});
		const boolqTlOOp5 = await StakingDextokenJtnD3gB.freezeAccount.call(addressZFeqfzR, {from: accounts[3]});
//		await StakingDextokenJtnD3gB.notifyRewards.call({from: accounts[0]});
//		const uintXRmPFC = await StakingDextokenJtnD3gB.getWithdrawalOf.call(addressXbxDy6l, {from: accounts[2]});

		assert.equal(boolqTlOOp5, true)
		assert.equal(uintSeFup4K, BigInt("0"))
		assert.equal(uintgZJmYux, BigInt("0"))
		assert.equal(uintl6oLAnp, BigInt("0"))
		await expect(StakingDextokenJtnD3gB.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressnubOWtA = accounts[0]
		const addressiqfewHC = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressnubOWtA, addressiqfewHC, {from: accounts[2]});
		const addresswNNhv6C = accounts[3]
		const addressv8B9J9 = "0x0000000000000000000000000000000000000001"
		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addresswNNhv6C, {from: accounts[3]});
		const addressCjTAnnK = await StakingDextokenP3FbnxB.setBeneficial.call(addressv8B9J9, {from: accounts[2]});

		assert.equal(uintnV6jKdK, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressYo09vYj = accounts[0]
		const addressshMFwEz = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressYo09vYj, addressshMFwEz, {from: accounts[2]});
		const addressMHU4SbV = accounts[3]
		const uintZ1QDjA = BigInt("340")
		const addressQvDNk8E = accounts[2]
		const addressH7zo4w7 = accounts[5]
		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addressMHU4SbV, {from: accounts[3]});
//		const addresso0vZPC3 = await StakingDextokenP3FbnxB.capture.call(addressQvDNk8E, uintZ1QDjA, {from: accounts[2]});
//		const boolkbphxHw = await StakingDextokenP3FbnxB.freezeAccount.call(addressH7zo4w7, {from: accounts[4]});

		assert.equal(uintnV6jKdK, BigInt("0"))
		await expect(StakingDextokenP3FbnxB.capture.call(addressQvDNk8E, uintZ1QDjA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXyOzpHt = accounts[0]
		const addresspAKDOkz = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressXyOzpHt, addresspAKDOkz, {from: accounts[2]});
		const addressbL7BnNc = accounts[1]
		const addressLqEtcqD = accounts[2]
//		await StakingDextokenP3FbnxB.notifyRewards.call({from: accounts[2]});
//		const boolWVX8UX = await StakingDextokenP3FbnxB.unfreezeAccount.call(addressbL7BnNc, {from: accounts[3]});
//		const uintnV6jKdK = await StakingDextokenP3FbnxB.rewardOf.call(addressLqEtcqD, {from: accounts[3]});

		await expect(StakingDextokenP3FbnxB.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEOzHTgr = accounts[0]
		const addressJE3AhHG = accounts[5]
		const StakingDextokenP3FbnxB = await StakingDextoken.new(addressEOzHTgr, addressJE3AhHG, {from: accounts[2]});
		const addressOrIEln = accounts[3]
		const uintktzDADV = BigInt("633")
//		const boolTytMv8m = await StakingDextokenP3FbnxB.unfreezeAccount.call(addressOrIEln, {from: accounts[2]});
//		const uint5lEqB7 = await StakingDextokenP3FbnxB.withdraw.call(uintktzDADV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenP3FbnxB.unfreezeAccount.call(addressOrIEln, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvRJtCq5 = accounts[1]
		const addresshmzquWG = accounts[0]
		const StakingDextokenISgAEy = await StakingDextoken.new(addressvRJtCq5, addresshmzquWG, {from: accounts[4]});
		const addressviV1Z9K = accounts[2]
		const uintYogDFOI = BigInt("701")
		const addressRAn3c6P = accounts[0]
		const addresstMCfAIK = accounts[1]
		const uintwLh3RMl = BigInt("1641")
		const uintdk0vjE = BigInt("1597")
		const uintE1po9jh = BigInt("1108")
		const uintXsRpbXf = BigInt("1523")
		const uintEmvrnAV = await StakingDextokenISgAEy.earned.call(addressviV1Z9K, {from: accounts[1]});
//		const addressyjAnYy = await StakingDextokenISgAEy.capture.call(addressRAn3c6P, uintYogDFOI, {from: accounts[4]});
//		const uintnGKwVdE = await StakingDextokenISgAEy.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uinthHrJAce = await StakingDextokenISgAEy.earned.call(addresstMCfAIK, {from: accounts[4]});
//		const uintIyPUEQT = await StakingDextokenISgAEy.setRewardRound.call(uintXsRpbXf, uintE1po9jh, uintdk0vjE, uintwLh3RMl, {from: accounts[0]});

		assert.equal(uintEmvrnAV, BigInt("0"))
		await expect(StakingDextokenISgAEy.capture.call(addressRAn3c6P, uintYogDFOI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvpvta0m = accounts[4]
		const address1gTpH2 = accounts[4]
		const StakingDextokenF3meA0T = await StakingDextoken.new(addressvpvta0m, address1gTpH2, {from: accounts[0]});
		const uint3vGiZo = BigInt("1162")
		const addressCj9WC2n = accounts[4]
		const addressQX6huuI = "0x0000000000000000000000000000000000000001"
//		const addressDzpjvE = await StakingDextokenF3meA0T.capture.call(addressCj9WC2n, uint3vGiZo, {from: accounts[0]});
//		await StakingDextokenF3meA0T.notifyRewards.call({from: accounts[5]});
//		const uintfPyw0zk = await StakingDextokenF3meA0T.getWithdrawalOf.call(addressQX6huuI, {from: accounts[1]});

		await expect(StakingDextokenF3meA0T.capture.call(addressCj9WC2n, uint3vGiZo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
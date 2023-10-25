const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressVS2GOVc = accounts[1]
		const address8cFR8t = accounts[3]
		const StakingDextokenMpUf05b = await StakingDextoken.new(addressVS2GOVc, address8cFR8t, {from: accounts[2]});
		const addresszHxVOLB = accounts[5]
		const uintB1RJNaM = await StakingDextokenMpUf05b.totalRewards.call({from: accounts[2]});
		const boolm22cy4V = await StakingDextokenMpUf05b.freezeAccount.call(addresszHxVOLB, {from: accounts[2]});

		assert.equal(boolm22cy4V, true)
		assert.equal(uintB1RJNaM, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresssMkh776 = accounts[1]
		const addresstz6qcGN = accounts[0]
		const StakingDextokena4w7Tib = await StakingDextoken.new(addresssMkh776, addresstz6qcGN, {from: accounts[2]});
		const addressWGp9A6y = "0x0000000000000000000000000000000000000001"
		await StakingDextokena4w7Tib.claim.call({from: accounts[0]});
		const uintqr5MsOQ = await StakingDextokena4w7Tib.getClaimOf.call(addressWGp9A6y, {from: accounts[5]});

		await expect(StakingDextokena4w7Tib.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address8lQLuC = accounts[2]
		const addressAZgJ2wB = accounts[0]
		const StakingDextokenBHQyi9q = await StakingDextoken.new(address8lQLuC, addressAZgJ2wB, {from: accounts[1]});
		const uintQ2RpQF = BigInt("721")
		const addressurIfhZz = accounts[4]
		const uintKzJrcCc = BigInt("296")
		const uintaQExWZT = await StakingDextokenBHQyi9q.withdraw.call(uintQ2RpQF, {from: accounts[4]});
		const uintYvqNo5J = await StakingDextokenBHQyi9q.balanceOf.call(addressurIfhZz, {from: accounts[3]});
		const uintNrn8ZJV = await StakingDextokenBHQyi9q.totalRewards.call({from: accounts[5]});
		const uintXI1Ialc = await StakingDextokenBHQyi9q.deposit.call(uintKzJrcCc, {from: accounts[4]});
		await StakingDextokenBHQyi9q.claim.call({from: accounts[1]});
		await StakingDextokenBHQyi9q.notifyRewards.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenBHQyi9q.withdraw.call(uintQ2RpQF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMZfnIpP = accounts[3]
		const addressU45YIMz = accounts[3]
		const StakingDextokent1Lbey3 = await StakingDextoken.new(addressMZfnIpP, addressU45YIMz, {from: accounts[0]});
		const uintJMJIegR = BigInt("1200")
		const uinteTyghAx = BigInt("778")
		const uintfcgyP0n = BigInt("2012")
		const uintTKRruSJ = BigInt("1251")
		const addressg0Cxxr = accounts[2]
		const uintLqgDlVF = BigInt("1472")
		const uintfoeyHqP = BigInt("1082")
		const uintQufIaQG = BigInt("961")
		const uintiB4Clg = BigInt("727")
		const uintz6XerIw = BigInt("469")
		const uintW4JdKyZ = BigInt("1883")
		const uintFqbNicJ = BigInt("1711")
		const uintQjqrWif = BigInt("993")
		const uintKdNUXe = await StakingDextokent1Lbey3.setRewardRound.call(uintTKRruSJ, uintfcgyP0n, uinteTyghAx, uintJMJIegR, {from: accounts[0]});
		const uintuPCYf2f = await StakingDextokent1Lbey3.earned.call(addressg0Cxxr, {from: accounts[0]});
		const uintGzcjoXz = await StakingDextokent1Lbey3.getTotalStakes.call({from: accounts[1]});
		const uint0ehK53 = await StakingDextokent1Lbey3.setRewardRound.call(uintiB4Clg, uintQufIaQG, uintfoeyHqP, uintLqgDlVF, {from: "0x0000000000000000000000000000000000000001"});
		const uintyDIAAn5 = await StakingDextokent1Lbey3.setRewardRound.call(uintQjqrWif, uintFqbNicJ, uintW4JdKyZ, uintz6XerIw, {from: accounts[3]});

		assert.equal(uintGzcjoXz, BigInt("0"))
		assert.equal(uintuPCYf2f, BigInt("0"))
		await expect(StakingDextokent1Lbey3.setRewardRound.call(uintiB4Clg, uintQufIaQG, uintfoeyHqP, uintLqgDlVF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressX1sJuiw = accounts[3]
		const addressHzX2BxA = accounts[3]
		const StakingDextokenAuMCd9Z = await StakingDextoken.new(addressX1sJuiw, addressHzX2BxA, {from: accounts[2]});
		const addressz46INS8 = accounts[0]
		const addresshLjZf24 = accounts[1]
		const addressd7p4Zl6 = accounts[3]
		const uintYAZq0HM = await StakingDextokenAuMCd9Z.earned.call(addressz46INS8, {from: accounts[4]});
		const uintjnpDnGH = await StakingDextokenAuMCd9Z.rewardOf.call(addresshLjZf24, {from: accounts[5]});
		const uintjntRp1b = await StakingDextokenAuMCd9Z.remainingRewards.call({from: accounts[1]});
		const addresscIPvTA6 = await StakingDextokenAuMCd9Z.setBeneficial.call(addressd7p4Zl6, {from: accounts[5]});
		await StakingDextokenAuMCd9Z.notifyRewards.call({from: accounts[1]});

		assert.equal(uintYAZq0HM, BigInt("0"))
		assert.equal(uintjnpDnGH, BigInt("0"))
		assert.equal(uintjntRp1b, BigInt("0"))
		await expect(StakingDextokenAuMCd9Z.setBeneficial.call(addressd7p4Zl6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZr3R4ii = accounts[4]
		const addressm2rjmio = accounts[4]
		const StakingDextokenrxqmD7S = await StakingDextoken.new(addressZr3R4ii, addressm2rjmio, {from: accounts[4]});
		const uintApwEUw = BigInt("1811")
		const uint9tCkU1 = BigInt("25")
		const uintzRFg34e = await StakingDextokenrxqmD7S.deposit.call(uintApwEUw, {from: accounts[2]});
		const uintTvV3ATL = await StakingDextokenrxqmD7S.withdraw.call(uint9tCkU1, {from: accounts[4]});
		const uintlzCyfu2 = await StakingDextokenrxqmD7S.totalRewards.call({from: accounts[0]});

		await expect(StakingDextokenrxqmD7S.deposit.call(uintApwEUw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYV216Gg = accounts[0]
		const addresslCtku64 = accounts[2]
		const StakingDextokenMgu5du = await StakingDextoken.new(addressYV216Gg, addresslCtku64, {from: accounts[2]});
		const addressprbd0em = accounts[1]
		const uintVXXbKyC = BigInt("1491")
		const addressuWTsvQ = accounts[3]
		const uintPtflM7V = await StakingDextokenMgu5du.getEndTimestamp.call({from: accounts[4]});
		const uintOQsgyfa = await StakingDextokenMgu5du.getStartTimestamp.call({from: accounts[0]});
		const uintH1LFVSV = await StakingDextokenMgu5du.totalRewards.call({from: accounts[0]});
		const uintd8y3z1B = await StakingDextokenMgu5du.earned.call(addressprbd0em, {from: accounts[2]});
		const addressaJ3nD5 = await StakingDextokenMgu5du.capture.call(addressuWTsvQ, uintVXXbKyC, {from: accounts[4]});

		assert.equal(uintH1LFVSV, BigInt("0"))
		assert.equal(uintOQsgyfa, BigInt("0"))
		assert.equal(uintPtflM7V, BigInt("0"))
		assert.equal(uintd8y3z1B, BigInt("0"))
		await expect(StakingDextokenMgu5du.capture.call(addressuWTsvQ, uintVXXbKyC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMWSlEA = accounts[0]
		const addresszV3sXr = accounts[2]
		const StakingDextokenMgu5du = await StakingDextoken.new(addressMWSlEA, addresszV3sXr, {from: accounts[2]});
		const addresseeaTkGy = accounts[2]
		const uintJJPyNFC = BigInt("989")
		const addressKpgPC72 = accounts[1]
		const uint2RVn4h = BigInt("1487")
		const addressWiwPlmq = accounts[3]
		const uintPtflM7V = await StakingDextokenMgu5du.getEndTimestamp.call({from: accounts[4]});
		const uintOQsgyfa = await StakingDextokenMgu5du.getStartTimestamp.call({from: accounts[0]});
		const uintVkMMBmm = await StakingDextokenMgu5du.stakeOf.call(addresseeaTkGy, {from: accounts[2]});
		const uintH1LFVSV = await StakingDextokenMgu5du.totalRewards.call({from: accounts[0]});
		const uintjaLU1s5 = await StakingDextokenMgu5du.withdraw.call(uintJJPyNFC, {from: accounts[2]});
		const uintd8y3z1B = await StakingDextokenMgu5du.earned.call(addressKpgPC72, {from: accounts[2]});
		const addressaJ3nD5 = await StakingDextokenMgu5du.capture.call(addressWiwPlmq, uint2RVn4h, {from: accounts[4]});

		assert.equal(uintH1LFVSV, BigInt("0"))
		assert.equal(uintOQsgyfa, BigInt("0"))
		assert.equal(uintPtflM7V, BigInt("0"))
		assert.equal(uintVkMMBmm, BigInt("0"))
		await expect(StakingDextokenMgu5du.withdraw.call(uintJJPyNFC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressl34SuOz = accounts[0]
		const addressU9CXc6n = accounts[2]
		const StakingDextokenMgu5du = await StakingDextoken.new(addressl34SuOz, addressU9CXc6n, {from: accounts[2]});
		const addressmMwMqJs = "0x0000000000000000000000000000000000000001"
		const uintXIiqjDq = BigInt("989")
		const addressT6wKLAb = accounts[1]
		const uintqtv30b = BigInt("1487")
		const addresszCQZsDg = accounts[3]
		const uintPtflM7V = await StakingDextokenMgu5du.getEndTimestamp.call({from: accounts[4]});
		const uintOQsgyfa = await StakingDextokenMgu5du.getStartTimestamp.call({from: accounts[0]});
		const uintxOT35Da = await StakingDextokenMgu5du.getClaimOf.call(addressmMwMqJs, {from: accounts[1]});
		const uintH1LFVSV = await StakingDextokenMgu5du.totalRewards.call({from: accounts[0]});
		const uintjaLU1s5 = await StakingDextokenMgu5du.withdraw.call(uintXIiqjDq, {from: accounts[2]});
		const uintd8y3z1B = await StakingDextokenMgu5du.earned.call(addressT6wKLAb, {from: accounts[2]});
		const addressaJ3nD5 = await StakingDextokenMgu5du.capture.call(addresszCQZsDg, uintqtv30b, {from: accounts[4]});

		assert.equal(uintH1LFVSV, BigInt("0"))
		assert.equal(uintOQsgyfa, BigInt("0"))
		assert.equal(uintPtflM7V, BigInt("0"))
		assert.equal(uintxOT35Da, BigInt("0"))
		await expect(StakingDextokenMgu5du.withdraw.call(uintXIiqjDq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressoOCA7IJ = accounts[3]
		const addresslSZGS18 = accounts[3]
		const StakingDextokenAuMCd9Z = await StakingDextoken.new(addressoOCA7IJ, addresslSZGS18, {from: accounts[2]});
		const addressi6TSVv0 = accounts[0]
		const addressJSvyXhy = accounts[4]
		const addresswZtxZdP = accounts[1]
		const addressEwj5tOe = accounts[3]
		const uintYAZq0HM = await StakingDextokenAuMCd9Z.earned.call(addressi6TSVv0, {from: accounts[4]});
		const uintHcEIPYF = await StakingDextokenAuMCd9Z.getWithdrawalOf.call(addressJSvyXhy, {from: accounts[4]});
		const uintjnpDnGH = await StakingDextokenAuMCd9Z.rewardOf.call(addresswZtxZdP, {from: accounts[5]});
		const uintjntRp1b = await StakingDextokenAuMCd9Z.remainingRewards.call({from: accounts[1]});
		const addresscIPvTA6 = await StakingDextokenAuMCd9Z.setBeneficial.call(addressEwj5tOe, {from: accounts[5]});
		await StakingDextokenAuMCd9Z.notifyRewards.call({from: accounts[1]});

		assert.equal(uintHcEIPYF, BigInt("0"))
		assert.equal(uintYAZq0HM, BigInt("0"))
		assert.equal(uintjnpDnGH, BigInt("0"))
		assert.equal(uintjntRp1b, BigInt("0"))
		await expect(StakingDextokenAuMCd9Z.setBeneficial.call(addressEwj5tOe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressnCmQkZg = accounts[5]
		const addressqDJrfn6 = accounts[0]
		const StakingDextokenp1oW4x8 = await StakingDextoken.new(addressnCmQkZg, addressqDJrfn6, {from: "0x0000000000000000000000000000000000000001"});
		const uintjP35l72 = BigInt("298")
		const addresskuc2Ah6 = accounts[1]
		await StakingDextokenp1oW4x8.notifyRewards.call({from: accounts[2]});
		const uintAaMPQG = await StakingDextokenp1oW4x8.withdraw.call(uintjP35l72, {from: accounts[1]});
		const uintQWsqRhr = await StakingDextokenp1oW4x8.totalRewards.call({from: accounts[3]});
		const uintQx4kekH = await StakingDextokenp1oW4x8.remainingRewards.call({from: accounts[1]});
		const uintl6U2y07 = await StakingDextokenp1oW4x8.rewardOf.call(addresskuc2Ah6, {from: accounts[0]});
	});

	it('test for StakingDextoken', async () => {
		const addressSd4qdaA = accounts[0]
		const addressdSIT7iD = accounts[1]
		const StakingDextokentm1CodN = await StakingDextoken.new(addressSd4qdaA, addressdSIT7iD, {from: accounts[3]});
		const addressHHBwFq = accounts[1]
		const addressFm4r3Wa = accounts[5]
		await StakingDextokentm1CodN.notifyRewards.call({from: accounts[3]});
		const addresskcFcyr = await StakingDextokentm1CodN.setBeneficial.call(addressHHBwFq, {from: accounts[2]});
		const addressFZM03wt = await StakingDextokentm1CodN.updateReward.call(addressFm4r3Wa, {from: accounts[3]});

		await expect(StakingDextokentm1CodN.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssYwNivl = accounts[1]
		const addressT8DkbZu = accounts[3]
		const StakingDextokenMpUf05b = await StakingDextoken.new(addresssYwNivl, addressT8DkbZu, {from: accounts[2]});
		const addressaJxxJtG = accounts[3]
		const addressjTB7uNf = accounts[3]
		const addressRYFbJii = await StakingDextokenMpUf05b.notFrozen.call(addressaJxxJtG, {from: accounts[0]});
		const uintMqihZor = await StakingDextokenMpUf05b.getClaimOf.call(addressjTB7uNf, {from: accounts[3]});
		const uintB1RJNaM = await StakingDextokenMpUf05b.totalRewards.call({from: accounts[2]});

		await expect(StakingDextokenMpUf05b.notFrozen.call(addressaJxxJtG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmLIAvrg = accounts[1]
		const addressFFbT5QO = accounts[3]
		const StakingDextokenMpUf05b = await StakingDextoken.new(addressmLIAvrg, addressFFbT5QO, {from: accounts[2]});
		const addresszAmRGZe = accounts[1]
		const addresstYxLoG = accounts[1]
		const address48ZSmw = accounts[2]
		const uint7EnDzw = await StakingDextokenMpUf05b.getClaimOf.call(addresszAmRGZe, {from: accounts[4]});
		const uinttOk8cb = await StakingDextokenMpUf05b.earned.call(addresstYxLoG, {from: accounts[4]});
		const booll2vkNKt = await StakingDextokenMpUf05b.unfreezeAccount.call(address48ZSmw, {from: accounts[2]});
		const uintB1RJNaM = await StakingDextokenMpUf05b.totalRewards.call({from: accounts[2]});

		assert.equal(uint7EnDzw, BigInt("0"))
		assert.equal(uinttOk8cb, BigInt("0"))
		await expect(StakingDextokenMpUf05b.unfreezeAccount.call(address48ZSmw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresss80eSkB = accounts[0]
		const addresstWH0gdn = accounts[1]
		const StakingDextokentm1CodN = await StakingDextoken.new(addresss80eSkB, addresstWH0gdn, {from: accounts[3]});
		const addressUQ0lbQn = "0x0000000000000000000000000000000000000001"
		const addressf0vU7Vz = await StakingDextokentm1CodN.setBeneficial.call(addressUQ0lbQn, {from: accounts[3]});
		await StakingDextokentm1CodN.notifyRewards.call({from: accounts[3]});

		await expect(StakingDextokentm1CodN.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswmfcABQ = accounts[0]
		const addressfXR0b5u = accounts[1]
		const StakingDextokentm1CodN = await StakingDextoken.new(addresswmfcABQ, addressfXR0b5u, {from: accounts[3]});
		const uintE8OEoLV = BigInt("313")
		const uinte6A5s1z = BigInt("1907")
		const uintQuPvNK1 = BigInt("935")
		const uintPgUJKa = BigInt("1130")
		const addressz2gbigw = accounts[5]
		const uintkOd0VY8 = BigInt("138")
		const addressJgloNW3 = accounts[0]
		const uintzUUzbxx = await StakingDextokentm1CodN.setRewardRound.call(uintPgUJKa, uintQuPvNK1, uinte6A5s1z, uintE8OEoLV, {from: accounts[3]});
		await StakingDextokentm1CodN.notifyRewards.call({from: accounts[3]});
		const uintgNrfdA1 = await StakingDextokentm1CodN.getWithdrawalOf.call(addressz2gbigw, {from: accounts[2]});
		const uintRFFGXu = await StakingDextokentm1CodN.withdraw.call(uintkOd0VY8, {from: accounts[4]});
		await StakingDextokentm1CodN.claim.call({from: accounts[1]});
		const addressFZM03wt = await StakingDextokentm1CodN.updateReward.call(addressJgloNW3, {from: accounts[3]});

		await expect(StakingDextokentm1CodN.setRewardRound.call(uintPgUJKa, uintQuPvNK1, uinte6A5s1z, uintE8OEoLV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
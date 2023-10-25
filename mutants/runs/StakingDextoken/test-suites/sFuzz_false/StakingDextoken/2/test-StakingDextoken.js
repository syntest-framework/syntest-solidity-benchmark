const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressqXAevuQ = "0x0000000000000000000000000000000000000001"
		const addressRLgykXW = "0x0000000000000000000000000000000000000001"
		const StakingDextokenUcoalXM = await StakingDextoken.new(addressqXAevuQ, addressRLgykXW, {from: accounts[4]});
		const uintx27d5Yf = BigInt("1160")
		const uintyobrpmj = BigInt("382")
		const uintxd4xyMA = BigInt("1662")
		const uintPDWr5cz = BigInt("209")
		const uintyQnyQ0L = await StakingDextokenUcoalXM.setRewardRound.call(uintPDWr5cz, uintxd4xyMA, uintyobrpmj, uintx27d5Yf, {from: accounts[1]});
		const uintYO6rVNS = await StakingDextokenUcoalXM.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(StakingDextokenUcoalXM.setRewardRound.call(uintPDWr5cz, uintxd4xyMA, uintyobrpmj, uintx27d5Yf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressaEv2Iv = accounts[4]
		const addressMCQ7o70 = accounts[1]
		const StakingDextokenaxPwK6F = await StakingDextoken.new(addressaEv2Iv, addressMCQ7o70, {from: accounts[1]});
		const uintSaI2MJ = await StakingDextokenaxPwK6F.rewardPerToken.call({from: accounts[4]});
		const uintjrTpVlM = await StakingDextokenaxPwK6F.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintBYXLBaa = await StakingDextokenaxPwK6F.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uintBYXLBaa, BigInt("0"))
		assert.equal(uintSaI2MJ, BigInt("0"))
		assert.equal(uintjrTpVlM, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressPuhRR9B = accounts[4]
		const address6H8Fjg = accounts[3]
		const StakingDextokenRJZHUTw = await StakingDextoken.new(addressPuhRR9B, address6H8Fjg, {from: accounts[2]});
		const addressVcX7aGy = accounts[0]
		const uintr6bojUL = BigInt("1714")
		const uintv9uC9k6 = BigInt("680")
		const uintuRyQdl6 = await StakingDextokenRJZHUTw.stakeOf.call(addressVcX7aGy, {from: accounts[0]});
		const uintgdtMdiN = await StakingDextokenRJZHUTw.withdraw.call(uintr6bojUL, {from: accounts[5]});
		const uintUVPD7f1 = await StakingDextokenRJZHUTw.withdraw.call(uintv9uC9k6, {from: accounts[0]});
		await StakingDextokenRJZHUTw.claim.call({from: accounts[0]});

		assert.equal(uintuRyQdl6, BigInt("0"))
		await expect(StakingDextokenRJZHUTw.withdraw.call(uintr6bojUL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressn8sJiqm = accounts[1]
		const addresslqKtkHm = accounts[1]
		const StakingDextokenF4cUKS = await StakingDextoken.new(addressn8sJiqm, addresslqKtkHm, {from: accounts[4]});
		const addressAtJ9zN5 = accounts[2]
		const addressD1yALPp = accounts[4]
		const uintp9HJBTI = BigInt("61")
		const addressUTlNyRG = accounts[2]
		const uintcx1Y5A8 = await StakingDextokenF4cUKS.getEndTimestamp.call({from: accounts[1]});
		const booly8Purps = await StakingDextokenF4cUKS.freezeAccount.call(addressAtJ9zN5, {from: accounts[0]});
		const addressWMD1Mgq = await StakingDextokenF4cUKS.setBeneficial.call(addressD1yALPp, {from: accounts[3]});
		const uintx5UMzhn = await StakingDextokenF4cUKS.deposit.call(uintp9HJBTI, {from: accounts[3]});
		const uintm2BnD1B = await StakingDextokenF4cUKS.getWithdrawalOf.call(addressUTlNyRG, {from: accounts[0]});

		assert.equal(uintcx1Y5A8, BigInt("0"))
		await expect(StakingDextokenF4cUKS.freezeAccount.call(addressAtJ9zN5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMG98LZV = accounts[0]
		const addressKe3CqgL = accounts[5]
		const StakingDextoken086KdG = await StakingDextoken.new(addressMG98LZV, addressKe3CqgL, {from: accounts[1]});
		const uintnJEYz3G = await StakingDextoken086KdG.getStartTimestamp.call({from: accounts[1]});
		const uintNFqTD56 = await StakingDextoken086KdG.getEndTimestamp.call({from: accounts[2]});

		assert.equal(uintNFqTD56, BigInt("0"))
		assert.equal(uintnJEYz3G, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressJkmaLP = accounts[2]
		const address1kllVJ = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressJkmaLP, address1kllVJ, {from: accounts[3]});
		const addressdq2C8Pr = accounts[2]
		const addressrjnvuHj = accounts[3]
		const uintWr6oiYb = await StakingDextokenOrly3fW.getClaimOf.call(addressdq2C8Pr, {from: accounts[1]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressrjnvuHj, {from: accounts[2]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uintWr6oiYb, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressWLj9dCV = accounts[2]
		const addressMliGPkD = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressWLj9dCV, addressMliGPkD, {from: accounts[3]});
		const addresslcUb1Xb = accounts[2]
		const addressyOenieB = accounts[1]
		const addressyj2aOAh = accounts[3]
		const uintWr6oiYb = await StakingDextokenOrly3fW.getClaimOf.call(addresslcUb1Xb, {from: accounts[1]});
		const uintbwG47Hv = await StakingDextokenOrly3fW.rewardOf.call(addressyOenieB, {from: accounts[2]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressyj2aOAh, {from: accounts[2]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uintWr6oiYb, BigInt("0"))
		assert.equal(uintbwG47Hv, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressZcBbgGG = accounts[0]
		const addressA77xaev = accounts[5]
		const StakingDextoken086KdG = await StakingDextoken.new(addressZcBbgGG, addressA77xaev, {from: accounts[1]});
		const uintm3B7LIf = BigInt("1772")
		const addresshVKeLbO = accounts[0]
		const addressoYA82UB = accounts[1]
		const uintnJEYz3G = await StakingDextoken086KdG.getStartTimestamp.call({from: accounts[1]});
		const uintNeDzEQa = await StakingDextoken086KdG.deposit.call(uintm3B7LIf, {from: "0x0000000000000000000000000000000000000001"});
		const boolml8CsV1 = await StakingDextoken086KdG.freezeAccount.call(addresshVKeLbO, {from: accounts[4]});
		const uinttwAz4em = await StakingDextoken086KdG.earned.call(addressoYA82UB, {from: accounts[1]});
		const uintNFqTD56 = await StakingDextoken086KdG.getEndTimestamp.call({from: accounts[2]});
		await StakingDextoken086KdG.claim.call({from: accounts[2]});

		assert.equal(uintnJEYz3G, BigInt("0"))
		await expect(StakingDextoken086KdG.deposit.call(uintm3B7LIf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address9yTZkv = accounts[2]
		const addressS4BAbmo = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(address9yTZkv, addressS4BAbmo, {from: accounts[3]});
		const addressDuCXHD = accounts[4]
		const addressOJufDSt = accounts[0]
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressDuCXHD, {from: accounts[2]});
		const uintM81U41r = await StakingDextokenOrly3fW.rewardPerToken.call({from: accounts[1]});
		const uintTDtUjEF = await StakingDextokenOrly3fW.getWithdrawalOf.call(addressOJufDSt, {from: accounts[3]});

		assert.equal(uintM81U41r, BigInt("0"))
		assert.equal(uintTDtUjEF, BigInt("0"))
		assert.equal(uintVRhjsQn, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresslN3CQaZ = accounts[2]
		const addresspwdaxaa = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addresslN3CQaZ, addresspwdaxaa, {from: accounts[3]});
		const addressGvs1azL = accounts[4]
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressGvs1azL, {from: accounts[2]});
		const uinti081zXP = await StakingDextokenOrly3fW.totalRewards.call({from: accounts[4]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uinti081zXP, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressSzvFUEG = accounts[4]
		const addresswytiF5t = accounts[2]
		const StakingDextokenJcx4FW2 = await StakingDextoken.new(addressSzvFUEG, addresswytiF5t, {from: accounts[3]});
		const addresseNSrwRv = "0x0000000000000000000000000000000000000001"
		const addressxbwCEob = accounts[2]
		const uintLzUBmpb = await StakingDextokenJcx4FW2.totalRewards.call({from: accounts[0]});
		const addressUIBwFZ = await StakingDextokenJcx4FW2.notFrozen.call(addresseNSrwRv, {from: accounts[4]});
		const uintVNCAM5e = await StakingDextokenJcx4FW2.rewardPerToken.call({from: accounts[0]});
		const boolKdxF5Yx = await StakingDextokenJcx4FW2.unfreezeAccount.call(addressxbwCEob, {from: accounts[3]});

		assert.equal(uintLzUBmpb, BigInt("0"))
		await expect(StakingDextokenJcx4FW2.notFrozen.call(addresseNSrwRv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstBxaExj = accounts[2]
		const addressTNytj0K = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addresstBxaExj, addressTNytj0K, {from: accounts[3]});
		const uintjuL1kI1 = BigInt("1473")
		const addressUmZyvaz = accounts[3]
		const addresscZJmGH = accounts[2]
		const addressliPf5H3 = await StakingDextokenOrly3fW.capture.call(addressUmZyvaz, uintjuL1kI1, {from: accounts[3]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addresscZJmGH, {from: accounts[2]});
		const uintqaQNGEB = await StakingDextokenOrly3fW.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(StakingDextokenOrly3fW.capture.call(addressUmZyvaz, uintjuL1kI1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgemuNqT = accounts[2]
		const addressxVbPv4S = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressgemuNqT, addressxVbPv4S, {from: accounts[3]});
		const addressLHQYA3B = accounts[4]
		const addressfC3jIb = accounts[3]
		const addresscjczAOV = "0x0000000000000000000000000000000000000001"
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressLHQYA3B, {from: accounts[2]});
		await StakingDextokenOrly3fW.claim.call({from: accounts[4]});
		const uintwCIzok1 = await StakingDextokenOrly3fW.stakeOf.call(addressfC3jIb, {from: accounts[3]});
		const boolLvlZiAP = await StakingDextokenOrly3fW.unfreezeAccount.call(addresscjczAOV, {from: accounts[0]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		await expect(StakingDextokenOrly3fW.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressv2sj0Dz = accounts[2]
		const addressCPxr3LA = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressv2sj0Dz, addressCPxr3LA, {from: accounts[3]});
		const addressCNbtDrN = accounts[3]
		const uintiJPRoZk = await StakingDextokenOrly3fW.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintH7yZuQT = await StakingDextokenOrly3fW.rewardPerToken.call({from: accounts[0]});
		const uinthjOLgz = await StakingDextokenOrly3fW.rewardPerToken.call({from: accounts[4]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressCNbtDrN, {from: accounts[2]});

		assert.equal(uintH7yZuQT, BigInt("0"))
		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uinthjOLgz, BigInt("0"))
		assert.equal(uintiJPRoZk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressgMd3TjV = accounts[2]
		const address9KWwyg = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressgMd3TjV, address9KWwyg, {from: accounts[3]});
		const addressO0sA1vb = accounts[3]
		const addressiRFFMqv = accounts[0]
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressO0sA1vb, {from: accounts[2]});
		const uintbChst2g = await StakingDextokenOrly3fW.getStartTimestamp.call({from: accounts[3]});
		const boolr6PNad = await StakingDextokenOrly3fW.unfreezeAccount.call(addressiRFFMqv, {from: accounts[3]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uintbChst2g, BigInt("0"))
		await expect(StakingDextokenOrly3fW.unfreezeAccount.call(addressiRFFMqv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEdMn3mK = accounts[2]
		const addressmpi0oLr = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressEdMn3mK, addressmpi0oLr, {from: accounts[3]});
		const addressiHazu6b = accounts[3]
		await StakingDextokenOrly3fW.notifyRewards.call({from: accounts[3]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressiHazu6b, {from: accounts[2]});

		await expect(StakingDextokenOrly3fW.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMQMs2tZ = accounts[2]
		const addressB14QoUY = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressMQMs2tZ, addressB14QoUY, {from: accounts[3]});
		const addressAbGZsmu = accounts[3]
		const uintcNVoPbu = BigInt("1183")
		const uintLONLcXy = BigInt("1935")
		const uintU5QIXQK = BigInt("1124")
		const uintyTime83 = BigInt("1572")
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressAbGZsmu, {from: accounts[2]});
		const uintYbpW2F8 = await StakingDextokenOrly3fW.setRewardRound.call(uintyTime83, uintU5QIXQK, uintLONLcXy, uintcNVoPbu, {from: accounts[3]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		await expect(StakingDextokenOrly3fW.setRewardRound.call(uintyTime83, uintU5QIXQK, uintLONLcXy, uintcNVoPbu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKNBQNK = accounts[5]
		const addressiTm9xGG = accounts[3]
		const StakingDextokenjIO4Eu = await StakingDextoken.new(addressKNBQNK, addressiTm9xGG, {from: "0x0000000000000000000000000000000000000001"});
		const addressqvoYLPV = "0x0000000000000000000000000000000000000001"
		const addressmRi3ag8 = accounts[2]
		const addresscbQVtwb = accounts[2]
		const uintazc5Rtu = await StakingDextokenjIO4Eu.stakeOf.call(addressqvoYLPV, {from: accounts[1]});
		await StakingDextokenjIO4Eu.claim.call({from: accounts[0]});
		const uinte0zYm7z = await StakingDextokenjIO4Eu.stakeOf.call(addressmRi3ag8, {from: accounts[1]});
		const uintRucNn0M = await StakingDextokenjIO4Eu.getTotalStakes.call({from: accounts[0]});
		await StakingDextokenjIO4Eu.claim.call({from: accounts[2]});
		const uintla2m3Tm = await StakingDextokenjIO4Eu.earned.call(addresscbQVtwb, {from: accounts[3]});
	});

	it('test for StakingDextoken', async () => {
		const addressabyGbGj = accounts[2]
		const addressr2Clf9 = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressabyGbGj, addressr2Clf9, {from: accounts[3]});
		const addresseH1q5Ed = accounts[2]
		const addressJrCSGQb = accounts[0]
		const uinttcW7bXg = await StakingDextokenOrly3fW.getEndTimestamp.call({from: accounts[2]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addresseH1q5Ed, {from: accounts[2]});
		const addressNTrE3yG = await StakingDextokenOrly3fW.setBeneficial.call(addressJrCSGQb, {from: accounts[3]});

		assert.equal(uintVRhjsQn, BigInt("0"))
		assert.equal(uinttcW7bXg, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressWeyZ7gy = accounts[2]
		const addressnrOihR7 = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressWeyZ7gy, addressnrOihR7, {from: accounts[3]});
		const addressAcGDzmY = accounts[1]
		const addressVVokgqb = accounts[3]
		const addressM3a5BMs = accounts[3]
		const boolM9jPH4u = await StakingDextokenOrly3fW.freezeAccount.call(addressAcGDzmY, {from: accounts[3]});
		const uint5axqs1 = await StakingDextokenOrly3fW.getWithdrawalOf.call(addressVVokgqb, {from: accounts[2]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressM3a5BMs, {from: accounts[2]});

		assert.equal(boolM9jPH4u, true)
		assert.equal(uint5axqs1, BigInt("0"))
		assert.equal(uintVRhjsQn, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressjhQ8xQE = accounts[2]
		const addressYrUGunK = accounts[2]
		const StakingDextokenOrly3fW = await StakingDextoken.new(addressjhQ8xQE, addressYrUGunK, {from: accounts[3]});
		const uintZc5HmBO = BigInt("1971")
		const addressEow5icE = accounts[2]
		const addressBHlvmi = accounts[4]
		const addressViQuwS = await StakingDextokenOrly3fW.capture.call(addressEow5icE, uintZc5HmBO, {from: accounts[3]});
		await StakingDextokenOrly3fW.notifyRewards.call({from: accounts[1]});
		const uintVRhjsQn = await StakingDextokenOrly3fW.earned.call(addressBHlvmi, {from: accounts[2]});

		await expect(StakingDextokenOrly3fW.capture.call(addressEow5icE, uintZc5HmBO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
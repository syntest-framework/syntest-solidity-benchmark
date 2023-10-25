const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressFnhdwjK = accounts[4]
		const addressYcIm7BB = accounts[0]
		const StakingDextokenq0Ej4QC = await StakingDextoken.new(addressFnhdwjK, addressYcIm7BB, {from: accounts[5]});
		const addresswQ5d5DD = accounts[1]
		const addressAJfkmYM = accounts[0]
		const addresslALz3Y = accounts[0]
//		const boollNyfX2 = await StakingDextokenq0Ej4QC.freezeAccount.call(addresswQ5d5DD, {from: accounts[3]});
//		const uintv0NqIY = await StakingDextokenq0Ej4QC.earned.call(addressAJfkmYM, {from: accounts[1]});
//		const uintoXlyY4k = await StakingDextokenq0Ej4QC.getClaimOf.call(addresslALz3Y, {from: accounts[2]});

		await expect(StakingDextokenq0Ej4QC.freezeAccount.call(addresswQ5d5DD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstC8fzY = accounts[5]
		const addressYHgXtog = "0x0000000000000000000000000000000000000001"
		const StakingDextokenFBZIx91 = await StakingDextoken.new(addresstC8fzY, addressYHgXtog, {from: accounts[5]});
		const addressTeN27zv = accounts[2]
		const uintwh3LeSG = await StakingDextokenFBZIx91.getWithdrawalOf.call(addressTeN27zv, {from: accounts[1]});
//		await StakingDextokenFBZIx91.claim.call({from: accounts[3]});

		assert.equal(uintwh3LeSG, BigInt("0"))
		await expect(StakingDextokenFBZIx91.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFozTuHm = accounts[3]
		const addressotbNu1r = accounts[2]
		const StakingDextokengKfkZx = await StakingDextoken.new(addressFozTuHm, addressotbNu1r, {from: accounts[0]});
		const addressT4RIuie = "0x0000000000000000000000000000000000000001"
		const uintvNzhiet = BigInt("1817")
		const uintQ11renR = BigInt("1778")
		const uintAADhol2 = await StakingDextokengKfkZx.balanceOf.call(addressT4RIuie, {from: accounts[4]});
//		const uintfok7c3f = await StakingDextokengKfkZx.withdraw.call(uintvNzhiet, {from: accounts[4]});
//		const uintistvAY1 = await StakingDextokengKfkZx.remainingRewards.call({from: accounts[4]});
//		const uintQwRZC2a = await StakingDextokengKfkZx.deposit.call(uintQ11renR, {from: accounts[0]});

		assert.equal(uintAADhol2, BigInt("0"))
		await expect(StakingDextokengKfkZx.withdraw.call(uintvNzhiet, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressd7jmPAd = accounts[2]
		const addressQ3Tncy = accounts[2]
		const StakingDextokenrnCPoVI = await StakingDextoken.new(addressd7jmPAd, addressQ3Tncy, {from: accounts[1]});
		const uintpqXcD3v = BigInt("2046")
		const addressHY3SJ09 = accounts[0]
		const addressrYIX6a = accounts[3]
		const uintl1PyhP = await StakingDextokenrnCPoVI.remainingRewards.call({from: accounts[2]});
//		await StakingDextokenrnCPoVI.claim.call({from: accounts[1]});
//		const addressdPB1OZC = await StakingDextokenrnCPoVI.capture.call(addressHY3SJ09, uintpqXcD3v, {from: accounts[2]});
//		const addressCfpkVHL = await StakingDextokenrnCPoVI.setBeneficial.call(addressrYIX6a, {from: accounts[3]});

		assert.equal(uintl1PyhP, BigInt("0"))
		await expect(StakingDextokenrnCPoVI.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressX2qRo4X = accounts[1]
		const addressov4vq9 = accounts[3]
		const StakingDextokenVHHV6pF = await StakingDextoken.new(addressX2qRo4X, addressov4vq9, {from: accounts[4]});
		const addresscQzZTwY = accounts[5]
		const addressNYPP6PV = accounts[4]
		const uintY145mY3 = await StakingDextokenVHHV6pF.rewardOf.call(addresscQzZTwY, {from: accounts[0]});
		const uintmjkePxv = await StakingDextokenVHHV6pF.totalRewards.call({from: accounts[2]});
		const uintgzDmrr = await StakingDextokenVHHV6pF.getWithdrawalOf.call(addressNYPP6PV, {from: accounts[3]});

		assert.equal(uintY145mY3, BigInt("0"))
		assert.equal(uintgzDmrr, BigInt("0"))
		assert.equal(uintmjkePxv, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressLkabNIg = accounts[2]
		const addressNXZE5YZ = accounts[0]
		const StakingDextokenrS93yzS = await StakingDextoken.new(addressLkabNIg, addressNXZE5YZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressOhCMGhI = accounts[0]
		const uintSrd8NDk = BigInt("1383")
		const addressumZxfrm = accounts[5]
		const addressGan9MLT = await StakingDextokenrS93yzS.updateReward.call(addressOhCMGhI, {from: accounts[3]});
		const uintJs5h0ob = await StakingDextokenrS93yzS.getEndTimestamp.call({from: accounts[5]});
		const addressF5ecO7 = await StakingDextokenrS93yzS.capture.call(addressumZxfrm, uintSrd8NDk, {from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressnJIPXU0 = accounts[0]
		const addressQfacCxh = accounts[1]
		const StakingDextokenmCN5AAq = await StakingDextoken.new(addressnJIPXU0, addressQfacCxh, {from: accounts[2]});
		const addressYdKThAo = accounts[3]
		const addresso2AwPgj = accounts[1]
		const addresseLel1bW = accounts[5]
		const addressM8oUqSq = accounts[2]
//		await StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]});
//		const addressLAAgzgl = await StakingDextokenmCN5AAq.setBeneficial.call(addressYdKThAo, {from: accounts[1]});
//		const uintnBsMDO5 = await StakingDextokenmCN5AAq.totalRewards.call({from: accounts[3]});
//		const boolmzDZ4Ao = await StakingDextokenmCN5AAq.freezeAccount.call(addresso2AwPgj, {from: accounts[2]});
//		const uintCBrsIWZ = await StakingDextokenmCN5AAq.getClaimOf.call(addresseLel1bW, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRtbf5rE = await StakingDextokenmCN5AAq.rewardOf.call(addressM8oUqSq, {from: accounts[3]});

		await expect(StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressedUUl7L = accounts[2]
		const address2dkkFE = accounts[2]
		const StakingDextokenrnCPoVI = await StakingDextoken.new(addressedUUl7L, address2dkkFE, {from: accounts[1]});
		const uintcr88OXL = BigInt("838")
		const uinthBXLCsS = BigInt("2046")
		const addressZlLWl0d = accounts[1]
		const addressQdX90cH = accounts[4]
		const uintl1PyhP = await StakingDextokenrnCPoVI.remainingRewards.call({from: accounts[2]});
//		const uintnFq35DP = await StakingDextokenrnCPoVI.deposit.call(uintcr88OXL, {from: accounts[0]});
//		const uintlZ9kN57 = await StakingDextokenrnCPoVI.totalRewards.call({from: accounts[1]});
//		await StakingDextokenrnCPoVI.claim.call({from: accounts[1]});
//		const addressdPB1OZC = await StakingDextokenrnCPoVI.capture.call(addressZlLWl0d, uinthBXLCsS, {from: accounts[2]});
//		const addressCfpkVHL = await StakingDextokenrnCPoVI.setBeneficial.call(addressQdX90cH, {from: accounts[3]});

		assert.equal(uintl1PyhP, BigInt("0"))
		await expect(StakingDextokenrnCPoVI.deposit.call(uintcr88OXL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCgMAPYe = accounts[1]
		const addressU6EKVod = accounts[3]
		const StakingDextokenVHHV6pF = await StakingDextoken.new(addressCgMAPYe, addressU6EKVod, {from: accounts[4]});
		const addressyR59ZMj = accounts[4]
		const addressLFhbHFz = accounts[5]
		const uintyECZAJ = BigInt("1198")
		const addressKGBSvbr = "0x0000000000000000000000000000000000000001"
		const addressc3srnxh = accounts[4]
//		const addressQTAmzib = await StakingDextokenVHHV6pF.updateReward.call(addressyR59ZMj, {from: "0x0000000000000000000000000000000000000001"});
//		const uintY145mY3 = await StakingDextokenVHHV6pF.rewardOf.call(addressLFhbHFz, {from: accounts[0]});
//		const uintpCZb7R5 = await StakingDextokenVHHV6pF.withdraw.call(uintyECZAJ, {from: accounts[1]});
//		const uintgzDmrr = await StakingDextokenVHHV6pF.getWithdrawalOf.call(addressKGBSvbr, {from: accounts[3]});
//		const uintc40N6CS = await StakingDextokenVHHV6pF.rewardOf.call(addressc3srnxh, {from: accounts[5]});
//		const uintPJY79wZ = await StakingDextokenVHHV6pF.getTotalStakes.call({from: accounts[2]});

		await expect(StakingDextokenVHHV6pF.updateReward.call(addressyR59ZMj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrtcs2Te = accounts[1]
		const addressWmxZoUe = accounts[3]
		const StakingDextokenVHHV6pF = await StakingDextoken.new(addressrtcs2Te, addressWmxZoUe, {from: accounts[4]});
		const addressdXD6rvS = accounts[4]
		const addressPfKXZX = accounts[5]
		const uintX9IgZyA = BigInt("1198")
		const addresswNF27C2 = accounts[3]
		const addressxO7ttn = "0x0000000000000000000000000000000000000001"
		const addressEMTK5mx = accounts[3]
		const uintqBuPtUy = await StakingDextokenVHHV6pF.getClaimOf.call(addressdXD6rvS, {from: accounts[0]});
		const uintY145mY3 = await StakingDextokenVHHV6pF.rewardOf.call(addressPfKXZX, {from: accounts[0]});
//		const uintpCZb7R5 = await StakingDextokenVHHV6pF.withdraw.call(uintX9IgZyA, {from: accounts[1]});
//		const uint8wutLX = await StakingDextokenVHHV6pF.stakeOf.call(addresswNF27C2, {from: accounts[1]});
//		const uintgzDmrr = await StakingDextokenVHHV6pF.getWithdrawalOf.call(addressxO7ttn, {from: accounts[3]});
//		const uintc40N6CS = await StakingDextokenVHHV6pF.rewardOf.call(addressEMTK5mx, {from: accounts[5]});
//		const uintPJY79wZ = await StakingDextokenVHHV6pF.getTotalStakes.call({from: accounts[2]});

		assert.equal(uintY145mY3, BigInt("0"))
		assert.equal(uintqBuPtUy, BigInt("0"))
		await expect(StakingDextokenVHHV6pF.withdraw.call(uintX9IgZyA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYwBzrn3 = "0x0000000000000000000000000000000000000001"
		const addressbgBW9nv = accounts[4]
		const StakingDextokenRD34llQ = await StakingDextoken.new(addressYwBzrn3, addressbgBW9nv, {from: accounts[3]});
		const addressxStuorl = accounts[2]
		const addressP7i5jIs = accounts[5]
		const uintQr9tQCf = BigInt("837")
		const addressdu94mTu = accounts[3]
		const uintDX5YNaX = await StakingDextokenRD34llQ.earned.call(addressxStuorl, {from: accounts[0]});
		const uintDvpYRm = await StakingDextokenRD34llQ.getStartTimestamp.call({from: accounts[1]});
		const uintufS44PL = await StakingDextokenRD34llQ.getWithdrawalOf.call(addressP7i5jIs, {from: accounts[1]});
//		const uintjy2Nx0p = await StakingDextokenRD34llQ.withdraw.call(uintQr9tQCf, {from: accounts[3]});
//		const uintLSlIdu = await StakingDextokenRD34llQ.stakeOf.call(addressdu94mTu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDX5YNaX, BigInt("0"))
		assert.equal(uintDvpYRm, BigInt("0"))
		assert.equal(uintufS44PL, BigInt("0"))
		await expect(StakingDextokenRD34llQ.withdraw.call(uintQr9tQCf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWfNOIyM = accounts[1]
		const addressHjB2SGg = accounts[1]
		const StakingDextokensDdKJEi = await StakingDextoken.new(addressWfNOIyM, addressHjB2SGg, {from: accounts[2]});
		const addressWyTgOpo = accounts[2]
		const addressw2OASpf = accounts[2]
		const uintZTIJeyH = await StakingDextokensDdKJEi.getEndTimestamp.call({from: accounts[1]});
		const uinteSXQFZ = await StakingDextokensDdKJEi.getTotalStakes.call({from: accounts[2]});
		const uintPdi3uea = await StakingDextokensDdKJEi.lastTimeRewardApplicable.call({from: accounts[3]});
//		const booljcuUPc = await StakingDextokensDdKJEi.unfreezeAccount.call(addressWyTgOpo, {from: accounts[2]});
//		const booleKqpvzx = await StakingDextokensDdKJEi.freezeAccount.call(addressw2OASpf, {from: accounts[3]});

		assert.equal(uintPdi3uea, BigInt("0"))
		assert.equal(uintZTIJeyH, BigInt("0"))
		assert.equal(uinteSXQFZ, BigInt("0"))
		await expect(StakingDextokensDdKJEi.unfreezeAccount.call(addressWyTgOpo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address4sxuVP = accounts[3]
		const addressK72E2wI = accounts[2]
		const StakingDextokengKfkZx = await StakingDextoken.new(address4sxuVP, addressK72E2wI, {from: accounts[0]});
		const addressZQ9oDn = accounts[2]
		const addressHOdzQU1 = accounts[3]
		const uintdF3MwgR = BigInt("411")
		const addressARkyUlq = "0x0000000000000000000000000000000000000001"
		const uintlIhWSl = BigInt("1817")
		const uintAADhol2 = await StakingDextokengKfkZx.balanceOf.call(addressZQ9oDn, {from: accounts[4]});
		const uintuKqxwcZ = await StakingDextokengKfkZx.getStartTimestamp.call({from: accounts[5]});
		const uintIV9UCgE = await StakingDextokengKfkZx.earned.call(addressHOdzQU1, {from: accounts[2]});
//		const addressReTW5Q = await StakingDextokengKfkZx.capture.call(addressARkyUlq, uintdF3MwgR, {from: accounts[0]});
//		const uintfok7c3f = await StakingDextokengKfkZx.withdraw.call(uintlIhWSl, {from: accounts[4]});

		assert.equal(uintAADhol2, BigInt("0"))
		assert.equal(uintIV9UCgE, BigInt("0"))
		assert.equal(uintuKqxwcZ, BigInt("0"))
		await expect(StakingDextokengKfkZx.capture.call(addressARkyUlq, uintdF3MwgR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLrD9ftn = accounts[3]
		const addressbpix6kI = accounts[1]
		const StakingDextoken8jAhG4 = await StakingDextoken.new(addressLrD9ftn, addressbpix6kI, {from: accounts[3]});
		const addressEzMejEF = accounts[2]
		const addressXy2PVVV = accounts[5]
		const uintyMNYu4Y = await StakingDextoken8jAhG4.getClaimOf.call(addressEzMejEF, {from: accounts[5]});
		const uintiFYAk2H = await StakingDextoken8jAhG4.getStartTimestamp.call({from: accounts[1]});
		const uintfhheTKa = await StakingDextoken8jAhG4.stakeOf.call(addressXy2PVVV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintfhheTKa, BigInt("0"))
		assert.equal(uintiFYAk2H, BigInt("0"))
		assert.equal(uintyMNYu4Y, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressqrwTcdX = accounts[2]
		const addressMCgePkF = accounts[1]
		const StakingDextokenoqUvZz = await StakingDextoken.new(addressqrwTcdX, addressMCgePkF, {from: accounts[4]});
		const addressgxUPen4 = accounts[2]
		const addressdCtf0qB = accounts[5]
		const uintL3BR5A9 = BigInt("464")
		const addressxZxHRMk = await StakingDextokenoqUvZz.setBeneficial.call(addressgxUPen4, {from: accounts[4]});
		const uintE50Q5OE = await StakingDextokenoqUvZz.rewardOf.call(addressdCtf0qB, {from: accounts[5]});
		const uintNruSYTl = await StakingDextokenoqUvZz.getTotalStakes.call({from: accounts[4]});
		const uintaQITmS4 = await StakingDextokenoqUvZz.getEndTimestamp.call({from: accounts[4]});
//		const uinthouNr5i = await StakingDextokenoqUvZz.deposit.call(uintL3BR5A9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintE50Q5OE, BigInt("0"))
		assert.equal(uintNruSYTl, BigInt("0"))
		assert.equal(uintaQITmS4, BigInt("0"))
		await expect(StakingDextokenoqUvZz.deposit.call(uintL3BR5A9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIKzcMET = accounts[0]
		const addressJNuPjWK = accounts[1]
		const StakingDextokenmCN5AAq = await StakingDextoken.new(addressIKzcMET, addressJNuPjWK, {from: accounts[2]});
		const uintJxgaKJD = BigInt("167")
		const addresszkEYJz = accounts[0]
//		await StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]});
//		const addressUPxhPa = await StakingDextokenmCN5AAq.capture.call(addresszkEYJz, uintJxgaKJD, {from: accounts[2]});

		await expect(StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJObZkrn = accounts[0]
		const addressKInClW6 = accounts[1]
		const StakingDextokenmCN5AAq = await StakingDextoken.new(addressJObZkrn, addressKInClW6, {from: accounts[2]});
		const uintHsJjGwq = BigInt("619")
		const uintGhTnkJX = BigInt("608")
		const uintFvjgf7 = BigInt("410")
		const uintQjex83n = BigInt("1136")
		const addressC4r6iWN = accounts[4]
		const uintSGTYBn = BigInt("767")
		const uintYu0X3Vn = BigInt("665")
		const addressIPRXx5T = accounts[4]
		const addressZymKwwg = accounts[5]
//		await StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]});
//		const uintewyVChY = await StakingDextokenmCN5AAq.setRewardRound.call(uintQjex83n, uintFvjgf7, uintGhTnkJX, uintHsJjGwq, {from: accounts[2]});
//		const uintbIc9JW3 = await StakingDextokenmCN5AAq.balanceOf.call(addressC4r6iWN, {from: accounts[2]});
//		const uintIdCTMZc = await StakingDextokenmCN5AAq.deposit.call(uintSGTYBn, {from: accounts[3]});
//		const uintJRFJssl = await StakingDextokenmCN5AAq.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uintKSeBhqG = await StakingDextokenmCN5AAq.withdraw.call(uintYu0X3Vn, {from: accounts[4]});
//		const boolS7m54t = await StakingDextokenmCN5AAq.freezeAccount.call(addressIPRXx5T, {from: "0x0000000000000000000000000000000000000001"});
//		const addressLAAgzgl = await StakingDextokenmCN5AAq.setBeneficial.call(addressZymKwwg, {from: accounts[1]});

		await expect(StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssjRjHuQ = accounts[3]
		const addressTA02fCf = accounts[0]
		const StakingDextokenUQkKtuI = await StakingDextoken.new(addresssjRjHuQ, addressTA02fCf, {from: accounts[2]});
		const addresso5P2tbc = accounts[0]
		const uintxXDZT2A = BigInt("1616")
		const addressSNtqqsN = "0x0000000000000000000000000000000000000001"
		const addressMQ9SU4 = accounts[2]
		const uintwwzM9sU = await StakingDextokenUQkKtuI.remainingRewards.call({from: accounts[2]});
		const boolM5G0iUo = await StakingDextokenUQkKtuI.freezeAccount.call(addresso5P2tbc, {from: accounts[2]});
		const uinthOd2wzO = await StakingDextokenUQkKtuI.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintOLEjKbD = await StakingDextokenUQkKtuI.deposit.call(uintxXDZT2A, {from: accounts[4]});
//		const boolbe5dsF8 = await StakingDextokenUQkKtuI.freezeAccount.call(addressSNtqqsN, {from: accounts[0]});
//		const boolxOFE8jJ = await StakingDextokenUQkKtuI.freezeAccount.call(addressMQ9SU4, {from: accounts[3]});

		assert.equal(boolM5G0iUo, true)
		assert.equal(uinthOd2wzO, BigInt("0"))
		assert.equal(uintwwzM9sU, BigInt("0"))
		await expect(StakingDextokenUQkKtuI.deposit.call(uintxXDZT2A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZR4H3zQ = accounts[0]
		const addresssmS2YBJ = accounts[1]
		const StakingDextokenmCN5AAq = await StakingDextoken.new(addressZR4H3zQ, addresssmS2YBJ, {from: accounts[2]});
		const uintoYAOfpV = BigInt("711")
		const addressN3kGucu = accounts[1]
//		await StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]});
//		const uintXVOZhJ6 = await StakingDextokenmCN5AAq.getStartTimestamp.call({from: accounts[4]});
//		const addressAa3BFC = await StakingDextokenmCN5AAq.capture.call(addressN3kGucu, uintoYAOfpV, {from: accounts[2]});

		await expect(StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshFqTTH1 = accounts[0]
		const addressDwXqkZ9 = accounts[1]
		const StakingDextokenmCN5AAq = await StakingDextoken.new(addresshFqTTH1, addressDwXqkZ9, {from: accounts[2]});
		const addressG8GI1rf = accounts[0]
		const addressmgs4zML = accounts[0]
		const uintDXzYM0V = BigInt("329")
		const uintlWFCHZq = BigInt("1261")
		const uintIalsNC = BigInt("1512")
		const uintm5Ogn3p = BigInt("1978")
		const uintySDvgk0 = BigInt("1933")
		const uintZmOhXJ = BigInt("665")
		const addressRV5dy2 = "0x0000000000000000000000000000000000000001"
		const uintjvHI8TW = BigInt("640")
		const addressKL2JpJa = accounts[4]
		const addressodWeNPU = accounts[0]
		const addressBzqGZdK = accounts[1]
		const addresshJEjcvT = accounts[4]
		const uintTa2d76u = BigInt("774")
//		await StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]});
//		const uintEen3toT = await StakingDextokenmCN5AAq.stakeOf.call(addressG8GI1rf, {from: accounts[0]});
//		const uintK8icV0 = await StakingDextokenmCN5AAq.rewardOf.call(addressmgs4zML, {from: accounts[2]});
//		const uintBQ56gOL = await StakingDextokenmCN5AAq.getEndTimestamp.call({from: accounts[4]});
//		const uintTq9ZeW9 = await StakingDextokenmCN5AAq.setRewardRound.call(uintm5Ogn3p, uintIalsNC, uintlWFCHZq, uintDXzYM0V, {from: accounts[2]});
//		const uintGphzXrt = await StakingDextokenmCN5AAq.withdraw.call(uintySDvgk0, {from: accounts[2]});
//		const uintKSeBhqG = await StakingDextokenmCN5AAq.withdraw.call(uintZmOhXJ, {from: accounts[4]});
//		const boolsxZBFtv = await StakingDextokenmCN5AAq.freezeAccount.call(addressRV5dy2, {from: accounts[1]});
//		const uint5oWS0R = await StakingDextokenmCN5AAq.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintHGiNcB = await StakingDextokenmCN5AAq.deposit.call(uintjvHI8TW, {from: accounts[0]});
//		const uint7gmynN = await StakingDextokenmCN5AAq.getEndTimestamp.call({from: accounts[1]});
//		const addressbCBVGEO = await StakingDextokenmCN5AAq.updateReward.call(addressKL2JpJa, {from: accounts[3]});
//		const addressFh0cS9V = await StakingDextokenmCN5AAq.updateReward.call(addressodWeNPU, {from: accounts[5]});
//		const boolS7m54t = await StakingDextokenmCN5AAq.freezeAccount.call(addressBzqGZdK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressLAAgzgl = await StakingDextokenmCN5AAq.setBeneficial.call(addresshJEjcvT, {from: accounts[1]});
//		const uinty9TrI9G = await StakingDextokenmCN5AAq.withdraw.call(uintTa2d76u, {from: accounts[1]});

		await expect(StakingDextokenmCN5AAq.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
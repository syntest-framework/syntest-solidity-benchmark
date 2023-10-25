const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressDFUhpp = accounts[0]
		const addressNzq4fQ7 = accounts[2]
		const StakingDextokenQI0V0TR = await StakingDextoken.new(addressDFUhpp, addressNzq4fQ7, {from: accounts[4]});
		const addressMwE85lW = accounts[0]
		const uintP03yCsG = await StakingDextokenQI0V0TR.stakeOf.call(addressMwE85lW, {from: accounts[0]});
		const uintbZl3tl0 = await StakingDextokenQI0V0TR.remainingRewards.call({from: accounts[2]});
		const uinti9scJ9k = await StakingDextokenQI0V0TR.getEndTimestamp.call({from: accounts[3]});
		const uintXPZ51rC = await StakingDextokenQI0V0TR.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uintP03yCsG, BigInt("0"))
		assert.equal(uintXPZ51rC, BigInt("0"))
		assert.equal(uintbZl3tl0, BigInt("0"))
		assert.equal(uinti9scJ9k, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressWpaFtUS = accounts[0]
		const addressE5xZSmI = accounts[2]
		const StakingDextokenIckYRgi = await StakingDextoken.new(addressWpaFtUS, addressE5xZSmI, {from: accounts[3]});
		const addressWR8WP8t = accounts[4]
		const uintWDumr1p = BigInt("447")
		const uint2PfFMm = await StakingDextokenIckYRgi.earned.call(addressWR8WP8t, {from: "0x0000000000000000000000000000000000000001"});
		const uintWrsm2z9 = await StakingDextokenIckYRgi.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintkF98IoT = await StakingDextokenIckYRgi.deposit.call(uintWDumr1p, {from: accounts[4]});

		assert.equal(uint2PfFMm, BigInt("0"))
		assert.equal(uintWrsm2z9, BigInt("0"))
		await expect(StakingDextokenIckYRgi.deposit.call(uintWDumr1p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuy35Dqx = accounts[0]
		const addresssL5rX4V = accounts[2]
		const StakingDextokenGfrkOmD = await StakingDextoken.new(addressuy35Dqx, addresssL5rX4V, {from: accounts[0]});
		const uintaDC6gLn = BigInt("907")
//		const uintuuTr0ud = await StakingDextokenGfrkOmD.withdraw.call(uintaDC6gLn, {from: accounts[1]});
//		const uintECsQkVr = await StakingDextokenGfrkOmD.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenGfrkOmD.withdraw.call(uintaDC6gLn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmnHkKSg = "0x0000000000000000000000000000000000000001"
		const addressOt6It8a = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addressmnHkKSg, addressOt6It8a, {from: accounts[3]});
		const uintqh618Ks = await StakingDextoken04fg9g.getEndTimestamp.call({from: accounts[3]});
		const uintl6Tu61r = await StakingDextoken04fg9g.remainingRewards.call({from: accounts[5]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});

		assert.equal(uintl6Tu61r, BigInt("0"))
		assert.equal(uintqh618Ks, BigInt("0"))
		await expect(StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshIbA4Rl = accounts[1]
		const addressU9bWBX2 = accounts[2]
		const StakingDextokenAMU4MBp = await StakingDextoken.new(addresshIbA4Rl, addressU9bWBX2, {from: "0x0000000000000000000000000000000000000001"});
		const uintdXagY3C = BigInt("57")
		const addressgoTfQPC = accounts[0]
		const uintrAW3FJe = BigInt("279")
		const addressRWWRLpa = await StakingDextokenAMU4MBp.capture.call(addressgoTfQPC, uintdXagY3C, {from: accounts[0]});
		const uintQaLpvnB = await StakingDextokenAMU4MBp.deposit.call(uintrAW3FJe, {from: accounts[5]});
		await StakingDextokenAMU4MBp.claim.call({from: accounts[0]});
	});

	it('test for StakingDextoken', async () => {
		const addressnoa1zKM = accounts[0]
		const addressjfkP0iD = accounts[2]
		const StakingDextokenGfrkOmD = await StakingDextoken.new(addressnoa1zKM, addressjfkP0iD, {from: accounts[0]});
		const addressqp1i4G9 = accounts[4]
		const uintAVDpKPP = BigInt("907")
		const uintYBx6GuB = await StakingDextokenGfrkOmD.rewardOf.call(addressqp1i4G9, {from: accounts[2]});
//		const uintuuTr0ud = await StakingDextokenGfrkOmD.withdraw.call(uintAVDpKPP, {from: accounts[1]});
//		const uintECsQkVr = await StakingDextokenGfrkOmD.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintYBx6GuB, BigInt("0"))
		await expect(StakingDextokenGfrkOmD.withdraw.call(uintAVDpKPP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMhFZ1p = accounts[3]
		const addressSp803dd = accounts[4]
		const StakingDextokenG3ajVxa = await StakingDextoken.new(addressMhFZ1p, addressSp803dd, {from: accounts[1]});
		const addressv1SrtIv = accounts[0]
		const addressVXYFrKb = accounts[1]
		const addressz2owguL = accounts[0]
		const uintxh0Icvo = await StakingDextokenG3ajVxa.remainingRewards.call({from: accounts[4]});
		const uintTZSUxM1 = await StakingDextokenG3ajVxa.getWithdrawalOf.call(addressv1SrtIv, {from: accounts[1]});
//		const addressfmGXawr = await StakingDextokenG3ajVxa.setBeneficial.call(addressVXYFrKb, {from: accounts[5]});
//		const uintWxDoEi2 = await StakingDextokenG3ajVxa.balanceOf.call(addressz2owguL, {from: accounts[1]});

		assert.equal(uintTZSUxM1, BigInt("0"))
		assert.equal(uintxh0Icvo, BigInt("0"))
		await expect(StakingDextokenG3ajVxa.setBeneficial.call(addressVXYFrKb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressemgEgSK = accounts[2]
		const addressc1ugzXH = accounts[1]
		const StakingDextokenT3Ipc2 = await StakingDextoken.new(addressemgEgSK, addressc1ugzXH, {from: accounts[0]});
		const addressY7guvmo = accounts[2]
		const addressF4uac3 = accounts[4]
		const uintoHojSZ = await StakingDextokenT3Ipc2.getClaimOf.call(addressY7guvmo, {from: accounts[3]});
		const uintuVWAjTk = await StakingDextokenT3Ipc2.remainingRewards.call({from: accounts[3]});
//		const addressQgdyUmb = await StakingDextokenT3Ipc2.setBeneficial.call(addressF4uac3, {from: accounts[5]});
//		const uintSLreSRD = await StakingDextokenT3Ipc2.totalRewards.call({from: accounts[3]});

		assert.equal(uintoHojSZ, BigInt("0"))
		assert.equal(uintuVWAjTk, BigInt("0"))
		await expect(StakingDextokenT3Ipc2.setBeneficial.call(addressF4uac3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPbWo2tz = accounts[0]
		const addressdqBmLg9 = accounts[2]
		const StakingDextokenIckYRgi = await StakingDextoken.new(addressPbWo2tz, addressdqBmLg9, {from: accounts[3]});
		const addresslwZu17h = accounts[4]
		const uintGxYbWKd = BigInt("447")
		const uint2PfFMm = await StakingDextokenIckYRgi.earned.call(addresslwZu17h, {from: "0x0000000000000000000000000000000000000001"});
		const uintWrsm2z9 = await StakingDextokenIckYRgi.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokenIckYRgi.claim.call({from: accounts[2]});
//		const uintkF98IoT = await StakingDextokenIckYRgi.deposit.call(uintGxYbWKd, {from: accounts[4]});

		assert.equal(uint2PfFMm, BigInt("0"))
		assert.equal(uintWrsm2z9, BigInt("0"))
		await expect(StakingDextokenIckYRgi.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZyEmpEc = accounts[0]
		const addressFNy3m9R = accounts[2]
		const StakingDextokenIckYRgi = await StakingDextoken.new(addressZyEmpEc, addressFNy3m9R, {from: accounts[3]});
		const addressLRtw0de = accounts[0]
		const uinthPloPSb = BigInt("447")
		const uintt9jZffP = await StakingDextokenIckYRgi.getStartTimestamp.call({from: accounts[4]});
		const uintWrsm2z9 = await StakingDextokenIckYRgi.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintp3nMjvV = await StakingDextokenIckYRgi.rewardOf.call(addressLRtw0de, {from: accounts[3]});
//		const uintkF98IoT = await StakingDextokenIckYRgi.deposit.call(uinthPloPSb, {from: accounts[4]});
//		const uintbVGOCZi = await StakingDextokenIckYRgi.totalRewards.call({from: accounts[4]});

		assert.equal(uintWrsm2z9, BigInt("0"))
		assert.equal(uintp3nMjvV, BigInt("0"))
		assert.equal(uintt9jZffP, BigInt("0"))
		await expect(StakingDextokenIckYRgi.deposit.call(uinthPloPSb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLlCWG9p = "0x0000000000000000000000000000000000000001"
		const addressOI2dG3 = accounts[2]
		const StakingDextokenpk5fN1l = await StakingDextoken.new(addressLlCWG9p, addressOI2dG3, {from: accounts[3]});
		const addressPDYi3wt = "0x0000000000000000000000000000000000000001"
		const addressVqOPWrq = "0x0000000000000000000000000000000000000001"
		const uintL5mQ7Br = BigInt("2007")
		const addressufk8vxq = accounts[5]
		const uintzzw2nLQ = await StakingDextokenpk5fN1l.stakeOf.call(addressPDYi3wt, {from: accounts[5]});
//		const addressBEm7vIA = await StakingDextokenpk5fN1l.updateReward.call(addressVqOPWrq, {from: accounts[0]});
//		const uintELUOklO = await StakingDextokenpk5fN1l.deposit.call(uintL5mQ7Br, {from: accounts[2]});
//		const uintdTqNWfF = await StakingDextokenpk5fN1l.rewardPerToken.call({from: accounts[0]});
//		await StakingDextokenpk5fN1l.notifyRewards.call({from: accounts[1]});
//		const uintjHmH5yi = await StakingDextokenpk5fN1l.remainingRewards.call({from: accounts[2]});
//		const addressr6Urc9T = await StakingDextokenpk5fN1l.setBeneficial.call(addressufk8vxq, {from: accounts[5]});
//		const uintr1VUpvR = await StakingDextokenpk5fN1l.remainingRewards.call({from: accounts[3]});

		assert.equal(uintzzw2nLQ, BigInt("0"))
		await expect(StakingDextokenpk5fN1l.updateReward.call(addressVqOPWrq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressodFB8FK = accounts[4]
		const addresszFrYsN6 = accounts[3]
		const StakingDextokenz1mDmx = await StakingDextoken.new(addressodFB8FK, addresszFrYsN6, {from: accounts[3]});
		const addressFwDxPZw = accounts[5]
		const addresscP8jTmF = accounts[5]
		const addressFc0PVEW = accounts[3]
		const boolOdwCFpT = await StakingDextokenz1mDmx.freezeAccount.call(addressFwDxPZw, {from: accounts[3]});
		const uintI3S4whU = await StakingDextokenz1mDmx.balanceOf.call(addresscP8jTmF, {from: accounts[5]});
		const uintmYV7suD = await StakingDextokenz1mDmx.getWithdrawalOf.call(addressFc0PVEW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOdwCFpT, true)
		assert.equal(uintI3S4whU, BigInt("0"))
		assert.equal(uintmYV7suD, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressRRggliC = accounts[2]
		const addressrLafaYl = accounts[3]
		const StakingDextokenRqbNz5a = await StakingDextoken.new(addressRRggliC, addressrLafaYl, {from: accounts[1]});
		const uintanV2JuE = BigInt("822")
		const uintQcWBSQ7 = BigInt("954")
		const uintcxJYhgm = BigInt("1097")
		const uintER22tnb = BigInt("1432")
		const uint0Ses8R = BigInt("764")
		const addressw7BMoxO = accounts[4]
		const uintJRVx4N = await StakingDextokenRqbNz5a.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintvO7vfl = await StakingDextokenRqbNz5a.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uintuVhM2Z9 = await StakingDextokenRqbNz5a.setRewardRound.call(uintER22tnb, uintcxJYhgm, uintQcWBSQ7, uintanV2JuE, {from: accounts[1]});
//		const addressEu4dQpX = await StakingDextokenRqbNz5a.capture.call(addressw7BMoxO, uint0Ses8R, {from: accounts[2]});

		assert.equal(uintJRVx4N, BigInt("0"))
		assert.equal(uintvO7vfl, BigInt("0"))
		await expect(StakingDextokenRqbNz5a.setRewardRound.call(uintER22tnb, uintcxJYhgm, uintQcWBSQ7, uintanV2JuE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressjVkrMG = "0x0000000000000000000000000000000000000001"
		const addressmA5Rm40 = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addressjVkrMG, addressmA5Rm40, {from: accounts[3]});
		const addresspktWq8 = "0x0000000000000000000000000000000000000001"
		const addressOxoGEt8 = "0x0000000000000000000000000000000000000003"
		const addressvNFUC2q = accounts[2]
		const uintajFeiDG = await StakingDextoken04fg9g.lastTimeRewardApplicable.call({from: accounts[1]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});
//		const boolKyVPvnc = await StakingDextoken04fg9g.unfreezeAccount.call(addresspktWq8, {from: accounts[3]});
//		await StakingDextoken04fg9g.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintxtop9ag = await StakingDextoken04fg9g.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uintHDPMLY7 = await StakingDextoken04fg9g.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintceDBCE0 = await StakingDextoken04fg9g.balanceOf.call(addressOxoGEt8, {from: "0x0000000000000000000000000000000000000001"});
//		const uintt3Dbn41 = await StakingDextoken04fg9g.getClaimOf.call(addressvNFUC2q, {from: accounts[3]});

		assert.equal(uintajFeiDG, BigInt("0"))
		await expect(StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressy7go6za = "0x0000000000000000000000000000000000000001"
		const addressGaKqsDf = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addressy7go6za, addressGaKqsDf, {from: accounts[3]});
		const uintOIc5ENb = BigInt("848")
		const addresspKGC3Dt = accounts[5]
		const addressktIKAVn = "0x0000000000000000000000000000000000000001"
		const addresseAQqRi = "0x0000000000000000000000000000000000000001"
		const addresseeeWNsQ = accounts[2]
		const uintr3nPk7V = BigInt("1821")
		const addressxzge5Wf = accounts[1]
//		const addressg4CNEf9 = await StakingDextoken04fg9g.capture.call(addresspKGC3Dt, uintOIc5ENb, {from: accounts[3]});
//		const uintajFeiDG = await StakingDextoken04fg9g.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uintHlIHQ7a = await StakingDextoken04fg9g.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});
//		await StakingDextoken04fg9g.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintHDPMLY7 = await StakingDextoken04fg9g.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintceDBCE0 = await StakingDextoken04fg9g.balanceOf.call(addressktIKAVn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolugydwBn = await StakingDextoken04fg9g.unfreezeAccount.call(addresseAQqRi, {from: accounts[1]});
//		const uintt3Dbn41 = await StakingDextoken04fg9g.getClaimOf.call(addresseeeWNsQ, {from: accounts[3]});
//		const uintfWitsU = await StakingDextoken04fg9g.remainingRewards.call({from: accounts[0]});
//		const uintuIAAqIt = await StakingDextoken04fg9g.deposit.call(uintr3nPk7V, {from: accounts[0]});
//		const boolgkVMjsS = await StakingDextoken04fg9g.unfreezeAccount.call(addressxzge5Wf, {from: accounts[3]});

		await expect(StakingDextoken04fg9g.capture.call(addresspKGC3Dt, uintOIc5ENb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressoxT1oHB = "0x0000000000000000000000000000000000000001"
		const addressictpBT = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addressoxT1oHB, addressictpBT, {from: accounts[3]});
		const addressy0LsJN = accounts[2]
		const addressIQHFf0M = "0x0000000000000000000000000000000000000001"
		const addressoKvX3x = "0x0000000000000000000000000000000000000001"
		const addressCL0zIIf = accounts[1]
		const addressbszGpgZ = await StakingDextoken04fg9g.setBeneficial.call(addressy0LsJN, {from: accounts[3]});
		const uintajFeiDG = await StakingDextoken04fg9g.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintHlIHQ7a = await StakingDextoken04fg9g.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});
//		await StakingDextoken04fg9g.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintVXVyjoh = await StakingDextoken04fg9g.getStartTimestamp.call({from: accounts[4]});
//		const uintHDPMLY7 = await StakingDextoken04fg9g.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintceDBCE0 = await StakingDextoken04fg9g.balanceOf.call(addressIQHFf0M, {from: "0x0000000000000000000000000000000000000001"});
//		const boolugydwBn = await StakingDextoken04fg9g.unfreezeAccount.call(addressoKvX3x, {from: accounts[1]});
//		const uintfWitsU = await StakingDextoken04fg9g.remainingRewards.call({from: accounts[0]});
//		const boolgkVMjsS = await StakingDextoken04fg9g.unfreezeAccount.call(addressCL0zIIf, {from: accounts[3]});

		assert.equal(uintHlIHQ7a, BigInt("0"))
		assert.equal(uintajFeiDG, BigInt("0"))
		await expect(StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresseBpsfqH = "0x0000000000000000000000000000000000000001"
		const addresskJC4YEO = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addresseBpsfqH, addresskJC4YEO, {from: accounts[3]});
		const uintHTfInI = BigInt("848")
		const addressC9zmm15 = "0x0000000000000000000000000000000000000001"
		const addressn05pxb = "0x0000000000000000000000000000000000000002"
		const addressC7ISumm = accounts[1]
//		const addressg4CNEf9 = await StakingDextoken04fg9g.capture.call(addressC9zmm15, uintHTfInI, {from: accounts[3]});
//		const uintHlIHQ7a = await StakingDextoken04fg9g.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});
//		await StakingDextoken04fg9g.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintHDPMLY7 = await StakingDextoken04fg9g.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolugydwBn = await StakingDextoken04fg9g.unfreezeAccount.call(addressn05pxb, {from: accounts[1]});
//		const uintfWitsU = await StakingDextoken04fg9g.remainingRewards.call({from: accounts[0]});
//		const boolgkVMjsS = await StakingDextoken04fg9g.unfreezeAccount.call(addressC7ISumm, {from: accounts[3]});

		await expect(StakingDextoken04fg9g.capture.call(addressC9zmm15, uintHTfInI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressm8VrYws = "0x0000000000000000000000000000000000000001"
		const addressk6Uq792 = accounts[1]
		const StakingDextoken04fg9g = await StakingDextoken.new(addressm8VrYws, addressk6Uq792, {from: accounts[3]});
		const uintCxcbXbM = BigInt("848")
		const addressjnwbIA = accounts[1]
		const addressOKZKyJA = accounts[1]
		const addressfQHL768 = "0x0000000000000000000000000000000000000001"
		const addressx4iv7Oe = accounts[1]
//		const addressg4CNEf9 = await StakingDextoken04fg9g.capture.call(addressjnwbIA, uintCxcbXbM, {from: accounts[3]});
//		const uintHlIHQ7a = await StakingDextoken04fg9g.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextoken04fg9g.notifyRewards.call({from: accounts[3]});
//		const addressGzhSFtf = await StakingDextoken04fg9g.notFrozen.call(addressOKZKyJA, {from: accounts[4]});
//		const uintHDPMLY7 = await StakingDextoken04fg9g.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolugydwBn = await StakingDextoken04fg9g.unfreezeAccount.call(addressfQHL768, {from: accounts[1]});
//		const boolgkVMjsS = await StakingDextoken04fg9g.unfreezeAccount.call(addressx4iv7Oe, {from: accounts[3]});

		await expect(StakingDextoken04fg9g.capture.call(addressjnwbIA, uintCxcbXbM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
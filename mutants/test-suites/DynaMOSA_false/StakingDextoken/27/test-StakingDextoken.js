const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressgkTCx7l = accounts[3]
		const addresseS7DDS2 = accounts[1]
		const StakingDextokenL26seGi = await StakingDextoken.new(addressgkTCx7l, addresseS7DDS2, {from: accounts[5]});
		const addressRArunlA = accounts[4]
		const addressxH3hUxo = accounts[2]
		const addressqrdMLq = accounts[3]
		const addressuTMzYHk = accounts[2]
//		const boolaFDWPSW = await StakingDextokenL26seGi.freezeAccount.call(addressRArunlA, {from: accounts[0]});
//		const addressddNHTke = await StakingDextokenL26seGi.notFrozen.call(addressxH3hUxo, {from: accounts[2]});
//		const uintfUvkvIi = await StakingDextokenL26seGi.rewardOf.call(addressqrdMLq, {from: accounts[2]});
//		const uintw6r1K9T = await StakingDextokenL26seGi.earned.call(addressuTMzYHk, {from: accounts[2]});
//		const uintoG8Kkl3 = await StakingDextokenL26seGi.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(StakingDextokenL26seGi.freezeAccount.call(addressRArunlA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxNTaQfL = accounts[1]
		const addressqYhtGub = accounts[2]
		const StakingDextokenoSPnabG = await StakingDextoken.new(addressxNTaQfL, addressqYhtGub, {from: accounts[4]});
		const uint4CI2nQ = BigInt("1701")
		const addressmtQ2IzD = accounts[2]
		const addresseKogmE0 = accounts[1]
		const uintCXTYWLL = await StakingDextokenoSPnabG.getEndTimestamp.call({from: accounts[3]});
//		const uintwKjwfur = await StakingDextokenoSPnabG.deposit.call(uint4CI2nQ, {from: accounts[2]});
//		const addressA3LmdxA = await StakingDextokenoSPnabG.updateReward.call(addressmtQ2IzD, {from: accounts[0]});
//		const uintL6jAFj5 = await StakingDextokenoSPnabG.remainingRewards.call({from: accounts[3]});
//		const addresstBhtHzF = await StakingDextokenoSPnabG.setBeneficial.call(addresseKogmE0, {from: accounts[3]});
//		const uintUJk5xM3 = await StakingDextokenoSPnabG.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintCXTYWLL, BigInt("0"))
		await expect(StakingDextokenoSPnabG.deposit.call(uint4CI2nQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyweVeK0 = "0x0000000000000000000000000000000000000001"
		const addressecsMF69 = accounts[5]
		const StakingDextokeniI24vgg = await StakingDextoken.new(addressyweVeK0, addressecsMF69, {from: accounts[0]});
		const addressnua4Xda = accounts[4]
		const uintSf5OCWx = BigInt("712")
		const uintB67AIUZ = await StakingDextokeniI24vgg.getStartTimestamp.call({from: accounts[1]});
		const uintX9PVCrR = await StakingDextokeniI24vgg.rewardPerToken.call({from: accounts[4]});
		const uintt62JDFL = await StakingDextokeniI24vgg.getTotalStakes.call({from: accounts[5]});
//		const bool5qJWmX = await StakingDextokeniI24vgg.unfreezeAccount.call(addressnua4Xda, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuaLanSJ = await StakingDextokeniI24vgg.deposit.call(uintSf5OCWx, {from: accounts[2]});

		assert.equal(uintB67AIUZ, BigInt("0"))
		assert.equal(uintX9PVCrR, BigInt("0"))
		assert.equal(uintt62JDFL, BigInt("0"))
		await expect(StakingDextokeniI24vgg.unfreezeAccount.call(addressnua4Xda, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshNd2jqL = accounts[1]
		const addressrkEeKXv = accounts[3]
		const StakingDextokenZzVtN3n = await StakingDextoken.new(addresshNd2jqL, addressrkEeKXv, {from: accounts[1]});
		const addressHwU2R4B = accounts[4]
		const addressc8uXoOY = accounts[0]
		const addresswGK6mz3 = accounts[4]
//		const addressx3zI1y = await StakingDextokenZzVtN3n.notFrozen.call(addressHwU2R4B, {from: accounts[2]});
//		await StakingDextokenZzVtN3n.claim.call({from: accounts[1]});
//		const uintULsEVgh = await StakingDextokenZzVtN3n.earned.call(addressc8uXoOY, {from: "0x0000000000000000000000000000000000000001"});
//		const uintvVJiDeu = await StakingDextokenZzVtN3n.getWithdrawalOf.call(addresswGK6mz3, {from: accounts[5]});
//		const uintprxFGV6 = await StakingDextokenZzVtN3n.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(StakingDextokenZzVtN3n.notFrozen.call(addressHwU2R4B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressjy6ndn0 = accounts[2]
		const addresssOY1cx = accounts[4]
		const StakingDextokencKIhKog = await StakingDextoken.new(addressjy6ndn0, addresssOY1cx, {from: accounts[3]});
		const uintAVAc8Kn = BigInt("1887")
		const uintr3bgKnO = BigInt("400")
		const uintrc0Ayy2 = BigInt("413")
		const uintHQpo5UX = BigInt("418")
		const uintVLEDuKA = BigInt("532")
		const addressFiAe4BP = accounts[0]
		const uintTrEYxpf = await StakingDextokencKIhKog.getTotalStakes.call({from: accounts[5]});
		const uintEGgNe9U = await StakingDextokencKIhKog.setRewardRound.call(uintHQpo5UX, uintrc0Ayy2, uintr3bgKnO, uintAVAc8Kn, {from: accounts[3]});
		const uintu9UlaYG = await StakingDextokencKIhKog.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
		const uintekcvOl = await StakingDextokencKIhKog.totalRewards.call({from: accounts[1]});
//		const uintDNE1Lz = await StakingDextokencKIhKog.withdraw.call(uintVLEDuKA, {from: accounts[3]});
//		const uintDXdkbHp = await StakingDextokencKIhKog.getClaimOf.call(addressFiAe4BP, {from: accounts[1]});

		assert.equal(uintTrEYxpf, BigInt("0"))
		assert.equal(uintekcvOl, BigInt("0"))
		assert.equal(uintu9UlaYG, BigInt("0"))
		await expect(StakingDextokencKIhKog.withdraw.call(uintVLEDuKA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOIZ3TkN = accounts[3]
		const addressqBArLJn = accounts[0]
		const StakingDextokenRo4QoRQ = await StakingDextoken.new(addressOIZ3TkN, addressqBArLJn, {from: accounts[4]});
		const addressLkPyYyr = accounts[3]
		const addresshEgJxn1 = accounts[0]
		const addressVNSchxo = accounts[1]
		const uintlf3PseW = await StakingDextokenRo4QoRQ.rewardOf.call(addressLkPyYyr, {from: accounts[3]});
		const uinta2bfm0W = await StakingDextokenRo4QoRQ.getClaimOf.call(addresshEgJxn1, {from: accounts[1]});
		const uintnWyGwcI = await StakingDextokenRo4QoRQ.earned.call(addressVNSchxo, {from: accounts[3]});

		assert.equal(uinta2bfm0W, BigInt("0"))
		assert.equal(uintlf3PseW, BigInt("0"))
		assert.equal(uintnWyGwcI, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressSWKgauG = accounts[1]
		const addressSpJmNBh = accounts[2]
		const StakingDextokendMCSmir = await StakingDextoken.new(addressSWKgauG, addressSpJmNBh, {from: accounts[4]});
		const addressAoqxnsM = accounts[4]
		const uintDNIh81 = BigInt("762")
//		await StakingDextokendMCSmir.claim.call({from: accounts[5]});
//		const boolqVrW0p = await StakingDextokendMCSmir.freezeAccount.call(addressAoqxnsM, {from: accounts[0]});
//		const uintdd2fQ4U = await StakingDextokendMCSmir.deposit.call(uintDNIh81, {from: accounts[3]});
//		await StakingDextokendMCSmir.claim.call({from: accounts[1]});
//		const uintNzrhjvB = await StakingDextokendMCSmir.remainingRewards.call({from: accounts[1]});

		await expect(StakingDextokendMCSmir.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIZl4DWY = accounts[3]
		const addressMK9nZCe = accounts[3]
		const StakingDextokenzlT8JWF = await StakingDextoken.new(addressIZl4DWY, addressMK9nZCe, {from: "0x0000000000000000000000000000000000000001"});
		const addressFd7fwTQ = accounts[1]
		const addressrafIn8l = accounts[1]
		const uintdKeGUHx = await StakingDextokenzlT8JWF.getWithdrawalOf.call(addressFd7fwTQ, {from: accounts[3]});
		const uintWtbipT6 = await StakingDextokenzlT8JWF.getClaimOf.call(addressrafIn8l, {from: accounts[3]});
		const uintfoFcv8z = await StakingDextokenzlT8JWF.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for StakingDextoken', async () => {
		const addressqYXW3Vu = accounts[3]
		const addressuhP13i7 = accounts[0]
		const StakingDextokenRo4QoRQ = await StakingDextoken.new(addressqYXW3Vu, addressuhP13i7, {from: accounts[4]});
		const addressbL1ujKs = accounts[2]
		const uintuzRwYoU = BigInt("817")
		const addressMUvWmN = accounts[3]
		const address59fpZX = accounts[2]
		const uintkrRKPuP = BigInt("966")
		const addressHw4DoBF = "0x0000000000000000000000000000000000000001"
		const addressMOjTIfI = accounts[1]
		const uint31mSvy = await StakingDextokenRo4QoRQ.stakeOf.call(addressbL1ujKs, {from: accounts[0]});
//		const addressUvCAKBM = await StakingDextokenRo4QoRQ.capture.call(addressMUvWmN, uintuzRwYoU, {from: accounts[4]});
//		const uintlf3PseW = await StakingDextokenRo4QoRQ.rewardOf.call(address59fpZX, {from: accounts[3]});
//		const addressajapyXg = await StakingDextokenRo4QoRQ.capture.call(addressHw4DoBF, uintkrRKPuP, {from: accounts[3]});
//		const uintnWyGwcI = await StakingDextokenRo4QoRQ.earned.call(addressMOjTIfI, {from: accounts[3]});

		assert.equal(uint31mSvy, BigInt("0"))
		await expect(StakingDextokenRo4QoRQ.capture.call(addressMUvWmN, uintuzRwYoU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address7bFTcu = accounts[2]
		const addressoChxWL5 = accounts[4]
		const StakingDextokencKIhKog = await StakingDextoken.new(address7bFTcu, addressoChxWL5, {from: accounts[3]});
		const uintGeYDMoD = BigInt("1887")
		const uintKyqyxmJ = BigInt("400")
		const uintbTlURL = BigInt("413")
		const uintmPGe6DE = BigInt("418")
		const addressUSiQbdV = accounts[4]
		const uintdVRzvsy = BigInt("532")
		const uintTrEYxpf = await StakingDextokencKIhKog.getTotalStakes.call({from: accounts[5]});
		const uintEGgNe9U = await StakingDextokencKIhKog.setRewardRound.call(uintmPGe6DE, uintbTlURL, uintKyqyxmJ, uintGeYDMoD, {from: accounts[3]});
		const uinto0iXB82 = await StakingDextokencKIhKog.remainingRewards.call({from: accounts[1]});
//		const boolyLQz9P3 = await StakingDextokencKIhKog.unfreezeAccount.call(addressUSiQbdV, {from: "0x0000000000000000000000000000000000000001"});
//		const uintu9UlaYG = await StakingDextokencKIhKog.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintekcvOl = await StakingDextokencKIhKog.totalRewards.call({from: accounts[1]});
//		const uintDNE1Lz = await StakingDextokencKIhKog.withdraw.call(uintdVRzvsy, {from: accounts[3]});

		assert.equal(uintTrEYxpf, BigInt("0"))
		assert.equal(uinto0iXB82, BigInt("0"))
		await expect(StakingDextokencKIhKog.unfreezeAccount.call(addressUSiQbdV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvdCfEnX = accounts[4]
		const addressP0oQpSa = "0x0000000000000000000000000000000000000001"
		const StakingDextokenxPCCXS5 = await StakingDextoken.new(addressvdCfEnX, addressP0oQpSa, {from: accounts[2]});
		const addresse2kZwW3 = accounts[0]
		const addressMPQ0f51 = accounts[4]
		const addressKsBTfTS = accounts[3]
		const uintbBKeZzQ = await StakingDextokenxPCCXS5.remainingRewards.call({from: accounts[2]});
		const uinty7ZDK2F = await StakingDextokenxPCCXS5.lastTimeRewardApplicable.call({from: accounts[0]});
		const uintg5NARvJ = await StakingDextokenxPCCXS5.getWithdrawalOf.call(addresse2kZwW3, {from: accounts[4]});
//		const addresswK4D1Ta = await StakingDextokenxPCCXS5.updateReward.call(addressMPQ0f51, {from: accounts[0]});
//		const uintwD9jzYb = await StakingDextokenxPCCXS5.getWithdrawalOf.call(addressKsBTfTS, {from: accounts[4]});
//		await StakingDextokenxPCCXS5.claim.call({from: accounts[2]});

		assert.equal(uintbBKeZzQ, BigInt("0"))
		assert.equal(uintg5NARvJ, BigInt("0"))
		assert.equal(uinty7ZDK2F, BigInt("0"))
		await expect(StakingDextokenxPCCXS5.updateReward.call(addressMPQ0f51, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressN4YhLJa = accounts[0]
		const addressomThbB = accounts[3]
		const StakingDextokenHjZ6LIN = await StakingDextoken.new(addressN4YhLJa, addressomThbB, {from: accounts[2]});
		const addressUDP0S4a = accounts[4]
		const addressUecI2j1 = accounts[3]
		const uintd27qj8r = await StakingDextokenHjZ6LIN.getClaimOf.call(addressUDP0S4a, {from: accounts[0]});
		const uintTTUmH5C = await StakingDextokenHjZ6LIN.getEndTimestamp.call({from: accounts[3]});
		const bool3yLB3v = await StakingDextokenHjZ6LIN.freezeAccount.call(addressUecI2j1, {from: accounts[2]});

		assert.equal(bool3yLB3v, true)
		assert.equal(uintTTUmH5C, BigInt("0"))
		assert.equal(uintd27qj8r, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresskfkO4wk = accounts[1]
		const addressz4Ecy34 = accounts[5]
		const StakingDextokenkXkhh4l = await StakingDextoken.new(addresskfkO4wk, addressz4Ecy34, {from: accounts[4]});
		const addressDmQMbL8 = accounts[1]
		const addressxPjrGY = accounts[0]
		const addressfFFSlk = await StakingDextokenkXkhh4l.setBeneficial.call(addressDmQMbL8, {from: accounts[4]});
		const uintB1KMzHM = await StakingDextokenkXkhh4l.getEndTimestamp.call({from: accounts[0]});
		const uintYray1xT = await StakingDextokenkXkhh4l.stakeOf.call(addressxPjrGY, {from: accounts[1]});

		assert.equal(uintB1KMzHM, BigInt("0"))
		assert.equal(uintYray1xT, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressU7TIZE = accounts[0]
		const addressSB5u1Mw = accounts[5]
		const StakingDextokenQK2iNRH = await StakingDextoken.new(addressU7TIZE, addressSB5u1Mw, {from: accounts[4]});
		const uintWjumtf = BigInt("826")
		const addressaM7MuI1 = accounts[1]
		const uint7u3Uqa = await StakingDextokenQK2iNRH.remainingRewards.call({from: accounts[2]});
//		const addressnGZvwV = await StakingDextokenQK2iNRH.capture.call(addressaM7MuI1, uintWjumtf, {from: accounts[4]});

		assert.equal(uint7u3Uqa, BigInt("0"))
		await expect(StakingDextokenQK2iNRH.capture.call(addressaM7MuI1, uintWjumtf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJa9B54n = "0x0000000000000000000000000000000000000001"
		const addressqYViP6b = accounts[5]
		const StakingDextokeniI24vgg = await StakingDextoken.new(addressJa9B54n, addressqYViP6b, {from: accounts[0]});
		const addressqZGSPQ = accounts[0]
		const uintedvHtkA = BigInt("1541")
//		const boolM1ktcA = await StakingDextokeniI24vgg.unfreezeAccount.call(addressqZGSPQ, {from: accounts[0]});
//		const uintPfZc6dv = await StakingDextokeniI24vgg.withdraw.call(uintedvHtkA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokeniI24vgg.unfreezeAccount.call(addressqZGSPQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWOOZDY = "0x0000000000000000000000000000000000000001"
		const address6Bs496 = accounts[1]
		const StakingDextokenGpQzj9T = await StakingDextoken.new(addressWOOZDY, address6Bs496, {from: accounts[2]});
		const addressrlU2tEW = accounts[0]
//		await StakingDextokenGpQzj9T.notifyRewards.call({from: accounts[2]});
//		const bool3OCDRc = await StakingDextokenGpQzj9T.freezeAccount.call(addressrlU2tEW, {from: accounts[4]});

		await expect(StakingDextokenGpQzj9T.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCiFweuC = "0x0000000000000000000000000000000000000001"
		const addressFDphYPu = accounts[1]
		const StakingDextokenGpQzj9T = await StakingDextoken.new(addressCiFweuC, addressFDphYPu, {from: accounts[2]});
		const uintRvuVdWV = BigInt("505")
		const uintUwFOGPN = BigInt("899")
		const uintJG2EL9h = BigInt("801")
		const uintxvhzwHH = BigInt("852")
//		const uintJeDf1ty = await StakingDextokenGpQzj9T.setRewardRound.call(uintxvhzwHH, uintJG2EL9h, uintUwFOGPN, uintRvuVdWV, {from: accounts[2]});
//		await StakingDextokenGpQzj9T.notifyRewards.call({from: accounts[2]});

		await expect(StakingDextokenGpQzj9T.setRewardRound.call(uintxvhzwHH, uintJG2EL9h, uintUwFOGPN, uintRvuVdWV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
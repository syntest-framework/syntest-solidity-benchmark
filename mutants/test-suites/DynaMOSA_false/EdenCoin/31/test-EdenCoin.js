const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinUPQjjFR = await EdenCoin.new({from: accounts[2]});
		const uinte54l5K6 = BigInt("963")
		const addressmAcaLkX = accounts[5]
		const uintGIjhwUM = BigInt("1410")
		const addressFRSbSQq = accounts[4]
		const uintC2SO06i = BigInt("1312")
		const addressXnVDK16 = accounts[0]
		const uintn5eAmkD = BigInt("466")
		const addressqHUBh9 = accounts[3]
		const boolHXedisf = await EdenCoinUPQjjFR.increaseApproval.call(addressmAcaLkX, uinte54l5K6, {from: accounts[4]});
		const boolMuwlZ6e = await EdenCoinUPQjjFR.transfer.call(addressFRSbSQq, uintGIjhwUM, {from: accounts[2]});
//		const boolQNfnf3V = await EdenCoinUPQjjFR.transfer.call(addressXnVDK16, uintC2SO06i, {from: accounts[5]});
//		const boolTKoWi4z = await EdenCoinUPQjjFR.increaseApproval.call(addressqHUBh9, uintn5eAmkD, {from: accounts[3]});

		assert.equal(boolHXedisf, true)
		assert.equal(boolMuwlZ6e, true)
		await expect(EdenCoinUPQjjFR.transfer.call(addressXnVDK16, uintC2SO06i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinMrarEf2 = await EdenCoin.new({from: accounts[3]});
		const uintNTTbIX0 = BigInt("425")
		const addressCBgh1xy = accounts[2]
		const addressHtYYvKr = accounts[1]
		const addressHaOi3Pu = accounts[2]
		const addressbjPfOZP = accounts[1]
		const uintF0YqkN6 = BigInt("1836")
		const addressLEnzs8t = accounts[3]
		const addressW9GorFJ = accounts[1]
//		const booll9DdmtT = await EdenCoinMrarEf2.transferFrom.call(addressHtYYvKr, addressCBgh1xy, uintNTTbIX0, {from: accounts[5]});
//		const uint256Hkin3gf = await EdenCoinMrarEf2.allowance.call(addressbjPfOZP, addressHaOi3Pu, {from: accounts[2]});
//		const boolRw37v1r = await EdenCoinMrarEf2.transferFrom.call(addressW9GorFJ, addressLEnzs8t, uintF0YqkN6, {from: accounts[4]});

		await expect(EdenCoinMrarEf2.transferFrom.call(addressHtYYvKr, addressCBgh1xy, uintNTTbIX0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoincYTcDJe = await EdenCoin.new({from: accounts[4]});
		const address85im0v = accounts[4]
		const addresseqllL1A = accounts[2]
		const addresshTMYaRL = accounts[5]
		const addressdywW6I = accounts[5]
		const uintjk20vyK = BigInt("1539")
		const addressh5WAWg = accounts[0]
		const uintXhbEWQS = BigInt("1904")
		const addressCNqQAw2 = "0x0000000000000000000000000000000000000001"
		const addressBextZEm = accounts[4]
		const uintuNZD1Q = BigInt("901")
		const addressS3J7JYr = "0x0000000000000000000000000000000000000001"
		const addressvjdkxK = accounts[2]
		const uintGn972Kd = BigInt("1845")
		const addressPTs0nng = accounts[4]
		const uint256bAC3hX = await EdenCoincYTcDJe.allowance.call(addresseqllL1A, address85im0v, {from: accounts[3]});
		const uint256Nsbd13H = await EdenCoincYTcDJe.allowance.call(addressdywW6I, addresshTMYaRL, {from: accounts[3]});
		const boolt1ebxCg = await EdenCoincYTcDJe.decreaseApproval.call(addressh5WAWg, uintjk20vyK, {from: accounts[3]});
//		const boolAiflGzl = await EdenCoincYTcDJe.transferFrom.call(addressBextZEm, addressCNqQAw2, uintXhbEWQS, {from: accounts[3]});
//		const boolXumHvYb = await EdenCoincYTcDJe.transferFrom.call(addressvjdkxK, addressS3J7JYr, uintuNZD1Q, {from: accounts[1]});
//		const boolNk3tfuX = await EdenCoincYTcDJe.transfer.call(addressPTs0nng, uintGn972Kd, {from: accounts[1]});

		assert.equal(boolt1ebxCg, true)
		assert.equal(uint256Nsbd13H, BigInt("0"))
		assert.equal(uint256bAC3hX, BigInt("0"))
		await expect(EdenCoincYTcDJe.transferFrom.call(addressBextZEm, addressCNqQAw2, uintXhbEWQS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTuiCG5g = await EdenCoin.new({from: accounts[0]});
		const uintXsVNR8D = BigInt("1710")
		const addressiCmpLkI = accounts[1]
		const uinteeqAVei = BigInt("1855")
		const addressdaj5igj = "0x0000000000000000000000000000000000000001"
		const uintDUZM2Uc = BigInt("219")
		const addressRBcp6AE = accounts[0]
		const uintpYsnwbg = BigInt("865")
		const addresswyjvHG1 = accounts[1]
		const addressR99jT5X = accounts[4]
		const uinteb7uP6Z = BigInt("599")
		const addressxLNfhyf = "0x0000000000000000000000000000000000000001"
		const uintdhN104K = BigInt("58")
		const addressWkbC4aN = accounts[0]
		const boolICLov2m = await EdenCoinTuiCG5g.approve.call(addressiCmpLkI, uintXsVNR8D, {from: accounts[4]});
		const boolbtO6obD = await EdenCoinTuiCG5g.approve.call(addressdaj5igj, uinteeqAVei, {from: accounts[3]});
		const boolzpo00vB = await EdenCoinTuiCG5g.approve.call(addressRBcp6AE, uintDUZM2Uc, {from: accounts[4]});
//		const boolxvbQ5oA = await EdenCoinTuiCG5g.transferFrom.call(addressR99jT5X, addresswyjvHG1, uintpYsnwbg, {from: accounts[3]});
//		const boolgIyNODj = await EdenCoinTuiCG5g.approve.call(addressxLNfhyf, uinteb7uP6Z, {from: accounts[5]});
//		const boolYQIAPRc = await EdenCoinTuiCG5g.transfer.call(addressWkbC4aN, uintdhN104K, {from: accounts[1]});

		assert.equal(boolICLov2m, true)
		assert.equal(boolbtO6obD, true)
		assert.equal(boolzpo00vB, true)
		await expect(EdenCoinTuiCG5g.transferFrom.call(addressR99jT5X, addresswyjvHG1, uintpYsnwbg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinfSBYN30 = await EdenCoin.new({from: accounts[3]});
		const uintYaY0XHt = BigInt("808")
		const addressozkj0Qe = accounts[4]
		const addresssKxDVft = "0x0000000000000000000000000000000000000001"
		const uintoQVK9hE = BigInt("821")
		const address16gq39 = accounts[2]
		const uintRKtpLI5 = BigInt("1389")
		const addressboLg9gU = accounts[0]
		const bool9wD6js = await EdenCoinfSBYN30.approve.call(addressozkj0Qe, uintYaY0XHt, {from: accounts[2]});
		const uint256wyw4VKm = await EdenCoinfSBYN30.balanceOf.call(addresssKxDVft, {from: "0x0000000000000000000000000000000000000001"});
		const boolvPfFeXy = await EdenCoinfSBYN30.approve.call(address16gq39, uintoQVK9hE, {from: accounts[0]});
//		const boolZ3wsqc2 = await EdenCoinfSBYN30.transfer.call(addressboLg9gU, uintRKtpLI5, {from: accounts[1]});

		assert.equal(bool9wD6js, true)
		assert.equal(boolvPfFeXy, true)
		assert.equal(uint256wyw4VKm, BigInt("0"))
		await expect(EdenCoinfSBYN30.transfer.call(addressboLg9gU, uintRKtpLI5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinx7yy0KA = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIkbC2Pb = BigInt("1977")
		const addressmAtKnj = accounts[4]
		const address9A66Cq = accounts[1]
		const uintW8mPFT1 = BigInt("140")
		const addressgb5DjdR = accounts[1]
		const uinttB8Xtx3 = BigInt("911")
		const addressoqES6os = "0x0000000000000000000000000000000000000001"
		const uintlkqLH4L = BigInt("1834")
		const addressF9bYAKF = accounts[1]
		const uinta21Bd1 = BigInt("1450")
		const addresscT0Pij5 = accounts[4]
		const uintEsYxGwJ = BigInt("537")
		const addresswGqOjZv = accounts[5]
		const boolWbTeLSk = await EdenCoinx7yy0KA.transferFrom.call(address9A66Cq, addressmAtKnj, uintIkbC2Pb, {from: accounts[0]});
		const boolQdgflz = await EdenCoinx7yy0KA.transfer.call(addressgb5DjdR, uintW8mPFT1, {from: accounts[2]});
		const boolRqM3jt = await EdenCoinx7yy0KA.approve.call(addressoqES6os, uinttB8Xtx3, {from: accounts[1]});
		const boolHIp161q = await EdenCoinx7yy0KA.decreaseApproval.call(addressF9bYAKF, uintlkqLH4L, {from: accounts[4]});
		const boolXQugBfm = await EdenCoinx7yy0KA.increaseApproval.call(addresscT0Pij5, uinta21Bd1, {from: accounts[3]});
		const boolxfSCD40 = await EdenCoinx7yy0KA.approve.call(addresswGqOjZv, uintEsYxGwJ, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinglGyD6 = await EdenCoin.new({from: accounts[2]});
		const uintEHtEQmx = BigInt("348")
		const addressvA5qhm = accounts[3]
		const uintLi2N4Ju = BigInt("0")
		const addressZl3jGYn = accounts[2]
		const uinttu2GwjO = BigInt("115")
		const addressIQkCXO = accounts[3]
		const uintNeK6Kz = BigInt("917")
		const addressZgB0TQz = accounts[4]
		const addressGYdTGur = accounts[4]
		const uintcvjSlbS = BigInt("661")
		const addressbYCwPqw = accounts[4]
		const addressD10TyUK = accounts[4]
		const addressmQ0hA6t = accounts[2]
		const addressa0mhLZt = accounts[4]
		const uintyGQeW5l = BigInt("613")
		const addressuv2gFgM = accounts[4]
		const addresskUJUxU = accounts[4]
		const addressl3KxPiF = "0x0000000000000000000000000000000000000001"
		const uintx3do7ic = BigInt("1497")
		const addressb9sJh4E = accounts[0]
		const uintS7aabqd = BigInt("831")
		const addressrNjj8Z = accounts[1]
		const addressQ9sQPAS = accounts[5]
		const uintJXonZtB = BigInt("1758")
		const addressbvCP8Zb = accounts[0]
		const uintYcG2ykh = BigInt("901")
		const addresskccwVk3 = accounts[3]
		const uint3TJFTb = BigInt("1843")
		const addresscMwRg1j = accounts[5]
		const uint4TgL22 = BigInt("1153")
		const addressXJNqBSE = accounts[4]
		const uinttyfNCp3 = BigInt("66")
		const addresseTKuoU = accounts[3]
		const addresshT9FGqc = accounts[4]
		const addresscYSEKqJ = accounts[6]
		const uintsvxtMXi = BigInt("1116")
		const addressIgLSuJ9 = accounts[4]
		const boolI8d0xL = await EdenCoinglGyD6.approve.call(addressvA5qhm, uintEHtEQmx, {from: accounts[4]});
		const boolOSrh5D = await EdenCoinglGyD6.decreaseApproval.call(addressZl3jGYn, uintLi2N4Ju, {from: accounts[0]});
		const booldP1vwN = await EdenCoinglGyD6.decreaseApproval.call(addressIQkCXO, uinttu2GwjO, {from: accounts[2]});
//		const booltm1apGv = await EdenCoinglGyD6.transferFrom.call(addressGYdTGur, addressZgB0TQz, uintNeK6Kz, {from: accounts[4]});
//		const boolJd6HPl = await EdenCoinglGyD6.transferFrom.call(addressD10TyUK, addressbYCwPqw, uintcvjSlbS, {from: accounts[3]});
//		const uint256U8sUCST = await EdenCoinglGyD6.balanceOf.call(addressmQ0hA6t, {from: accounts[2]});
//		const uint256Cb5v4a = await EdenCoinglGyD6.balanceOf.call(addressa0mhLZt, {from: accounts[0]});
//		const boolQG8eYQq = await EdenCoinglGyD6.approve.call(addressuv2gFgM, uintyGQeW5l, {from: accounts[3]});
//		const uint256z6HwCf = await EdenCoinglGyD6.allowance.call(addressl3KxPiF, addresskUJUxU, {from: accounts[3]});
//		const boolRdt0gvz = await EdenCoinglGyD6.increaseApproval.call(addressb9sJh4E, uintx3do7ic, {from: accounts[0]});
//		const boolwMcaSoc = await EdenCoinglGyD6.transferFrom.call(addressQ9sQPAS, addressrNjj8Z, uintS7aabqd, {from: accounts[0]});
//		const boolsUOCdP = await EdenCoinglGyD6.approve.call(addressbvCP8Zb, uintJXonZtB, {from: accounts[4]});
//		const boolAVli7Iu = await EdenCoinglGyD6.approve.call(addresskccwVk3, uintYcG2ykh, {from: accounts[0]});
//		const boolntde8qR = await EdenCoinglGyD6.increaseApproval.call(addresscMwRg1j, uint3TJFTb, {from: accounts[5]});
//		const bool6gOL39 = await EdenCoinglGyD6.transfer.call(addressXJNqBSE, uint4TgL22, {from: accounts[5]});
//		const boolnx5wBQU = await EdenCoinglGyD6.increaseApproval.call(addresseTKuoU, uinttyfNCp3, {from: accounts[4]});
//		const uint256hX41jlW = await EdenCoinglGyD6.allowance.call(addresscYSEKqJ, addresshT9FGqc, {from: accounts[4]});
//		const boolS2M15C = await EdenCoinglGyD6.approve.call(addressIgLSuJ9, uintsvxtMXi, {from: accounts[1]});

		assert.equal(boolI8d0xL, true)
		assert.equal(boolOSrh5D, true)
		assert.equal(booldP1vwN, true)
		await expect(EdenCoinglGyD6.transferFrom.call(addressGYdTGur, addressZgB0TQz, uintNeK6Kz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
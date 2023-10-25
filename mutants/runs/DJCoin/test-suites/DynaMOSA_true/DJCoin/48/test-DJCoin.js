const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinr9ffLc = await DJCoin.new({from: accounts[0]});
		const addressPYKqey = accounts[1]
		const uint256ooeMiln = await DJCoinr9ffLc.totalSupply.call({from: accounts[4]});
		const addressOQSnGRw = await DJCoinr9ffLc.transferOwnership.call(addressPYKqey, {from: accounts[3]});
		await DJCoinr9ffLc.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256ooeMiln, BigInt("2100000000000"))
		await expect(DJCoinr9ffLc.transferOwnership.call(addressPYKqey, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinA2kpvAp = await DJCoin.new({from: accounts[0]});
		const uintZcWkzre = BigInt("1071")
		const addressQ9G5YP = accounts[5]
		const boolUW5kTHf = await DJCoinA2kpvAp.decreaseAllowance.call(addressQ9G5YP, uintZcWkzre, {from: accounts[4]});
		await DJCoinA2kpvAp.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolUW5kTHf, true)
		await expect(DJCoinA2kpvAp.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinwDEGeRI = await DJCoin.new({from: accounts[3]});
		const addresskvx4kP = accounts[3]
		const uintbrJ0mZw = BigInt("1661")
		const uint256YtSlMiU = await DJCoinwDEGeRI.balanceOf.call(addresskvx4kP, {from: accounts[2]});
		await DJCoinwDEGeRI.onlyOwner.call({from: accounts[2]});
		const boolNHDxwJJ = await DJCoinwDEGeRI.changetokensPerBlock.call(uintbrJ0mZw, {from: accounts[2]});

		assert.equal(uint256YtSlMiU, BigInt("2100000000000"))
		await expect(DJCoinwDEGeRI.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineeIPL6z = await DJCoin.new({from: accounts[0]});
		const uinthp6waJ = BigInt("1273")
		const uint9YDf8u = BigInt("996")
		const addressNugcqLx = accounts[2]
		const addressKy6EFEA = accounts[5]
		await DJCoineeIPL6z.renounceOwnership.call({from: accounts[0]});
		await DJCoineeIPL6z.renounceOwnership.call({from: accounts[0]});
		const uint256nWjMBqA = await DJCoineeIPL6z.burn.call(uint9YDf8u, uinthp6waJ, {from: accounts[2]});
		const addressP6bFGXD = await DJCoineeIPL6z.owner.call({from: accounts[3]});
		const uint256hP32nCd = await DJCoineeIPL6z.allowance.call(addressKy6EFEA, addressNugcqLx, {from: accounts[1]});

		await expect(DJCoineeIPL6z.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbgS5KF4 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdoupU3q = BigInt("242")
		const addresswZPDUws = accounts[4]
		const bool2rQTZD = await DJCoinbgS5KF4.transfer.call(addresswZPDUws, uintdoupU3q, {from: accounts[0]});
		const uint256AG9nDLa = await DJCoinbgS5KF4.totalSupply.call({from: accounts[1]});
	});

	it('test for DJCoin', async () => {
		const DJCoinFZ6hw9E = await DJCoin.new({from: accounts[4]});
		const addresstJlYHL1 = accounts[2]
		const addressMOwZc6C = accounts[0]
		const addressqS6S4bM = accounts[1]
		const addressXwDinJr = "0x0000000000000000000000000000000000000001"
		const addresst2nu046 = "0x0000000000000000000000000000000000000001"
		const uint256LL9FRW0 = await DJCoinFZ6hw9E.allowance.call(addressMOwZc6C, addresstJlYHL1, {from: accounts[1]});
		const uint256QsQcdpE = await DJCoinFZ6hw9E.allowance.call(addressXwDinJr, addressqS6S4bM, {from: accounts[1]});
		const addressypOSNNB = await DJCoinFZ6hw9E.validRecipient.call(addresst2nu046, {from: accounts[1]});

		assert.equal(uint256LL9FRW0, BigInt("0"))
		assert.equal(uint256QsQcdpE, BigInt("0"))
		await expect(DJCoinFZ6hw9E.validRecipient.call(addresst2nu046, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFZ6hw9E = await DJCoin.new({from: accounts[4]});
		const addressZM2vFm6 = accounts[3]
		const addressN7zOptW = accounts[0]
		const addressi1J6ECg = accounts[1]
		const addressHpwsx7q = "0x0000000000000000000000000000000000000001"
		const addressSrUSvl = "0x0000000000000000000000000000000000000001"
		const uint256LL9FRW0 = await DJCoinFZ6hw9E.allowance.call(addressN7zOptW, addressZM2vFm6, {from: accounts[1]});
		const uint256QsQcdpE = await DJCoinFZ6hw9E.allowance.call(addressHpwsx7q, addressi1J6ECg, {from: accounts[1]});
		const addressoijh2Rd = await DJCoinFZ6hw9E.owner.call({from: accounts[5]});
		const addressypOSNNB = await DJCoinFZ6hw9E.validRecipient.call(addressSrUSvl, {from: accounts[1]});

		assert.equal(addressoijh2Rd, 0x7B3e2bC3662be115a2765E6a0E91045Ec24190DD)
		assert.equal(uint256LL9FRW0, BigInt("0"))
		assert.equal(uint256QsQcdpE, BigInt("0"))
		await expect(DJCoinFZ6hw9E.validRecipient.call(addressSrUSvl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmJ6L1Y = await DJCoin.new({from: accounts[3]});
		const uintMekxLOB = BigInt("1388")
		const addressc76Cnrp = accounts[5]
		const addressgpUz0L3 = accounts[2]
		const boolZ0dF9WH = await DJCoinmJ6L1Y.transferFrom.call(addressgpUz0L3, addressc76Cnrp, uintMekxLOB, {from: accounts[0]});
		await DJCoinmJ6L1Y.onlyOwner.call({from: accounts[5]});

		await expect(DJCoinmJ6L1Y.transferFrom.call(addressgpUz0L3, addressc76Cnrp, uintMekxLOB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmJ6L1Y = await DJCoin.new({from: accounts[3]});
		const uintRqKQnph = BigInt("743")
		const addressHtc2Gug = accounts[4]
		const addresssjpiYY6 = accounts[4]
		const uintegaiT7h = BigInt("1403")
		const addressBREKJQ = accounts[4]
		const addressFjSGgiy = accounts[2]
		const uintzTuOBWc = BigInt("1865")
		const addressPBNtQR1 = accounts[1]
		const boolcJ8QJsY = await DJCoinmJ6L1Y.approve.call(addressHtc2Gug, uintRqKQnph, {from: accounts[3]});
		const addressSNlhL1a = await DJCoinmJ6L1Y.validRecipient.call(addresssjpiYY6, {from: accounts[1]});
		const boolZ0dF9WH = await DJCoinmJ6L1Y.transferFrom.call(addressFjSGgiy, addressBREKJQ, uintegaiT7h, {from: accounts[0]});
		const booleZvZg3H = await DJCoinmJ6L1Y.approve.call(addressPBNtQR1, uintzTuOBWc, {from: accounts[0]});
		await DJCoinmJ6L1Y.onlyOwner.call({from: accounts[5]});

		assert.equal(boolcJ8QJsY, true)
		await expect(DJCoinmJ6L1Y.validRecipient.call(addresssjpiYY6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinwDEGeRI = await DJCoin.new({from: accounts[3]});
		const addressdypm1mI = accounts[3]
		const uintWqhYA7H = BigInt("1661")
		const uint256YtSlMiU = await DJCoinwDEGeRI.balanceOf.call(addressdypm1mI, {from: accounts[2]});
		const boolNHDxwJJ = await DJCoinwDEGeRI.changetokensPerBlock.call(uintWqhYA7H, {from: accounts[2]});

		assert.equal(boolNHDxwJJ, true)
		assert.equal(uint256YtSlMiU, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinmJ6L1Y = await DJCoin.new({from: accounts[3]});
		const addresstP5Cfk5 = accounts[2]
		const uintCaK1rNj = BigInt("1388")
		const addressZUhthND = accounts[5]
		const addressoDtHHhF = accounts[2]
		const uintSVpaJSH = BigInt("669")
		const addressz1I0Rta = "0x0000000000000000000000000000000000000001"
		const addressR4TWuTS = await DJCoinmJ6L1Y.transferOwnership.call(addresstP5Cfk5, {from: accounts[3]});
		const boolZ0dF9WH = await DJCoinmJ6L1Y.transferFrom.call(addressoDtHHhF, addressZUhthND, uintCaK1rNj, {from: accounts[0]});
		const boolzaAJfS5 = await DJCoinmJ6L1Y.increaseAllowance.call(addressz1I0Rta, uintSVpaJSH, {from: accounts[5]});
		await DJCoinmJ6L1Y.onlyOwner.call({from: accounts[5]});

		await expect(DJCoinmJ6L1Y.transferFrom.call(addressoDtHHhF, addressZUhthND, uintCaK1rNj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBZoPjQn = await DJCoin.new({from: accounts[5]});
		const uintA9Kyg6 = BigInt("736")
		const addressSC9k7Qc = accounts[0]
		const uintAZr7So = BigInt("110")
		const addressbr2KIgh = accounts[3]
		const uintnH4T7CC = BigInt("759")
		const addressYrdEJ1s = accounts[1]
		const uinteCRZwPY = BigInt("730")
		const addressd7KmtTL = accounts[4]
		const uint256in3Ie90 = await DJCoinBZoPjQn.totalSupply.call({from: accounts[2]});
		const boolwS6JdNb = await DJCoinBZoPjQn.decreaseAllowance.call(addressSC9k7Qc, uintA9Kyg6, {from: accounts[3]});
		const boolo8RQRql = await DJCoinBZoPjQn.increaseAllowance.call(addressbr2KIgh, uintAZr7So, {from: accounts[5]});
		await DJCoinBZoPjQn.renounceOwnership.call({from: accounts[4]});
		const boolYzB5Fzl = await DJCoinBZoPjQn.transfer.call(addressYrdEJ1s, uintnH4T7CC, {from: accounts[4]});
		const boolMvH7hMM = await DJCoinBZoPjQn.transfer.call(addressd7KmtTL, uinteCRZwPY, {from: accounts[5]});

		assert.equal(boolo8RQRql, true)
		assert.equal(boolwS6JdNb, true)
		assert.equal(uint256in3Ie90, BigInt("2100000000000"))
		await expect(DJCoinBZoPjQn.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmJ6L1Y = await DJCoin.new({from: accounts[3]});
		const uintxi0IsMu = BigInt("544")
		const addressw8MRyP7 = accounts[3]
		const uintRyuWBOO = BigInt("1480")
		const addressuzZW5BR = "0x0000000000000000000000000000000000000001"
		const uintrpfLilu = BigInt("1388")
		const addressjepib0l = accounts[5]
		const addressCkaXi3K = accounts[2]
		const boolcDRV1JJ = await DJCoinmJ6L1Y.decreaseAllowance.call(addressw8MRyP7, uintxi0IsMu, {from: accounts[4]});
		const boolDsgF3VY = await DJCoinmJ6L1Y.transfer.call(addressuzZW5BR, uintRyuWBOO, {from: accounts[3]});
		const boolZ0dF9WH = await DJCoinmJ6L1Y.transferFrom.call(addressCkaXi3K, addressjepib0l, uintrpfLilu, {from: accounts[0]});

		assert.equal(boolDsgF3VY, true)
		assert.equal(boolcDRV1JJ, true)
		await expect(DJCoinmJ6L1Y.transferFrom.call(addressCkaXi3K, addressjepib0l, uintrpfLilu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmJ6L1Y = await DJCoin.new({from: accounts[3]});
		const uintOkv3W7c = BigInt("560")
		const addressR9wqMEH = accounts[3]
		const uintYJZ1Rek = BigInt("371")
		const uintJqEKljM = BigInt("1203")
		const uintSIdIqUH = BigInt("1480")
		const addressqpJLtl1 = "0x0000000000000000000000000000000000000002"
		const uintJibyNZf = BigInt("1388")
		const addresszaw45nk = accounts[5]
		const addressjWca2K = accounts[2]
		const uintl34ECLm = BigInt("1578")
		const addressYUx965a = accounts[2]
		const boolcDRV1JJ = await DJCoinmJ6L1Y.decreaseAllowance.call(addressR9wqMEH, uintOkv3W7c, {from: accounts[4]});
		const uint256iflLCsT = await DJCoinmJ6L1Y.burn.call(uintJqEKljM, uintYJZ1Rek, {from: accounts[3]});
		const boolDsgF3VY = await DJCoinmJ6L1Y.transfer.call(addressqpJLtl1, uintSIdIqUH, {from: accounts[3]});
		const boolZ0dF9WH = await DJCoinmJ6L1Y.transferFrom.call(addressjWca2K, addresszaw45nk, uintJibyNZf, {from: accounts[0]});
		const boolhToussy = await DJCoinmJ6L1Y.transfer.call(addressYUx965a, uintl34ECLm, {from: accounts[4]});
		const uint256ieJrwQ = await DJCoinmJ6L1Y.totalSupply.call({from: accounts[2]});

		assert.equal(boolDsgF3VY, true)
		assert.equal(boolcDRV1JJ, true)
		assert.equal(uint256iflLCsT, BigInt("2022090000000"))
		await expect(DJCoinmJ6L1Y.transferFrom.call(addressjWca2K, addresszaw45nk, uintJibyNZf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinA2kpvAp = await DJCoin.new({from: accounts[0]});
		const uintmm2KSeg = BigInt("0")
		const addressSY0HE9 = accounts[0]
		const booloXwOkjM = await DJCoinA2kpvAp.transfer.call(addressSY0HE9, uintmm2KSeg, {from: accounts[1]});

		assert.equal(booloXwOkjM, true)
	});
})
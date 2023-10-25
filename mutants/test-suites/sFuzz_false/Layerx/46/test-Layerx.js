const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressIMswuJy = "0x0000000000000000000000000000000000000001"
		const LayerxMOVaOsN = await Layerx.new(addressIMswuJy, {from: accounts[0]});
		const byteB1mad43 = "0x0200090d12151c12040a1c1f1c100f161312"
		const uintNq0032P = BigInt("1118")
		const addressYzu9OzA = accounts[4]
		const boolGtzq9K = true
		const uintVCLsq5r = BigInt("604")
		const addressSxqN6U4 = accounts[3]
		const bytecdWuo1O = "0x15181c06140005040e0307011b0f"
		const uintz08oJkt = BigInt("334")
		const addressQbe5ly5 = accounts[4]
//		const boolB24UBtz = await LayerxMOVaOsN.approveAndCall.call(addressYzu9OzA, uintNq0032P, byteB1mad43, {from: accounts[5]});
//		const uintGcQa7yV = await LayerxMOVaOsN.totalSupply.call({from: accounts[4]});
//		const boolHJ6WCiU = await LayerxMOVaOsN.setIsPaused.call(boolGtzq9K, {from: accounts[4]});
//		const boolfe6x2wF = await LayerxMOVaOsN.transfer.call(addressSxqN6U4, uintVCLsq5r, {from: accounts[1]});
//		const boolEzIaJcU = await LayerxMOVaOsN.approveAndCall.call(addressQbe5ly5, uintz08oJkt, bytecdWuo1O, {from: accounts[5]});

		await expect(LayerxMOVaOsN.approveAndCall.call(addressYzu9OzA, uintNq0032P, byteB1mad43, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGlIBf0t = accounts[0]
		const LayerxMjc5JCr = await Layerx.new(addressGlIBf0t, {from: accounts[4]});
		const uintUJXAaTY = BigInt("1161")
		const addressZJH2Gxn = accounts[4]
		const boolgiufome = true
//		const uintP6xfpJj = await LayerxMjc5JCr.withdraw.call(uintUJXAaTY, {from: accounts[0]});
//		const addresscNzv1MW = await LayerxMjc5JCr.transferOwnership.call(addressZJH2Gxn, {from: accounts[1]});
//		const boolmbWHP8q = await LayerxMjc5JCr.setIsPaused.call(boolgiufome, {from: accounts[2]});

		await expect(LayerxMjc5JCr.withdraw.call(uintUJXAaTY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXznOv6r = accounts[4]
		const LayerxM3jo2s = await Layerx.new(addressXznOv6r, {from: accounts[2]});
		const uintjgq1gk6 = BigInt("0")
		const uintkiKI0si = BigInt("1331")
		const addressaRL4uRD = accounts[5]
		const addressjqmGt12 = accounts[5]
//		const uintIknNgYU = await LayerxM3jo2s.lock.call(uintjgq1gk6, {from: accounts[5]});
//		const boolIh4Qpn = await LayerxM3jo2s.transferFrom.call(addressjqmGt12, addressaRL4uRD, uintkiKI0si, {from: accounts[2]});
//		await LayerxM3jo2s.onlyOwner.call({from: accounts[2]});

		await expect(LayerxM3jo2s.lock.call(uintjgq1gk6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressupjgs7N = accounts[2]
		const Layerxk0vUoou = await Layerx.new(addressupjgs7N, {from: accounts[2]});
		const uintVVgxhq1 = BigInt("1034")
		const uintLxrut1A = BigInt("1047")
		const addressnMtQwkS = accounts[0]
		const addressGrJ8gwG = accounts[4]
//		const uintYS8bFEk = await Layerxk0vUoou.exist.call(uintVVgxhq1, {from: accounts[0]});
//		const boolG2ofAd1 = await Layerxk0vUoou.transferFrom.call(addressGrJ8gwG, addressnMtQwkS, uintLxrut1A, {from: accounts[2]});
//		const uinteYoNTW = await Layerxk0vUoou.getStakesNum.call({from: accounts[1]});

		await expect(Layerxk0vUoou.exist.call(uintVVgxhq1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresslvSjCR = accounts[0]
		const LayerxJKRKIx = await Layerx.new(addresslvSjCR, {from: "0x0000000000000000000000000000000000000001"});
		const addresssFNiQAa = accounts[3]
		const addressYtR3RgR = "0x0000000000000000000000000000000000000001"
		const uintcGd0MO2 = BigInt("204")
		const addresszlGYrAb = accounts[2]
		const boolf7bvJPP = false
		const uintLuP8FG = BigInt("1934")
		await LayerxJKRKIx.addStakePayment.call({from: accounts[2]});
		const uintN6uquv9 = await LayerxJKRKIx.allowance.call(addressYtR3RgR, addresssFNiQAa, {from: accounts[3]});
		await LayerxJKRKIx.unlock.call({from: accounts[1]});
		const booltvq0h1o = await LayerxJKRKIx.approve.call(addresszlGYrAb, uintcGd0MO2, {from: accounts[4]});
		const booluEKoEhq = await LayerxJKRKIx.setIsPaused.call(boolf7bvJPP, {from: accounts[3]});
		const uintpwoHAuW = await LayerxJKRKIx.lock.call(uintLuP8FG, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressX6NLYfY = "0x0000000000000000000000000000000000000001"
		const LayerxWdBKd3W = await Layerx.new(addressX6NLYfY, {from: accounts[2]});
		const uintd1vKiYU = BigInt("980")
		const addressXXp9gpF = accounts[1]
		const addressvIDtrWV = "0x0000000000000000000000000000000000000001"
		const uintgidxgc8 = await LayerxWdBKd3W.getStakesNum.call({from: accounts[1]});
//		await LayerxWdBKd3W.unlock.call({from: accounts[1]});
//		const booljVWgGVL = await LayerxWdBKd3W.transferFrom.call(addressvIDtrWV, addressXXp9gpF, uintd1vKiYU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintgidxgc8, BigInt("1"))
		await expect(LayerxWdBKd3W.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTyHJGq5 = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addressTyHJGq5, {from: accounts[1]});
		const uintgH7Aepr = BigInt("1043")
		const addressxAGOel4 = accounts[0]
		const boolxxF3wfE = true
		const boolTVn7iao = await LayerxWUFGIth.approve.call(addressxAGOel4, uintgH7Aepr, {from: accounts[4]});
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});
//		const boolnqXyWvg = await LayerxWUFGIth.setIsPaused.call(boolxxF3wfE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTVn7iao, true)
		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressE8T9lIZ = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addressE8T9lIZ, {from: accounts[1]});
		const uintOaJ60CB = BigInt("1043")
		const addressBgOs7sA = accounts[0]
		const uintbJV20Ko = BigInt("794")
		const addressMhysId1 = accounts[3]
		const addresso4DxdQZ = accounts[4]
		const boolxxF3wfE = true
		const boolTVn7iao = await LayerxWUFGIth.approve.call(addressBgOs7sA, uintOaJ60CB, {from: accounts[4]});
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[0]});
//		const boolExLlE4N = await LayerxWUFGIth.transferFrom.call(addresso4DxdQZ, addressMhysId1, uintbJV20Ko, {from: accounts[2]});
//		const boolnqXyWvg = await LayerxWUFGIth.setIsPaused.call(boolxxF3wfE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTVn7iao, true)
		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssZ76OTS = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addresssZ76OTS, {from: accounts[1]});
		const addressKbLHPWu = accounts[5]
		const addressxQmL8Qw = accounts[0]
		const uintVaiumci = BigInt("1043")
		const addressTtsXila = accounts[3]
		const uint5gRW4K = await LayerxWUFGIth.allowance.call(addressxQmL8Qw, addressKbLHPWu, {from: accounts[1]});
		const boolTVn7iao = await LayerxWUFGIth.approve.call(addressTtsXila, uintVaiumci, {from: accounts[4]});
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});

		assert.equal(boolTVn7iao, true)
		assert.equal(uint5gRW4K, BigInt("0"))
		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNLXwaP = accounts[3]
		const LayerxnymYW6a = await Layerx.new(addressNLXwaP, {from: accounts[1]});
		const addressIsTrTWT = accounts[4]
		const uintTbIcdUN = await LayerxnymYW6a.balanceOf.call(addressIsTrTWT, {from: accounts[2]});
//		await LayerxnymYW6a.paused.call({from: accounts[1]});

		assert.equal(uintTbIcdUN, BigInt("0"))
		await expect(LayerxnymYW6a.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYwIr5QH = accounts[1]
		const LayerxxL3SSGJ = await Layerx.new(addressYwIr5QH, {from: accounts[0]});
		const uintMlkIE5p = BigInt("658")
		const addressisPEHFe = accounts[3]
		const addressLE7gR27 = accounts[1]
		const addressERE3ZQ = accounts[3]
		const uintfYbURK1 = BigInt("312")
		const boolwuRgRGu = await LayerxxL3SSGJ.approve.call(addressisPEHFe, uintMlkIE5p, {from: accounts[2]});
		const uintMlNKZNc = await LayerxxL3SSGJ.getStakesNum.call({from: accounts[1]});
		const uintz7N1V95 = await LayerxxL3SSGJ.balanceOf.call(addressLE7gR27, {from: accounts[4]});
		const addressax3pJzq = await LayerxxL3SSGJ.transferOwnership.call(addressERE3ZQ, {from: accounts[1]});
//		const uintFVMzhlF = await LayerxxL3SSGJ.exist.call(uintfYbURK1, {from: accounts[2]});

		assert.equal(boolwuRgRGu, true)
		assert.equal(uintMlNKZNc, BigInt("1"))
		assert.equal(uintz7N1V95, BigInt("40000000000000000000000"))
		await expect(LayerxxL3SSGJ.exist.call(uintfYbURK1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssRf2vza = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addresssRf2vza, {from: accounts[1]});
		const uintlecKAMy = BigInt("1740")
		const addressbj1WWQU = accounts[3]
		const byteyRMkrM7 = "0x070a0c040f060a0e060e1b04"
		const uinthxFjqSQ = BigInt("1607")
		const addressvdfriu8 = accounts[1]
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});
//		const boolxOWChTk = await LayerxWUFGIth.transfer.call(addressbj1WWQU, uintlecKAMy, {from: accounts[3]});
//		const boolGaaA7S3 = await LayerxWUFGIth.approveAndCall.call(addressvdfriu8, uinthxFjqSQ, byteyRMkrM7, {from: accounts[1]});

		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressstCya4 = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addressstCya4, {from: accounts[1]});
		const uintre260SR = BigInt("1387")
		const uintMD7InX2 = await LayerxWUFGIth.totalSupply.call({from: accounts[0]});
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});
//		const uintKiYHMmQ = await LayerxWUFGIth.lock.call(uintre260SR, {from: accounts[3]});

		assert.equal(uintMD7InX2, BigInt("40000000000000000000000"))
		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressb6GRg8P = accounts[3]
		const LayerxpBQnUMX = await Layerx.new(addressb6GRg8P, {from: accounts[5]});
		const uintBOw6gJR = BigInt("197")
		const addressq3gX8qX = accounts[5]
		const addressVAZIRSO = accounts[1]
		const uintMdceTj = BigInt("1914")
		const addressrDDJIiE = accounts[3]
		const addresseksdC02 = accounts[1]
		const boolipAp2x2 = true
		const uintxk4Yy2B = await LayerxpBQnUMX.getStakesNum.call({from: accounts[0]});
//		const boolDsQEIqp = await LayerxpBQnUMX.transferFrom.call(addressVAZIRSO, addressq3gX8qX, uintBOw6gJR, {from: accounts[4]});
//		const boolSSkkzOB = await LayerxpBQnUMX.transfer.call(addressrDDJIiE, uintMdceTj, {from: accounts[2]});
//		const addressyJcEETf = await LayerxpBQnUMX.transferOwnership.call(addresseksdC02, {from: accounts[4]});
//		const boolngcpnTe = await LayerxpBQnUMX.setIsPaused.call(boolipAp2x2, {from: accounts[4]});

		assert.equal(uintxk4Yy2B, BigInt("1"))
		await expect(LayerxpBQnUMX.transferFrom.call(addressVAZIRSO, addressq3gX8qX, uintBOw6gJR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressw0hXvuz = accounts[3]
		const LayerxnymYW6a = await Layerx.new(addressw0hXvuz, {from: accounts[1]});
		const uintuNQI0Tq = BigInt("1110")
		const addressOhtsoof = accounts[3]
//		await LayerxnymYW6a.f.call({from: accounts[0]});
//		await LayerxnymYW6a.paused.call({from: accounts[1]});
//		const boolRtKVxwi = await LayerxnymYW6a.transfer.call(addressOhtsoof, uintuNQI0Tq, {from: accounts[4]});

		await expect(LayerxnymYW6a.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmcVkqKY = accounts[2]
		const LayerxVcTftuM = await Layerx.new(addressmcVkqKY, {from: accounts[3]});
		const uintOEvHgfC = BigInt("1095")
		const addressctCPYUD = accounts[1]
		const uintly4gyCI = BigInt("1727")
		const addresstji4uKo = accounts[3]
		const boolpNd70e6 = false
		const uintUsdACPh = BigInt("1455")
		const boolMw6Ww5L = await LayerxVcTftuM.approve.call(addressctCPYUD, uintOEvHgfC, {from: accounts[0]});
		const boolFDBrKPL = await LayerxVcTftuM.approve.call(addresstji4uKo, uintly4gyCI, {from: accounts[1]});
		const boolaUxqc8 = await LayerxVcTftuM.setIsPaused.call(boolpNd70e6, {from: accounts[2]});
//		const uintDWsGERv = await LayerxVcTftuM.lock.call(uintUsdACPh, {from: accounts[3]});
//		await LayerxVcTftuM.addStakePayment.call({from: accounts[2]});

		assert.equal(boolFDBrKPL, true)
		assert.equal(boolMw6Ww5L, true)
		await expect(LayerxVcTftuM.lock.call(uintUsdACPh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWjyxzL1 = accounts[0]
		const LayerxaX4zxzD = await Layerx.new(addressWjyxzL1, {from: accounts[4]});
		const addressw2OWGK8 = accounts[3]
		const boolZ5z4yF7 = true
		const uint64lmfv = await LayerxaX4zxzD.getStakesNum.call({from: accounts[0]});
		const addressGnoiFIX = await LayerxaX4zxzD.setNewStakeCreator.call(addressw2OWGK8, {from: accounts[0]});
//		await LayerxaX4zxzD.f.call({from: accounts[4]});
//		const boolqp2BIFD = await LayerxaX4zxzD.setIsPaused.call(boolZ5z4yF7, {from: accounts[4]});

		assert.equal(uint64lmfv, BigInt("1"))
		await expect(LayerxaX4zxzD.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIxE2Yhf = accounts[3]
		const LayerxWUFGIth = await Layerx.new(addressIxE2Yhf, {from: accounts[1]});
		const uintmtlc5Sr = BigInt("585")
//		await LayerxWUFGIth.addStakePayment.call({from: accounts[3]});
//		const uint256nsbxiqy = await LayerxWUFGIth.burn.call(uintmtlc5Sr, {from: accounts[3]});

		await expect(LayerxWUFGIth.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
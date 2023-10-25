const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnglXZMRn = await Weedburn.new({from: accounts[5]});
		const uintU0wTGD5 = BigInt("635")
		const addressfwsdDaE = accounts[3]
		const uintVhq9QO = BigInt("1280")
		const addressZLLlAMz = accounts[5]
		const uintUZGk2TF = BigInt("1123")
		const addressItJ9LWR = accounts[1]
//		const boolYf5Mfv = await WeedburnglXZMRn.transfer.call(addressfwsdDaE, uintU0wTGD5, {from: accounts[2]});
//		const boolraGzj22 = await WeedburnglXZMRn.increaseAllowance.call(addressZLLlAMz, uintVhq9QO, {from: accounts[3]});
//		const uint256jfvTr2U = await WeedburnglXZMRn.burn.call(uintUZGk2TF, {from: accounts[0]});
//		const uint8XzBMcb = await WeedburnglXZMRn.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256E0DvcYy = await WeedburnglXZMRn.balanceOf.call(addressItJ9LWR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnglXZMRn.transfer.call(addressfwsdDaE, uintU0wTGD5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringQn5wZoU = "BCqRz3aNi5EsCkyIjlbb9orvNSRdzCVYSMAHgRo2coHizHAwR2bdp4zBpeT"
		const stringLoQDByl = "smh6QTmTaonaXEeYyeG5skqeDTfhhoEpujbusoC24qhJwHK0wpQoOcqK29qFCzxmEiVYtPBOgNWp4Ane2Suqjai"
		const uintRkpORp = BigInt("169")
		const WeedburnIPWLLX1 = await Weedburn.new(stringQn5wZoU, stringLoQDByl, uintRkpORp, {from: accounts[5]});
		const uintkExKehp = BigInt("1552")
		const addressCPr46iy = accounts[4]
		const uintO0NvT1j = BigInt("76")
		const addressppEPrB5 = accounts[0]
		const addressarpVwEu = accounts[3]
		const boolavosOHx = await WeedburnIPWLLX1.transfer.call(addressCPr46iy, uintkExKehp, {from: "0x0000000000000000000000000000000000000001"});
		const boolIX1TeBr = await WeedburnIPWLLX1.transferFrom.call(addressarpVwEu, addressppEPrB5, uintO0NvT1j, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnC5DlQVc = await Weedburn.new({from: accounts[5]});
		const uintMInpHbt = BigInt("898")
		const addresslZF986 = "0x0000000000000000000000000000000000000001"
		const uint256dsCckEO = await WeedburnC5DlQVc.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnC5DlQVc.enableDevMode.call({from: accounts[4]});
//		const uint256wugDrfq = await WeedburnC5DlQVc.totalSupply.call({from: accounts[3]});
//		await WeedburnC5DlQVc.disableLimitMode.call({from: accounts[4]});
//		const boolvpFnsBz = await WeedburnC5DlQVc.decreaseAllowance.call(addresslZF986, uintMInpHbt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dsCckEO, BigInt("100000000000000000000000"))
		await expect(WeedburnC5DlQVc.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnetB6YZ = await Weedburn.new({from: accounts[5]});
		const uintpe1oefe = BigInt("1104")
		const addressslIfq2z = "0x0000000000000000000000000000000000000001"
		const addressHzexDD0 = accounts[2]
//		await WeedburnnetB6YZ.disableDevMode.call({from: accounts[0]});
//		const boolulpBQaz = await WeedburnnetB6YZ.transferFrom.call(addressHzexDD0, addressslIfq2z, uintpe1oefe, {from: accounts[2]});
//		await WeedburnnetB6YZ.enableDevMode.call({from: accounts[5]});
//		const stringdb95YOh = await WeedburnnetB6YZ.symbol.call({from: accounts[0]});

		await expect(WeedburnnetB6YZ.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnrefsyxx = await Weedburn.new({from: accounts[2]});
		const uintR31mFyK = BigInt("1029")
		const addressCrMnKLd = accounts[2]
		const uintflni6tC = BigInt("58")
		const addressygEyT37 = accounts[2]
		const uintlTake3W = BigInt("1079")
		const addressXlVevBI = accounts[1]
		const booluW1R5I = await Weedburnrefsyxx.increaseAllowance.call(addressCrMnKLd, uintR31mFyK, {from: accounts[2]});
//		const boolF1os6yW = await Weedburnrefsyxx.transfer.call(addressygEyT37, uintflni6tC, {from: accounts[0]});
//		const boolhrFM6An = await Weedburnrefsyxx.transfer.call(addressXlVevBI, uintlTake3W, {from: accounts[1]});
//		await Weedburnrefsyxx.enableLimitMode.call({from: accounts[0]});

		assert.equal(booluW1R5I, true)
		await expect(Weedburnrefsyxx.transfer.call(addressygEyT37, uintflni6tC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDpN75O4 = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressP3xISaJ = accounts[1]
		const addressBkIRoY = accounts[2]
		const addressiAImDgt = accounts[0]
		const uintmP7yqXn = BigInt("1770")
		const addressvNLPXWL = accounts[0]
		const uintvUgJagO = BigInt("1050")
		const addresskSwQcVw = "0x0000000000000000000000000000000000000001"
		const uintBgBHHh9 = BigInt("1661")
		const uint256hM4qme = await WeedburnDpN75O4.balanceOf.call(addressP3xISaJ, {from: accounts[3]});
		const stringItCxNCo = await WeedburnDpN75O4.name.call({from: accounts[2]});
		const uint256rgcz8Gp = await WeedburnDpN75O4.allowance.call(addressiAImDgt, addressBkIRoY, {from: accounts[1]});
		const addresshGEqAvm = await WeedburnDpN75O4.burnFrom.call(addressvNLPXWL, uintmP7yqXn, {from: accounts[2]});
		const boolOyFGnuo = await WeedburnDpN75O4.approve.call(addresskSwQcVw, uintvUgJagO, {from: accounts[4]});
		const uint256JxJJyro = await WeedburnDpN75O4.burn.call(uintBgBHHh9, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnHKPo0Ga = await Weedburn.new({from: accounts[2]});
		const addressTNaPP83 = "0x0000000000000000000000000000000000000001"
		const addresspuyjYh = accounts[0]
		const addresscq13BG3 = accounts[3]
		const addresseYtW4RS = accounts[0]
		const stringcw68hh = await WeedburnHKPo0Ga.symbol.call({from: accounts[2]});
		const stringbpBmXh9 = await WeedburnHKPo0Ga.name.call({from: accounts[5]});
		const uint256s6NkvrS = await WeedburnHKPo0Ga.totalSupply.call({from: accounts[3]});
		const uint256dtkxdm = await WeedburnHKPo0Ga.allowance.call(addresspuyjYh, addressTNaPP83, {from: accounts[0]});
		const uint256JWFqWfW = await WeedburnHKPo0Ga.allowance.call(addresseYtW4RS, addresscq13BG3, {from: accounts[0]});

		assert.equal(stringbpBmXh9, "t.me/burnweed1")
		assert.equal(stringcw68hh, "Weedburn")
		assert.equal(uint256JWFqWfW, BigInt("0"))
		assert.equal(uint256dtkxdm, BigInt("0"))
		assert.equal(uint256s6NkvrS, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnD3Vgccj = await Weedburn.new({from: accounts[2]});
		const addressOpK2UU = accounts[4]
//		await WeedburnD3Vgccj.disableLimitMode.call({from: accounts[5]});
//		const uint256cximl3k = await WeedburnD3Vgccj.totalSupply.call({from: accounts[0]});
//		const stringpGRmhM = await WeedburnD3Vgccj.name.call({from: accounts[3]});
//		const uint256AUUXGEg = await WeedburnD3Vgccj.balanceOf.call(addressOpK2UU, {from: accounts[3]});

		await expect(WeedburnD3Vgccj.disableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnHKPo0Ga = await Weedburn.new({from: accounts[2]});
		const uintOCY6Ytc = BigInt("858")
		const addressh4qqCVe = accounts[5]
		const addressEKRHxL = "0x0000000000000000000000000000000000000001"
		const addresstyD4nq9 = accounts[0]
		const addressd8c2eb3 = accounts[3]
		const addressDCrAmnn = accounts[0]
		const stringcw68hh = await WeedburnHKPo0Ga.symbol.call({from: accounts[2]});
//		const addresssUMF7GP = await WeedburnHKPo0Ga.burnFrom.call(addressh4qqCVe, uintOCY6Ytc, {from: "0x0000000000000000000000000000000000000001"});
//		const stringbpBmXh9 = await WeedburnHKPo0Ga.name.call({from: accounts[5]});
//		const uint256s6NkvrS = await WeedburnHKPo0Ga.totalSupply.call({from: accounts[3]});
//		const uint256dtkxdm = await WeedburnHKPo0Ga.allowance.call(addresstyD4nq9, addressEKRHxL, {from: accounts[0]});
//		const uint256JWFqWfW = await WeedburnHKPo0Ga.allowance.call(addressDCrAmnn, addressd8c2eb3, {from: accounts[0]});

		assert.equal(stringcw68hh, "Weedburn")
		await expect(WeedburnHKPo0Ga.burnFrom.call(addressh4qqCVe, uintOCY6Ytc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnvKijgPj = await Weedburn.new({from: accounts[2]});
		const uintpWioERB = BigInt("577")
		const addressMM35ks1 = accounts[2]
		const uintbewKno4 = BigInt("1211")
		const addressods8XPv = "0x0000000000000000000000000000000000000001"
//		await WeedburnvKijgPj.enableLimitMode.call({from: accounts[5]});
//		const uint256ms3ZArO = await WeedburnvKijgPj.totalSupply.call({from: accounts[5]});
//		const boolw5UwF6p = await WeedburnvKijgPj.approve.call(addressMM35ks1, uintpWioERB, {from: accounts[1]});
//		const addresslJZ40D7 = await WeedburnvKijgPj.burnFrom.call(addressods8XPv, uintbewKno4, {from: accounts[4]});

		await expect(WeedburnvKijgPj.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnrefsyxx = await Weedburn.new({from: accounts[2]});
		const uintH2S0Vkb = BigInt("1029")
		const addressL2JP0vB = accounts[2]
		const uintf1Hrb8q = BigInt("639")
		const addressAuMDI0P = accounts[3]
		const uintRc7y0o = BigInt("58")
		const addressbqCQkn = accounts[2]
		const uintsQyeGJG = BigInt("378")
		const addressjiE53ep = accounts[4]
		const uintArtk6EY = BigInt("1671")
		const addressx3h4ASG = accounts[1]
		const booluW1R5I = await Weedburnrefsyxx.increaseAllowance.call(addressL2JP0vB, uintH2S0Vkb, {from: accounts[2]});
//		const boolAKG0l3O = await Weedburnrefsyxx.decreaseAllowance.call(addressAuMDI0P, uintf1Hrb8q, {from: accounts[2]});
//		const boolF1os6yW = await Weedburnrefsyxx.transfer.call(addressbqCQkn, uintRc7y0o, {from: accounts[0]});
//		const boolZK3BygU = await Weedburnrefsyxx.approve.call(addressjiE53ep, uintsQyeGJG, {from: accounts[2]});
//		const boolhrFM6An = await Weedburnrefsyxx.transfer.call(addressx3h4ASG, uintArtk6EY, {from: accounts[1]});
//		await Weedburnrefsyxx.enableLimitMode.call({from: accounts[0]});

		assert.equal(booluW1R5I, true)
		await expect(Weedburnrefsyxx.decreaseAllowance.call(addressAuMDI0P, uintf1Hrb8q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnrefsyxx = await Weedburn.new({from: accounts[2]});
		const uintSM5l1XP = BigInt("1029")
		const addressexvY2ft = accounts[3]
		const uintaGVbg51 = BigInt("259")
		const uinttwgVlJh = BigInt("58")
		const addressoW9xmBp = accounts[2]
		const uintLbUBdZv = BigInt("1079")
		const addressfWxGHcb = accounts[1]
		const uintoh29iCs = BigInt("1323")
		const addressuAhwCd5 = accounts[5]
		const uintYHh36S = BigInt("1875")
		const addresspYLYeaV = accounts[3]
		const booluW1R5I = await Weedburnrefsyxx.increaseAllowance.call(addressexvY2ft, uintSM5l1XP, {from: accounts[2]});
//		const uint256ZA1aLqY = await Weedburnrefsyxx.burn.call(uintaGVbg51, {from: accounts[3]});
//		const boolF1os6yW = await Weedburnrefsyxx.transfer.call(addressoW9xmBp, uinttwgVlJh, {from: accounts[0]});
//		const stringHqpLKJ5 = await Weedburnrefsyxx.symbol.call({from: accounts[1]});
//		const boolhrFM6An = await Weedburnrefsyxx.transfer.call(addressfWxGHcb, uintLbUBdZv, {from: accounts[1]});
//		const uint256LMfyc76 = await Weedburnrefsyxx.totalSupply.call({from: accounts[2]});
//		const addressaD9Plqn = await Weedburnrefsyxx.burnFrom.call(addressuAhwCd5, uintoh29iCs, {from: accounts[5]});
//		const boolZ7ELiUH = await Weedburnrefsyxx.approve.call(addresspYLYeaV, uintYHh36S, {from: accounts[2]});
//		await Weedburnrefsyxx.enableLimitMode.call({from: accounts[0]});

		assert.equal(booluW1R5I, true)
		await expect(Weedburnrefsyxx.burn.call(uintaGVbg51, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnrefsyxx = await Weedburn.new({from: accounts[2]});
		const uintPRQQjJN = BigInt("1029")
		const addressl9KVlz = accounts[3]
		const uintqk0I6sk = BigInt("570")
		const addressPP4AFW6 = accounts[1]
		const uintzJrzob4 = BigInt("58")
		const addressf9K2Z9I = accounts[2]
		const uintIqqpZQl = BigInt("1073")
		const address3dB3Yo = accounts[1]
		const uintgYmJbMu = BigInt("1323")
		const addressyOgChZ1 = accounts[5]
		const booluW1R5I = await Weedburnrefsyxx.increaseAllowance.call(addressl9KVlz, uintPRQQjJN, {from: accounts[2]});
		const boolESknCvr = await Weedburnrefsyxx.approve.call(addressPP4AFW6, uintqk0I6sk, {from: accounts[4]});
//		const boolF1os6yW = await Weedburnrefsyxx.transfer.call(addressf9K2Z9I, uintzJrzob4, {from: accounts[0]});
//		const boolhrFM6An = await Weedburnrefsyxx.transfer.call(address3dB3Yo, uintIqqpZQl, {from: accounts[1]});
//		const addressaD9Plqn = await Weedburnrefsyxx.burnFrom.call(addressyOgChZ1, uintgYmJbMu, {from: accounts[5]});
//		await Weedburnrefsyxx.enableLimitMode.call({from: accounts[0]});

		assert.equal(boolESknCvr, true)
		assert.equal(booluW1R5I, true)
		await expect(Weedburnrefsyxx.transfer.call(addressf9K2Z9I, uintzJrzob4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnglXZMRn = await Weedburn.new({from: accounts[5]});
		const uintrr1Wooa = BigInt("1304")
		const addressCSKU4fs = accounts[1]
		const addressjevNHw = accounts[2]
		const uintBxg0Z3N = BigInt("635")
		const addressaB8Og80 = accounts[4]
		const uintyT4MQfF = BigInt("1280")
		const addressNZEoIk = accounts[5]
		const uintrPCrJT = BigInt("1123")
		const addressY6z4tAW = accounts[1]
//		const boolT7mD6xv = await WeedburnglXZMRn.transferFrom.call(addressjevNHw, addressCSKU4fs, uintrr1Wooa, {from: accounts[1]});
//		const boolYf5Mfv = await WeedburnglXZMRn.transfer.call(addressaB8Og80, uintBxg0Z3N, {from: accounts[2]});
//		const boolraGzj22 = await WeedburnglXZMRn.increaseAllowance.call(addressNZEoIk, uintyT4MQfF, {from: accounts[3]});
//		const uint256jfvTr2U = await WeedburnglXZMRn.burn.call(uintrPCrJT, {from: accounts[0]});
//		const uint8XzBMcb = await WeedburnglXZMRn.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256E0DvcYy = await WeedburnglXZMRn.balanceOf.call(addressY6z4tAW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnglXZMRn.transferFrom.call(addressjevNHw, addressCSKU4fs, uintrr1Wooa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnglXZMRn = await Weedburn.new({from: accounts[5]});
		const addressZEGqUJ5 = accounts[5]
		const uintrfDMVb6 = BigInt("1304")
		const addressfzWwE2q = accounts[1]
		const addressA4oZtbH = accounts[2]
		const uintIYi0ax7 = BigInt("345")
		const addressnMPJYxe = accounts[4]
		const uintNAco6x8 = BigInt("202")
		const addressvq7MUjF = accounts[3]
		const uintHbIi58E = BigInt("1280")
		const addressYxAj4yf = accounts[5]
		const uintGiDwl9c = BigInt("1123")
		const addressDqILNSC = accounts[1]
		const addressppk2BVq = accounts[4]
		const uint256JwqrqWV = await WeedburnglXZMRn.balanceOf.call(addressZEGqUJ5, {from: accounts[1]});
//		const boolT7mD6xv = await WeedburnglXZMRn.transferFrom.call(addressA4oZtbH, addressfzWwE2q, uintrfDMVb6, {from: accounts[1]});
//		const boolYf5Mfv = await WeedburnglXZMRn.transfer.call(addressnMPJYxe, uintIYi0ax7, {from: accounts[2]});
//		const boolpeTvj7k = await WeedburnglXZMRn.approve.call(addressvq7MUjF, uintNAco6x8, {from: accounts[0]});
//		const boolraGzj22 = await WeedburnglXZMRn.increaseAllowance.call(addressYxAj4yf, uintHbIi58E, {from: accounts[3]});
//		const uint256jfvTr2U = await WeedburnglXZMRn.burn.call(uintGiDwl9c, {from: accounts[0]});
//		const uint8XzBMcb = await WeedburnglXZMRn.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256E0DvcYy = await WeedburnglXZMRn.balanceOf.call(addressDqILNSC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iQEfpo4 = await WeedburnglXZMRn.balanceOf.call(addressppk2BVq, {from: accounts[4]});

		assert.equal(uint256JwqrqWV, BigInt("100000000000000000000000"))
		await expect(WeedburnglXZMRn.transferFrom.call(addressA4oZtbH, addressfzWwE2q, uintrfDMVb6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWejnhEx = await Weedburn.new({from: accounts[3]});
		const uinttWJ0oNG = BigInt("1055")
		const addressTzAirVs = accounts[0]
		const uintKMIRN9s = BigInt("525")
		const addressDzC6z2F = accounts[2]
		const stringPQbV0W = await WeedburnWejnhEx.name.call({from: accounts[4]});
		const uint8t0KtOm = await WeedburnWejnhEx.decimals.call({from: accounts[0]});
		const booleWI0cCc = await WeedburnWejnhEx.increaseAllowance.call(addressTzAirVs, uinttWJ0oNG, {from: accounts[0]});
//		const boolZ426XEw = await WeedburnWejnhEx.transfer.call(addressDzC6z2F, uintKMIRN9s, {from: accounts[2]});

		assert.equal(booleWI0cCc, true)
		assert.equal(stringPQbV0W, "t.me/burnweed1")
		assert.equal(uint8t0KtOm, BigInt("18"))
		await expect(WeedburnWejnhEx.transfer.call(addressDzC6z2F, uintKMIRN9s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnrefsyxx = await Weedburn.new({from: accounts[2]});
		const uintTGh91Sl = BigInt("1342")
		const addresszdo4cZQ = accounts[5]
		const uinthxhY3r = BigInt("1381")
		const addressu3uKehY = "0x0000000000000000000000000000000000000001"
		const addressJtJJkip = accounts[3]
		const uintudPDqFK = BigInt("1086")
		const addressbILQ8sz = accounts[2]
		const boolZH15jvW = await Weedburnrefsyxx.transfer.call(addresszdo4cZQ, uintTGh91Sl, {from: accounts[2]});
//		const booltdHdMS7 = await Weedburnrefsyxx.transferFrom.call(addressJtJJkip, addressu3uKehY, uinthxhY3r, {from: accounts[1]});
//		const boolhrFM6An = await Weedburnrefsyxx.transfer.call(addressbILQ8sz, uintudPDqFK, {from: accounts[1]});
//		await Weedburnrefsyxx.enableLimitMode.call({from: accounts[0]});

		assert.equal(boolZH15jvW, true)
		await expect(Weedburnrefsyxx.transferFrom.call(addressJtJJkip, addressu3uKehY, uinthxhY3r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
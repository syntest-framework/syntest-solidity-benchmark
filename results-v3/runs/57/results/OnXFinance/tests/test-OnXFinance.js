const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringfxLqWPy = "fl5NCDVBwJGTSo6rwzih4wULiQE1x1zxrG37sanJQvmi83aJsOFJe56imbm3XPItGnzuiQJOSJ9MX3phgPOyiI"
		const string0ua7LJ = "MqJiN1hX35KQBBf4YuEJh1E3XH6ChOoIIvI6jbMVAfer5nSO9"
		const uintpt9ovQ8 = BigInt("171")
		const OnXFinancexDcVxui = await OnXFinance.new(stringfxLqWPy, string0ua7LJ, uintpt9ovQ8, {from: accounts[1]});
		const uintuqxCA1 = BigInt("1669")
		const addressxE5thK5 = accounts[3]
		const addressVYSVDn = accounts[0]
		const uintMl9DNGG = BigInt("1445")
		const addressVgNDXHo = "0x0000000000000000000000000000000000000001"
		const uintaJ3CULP = BigInt("1570")
		const addresszRkQpa = accounts[2]
		const uint4kNaFg = BigInt("1672")
		const addressZYPsprF = accounts[4]
		const addressmp85WhW = accounts[0]
		const booliUYT8MB = await OnXFinancexDcVxui.transferFrom.call(addressVYSVDn, addressxE5thK5, uintuqxCA1, {from: accounts[0]});
		const boolJVjFJtH = await OnXFinancexDcVxui.increaseAllowance.call(addressVgNDXHo, uintMl9DNGG, {from: accounts[0]});
		const boolnLaH2gL = await OnXFinancexDcVxui.transfer.call(addresszRkQpa, uintaJ3CULP, {from: accounts[4]});
		const boolfxzcFHU = await OnXFinancexDcVxui.transfer.call(addressZYPsprF, uint4kNaFg, {from: accounts[5]});
		const uintU0V2Bvb = await OnXFinancexDcVxui.balanceOf.call(addressmp85WhW, {from: accounts[3]});

		await expect(OnXFinancexDcVxui.transferFrom.call(addressVYSVDn, addressxE5thK5, uintuqxCA1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringujBnQc0 = "MTYnCvsym56u9kEdzc"
		const stringVcTtGSg = "e2c5hw2zoCpdjDa6agxDDeMG1E"
		const uintaNWdXHx = BigInt("16")
		const OnXFinanceg9YsKxD = await OnXFinance.new(stringujBnQc0, stringVcTtGSg, uintaNWdXHx, {from: accounts[3]});
		const uintIDUpXMl = BigInt("1478")
		const addresss9GVdqe = accounts[1]
		const uintraYZcII = BigInt("363")
		const addresscYuGiej = "0x0000000000000000000000000000000000000001"
		const uint77Md1d = BigInt("163")
		const addressaQRpQMf = accounts[3]
		const uintEQcIXoJ = BigInt("660")
		const addressFDeIJra = "0x0000000000000000000000000000000000000001"
		const addressNOp1irh = accounts[5]
		const addressTWoFJo = "0x0000000000000000000000000000000000000001"
		const boolDmlgaoz = await OnXFinanceg9YsKxD.transfer.call(addresss9GVdqe, uintIDUpXMl, {from: accounts[0]});
		const boolkI69U2V = await OnXFinanceg9YsKxD.approve.call(addresscYuGiej, uintraYZcII, {from: accounts[2]});
		const boolvTDqVhM = await OnXFinanceg9YsKxD.approve.call(addressaQRpQMf, uint77Md1d, {from: accounts[0]});
		const boolQNWvo3K = await OnXFinanceg9YsKxD.increaseAllowance.call(addressFDeIJra, uintEQcIXoJ, {from: accounts[4]});
		const uintikAnXRc = await OnXFinanceg9YsKxD.allowance.call(addressTWoFJo, addressNOp1irh, {from: accounts[5]});

		await expect(OnXFinanceg9YsKxD.transfer.call(addresss9GVdqe, uintIDUpXMl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZflqNl = "5Mxe11TwFEIfODuQHjJBCPfNZ4V9VCsVaZkNTKQzKpD7q5AL1lT6QIOBAtEB8cRIh3UY35QEBvJ1OeJWocd"
		const stringUIeRzHo = "tneTLDpsvqaBjtoVFyrFAC8ullG13"
		const uintlWdr2rJ = BigInt("1072")
		const OnXFinanceSKz0jYI = await OnXFinance.new(stringZflqNl, stringUIeRzHo, uintlWdr2rJ, {from: accounts[1]});
		const uintCpIMOru = BigInt("1776")
		const addressjEP5N6 = accounts[3]
		const uintvFQ6OIn = BigInt("1429")
		const addressRBlkoFg = accounts[0]
		const uintRKPCKJo = BigInt("1230")
		const addresszW1JeAh = accounts[4]
		const addressAg6Xfd7 = "0x0000000000000000000000000000000000000001"
		const addressSFWfEos = accounts[4]
		const uintuTcBlnO = BigInt("1297")
		const addressWgvRvBG = accounts[5]
		const boolN5Ht7jF = await OnXFinanceSKz0jYI.approve.call(addressjEP5N6, uintCpIMOru, {from: accounts[1]});
		const stringHhCJFKA = await OnXFinanceSKz0jYI.symbol.call({from: accounts[2]});
		const boolSk1rngo = await OnXFinanceSKz0jYI.increaseAllowance.call(addressRBlkoFg, uintvFQ6OIn, {from: accounts[0]});
		const boolmnJvmw6 = await OnXFinanceSKz0jYI.transfer.call(addresszW1JeAh, uintRKPCKJo, {from: accounts[2]});
		const uintm1JxL1 = await OnXFinanceSKz0jYI.allowance.call(addressSFWfEos, addressAg6Xfd7, {from: accounts[3]});
		const boolPY3v2m = await OnXFinanceSKz0jYI.transfer.call(addressWgvRvBG, uintuTcBlnO, {from: accounts[1]});

		assert.equal(boolN5Ht7jF, true)
		assert.equal(stringHhCJFKA, "tneTLDpsvqaBjtoVFyrFAC8ullG13")
		await expect(OnXFinanceSKz0jYI.increaseAllowance.call(addressRBlkoFg, uintvFQ6OIn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQWhOHUI = "AffedDWtT0vQ4DJakhga6jV0Fh0klJfQuijSxji2Q9x2gRQUXlLWgz7barUjEf59CWvxUxdtIfxGdfhkNCKD4F88E"
		const stringiX7YP50 = "D9aUf5MOg2hdWBlQKEvhYcmfi7HxZRGlkdsCX3VUcyyC8oClOdCdYRyFoE05OkJD2VDXpP5zQURMbGOhh6TsWu2Wboob"
		const uint5V31Dh = BigInt("56")
		const OnXFinancec8AfUDz = await OnXFinance.new(stringQWhOHUI, stringiX7YP50, uint5V31Dh, {from: accounts[0]});
		const uintrz9mXfD = BigInt("1540")
		const addressrGLmF6g = "0x0000000000000000000000000000000000000001"
		const addressQ36GjFz = accounts[4]
		const uintq18YGuE = BigInt("867")
		const addressuFXkHfH = accounts[1]
		const addressY4oS4qY = accounts[3]
		const addresstPGaRh0 = accounts[4]
		const uintVCK7C8I = BigInt("740")
		const addresshHJI6S1 = accounts[1]
		const uintCE32a5n = BigInt("1475")
		const addressucTjdAH = accounts[4]
		const boolzqBzXwB = await OnXFinancec8AfUDz.transferFrom.call(addressQ36GjFz, addressrGLmF6g, uintrz9mXfD, {from: "0x0000000000000000000000000000000000000001"});
		const boolTI4BOrv = await OnXFinancec8AfUDz.approve.call(addressuFXkHfH, uintq18YGuE, {from: accounts[2]});
		const uintLyBpaQq = await OnXFinancec8AfUDz.allowance.call(addresstPGaRh0, addressY4oS4qY, {from: accounts[1]});
		const uint0Ck2Ii = await OnXFinancec8AfUDz.totalSupply.call({from: accounts[3]});
		const boolgYnvwwR = await OnXFinancec8AfUDz.approve.call(addresshHJI6S1, uintVCK7C8I, {from: accounts[1]});
		const boolLWPCvN0 = await OnXFinancec8AfUDz.transfer.call(addressucTjdAH, uintCE32a5n, {from: accounts[5]});

		await expect(OnXFinancec8AfUDz.transferFrom.call(addressQ36GjFz, addressrGLmF6g, uintrz9mXfD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uintbw9djza = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uintbw9djza, {from: accounts[0]});
		const uintoBjQDkx = BigInt("532")
		const addressOp9EAbB = accounts[5]
		const uintuT2aADh = BigInt("2004")
		const addressMDHAKd = "0x0000000000000000000000000000000000000001"
		const boolhaesqpA = await OnXFinanceQj9GfS5.approveAndCall.call(addressOp9EAbB, uintoBjQDkx, {from: accounts[0]});
		const stringqTpxVxS = await OnXFinanceQj9GfS5.symbol.call({from: accounts[3]});
		const boolU584MAG = await OnXFinanceQj9GfS5.transfer.call(addressMDHAKd, uintuT2aADh, {from: accounts[4]});

		assert.equal(boolhaesqpA, true)
		assert.equal(stringqTpxVxS, "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp")
		await expect(OnXFinanceQj9GfS5.transfer.call(addressMDHAKd, uintuT2aADh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringrznOIi7 = "UaZHQpRLhhkdWzBKvh9gPSukTAOrZd2VxyAG9yI8NGu0PDAV"
		const stringog8yb3K = "DUfscin1"
		const uint1bPGUS = BigInt("595")
		const OnXFinanceWTMeirl = await OnXFinance.new(stringrznOIi7, stringog8yb3K, uint1bPGUS, {from: "0x0000000000000000000000000000000000000001"});
		const addressWSJ2rmV = accounts[4]
		const addressrGtEmI9 = accounts[3]
		const uintTysZbKK = BigInt("1366")
		const addressPqWRpbs = "0x0000000000000000000000000000000000000001"
		const addresspNXZsiI = accounts[2]
		const uintAqFCcNq = BigInt("1876")
		const addressXc35GjG = accounts[4]
		const uintJ3BKzkR = BigInt("1209")
		const addresswcudp6R = accounts[1]
		const uintlrQ1sPE = BigInt("1680")
		const addressC96RmJs = accounts[1]
		const addressFmrqO6h = accounts[4]
		const uintxYrb8WJ = BigInt("714")
		const addressdOzo4d = accounts[3]
		const uintC2NZ0kO = await OnXFinanceWTMeirl.allowance.call(addressrGtEmI9, addressWSJ2rmV, {from: accounts[1]});
		const boolU3iJ0Yb = await OnXFinanceWTMeirl.transferFrom.call(addresspNXZsiI, addressPqWRpbs, uintTysZbKK, {from: accounts[3]});
		const boolgc90oh1 = await OnXFinanceWTMeirl.approve.call(addressXc35GjG, uintAqFCcNq, {from: accounts[5]});
		const boold5wIGii = await OnXFinanceWTMeirl.increaseAllowance.call(addresswcudp6R, uintJ3BKzkR, {from: accounts[2]});
		const boolkTr7tvQ = await OnXFinanceWTMeirl.transferFrom.call(addressFmrqO6h, addressC96RmJs, uintlrQ1sPE, {from: accounts[5]});
		const booliO7dLJk = await OnXFinanceWTMeirl.transfer.call(addressdOzo4d, uintxYrb8WJ, {from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uintpD2OBOH = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uintpD2OBOH, {from: accounts[0]});
		const uintAmQWKZ6 = BigInt("532")
		const addressuNnrEB3 = accounts[5]
		const addressf4UcSH9 = "0x0000000000000000000000000000000000000001"
		const addressB90L3tV = accounts[3]
		const boolhaesqpA = await OnXFinanceQj9GfS5.approveAndCall.call(addressuNnrEB3, uintAmQWKZ6, {from: accounts[0]});
		const uintVndlkoP = await OnXFinanceQj9GfS5.balanceOf.call(addressf4UcSH9, {from: accounts[2]});
		const stringqTpxVxS = await OnXFinanceQj9GfS5.symbol.call({from: accounts[3]});
		const bool4b1jVH = await OnXFinanceQj9GfS5.transferownership.call(addressB90L3tV, {from: accounts[0]});

		assert.equal(bool4b1jVH, true)
		assert.equal(boolhaesqpA, true)
		assert.equal(stringqTpxVxS, "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp")
		assert.equal(uintVndlkoP, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uinthNG3xq = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uinthNG3xq, {from: accounts[0]});
		const uintypvj4j = BigInt("1899")
		const addresskJ71Qn = accounts[3]
		const uintpdPoL7U = BigInt("2004")
		const addressZMbzK3m = "0x00000000000000000000000000000000000000-1"
		const stringqTpxVxS = await OnXFinanceQj9GfS5.symbol.call({from: accounts[3]});
		const booljAxFeUZ = await OnXFinanceQj9GfS5.approve.call(addresskJ71Qn, uintypvj4j, {from: accounts[3]});
		const boolU584MAG = await OnXFinanceQj9GfS5.transfer.call(addressZMbzK3m, uintpdPoL7U, {from: accounts[4]});
		const stringSP5Sdo = await OnXFinanceQj9GfS5.symbol.call({from: accounts[4]});

		assert.equal(booljAxFeUZ, true)
		assert.equal(stringqTpxVxS, "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp")
		await expect(OnXFinanceQj9GfS5.transfer.call(addressZMbzK3m, uintpdPoL7U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uintNVWwD1r = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uintNVWwD1r, {from: accounts[0]});
		const uintBQsRWK9 = BigInt("211")
		const addressUpUrlUe = accounts[0]
		const addressThpJdOl = accounts[2]
		const uintKVS0YhQ = BigInt("283")
		const addressUMGHVA0 = accounts[6]
		const uintGtx3S5S = BigInt("1")
		const addressSaZaDww = accounts[2]
		const addressAnpus3B = accounts[3]
		const boolukoW3jZ = await OnXFinanceQj9GfS5.transferFrom.call(addressThpJdOl, addressUpUrlUe, uintBQsRWK9, {from: accounts[2]});
		const boolhaesqpA = await OnXFinanceQj9GfS5.approveAndCall.call(addressUMGHVA0, uintKVS0YhQ, {from: accounts[0]});
		const boolagSpe0 = await OnXFinanceQj9GfS5.transferFrom.call(addressAnpus3B, addressSaZaDww, uintGtx3S5S, {from: accounts[4]});

		await expect(OnXFinanceQj9GfS5.transferFrom.call(addressThpJdOl, addressUpUrlUe, uintBQsRWK9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uintS9NJDc1 = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uintS9NJDc1, {from: accounts[0]});
		const uintXw1Vu1u = BigInt("0")
		const addressEdcNVAl = "0x0000000000000000000000000000000000000001"
		const boolU584MAG = await OnXFinanceQj9GfS5.transfer.call(addressEdcNVAl, uintXw1Vu1u, {from: accounts[4]});

		assert.equal(boolU584MAG, true)
	});

	it('test for OnXFinance', async () => {
		const stringpQvNPpb = "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN"
		const stringbMQh46H = "5lPCC8e3ioQmC4xdHUaYoufDXi3mA8598mxqSjRaCDpuq6EW4uXME14FkQp"
		const uintFKyh2zf = BigInt("79")
		const OnXFinanceQj9GfS5 = await OnXFinance.new(stringpQvNPpb, stringbMQh46H, uintFKyh2zf, {from: accounts[0]});
		const uintbQHkJ1r = BigInt("0")
		const addressvN1Wzr1 = accounts[5]
		const uintPXWnPQw = BigInt("541")
		const addresszPYRsrW = accounts[2]
		const uintKCgmZhE = BigInt("402")
		const addressn7ykfYY = accounts[1]
		const addressMEDMOxp = accounts[0]
		const boolhaesqpA = await OnXFinanceQj9GfS5.approveAndCall.call(addressvN1Wzr1, uintbQHkJ1r, {from: accounts[0]});
		const stringZBkVUMI = await OnXFinanceQj9GfS5.name.call({from: accounts[2]});
		const boolkDVtYlj = await OnXFinanceQj9GfS5.transfer.call(addresszPYRsrW, uintPXWnPQw, {from: accounts[2]});
		const boolouK8sMK = await OnXFinanceQj9GfS5.transferFrom.call(addressMEDMOxp, addressn7ykfYY, uintKCgmZhE, {from: accounts[2]});

		assert.equal(boolhaesqpA, true)
		assert.equal(stringZBkVUMI, "5hQSQwRntm2IsnYY1JgF2zP1LLQnRWN2BIkCCbS0PTzA0BvOpphs6sFGN")
		await expect(OnXFinanceQj9GfS5.transfer.call(addresszPYRsrW, uintPXWnPQw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
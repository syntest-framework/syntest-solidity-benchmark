const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringM0yYDOZ = "3vGXvHUUD851oSK"
		const stringInA8nrP = "XvrPtBkxBqtuYIwhLCxOk8HmoFswn4"
		const uintfDHXQG8 = BigInt("1845")
		const OnXFinanceMe5yzf2 = await OnXFinance.new(stringM0yYDOZ, stringInA8nrP, uintfDHXQG8, {from: accounts[4]});
		const addressg4VcUbt = accounts[2]
		const uintCnyfYyc = BigInt("264")
		const addressM49TGMG = accounts[5]
		const uintKJd5lIZ = BigInt("2037")
		const addressvAgmjWp = accounts[1]
		const uintLwmqQhd = await OnXFinanceMe5yzf2.balanceOf.call(addressg4VcUbt, {from: accounts[4]});
		const uintu1yg3Cl = await OnXFinanceMe5yzf2.totalSupply.call({from: accounts[1]});
		const boolXZQhbhT = await OnXFinanceMe5yzf2.transfer.call(addressM49TGMG, uintCnyfYyc, {from: accounts[0]});
		const boolTolItbE = await OnXFinanceMe5yzf2.transfer.call(addressvAgmjWp, uintKJd5lIZ, {from: accounts[4]});

		assert.equal(uintLwmqQhd, BigInt("0"))
		assert.equal(uintu1yg3Cl, BigInt("1845000000000000000000"))
		await expect(OnXFinanceMe5yzf2.transfer.call(addressM49TGMG, uintCnyfYyc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintQmjzaCX = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintQmjzaCX, {from: accounts[1]});
		const uintDI96Ri0 = BigInt("451")
		const addresslSArWHn = accounts[2]
		const stringJRyzdT8 = await OnXFinancealVnIhP.symbol.call({from: accounts[3]});
		const uint8D1IEzNB = await OnXFinancealVnIhP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWSjWgE9 = await OnXFinancealVnIhP.decreaseAllowance.call(addresslSArWHn, uintDI96Ri0, {from: accounts[4]});

		assert.equal(stringJRyzdT8, "a9xh23ajy3JYcjJ")
		assert.equal(uint8D1IEzNB, BigInt("18"))
		await expect(OnXFinancealVnIhP.decreaseAllowance.call(addresslSArWHn, uintDI96Ri0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringce1esfW = "hAwaVhf0OtxUMdIGvaL1ax37zwQtQoEGVt0d6mu91ynvC7oh8S2lILVH7Ke3LWVROJhzd7IwTb2hYROWQl6EUv5BY5qJ9folG"
		const stringkwBbjFC = "tPEVG61efv8RiDpWNFQTa3qxRvEpJFFQRoKV1rqKD6QUbj11tkq2IJNIyE1dkReIw7VqS8yeiroLDkcFa"
		const uintV7b3QYj = BigInt("70")
		const OnXFinanceYw8Y5uc = await OnXFinance.new(stringce1esfW, stringkwBbjFC, uintV7b3QYj, {from: accounts[2]});
		const uintHG94068 = BigInt("91")
		const addressRFLuCjq = accounts[1]
		const addressP46Gpu = accounts[1]
		const uinthq88vhm = BigInt("1020")
		const addressLs8zzP = accounts[0]
		const uintVdzOy4 = BigInt("1121")
		const addressf59V2w9 = "0x0000000000000000000000000000000000000001"
		const boolM3Xfe7t = await OnXFinanceYw8Y5uc.transferFrom.call(addressP46Gpu, addressRFLuCjq, uintHG94068, {from: accounts[2]});
		const boolrE4Qx9M = await OnXFinanceYw8Y5uc.approve.call(addressLs8zzP, uinthq88vhm, {from: accounts[0]});
		const bools8uExXW = await OnXFinanceYw8Y5uc.transfer.call(addressf59V2w9, uintVdzOy4, {from: accounts[2]});

		await expect(OnXFinanceYw8Y5uc.transferFrom.call(addressP46Gpu, addressRFLuCjq, uintHG94068, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringMo6WNWT = "R"
		const stringsnVrXOn = "1icmwaNR4ARn9WNhVSsd8tntiTIA6ik2GPnIQG"
		const uintDBY3kcJ = BigInt("242")
		const OnXFinancegEdirf1 = await OnXFinance.new(stringMo6WNWT, stringsnVrXOn, uintDBY3kcJ, {from: accounts[1]});
		const addressB25JIak = accounts[2]
		const uintcSjkwQ5 = BigInt("645")
		const addresscmXllJo = accounts[3]
		const uint8OIIhDig = await OnXFinancegEdirf1.decimals.call({from: accounts[5]});
		const stringxCCEprB = await OnXFinancegEdirf1.name.call({from: accounts[2]});
		const uintME8y0VV = await OnXFinancegEdirf1.balanceOf.call(addressB25JIak, {from: accounts[0]});
		const boolzVSgT7h = await OnXFinancegEdirf1.approve.call(addresscmXllJo, uintcSjkwQ5, {from: accounts[2]});
		const stringr4FRJ1 = await OnXFinancegEdirf1.symbol.call({from: accounts[1]});

		assert.equal(boolzVSgT7h, true)
		assert.equal(stringr4FRJ1, "1icmwaNR4ARn9WNhVSsd8tntiTIA6ik2GPnIQG")
		assert.equal(stringxCCEprB, "R")
		assert.equal(uint8OIIhDig, BigInt("18"))
		assert.equal(uintME8y0VV, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringff77D2 = "gI47k5IAkA0fNsQgsY1dctK3JqcXmiEIseAlSnD2St2tvJRC06PJ"
		const stringP41Gxb2 = "UlVxv4xqH"
		const uintNGHL1vn = BigInt("1864")
		const OnXFinanceEW15ehu = await OnXFinance.new(stringff77D2, stringP41Gxb2, uintNGHL1vn, {from: "0x0000000000000000000000000000000000000001"});
		const addressw8IIwgF = accounts[4]
		const uintl823AFv = BigInt("1277")
		const addressxPpIgZ1 = accounts[3]
		const uintLaItpXp = BigInt("1209")
		const addressVuyOOkc = accounts[5]
		const boolyRpjVwR = await OnXFinanceEW15ehu.transferownership.call(addressw8IIwgF, {from: accounts[2]});
		const boolGBDzIfL = await OnXFinanceEW15ehu.approveAndCall.call(addressxPpIgZ1, uintl823AFv, {from: accounts[1]});
		const boolFZZFgS1 = await OnXFinanceEW15ehu.decreaseAllowance.call(addressVuyOOkc, uintLaItpXp, {from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringM0yYDOZ = "3vGXvHUUD851oSK"
		const stringInA8nrP = "XvrPtBkxBqtuYIwhLCxOk8HmoFswn4"
		const uintRKcitXN = BigInt("1845")
		const OnXFinanceMe5yzf2 = await OnXFinance.new(stringM0yYDOZ, stringInA8nrP, uintRKcitXN, {from: accounts[4]});
		const addressr3Zv5l = accounts[2]
		const uintEnodYxl = BigInt("2037")
		const addressxt9RZUM = accounts[1]
		const uintdyYzs0A = BigInt("1291")
		const addressVphxIMM = accounts[3]
		const uinto3tHVVt = BigInt("925")
		const addresstcDiAYk = accounts[4]
		const uintLwmqQhd = await OnXFinanceMe5yzf2.balanceOf.call(addressr3Zv5l, {from: accounts[4]});
		const uintu1yg3Cl = await OnXFinanceMe5yzf2.totalSupply.call({from: accounts[1]});
		const boolTolItbE = await OnXFinanceMe5yzf2.transfer.call(addressxt9RZUM, uintEnodYxl, {from: accounts[4]});
		const boolYkcGRYX = await OnXFinanceMe5yzf2.transfer.call(addressVphxIMM, uintdyYzs0A, {from: accounts[2]});
		const boolHiKm8kv = await OnXFinanceMe5yzf2.approve.call(addresstcDiAYk, uinto3tHVVt, {from: accounts[2]});

		assert.equal(boolTolItbE, true)
		assert.equal(uintLwmqQhd, BigInt("0"))
		assert.equal(uintu1yg3Cl, BigInt("1845000000000000000000"))
		await expect(OnXFinanceMe5yzf2.transfer.call(addressVphxIMM, uintdyYzs0A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringYElKRfg = "Uui43StX130nUlmqataz9US2rMGIoA5XSAsjPRyWrmmVp6aYmwCHS1"
		const stringv7Ioymn = "GWVPvn5LIJOlYizPRG7AWzXTn0"
		const uintfZvCJD2 = BigInt("59")
		const OnXFinancepp8dsU0 = await OnXFinance.new(stringYElKRfg, stringv7Ioymn, uintfZvCJD2, {from: accounts[0]});
		const addressz13q37D = accounts[5]
		const uintiyknBYL = BigInt("1268")
		const addressPueiq2w = accounts[4]
		const addresscarNqfj = accounts[2]
		const addressCvIRIN = accounts[3]
		const addressnSlzlp9 = accounts[0]
		const boolqaipVg8 = await OnXFinancepp8dsU0.transferownership.call(addressz13q37D, {from: accounts[2]});
		const boolCKY0vp4 = await OnXFinancepp8dsU0.transferFrom.call(addresscarNqfj, addressPueiq2w, uintiyknBYL, {from: accounts[5]});
		const uintrpRUpxS = await OnXFinancepp8dsU0.allowance.call(addressnSlzlp9, addressCvIRIN, {from: accounts[4]});

		await expect(OnXFinancepp8dsU0.transferownership.call(addressz13q37D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintLS7hBZY = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintLS7hBZY, {from: accounts[1]});
		const uintZBkB7Z2 = BigInt("575")
		const addressGzvaBcU = accounts[3]
		const boollTPc2EA = await OnXFinancealVnIhP.approveAndCall.call(addressGzvaBcU, uintZBkB7Z2, {from: accounts[0]});
		const stringJRyzdT8 = await OnXFinancealVnIhP.symbol.call({from: accounts[3]});
		const uint8D1IEzNB = await OnXFinancealVnIhP.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancealVnIhP.approveAndCall.call(addressGzvaBcU, uintZBkB7Z2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintcd1leo5 = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintcd1leo5, {from: accounts[1]});
		const uintkJlKNvf = BigInt("528")
		const addressUrW5u5y = accounts[1]
		const uintzGEYYP9 = BigInt("8")
		const addresscU8dyl = accounts[1]
		const strings4lUXDQ = await OnXFinancealVnIhP.symbol.call({from: accounts[4]});
		const boolXCeZkUf = await OnXFinancealVnIhP.approveAndCall.call(addressUrW5u5y, uintkJlKNvf, {from: accounts[1]});
		const boole9gX9M = await OnXFinancealVnIhP.transfer.call(addresscU8dyl, uintzGEYYP9, {from: accounts[2]});

		assert.equal(boolXCeZkUf, true)
		assert.equal(strings4lUXDQ, "a9xh23ajy3JYcjJ")
		await expect(OnXFinancealVnIhP.transfer.call(addresscU8dyl, uintzGEYYP9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintN8n0xQR = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintN8n0xQR, {from: accounts[1]});
		const uintg1HMTYi = BigInt("0")
		const addresslXu1g2m = accounts[0]
		const boole9gX9M = await OnXFinancealVnIhP.transfer.call(addresslXu1g2m, uintg1HMTYi, {from: accounts[2]});

		assert.equal(boole9gX9M, true)
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintbQWdcyc = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintbQWdcyc, {from: accounts[1]});
		const addressjys8VhF = accounts[0]
		const uintD6IQqe9 = BigInt("8")
		const addressVfI1MHl = accounts[1]
		const boolm3ZGq0 = await OnXFinancealVnIhP.transferownership.call(addressjys8VhF, {from: accounts[1]});
		const boole9gX9M = await OnXFinancealVnIhP.transfer.call(addressVfI1MHl, uintD6IQqe9, {from: accounts[2]});

		assert.equal(boolm3ZGq0, true)
		await expect(OnXFinancealVnIhP.transfer.call(addressVfI1MHl, uintD6IQqe9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringN03ABjS = "DU3mCoYd82gV285JejJJo1Ggq"
		const stringMgbxBUH = "a9xh23ajy3JYcjJ"
		const uintBpMbxwq = BigInt("130")
		const OnXFinancealVnIhP = await OnXFinance.new(stringN03ABjS, stringMgbxBUH, uintBpMbxwq, {from: accounts[1]});
		const uintBTde5L = BigInt("1095")
		const addressDHNDGr = accounts[5]
		const uintrSugZkZ = BigInt("0")
		const addressWMHKi48 = accounts[1]
		const addressT1QrCng = accounts[0]
		const uintZqcG40A = BigInt("1920")
		const addressfPMzCBE = accounts[4]
		const boolsbdtoM = await OnXFinancealVnIhP.approve.call(addressDHNDGr, uintBTde5L, {from: accounts[3]});
		const boolXCeZkUf = await OnXFinancealVnIhP.approveAndCall.call(addressWMHKi48, uintrSugZkZ, {from: accounts[1]});
		const uintOmFaYL4 = await OnXFinancealVnIhP.balanceOf.call(addressT1QrCng, {from: accounts[2]});
		const boolDWAPIpy = await OnXFinancealVnIhP.transfer.call(addressfPMzCBE, uintZqcG40A, {from: accounts[2]});

		assert.equal(boolXCeZkUf, true)
		assert.equal(boolsbdtoM, true)
		assert.equal(uintOmFaYL4, BigInt("0"))
		await expect(OnXFinancealVnIhP.transfer.call(addressfPMzCBE, uintZqcG40A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
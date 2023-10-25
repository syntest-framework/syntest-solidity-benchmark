const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicBUT2VXd = await Dynamic.new({from: accounts[5]});
		const uintjoeesLD = BigInt("1885")
		const stringf6jtrLG = "2x3rT433Hzj57W7H1IAPdftiR8znF1PvkeaRv1GY6Hty"
		const uintPLG5Rk = BigInt("376")
		const uintPisgqaN = BigInt("1115")
		const stringE7dTlt0 = "gMHK5IOr1LDzFSjACA3OVQ9lv0cnrHzhKyVXkvQOllfz1wFhIswg"
		const uinteaKrGga = BigInt("799")
		const uintWgUahvM = BigInt("870")
		const stringaeCxZIS = "HHe36OAIC7rDt28Rc7SbB8TP2PeWQDaQi7xjFkuPf0XFqHdeb3TQW1nyyiGSGb42xAXIgcZ44R6W5QGs5Al7Yxj"
		const uinte4Aibjy = BigInt("770")
		const uintWaiEOLM = BigInt("686")
		const stringEvt5SyC = "sLzqDAxjX9etOxdNayNMTLmW7n3JqioVWSVl3oxL39c0u"
		const uintPs37t4q = BigInt("217")
		const boolk5ozeKu = await DynamicBUT2VXd.yolo.call(uintPLG5Rk, stringf6jtrLG, uintjoeesLD, {from: accounts[5]});
		const boolsPkllX3 = await DynamicBUT2VXd.yolo.call(uinteaKrGga, stringE7dTlt0, uintPisgqaN, {from: accounts[0]});
		const boolBDxtX1w = await DynamicBUT2VXd.yolo.call(uinte4Aibjy, stringaeCxZIS, uintWgUahvM, {from: accounts[1]});
		const boolVgGIWcv = await DynamicBUT2VXd.yolo.call(uintPs37t4q, stringEvt5SyC, uintWaiEOLM, {from: accounts[4]});

		assert.equal(boolBDxtX1w, true)
		assert.equal(boolVgGIWcv, true)
		assert.equal(boolk5ozeKu, true)
		assert.equal(boolsPkllX3, true)
	});

	it('test for Dynamic', async () => {
		const DynamicPvNPoAf = await Dynamic.new({from: accounts[2]});
		const uintsG54YgT = BigInt("975")
		const stringmY7PX01 = "myCH90g6UwRHL3OnDvH5tRFwyESRbMh9lYOiSgj3Mr4tWkFm1AQ8wXHvy9DwJjfTNvqghxFDUllXxovSLq"
		const uintnfsrtk0 = BigInt("1408")
		const uintGHCl2d9 = BigInt("1079")
		const stringQ7ctgjP = "TWLxqCWhslXzodKvzYGicfU2KWd2vahem"
		const uintXFrtl3v = BigInt("491")
		const boolXLqLYc = await DynamicPvNPoAf.echidna_test.call({from: accounts[4]});
		const boollWo1EUK = await DynamicPvNPoAf.yolo.call(uintnfsrtk0, stringmY7PX01, uintsG54YgT, {from: accounts[4]});
		const boolPiSWqR = await DynamicPvNPoAf.echidna_test.call({from: accounts[3]});
		const booln6ZxIA = await DynamicPvNPoAf.echidna_test.call({from: accounts[0]});
		const boolEfQ9y59 = await DynamicPvNPoAf.yolo.call(uintXFrtl3v, stringQ7ctgjP, uintGHCl2d9, {from: accounts[4]});

		assert.equal(boolEfQ9y59, true)
		assert.equal(boolPiSWqR, true)
		assert.equal(boolXLqLYc, true)
		assert.equal(boollWo1EUK, true)
		assert.equal(booln6ZxIA, true)
	});

	it('test for Dynamic', async () => {
		const DynamicaM6DR6k = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHgtCad1 = BigInt("1823")
		const stringlZYo0xD = "qA9YL7XKRUamFJQA3OKG2AJl3eCH15dWVkxomWa1VB7UzSRgtGpC29gASBakbK8She"
		const uintD7g8i0f = BigInt("333")
		const uintdIFGKK3 = BigInt("1601")
		const stringW4Tckz = "RvdYIKO63nJiMldX6OBeOa0xSLFDtTpJkFOwo5kJOeil1pJV8pEwg7ol5btHdaMZfYK"
		const uintX8MSt5k = BigInt("704")
		const boolvajbDUQ = await DynamicaM6DR6k.yolo.call(uintD7g8i0f, stringlZYo0xD, uintHgtCad1, {from: accounts[2]});
		const boolfOj1cCf = await DynamicaM6DR6k.yolo.call(uintX8MSt5k, stringW4Tckz, uintdIFGKK3, {from: accounts[1]});
		const booleHXkOuh = await DynamicaM6DR6k.echidna_test.call({from: accounts[4]});
	});
})
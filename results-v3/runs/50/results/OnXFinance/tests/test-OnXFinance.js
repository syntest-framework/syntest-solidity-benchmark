const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringlkpMF9b = "4wQqn7xCwsb88FHJcnle9BhGGwPeIs4cKIzLU6TsJ7HK4OWK8mXSUI5PRAYcsqT81M732VbdUoVtseK"
		const stringlsbXp8q = "pG1txW3P1n"
		const uintAdlpcEX = BigInt("1135")
		const OnXFinanceieqKfPL = await OnXFinance.new(stringlkpMF9b, stringlsbXp8q, uintAdlpcEX, {from: accounts[0]});
		const uintexQ1XFH = BigInt("1103")
		const addressPmShRtY = accounts[2]
		const uintxOxchIT = BigInt("187")
		const addressvkX9NxS = accounts[2]
		const stringlZSfo5U = await OnXFinanceieqKfPL.symbol.call({from: accounts[3]});
		const boolyYwc2I = await OnXFinanceieqKfPL.increaseAllowance.call(addressPmShRtY, uintexQ1XFH, {from: accounts[0]});
		const boolK70p3mK = await OnXFinanceieqKfPL.transfer.call(addressvkX9NxS, uintxOxchIT, {from: accounts[2]});

		assert.equal(stringlZSfo5U, "pG1txW3P1n")
		await expect(OnXFinanceieqKfPL.increaseAllowance.call(addressPmShRtY, uintexQ1XFH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkU3v6lm = "JRfCGVMvUaAvOTjdgaOKtwZSylFWFgFcgbRMW"
		const stringniFaPFX = "Dz2y5BkusKlFm63aTuKo8VkgrLmobA"
		const uintywtEnxP = BigInt("485")
		const OnXFinanceDEt06jg = await OnXFinance.new(stringkU3v6lm, stringniFaPFX, uintywtEnxP, {from: accounts[1]});
		const uintzZFtRc2 = BigInt("498")
		const addressKbZajQX = accounts[0]
		const uintblsmDKs = BigInt("885")
		const addressAhOBOjy = accounts[1]
		const addressk3Buq8a = "0x0000000000000000000000000000000000000001"
		const boolFsnYsBM = await OnXFinanceDEt06jg.approve.call(addressKbZajQX, uintzZFtRc2, {from: accounts[5]});
		const uintaYllX7o = await OnXFinanceDEt06jg.totalSupply.call({from: accounts[4]});
		const boolS8RuH19 = await OnXFinanceDEt06jg.increaseAllowance.call(addressAhOBOjy, uintblsmDKs, {from: accounts[4]});
		const uintVOFJ6uN = await OnXFinanceDEt06jg.balanceOf.call(addressk3Buq8a, {from: accounts[0]});

		assert.equal(boolFsnYsBM, true)
		assert.equal(uintaYllX7o, BigInt("485000000000000000000"))
		await expect(OnXFinanceDEt06jg.increaseAllowance.call(addressAhOBOjy, uintblsmDKs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintY3BY1w = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintY3BY1w, {from: accounts[5]});
		const uintkY9Eob = BigInt("658")
		const addresshhyiSg = accounts[2]
		const uintUV1LBq4 = BigInt("1678")
		const addressZjn0KM9 = accounts[2]
		const stringIknX7X = await OnXFinanceJ9ivAF0.name.call({from: accounts[4]});
		const boold5Dvplx = await OnXFinanceJ9ivAF0.approveAndCall.call(addresshhyiSg, uintkY9Eob, {from: accounts[4]});
		const boolPEAVjqi = await OnXFinanceJ9ivAF0.transfer.call(addressZjn0KM9, uintUV1LBq4, {from: accounts[1]});

		assert.equal(stringIknX7X, "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T")
		await expect(OnXFinanceJ9ivAF0.approveAndCall.call(addresshhyiSg, uintkY9Eob, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringqDaKr1O = "TRTHNEDfSxPoIaOf7etI"
		const stringeLIDzmc = "eE6p7cEKOs5AuG"
		const uintrY0y6zW = BigInt("604")
		const OnXFinancefHZfID9 = await OnXFinance.new(stringqDaKr1O, stringeLIDzmc, uintrY0y6zW, {from: accounts[4]});
		const uintmcgGF76 = BigInt("1438")
		const addresstv8v2Z = accounts[2]
		const uintNQvQ4RU = BigInt("1837")
		const addressumWOUXH = accounts[3]
		const uintmm53RAA = BigInt("255")
		const addressSUl5oFt = accounts[0]
		const boolmmxQk3S = await OnXFinancefHZfID9.transfer.call(addresstv8v2Z, uintmcgGF76, {from: accounts[3]});
		const boolORpASCO = await OnXFinancefHZfID9.increaseAllowance.call(addressumWOUXH, uintNQvQ4RU, {from: accounts[1]});
		const boolsU9sDoX = await OnXFinancefHZfID9.transfer.call(addressSUl5oFt, uintmm53RAA, {from: accounts[4]});

		await expect(OnXFinancefHZfID9.transfer.call(addresstv8v2Z, uintmcgGF76, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintzUr5ukN = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintzUr5ukN, {from: accounts[5]});
		const uintKOzFLWK = BigInt("107")
		const addressNKSbawx = accounts[5]
		const uintBt55kYA = BigInt("908")
		const addressXlQ4qQG = accounts[2]
		const uintUBMVnxp = BigInt("1179")
		const addressMosSsRD = accounts[2]
		const boolYiFbUj = await OnXFinanceJ9ivAF0.transfer.call(addressNKSbawx, uintKOzFLWK, {from: accounts[2]});
		const boolm9XIwEt = await OnXFinanceJ9ivAF0.approveAndCall.call(addressXlQ4qQG, uintBt55kYA, {from: accounts[4]});
		const stringIknX7X = await OnXFinanceJ9ivAF0.name.call({from: accounts[4]});
		const boolPEAVjqi = await OnXFinanceJ9ivAF0.transfer.call(addressMosSsRD, uintUBMVnxp, {from: accounts[1]});

		await expect(OnXFinanceJ9ivAF0.transfer.call(addressNKSbawx, uintKOzFLWK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintVGqCGVO = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintVGqCGVO, {from: accounts[5]});
		const addressQvTHFD = "0x0000000000000000000000000000000000000001"
		const uinttrJjvmj = BigInt("1865")
		const addressYjC4ubj = accounts[2]
		const stringIknX7X = await OnXFinanceJ9ivAF0.name.call({from: accounts[4]});
		const boold2vYgjs = await OnXFinanceJ9ivAF0.transferownership.call(addressQvTHFD, {from: accounts[1]});
		const boolPEAVjqi = await OnXFinanceJ9ivAF0.transfer.call(addressYjC4ubj, uinttrJjvmj, {from: accounts[1]});

		assert.equal(stringIknX7X, "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T")
		await expect(OnXFinanceJ9ivAF0.transferownership.call(addressQvTHFD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintWrwKFCX = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintWrwKFCX, {from: accounts[5]});
		const uint9UJxrG = BigInt("642")
		const addresswnCNGGv = accounts[1]
		const uintYiLU4gf = BigInt("107")
		const addresswVcvPcw = accounts[6]
		const addressI7biwYy = accounts[4]
		const uintZUAYEri = BigInt("908")
		const addressl5eyAN2 = accounts[2]
		const uintimgfHJS = BigInt("1179")
		const addresslLbQ5zY = accounts[2]
		const boolbNIS2ce = await OnXFinanceJ9ivAF0.approveAndCall.call(addresswnCNGGv, uint9UJxrG, {from: accounts[5]});
		const boolYiFbUj = await OnXFinanceJ9ivAF0.transfer.call(addresswVcvPcw, uintYiLU4gf, {from: accounts[2]});
		const uintJCNyod = await OnXFinanceJ9ivAF0.balanceOf.call(addressI7biwYy, {from: accounts[2]});
		const boolm9XIwEt = await OnXFinanceJ9ivAF0.approveAndCall.call(addressl5eyAN2, uintZUAYEri, {from: accounts[4]});
		const stringnek8qvS = await OnXFinanceJ9ivAF0.symbol.call({from: accounts[3]});
		const stringIknX7X = await OnXFinanceJ9ivAF0.name.call({from: accounts[4]});
		const boolPEAVjqi = await OnXFinanceJ9ivAF0.transfer.call(addresslLbQ5zY, uintimgfHJS, {from: accounts[1]});

		assert.equal(boolbNIS2ce, true)
		await expect(OnXFinanceJ9ivAF0.transfer.call(addresswVcvPcw, uintYiLU4gf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQy1zpqO = "pUKJAN9U5P9YEChNTMY9tc3NrEAhWwM1UoYGMrLGQLEmY9G6l149FtcIT9Zpy5eCwI"
		const stringUrrNjw9 = "Ob65XgJqPSv2WAVXoC8FpjXB"
		const uintvSpJKy4 = BigInt("133")
		const OnXFinancefOzBz1T = await OnXFinance.new(stringQy1zpqO, stringUrrNjw9, uintvSpJKy4, {from: "0x0000000000000000000000000000000000000001"});
		const uintZAcEsfa = BigInt("1323")
		const addressStJqxXY = accounts[4]
		const uintjRYrISS = BigInt("1627")
		const addressL0WIVTG = accounts[0]
		const addressgRpUNIi = accounts[2]
		const boolD69UDiY = await OnXFinancefOzBz1T.transfer.call(addressStJqxXY, uintZAcEsfa, {from: accounts[1]});
		const boolWHEwkPY = await OnXFinancefOzBz1T.transferFrom.call(addressgRpUNIi, addressL0WIVTG, uintjRYrISS, {from: accounts[1]});
		const string0q3XfN = await OnXFinancefOzBz1T.symbol.call({from: accounts[3]});
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintWBRdTMg = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintWBRdTMg, {from: accounts[5]});
		const addressUXDg0Yu = accounts[2]
		const addressbQNNnAB = accounts[1]
		const uintzmo03BV = BigInt("0")
		const addressGcmptBG = accounts[2]
		const addresstPOr6K = accounts[1]
		const uintbLTcWuz = BigInt("1385")
		const addressqiawJEr = "0x0000000000000000000000000000000000000001"
		const uintUU6m80L = BigInt("1063")
		const addressZnzxdvf = accounts[5]
		const uintF8kw3d1 = await OnXFinanceJ9ivAF0.allowance.call(addressbQNNnAB, addressUXDg0Yu, {from: "0x0000000000000000000000000000000000000001"});
		const boolPEAVjqi = await OnXFinanceJ9ivAF0.transfer.call(addressGcmptBG, uintzmo03BV, {from: accounts[1]});
		const uintUaBwHu = await OnXFinanceJ9ivAF0.balanceOf.call(addresstPOr6K, {from: accounts[3]});
		const boolXDv38l9 = await OnXFinanceJ9ivAF0.approveAndCall.call(addressqiawJEr, uintbLTcWuz, {from: accounts[3]});
		const booljjNENjL = await OnXFinanceJ9ivAF0.decreaseAllowance.call(addressZnzxdvf, uintUU6m80L, {from: accounts[1]});

		assert.equal(boolPEAVjqi, true)
		assert.equal(uintF8kw3d1, BigInt("0"))
		assert.equal(uintUaBwHu, BigInt("0"))
		await expect(OnXFinanceJ9ivAF0.approveAndCall.call(addressqiawJEr, uintbLTcWuz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3yegm1 = "QXCgfl3Elq4L1AB2tIBXF7heKhbdizMU1vfjJ4eRfLV1T"
		const stringWvjRttQ = "xSooY0v8bPkxrUKYLkK7a14tSM6P1N5fYBn7vGmVNV5yT7aIb9yTOaO5Vt45H6Y5xbuTW1bQYuRihcwwP7UC77iHqyDa2"
		const uintb531i1W = BigInt("1657")
		const OnXFinanceJ9ivAF0 = await OnXFinance.new(stringc3yegm1, stringWvjRttQ, uintb531i1W, {from: accounts[5]});
		const uintPisH9lx = BigInt("0")
		const addressnckeJSM = accounts[1]
		const uintlUJdc3S = BigInt("1040")
		const addressMFAe05U = accounts[4]
		const boolbNIS2ce = await OnXFinanceJ9ivAF0.approveAndCall.call(addressnckeJSM, uintPisH9lx, {from: accounts[5]});
		const boolVIZY93t = await OnXFinanceJ9ivAF0.transfer.call(addressMFAe05U, uintlUJdc3S, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbNIS2ce, true)
		await expect(OnXFinanceJ9ivAF0.transfer.call(addressMFAe05U, uintlUJdc3S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
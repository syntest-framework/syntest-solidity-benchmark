const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPK8Aija = await REXUNIFINANCE.new({from: accounts[2]});
		const addressUGt5ay9 = "0x0000000000000000000000000000000000000001"
		const uintGUW7Zf3 = BigInt("692")
		const addressnkf0oUe = accounts[4]
		const uintuYusXMR = BigInt("1032")
		const addresssYT6g2y = accounts[0]
		const uintLLcw9c1 = BigInt("579")
		const addressfOUgLOD = accounts[0]
		const uintpHkJKwi = BigInt("1462")
		const addressm1M7Dej = accounts[5]
		const addressNEbiav = accounts[3]
		const uintP684Grr = BigInt("155")
		const addresspQ4RGKg = accounts[4]
		const addresseyyVJr5 = accounts[4]
		const uint256wEj8vI0 = await REXUNIFINANCEPK8Aija.transferableTokens.call(addressUGt5ay9, {from: "0x0000000000000000000000000000000000000001"});
		const boolKyGe3NJ = await REXUNIFINANCEPK8Aija.transfer.call(addressnkf0oUe, uintGUW7Zf3, {from: accounts[3]});
		const boolpsM4acJ = await REXUNIFINANCEPK8Aija.increaseApproval.call(addresssYT6g2y, uintuYusXMR, {from: accounts[1]});
		const booljB7XEkz = await REXUNIFINANCEPK8Aija.approve.call(addressfOUgLOD, uintLLcw9c1, {from: accounts[0]});
		const bool5YMpXJ = await REXUNIFINANCEPK8Aija.transferFrom.call(addressNEbiav, addressm1M7Dej, uintpHkJKwi, {from: accounts[3]});
		const boolzftdS5k = await REXUNIFINANCEPK8Aija.transferFrom.call(addresseyyVJr5, addresspQ4RGKg, uintP684Grr, {from: accounts[3]});

		assert.equal(uint256wEj8vI0, BigInt("0"))
		await expect(REXUNIFINANCEPK8Aija.transfer.call(addressnkf0oUe, uintGUW7Zf3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIUeg8z = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLkqb6u = accounts[0]
		const uintQvJUzdV = BigInt("1270")
		const addressbTKxCuV = accounts[5]
		const uintOnLWsFp = BigInt("748")
		const addresssxhCpyu = accounts[2]
		const uintmS1ugKk = BigInt("1885")
		const addressMyfrtnV = accounts[2]
		const addresshKmAexT = await REXUNIFINANCEIUeg8z.transferOwnership.call(addressLkqb6u, {from: accounts[1]});
		const boolz0j1fHH = await REXUNIFINANCEIUeg8z.decreaseApproval.call(addressbTKxCuV, uintQvJUzdV, {from: accounts[5]});
		const boolnkHvid = await REXUNIFINANCEIUeg8z.increaseApproval.call(addresssxhCpyu, uintOnLWsFp, {from: accounts[0]});
		const boolQAIBFya = await REXUNIFINANCEIUeg8z.approve.call(addressMyfrtnV, uintmS1ugKk, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEWhKw66k = await REXUNIFINANCE.new({from: accounts[4]});
		const addressjU9oa68 = accounts[1]
		const uintM8zklzu = BigInt("1127")
		const addresso34T3QN = accounts[1]
		const addressP4EmWD8 = accounts[3]
		const uintcDWtgy = BigInt("318")
		const addressyNTZ0xI = accounts[0]
		const uintj6wmdC = BigInt("175")
		const addresshIk20QM = accounts[0]
		const addressUQtaGnW = "0x0000000000000000000000000000000000000001"
		const addressCPhx0iC = accounts[2]
		const uint256VSGua27 = await REXUNIFINANCEWhKw66k.balanceOf.call(addressjU9oa68, {from: accounts[2]});
		const boolscN1NaT = await REXUNIFINANCEWhKw66k.transferFrom.call(addressP4EmWD8, addresso34T3QN, uintM8zklzu, {from: accounts[4]});
		const boolNM6f0N9 = await REXUNIFINANCEWhKw66k.transfer.call(addressyNTZ0xI, uintcDWtgy, {from: accounts[1]});
		const booljxCu6gL = await REXUNIFINANCEWhKw66k.transfer.call(addresshIk20QM, uintj6wmdC, {from: accounts[4]});
		const uint256o7bSNxY = await REXUNIFINANCEWhKw66k.balanceOf.call(addressUQtaGnW, {from: accounts[3]});
		const uint256RP9nuz = await REXUNIFINANCEWhKw66k.balanceOf.call(addressCPhx0iC, {from: accounts[1]});

		assert.equal(uint256VSGua27, BigInt("0"))
		await expect(REXUNIFINANCEWhKw66k.transferFrom.call(addressP4EmWD8, addresso34T3QN, uintM8zklzu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnDalk9e = await REXUNIFINANCE.new({from: accounts[1]});
		const addressEGzGbcF = accounts[5]
		const uintJNaTRq = BigInt("376")
		const addressE5XQ8sP = accounts[2]
		const addressEu7CBJC = accounts[0]
		const addresskLYT5z6 = accounts[0]
		const uint256V5iXCI = await REXUNIFINANCEnDalk9e.balanceOf.call(addressEGzGbcF, {from: accounts[1]});
		const boolwHghxg = await REXUNIFINANCEnDalk9e.increaseApproval.call(addressE5XQ8sP, uintJNaTRq, {from: accounts[2]});
		const uint256LZSlaTc = await REXUNIFINANCEnDalk9e.allowance.call(addresskLYT5z6, addressEu7CBJC, {from: accounts[4]});

		assert.equal(uint256V5iXCI, BigInt("0"))
		await expect(REXUNIFINANCEnDalk9e.increaseApproval.call(addressE5XQ8sP, uintJNaTRq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEzkeret = await REXUNIFINANCE.new({from: accounts[3]});
		const uintYe7jHs7 = BigInt("1266")
		const addressBxeGGCu = "0x0000000000000000000000000000000000000001"
		const uintEKIPn3S = BigInt("652")
		const addresshMxcabB = accounts[2]
		const uintwcV394 = BigInt("319")
		const addressLwegsBc = accounts[1]
		const uintHdH9clV = BigInt("1384")
		const addressRLy35KM = accounts[5]
		const addresskamCDaN = accounts[3]
		const uintk01FpjE = BigInt("312")
		const addresstTlDQ0V = accounts[0]
		const boolfmTc2yu = await REXUNIFINANCEzkeret.decreaseApproval.call(addressBxeGGCu, uintYe7jHs7, {from: accounts[3]});
		const boolclu4Fgw = await REXUNIFINANCEzkeret.increaseApproval.call(addresshMxcabB, uintEKIPn3S, {from: accounts[1]});
		const boolDps0CCl = await REXUNIFINANCEzkeret.decreaseApproval.call(addressLwegsBc, uintwcV394, {from: accounts[4]});
		const boolUIGnTa = await REXUNIFINANCEzkeret.increaseApproval.call(addressRLy35KM, uintHdH9clV, {from: accounts[2]});
		const addressuRgIpba = await REXUNIFINANCEzkeret.transferOwnership.call(addresskamCDaN, {from: accounts[1]});
		const boolCZxXlS3 = await REXUNIFINANCEzkeret.increaseApproval.call(addresstTlDQ0V, uintk01FpjE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDps0CCl, true)
		assert.equal(boolUIGnTa, true)
		assert.equal(boolclu4Fgw, true)
		assert.equal(boolfmTc2yu, true)
		await expect(REXUNIFINANCEzkeret.transferOwnership.call(addresskamCDaN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEOXBMVGB = await REXUNIFINANCE.new({from: accounts[1]});
		const addressK0dsOKv = "0x0000000000000000000000000000000000000001"
		const addressJblaK4r = accounts[3]
		const addressVhXj3zu = accounts[4]
		const uintbtDABp = BigInt("1290")
		const addressKHmrCu = accounts[3]
		const uintY2NjEKc = BigInt("558")
		const addressjOXxk8V = accounts[1]
		const uintgH75Zu7 = BigInt("428")
		const addressj45IxZ9 = accounts[0]
		const uint256gFJkpHO = await REXUNIFINANCEOXBMVGB.transferableTokens.call(addressK0dsOKv, {from: accounts[3]});
		const uint256o5xKNw6 = await REXUNIFINANCEOXBMVGB.balanceOf.call(addressJblaK4r, {from: accounts[5]});
		const uint256MERbc8m = await REXUNIFINANCEOXBMVGB.transferableTokens.call(addressVhXj3zu, {from: accounts[0]});
		const boolcPEzbmQ = await REXUNIFINANCEOXBMVGB.approve.call(addressKHmrCu, uintbtDABp, {from: accounts[0]});
		const boolWGm1NKN = await REXUNIFINANCEOXBMVGB.transfer.call(addressjOXxk8V, uintY2NjEKc, {from: accounts[2]});
		const boolBiOKxKL = await REXUNIFINANCEOXBMVGB.transfer.call(addressj45IxZ9, uintgH75Zu7, {from: accounts[3]});

		assert.equal(boolcPEzbmQ, true)
		assert.equal(uint256MERbc8m, BigInt("0"))
		assert.equal(uint256gFJkpHO, BigInt("0"))
		assert.equal(uint256o5xKNw6, BigInt("0"))
		await expect(REXUNIFINANCEOXBMVGB.transfer.call(addressjOXxk8V, uintY2NjEKc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEe53eKf = await REXUNIFINANCE.new({from: accounts[1]});
		const uintqshZ1UR = BigInt("612")
		const addressahsyu2y = accounts[4]
		const addressePJP8aN = accounts[4]
		const addressumw9Coe = accounts[3]
		const uintuLw0ztZ = BigInt("1511")
		const addressReiJDeC = accounts[4]
		const addressjT1wYU = accounts[6]
		const addressdMMnAzT = "0x0000000000000000000000000000000000000002"
		const addressKPuxwF6 = accounts[1]
		const uintxlGajmA = BigInt("433")
		const addressKgPD0Hb = accounts[1]
		const addressFjjwroC = accounts[4]
		const boolDKmBOd1 = await REXUNIFINANCEe53eKf.approve.call(addressahsyu2y, uintqshZ1UR, {from: accounts[3]});
		const uint256QSWwjyS = await REXUNIFINANCEe53eKf.allowance.call(addressumw9Coe, addressePJP8aN, {from: accounts[5]});
		const boolNTKV0Jh = await REXUNIFINANCEe53eKf.transferFrom.call(addressjT1wYU, addressReiJDeC, uintuLw0ztZ, {from: "0x0000000000000000000000000000000000000001"});
		const addresstyZfJs2 = await REXUNIFINANCEe53eKf.transferOwnership.call(addressdMMnAzT, {from: accounts[3]});
		const addresslsqPSNK = await REXUNIFINANCEe53eKf.transferOwnership.call(addressKPuxwF6, {from: accounts[0]});
		const boollynB61p = await REXUNIFINANCEe53eKf.transferFrom.call(addressFjjwroC, addressKgPD0Hb, uintxlGajmA, {from: accounts[3]});

		assert.equal(boolDKmBOd1, true)
		assert.equal(uint256QSWwjyS, BigInt("0"))
		await expect(REXUNIFINANCEe53eKf.transferFrom.call(addressjT1wYU, addressReiJDeC, uintuLw0ztZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE15UdFQ = await REXUNIFINANCE.new({from: accounts[2]});
		const addressuKS8iqP = accounts[3]
		const uintVdc4Aqk = BigInt("1579")
		const addressRLBxa2E = accounts[1]
		const addresszQoH3P4 = "0x0000000000000000000000000000000000000001"
		const uint256GxhRQF0 = await REXUNIFINANCE15UdFQ.transferableTokens.call(addressuKS8iqP, {from: accounts[3]});
		const boolzk5t8M = await REXUNIFINANCE15UdFQ.increaseApproval.call(addressRLBxa2E, uintVdc4Aqk, {from: accounts[5]});
		const addresseQ9A2W = await REXUNIFINANCE15UdFQ.transferOwnership.call(addresszQoH3P4, {from: accounts[2]});

		assert.equal(boolzk5t8M, true)
		assert.equal(uint256GxhRQF0, BigInt("0"))
	});
})
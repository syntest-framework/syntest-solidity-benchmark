const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsJuyzb5z = await UFragments.new({from: accounts[3]});
		const uintiLFKUL7 = BigInt("372")
		const addressTBkxvZf = "0x0000000000000000000000000000000000000001"
		const intrlS2hpP = BigInt("-501")
		const intQKDnGvw = BigInt("252")
		const uintA9MjYcO = BigInt("987")
		const addresswzQxFb = accounts[2]
//		await UFragmentsJuyzb5z.renounceOwnership.call({from: accounts[0]});
//		const addressUrp0ITl = await UFragmentsJuyzb5z.initRebase.call(addressTBkxvZf, uintiLFKUL7, {from: accounts[0]});
//		await UFragmentsJuyzb5z.onlyOwner.call({from: accounts[5]});
//		const int256lkWscb = await UFragmentsJuyzb5z.div.call(intQKDnGvw, intrlS2hpP, {from: accounts[3]});
//		const boolGH55BPl = await UFragmentsJuyzb5z.transfer.call(addresswzQxFb, uintA9MjYcO, {from: accounts[4]});
//		const booldORsLCB = await UFragmentsJuyzb5z.rebaseTimeInfo.call({from: accounts[3]});

		await expect(UFragmentsJuyzb5z.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFgMt7YC = await UFragments.new({from: accounts[2]});
		const uintMEU1gW = BigInt("1978")
		const addressuKCZej = accounts[0]
		const addressEu4o4f = accounts[3]
		const addressrD0wsiG = accounts[2]
		const uintvVfVky9 = BigInt("1534")
		const addressQYnpSnT = accounts[4]
		const addressJhV5MRp = accounts[3]
		const intmC0y7cl = BigInt("-504")
		const inthvoXLJ1 = BigInt("429")
//		const boolyRzEuf4 = await UFragmentsFgMt7YC.transferFrom.call(addressEu4o4f, addressuKCZej, uintMEU1gW, {from: accounts[1]});
//		const addressozQdTGZ = await UFragmentsFgMt7YC.initialize.call(addressrD0wsiG, {from: accounts[0]});
//		const boolaWzQhd7 = await UFragmentsFgMt7YC.transferFrom.call(addressJhV5MRp, addressQYnpSnT, uintvVfVky9, {from: accounts[2]});
//		await UFragmentsFgMt7YC.initializer.call({from: accounts[3]});
//		const int256DcG1iwB = await UFragmentsFgMt7YC.add.call(inthvoXLJ1, intmC0y7cl, {from: accounts[2]});

		await expect(UFragmentsFgMt7YC.transferFrom.call(addressEu4o4f, addressuKCZej, uintMEU1gW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsP9NirJ9 = await UFragments.new({from: accounts[0]});
		const intRZHeCFj = BigInt("43")
		const intQ3rJ38X = BigInt("-463")
		const uintui275a = BigInt("1082")
		const addressAFfFlw = accounts[0]
		const addressW6IrheI = accounts[3]
//		const int256UsNc9Xe = await UFragmentsP9NirJ9.mul.call(intQ3rJ38X, intRZHeCFj, {from: accounts[1]});
//		await UFragmentsP9NirJ9.initializer.call({from: accounts[0]});
//		await UFragmentsP9NirJ9.renounceOwnership.call({from: accounts[2]});
//		await UFragmentsP9NirJ9.onlyOwner.call({from: accounts[1]});
//		const addressnKOAm0I = await UFragmentsP9NirJ9.initRebase.call(addressAFfFlw, uintui275a, {from: accounts[4]});
//		const addresskHTdQrY = await UFragmentsP9NirJ9.initialize.call(addressW6IrheI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsP9NirJ9.mul.call(intQ3rJ38X, intRZHeCFj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJAqfyFY = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intEDvn6B = BigInt("-889")
		const intTxWr6j = BigInt("-1619")
		const intRt6cw0 = BigInt("161")
		const into4fHWx7 = BigInt("90")
		const intIQu7NeU = BigInt("-81")
		const intfpFnKdB = BigInt("465")
		const uint8ANNbLs = await UFragmentsJAqfyFY.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const int256tdFr4nc = await UFragmentsJAqfyFY.div.call(intTxWr6j, intEDvn6B, {from: accounts[4]});
		const int256iPiTMxB = await UFragmentsJAqfyFY.sub.call(into4fHWx7, intRt6cw0, {from: accounts[2]});
		const int256NJ1ea7N = await UFragmentsJAqfyFY.mul.call(intfpFnKdB, intIQu7NeU, {from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentsY0Fp9kL = await UFragments.new({from: accounts[2]});
		const addressxVteJoG = accounts[4]
		const intTIHJEHF = BigInt("798")
		const intNl4yLK = BigInt("959")
//		const addressmzivdD = await UFragmentsY0Fp9kL.initialize.call(addressxVteJoG, {from: accounts[3]});
//		const stringRiXiMHC = await UFragmentsY0Fp9kL.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256DCrCWDn = await UFragmentsY0Fp9kL.add.call(intNl4yLK, intTIHJEHF, {from: accounts[2]});
//		const addresslAMW5V = await UFragmentsY0Fp9kL.owner.call({from: accounts[4]});

		await expect(UFragmentsY0Fp9kL.initialize.call(addressxVteJoG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskkyktjf = await UFragments.new({from: accounts[1]});
		const uintiWdzfBR = BigInt("85")
		const addresskc9QU4r = accounts[0]
		const addressygFj3CJ = accounts[4]
		const addressuu8t9V = accounts[1]
		const addressOsisn0 = accounts[3]
		const addressmqtQMnI = accounts[1]
		const addressm7WsZBJ = accounts[2]
		const boolnWKpTAh = await UFragmentskkyktjf.approve.call(addresskc9QU4r, uintiWdzfBR, {from: accounts[3]});
		const uint256cnGKW7j = await UFragmentskkyktjf.allowance.call(addressuu8t9V, addressygFj3CJ, {from: accounts[1]});
//		const addressSfDojWD = await UFragmentskkyktjf.transferOwnership.call(addressOsisn0, {from: accounts[5]});
//		const addresszzY36Xi = await UFragmentskkyktjf.owner.call({from: accounts[3]});
//		const uint256m6Zbsh0 = await UFragmentskkyktjf.allowance.call(addressm7WsZBJ, addressmqtQMnI, {from: accounts[1]});

		assert.equal(boolnWKpTAh, true)
		assert.equal(uint256cnGKW7j, BigInt("0"))
		await expect(UFragmentskkyktjf.transferOwnership.call(addressOsisn0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskkyktjf = await UFragments.new({from: accounts[1]});
		const uintz4Nuj2B = BigInt("728")
		const addressGWWuKgi = accounts[3]
		const uintTDptclA = BigInt("85")
		const addresshjNdBF = accounts[0]
		const addresszLNGsSv = accounts[4]
		const addressI6mXNbX = accounts[1]
		const addressxQfCuO2 = accounts[3]
		const addressKbNKHyq = accounts[1]
		const addressWX2fJL = accounts[2]
//		const boolZQUF3S9 = await UFragmentskkyktjf.transfer.call(addressGWWuKgi, uintz4Nuj2B, {from: accounts[1]});
//		const boolnWKpTAh = await UFragmentskkyktjf.approve.call(addresshjNdBF, uintTDptclA, {from: accounts[3]});
//		const uint256cnGKW7j = await UFragmentskkyktjf.allowance.call(addressI6mXNbX, addresszLNGsSv, {from: accounts[1]});
//		const addressSfDojWD = await UFragmentskkyktjf.transferOwnership.call(addressxQfCuO2, {from: accounts[5]});
//		const addresszzY36Xi = await UFragmentskkyktjf.owner.call({from: accounts[3]});
//		const uint256m6Zbsh0 = await UFragmentskkyktjf.allowance.call(addressWX2fJL, addressKbNKHyq, {from: accounts[1]});

		await expect(UFragmentskkyktjf.transfer.call(addressGWWuKgi, uintz4Nuj2B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUYhterV = await UFragments.new({from: accounts[3]});
		const uint8BueAxkF = await UFragmentsUYhterV.decimals.call({from: accounts[5]});
		const addressxFlA5J5 = await UFragmentsUYhterV.owner.call({from: accounts[3]});

		assert.equal(addressxFlA5J5, 0x0000000000000000000000000000000000000000)
		assert.equal(uint8BueAxkF, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsikj76ib = await UFragments.new({from: accounts[2]});
		const uintfyJYa8M = BigInt("1908")
		const addressUt5SDT = accounts[0]
		const addressufmUfsl = accounts[2]
		const stringebqJVPr = await UFragmentsikj76ib.symbol.call({from: accounts[2]});
//		const boolb0wlKCb = await UFragmentsikj76ib.transferFrom.call(addressufmUfsl, addressUt5SDT, uintfyJYa8M, {from: accounts[4]});

		assert.equal(stringebqJVPr, "")
		await expect(UFragmentsikj76ib.transferFrom.call(addressufmUfsl, addressUt5SDT, uintfyJYa8M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsannaLa = await UFragments.new({from: accounts[0]});
		const intmcHaBa3 = BigInt("209")
		const inteV3zJh3 = BigInt("-27")
		const inthacyr0t = BigInt("-185")
		const stringPpEUCcx = await UFragmentsannaLa.name.call({from: accounts[1]});
//		const uint256aNozye = await UFragmentsannaLa.calRebase.call({from: accounts[4]});
//		const int256Wv2k3q1 = await UFragmentsannaLa.abs.call(intmcHaBa3, {from: accounts[2]});
//		const int256T7p55nV = await UFragmentsannaLa.mul.call(inthacyr0t, inteV3zJh3, {from: accounts[1]});

		assert.equal(stringPpEUCcx, "")
		await expect(UFragmentsannaLa.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsikj76ib = await UFragments.new({from: accounts[2]});
		const uintTR4rsW = BigInt("93")
		const stringgIYvkN8 = "4udSO25V6lSeIGQMwHo"
		const stringzW75Fxb = "aghu"
		const uinto7a7l7 = BigInt("1915")
		const addressafcuqQG = accounts[0]
		const addressZ1W7A23 = accounts[2]
		const string53AreX = await UFragmentsikj76ib.initialize.call(stringzW75Fxb, stringgIYvkN8, uintTR4rsW, {from: accounts[0]});
//		const boolb0wlKCb = await UFragmentsikj76ib.transferFrom.call(addressZ1W7A23, addressafcuqQG, uinto7a7l7, {from: accounts[4]});

		await expect(UFragmentsikj76ib.transferFrom.call(addressZ1W7A23, addressafcuqQG, uinto7a7l7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsRuOoK30 = await UFragments.new({from: accounts[3]});
		const uintsY4cOxT = BigInt("377")
		const addressI7yLeCx = accounts[0]
		const boolwffWbaC = await UFragmentsRuOoK30.rebaseTimeInfo.call({from: accounts[0]});
		const boolD5KD5HF = await UFragmentsRuOoK30.approve.call(addressI7yLeCx, uintsY4cOxT, {from: accounts[5]});
		const stringjVMncDL = await UFragmentsRuOoK30.symbol.call({from: accounts[3]});

		assert.equal(boolD5KD5HF, true)
		assert.equal(stringjVMncDL, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsikj76ib = await UFragments.new({from: accounts[2]});
		const intozHetx = BigInt("1376")
		const intAkqkGE3 = BigInt("-877")
		const uintfSP0G6 = BigInt("814")
		const address92qgXy = accounts[1]
		const uint256caZnHgW = await UFragmentsikj76ib.totalSupply.call({from: accounts[2]});
//		const int256VUH216n = await UFragmentsikj76ib.mul.call(intAkqkGE3, intozHetx, {from: accounts[4]});
//		const booltnZtpvo = await UFragmentsikj76ib.transfer.call(address92qgXy, uintfSP0G6, {from: accounts[4]});

		assert.equal(uint256caZnHgW, BigInt("0"))
		await expect(UFragmentsikj76ib.mul.call(intAkqkGE3, intozHetx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
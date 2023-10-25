const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnAb1UlAJ = await Weedburn.new({from: accounts[4]});
		const uintsrEDs15 = BigInt("1575")
		const uintSjmkXPA = BigInt("633")
		const addressvwfF8dL = accounts[2]
		const addressHMoknd = accounts[1]
		const uintDcFvWiu = BigInt("1097")
		const addressfuvN0Og = accounts[1]
		const uint256aZVD5G = await WeedburnAb1UlAJ.burn.call(uintsrEDs15, {from: accounts[5]});
		const uint256xvuNAn3 = await WeedburnAb1UlAJ.burn.call(uintSjmkXPA, {from: accounts[4]});
		const uint256HioaVIm = await WeedburnAb1UlAJ.allowance.call(addressHMoknd, addressvwfF8dL, {from: accounts[3]});
		const addressHUTSIrt = await WeedburnAb1UlAJ.burnFrom.call(addressfuvN0Og, uintDcFvWiu, {from: accounts[2]});
		await WeedburnAb1UlAJ.disableLimitMode.call({from: accounts[0]});
		const uint256kgUUwR = await WeedburnAb1UlAJ.totalSupply.call({from: accounts[4]});

		await expect(WeedburnAb1UlAJ.burn.call(uintsrEDs15, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringfCBDsOs = "JObT8xnF6EPxE1fE"
		const stringdme4cQ = "VuiDM10qhKQ1rjGligqE3QBQbdl80YELFQ8m7jQnQhlW76KPufAgsxVrl7QBO4UwM7"
		const uintEKbpw3r = BigInt("76")
		const WeedburneWkIRez = await Weedburn.new(stringfCBDsOs, stringdme4cQ, uintEKbpw3r, {from: accounts[1]});
		const uintVcn82nt = BigInt("270")
		const addresshaUrnwO = accounts[0]
		const addressry6HB02 = accounts[3]
		await WeedburneWkIRez.disableLimitMode.call({from: accounts[4]});
		const stringnNH2M6d = await WeedburneWkIRez.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburneWkIRez.disableDevMode.call({from: accounts[1]});
		const boolmjNmqc = await WeedburneWkIRez.transferFrom.call(addressry6HB02, addresshaUrnwO, uintVcn82nt, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnUMwVjAU = await Weedburn.new({from: accounts[0]});
		const uintna3RRuC = BigInt("1631")
		const addresssMHmt4 = accounts[2]
		const uint1Y5mj2 = BigInt("1368")
		const stringNOkAGOp = await WeedburnUMwVjAU.symbol.call({from: accounts[5]});
		const uint8sD3UNj2 = await WeedburnUMwVjAU.decimals.call({from: accounts[4]});
		await WeedburnUMwVjAU.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnUMwVjAU.enableLimitMode.call({from: accounts[4]});
		const boolhlCTI6u = await WeedburnUMwVjAU.decreaseAllowance.call(addresssMHmt4, uintna3RRuC, {from: accounts[0]});
		const uint256NqKNGm2 = await WeedburnUMwVjAU.burn.call(uint1Y5mj2, {from: accounts[5]});

		assert.equal(stringNOkAGOp, "Weedburn")
		assert.equal(uint8sD3UNj2, BigInt("18"))
		await expect(WeedburnUMwVjAU.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnVYb9SET = await Weedburn.new({from: accounts[1]});
		const addressvqKIerq = accounts[0]
		const addressUa8INjb = accounts[4]
		const uintOCHHhmV = BigInt("1070")
		const addressCgDnfcl = accounts[2]
		const uint256KQToLm4 = await WeedburnVYb9SET.allowance.call(addressUa8INjb, addressvqKIerq, {from: accounts[0]});
		const boolvcoxT1p = await WeedburnVYb9SET.approve.call(addressCgDnfcl, uintOCHHhmV, {from: accounts[4]});
		await WeedburnVYb9SET.enableLimitMode.call({from: accounts[0]});
		const uint8thoLXMS = await WeedburnVYb9SET.decimals.call({from: accounts[1]});
		const stringhRWeZa1 = await WeedburnVYb9SET.name.call({from: accounts[0]});

		assert.equal(boolvcoxT1p, true)
		assert.equal(uint256KQToLm4, BigInt("0"))
		await expect(WeedburnVYb9SET.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburngeQNbP2 = await Weedburn.new({from: accounts[0]});
		const uintH58EIDc = BigInt("245")
		const addressS9qQ1Us = accounts[3]
		const uinthMAc14p = BigInt("1023")
		const addressvRtrO5P = "0x0000000000000000000000000000000000000001"
		const boolNNKGgN5 = await WeedburngeQNbP2.increaseAllowance.call(addressS9qQ1Us, uintH58EIDc, {from: accounts[0]});
		await WeedburngeQNbP2.disableLimitMode.call({from: accounts[1]});
		const uint81mbHOD = await WeedburngeQNbP2.decimals.call({from: accounts[0]});
		const boolK2Nb9jQ = await WeedburngeQNbP2.transfer.call(addressvRtrO5P, uinthMAc14p, {from: accounts[2]});

		assert.equal(boolNNKGgN5, true)
		await expect(WeedburngeQNbP2.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncJ93n4 = await Weedburn.new({from: accounts[0]});
		const uintUBeZSlB = BigInt("1230")
		const addressyV6v1fL = accounts[3]
		const boolwIon2Gh = await WeedburncJ93n4.decreaseAllowance.call(addressyV6v1fL, uintUBeZSlB, {from: accounts[1]});
		const stringF4Va7ly = await WeedburncJ93n4.name.call({from: accounts[4]});

		await expect(WeedburncJ93n4.decreaseAllowance.call(addressyV6v1fL, uintUBeZSlB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKqu0ji = await Weedburn.new({from: accounts[4]});
		const addresstpwuXgc = accounts[0]
		const addressMa3hHxP = accounts[4]
		const uintWb17ThY = BigInt("1558")
		const addressI1KReHG = accounts[2]
		const addressneaU2oV = accounts[2]
		const addressF5BXW2N = accounts[3]
		const addresstiBnHCA = accounts[2]
		const uintJ6i5D24 = BigInt("196")
		const addressKWuX3WD = accounts[1]
		const uint256VoPuDt7 = await WeedburnnKqu0ji.allowance.call(addressMa3hHxP, addresstpwuXgc, {from: accounts[3]});
		const addressWn3OkaS = await WeedburnnKqu0ji.burnFrom.call(addressI1KReHG, uintWb17ThY, {from: accounts[2]});
		const uint256IWrLfQN = await WeedburnnKqu0ji.balanceOf.call(addressneaU2oV, {from: accounts[2]});
		const uint256yxYOh6j = await WeedburnnKqu0ji.allowance.call(addresstiBnHCA, addressF5BXW2N, {from: accounts[2]});
		const boolBr52Fqi = await WeedburnnKqu0ji.transfer.call(addressKWuX3WD, uintJ6i5D24, {from: accounts[1]});
		await WeedburnnKqu0ji.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint256VoPuDt7, BigInt("0"))
		await expect(WeedburnnKqu0ji.burnFrom.call(addressI1KReHG, uintWb17ThY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnUMwVjAU = await Weedburn.new({from: accounts[0]});
		const addresslD0L8V6 = "0x0000000000000000000000000000000000000001"
		const uintFy39AVo = BigInt("1396")
		const addressWC4wjhG = accounts[0]
		const uintMUy2q18 = BigInt("1631")
		const addressiD6dIGo = accounts[2]
		const uint62gTah = BigInt("1368")
		const stringNOkAGOp = await WeedburnUMwVjAU.symbol.call({from: accounts[5]});
		const uint8sD3UNj2 = await WeedburnUMwVjAU.decimals.call({from: accounts[4]});
		const uint256KwSdWQu = await WeedburnUMwVjAU.balanceOf.call(addresslD0L8V6, {from: accounts[0]});
		await WeedburnUMwVjAU.enableLimitMode.call({from: accounts[4]});
		const boolBVzZXRj = await WeedburnUMwVjAU.increaseAllowance.call(addressWC4wjhG, uintFy39AVo, {from: accounts[3]});
		const boolhlCTI6u = await WeedburnUMwVjAU.decreaseAllowance.call(addressiD6dIGo, uintMUy2q18, {from: accounts[0]});
		const uint256NqKNGm2 = await WeedburnUMwVjAU.burn.call(uint62gTah, {from: accounts[5]});

		assert.equal(stringNOkAGOp, "Weedburn")
		assert.equal(uint256KwSdWQu, BigInt("0"))
		assert.equal(uint8sD3UNj2, BigInt("18"))
		await expect(WeedburnUMwVjAU.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnUMwVjAU = await Weedburn.new({from: accounts[0]});
		const uintSJfq91J = BigInt("1699")
		const addressTLhnetW = accounts[5]
		const addressPMtrLjh = accounts[1]
		const uintGlwBtdw = BigInt("1188")
		const addressNYVBrPl = accounts[2]
		const uinta6gZupb = BigInt("1631")
		const addressL9wpG8 = accounts[2]
		const uintM1OW9I0 = BigInt("1336")
		const stringNOkAGOp = await WeedburnUMwVjAU.symbol.call({from: accounts[5]});
		const uint2561qPyQF = await WeedburnUMwVjAU.burn.call(uintSJfq91J, {from: accounts[0]});
		const uint8sD3UNj2 = await WeedburnUMwVjAU.decimals.call({from: accounts[4]});
		const uint256taCPf1d = await WeedburnUMwVjAU.allowance.call(addressPMtrLjh, addressTLhnetW, {from: accounts[1]});
		await WeedburnUMwVjAU.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnUMwVjAU.enableLimitMode.call({from: accounts[4]});
		const boolX2nbLDz = await WeedburnUMwVjAU.approve.call(addressNYVBrPl, uintGlwBtdw, {from: accounts[1]});
		const boolhlCTI6u = await WeedburnUMwVjAU.decreaseAllowance.call(addressL9wpG8, uinta6gZupb, {from: accounts[0]});
		const uint256NqKNGm2 = await WeedburnUMwVjAU.burn.call(uintM1OW9I0, {from: accounts[5]});

		assert.equal(stringNOkAGOp, "Weedburn")
		assert.equal(uint256taCPf1d, BigInt("0"))
		assert.equal(uint8sD3UNj2, BigInt("18"))
		await expect(WeedburnUMwVjAU.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKqu0ji = await Weedburn.new({from: accounts[4]});
		const uintifY7S7w = BigInt("1252")
		const addressgkJ6Bqu = accounts[0]
		const addresseYfo8Fp = accounts[0]
		const addresscLoJYD3 = accounts[4]
		const addressVT0OXlv = accounts[4]
		const addressnwtIUSM = accounts[3]
		const uintZc5NN0p = BigInt("1558")
		const addressaMNzuDO = accounts[2]
		const addressA6U1BGW = accounts[3]
		const addressgQm5y2D = accounts[3]
		const addressveEePT = accounts[2]
		const boolhqKOQ5R = await WeedburnnKqu0ji.transfer.call(addressgkJ6Bqu, uintifY7S7w, {from: accounts[0]});
		const uint256VoPuDt7 = await WeedburnnKqu0ji.allowance.call(addresscLoJYD3, addresseYfo8Fp, {from: accounts[3]});
		const uint2561o1IxM = await WeedburnnKqu0ji.allowance.call(addressnwtIUSM, addressVT0OXlv, {from: accounts[3]});
		const addressWn3OkaS = await WeedburnnKqu0ji.burnFrom.call(addressaMNzuDO, uintZc5NN0p, {from: accounts[2]});
		const uint256IWrLfQN = await WeedburnnKqu0ji.balanceOf.call(addressA6U1BGW, {from: accounts[2]});
		const uint256yxYOh6j = await WeedburnnKqu0ji.allowance.call(addressveEePT, addressgQm5y2D, {from: accounts[2]});
		await WeedburnnKqu0ji.disableLimitMode.call({from: accounts[1]});

		await expect(WeedburnnKqu0ji.transfer.call(addressgkJ6Bqu, uintifY7S7w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKqu0ji = await Weedburn.new({from: accounts[4]});
		const addressdNRN3M6 = accounts[4]
		const addresscHIXPrU = accounts[3]
		const uintAM6dQXw = BigInt("1558")
		const addressOjJZgUe = accounts[2]
		const addresslvWOWj1 = accounts[3]
		const addressDlpJRbc = accounts[3]
		const addresspDP3ma0 = accounts[3]
		const uint2561o1IxM = await WeedburnnKqu0ji.allowance.call(addresscHIXPrU, addressdNRN3M6, {from: accounts[3]});
		await WeedburnnKqu0ji.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWn3OkaS = await WeedburnnKqu0ji.burnFrom.call(addressOjJZgUe, uintAM6dQXw, {from: accounts[2]});
		const uint256IWrLfQN = await WeedburnnKqu0ji.balanceOf.call(addresslvWOWj1, {from: accounts[2]});
		const uint256yxYOh6j = await WeedburnnKqu0ji.allowance.call(addresspDP3ma0, addressDlpJRbc, {from: accounts[2]});
		await WeedburnnKqu0ji.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint2561o1IxM, BigInt("0"))
		await expect(WeedburnnKqu0ji.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzVAHmu = await Weedburn.new({from: accounts[1]});
		const addressFBGGQtf = accounts[2]
		const uintJugh5gg = BigInt("949")
		const addresshGjBrDt = accounts[4]
		const addressonA3bFk = accounts[2]
		const uintsFpwL0J = BigInt("1811")
		const addressZ9zhOXV = accounts[4]
		const addressvrLCg8I = accounts[0]
		const uintKxY1QgW = BigInt("1523")
		const addressSjWg9cB = accounts[2]
		const uintXCyyFSV = BigInt("423")
		const uint256MnG9mWJ = await WeedburnzVAHmu.balanceOf.call(addressFBGGQtf, {from: accounts[0]});
		const boolBEokIt = await WeedburnzVAHmu.transferFrom.call(addressonA3bFk, addresshGjBrDt, uintJugh5gg, {from: accounts[1]});
		const boolz5qG7d5 = await WeedburnzVAHmu.transferFrom.call(addressvrLCg8I, addressZ9zhOXV, uintsFpwL0J, {from: accounts[0]});
		const stringEIHZCTJ = await WeedburnzVAHmu.symbol.call({from: accounts[2]});
		const boolrh52sNd = await WeedburnzVAHmu.transfer.call(addressSjWg9cB, uintKxY1QgW, {from: accounts[5]});
		const uint256mlzF5r3 = await WeedburnzVAHmu.burn.call(uintXCyyFSV, {from: accounts[3]});

		assert.equal(uint256MnG9mWJ, BigInt("0"))
		await expect(WeedburnzVAHmu.transferFrom.call(addressonA3bFk, addresshGjBrDt, uintJugh5gg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKqu0ji = await Weedburn.new({from: accounts[4]});
		const uintD4zXN2w = BigInt("1558")
		const addressOW2M6rW = accounts[3]
		const uint256DLdFRNG = await WeedburnnKqu0ji.totalSupply.call({from: accounts[0]});
		const addressWn3OkaS = await WeedburnnKqu0ji.burnFrom.call(addressOW2M6rW, uintD4zXN2w, {from: accounts[2]});
		await WeedburnnKqu0ji.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint256DLdFRNG, BigInt("100000000000000000000000"))
		await expect(WeedburnnKqu0ji.burnFrom.call(addressOW2M6rW, uintD4zXN2w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzVAHmu = await Weedburn.new({from: accounts[1]});
		const addressbbPBwWI = accounts[3]
		const uintgQY4FeL = BigInt("1523")
		const addressbXzRVrO = accounts[2]
		const uinty4AfWvy = BigInt("214")
		const addressswkd15N = "0x0000000000000000000000000000000000000001"
		const uint256MnG9mWJ = await WeedburnzVAHmu.balanceOf.call(addressbbPBwWI, {from: accounts[0]});
		const stringijhZ63c = await WeedburnzVAHmu.name.call({from: accounts[2]});
		const boolrh52sNd = await WeedburnzVAHmu.transfer.call(addressbXzRVrO, uintgQY4FeL, {from: accounts[5]});
		const booli9gF9Oo = await WeedburnzVAHmu.transfer.call(addressswkd15N, uinty4AfWvy, {from: accounts[3]});

		assert.equal(stringijhZ63c, "t.me/burnweed1")
		assert.equal(uint256MnG9mWJ, BigInt("0"))
		await expect(WeedburnzVAHmu.transfer.call(addressbXzRVrO, uintgQY4FeL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzVAHmu = await Weedburn.new({from: accounts[1]});
		const addresszILrubJ = accounts[4]
		const uintUmvkhWu = BigInt("3")
		const addressSe7OHAt = accounts[4]
		const uintfH2FW0H = BigInt("1523")
		const addressEPGVqFd = accounts[2]
		const uint256MnG9mWJ = await WeedburnzVAHmu.balanceOf.call(addresszILrubJ, {from: accounts[0]});
		const boolIP3svCv = await WeedburnzVAHmu.transfer.call(addressSe7OHAt, uintUmvkhWu, {from: accounts[1]});
		const boolrh52sNd = await WeedburnzVAHmu.transfer.call(addressEPGVqFd, uintfH2FW0H, {from: accounts[5]});

		assert.equal(boolIP3svCv, true)
		assert.equal(uint256MnG9mWJ, BigInt("0"))
		await expect(WeedburnzVAHmu.transfer.call(addressEPGVqFd, uintfH2FW0H, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnKqu0ji = await Weedburn.new({from: accounts[4]});
		const uintigYkUy3 = BigInt("1911")
		const addresseRoCK9U = accounts[1]
		const addressG27ralG = accounts[4]
		const uintTAappH8 = BigInt("1563")
		const addresse6pAkVN = accounts[3]
		const uintU7dLjOi = BigInt("240")
		const addressfQhksDc = accounts[1]
		const boolcIlKwTi = await WeedburnnKqu0ji.transferFrom.call(addressG27ralG, addresseRoCK9U, uintigYkUy3, {from: accounts[2]});
		const addressWn3OkaS = await WeedburnnKqu0ji.burnFrom.call(addresse6pAkVN, uintTAappH8, {from: accounts[2]});
		const boolw5YkT01 = await WeedburnnKqu0ji.decreaseAllowance.call(addressfQhksDc, uintU7dLjOi, {from: accounts[0]});
		await WeedburnnKqu0ji.disableDevMode.call({from: accounts[1]});

		await expect(WeedburnnKqu0ji.transferFrom.call(addressG27ralG, addresseRoCK9U, uintigYkUy3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwDwUM2o = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttnUyauK = BigInt("119")
		const uintSsIr3wv = BigInt("837")
		const addressK6RQnVC = accounts[3]
		const stringFP5sQoU = await WeedburnwDwUM2o.symbol.call({from: accounts[0]});
		const uint256p73Utw = await WeedburnwDwUM2o.burn.call(uinttnUyauK, {from: accounts[4]});
		const boolTrBpKbb = await WeedburnwDwUM2o.transfer.call(addressK6RQnVC, uintSsIr3wv, {from: "0x0000000000000000000000000000000000000001"});
		const stringVqzghO3 = await WeedburnwDwUM2o.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
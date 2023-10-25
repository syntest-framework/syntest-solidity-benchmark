const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringQVdSOE = "MhHDJ7cjzoyAmhKbD5YgBLuugci4xSPtd8VjTxHj1UjtOKKN6QT4lPO7TDtKGdrWKu2ifWYRXPpuLy611GckVwR3"
		const stringb0Oop6R = "P3sy2zpsq6ECZOY8WBdvqE2nMI0DhfRp1YNvyNsJAopEbpd4sXDhaIhKhhwEr3uFh5fuW5sdDxE4CujEC6icgM4"
		const uintwNS5Rko = BigInt("201")
		const XenoFelixXYpQ8Kv = await XenoFelix.new(stringQVdSOE, stringb0Oop6R, uintwNS5Rko, {from: accounts[4]});
		const uintVW62ZUr = BigInt("16")
		const address0Pj20A = accounts[3]
		const addressWy3IcrT = accounts[0]
		const addressMsDE8RK = accounts[0]
		const boolXskgsYM = await XenoFelixXYpQ8Kv.transfer.call(address0Pj20A, uintVW62ZUr, {from: "0x0000000000000000000000000000000000000001"});
		const boolxsLakRF = await XenoFelixXYpQ8Kv.unfreezeAccount.call(addressWy3IcrT, {from: accounts[5]});
		const uint256aJDpyg5 = await XenoFelixXYpQ8Kv.balanceOf.call(addressMsDE8RK, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringPEfZfKZ = "3dw8SYtlR16ysxnKFXFtvLtaxjJW0MzUCSIxiaoTBoi7tt5ko5SDIAFAv229SV3mtSfK1HrmPwB95wvmEiviIXYyeETDkkLEz"
		const stringVcJsfVW = "MGrTdfRQ"
		const uintLdVqpR1 = BigInt("86")
		const XenoFelixPutDYd = await XenoFelix.new(stringPEfZfKZ, stringVcJsfVW, uintLdVqpR1, {from: accounts[0]});
		const uintq2tJVhk = BigInt("958")
		const uintmC68VYz = BigInt("1752")
		const addressoOEG7Yz = accounts[1]
		const uintYlUyhFc = BigInt("1772")
		const addresskowbq43 = accounts[0]
		const uintb2iQUpC = BigInt("981")
		const addressV4wzhOw = accounts[0]
		const addressMub4XBA = accounts[0]
		const addressWX3SgR = accounts[0]
		const addressNL79eSM = accounts[3]
		const boolyghE5xQ = await XenoFelixPutDYd.lock.call(addressoOEG7Yz, uintmC68VYz, uintq2tJVhk, {from: accounts[0]});
		const boolGlX7INi = await XenoFelixPutDYd.transfer.call(addresskowbq43, uintYlUyhFc, {from: accounts[5]});
		const boolbFgT1V3 = await XenoFelixPutDYd.transferFrom.call(addressMub4XBA, addressV4wzhOw, uintb2iQUpC, {from: accounts[1]});
		const uint256BCVwVkt = await XenoFelixPutDYd.allowance.call(addressNL79eSM, addressWX3SgR, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringELDBTCc = "n6TVbu3pppqNOk2ft8kek6yrSf3d7iLm4XjJ15M1yAWvPGufKCS5OlaIbxSFq1IFZtU6TRTVyyXs3qfN"
		const strings7m2DGb = "Qy"
		const uintEpgknil = BigInt("40")
		const XenoFelixbSzas7w = await XenoFelix.new(stringELDBTCc, strings7m2DGb, uintEpgknil, {from: accounts[2]});
		const uintW7ATXG8 = BigInt("81")
		const addressZFNGb2C = accounts[0]
		const address0QrnLf = accounts[3]
		const boolSBP5aH = await XenoFelixbSzas7w.burnOwner.call(addressZFNGb2C, uintW7ATXG8, {from: accounts[4]});
		const addressqBjQn9a = await XenoFelixbSzas7w.removePauser.call(address0QrnLf, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringIyDx0rF = "8C1VhVWg2oGnL9BoEtzyqmNAd3t86wPbml4DzI1sjYQHFvocLyExIYLzGhCVHq0i6PRJ"
		const stringmrPbnyI = "TcGM0XudgHDhAymLrz98tMKOjXEVPQDgL1yeKqAF1qrowjNfUbsDETSk5Gyq7NJNS"
		const uintqfbTB7a = BigInt("88")
		const XenoFelixFmEe0wn = await XenoFelix.new(stringIyDx0rF, stringmrPbnyI, uintqfbTB7a, {from: accounts[3]});
		const uintkKvGhfp = BigInt("1727")
		const addressW1oL0BH = accounts[4]
		const uintM25Mow = BigInt("982")
		const uint7s8nyA = BigInt("312")
		const addressUaGsrOV = accounts[0]
		const uintrM6IeyX = BigInt("2034")
		const uinttMGn4Ur = BigInt("456")
		const addressIvavC7w = accounts[4]
		const boolZ2bhURd = await XenoFelixFmEe0wn.burnOwner.call(addressW1oL0BH, uintkKvGhfp, {from: accounts[3]});
		const stringkHOWrCI = await XenoFelixFmEe0wn.name.call({from: accounts[1]});
		await XenoFelixFmEe0wn.whenPaused.call({from: accounts[3]});
		const boolZdzVCQk = await XenoFelixFmEe0wn.lock.call(addressUaGsrOV, uint7s8nyA, uintM25Mow, {from: accounts[2]});
		const uint256ZwZW8c = await XenoFelixFmEe0wn.burn.call(uintrM6IeyX, {from: accounts[2]});
		const boolbPFj0lh = await XenoFelixFmEe0wn.increaseAllowance.call(addressIvavC7w, uinttMGn4Ur, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintQcVvQQu = BigInt("562")
		const uintoKH4EaS = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintQcVvQQu, uintoKH4EaS, {from: accounts[0]});
		const addressukfwW2y = accounts[3]
		const uintguaL1xy = BigInt("1173")
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressukfwW2y, {from: accounts[0]});
		const uint256efmfJSF = await XenoFelixKXRxuX7.burn.call(uintguaL1xy, {from: accounts[4]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});

		assert.equal(boolZTNmq7h, false)
		await expect(XenoFelixKXRxuX7.burn.call(uintguaL1xy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixUHITPSe = await XenoFelix.new({from: accounts[3]});
		const addressifI5gZ7 = accounts[4]
		const addressldBlYi = accounts[0]
		const addresslMRIOfS = accounts[5]
		const uintfT2cbBT = BigInt("1076")
		const addressXQF8bcP = accounts[3]
		const boolWTO3Wy6 = await XenoFelixUHITPSe.freezeAccount.call(addressifI5gZ7, {from: accounts[1]});
		const uint256nEvVyQv = await XenoFelixUHITPSe.balanceOf.call(addressldBlYi, {from: accounts[1]});
		const uint256ALYLQFc = await XenoFelixUHITPSe.balanceOf.call(addresslMRIOfS, {from: accounts[0]});
		const bool9KFZCv = await XenoFelixUHITPSe.increaseAllowance.call(addressXQF8bcP, uintfT2cbBT, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringIVKfEAQ = "JQeW5297JRNByJKpxzc8xV9KQIrIPXzhU8XucQ3u4DDjvoKAjGnG5cB4cvghoQaCz4IFZV3q4AKjBkA1iMEqNabP30c1"
		const stringjxzI97W = "Pw51nJek8FVTJgawbbsMymAcqnLem4iaNVA8Bk0D0zJUMmFJiSxWH"
		const uintVMe4yPj = BigInt("130")
		const XenoFelixvTNc3aq = await XenoFelix.new(stringIVKfEAQ, stringjxzI97W, uintVMe4yPj, {from: accounts[5]});
		const uintFuF8SkN = BigInt("711")
		const addressq1EKauK = accounts[4]
		const uintYQ7S7kN = BigInt("476")
		const addressGgbks6Z = accounts[1]
		const uintnt0LcUP = BigInt("685")
		const addressWmUg0ZT = accounts[5]
		const addressHi1QGPA = accounts[4]
		const booluXe25mC = await XenoFelixvTNc3aq.approve.call(addressq1EKauK, uintFuF8SkN, {from: accounts[4]});
		const boolRWfn2C = await XenoFelixvTNc3aq.transfer.call(addressGgbks6Z, uintYQ7S7kN, {from: accounts[4]});
		const boolRFgAZBG = await XenoFelixvTNc3aq.transfer.call(addressWmUg0ZT, uintnt0LcUP, {from: accounts[4]});
		const addressQqYR5Se = await XenoFelixvTNc3aq.removePauser.call(addressHi1QGPA, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintTg7Wzem = BigInt("562")
		const uintIsTRhrb = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintTg7Wzem, uintIsTRhrb, {from: accounts[0]});
		const addresscTiQAtH = accounts[4]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addresscTiQAtH, {from: accounts[0]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});

		assert.equal(boolZTNmq7h, false)
		await expect(XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintpkWuve = BigInt("562")
		const uintxIjBLvh = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintpkWuve, uintxIjBLvh, {from: accounts[0]});
		const addressK4a56bM = accounts[4]
		const uintaFB2dle = BigInt("1729")
		const addressLzXu4oc = accounts[3]
		const addressbhtqHuE = accounts[0]
		const uintjAP8WKZ = BigInt("1727")
		const address5cOFGs = accounts[2]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressK4a56bM, {from: accounts[0]});
		const boolbhCKlaj = await XenoFelixKXRxuX7.transferFrom.call(addressbhtqHuE, addressLzXu4oc, uintaFB2dle, {from: accounts[1]});
		const stringP2gtRE = await XenoFelixKXRxuX7.name.call({from: accounts[3]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolcLhKsa = await XenoFelixKXRxuX7.transfer.call(address5cOFGs, uintjAP8WKZ, {from: accounts[2]});

		assert.equal(boolZTNmq7h, false)
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressbhtqHuE, addressLzXu4oc, uintaFB2dle, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintyCmcRuD = BigInt("562")
		const uinthciUwYt = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintyCmcRuD, uinthciUwYt, {from: accounts[0]});
		const uintekhGsPD = BigInt("1466")
		const addressRPpajKb = accounts[3]
		const addressgEkmSSZ = accounts[5]
		const uintSfbqP5E = BigInt("1582")
		const address7eUIWR = accounts[2]
		const addressnSMV2KP = accounts[4]
		const uintpP5kiXg = BigInt("381")
		const addressSiuadun = accounts[4]
		const uintdqmhGJj = BigInt("1932")
		const addressbfzq5uI = accounts[5]
		const boolotGlTxw = await XenoFelixKXRxuX7.burnOwner.call(addressRPpajKb, uintekhGsPD, {from: accounts[0]});
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressgEkmSSZ, {from: accounts[0]});
		const booltDnXdX = await XenoFelixKXRxuX7.transferFrom.call(addressnSMV2KP, address7eUIWR, uintSfbqP5E, {from: accounts[1]});
		const uint256KzNoN0J = await XenoFelixKXRxuX7.burn.call(uintpP5kiXg, {from: accounts[4]});
		const addressZbtXgZx = await XenoFelixKXRxuX7.removePauser.call(addressSiuadun, {from: accounts[0]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolK7sSQDI = await XenoFelixKXRxuX7.transfer.call(addressbfzq5uI, uintdqmhGJj, {from: accounts[2]});

		await expect(XenoFelixKXRxuX7.burnOwner.call(addressRPpajKb, uintekhGsPD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintfM1rptP = BigInt("562")
		const uintIS9umH = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintfM1rptP, uintIS9umH, {from: accounts[0]});
		const addressgUTmuDb = accounts[4]
		const uintKsBMuvb = BigInt("1729")
		const addressAD18a8K = accounts[3]
		const addresscIiQDTP = accounts[0]
		const uintStbGGQW = BigInt("1727")
		const addresszZ8GsR2 = accounts[2]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressgUTmuDb, {from: accounts[0]});
		const uint256wGdkO53 = await XenoFelixKXRxuX7.totalSupply.call({from: accounts[0]});
		const boolbhCKlaj = await XenoFelixKXRxuX7.transferFrom.call(addresscIiQDTP, addressAD18a8K, uintKsBMuvb, {from: accounts[1]});
		const stringP2gtRE = await XenoFelixKXRxuX7.name.call({from: accounts[3]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolcLhKsa = await XenoFelixKXRxuX7.transfer.call(addresszZ8GsR2, uintStbGGQW, {from: accounts[2]});

		assert.equal(boolZTNmq7h, false)
		assert.equal(uint256wGdkO53, BigInt("40836719901645219568072270786364691164057437164326440863071756162132124631040"))
		await expect(XenoFelixKXRxuX7.transferFrom.call(addresscIiQDTP, addressAD18a8K, uintKsBMuvb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintoOjluZ3 = BigInt("562")
		const uintv0Xe61E = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintoOjluZ3, uintv0Xe61E, {from: accounts[0]});
		const addressvAqoBIL = accounts[4]
		const uintfDrqmjN = BigInt("1729")
		const addressBKrzMhB = accounts[3]
		const addressA7kcbuh = accounts[0]
		const addresshjqDj83 = accounts[2]
		const uintgnUNFN1 = BigInt("1727")
		const addressevwJ8AB = accounts[2]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressvAqoBIL, {from: accounts[0]});
		const stringU8iI4cG = await XenoFelixKXRxuX7.symbol.call({from: accounts[2]});
		const boolbhCKlaj = await XenoFelixKXRxuX7.transferFrom.call(addressA7kcbuh, addressBKrzMhB, uintfDrqmjN, {from: accounts[1]});
		const uint256FvNsIzJ = await XenoFelixKXRxuX7.balanceOf.call(addresshjqDj83, {from: accounts[3]});
		const stringP2gtRE = await XenoFelixKXRxuX7.name.call({from: accounts[3]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolcLhKsa = await XenoFelixKXRxuX7.transfer.call(addressevwJ8AB, uintgnUNFN1, {from: accounts[2]});

		assert.equal(boolZTNmq7h, false)
		assert.equal(stringU8iI4cG, "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI")
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressA7kcbuh, addressBKrzMhB, uintfDrqmjN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintnLBjrp9 = BigInt("562")
		const uintCHleWum = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintnLBjrp9, uintCHleWum, {from: accounts[0]});
		const addressKpsWGqm = accounts[3]
		const uintSBiOwMY = BigInt("1160")
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressKpsWGqm, {from: accounts[0]});
		const stringiUOoNua = await XenoFelixKXRxuX7.name.call({from: accounts[2]});
		const uint256efmfJSF = await XenoFelixKXRxuX7.burn.call(uintSBiOwMY, {from: accounts[4]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});

		assert.equal(boolZTNmq7h, false)
		assert.equal(stringiUOoNua, "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW")
		await expect(XenoFelixKXRxuX7.burn.call(uintSBiOwMY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintJRLi7Qx = BigInt("562")
		const uintobP89T = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintJRLi7Qx, uintobP89T, {from: accounts[0]});
		const uintASmlfTu = BigInt("1032")
		const addresspKbpfN1 = accounts[5]
		const boolPNThekf = await XenoFelixKXRxuX7.increaseAllowance.call(addresspKbpfN1, uintASmlfTu, {from: accounts[1]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});

		assert.equal(boolPNThekf, true)
		await expect(XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uint9Y0SHz = BigInt("562")
		const uintXtdl3sC = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uint9Y0SHz, uintXtdl3sC, {from: accounts[0]});
		const uintETDlRUm = BigInt("1770")
		const addressoomCcda = accounts[4]
		await XenoFelixKXRxuX7.renouncePauser.call({from: accounts[4]});
		const boolgEvbRYW = await XenoFelixKXRxuX7.increaseAllowance.call(addressoomCcda, uintETDlRUm, {from: accounts[1]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});

		await expect(XenoFelixKXRxuX7.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringt4aBs2c = "IlsUDpny5sp4YQGqE8Xt0I9kZNsWCskjbOETdnwvjnzJrfk26SRQ9ga1NqcZcVd2sD"
		const stringiLRJAZ7 = "OPQ2aXbkcL7yu7Rmlbjdd6lglVPHtGcrD92i4jPUJVLXc"
		const uinte7lOZRk = BigInt("1510")
		const uintbD7ZIlo = BigInt("66")
		const XenoFelixEOxbWDV = await XenoFelix.new(stringt4aBs2c, stringiLRJAZ7, uinte7lOZRk, uintbD7ZIlo, {from: accounts[4]});
		const uintz8Ri1I2 = BigInt("354")
		const uintgEcCFu = BigInt("1357")
		const addresspIZRaxN = accounts[4]
		const addresslMHHQP = accounts[4]
		const uinta9t3dDX = BigInt("1966")
		const addressoVi2b0q = accounts[1]
		const addresstkjjPTu = accounts[5]
		const address2xwAx7 = accounts[1]
		const boolpLEnz2o = await XenoFelixEOxbWDV.transferWithLock.call(addresspIZRaxN, uintgEcCFu, uintz8Ri1I2, {from: accounts[1]});
		const boolgqv4Jex = await XenoFelixEOxbWDV.unfreezeAccount.call(addresslMHHQP, {from: accounts[3]});
		await XenoFelixEOxbWDV.onlyPauser.call({from: accounts[4]});
		const boolOoLiPmA = await XenoFelixEOxbWDV.burnOwner.call(addressoVi2b0q, uinta9t3dDX, {from: accounts[2]});
		const addressiEtKhgt = await XenoFelixEOxbWDV.notFrozenAndTransaction.call(address2xwAx7, addresstkjjPTu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixEOxbWDV.transferWithLock.call(addresspIZRaxN, uintgEcCFu, uintz8Ri1I2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintrNJ8lCL = BigInt("562")
		const uinttqPXDEG = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintrNJ8lCL, uinttqPXDEG, {from: accounts[0]});
		const addressFIJ2dOC = accounts[0]
		const addressAIm5O7n = accounts[6]
		const boolTZlJP4T = await XenoFelixKXRxuX7.isOwner.call(addressFIJ2dOC, {from: accounts[4]});
		await XenoFelixKXRxuX7.whenNotPaused.call({from: accounts[5]});
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressAIm5O7n, {from: accounts[0]});

		assert.equal(boolTZlJP4T, true)
		await expect(XenoFelixKXRxuX7.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uint4FvpNb = BigInt("562")
		const uintKPIWL27 = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uint4FvpNb, uintKPIWL27, {from: accounts[0]});
		const addressC42oGf = accounts[5]
		const uintNi56A7K = BigInt("1729")
		const addressFGvcxd = accounts[3]
		const addressROc7Y89 = accounts[0]
		const uintU4nZl2z = BigInt("553")
		const addressddsrY3l = accounts[2]
		const uint0WAy2e = BigInt("1727")
		const address31M1lo = accounts[2]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressC42oGf, {from: accounts[0]});
		const uint256wGdkO53 = await XenoFelixKXRxuX7.totalSupply.call({from: accounts[0]});
		const uint8bs32adk = await XenoFelixKXRxuX7.decimals.call({from: accounts[4]});
		const boolbhCKlaj = await XenoFelixKXRxuX7.transferFrom.call(addressROc7Y89, addressFGvcxd, uintNi56A7K, {from: accounts[1]});
		const stringP2gtRE = await XenoFelixKXRxuX7.name.call({from: accounts[3]});
		const boolNSh8bFl = await XenoFelixKXRxuX7.burnOwner.call(addressddsrY3l, uintU4nZl2z, {from: accounts[1]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolcLhKsa = await XenoFelixKXRxuX7.transfer.call(address31M1lo, uint0WAy2e, {from: accounts[2]});

		assert.equal(boolZTNmq7h, false)
		assert.equal(uint256wGdkO53, BigInt("40836719901645219568072270786364691164057437164326440863071756162132124631040"))
		assert.equal(uint8bs32adk, BigInt("77"))
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressROc7Y89, addressFGvcxd, uintNi56A7K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintpAVaXb6 = BigInt("562")
		const uintO6ZmjuA = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintpAVaXb6, uintO6ZmjuA, {from: accounts[0]});
		const uintMj1WkUL = BigInt("205")
		const addresszGinOXT = accounts[0]
		const uintGRB2GdD = BigInt("254")
		const addressUIeEoJJ = accounts[6]
		const addressr4imjKL = accounts[0]
		const boolZOrLzkw = await XenoFelixKXRxuX7.transfer.call(addresszGinOXT, uintMj1WkUL, {from: accounts[0]});
		const boolRcZhgx8 = await XenoFelixKXRxuX7.transferFrom.call(addressr4imjKL, addressUIeEoJJ, uintGRB2GdD, {from: accounts[5]});

		assert.equal(boolZOrLzkw, true)
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressr4imjKL, addressUIeEoJJ, uintGRB2GdD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintkeZvzRm = BigInt("562")
		const uintiqmaEwS = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintkeZvzRm, uintiqmaEwS, {from: accounts[0]});
		const uintVeMxfZh = BigInt("205")
		const addressXPKKFRi = accounts[0]
		const uintbPm4sgr = BigInt("1501")
		const addressAMhaFm6 = accounts[4]
		const uintkWY3DI = BigInt("254")
		const addressJfhGyq = accounts[7]
		const addressN7HUW7g = accounts[0]
		const boolZOrLzkw = await XenoFelixKXRxuX7.transfer.call(addressXPKKFRi, uintVeMxfZh, {from: accounts[0]});
		const boolC5KbX3b = await XenoFelixKXRxuX7.approve.call(addressAMhaFm6, uintbPm4sgr, {from: accounts[5]});
		const boolRcZhgx8 = await XenoFelixKXRxuX7.transferFrom.call(addressN7HUW7g, addressJfhGyq, uintkWY3DI, {from: accounts[5]});
		const boolC4GDSye = await XenoFelixKXRxuX7.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolC5KbX3b, true)
		assert.equal(boolZOrLzkw, true)
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressN7HUW7g, addressJfhGyq, uintkWY3DI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintCu6Zvxf = BigInt("562")
		const uinter5Dfv = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintCu6Zvxf, uinter5Dfv, {from: accounts[0]});
		const addressEHECRP5 = accounts[3]
		const addressqYMGHI = accounts[6]
		const uint256e6V4Nkm = await XenoFelixKXRxuX7.balanceOf.call(addressEHECRP5, {from: accounts[3]});
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressqYMGHI, {from: accounts[0]});

		assert.equal(boolZTNmq7h, false)
		assert.equal(uint256e6V4Nkm, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintsLq5PsX = BigInt("562")
		const uintgTHG2d = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintsLq5PsX, uintgTHG2d, {from: accounts[0]});
		const addressUMylNrI = accounts[4]
		const uintVxYnv6V = BigInt("699")
		const addressEHv5qTO = accounts[4]
		const uintwboHCKg = BigInt("1729")
		const addresssVGHZrz = accounts[3]
		const addresshWPgFDz = accounts[0]
		const addresskLC3bSl = accounts[2]
		const uintUk5vZnI = BigInt("1727")
		const addresso7l9xAP = accounts[2]
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressUMylNrI, {from: accounts[0]});
		const boolbvd4CDG = await XenoFelixKXRxuX7.decreaseAllowance.call(addressEHv5qTO, uintVxYnv6V, {from: accounts[1]});
		const boolbhCKlaj = await XenoFelixKXRxuX7.transferFrom.call(addresshWPgFDz, addresssVGHZrz, uintwboHCKg, {from: accounts[1]});
		const stringP2gtRE = await XenoFelixKXRxuX7.name.call({from: accounts[3]});
		const addressWhPOYSy = await XenoFelixKXRxuX7.notFrozen.call(addresskLC3bSl, {from: accounts[1]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[4]});
		const boolcLhKsa = await XenoFelixKXRxuX7.transfer.call(addresso7l9xAP, uintUk5vZnI, {from: accounts[2]});

		assert.equal(boolZTNmq7h, false)
		await expect(XenoFelixKXRxuX7.decreaseAllowance.call(addressEHv5qTO, uintVxYnv6V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoiPuKdR = "G4lyMYRRQQis2hKW9NidPzOt1QccqUmlEVIisevhLSGehs40NyMlBwciYL1gLq15svWg11frFPVIVhXhDxSpsB4"
		const stringPwb0IBr = "KWJkaDju"
		const uinteCFwcJl = BigInt("1125")
		const uintaHsYCt5 = BigInt("50")
		const XenoFelixDWEZHW = await XenoFelix.new(stringoiPuKdR, stringPwb0IBr, uinteCFwcJl, uintaHsYCt5, {from: accounts[5]});
		const boolouEiw9t = await XenoFelixDWEZHW.paused.call({from: accounts[2]});
		const uint8QlodEY = await XenoFelixDWEZHW.decimals.call({from: accounts[5]});

		assert.equal(boolouEiw9t, false)
		assert.equal(uint8QlodEY, BigInt("50"))
	});

	it('test for XenoFelix', async () => {
		const stringDQDocol = "LoYMKC78Wv522o3B3N1pbhxzlPlveDoDPS"
		const stringqokxlk = "bNhEtpgRfSCc49Vm9zdSQNNev2wjKn7ARD1sT7oaxpV4C"
		const uintCqqwen5 = BigInt("119")
		const XenoFelixSSIEgrr = await XenoFelix.new(stringDQDocol, stringqokxlk, uintCqqwen5, {from: "0x0000000000000000000000000000000000000001"});
		const uintGD4gABk = BigInt("1528")
		const address6EhXPO = accounts[1]
		const addressIuI4cjT = accounts[1]
		const uintUJ1lUxK = BigInt("1589")
		const addresshWqPEvo = "0x0000000000000000000000000000000000000001"
		const uintgVKof8f = BigInt("774")
		const addressB078Wpp = accounts[1]
		const addressJ8SRXaS = accounts[0]
		const booliTo7FPM = await XenoFelixSSIEgrr.transferFrom.call(addressIuI4cjT, address6EhXPO, uintGD4gABk, {from: accounts[4]});
		await XenoFelixSSIEgrr.onlyPauser.call({from: accounts[3]});
		const boolu8eDRvf = await XenoFelixSSIEgrr.decreaseAllowance.call(addresshWqPEvo, uintUJ1lUxK, {from: "0x0000000000000000000000000000000000000001"});
		const boolgawnkfJ = await XenoFelixSSIEgrr.burnOwner.call(addressB078Wpp, uintgVKof8f, {from: accounts[4]});
		const addressXOoZFw = await XenoFelixSSIEgrr.removePauser.call(addressJ8SRXaS, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintAkGzVgX = BigInt("562")
		const uintKN5OrST = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintAkGzVgX, uintKN5OrST, {from: accounts[0]});
		const addresstevsxsv = accounts[0]
		const addressWhd4uyG = accounts[3]
		const addressEx7Q9OA = accounts[4]
		const addressGUfmQ2E = accounts[7]
		const uint256Mb1fBaw = await XenoFelixKXRxuX7.allowance.call(addressWhd4uyG, addresstevsxsv, {from: accounts[4]});
		const uint256e6V4Nkm = await XenoFelixKXRxuX7.balanceOf.call(addressEx7Q9OA, {from: accounts[3]});
		await XenoFelixKXRxuX7.onlyPauser.call({from: accounts[3]});
		await XenoFelixKXRxuX7.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZTNmq7h = await XenoFelixKXRxuX7.isOwner.call(addressGUfmQ2E, {from: accounts[0]});

		assert.equal(uint256Mb1fBaw, BigInt("0"))
		assert.equal(uint256e6V4Nkm, BigInt("0"))
		await expect(XenoFelixKXRxuX7.onlyPauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintQFbQcts = BigInt("562")
		const uintFjtfDjK = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintQFbQcts, uintFjtfDjK, {from: accounts[0]});
		const uintRzm8i72 = BigInt("205")
		const addressDu7CnjA = accounts[1]
		const addressYgkgs5b = accounts[4]
		const addressowFfnEL = accounts[1]
		const uintm3jkZ37 = BigInt("254")
		const addressoQsc0hG = accounts[6]
		const addressHxb6xf = accounts[0]
		const boolZOrLzkw = await XenoFelixKXRxuX7.transfer.call(addressDu7CnjA, uintRzm8i72, {from: accounts[0]});
		const uint256MTS5SXp = await XenoFelixKXRxuX7.balanceOf.call(addressYgkgs5b, {from: accounts[1]});
		const uint256QZcxOjr = await XenoFelixKXRxuX7.totalSupply.call({from: accounts[1]});
		const boolTXnMlEl = await XenoFelixKXRxuX7.freezeAccount.call(addressowFfnEL, {from: accounts[0]});
		const boolRcZhgx8 = await XenoFelixKXRxuX7.transferFrom.call(addressHxb6xf, addressoQsc0hG, uintm3jkZ37, {from: accounts[5]});
		const stringqYEjU0E = await XenoFelixKXRxuX7.symbol.call({from: accounts[2]});

		assert.equal(boolTXnMlEl, true)
		assert.equal(boolZOrLzkw, true)
		assert.equal(uint256MTS5SXp, BigInt("0"))
		assert.equal(uint256QZcxOjr, BigInt("40836719901645219568072270786364691164057437164326440863071756162132124631040"))
		await expect(XenoFelixKXRxuX7.transferFrom.call(addressHxb6xf, addressoQsc0hG, uintm3jkZ37, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintWXoNdBV = BigInt("562")
		const uintHe2UtD9 = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintWXoNdBV, uintHe2UtD9, {from: accounts[0]});
		const uintlu2nMcj = BigInt("510")
		const addressAM6mIa = "0x0000000000000000000000000000000000000001"
		const uintg4C2O8g = BigInt("205")
		const addressJpC98w6 = accounts[1]
		const uintTm9lYnE = BigInt("715")
		const addressAHHg1mZ = accounts[0]
		const uint256QQwg0JK = await XenoFelixKXRxuX7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmH14oXi = await XenoFelixKXRxuX7.unlock.call(addressAM6mIa, uintlu2nMcj, {from: accounts[0]});
		const boolZOrLzkw = await XenoFelixKXRxuX7.transfer.call(addressJpC98w6, uintg4C2O8g, {from: accounts[0]});
		const boolVxCwoRi = await XenoFelixKXRxuX7.unlock.call(addressAHHg1mZ, uintTm9lYnE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QQwg0JK, BigInt("40836719901645219568072270786364691164057437164326440863071756162132124631040"))
		await expect(XenoFelixKXRxuX7.unlock.call(addressAM6mIa, uintlu2nMcj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintbmI2P6u = BigInt("562")
		const uintZ4CMhV = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintbmI2P6u, uintZ4CMhV, {from: accounts[0]});
		const addresswkapcHl = accounts[1]
		const uintGaq7ds = BigInt("200")
		const addressbDuSwbL = accounts[1]
		const uintUJ5JQvG = BigInt("254")
		const addressJQzChVm = accounts[5]
		const addressIW94VK = accounts[0]
		const uint256gPsuxgV = await XenoFelixKXRxuX7.balanceOf.call(addresswkapcHl, {from: accounts[0]});
		const addressn1HVhIj = await XenoFelixKXRxuX7.burnFrom.call(addressbDuSwbL, uintGaq7ds, {from: accounts[5]});
		const boolRcZhgx8 = await XenoFelixKXRxuX7.transferFrom.call(addressIW94VK, addressJQzChVm, uintUJ5JQvG, {from: accounts[5]});

		assert.equal(uint256gPsuxgV, BigInt("0"))
		await expect(XenoFelixKXRxuX7.burnFrom.call(addressbDuSwbL, uintGaq7ds, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcwiqElM = "qoEYmNLtWsqEiMIdtsgNhDuOgqnT8PfUa2rIk7GarpJ2sPmF3uhAY6HmChTU9kc9BtJm3Epl6kHG3GijPVRvakdd2GLsr77aW"
		const stringcJ5Brc = "Z5eMqUw9ChJMdzA7OKjwLbSCve2EI5p9yZ2yEL6UoqWpCOopZIslAwKmcYI"
		const uintZS90cGX = BigInt("562")
		const uinttxjkQb4 = BigInt("77")
		const XenoFelixKXRxuX7 = await XenoFelix.new(stringcwiqElM, stringcJ5Brc, uintZS90cGX, uinttxjkQb4, {from: accounts[0]});
		const addressxAz9lro = accounts[5]
		const uintGYxhbiq = BigInt("205")
		const addressy09zeWp = accounts[1]
		const addressL0HOR2 = await XenoFelixKXRxuX7.addPauser.call(addressxAz9lro, {from: accounts[0]});
		const boolHdGiYfL = await XenoFelixKXRxuX7.acceptOwnership.call({from: accounts[5]});
		const boolZOrLzkw = await XenoFelixKXRxuX7.transfer.call(addressy09zeWp, uintGYxhbiq, {from: accounts[0]});

		await expect(XenoFelixKXRxuX7.acceptOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringj7rJQMz = "u85bRHNNxpdzD8NABu5qkFM49BZCOkcMWg8PBIoQhjwDjF1Ma7"
		const stringK8mbVNN = "a7TA5NhbjzJ1IXJTM7FtfaTgMgs6lTiMH"
		const uintd0usQA = BigInt("92")
		const XenoFelixV28f8aD = await XenoFelix.new(stringj7rJQMz, stringK8mbVNN, uintd0usQA, {from: accounts[1]});
		const addressNhLx6BX = accounts[0]
		const uintQVyMs4e = BigInt("1115")
		const addressJPVqeR5 = accounts[0]
		const addressJozII3Y = accounts[4]
		const uint256pTKlMM = await XenoFelixV28f8aD.balanceOf.call(addressNhLx6BX, {from: accounts[0]});
		const uint256mpaJ2wU = await XenoFelixV28f8aD.totalSupply.call({from: accounts[3]});
		const uint256V87pxzs = await XenoFelixV28f8aD.totalSupply.call({from: accounts[1]});
		const boolhhNiS3y = await XenoFelixV28f8aD.transferFrom.call(addressJozII3Y, addressJPVqeR5, uintQVyMs4e, {from: accounts[1]});
		await XenoFelixV28f8aD.unpause.call({from: accounts[3]});
	});
})
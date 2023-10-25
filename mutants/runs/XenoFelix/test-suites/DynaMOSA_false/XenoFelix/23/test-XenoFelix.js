const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringR5uLbqR = "ecvK2Kln4rj"
		const stringYDij09u = "UUPeMfMqArTf"
		const uinterh7CvV = BigInt("229")
		const XenoFelixnKfsDo = await XenoFelix.new(stringR5uLbqR, stringYDij09u, uinterh7CvV, {from: accounts[2]});
		const addressWMFN0wU = accounts[4]
		const uint0sfTfa = BigInt("1100")
		const addressISYDMxo = accounts[1]
		const addressXO5GfN = await XenoFelixnKfsDo.notFrozen.call(addressWMFN0wU, {from: accounts[5]});
		await XenoFelixnKfsDo.whenPaused.call({from: accounts[1]});
		const boolJFakmGy = await XenoFelixnKfsDo.increaseAllowance.call(addressISYDMxo, uint0sfTfa, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringGWgyrtw = "1jeYdZtrtHqFirL10xw3uyh05a32NlUxezpRVbMOeWi3qtOUSihasG"
		const stringlclniYt = "6rDRuv4kqFtgmGgaNgIILp5t7NZ396rWP1DlCrFvRl95R3hCJjGyUSKYOReA0Kq8OgrbRrlGTBC4BldCgyzxWacosUSkMY"
		const uintDvNYdx = BigInt("225")
		const XenoFelixeZ3lJid = await XenoFelix.new(stringGWgyrtw, stringlclniYt, uintDvNYdx, {from: "0x0000000000000000000000000000000000000001"});
		const uintDXW7qVG = BigInt("1662")
		const addressGKeQXbZ = accounts[4]
		const addressMdpZxyM = accounts[0]
		const uintR99ovh = BigInt("1608")
		const address1hMPI3 = accounts[2]
		const boolPmlEaAo = await XenoFelixeZ3lJid.transferFrom.call(addressMdpZxyM, addressGKeQXbZ, uintDXW7qVG, {from: accounts[0]});
		const uint256nDIP9fO = await XenoFelixeZ3lJid.totalSupply.call({from: accounts[5]});
		const uint256B0SO72X = await XenoFelixeZ3lJid.totalSupply.call({from: accounts[4]});
		const boolGnz7pBg = await XenoFelixeZ3lJid.decreaseAllowance.call(address1hMPI3, uintR99ovh, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringYOFBRG = "bYMs41EYiHDK2x2pBK48veXdDpU6F5QXsF2nevrKqFvimUmxMuW695aiw5djuJ1fEtpuQ"
		const stringh1WHORN = "ulqCJYzy3kmk9o1bejYnnMg19R31PmdL"
		const uintBpybah6 = BigInt("838")
		const uintRy5gVz0 = BigInt("116")
		const XenoFelixqqh2dxo = await XenoFelix.new(stringYOFBRG, stringh1WHORN, uintBpybah6, uintRy5gVz0, {from: accounts[4]});
		const addressYPT3CKe = accounts[4]
		const uintm9gIq6L = BigInt("1767")
		const addressruqeoUW = accounts[4]
		const uintOt3HOJO = BigInt("21")
		const addressoOLyeGV = accounts[2]
		const uintcI1s6ni = BigInt("565")
		const addressv0fwLaE = "0x0000000000000000000000000000000000000001"
		await XenoFelixqqh2dxo.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressBtopzwa = await XenoFelixqqh2dxo.transferOwnership.call(addressYPT3CKe, {from: accounts[3]});
		const boolmgYNUdV = await XenoFelixqqh2dxo.transfer.call(addressruqeoUW, uintm9gIq6L, {from: accounts[2]});
		const boolICdX3Ys = await XenoFelixqqh2dxo.approve.call(addressoOLyeGV, uintOt3HOJO, {from: accounts[3]});
		const boole2pZBIo = await XenoFelixqqh2dxo.transfer.call(addressv0fwLaE, uintcI1s6ni, {from: accounts[3]});
		await XenoFelixqqh2dxo.whenPaused.call({from: accounts[1]});

		await expect(XenoFelixqqh2dxo.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixTDfPQrK = await XenoFelix.new({from: accounts[0]});
		const addressY0TtGxy = accounts[3]
		const addressAifDEYh = accounts[3]
		const stringUUxTBi = await XenoFelixTDfPQrK.name.call({from: accounts[0]});
		const uint256KP0y5yh = await XenoFelixTDfPQrK.allowance.call(addressAifDEYh, addressY0TtGxy, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringyEK2mPA = "3Bm6GLGK5Qv6XVcvaxq7Y9megveYQWBmR9qJc7NN"
		const stringX4IJyzW = "fflEH7pPkJCsM"
		const uintenihwo = BigInt("119")
		const XenoFelixK7rhOMv = await XenoFelix.new(stringyEK2mPA, stringX4IJyzW, uintenihwo, {from: accounts[4]});
		const uintmXtm1XA = BigInt("639")
		const uintDo7Xacp = BigInt("1603")
		const addressD0hk4WP = "0x0000000000000000000000000000000000000001"
		const addressZDvNMid = accounts[1]
		const addressAwAAvfY = accounts[3]
		const boolQ8Hrin = await XenoFelixK7rhOMv.transferWithLock.call(addressD0hk4WP, uintDo7Xacp, uintmXtm1XA, {from: accounts[2]});
		const uint8Bmz26df = await XenoFelixK7rhOMv.decimals.call({from: accounts[5]});
		const boolo4vnC9f = await XenoFelixK7rhOMv.acceptOwnership.call({from: accounts[1]});
		const uint256Lylnv0Q = await XenoFelixK7rhOMv.allowance.call(addressAwAAvfY, addressZDvNMid, {from: accounts[5]});
		const uint256wxqaLmU = await XenoFelixK7rhOMv.totalSupply.call({from: accounts[3]});
		await XenoFelixK7rhOMv.unpause.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringMjWz5tJ = "1gguF392l6co3jsXVCrhrqi7kp4i5OHrQbtgTUcr"
		const stringFJKNYT1 = "R"
		const uintlzwaVkj = BigInt("46")
		const XenoFelixznHKNl = await XenoFelix.new(stringMjWz5tJ, stringFJKNYT1, uintlzwaVkj, {from: accounts[1]});
		const addresseEye0ij = accounts[3]
		const uintWhmdPBO = BigInt("1487")
		const addressWGNqfeO = accounts[4]
		const uintGKX1GgE = BigInt("677")
		const addressgSlA1KU = accounts[3]
		const uintLOg2C3M = BigInt("1104")
		const addressLDnEOMh = accounts[4]
		const addressy54zk0P = await XenoFelixznHKNl.transferOwnership.call(addresseEye0ij, {from: accounts[5]});
		const strings4NtE3s = await XenoFelixznHKNl.name.call({from: accounts[1]});
		const uint8I3NdaR2 = await XenoFelixznHKNl.decimals.call({from: accounts[5]});
		const boolK0nT8c3 = await XenoFelixznHKNl.approve.call(addressWGNqfeO, uintWhmdPBO, {from: accounts[4]});
		const addressjaHMcB = await XenoFelixznHKNl.burnFrom.call(addressgSlA1KU, uintGKX1GgE, {from: accounts[2]});
		const addressnuWq99g = await XenoFelixznHKNl.burnFrom.call(addressLDnEOMh, uintLOg2C3M, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintLEU7ZEk = BigInt("2009")
		const uintHPB4si1 = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintLEU7ZEk, uintHPB4si1, {from: accounts[3]});
		const uintvP5oee7 = BigInt("1556")
		const addressXtFMRiA = accounts[2]
		const addressbVmFysC = accounts[4]
		const addressiL2lOr = accounts[5]
		const boolgNfrU5 = await XenoFelixVajsfbg.transfer.call(addressXtFMRiA, uintvP5oee7, {from: accounts[5]});
		await XenoFelixVajsfbg.unpause.call({from: accounts[5]});
		const addresszEWBpLx = await XenoFelixVajsfbg.notFrozenAndTransaction.call(addressiL2lOr, addressbVmFysC, {from: accounts[1]});

		await expect(XenoFelixVajsfbg.transfer.call(addressXtFMRiA, uintvP5oee7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXyrotDa = "OJvYxJIHtkAGCayjF42eIJXTsQhIc4uLeZRJI96uxylp8eLde1HKaj78rgnUIpit1K0GDkVTxitDFmAMcjR2sEUHQVgDgDYLi"
		const stringdoKFnuw = "Ns65sD1Vd1Dso3aynleb5vdiu7oujMPqO7zkdy9zbIWF6zb"
		const uintTklREt8 = BigInt("415")
		const uintmKZCBZ8 = BigInt("90")
		const XenoFelixB1dHrT9 = await XenoFelix.new(stringXyrotDa, stringdoKFnuw, uintTklREt8, uintmKZCBZ8, {from: accounts[4]});
		const uintCGXK0F6 = BigInt("1443")
		const addressNjGNVH8 = "0x0000000000000000000000000000000000000001"
		const addressdxq1oEk = accounts[3]
		const boolG8w6z2x = await XenoFelixB1dHrT9.transferFrom.call(addressdxq1oEk, addressNjGNVH8, uintCGXK0F6, {from: accounts[3]});
		await XenoFelixB1dHrT9.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixB1dHrT9.whenPaused.call({from: accounts[5]});
		const stringVehfZui = await XenoFelixB1dHrT9.name.call({from: accounts[3]});

		await expect(XenoFelixB1dHrT9.transferFrom.call(addressdxq1oEk, addressNjGNVH8, uintCGXK0F6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintJLq2mWZ = BigInt("2009")
		const uintEu8TYpv = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintJLq2mWZ, uintEu8TYpv, {from: accounts[3]});
		const addresssoxS5uu = accounts[4]
		const addresslzg27xV = accounts[6]
		await XenoFelixVajsfbg.unpause.call({from: accounts[5]});
		const addresszEWBpLx = await XenoFelixVajsfbg.notFrozenAndTransaction.call(addresslzg27xV, addresssoxS5uu, {from: accounts[1]});

		await expect(XenoFelixVajsfbg.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintSE4BjLA = BigInt("1476")
		const uinttlZkUj9 = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintSE4BjLA, uinttlZkUj9, {from: accounts[2]});
		const addressNCUbKur = accounts[4]
		const uintlvoRdLo = BigInt("360")
		const addresslWBN5P2 = accounts[5]
		const addressgUcy5ZA = accounts[4]
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addressNCUbKur, {from: accounts[1]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressgUcy5ZA, addresslWBN5P2, uintlvoRdLo, {from: accounts[5]});
		const uint256fQIKlK8 = await XenoFelixkozHKnG.totalSupply.call({from: accounts[2]});

		assert.equal(uint256UXlY4Ym, BigInt("0"))
		await expect(XenoFelixkozHKnG.transferFrom.call(addressgUcy5ZA, addresslWBN5P2, uintlvoRdLo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintlQ3pSvh = BigInt("1476")
		const uintKdsygPJ = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintlQ3pSvh, uintKdsygPJ, {from: accounts[2]});
		const addresshEULe9h = accounts[5]
		const uintcWQzj8u = BigInt("779")
		const uintx8weSzm = BigInt("345")
		const addressTAFGrgI = accounts[4]
		const addressMhppVWI = accounts[5]
		const uintRzyaOOE = BigInt("249")
		const uintQtHVPNk = BigInt("360")
		const addressVJzX7vj = accounts[5]
		const addressJlPJVpc = accounts[4]
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addresshEULe9h, {from: accounts[1]});
		const boolwi4Kc6b = await XenoFelixkozHKnG.transferWithLock.call(addressTAFGrgI, uintx8weSzm, uintcWQzj8u, {from: accounts[2]});
		const addressz7hPBEn = await XenoFelixkozHKnG.removePauser.call(addressMhppVWI, {from: accounts[3]});
		const uint256aY0jD4E = await XenoFelixkozHKnG.burn.call(uintRzyaOOE, {from: accounts[3]});
		await XenoFelixkozHKnG.onlyNewOwner.call({from: accounts[0]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressJlPJVpc, addressVJzX7vj, uintQtHVPNk, {from: accounts[5]});

		assert.equal(boolwi4Kc6b, true)
		assert.equal(uint256UXlY4Ym, BigInt("0"))
		await expect(XenoFelixkozHKnG.removePauser.call(addressMhppVWI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringng71SX = "Cb2lwrm4oBRRCHB8n79vAG4s4bvJ27FHArcJJVj5U5PUnuoiYcSMq974cY2xltT"
		const stringo34W5CT = "4wCLi"
		const uintazmu8sU = BigInt("236")
		const XenoFelixW8xQvBX = await XenoFelix.new(stringng71SX, stringo34W5CT, uintazmu8sU, {from: accounts[0]});
		const addressoDwH1uj = accounts[5]
		const addressltIjY8j = accounts[3]
		const address8S4ac1 = accounts[4]
		const addressuXyeHwQ = accounts[0]
		const uintMqX4xnb = BigInt("1992")
		const addresseXsdH6y = accounts[0]
		const uintOXnm1mD = BigInt("1657")
		const addressBebYoix = accounts[2]
		const uint256OUkz9tD = await XenoFelixW8xQvBX.balanceOf.call(addressoDwH1uj, {from: accounts[1]});
		const addressEnlqbIJ = await XenoFelixW8xQvBX.notFrozenAndTransaction.call(address8S4ac1, addressltIjY8j, {from: accounts[1]});
		await XenoFelixW8xQvBX.whenPaused.call({from: accounts[4]});
		const addresslqTAv5w = await XenoFelixW8xQvBX.addPauser.call(addressuXyeHwQ, {from: accounts[3]});
		const addressh228Cnw = await XenoFelixW8xQvBX.burnFrom.call(addresseXsdH6y, uintMqX4xnb, {from: accounts[4]});
		const boolpa2HYG = await XenoFelixW8xQvBX.transfer.call(addressBebYoix, uintOXnm1mD, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintiu6RrQk = BigInt("2009")
		const uintSiPIAWf = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintiu6RrQk, uintSiPIAWf, {from: accounts[3]});
		const uintYksbVkM = BigInt("769")
		const addressEN3WpPX = accounts[4]
		const uintA90m4eX = BigInt("1556")
		const addressr51L57 = accounts[2]
		const addresstjjFpHz = accounts[6]
		const uintBzJZWWC = BigInt("31")
		const addresssJb9Jhh = accounts[1]
		const addressgtF3Fnc = accounts[4]
		const addressm2Fl29 = accounts[6]
		const boolV5Sq5V = await XenoFelixVajsfbg.increaseAllowance.call(addressEN3WpPX, uintYksbVkM, {from: accounts[2]});
		const boolgNfrU5 = await XenoFelixVajsfbg.transfer.call(addressr51L57, uintA90m4eX, {from: accounts[5]});
		const addressCI3HfHn = await XenoFelixVajsfbg.notFrozen.call(addresstjjFpHz, {from: accounts[2]});
		const boolsl3UOzi = await XenoFelixVajsfbg.approve.call(addresssJb9Jhh, uintBzJZWWC, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixVajsfbg.pause.call({from: accounts[5]});
		const addresszEWBpLx = await XenoFelixVajsfbg.notFrozenAndTransaction.call(addressm2Fl29, addressgtF3Fnc, {from: accounts[1]});

		assert.equal(boolV5Sq5V, true)
		await expect(XenoFelixVajsfbg.transfer.call(addressr51L57, uintA90m4eX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintuVEAr0F = BigInt("2009")
		const uintR9RPB8j = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintuVEAr0F, uintR9RPB8j, {from: accounts[3]});
		const addressCe3tk0N = accounts[3]
		const addressvM15hxn = accounts[1]
		const addressh1TtkEO = accounts[2]
		const uintyCot7ij = BigInt("1556")
		const addressDYpTdMA = accounts[2]
		const addressM4QTuj = accounts[4]
		const addressEgy85XS = accounts[6]
		const uint256CzEr14 = await XenoFelixVajsfbg.allowance.call(addressvM15hxn, addressCe3tk0N, {from: accounts[4]});
		const addressHKr1zk = await XenoFelixVajsfbg.transferOwnership.call(addressh1TtkEO, {from: accounts[1]});
		const boolgNfrU5 = await XenoFelixVajsfbg.transfer.call(addressDYpTdMA, uintyCot7ij, {from: accounts[5]});
		const addresszEWBpLx = await XenoFelixVajsfbg.notFrozenAndTransaction.call(addressEgy85XS, addressM4QTuj, {from: accounts[1]});

		assert.equal(uint256CzEr14, BigInt("0"))
		await expect(XenoFelixVajsfbg.transferOwnership.call(addressh1TtkEO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringuVLH5Hl = "kFAWA6B3lxYWUtRUcfk2tMddVy7Vv2qQeH1CZM9g8o8PcSl"
		const stringUpxxDc = "JfkHIBEMZvEaojiBo2SnkpX3oi"
		const uintYJqpBwy = BigInt("1633")
		const uintqASgvfn = BigInt("11")
		const XenoFelixhpNdwyl = await XenoFelix.new(stringuVLH5Hl, stringUpxxDc, uintYJqpBwy, uintqASgvfn, {from: accounts[3]});
		const addressOCrlgUa = accounts[1]
		const uintKEvIpR = BigInt("879")
		const addressOaYx4jb = accounts[1]
		const addressOdHjZN = accounts[2]
		const addressf3EdPm8 = "0x0000000000000000000000000000000000000001"
		const uint256IhzfMaM = await XenoFelixhpNdwyl.balanceOf.call(addressOCrlgUa, {from: accounts[0]});
		const addresscDD88of = await XenoFelixhpNdwyl.burnFrom.call(addressOaYx4jb, uintKEvIpR, {from: accounts[4]});
		const uint256duqMGoa = await XenoFelixhpNdwyl.allowance.call(addressf3EdPm8, addressOdHjZN, {from: accounts[4]});

		assert.equal(uint256IhzfMaM, BigInt("0"))
		await expect(XenoFelixhpNdwyl.burnFrom.call(addressOaYx4jb, uintKEvIpR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiay6ZeT = "tGKrmBbyyJS3FNn5xCnFfxwn1IDCRZ17a8xbVlA5E24CqzXbwdgY"
		const stringcWyNGaN = "8uOCTZVnNEk3IijKDDOulox5USNnJ"
		const uintZ2fvX4z = BigInt("283")
		const uintfoCB3mD = BigInt("0")
		const XenoFelixrcQRb2B = await XenoFelix.new(stringiay6ZeT, stringcWyNGaN, uintZ2fvX4z, uintfoCB3mD, {from: accounts[3]});
		const addressdrsnJPq = accounts[2]
		const addressOCZcpP = accounts[0]
		const uintsrWfiNn = BigInt("291")
		const uintzhyF7km = BigInt("1335")
		const addressK8HxcFi = accounts[3]
		const uintFmbUC1Q = BigInt("556")
		const addresswGE0QP5 = accounts[4]
		const uint256ERDEDmC = await XenoFelixrcQRb2B.balanceOf.call(addressdrsnJPq, {from: accounts[3]});
		const uint2564IZM2Q = await XenoFelixrcQRb2B.balanceOf.call(addressOCZcpP, {from: accounts[1]});
		const booloB9y5yT = await XenoFelixrcQRb2B.paused.call({from: accounts[4]});
		const boolCeBeJ9P = await XenoFelixrcQRb2B.transferWithLock.call(addressK8HxcFi, uintzhyF7km, uintsrWfiNn, {from: accounts[0]});
		const boolAFMgNV9 = await XenoFelixrcQRb2B.transfer.call(addresswGE0QP5, uintFmbUC1Q, {from: accounts[4]});

		assert.equal(booloB9y5yT, false)
		assert.equal(uint2564IZM2Q, BigInt("0"))
		assert.equal(uint256ERDEDmC, BigInt("0"))
		await expect(XenoFelixrcQRb2B.transferWithLock.call(addressK8HxcFi, uintzhyF7km, uintsrWfiNn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintnRJSaG8 = BigInt("1476")
		const uintexGy575 = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintnRJSaG8, uintexGy575, {from: accounts[2]});
		const addresso8mfhlf = accounts[4]
		const uintHpF4Mvz = BigInt("351")
		const addressBQXausA = accounts[5]
		const addressrYopd9Q = accounts[4]
		const addressunWF674 = accounts[3]
		const addressyg5a7XI = accounts[2]
		const stringxQbkrmn = await XenoFelixkozHKnG.name.call({from: accounts[3]});
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addresso8mfhlf, {from: accounts[1]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressrYopd9Q, addressBQXausA, uintHpF4Mvz, {from: accounts[5]});
		const uint256kO1hvbJ = await XenoFelixkozHKnG.balanceOf.call(addressunWF674, {from: accounts[3]});
		const uint256fQIKlK8 = await XenoFelixkozHKnG.totalSupply.call({from: accounts[2]});
		const boolPM7Kn2m = await XenoFelixkozHKnG.freezeAccount.call(addressyg5a7XI, {from: accounts[4]});

		assert.equal(stringxQbkrmn, "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE")
		assert.equal(uint256UXlY4Ym, BigInt("0"))
		await expect(XenoFelixkozHKnG.transferFrom.call(addressrYopd9Q, addressBQXausA, uintHpF4Mvz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintzN6u6Ln = BigInt("2009")
		const uinthwtTSYg = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintzN6u6Ln, uinthwtTSYg, {from: accounts[3]});
		const uintFzqbQPy = BigInt("403")
		const uintXl4P1d6 = BigInt("1556")
		const addressTJVuaFn = accounts[2]
		const addressyDZAUrf = accounts[4]
		const addressJA1H6w7 = accounts[5]
		const uintnysbba0 = BigInt("1577")
		const addressp2YFYZq = accounts[2]
		const uint256IO0TKtu = await XenoFelixVajsfbg.burn.call(uintFzqbQPy, {from: accounts[0]});
		const boolgNfrU5 = await XenoFelixVajsfbg.transfer.call(addressTJVuaFn, uintXl4P1d6, {from: accounts[5]});
		const addresszEWBpLx = await XenoFelixVajsfbg.notFrozenAndTransaction.call(addressJA1H6w7, addressyDZAUrf, {from: accounts[1]});
		const boolf3SiJa6 = await XenoFelixVajsfbg.increaseAllowance.call(addressp2YFYZq, uintnysbba0, {from: accounts[0]});

		await expect(XenoFelixVajsfbg.burn.call(uintFzqbQPy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFwdN7H = "zcDOyaWCaWd9CJDBx7qY5ow0bU7xHyKnBVKH"
		const stringeuPTFZg = "Y"
		const uinte6tmf4w = BigInt("225")
		const XenoFelixmExo2he = await XenoFelix.new(stringFwdN7H, stringeuPTFZg, uinte6tmf4w, {from: accounts[5]});
		const uintgE7OmKR = BigInt("1586")
		const addresspWKLw3q = accounts[2]
		const addressoEzYYpC = accounts[1]
		const addressPtVaaip = accounts[0]
		await XenoFelixmExo2he.whenPaused.call({from: accounts[2]});
		const addressN8bGQHz = await XenoFelixmExo2he.burnFrom.call(addresspWKLw3q, uintgE7OmKR, {from: accounts[1]});
		const boolQIgbW2j = await XenoFelixmExo2he.freezeAccount.call(addressoEzYYpC, {from: accounts[2]});
		const uint256XEdH3j = await XenoFelixmExo2he.balanceOf.call(addressPtVaaip, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringpmuZSaW = "iK6U"
		const stringLEUbdAn = "nW78hfkgI98wK9xho72CPyq9K0AsVwtBojAxRDM1NlRUgHTMxCmLb42JWlJiUstIkP3hkPG91"
		const uintnVCTEfK = BigInt("612")
		const uintIesvtm = BigInt("227")
		const XenoFelixEtYErIq = await XenoFelix.new(stringpmuZSaW, stringLEUbdAn, uintnVCTEfK, uintIesvtm, {from: accounts[4]});
		const addressb7kjfjP = accounts[0]
		const addressHFodw5a = accounts[3]
		const uint2560ciADz = await XenoFelixEtYErIq.balanceOf.call(addressb7kjfjP, {from: accounts[0]});
		const uint256RFAylCt = await XenoFelixEtYErIq.totalSupply.call({from: accounts[3]});
		const booluDyoRm0 = await XenoFelixEtYErIq.freezeAccount.call(addressHFodw5a, {from: accounts[0]});
		const boolVCFAhap = await XenoFelixEtYErIq.paused.call({from: accounts[1]});

		assert.equal(uint2560ciADz, BigInt("0"))
		assert.equal(uint256RFAylCt, BigInt("20403816484013427023554209206024403470883884965203697809569001565025317421056"))
		await expect(XenoFelixEtYErIq.freezeAccount.call(addressHFodw5a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringSN9vXk = "iR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN"
		const stringvAsuiSm = "NXGZ2zE6oMdCJ5Kz3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rdNjaPAfCE1S9e2o5PXTmyNsHXx"
		const uintPPlxhQs = BigInt("2009")
		const uintPYh3Ku9 = BigInt("22")
		const XenoFelixVajsfbg = await XenoFelix.new(stringSN9vXk, stringvAsuiSm, uintPPlxhQs, uintPYh3Ku9, {from: accounts[3]});
		const uintsFNp7HP = BigInt("1556")
		const addressOmmpH5g = accounts[2]
		const addresscMJnPS0 = accounts[1]
		const uint8G7osUeE = await XenoFelixVajsfbg.decimals.call({from: accounts[2]});
		const boolgNfrU5 = await XenoFelixVajsfbg.transfer.call(addressOmmpH5g, uintsFNp7HP, {from: accounts[5]});
		const uint256SRqdTUY = await XenoFelixVajsfbg.balanceOf.call(addresscMJnPS0, {from: accounts[2]});
		await XenoFelixVajsfbg.renouncePauser.call({from: accounts[2]});

		assert.equal(uint8G7osUeE, BigInt("22"))
		await expect(XenoFelixVajsfbg.transfer.call(addressOmmpH5g, uintsFNp7HP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpmuZSaW = "iK6U"
		const stringLEUbdAn = "nW78hfkgI98wK9xho72CPyq9K0AsVwtBojAxRDM1NlRUgHTMxCmLb42JWlJiUstIkP3hkPG91"
		const uintw6Z2lJ4 = BigInt("612")
		const uintjSP7AxW = BigInt("227")
		const XenoFelixEtYErIq = await XenoFelix.new(stringpmuZSaW, stringLEUbdAn, uintw6Z2lJ4, uintjSP7AxW, {from: accounts[4]});
		const uintGyRL8P4 = BigInt("20")
		const addressBhcyKgI = accounts[1]
		const addressqzBYhpI = accounts[0]
		const addressHFhp3nR = accounts[3]
		const boolLJUsSAr = await XenoFelixEtYErIq.approve.call(addressBhcyKgI, uintGyRL8P4, {from: accounts[1]});
		const uint2560ciADz = await XenoFelixEtYErIq.balanceOf.call(addressqzBYhpI, {from: accounts[0]});
		const uint256RFAylCt = await XenoFelixEtYErIq.totalSupply.call({from: accounts[3]});
		const booluDyoRm0 = await XenoFelixEtYErIq.freezeAccount.call(addressHFhp3nR, {from: accounts[0]});
		const boolVCFAhap = await XenoFelixEtYErIq.paused.call({from: accounts[1]});

		assert.equal(boolLJUsSAr, true)
		assert.equal(uint2560ciADz, BigInt("0"))
		assert.equal(uint256RFAylCt, BigInt("20403816484013427023554209206024403470883884965203697809569001565025317421056"))
		await expect(XenoFelixEtYErIq.freezeAccount.call(addressHFhp3nR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintMYerKVt = BigInt("1476")
		const uintS7Ba5Pf = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintMYerKVt, uintS7Ba5Pf, {from: accounts[2]});
		const addressesEFuXz = accounts[4]
		const uintWjARGqg = BigInt("339")
		const addresszxCpozS = accounts[6]
		const addressvtEgrsi = accounts[4]
		await XenoFelixkozHKnG.renouncePauser.call({from: accounts[3]});
		const boolXFueDre = await XenoFelixkozHKnG.acceptOwnership.call({from: accounts[5]});
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addressesEFuXz, {from: accounts[1]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressvtEgrsi, addresszxCpozS, uintWjARGqg, {from: accounts[5]});
		const uint256fQIKlK8 = await XenoFelixkozHKnG.totalSupply.call({from: accounts[2]});

		await expect(XenoFelixkozHKnG.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiay6ZeT = "tGKrmBbyyJS3FNn5xCnFfxwn1IDCRZ17a8xbVlA5E24CqzXbwdgY"
		const stringcWyNGaN = "8uOCTZVnNEk3IijKDDOulox5USNnJ"
		const uintneGi0Yn = BigInt("283")
		const uintAuHU6Ky = BigInt("0")
		const XenoFelixrcQRb2B = await XenoFelix.new(stringiay6ZeT, stringcWyNGaN, uintneGi0Yn, uintAuHU6Ky, {from: accounts[3]});
		const uintRizBqZ9 = BigInt("2020")
		const addressSByp18h = accounts[2]
		const addressNG8A0WF = accounts[0]
		const addressLD5cCP = "0x0000000000000000000000000000000000000001"
		const uintUGmpz9V = BigInt("565")
		const addressHQ58Ntq = accounts[4]
		const uintFcrYo5C = BigInt("1732")
		const boolEI3xl7U = await XenoFelixrcQRb2B.decreaseAllowance.call(addressSByp18h, uintRizBqZ9, {from: accounts[2]});
		const uint2564IZM2Q = await XenoFelixrcQRb2B.balanceOf.call(addressNG8A0WF, {from: accounts[1]});
		const uint256pE0JlT7 = await XenoFelixrcQRb2B.balanceOf.call(addressLD5cCP, {from: accounts[2]});
		const boolAFMgNV9 = await XenoFelixrcQRb2B.transfer.call(addressHQ58Ntq, uintUGmpz9V, {from: accounts[4]});
		const uint256wrZ6mFa = await XenoFelixrcQRb2B.burn.call(uintFcrYo5C, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixrcQRb2B.decreaseAllowance.call(addressSByp18h, uintRizBqZ9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringmMCQMy8 = "H7xrr7qixyu"
		const stringJCRNPD = "7oDDGROE7V"
		const uintYGSMqEz = BigInt("189")
		const XenoFelixprhF91g = await XenoFelix.new(stringmMCQMy8, stringJCRNPD, uintYGSMqEz, {from: accounts[3]});
		const addressJ6I03lq = accounts[2]
		await XenoFelixprhF91g.renouncePauser.call({from: accounts[0]});
		const addressz2LKMNk = await XenoFelixprhF91g.addPauser.call(addressJ6I03lq, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintKDbqO73 = BigInt("1476")
		const uintraw71Br = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintKDbqO73, uintraw71Br, {from: accounts[2]});
		const addresszClmoK = accounts[4]
		const uintN3y5XM = BigInt("339")
		const addressmOwYRYX = accounts[6]
		const addressySTGYm4 = accounts[4]
		const uinti1StRO0 = BigInt("1404")
		const uintVgJxfRR = BigInt("720")
		const addressZSsSEB4 = accounts[0]
		const stringbFaIcII = await XenoFelixkozHKnG.symbol.call({from: accounts[4]});
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addresszClmoK, {from: accounts[1]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressySTGYm4, addressmOwYRYX, uintN3y5XM, {from: accounts[5]});
		await XenoFelixkozHKnG.pause.call({from: accounts[1]});
		const uint256fQIKlK8 = await XenoFelixkozHKnG.totalSupply.call({from: accounts[2]});
		const uint256vwvAK8r = await XenoFelixkozHKnG.burn.call(uinti1StRO0, {from: accounts[0]});
		const boolynsIrm = await XenoFelixkozHKnG.unlock.call(addressZSsSEB4, uintVgJxfRR, {from: accounts[4]});

		assert.equal(stringbFaIcII, "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o")
		assert.equal(uint256UXlY4Ym, BigInt("0"))
		await expect(XenoFelixkozHKnG.transferFrom.call(addressySTGYm4, addressmOwYRYX, uintN3y5XM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQ0z2Bey = "4cCVvOtviNcV0QbNGbY5CO9WzifRoXKOuTs4qolCA8SqUkPdIi4ABzGNr43x34NeW"
		const stringCPowyGX = "TspUyvvSVfn2CeKDsJqhNSiLZxFNzHVkALYj7SJKt5BPBJYettILywnJ8vYqEHjDtH33utavjom8iSwPGNANogb8Dhm"
		const uint3aAmEJ = BigInt("1198")
		const uintlKWaz3x = BigInt("34")
		const XenoFelixDTgtJjf = await XenoFelix.new(stringQ0z2Bey, stringCPowyGX, uint3aAmEJ, uintlKWaz3x, {from: accounts[2]});
		const addressi1Q9xqA = accounts[2]
		const boolyaAGQaW = await XenoFelixDTgtJjf.isOwner.call(addressi1Q9xqA, {from: accounts[2]});
		const uint256My1gbQ2 = await XenoFelixDTgtJjf.totalSupply.call({from: accounts[5]});

		assert.equal(boolyaAGQaW, true)
		assert.equal(uint256My1gbQ2, BigInt("11980000000000000000000000000000000000"))
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintqbNiPI7 = BigInt("1476")
		const uintcYpIFXI = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintqbNiPI7, uintcYpIFXI, {from: accounts[2]});
		const uint4m9K3J = BigInt("42")
		const addresseqs33ld = accounts[5]
		const addressUs3Mt7J = accounts[5]
		const addressYgVqsrU = accounts[4]
		const uintxi77krC = BigInt("360")
		const addressNdtJ5HX = accounts[5]
		const addressnatKC8X = accounts[4]
		const addressp9KkE6o = accounts[5]
		const boolEETZxMZ = await XenoFelixkozHKnG.transfer.call(addresseqs33ld, uint4m9K3J, {from: accounts[2]});
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addressUs3Mt7J, {from: accounts[1]});
		const addressJHJFGbk = await XenoFelixkozHKnG.removePauser.call(addressYgVqsrU, {from: accounts[2]});
		const boolzVXuKZF = await XenoFelixkozHKnG.transferFrom.call(addressnatKC8X, addressNdtJ5HX, uintxi77krC, {from: accounts[5]});
		const boolVjL0tuK = await XenoFelixkozHKnG.isPauser.call(addressp9KkE6o, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEETZxMZ, true)
		assert.equal(uint256UXlY4Ym, BigInt("0"))
		await expect(XenoFelixkozHKnG.removePauser.call(addressYgVqsrU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGpXkOsl = "aXCr9"
		const stringlU02ZZX = "JENQX5XF"
		const uintIhmGHNE = BigInt("1612")
		const uintLDaP4T9 = BigInt("11")
		const XenoFelixqysGjGl = await XenoFelix.new(stringGpXkOsl, stringlU02ZZX, uintIhmGHNE, uintLDaP4T9, {from: accounts[0]});
		const addressNATzH3 = accounts[3]
		const uintjlgbyKv = BigInt("616")
		const uintL1AvFiC = BigInt("68")
		const addressNIgKbQ6 = accounts[1]
		const addressx3EOTa7 = "0x0000000000000000000000000000000000000001"
		const uint256nz2L1uz = await XenoFelixqysGjGl.balanceOf.call(addressNATzH3, {from: accounts[1]});
		const boolhEvW7wl = await XenoFelixqysGjGl.lock.call(addressNIgKbQ6, uintL1AvFiC, uintjlgbyKv, {from: accounts[0]});
		await XenoFelixqysGjGl.unpause.call({from: accounts[5]});
		const boolejp3qBM = await XenoFelixqysGjGl.unfreezeAccount.call(addressx3EOTa7, {from: accounts[5]});

		assert.equal(uint256nz2L1uz, BigInt("0"))
		await expect(XenoFelixqysGjGl.lock.call(addressNIgKbQ6, uintL1AvFiC, uintjlgbyKv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiay6ZeT = "tGKrmBbyyJS3FNn5xCnFfxwn1IDCRZ17a8xbVlA5E24CqzXbwdgY"
		const stringcWyNGaN = "8uOCTZVnNEk3IijKDDOulox5USNnJ"
		const uintUn0gv3R = BigInt("283")
		const uintzfqWsu = BigInt("0")
		const XenoFelixrcQRb2B = await XenoFelix.new(stringiay6ZeT, stringcWyNGaN, uintUn0gv3R, uintzfqWsu, {from: accounts[3]});
		const uintVK6Ojml = BigInt("509")
		const addressK53Fau = accounts[2]
		const uintQSDbOlu = BigInt("565")
		const addresspRODsP6 = accounts[5]
		const boolfGkCMZP = await XenoFelixrcQRb2B.burnOwner.call(addressK53Fau, uintVK6Ojml, {from: accounts[3]});
		const boolAFMgNV9 = await XenoFelixrcQRb2B.transfer.call(addresspRODsP6, uintQSDbOlu, {from: accounts[4]});

		await expect(XenoFelixrcQRb2B.burnOwner.call(addressK53Fau, uintVK6Ojml, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyW2lZ5 = "4Xm45B8ScvddXkuzak7r2Fn8kAi7zLE"
		const stringxrkZ0R1 = "SPqEJ4CuVo7yF1HTx44qYoVE3NQZ5OoDSxSaSl7o"
		const uintdpDjY5l = BigInt("1476")
		const uintWNtp9Qu = BigInt("37")
		const XenoFelixkozHKnG = await XenoFelix.new(stringyW2lZ5, stringxrkZ0R1, uintdpDjY5l, uintWNtp9Qu, {from: accounts[2]});
		const addressPZHyW61 = "0x0000000000000000000000000000000000000001"
		const addressFHxu1xc = accounts[6]
		const addressCy3XkBM = await XenoFelixkozHKnG.addPauser.call(addressPZHyW61, {from: accounts[2]});
		await XenoFelixkozHKnG.onlyOwner.call({from: accounts[1]});
		const uint256UXlY4Ym = await XenoFelixkozHKnG.balanceOf.call(addressFHxu1xc, {from: accounts[1]});

		await expect(XenoFelixkozHKnG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
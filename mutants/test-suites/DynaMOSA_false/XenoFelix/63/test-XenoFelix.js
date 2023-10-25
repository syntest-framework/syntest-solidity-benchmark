const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringlhOZOL = "vCJzW11kfPumFIPFxofErLx"
		const stringN957KvM = "PMD34mRpqh9SjoO0ADFQvCh2EvfgLz524oO4odTg1S1ShS3esl2gCRyAyigbRetIPb2B15b3PJaTJmowu2Lw"
		const uintKHqNKVe = BigInt("239")
		const XenoFelixsofUHH = await XenoFelix.new(stringlhOZOL, stringN957KvM, uintKHqNKVe, {from: accounts[4]});
		const addressTuaQp9 = accounts[1]
		const addressCM0WrW = accounts[1]
		await XenoFelixsofUHH.onlyNewOwner.call({from: accounts[5]});
		const boolQhbnNI = await XenoFelixsofUHH.isPauser.call(addressTuaQp9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vElATXN = await XenoFelixsofUHH.balanceOf.call(addressCM0WrW, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringBPHzwNb = "R0yDRooj"
		const stringkeP0BTs = "QCNXR7QASk9fm7Jq6eCnvxNExARAb5GN"
		const uintHdSggFZ = BigInt("181")
		const XenoFelixK00HpZ1 = await XenoFelix.new(stringBPHzwNb, stringkeP0BTs, uintHdSggFZ, {from: accounts[2]});
		const addresspLR53ir = accounts[1]
		const uintTMHCqU4 = BigInt("4")
		await XenoFelixK00HpZ1.onlyPauser.call({from: accounts[3]});
		const addresskNyl5Av = await XenoFelixK00HpZ1.notFrozen.call(addresspLR53ir, {from: accounts[2]});
		await XenoFelixK00HpZ1.unpause.call({from: accounts[0]});
		await XenoFelixK00HpZ1.onlyOwner.call({from: accounts[5]});
		const uint256BCKXQXx = await XenoFelixK00HpZ1.burn.call(uintTMHCqU4, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringetI2EaO = "7tAGhW33dJ1V6lYEl"
		const stringNUPOvbO = "0KiSelwGVvXhsIk1"
		const uintpCVfZW = BigInt("1172")
		const uintfJa95u6 = BigInt("50")
		const XenoFelixiJFdMiY = await XenoFelix.new(stringetI2EaO, stringNUPOvbO, uintpCVfZW, uintfJa95u6, {from: "0x0000000000000000000000000000000000000001"});
		const uintrvZI6x = BigInt("147")
		const addressigOgMDv = accounts[1]
		const stringEpgq1EX = await XenoFelixiJFdMiY.name.call({from: accounts[0]});
		const uint256WZOUxi = await XenoFelixiJFdMiY.burn.call(uintrvZI6x, {from: accounts[1]});
		await XenoFelixiJFdMiY.renouncePauser.call({from: accounts[0]});
		const boolrX01Yo = await XenoFelixiJFdMiY.isPauser.call(addressigOgMDv, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringLy9kSUY = "jAugtWbADYuygDs4aHFm9Qa9f5ZXplMDMVnF7lIFk9ydE7h56EiEdK1h1hMCNOHocS81P6kTN3q9Dh69I52lrDmVbmJ"
		const stringSuymE23 = "pDdblT5Vt866ScP2X4OvM3xJNKNS9fjUG6kQ5JSj"
		const uintnh1AIE7 = BigInt("88")
		const uintEEoy7i4 = BigInt("81")
		const XenoFelixDCm4JKs = await XenoFelix.new(stringLy9kSUY, stringSuymE23, uintnh1AIE7, uintEEoy7i4, {from: accounts[1]});
		const uintffPPYg = BigInt("601")
		const addressJ0pwsAg = accounts[0]
		const addressOckgWnZ = accounts[1]
//		await XenoFelixDCm4JKs.onlyNewOwner.call({from: accounts[2]});
//		const boolSPyJw7h = await XenoFelixDCm4JKs.burnOwner.call(addressJ0pwsAg, uintffPPYg, {from: accounts[0]});
//		const addressgu2QVy4 = await XenoFelixDCm4JKs.addPauser.call(addressOckgWnZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixDCm4JKs.onlyNewOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixJeSFiZv = await XenoFelix.new({from: accounts[0]});
		const addressnVWmbqj = accounts[1]
		const addressc9jbKT4 = accounts[3]
		const addressKzciBm = accounts[1]
		const uintGxrHFQK = BigInt("1017")
		const addressXaFaEYP = accounts[1]
		const addressjTFKl2z = accounts[2]
		const addressLj8eooI = await XenoFelixJeSFiZv.notFrozen.call(addressnVWmbqj, {from: accounts[2]});
		const boola1mwD8k = await XenoFelixJeSFiZv.unfreezeAccount.call(addressc9jbKT4, {from: "0x0000000000000000000000000000000000000001"});
		const boolOFMCncH = await XenoFelixJeSFiZv.freezeAccount.call(addressKzciBm, {from: accounts[1]});
		const booliBTlmUu = await XenoFelixJeSFiZv.transfer.call(addressXaFaEYP, uintGxrHFQK, {from: accounts[3]});
		await XenoFelixJeSFiZv.whenPaused.call({from: accounts[5]});
		const address62kjOX = await XenoFelixJeSFiZv.transferOwnership.call(addressjTFKl2z, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringb23g6MJ = "E1K6Ixb2LWddpzE2vfdT6e8pLlpPgtMShenFme6fSv1m8kAHkgbvavi3HyB5GkVDj9n"
		const stringrlIT7Y6 = "ylQJlmO7pGXw0DIXU9JB1ycB9gAPDgUjfIXHCLP1Ov5tNIJKa7zaHvRqLU"
		const uintmTlSqbU = BigInt("48")
		const XenoFelixosXRqp = await XenoFelix.new(stringb23g6MJ, stringrlIT7Y6, uintmTlSqbU, {from: accounts[3]});
		const uintL6VgUsK = BigInt("1653")
		const addressshwZnV = accounts[1]
		const uintUb53Ojv = BigInt("1297")
		const addressRD3UKNq = accounts[4]
		const addressh4PukvX = accounts[4]
		const uintbtgE4y3 = BigInt("730")
		const addressTXdklCf = accounts[5]
		const uintV5479CN = BigInt("2002")
		const addresso4eUZaD = accounts[4]
		const uint256lL1c4Cw = await XenoFelixosXRqp.burn.call(uintL6VgUsK, {from: accounts[1]});
		const addressIXBnsnC = await XenoFelixosXRqp.transferOwnership.call(addressshwZnV, {from: accounts[1]});
		const boolBAAjVsQ = await XenoFelixosXRqp.transferFrom.call(addressh4PukvX, addressRD3UKNq, uintUb53Ojv, {from: accounts[3]});
		const uint256YGVYbLO = await XenoFelixosXRqp.burn.call(uintbtgE4y3, {from: accounts[0]});
		const uint256oZG6ckt = await XenoFelixosXRqp.balanceOf.call(addressTXdklCf, {from: accounts[2]});
		const boolKmTLsfk = await XenoFelixosXRqp.transfer.call(addresso4eUZaD, uintV5479CN, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringYitc8cg = "84MkdponVJSGAGmBtKmyIxc"
		const stringgzvOZTk = "yVXvFdIGvJBKiwFL9WlN5LslljwUc8BOc7SSdbE4PwBHD9jtvOpmF"
		const uintvX6MeNf = BigInt("1544")
		const uintOUUYXOw = BigInt("76")
		const XenoFelixAqGABTL = await XenoFelix.new(stringYitc8cg, stringgzvOZTk, uintvX6MeNf, uintOUUYXOw, {from: accounts[2]});
		const uint7LeMCS = BigInt("1549")
		const addressGuH6aRe = accounts[0]
//		const boolinYRkuL = await XenoFelixAqGABTL.acceptOwnership.call({from: accounts[2]});
//		const uint256Hg3j0Rc = await XenoFelixAqGABTL.burn.call(uint7LeMCS, {from: accounts[3]});
//		const bools5YVhV4 = await XenoFelixAqGABTL.unfreezeAccount.call(addressGuH6aRe, {from: accounts[4]});

		await expect(XenoFelixAqGABTL.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringp4VD4Qn = "BYQKBw6YqxDkL3w"
		const stringiaEHVmp = "5o5GfuAgXqj94eFDj46SEXG7CkBX7llhQMQqrFMcjsvCJpbo1GAScb8s6rRbE9iV46W3KQu7sU3EH9fazpwnW4mW9G"
		const uintdJFrfP4 = BigInt("40")
		const XenoFelixd4p3cGS = await XenoFelix.new(stringp4VD4Qn, stringiaEHVmp, uintdJFrfP4, {from: accounts[5]});
		const uintiQzM5tP = BigInt("1169")
		const uintbkfj02W = BigInt("583")
		const addressy4RkJp = accounts[0]
		const addressHN7jv1Y = accounts[0]
		const addressc2gE04x = accounts[2]
		const addressNR7WNF = accounts[1]
		const uint256Q2EN0ds = await XenoFelixd4p3cGS.burn.call(uintiQzM5tP, {from: "0x0000000000000000000000000000000000000001"});
		const boolCHQiP7B = await XenoFelixd4p3cGS.transferFrom.call(addressHN7jv1Y, addressy4RkJp, uintbkfj02W, {from: accounts[3]});
		const uint256KRrVrpf = await XenoFelixd4p3cGS.allowance.call(addressNR7WNF, addressc2gE04x, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintmXibqaA = BigInt("2043")
		const uintjOw7iE = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintmXibqaA, uintjOw7iE, {from: accounts[1]});
		const addressJkHBaEU = accounts[2]
		const uintP3D09fZ = BigInt("289")
		const addressxYhTj2H = accounts[2]
		const addressVk4MHYB = "0x0000000000000000000000000000000000000001"
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressJkHBaEU, {from: accounts[4]});
//		const boolm4dgSp = await XenoFelixOjbSJL6.increaseAllowance.call(addressxYhTj2H, uintP3D09fZ, {from: accounts[2]});
//		const boolRkAXxjF = await XenoFelixOjbSJL6.freezeAccount.call(addressVk4MHYB, {from: accounts[2]});
//		const stringdXP6xyX = await XenoFelixOjbSJL6.symbol.call({from: accounts[3]});

		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressJkHBaEU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uint53nanh = BigInt("2043")
		const uintraQfw5X = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uint53nanh, uintraQfw5X, {from: accounts[1]});
		const addressVCdllh = accounts[2]
		const uintVtm33aN = BigInt("1150")
		const addressQfOikIn = accounts[2]
		const uint256Q3tCiNi = await XenoFelixOjbSJL6.totalSupply.call({from: accounts[4]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressVCdllh, {from: accounts[4]});
//		const stringdXP6xyX = await XenoFelixOjbSJL6.symbol.call({from: accounts[3]});
//		const boolR2jnFpk = await XenoFelixOjbSJL6.increaseAllowance.call(addressQfOikIn, uintVtm33aN, {from: accounts[3]});

		assert.equal(uint256Q3tCiNi, BigInt("98245955549432478320826029696789764426216159786935978281653061146426088620032"))
		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressVCdllh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintFUF6ciI = BigInt("2043")
		const uintkVFqdb1 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintFUF6ciI, uintkVFqdb1, {from: accounts[1]});
		const uintBydIJnh = BigInt("289")
		const addressyknKNh9 = accounts[2]
		const addressGoH78h1 = "0x0000000000000000000000000000000000000001"
		const uintkhFkFP3 = BigInt("761")
		const addressF8AhhdN = accounts[2]
		const boolm4dgSp = await XenoFelixOjbSJL6.increaseAllowance.call(addressyknKNh9, uintBydIJnh, {from: accounts[2]});
//		const boolRkAXxjF = await XenoFelixOjbSJL6.freezeAccount.call(addressGoH78h1, {from: accounts[2]});
//		const boolfaKK6Tn = await XenoFelixOjbSJL6.transfer.call(addressF8AhhdN, uintkhFkFP3, {from: "0x0000000000000000000000000000000000000001"});
//		const stringdXP6xyX = await XenoFelixOjbSJL6.symbol.call({from: accounts[3]});

		assert.equal(boolm4dgSp, true)
		await expect(XenoFelixOjbSJL6.freezeAccount.call(addressGoH78h1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringn7inDbY = "gcWcP"
		const stringyK5HLxe = "loIaEl43tpBEfbf"
		const uinti5FTzqt = BigInt("142")
		const uintK1Lc7l1 = BigInt("56")
		const XenoFelixpaTVCKJ = await XenoFelix.new(stringn7inDbY, stringyK5HLxe, uinti5FTzqt, uintK1Lc7l1, {from: accounts[4]});
		const addressYZVifIB = accounts[4]
		const uintqbAArId = BigInt("1242")
//		await XenoFelixpaTVCKJ.renouncePauser.call({from: accounts[3]});
//		const addressPoKQVvK = await XenoFelixpaTVCKJ.addPauser.call(addressYZVifIB, {from: accounts[1]});
//		const uint256mORrqNn = await XenoFelixpaTVCKJ.burn.call(uintqbAArId, {from: accounts[3]});

		await expect(XenoFelixpaTVCKJ.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintggVrd9 = BigInt("2043")
		const uintYbrm9W = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintggVrd9, uintYbrm9W, {from: accounts[1]});
		const uintJ5kd4MR = BigInt("754")
		const addressWxJUgD = accounts[4]
		const addressSejD964 = accounts[0]
		const addressQILcDcb = accounts[3]
		const addressaV5iWj = accounts[3]
		const uintetkIEyQ = BigInt("904")
		const addressExbuOIf = accounts[5]
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addressSejD964, addressWxJUgD, uintJ5kd4MR, {from: accounts[2]});
//		const boolwLY8ZC3 = await XenoFelixOjbSJL6.paused.call({from: accounts[1]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressQILcDcb, {from: accounts[4]});
//		const boolRkAXxjF = await XenoFelixOjbSJL6.freezeAccount.call(addressaV5iWj, {from: accounts[2]});
//		const bool2R1AZB = await XenoFelixOjbSJL6.transfer.call(addressExbuOIf, uintetkIEyQ, {from: accounts[2]});

		await expect(XenoFelixOjbSJL6.transferFrom.call(addressSejD964, addressWxJUgD, uintJ5kd4MR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintCl8OhM2 = BigInt("2043")
		const uintdBki0UI = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintCl8OhM2, uintdBki0UI, {from: accounts[1]});
		const addressUmaw4CK = accounts[1]
		const addressKriW88y = accounts[2]
		const uintmHI3lZo = BigInt("289")
		const addresshOxBMLa = accounts[2]
		const uintMizSI49 = BigInt("235")
		const addressDxw7V85 = accounts[2]
		const addressnYaCQD8 = "0x0000000000000000000000000000000000000000"
		const uint256XXddFBk = await XenoFelixOjbSJL6.balanceOf.call(addressUmaw4CK, {from: accounts[3]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressKriW88y, {from: accounts[4]});
//		const boolm4dgSp = await XenoFelixOjbSJL6.increaseAllowance.call(addresshOxBMLa, uintmHI3lZo, {from: accounts[2]});
//		const boollXoCJuU = await XenoFelixOjbSJL6.transfer.call(addressDxw7V85, uintMizSI49, {from: accounts[4]});
//		const boolRkAXxjF = await XenoFelixOjbSJL6.freezeAccount.call(addressnYaCQD8, {from: accounts[2]});
//		const stringdXP6xyX = await XenoFelixOjbSJL6.symbol.call({from: accounts[3]});

		assert.equal(uint256XXddFBk, BigInt("98245955549432478320826029696789764426216159786935978281653061146426088620032"))
		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressKriW88y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringdyrnl4w = "havhIC3uJkkcIkeGDj6tY4FII1P5jrL9EnYnUozuup4EYD4UwCZB9pUlUzmrLAmn0xvx"
		const stringiYyusB9 = "kiNQxJYQTYs1XAh3JrBKlChBnNF7MPOhMJysxFiH24WFAhvH9OEJOxapi4"
		const uintYlaw8lD = BigInt("185")
		const XenoFelixVj3fxKD = await XenoFelix.new(stringdyrnl4w, stringiYyusB9, uintYlaw8lD, {from: accounts[0]});
		const addressVnoenW6 = accounts[4]
		const addressxRXGDzV = accounts[5]
		const uint256gpZZxS = await XenoFelixVj3fxKD.balanceOf.call(addressVnoenW6, {from: accounts[1]});
		const addressfGPWD9K = await XenoFelixVj3fxKD.removePauser.call(addressxRXGDzV, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintiukQLwK = BigInt("2043")
		const uintauYWwv7 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintiukQLwK, uintauYWwv7, {from: accounts[1]});
		const addressEB4R3zt = accounts[4]
		const uintSWmKuC2 = BigInt("1518")
		const addressQt6sYyp = accounts[1]
		const addressz93PNzb = accounts[2]
		const uint8bEKIqfp = await XenoFelixOjbSJL6.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressEB4R3zt, {from: accounts[4]});
//		const boolz6zyzQa = await XenoFelixOjbSJL6.transferFrom.call(addressz93PNzb, addressQt6sYyp, uintSWmKuC2, {from: accounts[3]});

		assert.equal(uint8bEKIqfp, BigInt("169"))
		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressEB4R3zt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqoPlF6 = "WsglMwD"
		const string6YK0bw = "cML"
		const uintkznuWVu = BigInt("128")
		const XenoFelixFDF6CdY = await XenoFelix.new(stringqoPlF6, string6YK0bw, uintkznuWVu, {from: accounts[1]});
		const uintR2UICzS = BigInt("1470")
		const addressxubarzb = accounts[5]
		const boolvm7Q9PC = await XenoFelixFDF6CdY.acceptOwnership.call({from: accounts[2]});
		const boolhU3uIIs = await XenoFelixFDF6CdY.increaseAllowance.call(addressxubarzb, uintR2UICzS, {from: accounts[4]});
		await XenoFelixFDF6CdY.pause.call({from: accounts[4]});
		const boolQfqZez7 = await XenoFelixFDF6CdY.acceptOwnership.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintdcSLExh = BigInt("2043")
		const uintnYUpeMN = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintdcSLExh, uintnYUpeMN, {from: accounts[1]});
		const addressiN7uwP = accounts[4]
		const addressXLnikWA = accounts[2]
		const addressV6UsGWB = accounts[4]
		const uintMBYz6Un = BigInt("1613")
		const uint256YqHN4B5 = await XenoFelixOjbSJL6.allowance.call(addressXLnikWA, addressiN7uwP, {from: accounts[4]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressV6UsGWB, {from: accounts[4]});
//		const uint256gjDktmg = await XenoFelixOjbSJL6.burn.call(uintMBYz6Un, {from: accounts[4]});

		assert.equal(uint256YqHN4B5, BigInt("0"))
		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressV6UsGWB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintof4oklL = BigInt("2043")
		const uintcHCq3H9 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintof4oklL, uintcHCq3H9, {from: accounts[1]});
		const addressxcRVsHh = accounts[1]
		const uintFJxXu6b = BigInt("1491")
		const addressq13gxZ = accounts[0]
		const addressdHPL3QB = accounts[4]
		const uint256xBuIcW2 = await XenoFelixOjbSJL6.balanceOf.call(addressxcRVsHh, {from: accounts[1]});
//		const boolpazsD7 = await XenoFelixOjbSJL6.transfer.call(addressq13gxZ, uintFJxXu6b, {from: accounts[3]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressdHPL3QB, {from: accounts[4]});

		assert.equal(uint256xBuIcW2, BigInt("98245955549432478320826029696789764426216159786935978281653061146426088620032"))
		await expect(XenoFelixOjbSJL6.transfer.call(addressq13gxZ, uintFJxXu6b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintUFVIO2l = BigInt("2043")
		const uintjULg8O = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintUFVIO2l, uintjULg8O, {from: accounts[1]});
		const boolwLY8ZC3 = await XenoFelixOjbSJL6.paused.call({from: accounts[1]});

		assert.equal(boolwLY8ZC3, false)
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintDyUgtIk = BigInt("2043")
		const uintHV1guz7 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintDyUgtIk, uintHV1guz7, {from: accounts[1]});
		const addressgyfo2EW = accounts[3]
		const uintZmhOq2L = BigInt("754")
		const addressVXzMIz = accounts[5]
		const addresssg7oX2m = accounts[0]
//		const addressgApyBzw = await XenoFelixOjbSJL6.removePauser.call(addressgyfo2EW, {from: accounts[1]});
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addresssg7oX2m, addressVXzMIz, uintZmhOq2L, {from: accounts[2]});
//		const boolwLY8ZC3 = await XenoFelixOjbSJL6.paused.call({from: accounts[1]});

		await expect(XenoFelixOjbSJL6.removePauser.call(addressgyfo2EW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringumZOvAL = "IqIpYfQ2aAot8HqLIgq9UjDh1xjc74W6YTBrxP9uHE2huwKQGTYjU3gcUl"
		const stringf8Anmkv = "2q1zLM1lVa5WKibLSvzitgxSgXao"
		const uintOXRBKM3 = BigInt("1738")
		const uintbQRFQP7 = BigInt("69")
		const XenoFelixKHlI508 = await XenoFelix.new(stringumZOvAL, stringf8Anmkv, uintOXRBKM3, uintbQRFQP7, {from: accounts[3]});
		const uintz4UhiuG = BigInt("1155")
		const addressm6kEtH9 = accounts[5]
		const uintdISoAqG = BigInt("1731")
		const boollN4M7ZU = await XenoFelixKHlI508.approve.call(addressm6kEtH9, uintz4UhiuG, {from: accounts[3]});
//		const uint256n8EE4SF = await XenoFelixKHlI508.burn.call(uintdISoAqG, {from: accounts[5]});

		assert.equal(boollN4M7ZU, true)
		await expect(XenoFelixKHlI508.burn.call(uintdISoAqG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintDBsQZ80 = BigInt("2043")
		const uintk4yiQtg = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintDBsQZ80, uintk4yiQtg, {from: accounts[1]});
		const addresstW51x0z = accounts[1]
		const addresslnXAazv = accounts[3]
		const addressQmWoMDQ = accounts[0]
		const uintGYbvBCu = BigInt("289")
		const addresst0mh60c = accounts[2]
		const addressdetBXIg = "0x0000000000000000000000000000000000000000"
		const uint256XXddFBk = await XenoFelixOjbSJL6.balanceOf.call(addresstW51x0z, {from: accounts[3]});
//		await XenoFelixOjbSJL6.pause.call({from: accounts[1]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addresslnXAazv, {from: accounts[4]});
//		const boolcBbYnNI = await XenoFelixOjbSJL6.isOwner.call(addressQmWoMDQ, {from: accounts[3]});
//		const boolm4dgSp = await XenoFelixOjbSJL6.increaseAllowance.call(addresst0mh60c, uintGYbvBCu, {from: accounts[2]});
//		const boolRkAXxjF = await XenoFelixOjbSJL6.freezeAccount.call(addressdetBXIg, {from: accounts[2]});
//		const stringdXP6xyX = await XenoFelixOjbSJL6.symbol.call({from: accounts[3]});

		assert.equal(uint256XXddFBk, BigInt("98245955549432478320826029696789764426216159786935978281653061146426088620032"))
		await expect(XenoFelixOjbSJL6.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintIrIiY0k = BigInt("2043")
		const uintD7RaQ42 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintIrIiY0k, uintD7RaQ42, {from: accounts[1]});
		const addressU3qIRwP = accounts[3]
		const uintnjd6NnJ = BigInt("754")
		const addressD18wwc4 = accounts[4]
		const addressPzwdRsi = accounts[0]
		const addressiwGQJih = await XenoFelixOjbSJL6.addPauser.call(addressU3qIRwP, {from: accounts[1]});
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addressPzwdRsi, addressD18wwc4, uintnjd6NnJ, {from: accounts[2]});
//		const boolwLY8ZC3 = await XenoFelixOjbSJL6.paused.call({from: accounts[1]});

		await expect(XenoFelixOjbSJL6.transferFrom.call(addressPzwdRsi, addressD18wwc4, uintnjd6NnJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringc5LX6n = "pCe3bYyEn8qnsTiyufM6bLKTvzQwwKefDdPDUWKa1uqtILjK8tWnTZaS4yAFSr6gGRTmIPTgUOIydCKlDNlQ"
		const stringzFUHsX1 = "VcWkUEC3RbMvn1SFuy2Si8niTIA"
		const uintHEcWCa = BigInt("599")
		const uintaeiSmBq = BigInt("189")
		const XenoFelixtl0P2f = await XenoFelix.new(stringc5LX6n, stringzFUHsX1, uintHEcWCa, uintaeiSmBq, {from: accounts[2]});
		const uinttE3XSft = BigInt("314")
		const addressLcTmAZC = accounts[0]
		const addressTTWbJ0 = accounts[1]
		const stringZuDYAx = await XenoFelixtl0P2f.name.call({from: accounts[4]});
//		await XenoFelixtl0P2f.whenNotPaused.call({from: accounts[4]});
//		const boolz1WuGzO = await XenoFelixtl0P2f.transfer.call(addressLcTmAZC, uinttE3XSft, {from: accounts[4]});
//		const uint256MUsh8jS = await XenoFelixtl0P2f.balanceOf.call(addressTTWbJ0, {from: accounts[1]});

		assert.equal(stringZuDYAx, "pCe3bYyEn8qnsTiyufM6bLKTvzQwwKefDdPDUWKa1uqtILjK8tWnTZaS4yAFSr6gGRTmIPTgUOIydCKlDNlQ")
		await expect(XenoFelixtl0P2f.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintq6m67a = BigInt("2043")
		const uintKQ6VCuS = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintq6m67a, uintKQ6VCuS, {from: accounts[1]});
		const uintnhAzGTM = BigInt("1197")
		const addressWc5kbIb = accounts[0]
		const uintsi8WWUN = BigInt("754")
		const addressFE7Aj0 = accounts[5]
		const addressPy1Zn1 = accounts[0]
//		const addressIGXnRu = await XenoFelixOjbSJL6.burnFrom.call(addressWc5kbIb, uintnhAzGTM, {from: accounts[0]});
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addressPy1Zn1, addressFE7Aj0, uintsi8WWUN, {from: accounts[2]});
//		await XenoFelixOjbSJL6.onlyPauser.call({from: accounts[3]});

		await expect(XenoFelixOjbSJL6.burnFrom.call(addressWc5kbIb, uintnhAzGTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintGMOPzg = BigInt("2043")
		const uintglnBFwj = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintGMOPzg, uintglnBFwj, {from: accounts[1]});
		const addressYLgxXtt = accounts[2]
		const address5WHmED = accounts[5]
		const uintWFxF5rU = BigInt("44")
		const addressQchVQuo = accounts[2]
		const addressdIzj2x3 = accounts[1]
		const addresssF6R7xZ = accounts[3]
		const uint256DiXSir = await XenoFelixOjbSJL6.balanceOf.call(addressYLgxXtt, {from: accounts[2]});
		const boolmzYux2U = await XenoFelixOjbSJL6.freezeAccount.call(address5WHmED, {from: accounts[1]});
//		const boolVAl30Cm = await XenoFelixOjbSJL6.transfer.call(addressQchVQuo, uintWFxF5rU, {from: accounts[4]});
//		const addressAExVZTi = await XenoFelixOjbSJL6.notFrozenAndTransaction.call(addresssF6R7xZ, addressdIzj2x3, {from: accounts[3]});

		assert.equal(boolmzYux2U, true)
		assert.equal(uint256DiXSir, BigInt("0"))
		await expect(XenoFelixOjbSJL6.transfer.call(addressQchVQuo, uintWFxF5rU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintEGUCfva = BigInt("2043")
		const uintYTMhBkT = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintEGUCfva, uintYTMhBkT, {from: accounts[1]});
		const uintr7TKEKt = BigInt("665")
		const addressLMURZ62 = accounts[3]
		const addressvC8oGH5 = accounts[4]
//		const booldCnOpom = await XenoFelixOjbSJL6.decreaseAllowance.call(addressLMURZ62, uintr7TKEKt, {from: accounts[2]});
//		const boolKyAIPH = await XenoFelixOjbSJL6.unfreezeAccount.call(addressvC8oGH5, {from: accounts[4]});

		await expect(XenoFelixOjbSJL6.decreaseAllowance.call(addressLMURZ62, uintr7TKEKt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintAzxpABk = BigInt("2043")
		const uintBWOoqut = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintAzxpABk, uintBWOoqut, {from: accounts[1]});
		const uintMieC2o1 = BigInt("1076")
		const addressv2UcRCr = accounts[5]
		const uintDIwiHM = BigInt("1822")
		const addressfdunTSK = accounts[1]
		const uinthaVSiMx = BigInt("1439")
		const addressw55MgyK = accounts[3]
//		const boolu0ssQN1 = await XenoFelixOjbSJL6.burnOwner.call(addressv2UcRCr, uintMieC2o1, {from: accounts[1]});
//		const boolVAl30Cm = await XenoFelixOjbSJL6.transfer.call(addressfdunTSK, uintDIwiHM, {from: accounts[4]});
//		const boolz00nHq8 = await XenoFelixOjbSJL6.approve.call(addressw55MgyK, uinthaVSiMx, {from: accounts[0]});

		await expect(XenoFelixOjbSJL6.burnOwner.call(addressv2UcRCr, uintMieC2o1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzbUBts3 = "YB6oc4S2QcGIm1Duw93cFaFXgc93RBNNfEeST8aJqo6mRs5z1dMciwra94Kt6aHMIzlkl9SazmxXm3lkewahbdbJB34mm9OCx8c"
		const stringoHegKW = "uJEFjXbzIplPu0kFso50LBwQkxPB4bwQPghs2tWWH4TnWBPCnUk3tPNrkpoSXw6N6bl5AFtjAYRioIK0oJxFo9VifCi"
		const uintTEpEq0 = BigInt("108")
		const XenoFelixg6VLTdc = await XenoFelix.new(stringzbUBts3, stringoHegKW, uintTEpEq0, {from: "0x0000000000000000000000000000000000000001"});
		const uintwVxzLfG = BigInt("827")
		const address9BnUDz = "0x0000000000000000000000000000000000000001"
		const addresstbG1qL8 = accounts[4]
		const addressZD9ju6 = "0x0000000000000000000000000000000000000001"
		const uintO3I2hfP = BigInt("1474")
		const addressuv0X9ZQ = accounts[0]
		const addressOmakWO = accounts[0]
		const boolXxnIrFb = await XenoFelixg6VLTdc.transferFrom.call(addresstbG1qL8, address9BnUDz, uintwVxzLfG, {from: accounts[1]});
		const addressmzvZ8UF = await XenoFelixg6VLTdc.notFrozen.call(addressZD9ju6, {from: accounts[0]});
		const boolULMwzF9 = await XenoFelixg6VLTdc.burnOwner.call(addressuv0X9ZQ, uintO3I2hfP, {from: accounts[1]});
		const addressIQBq09d = await XenoFelixg6VLTdc.removePauser.call(addressOmakWO, {from: accounts[1]});
		const uint8gvJXfbd = await XenoFelixg6VLTdc.decimals.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintl9xM9jD = BigInt("2043")
		const uintX2hXWL = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintl9xM9jD, uintX2hXWL, {from: accounts[1]});
		const addressLwcPqD3 = accounts[4]
		const uintlpe3mHq = BigInt("44")
		const addressqwZofWx = accounts[2]
		const addressaDpt3pm = await XenoFelixOjbSJL6.transferOwnership.call(addressLwcPqD3, {from: accounts[1]});
//		const boolVAl30Cm = await XenoFelixOjbSJL6.transfer.call(addressqwZofWx, uintlpe3mHq, {from: accounts[4]});

		await expect(XenoFelixOjbSJL6.transfer.call(addressqwZofWx, uintlpe3mHq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintun1iMKu = BigInt("2043")
		const uintkODTEQK = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintun1iMKu, uintkODTEQK, {from: accounts[1]});
		const addresstXJE12 = accounts[1]
		const addressoBP4rmk = accounts[4]
		const uintvc2pw0S = BigInt("754")
		const addressnqfgKxh = accounts[4]
		const addressyqiC6KA = accounts[2]
		const uint256gBSA8cO = await XenoFelixOjbSJL6.balanceOf.call(addresstXJE12, {from: accounts[0]});
		const stringSzIwMXR = await XenoFelixOjbSJL6.name.call({from: accounts[3]});
//		const boollKawV1i = await XenoFelixOjbSJL6.unfreezeAccount.call(addressoBP4rmk, {from: accounts[1]});
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addressyqiC6KA, addressnqfgKxh, uintvc2pw0S, {from: accounts[2]});

		assert.equal(stringSzIwMXR, "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh")
		assert.equal(uint256gBSA8cO, BigInt("98245955549432478320826029696789764426216159786935978281653061146426088620032"))
		await expect(XenoFelixOjbSJL6.unfreezeAccount.call(addressoBP4rmk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintKdEelRg = BigInt("2043")
		const uintL1irh8 = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintKdEelRg, uintL1irh8, {from: accounts[1]});
		const addressAKDbAZQ = accounts[2]
		const uintEc3EP1g = BigInt("1997")
		const uintv70TPIr = BigInt("907")
		const addresst4lSlC = accounts[4]
		const uint256DiXSir = await XenoFelixOjbSJL6.balanceOf.call(addressAKDbAZQ, {from: accounts[2]});
		const boolyapyvV0 = await XenoFelixOjbSJL6.transferWithLock.call(addresst4lSlC, uintv70TPIr, uintEc3EP1g, {from: accounts[1]});

		assert.equal(boolyapyvV0, true)
		assert.equal(uint256DiXSir, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringWYAZkhT = "N7NhJyMHQboJ7CsZ2rgJQe3pw5Bxu8jnZwbeWKnwCvqSh"
		const stringDbovhQ = "dPlIx2vWBhM4xKXRekw"
		const uintSbTKiS = BigInt("2043")
		const uintqjrMYzv = BigInt("169")
		const XenoFelixOjbSJL6 = await XenoFelix.new(stringWYAZkhT, stringDbovhQ, uintSbTKiS, uintqjrMYzv, {from: accounts[1]});
		const uintpI635j = BigInt("754")
		const addressDHOwpv7 = accounts[4]
		const addressNIy27uv = accounts[0]
		const stringsy2O4d1 = await XenoFelixOjbSJL6.symbol.call({from: accounts[5]});
//		const boolQvgZfP1 = await XenoFelixOjbSJL6.transferFrom.call(addressNIy27uv, addressDHOwpv7, uintpI635j, {from: accounts[2]});

		assert.equal(stringsy2O4d1, "dPlIx2vWBhM4xKXRekw")
		await expect(XenoFelixOjbSJL6.transferFrom.call(addressNIy27uv, addressDHOwpv7, uintpI635j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
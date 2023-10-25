const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringyAra1y0 = "eDBycKvYOjGyQcp89nAkEvUks4O4a7XgYv8KDXf9RqyRSsvM4FrLOVsqYE8MZez1j"
		const stringXDMwOsb = "woxemLvpz7csPB71PlItqo0uFHPlq6GTkoQioGY1fs"
		const uintvyforE8 = BigInt("48")
		const LUPGsbG5sw = await LUP.new(stringyAra1y0, stringXDMwOsb, uintvyforE8, {from: accounts[2]});
		const addressjxfXlS = accounts[1]
		const boolYIxQxK = true
		const addressWozPYE = accounts[2]
		const stringkO2RYUk = await LUPGsbG5sw.symbol.call({from: accounts[3]});
		const addressruDI7E6 = await LUPGsbG5sw.notFrozen.call(addressjxfXlS, {from: accounts[2]});
		const boolPSoWpKr = await LUPGsbG5sw.freezeAccount.call(addressWozPYE, boolYIxQxK, {from: "0x0000000000000000000000000000000000000001"});
		const stringUEOibt = await LUPGsbG5sw.symbol.call({from: accounts[4]});
		const uint8Qt5uvfC = await LUPGsbG5sw.decimals.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPHFkrOZs = await LUP.new({from: accounts[2]});
		const addressIoRE8JF = accounts[1]
		const boolzaRlJnb = false
		const addressnHh8Bjh = accounts[0]
		const addressQPjfmRL = accounts[3]
		const stringNDwFk2l = await LUPHFkrOZs.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressUiwNIKL = await LUPHFkrOZs.upgradeTo.call(addressIoRE8JF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolydQ33fy = await LUPHFkrOZs.freezeAccount.call(addressnHh8Bjh, boolzaRlJnb, {from: accounts[4]});
//		const uint8v7dFJEq = await LUPHFkrOZs.decimals.call({from: accounts[1]});
//		const uint256ZgjQsHU = await LUPHFkrOZs.balanceOf.call(addressQPjfmRL, {from: accounts[2]});

		assert.equal(stringNDwFk2l, "LUP")
		await expect(LUPHFkrOZs.upgradeTo.call(addressIoRE8JF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const addressu23xtF1 = accounts[4]
		const uintMnmPmTP = BigInt("1901")
		const uintljFqLu5 = BigInt("178")
		const addressgeA3jdV = accounts[0]
		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressu23xtF1, {from: accounts[2]});
//		const boolxMLtThI = await LUPfj2uQgo.lock.call(addressgeA3jdV, uintljFqLu5, uintMnmPmTP, {from: accounts[2]});

		assert.equal(uint256N8ourKG, BigInt("0"))
		await expect(LUPfj2uQgo.lock.call(addressgeA3jdV, uintljFqLu5, uintMnmPmTP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPyTMjcf8 = await LUP.new({from: accounts[4]});
		const uintMaITEgO = BigInt("1861")
		const uinteW1c5kh = BigInt("341")
		const addressTRMYxaM = accounts[0]
		const addresse4mXIE = accounts[0]
		const uinttt5shaI = BigInt("1926")
		const addressyvuBiN = accounts[3]
		const stringaUZ6NCG = await LUPyTMjcf8.name.call({from: accounts[3]});
//		const bool9you18 = await LUPyTMjcf8.transferWithLock.call(addressTRMYxaM, uinteW1c5kh, uintMaITEgO, {from: accounts[0]});
//		const addressiVkrCcg = await LUPyTMjcf8.notFrozen.call(addresse4mXIE, {from: accounts[4]});
//		const boolg2sXVHs = await LUPyTMjcf8.transfer.call(addressyvuBiN, uinttt5shaI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringaUZ6NCG, "LINKUP Token")
		await expect(LUPyTMjcf8.transferWithLock.call(addressTRMYxaM, uinteW1c5kh, uintMaITEgO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const addressNVWvExJ = accounts[4]
		const addressaHDVB7b = "0x0000000000000000000000000000000000000001"
		const uintFbLx1aU = BigInt("1901")
		const uintKxHqJYh = BigInt("178")
		const addressmPBrhtb = accounts[1]
		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressNVWvExJ, {from: accounts[2]});
//		const addressds6Mzlj = await LUPfj2uQgo.notFrozen.call(addressaHDVB7b, {from: accounts[0]});
//		const boolxMLtThI = await LUPfj2uQgo.lock.call(addressmPBrhtb, uintKxHqJYh, uintFbLx1aU, {from: accounts[2]});

		assert.equal(uint256N8ourKG, BigInt("0"))
		await expect(LUPfj2uQgo.notFrozen.call(addressaHDVB7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPv0lWjL = await LUP.new({from: accounts[3]});
		const boolG27rM2A = false
		const addressLWHSqnE = accounts[2]
		const uintNCCHWw = BigInt("1631")
		const uintWxbG6RN = BigInt("797")
		const addressjUQCfOg = accounts[1]
		const uint8yWdbAjt = await LUPv0lWjL.decimals.call({from: accounts[3]});
//		const boolninmKxA = await LUPv0lWjL.freezeAccount.call(addressLWHSqnE, boolG27rM2A, {from: accounts[0]});
//		const uint8Md48QrZ = await LUPv0lWjL.decimals.call({from: accounts[3]});
//		const booleuggZMN = await LUPv0lWjL.lock.call(addressjUQCfOg, uintWxbG6RN, uintNCCHWw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8yWdbAjt, BigInt("18"))
		await expect(LUPv0lWjL.freezeAccount.call(addressLWHSqnE, boolG27rM2A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const boolw1FwRA = true
		const addressOwSyKRm = accounts[1]
		const addressKwy5Jaj = accounts[5]
		const boolOXsXTQ5 = await LUPfj2uQgo.freezeAccount.call(addressOwSyKRm, boolw1FwRA, {from: accounts[1]});
		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressKwy5Jaj, {from: accounts[2]});

		assert.equal(boolOXsXTQ5, true)
		assert.equal(uint256N8ourKG, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const addressFP5srzp = accounts[5]
		const uintlWJ4Ag3 = BigInt("146")
		const uintBM7GpRy = BigInt("853")
		const addressbFfPofZ = accounts[3]
		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressFP5srzp, {from: accounts[2]});
		const stringFaPsb1 = await LUPfj2uQgo.symbol.call({from: accounts[1]});
		const boolWJlV4E8 = await LUPfj2uQgo.transferWithLock.call(addressbFfPofZ, uintBM7GpRy, uintlWJ4Ag3, {from: accounts[1]});

		assert.equal(boolWJlV4E8, true)
		assert.equal(stringFaPsb1, "LUP")
		assert.equal(uint256N8ourKG, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const addresszDvoJUz = accounts[0]
		const uintnP5rkJ = BigInt("1772")
		const addressuZudaaW = accounts[0]
		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addresszDvoJUz, {from: accounts[2]});
//		const boolcuBO8Vq = await LUPfj2uQgo.transfer.call(addressuZudaaW, uintnP5rkJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8tECvr7Q = await LUPfj2uQgo.decimals.call({from: accounts[4]});

		assert.equal(uint256N8ourKG, BigInt("0"))
		await expect(LUPfj2uQgo.transfer.call(addressuZudaaW, uintnP5rkJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const addressjE2AgN4 = accounts[3]
		const uintgEr8KtI = BigInt("1215")
		const addressggkDNc6 = accounts[2]
		const addressINmTlgV = accounts[4]
		const addressAzqMK0q = await LUPfj2uQgo.upgradeTo.call(addressjE2AgN4, {from: accounts[1]});
//		const boolQRZZOzF = await LUPfj2uQgo.transfer.call(addressggkDNc6, uintgEr8KtI, {from: accounts[4]});
//		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressINmTlgV, {from: accounts[2]});

		await expect(LUPfj2uQgo.transfer.call(addressggkDNc6, uintgEr8KtI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const uintKmf7Nxo = BigInt("501")
		const addressseA5UQh = accounts[1]
		const uintx5I96Rc = BigInt("1772")
		const addresshvmlLkD = accounts[1]
		const uintDAfONUS = BigInt("1116")
		const uintRm1dM0 = BigInt("1858")
		const addressKtM42SG = accounts[0]
//		const boolxa0v6B = await LUPfj2uQgo.unlock.call(addressseA5UQh, uintKmf7Nxo, {from: accounts[1]});
//		const boolcuBO8Vq = await LUPfj2uQgo.transfer.call(addresshvmlLkD, uintx5I96Rc, {from: "0x0000000000000000000000000000000000000001"});
//		const stringr4OIrs5 = await LUPfj2uQgo.symbol.call({from: accounts[2]});
//		const booloCl5gO = await LUPfj2uQgo.lock.call(addressKtM42SG, uintRm1dM0, uintDAfONUS, {from: accounts[2]});

		await expect(LUPfj2uQgo.unlock.call(addressseA5UQh, uintKmf7Nxo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfj2uQgo = await LUP.new({from: accounts[1]});
		const uintSinnmVz = BigInt("941")
		const uintQ0lR3MJ = BigInt("506")
		const addressENaK1kq = accounts[2]
		const uintTLvZacv = BigInt("1431")
		const uintrzzy2ez = BigInt("949")
		const addressmm220fN = accounts[3]
		const addressKoXvG5 = accounts[5]
//		const boolLzhzdCd = await LUPfj2uQgo.lock.call(addressENaK1kq, uintQ0lR3MJ, uintSinnmVz, {from: accounts[1]});
//		const boolWL0vNK5 = await LUPfj2uQgo.lock.call(addressmm220fN, uintrzzy2ez, uintTLvZacv, {from: accounts[1]});
//		const uint256N8ourKG = await LUPfj2uQgo.balanceOf.call(addressKoXvG5, {from: accounts[2]});

		await expect(LUPfj2uQgo.lock.call(addressENaK1kq, uintQ0lR3MJ, uintSinnmVz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPivcp6em = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYiqGbu = BigInt("117")
		const addressyPwqhu2 = accounts[3]
		const boolEDfX1L5 = await LUPivcp6em.unlock.call(addressyPwqhu2, uintYiqGbu, {from: accounts[4]});
		const uint8jMlX60O = await LUPivcp6em.decimals.call({from: accounts[3]});
		const uint8USV5uns = await LUPivcp6em.decimals.call({from: accounts[3]});
	});
})
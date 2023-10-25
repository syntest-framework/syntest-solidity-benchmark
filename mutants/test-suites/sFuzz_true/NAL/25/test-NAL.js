const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALPDAZAIi = await NAL.new({from: accounts[4]});
		const addresswO8lmUB = accounts[4]
		const addressaKre0Pv = accounts[2]
		const uintbZZElbq = BigInt("1762")
		const addresspoff6FG = accounts[3]
//		const addressxNx95Wt = await NALPDAZAIi.notFrozen.call(addresswO8lmUB, {from: accounts[4]});
//		const stringNTkHMtK = await NALPDAZAIi.name.call({from: accounts[0]});
//		const addressE2ZalSF = await NALPDAZAIi.removeAdmin.call(addressaKre0Pv, {from: accounts[5]});
//		const boolvyYOE4g = await NALPDAZAIi.transfer.call(addresspoff6FG, uintbZZElbq, {from: accounts[2]});
//		await NALPDAZAIi.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALPDAZAIi.notFrozen.call(addresswO8lmUB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringJDEVPE4 = "HePGkRGvoyIrgVsHcC7Y4CfzoslRnHFQl79vejB61QhcsMeMKWoEx7e2WDr"
		const stringEK76uYH = "seECFu6BcruXGe"
		const uintPuRVRSk = BigInt("173")
		const NALzMGY7nP = await NAL.new(stringJDEVPE4, stringEK76uYH, uintPuRVRSk, {from: accounts[4]});
		const uintHy7p9B4 = BigInt("776")
		const addressTIMqVEO = accounts[3]
		const addressSRNhMyA = accounts[3]
		const uintbwzQufb = BigInt("399")
		const addressRwUl0gv = accounts[4]
		await NALzMGY7nP.onlyAdmin.call({from: accounts[3]});
		const booldTNSF0d = await NALzMGY7nP.decreaseAllowance.call(addressTIMqVEO, uintHy7p9B4, {from: accounts[1]});
		const boolLT4hiHN = await NALzMGY7nP.freezeAccount.call(addressSRNhMyA, {from: accounts[0]});
		const boolFRI3XcZ = await NALzMGY7nP.transfer.call(addressRwUl0gv, uintbwzQufb, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALQCGwYdT = await NAL.new({from: accounts[4]});
		const uintBf2IPlV = BigInt("999")
		const addressstAczRT = accounts[0]
		const uintEWkFUww = BigInt("134")
		const addressHzLJNPC = accounts[0]
		const addressFu8vcvn = accounts[0]
		const boolyP4dVBH = await NALQCGwYdT.approve.call(addressstAczRT, uintBf2IPlV, {from: accounts[4]});
		const boolqoCb9Ha = await NALQCGwYdT.transfer.call(addressHzLJNPC, uintEWkFUww, {from: accounts[4]});
		const stringsRl8Mdc = await NALQCGwYdT.name.call({from: accounts[3]});
		const boollBiidO7 = await NALQCGwYdT.isAdmin.call(addressFu8vcvn, {from: accounts[5]});

		assert.equal(boollBiidO7, false)
		assert.equal(boolqoCb9Ha, true)
		assert.equal(boolyP4dVBH, true)
		assert.equal(stringsRl8Mdc, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintpm7ZOdL = BigInt("895")
		const addressNBk89CP = accounts[1]
		const stringXUTenP2 = await NALVCnhV1d.name.call({from: accounts[1]});
		const boollrhBbb = await NALVCnhV1d.increaseAllowance.call(addressNBk89CP, uintpm7ZOdL, {from: accounts[4]});
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		await NALVCnhV1d.renounceAdmin.call({from: accounts[4]});

		assert.equal(booleQvmAA, false)
		assert.equal(boollrhBbb, true)
		assert.equal(stringXUTenP2, "Personal Token")
		await expect(NALVCnhV1d.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTyTJiZ = await NAL.new({from: accounts[4]});
		const uintFNloaEe = BigInt("768")
		const addressLyQy6Su = accounts[2]
		const addressgj60Qz5 = accounts[1]
		const addressYEKuQwD = "0x0000000000000000000000000000000000000001"
		const addresssa7Lr8u = accounts[1]
		const addressq0CUGSB = accounts[1]
		const uintZtPto4p = BigInt("729")
		const uintpRvc010 = BigInt("1127")
		const addressL3nXwHa = accounts[3]
//		const boolyh47CUG = await NALTyTJiZ.transferFrom.call(addressgj60Qz5, addressLyQy6Su, uintFNloaEe, {from: accounts[0]});
//		const addressc5VSQAz = await NALTyTJiZ.notFrozen.call(addressYEKuQwD, {from: accounts[0]});
//		const addressEiAKilm = await NALTyTJiZ.transferOwnership.call(addresssa7Lr8u, {from: accounts[0]});
//		const uint256ZxUjIXw = await NALTyTJiZ.balanceOf.call(addressq0CUGSB, {from: accounts[2]});
//		const boolV9G9TI = await NALTyTJiZ.transferWithLock.call(addressL3nXwHa, uintpRvc010, uintZtPto4p, {from: accounts[5]});

		await expect(NALTyTJiZ.transferFrom.call(addressgj60Qz5, addressLyQy6Su, uintFNloaEe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintAboCcQz = BigInt("895")
		const addressjUtNSyz = accounts[1]
		const addressNsgJpbL = accounts[0]
		const uintaBFtKKL = BigInt("1524")
		const addressqDP93Ml = accounts[0]
		const stringXUTenP2 = await NALVCnhV1d.name.call({from: accounts[1]});
		const boollrhBbb = await NALVCnhV1d.increaseAllowance.call(addressjUtNSyz, uintAboCcQz, {from: accounts[4]});
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
		const uint256760QQg = await NALVCnhV1d.balanceOf.call(addressNsgJpbL, {from: accounts[4]});
//		const addressLBPwZ5U = await NALVCnhV1d.burnFrom.call(addressqDP93Ml, uintaBFtKKL, {from: "0x0000000000000000000000000000000000000001"});
//		await NALVCnhV1d.renounceAdmin.call({from: accounts[4]});

		assert.equal(booleQvmAA, false)
		assert.equal(boollrhBbb, true)
		assert.equal(stringXUTenP2, "Personal Token")
		assert.equal(uint256760QQg, BigInt("0"))
		await expect(NALVCnhV1d.burnFrom.call(addressqDP93Ml, uintaBFtKKL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintTOOeCOE = BigInt("974")
		const addresswqVwzDe = accounts[1]
		const uintUusw1Q7 = BigInt("1848")
		const address4HcoRw = accounts[0]
		const stringXUTenP2 = await NALVCnhV1d.name.call({from: accounts[1]});
		const boollrhBbb = await NALVCnhV1d.increaseAllowance.call(addresswqVwzDe, uintTOOeCOE, {from: accounts[4]});
//		const boolhHNaVz = await NALVCnhV1d.decreaseAllowance.call(address4HcoRw, uintUusw1Q7, {from: accounts[2]});
//		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		await NALVCnhV1d.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		await NALVCnhV1d.renounceAdmin.call({from: accounts[4]});

		assert.equal(boollrhBbb, true)
		assert.equal(stringXUTenP2, "Personal Token")
		await expect(NALVCnhV1d.decreaseAllowance.call(address4HcoRw, uintUusw1Q7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintVGgtj5I = BigInt("1536")
		const addressUINfGiL = accounts[1]
		const uintSkiQvrp = BigInt("895")
		const addressjM9S7Gu = accounts[1]
		const addressjpUqrl8 = accounts[1]
		const addressof5vpFW = accounts[0]
//		const boolDIHz3Fu = await NALVCnhV1d.unlock.call(addressUINfGiL, uintVGgtj5I, {from: accounts[1]});
//		const stringXUTenP2 = await NALVCnhV1d.name.call({from: accounts[1]});
//		const boollrhBbb = await NALVCnhV1d.increaseAllowance.call(addressjM9S7Gu, uintSkiQvrp, {from: accounts[4]});
//		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		const uint256PKH27ra = await NALVCnhV1d.allowance.call(addressof5vpFW, addressjpUqrl8, {from: accounts[2]});
//		await NALVCnhV1d.renounceAdmin.call({from: accounts[4]});

		await expect(NALVCnhV1d.unlock.call(addressUINfGiL, uintVGgtj5I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTyTJiZ = await NAL.new({from: accounts[4]});
		const uintmOpUmiA = BigInt("768")
		const addressw1D6Daf = accounts[2]
		const addressFWt8SQ = accounts[1]
		const addressG859gDY = "0x0000000000000000000000000000000000000001"
		const addressIQ53v8 = accounts[1]
		const addressiG99m3Q = accounts[2]
		const uintwa9P1x1 = BigInt("729")
		const uintgC3Z2Nz = BigInt("1127")
		const addressspTS4tH = accounts[3]
		const uint256P6jZTOM = await NALTyTJiZ.totalSupply.call({from: accounts[3]});
//		const boolyh47CUG = await NALTyTJiZ.transferFrom.call(addressFWt8SQ, addressw1D6Daf, uintmOpUmiA, {from: accounts[0]});
//		const addressc5VSQAz = await NALTyTJiZ.notFrozen.call(addressG859gDY, {from: accounts[0]});
//		const addressEiAKilm = await NALTyTJiZ.transferOwnership.call(addressIQ53v8, {from: accounts[0]});
//		const uint256ZxUjIXw = await NALTyTJiZ.balanceOf.call(addressiG99m3Q, {from: accounts[2]});
//		await NALTyTJiZ.pause.call({from: accounts[0]});
//		const boolV9G9TI = await NALTyTJiZ.transferWithLock.call(addressspTS4tH, uintgC3Z2Nz, uintwa9P1x1, {from: accounts[5]});

		assert.equal(uint256P6jZTOM, BigInt("2000000000000000000000000000"))
		await expect(NALTyTJiZ.transferFrom.call(addressFWt8SQ, addressw1D6Daf, uintmOpUmiA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALP4ioGRS = await NAL.new({from: accounts[3]});
		const addressCmuUvTi = accounts[4]
		const addressqK2IUpc = accounts[3]
		const uintaM2xVyH = BigInt("1556")
		const addressLcQNiWA = accounts[4]
		const address7qNx1S = accounts[0]
//		const boolMifW8f6 = await NALP4ioGRS.unfreezeAccount.call(addressCmuUvTi, {from: accounts[0]});
//		const addressE0VzSjw = await NALP4ioGRS.addAdmin.call(addressqK2IUpc, {from: accounts[2]});
//		const booluYIjGir = await NALP4ioGRS.unlock.call(addressLcQNiWA, uintaM2xVyH, {from: accounts[3]});
//		const addressoZ6mYH5 = await NALP4ioGRS.addAdmin.call(address7qNx1S, {from: accounts[4]});

		await expect(NALP4ioGRS.unfreezeAccount.call(addressCmuUvTi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQCGwYdT = await NAL.new({from: accounts[4]});
		const uintOVsgRDB = BigInt("999")
		const addressnj3Nr0R = accounts[0]
		const uinthaDiEAY = BigInt("1336")
		const addressSFTll7q = accounts[4]
		const uintON0oVwf = BigInt("134")
		const addressIIhrcxw = accounts[0]
		const addresshzf8LfB = accounts[4]
		const addressNxQdl78 = accounts[4]
		const addressxCR8WN3 = accounts[0]
		const boolyP4dVBH = await NALQCGwYdT.approve.call(addressnj3Nr0R, uintOVsgRDB, {from: accounts[4]});
		const boolPyxGiU9 = await NALQCGwYdT.increaseAllowance.call(addressSFTll7q, uinthaDiEAY, {from: accounts[0]});
		const boolqoCb9Ha = await NALQCGwYdT.transfer.call(addressIIhrcxw, uintON0oVwf, {from: accounts[4]});
		const uint256jSKgv6c = await NALQCGwYdT.allowance.call(addressNxQdl78, addresshzf8LfB, {from: accounts[0]});
		const boollBiidO7 = await NALQCGwYdT.isAdmin.call(addressxCR8WN3, {from: accounts[5]});

		assert.equal(boolPyxGiU9, true)
		assert.equal(boollBiidO7, false)
		assert.equal(boolqoCb9Ha, true)
		assert.equal(boolyP4dVBH, true)
		assert.equal(uint256jSKgv6c, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uint8XNAlfZg = await NALVCnhV1d.decimals.call({from: accounts[0]});
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});

		assert.equal(booleQvmAA, false)
		assert.equal(uint8XNAlfZg, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALQCGwYdT = await NAL.new({from: accounts[4]});
		const uintkwyiwpQ = BigInt("999")
		const addressPeiz6gw = accounts[0]
		const uint4MvMJy = BigInt("134")
		const addressLCiDSz = accounts[0]
		const addressH95dDE = accounts[0]
		const addressQpqhFDJ = accounts[2]
		const addressrkeBHGp = accounts[1]
		const uintWfR8wlL = BigInt("1947")
		const addressnBarvWr = accounts[0]
		const boolyP4dVBH = await NALQCGwYdT.approve.call(addressPeiz6gw, uintkwyiwpQ, {from: accounts[4]});
		const boolqoCb9Ha = await NALQCGwYdT.transfer.call(addressLCiDSz, uint4MvMJy, {from: accounts[4]});
		const addressDz8wZte = await NALQCGwYdT.transferOwnership.call(addressH95dDE, {from: accounts[4]});
		const stringsRl8Mdc = await NALQCGwYdT.name.call({from: accounts[3]});
		const uint256bg8uTG = await NALQCGwYdT.balanceOf.call(addressQpqhFDJ, {from: accounts[0]});
		const boollBiidO7 = await NALQCGwYdT.isAdmin.call(addressrkeBHGp, {from: accounts[5]});
		const boolun1RBR = await NALQCGwYdT.transfer.call(addressnBarvWr, uintWfR8wlL, {from: accounts[4]});

		assert.equal(boollBiidO7, false)
		assert.equal(boolqoCb9Ha, true)
		assert.equal(boolun1RBR, true)
		assert.equal(boolyP4dVBH, true)
		assert.equal(stringsRl8Mdc, "Personal Token")
		assert.equal(uint256bg8uTG, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALQCGwYdT = await NAL.new({from: accounts[4]});
		const uintVu9Y90r = BigInt("999")
		const addressRrErrUk = accounts[0]
		const uintrgtKCy5 = BigInt("134")
		const addressHaixgix = accounts[0]
		const addressGmeD9Ee = accounts[1]
		const uintdHmuUco = BigInt("396")
		const uintG9gOERT = BigInt("381")
		const addresscQofZS6 = accounts[3]
		const addressPWGOib = accounts[0]
		const boolyP4dVBH = await NALQCGwYdT.approve.call(addressRrErrUk, uintVu9Y90r, {from: accounts[4]});
		const boolqoCb9Ha = await NALQCGwYdT.transfer.call(addressHaixgix, uintrgtKCy5, {from: accounts[4]});
		const addressTsl5iXA = await NALQCGwYdT.transferOwnership.call(addressGmeD9Ee, {from: accounts[4]});
		const stringsRl8Mdc = await NALQCGwYdT.name.call({from: accounts[3]});
//		const bool7ksVCL = await NALQCGwYdT.lock.call(addresscQofZS6, uintG9gOERT, uintdHmuUco, {from: accounts[4]});
//		const boollBiidO7 = await NALQCGwYdT.isAdmin.call(addressPWGOib, {from: accounts[5]});

		assert.equal(boolqoCb9Ha, true)
		assert.equal(boolyP4dVBH, true)
		assert.equal(stringsRl8Mdc, "Personal Token")
		await expect(NALQCGwYdT.lock.call(addresscQofZS6, uintG9gOERT, uintdHmuUco, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const addressQruxa1T = accounts[2]
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
		const addressqREN8E7 = await NALVCnhV1d.addAdmin.call(addressQruxa1T, {from: accounts[1]});

		assert.equal(booleQvmAA, false)
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uinttAQpYgO = BigInt("757")
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		const uint256rOuhB52 = await NALVCnhV1d.burn.call(uinttAQpYgO, {from: accounts[0]});

		assert.equal(booleQvmAA, false)
		await expect(NALVCnhV1d.burn.call(uinttAQpYgO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const addresskyebTZ4 = accounts[1]
		const uint256EZ4wwh = await NALVCnhV1d.balanceOf.call(addresskyebTZ4, {from: accounts[4]});
		const stringlbEGvD0 = await NALVCnhV1d.symbol.call({from: accounts[4]});
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		await NALVCnhV1d.whenPaused.call({from: accounts[4]});

		assert.equal(booleQvmAA, false)
		assert.equal(stringlbEGvD0, "NAL")
		assert.equal(uint256EZ4wwh, BigInt("2000000000000000000000000000"))
		await expect(NALVCnhV1d.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const addressbPbrSiA = accounts[5]
		const addresswTigbcq = accounts[4]
		const addresswkRR2t = accounts[4]
		const boollYdBsFA = await NALVCnhV1d.isAdmin.call(addressbPbrSiA, {from: accounts[1]});
		const boolDFdZFCu = await NALVCnhV1d.freezeAccount.call(addresswTigbcq, {from: accounts[1]});
//		const addressIEMz9P = await NALVCnhV1d.notFrozen.call(addresswkRR2t, {from: accounts[1]});
//		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});

		assert.equal(boolDFdZFCu, true)
		assert.equal(boollYdBsFA, false)
		await expect(NALVCnhV1d.notFrozen.call(addresswkRR2t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const addressTEnMEvL = accounts[1]
		const bool53Uh3w = await NALVCnhV1d.isOwner.call(addressTEnMEvL, {from: accounts[4]});
		const booleQvmAA = await NALVCnhV1d.paused.call({from: accounts[3]});
//		await NALVCnhV1d.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool53Uh3w, true)
		assert.equal(booleQvmAA, false)
		await expect(NALVCnhV1d.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintDRMBNst = BigInt("600")
		const address3jTrTg = accounts[1]
//		await NALVCnhV1d.pause.call({from: accounts[1]});
//		const boolTCa5Cvm = await NALVCnhV1d.transfer.call(address3jTrTg, uintDRMBNst, {from: accounts[2]});

		await expect(NALVCnhV1d.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const addresslueqUwP = accounts[4]
		const uintimxG1vM = BigInt("591")
		const addressoaet5rf = accounts[2]
//		const boolJtxAi14 = await NALVCnhV1d.unfreezeAccount.call(addresslueqUwP, {from: accounts[1]});
//		const uint8AEcwFJ = await NALVCnhV1d.decimals.call({from: accounts[1]});
//		const boolTCa5Cvm = await NALVCnhV1d.transfer.call(addressoaet5rf, uintimxG1vM, {from: accounts[2]});

		await expect(NALVCnhV1d.unfreezeAccount.call(addresslueqUwP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVCnhV1d = await NAL.new({from: accounts[1]});
		const uintsiwdiCB = BigInt("1548")
		const uintVqW53m = BigInt("237")
		const addressYm7ZUy = accounts[0]
		const uintokFxJ7b = BigInt("1583")
		const addressl3Twx9i = accounts[1]
		const boolEPzYaG = await NALVCnhV1d.transferWithLock.call(addressYm7ZUy, uintVqW53m, uintsiwdiCB, {from: accounts[1]});
//		const boolTCa5Cvm = await NALVCnhV1d.transfer.call(addressl3Twx9i, uintokFxJ7b, {from: accounts[2]});
//		await NALVCnhV1d.unpause.call({from: accounts[4]});

		assert.equal(boolEPzYaG, true)
		await expect(NALVCnhV1d.transfer.call(addressl3Twx9i, uintokFxJ7b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALX7M75uU = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEmlUA4E = BigInt("1976")
		const addressqhaejXX = accounts[3]
		const addressktoJp1U = accounts[4]
		const addressqf3527d = await NALX7M75uU.burnFrom.call(addressqhaejXX, uintEmlUA4E, {from: accounts[2]});
		const uint256LXeIMiH = await NALX7M75uU.balanceOf.call(addressktoJp1U, {from: accounts[4]});
	});
})
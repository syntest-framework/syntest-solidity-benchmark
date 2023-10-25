const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYtFJhrbG = await KPLAY.new({from: accounts[2]});
		const addressOb5Zkys = accounts[5]
		const addressREzkSXE = accounts[0]
		const uint256zAXcNR9 = await KPLAYtFJhrbG.allowance.call(addressREzkSXE, addressOb5Zkys, {from: accounts[0]});
//		await KPLAYtFJhrbG.whenPaused.call({from: accounts[5]});

		assert.equal(uint256zAXcNR9, BigInt("0"))
		await expect(KPLAYtFJhrbG.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEUFod3x = await KPLAY.new({from: accounts[4]});
		const uinti9t9Rk9 = BigInt("1411")
		const uintMi67Ncd = BigInt("243")
		const addressdr6AlcT = accounts[4]
		const uintdOL7ZUy = BigInt("673")
		const uinthfDvbO = BigInt("307")
		const addressYdoevlU = accounts[1]
		const uintzDRf8B3 = BigInt("947")
		const addressPCeKzwu = accounts[0]
		const addressyHs5r5 = accounts[1]
//		const addresstlj60zH = await KPLAYEUFod3x.lock.call(addressdr6AlcT, uintMi67Ncd, uinti9t9Rk9, {from: accounts[0]});
//		const uint256eKoCYxu = await KPLAYEUFod3x.afterTime.call(uintdOL7ZUy, {from: accounts[4]});
//		await KPLAYEUFod3x.lockState.call(addressYdoevlU, uinthfDvbO, {from: accounts[0]});
//		const boolHYKN0yT = await KPLAYEUFod3x.decreaseAllowance.call(addressPCeKzwu, uintzDRf8B3, {from: accounts[0]});
//		const addresslMzCplt = await KPLAYEUFod3x.freeze.call(addressyHs5r5, {from: accounts[3]});

		await expect(KPLAYEUFod3x.lock.call(addressdr6AlcT, uintMi67Ncd, uinti9t9Rk9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWiJa4Ve = await KPLAY.new({from: accounts[5]});
		const uintiLd1pPa = BigInt("1516")
		const addressrswSst6 = accounts[1]
		const uintYLwTisA = BigInt("1779")
		const addressjuN1DZg = accounts[4]
		const uintp38HMNv = BigInt("226")
		const addressFhWezj2 = accounts[5]
		const uintx0aZJNy = BigInt("563")
		const addressNbQVrYe = accounts[2]
		const boolePhI2tu = await KPLAYWiJa4Ve.approve.call(addressrswSst6, uintiLd1pPa, {from: accounts[2]});
		const boolrmESLXA = await KPLAYWiJa4Ve.increaseAllowance.call(addressjuN1DZg, uintYLwTisA, {from: accounts[4]});
//		const addressJpDDaWf = await KPLAYWiJa4Ve.unlock.call(addressFhWezj2, uintp38HMNv, {from: accounts[2]});
//		const addressOjpzdh8 = await KPLAYWiJa4Ve.burn.call(addressNbQVrYe, uintx0aZJNy, {from: accounts[3]});
//		const uint256rBGbPt8 = await KPLAYWiJa4Ve.totalSupply.call({from: accounts[3]});

		assert.equal(boolePhI2tu, true)
		assert.equal(boolrmESLXA, true)
		await expect(KPLAYWiJa4Ve.unlock.call(addressFhWezj2, uintp38HMNv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcRzo3Kq = await KPLAY.new({from: accounts[5]});
		const uintDBmDgit = BigInt("383")
		const addressqr18J1w = accounts[5]
		const uintB8ELqN0 = BigInt("838")
		const addresstLWpAUr = accounts[1]
		const addressHuZJhsn = accounts[4]
		const uintqMwrzwE = BigInt("1007")
		const addressIzmG67Q = accounts[2]
//		const boolw1aoZiM = await KPLAYcRzo3Kq.decreaseAllowance.call(addressqr18J1w, uintDBmDgit, {from: accounts[4]});
//		const addressJNtNJOP = await KPLAYcRzo3Kq.unlock.call(addresstLWpAUr, uintB8ELqN0, {from: accounts[1]});
//		const boolKKBqDi = await KPLAYcRzo3Kq.isFrozen.call(addressHuZJhsn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkY4bYd9 = await KPLAYcRzo3Kq.mint.call(addressIzmG67Q, uintqMwrzwE, {from: accounts[4]});

		await expect(KPLAYcRzo3Kq.decreaseAllowance.call(addressqr18J1w, uintDBmDgit, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfdXxER9 = await KPLAY.new({from: accounts[4]});
		const uint0bDN94 = BigInt("459")
		const addressBanvYF3 = accounts[0]
		const addressS6AAAbe = accounts[5]
		const uintIjEjf0 = BigInt("1568")
		const addressgL4jPqT = accounts[2]
		const uintFLA5BUo = BigInt("1416")
		const addressgPVTUko = accounts[2]
		const addresspZLXfp = accounts[0]
		const addressyoEqa4b = accounts[2]
		const uint256OLNqxJ = await KPLAYfdXxER9.currentTime.call({from: accounts[1]});
		const boolsgJUp6j = await KPLAYfdXxER9.approve.call(addressBanvYF3, uint0bDN94, {from: accounts[4]});
		const boolpRjI8A9 = await KPLAYfdXxER9.isFrozen.call(addressS6AAAbe, {from: accounts[0]});
//		const booloeVpaYm = await KPLAYfdXxER9.decreaseAllowance.call(addressgL4jPqT, uintIjEjf0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY9q8Zr = await KPLAYfdXxER9.transferFrom.call(addresspZLXfp, addressgPVTUko, uintFLA5BUo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wzccWP = await KPLAYfdXxER9.lockCount.call(addressyoEqa4b, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpRjI8A9, false)
		assert.equal(boolsgJUp6j, true)
		assert.equal(uint256OLNqxJ, BigInt("1630228415"))
		await expect(KPLAYfdXxER9.decreaseAllowance.call(addressgL4jPqT, uintIjEjf0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTWJpivW = await KPLAY.new({from: accounts[3]});
		const uintCeuGNrB = BigInt("1431")
		const addressyGAQCl = accounts[1]
		const uintq0Bp0z = BigInt("558")
		const uintfoNlugu = BigInt("1849")
		const addressw1j0Ukg = accounts[1]
		const uintoqO7DHY = BigInt("71")
		const addressQCdVAjX = accounts[4]
		const addressgVlVYcg = accounts[4]
		const boolCNTe1PS = await KPLAYTWJpivW.increaseAllowance.call(addressyGAQCl, uintCeuGNrB, {from: accounts[1]});
//		const addresss4Bokg0 = await KPLAYTWJpivW.lockAfter.call(addressw1j0Ukg, uintfoNlugu, uintq0Bp0z, {from: accounts[3]});
//		await KPLAYTWJpivW.whenNotPaused.call({from: accounts[0]});
//		const boolN1LRAhK = await KPLAYTWJpivW.transferFrom.call(addressgVlVYcg, addressQCdVAjX, uintoqO7DHY, {from: accounts[1]});

		assert.equal(boolCNTe1PS, true)
		await expect(KPLAYTWJpivW.lockAfter.call(addressw1j0Ukg, uintfoNlugu, uintq0Bp0z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkw2Gbnb = await KPLAY.new({from: accounts[5]});
		const uintnXAQanm = BigInt("1269")
		const addressJJ45IVZ = "0x0000000000000000000000000000000000000001"
		const addressVwv5Weg = accounts[3]
		const addressRkSV87H = accounts[5]
//		const boolgOGBrMf = await KPLAYkw2Gbnb.transferFrom.call(addressVwv5Weg, addressJJ45IVZ, uintnXAQanm, {from: accounts[1]});
//		const addressaqWNC7u = await KPLAYkw2Gbnb.unfreeze.call(addressRkSV87H, {from: accounts[0]});

		await expect(KPLAYkw2Gbnb.transferFrom.call(addressVwv5Weg, addressJJ45IVZ, uintnXAQanm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYV6hOblD = await KPLAY.new({from: accounts[2]});
		const addressbMvRDIc = "0x0000000000000000000000000000000000000001"
		const uintbxZzErW = BigInt("1336")
		const uintnu8D3aP = BigInt("1608")
		const addresshX45bWC = accounts[4]
		const addressq5mkfd3 = accounts[2]
		const uint256phSGJ3t = await KPLAYV6hOblD.balanceOf.call(addressbMvRDIc, {from: accounts[1]});
//		const boolZYLIZRq = await KPLAYV6hOblD.transferWithLock.call(addresshX45bWC, uintnu8D3aP, uintbxZzErW, {from: accounts[4]});
//		const addresslilFGth = await KPLAYV6hOblD.freeze.call(addressq5mkfd3, {from: accounts[3]});

		assert.equal(uint256phSGJ3t, BigInt("0"))
		await expect(KPLAYV6hOblD.transferWithLock.call(addresshX45bWC, uintnu8D3aP, uintbxZzErW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfdXxER9 = await KPLAY.new({from: accounts[4]});
		const uintXvI95ka = BigInt("459")
		const addressghAANUM = accounts[0]
		const addressubfhgh9 = accounts[6]
		const uintOd1YZNK = BigInt("1582")
		const addressEVFDGa7 = accounts[0]
		const uintHdDOxfB = BigInt("1568")
		const addresss9oAjqS = accounts[2]
		const uintF5jjmtS = BigInt("1416")
		const address0XrTQc = accounts[2]
		const addressTqoLL8a = accounts[0]
		const addressESFtihK = accounts[2]
		const uint256OLNqxJ = await KPLAYfdXxER9.currentTime.call({from: accounts[1]});
		const boolsgJUp6j = await KPLAYfdXxER9.approve.call(addressghAANUM, uintXvI95ka, {from: accounts[4]});
		const boolpRjI8A9 = await KPLAYfdXxER9.isFrozen.call(addressubfhgh9, {from: accounts[0]});
//		const addressk4gaXt3 = await KPLAYfdXxER9.unlock.call(addressEVFDGa7, uintOd1YZNK, {from: accounts[4]});
//		const booloeVpaYm = await KPLAYfdXxER9.decreaseAllowance.call(addresss9oAjqS, uintHdDOxfB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY9q8Zr = await KPLAYfdXxER9.transferFrom.call(addressTqoLL8a, address0XrTQc, uintF5jjmtS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wzccWP = await KPLAYfdXxER9.lockCount.call(addressESFtihK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpRjI8A9, false)
		assert.equal(boolsgJUp6j, true)
		assert.equal(uint256OLNqxJ, BigInt("1630228432"))
		await expect(KPLAYfdXxER9.unlock.call(addressEVFDGa7, uintOd1YZNK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRjXvGdr = await KPLAY.new({from: accounts[1]});
		const addressm2bkBLM = accounts[5]
		const addressszZuZMy = accounts[0]
		const addressbIS5Cf = accounts[2]
		const uint256yijrZlG = await KPLAYRjXvGdr.allowance.call(addressszZuZMy, addressm2bkBLM, {from: accounts[0]});
		const uint256siCSkB = await KPLAYRjXvGdr.lockCount.call(addressbIS5Cf, {from: accounts[5]});

		assert.equal(uint256siCSkB, BigInt("0"))
		assert.equal(uint256yijrZlG, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYGLzynhL = await KPLAY.new({from: accounts[2]});
		const uinttMnaKU = BigInt("80")
		const addressxKKORsu = accounts[5]
		const uinteABxNBZ = BigInt("1998")
		const addressqK1pdI = accounts[2]
		const addressteZXOs = accounts[5]
		const uint2565s8pZu = await KPLAYGLzynhL.totalSupply.call({from: accounts[3]});
//		const booljlmvFbT = await KPLAYGLzynhL.transfer.call(addressxKKORsu, uinttMnaKU, {from: accounts[4]});
//		const boolpm8OEL0 = await KPLAYGLzynhL.transferFrom.call(addressteZXOs, addressqK1pdI, uinteABxNBZ, {from: accounts[2]});
//		await KPLAYGLzynhL.pause.call({from: accounts[4]});
//		await KPLAYGLzynhL.onlyOwner.call({from: accounts[3]});

		assert.equal(uint2565s8pZu, BigInt("10000000000000000"))
		await expect(KPLAYGLzynhL.transfer.call(addressxKKORsu, uinttMnaKU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbUfiOBj = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		await KPLAYbUfiOBj.onlyOwner.call({from: accounts[4]});
		const uint256TCy85r4 = await KPLAYbUfiOBj.currentTime.call({from: accounts[1]});
	});

	it('test for KPLAY', async () => {
		const KPLAYV6hOblD = await KPLAY.new({from: accounts[2]});
		const addressjqUVvAL = "0x0000000000000000000000000000000000000001"
		const uinteNShzQP = BigInt("1794")
		const uintsqKW0yI = BigInt("1873")
		const uintAkqSmKb = BigInt("514")
		const addressI0bR2Kn = accounts[4]
		const addressCRzHlFi = accounts[5]
		const uintaMHQH5b = BigInt("1336")
		const uintSMrCNX = BigInt("51")
		const addressSrJlP9E = accounts[4]
		const addresszouMrvU = accounts[2]
		const uintv7gx7Yy = BigInt("603")
		const addressJXRvvFZ = accounts[4]
		const uint256phSGJ3t = await KPLAYV6hOblD.balanceOf.call(addressjqUVvAL, {from: accounts[1]});
		const uint256JXpPyGc = await KPLAYV6hOblD.afterTime.call(uinteNShzQP, {from: accounts[2]});
//		const addressHL0EReT = await KPLAYV6hOblD.lockAfter.call(addressI0bR2Kn, uintAkqSmKb, uintsqKW0yI, {from: accounts[0]});
//		const uint256RGrYmI = await KPLAYV6hOblD.balanceOf.call(addressCRzHlFi, {from: accounts[0]});
//		const boolZYLIZRq = await KPLAYV6hOblD.transferWithLock.call(addressSrJlP9E, uintSMrCNX, uintaMHQH5b, {from: accounts[4]});
//		const addresslilFGth = await KPLAYV6hOblD.freeze.call(addresszouMrvU, {from: accounts[3]});
//		await KPLAYV6hOblD.whenNotPaused.call({from: accounts[3]});
//		const addressjaROa4r = await KPLAYV6hOblD.unlock.call(addressJXRvvFZ, uintv7gx7Yy, {from: accounts[4]});

		assert.equal(uint256JXpPyGc, BigInt("1630230218"))
		assert.equal(uint256phSGJ3t, BigInt("0"))
		await expect(KPLAYV6hOblD.lockAfter.call(addressI0bR2Kn, uintAkqSmKb, uintsqKW0yI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkw2Gbnb = await KPLAY.new({from: accounts[5]});
		const uintNr7hEQ3 = BigInt("923")
		const uintU6psTlY = BigInt("1340")
		const uint74FnFp = BigInt("1170")
		const addressBXaxIdG = accounts[2]
		const addressZMVtKpX = accounts[6]
		const uint256nezH69B = await KPLAYkw2Gbnb.afterTime.call(uintNr7hEQ3, {from: "0x0000000000000000000000000000000000000001"});
		const boolbxSt1Wv = await KPLAYkw2Gbnb.transferWithLock.call(addressBXaxIdG, uint74FnFp, uintU6psTlY, {from: accounts[5]});
//		const addressaqWNC7u = await KPLAYkw2Gbnb.unfreeze.call(addressZMVtKpX, {from: accounts[0]});

		assert.equal(boolbxSt1Wv, true)
		assert.equal(uint256nezH69B, BigInt("1630229335"))
		await expect(KPLAYkw2Gbnb.unfreeze.call(addressZMVtKpX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcmncHW2 = await KPLAY.new({from: accounts[0]});
		const uintsgvAUo1 = BigInt("601")
		const uintbHQ1IZi = BigInt("2022")
		const addressIcr7lsT = accounts[4]
		const uintRoQcAah = BigInt("222")
		const addressB8b4Tmx = accounts[2]
		const boolvYD7CIi = await KPLAYcmncHW2.transferWithLockAfter.call(addressIcr7lsT, uintbHQ1IZi, uintsgvAUo1, {from: accounts[0]});
//		await KPLAYcmncHW2.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresshSiSTqN = await KPLAYcmncHW2.unlock.call(addressB8b4Tmx, uintRoQcAah, {from: accounts[0]});

		assert.equal(boolvYD7CIi, true)
		await expect(KPLAYcmncHW2.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwOmkW32 = await KPLAY.new({from: accounts[2]});
		const uintIKaiFu4 = BigInt("921")
		const addressu6b9NVz = accounts[0]
		const uintLVPVaQw = BigInt("1883")
		const addressDTlMdMp = accounts[2]
		const uintu77Ibc3 = BigInt("1593")
		const uintnTLNebE = BigInt("549")
		const addressWTS3Zgl = accounts[4]
		const uintUahFmaZ = BigInt("1298")
		const uint4TnJsB = BigInt("14")
		const addressUxXO6uj = "0x0000000000000000000000000000000000000001"
		const uinttXsJaqF = BigInt("1419")
		const uintAdtfboe = BigInt("1660")
		const addresseRjR9i8 = accounts[5]
		const boolAW55Ltz = await KPLAYwOmkW32.approve.call(addressu6b9NVz, uintIKaiFu4, {from: accounts[1]});
//		await KPLAYwOmkW32.lockState.call(addressDTlMdMp, uintLVPVaQw, {from: accounts[0]});
//		const addresskgmfN6I = await KPLAYwOmkW32.lock.call(addressWTS3Zgl, uintnTLNebE, uintu77Ibc3, {from: accounts[4]});
//		const boolQAaGBZe = await KPLAYwOmkW32.transferWithLockAfter.call(addressUxXO6uj, uint4TnJsB, uintUahFmaZ, {from: accounts[1]});
//		const addressXOB1qSH = await KPLAYwOmkW32.lockAfter.call(addresseRjR9i8, uintAdtfboe, uinttXsJaqF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAW55Ltz, true)
		await expect(KPLAYwOmkW32.lockState.call(addressDTlMdMp, uintLVPVaQw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkw2Gbnb = await KPLAY.new({from: accounts[5]});
		const addressSf40vKJ = accounts[5]
		const addressRofiqN = accounts[4]
		const addressG7V65vi = accounts[4]
		const uintTlqKhrS = BigInt("1269")
		const addressFCvsd1g = accounts[3]
		const addressurPH4GP = accounts[3]
		const addressLfgFyPW = await KPLAYkw2Gbnb.unfreeze.call(addressSf40vKJ, {from: accounts[5]});
		const uint256hf2xCxM = await KPLAYkw2Gbnb.allowance.call(addressG7V65vi, addressRofiqN, {from: accounts[4]});
//		const boolgOGBrMf = await KPLAYkw2Gbnb.transferFrom.call(addressurPH4GP, addressFCvsd1g, uintTlqKhrS, {from: accounts[1]});

		assert.equal(uint256hf2xCxM, BigInt("0"))
		await expect(KPLAYkw2Gbnb.transferFrom.call(addressurPH4GP, addressFCvsd1g, uintTlqKhrS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcmncHW2 = await KPLAY.new({from: accounts[0]});
		const uintD8zApRr = BigInt("213")
		const addressBJXknli = accounts[1]
		const addressBv5cSHV = accounts[0]
		const addressQgByppm = accounts[2]
		const addressqjbGYIq = accounts[5]
		const uintuZoyUrE = BigInt("1622")
		const addressnh3WIdm = accounts[5]
//		await KPLAYcmncHW2.unpause.call({from: accounts[0]});
//		const addresshSiSTqN = await KPLAYcmncHW2.unlock.call(addressBJXknli, uintD8zApRr, {from: accounts[0]});
//		await KPLAYcmncHW2.pause.call({from: accounts[3]});
//		const uint256XWGbzCK = await KPLAYcmncHW2.allowance.call(addressQgByppm, addressBv5cSHV, {from: accounts[3]});
//		const addressgOqLnh7 = await KPLAYcmncHW2.freeze.call(addressqjbGYIq, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYcmncHW2.lockState.call(addressnh3WIdm, uintuZoyUrE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYcmncHW2.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkw2Gbnb = await KPLAY.new({from: accounts[5]});
		const uintX7cuC7l = BigInt("1269")
		const addressCs45dU = "0x0000000000000000000000000000000000000000"
		const addressvdbpPe = accounts[3]
//		const boolgOGBrMf = await KPLAYkw2Gbnb.transferFrom.call(addressvdbpPe, addressCs45dU, uintX7cuC7l, {from: accounts[1]});

		await expect(KPLAYkw2Gbnb.transferFrom.call(addressvdbpPe, addressCs45dU, uintX7cuC7l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGDvfZyy = await KPLAY.new({from: accounts[4]});
		const uintHEsyqN = BigInt("421")
		const addressFShKpaE = accounts[1]
		const uintFS0hvMV = BigInt("48")
		const uintUStPnOw = BigInt("1977")
		const addressJlMzCZ5 = accounts[3]
		const addressrTWsbUB = accounts[0]
//		const addressGqHazMX = await KPLAYGDvfZyy.burn.call(addressFShKpaE, uintHEsyqN, {from: accounts[4]});
//		const addressoi04qo1 = await KPLAYGDvfZyy.lock.call(addressJlMzCZ5, uintUStPnOw, uintFS0hvMV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdbMzTfP = await KPLAYGDvfZyy.freeze.call(addressrTWsbUB, {from: accounts[4]});

		await expect(KPLAYGDvfZyy.burn.call(addressFShKpaE, uintHEsyqN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcmncHW2 = await KPLAY.new({from: accounts[0]});
		const uintIOkaFY6 = BigInt("1730")
		const uintfp7ZaCT = BigInt("887")
		const addressIQpEX0b = accounts[1]
		const uinttOX1GdK = BigInt("2029")
		const addressX0J5rd7 = accounts[2]
		const uintIW8YcL0 = BigInt("175")
		const addressFSZXxIv = "0x0000000000000000000000000000000000000001"
		const uint2568brvRv = await KPLAYcmncHW2.afterTime.call(uintIOkaFY6, {from: accounts[0]});
		const boolnT6Sxmm = await KPLAYcmncHW2.mint.call(addressIQpEX0b, uintfp7ZaCT, {from: accounts[0]});
		const boolO9GzyEw = await KPLAYcmncHW2.transfer.call(addressX0J5rd7, uinttOX1GdK, {from: accounts[0]});
//		await KPLAYcmncHW2.lockState.call(addressFSZXxIv, uintIW8YcL0, {from: accounts[1]});

		assert.equal(boolO9GzyEw, true)
		assert.equal(boolnT6Sxmm, true)
		assert.equal(uint2568brvRv, BigInt("1630230153"))
		await expect(KPLAYcmncHW2.lockState.call(addressFSZXxIv, uintIW8YcL0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYe6oyEZq = await KPLAY.new({from: accounts[3]});
		const addressMeofYPV = accounts[0]
		const uintmrizq7 = BigInt("1402")
		const addresslqIOMJc = accounts[2]
		const uintmXkRRiv = BigInt("185")
		const addressne8P5HS = accounts[3]
		const addresshGJDNhC = accounts[1]
		const uintTasg8iq = BigInt("48")
		const uintCIuPPP = BigInt("624")
		const addressfaandej = accounts[5]
		const addressMKXVuqo = await KPLAYe6oyEZq.transferOwnership.call(addressMeofYPV, {from: accounts[3]});
//		await KPLAYe6oyEZq.lockState.call(addresslqIOMJc, uintmrizq7, {from: accounts[2]});
//		await KPLAYe6oyEZq.lockState.call(addressne8P5HS, uintmXkRRiv, {from: accounts[3]});
//		const uint256noKDCix = await KPLAYe6oyEZq.balanceOf.call(addresshGJDNhC, {from: accounts[5]});
//		const boolfHcYfd = await KPLAYe6oyEZq.transferWithLockAfter.call(addressfaandej, uintCIuPPP, uintTasg8iq, {from: accounts[0]});

		await expect(KPLAYe6oyEZq.lockState.call(addresslqIOMJc, uintmrizq7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkw2Gbnb = await KPLAY.new({from: accounts[5]});
		const addressVTA0AxA = accounts[2]
		const uintpkcIgA = BigInt("1269")
		const addressuA4OtFQ = "0x00000000000000000000000000000000000000-1"
		const addressmK3Qn2q = accounts[3]
		const addressDDs1HBv = accounts[2]
		const uint256UDWcDdz = await KPLAYkw2Gbnb.balanceOf.call(addressVTA0AxA, {from: accounts[5]});
//		const boolgOGBrMf = await KPLAYkw2Gbnb.transferFrom.call(addressmK3Qn2q, addressuA4OtFQ, uintpkcIgA, {from: accounts[1]});
//		await KPLAYkw2Gbnb.whenNotPaused.call({from: accounts[4]});
//		const addressTvUiuc7 = await KPLAYkw2Gbnb.unfreeze.call(addressDDs1HBv, {from: accounts[2]});
//		await KPLAYkw2Gbnb.whenNotPaused.call({from: accounts[0]});

		assert.equal(uint256UDWcDdz, BigInt("0"))
		await expect(KPLAYkw2Gbnb.transferFrom.call(addressmK3Qn2q, addressuA4OtFQ, uintpkcIgA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcmncHW2 = await KPLAY.new({from: accounts[0]});
		const uintuAKOQ5x = BigInt("1828")
		const uintN4b9I6s = BigInt("1044")
		const addressGq8ibm6 = accounts[4]
//		const addressPiJT1d6 = await KPLAYcmncHW2.lock.call(addressGq8ibm6, uintN4b9I6s, uintuAKOQ5x, {from: accounts[0]});

		await expect(KPLAYcmncHW2.lock.call(addressGq8ibm6, uintN4b9I6s, uintuAKOQ5x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYV6hOblD = await KPLAY.new({from: accounts[2]});
		const addressg0XEBHW = "0x00000000000000000000000000000000000000-1"
		const uintw2VvjdR = BigInt("1817")
		const addressAGJ3OLO = accounts[1]
		const uintnEtugtM = BigInt("1623")
		const addressIiqqfI4 = accounts[2]
		const uintrV41BL = BigInt("426")
		const uintW7MpJZn = BigInt("193")
		const addressqFkhVAJ = accounts[1]
		const addresscOUJb8F = accounts[4]
		const addressrSfv3zl = accounts[4]
		const uintfXGjiKH = BigInt("590")
		const addressZ4nXRQn = accounts[3]
		const uintuQrk34H = BigInt("1882")
		const addressqdT7p1X = accounts[1]
		const uintfOiMbxP = BigInt("991")
		const addresss8qlFIA = accounts[4]
		const addressEB17wMK = accounts[4]
//		const uint256phSGJ3t = await KPLAYV6hOblD.balanceOf.call(addressg0XEBHW, {from: accounts[1]});
//		const boolPzGN68E = await KPLAYV6hOblD.transfer.call(addressAGJ3OLO, uintw2VvjdR, {from: accounts[2]});
//		const boolDPEI01i = await KPLAYV6hOblD.approve.call(addressIiqqfI4, uintnEtugtM, {from: accounts[3]});
//		const addressVE4TjIZ = await KPLAYV6hOblD.lockAfter.call(addressqFkhVAJ, uintW7MpJZn, uintrV41BL, {from: accounts[0]});
//		const uint256P9BiUYx = await KPLAYV6hOblD.allowance.call(addressrSfv3zl, addresscOUJb8F, {from: accounts[3]});
//		const addressVcTYsEH = await KPLAYV6hOblD.unlock.call(addressZ4nXRQn, uintfXGjiKH, {from: accounts[4]});
//		const addressGNRQ4pK = await KPLAYV6hOblD.unlock.call(addressqdT7p1X, uintuQrk34H, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzpbdIjs = await KPLAYV6hOblD.transferFrom.call(addressEB17wMK, addresss8qlFIA, uintfOiMbxP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYV6hOblD.balanceOf.call(addressg0XEBHW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYsZSLDCv = await KPLAY.new({from: accounts[1]});
		const uintKlUSAAp = BigInt("859")
		const addressJ6oOvrZ = accounts[4]
		const boolqvHA8uv = await KPLAYsZSLDCv.approve.call(addressJ6oOvrZ, uintKlUSAAp, {from: accounts[5]});
//		await KPLAYsZSLDCv.renounceOwnership.call({from: accounts[1]});

		assert.equal(boolqvHA8uv, true)
		await expect(KPLAYsZSLDCv.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfgnBfQj = await KPLAY.new({from: accounts[4]});
		const uintVbCrFb = BigInt("1464")
		const addresssCPCE2Q = accounts[5]
		const addressZ5VNTIH = accounts[0]
		const addressFOl90VB = accounts[1]
		const uintl1szOTZ = BigInt("719")
		const addresslvFMvHj = accounts[2]
		const addressRIhF46j = accounts[1]
		const uintV6l06pC = BigInt("1888")
		const addresswua9WBU = accounts[0]
//		await KPLAYfgnBfQj.pause.call({from: accounts[4]});
//		const bool3patkZ = await KPLAYfgnBfQj.approve.call(addresssCPCE2Q, uintVbCrFb, {from: accounts[2]});
//		const boolGlFQpHZ = await KPLAYfgnBfQj.isFrozen.call(addressZ5VNTIH, {from: accounts[1]});
//		const addressQsq51ON = await KPLAYfgnBfQj.freeze.call(addressFOl90VB, {from: accounts[3]});
//		const boolihaP7pK = await KPLAYfgnBfQj.transferFrom.call(addressRIhF46j, addresslvFMvHj, uintl1szOTZ, {from: accounts[4]});
//		const boolyNmW6fu = await KPLAYfgnBfQj.transfer.call(addresswua9WBU, uintV6l06pC, {from: accounts[5]});

		await expect(KPLAYfgnBfQj.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAcoeD7U = await TPA.new({from: accounts[1]});
		const addresslnsAgon = accounts[3]
		const uintsD44LUG = BigInt("507")
		const uint9HZcHS = BigInt("1238")
		const addressYw9e191 = accounts[0]
		await TPAcoeD7U.whenPaused.call({from: accounts[2]});
		const uint256wdSqaL1 = await TPAcoeD7U.totalSupply.call({from: accounts[3]});
		const addresss8hajI2 = await TPAcoeD7U.notFrozen.call(addresslnsAgon, {from: accounts[4]});
		const boolkccU2TF = await TPAcoeD7U.transferWithLock.call(addressYw9e191, uint9HZcHS, uintsD44LUG, {from: accounts[4]});

		await expect(TPAcoeD7U.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAci68DNx = await TPA.new({from: accounts[3]});
		const addressT8KD3xB = accounts[0]
		const addressYZKU0pt = "0x0000000000000000000000000000000000000001"
		const addressMAKDdwa = "0x0000000000000000000000000000000000000001"
		const uintqEXfaiO = BigInt("9")
		const addressDKCEXl4 = accounts[1]
		const uintvypv2HV = BigInt("704")
		const uinth8uGN9D = BigInt("555")
		const addresstCLgTD2 = accounts[2]
		const addresspWEAoEc = await TPAci68DNx.transferOwnership.call(addressT8KD3xB, {from: accounts[3]});
		const boolXHYgC5 = await TPAci68DNx.isAdmin.call(addressYZKU0pt, {from: accounts[1]});
		const uint256SIdTam0 = await TPAci68DNx.balanceOf.call(addressMAKDdwa, {from: accounts[2]});
		const boolL1saG1y = await TPAci68DNx.decreaseAllowance.call(addressDKCEXl4, uintqEXfaiO, {from: accounts[2]});
		await TPAci68DNx.pause.call({from: accounts[1]});
		const boolyT2ZIZt = await TPAci68DNx.transferWithLock.call(addresstCLgTD2, uinth8uGN9D, uintvypv2HV, {from: accounts[3]});

		assert.equal(boolXHYgC5, false)
		assert.equal(uint256SIdTam0, BigInt("0"))
		await expect(TPAci68DNx.decreaseAllowance.call(addressDKCEXl4, uintqEXfaiO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringo6tWtKU = "CK9PSPqllW2ZJylxsJDwh8nJavV5AH6Ujxp2"
		const stringq7HZKQn = "wKNxj9Q2deB1eEhLLUT7l5YKU"
		const uintVzqK6Ru = BigInt("82")
		const TPAup9jbBL = await TPA.new(stringo6tWtKU, stringq7HZKQn, uintVzqK6Ru, {from: accounts[0]});
		const uintDv0aaDp = BigInt("849")
		const addressxp6bRMA = accounts[2]
		const addresstvEmXp = accounts[2]
		const uintKZ6OwAG = BigInt("1318")
		const addressualOR7s = accounts[0]
		const addressleiR3X4 = accounts[0]
		const uintd6MjzhJ = BigInt("537")
		const addresseMl5C9 = accounts[2]
		const addresskMDSqkf = accounts[0]
		const boolAEjUiY = await TPAup9jbBL.decreaseAllowance.call(addressxp6bRMA, uintDv0aaDp, {from: accounts[3]});
		const uint256KG1I8u = await TPAup9jbBL.balanceOf.call(addresstvEmXp, {from: accounts[2]});
		const boolWM4hELE = await TPAup9jbBL.approve.call(addressualOR7s, uintKZ6OwAG, {from: accounts[3]});
		const uint256yMGD1i0 = await TPAup9jbBL.balanceOf.call(addressleiR3X4, {from: accounts[1]});
		const boolR3F0OE1 = await TPAup9jbBL.transferFrom.call(addresskMDSqkf, addresseMl5C9, uintd6MjzhJ, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAxd3vsDl = await TPA.new({from: accounts[4]});
		const uintGmWSiZ7 = BigInt("1281")
		const addressdtK5jD = accounts[3]
		const boolPArKFBR = await TPAxd3vsDl.increaseAllowance.call(addressdtK5jD, uintGmWSiZ7, {from: accounts[2]});
		const stringCe4ZIOA = await TPAxd3vsDl.symbol.call({from: accounts[3]});

		assert.equal(boolPArKFBR, true)
		assert.equal(stringCe4ZIOA, "TPA")
	});

	it('test for TPA', async () => {
		const TPAjDURlFi = await TPA.new({from: accounts[2]});
		const uintpowYXcN = BigInt("293")
		const addressHcICftn = "0x0000000000000000000000000000000000000001"
		const addressXHnDtcX = accounts[4]
		const uintcOrzjhy = BigInt("243")
		const addressCO49Wyk = accounts[0]
		const uint2hIiVW = BigInt("1186")
		const addressC3hQnxU = accounts[1]
		await TPAjDURlFi.pause.call({from: accounts[3]});
		const boolxFf2Grq = await TPAjDURlFi.transferFrom.call(addressXHnDtcX, addressHcICftn, uintpowYXcN, {from: accounts[4]});
		const boolRzVBas4 = await TPAjDURlFi.increaseAllowance.call(addressCO49Wyk, uintcOrzjhy, {from: accounts[3]});
		await TPAjDURlFi.renounceAdmin.call({from: accounts[1]});
		const boolMCAiYvE = await TPAjDURlFi.increaseAllowance.call(addressC3hQnxU, uint2hIiVW, {from: accounts[2]});
		await TPAjDURlFi.unpause.call({from: accounts[1]});

		await expect(TPAjDURlFi.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressLlJSnOi = accounts[2]
		const uintx1PICFk = BigInt("311")
		const addressnNpk4ek = accounts[0]
		const addresseTes2x6 = accounts[2]
		const addressIxDdf5Z = accounts[3]
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressLlJSnOi, {from: accounts[3]});
		const uint256WJDrl1 = await TPANrJ5O3r.totalSupply.call({from: accounts[5]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addresseTes2x6, addressnNpk4ek, uintx1PICFk, {from: accounts[1]});
		const boolLaiH1KN = await TPANrJ5O3r.isOwner.call(addressIxDdf5Z, {from: accounts[5]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint256WJDrl1, BigInt("10000000000000000000000000000"))
		await expect(TPANrJ5O3r.transferFrom.call(addresseTes2x6, addressnNpk4ek, uintx1PICFk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAci68DNx = await TPA.new({from: accounts[3]});
		const addressmBByvN = accounts[0]
		const addressfONWU4j = "0x0000000000000000000000000000000000000001"
		const uintG1r8Jur = BigInt("1502")
		const addressWChM9bY = accounts[4]
		const addressPlQToJW = "0x0000000000000000000000000000000000000001"
		const uintFVVqAPp = BigInt("9")
		const addressh3L9u7l = accounts[1]
		const uintLiZY5LF = BigInt("1810")
		const addressoWvssab = accounts[4]
		const uintAvfr32c = BigInt("704")
		const uintXPFLC2W = BigInt("555")
		const addressuVL2bke = accounts[2]
		const addresspWEAoEc = await TPAci68DNx.transferOwnership.call(addressmBByvN, {from: accounts[3]});
		const boolXHYgC5 = await TPAci68DNx.isAdmin.call(addressfONWU4j, {from: accounts[1]});
		const boolQBfZz7d = await TPAci68DNx.transfer.call(addressWChM9bY, uintG1r8Jur, {from: accounts[3]});
		const uint256SIdTam0 = await TPAci68DNx.balanceOf.call(addressPlQToJW, {from: accounts[2]});
		const boolL1saG1y = await TPAci68DNx.decreaseAllowance.call(addressh3L9u7l, uintFVVqAPp, {from: accounts[2]});
		const boolwSDz5yK = await TPAci68DNx.transfer.call(addressoWvssab, uintLiZY5LF, {from: accounts[0]});
		await TPAci68DNx.pause.call({from: accounts[1]});
		const boolyT2ZIZt = await TPAci68DNx.transferWithLock.call(addressuVL2bke, uintXPFLC2W, uintAvfr32c, {from: accounts[3]});

		assert.equal(boolQBfZz7d, true)
		assert.equal(boolXHYgC5, false)
		assert.equal(uint256SIdTam0, BigInt("0"))
		await expect(TPAci68DNx.decreaseAllowance.call(addressh3L9u7l, uintFVVqAPp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressATNLT91 = accounts[2]
		const uintfYyCfgj = BigInt("428")
		const uintULc02iu = BigInt("311")
		const addresszkTb90G = accounts[0]
		const addressb0fhfFQ = accounts[3]
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressATNLT91, {from: accounts[3]});
		const stringCivOTDP = await TPANrJ5O3r.symbol.call({from: accounts[2]});
		const uint256BN526ss = await TPANrJ5O3r.burn.call(uintfYyCfgj, {from: accounts[1]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressb0fhfFQ, addresszkTb90G, uintULc02iu, {from: accounts[1]});

		assert.equal(booljfAL9V3, false)
		assert.equal(stringCivOTDP, "TPA")
		await expect(TPANrJ5O3r.burn.call(uintfYyCfgj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAci68DNx = await TPA.new({from: accounts[3]});
		const addressFpidDVF = accounts[1]
		const addressfdevob = "0x0000000000000000000000000000000000000001"
		const addressA1cg90w = "0x0000000000000000000000000000000000000001"
		const uintBaUUWKx = BigInt("9")
		const addresspbOCtaz = accounts[1]
		const uintmJnkMB = BigInt("704")
		const uintfK7QtUm = BigInt("555")
		const addressCy9qgc = accounts[2]
		const addresspWEAoEc = await TPAci68DNx.transferOwnership.call(addressFpidDVF, {from: accounts[3]});
		const boolXHYgC5 = await TPAci68DNx.isAdmin.call(addressfdevob, {from: accounts[1]});
		const uint256SIdTam0 = await TPAci68DNx.balanceOf.call(addressA1cg90w, {from: accounts[2]});
		await TPAci68DNx.pause.call({from: accounts[3]});
		const boolL1saG1y = await TPAci68DNx.decreaseAllowance.call(addresspbOCtaz, uintBaUUWKx, {from: accounts[2]});
		await TPAci68DNx.pause.call({from: accounts[1]});
		const boolyT2ZIZt = await TPAci68DNx.transferWithLock.call(addressCy9qgc, uintfK7QtUm, uintmJnkMB, {from: accounts[3]});

		assert.equal(boolXHYgC5, false)
		assert.equal(uint256SIdTam0, BigInt("0"))
		await expect(TPAci68DNx.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAci68DNx = await TPA.new({from: accounts[3]});
		const addresspcDHrIn = accounts[1]
		const addressV3x4As4 = accounts[0]
		const uintvT2TMTT = BigInt("323")
		const addressRJolOP = accounts[0]
		const addressUgYw9Kw = "0x0000000000000000000000000000000000000001"
		const addressmO9uKY = "0x0000000000000000000000000000000000000001"
		const uintSiuat6U = BigInt("9")
		const addresswKyxx7n = accounts[1]
		const uintUbj9Fb7 = BigInt("704")
		const uintEVWvfOP = BigInt("555")
		const addressu5J5Xv7 = accounts[2]
		const boolc5YBNWn = await TPAci68DNx.isOwner.call(addresspcDHrIn, {from: accounts[1]});
		const addresspWEAoEc = await TPAci68DNx.transferOwnership.call(addressV3x4As4, {from: accounts[3]});
		const addressqplHKtW = await TPAci68DNx.burnFrom.call(addressRJolOP, uintvT2TMTT, {from: accounts[1]});
		const boolXHYgC5 = await TPAci68DNx.isAdmin.call(addressUgYw9Kw, {from: accounts[1]});
		const uint256SIdTam0 = await TPAci68DNx.balanceOf.call(addressmO9uKY, {from: accounts[2]});
		const boolL1saG1y = await TPAci68DNx.decreaseAllowance.call(addresswKyxx7n, uintSiuat6U, {from: accounts[2]});
		await TPAci68DNx.pause.call({from: accounts[1]});
		const boolyT2ZIZt = await TPAci68DNx.transferWithLock.call(addressu5J5Xv7, uintEVWvfOP, uintUbj9Fb7, {from: accounts[3]});

		assert.equal(boolc5YBNWn, false)
		await expect(TPAci68DNx.burnFrom.call(addressRJolOP, uintvT2TMTT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressmjr4iZR = accounts[4]
		const addressjFBXguE = accounts[2]
		const addresst6ha7v = "0x0000000000000000000000000000000000000001"
		const uintJbdYwR = BigInt("1621")
		const addressKGKDbF = accounts[0]
		const addressi5NdHKD = accounts[2]
		const uint256t5aOOP = await TPANrJ5O3r.balanceOf.call(addressmjr4iZR, {from: accounts[3]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressjFBXguE, {from: accounts[3]});
		const boolVJ8LIt0 = await TPANrJ5O3r.unfreezeAccount.call(addresst6ha7v, {from: accounts[4]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressi5NdHKD, addressKGKDbF, uintJbdYwR, {from: accounts[1]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint256t5aOOP, BigInt("10000000000000000000000000000"))
		await expect(TPANrJ5O3r.unfreezeAccount.call(addresst6ha7v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAci68DNx = await TPA.new({from: accounts[3]});
		const addressdKiihyJ = accounts[1]
		const addressFZ6Jagq = "0x0000000000000000000000000000000000000001"
		const uintCSf2hD3 = BigInt("9")
		const addressyUo5g5I = accounts[1]
		const uintHFNphfm = BigInt("704")
		const uintPA6Bx40 = BigInt("555")
		const addressSBzirTG = accounts[2]
		const addresspWEAoEc = await TPAci68DNx.transferOwnership.call(addressdKiihyJ, {from: accounts[3]});
		const boolgkprbv = await TPAci68DNx.paused.call({from: accounts[0]});
		const boolXHYgC5 = await TPAci68DNx.isAdmin.call(addressFZ6Jagq, {from: accounts[1]});
		const boolMtwhvVR = await TPAci68DNx.paused.call({from: accounts[1]});
		const boolL1saG1y = await TPAci68DNx.decreaseAllowance.call(addressyUo5g5I, uintCSf2hD3, {from: accounts[2]});
		await TPAci68DNx.pause.call({from: accounts[1]});
		const boolyT2ZIZt = await TPAci68DNx.transferWithLock.call(addressSBzirTG, uintPA6Bx40, uintHFNphfm, {from: accounts[3]});

		assert.equal(boolMtwhvVR, false)
		assert.equal(boolXHYgC5, false)
		assert.equal(boolgkprbv, false)
		await expect(TPAci68DNx.decreaseAllowance.call(addressyUo5g5I, uintCSf2hD3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addresscFpK2vb = accounts[3]
		const uintozRsMor = BigInt("329")
		const addressAPIRRxz = accounts[2]
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addresscFpK2vb, {from: accounts[3]});
		const stringulYyYPd = await TPANrJ5O3r.name.call({from: accounts[4]});
		const boolIFXQvxz = await TPANrJ5O3r.transfer.call(addressAPIRRxz, uintozRsMor, {from: accounts[3]});

		assert.equal(booljfAL9V3, false)
		assert.equal(stringulYyYPd, "TPA")
		await expect(TPANrJ5O3r.transfer.call(addressAPIRRxz, uintozRsMor, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressaDRYfHp = accounts[3]
		const uint8OjWFSG2 = await TPANrJ5O3r.decimals.call({from: accounts[2]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressaDRYfHp, {from: accounts[3]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint8OjWFSG2, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressotIQ3O8 = accounts[5]
		const addressTk1EMGi = accounts[3]
		const addressguTnHUE = accounts[1]
		const addressjkfwLkk = accounts[1]
		const uintOTeP1kq = BigInt("1621")
		const addressaWk7wPl = accounts[0]
		const addressi5UUfQl = accounts[2]
		const addresszYjhOGG = accounts[2]
		const uint256t5aOOP = await TPANrJ5O3r.balanceOf.call(addressotIQ3O8, {from: accounts[3]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressTk1EMGi, {from: accounts[3]});
		const uint256BTsLklZ = await TPANrJ5O3r.allowance.call(addressjkfwLkk, addressguTnHUE, {from: "0x0000000000000000000000000000000000000001"});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressi5UUfQl, addressaWk7wPl, uintOTeP1kq, {from: accounts[1]});
		const boolteEl3Xm = await TPANrJ5O3r.freezeAccount.call(addresszYjhOGG, {from: accounts[1]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint256BTsLklZ, BigInt("0"))
		assert.equal(uint256t5aOOP, BigInt("0"))
		await expect(TPANrJ5O3r.transferFrom.call(addressi5UUfQl, addressaWk7wPl, uintOTeP1kq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const uintQPH9F3 = BigInt("343")
		const addressm3SKcgo = accounts[3]
		const addressZgDYnpB = accounts[2]
		const uintxhls4Ai = BigInt("311")
		const addressHxtby72 = accounts[0]
		const addressyaIhLuN = accounts[2]
		const boolXdpfzw = await TPANrJ5O3r.unlock.call(addressm3SKcgo, uintQPH9F3, {from: accounts[4]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressZgDYnpB, {from: accounts[3]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressyaIhLuN, addressHxtby72, uintxhls4Ai, {from: accounts[1]});

		await expect(TPANrJ5O3r.unlock.call(addressm3SKcgo, uintQPH9F3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressQlZta6e = accounts[3]
		const uintLVbSmWu = BigInt("1454")
		const addressTCJCpw0 = accounts[2]
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressQlZta6e, {from: accounts[3]});
		const boolLbjxeoc = await TPANrJ5O3r.approve.call(addressTCJCpw0, uintLVbSmWu, {from: accounts[0]});

		assert.equal(boolLbjxeoc, true)
		assert.equal(booljfAL9V3, false)
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addresslpIoUz = accounts[5]
		const addressVJancEp = accounts[2]
		const uintpMukd0s = BigInt("1621")
		const addressROPaG7 = accounts[1]
		const addressSng4xeY = accounts[2]
		const uint256t5aOOP = await TPANrJ5O3r.balanceOf.call(addresslpIoUz, {from: accounts[3]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressVJancEp, {from: accounts[3]});
		await TPANrJ5O3r.renounceAdmin.call({from: accounts[4]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressSng4xeY, addressROPaG7, uintpMukd0s, {from: accounts[1]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint256t5aOOP, BigInt("0"))
		await expect(TPANrJ5O3r.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressqkORtuu = accounts[5]
		const addressKGdS2bb = "0x0000000000000000000000000000000000000001"
		const addressGAKXqxr = accounts[3]
		const uintf6BblfM = BigInt("1621")
		const addressypzdBO = accounts[0]
		const addresse4yuEh = accounts[2]
		const uint256t5aOOP = await TPANrJ5O3r.balanceOf.call(addressqkORtuu, {from: accounts[3]});
		const addressrxUPmvr = await TPANrJ5O3r.addAdmin.call(addressKGdS2bb, {from: accounts[4]});
		const booljfAL9V3 = await TPANrJ5O3r.isAdmin.call(addressGAKXqxr, {from: accounts[3]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addresse4yuEh, addressypzdBO, uintf6BblfM, {from: accounts[1]});

		assert.equal(booljfAL9V3, false)
		assert.equal(uint256t5aOOP, BigInt("0"))
		await expect(TPANrJ5O3r.transferFrom.call(addresse4yuEh, addressypzdBO, uintf6BblfM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressWxPH2sx = accounts[4]
		const uintYwLjQPW = BigInt("311")
		const addressmT6iE1v = accounts[1]
		const addressuLdxlKh = accounts[2]
		const boolajEdcf4 = await TPANrJ5O3r.freezeAccount.call(addressWxPH2sx, {from: accounts[4]});
		await TPANrJ5O3r.pause.call({from: accounts[0]});
		await TPANrJ5O3r.renounceAdmin.call({from: accounts[3]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressuLdxlKh, addressmT6iE1v, uintYwLjQPW, {from: accounts[1]});

		assert.equal(boolajEdcf4, true)
		await expect(TPANrJ5O3r.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressrVY6DsB = accounts[6]
		const uintEx8xDQj = BigInt("1170")
		const uintFIPWel7 = BigInt("1644")
		const addresswtEkWoD = accounts[0]
		const addressVH7geu = accounts[1]
		const uint256t5aOOP = await TPANrJ5O3r.balanceOf.call(addressrVY6DsB, {from: accounts[3]});
		const boolKyPmk3D = await TPANrJ5O3r.transferWithLock.call(addresswtEkWoD, uintFIPWel7, uintEx8xDQj, {from: accounts[4]});
		const boolJG49tho = await TPANrJ5O3r.freezeAccount.call(addressVH7geu, {from: accounts[2]});

		assert.equal(boolKyPmk3D, true)
		assert.equal(uint256t5aOOP, BigInt("0"))
		await expect(TPANrJ5O3r.freezeAccount.call(addressVH7geu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const addressRoX8Lf = accounts[2]
		const addressNuW9myn = accounts[4]
		const uintEDj5Ga9 = BigInt("311")
		const addressIRQR3Yw = accounts[2]
		const addressCVTOFih = accounts[2]
		const addressbqpWEDc = await TPANrJ5O3r.removeAdmin.call(addressRoX8Lf, {from: accounts[4]});
		const boolPI45cW0 = await TPANrJ5O3r.isAdmin.call(addressNuW9myn, {from: accounts[4]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressCVTOFih, addressIRQR3Yw, uintEDj5Ga9, {from: accounts[1]});

		await expect(TPANrJ5O3r.removeAdmin.call(addressRoX8Lf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANrJ5O3r = await TPA.new({from: accounts[4]});
		const uintoFTfIp = BigInt("1445")
		const uintXsE1YWQ = BigInt("1909")
		const addressJoDtj6l = accounts[2]
		const uintjJz0gZc = BigInt("406")
		const addressND2i5xy = accounts[1]
		const addressHs9h5bQ = accounts[2]
		const boolOSG6GbH = await TPANrJ5O3r.lock.call(addressJoDtj6l, uintXsE1YWQ, uintoFTfIp, {from: accounts[4]});
		const booltrWN7KK = await TPANrJ5O3r.transferFrom.call(addressHs9h5bQ, addressND2i5xy, uintjJz0gZc, {from: accounts[1]});

		await expect(TPANrJ5O3r.lock.call(addressJoDtj6l, uintXsE1YWQ, uintoFTfIp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxBzrwX4 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8akYadXX = await TPAxBzrwX4.decimals.call({from: accounts[3]});
		await TPAxBzrwX4.renounceAdmin.call({from: accounts[0]});
	});
})
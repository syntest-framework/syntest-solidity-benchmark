const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintViwzw4 = BigInt("1508")
		const addressf9brf55 = accounts[3]
		const uintlmXWQa = BigInt("1456")
		const addressHSFUpeE = accounts[4]
		const addressxs91rI2 = accounts[2]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressf9brf55, uintViwzw4, {from: accounts[4]});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressHSFUpeE, uintlmXWQa, {from: accounts[4]});
//		const booloKFucEm = await TPAmmC9ZeR.freezeAccount.call(addressxs91rI2, {from: accounts[2]});

		assert.equal(boolPrOR1jM, true)
		await expect(TPAmmC9ZeR.transfer.call(addressHSFUpeE, uintlmXWQa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdUM6pLF = await TPA.new({from: accounts[2]});
		const addressWmzEkzQ = "0x0000000000000000000000000000000000000001"
		const uintXJbW4Xk = BigInt("1704")
		const uintWa5HsOb = BigInt("639")
		const addressdShvuuH = accounts[4]
		const uintbYAFbq4 = BigInt("3")
		const addressS0wHMW9 = accounts[3]
		const uintDDv8jFd = BigInt("2013")
		const addresse5LTPGe = accounts[3]
		const boolJEdiUgu = await TPAdUM6pLF.isAdmin.call(addressWmzEkzQ, {from: accounts[1]});
//		const boolCunNEdW = await TPAdUM6pLF.lock.call(addressdShvuuH, uintWa5HsOb, uintXJbW4Xk, {from: accounts[1]});
//		await TPAdUM6pLF.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolMZCrtn = await TPAdUM6pLF.transfer.call(addressS0wHMW9, uintbYAFbq4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpzoi7Im = await TPAdUM6pLF.approve.call(addresse5LTPGe, uintDDv8jFd, {from: accounts[5]});

		assert.equal(boolJEdiUgu, false)
		await expect(TPAdUM6pLF.lock.call(addressdShvuuH, uintWa5HsOb, uintXJbW4Xk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringt6qvmvh = "M8J"
		const stringCgIDB3 = "2FWJ1kO4zWavVPuRtYMlC13Mk9eXTlK33DYu45X7XGDE1CTRVtFJRljCaKo4pW3JpWgXpszADxqKQkw"
		const uintOCW4jtq = BigInt("19")
		const TPAJbOjbVM = await TPA.new(stringt6qvmvh, stringCgIDB3, uintOCW4jtq, {from: accounts[3]});
		const uintK5uKcog = BigInt("1624")
		const addressw5vIVMB = accounts[0]
		const addressaD2mRAn = accounts[4]
		const uintobaUOKH = BigInt("273")
		const addressxLLVA7 = accounts[1]
		const boolC57Cysz = await TPAJbOjbVM.transfer.call(addressw5vIVMB, uintK5uKcog, {from: accounts[1]});
		const boolbNTDwS = await TPAJbOjbVM.freezeAccount.call(addressaD2mRAn, {from: accounts[0]});
		const addressZJdZdi9 = await TPAJbOjbVM.burnFrom.call(addressxLLVA7, uintobaUOKH, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAtmXGkKa = await TPA.new({from: accounts[4]});
		const uintZuFF6ly = BigInt("1990")
		const addressb1eLpYG = "0x0000000000000000000000000000000000000001"
		const addressPMn22EY = accounts[2]
		const uintL4MhJuo = BigInt("671")
		const addressD7CcHRV = accounts[2]
		const addressivlKlfq = accounts[1]
		const uintyoYuOZB = BigInt("1885")
		const addressI2HnkGO = "0x0000000000000000000000000000000000000001"
		const addressrQ3tH8r = accounts[2]
		const uintICxyMLx = BigInt("1142")
		const addressgDtXxTn = "0x0000000000000000000000000000000000000001"
		const addresstEMHfSb = accounts[3]
		const addressPUP2HE = accounts[5]
//		const boolPJcs5AK = await TPAtmXGkKa.transferFrom.call(addressPMn22EY, addressb1eLpYG, uintZuFF6ly, {from: accounts[1]});
//		const uint8QeZlqGt = await TPAtmXGkKa.decimals.call({from: accounts[4]});
//		const booldnjgyBM = await TPAtmXGkKa.transferFrom.call(addressivlKlfq, addressD7CcHRV, uintL4MhJuo, {from: accounts[3]});
//		const boolP03yR3e = await TPAtmXGkKa.transferFrom.call(addressrQ3tH8r, addressI2HnkGO, uintyoYuOZB, {from: accounts[0]});
//		const boolyNbV8aA = await TPAtmXGkKa.transferFrom.call(addresstEMHfSb, addressgDtXxTn, uintICxyMLx, {from: accounts[4]});
//		const addressz5XNq13 = await TPAtmXGkKa.removeAdmin.call(addressPUP2HE, {from: accounts[4]});

		await expect(TPAtmXGkKa.transferFrom.call(addressPMn22EY, addressb1eLpYG, uintZuFF6ly, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAql9j49s = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxvXJFqC = accounts[2]
		const uintHae9wY8 = BigInt("445")
		const addressepFdbDV = accounts[1]
		const addressa34QWQ = accounts[0]
		const uintR9aCVM0 = BigInt("450")
		const addressHkUlX4I = accounts[0]
		const addressGuvf1k = await TPAql9j49s.upgradeTo.call(addressxvXJFqC, {from: accounts[0]});
		const boold1HFPkM = await TPAql9j49s.increaseAllowance.call(addressepFdbDV, uintHae9wY8, {from: accounts[1]});
		const boolmk80X6T = await TPAql9j49s.isAdmin.call(addressa34QWQ, {from: accounts[0]});
		const boolAjE7WKp = await TPAql9j49s.increaseAllowance.call(addressHkUlX4I, uintR9aCVM0, {from: accounts[1]});
		await TPAql9j49s.unpause.call({from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintMNDi6DB = BigInt("1508")
		const addressczmsgR2 = accounts[3]
		const uintH6IzO1Z = BigInt("1497")
		const addressEDRTNCL = accounts[1]
		const addressstrp6D5 = accounts[2]
		const uinte3pMhE = BigInt("1224")
		const uintrC4J4h6 = BigInt("1193")
		const addressmDfvGE0 = "0x0000000000000000000000000000000000000001"
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressczmsgR2, uintMNDi6DB, {from: accounts[4]});
//		const boolRhXYEo = await TPAmmC9ZeR.decreaseAllowance.call(addressEDRTNCL, uintH6IzO1Z, {from: accounts[4]});
//		const booloKFucEm = await TPAmmC9ZeR.freezeAccount.call(addressstrp6D5, {from: accounts[2]});
//		const boolU1eg2o = await TPAmmC9ZeR.transferWithLock.call(addressmDfvGE0, uintrC4J4h6, uinte3pMhE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPrOR1jM, true)
		await expect(TPAmmC9ZeR.decreaseAllowance.call(addressEDRTNCL, uintH6IzO1Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintIhvq4tZ = BigInt("1504")
		const addressZSqxRqA = accounts[3]
		const uintbkwOrOB = BigInt("657")
		const addressOYh2OM = accounts[5]
		const addressfrHQuL5 = accounts[2]
		const uintC5NitMX = BigInt("1456")
		const addressycA6MKY = accounts[4]
//		await TPAmmC9ZeR.onlyAdmin.call({from: accounts[2]});
//		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressZSqxRqA, uintIhvq4tZ, {from: accounts[4]});
//		const boolORZnqfQ = await TPAmmC9ZeR.transferFrom.call(addressfrHQuL5, addressOYh2OM, uintbkwOrOB, {from: accounts[1]});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressycA6MKY, uintC5NitMX, {from: accounts[4]});

		await expect(TPAmmC9ZeR.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintxna1n6J = BigInt("1508")
		const addressWPSjStR = accounts[4]
		const uintmoxgC8B = BigInt("1827")
		const uintk1SopIC = BigInt("1456")
		const addressR7AwRrK = accounts[4]
		const uintm70siCH = BigInt("1111")
		const addressfPtFu6r = accounts[0]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressWPSjStR, uintxna1n6J, {from: accounts[4]});
//		const uint256H8vnzas = await TPAmmC9ZeR.burn.call(uintmoxgC8B, {from: accounts[2]});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressR7AwRrK, uintk1SopIC, {from: accounts[4]});
//		const boolNjmHYHO = await TPAmmC9ZeR.decreaseAllowance.call(addressfPtFu6r, uintm70siCH, {from: accounts[4]});

		assert.equal(boolPrOR1jM, true)
		await expect(TPAmmC9ZeR.burn.call(uintmoxgC8B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintxsp9fzV = BigInt("1508")
		const addressfVAlcHA = accounts[3]
		const uintMhPFUvf = BigInt("1456")
		const addressX5WJRNr = accounts[4]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressfVAlcHA, uintxsp9fzV, {from: accounts[4]});
		const uint8J3gqHBO = await TPAmmC9ZeR.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		await TPAmmC9ZeR.whenNotPaused.call({from: accounts[0]});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressX5WJRNr, uintMhPFUvf, {from: accounts[4]});

		assert.equal(boolPrOR1jM, true)
		assert.equal(uint8J3gqHBO, BigInt("18"))
		await expect(TPAmmC9ZeR.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHdIxyKY = await TPA.new({from: accounts[5]});
		const uintWZhYXoB = BigInt("747")
		const addressWEJj1Ti = accounts[4]
		const addressNV0f6bp = accounts[4]
//		await TPAHdIxyKY.renounceAdmin.call({from: accounts[0]});
//		const booliG9HokV = await TPAHdIxyKY.decreaseAllowance.call(addressWEJj1Ti, uintWZhYXoB, {from: accounts[3]});
//		const address4ToA70 = await TPAHdIxyKY.upgradeTo.call(addressNV0f6bp, {from: accounts[3]});

		await expect(TPAHdIxyKY.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintQqBCiDq = BigInt("1251")
		const addressur2W7eS = accounts[1]
		const uintsm01S2z = BigInt("223")
		const addressWTedfVU = accounts[2]
		const uintycDQHdU = BigInt("1524")
		const addressdsrBPVS = accounts[4]
//		const addressKbvp52a = await TPAmmC9ZeR.burnFrom.call(addressur2W7eS, uintQqBCiDq, {from: accounts[2]});
//		const boolAIMEMg5 = await TPAmmC9ZeR.unlock.call(addressWTedfVU, uintsm01S2z, {from: accounts[4]});
//		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressdsrBPVS, uintycDQHdU, {from: accounts[4]});

		await expect(TPAmmC9ZeR.burnFrom.call(addressur2W7eS, uintQqBCiDq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const addressGSBJ4oa = accounts[1]
		const uintv8ODT90 = BigInt("1508")
		const addressWnsOLW = accounts[3]
		const addressVVeB0TL = accounts[0]
		const uintV39i8y8 = BigInt("225")
		const addressTtvXsY = accounts[6]
		const addressr0pL6ZZ = accounts[2]
		const addressvgs48nh = accounts[2]
		const uintw8N0Oy8 = BigInt("907")
		const uintGaDtal = BigInt("275")
		const addressbSwr5o8 = accounts[0]
		const uint256B45oDM0 = await TPAmmC9ZeR.balanceOf.call(addressGSBJ4oa, {from: accounts[1]});
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressWnsOLW, uintv8ODT90, {from: accounts[4]});
		const boolEA6ROH7 = await TPAmmC9ZeR.isOwner.call(addressVVeB0TL, {from: accounts[0]});
//		const boolfk61awE = await TPAmmC9ZeR.transferFrom.call(addressr0pL6ZZ, addressTtvXsY, uintV39i8y8, {from: accounts[4]});
//		await TPAmmC9ZeR.whenNotPaused.call({from: accounts[3]});
//		const booloKFucEm = await TPAmmC9ZeR.freezeAccount.call(addressvgs48nh, {from: accounts[2]});
//		const boolVHURqFM = await TPAmmC9ZeR.transferWithLock.call(addressbSwr5o8, uintGaDtal, uintw8N0Oy8, {from: accounts[1]});

		assert.equal(boolEA6ROH7, false)
		assert.equal(boolPrOR1jM, true)
		assert.equal(uint256B45oDM0, BigInt("10000000000000000000000000000"))
		await expect(TPAmmC9ZeR.transferFrom.call(addressr0pL6ZZ, addressTtvXsY, uintV39i8y8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintikJKRQo = BigInt("1508")
		const addressNKUrb8m = accounts[3]
		const uintab2icX = BigInt("714")
		const addressEMzrVRU = accounts[3]
		const uint7CNXaj = BigInt("1456")
		const addressUTV6mJc = accounts[5]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressNKUrb8m, uintikJKRQo, {from: accounts[4]});
		const uint256NRezzhz = await TPAmmC9ZeR.burn.call(uintab2icX, {from: accounts[1]});
		const addressCNAS4nD = await TPAmmC9ZeR.addAdmin.call(addressEMzrVRU, {from: accounts[1]});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressUTV6mJc, uint7CNXaj, {from: accounts[4]});

		assert.equal(boolPrOR1jM, true)
		await expect(TPAmmC9ZeR.transfer.call(addressUTV6mJc, uint7CNXaj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const addressGiEp65w = accounts[2]
		const addressiTZclSC = accounts[1]
		const addressm5IIK4e = accounts[4]
		const uintq078afc = BigInt("1456")
		const addressQp2hPep = accounts[5]
		const boolQTBGwb1 = await TPAmmC9ZeR.isOwner.call(addressGiEp65w, {from: accounts[2]});
		const uint256nEji0B1 = await TPAmmC9ZeR.allowance.call(addressm5IIK4e, addressiTZclSC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTEUlMoB = await TPAmmC9ZeR.transfer.call(addressQp2hPep, uintq078afc, {from: accounts[4]});

		assert.equal(boolQTBGwb1, false)
		assert.equal(uint256nEji0B1, BigInt("0"))
		await expect(TPAmmC9ZeR.transfer.call(addressQp2hPep, uintq078afc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintFjzaUTo = BigInt("1524")
		const addressHN128y6 = accounts[3]
		const uintiOUt6n = BigInt("905")
		const addressj96POi7 = accounts[1]
		const uint256H0hRGC5 = await TPAmmC9ZeR.totalSupply.call({from: accounts[4]});
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressHN128y6, uintFjzaUTo, {from: accounts[4]});
//		const boolyZGbn2B = await TPAmmC9ZeR.transfer.call(addressj96POi7, uintiOUt6n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPrOR1jM, true)
		assert.equal(uint256H0hRGC5, BigInt("10000000000000000000000000000"))
		await expect(TPAmmC9ZeR.transfer.call(addressj96POi7, uintiOUt6n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintP2X3M6L = BigInt("1538")
		const addressKYOrQTy = accounts[3]
		const uintb5tBMkb = BigInt("1697")
		const addresszMzXhvs = accounts[2]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressKYOrQTy, uintP2X3M6L, {from: accounts[4]});
		const boolfYU3Ti = await TPAmmC9ZeR.approve.call(addresszMzXhvs, uintb5tBMkb, {from: accounts[5]});

		assert.equal(boolPrOR1jM, true)
		assert.equal(boolfYU3Ti, true)
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const addressPKqXKAx = accounts[1]
		const addressm2RhNPG = accounts[1]
		const boolt9EWdlB = await TPAmmC9ZeR.isOwner.call(addressPKqXKAx, {from: accounts[4]});
		const uint256DLAHAG4 = await TPAmmC9ZeR.balanceOf.call(addressm2RhNPG, {from: accounts[5]});
//		await TPAmmC9ZeR.whenNotPaused.call({from: accounts[0]});

		assert.equal(boolt9EWdlB, true)
		assert.equal(uint256DLAHAG4, BigInt("10000000000000000000000000000"))
		await expect(TPAmmC9ZeR.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintc93igKK = BigInt("926")
		const uintiEaQpy8 = BigInt("571")
		const addressZR6Eh2m = accounts[2]
		const uintdY9kGZC = BigInt("1976")
		const addressptedGSP = accounts[3]
		const uintiivr5Fj = BigInt("225")
		const addressbS45HIw = accounts[6]
		const address5UxM7R = accounts[3]
		const uintF93haLD = BigInt("343")
//		const boolG2p8e6 = await TPAmmC9ZeR.lock.call(addressZR6Eh2m, uintiEaQpy8, uintc93igKK, {from: accounts[1]});
//		const boolUqZuJx3 = await TPAmmC9ZeR.increaseAllowance.call(addressptedGSP, uintdY9kGZC, {from: accounts[3]});
//		const boolfk61awE = await TPAmmC9ZeR.transferFrom.call(address5UxM7R, addressbS45HIw, uintiivr5Fj, {from: accounts[4]});
//		const uint256fkrLgL = await TPAmmC9ZeR.burn.call(uintF93haLD, {from: accounts[3]});

		await expect(TPAmmC9ZeR.lock.call(addressZR6Eh2m, uintiEaQpy8, uintc93igKK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintkQAwOQl = BigInt("225")
		const addressVgwcklc = accounts[7]
		const addressvnkM3Nc = accounts[2]
		const stringiez3nT = await TPAmmC9ZeR.symbol.call({from: accounts[3]});
//		const boolfk61awE = await TPAmmC9ZeR.transferFrom.call(addressvnkM3Nc, addressVgwcklc, uintkQAwOQl, {from: accounts[4]});

		assert.equal(stringiez3nT, "TPA")
		await expect(TPAmmC9ZeR.transferFrom.call(addressvnkM3Nc, addressVgwcklc, uintkQAwOQl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintehYnFbv = BigInt("1524")
		const addressOJ7H5xv = accounts[4]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressOJ7H5xv, uintehYnFbv, {from: accounts[4]});
		const stringsDg7CHb = await TPAmmC9ZeR.name.call({from: accounts[0]});

		assert.equal(boolPrOR1jM, true)
		assert.equal(stringsDg7CHb, "TPA")
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uintTGoOEf = BigInt("1206")
		const uinttPH1U3o = BigInt("1341")
		const addressPeS8ZUR = accounts[2]
		const uint0TBcIT = BigInt("1524")
		const addressunjIfc = accounts[4]
		const boolVUBBf9J = await TPAmmC9ZeR.transferWithLock.call(addressPeS8ZUR, uinttPH1U3o, uintTGoOEf, {from: accounts[1]});
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addressunjIfc, uint0TBcIT, {from: accounts[4]});

		assert.equal(boolPrOR1jM, true)
		assert.equal(boolVUBBf9J, true)
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const uints5S6z3v = BigInt("1558")
		const addresseTiLHbM = accounts[3]
		const addressT8OQQQ6 = accounts[3]
		const uintZpFgGkB = BigInt("1433")
		const addresskssERDe = accounts[4]
		const boolPrOR1jM = await TPAmmC9ZeR.increaseAllowance.call(addresseTiLHbM, uints5S6z3v, {from: accounts[4]});
//		const addressHYdRjMW = await TPAmmC9ZeR.removeAdmin.call(addressT8OQQQ6, {from: accounts[1]});
//		const boolA8MyC5d = await TPAmmC9ZeR.unlock.call(addresskssERDe, uintZpFgGkB, {from: accounts[2]});

		assert.equal(boolPrOR1jM, true)
		await expect(TPAmmC9ZeR.removeAdmin.call(addressT8OQQQ6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const addressrkv4ojp = accounts[3]
		const uintc4QNL6e = BigInt("225")
		const addresspGxUUcy = accounts[7]
		const addressQrgimcA = accounts[2]
		const boolsge6gdy = await TPAmmC9ZeR.paused.call({from: accounts[3]});
		const boolSYK7fvB = await TPAmmC9ZeR.freezeAccount.call(addressrkv4ojp, {from: accounts[1]});
//		const boolfk61awE = await TPAmmC9ZeR.transferFrom.call(addressQrgimcA, addresspGxUUcy, uintc4QNL6e, {from: accounts[4]});

		assert.equal(boolSYK7fvB, true)
		assert.equal(boolsge6gdy, false)
		await expect(TPAmmC9ZeR.transferFrom.call(addressQrgimcA, addresspGxUUcy, uintc4QNL6e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmmC9ZeR = await TPA.new({from: accounts[1]});
		const addressVA1kmhE = accounts[4]
		const uintRg6MC2f = BigInt("225")
		const addressfIAA6i1 = accounts[6]
		const addressQlcsbsZ = accounts[3]
		const uintQB7k7IW = BigInt("1958")
		const addressMfwPYWR = accounts[0]
		const addressosh6Nmx = accounts[1]
		const addressHoh7UUE = await TPAmmC9ZeR.transferOwnership.call(addressVA1kmhE, {from: accounts[1]});
//		const boolfk61awE = await TPAmmC9ZeR.transferFrom.call(addressQlcsbsZ, addressfIAA6i1, uintRg6MC2f, {from: accounts[4]});
//		const bool4pzCe5 = await TPAmmC9ZeR.transferFrom.call(addressosh6Nmx, addressMfwPYWR, uintQB7k7IW, {from: accounts[5]});

		await expect(TPAmmC9ZeR.transferFrom.call(addressQlcsbsZ, addressfIAA6i1, uintRg6MC2f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
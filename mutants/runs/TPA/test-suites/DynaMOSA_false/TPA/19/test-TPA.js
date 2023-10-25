const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringZr0AvRf = "CfKTHDlrcMRd927pdr9qamfGyGoMvLYA5NmyMdBXaJCUzMax6x756lgnoI14GpEf5sZpEHHP4Qz"
		const stringHFOEI4Q = "zumYVRnOffCEbvpwwnH8"
		const uintgwKwbRT = BigInt("157")
		const TPAD4SMxir = await TPA.new(stringZr0AvRf, stringHFOEI4Q, uintgwKwbRT, {from: "0x0000000000000000000000000000000000000001"});
		const uintpsZgCdU = BigInt("1648")
		const addressOJ2Oa7 = accounts[0]
		const addressG0fu4w = accounts[1]
		const boolISRFlr = await TPAD4SMxir.decreaseAllowance.call(addressOJ2Oa7, uintpsZgCdU, {from: accounts[4]});
		await TPAD4SMxir.onlyAdmin.call({from: accounts[0]});
		const addressju8pHm9 = await TPAD4SMxir.removeAdmin.call(addressG0fu4w, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPABlBU1oh = await TPA.new({from: accounts[5]});
		const addressH3MpRXI = accounts[0]
		const addresspSxHZXE = accounts[0]
		const uintKiq0NCm = BigInt("56")
		const addressbHHEkXl = accounts[4]
		const uint256XtpqDc7 = await TPABlBU1oh.allowance.call(addresspSxHZXE, addressH3MpRXI, {from: accounts[0]});
		const boolQfLIxF = await TPABlBU1oh.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaEcUa59 = await TPABlBU1oh.increaseAllowance.call(addressbHHEkXl, uintKiq0NCm, {from: accounts[1]});
		const uint256UwainjF = await TPABlBU1oh.totalSupply.call({from: accounts[0]});
		const uint8bd1CAIY = await TPABlBU1oh.decimals.call({from: accounts[5]});

		assert.equal(boolQfLIxF, false)
		assert.equal(boolaEcUa59, true)
		assert.equal(uint256UwainjF, BigInt("10000000000000000000000000000"))
		assert.equal(uint256XtpqDc7, BigInt("0"))
		assert.equal(uint8bd1CAIY, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPATyr1II0 = await TPA.new({from: accounts[4]});
		const uintXhAqdJi = BigInt("517")
		const addressQG3aEZP = accounts[1]
		const addressatQape9 = accounts[1]
		const uintddS6MHH = BigInt("740")
		const uintLT7Bbla = BigInt("1067")
		const addressy349jlf = accounts[0]
		const uintfYo4F6L = BigInt("94")
		const addressHmI1HM5 = accounts[1]
		const addressRumbhtz = accounts[0]
		const uinttp88oyq = BigInt("95")
		const addressfaeM6r = accounts[5]
		const addressmMMz80 = "0x0000000000000000000000000000000000000001"
		const boolbouNjbS = await TPATyr1II0.transferFrom.call(addressatQape9, addressQG3aEZP, uintXhAqdJi, {from: accounts[5]});
		const boolbLTz4Xx = await TPATyr1II0.transferWithLock.call(addressy349jlf, uintLT7Bbla, uintddS6MHH, {from: accounts[0]});
		const boolGsCtRdl = await TPATyr1II0.increaseAllowance.call(addressHmI1HM5, uintfYo4F6L, {from: accounts[1]});
		const uint256TolkkA0 = await TPATyr1II0.balanceOf.call(addressRumbhtz, {from: accounts[1]});
		const boolBN62fE = await TPATyr1II0.transferFrom.call(addressmMMz80, addressfaeM6r, uinttp88oyq, {from: accounts[1]});

		await expect(TPATyr1II0.transferFrom.call(addressatQape9, addressQG3aEZP, uintXhAqdJi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAA7fHi4Q = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqzYWg9D = BigInt("718")
		const uintuAdXwIs = BigInt("1030")
		const addresscQTFdGN = accounts[4]
		const uintVGIFB50 = BigInt("559")
		const uintaMphpIC = BigInt("288")
		const addresszavAMGh = accounts[1]
		const boolRulLD0w = await TPAA7fHi4Q.transferWithLock.call(addresscQTFdGN, uintuAdXwIs, uintqzYWg9D, {from: accounts[4]});
		const boolJzJKxP6 = await TPAA7fHi4Q.lock.call(addresszavAMGh, uintaMphpIC, uintVGIFB50, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAkfcCgPB = await TPA.new({from: accounts[3]});
		const uintzjoUgeA = BigInt("745")
		const addressUCxVG9 = accounts[3]
		await TPAkfcCgPB.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolFuNZwZf = await TPAkfcCgPB.approve.call(addressUCxVG9, uintzjoUgeA, {from: "0x0000000000000000000000000000000000000001"});
		await TPAkfcCgPB.onlyOwner.call({from: accounts[0]});

		await expect(TPAkfcCgPB.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAg1P2nE = await TPA.new({from: accounts[5]});
		const uintocJnqrq = BigInt("1234")
		const addressd9BdbJY = accounts[1]
		const addressKMlumNZ = accounts[2]
		const addressEUr67yY = accounts[5]
		await TPAg1P2nE.whenNotPaused.call({from: accounts[4]});
		const bool9Hi8l8 = await TPAg1P2nE.approve.call(addressd9BdbJY, uintocJnqrq, {from: accounts[0]});
		const uint256jPuDUd = await TPAg1P2nE.allowance.call(addressEUr67yY, addressKMlumNZ, {from: accounts[4]});

		await expect(TPAg1P2nE.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABlBU1oh = await TPA.new({from: accounts[5]});
		const address7O4wIK = accounts[0]
		const addressi2N0XJQ = accounts[0]
		const uintwN2rO3x = BigInt("56")
		const addresspXz7Utz = accounts[4]
		const uintzN98i6 = BigInt("1023")
		const addressXPuMF1N = accounts[1]
		const addressPx3Rszh = accounts[1]
		const uint256XtpqDc7 = await TPABlBU1oh.allowance.call(addressi2N0XJQ, address7O4wIK, {from: accounts[0]});
		const boolQfLIxF = await TPABlBU1oh.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaEcUa59 = await TPABlBU1oh.increaseAllowance.call(addresspXz7Utz, uintwN2rO3x, {from: accounts[1]});
		const booltJMrKWD = await TPABlBU1oh.decreaseAllowance.call(addressXPuMF1N, uintzN98i6, {from: accounts[3]});
		const uint256UwainjF = await TPABlBU1oh.totalSupply.call({from: accounts[0]});
		const uint8bd1CAIY = await TPABlBU1oh.decimals.call({from: accounts[5]});
		const boolCOD80cC = await TPABlBU1oh.isAdmin.call(addressPx3Rszh, {from: accounts[4]});

		assert.equal(boolQfLIxF, false)
		assert.equal(boolaEcUa59, true)
		assert.equal(uint256XtpqDc7, BigInt("0"))
		await expect(TPABlBU1oh.decreaseAllowance.call(addressXPuMF1N, uintzN98i6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW8GrHqX = await TPA.new({from: accounts[2]});
		const addressGLq58E4 = accounts[2]
		const uintBI5dCE2 = BigInt("2015")
		const addressfGLWlrL = accounts[0]
		const addresspDuunOB = accounts[0]
		const addressqu76q2h = await TPAW8GrHqX.transferOwnership.call(addressGLq58E4, {from: accounts[2]});
		const boolGrs7s4m = await TPAW8GrHqX.approve.call(addressfGLWlrL, uintBI5dCE2, {from: accounts[1]});
		await TPAW8GrHqX.pause.call({from: accounts[2]});
		const boolCPLhtpm = await TPAW8GrHqX.unfreezeAccount.call(addresspDuunOB, {from: accounts[4]});
		await TPAW8GrHqX.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGrs7s4m, true)
		await expect(TPAW8GrHqX.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPATyr1II0 = await TPA.new({from: accounts[4]});
		const addressPnvQhgX = accounts[2]
		const uintUaPIgKH = BigInt("517")
		const addressoXkssFJ = accounts[1]
		const addressyEFoXN7 = accounts[1]
		const uintsWOqLMr = BigInt("740")
		const uintvMVNQoe = BigInt("1067")
		const addressb3W2M6p = accounts[1]
		const uintquqGVc7 = BigInt("94")
		const addressJfi8kpi = accounts[1]
		const addressuptR6pE = accounts[2]
		const addressiQYUJQl = accounts[0]
		const uintsEbmLgE = BigInt("95")
		const addressBscaExw = accounts[5]
		const addressslYEL5O = "0x0000000000000000000000000000000000000001"
		const uint256Solk1Ax = await TPATyr1II0.balanceOf.call(addressPnvQhgX, {from: accounts[3]});
		const boolbouNjbS = await TPATyr1II0.transferFrom.call(addressyEFoXN7, addressoXkssFJ, uintUaPIgKH, {from: accounts[5]});
		const boolbLTz4Xx = await TPATyr1II0.transferWithLock.call(addressb3W2M6p, uintvMVNQoe, uintsWOqLMr, {from: accounts[0]});
		const boolGsCtRdl = await TPATyr1II0.increaseAllowance.call(addressJfi8kpi, uintquqGVc7, {from: accounts[1]});
		const boolnkqqfT0 = await TPATyr1II0.isAdmin.call(addressuptR6pE, {from: accounts[1]});
		const uint256TolkkA0 = await TPATyr1II0.balanceOf.call(addressiQYUJQl, {from: accounts[1]});
		const boolBN62fE = await TPATyr1II0.transferFrom.call(addressslYEL5O, addressBscaExw, uintsEbmLgE, {from: accounts[1]});

		assert.equal(uint256Solk1Ax, BigInt("0"))
		await expect(TPATyr1II0.transferFrom.call(addressyEFoXN7, addressoXkssFJ, uintUaPIgKH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkfcCgPB = await TPA.new({from: accounts[3]});
		const uintI5wdDPA = BigInt("449")
		const uintAt26elu = BigInt("495")
		const addressysSjgNP = accounts[1]
		const uintbQdKRH = BigInt("745")
		const addresst9Sls74 = accounts[3]
		const uintVIx0FiN = BigInt("1021")
		const addressA3LJ847 = accounts[1]
		const addressXXkiunp = accounts[2]
		const boolTDpq6G6 = await TPAkfcCgPB.transferWithLock.call(addressysSjgNP, uintAt26elu, uintI5wdDPA, {from: accounts[3]});
		const boolFuNZwZf = await TPAkfcCgPB.approve.call(addresst9Sls74, uintbQdKRH, {from: "0x0000000000000000000000000000000000000001"});
		await TPAkfcCgPB.onlyOwner.call({from: accounts[0]});
		const boolKfOTPz = await TPAkfcCgPB.transferFrom.call(addressXXkiunp, addressA3LJ847, uintVIx0FiN, {from: accounts[2]});

		assert.equal(boolFuNZwZf, true)
		assert.equal(boolTDpq6G6, true)
		await expect(TPAkfcCgPB.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqYC5rxg = await TPA.new({from: accounts[1]});
		const addresspSMQECW = accounts[2]
		const uintyFDwwRz = BigInt("1143")
		const addressrr90GLJ = accounts[5]
		const address3CtBK2 = accounts[3]
		const uintJjO5g7C = BigInt("932")
		const addressekAzWRK = accounts[2]
		const boolcSeB89Z = await TPAqYC5rxg.paused.call({from: accounts[4]});
		const boolnW36kkp = await TPAqYC5rxg.freezeAccount.call(addresspSMQECW, {from: accounts[1]});
		const boolrswtjL = await TPAqYC5rxg.transferFrom.call(address3CtBK2, addressrr90GLJ, uintyFDwwRz, {from: accounts[3]});
		const boolROBkazL = await TPAqYC5rxg.paused.call({from: accounts[5]});
		const stringaopdFOr = await TPAqYC5rxg.symbol.call({from: accounts[5]});
		const booljUY5TOi = await TPAqYC5rxg.approve.call(addressekAzWRK, uintJjO5g7C, {from: accounts[2]});

		assert.equal(boolcSeB89Z, false)
		assert.equal(boolnW36kkp, true)
		await expect(TPAqYC5rxg.transferFrom.call(address3CtBK2, addressrr90GLJ, uintyFDwwRz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW8GrHqX = await TPA.new({from: accounts[2]});
		const addresso9wwCW6 = accounts[2]
		const uintKwv5Hg5 = BigInt("1834")
		const addressBTUlbTA = accounts[5]
		const uintitk1pK = BigInt("2015")
		const addressxPFOj8v = accounts[0]
		const addressmWOE3Qs = "0x0000000000000000000000000000000000000001"
		const addressFV73uay = accounts[4]
		const addressQOlwdFW = accounts[0]
		const uintWg0AEb = BigInt("1960")
		const addresselVUA6o = accounts[0]
		const addressqu76q2h = await TPAW8GrHqX.transferOwnership.call(addresso9wwCW6, {from: accounts[2]});
		const boolxGoy6nI = await TPAW8GrHqX.transfer.call(addressBTUlbTA, uintKwv5Hg5, {from: accounts[5]});
		const boolGrs7s4m = await TPAW8GrHqX.approve.call(addressxPFOj8v, uintitk1pK, {from: accounts[1]});
		const uint256wZnIEaj = await TPAW8GrHqX.balanceOf.call(addressmWOE3Qs, {from: accounts[4]});
		await TPAW8GrHqX.pause.call({from: accounts[2]});
		const boolxbqe1Zq = await TPAW8GrHqX.isOwner.call(addressFV73uay, {from: accounts[0]});
		const boolCPLhtpm = await TPAW8GrHqX.unfreezeAccount.call(addressQOlwdFW, {from: accounts[4]});
		await TPAW8GrHqX.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const bool5YAMXt = await TPAW8GrHqX.decreaseAllowance.call(addresselVUA6o, uintWg0AEb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAW8GrHqX.transfer.call(addressBTUlbTA, uintKwv5Hg5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAJ79jDdC = await TPA.new({from: accounts[2]});
		const uintwnIdss = BigInt("1608")
		const uintUY3Efpk = BigInt("24")
		const addressAzmlUM6 = accounts[5]
		const uintX9Whvaq = BigInt("1935")
		const addressABRZnYr = accounts[1]
		const uint256Zx1pv14 = await TPAJ79jDdC.burn.call(uintwnIdss, {from: accounts[2]});
		const boolFXPsem0 = await TPAJ79jDdC.increaseAllowance.call(addressAzmlUM6, uintUY3Efpk, {from: accounts[4]});
		const stringTDp1SmO = await TPAJ79jDdC.name.call({from: accounts[1]});
		const boolJMzINZF = await TPAJ79jDdC.decreaseAllowance.call(addressABRZnYr, uintX9Whvaq, {from: accounts[0]});
		const boollyXNSw = await TPAJ79jDdC.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFXPsem0, true)
		assert.equal(stringTDp1SmO, "TPA")
		await expect(TPAJ79jDdC.decreaseAllowance.call(addressABRZnYr, uintX9Whvaq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAL1M1n00 = await TPA.new({from: accounts[3]});
		const uintL29zfws = BigInt("1237")
		const uintGJIBHLD = BigInt("373")
		const addressNTRMv2P = accounts[3]
		const uintSXCetrH = BigInt("736")
		const addressd2LwKT = accounts[3]
		const addressAPwFDVL = accounts[0]
		const boolD0yDcFf = await TPAL1M1n00.lock.call(addressNTRMv2P, uintGJIBHLD, uintL29zfws, {from: accounts[3]});
		const boolFNfWFPP = await TPAL1M1n00.transferFrom.call(addressAPwFDVL, addressd2LwKT, uintSXCetrH, {from: accounts[0]});

		assert.equal(boolD0yDcFf, true)
		await expect(TPAL1M1n00.transferFrom.call(addressAPwFDVL, addressd2LwKT, uintSXCetrH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW8GrHqX = await TPA.new({from: accounts[2]});
		const addressZo29xeh = accounts[2]
		const uintO4KiqVc = BigInt("2015")
		const addressYtXjYLK = accounts[0]
		const addresskoI1aWk = "0x0000000000000000000000000000000000000002"
		const uintaf76st0 = BigInt("140")
		const addresscIYIjlM = accounts[2]
		const uint2ehbxY = BigInt("1384")
		const addresssTNZvw = accounts[5]
		const addressMi7x8C8 = accounts[2]
		const addressBzIgvdL = accounts[4]
		const addressnXDLHqr = accounts[0]
		const uintFrW5Yne = BigInt("1960")
		const addressAvCrQ9I = accounts[0]
		const addressqu76q2h = await TPAW8GrHqX.transferOwnership.call(addressZo29xeh, {from: accounts[2]});
		const boolGrs7s4m = await TPAW8GrHqX.approve.call(addressYtXjYLK, uintO4KiqVc, {from: accounts[1]});
		const uint256wZnIEaj = await TPAW8GrHqX.balanceOf.call(addresskoI1aWk, {from: accounts[4]});
		await TPAW8GrHqX.pause.call({from: accounts[2]});
		const addressZBeJkVN = await TPAW8GrHqX.burnFrom.call(addresscIYIjlM, uintaf76st0, {from: accounts[1]});
		const boolSFtwLt = await TPAW8GrHqX.transferFrom.call(addressMi7x8C8, addresssTNZvw, uint2ehbxY, {from: accounts[2]});
		const boolxbqe1Zq = await TPAW8GrHqX.isOwner.call(addressBzIgvdL, {from: accounts[0]});
		await TPAW8GrHqX.unpause.call({from: accounts[4]});
		const boolCPLhtpm = await TPAW8GrHqX.unfreezeAccount.call(addressnXDLHqr, {from: accounts[4]});
		await TPAW8GrHqX.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const bool5YAMXt = await TPAW8GrHqX.decreaseAllowance.call(addressAvCrQ9I, uintFrW5Yne, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGrs7s4m, true)
		assert.equal(uint256wZnIEaj, BigInt("0"))
		await expect(TPAW8GrHqX.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW8GrHqX = await TPA.new({from: accounts[2]});
		const uintZMdfw1 = BigInt("2015")
		const addressTd3GiRY = accounts[1]
		const addressFlXJ8P = accounts[1]
		const uintH3BMqix = BigInt("1960")
		const addressrz8YdgV = accounts[0]
		const uintPpSSI4 = BigInt("283")
		const addressg2P9cq = accounts[2]
		await TPAW8GrHqX.renounceAdmin.call({from: accounts[1]});
		const boolGrs7s4m = await TPAW8GrHqX.approve.call(addressTd3GiRY, uintZMdfw1, {from: accounts[1]});
		await TPAW8GrHqX.pause.call({from: accounts[2]});
		await TPAW8GrHqX.pause.call({from: accounts[0]});
		const addressCX316aQ = await TPAW8GrHqX.transferOwnership.call(addressFlXJ8P, {from: accounts[4]});
		await TPAW8GrHqX.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const bool5YAMXt = await TPAW8GrHqX.decreaseAllowance.call(addressrz8YdgV, uintH3BMqix, {from: "0x0000000000000000000000000000000000000001"});
		const boolgBdKBw6 = await TPAW8GrHqX.decreaseAllowance.call(addressg2P9cq, uintPpSSI4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAW8GrHqX.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW8GrHqX = await TPA.new({from: accounts[2]});
		const address6m3JY5 = accounts[2]
		const uintqZsDwfn = BigInt("1834")
		const addressSfHrcB = accounts[5]
		const addresscPHAjqn = "0x0000000000000000000000000000000000000000"
		const uintXhXoY1G = BigInt("2020")
		const addressCzK2WzI = accounts[3]
		const addressd5qsT7s = accounts[3]
		const uintoDKbsBu = BigInt("1960")
		const addresslhPQil = accounts[0]
		const stringx3qHA3 = await TPAW8GrHqX.symbol.call({from: accounts[3]});
		const addressqu76q2h = await TPAW8GrHqX.transferOwnership.call(address6m3JY5, {from: accounts[2]});
		const boolxGoy6nI = await TPAW8GrHqX.transfer.call(addressSfHrcB, uintqZsDwfn, {from: accounts[5]});
		const uint256wZnIEaj = await TPAW8GrHqX.balanceOf.call(addresscPHAjqn, {from: accounts[4]});
		await TPAW8GrHqX.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolusyJVwu = await TPAW8GrHqX.transferFrom.call(addressd5qsT7s, addressCzK2WzI, uintXhXoY1G, {from: accounts[0]});
		const bool5YAMXt = await TPAW8GrHqX.decreaseAllowance.call(addresslhPQil, uintoDKbsBu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringx3qHA3, "TPA")
		await expect(TPAW8GrHqX.transfer.call(addressSfHrcB, uintqZsDwfn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPATyr1II0 = await TPA.new({from: accounts[4]});
		const uintbKcT7v = BigInt("1792")
		const addressScD2kx = accounts[3]
		const addressDnPT2dR = accounts[3]
		const addressG9wCNZ4 = accounts[1]
		const uintQh2cJo = BigInt("867")
		const addressBJdipZD = accounts[4]
		const uintkjBchr = BigInt("1244")
		const addressf3VO7mL = accounts[1]
		const uintxteV7V = BigInt("94")
		const addressFUm31ec = accounts[2]
		const uintEAcYFcS = BigInt("95")
		const addresswMZM3AQ = accounts[5]
		const addresslS8qfU = "0x0000000000000000000000000000000000000002"
		const boolsWUYflF = await TPATyr1II0.approve.call(addressScD2kx, uintbKcT7v, {from: accounts[4]});
		const uint256Solk1Ax = await TPATyr1II0.balanceOf.call(addressDnPT2dR, {from: accounts[3]});
		const addressAHbviNI = await TPATyr1II0.addAdmin.call(addressG9wCNZ4, {from: accounts[4]});
		const boolaY0izn = await TPATyr1II0.transfer.call(addressBJdipZD, uintQh2cJo, {from: accounts[4]});
		const boolSF3sBdH = await TPATyr1II0.approve.call(addressf3VO7mL, uintkjBchr, {from: accounts[0]});
		const boolGsCtRdl = await TPATyr1II0.increaseAllowance.call(addressFUm31ec, uintxteV7V, {from: accounts[1]});
		const boolBN62fE = await TPATyr1II0.transferFrom.call(addresslS8qfU, addresswMZM3AQ, uintEAcYFcS, {from: accounts[1]});

		assert.equal(boolGsCtRdl, true)
		assert.equal(boolSF3sBdH, true)
		assert.equal(boolaY0izn, true)
		assert.equal(boolsWUYflF, true)
		assert.equal(uint256Solk1Ax, BigInt("0"))
		await expect(TPATyr1II0.transferFrom.call(addresslS8qfU, addresswMZM3AQ, uintEAcYFcS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAJ6QchjC = await TPA.new({from: accounts[3]});
		const addressza7fh3d = accounts[3]
		const stringSR4TXZ4 = await TPAJ6QchjC.symbol.call({from: accounts[1]});
		const boolBcSod72 = await TPAJ6QchjC.isOwner.call(addressza7fh3d, {from: accounts[3]});

		assert.equal(boolBcSod72, true)
		assert.equal(stringSR4TXZ4, "TPA")
	});

	it('test for TPA', async () => {
		const TPAhKrqRBn = await TPA.new({from: accounts[3]});
		const uint1fmXA0 = BigInt("645")
		const addressfiC2tS = accounts[0]
		const addressaaIn897 = accounts[3]
		const addressJUGM90j = accounts[2]
		const uintGVJX2ru = BigInt("1572")
		const addressawhLWiG = accounts[1]
		const boolFkvn0UC = await TPAhKrqRBn.approve.call(addressfiC2tS, uint1fmXA0, {from: accounts[4]});
		const booltjt8qn2 = await TPAhKrqRBn.unfreezeAccount.call(addressaaIn897, {from: accounts[3]});
		const addressTTSpdX5 = await TPAhKrqRBn.addAdmin.call(addressJUGM90j, {from: accounts[3]});
		const boolTmBWM8 = await TPAhKrqRBn.transfer.call(addressawhLWiG, uintGVJX2ru, {from: accounts[4]});

		assert.equal(boolFkvn0UC, true)
		await expect(TPAhKrqRBn.unfreezeAccount.call(addressaaIn897, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
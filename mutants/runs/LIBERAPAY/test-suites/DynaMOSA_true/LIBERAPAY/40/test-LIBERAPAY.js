const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYu2ATdB4 = await LIBERAPAY.new({from: accounts[0]});
		const uintLORxc5 = BigInt("1408")
		const addressVdWzRZC = accounts[4]
		const uintmkMxJwZ = BigInt("1792")
		const addresshwmajuK = accounts[2]
		const addressa1Jbs89 = accounts[0]
		const addressIrtJJWO = accounts[3]
		const uint256CW2sSIT = await LIBERAPAYu2ATdB4.getNowTime.call({from: accounts[0]});
		const boolYYBMpr3 = await LIBERAPAYu2ATdB4.acceptOwnership.call({from: accounts[4]});
		const boolnVKNDps = await LIBERAPAYu2ATdB4.unlock.call(addressVdWzRZC, uintLORxc5, {from: accounts[4]});
		const boolPgnxrv8 = await LIBERAPAYu2ATdB4.transferFrom.call(addressa1Jbs89, addresshwmajuK, uintmkMxJwZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressECPL5uq = await LIBERAPAYu2ATdB4.upgradeTo.call(addressIrtJJWO, {from: accounts[2]});

		assert.equal(uint256CW2sSIT, BigInt("1630229612"))
		await expect(LIBERAPAYu2ATdB4.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDJkns5 = await LIBERAPAY.new({from: accounts[0]});
		const uintYuGfdwP = BigInt("141")
		const addressC09voFr = accounts[3]
		const addressbFSLBbh = accounts[3]
		const uintYLZTz4V = BigInt("1959")
		const addresserhp3D8 = accounts[4]
		const addressGcIZH69 = accounts[2]
		const addressMhuQ6Jp = accounts[1]
		const uintJL5NypN = BigInt("1570")
		const addressnb0upn = accounts[4]
		const boolKzq0jXx = await LIBERAPAYDJkns5.transferFrom.call(addressbFSLBbh, addressC09voFr, uintYuGfdwP, {from: accounts[0]});
		const booluizuLOY = await LIBERAPAYDJkns5.acceptOwnership.call({from: accounts[3]});
		const boolYhv0AYS = await LIBERAPAYDJkns5.transfer.call(addresserhp3D8, uintYLZTz4V, {from: accounts[3]});
		const boolyaKG9bJ = await LIBERAPAYDJkns5.unfreezeAccount.call(addressGcIZH69, {from: accounts[3]});
		const addressMefItJz = await LIBERAPAYDJkns5.notFrozen.call(addressMhuQ6Jp, {from: accounts[4]});
		const booliG5uyVo = await LIBERAPAYDJkns5.increaseAllowance.call(addressnb0upn, uintJL5NypN, {from: accounts[2]});

		await expect(LIBERAPAYDJkns5.transferFrom.call(addressbFSLBbh, addressC09voFr, uintYuGfdwP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeUceWfq = await LIBERAPAY.new({from: accounts[2]});
		const uintKy8fuXj = BigInt("1334")
		const addressPQjnDnL = accounts[4]
		const uint1iYM4L = BigInt("1054")
		const addresssJrZG6A = accounts[1]
		await LIBERAPAYeUceWfq.whenPaused.call({from: accounts[4]});
		const boolrEXp04 = await LIBERAPAYeUceWfq.burnFrom.call(addressPQjnDnL, uintKy8fuXj, {from: accounts[5]});
		const uint256cH5bahW = await LIBERAPAYeUceWfq.getNowTime.call({from: accounts[1]});
		await LIBERAPAYeUceWfq.whenPaused.call({from: accounts[5]});
		const boolcGyLYJy = await LIBERAPAYeUceWfq.decreaseAllowance.call(addresssJrZG6A, uint1iYM4L, {from: accounts[0]});
		const uint256Wk9JbbQ = await LIBERAPAYeUceWfq.totalSupply.call({from: accounts[0]});

		await expect(LIBERAPAYeUceWfq.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAzr5Yv9 = await LIBERAPAY.new({from: accounts[1]});
		const uintJFEbkG = BigInt("1559")
		const addressj6F9jib = accounts[4]
		const addresswAHTWTc = accounts[4]
		const boolUBtVuG = await LIBERAPAYAzr5Yv9.transfer.call(addressj6F9jib, uintJFEbkG, {from: accounts[1]});
		const addresscKlWIuv = await LIBERAPAYAzr5Yv9.upgradeTo.call(addresswAHTWTc, {from: accounts[1]});
		const uint256pjY7l0l = await LIBERAPAYAzr5Yv9.getNowTime.call({from: accounts[2]});
		const boolO5IQX1w = await LIBERAPAYAzr5Yv9.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolUBtVuG, true)
		assert.equal(uint256pjY7l0l, BigInt("1630229618"))
		await expect(LIBERAPAYAzr5Yv9.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDx4tL1Q = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr5Ski1 = accounts[3]
		const booloXzhVsp = await LIBERAPAYDx4tL1Q.unfreezeAccount.call(addressr5Ski1, {from: accounts[4]});
		const uint256JQyh6MV = await LIBERAPAYDx4tL1Q.getNowTime.call({from: accounts[4]});
		await LIBERAPAYDx4tL1Q.onlyNewOwner.call({from: accounts[3]});
		await LIBERAPAYDx4tL1Q.whenNotPaused.call({from: accounts[0]});
		await LIBERAPAYDx4tL1Q.onlyOwner.call({from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYreMUpHJ = await LIBERAPAY.new({from: accounts[2]});
		const uintaLyleG = BigInt("389")
		const addressrQx8N1t = accounts[1]
		const addressXKkuKzc = accounts[0]
		const uintMARgbM1 = BigInt("856")
		const uinthB0LMIE = BigInt("769")
		const addressxwBYx5 = accounts[1]
		const boolz9uZPDV = await LIBERAPAYreMUpHJ.approve.call(addressrQx8N1t, uintaLyleG, {from: accounts[1]});
		await LIBERAPAYreMUpHJ.onlyOwner.call({from: accounts[2]});
		const uint256fBBT78m = await LIBERAPAYreMUpHJ.currentBalanceOf.call(addressXKkuKzc, {from: accounts[2]});
		const boolaT32CH3 = await LIBERAPAYreMUpHJ.lock.call(addressxwBYx5, uinthB0LMIE, uintMARgbM1, {from: accounts[2]});

		assert.equal(boolz9uZPDV, true)
		await expect(LIBERAPAYreMUpHJ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAzr5Yv9 = await LIBERAPAY.new({from: accounts[1]});
		const addressZhOaQFF = accounts[4]
		const uintYWKgvx = BigInt("441")
		const addresseEemqMo = accounts[1]
		const uintgqgtKyJ = BigInt("725")
		const address5Jj4bK = accounts[0]
		const addresscKlWIuv = await LIBERAPAYAzr5Yv9.upgradeTo.call(addressZhOaQFF, {from: accounts[1]});
		const boolMT2d4VV = await LIBERAPAYAzr5Yv9.burnFrom.call(addresseEemqMo, uintYWKgvx, {from: accounts[5]});
		const boolubYASyQ = await LIBERAPAYAzr5Yv9.distribute.call(address5Jj4bK, uintgqgtKyJ, {from: accounts[5]});
		const uint256pjY7l0l = await LIBERAPAYAzr5Yv9.getNowTime.call({from: accounts[2]});
		await LIBERAPAYAzr5Yv9.unpause.call({from: accounts[0]});
		const boolyrk59jV = await LIBERAPAYAzr5Yv9.acceptOwnership.call({from: accounts[5]});
		const boolO5IQX1w = await LIBERAPAYAzr5Yv9.acceptOwnership.call({from: accounts[2]});

		await expect(LIBERAPAYAzr5Yv9.burnFrom.call(addresseEemqMo, uintYWKgvx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1xNEXk = await LIBERAPAY.new({from: accounts[1]});
		const uintH6MVKkg = BigInt("756")
		const addressK6iy3kB = accounts[0]
		const addressk9t2N4N = accounts[1]
		const addressnsAI5MO = accounts[3]
		const uintRUiwVFi = BigInt("969")
		const addressJjrLqG1 = "0x0000000000000000000000000000000000000001"
		const addressnJSgSrV = accounts[0]
		const addressOBW3oxf = accounts[2]
		const boolThXJY0f = await LIBERAPAY1xNEXk.decreaseAllowance.call(addressK6iy3kB, uintH6MVKkg, {from: accounts[3]});
		const uint256Y0E5UFM = await LIBERAPAY1xNEXk.allowance.call(addressnsAI5MO, addressk9t2N4N, {from: accounts[3]});
		const boollKeydf4 = await LIBERAPAY1xNEXk.increaseAllowance.call(addressJjrLqG1, uintRUiwVFi, {from: accounts[3]});
		const uint256CNe01NB = await LIBERAPAY1xNEXk.currentBalanceOf.call(addressnJSgSrV, {from: accounts[2]});
		const uint256IeKYTNa = await LIBERAPAY1xNEXk.currentBalanceOf.call(addressOBW3oxf, {from: accounts[0]});
		await LIBERAPAY1xNEXk.pause.call({from: accounts[3]});

		await expect(LIBERAPAY1xNEXk.decreaseAllowance.call(addressK6iy3kB, uintH6MVKkg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYreMUpHJ = await LIBERAPAY.new({from: accounts[2]});
		const uint7obbCD = BigInt("29")
		const addresseJMj9qe = accounts[5]
		const uintmuOszj3 = BigInt("856")
		const uintnj22a1a = BigInt("769")
		const addressPqQuvI = accounts[1]
		await LIBERAPAYreMUpHJ.f.call({from: accounts[0]});
		const boolK1kaVXw = await LIBERAPAYreMUpHJ.increaseAllowance.call(addresseJMj9qe, uint7obbCD, {from: accounts[0]});
		await LIBERAPAYreMUpHJ.onlyOwner.call({from: accounts[2]});
		const boolaT32CH3 = await LIBERAPAYreMUpHJ.lock.call(addressPqQuvI, uintnj22a1a, uintmuOszj3, {from: accounts[2]});

		await expect(LIBERAPAYreMUpHJ.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDJkns5 = await LIBERAPAY.new({from: accounts[0]});
		const uintJ4Idc7H = BigInt("848")
		const addressVma26qg = accounts[2]
		const uint51Hehw = BigInt("141")
		const addressFzznOYt = accounts[3]
		const addressSkKbmx7 = accounts[3]
		const uintanOQLet = BigInt("1959")
		const addressDIEPjEx = accounts[4]
		const addresspgHY1i = accounts[2]
		const addressQQF62WI = accounts[2]
		const uint5aDd3U = BigInt("1570")
		const addresspc9SREA = accounts[4]
		const boolWTDEr9v = await LIBERAPAYDJkns5.unlock.call(addressVma26qg, uintJ4Idc7H, {from: accounts[0]});
		const boolKzq0jXx = await LIBERAPAYDJkns5.transferFrom.call(addressSkKbmx7, addressFzznOYt, uint51Hehw, {from: accounts[0]});
		const booluizuLOY = await LIBERAPAYDJkns5.acceptOwnership.call({from: accounts[3]});
		const boolYhv0AYS = await LIBERAPAYDJkns5.transfer.call(addressDIEPjEx, uintanOQLet, {from: accounts[3]});
		const boolyaKG9bJ = await LIBERAPAYDJkns5.unfreezeAccount.call(addresspgHY1i, {from: accounts[3]});
		const addressMefItJz = await LIBERAPAYDJkns5.notFrozen.call(addressQQF62WI, {from: accounts[4]});
		const booliG5uyVo = await LIBERAPAYDJkns5.increaseAllowance.call(addresspc9SREA, uint5aDd3U, {from: accounts[2]});

		await expect(LIBERAPAYDJkns5.unlock.call(addressVma26qg, uintJ4Idc7H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYX8CKbhW = await LIBERAPAY.new({from: accounts[3]});
		const uintNTjtP7R = BigInt("1130")
		const addressJAwM1TG = accounts[4]
		const uintuf7al09 = BigInt("665")
		const addressgsEPVgI = accounts[4]
		const booltVU1Ppr = await LIBERAPAYX8CKbhW.increaseAllowance.call(addressJAwM1TG, uintNTjtP7R, {from: accounts[0]});
		const boolNDRtwy = await LIBERAPAYX8CKbhW.transfer.call(addressgsEPVgI, uintuf7al09, {from: accounts[5]});
		await LIBERAPAYX8CKbhW.f.call({from: accounts[2]});

		assert.equal(booltVU1Ppr, true)
		await expect(LIBERAPAYX8CKbhW.transfer.call(addressgsEPVgI, uintuf7al09, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtW2ui5n = await LIBERAPAY.new({from: accounts[3]});
		const uintVeZZJL6 = BigInt("123")
		const uintpQorlKa = BigInt("1377")
		const addressiEeDna = accounts[4]
		const uintpMs09ev = BigInt("860")
		const addresstbwOx7M = accounts[0]
		const uintmsPwul = BigInt("1158")
		const addresshMSTNEx = accounts[3]
		const uintRVZRvQD = BigInt("1491")
		const boolSSPLaLv = await LIBERAPAYtW2ui5n.lock.call(addressiEeDna, uintpQorlKa, uintVeZZJL6, {from: accounts[3]});
		await LIBERAPAYtW2ui5n.showLockState.call(addresstbwOx7M, uintpMs09ev, {from: accounts[2]});
		const boolHgtnG6N = await LIBERAPAYtW2ui5n.transfer.call(addresshMSTNEx, uintmsPwul, {from: accounts[4]});
		const boolABmeXDa = await LIBERAPAYtW2ui5n.burn.call(uintRVZRvQD, {from: accounts[2]});

		await expect(LIBERAPAYtW2ui5n.lock.call(addressiEeDna, uintpQorlKa, uintVeZZJL6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const uintcYcIae = BigInt("1224")
		const addresse3mUW8 = accounts[4]
		const addressNX2U2FV = accounts[1]
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressNX2U2FV, addresse3mUW8, uintcYcIae, {from: accounts[3]});

		await expect(LIBERAPAYSutAmcQ.transferFrom.call(addressNX2U2FV, addresse3mUW8, uintcYcIae, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const uintTWjXSC = BigInt("1558")
		const addressoiny31E = accounts[5]
		const uintVVGifNS = BigInt("1642")
		const addressSfheqMX = accounts[0]
		const uintIz9uZjP = BigInt("1224")
		const address0yNibm = accounts[5]
		const addressCmmkcuH = accounts[0]
		const boolm3dKr5 = await LIBERAPAYSutAmcQ.distribute.call(addressoiny31E, uintTWjXSC, {from: accounts[1]});
		const boolQbNY19X = await LIBERAPAYSutAmcQ.increaseAllowance.call(addressSfheqMX, uintVVGifNS, {from: "0x0000000000000000000000000000000000000001"});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressCmmkcuH, address0yNibm, uintIz9uZjP, {from: accounts[3]});

		assert.equal(boolQbNY19X, true)
		assert.equal(boolm3dKr5, true)
		await expect(LIBERAPAYSutAmcQ.transferFrom.call(addressCmmkcuH, address0yNibm, uintIz9uZjP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const addressEestq7y = accounts[0]
		const uint7mEv0m = BigInt("1237")
		const addressG8m7Zr4 = accounts[4]
		const addressO1L2yA7 = accounts[0]
		const addressLNifUyM = await LIBERAPAYSutAmcQ.transferOwnership.call(addressEestq7y, {from: accounts[1]});
		const boolADR9J6i = await LIBERAPAYSutAmcQ.acceptOwnership.call({from: accounts[1]});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressO1L2yA7, addressG8m7Zr4, uint7mEv0m, {from: accounts[3]});

		await expect(LIBERAPAYSutAmcQ.acceptOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzAMd44 = await LIBERAPAY.new({from: accounts[5]});
		const addressJJuGlky = accounts[1]
		const uintOP9Pt8o = BigInt("192")
		const addresscfgji94 = accounts[2]
		const uint256FaZGeJn = await LIBERAPAYzAMd44.balanceOf.call(addressJJuGlky, {from: accounts[5]});
		await LIBERAPAYzAMd44.whenNotPaused.call({from: accounts[5]});
		const boolFe4w5M1 = await LIBERAPAYzAMd44.transfer.call(addresscfgji94, uintOP9Pt8o, {from: accounts[4]});

		assert.equal(uint256FaZGeJn, BigInt("0"))
		await expect(LIBERAPAYzAMd44.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const uintB4eNVVx = BigInt("1224")
		const addressMFBOeqL = accounts[4]
		const addresswhCeiov = accounts[0]
		await LIBERAPAYSutAmcQ.pause.call({from: accounts[1]});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addresswhCeiov, addressMFBOeqL, uintB4eNVVx, {from: accounts[3]});

		await expect(LIBERAPAYSutAmcQ.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const addresslJlgpqX = accounts[5]
		const uintEtCfDSz = BigInt("1715")
		const addresshJ5lgZy = accounts[4]
		const addressXkiZ2G = accounts[0]
		const addressnnbgXN1 = accounts[5]
		const uint256PTZf9MX = await LIBERAPAYSutAmcQ.currentBalanceOf.call(addresslJlgpqX, {from: "0x0000000000000000000000000000000000000001"});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressXkiZ2G, addresshJ5lgZy, uintEtCfDSz, {from: accounts[3]});
		const addressEUv8um6 = await LIBERAPAYSutAmcQ.upgradeTo.call(addressnnbgXN1, {from: accounts[2]});

		assert.equal(uint256PTZf9MX, BigInt("0"))
		await expect(LIBERAPAYSutAmcQ.transferFrom.call(addressXkiZ2G, addresshJ5lgZy, uintEtCfDSz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDJkns5 = await LIBERAPAY.new({from: accounts[0]});
		const uintsCulxV2 = BigInt("1571")
		const addressGz0ZFeT = accounts[1]
		const uintz3UMuzF = BigInt("848")
		const addresspg9tFbZ = accounts[2]
		const uintQ4O5Bk5 = BigInt("1632")
		const addresslFLEEC6 = accounts[2]
		const addressynnqI8u = accounts[2]
		const uintIxc5Pd1 = BigInt("141")
		const addressgXi9DcV = accounts[3]
		const addressOQIzIs = accounts[3]
		const addressOkzRvDq = accounts[5]
		const uintZI4n9w = BigInt("1959")
		const addressehKY0Qt = accounts[5]
		const uintuKh6Rfy = BigInt("64")
		const addressFa1cQ7W = accounts[5]
		const uintjHrKmbT = BigInt("639")
		const addressA5OrLhS = "0x0000000000000000000000000000000000000001"
		const uints4bzskB = BigInt("1570")
		const addresswMiVtCj = accounts[4]
		await LIBERAPAYDJkns5.showLockState.call(addressGz0ZFeT, uintsCulxV2, {from: "0x0000000000000000000000000000000000000001"});
		const boolWTDEr9v = await LIBERAPAYDJkns5.unlock.call(addresspg9tFbZ, uintz3UMuzF, {from: accounts[0]});
		const boolgwfRSgw = await LIBERAPAYDJkns5.approve.call(addresslFLEEC6, uintQ4O5Bk5, {from: accounts[0]});
		const boolD54UTFQ = await LIBERAPAYDJkns5.freezeAccount.call(addressynnqI8u, {from: accounts[3]});
		const boolKzq0jXx = await LIBERAPAYDJkns5.transferFrom.call(addressOQIzIs, addressgXi9DcV, uintIxc5Pd1, {from: accounts[0]});
		const booluizuLOY = await LIBERAPAYDJkns5.acceptOwnership.call({from: accounts[3]});
		const addressXNjzkF = await LIBERAPAYDJkns5.notFrozen.call(addressOkzRvDq, {from: accounts[1]});
		await LIBERAPAYDJkns5.whenPaused.call({from: accounts[4]});
		const boolYhv0AYS = await LIBERAPAYDJkns5.transfer.call(addressehKY0Qt, uintZI4n9w, {from: accounts[3]});
		const boolUHpxEu = await LIBERAPAYDJkns5.burnFrom.call(addressFa1cQ7W, uintuKh6Rfy, {from: accounts[2]});
		await LIBERAPAYDJkns5.showLockState.call(addressA5OrLhS, uintjHrKmbT, {from: accounts[0]});
		const booliG5uyVo = await LIBERAPAYDJkns5.increaseAllowance.call(addresswMiVtCj, uints4bzskB, {from: accounts[2]});
		const uint256j3YmGoX = await LIBERAPAYDJkns5.getNowTime.call({from: accounts[3]});

		await expect(LIBERAPAYDJkns5.showLockState.call(addressGz0ZFeT, uintsCulxV2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const addressFBjbNDI = accounts[2]
		const addressfG9yBpj = accounts[5]
		const uinta8ibEO = BigInt("1715")
		const addressiqg0Osc = accounts[4]
		const addressxtNtfsl = accounts[0]
		const addressVMeyIsP = accounts[5]
		const booleDP2wem = await LIBERAPAYSutAmcQ.unfreezeAccount.call(addressFBjbNDI, {from: accounts[1]});
		const uint256PTZf9MX = await LIBERAPAYSutAmcQ.currentBalanceOf.call(addressfG9yBpj, {from: "0x0000000000000000000000000000000000000001"});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressxtNtfsl, addressiqg0Osc, uinta8ibEO, {from: accounts[3]});
		const addressEUv8um6 = await LIBERAPAYSutAmcQ.upgradeTo.call(addressVMeyIsP, {from: accounts[2]});

		await expect(LIBERAPAYSutAmcQ.unfreezeAccount.call(addressFBjbNDI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const addressssjhfv5 = accounts[5]
		const uinth3APKRk = BigInt("1715")
		const addressknMFxE = accounts[4]
		const addressHu89PHt = accounts[2]
		const addressR0VYh94 = accounts[3]
		const addressH6Eo0k4 = accounts[5]
		const uint256PTZf9MX = await LIBERAPAYSutAmcQ.currentBalanceOf.call(addressssjhfv5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256reTS6qX = await LIBERAPAYSutAmcQ.totalSupply.call({from: accounts[3]});
		const boolJeduEaO = await LIBERAPAYSutAmcQ.transferFrom.call(addressHu89PHt, addressknMFxE, uinth3APKRk, {from: accounts[3]});
		const uint256kl0bwD = await LIBERAPAYSutAmcQ.balanceOf.call(addressR0VYh94, {from: "0x0000000000000000000000000000000000000001"});
		const addressEUv8um6 = await LIBERAPAYSutAmcQ.upgradeTo.call(addressH6Eo0k4, {from: accounts[2]});

		assert.equal(uint256PTZf9MX, BigInt("0"))
		assert.equal(uint256reTS6qX, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYSutAmcQ.transferFrom.call(addressHu89PHt, addressknMFxE, uinth3APKRk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDFLrKgv = await LIBERAPAY.new({from: accounts[2]});
		const addressUBvzsqR = "0x0000000000000000000000000000000000000001"
		const addresslEbNGnu = accounts[2]
		const addressUwWCRCN = accounts[0]
		const uintRLbF4h5 = BigInt("387")
		const addresstb2ouz = accounts[3]
		const uint256g1FtBeo = await LIBERAPAYDFLrKgv.getNowTime.call({from: accounts[4]});
		const boolJZbi7Jx = await LIBERAPAYDFLrKgv.freezeAccount.call(addressUBvzsqR, {from: accounts[2]});
		const addressaZE0utt = await LIBERAPAYDFLrKgv.notFrozen.call(addresslEbNGnu, {from: accounts[0]});
		const uint256HdUiK0z = await LIBERAPAYDFLrKgv.balanceOf.call(addressUwWCRCN, {from: accounts[1]});
		const boolmu1UlnC = await LIBERAPAYDFLrKgv.unlock.call(addresstb2ouz, uintRLbF4h5, {from: accounts[3]});

		assert.equal(boolJZbi7Jx, true)
		assert.equal(uint256g1FtBeo, BigInt("1630229625"))
		await expect(LIBERAPAYDFLrKgv.notFrozen.call(addresslEbNGnu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzAMd44 = await LIBERAPAY.new({from: accounts[5]});
		const uintm1oLmFI = BigInt("149")
		const addressXPfZFE6 = accounts[3]
		const boolMAQVyOS = await LIBERAPAYzAMd44.burn.call(uintm1oLmFI, {from: accounts[5]});
		const uint256FaZGeJn = await LIBERAPAYzAMd44.balanceOf.call(addressXPfZFE6, {from: accounts[5]});
		const uint256LMjSWiR = await LIBERAPAYzAMd44.getNowTime.call({from: accounts[2]});

		assert.equal(boolMAQVyOS, true)
		assert.equal(uint256FaZGeJn, BigInt("0"))
		assert.equal(uint256LMjSWiR, BigInt("1630229613"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const uintoVG6IHE = BigInt("1147")
		const addressv8FZXmX = accounts[3]
		const uintswK9mrT = BigInt("991")
		const addressWITCyZO = "0x0000000000000000000000000000000000000001"
		const addresswMi1yuy = accounts[7]
		const uintEr2bBdI = BigInt("689")
		const addressMlK9dxH = "0x0000000000000000000000000000000000000001"
		await LIBERAPAYSutAmcQ.showLockState.call(addressv8FZXmX, uintoVG6IHE, {from: accounts[2]});
		const boolDvME9LG = await LIBERAPAYSutAmcQ.mint.call(addressWITCyZO, uintswK9mrT, {from: accounts[1]});
		const uint256PTZf9MX = await LIBERAPAYSutAmcQ.currentBalanceOf.call(addresswMi1yuy, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYSutAmcQ.showLockState.call(addressMlK9dxH, uintEr2bBdI, {from: accounts[0]});

		await expect(LIBERAPAYSutAmcQ.showLockState.call(addressv8FZXmX, uintoVG6IHE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSutAmcQ = await LIBERAPAY.new({from: accounts[1]});
		const uintToWtpRJ = BigInt("56")
		const addressQm9omEI = "0x00000000000000000000000000000000000000-1"
		const uint256ATAS7zu = await LIBERAPAYSutAmcQ.getNowTime.call({from: accounts[2]});
		const boolYuZCPKw = await LIBERAPAYSutAmcQ.mint.call(addressQm9omEI, uintToWtpRJ, {from: accounts[1]});

		assert.equal(uint256ATAS7zu, BigInt("1630229622"))
		await expect(LIBERAPAYSutAmcQ.mint.call(addressQm9omEI, uintToWtpRJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uintfbNp0OK = BigInt("1844")
		const addressrLH23G = accounts[4]
		const uinttv9AY5N = BigInt("873")
		const addresst1FKCjL = accounts[2]
		const uintSEJIaNO = BigInt("1689")
		const address2I4mlh = accounts[0]
		const uintTGUx892 = BigInt("941")
//		const boolkqfwp65 = await LIBERAPAYGOKV35M.transfer.call(addressrLH23G, uintfbNp0OK, {from: accounts[3]});
//		const uint256HzEWh9c = await LIBERAPAYGOKV35M.getNowTime.call({from: accounts[4]});
//		const boolc8TyxQ8 = await LIBERAPAYGOKV35M.distribute.call(addresst1FKCjL, uinttv9AY5N, {from: accounts[2]});
//		const boolQV81Se3 = await LIBERAPAYGOKV35M.approve.call(address2I4mlh, uintSEJIaNO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBOrjyyt = await LIBERAPAYGOKV35M.burn.call(uintTGUx892, {from: accounts[1]});

		await expect(LIBERAPAYGOKV35M.transfer.call(addressrLH23G, uintfbNp0OK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNTfVxw = await LIBERAPAY.new({from: accounts[2]});
		const addressOSCQIpM = accounts[4]
		const addressVfd2Ztd = accounts[0]
		const uintQL57tEl = BigInt("1856")
		const addresszplLhlN = accounts[4]
		const uinteeLAPdv = BigInt("367")
		const uint5pLBmu = BigInt("734")
		const addressBF5xEt = accounts[3]
		const uint256xCQLkIG = await LIBERAPAYNTfVxw.allowance.call(addressVfd2Ztd, addressOSCQIpM, {from: accounts[1]});
//		const boolyz2iZgL = await LIBERAPAYNTfVxw.distribute.call(addresszplLhlN, uintQL57tEl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFi9pHkU = await LIBERAPAYNTfVxw.burn.call(uinteeLAPdv, {from: accounts[0]});
//		const boolMNaldSo = await LIBERAPAYNTfVxw.transfer.call(addressBF5xEt, uint5pLBmu, {from: accounts[0]});
//		await LIBERAPAYNTfVxw.unpause.call({from: accounts[0]});

		assert.equal(uint256xCQLkIG, BigInt("0"))
		await expect(LIBERAPAYNTfVxw.distribute.call(addresszplLhlN, uintQL57tEl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJqHIPJZ = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSlLjmp = BigInt("1058")
		const addressBvIDr4w = accounts[3]
		const addresskFnhp57 = accounts[1]
		const uintrIe7gmd = BigInt("540")
		const addressHk4sInn = accounts[1]
		const uintNJzXMcN = BigInt("1872")
		const addresszJGVz65 = accounts[0]
		const boolv0pLE0U = await LIBERAPAYJqHIPJZ.acceptOwnership.call({from: accounts[1]});
		const boolrCrmG3y = await LIBERAPAYJqHIPJZ.mint.call(addressBvIDr4w, uintSlLjmp, {from: accounts[0]});
		const uint256bnMnUZZ = await LIBERAPAYJqHIPJZ.totalSupply.call({from: accounts[3]});
		const boolSf5lzUb = await LIBERAPAYJqHIPJZ.freezeAccount.call(addresskFnhp57, {from: accounts[1]});
		const boolLfrsRU8 = await LIBERAPAYJqHIPJZ.burnFrom.call(addressHk4sInn, uintrIe7gmd, {from: accounts[2]});
		const boolU1zI87R = await LIBERAPAYJqHIPJZ.decreaseAllowance.call(addresszJGVz65, uintNJzXMcN, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressCshwLn = accounts[3]
		const addressPx21Kjn = accounts[0]
		const addressPbNMPaC = accounts[1]
		const addressVRHK0Ed = accounts[1]
		const addresskiDNIWp = accounts[2]
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressPx21Kjn, addressCshwLn, {from: accounts[3]});
		const uint256IbFb73P = await LIBERAPAYbx7EAD.allowance.call(addressVRHK0Ed, addressPbNMPaC, {from: accounts[5]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addresskiDNIWp, {from: accounts[2]});

		assert.equal(uint256Az1s4OC, BigInt("0"))
		assert.equal(uint256DJ6kQeD, BigInt("0"))
		assert.equal(uint256IbFb73P, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYk4KypK = await LIBERAPAY.new({from: accounts[1]});
		const addresscIWVvya = "0x0000000000000000000000000000000000000001"
		const uintMo1FHnI = BigInt("1761")
		const addressGNIhfzI = accounts[2]
		const uint256IUW7Ai = await LIBERAPAYYk4KypK.totalSupply.call({from: accounts[0]});
		const uint256KGgjKEm = await LIBERAPAYYk4KypK.getNowTime.call({from: accounts[2]});
//		await LIBERAPAYYk4KypK.whenNotPaused.call({from: accounts[5]});
//		const boolESlvqbP = await LIBERAPAYYk4KypK.unfreezeAccount.call(addresscIWVvya, {from: accounts[2]});
//		await LIBERAPAYYk4KypK.f.call({from: accounts[3]});
//		const boolfnoJXNk = await LIBERAPAYYk4KypK.decreaseAllowance.call(addressGNIhfzI, uintMo1FHnI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IUW7Ai, BigInt("3000000000000000000000000000"))
		assert.equal(uint256KGgjKEm, BigInt("1630231331"))
		await expect(LIBERAPAYYk4KypK.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const addressryV5Cd3 = accounts[4]
		const uinta3BdsHP = BigInt("873")
		const addressmGGf7J = accounts[2]
		const uintL7lP28B = BigInt("1771")
		const addressosIZC4E = accounts[4]
		const uintbnBgPMi = BigInt("1689")
		const addressHHAwk4K = accounts[0]
		const uintAp7AtAT = BigInt("941")
		const uint256HzEWh9c = await LIBERAPAYGOKV35M.getNowTime.call({from: accounts[4]});
		const uint256AHQdfaF = await LIBERAPAYGOKV35M.currentBalanceOf.call(addressryV5Cd3, {from: accounts[2]});
		const boolc8TyxQ8 = await LIBERAPAYGOKV35M.distribute.call(addressmGGf7J, uinta3BdsHP, {from: accounts[2]});
//		await LIBERAPAYGOKV35M.showLockState.call(addressosIZC4E, uintL7lP28B, {from: accounts[2]});
//		const boolQV81Se3 = await LIBERAPAYGOKV35M.approve.call(addressHHAwk4K, uintbnBgPMi, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBOrjyyt = await LIBERAPAYGOKV35M.burn.call(uintAp7AtAT, {from: accounts[1]});

		assert.equal(boolc8TyxQ8, true)
		assert.equal(uint256AHQdfaF, BigInt("0"))
		assert.equal(uint256HzEWh9c, BigInt("1630231319"))
		await expect(LIBERAPAYGOKV35M.showLockState.call(addressosIZC4E, uintL7lP28B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNM9nA1 = await LIBERAPAY.new({from: accounts[2]});
		const uintcp66WW = BigInt("441")
		const addressXEwUwDX = accounts[2]
		const addressUy6Zji = accounts[4]
		const uintXZpF6R = BigInt("1846")
		const addresspmJ1cav = accounts[3]
//		const booloJEPpk6 = await LIBERAPAYNM9nA1.transferFrom.call(addressUy6Zji, addressXEwUwDX, uintcp66WW, {from: accounts[3]});
//		const booliPZQt7o = await LIBERAPAYNM9nA1.distribute.call(addresspmJ1cav, uintXZpF6R, {from: accounts[2]});

		await expect(LIBERAPAYNM9nA1.transferFrom.call(addressUy6Zji, addressXEwUwDX, uintcp66WW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressqP6myl2 = accounts[2]
		const uintUrAV2kD = BigInt("1525")
		const addressSGDCRGT = "0x0000000000000000000000000000000000000001"
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressqP6myl2, {from: accounts[2]});
//		const boolB12C9QY = await LIBERAPAYbx7EAD.decreaseAllowance.call(addressSGDCRGT, uintUrAV2kD, {from: accounts[2]});

		assert.equal(uint256DJ6kQeD, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.decreaseAllowance.call(addressSGDCRGT, uintUrAV2kD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const addressqWpPRRg = accounts[4]
		const uintOynRM8h = BigInt("873")
		const addressOYaTnq = accounts[2]
		const addressnQfn3CS = accounts[3]
		const uintTU8U8bU = BigInt("1771")
		const addresspBYlckN = accounts[4]
		const uintPf83E2l = BigInt("1689")
		const addressriIKQwt = accounts[0]
		const uintNosffJp = BigInt("941")
		const uint256HzEWh9c = await LIBERAPAYGOKV35M.getNowTime.call({from: accounts[4]});
		const uint256AHQdfaF = await LIBERAPAYGOKV35M.currentBalanceOf.call(addressqWpPRRg, {from: accounts[2]});
		const boolc8TyxQ8 = await LIBERAPAYGOKV35M.distribute.call(addressOYaTnq, uintOynRM8h, {from: accounts[2]});
		const boolGcVCOHw = await LIBERAPAYGOKV35M.freezeAccount.call(addressnQfn3CS, {from: accounts[2]});
//		await LIBERAPAYGOKV35M.showLockState.call(addresspBYlckN, uintTU8U8bU, {from: accounts[2]});
//		const boolQV81Se3 = await LIBERAPAYGOKV35M.approve.call(addressriIKQwt, uintPf83E2l, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBOrjyyt = await LIBERAPAYGOKV35M.burn.call(uintNosffJp, {from: accounts[1]});

		assert.equal(boolGcVCOHw, true)
		assert.equal(boolc8TyxQ8, true)
		assert.equal(uint256AHQdfaF, BigInt("0"))
		assert.equal(uint256HzEWh9c, BigInt("1630231324"))
		await expect(LIBERAPAYGOKV35M.showLockState.call(addresspBYlckN, uintTU8U8bU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1OPqgx = await LIBERAPAY.new({from: accounts[2]});
		const uintmdiGqTX = BigInt("893")
		const addressLyrbG2G = accounts[1]
		const addressqGQOnwH = accounts[1]
		const uintT3HfTOL = BigInt("1714")
//		const boolkjvmD8B = await LIBERAPAY1OPqgx.burnFrom.call(addressLyrbG2G, uintmdiGqTX, {from: accounts[4]});
//		const addressm7Dh93B = await LIBERAPAY1OPqgx.notFrozen.call(addressqGQOnwH, {from: accounts[2]});
//		const boolrjj4WPh = await LIBERAPAY1OPqgx.burn.call(uintT3HfTOL, {from: accounts[2]});

		await expect(LIBERAPAY1OPqgx.burnFrom.call(addressLyrbG2G, uintmdiGqTX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressu3XBjHW = accounts[3]
		const addressB67xuQ3 = accounts[1]
		const addressjmVA52l = accounts[2]
		const addressAvvEvZ = accounts[4]
		const addresstAwP1zG = accounts[1]
		const addressiibVHQP = accounts[3]
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressB67xuQ3, addressu3XBjHW, {from: accounts[3]});
		const boolnJy2I2E = await LIBERAPAYbx7EAD.freezeAccount.call(addressjmVA52l, {from: accounts[4]});
		const addressDj5Ipvo = await LIBERAPAYbx7EAD.upgradeTo.call(addressAvvEvZ, {from: accounts[4]});
//		const addressEcj7Nzk = await LIBERAPAYbx7EAD.notFrozen.call(addresstAwP1zG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressiibVHQP, {from: accounts[2]});

		assert.equal(boolnJy2I2E, true)
		assert.equal(uint256Az1s4OC, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.notFrozen.call(addresstAwP1zG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uinteg22WTx = BigInt("873")
		const addresszsLSGp = accounts[2]
		const uintHjrD3fE = BigInt("1782")
		const addressICX2nZ = accounts[1]
		const uintQwnOY9V = BigInt("1689")
		const address5SenFC = accounts[0]
		const uintMQhKLYA = BigInt("941")
		const uint256HzEWh9c = await LIBERAPAYGOKV35M.getNowTime.call({from: accounts[4]});
		const boolc8TyxQ8 = await LIBERAPAYGOKV35M.distribute.call(addresszsLSGp, uinteg22WTx, {from: accounts[2]});
//		await LIBERAPAYGOKV35M.pause.call({from: accounts[2]});
//		await LIBERAPAYGOKV35M.whenNotPaused.call({from: accounts[4]});
//		await LIBERAPAYGOKV35M.showLockState.call(addressICX2nZ, uintHjrD3fE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQV81Se3 = await LIBERAPAYGOKV35M.approve.call(address5SenFC, uintQwnOY9V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBOrjyyt = await LIBERAPAYGOKV35M.burn.call(uintMQhKLYA, {from: accounts[1]});

		assert.equal(boolc8TyxQ8, true)
		assert.equal(uint256HzEWh9c, BigInt("1630231325"))
		await expect(LIBERAPAYGOKV35M.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addresslD43SEk = accounts[3]
		const addressan4sBxK = accounts[2]
		const addressSAV85dU = accounts[0]
		const uintoogqL9q = BigInt("449")
		const addressjIE6rn = accounts[2]
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressan4sBxK, addresslD43SEk, {from: accounts[3]});
		const uint256d1QGlOt = await LIBERAPAYbx7EAD.currentBalanceOf.call(addressSAV85dU, {from: accounts[1]});
		const boolKwMsSSq = await LIBERAPAYbx7EAD.increaseAllowance.call(addressjIE6rn, uintoogqL9q, {from: accounts[2]});
//		await LIBERAPAYbx7EAD.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolKwMsSSq, true)
		assert.equal(uint256Az1s4OC, BigInt("0"))
		assert.equal(uint256d1QGlOt, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressHsKePRV = accounts[4]
//		await LIBERAPAYbx7EAD.f.call({from: accounts[5]});
//		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressHsKePRV, {from: accounts[2]});

		await expect(LIBERAPAYbx7EAD.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const uintY7BBORC = BigInt("1673")
		const addressHJwkx9E = accounts[2]
		const addressIjYnUOP = accounts[4]
		const uintpgAQ9cf = BigInt("1343")
		const uintXQJ1YKz = BigInt("908")
		const addressO8nKtWE = accounts[2]
		const boolNOkDGj = await LIBERAPAYbx7EAD.increaseAllowance.call(addressHJwkx9E, uintY7BBORC, {from: accounts[0]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressIjYnUOP, {from: accounts[2]});
//		const boolYh1wyLF = await LIBERAPAYbx7EAD.lock.call(addressO8nKtWE, uintXQJ1YKz, uintpgAQ9cf, {from: accounts[4]});
//		await LIBERAPAYbx7EAD.pause.call({from: accounts[4]});

		assert.equal(boolNOkDGj, true)
		assert.equal(uint256DJ6kQeD, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYbx7EAD.lock.call(addressO8nKtWE, uintXQJ1YKz, uintpgAQ9cf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uintEfVk8E5 = BigInt("823")
		const addressT4c1Hm2 = accounts[1]
		const uintC1ooHm = BigInt("1836")
		const addresssoza8AG = accounts[4]
		const boolMaQrKBN = await LIBERAPAYGOKV35M.transfer.call(addressT4c1Hm2, uintEfVk8E5, {from: accounts[2]});
//		const boolkqfwp65 = await LIBERAPAYGOKV35M.transfer.call(addresssoza8AG, uintC1ooHm, {from: accounts[3]});

		assert.equal(boolMaQrKBN, true)
		await expect(LIBERAPAYGOKV35M.transfer.call(addresssoza8AG, uintC1ooHm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressQ4t0kHx = "0x0000000000000000000000000000000000000001"
		const addresshcYusiE = "0x0000000000000000000000000000000000000001"
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressQ4t0kHx, {from: accounts[2]});
		const addressv0Ga0sr = await LIBERAPAYbx7EAD.transferOwnership.call(addresshcYusiE, {from: accounts[4]});

		assert.equal(uint256DJ6kQeD, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uintErMGcIh = BigInt("1665")
		const addressScTgCb = accounts[1]
		const uinttICquP8 = BigInt("982")
//		await LIBERAPAYGOKV35M.showLockState.call(addressScTgCb, uintErMGcIh, {from: accounts[1]});
//		const boolnR4SW3H = await LIBERAPAYGOKV35M.burn.call(uinttICquP8, {from: accounts[2]});

		await expect(LIBERAPAYGOKV35M.showLockState.call(addressScTgCb, uintErMGcIh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const uintZCex9qn = BigInt("2032")
		const addressSKYDPVh = "0x0000000000000000000000000000000000000001"
		const addressXeyr9wN = accounts[4]
		const uint256rbHtjxG = await LIBERAPAYbx7EAD.getNowTime.call({from: accounts[3]});
//		const boolXuJlmes = await LIBERAPAYbx7EAD.transferFrom.call(addressXeyr9wN, addressSKYDPVh, uintZCex9qn, {from: accounts[3]});

		assert.equal(uint256rbHtjxG, BigInt("1630231321"))
		await expect(LIBERAPAYbx7EAD.transferFrom.call(addressXeyr9wN, addressSKYDPVh, uintZCex9qn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressxWww696 = accounts[0]
		const uintF5qz4zF = BigInt("1702")
		const addressujbqoeM = accounts[1]
		const uint256d1QGlOt = await LIBERAPAYbx7EAD.currentBalanceOf.call(addressxWww696, {from: accounts[1]});
//		const boolfXiF2AC = await LIBERAPAYbx7EAD.mint.call(addressujbqoeM, uintF5qz4zF, {from: accounts[4]});

		assert.equal(uint256d1QGlOt, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.mint.call(addressujbqoeM, uintF5qz4zF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uintLdiVISS = BigInt("1996")
		const addressiBsvZxL = accounts[2]
		const uintUbj5QvZ = BigInt("599")
		const addressVmG0VoM = accounts[0]
		const addressQPgu2km = accounts[5]
//		await LIBERAPAYGOKV35M.showLockState.call(addressiBsvZxL, uintLdiVISS, {from: accounts[1]});
//		const boolDHdbXt = await LIBERAPAYGOKV35M.unlock.call(addressVmG0VoM, uintUbj5QvZ, {from: accounts[2]});
//		const addressESZuhzc = await LIBERAPAYGOKV35M.notFrozen.call(addressQPgu2km, {from: accounts[5]});

		await expect(LIBERAPAYGOKV35M.showLockState.call(addressiBsvZxL, uintLdiVISS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressZZS1sNR = accounts[1]
		const addressj1IO5cw = accounts[3]
		const addressCye15BV = accounts[1]
//		const boolSSWZ7gS = await LIBERAPAYbx7EAD.unfreezeAccount.call(addressZZS1sNR, {from: accounts[4]});
//		await LIBERAPAYbx7EAD.onlyNewOwner.call({from: accounts[4]});
//		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressCye15BV, addressj1IO5cw, {from: accounts[3]});

		await expect(LIBERAPAYbx7EAD.unfreezeAccount.call(addressZZS1sNR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
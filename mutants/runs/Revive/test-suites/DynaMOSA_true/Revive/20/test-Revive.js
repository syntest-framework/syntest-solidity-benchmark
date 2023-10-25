const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const Reviveae1apMU = await Revive.new({from: accounts[3]});
		const uintPWIXve = BigInt("78")
		const addresstKAdOOx = accounts[2]
		await Reviveae1apMU.onlyOwner.call({from: accounts[3]});
		await Reviveae1apMU.renounceOwnership.call({from: accounts[5]});
		const boolj6dxf2r = await Reviveae1apMU.approve.call(addresstKAdOOx, uintPWIXve, {from: accounts[2]});

		await expect(Reviveae1apMU.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh1E8pic = await Revive.new({from: accounts[0]});
		const uintjGT5luz = BigInt("1157")
		const addresslUXuZKb = accounts[4]
		const addressR8Jb0wq = accounts[3]
		const addressrJm58xW = accounts[1]
		const boolKbOVJf3 = await Reviveh1E8pic.decreaseAllowance.call(addresslUXuZKb, uintjGT5luz, {from: accounts[0]});
		await Reviveh1E8pic.onlyOwner.call({from: accounts[4]});
		const uint256cRd6rRJ = await Reviveh1E8pic.totalSupply.call({from: accounts[2]});
		const uint256AYeGvi7 = await Reviveh1E8pic.getUnlockableTokens.call(addressR8Jb0wq, {from: accounts[4]});
		const uint256udUqd28 = await Reviveh1E8pic.unlock.call(addressrJm58xW, {from: accounts[1]});
		await Reviveh1E8pic.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Reviveh1E8pic.decreaseAllowance.call(addresslUXuZKb, uintjGT5luz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCY67wUX = await Revive.new({from: accounts[4]});
		const uinthSW4nMk = BigInt("48")
		const byteNSw111U = "0x0904121804101711181518081312181d08111b080f07170611151f0b1d0d170d"
		const uintUpDD4t8 = BigInt("464")
		const addressaddXe7l = accounts[4]
		const uintNkBKpNp = BigInt("1287")
		const addressesyoJWC = accounts[0]
		const uintYFDpYht = BigInt("847")
		const addresss8svdUI = accounts[2]
		const addresscs2tAX5 = accounts[2]
		const boolk8RVJc9 = await ReviveCY67wUX.increaseLockAmount.call(byteNSw111U, uinthSW4nMk, {from: accounts[1]});
		const boolEuAS14 = await ReviveCY67wUX.decreaseAllowance.call(addressaddXe7l, uintUpDD4t8, {from: accounts[3]});
		const addressWw48ho9 = await ReviveCY67wUX.recoverERC20.call(addressesyoJWC, uintNkBKpNp, {from: accounts[4]});
		const boolwPtPjhE = await ReviveCY67wUX.transferFrom.call(addresscs2tAX5, addresss8svdUI, uintYFDpYht, {from: accounts[1]});
		await ReviveCY67wUX.renounceOwnership.call({from: accounts[4]});

		await expect(ReviveCY67wUX.increaseLockAmount.call(byteNSw111U, uinthSW4nMk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived6pXyxK = await Revive.new({from: accounts[0]});
		const addressOeEjnU3 = accounts[5]
		const addresskqlz15V = accounts[5]
		const byteUmEO5Vh = "0x031d070b1b071f131d0e020e1d0706131e15111d121a1c1416021a151f031412"
		const addressqVuVTOI = accounts[4]
		const uintDcWI9nK = BigInt("264")
		const uintzop8lfX = BigInt("286")
		const byteddrmsUK = "0x080c130f08100619121110060a05020e10031f0419031a0d2002050d0502010a"
		const addressP3UqHqy = accounts[2]
		const addresshz73fz4 = await Revived6pXyxK.transferOwnership.call(addressOeEjnU3, {from: accounts[3]});
		await Revived6pXyxK.renounceOwnership.call({from: accounts[3]});
		const boolOa0KD7f = await Revived6pXyxK.isOwner.call({from: accounts[4]});
		const addressRrHLwlN = await Revived6pXyxK.transferOwnership.call(addresskqlz15V, {from: accounts[3]});
		const uint256VLineY = await Revived6pXyxK.tokensLocked.call(addressqVuVTOI, byteUmEO5Vh, {from: accounts[4]});
		const boolN1zIX7z = await Revived6pXyxK.transferWithLock.call(addressP3UqHqy, byteddrmsUK, uintzop8lfX, uintDcWI9nK, {from: accounts[4]});

		await expect(Revived6pXyxK.transferOwnership.call(addressOeEjnU3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const addressABDRH0l = accounts[3]
		const uintkpnsNkL = BigInt("151")
		const addressdLPlgr7 = accounts[2]
		const addressUS3Mbry = accounts[2]
		const addressSboBDep = accounts[4]
		const addresslFxNfls = accounts[0]
		const addresswzE9tyO = "0x0000000000000000000000000000000000000001"
		const addressiMwkV8e = await Revivet6kSg5u.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fhBrqEQ = await Revivet6kSg5u.totalBalanceOf.call(addressABDRH0l, {from: accounts[2]});
		const boolqTiZoYp = await Revivet6kSg5u.transferFrom.call(addressUS3Mbry, addressdLPlgr7, uintkpnsNkL, {from: accounts[3]});
		const uint256cm6TxQ = await Revivet6kSg5u.allowance.call(addresslFxNfls, addressSboBDep, {from: accounts[3]});
		const uint256pdBGUZ1 = await Revivet6kSg5u.getUnlockableTokens.call(addresswzE9tyO, {from: accounts[2]});

		assert.equal(addressiMwkV8e, 0xC2e9677d80AFc0871ACa9f5219c088C4b50f2645)
		assert.equal(uint256fhBrqEQ, BigInt("0"))
		await expect(Revivet6kSg5u.transferFrom.call(addressUS3Mbry, addressdLPlgr7, uintkpnsNkL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenBZF2Pr = await Revive.new({from: accounts[1]});
		const addressGkCqsEk = accounts[1]
		const addressnCEBVb8 = accounts[1]
		const addressBF0UVx = accounts[2]
		const uint256VF0KkY4 = await RevivenBZF2Pr.getUnlockableTokens.call(addressGkCqsEk, {from: accounts[2]});
		const uint256i7FGqDm = await RevivenBZF2Pr.allowance.call(addressBF0UVx, addressnCEBVb8, {from: accounts[5]});
		const uint256zWZqpEN = await RevivenBZF2Pr.totalSupply.call({from: accounts[2]});
		const uint256pW0FMNv = await RevivenBZF2Pr.totalSupply.call({from: accounts[0]});

		assert.equal(uint256VF0KkY4, BigInt("0"))
		assert.equal(uint256i7FGqDm, BigInt("0"))
		assert.equal(uint256pW0FMNv, BigInt("3000000000000000000000000000"))
		assert.equal(uint256zWZqpEN, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintTXTTHd = BigInt("1201")
		const uintOYFeNG = BigInt("564")
		const bytefkeFgQk = "0x0c110a09170203051b07181b140b0420111f020b0a05120f180a10100c1c0912"
		const uintgOvZHzN = BigInt("790")
		const bytepSVWSNn = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05001f08"
		const boolnUkivq = await ReviveC6pk86v.lock.call(bytefkeFgQk, uintOYFeNG, uintTXTTHd, {from: accounts[3]});
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(bytepSVWSNn, uintgOvZHzN, {from: accounts[4]});

		await expect(ReviveC6pk86v.lock.call(bytefkeFgQk, uintOYFeNG, uintTXTTHd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenBZF2Pr = await Revive.new({from: accounts[1]});
		const addressaU958FJ = accounts[2]
		const bytewuCGlJx = "0x061506100c02010c0c1c16080308101315030f1316181e111d08130615101202"
		const addressmACYj8t = accounts[5]
		const addressVYnMk1E = accounts[1]
		const addressacBeJaW = accounts[2]
		const bytetKjNPRd = "0x1f1e0e17141a1c14051a141e07040a13181b05191d201a0702151f1507030920"
		const addresst3yopCA = "0x0000000000000000000000000000000000000001"
		const uint256VF0KkY4 = await RevivenBZF2Pr.getUnlockableTokens.call(addressaU958FJ, {from: accounts[2]});
		const uint256VT0bq0d = await RevivenBZF2Pr.tokensUnlockable.call(addressmACYj8t, bytewuCGlJx, {from: accounts[1]});
		const uint256i7FGqDm = await RevivenBZF2Pr.allowance.call(addressacBeJaW, addressVYnMk1E, {from: accounts[5]});
		const uint256KHmeJA = await RevivenBZF2Pr.tokensUnlockable.call(addresst3yopCA, bytetKjNPRd, {from: accounts[3]});
		const uint256zWZqpEN = await RevivenBZF2Pr.totalSupply.call({from: accounts[2]});
		const uint256pW0FMNv = await RevivenBZF2Pr.totalSupply.call({from: accounts[0]});

		assert.equal(uint256KHmeJA, BigInt("0"))
		assert.equal(uint256VF0KkY4, BigInt("0"))
		assert.equal(uint256VT0bq0d, BigInt("0"))
		assert.equal(uint256i7FGqDm, BigInt("0"))
		assert.equal(uint256pW0FMNv, BigInt("3000000000000000000000000000"))
		assert.equal(uint256zWZqpEN, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveGsOmmDc = await Revive.new({from: accounts[5]});
		const uintfEdobqc = BigInt("1800")
		const uintVcqqZYU = BigInt("2042")
		const byteEl9ql5H = "0x091e0a0712001e11161c010a0c160a100e1a0e190b13040c0418050e0d0d120b"
		const addressCnrihho = accounts[2]
		const addressGPacbV2 = accounts[0]
		const byteYrIsCTQ = "0x191a111a1416201301061a1015050a1f1a12181b1f0a18020f0a100c1b0a0805"
		const addressWB4RrSi = "0x0000000000000000000000000000000000000001"
		const boolBhcrZmy = await ReviveGsOmmDc.transferWithLock.call(addressCnrihho, byteEl9ql5H, uintVcqqZYU, uintfEdobqc, {from: accounts[0]});
		const uint256fTH5WeY = await ReviveGsOmmDc.balanceOf.call(addressGPacbV2, {from: accounts[4]});
		const uint256gaX8H2E = await ReviveGsOmmDc.tokensLocked.call(addressWB4RrSi, byteYrIsCTQ, {from: accounts[3]});

		await expect(ReviveGsOmmDc.transferWithLock.call(addressCnrihho, byteEl9ql5H, uintVcqqZYU, uintfEdobqc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const uintb6Yjp6W = BigInt("58")
		const byteyxeuvvZ = "0x190d0b080b08011b0e19020e09020f0e051714151707120c0f170b051c1a0c10"
		const addressrE36iz9 = accounts[3]
		const uinta1k3NU = BigInt("151")
		const addressr3uMMK7 = accounts[2]
		const address6ypYLw = accounts[2]
		const uintp5jyLEz = BigInt("569")
		const addressvEqr5Me = accounts[0]
		const addressugU5G0 = accounts[4]
		const addressECRy3bh = accounts[0]
		const addressVztme1t = "0x0000000000000000000000000000000000000002"
		const addressiMwkV8e = await Revivet6kSg5u.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const bool4G99Q2 = await Revivet6kSg5u.extendLock.call(byteyxeuvvZ, uintb6Yjp6W, {from: accounts[1]});
		const uint256fhBrqEQ = await Revivet6kSg5u.totalBalanceOf.call(addressrE36iz9, {from: accounts[2]});
		const boolqTiZoYp = await Revivet6kSg5u.transferFrom.call(address6ypYLw, addressr3uMMK7, uinta1k3NU, {from: accounts[3]});
		const boolo9ahy9t = await Revivet6kSg5u.increaseAllowance.call(addressvEqr5Me, uintp5jyLEz, {from: accounts[4]});
		const uint256cm6TxQ = await Revivet6kSg5u.allowance.call(addressECRy3bh, addressugU5G0, {from: accounts[3]});
		const uint256pdBGUZ1 = await Revivet6kSg5u.getUnlockableTokens.call(addressVztme1t, {from: accounts[2]});

		assert.equal(addressiMwkV8e, 0xC2e9677d80AFc0871ACa9f5219c088C4b50f2645)
		await expect(Revivet6kSg5u.extendLock.call(byteyxeuvvZ, uintb6Yjp6W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivevalhiww = await Revive.new({from: accounts[3]});
		const uintHQurl8i = BigInt("269")
		const addressGSl4R5s = accounts[3]
		const uintWn0n1ES = BigInt("1065")
		const addressJuQCcOj = accounts[0]
		const uintuF2kCiI = BigInt("1906")
		const addressOztNyeK = accounts[4]
		const boolTxs11xA = await Revivevalhiww.approve.call(addressGSl4R5s, uintHQurl8i, {from: accounts[4]});
		const bools7aPWDt = await Revivevalhiww.decreaseAllowance.call(addressJuQCcOj, uintWn0n1ES, {from: accounts[4]});
		const boolep5DcZ7 = await Revivevalhiww.transfer.call(addressOztNyeK, uintuF2kCiI, {from: accounts[4]});

		assert.equal(boolTxs11xA, true)
		await expect(Revivevalhiww.decreaseAllowance.call(addressJuQCcOj, uintWn0n1ES, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintvXCH5hE = BigInt("1821")
		const addressYVomAd = accounts[5]
		const uintzEze4v = BigInt("1201")
		const uintOgJgoXA = BigInt("564")
		const byteKkzTlUQ = "0x0c0c0a09170203051b07181b140b0420111f020b0a05120f180a10100c1c0912"
		const boolUBiMu5 = await ReviveC6pk86v.increaseAllowance.call(addressYVomAd, uintvXCH5hE, {from: accounts[2]});
		const boolnUkivq = await ReviveC6pk86v.lock.call(byteKkzTlUQ, uintOgJgoXA, uintzEze4v, {from: accounts[3]});

		assert.equal(boolUBiMu5, true)
		await expect(ReviveC6pk86v.lock.call(byteKkzTlUQ, uintOgJgoXA, uintzEze4v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivehb8dp0M = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLvy4dak = BigInt("1422")
		const addressVa2SIqT = accounts[3]
		const uintdZuKCeo = BigInt("245")
		const byteCIMpYV8 = "0x090b140b0b030d061a151b1d17040f0c04121a1b17060c060b0902141f171d16"
		const addresswOeBiAK = await Revivehb8dp0M.recoverERC20.call(addressVa2SIqT, uintLvy4dak, {from: accounts[1]});
		const boolV5Tz5A0 = await Revivehb8dp0M.extendLock.call(byteCIMpYV8, uintdZuKCeo, {from: accounts[0]});
		const boolZOYk2pK = await Revivehb8dp0M.isOwner.call({from: accounts[1]});
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const addressaCVhZ9W = accounts[5]
		const addressHhBAhtm = accounts[2]
		const uintP9wFhtG = BigInt("855")
		const addresshI68UN = accounts[2]
		const bytefykI5AO = "0x1a031a171b0d040c200e050c0600190b17150f041b03151f1620010705121a01"
		const addresscSv0A6X = "0x0000000000000000000000000000000000000001"
		const uint256ZiJhw4t = await Revivet6kSg5u.allowance.call(addressHhBAhtm, addressaCVhZ9W, {from: accounts[0]});
		const addresssNcevZD = await Revivet6kSg5u.recoverERC20.call(addresshI68UN, uintP9wFhtG, {from: accounts[2]});
		const uint256Y5mw9Qr = await Revivet6kSg5u.tokensUnlockable.call(addresscSv0A6X, bytefykI5AO, {from: accounts[2]});

		assert.equal(uint256ZiJhw4t, BigInt("0"))
		await expect(Revivet6kSg5u.recoverERC20.call(addresshI68UN, uintP9wFhtG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uinttAeZm2 = BigInt("1910")
		const addressYqQiOIV = accounts[1]
		const uintGsQMkzQ = BigInt("1802")
		const byteRqlNY9 = "0x1a1e1516021816080c121f180e1e0d14020900170c0619141d0e07000f130906"
		const addressPk51Lj = accounts[1]
		const byteYA9UAx1 = "0x170a051b121f0a150014111d1e060012111b0c161f080714071a0b1617051311"
		const addressIJk1frw = accounts[0]
		const uintww5X0J9 = BigInt("761")
		const bytePCBYgR = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05001f08"
		const boolAwHn47g = await ReviveC6pk86v.transfer.call(addressYqQiOIV, uinttAeZm2, {from: accounts[0]});
		const uint256B693gO = await ReviveC6pk86v.tokensLockedAtTime.call(addressPk51Lj, byteRqlNY9, uintGsQMkzQ, {from: accounts[1]});
		const uint256FJXHhwI = await ReviveC6pk86v.tokensLocked.call(addressIJk1frw, byteYA9UAx1, {from: accounts[0]});
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(bytePCBYgR, uintww5X0J9, {from: accounts[4]});

		assert.equal(boolAwHn47g, true)
		assert.equal(uint256B693gO, BigInt("0"))
		assert.equal(uint256FJXHhwI, BigInt("0"))
		await expect(ReviveC6pk86v.increaseLockAmount.call(bytePCBYgR, uintww5X0J9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintSjvIcha = BigInt("1910")
		const address131Dhj = accounts[1]
		const uintloeDKrk = BigInt("1802")
		const bytexiDmZhH = "0x1a1e1516021816080c121f180e1e0d14020900170c061a141d0e07000f130906"
		const addressr48zyL = accounts[1]
		const bytef2YYjkM = "0x170a051b121f0a150014111d1e060012111b0c161f080714071a0b1617051311"
		const addresslmtNQM9 = accounts[0]
		const addresseoOyFJ = accounts[0]
		const uint6VDtJV = BigInt("761")
		const bytegNJqpp = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05001f08"
		const boolAwHn47g = await ReviveC6pk86v.transfer.call(address131Dhj, uintSjvIcha, {from: accounts[0]});
		const uint256B693gO = await ReviveC6pk86v.tokensLockedAtTime.call(addressr48zyL, bytexiDmZhH, uintloeDKrk, {from: accounts[1]});
		const uint256FJXHhwI = await ReviveC6pk86v.tokensLocked.call(addresslmtNQM9, bytef2YYjkM, {from: accounts[0]});
		const addressct9QWe0 = await ReviveC6pk86v.transferOwnership.call(addresseoOyFJ, {from: accounts[0]});
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(bytegNJqpp, uint6VDtJV, {from: accounts[4]});

		assert.equal(boolAwHn47g, true)
		assert.equal(uint256B693gO, BigInt("0"))
		assert.equal(uint256FJXHhwI, BigInt("0"))
		await expect(ReviveC6pk86v.increaseLockAmount.call(bytegNJqpp, uint6VDtJV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver2DmpZ = await Revive.new({from: accounts[2]});
		const addressPyDg1rf = accounts[1]
		const uinteBIJmtd = BigInt("512")
		const uintKKGuziP = BigInt("1376")
		const byteCfawxo0 = "0x12021217201f17020a0102041907080b11130c1c1f021d0e12051f19141f1d0a"
		const uint256xG3fDgn = await Reviver2DmpZ.balanceOf.call(addressPyDg1rf, {from: accounts[4]});
		await Reviver2DmpZ.renounceOwnership.call({from: accounts[2]});
		await Reviver2DmpZ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrebsEkz = await Reviver2DmpZ.lock.call(byteCfawxo0, uintKKGuziP, uinteBIJmtd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256xG3fDgn, BigInt("0"))
		await expect(Reviver2DmpZ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const addressynobpGa = accounts[5]
		const addressk6q62AI = accounts[5]
		const uint256Mi6tRzI = await Revivet6kSg5u.unlock.call(addressynobpGa, {from: accounts[0]});
		const uint256fhBrqEQ = await Revivet6kSg5u.totalBalanceOf.call(addressk6q62AI, {from: accounts[2]});

		assert.equal(uint256Mi6tRzI, BigInt("0"))
		assert.equal(uint256fhBrqEQ, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintBrgsQTL = BigInt("1910")
		const addressuOWeqgo = accounts[1]
		const uintS0qAmX6 = BigInt("562")
		const addressGIb5w7K = accounts[0]
		const uintgK7Wdfg = BigInt("1802")
		const byteQsRebDm = "0x1a1e1516021816080c121f180e1e0d14020900170c0619141d0e07000f130906"
		const addressi3115iM = accounts[1]
		const byteVCVrCRl = "0x170a051b121f0a150014111d1e060012111b0c161f080714071a0b1617051311"
		const addressmGRqgh0 = accounts[0]
		const uintWaH6iaz = BigInt("2040")
		const uintGkSaSAO = BigInt("761")
		const byteoImkUjT = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05001f08"
		const boolAwHn47g = await ReviveC6pk86v.transfer.call(addressuOWeqgo, uintBrgsQTL, {from: accounts[0]});
		const booleo6WfYp = await ReviveC6pk86v.approve.call(addressGIb5w7K, uintS0qAmX6, {from: accounts[5]});
		const uint256B693gO = await ReviveC6pk86v.tokensLockedAtTime.call(addressi3115iM, byteQsRebDm, uintgK7Wdfg, {from: accounts[1]});
		const uint256FJXHhwI = await ReviveC6pk86v.tokensLocked.call(addressmGRqgh0, byteVCVrCRl, {from: accounts[0]});
		const uint256nGGT7Je = await ReviveC6pk86v.recoverERC20.call(uintWaH6iaz, {from: accounts[1]});
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(byteoImkUjT, uintGkSaSAO, {from: accounts[4]});

		assert.equal(boolAwHn47g, true)
		assert.equal(booleo6WfYp, true)
		assert.equal(uint256B693gO, BigInt("0"))
		assert.equal(uint256FJXHhwI, BigInt("0"))
		await expect(ReviveC6pk86v.recoverERC20.call(uintWaH6iaz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const addressn5Xksig = accounts[6]
		const uintLRvGOO = BigInt("1825")
		const addressf51o626 = accounts[4]
		const uintURLLjBR = BigInt("198")
		const uintDew0kD = BigInt("153")
		const byteZh3r4Bc = "0x02091d1b161e19140908140817191c1f18040f11111f060c14071d0e111d0d1f"
		const uint256Mi6tRzI = await Revivet6kSg5u.unlock.call(addressn5Xksig, {from: accounts[0]});
		const boolHY4qKmV = await Revivet6kSg5u.transfer.call(addressf51o626, uintLRvGOO, {from: accounts[2]});
		const uint256TSgdDI = await Revivet6kSg5u.recoverERC20.call(uintURLLjBR, {from: accounts[3]});
		const booluAU7kE7 = await Revivet6kSg5u.extendLock.call(byteZh3r4Bc, uintDew0kD, {from: accounts[0]});

		assert.equal(boolHY4qKmV, true)
		assert.equal(uint256Mi6tRzI, BigInt("0"))
		await expect(Revivet6kSg5u.recoverERC20.call(uintURLLjBR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDTfQVxn = await Revive.new({from: accounts[3]});
		const addressxBtSknV = accounts[2]
		const uintBl8UZw0 = BigInt("1144")
		const uintjG156bG = BigInt("1877")
		const addressKeLOtZn = accounts[1]
		const uintJVJO0bR = BigInt("653")
		const addresskcaLIyB = accounts[0]
		const uint6A6fMN = BigInt("1825")
		const addresszlkbKtc = accounts[4]
		const uint256vXCBoHq = await ReviveDTfQVxn.unlock.call(addressxBtSknV, {from: accounts[1]});
		const uint256PG2h9UU = await ReviveDTfQVxn.recoverERC20.call(uintBl8UZw0, {from: accounts[1]});
		const addressxzgth1d = await ReviveDTfQVxn.recoverERC20.call(addressKeLOtZn, uintjG156bG, {from: "0x0000000000000000000000000000000000000001"});
		const boolNmf3ex5 = await ReviveDTfQVxn.transfer.call(addresskcaLIyB, uintJVJO0bR, {from: accounts[2]});
		const addressKXqRnfl = await ReviveDTfQVxn.recoverERC20.call(addresszlkbKtc, uint6A6fMN, {from: accounts[1]});

		assert.equal(uint256vXCBoHq, BigInt("0"))
		await expect(ReviveDTfQVxn.recoverERC20.call(uintBl8UZw0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintvXeoTW1 = BigInt("949")
		const byteELZ4hN4 = "0x1e1f1909030a1602031d111b10070c1517180e1702141f0e0f12111b001b150a"
		const addressFzfMhM = accounts[3]
		const uintWCczK9v = BigInt("1385")
		const uinthRPrq25 = BigInt("243")
		const byteD0iv2ci = "0x12100c0b0c0a0314071d0e17071f1502081f0320131802071b0713111b071611"
		const addressPj1RCe = accounts[1]
		const uint256rU7pO6q = await ReviveC6pk86v.recoverERC20.call(uintvXeoTW1, {from: accounts[1]});
		const uint256fNNMZfn = await ReviveC6pk86v.tokensUnlockable.call(addressFzfMhM, byteELZ4hN4, {from: accounts[3]});
		const boolZnlyIV = await ReviveC6pk86v.transferWithLock.call(addressPj1RCe, byteD0iv2ci, uinthRPrq25, uintWCczK9v, {from: accounts[5]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintvXeoTW1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveD9w8wfE = await Revive.new({from: accounts[1]});
		const uintg54f1Uu = BigInt("298")
		const uintYJ3Xcf3 = BigInt("238")
		const byteV5Owy41 = "0x060611121f1e0c0315170b0a10071b0e1d03170b1510060d0112101e020d1e07"
		const uintcPjSI5z = BigInt("1142")
		const addresshgkqc9 = accounts[1]
		const addressV5yhxxq = accounts[2]
		const uintHmtrMI = BigInt("837")
		const uintWAQBOwi = BigInt("68")
		const addresspnHfsER = accounts[2]
		const uint256fHbTM14 = await ReviveD9w8wfE.recoverERC20.call(uintg54f1Uu, {from: accounts[3]});
		const boolLHSTUx = await ReviveD9w8wfE.extendLock.call(byteV5Owy41, uintYJ3Xcf3, {from: accounts[2]});
		const boolMfdi6eD = await ReviveD9w8wfE.transferFrom.call(addressV5yhxxq, addresshgkqc9, uintcPjSI5z, {from: accounts[2]});
		const uint256zG9D7Yr = await ReviveD9w8wfE.recoverERC20.call(uintHmtrMI, {from: accounts[4]});
		const boolXgcu9hL = await ReviveD9w8wfE.transfer.call(addresspnHfsER, uintWAQBOwi, {from: accounts[4]});

		await expect(ReviveD9w8wfE.recoverERC20.call(uintg54f1Uu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const uintTyLVQgQ = BigInt("1102")
		const addressJUb51hj = accounts[5]
		const uint256DGKLuCT = await Revivet6kSg5u.recoverERC20.call(uintTyLVQgQ, {from: accounts[0]});
		const uint256fhBrqEQ = await Revivet6kSg5u.totalBalanceOf.call(addressJUb51hj, {from: accounts[2]});

		await expect(Revivet6kSg5u.recoverERC20.call(uintTyLVQgQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintFnv6XSE = BigInt("625")
		const uintCLg65SR = BigInt("54")
		const byteJGTXWZn = "0x1b070a070c021703040a0c03060e1b17120a041d170c1d181e0a050702191912"
		const addressxBrA5R9 = accounts[2]
		const uint256SwwMJ2 = await ReviveC6pk86v.recoverERC20.call(uintFnv6XSE, {from: accounts[0]});
		const uint256qja2dQ2 = await ReviveC6pk86v.tokensLockedAtTime.call(addressxBrA5R9, byteJGTXWZn, uintCLg65SR, {from: accounts[2]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintFnv6XSE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const addressmJEz26q = accounts[6]
		const uintgAZBh27 = BigInt("1337")
		const addressKo0y8W = accounts[0]
		const uint256Mi6tRzI = await Revivet6kSg5u.unlock.call(addressmJEz26q, {from: accounts[0]});
		const uint256vajUnEA = await Revivet6kSg5u.recoverERC20.call(uintgAZBh27, {from: accounts[0]});
		const uint256D2pO0BW = await Revivet6kSg5u.unlock.call(addressKo0y8W, {from: accounts[4]});

		assert.equal(uint256Mi6tRzI, BigInt("0"))
		await expect(Revivet6kSg5u.recoverERC20.call(uintgAZBh27, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const uintZChHJxf = BigInt("21")
		const addressJK5j5Y = accounts[7]
		const uint256CgNSNS = await Revivet6kSg5u.recoverERC20.call(uintZChHJxf, {from: accounts[2]});
		const uint256Mi6tRzI = await Revivet6kSg5u.unlock.call(addressJK5j5Y, {from: accounts[0]});

		await expect(Revivet6kSg5u.recoverERC20.call(uintZChHJxf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintxUh8eh6 = BigInt("7")
		const byteDIBljRc = "0x1e1b010520011f0215031319050e010d1f131a1c0c1a0e06110d04190f171506"
		const addresszkdLca = accounts[2]
		const uintfee7ekX = BigInt("1357")
		const byteLBnKbi = "0x1414120e181a180d0a1b0d020112071f15131d00131c051207121b1f10150b14"
		const addressflePLFD = accounts[2]
		const uint256qja2dQ2 = await ReviveC6pk86v.tokensLockedAtTime.call(addresszkdLca, byteDIBljRc, uintxUh8eh6, {from: accounts[2]});
		const uint256Cs9gUnv = await ReviveC6pk86v.recoverERC20.call(uintfee7ekX, {from: accounts[0]});
		const uint256o2KOEU = await ReviveC6pk86v.tokensUnlockable.call(addressflePLFD, byteLBnKbi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qja2dQ2, BigInt("0"))
		await expect(ReviveC6pk86v.recoverERC20.call(uintfee7ekX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintpb2L0Mr = BigInt("790")
		const bytes1HohzT = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05ffffffff1f08"
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(bytes1HohzT, uintpb2L0Mr, {from: accounts[4]});

		await expect(ReviveC6pk86v.increaseLockAmount.call(bytes1HohzT, uintpb2L0Mr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintBTRkTgc = BigInt("959")
		const uintkzCE3XW = BigInt("1012")
		const addresstNruOhm = accounts[5]
		const addressuLpQmMJ = "0x0000000000000000000000000000000000000002"
		const uintPdqHubW = BigInt("0")
		const bytemNSsWCr = "0x1e1b010520011f0215031319050e010d1f131a1c0c1a0e06110d04190f171506"
		const addressmJqA5eK = accounts[2]
		const uint256KDtcAUF = await ReviveC6pk86v.recoverERC20.call(uintBTRkTgc, {from: accounts[0]});
		const boolA3m8CCr = await ReviveC6pk86v.approve.call(addresstNruOhm, uintkzCE3XW, {from: accounts[0]});
		const uint256tnWao3z = await ReviveC6pk86v.getUnlockableTokens.call(addressuLpQmMJ, {from: accounts[3]});
		const uint256qja2dQ2 = await ReviveC6pk86v.tokensLockedAtTime.call(addressmJqA5eK, bytemNSsWCr, uintPdqHubW, {from: accounts[2]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintBTRkTgc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegmjOEk5 = await Revive.new({from: accounts[2]});
		const uintTecj0fo = BigInt("429")
		const addressEoniKdf = accounts[1]
		const addressSsTrcsM = accounts[3]
		const uint256TrYSyn = await RevivegmjOEk5.recoverERC20.call(uintTecj0fo, {from: accounts[0]});
		const addressYMBCK4b = await RevivegmjOEk5.transferOwnership.call(addressEoniKdf, {from: accounts[2]});
		const uint256xrdYCY = await RevivegmjOEk5.totalBalanceOf.call(addressSsTrcsM, {from: accounts[3]});

		await expect(RevivegmjOEk5.recoverERC20.call(uintTecj0fo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const uintfUm7g5 = BigInt("899")
		const uintoQ0R8IA = BigInt("1144")
		const addressCtRxvQu = accounts[4]
		const addressaCpJCKh = accounts[1]
		const uint256BuGSz40 = await Revivet6kSg5u.recoverERC20.call(uintfUm7g5, {from: accounts[1]});
		const booln2PkyGa = await Revivet6kSg5u.transferFrom.call(addressaCpJCKh, addressCtRxvQu, uintoQ0R8IA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Revivet6kSg5u.recoverERC20.call(uintfUm7g5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintxXzlGI = BigInt("790")
		const byteLmkNGV = "0x101c100a10120f1505101211081f0b081313040514191a1e1201070f05fffffffe1f08"
		const uintIPVzWP2 = BigInt("200")
		const uintPkO2fpU = BigInt("1420")
		const byteUD8r6er = "0x03011d1c1c091a08011206121914191d11080f1c08190c01041b110e0f190505"
		const addressfEetuFk = accounts[1]
		const uints9U38c5 = BigInt("1244")
		const bytenEONPP = "0x0d14041f0e0b18140d1f01110c1f0307080d1e091b04200b1d05150e1e181f1d"
		const boolVeY5JFO = await ReviveC6pk86v.increaseLockAmount.call(byteLmkNGV, uintxXzlGI, {from: accounts[4]});
		const booldj763jI = await ReviveC6pk86v.lock.call(byteUD8r6er, uintPkO2fpU, uintIPVzWP2, {from: accounts[4]});
		const uint256Nf1aMxj = await ReviveC6pk86v.totalBalanceOf.call(addressfEetuFk, {from: accounts[1]});
		const boolW8DhRhx = await ReviveC6pk86v.extendLock.call(bytenEONPP, uints9U38c5, {from: accounts[2]});

		await expect(ReviveC6pk86v.increaseLockAmount.call(byteLmkNGV, uintxXzlGI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintJIIS9y = BigInt("54")
		const uinthlnPF5O = BigInt("20")
		const addressdtrGtii = "0x0000000000000000000000000000000000000001"
		const addressBqtmfm4 = accounts[0]
		const addressjr59ayO = "0x0000000000000000000000000000000000000002"
		const uintSvXwoIx = BigInt("0")
		const byteEj7tPr = "0x1e1b010520011f0215031319050e010d1f131a1c0c1a0e06110d04190f171506"
		const addressnPJrpU = accounts[2]
		const uint256DhKWj0x = await ReviveC6pk86v.recoverERC20.call(uintJIIS9y, {from: accounts[2]});
		const boolVK5l1D7 = await ReviveC6pk86v.transferFrom.call(addressBqtmfm4, addressdtrGtii, uinthlnPF5O, {from: accounts[2]});
		const uint256tnWao3z = await ReviveC6pk86v.getUnlockableTokens.call(addressjr59ayO, {from: accounts[3]});
		const uint256qja2dQ2 = await ReviveC6pk86v.tokensLockedAtTime.call(addressnPJrpU, byteEj7tPr, uintSvXwoIx, {from: accounts[2]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintJIIS9y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const addressk6J3oWH = accounts[5]
		const uintEqTCP1T = BigInt("750")
		const uint5US4CR = BigInt("0")
		const byteage0Zxr = "0x1e1b010120011f0215031319050e010d1f131a1c0c1a0e06110d04190f171506"
		const addressyA99cWM = accounts[2]
		const uintYnOZOZZ = BigInt("864")
		const addressl7RTxdQ = accounts[2]
		const uintwuBGr5e = BigInt("310")
		const byteSeRA66K = "0x1e1b011b160b0912170312141620101e141f1905140c161f1412151a01040115"
		const uint256kFz9bRq = await ReviveC6pk86v.getUnlockableTokens.call(addressk6J3oWH, {from: accounts[1]});
		const uint256XXjSXey = await ReviveC6pk86v.recoverERC20.call(uintEqTCP1T, {from: accounts[2]});
		const uint256qja2dQ2 = await ReviveC6pk86v.tokensLockedAtTime.call(addressyA99cWM, byteage0Zxr, uint5US4CR, {from: accounts[2]});
		const boolSChqHIe = await ReviveC6pk86v.increaseAllowance.call(addressl7RTxdQ, uintYnOZOZZ, {from: accounts[0]});
		const booloL29CwB = await ReviveC6pk86v.extendLock.call(byteSeRA66K, uintwuBGr5e, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256kFz9bRq, BigInt("0"))
		await expect(ReviveC6pk86v.recoverERC20.call(uintEqTCP1T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintQbE0HtZ = BigInt("440")
		const uintFoF0eA = BigInt("450")
		const addressEEsmbrL = accounts[3]
		const uint256A5mdV1k = await ReviveC6pk86v.recoverERC20.call(uintQbE0HtZ, {from: accounts[1]});
		const booljyOFtRs = await ReviveC6pk86v.approve.call(addressEEsmbrL, uintFoF0eA, {from: accounts[2]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintQbE0HtZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const bytewtslMN2 = "0x0117151e07012014120f10161e14130f160f0f1c03131c131a060e191e161c14"
		const addressqhDhrkt = accounts[4]
		const uintyur8Yn = BigInt("2001")
		const addressJn5Ahnr = accounts[2]
		const uintmsKQRag = BigInt("1201")
		const uintayLg2Lk = BigInt("576")
		const byteoNU6y38 = "0x0c110a09170203051b07181b140b0420111f020b0a05120f180a10100c1c0912"
		const uint256QhZByXd = await ReviveC6pk86v.tokensLocked.call(addressqhDhrkt, bytewtslMN2, {from: accounts[2]});
		const uint256RR5ASki = await ReviveC6pk86v.recoverERC20.call(uintyur8Yn, {from: accounts[2]});
		const uint256nl73sb2 = await ReviveC6pk86v.balanceOf.call(addressJn5Ahnr, {from: accounts[1]});
		const boolnUkivq = await ReviveC6pk86v.lock.call(byteoNU6y38, uintayLg2Lk, uintmsKQRag, {from: accounts[3]});

		assert.equal(uint256QhZByXd, BigInt("0"))
		await expect(ReviveC6pk86v.recoverERC20.call(uintyur8Yn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC6pk86v = await Revive.new({from: accounts[0]});
		const uintf4LReGh = BigInt("1055")
		const uinttr0ZPPm = BigInt("1201")
		const uintT0t0Fi = BigInt("183")
		const byteRW6HKTq = "0x0c110a09170203051b07181b140b0420111f020b0a05120f180a10100c1c0912"
		const uint256aIJ5NEZ = await ReviveC6pk86v.recoverERC20.call(uintf4LReGh, {from: accounts[0]});
		await ReviveC6pk86v.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnUkivq = await ReviveC6pk86v.lock.call(byteRW6HKTq, uintT0t0Fi, uinttr0ZPPm, {from: accounts[3]});

		await expect(ReviveC6pk86v.recoverERC20.call(uintf4LReGh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet6kSg5u = await Revive.new({from: accounts[2]});
		const uintmySJvHG = BigInt("1667")
		const addressz60apSK = accounts[4]
		const uint256ADiP1X6 = await Revivet6kSg5u.recoverERC20.call(uintmySJvHG, {from: accounts[3]});
		const uint256fhBrqEQ = await Revivet6kSg5u.totalBalanceOf.call(addressz60apSK, {from: accounts[2]});

		await expect(Revivet6kSg5u.recoverERC20.call(uintmySJvHG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
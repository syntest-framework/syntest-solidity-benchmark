const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYLNJibqc = await KPLAY.new({from: accounts[2]});
		const uinteXs5u0 = BigInt("192")
		const addressOeLgNpO = accounts[3]
		const uintxeF3jH = BigInt("498")
		const addressvF6BRDW = accounts[5]
		const addressBuiHwqP = accounts[2]
		const uintJzwUk3 = BigInt("1966")
		const addressSruazMT = accounts[0]
//		const boolNao66d = await KPLAYLNJibqc.decreaseAllowance.call(addressOeLgNpO, uinteXs5u0, {from: accounts[0]});
//		const boolyQD2yA8 = await KPLAYLNJibqc.transferFrom.call(addressBuiHwqP, addressvF6BRDW, uintxeF3jH, {from: accounts[1]});
//		await KPLAYLNJibqc.pause.call({from: accounts[4]});
//		const uint256U88NOe = await KPLAYLNJibqc.currentTime.call({from: accounts[5]});
//		const addressuenX5Rv = await KPLAYLNJibqc.burn.call(addressSruazMT, uintJzwUk3, {from: accounts[5]});

		await expect(KPLAYLNJibqc.decreaseAllowance.call(addressOeLgNpO, uinteXs5u0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY6ebi4k = await KPLAY.new({from: accounts[2]});
		const uintJQTHJ0V = BigInt("514")
		const addressETJH1Js = accounts[2]
//		await KPLAY6ebi4k.lockState.call(addressETJH1Js, uintJQTHJ0V, {from: accounts[1]});
//		await KPLAY6ebi4k.whenNotFrozen.call({from: accounts[1]});

		await expect(KPLAY6ebi4k.lockState.call(addressETJH1Js, uintJQTHJ0V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaTk8Lz = await KPLAY.new({from: accounts[0]});
		const uintXGwjcB5 = BigInt("1877")
		const addressgn5nSN = accounts[4]
		const addressecAHNmR = accounts[1]
		const addressildUMzS = "0x0000000000000000000000000000000000000001"
		const uintAgHqdjz = BigInt("442")
		const addressCMFy25p = accounts[5]
		const addressGypsWY = "0x0000000000000000000000000000000000000001"
//		const boolgG1AgrZ = await KPLAYaTk8Lz.transferFrom.call(addressecAHNmR, addressgn5nSN, uintXGwjcB5, {from: accounts[2]});
//		const addressSJfkoT = await KPLAYaTk8Lz.freeze.call(addressildUMzS, {from: accounts[1]});
//		const boolfIkWKhn = await KPLAYaTk8Lz.transfer.call(addressCMFy25p, uintAgHqdjz, {from: accounts[3]});
//		await KPLAYaTk8Lz.onlyOwner.call({from: accounts[2]});
//		const uint256sKoQg2M = await KPLAYaTk8Lz.balanceOf.call(addressGypsWY, {from: accounts[3]});
//		await KPLAYaTk8Lz.renounceOwnership.call({from: accounts[4]});

		await expect(KPLAYaTk8Lz.transferFrom.call(addressecAHNmR, addressgn5nSN, uintXGwjcB5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYQuC3oD = await KPLAY.new({from: accounts[5]});
		const uintt9fNpGP = BigInt("415")
		const uintxgfKsDp = BigInt("506")
		const addressQabnf0 = accounts[2]
		const addressqEbdtAc = "0x0000000000000000000000000000000000000001"
		const addressVuJ9HTJ = accounts[0]
//		const addresskFHTrI = await KPLAYQuC3oD.lock.call(addressQabnf0, uintxgfKsDp, uintt9fNpGP, {from: accounts[4]});
//		await KPLAYQuC3oD.renounceOwnership.call({from: accounts[4]});
//		await KPLAYQuC3oD.onlyOwner.call({from: accounts[0]});
//		const uint256lh24aGi = await KPLAYQuC3oD.allowance.call(addressVuJ9HTJ, addressqEbdtAc, {from: accounts[1]});
//		await KPLAYQuC3oD.whenNotPaused.call({from: accounts[2]});

		await expect(KPLAYQuC3oD.lock.call(addressQabnf0, uintxgfKsDp, uintt9fNpGP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const addressWxBSs39 = accounts[2]
		const uintHqhJTGg = BigInt("1339")
		const addressDc9FMJl = accounts[3]
		const addressQsw2o7r = accounts[3]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressWxBSs39, {from: accounts[3]});
//		await KPLAYI0A2Oba.unpause.call({from: accounts[5]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressQsw2o7r, addressDc9FMJl, uintHqhJTGg, {from: accounts[4]});

		assert.equal(uint256lIfcESJ, BigInt("1630228772"))
		assert.equal(uint256wXlppLI, BigInt("0"))
		await expect(KPLAYI0A2Oba.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYA8O3w5i = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressk2KC9xh = accounts[3]
		const uintq9RqPZu = BigInt("275")
		const addressC7mHV2C = accounts[1]
		const uint256h8I84q = await KPLAYA8O3w5i.currentTime.call({from: accounts[1]});
		const addressLcRMd89 = await KPLAYA8O3w5i.unfreeze.call(addressk2KC9xh, {from: accounts[2]});
		const addressgWieSZ = await KPLAYA8O3w5i.burn.call(addressC7mHV2C, uintq9RqPZu, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAY3ftKaO = await KPLAY.new({from: accounts[1]});
		const addressYV9dgBU = accounts[2]
//		await KPLAY3ftKaO.whenNotPaused.call({from: accounts[4]});
//		const uint256x6bnT49 = await KPLAY3ftKaO.lockCount.call(addressYV9dgBU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAY3ftKaO.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaTk8Lz = await KPLAY.new({from: accounts[0]});
		const addresscbcHDER = accounts[1]
		const uint0aMtZG = BigInt("1877")
		const addressAiGhk7K = accounts[4]
		const addressiBuJlp = accounts[1]
		const addressZ37LLsX = "0x0000000000000000000000000000000000000001"
		const uintpqdSifF = BigInt("442")
		const addressVyYbsuI = accounts[5]
		const uintu2ltWV6 = BigInt("1810")
		const addressw0aTCc1 = accounts[1]
		const addressGHERubC = "0x0000000000000000000000000000000000000001"
		const uint256BSt0o4k = await KPLAYaTk8Lz.lockCount.call(addresscbcHDER, {from: accounts[2]});
//		const boolgG1AgrZ = await KPLAYaTk8Lz.transferFrom.call(addressiBuJlp, addressAiGhk7K, uint0aMtZG, {from: accounts[2]});
//		const addressSJfkoT = await KPLAYaTk8Lz.freeze.call(addressZ37LLsX, {from: accounts[1]});
//		const boolfIkWKhn = await KPLAYaTk8Lz.transfer.call(addressVyYbsuI, uintpqdSifF, {from: accounts[3]});
//		await KPLAYaTk8Lz.onlyOwner.call({from: accounts[2]});
//		await KPLAYaTk8Lz.lockState.call(addressw0aTCc1, uintu2ltWV6, {from: accounts[0]});
//		const uint256sKoQg2M = await KPLAYaTk8Lz.balanceOf.call(addressGHERubC, {from: accounts[3]});
//		await KPLAYaTk8Lz.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256BSt0o4k, BigInt("0"))
		await expect(KPLAYaTk8Lz.transferFrom.call(addressiBuJlp, addressAiGhk7K, uint0aMtZG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI1AVZhP = await KPLAY.new({from: accounts[1]});
		const uintObvMgXe = BigInt("2013")
		const addresswX3XZYb = accounts[4]
		const uintbeTOkgB = BigInt("1556")
		const uintNgVNrl5 = BigInt("418")
		const addressf64rHoM = accounts[3]
		const uintITuTXE = BigInt("1765")
		const addressJdaY6Yv = accounts[1]
		const addresshJ8YaOL = accounts[0]
//		const boolEYD1QCo = await KPLAYI1AVZhP.transfer.call(addresswX3XZYb, uintObvMgXe, {from: accounts[5]});
//		const addressohtiSI9 = await KPLAYI1AVZhP.lock.call(addressf64rHoM, uintNgVNrl5, uintbeTOkgB, {from: accounts[5]});
//		const addresssxVHEhE = await KPLAYI1AVZhP.burn.call(addressJdaY6Yv, uintITuTXE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGQ5VIWW = await KPLAYI1AVZhP.isFrozen.call(addresshJ8YaOL, {from: accounts[3]});

		await expect(KPLAYI1AVZhP.transfer.call(addresswX3XZYb, uintObvMgXe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvOI0nee = await KPLAY.new({from: accounts[0]});
		const addressXU30tXK = accounts[3]
		const addressF0VtqTg = accounts[2]
		const addressZLgrY1K = accounts[1]
		const uint256Tp9t3Z2 = await KPLAYvOI0nee.totalSupply.call({from: accounts[1]});
		const uint256nUji47x = await KPLAYvOI0nee.allowance.call(addressF0VtqTg, addressXU30tXK, {from: accounts[4]});
		const uint256OD3hxs = await KPLAYvOI0nee.lockCount.call(addressZLgrY1K, {from: accounts[4]});

		assert.equal(uint256OD3hxs, BigInt("0"))
		assert.equal(uint256Tp9t3Z2, BigInt("10000000000000000"))
		assert.equal(uint256nUji47x, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAY3ftKaO = await KPLAY.new({from: accounts[1]});
		const uintYJ50YLz = BigInt("2005")
		const addresslRuyEIV = accounts[3]
		const boolV4rGBD0 = await KPLAY3ftKaO.approve.call(addresslRuyEIV, uintYJ50YLz, {from: accounts[2]});
//		await KPLAY3ftKaO.onlyOwner.call({from: accounts[2]});
//		await KPLAY3ftKaO.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolV4rGBD0, true)
		await expect(KPLAY3ftKaO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const uintX2o5S5 = BigInt("24")
		const addressnBQrpjC = accounts[2]
		const uintNi6rP8R = BigInt("396")
		const addresstzZziyV = accounts[0]
		const uintXMgdt1X = BigInt("1339")
		const addressJmo7qW3 = accounts[3]
		const addressr1kYOCV = accounts[3]
		const uintSFJKIjw = BigInt("1393")
		const addressylezuQy = accounts[0]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
		const uint256ObzHdfn = await KPLAYI0A2Oba.afterTime.call(uintX2o5S5, {from: accounts[2]});
		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressnBQrpjC, {from: accounts[3]});
//		await KPLAYI0A2Oba.unpause.call({from: accounts[5]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolPBHdT4M = await KPLAYI0A2Oba.decreaseAllowance.call(addresstzZziyV, uintNi6rP8R, {from: accounts[4]});
//		await KPLAYI0A2Oba.renounceOwnership.call({from: accounts[0]});
//		await KPLAYI0A2Oba.whenNotFrozen.call({from: accounts[3]});
//		await KPLAYI0A2Oba.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressr1kYOCV, addressJmo7qW3, uintXMgdt1X, {from: accounts[4]});
//		const boola5YUiIm = await KPLAYI0A2Oba.mint.call(addressylezuQy, uintSFJKIjw, {from: accounts[3]});

		assert.equal(uint256ObzHdfn, BigInt("1630228792"))
		assert.equal(uint256lIfcESJ, BigInt("1630228768"))
		assert.equal(uint256wXlppLI, BigInt("0"))
		await expect(KPLAYI0A2Oba.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI1AVZhP = await KPLAY.new({from: accounts[1]});
		const addressstg3C0o = accounts[0]
		const boolGQ5VIWW = await KPLAYI1AVZhP.isFrozen.call(addressstg3C0o, {from: accounts[3]});

		assert.equal(boolGQ5VIWW, false)
	});

	it('test for KPLAY', async () => {
		const KPLAYD70mQOl = await KPLAY.new({from: accounts[5]});
		const addresszQwDEX0 = "0x0000000000000000000000000000000000000001"
		const addressBqAzgBW = accounts[2]
		const uintH7QTjae = BigInt("885")
		const addresstFll6TV = accounts[0]
		const addressQl8jlP = accounts[4]
		const addressmBBdUeS = accounts[4]
		const uint256Mz2vmez = await KPLAYD70mQOl.balanceOf.call(addresszQwDEX0, {from: accounts[0]});
//		await KPLAYD70mQOl.renounceOwnership.call({from: accounts[5]});
//		const addresstfaotto = await KPLAYD70mQOl.freeze.call(addressBqAzgBW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressxFv0UWR = await KPLAYD70mQOl.unlock.call(addresstFll6TV, uintH7QTjae, {from: accounts[3]});
//		const addressT5l7bOS = await KPLAYD70mQOl.transferOwnership.call(addressQl8jlP, {from: accounts[3]});
//		const addressyBp3wRS = await KPLAYD70mQOl.transferOwnership.call(addressmBBdUeS, {from: accounts[1]});

		assert.equal(uint256Mz2vmez, BigInt("0"))
		await expect(KPLAYD70mQOl.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI1AVZhP = await KPLAY.new({from: accounts[1]});
		const uintbMCBs7t = BigInt("1482")
		const uintNN7oyIr = BigInt("890")
		const addresshtGipKI = "0x0000000000000000000000000000000000000001"
		const uintcMCVmru = BigInt("2013")
		const addressmXORMhu = accounts[5]
		const uintJNMrbSy = BigInt("1556")
		const uint7YnXoU = BigInt("418")
		const address8F5mNU = accounts[3]
		const addressebR4Cpl = accounts[2]
		const boolJqmlYB4 = await KPLAYI1AVZhP.transferWithLockAfter.call(addresshtGipKI, uintNN7oyIr, uintbMCBs7t, {from: accounts[1]});
//		const boolEYD1QCo = await KPLAYI1AVZhP.transfer.call(addressmXORMhu, uintcMCVmru, {from: accounts[5]});
//		const addressohtiSI9 = await KPLAYI1AVZhP.lock.call(address8F5mNU, uint7YnXoU, uintJNMrbSy, {from: accounts[5]});
//		const boolGQ5VIWW = await KPLAYI1AVZhP.isFrozen.call(addressebR4Cpl, {from: accounts[3]});
//		await KPLAYI1AVZhP.whenPaused.call({from: accounts[3]});
//		await KPLAYI1AVZhP.whenNotFrozen.call({from: accounts[5]});

		assert.equal(boolJqmlYB4, true)
		await expect(KPLAYI1AVZhP.transfer.call(addressmXORMhu, uintcMCVmru, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYD70mQOl = await KPLAY.new({from: accounts[5]});
		const addressi9XqSnl = "0x0000000000000000000000000000000000000001"
		const uintOktS8cd = BigInt("1321")
		const addressgfRQNZj = accounts[2]
		const uintv2gMGZ = BigInt("1282")
		const uintIphsZtk = BigInt("583")
		const addressKCmUe2H = accounts[4]
		const addressi5fp6Bx = accounts[3]
		const uinthQlwBxS = BigInt("885")
		const addressp7YgoNY = accounts[0]
		const addressKmGdvTW = accounts[4]
		const uint256Mz2vmez = await KPLAYD70mQOl.balanceOf.call(addressi9XqSnl, {from: accounts[0]});
		const boolNEiFpJ3 = await KPLAYD70mQOl.increaseAllowance.call(addressgfRQNZj, uintOktS8cd, {from: accounts[0]});
//		const boolEqyER8g = await KPLAYD70mQOl.transferWithLock.call(addressKCmUe2H, uintIphsZtk, uintv2gMGZ, {from: accounts[4]});
//		const addresstfaotto = await KPLAYD70mQOl.freeze.call(addressi5fp6Bx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressxFv0UWR = await KPLAYD70mQOl.unlock.call(addressp7YgoNY, uinthQlwBxS, {from: accounts[3]});
//		const addressyBp3wRS = await KPLAYD70mQOl.transferOwnership.call(addressKmGdvTW, {from: accounts[1]});

		assert.equal(boolNEiFpJ3, true)
		assert.equal(uint256Mz2vmez, BigInt("0"))
		await expect(KPLAYD70mQOl.transferWithLock.call(addressKCmUe2H, uintIphsZtk, uintv2gMGZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const uintNeOxpdn = BigInt("567")
		const addressYz6Bf31 = accounts[0]
		const addressNCPIRFl = accounts[2]
		const uintVN6T3xP = BigInt("1365")
		const addresse0ecUlk = accounts[3]
		const addresshiN3kI8 = accounts[3]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
//		const addressSQZG4rQ = await KPLAYI0A2Oba.burn.call(addressYz6Bf31, uintNeOxpdn, {from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressNCPIRFl, {from: accounts[3]});
//		const uint256iJOkqXB = await KPLAYI0A2Oba.totalSupply.call({from: accounts[3]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addresshiN3kI8, addresse0ecUlk, uintVN6T3xP, {from: accounts[4]});

		assert.equal(uint256lIfcESJ, BigInt("1630228775"))
		await expect(KPLAYI0A2Oba.burn.call(addressYz6Bf31, uintNeOxpdn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const uintKBBn9hf = BigInt("1347")
		const uintG6JpOYL = BigInt("49")
		const addressU8wmniD = accounts[3]
		const addresslAUlpvz = accounts[2]
		const uintbNMynP3 = BigInt("155")
		const addressSXCea6y = accounts[4]
		const addressOX3Opw = accounts[5]
		const uintaiGyO93 = BigInt("1339")
		const addressHEI9wZi = accounts[3]
		const addresskKTKRB0 = accounts[3]
		const uintpOVE190 = BigInt("1390")
		const addressWG2iJeN = accounts[4]
		const boolBdyxP2b = await KPLAYI0A2Oba.transferWithLock.call(addressU8wmniD, uintG6JpOYL, uintKBBn9hf, {from: accounts[4]});
		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addresslAUlpvz, {from: accounts[3]});
//		const boolZUGACe7 = await KPLAYI0A2Oba.transferFrom.call(addressOX3Opw, addressSXCea6y, uintbNMynP3, {from: accounts[2]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addresskKTKRB0, addressHEI9wZi, uintaiGyO93, {from: accounts[4]});
//		const boolY07Hzqj = await KPLAYI0A2Oba.increaseAllowance.call(addressWG2iJeN, uintpOVE190, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBdyxP2b, true)
		assert.equal(uint256wXlppLI, BigInt("0"))
		await expect(KPLAYI0A2Oba.transferFrom.call(addressOX3Opw, addressSXCea6y, uintbNMynP3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const uintBxwlCTK = BigInt("976")
		const uintBMtVnWC = BigInt("1697")
		const uintcMs0zLd = BigInt("1052")
		const addressAph53e = "0x0000000000000000000000000000000000000001"
		const addressQHnQSg0 = accounts[2]
		const uinttVGZVUW = BigInt("1339")
		const addressMQkZfVt = accounts[3]
		const addressGsrmExE = accounts[3]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
//		await KPLAYI0A2Oba.unpause.call({from: accounts[4]});
//		const uint256kUgnfzN = await KPLAYI0A2Oba.afterTime.call(uintBxwlCTK, {from: accounts[1]});
//		const addresspqycOc2 = await KPLAYI0A2Oba.lock.call(addressAph53e, uintcMs0zLd, uintBMtVnWC, {from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressQHnQSg0, {from: accounts[3]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressGsrmExE, addressMQkZfVt, uinttVGZVUW, {from: accounts[4]});

		assert.equal(uint256lIfcESJ, BigInt("1630228775"))
		await expect(KPLAYI0A2Oba.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMh2ub3D = await KPLAY.new({from: accounts[3]});
		const addressq8u0Kyk = accounts[1]
		const addressgGVJzL6 = accounts[0]
		const uint256jEZkkNC = await KPLAYMh2ub3D.currentTime.call({from: accounts[3]});
		const addressb8t31v = await KPLAYMh2ub3D.transferOwnership.call(addressq8u0Kyk, {from: accounts[3]});
//		const addressfdW9qRV = await KPLAYMh2ub3D.freeze.call(addressgGVJzL6, {from: accounts[1]});

		assert.equal(uint256jEZkkNC, BigInt("1630228765"))
		await expect(KPLAYMh2ub3D.freeze.call(addressgGVJzL6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const addressOShGW4H = accounts[2]
		const uintPRvBcS0 = BigInt("1469")
		const uinttHY9taE = BigInt("1588")
		const addressJkTHZq5 = accounts[4]
		const uintxOrv2i = BigInt("179")
		const addressS3twVjK = accounts[3]
		const addressify3Yoz = accounts[3]
		const uintNbxlsOl = BigInt("1390")
		const address0QE9Z6 = accounts[4]
		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressOShGW4H, {from: accounts[3]});
		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
		const addressO4TIzDz = await KPLAYI0A2Oba.lockAfter.call(addressJkTHZq5, uinttHY9taE, uintPRvBcS0, {from: accounts[4]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressify3Yoz, addressS3twVjK, uintxOrv2i, {from: accounts[4]});
//		const boolY07Hzqj = await KPLAYI0A2Oba.increaseAllowance.call(address0QE9Z6, uintNbxlsOl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256sVncRYo, BigInt("1630228777"))
		assert.equal(uint256wXlppLI, BigInt("0"))
		await expect(KPLAYI0A2Oba.transferFrom.call(addressify3Yoz, addressS3twVjK, uintxOrv2i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbNU9JkX = await KPLAY.new({from: accounts[4]});
		const addressQ0xQQ5N = accounts[5]
		const addressv1Z8aw8 = accounts[2]
		const addressBneXkJu = await KPLAYbNU9JkX.unfreeze.call(addressQ0xQQ5N, {from: accounts[4]});
		const uint256H6w1VSJ = await KPLAYbNU9JkX.balanceOf.call(addressv1Z8aw8, {from: accounts[4]});

		assert.equal(uint256H6w1VSJ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const addresspoSymAx = accounts[3]
		const uintsMNNlOD = BigInt("1552")
		const uintxzta53 = BigInt("56")
		const addressCTd0OAv = accounts[2]
		const uintMS82A2k = BigInt("1339")
		const addressPsO6F8U = accounts[3]
		const addressAgHPPhX = accounts[3]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
//		await KPLAYI0A2Oba.pause.call({from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addresspoSymAx, {from: accounts[3]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolSUO5STs = await KPLAYI0A2Oba.transferWithLockAfter.call(addressCTd0OAv, uintxzta53, uintsMNNlOD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressAgHPPhX, addressPsO6F8U, uintMS82A2k, {from: accounts[4]});

		assert.equal(uint256lIfcESJ, BigInt("1630228772"))
		await expect(KPLAYI0A2Oba.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const uinteuJBUOh = BigInt("371")
		const addresslSfD6K = accounts[2]
		const addressDrgPZDO = accounts[4]
		const uintmhxyhjX = BigInt("1339")
		const addressUiSMizc = accounts[3]
		const addressyDp0PR = accounts[3]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
		const uint256tSnCx1I = await KPLAYI0A2Oba.currentTime.call({from: accounts[0]});
//		const addressIU7gZ48 = await KPLAYI0A2Oba.unlock.call(addresslSfD6K, uinteuJBUOh, {from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressDrgPZDO, {from: accounts[3]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressyDp0PR, addressUiSMizc, uintmhxyhjX, {from: accounts[4]});

		assert.equal(uint256lIfcESJ, BigInt("1630228770"))
		assert.equal(uint256tSnCx1I, BigInt("1630228770"))
		await expect(KPLAYI0A2Oba.unlock.call(addresslSfD6K, uinteuJBUOh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const address76rWge = accounts[2]
		const uintVzGkjn = BigInt("1347")
		const uintfn8E9Uk = BigInt("1338")
		const addressTi6zP4B = accounts[2]
		const uintfvtZwIZ = BigInt("371")
		const addressrr1pZT6 = accounts[2]
		const uinthpvgUAd = BigInt("1014")
		const addressL8eE0pJ = accounts[4]
		const addressBtfa0hw = accounts[4]
		const uintAj9SyIR = BigInt("1709")
		const addresslpqBN07 = accounts[4]
		const uintquPpNUK = BigInt("1864")
		const addressdO2pAbd = accounts[4]
		const uintvaxE8gP = BigInt("580")
		const addressLwkxrC = accounts[0]
		const uintP9ltzj = BigInt("1323")
		const addressiJd3Au = accounts[3]
		const addressNaW42VH = accounts[3]
		const addressChSJW0n = await KPLAYI0A2Oba.freeze.call(address76rWge, {from: accounts[4]});
		const boolnGD08Xo = await KPLAYI0A2Oba.transferWithLock.call(addressTi6zP4B, uintfn8E9Uk, uintVzGkjn, {from: accounts[4]});
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
//		const addressIU7gZ48 = await KPLAYI0A2Oba.unlock.call(addressrr1pZT6, uintfvtZwIZ, {from: accounts[4]});
//		const boolKTcitzf = await KPLAYI0A2Oba.transfer.call(addressL8eE0pJ, uinthpvgUAd, {from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressBtfa0hw, {from: accounts[3]});
//		const boolOnr2WOl = await KPLAYI0A2Oba.decreaseAllowance.call(addresslpqBN07, uintAj9SyIR, {from: accounts[2]});
//		const boolXanHZ21 = await KPLAYI0A2Oba.increaseAllowance.call(addressdO2pAbd, uintquPpNUK, {from: accounts[2]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});
//		const boolLcHLD00 = await KPLAYI0A2Oba.transfer.call(addressLwkxrC, uintvaxE8gP, {from: accounts[2]});
//		const boolohI7dka = await KPLAYI0A2Oba.transferFrom.call(addressNaW42VH, addressiJd3Au, uintP9ltzj, {from: accounts[4]});

		assert.equal(boolnGD08Xo, true)
		assert.equal(uint256lIfcESJ, BigInt("1630228762"))
		await expect(KPLAYI0A2Oba.unlock.call(addressrr1pZT6, uintfvtZwIZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYI0A2Oba = await KPLAY.new({from: accounts[4]});
		const addressGl2GT9y = accounts[5]
		const uintDq6OK6U = BigInt("615")
		const addressm60RFjo = accounts[3]
		const uintJldYBo = BigInt("371")
		const addressWnH3mI = accounts[2]
		const addressGP8b9Rg = accounts[5]
		const uintntEHPz2 = BigInt("730")
		const addressg7LX0jt = accounts[5]
		const addressFYVjmd = accounts[2]
		const uint256lIfcESJ = await KPLAYI0A2Oba.currentTime.call({from: accounts[3]});
		const uint256SUA88Jp = await KPLAYI0A2Oba.balanceOf.call(addressGl2GT9y, {from: accounts[0]});
		const boolFozYG6Y = await KPLAYI0A2Oba.mint.call(addressm60RFjo, uintDq6OK6U, {from: accounts[4]});
		const uint256tSnCx1I = await KPLAYI0A2Oba.currentTime.call({from: accounts[0]});
//		const addressIU7gZ48 = await KPLAYI0A2Oba.unlock.call(addressWnH3mI, uintJldYBo, {from: accounts[4]});
//		const uint256wXlppLI = await KPLAYI0A2Oba.balanceOf.call(addressGP8b9Rg, {from: accounts[3]});
//		const boolVI3NLXi = await KPLAYI0A2Oba.transferFrom.call(addressFYVjmd, addressg7LX0jt, uintntEHPz2, {from: accounts[1]});
//		const uint256sVncRYo = await KPLAYI0A2Oba.currentTime.call({from: accounts[1]});

		assert.equal(boolFozYG6Y, true)
		assert.equal(uint256SUA88Jp, BigInt("0"))
		assert.equal(uint256lIfcESJ, BigInt("1630228771"))
		assert.equal(uint256tSnCx1I, BigInt("1630228771"))
		await expect(KPLAYI0A2Oba.unlock.call(addressWnH3mI, uintJldYBo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbNU9JkX = await KPLAY.new({from: accounts[4]});
		const addressQYqc1DR = accounts[3]
		const uintSr4MVl = BigInt("1542")
		const uintVGBqXOO = BigInt("1189")
		const addressG85Vi1o = accounts[2]
		const addressICJj3OG = accounts[2]
		const uint256H6w1VSJ = await KPLAYbNU9JkX.balanceOf.call(addressQYqc1DR, {from: accounts[4]});
//		const addressmg9eIAZ = await KPLAYbNU9JkX.lock.call(addressG85Vi1o, uintVGBqXOO, uintSr4MVl, {from: accounts[4]});
//		const uint256cOwjnIx = await KPLAYbNU9JkX.balanceOf.call(addressICJj3OG, {from: accounts[5]});

		assert.equal(uint256H6w1VSJ, BigInt("0"))
		await expect(KPLAYbNU9JkX.lock.call(addressG85Vi1o, uintVGBqXOO, uintSr4MVl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
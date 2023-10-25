const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringz2p7b2c = "KG0U"
		const stringlWeUINt = "IaJro1UhZSa7SVcUhRw2UuHWMzIWihJVRaLD6oFe"
		const uintJUTD0MG = BigInt("90")
		const TPAl3Y4JT0 = await TPA.new(stringz2p7b2c, stringlWeUINt, uintJUTD0MG, {from: accounts[3]});
		const uintbfcRAFk = BigInt("1287")
		const addresstCIE15P = accounts[0]
		const uintWQg0eEh = BigInt("1013")
		const addressafAB7o6 = accounts[1]
		const boolN5j93xe = await TPAl3Y4JT0.unlock.call(addresstCIE15P, uintbfcRAFk, {from: accounts[0]});
		const boolSwEbMmK = await TPAl3Y4JT0.paused.call({from: accounts[2]});
		await TPAl3Y4JT0.onlyOwner.call({from: accounts[0]});
		const boolcbyL9Ja = await TPAl3Y4JT0.approve.call(addressafAB7o6, uintWQg0eEh, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const addresshYZUVsS = accounts[1]
		const uintIYFWxoS = BigInt("2046")
		const addressMp8JLEJ = accounts[1]
		const addressy4JUsg = accounts[3]
		const uintjcG1ZWZ = BigInt("147")
		const addresswihBjSL = accounts[1]
		const addressFGydX6Y = accounts[0]
		const boolWqgkOX = await TPAr7FCH4R.isAdmin.call(addresshYZUVsS, {from: accounts[2]});
		const boolyMMO0NL = await TPAr7FCH4R.transferFrom.call(addressy4JUsg, addressMp8JLEJ, uintIYFWxoS, {from: accounts[4]});
		const boolASpZ6he = await TPAr7FCH4R.transferFrom.call(addressFGydX6Y, addresswihBjSL, uintjcG1ZWZ, {from: accounts[0]});

		assert.equal(boolWqgkOX, false)
		await expect(TPAr7FCH4R.transferFrom.call(addressy4JUsg, addressMp8JLEJ, uintIYFWxoS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintvZoIFGt = BigInt("4")
		const addressUu8OQY2 = accounts[3]
		const uintuoow76k = BigInt("1211")
		const addressUvtm1kg = accounts[3]
		const addressShbOtOz = accounts[4]
		const uinthU4Rm8G = BigInt("76")
		const addresspnVJ96f = accounts[2]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressUu8OQY2, uintvZoIFGt, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addressUvtm1kg, uintuoow76k, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressShbOtOz, {from: accounts[0]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addresspnVJ96f, uinthU4Rm8G, {from: accounts[3]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addressqllVQkE = accounts[1]
		const boolEDgtdaW = await TPAlALYiyS.isAdmin.call(addressqllVQkE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WczQcf = await TPAlALYiyS.totalSupply.call({from: accounts[3]});

		assert.equal(boolEDgtdaW, false)
		assert.equal(uint256WczQcf, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAoEhZViK = await TPA.new({from: accounts[1]});
		const addressKmikrpM = accounts[1]
		const addressiMKClkW = accounts[1]
		const stringUJV6xzU = await TPAoEhZViK.symbol.call({from: accounts[4]});
		const boolZLUSkMd = await TPAoEhZViK.isOwner.call(addressKmikrpM, {from: "0x0000000000000000000000000000000000000001"});
		const addresslvWMW4r = await TPAoEhZViK.upgradeTo.call(addressiMKClkW, {from: accounts[2]});

		assert.equal(boolZLUSkMd, true)
		assert.equal(stringUJV6xzU, "TPA")
		await expect(TPAoEhZViK.upgradeTo.call(addressiMKClkW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxqa7Jg5 = await TPA.new({from: accounts[4]});
		const uintQXrmuIw = BigInt("1193")
		await TPAxqa7Jg5.pause.call({from: accounts[4]});
		await TPAxqa7Jg5.whenPaused.call({from: accounts[1]});
		const uint256Wxf1apM = await TPAxqa7Jg5.burn.call(uintQXrmuIw, {from: accounts[4]});

		await expect(TPAxqa7Jg5.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANPy90Xt = await TPA.new({from: accounts[3]});
		const addressJ6YPiwH = accounts[4]
		const uinthRRlWnA = BigInt("664")
		const uintvbo6NH2 = BigInt("152")
		const addressgTuxiu6 = accounts[1]
		const uintKVUSOzB = BigInt("579")
		const address2MHkTf = accounts[2]
		const addressGq0Hkx = accounts[5]
		const addressegbXoXH = await TPANPy90Xt.addAdmin.call(addressJ6YPiwH, {from: accounts[3]});
		await TPANPy90Xt.onlyAdmin.call({from: accounts[5]});
		const boolRol7In = await TPANPy90Xt.transferWithLock.call(addressgTuxiu6, uintvbo6NH2, uinthRRlWnA, {from: accounts[4]});
		const addressvnHA4dY = await TPANPy90Xt.burnFrom.call(address2MHkTf, uintKVUSOzB, {from: accounts[1]});
		const addressrnGGN0W = await TPANPy90Xt.removeAdmin.call(addressGq0Hkx, {from: accounts[3]});
		await TPANPy90Xt.onlyAdmin.call({from: accounts[3]});

		await expect(TPANPy90Xt.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintdQFVj6L = BigInt("4")
		const addressw1HMoXE = accounts[3]
		const uintCslraps = BigInt("1211")
		const addressGkk7Z92 = accounts[3]
		const addressTCS938j = accounts[4]
		const uinttlwz6d8 = BigInt("76")
		const addresszL5Jntv = accounts[3]
		const addressO26h4Y = accounts[2]
		const addresseWcMFCQ = accounts[1]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressw1HMoXE, uintdQFVj6L, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addressGkk7Z92, uintCslraps, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressTCS938j, {from: accounts[0]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addresszL5Jntv, uinttlwz6d8, {from: accounts[3]});
		const boolZT0E9CE = await TPACMW8u0P.isOwner.call(addressO26h4Y, {from: accounts[3]});
		const uint256okQDwu3 = await TPACMW8u0P.balanceOf.call(addresseWcMFCQ, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolZT0E9CE, true)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(uint256okQDwu3, BigInt("0"))
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxqa7Jg5 = await TPA.new({from: accounts[4]});
		const uintXzc0NyI = BigInt("1193")
		await TPAxqa7Jg5.pause.call({from: accounts[4]});
		const uint256Wxf1apM = await TPAxqa7Jg5.burn.call(uintXzc0NyI, {from: accounts[4]});

		await expect(TPAxqa7Jg5.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAECG0rJJ = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCNU7HKs = BigInt("1376")
		const addressGtNnecd = accounts[0]
		await TPAECG0rJJ.onlyAdmin.call({from: accounts[4]});
		const boolwKTkMCA = await TPAECG0rJJ.transfer.call(addressGtNnecd, uintCNU7HKs, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const addresszBroyVj = accounts[2]
		const uintI7DALld = BigInt("172")
		const addresslDHW9K = accounts[0]
		const address7oTy1u = accounts[4]
		const uintubPVf4v = BigInt("1616")
		const boolXShCnva = await TPAr7FCH4R.paused.call({from: accounts[5]});
		const boolWqgkOX = await TPAr7FCH4R.isAdmin.call(addresszBroyVj, {from: accounts[2]});
		const boolUXUz4YN = await TPAr7FCH4R.transferFrom.call(address7oTy1u, addresslDHW9K, uintI7DALld, {from: accounts[3]});
		const boolU065dS = await TPAr7FCH4R.paused.call({from: accounts[4]});
		const uint256uZoCFFE = await TPAr7FCH4R.burn.call(uintubPVf4v, {from: accounts[2]});

		assert.equal(boolWqgkOX, true)
		assert.equal(boolXShCnva, false)
		await expect(TPAr7FCH4R.transferFrom.call(address7oTy1u, addresslDHW9K, uintI7DALld, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintUuprq16 = BigInt("4")
		const addressvlbKtKZ = accounts[3]
		const uintp4CvASk = BigInt("572")
		const addresslCyNSb8 = accounts[3]
		const uintAzDAtJF = BigInt("197")
		const addressFxcyltt = accounts[4]
		const addressFUmkP9A = accounts[4]
		const uintXesmOwy = BigInt("76")
		const addressZasTYPZ = accounts[3]
		const uintUi0XnwM = BigInt("591")
		const addresswM8WjRI = accounts[4]
		const addressvaZUOcg = accounts[2]
		const addressKyG88mV = accounts[1]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressvlbKtKZ, uintUuprq16, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addresslCyNSb8, uintp4CvASk, {from: accounts[3]});
		const boolZaHWBM3 = await TPACMW8u0P.transfer.call(addressFxcyltt, uintAzDAtJF, {from: accounts[2]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressFUmkP9A, {from: accounts[0]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addressZasTYPZ, uintXesmOwy, {from: accounts[3]});
		const addressIdaONcu = await TPACMW8u0P.burnFrom.call(addresswM8WjRI, uintUi0XnwM, {from: "0x0000000000000000000000000000000000000001"});
		const boolZT0E9CE = await TPACMW8u0P.isOwner.call(addressvaZUOcg, {from: accounts[3]});
		const uint256okQDwu3 = await TPACMW8u0P.balanceOf.call(addressKyG88mV, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolZaHWBM3, true)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.burnFrom.call(addresswM8WjRI, uintUi0XnwM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addresskbmoBDs = accounts[2]
		await TPAlALYiyS.renounceAdmin.call({from: accounts[1]});
		const boolEDgtdaW = await TPAlALYiyS.isAdmin.call(addresskbmoBDs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAlALYiyS.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addressppeodti = accounts[2]
		const uintMXOwBzZ = BigInt("1923")
		const addressO9wTrZ8 = accounts[3]
		const addresskYBb3C6 = accounts[2]
		const boolEDgtdaW = await TPAlALYiyS.isAdmin.call(addressppeodti, {from: "0x0000000000000000000000000000000000000001"});
		const boolSJU39EE = await TPAlALYiyS.decreaseAllowance.call(addressO9wTrZ8, uintMXOwBzZ, {from: accounts[2]});
		const addressMfNISEP = await TPAlALYiyS.notFrozen.call(addresskYBb3C6, {from: accounts[2]});

		assert.equal(boolEDgtdaW, false)
		await expect(TPAlALYiyS.decreaseAllowance.call(addressO9wTrZ8, uintMXOwBzZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintD1zbXp3 = BigInt("1")
		const addressEjiOgO = accounts[3]
		const uintufHNR9y = BigInt("572")
		const address5gcIGz = accounts[3]
		const addressbDzHT8K = accounts[4]
		const uintnjOiqMf = BigInt("76")
		const addressrCHkRqA = accounts[3]
		const addressqWtuHwR = accounts[2]
		const addressOhGifFT = accounts[1]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressEjiOgO, uintD1zbXp3, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(address5gcIGz, uintufHNR9y, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressbDzHT8K, {from: accounts[0]});
		const stringjhO2Zon = await TPACMW8u0P.name.call({from: accounts[4]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addressrCHkRqA, uintnjOiqMf, {from: accounts[3]});
		const boolZT0E9CE = await TPACMW8u0P.isOwner.call(addressqWtuHwR, {from: accounts[3]});
		const uint256okQDwu3 = await TPACMW8u0P.balanceOf.call(addressOhGifFT, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolZT0E9CE, true)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(stringjhO2Zon, "TPA")
		assert.equal(uint256okQDwu3, BigInt("0"))
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdfDv0n = await TPA.new({from: accounts[4]});
		const addressRXUxKb2 = "0x0000000000000000000000000000000000000001"
		const addressDNToF3N = "0x0000000000000000000000000000000000000001"
		const addressCOmFbfX = accounts[0]
		const stringz42nkDj = await TPAdfDv0n.symbol.call({from: accounts[2]});
		const addresswWz2H9l = await TPAdfDv0n.transferOwnership.call(addressRXUxKb2, {from: accounts[4]});
		const uint256ZE07Kjg = await TPAdfDv0n.balanceOf.call(addressDNToF3N, {from: accounts[0]});
		const addresspHizIBF = await TPAdfDv0n.notFrozen.call(addressCOmFbfX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringz42nkDj, "TPA")
		assert.equal(uint256ZE07Kjg, BigInt("0"))
		await expect(TPAdfDv0n.notFrozen.call(addressCOmFbfX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdfDv0n = await TPA.new({from: accounts[4]});
		const addressHVr1Gs = accounts[5]
		const addressstUgiyn = accounts[2]
		const addressCigIk2 = "0x0000000000000000000000000000000000000000"
		const bool0Wm8ds = await TPAdfDv0n.unfreezeAccount.call(addressHVr1Gs, {from: accounts[4]});
		const addressseWiLKr = await TPAdfDv0n.transferOwnership.call(addressstUgiyn, {from: "0x0000000000000000000000000000000000000001"});
		const stringz42nkDj = await TPAdfDv0n.symbol.call({from: accounts[2]});
		const uint256ZE07Kjg = await TPAdfDv0n.balanceOf.call(addressCigIk2, {from: accounts[0]});

		await expect(TPAdfDv0n.unfreezeAccount.call(addressHVr1Gs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintMaYkKaj = BigInt("4")
		const addressHRTA9IL = accounts[3]
		const addressi6ZlSSi = accounts[1]
		const addressmdjK8HO = accounts[5]
		const uintko39Sjv = BigInt("76")
		const addressHLvYlxb = accounts[2]
		const uintIwEA49r = BigInt("295")
		const addressKH5IOeL = accounts[2]
		const addressaP4Kn0y = accounts[2]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressHRTA9IL, uintMaYkKaj, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolOJCKMc3 = await TPACMW8u0P.paused.call({from: accounts[0]});
		const addressEcXO4gQ = await TPACMW8u0P.upgradeTo.call(addressi6ZlSSi, {from: accounts[2]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressmdjK8HO, {from: accounts[0]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addressHLvYlxb, uintko39Sjv, {from: accounts[3]});
		const boolWCkQ04o = await TPACMW8u0P.transferFrom.call(addressaP4Kn0y, addressKH5IOeL, uintIwEA49r, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolOJCKMc3, false)
		assert.equal(boolqhjnTAI, true)
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.transferFrom.call(addressaP4Kn0y, addressKH5IOeL, uintIwEA49r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintA8qNj6 = BigInt("4")
		const addressBZW60Js = accounts[3]
		const uintPpVyrGg = BigInt("1211")
		const addressRLuPzY = accounts[3]
		const addressem1XMDF = accounts[5]
		const uintwOwj47A = BigInt("76")
		const addressZzlTUHU = accounts[3]
		const addressBYILfnX = accounts[4]
		const addressTw6xoQn = accounts[2]
		const addresslXEqtLp = accounts[2]
		const addressd0z5ES2 = accounts[1]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressBZW60Js, uintA8qNj6, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addressRLuPzY, uintPpVyrGg, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressem1XMDF, {from: accounts[0]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addressZzlTUHU, uintwOwj47A, {from: accounts[3]});
		const uint256FNk3BHg = await TPACMW8u0P.allowance.call(addressTw6xoQn, addressBYILfnX, {from: accounts[4]});
		const boolZT0E9CE = await TPACMW8u0P.isOwner.call(addresslXEqtLp, {from: accounts[3]});
		const uint256okQDwu3 = await TPACMW8u0P.balanceOf.call(addressd0z5ES2, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolZT0E9CE, true)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(uint256FNk3BHg, BigInt("0"))
		assert.equal(uint256okQDwu3, BigInt("0"))
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdfDv0n = await TPA.new({from: accounts[4]});
		const uintSHlbTCr = BigInt("872")
		const uintqBOvM0T = BigInt("18")
		const addressfm2WJ54 = accounts[4]
		const address5YvyBs = accounts[5]
		const addressiLuapTr = accounts[2]
		const addresso5fztZE = accounts[0]
		const addressDmKIW6C = accounts[0]
		const boolySV46iy = await TPAdfDv0n.lock.call(addressfm2WJ54, uintqBOvM0T, uintSHlbTCr, {from: accounts[4]});
		const bool0Wm8ds = await TPAdfDv0n.unfreezeAccount.call(address5YvyBs, {from: accounts[4]});
		const addressseWiLKr = await TPAdfDv0n.transferOwnership.call(addressiLuapTr, {from: "0x0000000000000000000000000000000000000001"});
		await TPAdfDv0n.renounceAdmin.call({from: accounts[4]});
		const stringz42nkDj = await TPAdfDv0n.symbol.call({from: accounts[2]});
		const boolBFwC5VR = await TPAdfDv0n.isAdmin.call(addresso5fztZE, {from: accounts[0]});
		const uint256ZE07Kjg = await TPAdfDv0n.balanceOf.call(addressDmKIW6C, {from: accounts[0]});

		assert.equal(boolySV46iy, true)
		await expect(TPAdfDv0n.unfreezeAccount.call(address5YvyBs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintEdrpoKA = BigInt("4")
		const address3RjSQG = accounts[3]
		const uintuooepiB = BigInt("1211")
		const addressjG9kSiG = accounts[3]
		const addressZPzYqTY = accounts[4]
		const addressUkf8r5A = accounts[2]
		const uintQCqN9V1 = BigInt("76")
		const addressrCGOGZ = accounts[3]
		const addressQyFveUI = accounts[2]
		const addressMViHBl = accounts[1]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(address3RjSQG, uintEdrpoKA, {from: accounts[2]});
		const uint8PijtLw2 = await TPACMW8u0P.decimals.call({from: accounts[1]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addressjG9kSiG, uintuooepiB, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressZPzYqTY, {from: accounts[0]});
		const addressIzosUBl = await TPACMW8u0P.removeAdmin.call(addressUkf8r5A, {from: accounts[2]});
		const boolqhjnTAI = await TPACMW8u0P.increaseAllowance.call(addressrCGOGZ, uintQCqN9V1, {from: accounts[3]});
		const boolZT0E9CE = await TPACMW8u0P.isOwner.call(addressQyFveUI, {from: accounts[3]});
		const uint256okQDwu3 = await TPACMW8u0P.balanceOf.call(addressMViHBl, {from: accounts[2]});
		await TPACMW8u0P.pause.call({from: accounts[4]});
		await TPACMW8u0P.whenNotPaused.call({from: accounts[5]});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boolNUakMG4, false)
		assert.equal(boolZT0E9CE, true)
		assert.equal(boolqhjnTAI, true)
		assert.equal(boolsN00u9, true)
		assert.equal(uint256okQDwu3, BigInt("0"))
		assert.equal(uint8PijtLw2, BigInt("18"))
		await expect(TPACMW8u0P.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addressfhJY6nJ = accounts[3]
		const uintDYApVa = BigInt("898")
		const addressiASIljf = accounts[3]
		const addressElXQLXg = accounts[5]
		const uintv6Mz212 = BigInt("1819")
		const addressYX01zAN = accounts[2]
		const addressgPoh8Yk = accounts[4]
		const uintn4UMro = BigInt("893")
		const addressa6xq8p = accounts[1]
		const uintYRcTyDJ = BigInt("137")
		const addressUuaLLn8 = accounts[1]
		const addressLKSrnEq = accounts[4]
		const addressfSVEon = accounts[0]
		const uintBBFzuCr = BigInt("593")
		const addressyd7DUjo = accounts[2]
		const uint256MDqF3Pl = await TPAlALYiyS.balanceOf.call(addressfhJY6nJ, {from: accounts[3]});
		const boolBmvIQEW = await TPAlALYiyS.unlock.call(addressiASIljf, uintDYApVa, {from: accounts[0]});
		const boolnvJQ2nG = await TPAlALYiyS.unfreezeAccount.call(addressElXQLXg, {from: accounts[0]});
		const boolLwmTUCb = await TPAlALYiyS.transferFrom.call(addressgPoh8Yk, addressYX01zAN, uintv6Mz212, {from: accounts[0]});
		const boolo33TO99 = await TPAlALYiyS.transfer.call(addressa6xq8p, uintn4UMro, {from: accounts[1]});
		const uint256RCUklhK = await TPAlALYiyS.totalSupply.call({from: accounts[4]});
		const boolCgu3eYZ = await TPAlALYiyS.transferFrom.call(addressLKSrnEq, addressUuaLLn8, uintYRcTyDJ, {from: accounts[2]});
		const boolEiy6whW = await TPAlALYiyS.unfreezeAccount.call(addressfSVEon, {from: accounts[2]});
		await TPAlALYiyS.renounceAdmin.call({from: accounts[1]});
		const boolMDnVPN1 = await TPAlALYiyS.decreaseAllowance.call(addressyd7DUjo, uintBBFzuCr, {from: accounts[2]});

		assert.equal(uint256MDqF3Pl, BigInt("0"))
		await expect(TPAlALYiyS.unlock.call(addressiASIljf, uintDYApVa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
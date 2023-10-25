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
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const addressn1BzTNs = accounts[1]
		const uintdDuBy21 = BigInt("1325")
		const addresssi86PGE = accounts[1]
		const uintNgRpcs7 = BigInt("147")
		const addresscSfrjxA = accounts[1]
		const addressnvaZcp = accounts[0]
		const boolWqgkOX = await TPAr7FCH4R.isAdmin.call(addressn1BzTNs, {from: accounts[2]});
		const addressHE4w2Pd = await TPAr7FCH4R.burnFrom.call(addresssi86PGE, uintdDuBy21, {from: accounts[4]});
		const stringtk32bC = await TPAr7FCH4R.name.call({from: accounts[1]});
		const boolWWqYKFz = await TPAr7FCH4R.paused.call({from: accounts[2]});
		const boolASpZ6he = await TPAr7FCH4R.transferFrom.call(addressnvaZcp, addresscSfrjxA, uintNgRpcs7, {from: accounts[0]});

		assert.equal(boolWqgkOX, false)
		await expect(TPAr7FCH4R.burnFrom.call(addresssi86PGE, uintdDuBy21, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addressljCDyI = accounts[1]
		const addressuFWBSsc = accounts[0]
		const addressM4bk2nL = accounts[0]
		const addressk24Ixr = accounts[4]
		const boolEDgtdaW = await TPAlALYiyS.isAdmin.call(addressljCDyI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ESKEnX8 = await TPAlALYiyS.allowance.call(addressM4bk2nL, addressuFWBSsc, {from: accounts[4]});
		const uint256WczQcf = await TPAlALYiyS.totalSupply.call({from: accounts[3]});
		const uint256BBu0eQj = await TPAlALYiyS.balanceOf.call(addressk24Ixr, {from: accounts[4]});

		assert.equal(boolEDgtdaW, false)
		assert.equal(uint256BBu0eQj, BigInt("0"))
		assert.equal(uint256ESKEnX8, BigInt("0"))
		assert.equal(uint256WczQcf, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const addresss104OZ8 = accounts[1]
		const uintbPqPh85 = BigInt("1073")
		const uintMXeD3d = BigInt("1242")
		const addressCV0VVgz = accounts[3]
		const uintG7tYPtt = BigInt("1669")
		const addressbF0L8d = accounts[1]
		const addressJRXwPAB = accounts[3]
		const uintQkrw4TZ = BigInt("147")
		const addresskHA6CKj = accounts[1]
		const addressMz6jzr4 = accounts[0]
		const boolWqgkOX = await TPAr7FCH4R.isAdmin.call(addresss104OZ8, {from: accounts[2]});
		const booliDngsVd = await TPAr7FCH4R.lock.call(addressCV0VVgz, uintMXeD3d, uintbPqPh85, {from: accounts[2]});
		const boolyMMO0NL = await TPAr7FCH4R.transferFrom.call(addressJRXwPAB, addressbF0L8d, uintG7tYPtt, {from: accounts[4]});
		const boolASpZ6he = await TPAr7FCH4R.transferFrom.call(addressMz6jzr4, addresskHA6CKj, uintQkrw4TZ, {from: accounts[0]});

		assert.equal(boolWqgkOX, false)
		await expect(TPAr7FCH4R.lock.call(addressCV0VVgz, uintMXeD3d, uintbPqPh85, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlALYiyS = await TPA.new({from: accounts[0]});
		const addressBHz69z0 = accounts[1]
		const addressLNb5846 = accounts[2]
		const stringG5QbgXP = await TPAlALYiyS.name.call({from: accounts[2]});
		const booleB3SnuX = await TPAlALYiyS.isAdmin.call(addressBHz69z0, {from: accounts[3]});
		const boolEDgtdaW = await TPAlALYiyS.isAdmin.call(addressLNb5846, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEDgtdaW, false)
		assert.equal(booleB3SnuX, false)
		assert.equal(stringG5QbgXP, "TPA")
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintJkRRmjO = BigInt("1004")
		const uintabeCMjj = BigInt("4")
		const addressxKYi0Yh = accounts[3]
		const uintS2KWctK = BigInt("1197")
		const addressntsVOjH = accounts[3]
		const addressRUwqYjg = accounts[4]
		const uint256Sm9gIuz = await TPACMW8u0P.burn.call(uintJkRRmjO, {from: accounts[0]});
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressxKYi0Yh, uintabeCMjj, {from: accounts[2]});
		const boolsN00u9 = await TPACMW8u0P.approve.call(addressntsVOjH, uintS2KWctK, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressRUwqYjg, {from: accounts[0]});
		await TPACMW8u0P.pause.call({from: accounts[4]});

		await expect(TPACMW8u0P.burn.call(uintJkRRmjO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintctQEPz0 = BigInt("4")
		const addressOufLfr5 = accounts[3]
		const uintJWjrDTD = BigInt("1955")
		const addressk010pbO = accounts[4]
		const addressqT8KSMW = accounts[5]
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressOufLfr5, uintctQEPz0, {from: accounts[2]});
		const boollF4RgX9 = await TPACMW8u0P.decreaseAllowance.call(addressk010pbO, uintJWjrDTD, {from: accounts[3]});
		const boolNUakMG4 = await TPACMW8u0P.isAdmin.call(addressqT8KSMW, {from: accounts[0]});

		assert.equal(boolBvnhVUX, true)
		await expect(TPACMW8u0P.decreaseAllowance.call(addressk010pbO, uintJWjrDTD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAcXz2L0k = await TPA.new({from: accounts[3]});
		const addressjsIuUAF = accounts[4]
		const addressMwclg96 = accounts[3]
		const uintuok7BQO = BigInt("1325")
		const addressGhybWwV = "0x0000000000000000000000000000000000000001"
		const addressu9epjMj = accounts[2]
		const addressApbihkX = accounts[1]
		const uint256glMly43 = await TPAcXz2L0k.allowance.call(addressMwclg96, addressjsIuUAF, {from: accounts[0]});
		const boolmUU4npP = await TPAcXz2L0k.paused.call({from: accounts[4]});
		const boolNuow097 = await TPAcXz2L0k.transfer.call(addressGhybWwV, uintuok7BQO, {from: accounts[0]});
		const stringYXYALGO = await TPAcXz2L0k.symbol.call({from: accounts[5]});
		const uint256U9sNq2p = await TPAcXz2L0k.allowance.call(addressApbihkX, addressu9epjMj, {from: accounts[4]});

		assert.equal(boolmUU4npP, false)
		assert.equal(uint256glMly43, BigInt("0"))
		await expect(TPAcXz2L0k.transfer.call(addressGhybWwV, uintuok7BQO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWRH2KlU = await TPA.new({from: accounts[1]});
		const uintZv2gBw7 = BigInt("342")
		const addressHCemaqg = accounts[4]
		const uint0sWjWD = BigInt("1408")
		const addressdjVE5i = accounts[4]
		await TPAWRH2KlU.renounceAdmin.call({from: accounts[5]});
		const boolguRCFAg = await TPAWRH2KlU.transfer.call(addressHCemaqg, uintZv2gBw7, {from: accounts[4]});
		const boolGwj4pfM = await TPAWRH2KlU.unlock.call(addressdjVE5i, uint0sWjWD, {from: accounts[0]});

		await expect(TPAWRH2KlU.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzrqQCeA = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswG1IUnt = accounts[4]
		const addressS9kqBjX = accounts[2]
		const uint256NUpZgv9 = await TPAzrqQCeA.balanceOf.call(addresswG1IUnt, {from: accounts[4]});
		const boolkb7k8ap = await TPAzrqQCeA.paused.call({from: accounts[2]});
		const uint256vx2cJ2H = await TPAzrqQCeA.balanceOf.call(addressS9kqBjX, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const uintQtzTca4 = BigInt("586")
		const addressBBCQoSq = accounts[4]
		const uinttsBoC5 = BigInt("147")
		const addressPLcxmx = accounts[1]
		const addressZhJRUrF = accounts[0]
		const boolaxqm7tg = await TPAr7FCH4R.unlock.call(addressBBCQoSq, uintQtzTca4, {from: accounts[2]});
		const boolASpZ6he = await TPAr7FCH4R.transferFrom.call(addressZhJRUrF, addressPLcxmx, uinttsBoC5, {from: accounts[0]});

		await expect(TPAr7FCH4R.unlock.call(addressBBCQoSq, uintQtzTca4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAr7FCH4R = await TPA.new({from: accounts[2]});
		const addresstnb24tl = accounts[5]
		const uintsbXDgiO = BigInt("160")
		const address4iMbtF = accounts[1]
		const addressAniDuSK = accounts[0]
		const uintgTTkGpa = BigInt("1507")
		const addresszQmxYVY = accounts[1]
		const addressG2IiN4M = await TPAr7FCH4R.removeAdmin.call(addresstnb24tl, {from: accounts[2]});
		const boolASpZ6he = await TPAr7FCH4R.transferFrom.call(addressAniDuSK, address4iMbtF, uintsbXDgiO, {from: accounts[0]});
		const boolgONUpc = await TPAr7FCH4R.approve.call(addresszQmxYVY, uintgTTkGpa, {from: accounts[2]});

		await expect(TPAr7FCH4R.removeAdmin.call(addresstnb24tl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintqAs0PqV = BigInt("1677")
		const uintGFR1cMq = BigInt("312")
		const addressPNQmUTu = accounts[4]
		const addressTrR87ti = accounts[0]
		const uintKkdNCNG = BigInt("0")
		const addresst34zA2h = accounts[3]
		const boolxjkRp6 = await TPACMW8u0P.transferWithLock.call(addressPNQmUTu, uintGFR1cMq, uintqAs0PqV, {from: accounts[2]});
		const addressHEaLB53 = await TPACMW8u0P.removeAdmin.call(addressTrR87ti, {from: "0x0000000000000000000000000000000000000001"});
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addresst34zA2h, uintKkdNCNG, {from: accounts[2]});

		assert.equal(boolxjkRp6, true)
		await expect(TPACMW8u0P.removeAdmin.call(addressTrR87ti, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACMW8u0P = await TPA.new({from: accounts[2]});
		const uintrnVYyXd = BigInt("0")
		const addressa1Nq6Ay = accounts[3]
		const addressmOkzNeY = accounts[1]
		const uintzkYoyDC = BigInt("982")
		const uintq9j6WV7 = BigInt("101")
		const addresstfoUPyZ = "0x0000000000000000000000000000000000000001"
		const boolBvnhVUX = await TPACMW8u0P.transfer.call(addressa1Nq6Ay, uintrnVYyXd, {from: accounts[2]});
		const boole1NTPda = await TPACMW8u0P.freezeAccount.call(addressmOkzNeY, {from: accounts[2]});
		const stringOk3KDwi = await TPACMW8u0P.name.call({from: accounts[2]});
		const boolO9Ajji3 = await TPACMW8u0P.transferWithLock.call(addresstfoUPyZ, uintq9j6WV7, uintzkYoyDC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBvnhVUX, true)
		assert.equal(boole1NTPda, true)
		assert.equal(stringOk3KDwi, "TPA")
		await expect(TPACMW8u0P.transferWithLock.call(addresstfoUPyZ, uintq9j6WV7, uintzkYoyDC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
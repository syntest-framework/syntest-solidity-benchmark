const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsqtLcRp = await UFragments.new({from: accounts[3]});
		const intoK15TdA = BigInt("406")
		const intl0hkgB1 = BigInt("-289")
		const uintX9lR3Vt = BigInt("1300")
		const addressQRTEV78 = accounts[4]
//		const int256T6svc63 = await UFragmentsqtLcRp.sub.call(intl0hkgB1, intoK15TdA, {from: accounts[3]});
//		const boolH5nzBJN = await UFragmentsqtLcRp.isOwner.call({from: accounts[0]});
//		const boolqb6xi3m = await UFragmentsqtLcRp.transfer.call(addressQRTEV78, uintX9lR3Vt, {from: accounts[2]});

		await expect(UFragmentsqtLcRp.sub.call(intl0hkgB1, intoK15TdA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstvXCLG5 = await UFragments.new({from: accounts[0]});
		const intIWBzaQi = BigInt("659")
		const intM4bXSb2 = BigInt("1384")
		const addressqK1h44q = accounts[1]
//		const uint256N0UzHnH = await UFragmentstvXCLG5.calRebase.call({from: accounts[3]});
//		const uint8Lu2ulPC = await UFragmentstvXCLG5.decimals.call({from: accounts[4]});
//		const int256aJPiAgi = await UFragmentstvXCLG5.sub.call(intM4bXSb2, intIWBzaQi, {from: accounts[0]});
//		const uint256BVQg6nm = await UFragmentstvXCLG5.balanceOf.call(addressqK1h44q, {from: accounts[0]});

		await expect(UFragmentstvXCLG5.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsqt72ne = await UFragments.new({from: accounts[1]});
		const addressp6jrtp8 = accounts[0]
		const intmG4S4ko = BigInt("1409")
		const intWtJDbgf = BigInt("-835")
		const uintM8MhVPS = BigInt("2037")
		const addressnSDD7h = accounts[4]
		const uint8nmDoUm5 = await UFragmentsqt72ne.decimals.call({from: accounts[0]});
		const uint256mNzKzaC = await UFragmentsqt72ne.balanceOf.call(addressp6jrtp8, {from: accounts[1]});
//		await UFragmentsqt72ne.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256tUnv3ie = await UFragmentsqt72ne.add.call(intWtJDbgf, intmG4S4ko, {from: accounts[2]});
//		const addressZssRKo2 = await UFragmentsqt72ne.initRebase.call(addressnSDD7h, uintM8MhVPS, {from: accounts[5]});

		assert.equal(uint256mNzKzaC, BigInt("0"))
		assert.equal(uint8nmDoUm5, BigInt("0"))
		await expect(UFragmentsqt72ne.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsSEbZqJo = await UFragments.new({from: accounts[0]});
		const addresszKwuefO = accounts[5]
		const addressacgSyqP = accounts[4]
		const addressPhckjyO = accounts[4]
//		const addressqV2UUTb = await UFragmentsSEbZqJo.transferOwnership.call(addresszKwuefO, {from: accounts[1]});
//		const addressAkq2Ek = await UFragmentsSEbZqJo.transferOwnership.call(addressacgSyqP, {from: accounts[4]});
//		const uint256yYQO6qv = await UFragmentsSEbZqJo.balanceOf.call(addressPhckjyO, {from: accounts[1]});

		await expect(UFragmentsSEbZqJo.transferOwnership.call(addresszKwuefO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsP5o7KL = await UFragments.new({from: accounts[2]});
		const uintTFr0wsb = BigInt("40")
		const stringfKzxBxe = "a0zs6gfiQ5iqRqQq0K8s7aTtQMqxCjqfi7LL7kph9XCdvRHFxw2IcPoLWHzIkYd5uHolVbdVUbrqO74KT0kbwwu5"
		const stringdN8Ajj = "NtpV2TgFucwIJBDTeVNPKc8H2fUjywxZblqQdv16Y8I4myKivKFqpqNO7qYucO9GdXWArfdVsUQPKSu4c5"
		const addressKc3J6r = accounts[3]
		const addressWrAX3fJ = await UFragmentsP5o7KL.owner.call({from: accounts[3]});
		const stringsDSy5bS = await UFragmentsP5o7KL.initialize.call(stringdN8Ajj, stringfKzxBxe, uintTFr0wsb, {from: accounts[4]});
		const addressRXxD4gL = await UFragmentsP5o7KL.owner.call({from: accounts[1]});
//		await UFragmentsP5o7KL.initializer.call({from: accounts[5]});
//		const addressgM8SeKl = await UFragmentsP5o7KL.initialize.call(addressKc3J6r, {from: accounts[0]});

		assert.equal(addressRXxD4gL, 0x0000000000000000000000000000000000000000)
		assert.equal(addressWrAX3fJ, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsP5o7KL.initializer.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsjlCQlJY = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intuCh9u4X = BigInt("1347")
		const intRKVz1zw = BigInt("224")
		const intqoezkHG = BigInt("21")
		const addressUI42aMR = accounts[3]
		const boolhapEJ5f = await UFragmentsjlCQlJY.isOwner.call({from: accounts[4]});
		const int256RmOOQI7 = await UFragmentsjlCQlJY.abs.call(intuCh9u4X, {from: accounts[4]});
		const int256Xro3YJI = await UFragmentsjlCQlJY.add.call(intqoezkHG, intRKVz1zw, {from: accounts[4]});
		const uint256rlygjvy = await UFragmentsjlCQlJY.balanceOf.call(addressUI42aMR, {from: accounts[3]});
		await UFragmentsjlCQlJY.renounceOwnership.call({from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentso6wExtN = await UFragments.new({from: accounts[2]});
		const uintqS05IHi = BigInt("455")
		const addressdspP3qU = accounts[3]
		const uintgaOYfmh = BigInt("1941")
		const addresssTvSywh = accounts[1]
//		const boolnRZFR0q = await UFragmentso6wExtN.transfer.call(addressdspP3qU, uintqS05IHi, {from: accounts[4]});
//		const addressLMKU3pM = await UFragmentso6wExtN.owner.call({from: accounts[0]});
//		const booljiTnjVn = await UFragmentso6wExtN.transfer.call(addresssTvSywh, uintgaOYfmh, {from: accounts[1]});
//		await UFragmentso6wExtN.initializer.call({from: accounts[3]});

		await expect(UFragmentso6wExtN.transfer.call(addressdspP3qU, uintqS05IHi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJ2Jd929 = await UFragments.new({from: accounts[3]});
		const intUVgzxb = BigInt("1397")
		const intnyCxrQj = BigInt("2040")
		const intJEUiOkS = BigInt("966")
		const intPlHm3X = BigInt("-2041")
		const intnM8vYv9 = BigInt("-784")
		const stringEhs53AJ = await UFragmentsJ2Jd929.name.call({from: accounts[5]});
//		const int256L6RA8lz = await UFragmentsJ2Jd929.abs.call(intUVgzxb, {from: accounts[0]});
//		const int256VNuaFx8 = await UFragmentsJ2Jd929.mul.call(intJEUiOkS, intnyCxrQj, {from: accounts[1]});
//		const int256ADB6rwh = await UFragmentsJ2Jd929.add.call(intnM8vYv9, intPlHm3X, {from: accounts[1]});

		assert.equal(stringEhs53AJ, "")
		await expect(UFragmentsJ2Jd929.abs.call(intUVgzxb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrvCbx9o = await UFragments.new({from: accounts[4]});
		const uintbSKiP4 = BigInt("1319")
		const addressfj0fjzK = accounts[5]
		const addressyzEdjy = accounts[3]
		const uintdz4wSt = BigInt("1024")
		const addressZuW9voI = accounts[4]
		const uintj17Ei5 = BigInt("767")
		const addressV8vqlZY = accounts[1]
		const addressui8Nu4l = accounts[3]
//		const boolIidIEr4 = await UFragmentsrvCbx9o.transferFrom.call(addressyzEdjy, addressfj0fjzK, uintbSKiP4, {from: accounts[4]});
//		const addressEw1YZkg = await UFragmentsrvCbx9o.owner.call({from: accounts[5]});
//		const boolu31Io3I = await UFragmentsrvCbx9o.transfer.call(addressZuW9voI, uintdz4wSt, {from: accounts[4]});
//		const boolbWAu6p = await UFragmentsrvCbx9o.transfer.call(addressV8vqlZY, uintj17Ei5, {from: accounts[1]});
//		await UFragmentsrvCbx9o.renounceOwnership.call({from: accounts[0]});
//		const uint256K8LSkS = await UFragmentsrvCbx9o.balanceOf.call(addressui8Nu4l, {from: accounts[3]});

		await expect(UFragmentsrvCbx9o.transferFrom.call(addressyzEdjy, addressfj0fjzK, uintbSKiP4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsI6qJXom = await UFragments.new({from: accounts[2]});
		const addresshkQhc8k = accounts[3]
		const addressDzG4K6u = "0x0000000000000000000000000000000000000001"
		const intF23ItL = BigInt("1465")
		const intGsLiBV = BigInt("-1552")
		const addresshymOCEN = accounts[3]
		const uint256i1s41P9 = await UFragmentsI6qJXom.allowance.call(addressDzG4K6u, addresshkQhc8k, {from: accounts[2]});
//		const int256NmqIsmL = await UFragmentsI6qJXom.div.call(intGsLiBV, intF23ItL, {from: accounts[1]});
//		const addressLYtbvWj = await UFragmentsI6qJXom.initialize.call(addresshymOCEN, {from: accounts[4]});
//		const stringykTSaE5 = await UFragmentsI6qJXom.name.call({from: accounts[0]});
//		const booloQRcGNO = await UFragmentsI6qJXom.isOwner.call({from: accounts[3]});

		assert.equal(uint256i1s41P9, BigInt("0"))
		await expect(UFragmentsI6qJXom.div.call(intGsLiBV, intF23ItL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrvCbx9o = await UFragments.new({from: accounts[4]});
		const addresses3gUHy = accounts[4]
		const uintPWlxR25 = BigInt("1319")
		const addresszTLklAy = accounts[5]
		const addresscYkalvd = accounts[3]
		const uintDl9PW7p = BigInt("2015")
		const addresspCjAkYl = "0x0000000000000000000000000000000000000001"
		const addressLcsjG5 = accounts[4]
		const uintJKI3N8h = BigInt("1024")
		const addressWzXWJEu = accounts[4]
		const uintv1AvxFx = BigInt("767")
		const addressuef7wJS = accounts[1]
		const addressdPiDkG5 = accounts[3]
//		const addressF4JHkvs = await UFragmentsrvCbx9o.initialize.call(addresses3gUHy, {from: accounts[4]});
//		const boolIidIEr4 = await UFragmentsrvCbx9o.transferFrom.call(addresscYkalvd, addresszTLklAy, uintPWlxR25, {from: accounts[4]});
//		const booldjxWwLN = await UFragmentsrvCbx9o.transferFrom.call(addressLcsjG5, addresspCjAkYl, uintDl9PW7p, {from: accounts[1]});
//		const addressEw1YZkg = await UFragmentsrvCbx9o.owner.call({from: accounts[5]});
//		const boolu31Io3I = await UFragmentsrvCbx9o.transfer.call(addressWzXWJEu, uintJKI3N8h, {from: accounts[4]});
//		const boolbWAu6p = await UFragmentsrvCbx9o.transfer.call(addressuef7wJS, uintv1AvxFx, {from: accounts[1]});
//		await UFragmentsrvCbx9o.renounceOwnership.call({from: accounts[0]});
//		const stringOHPhbj = await UFragmentsrvCbx9o.symbol.call({from: accounts[2]});
//		const uint256K8LSkS = await UFragmentsrvCbx9o.balanceOf.call(addressdPiDkG5, {from: accounts[3]});

		await expect(UFragmentsrvCbx9o.initialize.call(addresses3gUHy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstvXCLG5 = await UFragments.new({from: accounts[0]});
		const intyz4w4iw = BigInt("659")
		const inty1l49fG = BigInt("1384")
		const addressFXmokZ4 = accounts[1]
		const uint8Lu2ulPC = await UFragmentstvXCLG5.decimals.call({from: accounts[4]});
		const stringoW5v6nb = await UFragmentstvXCLG5.symbol.call({from: accounts[0]});
//		const int256aJPiAgi = await UFragmentstvXCLG5.sub.call(inty1l49fG, intyz4w4iw, {from: accounts[0]});
//		const uint256BVQg6nm = await UFragmentstvXCLG5.balanceOf.call(addressFXmokZ4, {from: accounts[0]});

		assert.equal(stringoW5v6nb, "")
		assert.equal(uint8Lu2ulPC, BigInt("0"))
		await expect(UFragmentstvXCLG5.sub.call(inty1l49fG, intyz4w4iw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstvXCLG5 = await UFragments.new({from: accounts[0]});
		const uintfPJIy1C = BigInt("345")
		const addressAqBdjjn = accounts[0]
		const addressv6C32Q8 = accounts[1]
		const boolaVAfEnw = await UFragmentstvXCLG5.approve.call(addressAqBdjjn, uintfPJIy1C, {from: accounts[1]});
//		const uint256N0UzHnH = await UFragmentstvXCLG5.calRebase.call({from: accounts[3]});
//		const uint8Lu2ulPC = await UFragmentstvXCLG5.decimals.call({from: accounts[4]});
//		const uint256BVQg6nm = await UFragmentstvXCLG5.balanceOf.call(addressv6C32Q8, {from: accounts[0]});
//		const boolnMIWv7R = await UFragmentstvXCLG5.isOwner.call({from: accounts[0]});

		assert.equal(boolaVAfEnw, true)
		await expect(UFragmentstvXCLG5.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsa8xlMzM = await UFragments.new({from: accounts[2]});
		const stringQMUT7th = await UFragmentsa8xlMzM.symbol.call({from: accounts[5]});
		const uint256iRfIZcB = await UFragmentsa8xlMzM.totalSupply.call({from: accounts[3]});

		assert.equal(stringQMUT7th, "")
		assert.equal(uint256iRfIZcB, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsFUYTusU = await UFragments.new({from: accounts[2]});
		const intSxJwEqM = BigInt("-661")
		const intpOlZ9RB = BigInt("356")
		const uintZcxK7kr = BigInt("817")
		const addressqyAbecS = accounts[5]
		const intC1qY5R = BigInt("-1702")
		const intJBc5iPi = BigInt("209")
		const booljhO9Za = await UFragmentsFUYTusU.rebaseTimeInfo.call({from: accounts[4]});
//		const int256BlDFj5D = await UFragmentsFUYTusU.mul.call(intpOlZ9RB, intSxJwEqM, {from: accounts[4]});
//		const addressFwqvl3O = await UFragmentsFUYTusU.initRebase.call(addressqyAbecS, uintZcxK7kr, {from: accounts[2]});
//		const int256OHnuKvx = await UFragmentsFUYTusU.add.call(intJBc5iPi, intC1qY5R, {from: accounts[1]});

		await expect(UFragmentsFUYTusU.mul.call(intpOlZ9RB, intSxJwEqM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
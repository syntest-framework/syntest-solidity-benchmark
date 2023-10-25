const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADVNh9iA = await ZAD.new({from: accounts[2]});
		const uintAqntSDv = BigInt("112")
		const addressWv1QrhI = accounts[0]
		const uintd4Gwfai = BigInt("1763")
		const addressFHSazrh = accounts[2]
		const addressz2Bl1ia = accounts[2]
		const uint256NsFPJkK = await ZADVNh9iA.totalSupply.call({from: accounts[0]});
		const boolipWsKN = await ZADVNh9iA.decreaseAllowance.call(addressWv1QrhI, uintAqntSDv, {from: accounts[2]});
		const boolmZc9eJM = await ZADVNh9iA.transferFrom.call(addressz2Bl1ia, addressFHSazrh, uintd4Gwfai, {from: accounts[2]});

		assert.equal(uint256NsFPJkK, BigInt("100000000000000000000000000"))
		await expect(ZADVNh9iA.decreaseAllowance.call(addressWv1QrhI, uintAqntSDv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVa2IU6H = await ZAD.new({from: accounts[4]});
		const uintnOh7Usv = BigInt("1936")
		const addresswdAy3xZ = accounts[0]
		const addressOJJs3In = accounts[3]
		const addressvHw31SM = accounts[2]
		const addressepszobT = accounts[1]
		const uintYKXAp0i = BigInt("1584")
		const addressw2VIU2b = accounts[5]
		const boolcYNkNx = await ZADVa2IU6H.transferFrom.call(addressOJJs3In, addresswdAy3xZ, uintnOh7Usv, {from: accounts[1]});
		const uint256OBMbvrr = await ZADVa2IU6H.allowance.call(addressepszobT, addressvHw31SM, {from: accounts[1]});
		const boold9p7Fd5 = await ZADVa2IU6H.transfer.call(addressw2VIU2b, uintYKXAp0i, {from: accounts[4]});
		const stringofrxFjn = await ZADVa2IU6H.symbol.call({from: accounts[4]});
		const uint8mxk2hJv = await ZADVa2IU6H.decimals.call({from: accounts[0]});

		await expect(ZADVa2IU6H.transferFrom.call(addressOJJs3In, addresswdAy3xZ, uintnOh7Usv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADfjQbSpM = await ZAD.new({from: accounts[2]});
		const addressaYAONA0 = accounts[0]
		const addressEoaj3d2 = accounts[0]
		const uint2fhmON = BigInt("735")
		const addressGcU2LoF = accounts[5]
		const uintAUzuHP5 = BigInt("1582")
		const addressZrLsaif = accounts[0]
		const addresss0Mfslb = accounts[2]
		const uintR9wlcOR = BigInt("1552")
		const addressZT9xD2l = accounts[1]
		const uint256XNRVGE8 = await ZADfjQbSpM.balanceOf.call(addressaYAONA0, {from: accounts[4]});
		const uint256mUzVeAy = await ZADfjQbSpM.balanceOf.call(addressEoaj3d2, {from: accounts[3]});
		const boolbpiyKZy = await ZADfjQbSpM.increaseAllowance.call(addressGcU2LoF, uint2fhmON, {from: accounts[3]});
		const booluJTP0E = await ZADfjQbSpM.transferFrom.call(addresss0Mfslb, addressZrLsaif, uintAUzuHP5, {from: accounts[4]});
		const boolONmpqm9 = await ZADfjQbSpM.approve.call(addressZT9xD2l, uintR9wlcOR, {from: accounts[1]});

		assert.equal(boolbpiyKZy, true)
		assert.equal(uint256XNRVGE8, BigInt("0"))
		assert.equal(uint256mUzVeAy, BigInt("0"))
		await expect(ZADfjQbSpM.transferFrom.call(addresss0Mfslb, addressZrLsaif, uintAUzuHP5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADObq3TaK = await ZAD.new({from: accounts[5]});
		const uintR9HDb1 = BigInt("211")
		const addresstyeMXK = accounts[5]
		const uintW1lC3lw = BigInt("407")
		const addressRfn8Tgt = "0x0000000000000000000000000000000000000001"
		const uintLk1flvw = BigInt("1714")
		const addressY4Y42OO = accounts[3]
		const uintRxTjPFS = BigInt("1248")
		const addressYZ9jNHL = accounts[2]
		const boolhyPLDA = await ZADObq3TaK.approve.call(addresstyeMXK, uintR9HDb1, {from: accounts[3]});
		const boolpLySE3C = await ZADObq3TaK.decreaseAllowance.call(addressRfn8Tgt, uintW1lC3lw, {from: accounts[2]});
		const stringeNUKSr = await ZADObq3TaK.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolj7fDezV = await ZADObq3TaK.approve.call(addressY4Y42OO, uintLk1flvw, {from: accounts[4]});
		const stringYQlSNrF = await ZADObq3TaK.symbol.call({from: accounts[0]});
		const boolLT4iYyP = await ZADObq3TaK.approve.call(addressYZ9jNHL, uintRxTjPFS, {from: accounts[1]});

		assert.equal(boolhyPLDA, true)
		await expect(ZADObq3TaK.decreaseAllowance.call(addressRfn8Tgt, uintW1lC3lw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZCRZ7S8 = await ZAD.new({from: accounts[4]});
		const addressLl8Iz9s = accounts[2]
		const addressGbcE6v = accounts[0]
		const uintdxlHNS = BigInt("1933")
		const addressb7RMCvi = accounts[2]
		const uintp2tM2pC = BigInt("1112")
		const addresst1V1yXl = accounts[4]
		const addressoMrizaE = "0x0000000000000000000000000000000000000001"
		const addressZLFHtS7 = accounts[2]
		const addressGIP0ydv = accounts[2]
		const uintAXiFyx7 = BigInt("1622")
		const addressXyYpd7 = accounts[0]
		const uint256mzIZm4p = await ZADZCRZ7S8.allowance.call(addressGbcE6v, addressLl8Iz9s, {from: accounts[1]});
		const boolCJD40CJ = await ZADZCRZ7S8.approve.call(addressb7RMCvi, uintdxlHNS, {from: accounts[3]});
		const boolV7dFg21 = await ZADZCRZ7S8.transferFrom.call(addressoMrizaE, addresst1V1yXl, uintp2tM2pC, {from: accounts[2]});
		const uint256W7gzLYk = await ZADZCRZ7S8.allowance.call(addressGIP0ydv, addressZLFHtS7, {from: accounts[0]});
		const booller7PUA = await ZADZCRZ7S8.decreaseAllowance.call(addressXyYpd7, uintAXiFyx7, {from: accounts[3]});

		assert.equal(boolCJD40CJ, true)
		assert.equal(uint256mzIZm4p, BigInt("0"))
		await expect(ZADZCRZ7S8.transferFrom.call(addressoMrizaE, addresst1V1yXl, uintp2tM2pC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADzWbdr3B = await ZAD.new({from: accounts[2]});
		const uintbBhFwNZ = BigInt("1971")
		const addressIb4NfWP = accounts[2]
		const uintQCHahZS = BigInt("526")
		const uintr51onrA = BigInt("1063")
		const addressdYKzKn = accounts[0]
		const uinta38EhE = BigInt("420")
		const addressyGjDNsU = accounts[2]
		const booluEeCWsr = await ZADzWbdr3B.approve.call(addressIb4NfWP, uintbBhFwNZ, {from: accounts[1]});
		const uint256H9SV0Kq = await ZADzWbdr3B._burn.call(uintQCHahZS, {from: accounts[2]});
		const boolDC8ZWwr = await ZADzWbdr3B.increaseAllowance.call(addressdYKzKn, uintr51onrA, {from: accounts[1]});
		const boolZz134RB = await ZADzWbdr3B.increaseAllowance.call(addressyGjDNsU, uinta38EhE, {from: accounts[3]});

		assert.equal(booluEeCWsr, true)
		await expect(ZADzWbdr3B._burn.call(uintQCHahZS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvGEdRVp = await ZAD.new({from: accounts[5]});
		const uintVJKaItT = BigInt("368")
		const addresstBVyBsU = accounts[4]
		const uintVLxmuTm = BigInt("576")
		const addresscwVVkqm = accounts[1]
		const uintODsIZYv = BigInt("1248")
		const addressH9Ttysr = accounts[0]
		const uintEDICHAP = BigInt("1612")
		const addresswRYnbw7 = accounts[4]
		const uintmyAP0xh = BigInt("557")
		const addressfrvf1wz = accounts[1]
		const boolcZixtOe = await ZADvGEdRVp.transfer.call(addresstBVyBsU, uintVJKaItT, {from: accounts[4]});
		const boolht95vlN = await ZADvGEdRVp.approve.call(addresscwVVkqm, uintVLxmuTm, {from: accounts[0]});
		const boolzxOIq9b = await ZADvGEdRVp.approve.call(addressH9Ttysr, uintODsIZYv, {from: accounts[3]});
		const boolEgdRX3 = await ZADvGEdRVp.decreaseAllowance.call(addresswRYnbw7, uintEDICHAP, {from: accounts[0]});
		const uint256Vo04DSu = await ZADvGEdRVp._burn.call(uintmyAP0xh, {from: accounts[3]});
		const uint256m7yL6H = await ZADvGEdRVp.balanceOf.call(addressfrvf1wz, {from: accounts[4]});

		await expect(ZADvGEdRVp.transfer.call(addresstBVyBsU, uintVJKaItT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADLWEW9Q0 = await ZAD.new({from: accounts[2]});
		const addressECAeXk = "0x0000000000000000000000000000000000000001"
		const uintO0xtCoc = BigInt("1463")
		const addressU32QIG = accounts[3]
		const addressS3wyO4C = accounts[2]
		const addressOUvQ1S = accounts[0]
		const uint256ouSZ0vW = await ZADLWEW9Q0.balanceOf.call(addressECAeXk, {from: accounts[3]});
		const uint8uagAhp3 = await ZADLWEW9Q0.decimals.call({from: accounts[4]});
		const boolTVTyyh = await ZADLWEW9Q0.increaseAllowance.call(addressU32QIG, uintO0xtCoc, {from: accounts[3]});
		const uint256sHNXda = await ZADLWEW9Q0.totalSupply.call({from: accounts[2]});
		const uint256gicaVvb = await ZADLWEW9Q0.allowance.call(addressOUvQ1S, addressS3wyO4C, {from: accounts[1]});

		assert.equal(boolTVTyyh, true)
		assert.equal(uint256gicaVvb, BigInt("0"))
		assert.equal(uint256ouSZ0vW, BigInt("0"))
		assert.equal(uint256sHNXda, BigInt("100000000000000000000000000"))
		assert.equal(uint8uagAhp3, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADfjQbSpM = await ZAD.new({from: accounts[2]});
		const addresscxEZZY5 = accounts[0]
		const addressAX49Y0i = accounts[0]
		const uintkNYFeGk = BigInt("1978")
		const addressbP8vRL = accounts[3]
		const addressIyplo54 = accounts[4]
		const addressombWBg8 = accounts[4]
		const uinteyaP0L3 = BigInt("735")
		const addressEwueqn = accounts[5]
		const uintRp1ZMvi = BigInt("1582")
		const addressjogT0Lx = accounts[0]
		const addressqohsBMY = accounts[2]
		const uintN5cf0cw = BigInt("1552")
		const addressx3h0VFf = accounts[1]
		const uint256XNRVGE8 = await ZADfjQbSpM.balanceOf.call(addresscxEZZY5, {from: accounts[4]});
		const uint256mUzVeAy = await ZADfjQbSpM.balanceOf.call(addressAX49Y0i, {from: accounts[3]});
		const boolDrX1EX3 = await ZADfjQbSpM.approve.call(addressbP8vRL, uintkNYFeGk, {from: accounts[0]});
		const uint256h2GrZcd = await ZADfjQbSpM.totalSupply.call({from: accounts[5]});
		const uint256FZkTgvy = await ZADfjQbSpM.allowance.call(addressombWBg8, addressIyplo54, {from: accounts[1]});
		const stringOUS0d98 = await ZADfjQbSpM.symbol.call({from: accounts[2]});
		const boolbpiyKZy = await ZADfjQbSpM.increaseAllowance.call(addressEwueqn, uinteyaP0L3, {from: accounts[3]});
		const booluJTP0E = await ZADfjQbSpM.transferFrom.call(addressqohsBMY, addressjogT0Lx, uintRp1ZMvi, {from: accounts[4]});
		const boolONmpqm9 = await ZADfjQbSpM.approve.call(addressx3h0VFf, uintN5cf0cw, {from: accounts[1]});

		assert.equal(boolDrX1EX3, true)
		assert.equal(boolbpiyKZy, true)
		assert.equal(stringOUS0d98, "ZAD")
		assert.equal(uint256FZkTgvy, BigInt("0"))
		assert.equal(uint256XNRVGE8, BigInt("0"))
		assert.equal(uint256h2GrZcd, BigInt("100000000000000000000000000"))
		assert.equal(uint256mUzVeAy, BigInt("0"))
		await expect(ZADfjQbSpM.transferFrom.call(addressqohsBMY, addressjogT0Lx, uintRp1ZMvi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmbqifnO = await ZAD.new({from: accounts[0]});
		const uintIsHUmQi = BigInt("908")
		const addressObYmlh = accounts[2]
		const addressXC4rL3B = accounts[0]
		const addressXxSqcsi = accounts[0]
		const uintEOIJkZA = BigInt("1993")
		const addressaASREOw = accounts[0]
		const stringe0BmSxc = await ZADmbqifnO.name.call({from: accounts[3]});
		const boollY2nQP = await ZADmbqifnO.decreaseAllowance.call(addressObYmlh, uintIsHUmQi, {from: accounts[5]});
		const uint256k92NRrf = await ZADmbqifnO.allowance.call(addressXxSqcsi, addressXC4rL3B, {from: accounts[4]});
		const stringK8BbXT = await ZADmbqifnO.name.call({from: accounts[2]});
		const uint8oM81kn1 = await ZADmbqifnO.decimals.call({from: accounts[0]});
		const boolr4KaJ1q = await ZADmbqifnO.approve.call(addressaASREOw, uintEOIJkZA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringe0BmSxc, "Zadkiel")
		await expect(ZADmbqifnO.decreaseAllowance.call(addressObYmlh, uintIsHUmQi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZCRZ7S8 = await ZAD.new({from: accounts[4]});
		const addressYowftSm = accounts[2]
		const address1Lppqf = accounts[0]
		const uintwexyQRF = BigInt("1933")
		const addressaZDgHhV = accounts[2]
		const uintk1gKt9e = BigInt("0")
		const addressMuBa1yZ = accounts[0]
		const uintMgtFxlR = BigInt("1112")
		const addresszrw8KpD = accounts[4]
		const addressKGzQgcu = "0x0000000000000000000000000000000000000001"
		const uintxfv8giH = BigInt("530")
		const addressAIKDz8S = accounts[4]
		const addressQdw6wzV = accounts[3]
		const addressKztlki9 = accounts[2]
		const addressCxZ1rkE = accounts[2]
		const uintohJ2E7x = BigInt("898")
		const address6l51DJ = accounts[2]
		const addressdP4E6nv = accounts[4]
		const uintNdNHteO = BigInt("1622")
		const addresslNI2O6M = accounts[0]
		const uint256mzIZm4p = await ZADZCRZ7S8.allowance.call(address1Lppqf, addressYowftSm, {from: accounts[1]});
		const boolCJD40CJ = await ZADZCRZ7S8.approve.call(addressaZDgHhV, uintwexyQRF, {from: accounts[3]});
		const boolGBG2Kvm = await ZADZCRZ7S8.decreaseAllowance.call(addressMuBa1yZ, uintk1gKt9e, {from: accounts[2]});
		const boolV7dFg21 = await ZADZCRZ7S8.transferFrom.call(addressKGzQgcu, addresszrw8KpD, uintMgtFxlR, {from: accounts[2]});
		const boolsZyYNV = await ZADZCRZ7S8.transferFrom.call(addressQdw6wzV, addressAIKDz8S, uintxfv8giH, {from: accounts[1]});
		const uint2564wyNdc = await ZADZCRZ7S8.totalSupply.call({from: accounts[1]});
		const uint256W7gzLYk = await ZADZCRZ7S8.allowance.call(addressCxZ1rkE, addressKztlki9, {from: accounts[0]});
		const boolGruOvkq = await ZADZCRZ7S8.increaseAllowance.call(address6l51DJ, uintohJ2E7x, {from: accounts[0]});
		const uint256qK9kkZ8 = await ZADZCRZ7S8.balanceOf.call(addressdP4E6nv, {from: accounts[5]});
		const booller7PUA = await ZADZCRZ7S8.decreaseAllowance.call(addresslNI2O6M, uintNdNHteO, {from: accounts[3]});

		assert.equal(boolCJD40CJ, true)
		assert.equal(boolGBG2Kvm, true)
		assert.equal(uint256mzIZm4p, BigInt("0"))
		await expect(ZADZCRZ7S8.transferFrom.call(addressKGzQgcu, addresszrw8KpD, uintMgtFxlR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWxk9K8L = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressph7SakD = accounts[4]
		const address1SBxoj = accounts[0]
		const uintFWkcdqP = BigInt("1856")
		const addressuhoOpaD = accounts[4]
		const uint256w6n3ukT = await ZADWxk9K8L.totalSupply.call({from: accounts[0]});
		const uint256WhXX0T = await ZADWxk9K8L.allowance.call(address1SBxoj, addressph7SakD, {from: accounts[2]});
		const uint256VQKh2TH = await ZADWxk9K8L.totalSupply.call({from: accounts[4]});
		const boolwqAoqAs = await ZADWxk9K8L.increaseAllowance.call(addressuhoOpaD, uintFWkcdqP, {from: "0x0000000000000000000000000000000000000001"});
		const stringyKRwaB = await ZADWxk9K8L.symbol.call({from: accounts[3]});
	});
})
const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYhGbq6TH = await KPLAY.new({from: accounts[5]});
		const addressggZn09b = accounts[1]
		const uintnyj7we = BigInt("792")
		const addressQ0NrMQC = accounts[1]
		const addressXFyv4xS = accounts[4]
//		const addressmHneJf = await KPLAYhGbq6TH.transferOwnership.call(addressggZn09b, {from: accounts[2]});
//		const boolphQ1qXK = await KPLAYhGbq6TH.transferFrom.call(addressXFyv4xS, addressQ0NrMQC, uintnyj7we, {from: accounts[4]});
//		await KPLAYhGbq6TH.whenNotFrozen.call({from: accounts[2]});

		await expect(KPLAYhGbq6TH.transferOwnership.call(addressggZn09b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintYptL2XW = BigInt("628")
		const addresscJJUlFw = accounts[1]
		const address2yKEPO = accounts[2]
		const uintMm3Ir7n = BigInt("758")
		const addressvTbPEzQ = accounts[3]
		const uintVHA39bC = BigInt("1161")
		const addressdJ2O6Wd = accounts[0]
		const addressfM001Ws = accounts[3]
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(address2yKEPO, addresscJJUlFw, uintYptL2XW, {from: accounts[4]});
//		const booluLmNsd8 = await KPLAYAtqr2Jr.approve.call(addressvTbPEzQ, uintMm3Ir7n, {from: accounts[4]});
//		await KPLAYAtqr2Jr.whenNotPaused.call({from: accounts[0]});
//		const addressV1OzxPv = await KPLAYAtqr2Jr.burn.call(addressdJ2O6Wd, uintVHA39bC, {from: accounts[4]});
//		const addressRVDG9gz = await KPLAYAtqr2Jr.transferOwnership.call(addressfM001Ws, {from: accounts[4]});

		await expect(KPLAYAtqr2Jr.transferFrom.call(address2yKEPO, addresscJJUlFw, uintYptL2XW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const uintOSqFRsu = BigInt("1097")
		const addressYXa9rg = accounts[5]
		const uintIIAaif5 = BigInt("950")
		const addressigiKblw = accounts[5]
		const boolaTS4zfb = await KPLAYBf5cIrx.increaseAllowance.call(addressYXa9rg, uintOSqFRsu, {from: accounts[0]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressigiKblw, uintIIAaif5, {from: accounts[2]});

		assert.equal(boolaTS4zfb, true)
		await expect(KPLAYBf5cIrx.burn.call(addressigiKblw, uintIIAaif5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYS5JuIPa = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintutDHduo = BigInt("1068")
		const uinta0xnSWi = BigInt("1440")
		const addressv4EXbRl = accounts[3]
		const uintyVoHv8s = BigInt("945")
		const addressgAyuLYr = accounts[0]
		const boolvXwZuHs = await KPLAYS5JuIPa.transferWithLockAfter.call(addressv4EXbRl, uinta0xnSWi, uintutDHduo, {from: accounts[5]});
		const boolsdCrbCY = await KPLAYS5JuIPa.increaseAllowance.call(addressgAyuLYr, uintyVoHv8s, {from: accounts[1]});
		await KPLAYS5JuIPa.pause.call({from: accounts[1]});
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const uintorBKYIr = BigInt("1097")
		const addresscP9d7k3 = accounts[5]
		const uinth2rSudZ = BigInt("1571")
		const addresslUMrCVZ = accounts[5]
		const uinth7Y9Xv = BigInt("950")
		const addressfKmZ5LL = accounts[5]
		const boolaTS4zfb = await KPLAYBf5cIrx.increaseAllowance.call(addresscP9d7k3, uintorBKYIr, {from: accounts[0]});
		const boolYTfCGkT = await KPLAYBf5cIrx.increaseAllowance.call(addresslUMrCVZ, uinth2rSudZ, {from: accounts[5]});
//		await KPLAYBf5cIrx.whenNotPaused.call({from: accounts[4]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressfKmZ5LL, uinth7Y9Xv, {from: accounts[2]});

		assert.equal(boolYTfCGkT, true)
		assert.equal(boolaTS4zfb, true)
		await expect(KPLAYBf5cIrx.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const uintQjkr6cB = BigInt("1097")
		const addressUiBPsBu = accounts[5]
		const uintlH96h3y = BigInt("1486")
		const uintcTr1wbe = BigInt("1192")
		const addressg7ZOIFH = accounts[2]
		const uinttE27LeC = BigInt("977")
		const addressA4nSnet = accounts[5]
		const boolaTS4zfb = await KPLAYBf5cIrx.increaseAllowance.call(addressUiBPsBu, uintQjkr6cB, {from: accounts[0]});
		const bool8cIfbd = await KPLAYBf5cIrx.transferWithLock.call(addressg7ZOIFH, uintcTr1wbe, uintlH96h3y, {from: accounts[3]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressA4nSnet, uinttE27LeC, {from: accounts[2]});

		assert.equal(bool8cIfbd, true)
		assert.equal(boolaTS4zfb, true)
		await expect(KPLAYBf5cIrx.burn.call(addressA4nSnet, uinttE27LeC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const uinth6uHhUE = BigInt("1097")
		const addressfXHJVcI = accounts[5]
		const addressZmVe7Gd = accounts[0]
		const uintSUBf2Hz = BigInt("2036")
		const uintcQLEZ27 = BigInt("1833")
		const addressOdGft3O = accounts[3]
		const uintp6ashGz = BigInt("950")
		const addressRjwL6U = accounts[6]
		const boolaTS4zfb = await KPLAYBf5cIrx.increaseAllowance.call(addressfXHJVcI, uinth6uHhUE, {from: accounts[0]});
		const boolor75hoU = await KPLAYBf5cIrx.isFrozen.call(addressZmVe7Gd, {from: accounts[0]});
		const boolqmA0o6p = await KPLAYBf5cIrx.transferWithLockAfter.call(addressOdGft3O, uintcQLEZ27, uintSUBf2Hz, {from: accounts[3]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressRjwL6U, uintp6ashGz, {from: accounts[2]});

		assert.equal(boolaTS4zfb, true)
		assert.equal(boolor75hoU, false)
		assert.equal(boolqmA0o6p, true)
		await expect(KPLAYBf5cIrx.burn.call(addressRjwL6U, uintp6ashGz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintmypJiQg = BigInt("758")
		const addressTGka6Is = accounts[3]
		const uinteqvtQx = BigInt("1161")
		const addressYCqETex = accounts[0]
		const addressFge8OT6 = accounts[3]
		const booluLmNsd8 = await KPLAYAtqr2Jr.approve.call(addressTGka6Is, uintmypJiQg, {from: accounts[4]});
//		await KPLAYAtqr2Jr.whenNotPaused.call({from: accounts[0]});
//		const addressV1OzxPv = await KPLAYAtqr2Jr.burn.call(addressYCqETex, uinteqvtQx, {from: accounts[4]});
//		const addressRVDG9gz = await KPLAYAtqr2Jr.transferOwnership.call(addressFge8OT6, {from: accounts[4]});

		assert.equal(booluLmNsd8, true)
		await expect(KPLAYAtqr2Jr.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressuF7rR36 = accounts[4]
		const uintXRdT3V = BigInt("1560")
		const addressS2Gz7cO = accounts[5]
		const addressMFF31l2 = accounts[0]
		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addressuF7rR36, {from: accounts[0]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressS2Gz7cO, uintXRdT3V, {from: accounts[2]});
//		const addressLvDcDv8 = await KPLAYBf5cIrx.transferOwnership.call(addressMFF31l2, {from: accounts[4]});

		assert.equal(uint256fP45Ec4, BigInt("0"))
		await expect(KPLAYBf5cIrx.burn.call(addressS2Gz7cO, uintXRdT3V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOjKYdBC = await KPLAY.new({from: accounts[2]});
		const uintMDfsPIV = BigInt("508")
		const addressJG9bGkz = accounts[1]
		const uintCm5Z3oe = BigInt("1064")
		const addresssybSfem = accounts[1]
		const uintQJYIa3C = BigInt("584")
		const addressFXd9J1h = accounts[0]
		const uintO7FrZUS = BigInt("970")
		const uinthgZyv0s = BigInt("256")
		const addressnOPWwJH = accounts[1]
		const uintqDDc01d = BigInt("1623")
		const uintg2v30ti = BigInt("162")
		const addressvtopW83 = accounts[0]
//		const boolE6VKSvE = await KPLAYOjKYdBC.transfer.call(addressJG9bGkz, uintMDfsPIV, {from: accounts[5]});
//		const addressJzZGqq = await KPLAYOjKYdBC.burn.call(addresssybSfem, uintCm5Z3oe, {from: accounts[2]});
//		const boolC0kZVUr = await KPLAYOjKYdBC.transfer.call(addressFXd9J1h, uintQJYIa3C, {from: accounts[4]});
//		const boolEcCpw2F = await KPLAYOjKYdBC.transferWithLockAfter.call(addressnOPWwJH, uinthgZyv0s, uintO7FrZUS, {from: accounts[0]});
//		const addressjUZjAAP = await KPLAYOjKYdBC.lock.call(addressvtopW83, uintg2v30ti, uintqDDc01d, {from: accounts[0]});

		await expect(KPLAYOjKYdBC.transfer.call(addressJG9bGkz, uintMDfsPIV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYN8fBLjC = await KPLAY.new({from: accounts[1]});
		const uintNuDW85A = BigInt("842")
		const uint0oXlMR = BigInt("216")
		const addressVQdZmEy = accounts[5]
		const uint256KJplj5E = await KPLAYN8fBLjC.totalSupply.call({from: accounts[2]});
//		const addressVNH1Im7 = await KPLAYN8fBLjC.lock.call(addressVQdZmEy, uint0oXlMR, uintNuDW85A, {from: accounts[0]});
//		await KPLAYN8fBLjC.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256KJplj5E, BigInt("10000000000000000"))
		await expect(KPLAYN8fBLjC.lock.call(addressVQdZmEy, uint0oXlMR, uintNuDW85A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addresshzsWrmL = accounts[5]
		const addressyiT6Odv = accounts[0]
		const addressmgKtOIr = accounts[1]
		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addresshzsWrmL, {from: accounts[0]});
		const uint256obi5IU8 = await KPLAYBf5cIrx.lockCount.call(addressyiT6Odv, {from: accounts[2]});
//		const addressLvDcDv8 = await KPLAYBf5cIrx.transferOwnership.call(addressmgKtOIr, {from: accounts[4]});

		assert.equal(uint256fP45Ec4, BigInt("0"))
		assert.equal(uint256obi5IU8, BigInt("0"))
		await expect(KPLAYBf5cIrx.transferOwnership.call(addressmgKtOIr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCoMZF7n = await KPLAY.new({from: accounts[4]});
		const uinta7jJ65r = BigInt("435")
		const addressT8zFUVF = accounts[1]
		const addressm5yt7of = accounts[0]
		const addresspmthEP = "0x0000000000000000000000000000000000000001"
		const uint7DtCr9 = BigInt("1911")
		const addressHL5FWBa = "0x0000000000000000000000000000000000000001"
		const uintuPzr16p = BigInt("1878")
		const addressmQLjebj = accounts[1]
//		await KPLAYCoMZF7n.lockState.call(addressT8zFUVF, uinta7jJ65r, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256V2hypR = await KPLAYCoMZF7n.allowance.call(addresspmthEP, addressm5yt7of, {from: accounts[2]});
//		const addressARSavRJ = await KPLAYCoMZF7n.burn.call(addressHL5FWBa, uint7DtCr9, {from: accounts[3]});
//		await KPLAYCoMZF7n.pause.call({from: accounts[5]});
//		const boolJc8USf = await KPLAYCoMZF7n.mint.call(addressmQLjebj, uintuPzr16p, {from: accounts[1]});

		await expect(KPLAYCoMZF7n.lockState.call(addressT8zFUVF, uinta7jJ65r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintCTVQwO3 = BigInt("628")
		const addressfE9JtLU = accounts[1]
		const addressKoXi01U = accounts[3]
		const uintyVCOrc = BigInt("1536")
		const addressq1GM1wD = accounts[0]
		const uintFGAxgvf = BigInt("1161")
		const addressg3ipgHb = accounts[0]
		const uint256PJXvLSZ = await KPLAYAtqr2Jr.currentTime.call({from: accounts[3]});
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(addressKoXi01U, addressfE9JtLU, uintCTVQwO3, {from: accounts[4]});
//		const boolhkTOFDH = await KPLAYAtqr2Jr.mint.call(addressq1GM1wD, uintyVCOrc, {from: accounts[2]});
//		const addressV1OzxPv = await KPLAYAtqr2Jr.burn.call(addressg3ipgHb, uintFGAxgvf, {from: accounts[4]});

		assert.equal(uint256PJXvLSZ, BigInt("1630227909"))
		await expect(KPLAYAtqr2Jr.transferFrom.call(addressKoXi01U, addressfE9JtLU, uintCTVQwO3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const addressutJLEP = accounts[1]
		const addressyXPkdJu = accounts[0]
		const uinthnv6ua4 = BigInt("628")
		const addressC9jnim = accounts[3]
		const addressHaNTpv9 = accounts[3]
		const addressxUcUkf1 = "0x0000000000000000000000000000000000000001"
		const uint256Kf9CiCS = await KPLAYAtqr2Jr.allowance.call(addressyXPkdJu, addressutJLEP, {from: accounts[2]});
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(addressHaNTpv9, addressC9jnim, uinthnv6ua4, {from: accounts[4]});
//		const address30UMKV = await KPLAYAtqr2Jr.transferOwnership.call(addressxUcUkf1, {from: accounts[1]});

		assert.equal(uint256Kf9CiCS, BigInt("0"))
		await expect(KPLAYAtqr2Jr.transferFrom.call(addressHaNTpv9, addressC9jnim, uinthnv6ua4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressmARkaOV = accounts[2]
		const addressTJ4jzq1 = accounts[5]
		const uint2USz0q = BigInt("950")
		const addressXqbKuBl = accounts[6]
		const addressE7n2u8x = await KPLAYBf5cIrx.unfreeze.call(addressmARkaOV, {from: accounts[3]});
		const addressU2HIXZe = await KPLAYBf5cIrx.transferOwnership.call(addressTJ4jzq1, {from: accounts[3]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addressXqbKuBl, uint2USz0q, {from: accounts[2]});
//		const uint256dtEBv9P = await KPLAYBf5cIrx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYBf5cIrx.burn.call(addressXqbKuBl, uint2USz0q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintK8F6DlN = BigInt("1499")
		const addressxmX4TzQ = accounts[3]
		const address34exeO = accounts[2]
		const uintDN8cf2U = BigInt("647")
		const addressywG5xts = accounts[2]
		const addressekeM41l = accounts[3]
//		const booleMUyMV = await KPLAYAtqr2Jr.decreaseAllowance.call(addressxmX4TzQ, uintK8F6DlN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tv1AFG2 = await KPLAYAtqr2Jr.balanceOf.call(address34exeO, {from: accounts[0]});
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(addressekeM41l, addressywG5xts, uintDN8cf2U, {from: accounts[4]});

		await expect(KPLAYAtqr2Jr.decreaseAllowance.call(addressxmX4TzQ, uintK8F6DlN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressg9WvxwS = accounts[5]
		const addressuJABZXJ = accounts[4]
		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addressg9WvxwS, {from: accounts[0]});
		const uint256UhZL2Bo = await KPLAYBf5cIrx.balanceOf.call(addressuJABZXJ, {from: accounts[3]});
//		await KPLAYBf5cIrx.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256UhZL2Bo, BigInt("0"))
		assert.equal(uint256fP45Ec4, BigInt("0"))
		await expect(KPLAYBf5cIrx.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressZsUbKDv = accounts[5]
		const uintAEcrKMQ = BigInt("993")
		const uint256siffhP = await KPLAYBf5cIrx.currentTime.call({from: accounts[1]});
		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addressZsUbKDv, {from: accounts[0]});
		const uint256XjtayQe = await KPLAYBf5cIrx.afterTime.call(uintAEcrKMQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XjtayQe, BigInt("1630228906"))
		assert.equal(uint256fP45Ec4, BigInt("0"))
		assert.equal(uint256siffhP, BigInt("1630227913"))
	});

	it('test for KPLAY', async () => {
		const KPLAYxbgfloA = await KPLAY.new({from: accounts[0]});
		const uintj1GnIM2 = BigInt("15")
		const addressNcPfcw1 = accounts[1]
		const uintG0AUfJ0 = BigInt("1328")
		const addressiCa23wa = accounts[5]
		const addresshETPp8 = accounts[1]
//		await KPLAYxbgfloA.pause.call({from: accounts[0]});
//		const boolP0xr2j = await KPLAYxbgfloA.increaseAllowance.call(addressNcPfcw1, uintj1GnIM2, {from: accounts[1]});
//		await KPLAYxbgfloA.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolsH0e385 = await KPLAYxbgfloA.transferFrom.call(addresshETPp8, addressiCa23wa, uintG0AUfJ0, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYxbgfloA.renounceOwnership.call({from: accounts[3]});
//		await KPLAYxbgfloA.whenPaused.call({from: accounts[1]});

		await expect(KPLAYxbgfloA.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const uintkjTZMzC = BigInt("466")
		const addressUulcj9R = accounts[0]
		const uintgeRheZc = BigInt("4")
		const address8h1sSy = accounts[5]
		const addressniSDvR = accounts[5]
		const addressJVCX2HD = accounts[3]
//		const addressEQoYb4p = await KPLAYBf5cIrx.unlock.call(addressUulcj9R, uintkjTZMzC, {from: accounts[3]});
//		await KPLAYBf5cIrx.lockState.call(address8h1sSy, uintgeRheZc, {from: accounts[3]});
//		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addressniSDvR, {from: accounts[0]});
//		const uint256N99nuzF = await KPLAYBf5cIrx.lockCount.call(addressJVCX2HD, {from: accounts[1]});

		await expect(KPLAYBf5cIrx.unlock.call(addressUulcj9R, uintkjTZMzC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYx8uhM5l = await KPLAY.new({from: accounts[4]});
		const addressCvj8Kwj = accounts[1]
		const addressVuqFvD3 = accounts[1]
		const uinti0Hdmqc = BigInt("130")
		const uintzLytEgc = BigInt("1644")
		const addressyJyra3D = accounts[4]
		const uintzo6bAdK = BigInt("1267")
		const addressCN9vJpe = accounts[0]
		const address66syc8 = accounts[1]
		const uintD7WXHNF = BigInt("452")
		const addresscoD8H1J = accounts[3]
		const uint256rfuFLvp = await KPLAYx8uhM5l.balanceOf.call(addressCvj8Kwj, {from: accounts[5]});
		const boolmwWZan = await KPLAYx8uhM5l.isFrozen.call(addressVuqFvD3, {from: accounts[4]});
		const addressmGR0qVb = await KPLAYx8uhM5l.lock.call(addressyJyra3D, uintzLytEgc, uinti0Hdmqc, {from: accounts[4]});
//		const boolHiZurRJ = await KPLAYx8uhM5l.transferFrom.call(address66syc8, addressCN9vJpe, uintzo6bAdK, {from: accounts[3]});
//		const boolKsq5ztl = await KPLAYx8uhM5l.increaseAllowance.call(addresscoD8H1J, uintD7WXHNF, {from: accounts[2]});
//		await KPLAYx8uhM5l.pause.call({from: accounts[3]});

		assert.equal(boolmwWZan, false)
		assert.equal(uint256rfuFLvp, BigInt("0"))
		await expect(KPLAYx8uhM5l.transferFrom.call(address66syc8, addressCN9vJpe, uintzo6bAdK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintQOI4tN8 = BigInt("1080")
		const addressLvCIilQ = accounts[0]
		const uintgjm3fnF = BigInt("1798")
		const address0yv87K = accounts[4]
		const uintIkrQ2zh = BigInt("628")
		const addressIQlAiAj = accounts[3]
		const addressj0EkWM = accounts[3]
		const uintHFTlqEj = BigInt("1098")
		const uinthe4pi5w = BigInt("1949")
		const addressewoTRZw = accounts[1]
		const addressF9eAxSk = await KPLAYAtqr2Jr.burn.call(addressLvCIilQ, uintQOI4tN8, {from: accounts[0]});
//		await KPLAYAtqr2Jr.lockState.call(address0yv87K, uintgjm3fnF, {from: accounts[1]});
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(addressj0EkWM, addressIQlAiAj, uintIkrQ2zh, {from: accounts[4]});
//		const boolJGNN5l8 = await KPLAYAtqr2Jr.transferWithLockAfter.call(addressewoTRZw, uinthe4pi5w, uintHFTlqEj, {from: accounts[1]});

		await expect(KPLAYAtqr2Jr.lockState.call(address0yv87K, uintgjm3fnF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTwG1K7I = await KPLAY.new({from: accounts[2]});
		const uintvFIWtq6 = BigInt("1914")
		const addressZYnPuSO = accounts[5]
		const addressGqlv50g = "0x0000000000000000000000000000000000000001"
		const uintCqaVKNe = BigInt("986")
		const uintEypHlbW = BigInt("817")
		const addressUoV6jKH = accounts[2]
//		const addresszpYj36A = await KPLAYTwG1K7I.burn.call(addressZYnPuSO, uintvFIWtq6, {from: accounts[2]});
//		const addressr5Fzaz9 = await KPLAYTwG1K7I.transferOwnership.call(addressGqlv50g, {from: accounts[0]});
//		const addressx9Kyt4Z = await KPLAYTwG1K7I.lockAfter.call(addressUoV6jKH, uintEypHlbW, uintCqaVKNe, {from: accounts[3]});

		await expect(KPLAYTwG1K7I.burn.call(addressZYnPuSO, uintvFIWtq6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAtqr2Jr = await KPLAY.new({from: accounts[0]});
		const uintMB54rPM = BigInt("440")
		const uinthHiYtqi = BigInt("1321")
		const addressRcso1KF = accounts[2]
		const uintsTu97V = BigInt("628")
		const addressQwROVbN = accounts[2]
		const addressnwWKHHo = accounts[4]
		const uintEISQQDi = BigInt("1440")
		const addressKOYm3Je = accounts[4]
//		const address8HSKN9 = await KPLAYAtqr2Jr.lockAfter.call(addressRcso1KF, uinthHiYtqi, uintMB54rPM, {from: accounts[0]});
//		const boolkL8EKK8 = await KPLAYAtqr2Jr.transferFrom.call(addressnwWKHHo, addressQwROVbN, uintsTu97V, {from: accounts[4]});
//		await KPLAYAtqr2Jr.lockState.call(addressKOYm3Je, uintEISQQDi, {from: accounts[0]});
//		await KPLAYAtqr2Jr.pause.call({from: accounts[5]});

		await expect(KPLAYAtqr2Jr.lockAfter.call(addressRcso1KF, uinthHiYtqi, uintMB54rPM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYQqt6lh = await KPLAY.new({from: accounts[4]});
		const uintEs3pUHz = BigInt("1782")
		const addressWw00dZx = accounts[3]
		const uintg0kPNJV = BigInt("433")
		const addressVR2GIs1 = accounts[0]
		const addressum8XAVG = accounts[3]
		const uintWPrwgp7 = BigInt("1607")
		const addressZPuX4FA = accounts[5]
		const boolmLI2t15 = await KPLAYQqt6lh.mint.call(addressWw00dZx, uintEs3pUHz, {from: accounts[4]});
//		const boolfojCjuO = await KPLAYQqt6lh.transferFrom.call(addressum8XAVG, addressVR2GIs1, uintg0kPNJV, {from: accounts[0]});
//		const addresslGF9UDC = await KPLAYQqt6lh.burn.call(addressZPuX4FA, uintWPrwgp7, {from: accounts[4]});

		assert.equal(boolmLI2t15, true)
		await expect(KPLAYQqt6lh.transferFrom.call(addressum8XAVG, addressVR2GIs1, uintg0kPNJV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressp1nkUoY = accounts[4]
//		await KPLAYBf5cIrx.unpause.call({from: accounts[3]});
//		await KPLAYBf5cIrx.whenNotFrozen.call({from: accounts[2]});
//		const uint256fP45Ec4 = await KPLAYBf5cIrx.balanceOf.call(addressp1nkUoY, {from: accounts[0]});

		await expect(KPLAYBf5cIrx.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBf5cIrx = await KPLAY.new({from: accounts[3]});
		const addressEYdwEPo = accounts[1]
		const uintxikBMar = BigInt("971")
		const addresscHrqebL = accounts[5]
		const addressiR1F0BS = await KPLAYBf5cIrx.freeze.call(addressEYdwEPo, {from: accounts[3]});
//		const address7TiGt8 = await KPLAYBf5cIrx.burn.call(addresscHrqebL, uintxikBMar, {from: accounts[2]});

		await expect(KPLAYBf5cIrx.burn.call(addresscHrqebL, uintxikBMar, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
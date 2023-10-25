const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAK9lyxVp = await TPA.new({from: accounts[0]});
		const addressG9Bacyb = accounts[3]
		const uinttlkzgET = BigInt("1376")
		const addressfLjBn0f = accounts[3]
		const uintH8z3NTj = BigInt("1924")
		const addressGb7naVA = "0x0000000000000000000000000000000000000001"
		const uintxVvRhi6 = BigInt("1279")
		const addressZ7XxooE = accounts[1]
		const addresszykJmtg = await TPAK9lyxVp.addAdmin.call(addressG9Bacyb, {from: accounts[2]});
		const boolb4AITGS = await TPAK9lyxVp.transfer.call(addressfLjBn0f, uinttlkzgET, {from: accounts[5]});
		const boolK2Q4zH = await TPAK9lyxVp.approve.call(addressGb7naVA, uintH8z3NTj, {from: accounts[1]});
		const uint256tiZvTwO = await TPAK9lyxVp.totalSupply.call({from: accounts[3]});
		const boolkjh2PyY = await TPAK9lyxVp.decreaseAllowance.call(addressZ7XxooE, uintxVvRhi6, {from: accounts[3]});

		await expect(TPAK9lyxVp.addAdmin.call(addressG9Bacyb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAs5zKR0N = await TPA.new({from: accounts[3]});
		const uintQf5lNxj = BigInt("898")
		const addressmFLNXeI = accounts[5]
		const uintKoZPx7 = BigInt("1693")
		const addresscspCzfo = accounts[1]
		const uintSriYdgF = BigInt("1386")
		const addressPwTZelo = accounts[2]
		const uintAizWCL7 = BigInt("463")
		const addressXWnoglx = accounts[0]
		const stringXoe0cmP = await TPAs5zKR0N.symbol.call({from: accounts[1]});
		const booll6wIaUF = await TPAs5zKR0N.transfer.call(addressmFLNXeI, uintQf5lNxj, {from: accounts[4]});
		const boolbIdcOW4 = await TPAs5zKR0N.approve.call(addresscspCzfo, uintKoZPx7, {from: accounts[2]});
		const boolaAwMvC = await TPAs5zKR0N.unlock.call(addressPwTZelo, uintSriYdgF, {from: accounts[5]});
		const uint256zoZyvaQ = await TPAs5zKR0N.burn.call(uintAizWCL7, {from: accounts[5]});
		const addresssjpRWNc = await TPAs5zKR0N.notFrozen.call(addressXWnoglx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringXoe0cmP, "TPA")
		await expect(TPAs5zKR0N.transfer.call(addressmFLNXeI, uintQf5lNxj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringRSHjPw = "BGsKNW6Gsg4Pvt3eAc3dIbUYhOFEXRm4qfmF7pvG4XlcGAC1g9qUY8pCvZq2nfbL1GMOxBc7s8ZImwtIB89jCEwLsu1UxpK"
		const stringAxlhwzi = "Oy1HJ1x38NO"
		const uintomJPbmW = BigInt("251")
		const TPAu1z8AG = await TPA.new(stringRSHjPw, stringAxlhwzi, uintomJPbmW, {from: accounts[2]});
		const uintjnEblel = BigInt("1213")
		const addressRyb1jfD = accounts[1]
		const addresss7ihlHj = accounts[2]
		const uint28GIBQ = BigInt("1214")
		const uintkQxBwo1 = BigInt("456")
		const addressytQlxND = accounts[0]
		const boolZKQ2Hja = await TPAu1z8AG.transferFrom.call(addresss7ihlHj, addressRyb1jfD, uintjnEblel, {from: accounts[2]});
		const boolQE2aC1r = await TPAu1z8AG.lock.call(addressytQlxND, uintkQxBwo1, uint28GIBQ, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintqJXlNEe = BigInt("2")
		const addressMMdu2BU = accounts[4]
		const uintqKTNWC = BigInt("1981")
		const addresslLz5AK = accounts[4]
		const boolsVTCe8F = await TPAV5piqcL.increaseAllowance.call(addressMMdu2BU, uintqJXlNEe, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addresslLz5AK, uintqKTNWC, {from: accounts[1]});

		assert.equal(boolsVTCe8F, true)
		await expect(TPAV5piqcL.transfer.call(addresslLz5AK, uintqKTNWC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5lTnr3 = await TPA.new({from: accounts[3]});
		const uinta8WbtZA = BigInt("134")
		const uintOXkMfGX = BigInt("504")
		const addressXrqnDEj = accounts[4]
		const uintTfB8Tfq = BigInt("1268")
		const addresso3FOjgu = accounts[5]
		const address2vRJbt = accounts[4]
		const uintJREMtQf = BigInt("490")
		const addresszruCSFO = accounts[4]
		const uintI3XuVbu = BigInt("1886")
		const addressh49mIAh = accounts[2]
		const boolIwPblYj = await TPAV5lTnr3.transferWithLock.call(addressXrqnDEj, uintOXkMfGX, uinta8WbtZA, {from: accounts[3]});
		const booltpuPW9 = await TPAV5lTnr3.transferFrom.call(address2vRJbt, addresso3FOjgu, uintTfB8Tfq, {from: accounts[3]});
		const boolZpi813L = await TPAV5lTnr3.transfer.call(addresszruCSFO, uintJREMtQf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y8mbh4O = await TPAV5lTnr3.burn.call(uintI3XuVbu, {from: accounts[0]});
		const addressUapbJGZ = await TPAV5lTnr3.transferOwnership.call(addressh49mIAh, {from: accounts[4]});

		assert.equal(boolIwPblYj, true)
		await expect(TPAV5lTnr3.transferFrom.call(address2vRJbt, addresso3FOjgu, uintTfB8Tfq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqTDN5sd = await TPA.new({from: accounts[4]});
		const uintK1Zo6pq = BigInt("135")
		const addressnzQtZl9 = accounts[3]
		const uintMqOuTFO = BigInt("546")
		const addresszsgQfQ5 = accounts[4]
		const uintmOdkqXz = BigInt("1683")
		const addressnr7zlja = accounts[2]
		const uintJqHAbvl = BigInt("357")
		const addressrwYD14Q = accounts[0]
		const addresszFTA7o2 = accounts[0]
		const uintTg1PBck = BigInt("1236")
		const uintRkmuGMf = BigInt("1294")
		const addressTw99bMZ = accounts[3]
		const boolMkZHsfJ = await TPAqTDN5sd.increaseAllowance.call(addressnzQtZl9, uintK1Zo6pq, {from: accounts[2]});
		const boolf9cHn4Z = await TPAqTDN5sd.decreaseAllowance.call(addresszsgQfQ5, uintMqOuTFO, {from: accounts[1]});
		const boolC9jJ2i1 = await TPAqTDN5sd.decreaseAllowance.call(addressnr7zlja, uintmOdkqXz, {from: accounts[4]});
		const boolVc3thbi = await TPAqTDN5sd.approve.call(addressrwYD14Q, uintJqHAbvl, {from: accounts[0]});
		const addressSGEbbwW = await TPAqTDN5sd.removeAdmin.call(addresszFTA7o2, {from: accounts[4]});
		const boolxOsqzw = await TPAqTDN5sd.transferWithLock.call(addressTw99bMZ, uintRkmuGMf, uintTg1PBck, {from: accounts[2]});

		assert.equal(boolMkZHsfJ, true)
		await expect(TPAqTDN5sd.decreaseAllowance.call(addresszsgQfQ5, uintMqOuTFO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintEicHD2A = BigInt("0")
		const addressBRZZEz = accounts[4]
		const uintJt7L56H = BigInt("1981")
		const addressm2mI4lv = accounts[4]
		await TPAV5piqcL.whenNotPaused.call({from: accounts[4]});
		const boolsVTCe8F = await TPAV5piqcL.increaseAllowance.call(addressBRZZEz, uintEicHD2A, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressm2mI4lv, uintJt7L56H, {from: accounts[1]});

		await expect(TPAV5piqcL.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5lTnr3 = await TPA.new({from: accounts[3]});
		const addressBy0aKka = accounts[5]
		const addressxd3rYdw = accounts[0]
		const uintLFqQFsV = BigInt("134")
		const uintyagNsMG = BigInt("504")
		const addresssTJE7e = accounts[5]
		const uintCaAf2Kh = BigInt("1268")
		const addressq2RpG75 = accounts[5]
		const addressO9nZEPK = accounts[4]
		const uintcW2GXK = BigInt("490")
		const addressAJIOEUy = accounts[4]
		const uintUiMJA9J = BigInt("1886")
		const addressqL321s = accounts[2]
		const uint256gAvC2TS = await TPAV5lTnr3.allowance.call(addressxd3rYdw, addressBy0aKka, {from: accounts[3]});
		const boolIwPblYj = await TPAV5lTnr3.transferWithLock.call(addresssTJE7e, uintyagNsMG, uintLFqQFsV, {from: accounts[3]});
		const booltpuPW9 = await TPAV5lTnr3.transferFrom.call(addressO9nZEPK, addressq2RpG75, uintCaAf2Kh, {from: accounts[3]});
		const boolZpi813L = await TPAV5lTnr3.transfer.call(addressAJIOEUy, uintcW2GXK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y8mbh4O = await TPAV5lTnr3.burn.call(uintUiMJA9J, {from: accounts[0]});
		const addressUapbJGZ = await TPAV5lTnr3.transferOwnership.call(addressqL321s, {from: accounts[4]});

		assert.equal(boolIwPblYj, true)
		assert.equal(uint256gAvC2TS, BigInt("0"))
		await expect(TPAV5lTnr3.transferFrom.call(addressO9nZEPK, addressq2RpG75, uintCaAf2Kh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintLiUiLg8 = BigInt("2")
		const addressNpT6Bar = accounts[4]
		const uintuljemUp = BigInt("1981")
		const addressFxTrPB3 = accounts[5]
		const addressUsMXjj = accounts[2]
		const uint256lS29UiY = await TPAV5piqcL.totalSupply.call({from: accounts[3]});
		const boolsVTCe8F = await TPAV5piqcL.increaseAllowance.call(addressNpT6Bar, uintLiUiLg8, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressFxTrPB3, uintuljemUp, {from: accounts[1]});
		const boolUJESZk8 = await TPAV5piqcL.isAdmin.call(addressUsMXjj, {from: accounts[1]});

		assert.equal(boolsVTCe8F, true)
		assert.equal(uint256lS29UiY, BigInt("10000000000000000000000000000"))
		await expect(TPAV5piqcL.transfer.call(addressFxTrPB3, uintuljemUp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintc9SodMD = BigInt("2")
		const addressPODgOAq = accounts[4]
		const addressBlwRP3X = accounts[2]
		const uintegLsPjd = BigInt("1782")
		const addressYMceD3U = accounts[2]
		const uintfQB7WzZ = BigInt("647")
		const addressnsOQNaA = accounts[1]
		const uintXEati9M = BigInt("1981")
		const addressKEnfuE3 = accounts[5]
		const boolsVTCe8F = await TPAV5piqcL.increaseAllowance.call(addressPODgOAq, uintc9SodMD, {from: accounts[3]});
		const boolbQIiSuq = await TPAV5piqcL.isAdmin.call(addressBlwRP3X, {from: "0x0000000000000000000000000000000000000001"});
		const addressgWV00DE = await TPAV5piqcL.burnFrom.call(addressYMceD3U, uintegLsPjd, {from: accounts[3]});
		const boolG4t3LcC = await TPAV5piqcL.transfer.call(addressnsOQNaA, uintfQB7WzZ, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressKEnfuE3, uintXEati9M, {from: accounts[1]});

		assert.equal(boolbQIiSuq, false)
		assert.equal(boolsVTCe8F, true)
		await expect(TPAV5piqcL.burnFrom.call(addressYMceD3U, uintegLsPjd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintI2bgqAm = BigInt("6")
		const addressO7cNxlJ = accounts[4]
		const uintSRrJHc5 = BigInt("1981")
		const addressgyTCS0I = accounts[4]
		const boolbdiFupf = await TPAV5piqcL.paused.call({from: accounts[5]});
		const boolsVTCe8F = await TPAV5piqcL.increaseAllowance.call(addressO7cNxlJ, uintI2bgqAm, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressgyTCS0I, uintSRrJHc5, {from: accounts[1]});

		assert.equal(boolbdiFupf, false)
		assert.equal(boolsVTCe8F, true)
		await expect(TPAV5piqcL.transfer.call(addressgyTCS0I, uintSRrJHc5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const addressQ1RZjzX = accounts[0]
		const uintzy84P3T = BigInt("1579")
		const addressOXkjJ03 = accounts[3]
		const uintkCuulzu = BigInt("1981")
		const addressIeLrmEz = accounts[5]
		await TPAV5piqcL.renounceAdmin.call({from: accounts[1]});
		const addressta3zR9b = await TPAV5piqcL.notFrozen.call(addressQ1RZjzX, {from: "0x0000000000000000000000000000000000000001"});
		const boolRWnrFoR = await TPAV5piqcL.approve.call(addressOXkjJ03, uintzy84P3T, {from: accounts[0]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressIeLrmEz, uintkCuulzu, {from: accounts[1]});

		await expect(TPAV5piqcL.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5lTnr3 = await TPA.new({from: accounts[3]});
		const uintaHw2YKR = BigInt("134")
		const uinthv8Cp90 = BigInt("504")
		const addressZbVM5Io = accounts[4]
		const uinti7hjWZX = BigInt("1886")
		const addressNU6YMNb = accounts[2]
		const addressiOsuTlQ = accounts[5]
		const addressQZoCZtu = accounts[3]
		const boolIwPblYj = await TPAV5lTnr3.transferWithLock.call(addressZbVM5Io, uinthv8Cp90, uintaHw2YKR, {from: accounts[3]});
		const uint256Y8mbh4O = await TPAV5lTnr3.burn.call(uinti7hjWZX, {from: accounts[0]});
		const uint256s2mbIvm = await TPAV5lTnr3.allowance.call(addressiOsuTlQ, addressNU6YMNb, {from: accounts[4]});
		const addressUapbJGZ = await TPAV5lTnr3.transferOwnership.call(addressQZoCZtu, {from: accounts[4]});

		assert.equal(boolIwPblYj, true)
		await expect(TPAV5lTnr3.burn.call(uinti7hjWZX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintlTwptMt = BigInt("1055")
		const addressjiEAGP = "0x0000000000000000000000000000000000000001"
		const uintjdZgE6G = BigInt("1981")
		const addresspejauWs = accounts[5]
		const stringnujvE1t = await TPAV5piqcL.name.call({from: accounts[1]});
		const boolKh5kaeh = await TPAV5piqcL.increaseAllowance.call(addressjiEAGP, uintlTwptMt, {from: accounts[4]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addresspejauWs, uintjdZgE6G, {from: accounts[1]});

		assert.equal(boolKh5kaeh, true)
		assert.equal(stringnujvE1t, "TPA")
		await expect(TPAV5piqcL.transfer.call(addresspejauWs, uintjdZgE6G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintrm4b50V = BigInt("975")
		const addressK5lCZu = accounts[2]
		const uintDkc9f83 = BigInt("1475")
		const addresswRcJP1 = accounts[4]
		const boolk6NaTrH = await TPAV5piqcL.approve.call(addressK5lCZu, uintrm4b50V, {from: accounts[0]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addresswRcJP1, uintDkc9f83, {from: accounts[1]});

		assert.equal(boolk6NaTrH, true)
		await expect(TPAV5piqcL.transfer.call(addresswRcJP1, uintDkc9f83, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const addressDxwBiqS = "0x0000000000000000000000000000000000000001"
		const uintzIrl8CB = BigInt("1975")
		const addresshcN9BOe = accounts[4]
		const uintdQ9XFJ = BigInt("307")
		const addressLgSOvBj = accounts[2]
		const uint256PovH8Si = await TPAV5piqcL.balanceOf.call(addressDxwBiqS, {from: accounts[3]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addresshcN9BOe, uintzIrl8CB, {from: accounts[1]});
		const addressi5ROA7u = await TPAV5piqcL.burnFrom.call(addressLgSOvBj, uintdQ9XFJ, {from: accounts[5]});

		assert.equal(uint256PovH8Si, BigInt("0"))
		await expect(TPAV5piqcL.transfer.call(addresshcN9BOe, uintzIrl8CB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintpE1SSbP = BigInt("928")
		const addressyugY17d = accounts[4]
		const addressYbqUUkc = accounts[3]
		const uint8AEkE7Ej = await TPAV5piqcL.decimals.call({from: accounts[0]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressyugY17d, uintpE1SSbP, {from: accounts[1]});
		const boolDuul7hL = await TPAV5piqcL.isOwner.call(addressYbqUUkc, {from: accounts[3]});

		assert.equal(uint8AEkE7Ej, BigInt("18"))
		await expect(TPAV5piqcL.transfer.call(addressyugY17d, uintpE1SSbP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyx0vqr9 = await TPA.new({from: accounts[3]});
		const uintiedaO77 = BigInt("414")
		const addressVSKTJf = accounts[3]
		const uintz6nXda1 = BigInt("1710")
		const addressH1jz1jO = accounts[4]
		const booliyqGsX = await TPAyx0vqr9.unlock.call(addressVSKTJf, uintiedaO77, {from: accounts[3]});
		const boolgcCcpeC = await TPAyx0vqr9.transfer.call(addressH1jz1jO, uintz6nXda1, {from: accounts[2]});

		await expect(TPAyx0vqr9.unlock.call(addressVSKTJf, uintiedaO77, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKJYcWUE = await TPA.new({from: accounts[3]});
		const addresshOSgjR0 = accounts[5]
		const uintZpagXB = BigInt("1881")
		const addressdmRAMz = accounts[5]
		const addresskRlVuKs = accounts[0]
		const addressUkpEZH9 = await TPAKJYcWUE.transferOwnership.call(addresshOSgjR0, {from: accounts[3]});
		const boolJVLcUY6 = await TPAKJYcWUE.transferFrom.call(addresskRlVuKs, addressdmRAMz, uintZpagXB, {from: accounts[1]});

		await expect(TPAKJYcWUE.transferFrom.call(addresskRlVuKs, addressdmRAMz, uintZpagXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const uintN5NgyuR = BigInt("910")
		const uintxZH1KWe = BigInt("25")
		const addressT4aKju2 = "0x0000000000000000000000000000000000000001"
		const uintCKF5JZ = BigInt("1740")
		const addressggQZ4x0 = accounts[0]
		const uintfCm3Z11 = BigInt("1981")
		const addressCxfNBH7 = accounts[5]
		const boolLj7ZImk = await TPAV5piqcL.lock.call(addressT4aKju2, uintxZH1KWe, uintN5NgyuR, {from: accounts[5]});
		const boolTQyuTiy = await TPAV5piqcL.transfer.call(addressggQZ4x0, uintCKF5JZ, {from: accounts[5]});
		const boolxis9ERZ = await TPAV5piqcL.transfer.call(addressCxfNBH7, uintfCm3Z11, {from: accounts[1]});

		await expect(TPAV5piqcL.lock.call(addressT4aKju2, uintxZH1KWe, uintN5NgyuR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAV5piqcL = await TPA.new({from: accounts[5]});
		const addressbicS23v = "0x00000000000000000000000000000000000000-1"
		const addressBBXJmFe = accounts[5]
		const uint256PovH8Si = await TPAV5piqcL.balanceOf.call(addressbicS23v, {from: accounts[3]});
		const boolXUfrOHg = await TPAV5piqcL.isOwner.call(addressBBXJmFe, {from: accounts[2]});

		await expect(TPAV5piqcL.balanceOf.call(addressbicS23v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
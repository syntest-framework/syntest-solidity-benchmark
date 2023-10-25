const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintiCcLo3W = BigInt("638")
		const addressCPnK9lC = accounts[2]
		const uintgJynguA = BigInt("1571")
		const addressWZMl2O3 = accounts[4]
		const boolvMiv8Xu = await LedgistMXA1un.approve.call(addressCPnK9lC, uintiCcLo3W, {from: accounts[4]});
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressWZMl2O3, uintgJynguA, {from: accounts[0]});
		await LedgistMXA1un.whenPaused.call({from: accounts[3]});
		await LedgistMXA1un.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolo5QAD1, true)
		assert.equal(boolvMiv8Xu, true)
		await expect(LedgistMXA1un.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMkQNToE = await Ledgis.new({from: accounts[1]});
		const addressAW2TdB = accounts[3]
		const addressNFxbYJM = accounts[1]
		const addressA3EYa1T = accounts[1]
		const boolTSi2tJ = await LedgisMkQNToE.isFrozen.call(addressAW2TdB, {from: accounts[0]});
		const uint256pPgOyP = await LedgisMkQNToE.allowance.call(addressA3EYa1T, addressNFxbYJM, {from: accounts[5]});

		assert.equal(boolTSi2tJ, false)
		assert.equal(uint256pPgOyP, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisek934Po = await Ledgis.new({from: accounts[1]});
		const addressmxPmfJm = accounts[2]
		const uintnw9Sk1W = BigInt("280")
		const addressu9bSyPl = accounts[2]
		const uintt6yZYZ = BigInt("1612")
		const addressL5T4VFY = accounts[4]
		const boolIeCWZ1 = await Ledgisek934Po.isFrozen.call(addressmxPmfJm, {from: accounts[4]});
		await Ledgisek934Po.renounceOwnership.call({from: accounts[5]});
		const boolwAVkNYr = await Ledgisek934Po.increaseAllowance.call(addressu9bSyPl, uintnw9Sk1W, {from: "0x0000000000000000000000000000000000000001"});
		await Ledgisek934Po.lockState.call(addressL5T4VFY, uintt6yZYZ, {from: accounts[2]});

		assert.equal(boolIeCWZ1, false)
		await expect(Ledgisek934Po.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP85jCq0 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAVGaaLj = BigInt("1486")
		const uintryNr1ZH = BigInt("1804")
		const addressNfWGz5d = accounts[0]
		const uintzM49zjl = BigInt("301")
		const uintCXbfpJU = BigInt("1624")
		const addressn9EE2w5 = accounts[1]
		const uinty0ZQdLj = BigInt("1968")
		const uintMnrRQvr = BigInt("1590")
		const addressCqOj7V = accounts[4]
		const boolrPYHkWz = await LedgisP85jCq0.transferWithLock.call(addressNfWGz5d, uintryNr1ZH, uintAVGaaLj, {from: accounts[3]});
		const addresswGLdCFt = await LedgisP85jCq0.lock.call(addressn9EE2w5, uintCXbfpJU, uintzM49zjl, {from: accounts[4]});
		await LedgisP85jCq0.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwkPaMgj = await LedgisP85jCq0.transferWithLockAfter.call(addressCqOj7V, uintMnrRQvr, uinty0ZQdLj, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const Ledgiswffbvbc = await Ledgis.new({from: accounts[4]});
		const uintVd4nb7w = BigInt("1929")
		const addresswOTZGIj = accounts[2]
		const addresspIvDjK6 = accounts[0]
		const uintTzTC9FX = BigInt("1739")
		const uinthChGAGu = BigInt("363")
		const addressAOWTbgP = accounts[0]
		const uintXODnGGr = BigInt("14")
		const uinttZ2WqBh = BigInt("1657")
		const addressEG2XbPG = accounts[3]
		const uintalXFpsC = BigInt("1991")
		const boolu6JD28d = await Ledgiswffbvbc.transferFrom.call(addresspIvDjK6, addresswOTZGIj, uintVd4nb7w, {from: accounts[4]});
		const addressVNgjELi = await Ledgiswffbvbc.lockAfter.call(addressAOWTbgP, uinthChGAGu, uintTzTC9FX, {from: accounts[2]});
		const addresszDYXxlS = await Ledgiswffbvbc.lock.call(addressEG2XbPG, uinttZ2WqBh, uintXODnGGr, {from: "0x0000000000000000000000000000000000000001"});
		await Ledgiswffbvbc.whenNotFrozen.call({from: accounts[1]});
		await Ledgiswffbvbc.whenPaused.call({from: accounts[3]});
		const uint256H2jOhTi = await Ledgiswffbvbc.afterTime.call(uintalXFpsC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Ledgiswffbvbc.transferFrom.call(addresspIvDjK6, addresswOTZGIj, uintVd4nb7w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgishj2S8aA = await Ledgis.new({from: accounts[2]});
		const uintOlRs3Wi = BigInt("1644")
		const addressDc9J7GS = accounts[4]
		const addressMLDFaY2 = accounts[0]
		const addressKUhN7S = accounts[0]
		const addressHngmpiq = accounts[1]
		const addressVbUrrPF = accounts[5]
		const boolXXDi5jw = await Ledgishj2S8aA.transfer.call(addressDc9J7GS, uintOlRs3Wi, {from: accounts[2]});
		const uint256GbHhH3o = await Ledgishj2S8aA.balanceOf.call(addressMLDFaY2, {from: accounts[4]});
		const addressRiMX4eP = await Ledgishj2S8aA.freeze.call(addressKUhN7S, {from: accounts[1]});
		const uint256mupWugc = await Ledgishj2S8aA.allowance.call(addressVbUrrPF, addressHngmpiq, {from: accounts[0]});
		await Ledgishj2S8aA.pause.call({from: accounts[4]});

		assert.equal(boolXXDi5jw, true)
		assert.equal(uint256GbHhH3o, BigInt("0"))
		await expect(Ledgishj2S8aA.freeze.call(addressKUhN7S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintFjYVY9n = BigInt("638")
		const addresso2uz2um = accounts[2]
		const addressmySpwfb = accounts[1]
		const uintrK3Sve = BigInt("1571")
		const addressVPt9DbF = accounts[4]
		const uintVU35vmr = BigInt("830")
		const addresswre7QOi = accounts[3]
		const boolvMiv8Xu = await LedgistMXA1un.approve.call(addresso2uz2um, uintFjYVY9n, {from: accounts[4]});
		const addressD6ALAF3 = await LedgistMXA1un.freeze.call(addressmySpwfb, {from: accounts[0]});
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressVPt9DbF, uintrK3Sve, {from: accounts[0]});
		const addressKz5JK1T = await LedgistMXA1un.unlock.call(addresswre7QOi, uintVU35vmr, {from: accounts[5]});
		await LedgistMXA1un.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolo5QAD1, true)
		assert.equal(boolvMiv8Xu, true)
		await expect(LedgistMXA1un.unlock.call(addresswre7QOi, uintVU35vmr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispqMaTJp = await Ledgis.new({from: accounts[0]});
		const addressSKQvfXC = accounts[1]
		const uintPpCLrNG = BigInt("2008")
		const addresskobJ34 = accounts[3]
		const uintJyK1fXD = BigInt("523")
		const uintU0m8sA = BigInt("149")
		const addressUGZi9do = "0x0000000000000000000000000000000000000001"
		const uint256vVsdQ1w = await LedgispqMaTJp.balanceOf.call(addressSKQvfXC, {from: accounts[2]});
		const boolRDJmyW9 = await LedgispqMaTJp.decreaseAllowance.call(addresskobJ34, uintPpCLrNG, {from: "0x0000000000000000000000000000000000000001"});
		const boolb0RBvH = await LedgispqMaTJp.transferWithLockAfter.call(addressUGZi9do, uintU0m8sA, uintJyK1fXD, {from: accounts[4]});

		assert.equal(uint256vVsdQ1w, BigInt("0"))
		await expect(LedgispqMaTJp.decreaseAllowance.call(addresskobJ34, uintPpCLrNG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMkQNToE = await Ledgis.new({from: accounts[1]});
		const addressJ1zKGW = accounts[1]
		const addresskHP8Vb = accounts[2]
		const uintrQmNxqD = BigInt("1409")
		const uintjsuZkCl = BigInt("1509")
		const addressJAqd5oE = accounts[3]
		const uint256pPgOyP = await LedgisMkQNToE.allowance.call(addresskHP8Vb, addressJ1zKGW, {from: accounts[5]});
		const addresshsji5r = await LedgisMkQNToE.lockAfter.call(addressJAqd5oE, uintjsuZkCl, uintrQmNxqD, {from: accounts[1]});

		assert.equal(uint256pPgOyP, BigInt("0"))
		await expect(LedgisMkQNToE.lockAfter.call(addressJAqd5oE, uintjsuZkCl, uintrQmNxqD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscmzG80u = await Ledgis.new({from: accounts[1]});
		const uintl7cKbOi = BigInt("1396")
		const addressTreVx5T = accounts[0]
		const uintI87JeQD = BigInt("1277")
		const addressMUuIT4 = accounts[4]
		const uintQOM1or9 = BigInt("1814")
		const addressjsidOB8 = accounts[2]
		await LedgiscmzG80u.lockState.call(addressTreVx5T, uintl7cKbOi, {from: accounts[4]});
		const boolSPnthU = await LedgiscmzG80u.decreaseAllowance.call(addressMUuIT4, uintI87JeQD, {from: accounts[2]});
		const boolNtq6mEx = await LedgiscmzG80u.increaseAllowance.call(addressjsidOB8, uintQOM1or9, {from: accounts[4]});

		await expect(LedgiscmzG80u.lockState.call(addressTreVx5T, uintl7cKbOi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBJDFJ3m = await Ledgis.new({from: accounts[2]});
		const addressqXbyGJe = accounts[0]
		const uintJkCS6oI = BigInt("200")
		const address4mifv5 = accounts[3]
		const uintV3lLtnB = BigInt("1540")
		const addresswWbz67H = accounts[1]
		const uint256faKHbTc = await LedgisBJDFJ3m.lockCount.call(addressqXbyGJe, {from: accounts[3]});
		const addressvVIce3q = await LedgisBJDFJ3m.burn.call(address4mifv5, uintJkCS6oI, {from: accounts[1]});
		await LedgisBJDFJ3m.whenNotPaused.call({from: accounts[3]});
		const addresslJajwFk = await LedgisBJDFJ3m.unlock.call(addresswWbz67H, uintV3lLtnB, {from: accounts[2]});

		assert.equal(uint256faKHbTc, BigInt("0"))
		await expect(LedgisBJDFJ3m.burn.call(address4mifv5, uintJkCS6oI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMkQNToE = await Ledgis.new({from: accounts[1]});
		const addresscXwdwQc = accounts[1]
		const addresstAwUH3D = accounts[1]
		const uinttlJGxne = BigInt("568")
		const uint256pPgOyP = await LedgisMkQNToE.allowance.call(addresstAwUH3D, addresscXwdwQc, {from: accounts[5]});
		const uint256lDT5TBH = await LedgisMkQNToE.afterTime.call(uinttlJGxne, {from: accounts[5]});

		assert.equal(uint256lDT5TBH, BigInt("1630232451"))
		assert.equal(uint256pPgOyP, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgispqMaTJp = await Ledgis.new({from: accounts[0]});
		const uintyFsLgl = BigInt("2044")
		const addressqX15bOF = accounts[3]
		const uintECYwjQf = BigInt("1339")
		const addressS9dXhjs = accounts[3]
		const addresstII6ob = accounts[2]
		const boolOM22F8o = await LedgispqMaTJp.mint.call(addressqX15bOF, uintyFsLgl, {from: accounts[0]});
		const boolyRkhC6 = await LedgispqMaTJp.transfer.call(addressS9dXhjs, uintECYwjQf, {from: accounts[1]});
		const uint256vVsdQ1w = await LedgispqMaTJp.balanceOf.call(addresstII6ob, {from: accounts[2]});

		assert.equal(boolOM22F8o, true)
		await expect(LedgispqMaTJp.transfer.call(addressS9dXhjs, uintECYwjQf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uinteJi8mhJ = BigInt("1571")
		const addresswZt6b2k = accounts[5]
		const uintS2nyw9J = BigInt("1463")
		const addressuywlObD = accounts[2]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addresswZt6b2k, uinteJi8mhJ, {from: accounts[0]});
		const booldre0Avn = await LedgistMXA1un.increaseAllowance.call(addressuywlObD, uintS2nyw9J, {from: accounts[0]});

		assert.equal(booldre0Avn, true)
		assert.equal(boolo5QAD1, true)
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintbDOOUjv = BigInt("1571")
		const addresszmYSIxq = accounts[5]
		const uintDE8vz9f = BigInt("1276")
		const uinty06nMU = BigInt("1831")
		const addressPPUlVHs = accounts[2]
		const uintDWh84MY = BigInt("599")
		const addressFyBIWP6 = accounts[1]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addresszmYSIxq, uintbDOOUjv, {from: accounts[0]});
		const addressBNSjV65 = await LedgistMXA1un.lock.call(addressPPUlVHs, uinty06nMU, uintDE8vz9f, {from: accounts[0]});
		const addressZNV0Fcl = await LedgistMXA1un.burn.call(addressFyBIWP6, uintDWh84MY, {from: accounts[0]});

		assert.equal(boolo5QAD1, true)
		await expect(LedgistMXA1un.lock.call(addressPPUlVHs, uinty06nMU, uintDE8vz9f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintZbPGceT = BigInt("1572")
		const addressM2x7nHl = accounts[5]
		const uintP4Bc3ei = BigInt("1842")
		const addressk16GGsW = accounts[4]
		const uintmNMUDF = BigInt("439")
		const addressSLPl8xa = accounts[1]
		const addressGMjAEa7 = accounts[2]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressM2x7nHl, uintZbPGceT, {from: accounts[0]});
		const addressY2bmQI9 = await LedgistMXA1un.unlock.call(addressk16GGsW, uintP4Bc3ei, {from: accounts[0]});
		const boolSHkUm9y = await LedgistMXA1un.transferFrom.call(addressGMjAEa7, addressSLPl8xa, uintmNMUDF, {from: accounts[2]});

		assert.equal(boolo5QAD1, true)
		await expect(LedgistMXA1un.unlock.call(addressk16GGsW, uintP4Bc3ei, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispqMaTJp = await Ledgis.new({from: accounts[0]});
		const addresswAEmwPY = accounts[2]
		const uintx3PXEDY = BigInt("1987")
		const addressBefKvHM = accounts[3]
		const uint256vVsdQ1w = await LedgispqMaTJp.balanceOf.call(addresswAEmwPY, {from: accounts[2]});
		const uint256ZVj3ihS = await LedgispqMaTJp.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		await LedgispqMaTJp.lockState.call(addressBefKvHM, uintx3PXEDY, {from: accounts[5]});

		assert.equal(uint256ZVj3ihS, BigInt("1630231886"))
		assert.equal(uint256vVsdQ1w, BigInt("0"))
		await expect(LedgispqMaTJp.lockState.call(addressBefKvHM, uintx3PXEDY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uinthQpvCZ8 = BigInt("1571")
		const addressXHe1CWR = accounts[6]
		const addresskhwZNQ7 = accounts[3]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressXHe1CWR, uinthQpvCZ8, {from: accounts[0]});
		const addressJrA4J1 = await LedgistMXA1un.unfreeze.call(addresskhwZNQ7, {from: accounts[0]});

		assert.equal(boolo5QAD1, true)
	});

	it('test for Ledgis', async () => {
		const LedgispqMaTJp = await Ledgis.new({from: accounts[0]});
		const addresstIqQ2r1 = accounts[3]
		await LedgispqMaTJp.pause.call({from: accounts[0]});
		const uint256vVsdQ1w = await LedgispqMaTJp.balanceOf.call(addresstIqQ2r1, {from: accounts[2]});

		await expect(LedgispqMaTJp.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintHyOqCX = BigInt("1571")
		const addressTdyScM = accounts[7]
		const uintPa2mQB6 = BigInt("1629")
		const addresslfrVWv6 = "0x0000000000000000000000000000000000000001"
		const uintkbcE1EU = BigInt("1971")
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressTdyScM, uintHyOqCX, {from: accounts[0]});
		const boolLY4Qxub = await LedgistMXA1un.increaseAllowance.call(addresslfrVWv6, uintPa2mQB6, {from: accounts[5]});
		const uint256zFytDR1 = await LedgistMXA1un.afterTime.call(uintkbcE1EU, {from: accounts[0]});
		await LedgistMXA1un.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolLY4Qxub, true)
		assert.equal(boolo5QAD1, true)
		assert.equal(uint256zFytDR1, BigInt("1630233837"))
		await expect(LedgistMXA1un.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMkQNToE = await Ledgis.new({from: accounts[1]});
		const addressFMLjhPZ = accounts[4]
		const addressfFbucFT = accounts[1]
		const addressBH0wEVS = accounts[1]
		const addressNWjQl5e = await LedgisMkQNToE.transferOwnership.call(addressFMLjhPZ, {from: accounts[1]});
		const uint25641VxwL = await LedgisMkQNToE.currentTime.call({from: accounts[0]});
		const uint256pPgOyP = await LedgisMkQNToE.allowance.call(addressBH0wEVS, addressfFbucFT, {from: accounts[5]});

		assert.equal(uint25641VxwL, BigInt("1630231876"))
		assert.equal(uint256pPgOyP, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgispqMaTJp = await Ledgis.new({from: accounts[0]});
		const addressqVvA4P7 = accounts[2]
		const uint256bsuOyCz = await LedgispqMaTJp.totalSupply.call({from: accounts[5]});
		const uint256vVsdQ1w = await LedgispqMaTJp.balanceOf.call(addressqVvA4P7, {from: accounts[2]});

		assert.equal(uint256bsuOyCz, BigInt("10000000000000"))
		assert.equal(uint256vVsdQ1w, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintNUXBOJh = BigInt("1571")
		const addresspdExwg = accounts[6]
		const uints53KdHP = BigInt("1028")
		const addressAxrUYAO = accounts[2]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addresspdExwg, uintNUXBOJh, {from: accounts[0]});
		const addressot1KJt2 = await LedgistMXA1un.burn.call(addressAxrUYAO, uints53KdHP, {from: accounts[0]});

		assert.equal(boolo5QAD1, true)
		await expect(LedgistMXA1un.burn.call(addressAxrUYAO, uints53KdHP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintu24nLaL = BigInt("494")
		const addressVItM0Vl = accounts[1]
		const uintVkkaCRn = BigInt("1571")
		const addressBCyHdfX = accounts[7]
		const boolJWMDJSk = await LedgistMXA1un.transfer.call(addressVItM0Vl, uintu24nLaL, {from: accounts[0]});
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressBCyHdfX, uintVkkaCRn, {from: accounts[0]});
		const uint256mVxpdsH = await LedgistMXA1un.totalSupply.call({from: accounts[3]});
		await LedgistMXA1un.unpause.call({from: accounts[0]});

		assert.equal(boolJWMDJSk, true)
		assert.equal(boolo5QAD1, true)
		assert.equal(uint256mVxpdsH, BigInt("10000000000000"))
		await expect(LedgistMXA1un.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintKen5bGg = BigInt("796")
		const uintVTk4GMW = BigInt("2023")
		const addressa8jnRG = accounts[1]
		const uintFwsQPuV = BigInt("1987")
		const addressCe1tX2s = accounts[5]
		const bool3iLrc8 = await LedgistMXA1un.transferWithLockAfter.call(addressa8jnRG, uintVTk4GMW, uintKen5bGg, {from: accounts[0]});
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressCe1tX2s, uintFwsQPuV, {from: accounts[0]});

		assert.equal(bool3iLrc8, true)
		assert.equal(boolo5QAD1, true)
	});

	it('test for Ledgis', async () => {
		const LedgistMXA1un = await Ledgis.new({from: accounts[0]});
		const uintMyNS4BQ = BigInt("1571")
		const addressSjlPZ73 = accounts[6]
		const uintV8hNPml = BigInt("105")
		const uintJg9vy7n = BigInt("1929")
		const addressj4VXgja = accounts[0]
		const boolo5QAD1 = await LedgistMXA1un.transfer.call(addressSjlPZ73, uintMyNS4BQ, {from: accounts[0]});
		const boolh9OYc8K = await LedgistMXA1un.transferWithLock.call(addressj4VXgja, uintJg9vy7n, uintV8hNPml, {from: accounts[0]});

		assert.equal(boolh9OYc8K, true)
		assert.equal(boolo5QAD1, true)
	});
})
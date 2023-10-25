const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPpKrn077 = await DSP.new({from: accounts[2]});
		const uintsSACwkT = BigInt("585")
		const addressxyEpA7e = accounts[3]
		const uintkSYLpPM = BigInt("1713")
		const addressfr7e51 = accounts[1]
		const stringZu6JrTX = await DSPpKrn077.name.call({from: accounts[2]});
//		const boolQpqcnQr = await DSPpKrn077.unlock.call(addressxyEpA7e, uintsSACwkT, {from: accounts[0]});
//		await DSPpKrn077.pause.call({from: accounts[0]});
//		await DSPpKrn077.onlyNewOwner.call({from: accounts[2]});
//		const boolKokYFS = await DSPpKrn077.mint.call(addressfr7e51, uintkSYLpPM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringZu6JrTX, "DSP")
		await expect(DSPpKrn077.unlock.call(addressxyEpA7e, uintsSACwkT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const uintbr6btX = BigInt("349")
		const addressdUDCIus = accounts[4]
		const addressDXdAho7 = accounts[0]
		const uintywsOtGh = BigInt("1319")
		const addressZCab4Gy = accounts[5]
		const addressp7k9BUM = accounts[4]
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressDXdAho7, addressdUDCIus, uintbr6btX, {from: accounts[1]});
//		const boolPj1ut1 = await DSPGUJiMDe.burnFrombyOwner.call(addressZCab4Gy, uintywsOtGh, {from: accounts[0]});
//		const addressaLHGpt7 = await DSPGUJiMDe.upgradeTo.call(addressp7k9BUM, {from: accounts[4]});

		await expect(DSPGUJiMDe.transferFrom.call(addressDXdAho7, addressdUDCIus, uintbr6btX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringvySVuVa = "8l0KwnBf2NoHHIjlyfEJFjyx2wRryoPKfv18J2ckT"
		const stringsaTV7Q = "avXGGwfybxmhk0aPAUK9zep5dLA1nwD35pYWJur3WWN4hB2lxv"
		const uintqsTXczE = BigInt("230")
		const DSPeG0xchX = await DSP.new(stringvySVuVa, stringsaTV7Q, uintqsTXczE, {from: accounts[4]});
		const addressxQiYqpV = accounts[4]
		const uinttqUFmJk = BigInt("2047")
		const addresstKijkwF = accounts[2]
		const addressoC9S55F = await DSPeG0xchX.transferOwnership.call(addressxQiYqpV, {from: accounts[1]});
		const boolcqRK4s = await DSPeG0xchX.transfer.call(addresstKijkwF, uinttqUFmJk, {from: accounts[0]});
		await DSPeG0xchX.onlyPauser.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addressFsZFtO = accounts[3]
		const uintQUhClTo = BigInt("1746")
		const addressSf4zdRS = accounts[2]
		const addresszKNpzgA = accounts[5]
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressFsZFtO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbfXBhs0 = await DSPDppYTJi.mint.call(addressSf4zdRS, uintQUhClTo, {from: accounts[4]});
//		const addressAXrs0Y = await DSPDppYTJi.upgradeTo.call(addresszKNpzgA, {from: accounts[3]});

		assert.equal(uint256WWOk7SV, BigInt("0"))
		await expect(DSPDppYTJi.mint.call(addressSf4zdRS, uintQUhClTo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuLXDWYn = await DSP.new({from: accounts[4]});
		const addressQeTkSeJ = accounts[1]
		const uint81lUHZF = await DSPuLXDWYn.decimals.call({from: accounts[4]});
		const boolwkePybl = await DSPuLXDWYn.isPauser.call(addressQeTkSeJ, {from: accounts[1]});
		const uint256geqKY0 = await DSPuLXDWYn.totalSupply.call({from: accounts[1]});

		assert.equal(boolwkePybl, false)
		assert.equal(uint256geqKY0, BigInt("100000000000000000000000000000"))
		assert.equal(uint81lUHZF, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPuLXDWYn = await DSP.new({from: accounts[4]});
		const addressZmx8TSk = accounts[1]
		const uintTG3tdu2 = BigInt("1961")
		const addressXszCscM = accounts[2]
		const uint81lUHZF = await DSPuLXDWYn.decimals.call({from: accounts[4]});
		const boolwkePybl = await DSPuLXDWYn.isPauser.call(addressZmx8TSk, {from: accounts[1]});
//		const boolUG8ZyxF = await DSPuLXDWYn.transfer.call(addressXszCscM, uintTG3tdu2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256geqKY0 = await DSPuLXDWYn.totalSupply.call({from: accounts[1]});

		assert.equal(boolwkePybl, false)
		assert.equal(uint81lUHZF, BigInt("18"))
		await expect(DSPuLXDWYn.transfer.call(addressXszCscM, uintTG3tdu2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const uintBqqp47 = BigInt("1879")
		const addressPhw69kY = accounts[3]
		const uintvBM7Ygl = BigInt("349")
		const addressEMbBfVi = accounts[4]
		const addressJAkUdJ = accounts[0]
		const addressUGtcARO = accounts[5]
		const boolxmgjD8O = await DSPGUJiMDe.increaseAllowance.call(addressPhw69kY, uintBqqp47, {from: accounts[1]});
//		await DSPGUJiMDe.whenNotPaused.call({from: accounts[0]});
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressJAkUdJ, addressEMbBfVi, uintvBM7Ygl, {from: accounts[1]});
//		const addressaLHGpt7 = await DSPGUJiMDe.upgradeTo.call(addressUGtcARO, {from: accounts[4]});

		assert.equal(boolxmgjD8O, true)
		await expect(DSPGUJiMDe.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addressj23ghaN = accounts[3]
		const addresslqiZETW = accounts[2]
		const addressUqj4gT = "0x0000000000000000000000000000000000000001"
		const uintgjs0D49 = BigInt("1746")
		const addressBRAbxIH = accounts[2]
		const addressEEBpdWB = accounts[5]
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressj23ghaN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DPkkfZ3 = await DSPDppYTJi.allowance.call(addressUqj4gT, addresslqiZETW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbfXBhs0 = await DSPDppYTJi.mint.call(addressBRAbxIH, uintgjs0D49, {from: accounts[4]});
//		const addressAXrs0Y = await DSPDppYTJi.upgradeTo.call(addressEEBpdWB, {from: accounts[3]});

		assert.equal(uint256DPkkfZ3, BigInt("0"))
		assert.equal(uint256WWOk7SV, BigInt("0"))
		await expect(DSPDppYTJi.mint.call(addressBRAbxIH, uintgjs0D49, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPpKrn077 = await DSP.new({from: accounts[2]});
		const uintVJ7Bz6 = BigInt("1514")
		const addressyrpiGj7 = accounts[1]
		const uintVn09PzS = BigInt("1664")
		const addressdkrspb = accounts[2]
		const addressRdYW7Gc = accounts[4]
		const uintSeh8Yvb = BigInt("585")
		const addressi1ot8GB = accounts[3]
		const uintBqM1UR9 = BigInt("1713")
		const addressnvFX7xR = accounts[2]
//		const boolWBUF0PK = await DSPpKrn077.decreaseAllowance.call(addressyrpiGj7, uintVJ7Bz6, {from: accounts[3]});
//		const stringZu6JrTX = await DSPpKrn077.name.call({from: accounts[2]});
//		const boolYCLg7x1 = await DSPpKrn077.transferFrom.call(addressRdYW7Gc, addressdkrspb, uintVn09PzS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQpqcnQr = await DSPpKrn077.unlock.call(addressi1ot8GB, uintSeh8Yvb, {from: accounts[0]});
//		await DSPpKrn077.pause.call({from: accounts[0]});
//		await DSPpKrn077.onlyNewOwner.call({from: accounts[2]});
//		const boolKokYFS = await DSPpKrn077.mint.call(addressnvFX7xR, uintBqM1UR9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPpKrn077.decreaseAllowance.call(addressyrpiGj7, uintVJ7Bz6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPy8gy5t = await DSP.new({from: accounts[4]});
		const uintSf8IJw1 = BigInt("1959")
		const addresstsItMNX = accounts[2]
		const uintJvpPHZ2 = BigInt("1317")
		const addressXxWaJk9 = accounts[3]
		const uintup8fqO = BigInt("1594")
		const addressqoLHFkD = accounts[1]
		const addressp9OgGfr = accounts[2]
		const addresswBWF42q = "0x0000000000000000000000000000000000000001"
		const boolWld05tc = await DSPy8gy5t.approve.call(addresstsItMNX, uintSf8IJw1, {from: accounts[0]});
//		const booliy5LOiO = await DSPy8gy5t.transfer.call(addressXxWaJk9, uintJvpPHZ2, {from: accounts[1]});
//		const boolVY68cil = await DSPy8gy5t.transferFrom.call(addressp9OgGfr, addressqoLHFkD, uintup8fqO, {from: accounts[4]});
//		const addresswy5ckI1 = await DSPy8gy5t.addPauser.call(addresswBWF42q, {from: accounts[0]});

		assert.equal(boolWld05tc, true)
		await expect(DSPy8gy5t.transfer.call(addressXxWaJk9, uintJvpPHZ2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const uintuFugwv3 = BigInt("349")
		const addressUk3V4ip = accounts[4]
		const addressURCeLYT = accounts[1]
		const uint1hQeZa = BigInt("418")
		const uintC6AF3T = BigInt("882")
		const address9jEEch = accounts[4]
		const addressdKvcfW8 = accounts[1]
//		await DSPGUJiMDe.renouncePauser.call({from: accounts[1]});
//		await DSPGUJiMDe.renouncePauser.call({from: accounts[4]});
//		const boolx8uMm4e = await DSPGUJiMDe.acceptOwnership.call({from: accounts[4]});
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressURCeLYT, addressUk3V4ip, uintuFugwv3, {from: accounts[1]});
//		const boolRXYgUJX = await DSPGUJiMDe.transferWithLock.call(address9jEEch, uintC6AF3T, uint1hQeZa, {from: accounts[1]});
//		const uint256umI9x46 = await DSPGUJiMDe.balanceOf.call(addressdKvcfW8, {from: accounts[3]});

		await expect(DSPGUJiMDe.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const uintjEcEpIS = BigInt("1516")
		const addressiTvDiXw = accounts[2]
		const addressu3azosD = accounts[3]
		const uintMPDVM2 = BigInt("515")
		const addresspo1M2St = "0x0000000000000000000000000000000000000001"
		const uintJdVGpro = BigInt("949")
		const uintFFbNqBG = BigInt("475")
		const address7pzneU = accounts[3]
		const addressY2sXMy5 = accounts[5]
		const boolQDsvqB2 = await DSPDppYTJi.mint.call(addressiTvDiXw, uintjEcEpIS, {from: accounts[1]});
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressu3azosD, {from: "0x0000000000000000000000000000000000000001"});
		const boolwOAL6EI = await DSPDppYTJi.increaseAllowance.call(addresspo1M2St, uintMPDVM2, {from: accounts[3]});
//		const boollYwcN3J = await DSPDppYTJi.transferWithLock.call(address7pzneU, uintFFbNqBG, uintJdVGpro, {from: accounts[4]});
//		const addressAXrs0Y = await DSPDppYTJi.upgradeTo.call(addressY2sXMy5, {from: accounts[3]});

		assert.equal(boolQDsvqB2, true)
		assert.equal(boolwOAL6EI, true)
		assert.equal(uint256WWOk7SV, BigInt("0"))
		await expect(DSPDppYTJi.transferWithLock.call(address7pzneU, uintFFbNqBG, uintJdVGpro, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPkeg679 = await DSP.new({from: accounts[4]});
		const addressdqfw0Y9 = accounts[0]
		const addressuPSTS0i = accounts[3]
		const addressWZJw2ZZ = await DSPkeg679.addPauser.call(addressdqfw0Y9, {from: accounts[4]});
//		await DSPkeg679.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringfPCHBoE = await DSPkeg679.name.call({from: accounts[1]});
//		const uint256BLuAnzr = await DSPkeg679.totalSupply.call({from: accounts[3]});
//		await DSPkeg679.whenNotPaused.call({from: accounts[0]});
//		const addressdT37QQj = await DSPkeg679.addPauser.call(addressuPSTS0i, {from: accounts[2]});

		await expect(DSPkeg679.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPkM6FW65 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbIqBD3q = accounts[4]
		const uintyOh6TQ7 = BigInt("679")
		const addresswHPEcjt = accounts[5]
		const uintmKYVBX1 = BigInt("1905")
		const addresszRt2noj = accounts[3]
		const addressdEb6XX1 = accounts[2]
		const addressf9QKUHw = await DSPkM6FW65.removePauser.call(addressbIqBD3q, {from: accounts[4]});
		const boolLaIUCUv = await DSPkM6FW65.mint.call(addresswHPEcjt, uintyOh6TQ7, {from: accounts[4]});
		const boolRNXam5 = await DSPkM6FW65.transferFrom.call(addressdEb6XX1, addresszRt2noj, uintmKYVBX1, {from: accounts[2]});
		await DSPkM6FW65.unpause.call({from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addressQGFTtXB = accounts[4]
		const addressWPOHl4 = accounts[1]
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressQGFTtXB, {from: "0x0000000000000000000000000000000000000001"});
		const addressafzsomL = await DSPDppYTJi.upgradeTo.call(addressWPOHl4, {from: accounts[1]});

		assert.equal(uint256WWOk7SV, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addresszOsPxBo = accounts[4]
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addresszOsPxBo, {from: "0x0000000000000000000000000000000000000001"});
		const stringeRLHhgA = await DSPDppYTJi.symbol.call({from: accounts[0]});
//		const boolYlMqX5 = await DSPDppYTJi.acceptOwnership.call({from: accounts[2]});

		assert.equal(stringeRLHhgA, "DSP")
		assert.equal(uint256WWOk7SV, BigInt("0"))
		await expect(DSPDppYTJi.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const uintBM5GNgG = BigInt("1387")
		const addressm0mmxcf = accounts[0]
		const addressTz7DNuY = accounts[4]
		const boolV5VuTUO = await DSPDppYTJi.transfer.call(addressm0mmxcf, uintBM5GNgG, {from: accounts[1]});
		const uint256dCyvoW6 = await DSPDppYTJi.totalSupply.call({from: accounts[1]});
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressTz7DNuY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolV5VuTUO, true)
		assert.equal(uint256WWOk7SV, BigInt("0"))
		assert.equal(uint256dCyvoW6, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const uintB75S5aD = BigInt("349")
		const addressV1MrDjK = accounts[4]
		const addressWA3YpTo = accounts[1]
		const uint8I4SscQN = await DSPGUJiMDe.decimals.call({from: accounts[4]});
//		await DSPGUJiMDe.f.call({from: accounts[3]});
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressWA3YpTo, addressV1MrDjK, uintB75S5aD, {from: accounts[1]});

		assert.equal(uint8I4SscQN, BigInt("18"))
		await expect(DSPGUJiMDe.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addressDzUQEMd = accounts[4]
		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(addressDzUQEMd, {from: "0x0000000000000000000000000000000000000001"});
		const boolkVnm5u3 = await DSPDppYTJi.paused.call({from: accounts[3]});

		assert.equal(boolkVnm5u3, false)
		assert.equal(uint256WWOk7SV, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPDppYTJi = await DSP.new({from: accounts[1]});
		const addressYRgikkO = accounts[1]
		const address9Fag2c = accounts[3]
		const uintm6KMD2p = BigInt("1125")
		const addressdBMjvRP = accounts[3]
		const uintSF8aSwL = BigInt("1697")
		const addressoA7YTtA = accounts[1]
		const addressYHkw2gk = accounts[0]
		const uintapD2j3i = BigInt("975")
		const uintTHYdgqf = BigInt("475")
		const addressTJbvpOG = accounts[3]
//		const boolG9mG3KE = await DSPDppYTJi.unfreezeAccount.call(addressYRgikkO, {from: accounts[1]});
//		const uint256WWOk7SV = await DSPDppYTJi.balanceOf.call(address9Fag2c, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK5M5MOb = await DSPDppYTJi.unlock.call(addressdBMjvRP, uintm6KMD2p, {from: accounts[5]});
//		const boolGUvtobo = await DSPDppYTJi.transferFrom.call(addressYHkw2gk, addressoA7YTtA, uintSF8aSwL, {from: accounts[3]});
//		const boollYwcN3J = await DSPDppYTJi.transferWithLock.call(addressTJbvpOG, uintTHYdgqf, uintapD2j3i, {from: accounts[4]});

		await expect(DSPDppYTJi.unfreezeAccount.call(addressYRgikkO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const addresscRVTBpZ = "0x0000000000000000000000000000000000000001"
		const uintqBMDHvX = BigInt("964")
		const uintFwIN4dF = BigInt("1252")
		const addressx2iNeiX = accounts[2]
		const addressN9cTpJ = accounts[0]
		const uintqMxF0qD = BigInt("349")
		const addressWVgRTgW = accounts[4]
		const addressPToFtnt = accounts[0]
		const boolYIT2kaq = await DSPGUJiMDe.isOwner.call(addresscRVTBpZ, {from: accounts[4]});
		const boolEgtu2pi = await DSPGUJiMDe.transferWithLock.call(addressx2iNeiX, uintFwIN4dF, uintqBMDHvX, {from: accounts[1]});
		const uint256GcyoHh = await DSPGUJiMDe.balanceOf.call(addressN9cTpJ, {from: accounts[5]});
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressPToFtnt, addressWVgRTgW, uintqMxF0qD, {from: accounts[1]});

		assert.equal(boolEgtu2pi, true)
		assert.equal(boolYIT2kaq, false)
		assert.equal(uint256GcyoHh, BigInt("0"))
		await expect(DSPGUJiMDe.transferFrom.call(addressPToFtnt, addressWVgRTgW, uintqMxF0qD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPeuAkNr5 = await DSP.new({from: accounts[4]});
		const uintnaCo4f3 = BigInt("391")
		const uintz4Bz3E = BigInt("1979")
		const addresslyX5Mm = accounts[4]
		const addressgTrLi1B = accounts[1]
		const uintfVy5MSl = BigInt("437")
		const addressZsW8jsw = accounts[0]
		const uintMG3E1qD = BigInt("1979")
		const addressJxI3cP3 = accounts[1]
		const addressgrPnTiS = accounts[1]
		const boolNoyOc6y = await DSPeuAkNr5.lock.call(addresslyX5Mm, uintz4Bz3E, uintnaCo4f3, {from: accounts[4]});
		const boolOMzH05r = await DSPeuAkNr5.isOwner.call(addressgTrLi1B, {from: accounts[1]});
		const uint8cO9VpkE = await DSPeuAkNr5.decimals.call({from: accounts[4]});
		const boolMOLy21Z = await DSPeuAkNr5.mint.call(addressZsW8jsw, uintfVy5MSl, {from: accounts[4]});
//		const boolOTAPwqn = await DSPeuAkNr5.transferFrom.call(addressgrPnTiS, addressJxI3cP3, uintMG3E1qD, {from: accounts[0]});

		assert.equal(boolMOLy21Z, true)
		assert.equal(boolNoyOc6y, true)
		assert.equal(boolOMzH05r, false)
		assert.equal(uint8cO9VpkE, BigInt("18"))
		await expect(DSPeuAkNr5.transferFrom.call(addressgrPnTiS, addressJxI3cP3, uintMG3E1qD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGUJiMDe = await DSP.new({from: accounts[1]});
		const addresss3v6VRk = accounts[1]
		const uintLv2DNKG = BigInt("1749")
		const addressaBswKnM = accounts[0]
		const uintljfqlxe = BigInt("2007")
		const addressByU8FMe = accounts[2]
		const addresshWAkKL7 = accounts[2]
		const uintGyCmuls = BigInt("349")
		const addressa4cPbnI = accounts[4]
		const addressLEtsOSH = accounts[1]
		const boolpGrCCXu = await DSPGUJiMDe.freezeAccount.call(addresss3v6VRk, {from: accounts[1]});
//		const boolr4ak5yZ = await DSPGUJiMDe.unlock.call(addressaBswKnM, uintLv2DNKG, {from: accounts[0]});
//		const boolQDdeL94 = await DSPGUJiMDe.transferFrom.call(addresshWAkKL7, addressByU8FMe, uintljfqlxe, {from: accounts[2]});
//		const boolvZI2EuX = await DSPGUJiMDe.transferFrom.call(addressLEtsOSH, addressa4cPbnI, uintGyCmuls, {from: accounts[1]});

		assert.equal(boolpGrCCXu, true)
		await expect(DSPGUJiMDe.unlock.call(addressaBswKnM, uintLv2DNKG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPu27lz1 = await DSP.new({from: accounts[2]});
		const addressoyVOsAV = accounts[0]
		const addresssPtOiIf = accounts[3]
		const addressUl7YjM0 = accounts[3]
		const addressIVAdXqi = await DSPPu27lz1.transferOwnership.call(addressoyVOsAV, {from: accounts[2]});
//		const boolO1OnybS = await DSPPu27lz1.acceptOwnership.call({from: accounts[3]});
//		const boolzfxa8Vr = await DSPPu27lz1.paused.call({from: accounts[5]});
//		const addressAJm1zbN = await DSPPu27lz1.transferOwnership.call(addresssPtOiIf, {from: accounts[2]});
//		const addressGb9qNd = await DSPPu27lz1.removePauser.call(addressUl7YjM0, {from: accounts[0]});

		await expect(DSPPu27lz1.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPUKsFFc = await LUP.new({from: accounts[3]});
		const uintaFMHZth = BigInt("679")
		const addressBxZIwS = accounts[0]
		const uint0WZ6To = BigInt("1050")
		const addresstL4mnsU = accounts[0]
		const boolIZEL9OM = true
		const addressX6nLF0Q = accounts[0]
//		const boolSYaoaHY = await LUPUKsFFc.unlock.call(addressBxZIwS, uintaFMHZth, {from: accounts[4]});
//		const stringEMOhldm = await LUPUKsFFc.name.call({from: accounts[5]});
//		const booliA36YB3 = await LUPUKsFFc.transfer.call(addresstL4mnsU, uint0WZ6To, {from: accounts[1]});
//		const boolci1qRsZ = await LUPUKsFFc.freezeAccount.call(addressX6nLF0Q, boolIZEL9OM, {from: accounts[4]});

		await expect(LUPUKsFFc.unlock.call(addressBxZIwS, uintaFMHZth, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringplpeMm5 = "fLg3cXRDjiNjx0sk1VKT1PK8F2SIx1GfezQ7nqbBmSphlDn2qXPEhUUOS4eLVU9gEX35Fllmwzow"
		const stringsNOSKBw = "svkkOz4WlaJ8bNJm2nfK8XyIAhHQ587cUGRwxp1uha"
		const uintWEreYQA = BigInt("184")
		const LUPds9sod1 = await LUP.new(stringplpeMm5, stringsNOSKBw, uintWEreYQA, {from: accounts[4]});
		const uintJClwYJT = BigInt("1484")
		const uintzBoaZAa = BigInt("343")
		const addressGxqmQm = accounts[3]
		const addressoCunhaD = accounts[4]
		const boolBOAsyTm = await LUPds9sod1.transferWithLock.call(addressGxqmQm, uintzBoaZAa, uintJClwYJT, {from: "0x0000000000000000000000000000000000000001"});
		const stringWMnRLi8 = await LUPds9sod1.name.call({from: accounts[1]});
		const addressLJU1RR = await LUPds9sod1.notFrozen.call(addressoCunhaD, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUP5DNlrF = await LUP.new({from: accounts[4]});
		const uintj1d9inH = BigInt("1020")
		const uintaTAM7a9 = BigInt("2011")
		const addressZkGZuo = accounts[4]
		const uintxL7Og9s = BigInt("1442")
		const addressIhIufGc = accounts[5]
		const addresscOnXdX = accounts[4]
		const uinthx5csS = BigInt("334")
		const uintTEZNAmu = BigInt("487")
		const addressa5Hvk1Q = accounts[3]
		const boolBeRKCH = await LUP5DNlrF.transferWithLock.call(addressZkGZuo, uintaTAM7a9, uintj1d9inH, {from: accounts[4]});
		const uint8hp1jsSC = await LUP5DNlrF.decimals.call({from: accounts[2]});
//		const boolhJfoIbO = await LUP5DNlrF.unlock.call(addressIhIufGc, uintxL7Og9s, {from: accounts[3]});
//		const uint256ohXUnLM = await LUP5DNlrF.balanceOf.call(addresscOnXdX, {from: accounts[1]});
//		const boolteHqAw0 = await LUP5DNlrF.lock.call(addressa5Hvk1Q, uintTEZNAmu, uinthx5csS, {from: accounts[2]});

		assert.equal(boolBeRKCH, true)
		assert.equal(uint8hp1jsSC, BigInt("18"))
		await expect(LUP5DNlrF.unlock.call(addressIhIufGc, uintxL7Og9s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const uintjjnGr1t = BigInt("1426")
		const addressF8a2ijA = accounts[4]
		const addressed0okX1 = accounts[0]
		const address2TSM9K = accounts[4]
		const addressv4KN4F = accounts[4]
		const boolGkZNT5L = true
		const addressjH6shU = accounts[0]
//		const boolonaaH3X = await LUPSTuJoM.transfer.call(addressF8a2ijA, uintjjnGr1t, {from: accounts[4]});
//		const uint256Jhuiuw7 = await LUPSTuJoM.balanceOf.call(addressed0okX1, {from: accounts[3]});
//		const addressM9rv3a1 = await LUPSTuJoM.upgradeTo.call(address2TSM9K, {from: accounts[3]});
//		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addressv4KN4F, {from: accounts[4]});
//		const boolnuDw5QM = await LUPSTuJoM.freezeAccount.call(addressjH6shU, boolGkZNT5L, {from: accounts[3]});

		await expect(LUPSTuJoM.transfer.call(addressF8a2ijA, uintjjnGr1t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const addressVRfZIm1 = accounts[4]
		const boolGkZNT5L = true
		const addressOwC4NJA = accounts[1]
		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addressVRfZIm1, {from: accounts[4]});
//		const boolnuDw5QM = await LUPSTuJoM.freezeAccount.call(addressOwC4NJA, boolGkZNT5L, {from: accounts[3]});

		assert.equal(uint256SiUteS6, BigInt("0"))
		await expect(LUPSTuJoM.freezeAccount.call(addressOwC4NJA, boolGkZNT5L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPeEI1IRk = await LUP.new({from: accounts[2]});
		const addressbcsW2m5 = accounts[5]
		const uintZiXWVme = BigInt("641")
		const addressm25sDG = accounts[3]
//		const addressGGEL2He = await LUPeEI1IRk.notFrozen.call(addressbcsW2m5, {from: accounts[1]});
//		const boolOXbqyO2 = await LUPeEI1IRk.unlock.call(addressm25sDG, uintZiXWVme, {from: accounts[1]});
//		const stringj8Sclg = await LUPeEI1IRk.symbol.call({from: accounts[3]});

		await expect(LUPeEI1IRk.notFrozen.call(addressbcsW2m5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPRzobWL2 = await LUP.new({from: accounts[4]});
		const addressbk0Wifu = accounts[0]
		const addressnXJldE = accounts[1]
		const stringx9kteK2 = await LUPRzobWL2.symbol.call({from: accounts[1]});
//		const addressOKOIZbL = await LUPRzobWL2.notFrozen.call(addressbk0Wifu, {from: accounts[1]});
//		const addressQo6EdBD = await LUPRzobWL2.notFrozen.call(addressnXJldE, {from: accounts[5]});

		assert.equal(stringx9kteK2, "LUP")
		await expect(LUPRzobWL2.notFrozen.call(addressbk0Wifu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const uintV53VRaV = BigInt("812")
		const addressN5zrFF7 = accounts[0]
		const uintEkZ0gBM = BigInt("1417")
		const addressiB3e4P0 = accounts[5]
		const uint86OAK9c = await LUPSTuJoM.decimals.call({from: accounts[1]});
//		const booldfzFyLm = await LUPSTuJoM.unlock.call(addressN5zrFF7, uintV53VRaV, {from: accounts[5]});
//		const boolonaaH3X = await LUPSTuJoM.transfer.call(addressiB3e4P0, uintEkZ0gBM, {from: accounts[4]});

		assert.equal(uint86OAK9c, BigInt("18"))
		await expect(LUPSTuJoM.unlock.call(addressN5zrFF7, uintV53VRaV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdFeEC7V = await LUP.new({from: accounts[4]});
		const addresszlvNtza = accounts[0]
		const uintpdMOJRV = BigInt("1987")
		const uintSPIKPrK = BigInt("163")
		const addressl4B4bw3 = accounts[4]
		const uintiYdS36u = BigInt("573")
		const addresszOFCjBq = accounts[4]
		const uintJvzR8Us = BigInt("1938")
		const addressz0sj1es = accounts[2]
		const stringeOuAKsT = await LUPdFeEC7V.symbol.call({from: accounts[3]});
//		const addressXPX1dj5 = await LUPdFeEC7V.upgradeTo.call(addresszlvNtza, {from: accounts[2]});
//		const booltSFMeE = await LUPdFeEC7V.lock.call(addressl4B4bw3, uintSPIKPrK, uintpdMOJRV, {from: accounts[1]});
//		const boolLkAzxWi = await LUPdFeEC7V.transfer.call(addresszOFCjBq, uintiYdS36u, {from: accounts[3]});
//		const boolWFEvVZr = await LUPdFeEC7V.transfer.call(addressz0sj1es, uintJvzR8Us, {from: accounts[3]});

		assert.equal(stringeOuAKsT, "LUP")
		await expect(LUPdFeEC7V.upgradeTo.call(addresszlvNtza, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const uintXecJybG = BigInt("1386")
		const addressJHHhvzj = accounts[4]
		const stringSEoH3Q = await LUPSTuJoM.name.call({from: accounts[0]});
//		const boolonaaH3X = await LUPSTuJoM.transfer.call(addressJHHhvzj, uintXecJybG, {from: accounts[4]});

		assert.equal(stringSEoH3Q, "LINKUP Token")
		await expect(LUPSTuJoM.transfer.call(addressJHHhvzj, uintXecJybG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const boolJrLEnkM = true
		const addressaefDNKG = accounts[1]
		const uintfwHySlo = BigInt("1374")
		const uintvmLOzez = BigInt("1086")
		const addressRwJ2fG1 = accounts[2]
		const addresspOyQKN6 = accounts[5]
		const boolrgEtsat = await LUPSTuJoM.freezeAccount.call(addressaefDNKG, boolJrLEnkM, {from: accounts[5]});
//		const boolOLnmXK = await LUPSTuJoM.transferWithLock.call(addressRwJ2fG1, uintvmLOzez, uintfwHySlo, {from: accounts[4]});
//		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addresspOyQKN6, {from: accounts[4]});

		assert.equal(boolrgEtsat, true)
		await expect(LUPSTuJoM.transferWithLock.call(addressRwJ2fG1, uintvmLOzez, uintfwHySlo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const addressc898mGz = accounts[2]
		const uint4Nrmol = BigInt("1717")
		const addresslwMrh4D = accounts[3]
		const addressAEdCVD = accounts[5]
		const addressbHjBifP = await LUPSTuJoM.upgradeTo.call(addressc898mGz, {from: accounts[5]});
//		const booljDZ4Z5q = await LUPSTuJoM.transfer.call(addresslwMrh4D, uint4Nrmol, {from: accounts[4]});
//		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addressAEdCVD, {from: accounts[4]});

		await expect(LUPSTuJoM.transfer.call(addresslwMrh4D, uint4Nrmol, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPrLBK4P7 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEZHfyT = accounts[4]
		const addressWuk0DYA = accounts[3]
		const addressAU0LHLo = "0x0000000000000000000000000000000000000001"
		const addresslAbR44U = accounts[1]
		const addressGZPaVb9 = await LUPrLBK4P7.notFrozen.call(addressEZHfyT, {from: accounts[4]});
		const uint256QKHToAh = await LUPrLBK4P7.balanceOf.call(addressWuk0DYA, {from: accounts[1]});
		const uint256lCTLH2B = await LUPrLBK4P7.balanceOf.call(addressAU0LHLo, {from: accounts[5]});
		const uint256F7Maa2A = await LUPrLBK4P7.balanceOf.call(addresslAbR44U, {from: accounts[0]});
		const stringGw7c4QM = await LUPrLBK4P7.name.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const uintHq5WExD = BigInt("85")
		const uintaOjMvBK = BigInt("1704")
		const addressLs4hoHZ = accounts[3]
		const addressGaWmsrl = accounts[5]
//		const boolPGqSqcc = await LUPSTuJoM.lock.call(addressLs4hoHZ, uintaOjMvBK, uintHq5WExD, {from: accounts[5]});
//		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addressGaWmsrl, {from: accounts[4]});

		await expect(LUPSTuJoM.lock.call(addressLs4hoHZ, uintaOjMvBK, uintHq5WExD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSTuJoM = await LUP.new({from: accounts[5]});
		const addressO4h3hyx = accounts[5]
		const uintUypZjsz = BigInt("2010")
		const uintic3vXi0 = BigInt("1320")
		const addressFwuN5H1 = accounts[5]
		const uint256SiUteS6 = await LUPSTuJoM.balanceOf.call(addressO4h3hyx, {from: accounts[4]});
		const boolJaz495N = await LUPSTuJoM.lock.call(addressFwuN5H1, uintic3vXi0, uintUypZjsz, {from: accounts[5]});

		assert.equal(boolJaz495N, true)
		assert.equal(uint256SiUteS6, BigInt("50000000000000000000000000"))
	});
})
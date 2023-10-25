const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintujH01jG = BigInt("1628")
		const stringXI5dcW = "VFdbgSpO2CJhYyk4K7TPE47X4ouPlWyYLG7UF7OUWS69zI1NyzlPviG8M"
		const stringa1uauGI = "iuhlY6xmtvyz"
		const uintkcrJOGg = BigInt("250")
		const ANRXTokenVWTc5vH = await ANRXToken.new(uintujH01jG, stringXI5dcW, stringa1uauGI, uintkcrJOGg, {from: accounts[1]});
		const uintOR8a1kj = BigInt("1380")
		const uintnwZBHNY = BigInt("743")
		const addressBmTvvp = accounts[0]
		const uintG2EPAEz = await ANRXTokenVWTc5vH.redeem.call(uintOR8a1kj, {from: accounts[1]});
		const boolmB1qWd = await ANRXTokenVWTc5vH.approve.call(addressBmTvvp, uintnwZBHNY, {from: accounts[0]});

		assert.equal(boolmB1qWd, true)
	});

	it('test for ANRXToken', async () => {
		const uintsciN9VA = BigInt("1681")
		const stringTYxul0P = "hSyRUIL"
		const stringtG0oZnZ = "8HbhsJKJGyK6g5IysWLEfNb2wrhg3RsbCq5gQjGnQw2GAi4BVv8ma9NDRjLuJ9TqRma4KGp"
		const uintwAXsddM = BigInt("1232")
		const ANRXTokenI5pOmWB = await ANRXToken.new(uintsciN9VA, stringTYxul0P, stringtG0oZnZ, uintwAXsddM, {from: accounts[3]});
		const uintisg8tXl = BigInt("1792")
		const addressZvehs1D = accounts[3]
		const uintVUarNh9 = BigInt("15")
		const addressfdpxHo = accounts[3]
		const uinttG9kMUP = BigInt("1618")
		const addressoYMYVL1 = accounts[3]
//		const boolMgxnJIW = await ANRXTokenI5pOmWB.transfer.call(addressZvehs1D, uintisg8tXl, {from: accounts[4]});
//		const booleV2rFb1 = await ANRXTokenI5pOmWB.approve.call(addressfdpxHo, uintVUarNh9, {from: accounts[1]});
//		const boolQAmnrLQ = await ANRXTokenI5pOmWB.approve.call(addressoYMYVL1, uinttG9kMUP, {from: accounts[3]});

		await expect(ANRXTokenI5pOmWB.transfer.call(addressZvehs1D, uintisg8tXl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintwJPkJR0 = BigInt("1754")
		const stringDmJ8NBd = "k"
		const stringzfUDGlM = "hObokGB0IBsvwoWJcCXo2SzoG18zlll54pkr5kLTdsHF63HaSwMxn9dkJ"
		const uintxB2sG5f = BigInt("1162")
		const ANRXTokenRB12Yzd = await ANRXToken.new(uintwJPkJR0, stringDmJ8NBd, stringzfUDGlM, uintxB2sG5f, {from: accounts[4]});
		const uint8hjiti = BigInt("1955")
		const addressQF9gwcI = "0x0000000000000000000000000000000000000001"
		const addressUp62sCX = accounts[1]
		const uintLA0BgBt = BigInt("1032")
		const addressInXzv7m = accounts[3]
//		const boolEipACIk = await ANRXTokenRB12Yzd.transferFrom.call(addressUp62sCX, addressQF9gwcI, uint8hjiti, {from: accounts[3]});
//		const uintMHhv8v9 = await ANRXTokenRB12Yzd.issue.call(uintLA0BgBt, {from: accounts[2]});
//		const uintGOpx3jz = await ANRXTokenRB12Yzd.totalSupply.call({from: accounts[2]});
//		const uintkaUQPf = await ANRXTokenRB12Yzd.balanceOf.call(addressInXzv7m, {from: accounts[1]});

		await expect(ANRXTokenRB12Yzd.transferFrom.call(addressUp62sCX, addressQF9gwcI, uint8hjiti, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintOkKmI3W = BigInt("331")
		const stringnb01Qqw = "L6fCYIxFoyyJmpMMyAL0REeAiHIH9SuFPep2T1AR1h3FDonPlcGRu52JSeNaW44lvYEqiSKXo8arFnhUGwvkP2rMJBx7"
		const stringaSzB151 = "yRDQg18uKM3kI59ipNeO1pPzzPEEgSR"
		const uintVh4bXO = BigInt("1497")
		const ANRXTokenh4D7Vvi = await ANRXToken.new(uintOkKmI3W, stringnb01Qqw, stringaSzB151, uintVh4bXO, {from: accounts[1]});
		const addressKQavGmN = accounts[0]
		const uintkVxdQ5e = BigInt("1670")
		const uinto1zh4Mn = BigInt("527")
		const uintglqjRKF = BigInt("1260")
		const uintWlQWnkR = BigInt("315")
		const uintCKhwhjI = BigInt("549")
		const uintdTXA0rH = await ANRXTokenh4D7Vvi.balanceOf.call(addressKQavGmN, {from: accounts[1]});
//		const uintoUiwnXi = await ANRXTokenh4D7Vvi.redeem.call(uintkVxdQ5e, {from: accounts[2]});
//		const uintLR9BGXQ = await ANRXTokenh4D7Vvi.setParams.call(uintglqjRKF, uinto1zh4Mn, {from: accounts[4]});
//		const uintgb1NKNz = await ANRXTokenh4D7Vvi.redeem.call(uintWlQWnkR, {from: accounts[2]});
//		const uintNAGknSq = await ANRXTokenh4D7Vvi.issue.call(uintCKhwhjI, {from: accounts[3]});

		assert.equal(uintdTXA0rH, BigInt("0"))
		await expect(ANRXTokenh4D7Vvi.redeem.call(uintkVxdQ5e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintN1mJ6Cn = BigInt("1263")
		const stringwYVONsa = "tNSmjVihvuWSaPdSli0BwClPaXvxqEt5zqRBUJ1dyOJ7xnNgK3"
		const stringBAH8v2 = "GWhJeovxUmBwiW"
		const uintIsc9UiI = BigInt("1785")
		const ANRXToken0cp9wg = await ANRXToken.new(uintN1mJ6Cn, stringwYVONsa, stringBAH8v2, uintIsc9UiI, {from: accounts[0]});
		const addressMtY0toZ = accounts[2]
		const addresssvutdma = accounts[4]
		const uintdlJSi8m = BigInt("1975")
		const uinttIXLEff = await ANRXToken0cp9wg.balanceOf.call(addressMtY0toZ, {from: accounts[5]});
		const uintU7AK18e = await ANRXToken0cp9wg.balanceOf.call(addresssvutdma, {from: accounts[0]});
		const uintNpVtv92 = await ANRXToken0cp9wg.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintch0LVNo = await ANRXToken0cp9wg.issue.call(uintdlJSi8m, {from: accounts[1]});

		assert.equal(uintNpVtv92, BigInt("1263"))
		assert.equal(uintU7AK18e, BigInt("0"))
		assert.equal(uinttIXLEff, BigInt("0"))
		await expect(ANRXToken0cp9wg.issue.call(uintdlJSi8m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUlc8cbP = BigInt("638")
		const stringObJM9P = "ea4FHtmJqlLIHGu8F2FaA7t84ziuIL"
		const stringpOMwpys = "ZCKcTZkS74bjap2pCQPmjwYhaeMkJV6m7SuDeD72e3omlsoPnOTjjOiL1QUlW6wQLjMxFmvvodNtgkoDnFmwEN2mLnb9i6Y"
		const uintAMnaERl = BigInt("1368")
		const ANRXTokendPNwVna = await ANRXToken.new(uintUlc8cbP, stringObJM9P, stringpOMwpys, uintAMnaERl, {from: "0x0000000000000000000000000000000000000001"});
		const uintsBHoxBk = BigInt("434")
		const addressSZXbnb1 = accounts[1]
		const uintg6u7hZt = BigInt("1085")
		const addressYyqfzC = accounts[3]
		const uintyEHxa4s = BigInt("1496")
		const addressrDDRgDH = accounts[2]
		const addressAgsK4u7 = accounts[4]
		const addressJE2lHO2 = accounts[2]
		const boolLMUIM3E = await ANRXTokendPNwVna.approve.call(addressSZXbnb1, uintsBHoxBk, {from: accounts[1]});
		const booluRhrHEx = await ANRXTokendPNwVna.transfer.call(addressYyqfzC, uintg6u7hZt, {from: accounts[5]});
		const boolSMBed2 = await ANRXTokendPNwVna.approve.call(addressrDDRgDH, uintyEHxa4s, {from: accounts[5]});
		const uintf0IqLdm = await ANRXTokendPNwVna.allowance.call(addressJE2lHO2, addressAgsK4u7, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintYwP1MH = BigInt("634")
		const stringxWUz1hO = "8Uk9S9MvJizR1Dwv9IA5XDdtbotvtFvXO3BIBO5"
		const stringG2Dnk3 = "N4kooc"
		const uintz0ehveU = BigInt("611")
		const ANRXTokenSmz5tve = await ANRXToken.new(uintYwP1MH, stringxWUz1hO, stringG2Dnk3, uintz0ehveU, {from: accounts[3]});
		const addressOpojRgP = accounts[1]
		const address8G82rj = accounts[5]
		const uintCpzAIY2 = BigInt("1138")
		const uintmDqZAiQ = BigInt("1390")
		const uintLHcQWXk = BigInt("105")
		const addressgxFFRn4 = accounts[3]
		const addressdM89ZEt = accounts[4]
		const uintAFy6Ulo = BigInt("1854")
		const uintkpKqonm = BigInt("1447")
		const uintIfFikfZ = await ANRXTokenSmz5tve.totalSupply.call({from: accounts[2]});
		const uintGEmJARG = await ANRXTokenSmz5tve.allowance.call(address8G82rj, addressOpojRgP, {from: accounts[1]});
//		const uintZtqDr5 = await ANRXTokenSmz5tve.issue.call(uintCpzAIY2, {from: accounts[0]});
//		const uintWLMWjA8 = await ANRXTokenSmz5tve.setParams.call(uintLHcQWXk, uintmDqZAiQ, {from: accounts[1]});
//		const uintU1YSBU = await ANRXTokenSmz5tve.allowance.call(addressdM89ZEt, addressgxFFRn4, {from: accounts[1]});
//		const uintKQoSZNy = await ANRXTokenSmz5tve.setParams.call(uintkpKqonm, uintAFy6Ulo, {from: accounts[1]});

		assert.equal(uintGEmJARG, BigInt("0"))
		assert.equal(uintIfFikfZ, BigInt("634"))
		await expect(ANRXTokenSmz5tve.issue.call(uintCpzAIY2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintC0uNX6q = BigInt("1628")
		const stringXI5dcW = "VFdbgSpO2CJhYyk4K7TPE47X4ouPlWyYLG7UF7OUWS69zI1NyzlPviG8M"
		const stringa1uauGI = "iuhlY6xmtvyz"
		const uintjuHgbnD = BigInt("250")
		const ANRXTokenVWTc5vH = await ANRXToken.new(uintC0uNX6q, stringXI5dcW, stringa1uauGI, uintjuHgbnD, {from: accounts[1]});
		const addressTapnUYs = accounts[2]
		const addressrEYCV00 = accounts[2]
		const uinthKbWlcT = BigInt("929")
		const addressWUAYa0 = accounts[0]
		const uintBQrxCrU = BigInt("705")
		const addressJqZrTxa = accounts[5]
		const addressJc1t3lw = accounts[3]
		const uintiqvncLm = await ANRXTokenVWTc5vH.balanceOf.call(addressTapnUYs, {from: "0x0000000000000000000000000000000000000001"});
		const addressg2f14ED = await ANRXTokenVWTc5vH.deprecate.call(addressrEYCV00, {from: accounts[1]});
		const boolmB1qWd = await ANRXTokenVWTc5vH.approve.call(addressWUAYa0, uinthKbWlcT, {from: accounts[0]});
//		const boolU0wBIZe = await ANRXTokenVWTc5vH.transferFrom.call(addressJc1t3lw, addressJqZrTxa, uintBQrxCrU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolmB1qWd, true)
		assert.equal(uintiqvncLm, BigInt("0"))
		await expect(ANRXTokenVWTc5vH.transferFrom.call(addressJc1t3lw, addressJqZrTxa, uintBQrxCrU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdp9Q1ge = BigInt("2043")
		const stringRpXkIlM = "7Wm0PPVeFFd7h1kNxeNIAtiDDoPvMABniL6VFt59S2UNj6OueXsbRO2m7fNcJPgRp9uEkx"
		const stringaABwGOG = "IfCxSlDgD4KBIsfkwOq9DExJKAllcts7TNiNsY6OosDTKmW22pRLTcwf1M"
		const uintER3sOMU = BigInt("674")
		const ANRXTokencb4FVuN = await ANRXToken.new(uintdp9Q1ge, stringRpXkIlM, stringaABwGOG, uintER3sOMU, {from: accounts[5]});
		const uintNiYeW4 = BigInt("1152")
		const addressvDFkkNl = accounts[5]
		const addressYtSypGi = accounts[1]
		const uintg7TZCVb = BigInt("1921")
		const addressIMrXBju = accounts[5]
		const uintkpuZ0zP = BigInt("47")
		const addressJ6dRK6L = accounts[2]
		const uintHjgV61v = BigInt("962")
		const addressxyWrnIQ = accounts[2]
		const addresseAD86nT = accounts[2]
		const uintmoPbiV = await ANRXTokencb4FVuN.issue.call(uintNiYeW4, {from: accounts[5]});
		const uintwdw2n6Z = await ANRXTokencb4FVuN.allowance.call(addressYtSypGi, addressvDFkkNl, {from: accounts[3]});
		const boolX2DhYGG = await ANRXTokencb4FVuN.approve.call(addressIMrXBju, uintg7TZCVb, {from: accounts[2]});
		const boolXEsKcKL = await ANRXTokencb4FVuN.approve.call(addressJ6dRK6L, uintkpuZ0zP, {from: accounts[1]});
//		const boolTx3Ljl6 = await ANRXTokencb4FVuN.transferFrom.call(addresseAD86nT, addressxyWrnIQ, uintHjgV61v, {from: accounts[3]});

		assert.equal(boolX2DhYGG, true)
		assert.equal(boolXEsKcKL, true)
		assert.equal(uintwdw2n6Z, BigInt("0"))
		await expect(ANRXTokencb4FVuN.transferFrom.call(addresseAD86nT, addressxyWrnIQ, uintHjgV61v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintOVWQiu = BigInt("1628")
		const stringXI5dcW = "VFdbgSpO2CJhYyk4K7TPE47X4ouPlWyYLG7UF7OUWS69zI1NyzlPviG8M"
		const stringa1uauGI = "iuhlY6xmtvyz"
		const uintPHOGEHH = BigInt("250")
		const ANRXTokenVWTc5vH = await ANRXToken.new(uintOVWQiu, stringXI5dcW, stringa1uauGI, uintPHOGEHH, {from: accounts[1]});
		const uintn0XDTAf = BigInt("1493")
		const addressLmGSfk8 = accounts[0]
		const addressJkj9EjJ = "0x0000000000000000000000000000000000000001"
		const addressuZI3WfB = accounts[4]
		const uintRAbcUwG = BigInt("1090")
		const uintvEU880J = BigInt("2046")
		const boolmB1qWd = await ANRXTokenVWTc5vH.approve.call(addressLmGSfk8, uintn0XDTAf, {from: accounts[0]});
		const uintDwPuWeN = await ANRXTokenVWTc5vH.allowance.call(addressuZI3WfB, addressJkj9EjJ, {from: accounts[1]});
//		const uinte833r0U = await ANRXTokenVWTc5vH.setParams.call(uintvEU880J, uintRAbcUwG, {from: accounts[1]});

		assert.equal(boolmB1qWd, true)
		assert.equal(uintDwPuWeN, BigInt("0"))
		await expect(ANRXTokenVWTc5vH.setParams.call(uintvEU880J, uintRAbcUwG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
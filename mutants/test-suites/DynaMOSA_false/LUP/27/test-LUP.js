const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPU6vDUAT = await LUP.new({from: accounts[0]});
		const uintltOl1TP = BigInt("1059")
		const uintxYxec4H = BigInt("1592")
		const addresso2qJDzL = "0x0000000000000000000000000000000000000001"
		const addressYoqly4 = accounts[1]
		const uintxE3AzMJ = BigInt("533")
		const uintAFTQ8n5 = BigInt("1349")
		const addressFhedNIZ = accounts[3]
//		const boolPDNwHum = await LUPU6vDUAT.transferWithLock.call(addresso2qJDzL, uintxYxec4H, uintltOl1TP, {from: accounts[3]});
//		const stringURnEhhn = await LUPU6vDUAT.name.call({from: accounts[2]});
//		const addressJxGrsYk = await LUPU6vDUAT.notFrozen.call(addressYoqly4, {from: accounts[2]});
//		const boolSPnb7EZ = await LUPU6vDUAT.lock.call(addressFhedNIZ, uintAFTQ8n5, uintxE3AzMJ, {from: accounts[4]});

		await expect(LUPU6vDUAT.transferWithLock.call(addresso2qJDzL, uintxYxec4H, uintltOl1TP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringhgL5Hrz = "NxVMtjg21ez7m7IkkkKDBxT4dPbhrGiTAjtI2L3J6KDYubB6e4G1IumGaEPY4re6C9nGw"
		const stringObQAGJk = "DIqsc97rdR6swMtVnXH7Byu88WY2PLzXWToH2KbvbJiHRnYZ6NoBskHNMlABV9Qq2DD"
		const uintVgqJU1a = BigInt("38")
		const LUPNYaBoCA = await LUP.new(stringhgL5Hrz, stringObQAGJk, uintVgqJU1a, {from: accounts[0]});
		const addressX6wmLg = accounts[0]
		const addressMRFR2P6 = accounts[0]
		const uintjKJI3d = BigInt("385")
		const uintCowhiDE = BigInt("1141")
		const addressjAonEK = accounts[3]
		const addressjFWiRrM = await LUPNYaBoCA.notFrozen.call(addressX6wmLg, {from: accounts[2]});
		const addressDXiXLw = await LUPNYaBoCA.notFrozen.call(addressMRFR2P6, {from: accounts[4]});
		const stringBWeoEC7 = await LUPNYaBoCA.symbol.call({from: accounts[2]});
		const boolpGog0bl = await LUPNYaBoCA.lock.call(addressjAonEK, uintCowhiDE, uintjKJI3d, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPPjqR6jx = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmvtITlm = BigInt("2009")
		const addressbUiXr1t = accounts[4]
		const uintFV2xhi9 = BigInt("1165")
		const addressSMs0HRW = accounts[2]
		const uintYM3S1xx = BigInt("19")
		const addressnb88Vnt = accounts[0]
		const addressEqiWYmQ = "0x0000000000000000000000000000000000000001"
		const boolQk5hDIK = await LUPPjqR6jx.transfer.call(addressbUiXr1t, uintmvtITlm, {from: accounts[3]});
		const boolW7fSloq = await LUPPjqR6jx.transfer.call(addressSMs0HRW, uintFV2xhi9, {from: accounts[4]});
		const uint8wsHMFwz = await LUPPjqR6jx.decimals.call({from: accounts[0]});
		const boolEjqT0w7 = await LUPPjqR6jx.transfer.call(addressnb88Vnt, uintYM3S1xx, {from: accounts[4]});
		const addressGfjD9Ou = await LUPPjqR6jx.upgradeTo.call(addressEqiWYmQ, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressvdex3N = accounts[3]
		const addressgDHpcW = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressvdex3N, {from: accounts[1]});
		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressgDHpcW, {from: accounts[4]});

		assert.equal(uint256RIa1tjp, BigInt("0"))
		assert.equal(uint256rAT0m5, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPXaNl6G3 = await LUP.new({from: accounts[3]});
		const addressgD2MZxJ = accounts[1]
		const addressRdrQee = accounts[0]
		const uintnrt6lfT = BigInt("2042")
		const addressDMwvMeF = accounts[0]
		const addressu3629RV = accounts[0]
		const uint256t00AfGI = await LUPXaNl6G3.balanceOf.call(addressgD2MZxJ, {from: accounts[2]});
//		const addressxkfxutc = await LUPXaNl6G3.upgradeTo.call(addressRdrQee, {from: accounts[1]});
//		const boolTucOD61 = await LUPXaNl6G3.unlock.call(addressDMwvMeF, uintnrt6lfT, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvPvBrNO = await LUPXaNl6G3.notFrozen.call(addressu3629RV, {from: accounts[0]});

		assert.equal(uint256t00AfGI, BigInt("0"))
		await expect(LUPXaNl6G3.upgradeTo.call(addressRdrQee, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressxRoqifI = accounts[3]
		const addressE5mkuIB = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressxRoqifI, {from: accounts[1]});
		const stringcMMDnT4 = await LUPJuWBsAW.symbol.call({from: accounts[3]});
		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressE5mkuIB, {from: accounts[4]});

		assert.equal(stringcMMDnT4, "LUP")
		assert.equal(uint256RIa1tjp, BigInt("0"))
		assert.equal(uint256rAT0m5, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressTtGjw82 = accounts[3]
		const addressv1TwGON = accounts[2]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressTtGjw82, {from: accounts[1]});
		const uint8VdZHHRk = await LUPJuWBsAW.decimals.call({from: accounts[5]});
		const stringcMMDnT4 = await LUPJuWBsAW.symbol.call({from: accounts[3]});
		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressv1TwGON, {from: accounts[4]});

		assert.equal(stringcMMDnT4, "LUP")
		assert.equal(uint256RIa1tjp, BigInt("0"))
		assert.equal(uint256rAT0m5, BigInt("50000000000000000000000000"))
		assert.equal(uint8VdZHHRk, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const uintRJEgjv = BigInt("1400")
		const address5p7wFd = accounts[2]
		const addressl3NDiEJ = accounts[4]
		const addressN3qhSB0 = accounts[1]
//		const boolGPU9Gcv = await LUPJuWBsAW.transfer.call(address5p7wFd, uintRJEgjv, {from: accounts[3]});
//		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressl3NDiEJ, {from: accounts[1]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressN3qhSB0, {from: accounts[4]});

		await expect(LUPJuWBsAW.transfer.call(address5p7wFd, uintRJEgjv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressByVDILT = accounts[3]
		const uintngMpQBG = BigInt("251")
		const addressF43HmK4 = accounts[2]
		const addressrWNLqyS = accounts[1]
		const addressy4N183j = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressByVDILT, {from: accounts[1]});
		const boolmq52O5h = await LUPJuWBsAW.transfer.call(addressF43HmK4, uintngMpQBG, {from: accounts[2]});
//		const addressKoHq0i = await LUPJuWBsAW.notFrozen.call(addressrWNLqyS, {from: accounts[4]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressy4N183j, {from: accounts[4]});

		assert.equal(boolmq52O5h, true)
		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.notFrozen.call(addressrWNLqyS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const address70S87D = accounts[1]
		const addressL1C95IX = accounts[3]
		const uintsZGpoV = BigInt("296")
		const addressVcdpSD3 = accounts[2]
		const uintrzs4oBZ = BigInt("367")
		const uintfFmSK6B = BigInt("1521")
		const addressYx4eXGk = accounts[2]
		const addressa5KuWy = accounts[1]
		const uintMOAN2Ta = BigInt("547")
		const uint80VIh2 = BigInt("1338")
		const addressua82aPD = accounts[2]
		const addresswbNwb5w = accounts[1]
		const addressczt4y5i = await LUPJuWBsAW.upgradeTo.call(address70S87D, {from: accounts[2]});
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressL1C95IX, {from: accounts[1]});
		const boolmq52O5h = await LUPJuWBsAW.transfer.call(addressVcdpSD3, uintsZGpoV, {from: accounts[2]});
//		const boolbqslp8R = await LUPJuWBsAW.lock.call(addressYx4eXGk, uintfFmSK6B, uintrzs4oBZ, {from: accounts[1]});
//		const addressKoHq0i = await LUPJuWBsAW.notFrozen.call(addressa5KuWy, {from: accounts[4]});
//		const stringaJwTzX = await LUPJuWBsAW.name.call({from: accounts[4]});
//		const boolvhBNGbv = await LUPJuWBsAW.transferWithLock.call(addressua82aPD, uint80VIh2, uintMOAN2Ta, {from: accounts[4]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addresswbNwb5w, {from: accounts[4]});

		assert.equal(boolmq52O5h, true)
		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.lock.call(addressYx4eXGk, uintfFmSK6B, uintrzs4oBZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const boolYk6jjuE = false
		const addresscR2Cwn8 = accounts[4]
		const addressT8yY1qT = accounts[0]
		const addressnj23Hve = accounts[5]
		const boolMHzRbpi = await LUPJuWBsAW.freezeAccount.call(addresscR2Cwn8, boolYk6jjuE, {from: accounts[2]});
//		const addressu3uRRrv = await LUPJuWBsAW.notFrozen.call(addressT8yY1qT, {from: accounts[4]});
//		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressnj23Hve, {from: accounts[1]});

		assert.equal(boolMHzRbpi, true)
		await expect(LUPJuWBsAW.notFrozen.call(addressT8yY1qT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressroZKXK = accounts[5]
		const addressTBWVXex = accounts[0]
		const uintyCQokCE = BigInt("1978")
		const addressEXE1CnI = accounts[2]
		const addressKKrvJID = accounts[0]
		const addressdRq8UDG = accounts[2]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressroZKXK, {from: accounts[1]});
		const uint256JbdHdjB = await LUPJuWBsAW.balanceOf.call(addressTBWVXex, {from: accounts[2]});
		const stringNVlFcjo = await LUPJuWBsAW.name.call({from: accounts[0]});
		const boolmq52O5h = await LUPJuWBsAW.transfer.call(addressEXE1CnI, uintyCQokCE, {from: accounts[2]});
//		const addressrD8GBrg = await LUPJuWBsAW.notFrozen.call(addressKKrvJID, {from: accounts[1]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressdRq8UDG, {from: accounts[4]});
//		const stringayDrxVo = await LUPJuWBsAW.name.call({from: accounts[2]});
//		const stringJeMX7w2 = await LUPJuWBsAW.name.call({from: accounts[0]});

		assert.equal(boolmq52O5h, true)
		assert.equal(stringNVlFcjo, "LINKUP Token")
		assert.equal(uint256JbdHdjB, BigInt("0"))
		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.notFrozen.call(addressKKrvJID, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPYG2T3zK = await LUP.new({from: accounts[0]});
		const uintosdf7qK = BigInt("926")
		const uintIOG0TT = BigInt("1783")
		const addressCeEoMiK = accounts[0]
		const addressljAbRVR = accounts[2]
		const addresssbeNWuZ = accounts[1]
		const booli96qdUK = await LUPYG2T3zK.lock.call(addressCeEoMiK, uintIOG0TT, uintosdf7qK, {from: accounts[0]});
		const uint256CQEyrJA = await LUPYG2T3zK.balanceOf.call(addressljAbRVR, {from: accounts[5]});
		const uint256qGppkrU = await LUPYG2T3zK.balanceOf.call(addresssbeNWuZ, {from: accounts[3]});

		assert.equal(booli96qdUK, true)
		assert.equal(uint256CQEyrJA, BigInt("0"))
		assert.equal(uint256qGppkrU, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressR4siwCh = accounts[3]
		const uintxIqffDZ = BigInt("988")
		const addressgj2UF7R = accounts[2]
		const boolg2gxVpp = true
		const addressplcNLU = accounts[5]
		const uintUjos2Q2 = BigInt("1302")
		const addresspDeLRNS = accounts[3]
		const addressyOGZV6 = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressR4siwCh, {from: accounts[1]});
		const stringcMMDnT4 = await LUPJuWBsAW.symbol.call({from: accounts[3]});
		const boolmbPISr = await LUPJuWBsAW.transfer.call(addressgj2UF7R, uintxIqffDZ, {from: accounts[2]});
		const boolVXW21av = await LUPJuWBsAW.freezeAccount.call(addressplcNLU, boolg2gxVpp, {from: accounts[2]});
//		const boolOlxIoSS = await LUPJuWBsAW.unlock.call(addresspDeLRNS, uintUjos2Q2, {from: accounts[2]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressyOGZV6, {from: accounts[4]});

		assert.equal(boolVXW21av, true)
		assert.equal(boolmbPISr, true)
		assert.equal(stringcMMDnT4, "LUP")
		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.unlock.call(addresspDeLRNS, uintUjos2Q2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addressNNVgJux = accounts[6]
		const uintVEaybw3 = BigInt("1746")
		const uintCP4ofKW = BigInt("864")
		const addresslSoFjnM = accounts[0]
		const addressEnpzef = accounts[0]
		const boolljAcQdZ = false
		const addressgKg3Ze = accounts[0]
		const addressp6KbJtq = accounts[4]
		const addressXi8GTgG = accounts[0]
		const addressDMQJlcw = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addressNNVgJux, {from: accounts[1]});
//		const boolfuxUICo = await LUPJuWBsAW.lock.call(addresslSoFjnM, uintCP4ofKW, uintVEaybw3, {from: accounts[2]});
//		const uint256JbdHdjB = await LUPJuWBsAW.balanceOf.call(addressEnpzef, {from: accounts[2]});
//		const boolIFYE7SM = await LUPJuWBsAW.freezeAccount.call(addressgKg3Ze, boolljAcQdZ, {from: accounts[1]});
//		const addressUsqOnvC = await LUPJuWBsAW.notFrozen.call(addressp6KbJtq, {from: accounts[4]});
//		const addressrD8GBrg = await LUPJuWBsAW.notFrozen.call(addressXi8GTgG, {from: accounts[1]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressDMQJlcw, {from: accounts[4]});
//		const stringJeMX7w2 = await LUPJuWBsAW.name.call({from: accounts[0]});

		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.lock.call(addresslSoFjnM, uintCP4ofKW, uintVEaybw3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPLBWW4aM = await LUP.new({from: accounts[4]});
		const uintcc3XYl1 = BigInt("0")
		const addressFgWV6O = accounts[4]
		const uintxirdI9E = BigInt("1795")
		const uintosey5xy = BigInt("609")
		const addressFtbjZb7 = accounts[1]
		const boolu9vusuZ = await LUPLBWW4aM.transfer.call(addressFgWV6O, uintcc3XYl1, {from: accounts[5]});
		const boolNANNJY7 = await LUPLBWW4aM.transferWithLock.call(addressFtbjZb7, uintosey5xy, uintxirdI9E, {from: accounts[4]});

		assert.equal(boolNANNJY7, true)
		assert.equal(boolu9vusuZ, true)
	});

	it('test for LUP', async () => {
		const LUPJuWBsAW = await LUP.new({from: accounts[2]});
		const addresssU7ah6R = accounts[4]
		const uinteUr06YW = BigInt("241")
		const addressnCk5OSg = "0x0000000000000000000000000000000000000000"
		const uintImRFKJu = BigInt("251")
		const addresskACjAIE = accounts[3]
		const addressf8LV2Z2 = accounts[1]
		const uint256RIa1tjp = await LUPJuWBsAW.balanceOf.call(addresssU7ah6R, {from: accounts[1]});
//		const bool3BdKdU = await LUPJuWBsAW.transfer.call(addressnCk5OSg, uinteUr06YW, {from: accounts[1]});
//		const boolmq52O5h = await LUPJuWBsAW.transfer.call(addresskACjAIE, uintImRFKJu, {from: accounts[2]});
//		const uint256rAT0m5 = await LUPJuWBsAW.balanceOf.call(addressf8LV2Z2, {from: accounts[4]});

		assert.equal(uint256RIa1tjp, BigInt("0"))
		await expect(LUPJuWBsAW.transfer.call(addressnCk5OSg, uinteUr06YW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
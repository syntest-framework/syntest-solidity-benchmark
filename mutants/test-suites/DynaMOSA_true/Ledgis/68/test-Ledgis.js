const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const Ledgisn9L1vI = await Ledgis.new({from: accounts[4]});
		const uintCvgb4Ek = BigInt("136")
		const addressWaIwwE1 = accounts[3]
		const uintuyhxM4 = BigInt("32")
		const addressYqVs1C7 = accounts[0]
		const uintIufklhw = BigInt("942")
		const uintyESO1Ft = BigInt("935")
		const addressp7YDO7a = accounts[0]
		const addressFAR27m0 = accounts[0]
		const addresswWSUCyG = accounts[1]
//		const boolT8uBHnP = await Ledgisn9L1vI.mint.call(addressWaIwwE1, uintCvgb4Ek, {from: accounts[2]});
//		const addressU6u5hME = await Ledgisn9L1vI.burn.call(addressYqVs1C7, uintuyhxM4, {from: accounts[1]});
//		const boolOq0PrXu = await Ledgisn9L1vI.transferWithLockAfter.call(addressp7YDO7a, uintyESO1Ft, uintIufklhw, {from: accounts[0]});
//		const uint256AG7bI7U = await Ledgisn9L1vI.balanceOf.call(addressFAR27m0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qGdaZPR = await Ledgisn9L1vI.balanceOf.call(addresswWSUCyG, {from: accounts[5]});

		await expect(Ledgisn9L1vI.mint.call(addressWaIwwE1, uintCvgb4Ek, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfBHxWx = await Ledgis.new({from: accounts[4]});
		const uintrfbbWW = BigInt("1893")
		const addressPcovcgW = accounts[2]
		const addressluR904k = accounts[0]
		const boolIQ03GQi = await LedgisfBHxWx.increaseAllowance.call(addressPcovcgW, uintrfbbWW, {from: accounts[2]});
		const uint256DAIoHNA = await LedgisfBHxWx.lockCount.call(addressluR904k, {from: accounts[1]});

		assert.equal(boolIQ03GQi, true)
		assert.equal(uint256DAIoHNA, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisXfLc2B = await Ledgis.new({from: accounts[2]});
		const uintZ8HXd3R = BigInt("503")
		const addresscNETAks = accounts[4]
		const addresswwihCHO = accounts[2]
		const addressy9DluZQ = "0x0000000000000000000000000000000000000001"
		const uintub4mwSN = BigInt("1497")
		const uintXR9cKCG = BigInt("292")
		const addressmT6oV3K = accounts[0]
		const uintGAYTlLv = BigInt("167")
		const addresswg3WJld = accounts[5]
		const boolft5lsDL = await LedgisXfLc2B.approve.call(addresscNETAks, uintZ8HXd3R, {from: accounts[0]});
		const uint256JJg8kw = await LedgisXfLc2B.allowance.call(addressy9DluZQ, addresswwihCHO, {from: accounts[3]});
//		const addressNPI1mmt = await LedgisXfLc2B.lockAfter.call(addressmT6oV3K, uintXR9cKCG, uintub4mwSN, {from: accounts[0]});
//		const boolmR59k63 = await LedgisXfLc2B.decreaseAllowance.call(addresswg3WJld, uintGAYTlLv, {from: accounts[5]});
//		const uint256h9n0e1j = await LedgisXfLc2B.currentTime.call({from: accounts[4]});

		assert.equal(boolft5lsDL, true)
		assert.equal(uint256JJg8kw, BigInt("0"))
		await expect(LedgisXfLc2B.lockAfter.call(addressmT6oV3K, uintXR9cKCG, uintub4mwSN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressTWNwk90 = accounts[3]
		const addressEutBeDz = accounts[1]
		const uintnu5tqQM = BigInt("700")
		const addressAdSlm4t = "0x0000000000000000000000000000000000000001"
		const uintFZ3cHMg = BigInt("1321")
		const addressyMQuHoK = accounts[3]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressTWNwk90, {from: accounts[4]});
		const boolXs46UVQ = await LedgisTW92TIo.isFrozen.call(addressEutBeDz, {from: accounts[4]});
//		const addressKNqr3rR = await LedgisTW92TIo.unlock.call(addressAdSlm4t, uintnu5tqQM, {from: accounts[0]});
//		const boolbo7daA9 = await LedgisTW92TIo.decreaseAllowance.call(addressyMQuHoK, uintFZ3cHMg, {from: accounts[4]});

		assert.equal(boolXs46UVQ, false)
		assert.equal(uint256dUWh11, BigInt("0"))
		await expect(LedgisTW92TIo.unlock.call(addressAdSlm4t, uintnu5tqQM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQDyWdM = await Ledgis.new({from: accounts[1]});
		const addressL2l1E1I = accounts[2]
		const uintlxpcKTv = BigInt("824")
		const addressaGzX4UG = accounts[5]
		const addressNowGkH5 = accounts[5]
		const uintYSCrwbH = BigInt("1499")
		const uintYM7Qgf6 = BigInt("319")
		const addresscAojz1g = accounts[5]
		const boolhLpQTQQ = await LedgisQDyWdM.isFrozen.call(addressL2l1E1I, {from: accounts[0]});
//		await LedgisQDyWdM.lockState.call(addressaGzX4UG, uintlxpcKTv, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256whpMENT = await LedgisQDyWdM.balanceOf.call(addressNowGkH5, {from: accounts[0]});
//		const boolTV4ASO = await LedgisQDyWdM.transferWithLock.call(addresscAojz1g, uintYM7Qgf6, uintYSCrwbH, {from: accounts[4]});

		assert.equal(boolhLpQTQQ, false)
		await expect(LedgisQDyWdM.lockState.call(addressaGzX4UG, uintlxpcKTv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXfLc2B = await Ledgis.new({from: accounts[2]});
		const uintbiuOw76 = BigInt("503")
		const addresscnxEbjK = accounts[4]
		const addressqncYpAd = accounts[2]
		const addresshnYMb8o = "0x0000000000000000000000000000000000000001"
		const uintJ5gBzNC = BigInt("243")
		const uintNGH0sNa = BigInt("292")
		const addressHZeDVZW = accounts[0]
		const uintzFf5TeM = BigInt("167")
		const addressxEx04hy = accounts[5]
		const boolft5lsDL = await LedgisXfLc2B.approve.call(addresscnxEbjK, uintbiuOw76, {from: accounts[0]});
		const uint256Iad4k60 = await LedgisXfLc2B.totalSupply.call({from: accounts[3]});
		const uint256JJg8kw = await LedgisXfLc2B.allowance.call(addresshnYMb8o, addressqncYpAd, {from: accounts[3]});
//		const addressNPI1mmt = await LedgisXfLc2B.lockAfter.call(addressHZeDVZW, uintNGH0sNa, uintJ5gBzNC, {from: accounts[0]});
//		const boolmR59k63 = await LedgisXfLc2B.decreaseAllowance.call(addressxEx04hy, uintzFf5TeM, {from: accounts[5]});
//		const uint256h9n0e1j = await LedgisXfLc2B.currentTime.call({from: accounts[4]});

		assert.equal(boolft5lsDL, true)
		assert.equal(uint256Iad4k60, BigInt("10000000000000"))
		assert.equal(uint256JJg8kw, BigInt("0"))
		await expect(LedgisXfLc2B.lockAfter.call(addressHZeDVZW, uintNGH0sNa, uintJ5gBzNC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressiPzVO3g = accounts[3]
		const addresss5vQAP = accounts[2]
		const uinttog75uK = BigInt("1321")
		const addressthiBily = accounts[3]
		const uintyqjYNl = BigInt("1060")
		const addressu3sp0nU = accounts[1]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressiPzVO3g, {from: accounts[4]});
		const uint256uWkB6Es = await LedgisTW92TIo.balanceOf.call(addresss5vQAP, {from: accounts[1]});
//		const boolbo7daA9 = await LedgisTW92TIo.decreaseAllowance.call(addressthiBily, uinttog75uK, {from: accounts[4]});
//		const boolXOdoMEx = await LedgisTW92TIo.increaseAllowance.call(addressu3sp0nU, uintyqjYNl, {from: accounts[0]});

		assert.equal(uint256dUWh11, BigInt("0"))
		assert.equal(uint256uWkB6Es, BigInt("0"))
		await expect(LedgisTW92TIo.decreaseAllowance.call(addressthiBily, uinttog75uK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressWMHxWDV = accounts[4]
		const uintGhhpoTb = BigInt("700")
		const addressAJ3SDcl = "0x0000000000000000000000000000000000000001"
		const uint4oytR5 = BigInt("1321")
		const addressS6hcvt = accounts[3]
		const uint256bBgyYxA = await LedgisTW92TIo.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressWMHxWDV, {from: accounts[4]});
//		const addressKNqr3rR = await LedgisTW92TIo.unlock.call(addressAJ3SDcl, uintGhhpoTb, {from: accounts[0]});
//		const boolbo7daA9 = await LedgisTW92TIo.decreaseAllowance.call(addressS6hcvt, uint4oytR5, {from: accounts[4]});

		assert.equal(uint256bBgyYxA, BigInt("1630233512"))
		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.unlock.call(addressAJ3SDcl, uintGhhpoTb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressCUIaHnU = accounts[4]
		const uintrqdTdLw = BigInt("332")
		const addressq1GRWZD = accounts[3]
		const address93x4WZ = accounts[2]
		const uintzc3oPA = BigInt("700")
		const addressICuX6Lr = "0x0000000000000000000000000000000000000001"
		const uintWuLhVF = BigInt("1321")
		const addressvA0qxQ3 = accounts[3]
		const uintrg7u9Lm = BigInt("1994")
		const addressBmF5tJw = accounts[3]
		const uintFuBk5Fk = BigInt("128")
		const addressk8pFZjA = accounts[1]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressCUIaHnU, {from: accounts[4]});
//		const boolMhLxUzi = await LedgisTW92TIo.transferFrom.call(address93x4WZ, addressq1GRWZD, uintrqdTdLw, {from: accounts[1]});
//		const addressKNqr3rR = await LedgisTW92TIo.unlock.call(addressICuX6Lr, uintzc3oPA, {from: accounts[0]});
//		const boolbo7daA9 = await LedgisTW92TIo.decreaseAllowance.call(addressvA0qxQ3, uintWuLhVF, {from: accounts[4]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addressBmF5tJw, uintrg7u9Lm, {from: accounts[1]});
//		const boolGrhhepA = await LedgisTW92TIo.transfer.call(addressk8pFZjA, uintFuBk5Fk, {from: accounts[1]});

		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.transferFrom.call(address93x4WZ, addressq1GRWZD, uintrqdTdLw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressoMaoUR = accounts[3]
		const uintZ7ilBKq = BigInt("723")
		const addressyOF1tRZ = "0x0000000000000000000000000000000000000001"
		const uintQWO9Mic = BigInt("1321")
		const addressROwI2V2 = accounts[3]
//		await LedgisTW92TIo.onlyOwner.call({from: accounts[4]});
//		await LedgisTW92TIo.whenPaused.call({from: accounts[1]});
//		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressoMaoUR, {from: accounts[4]});
//		const addressKNqr3rR = await LedgisTW92TIo.unlock.call(addressyOF1tRZ, uintZ7ilBKq, {from: accounts[0]});
//		const boolbo7daA9 = await LedgisTW92TIo.decreaseAllowance.call(addressROwI2V2, uintQWO9Mic, {from: accounts[4]});

		await expect(LedgisTW92TIo.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZMsUgYB = await Ledgis.new({from: accounts[2]});
		const uintEk1WKHT = BigInt("1072")
		const uintODkBuaB = BigInt("645")
		const addresseyzBXnB = accounts[3]
		const uintKkj6Azo = BigInt("1842")
		const addressbXpIWOE = accounts[1]
		const addresstImBva = accounts[0]
		const addressRbi0uUH = accounts[1]
		const uint256Y2KQlqD = await LedgisZMsUgYB.afterTime.call(uintEk1WKHT, {from: accounts[1]});
//		const addressZd5P8Hx = await LedgisZMsUgYB.burn.call(addresseyzBXnB, uintODkBuaB, {from: accounts[4]});
//		const addresscdm1I4T = await LedgisZMsUgYB.burn.call(addressbXpIWOE, uintKkj6Azo, {from: accounts[1]});
//		const uint256M49YPgJ = await LedgisZMsUgYB.totalSupply.call({from: accounts[5]});
//		const uint256VrTn7Nx = await LedgisZMsUgYB.allowance.call(addressRbi0uUH, addresstImBva, {from: accounts[0]});

		assert.equal(uint256Y2KQlqD, BigInt("1630234573"))
		await expect(LedgisZMsUgYB.burn.call(addresseyzBXnB, uintODkBuaB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfBHxWx = await Ledgis.new({from: accounts[4]});
		const uintYlAPB58 = BigInt("1167")
		const uintfC1iIoL = BigInt("2001")
		const addressreep6OQ = accounts[4]
		const addressIgBiVm = "0x0000000000000000000000000000000000000001"
		const addressimJ33iS = accounts[3]
		const uintXHI4mD8 = BigInt("1893")
		const addressQaa5Yer = accounts[2]
		const boolvnmIbf4 = await LedgisfBHxWx.transferWithLockAfter.call(addressreep6OQ, uintfC1iIoL, uintYlAPB58, {from: accounts[4]});
		const uint256jmixpJ = await LedgisfBHxWx.allowance.call(addressimJ33iS, addressIgBiVm, {from: accounts[1]});
		const boolIQ03GQi = await LedgisfBHxWx.increaseAllowance.call(addressQaa5Yer, uintXHI4mD8, {from: accounts[2]});

		assert.equal(boolIQ03GQi, true)
		assert.equal(boolvnmIbf4, true)
		assert.equal(uint256jmixpJ, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addresscH4Cwiu = accounts[4]
		const addresssVeMteL = accounts[4]
		const uintfbswLJl = BigInt("700")
		const addressJqPYlaV = "0x0000000000000000000000000000000000000001"
		const uintXbaIFoK = BigInt("1994")
		const addressBN1jsVY = accounts[3]
		const uintzYGFkPB = BigInt("128")
		const addresszPQhxH = accounts[1]
		const uint256LDtDSN = await LedgisTW92TIo.balanceOf.call(addresscH4Cwiu, {from: accounts[0]});
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addresssVeMteL, {from: accounts[4]});
//		await LedgisTW92TIo.pause.call({from: accounts[4]});
//		const addressKNqr3rR = await LedgisTW92TIo.unlock.call(addressJqPYlaV, uintfbswLJl, {from: accounts[0]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addressBN1jsVY, uintXbaIFoK, {from: accounts[1]});
//		await LedgisTW92TIo.whenNotPaused.call({from: accounts[4]});
//		const boolGrhhepA = await LedgisTW92TIo.transfer.call(addresszPQhxH, uintzYGFkPB, {from: accounts[1]});

		assert.equal(uint256LDtDSN, BigInt("10000000000000"))
		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressf01sRi6 = accounts[4]
		const uintbe1kOrD = BigInt("47")
		const addressWuI3xMG = accounts[0]
		const uintDnAiQtV = BigInt("992")
		const addresshgmGtcy = accounts[4]
		const uintSud7NhO = BigInt("332")
		const addressRFiKYeZ = accounts[3]
		const addressBQQCedF = accounts[2]
		const uintOOV8cPH = BigInt("2003")
		const addressQlVMzLm = accounts[4]
		const uinticLa3fJ = BigInt("128")
		const addressuzOM8tE = accounts[1]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressf01sRi6, {from: accounts[4]});
//		const addressHXLSoeg = await LedgisTW92TIo.unlock.call(addressWuI3xMG, uintbe1kOrD, {from: accounts[4]});
//		const boolbjK2b8k = await LedgisTW92TIo.increaseAllowance.call(addresshgmGtcy, uintDnAiQtV, {from: accounts[0]});
//		const boolMhLxUzi = await LedgisTW92TIo.transferFrom.call(addressBQQCedF, addressRFiKYeZ, uintSud7NhO, {from: accounts[1]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addressQlVMzLm, uintOOV8cPH, {from: accounts[1]});
//		const boolGrhhepA = await LedgisTW92TIo.transfer.call(addressuzOM8tE, uinticLa3fJ, {from: accounts[1]});

		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.unlock.call(addressWuI3xMG, uintbe1kOrD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const uints5TbFqP = BigInt("1504")
		const addressjZEYqv2 = "0x0000000000000000000000000000000000000001"
		const addressSIr6iRY = accounts[4]
		const uintaTgcpcf = BigInt("332")
		const addresscwA2KJN = accounts[3]
		const addresshsO7kS = accounts[2]
		const uint5PJSmD = BigInt("227")
		const addressQchmDE5 = accounts[3]
		const addresss7RDJ6i = accounts[2]
//		const boolJ88WKpl = await LedgisTW92TIo.transfer.call(addressjZEYqv2, uints5TbFqP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressSIr6iRY, {from: accounts[4]});
//		const boolMhLxUzi = await LedgisTW92TIo.transferFrom.call(addresshsO7kS, addresscwA2KJN, uintaTgcpcf, {from: accounts[1]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addressQchmDE5, uint5PJSmD, {from: accounts[1]});
//		const addressN3EAyN = await LedgisTW92TIo.transferOwnership.call(addresss7RDJ6i, {from: accounts[0]});

		await expect(LedgisTW92TIo.transfer.call(addressjZEYqv2, uints5TbFqP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressOaNSV5 = accounts[5]
		const uintLJZD2IW = BigInt("496")
		const uintQRbSVg = BigInt("1770")
		const addresssloyXy = accounts[5]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressOaNSV5, {from: accounts[4]});
//		const addresstHRKRQW = await LedgisTW92TIo.lockAfter.call(addresssloyXy, uintQRbSVg, uintLJZD2IW, {from: accounts[4]});

		assert.equal(uint256dUWh11, BigInt("0"))
		await expect(LedgisTW92TIo.lockAfter.call(addresssloyXy, uintQRbSVg, uintLJZD2IW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const uintUWbOSM = BigInt("1071")
		const addressXjjOkPy = accounts[0]
		const addresspjfbfjO = accounts[4]
		const uintPMjqtcA = BigInt("27")
		const addresswB9tUy = accounts[0]
		const uinterbpPdC = BigInt("992")
		const addresshFjNyj = accounts[4]
		const uintWzQZhm = BigInt("332")
		const addressoB6waP = accounts[3]
		const addressgMIrdkN = accounts[2]
		const uintuMt30PB = BigInt("2003")
		const addressYfsJw4v = accounts[4]
		const uint0vjPmm = BigInt("94")
		const addressxdS9M7 = accounts[1]
		const addressacMWv9F = accounts[2]
		const uintB9tbti9 = BigInt("1147")
		const addressbamQKP = "0x0000000000000000000000000000000000000001"
		const booleEK4tjY = await LedgisTW92TIo.mint.call(addressXjjOkPy, uintUWbOSM, {from: accounts[4]});
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addresspjfbfjO, {from: accounts[4]});
//		const addressHXLSoeg = await LedgisTW92TIo.unlock.call(addresswB9tUy, uintPMjqtcA, {from: accounts[4]});
//		const boolbjK2b8k = await LedgisTW92TIo.increaseAllowance.call(addresshFjNyj, uinterbpPdC, {from: accounts[0]});
//		const boolMhLxUzi = await LedgisTW92TIo.transferFrom.call(addressgMIrdkN, addressoB6waP, uintWzQZhm, {from: accounts[1]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addressYfsJw4v, uintuMt30PB, {from: accounts[1]});
//		const boolGrhhepA = await LedgisTW92TIo.transfer.call(addressxdS9M7, uint0vjPmm, {from: accounts[1]});
//		const addresss2DeMvv = await LedgisTW92TIo.freeze.call(addressacMWv9F, {from: accounts[4]});
//		const uint256uJ0n2NV = await LedgisTW92TIo.afterTime.call(uintB9tbti9, {from: accounts[0]});
//		const addressiQLQ4B9 = await LedgisTW92TIo.transferOwnership.call(addressbamQKP, {from: accounts[0]});

		assert.equal(booleEK4tjY, true)
		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.unlock.call(addresswB9tUy, uintPMjqtcA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressGVUYFyf = accounts[5]
		const uintt37WYo = BigInt("1395")
		const addressuAGvQEj = accounts[4]
		const uintQe5RZXu = BigInt("1094")
		const addressikEehc = accounts[2]
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressGVUYFyf, {from: accounts[4]});
		const addresssyXuAzV = await LedgisTW92TIo.burn.call(addressuAGvQEj, uintt37WYo, {from: accounts[4]});
//		const boolVVVcFY = await LedgisTW92TIo.mint.call(addressikEehc, uintQe5RZXu, {from: accounts[2]});

		assert.equal(uint256dUWh11, BigInt("0"))
		await expect(LedgisTW92TIo.mint.call(addressikEehc, uintQe5RZXu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressOCXj5Bd = accounts[0]
		const uints0WlK2j = BigInt("1697")
		const addressX0TYVLW = "0x0000000000000000000000000000000000000001"
		const addressQxSR9Eo = accounts[5]
		const uintAfPugHE = BigInt("1889")
		const uintl3jQEK = BigInt("1238")
		const addresshGj0t6G = accounts[1]
		const uint256ipcdoo2 = await LedgisTW92TIo.lockCount.call(addressOCXj5Bd, {from: accounts[3]});
		const boolGkzV3tL = await LedgisTW92TIo.transfer.call(addressX0TYVLW, uints0WlK2j, {from: accounts[4]});
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressQxSR9Eo, {from: accounts[4]});
		const boolJRfqlBt = await LedgisTW92TIo.transferWithLock.call(addresshGj0t6G, uintl3jQEK, uintAfPugHE, {from: accounts[4]});

		assert.equal(boolGkzV3tL, true)
		assert.equal(boolJRfqlBt, true)
		assert.equal(uint256dUWh11, BigInt("0"))
		assert.equal(uint256ipcdoo2, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgishyhmlRW = await Ledgis.new({from: accounts[2]});
		const addresshqHAvrn = accounts[2]
		const addressQP1AA5 = await LedgishyhmlRW.transferOwnership.call(addresshqHAvrn, {from: accounts[2]});
//		await LedgishyhmlRW.pause.call({from: accounts[3]});
//		await LedgishyhmlRW.whenPaused.call({from: accounts[3]});

		await expect(LedgishyhmlRW.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressPhi30TJ = accounts[3]
		const addressUzPUS1g = accounts[4]
		const uintEh1BqfQ = BigInt("47")
		const addressBS6vyqu = accounts[0]
		const uintVCvPWHj = BigInt("992")
		const addressW3V2kQ = accounts[5]
		const uintcaVsvtF = BigInt("2003")
		const addresszrVCBKx = accounts[4]
		const uintxlQAAZ0 = BigInt("128")
		const addressNxK4MlV = accounts[1]
		const addressGxeK1S = await LedgisTW92TIo.freeze.call(addressPhi30TJ, {from: accounts[4]});
		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressUzPUS1g, {from: accounts[4]});
//		const addressHXLSoeg = await LedgisTW92TIo.unlock.call(addressBS6vyqu, uintEh1BqfQ, {from: accounts[4]});
//		const boolbjK2b8k = await LedgisTW92TIo.increaseAllowance.call(addressW3V2kQ, uintVCvPWHj, {from: accounts[0]});
//		const addressK2m0Bt7 = await LedgisTW92TIo.burn.call(addresszrVCBKx, uintcaVsvtF, {from: accounts[1]});
//		const boolGrhhepA = await LedgisTW92TIo.transfer.call(addressNxK4MlV, uintxlQAAZ0, {from: accounts[1]});

		assert.equal(uint256dUWh11, BigInt("10000000000000"))
		await expect(LedgisTW92TIo.unlock.call(addressBS6vyqu, uintEh1BqfQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisS4NiiwP = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsrZNBF6 = BigInt("1480")
		const addressiDr3Xud = accounts[1]
		const addressbSkNETR = accounts[3]
		const uintUsmJWIL = BigInt("429")
		const addressgQVioBu = accounts[2]
		const addressaYFzhte = accounts[2]
		const address44UfOx = accounts[2]
		const addressKd7HMb9 = await LedgisS4NiiwP.burn.call(addressiDr3Xud, uintsrZNBF6, {from: accounts[3]});
		const uint256KuoqTE8 = await LedgisS4NiiwP.balanceOf.call(addressbSkNETR, {from: accounts[1]});
		await LedgisS4NiiwP.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolY8O6X3c = await LedgisS4NiiwP.decreaseAllowance.call(addressgQVioBu, uintUsmJWIL, {from: accounts[0]});
		const uint256NjZJ2fr = await LedgisS4NiiwP.balanceOf.call(addressaYFzhte, {from: accounts[0]});
		const addressHGbzD0U = await LedgisS4NiiwP.freeze.call(address44UfOx, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisJE6RBQ5 = await Ledgis.new({from: accounts[4]});
		const addressWR2swYv = accounts[2]
		const uintYdgEPp = BigInt("727")
		const addressPmJxwHB = accounts[4]
		const addressDTsHJ6 = await LedgisJE6RBQ5.unfreeze.call(addressWR2swYv, {from: accounts[4]});
//		const addressoLTO1PH = await LedgisJE6RBQ5.unlock.call(addressPmJxwHB, uintYdgEPp, {from: accounts[4]});
//		await LedgisJE6RBQ5.onlyOwner.call({from: accounts[0]});

		await expect(LedgisJE6RBQ5.unlock.call(addressPmJxwHB, uintYdgEPp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const addressJqlpySR = accounts[5]
//		await LedgisTW92TIo.unpause.call({from: accounts[4]});
//		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressJqlpySR, {from: accounts[4]});

		await expect(LedgisTW92TIo.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const uintC8IzZfh = BigInt("1943")
		const uintATw305m = BigInt("1022")
		const addressRuyedC1 = accounts[2]
		const addressN2hJd5 = accounts[4]
//		await LedgisTW92TIo.renounceOwnership.call({from: accounts[4]});
//		const boolnQPOeeM = await LedgisTW92TIo.transferWithLockAfter.call(addressRuyedC1, uintATw305m, uintC8IzZfh, {from: accounts[1]});
//		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressN2hJd5, {from: accounts[4]});

		await expect(LedgisTW92TIo.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisTW92TIo = await Ledgis.new({from: accounts[4]});
		const uintySZELzZ = BigInt("488")
		const uintQLwgrSe = BigInt("518")
		const addresssFM3yB0 = accounts[2]
		const addressfbmpZ1M = accounts[4]
		const uinttxsaMG4 = BigInt("1218")
		const addressZemOgG = accounts[3]
//		const addressNC9TvFR = await LedgisTW92TIo.lock.call(addresssFM3yB0, uintQLwgrSe, uintySZELzZ, {from: accounts[4]});
//		const uint256dUWh11 = await LedgisTW92TIo.balanceOf.call(addressfbmpZ1M, {from: accounts[4]});
//		const boolhdczbmI = await LedgisTW92TIo.approve.call(addressZemOgG, uinttxsaMG4, {from: accounts[4]});

		await expect(LedgisTW92TIo.lock.call(addresssFM3yB0, uintQLwgrSe, uintySZELzZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
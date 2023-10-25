const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPiUHHoKu = await LUP.new({from: accounts[0]});
		const addressGHisBoj = accounts[2]
		const boolDnU1HkG = true
		const addressy9tqZIk = accounts[5]
		const uinttTIrn76 = BigInt("1465")
		const uintBtzKBHj = BigInt("933")
		const addressuSniQNm = accounts[0]
		const addresssnnIsHY = accounts[0]
		const uintsD4CiXI = BigInt("175")
		const uintJyrO6bo = BigInt("1242")
		const addressOTaSb6e = accounts[2]
		const uint8UNqPsAh = await LUPiUHHoKu.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addresseDJ6RSN = await LUPiUHHoKu.notFrozen.call(addressGHisBoj, {from: accounts[1]});
		const boolO7T1gbU = await LUPiUHHoKu.freezeAccount.call(addressy9tqZIk, boolDnU1HkG, {from: accounts[0]});
		const boolFjQfOGk = await LUPiUHHoKu.lock.call(addressuSniQNm, uintBtzKBHj, uinttTIrn76, {from: accounts[3]});
		const uint256RckN3C = await LUPiUHHoKu.balanceOf.call(addresssnnIsHY, {from: "0x0000000000000000000000000000000000000001"});
		const boolzUw4eFJ = await LUPiUHHoKu.lock.call(addressOTaSb6e, uintJyrO6bo, uintsD4CiXI, {from: accounts[1]});

		assert.equal(uint8UNqPsAh, BigInt("18"))
		await expect(LUPiUHHoKu.notFrozen.call(addressGHisBoj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringZOYEKuX = "pHYhYu5RhI1QHBxcYFv7HeXpoIWCuoA2gYrGTGwY"
		const stringr616m3q = "bGB6HkUgvGsuqQ67iCK61zgpJob6T0htk3lJ8bdnoM"
		const uintqQeBHNp = BigInt("3")
		const LUPLR0oejj = await LUP.new(stringZOYEKuX, stringr616m3q, uintqQeBHNp, {from: accounts[0]});
		const uintfEpSRsw = BigInt("1734")
		const addressq5qQkRW = accounts[4]
		const addressKCed5Tm = accounts[4]
		const uintkTardH = BigInt("1896")
		const addresspBzaqpQ = accounts[2]
		const addressUGQjnUh = accounts[1]
		const boolnX0hb9 = await LUPLR0oejj.unlock.call(addressq5qQkRW, uintfEpSRsw, {from: accounts[0]});
		const addresssYeutgq = await LUPLR0oejj.notFrozen.call(addressKCed5Tm, {from: accounts[1]});
		const boolWPwSnin = await LUPLR0oejj.unlock.call(addresspBzaqpQ, uintkTardH, {from: "0x0000000000000000000000000000000000000001"});
		const addressfPrxElR = await LUPLR0oejj.notFrozen.call(addressUGQjnUh, {from: accounts[1]});
		const uint8h5dAg5I = await LUPLR0oejj.decimals.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPXoyMods = await LUP.new({from: accounts[1]});
		const addressPxCyZTX = accounts[4]
		const addressVRRPhP7 = accounts[3]
		const addressgdpDstE = accounts[5]
		const addressAC4tbrn = "0x0000000000000000000000000000000000000001"
		const uintW28x53K = BigInt("1379")
		const addressjPLccmk = accounts[2]
		const uint256Pxh8clK = await LUPXoyMods.balanceOf.call(addressPxCyZTX, {from: accounts[2]});
		const stringdxMJoOI = await LUPXoyMods.name.call({from: accounts[4]});
		const addressijN3fuj = await LUPXoyMods.upgradeTo.call(addressVRRPhP7, {from: accounts[4]});
		const addresszoeTZs = await LUPXoyMods.upgradeTo.call(addressgdpDstE, {from: accounts[4]});
		const addressxlww9hm = await LUPXoyMods.notFrozen.call(addressAC4tbrn, {from: accounts[3]});
		const boolVS38j6s = await LUPXoyMods.unlock.call(addressjPLccmk, uintW28x53K, {from: accounts[0]});

		assert.equal(stringdxMJoOI, "LINKUP Token")
		assert.equal(uint256Pxh8clK, BigInt("0"))
		await expect(LUPXoyMods.upgradeTo.call(addressVRRPhP7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPppuluHl = await LUP.new({from: accounts[2]});
		const uinteQ1MEgL = BigInt("1374")
		const addressEqIOYDo = accounts[2]
		const uintTuH5qou = BigInt("618")
		const addressoHdbdN = accounts[1]
		const addressFNIdMsf = accounts[3]
		const uint8vTmy7KN = await LUPppuluHl.decimals.call({from: accounts[4]});
		const booloHpQH9i = await LUPppuluHl.transfer.call(addressEqIOYDo, uinteQ1MEgL, {from: accounts[2]});
		const boolZ36QDyu = await LUPppuluHl.unlock.call(addressoHdbdN, uintTuH5qou, {from: accounts[1]});
		const uint256gjEwiER = await LUPppuluHl.balanceOf.call(addressFNIdMsf, {from: accounts[2]});

		assert.equal(booloHpQH9i, true)
		assert.equal(uint8vTmy7KN, BigInt("18"))
		await expect(LUPppuluHl.unlock.call(addressoHdbdN, uintTuH5qou, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPMzrk2vC = await LUP.new({from: accounts[3]});
		const uintX8DBtAI = BigInt("1084")
		const address2fbQc0 = accounts[0]
		const uinteEaY6Ry = BigInt("1824")
		const addressWEKgme8 = accounts[3]
		const boolpuNxk9A = await LUPMzrk2vC.transfer.call(address2fbQc0, uintX8DBtAI, {from: accounts[0]});
		const booliU91Cq8 = await LUPMzrk2vC.unlock.call(addressWEKgme8, uinteEaY6Ry, {from: accounts[5]});

		await expect(LUPMzrk2vC.transfer.call(address2fbQc0, uintX8DBtAI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIhTrH2 = await LUP.new({from: accounts[5]});
		const uint8Z5ytuIN = await LUPIhTrH2.decimals.call({from: accounts[2]});
		const stringvvrggmL = await LUPIhTrH2.symbol.call({from: accounts[2]});

		assert.equal(stringvvrggmL, "LUP")
		assert.equal(uint8Z5ytuIN, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPMzrk2vC = await LUP.new({from: accounts[3]});
		const addressAi80qto = accounts[5]
		const uintRm3sPA = BigInt("680")
		const uintvFLoNqS = BigInt("1093")
		const addressRGI8CCF = "0x0000000000000000000000000000000000000001"
		const stringDrRXICs = await LUPMzrk2vC.symbol.call({from: accounts[1]});
		const uint256Od96oF8 = await LUPMzrk2vC.balanceOf.call(addressAi80qto, {from: accounts[3]});
		const boolLYiC5tT = await LUPMzrk2vC.transferWithLock.call(addressRGI8CCF, uintvFLoNqS, uintRm3sPA, {from: accounts[3]});

		assert.equal(boolLYiC5tT, true)
		assert.equal(stringDrRXICs, "LUP")
		assert.equal(uint256Od96oF8, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPl1h3cvq = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const stringOpjw5GV = await LUPl1h3cvq.name.call({from: accounts[3]});
		const stringoIGwy44 = await LUPl1h3cvq.name.call({from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPMzrk2vC = await LUP.new({from: accounts[3]});
		const addressTUiHyuN = accounts[5]
		const uintXb9IgHg = BigInt("109")
		const addressOXm3HKH = accounts[0]
		const uint256Od96oF8 = await LUPMzrk2vC.balanceOf.call(addressTUiHyuN, {from: accounts[3]});
		const boolFTTMbps = await LUPMzrk2vC.unlock.call(addressOXm3HKH, uintXb9IgHg, {from: accounts[3]});

		assert.equal(uint256Od96oF8, BigInt("0"))
		await expect(LUPMzrk2vC.unlock.call(addressOXm3HKH, uintXb9IgHg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPMzrk2vC = await LUP.new({from: accounts[3]});
		const addressUNZlxz4 = accounts[5]
		const uints5GpU4j = BigInt("1037")
		const uintQ7rSer8 = BigInt("1788")
		const addressGougsSk = "0x0000000000000000000000000000000000000001"
		const uintw3jKCLB = BigInt("656")
		const uintQwMEaaU = BigInt("202")
		const addresstXE3T7s = accounts[5]
		const uintufIFWKk = BigInt("717")
		const uintpIKBkjr = BigInt("1100")
		const addressXvc3rlL = accounts[1]
		const uint256Od96oF8 = await LUPMzrk2vC.balanceOf.call(addressUNZlxz4, {from: accounts[3]});
		const boolbGRtDRo = await LUPMzrk2vC.lock.call(addressGougsSk, uintQ7rSer8, uints5GpU4j, {from: accounts[3]});
		const boolKjeP4CJ = await LUPMzrk2vC.lock.call(addresstXE3T7s, uintQwMEaaU, uintw3jKCLB, {from: accounts[0]});
		const boolrtMNaFw = await LUPMzrk2vC.transferWithLock.call(addressXvc3rlL, uintpIKBkjr, uintufIFWKk, {from: accounts[1]});

		assert.equal(uint256Od96oF8, BigInt("0"))
		await expect(LUPMzrk2vC.lock.call(addressGougsSk, uintQ7rSer8, uints5GpU4j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJ2o29yF = await LUP.new({from: accounts[4]});
		const addresswMEgOlJ = accounts[3]
		const boolGwA2TAw = true
		const addresskW81dt = accounts[4]
		const uintxSPxR1m = BigInt("1374")
		const uintfL7BaKY = BigInt("1494")
		const addressAZS2zDL = accounts[0]
		const uintYZe7wgS = BigInt("919")
		const uintSKBMzHt = BigInt("998")
		const address19AY3f = accounts[3]
		const uint256xg2k00Q = await LUPJ2o29yF.balanceOf.call(addresswMEgOlJ, {from: accounts[1]});
		const uint8PL2yPsg = await LUPJ2o29yF.decimals.call({from: accounts[2]});
		const boolNZEznJi = await LUPJ2o29yF.freezeAccount.call(addresskW81dt, boolGwA2TAw, {from: accounts[4]});
		const boolsnFaa8 = await LUPJ2o29yF.lock.call(addressAZS2zDL, uintfL7BaKY, uintxSPxR1m, {from: accounts[1]});
		const booljQsn0Wa = await LUPJ2o29yF.transferWithLock.call(address19AY3f, uintSKBMzHt, uintYZe7wgS, {from: accounts[2]});
		const stringLRqsMAO = await LUPJ2o29yF.symbol.call({from: accounts[5]});

		assert.equal(boolNZEznJi, true)
		assert.equal(uint256xg2k00Q, BigInt("0"))
		assert.equal(uint8PL2yPsg, BigInt("18"))
		await expect(LUPJ2o29yF.lock.call(addressAZS2zDL, uintfL7BaKY, uintxSPxR1m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPMzrk2vC = await LUP.new({from: accounts[3]});
		const addressY9uJFi = "0x0000000000000000000000000000000000000001"
		const boolcQSupk = false
		const addressYtFrMRb = accounts[2]
		const uintE6U1McH = BigInt("1084")
		const addressuwVDY0 = accounts[1]
		const addressbzybYi1 = await LUPMzrk2vC.upgradeTo.call(addressY9uJFi, {from: accounts[3]});
		const boolqwg9I3 = await LUPMzrk2vC.freezeAccount.call(addressYtFrMRb, boolcQSupk, {from: accounts[2]});
		const boolpuNxk9A = await LUPMzrk2vC.transfer.call(addressuwVDY0, uintE6U1McH, {from: accounts[0]});

		await expect(LUPMzrk2vC.freezeAccount.call(addressYtFrMRb, boolcQSupk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
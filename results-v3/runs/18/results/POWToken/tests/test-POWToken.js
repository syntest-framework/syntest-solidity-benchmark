const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenBzRfJhz = await POWToken.new({from: accounts[4]});
		const uintKlHTzJN = BigInt("79")
		const uintALM2tm = BigInt("1105")
		const uint256NeFw7G0 = await POWTokenBzRfJhz.setStartMiningTime.call(uintKlHTzJN, {from: accounts[1]});
		const uint256uQ5eXFI = await POWTokenBzRfJhz.setElectricCharge.call(uintALM2tm, {from: accounts[5]});
		const uint256E8NOMiU = await POWTokenBzRfJhz.remainingAmount.call({from: accounts[4]});

		await expect(POWTokenBzRfJhz.setStartMiningTime.call(uintKlHTzJN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenbni3kIR = await POWToken.new({from: accounts[3]});
		const uintbbVz20 = BigInt("633")
		const addressEntFTPY = accounts[2]
		const uintrhdGSG = BigInt("1711")
		const addressLXJWWaz = await POWTokenbni3kIR.mint.call(addressEntFTPY, uintbbVz20, {from: accounts[3]});
		const uint256yjHD88r = await POWTokenbni3kIR.setElectricCharge.call(uintrhdGSG, {from: accounts[1]});

		await expect(POWTokenbni3kIR.mint.call(addressEntFTPY, uintbbVz20, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uinth3l8gqY = BigInt("1586")
		const uintblhTtRZ = BigInt("516")
		const addressZxO9dJy = accounts[5]
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		await POWTokenhbAGcMD.whenPaused.call({from: accounts[3]});
		const uint256BGLfCOF = await POWTokenhbAGcMD.setStakingRewardRatio.call(uinth3l8gqY, {from: accounts[2]});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addressZxO9dJy, uintblhTtRZ, {from: accounts[4]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMXTfI3M = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGBBhvf = BigInt("623")
		const addressIZg3hvN = "0x0000000000000000000000000000000000000001"
		const addressXcOJdsD = accounts[2]
		const addressTi3qWhf = accounts[2]
		const addressWJRBlHj = "0x0000000000000000000000000000000000000001"
		const uintRgg3wZ = BigInt("743")
		const uintLW1cXk = BigInt("925")
		const addressNCyeULh = accounts[2]
		const boolsQUDfPV = await POWTokenMXTfI3M.transferFrom.call(addressXcOJdsD, addressIZg3hvN, uintGBBhvf, {from: accounts[0]});
		const address8WqmGz = await POWTokenMXTfI3M.setParamSetter.call(addressTi3qWhf, {from: accounts[3]});
		const addressc6q6Fo = await POWTokenMXTfI3M.transferOwnership.call(addressWJRBlHj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ndAqnCE = await POWTokenMXTfI3M.addHashRate.call(uintRgg3wZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressxJiBiMo = await POWTokenMXTfI3M.claimIncome.call(addressNCyeULh, uintLW1cXk, {from: accounts[3]});
	});

	it('test for POWToken', async () => {
		const POWTokenv573HKw = await POWToken.new({from: accounts[2]});
		const uinthiMDjup = BigInt("935")
		const uint256bsd9vpN = await POWTokenv573HKw.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		const uint256wfN4K2j = await POWTokenv573HKw.setWorkingHashRate.call(uinthiMDjup, {from: accounts[2]});
		await POWTokenv573HKw.unpause.call({from: accounts[0]});

		await expect(POWTokenv573HKw.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEhk6ZI3 = await POWToken.new({from: accounts[1]});
		const addressAgDT9RS = accounts[4]
		const addressYxaGiOu = await POWTokenEhk6ZI3.setParamSetter.call(addressAgDT9RS, {from: accounts[5]});
		await POWTokenEhk6ZI3.whenNotPaused.call({from: accounts[4]});
		const uint256KOrfBZ = await POWTokenEhk6ZI3.lpStakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenEhk6ZI3.setParamSetter.call(addressAgDT9RS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWcso1FH = await POWToken.new({from: accounts[3]});
		const uintKhYMxo0 = BigInt("1947")
		const uintqdyd265 = BigInt("1438")
		const addressZa0MmE = accounts[4]
		const uint25679v3I9 = await POWTokenWcso1FH.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
		const uint2560rXRZP = await POWTokenWcso1FH.setElectricCharge.call(uintKhYMxo0, {from: accounts[4]});
		const addressNrzTAUC = await POWTokenWcso1FH.mint.call(addressZa0MmE, uintqdyd265, {from: accounts[5]});
		await POWTokenWcso1FH.updateIncomeRate.call({from: accounts[4]});

		await expect(POWTokenWcso1FH.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintdyplGDX = BigInt("1586")
		const uintCs3fS8w = BigInt("516")
		const addressfDTkcIY = accounts[5]
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const uint256RjpL1ul = await POWTokenhbAGcMD.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
		await POWTokenhbAGcMD.whenPaused.call({from: accounts[3]});
		const uint256BGLfCOF = await POWTokenhbAGcMD.setStakingRewardRatio.call(uintdyplGDX, {from: accounts[2]});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addressfDTkcIY, uintCs3fS8w, {from: accounts[4]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmHCmZaU = await POWToken.new({from: accounts[2]});
		const uintS19WLQ = BigInt("1628")
		const addressI7tOIr6 = "0x0000000000000000000000000000000000000001"
		const addresspQNoIJH = accounts[1]
		const addressER6xuy8 = await POWTokenmHCmZaU.claimReward.call(addressI7tOIr6, uintS19WLQ, {from: accounts[2]});
		const addressgXxxUSU = await POWTokenmHCmZaU.setParamSetter.call(addresspQNoIJH, {from: accounts[2]});
		await POWTokenmHCmZaU.unpause.call({from: accounts[3]});

		await expect(POWTokenmHCmZaU.claimReward.call(addressI7tOIr6, uintS19WLQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengeCu6R2 = await POWToken.new({from: accounts[3]});
		const uintzzSL1zs = BigInt("161")
		const addressNbSvtZe = "0x0000000000000000000000000000000000000001"
		const uintZ6OYNJY = BigInt("1509")
		const addressQcCIVF = accounts[2]
		const boolYWkeJFe = await POWTokengeCu6R2.approve.call(addressNbSvtZe, uintzzSL1zs, {from: accounts[1]});
		const boolB02V5ZS = await POWTokengeCu6R2.approve.call(addressQcCIVF, uintZ6OYNJY, {from: accounts[0]});
		await POWTokengeCu6R2.unpause.call({from: accounts[4]});

		assert.equal(boolB02V5ZS, true)
		assert.equal(boolYWkeJFe, true)
		await expect(POWTokengeCu6R2.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const byteAvbDQtd = "0x0d0f1816080d03190607121708200f160c000809191f170a200608100b0e1517"
		const byteH2WPMsg = "0x100e1b10051e111f0106031c1412050d200f050305201e2007161d0410030d1c"
		const uintTajg5jq = BigInt("61")
		const uintpu4H2Wg = BigInt("402")
		const uintDphbBc = BigInt("83")
		const addresssHuwGzS = accounts[5]
		const addressTi8GdLV = accounts[1]
		const uintoWIPlub = BigInt("516")
		const addressw4PHfby = accounts[6]
		const addressLFaQ2RH = accounts[3]
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const addressO63glXN = await POWTokenhbAGcMD.permit.call(addressTi8GdLV, addresssHuwGzS, uintDphbBc, uintpu4H2Wg, uintTajg5jq, byteH2WPMsg, byteAvbDQtd, {from: accounts[2]});
		const uint256RjpL1ul = await POWTokenhbAGcMD.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addressw4PHfby, uintoWIPlub, {from: accounts[4]});
		const addressqh4X0x = await POWTokenhbAGcMD.setBtcParam.call(addressLFaQ2RH, {from: accounts[3]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.permit.call(addressTi8GdLV, addresssHuwGzS, uintDphbBc, uintpu4H2Wg, uintTajg5jq, byteH2WPMsg, byteAvbDQtd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintMArhlF = BigInt("516")
		const addresssSwCERc = accounts[5]
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addresssSwCERc, uintMArhlF, {from: accounts[4]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.transfer.call(addresssSwCERc, uintMArhlF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmHCmZaU = await POWToken.new({from: accounts[2]});
		const uintZxYQPxp = BigInt("1106")
		const uintbcYhXE = BigInt("243")
		const uintkeU1Ifp = BigInt("1043")
		const uintsOioOcc = BigInt("130")
		const uintHmGMav = BigInt("268")
		const addressKinHVRX = accounts[4]
		const addressr6mraZv = accounts[2]
		const addressmlFaQjr = accounts[4]
		const addresspTqmMzp = accounts[5]
		const addressyhggOC = accounts[5]
		const addressZ2v9pai = accounts[4]
		const addressp8TmDLn = accounts[1]
		const addressYAqTq2X = accounts[4]
		const stringrPMHkw1 = "IxRt7jVFYw7NVTCRxn3DlkkR4niAo6z9VjZ1XYwSrTKlJKfdw4EedE4ROtkrckCd5EtNgB8964TwV2PrqsgTTqEQOGR"
		const stringCkVEjml = "LxYcLfFRxXMZxgcdLusxuwbwV1wNsHepA4fkV"
		const addresshIbXvmD = accounts[2]
		const stringj5jaou2 = await POWTokenmHCmZaU.initialize.call(stringCkVEjml, stringrPMHkw1, addressYAqTq2X, addressp8TmDLn, addressZ2v9pai, addressyhggOC, addresspTqmMzp, addressmlFaQjr, addressr6mraZv, addressKinHVRX, uintHmGMav, uintsOioOcc, uintkeU1Ifp, uintbcYhXE, uintZxYQPxp, {from: accounts[3]});
		const addressYiCRu5r = await POWTokenmHCmZaU.setBtcParam.call(addresshIbXvmD, {from: accounts[2]});
		await POWTokenmHCmZaU.unpause.call({from: accounts[3]});

		await expect(POWTokenmHCmZaU.initialize.call(stringCkVEjml, stringrPMHkw1, addressYAqTq2X, addressp8TmDLn, addressZ2v9pai, addressyhggOC, addresspTqmMzp, addressmlFaQjr, addressr6mraZv, addressKinHVRX, uintHmGMav, uintsOioOcc, uintkeU1Ifp, uintbcYhXE, uintZxYQPxp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintnd6NI8O = BigInt("516")
		const addresslRANCkq = accounts[5]
		await POWTokenhbAGcMD.updateIncomeRate.call({from: accounts[3]});
		const uint256i4EjFg8 = await POWTokenhbAGcMD.lpStakingRewardRate.call({from: accounts[3]});
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addresslRANCkq, uintnd6NI8O, {from: accounts[4]});

		await expect(POWTokenhbAGcMD.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintK8vIYkt = BigInt("516")
		const addressG6z7nkf = accounts[5]
		const uint256i4EjFg8 = await POWTokenhbAGcMD.lpStakingRewardRate.call({from: accounts[3]});
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addressG6z7nkf, uintK8vIYkt, {from: accounts[4]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		assert.equal(uint256i4EjFg8, BigInt("0"))
		await expect(POWTokenhbAGcMD.transfer.call(addressG6z7nkf, uintK8vIYkt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintuBySowh = BigInt("1873")
		const addressZTXlGAH = accounts[3]
		const uintq4DMEiH = BigInt("485")
		const addressD8t4NJ = accounts[5]
		const uint2562XlgLb = await POWTokenhbAGcMD.remainingAmount.call({from: accounts[3]});
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const addressp2stTK = await POWTokenhbAGcMD.claimReward.call(addressZTXlGAH, uintuBySowh, {from: "0x0000000000000000000000000000000000000001"});
		const boole6Mgj1M = await POWTokenhbAGcMD.transfer.call(addressD8t4NJ, uintq4DMEiH, {from: accounts[4]});

		assert.equal(uint2562XlgLb, BigInt("0"))
		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.claimReward.call(addressZTXlGAH, uintuBySowh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintzm3laib = BigInt("1757")
		const addressfTAPjS7 = accounts[4]
		const uintFc1sMxO = BigInt("904")
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const addressRMJzcC0 = await POWTokenhbAGcMD.claimIncome.call(addressfTAPjS7, uintzm3laib, {from: accounts[0]});
		const uint256skYTg3r = await POWTokenhbAGcMD.addHashRate.call(uintFc1sMxO, {from: accounts[5]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.claimIncome.call(addressfTAPjS7, uintzm3laib, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhbAGcMD = await POWToken.new({from: accounts[1]});
		const uintMP0m3xl = BigInt("1451")
		const addressTQwPxVZ = accounts[5]
		const addressDUSOV2w = accounts[0]
		const uint256MU6PrY6 = await POWTokenhbAGcMD.stakingRewardRate.call({from: accounts[3]});
		const boolOgysWJ3 = await POWTokenhbAGcMD.transferFrom.call(addressDUSOV2w, addressTQwPxVZ, uintMP0m3xl, {from: accounts[2]});

		assert.equal(uint256MU6PrY6, BigInt("0"))
		await expect(POWTokenhbAGcMD.transferFrom.call(addressDUSOV2w, addressTQwPxVZ, uintMP0m3xl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
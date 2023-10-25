const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenarGbq6T = await POWToken.new({from: accounts[0]});
		const uintWrTrRHM = BigInt("274")
		const uintm7qNcJT = BigInt("109")
		const uintep14IaF = BigInt("1002")
		const uintpV1DGid = BigInt("661")
		const uintU7R9Vs = BigInt("700")
		const uintERS1l5l = BigInt("1970")
		const addressw6Umc5 = accounts[0]
		const addressspJUPTg = accounts[2]
		const addressgqAUGRW = accounts[1]
		const addressnhzPooL = accounts[0]
		const addressMABnkuh = accounts[0]
		const addressRgPOui5 = accounts[0]
		const addressQy8Z7u = accounts[3]
		const addressGzu8uXF = accounts[0]
		const stringEKJGaxX = "QijGwpDPZr1C8DuavrWsbNWYUYfixyCsOip5h"
		const stringAwjcw0W = "1OCraa9twEwsyHmaRx5OKTNinqPeGcg24DOzWMuoOxgQFn"
//		await POWTokenarGbq6T.whenPaused.call({from: accounts[2]});
//		const uint256Ah8kB3r = await POWTokenarGbq6T.addHashRate.call(uintWrTrRHM, {from: accounts[1]});
//		const uint256SX4I0eo = await POWTokenarGbq6T.getHistoryWorkingRate.call({from: accounts[0]});
//		const uint256XPdCs8M = await POWTokenarGbq6T.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringxrXSpi = await POWTokenarGbq6T.initialize.call(stringAwjcw0W, stringEKJGaxX, addressGzu8uXF, addressQy8Z7u, addressRgPOui5, addressMABnkuh, addressnhzPooL, addressgqAUGRW, addressspJUPTg, addressw6Umc5, uintERS1l5l, uintU7R9Vs, uintpV1DGid, uintep14IaF, uintm7qNcJT, {from: accounts[3]});

		await expect(POWTokenarGbq6T.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK05DhZs = await POWToken.new({from: accounts[5]});
		const uintibVDG9g = BigInt("1693")
		const addressbpM001W = accounts[1]
		const addressvktp3os = accounts[0]
		const uintrtQU4qh = BigInt("1628")
//		await POWTokenK05DhZs.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolqoS56Hb = await POWTokenK05DhZs.transferFrom.call(addressvktp3os, addressbpM001W, uintibVDG9g, {from: accounts[4]});
//		const uint256n301Cg = await POWTokenK05DhZs.addHashRate.call(uintrtQU4qh, {from: accounts[2]});

		await expect(POWTokenK05DhZs.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYXa9rg = await POWToken.new({from: accounts[1]});
		const byteCsHDbFh = "0x020d1d00041f1802000e0d1409090f01151509130e0315161f05030a1e09021f"
		const bytekQS2wd = "0x06021916051d19021a1a111c11170c1210080c07140f10041c1412171f011203"
		const uintEKEPYjr = BigInt("188")
		const uintpBIgMMj = BigInt("1102")
		const uintu8ZAgIU = BigInt("853")
		const addresshf50hel = accounts[2]
		const addressnWJp7YZ = accounts[4]
		const uint256FPmHIh6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZQHIWZS = await POWTokenYXa9rg.permit.call(addressnWJp7YZ, addresshf50hel, uintu8ZAgIU, uintpBIgMMj, uintEKEPYjr, bytekQS2wd, byteCsHDbFh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jE61W6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenYXa9rg.pause.call({from: accounts[1]});

		assert.equal(uint256FPmHIh6, BigInt("0"))
		await expect(POWTokenYXa9rg.permit.call(addressnWJp7YZ, addresshf50hel, uintu8ZAgIU, uintpBIgMMj, uintEKEPYjr, bytekQS2wd, byteCsHDbFh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxSEDnn = await POWToken.new({from: accounts[3]});
		const boolV6iHPrc = await POWTokenxSEDnn.paused.call({from: accounts[5]});
//		await POWTokenxSEDnn.pause.call({from: accounts[4]});

		assert.equal(boolV6iHPrc, false)
		await expect(POWTokenxSEDnn.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
//		const uint256yX7q54E = await POWTokenobzLJqA.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenobzLJqA.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenjmEkTe = await POWToken.new({from: accounts[0]});
		const addressbRTJsgP = accounts[4]
		const uintxNLvXlC = BigInt("403")
		const addresszCuV91g = accounts[3]
		const uintvTN8yhk = BigInt("65")
		const uintGixK5mJ = BigInt("570")
		const uintjWOJg7M = BigInt("1281")
		const uintBQxz0xh = BigInt("512")
		const uintXxUK5QA = BigInt("1164")
		const uintlxQ2vFr = BigInt("1831")
		const addresssYmsX0E = accounts[4]
		const addressKIHM1u7 = accounts[2]
		const addressIKBYrhe = accounts[1]
		const addressl63rS8J = accounts[0]
		const addresstxRgpW8 = accounts[2]
		const addressWUKtlX = accounts[4]
		const addressxnKgeL6 = accounts[2]
		const addressWfBVxy = "0x0000000000000000000000000000000000000001"
		const stringIO41TGk = "nzpsTv3u2r5yEHfbeiY8CSWPvK2WGWUQQtUzWurn49"
		const string633BdL = "n6IBkf57P4oNFYtjLH39fezR8PFAFpYBuhOwOPpfjkG"
//		const addressDvsnfZW = await POWTokenjmEkTe.setBtcParam.call(addressbRTJsgP, {from: accounts[4]});
//		const addresscNED776 = await POWTokenjmEkTe.mint.call(addresszCuV91g, uintxNLvXlC, {from: accounts[1]});
//		const uint256pNI3ZYu = await POWTokenjmEkTe.setWorkingHashRate.call(uintvTN8yhk, {from: accounts[0]});
//		const stringKvpUPoX = await POWTokenjmEkTe.initialize.call(string633BdL, stringIO41TGk, addressWfBVxy, addressxnKgeL6, addressWUKtlX, addresstxRgpW8, addressl63rS8J, addressIKBYrhe, addressKIHM1u7, addresssYmsX0E, uintlxQ2vFr, uintXxUK5QA, uintBQxz0xh, uintjWOJg7M, uintGixK5mJ, {from: accounts[0]});
//		const uint256I33uqrz = await POWTokenjmEkTe.stakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenjmEkTe.setBtcParam.call(addressbRTJsgP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBWgRIp1 = await POWToken.new({from: accounts[0]});
		const uintmIbTmxX = BigInt("414")
		const addresstoMZJG3 = accounts[0]
		const uintEZkGz68 = BigInt("989")
		const addressaMfd81A = accounts[1]
		const uintMclp9jp = BigInt("1726")
		const addressQsuJmWC = accounts[5]
//		const addressmBhyPnQ = await POWTokenBWgRIp1.claimReward.call(addresstoMZJG3, uintmIbTmxX, {from: accounts[2]});
//		const bool5Wp8uN = await POWTokenBWgRIp1.transfer.call(addressaMfd81A, uintEZkGz68, {from: accounts[2]});
//		await POWTokenBWgRIp1.pause.call({from: accounts[1]});
//		const addressjMkLB3D = await POWTokenBWgRIp1.inCaseTokensGetStuck.call(addressQsuJmWC, uintMclp9jp, {from: accounts[0]});
//		await POWTokenBWgRIp1.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenBWgRIp1.claimReward.call(addresstoMZJG3, uintmIbTmxX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
//		const uint256xT9pQQD = await POWTokenobzLJqA.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
//		const uint256yX7q54E = await POWTokenobzLJqA.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenobzLJqA.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYXa9rg = await POWToken.new({from: accounts[1]});
		const byteRotfH0X = "0x020d1d00041f1802000e0d1409090f01151509130e0315161f05030a1e09021f"
		const bytek1Vpk5Z = "0x06021916051d19021a1a111c11170c1210080c07140f10041c1412171f011203"
		const uintHtpGK39 = BigInt("188")
		const uintmkZMwXY = BigInt("1102")
		const uintuA36Dxq = BigInt("853")
		const addressrWbQwjQ = accounts[2]
		const addressgBuxhy6 = accounts[4]
		const uint256BZ8thIU = await POWTokenYXa9rg.remainingAmount.call({from: accounts[4]});
//		await POWTokenYXa9rg.updateIncomeRate.call({from: accounts[4]});
//		const uint256FPmHIh6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256fkOIaSp = await POWTokenYXa9rg.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		const addressZQHIWZS = await POWTokenYXa9rg.permit.call(addressgBuxhy6, addressrWbQwjQ, uintuA36Dxq, uintmkZMwXY, uintHtpGK39, bytek1Vpk5Z, byteRotfH0X, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jE61W6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenYXa9rg.pause.call({from: accounts[1]});

		assert.equal(uint256BZ8thIU, BigInt("0"))
		await expect(POWTokenYXa9rg.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
		const uintvKDs3c6 = BigInt("1895")
		const addressowmvfW0 = accounts[3]
//		const boolU66OR9 = await POWTokenobzLJqA.transfer.call(addressowmvfW0, uintvKDs3c6, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenobzLJqA.transfer.call(addressowmvfW0, uintvKDs3c6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYXa9rg = await POWToken.new({from: accounts[1]});
		const byteCXFVmg = "0x020d1d00041f1802000e0d1409090f01151509130e0315161f05030a1e09021f"
		const byteXi6EFOy = "0x06021916051d19021a1a111c11170c1210080c07140f10041c1412171f011203"
		const uintDpKpmgM = BigInt("188")
		const uintdzMUjUc = BigInt("1102")
		const uintTahrRGy = BigInt("853")
		const addressYTrbk9 = accounts[2]
		const addressdfW12cu = accounts[4]
//		const uint256DeEuY0t = await POWTokenYXa9rg.getHistoryWorkingRate.call({from: accounts[1]});
//		const uint256FPmHIh6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZQHIWZS = await POWTokenYXa9rg.permit.call(addressdfW12cu, addressYTrbk9, uintTahrRGy, uintdzMUjUc, uintDpKpmgM, byteXi6EFOy, byteCXFVmg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jE61W6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenYXa9rg.pause.call({from: accounts[1]});

		await expect(POWTokenYXa9rg.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYXa9rg = await POWToken.new({from: accounts[1]});
		const uinttRmhw9 = BigInt("631")
		const addresssrteeju = accounts[5]
//		const addressnfrFnI4 = await POWTokenYXa9rg.claimIncome.call(addresssrteeju, uinttRmhw9, {from: accounts[3]});
//		const uint256FPmHIh6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256jE61W6 = await POWTokenYXa9rg.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenYXa9rg.claimIncome.call(addresssrteeju, uinttRmhw9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
		const uintAQzuCFH = BigInt("1794")
		const uintGmDwPl8 = BigInt("712")
		const uinttkerJih = BigInt("227")
		const uintcAGe9F = BigInt("1127")
		const uintkpyUZ1 = BigInt("667")
		const addressuGxA78D = accounts[5]
		const addressyyBaCP = accounts[4]
		const addressHDhmaQQ = accounts[3]
		const addressaD8xmQG = accounts[0]
		const addressaJD2QpG = accounts[0]
		const addressZXq7gRb = accounts[4]
		const addresstd00Iz = accounts[0]
		const addressi2g1MUY = accounts[5]
		const stringPQt9nJl = "3XatxEvywBvW64FTe"
		const stringS5kvm9W = "uBdlq7JBL8W6Fyw91mVqTMz6mdJJqSNzxei6DqIsp7QhQG7Ow6BItHH4yBEBomY8I5"
		const uintmlH2xwj = BigInt("1964")
//		const stringfJXlBBj = await POWTokenobzLJqA.initialize.call(stringS5kvm9W, stringPQt9nJl, addressi2g1MUY, addresstd00Iz, addressZXq7gRb, addressaJD2QpG, addressaD8xmQG, addressHDhmaQQ, addressyyBaCP, addressuGxA78D, uintkpyUZ1, uintcAGe9F, uinttkerJih, uintGmDwPl8, uintAQzuCFH, {from: accounts[0]});
//		const uint256KEd7CF = await POWTokenobzLJqA.setWorkingHashRate.call(uintmlH2xwj, {from: accounts[1]});
//		const uint256npZM59 = await POWTokenobzLJqA.lpStakingRewardRate.call({from: accounts[3]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenobzLJqA.initialize.call(stringS5kvm9W, stringPQt9nJl, addressi2g1MUY, addresstd00Iz, addressZXq7gRb, addressaJD2QpG, addressaD8xmQG, addressHDhmaQQ, addressyyBaCP, addressuGxA78D, uintkpyUZ1, uintcAGe9F, uinttkerJih, uintGmDwPl8, uintAQzuCFH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
		const uintJiyoXwQ = BigInt("371")
		const addressd30cNK0 = accounts[5]
		const boolZebj4Pz = await POWTokenobzLJqA.approve.call(addressd30cNK0, uintJiyoXwQ, {from: accounts[3]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});

		assert.equal(boolZebj4Pz, true)
		await expect(POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
		const uintBloqMZ8 = BigInt("405")
		const addressgi3qJiF = accounts[4]
		const uinttemgtfI = BigInt("1183")
//		const addressiVnPdd7 = await POWTokenobzLJqA.mint.call(addressgi3qJiF, uintBloqMZ8, {from: accounts[3]});
//		const uint256lI6cDhX = await POWTokenobzLJqA.remainingAmount.call({from: accounts[0]});
//		await POWTokenobzLJqA.updateIncomeRate.call({from: accounts[2]});
//		const uint256GEgmkvc = await POWTokenobzLJqA.setElectricCharge.call(uinttemgtfI, {from: accounts[3]});

		await expect(POWTokenobzLJqA.mint.call(addressgi3qJiF, uintBloqMZ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenobzLJqA = await POWToken.new({from: accounts[4]});
		const uintDq1fSYm = BigInt("1869")
		const addresscYgQIwX = accounts[2]
		const addressT1nVgr = accounts[0]
//		const boolFqWjpFH = await POWTokenobzLJqA.transferFrom.call(addressT1nVgr, addresscYgQIwX, uintDq1fSYm, {from: accounts[1]});
//		const uint256Su2OjXf = await POWTokenobzLJqA.stakingRewardRate.call({from: accounts[1]});
//		const uint256lI6cDhX = await POWTokenobzLJqA.remainingAmount.call({from: accounts[0]});

		await expect(POWTokenobzLJqA.transferFrom.call(addressT1nVgr, addresscYgQIwX, uintDq1fSYm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvX9lvR = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttDryPV7 = BigInt("3")
		const uintNezBRw = BigInt("1550")
		const uintoFCu7CQ = BigInt("1763")
		const addressPPXrlEW = accounts[3]
		const uint256LCJV5Hl = await POWTokenvX9lvR.setStakingRewardRatio.call(uinttDryPV7, {from: accounts[1]});
		const uint256iTOMdvM = await POWTokenvX9lvR.getHistoryWorkingRate.call({from: accounts[3]});
		const uint2564H1CUU = await POWTokenvX9lvR.setDepreciationNumerator.call(uintNezBRw, {from: accounts[5]});
		const addressLXTGkH = await POWTokenvX9lvR.mint.call(addressPPXrlEW, uintoFCu7CQ, {from: accounts[1]});
	});
})
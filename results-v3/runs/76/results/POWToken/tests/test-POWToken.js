const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenwJDfq7f = await POWToken.new({from: accounts[3]});
		const uintQtXTfIU = BigInt("1884")
		const addresspf20r9s = accounts[4]
		const uintcade8sg = BigInt("574")
		await POWTokenwJDfq7f.unpause.call({from: accounts[3]});
		const uint256bItbExm = await POWTokenwJDfq7f.getHistoryWorkingRate.call({from: accounts[4]});
		const addressgmjWpU = await POWTokenwJDfq7f.claimReward.call(addresspf20r9s, uintQtXTfIU, {from: accounts[0]});
		const uint2568nrPpD = await POWTokenwJDfq7f.getHistoryWorkingRate.call({from: accounts[0]});
		const uint256lmhzUIr = await POWTokenwJDfq7f.setMinerPoolFeeNumerator.call(uintcade8sg, {from: accounts[1]});
		const uint256M0yYDOZ = await POWTokenwJDfq7f.getIncomeBTCInWeiPerSec.call({from: accounts[1]});

		await expect(POWTokenwJDfq7f.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlSXUty = await POWToken.new({from: accounts[2]});
		const uintJttYBqQ = BigInt("885")
		const addressG5BHEuO = "0x0000000000000000000000000000000000000001"
		const boolN03ABjS = await POWTokenlSXUty.transfer.call(addressG5BHEuO, uintJttYBqQ, {from: accounts[0]});
		await POWTokenlSXUty.pause.call({from: accounts[3]});
		await POWTokenlSXUty.whenPaused.call({from: accounts[0]});
		await POWTokenlSXUty.pause.call({from: accounts[2]});

		await expect(POWTokenlSXUty.transfer.call(addressG5BHEuO, uintJttYBqQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXfklVn = await POWToken.new({from: accounts[0]});
		const uintdRsAPjb = BigInt("785")
		const addressysSBnWd = accounts[1]
		const addressRjTRyzd = accounts[3]
		const uint9yvpEt = BigInt("331")
		const addressBddvSAr = accounts[4]
		const uint256VJwBJhD = await POWTokenXfklVn.getCurWorkingRate.call({from: accounts[0]});
		await POWTokenXfklVn.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBoqqRmE = await POWTokenXfklVn.transferFrom.call(addressRjTRyzd, addressysSBnWd, uintdRsAPjb, {from: accounts[2]});
		const uint256mupN1IE = await POWTokenXfklVn.setElectricCharge.call(uint9yvpEt, {from: accounts[4]});
		const addressMHnNI96 = await POWTokenXfklVn.setBtcParam.call(addressBddvSAr, {from: accounts[1]});

		await expect(POWTokenXfklVn.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLtv5rHv = await POWToken.new({from: accounts[0]});
		const uintDHtg3LB = BigInt("562")
		const uint256wqGAOOf = await POWTokenLtv5rHv.getHistoryWorkingRate.call({from: accounts[0]});
		const uint256PYVqme = await POWTokenLtv5rHv.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
		const uint256y1y60VG = await POWTokenLtv5rHv.setMinerPoolFeeNumerator.call(uintDHtg3LB, {from: accounts[3]});

		await expect(POWTokenLtv5rHv.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintuh28uEx = BigInt("776")
		const addresszEVdzOy = accounts[4]
		const uintGiw8Y5u = BigInt("952")
		const uintESbYvnU = BigInt("411")
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});
		const addressMcJTe1D = await POWTokenQunG05L.claimIncome.call(addresszEVdzOy, uintuh28uEx, {from: accounts[1]});
		const uint256ZhovgpU = await POWTokenQunG05L.setMinerPoolFeeNumerator.call(uintGiw8Y5u, {from: accounts[3]});
		const uint256fJuwBbj = await POWTokenQunG05L.setMinerPoolFeeNumerator.call(uintESbYvnU, {from: accounts[0]});
		const uint256iioANU1 = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[0]});

		assert.equal(uint256pPrq88v, BigInt("0"))
		await expect(POWTokenQunG05L.claimIncome.call(addresszEVdzOy, uintuh28uEx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRFLuCjq = await POWToken.new({from: accounts[1]});
		const byteJZCUHBX = "0x1c18051a1b130a101402070a1902110b081e160f131f0310161306020e1e0109"
		const byteVhffQE0 = "0x0115111a05161b19090e140910121d020b111d03200a010c1409030a010d0a07"
		const uintaxKCJFH = BigInt("80")
		const uintShg5roj = BigInt("984")
		const uintvKg9rV = BigInt("1756")
		const addressK90VVUB = accounts[4]
		const addressS6NsbTM = accounts[3]
		const uintUtAWPXq = BigInt("649")
		const addressVe7tasQ = accounts[1]
		await POWTokenRFLuCjq.whenNotPaused.call({from: accounts[2]});
		const addresspfTyNRx = await POWTokenRFLuCjq.permit.call(addressS6NsbTM, addressK90VVUB, uintvKg9rV, uintShg5roj, uintaxKCJFH, byteVhffQE0, byteJZCUHBX, {from: accounts[0]});
		const addressRe4vh1K = await POWTokenRFLuCjq.claimIncome.call(addressVe7tasQ, uintUtAWPXq, {from: accounts[1]});

		await expect(POWTokenRFLuCjq.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenyiXdvLG = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintySWkai0 = BigInt("253")
		await POWTokenyiXdvLG.updateIncomeRate.call({from: accounts[0]});
		await POWTokenyiXdvLG.whenNotPaused.call({from: accounts[2]});
		const uint256FgMMIVq = await POWTokenyiXdvLG.addHashRate.call(uintySWkai0, {from: accounts[5]});
	});

	it('test for POWToken', async () => {
		const POWTokenH52cMId = await POWToken.new({from: accounts[1]});
		const uintrMWltRm = BigInt("1267")
		const uintYrf1SBm = BigInt("983")
		const addressacJ6qEd = accounts[4]
		const uint256cXllJom = await POWTokenH52cMId.addHashRate.call(uintrMWltRm, {from: accounts[1]});
		const addressQoVvtlH = await POWTokenH52cMId.mint.call(addressacJ6qEd, uintYrf1SBm, {from: accounts[3]});
		await POWTokenH52cMId.whenNotPaused.call({from: accounts[3]});

		await expect(POWTokenH52cMId.addHashRate.call(uintrMWltRm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlSXUty = await POWToken.new({from: accounts[2]});
		const uint8RwRdC = BigInt("885")
		const addressJhNgnxK = "0x0000000000000000000000000000000000000001"
		const uint256B2OnKbX = await POWTokenlSXUty.remainingAmount.call({from: accounts[0]});
		const boolN03ABjS = await POWTokenlSXUty.transfer.call(addressJhNgnxK, uint8RwRdC, {from: accounts[0]});
		await POWTokenlSXUty.pause.call({from: accounts[3]});
		await POWTokenlSXUty.whenPaused.call({from: accounts[0]});
		await POWTokenlSXUty.pause.call({from: accounts[2]});

		assert.equal(uint256B2OnKbX, BigInt("0"))
		await expect(POWTokenlSXUty.transfer.call(addressJhNgnxK, uint8RwRdC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const byteEVsu7h5 = "0x060214061b0912080907091106160c130d010c07180502030f1408051b200719"
		const bytep5omT6 = "0x1319150d041a01191906140101141a1301140b1d1a030903011b1b021a0f1707"
		const uintmQr8jeD = BigInt("56")
		const uintTH709c = BigInt("1747")
		const uintQx7R8M = BigInt("886")
		const addresscmY9QY = accounts[4]
		const addressF8eV3yQ = accounts[3]
		const uintLVFlps2 = BigInt("956")
		const uintUAAzfu = BigInt("411")
		const addressRylX84D = await POWTokenQunG05L.permit.call(addressF8eV3yQ, addresscmY9QY, uintQx7R8M, uintTH709c, uintmQr8jeD, bytep5omT6, byteEVsu7h5, {from: accounts[3]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});
		const uint256ZhovgpU = await POWTokenQunG05L.setMinerPoolFeeNumerator.call(uintLVFlps2, {from: accounts[3]});
		const uint256fJuwBbj = await POWTokenQunG05L.setMinerPoolFeeNumerator.call(uintUAAzfu, {from: accounts[0]});
		await POWTokenQunG05L.whenNotPaused.call({from: accounts[1]});

		await expect(POWTokenQunG05L.permit.call(addressF8eV3yQ, addresscmY9QY, uintQx7R8M, uintTH709c, uintmQr8jeD, bytep5omT6, byteEVsu7h5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXzOCx1B = await POWToken.new({from: accounts[1]});
		const uint256qUR77Bf = await POWTokenXzOCx1B.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
		await POWTokenXzOCx1B.whenNotPaused.call({from: accounts[5]});
		await POWTokenXzOCx1B.pause.call({from: accounts[2]});
		await POWTokenXzOCx1B.whenPaused.call({from: accounts[0]});
		const uint256Rlwj2ex = await POWTokenXzOCx1B.stakingRewardRate.call({from: accounts[1]});
		await POWTokenXzOCx1B.whenNotPaused.call({from: accounts[1]});

		await expect(POWTokenXzOCx1B.getIncomeBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintE0KCCVR = BigInt("247")
		const addressPGaVKRj = accounts[1]
		const uintQE3X3Vx = BigInt("802")
		const addressYyN652 = accounts[3]
		const uintd3ji4ED = BigInt("952")
		const boolQkv6Ztf = await POWTokenQunG05L.approve.call(addressPGaVKRj, uintE0KCCVR, {from: accounts[0]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});
		const addressUPIAMeN = await POWTokenQunG05L.claimReward.call(addressYyN652, uintQE3X3Vx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZhovgpU = await POWTokenQunG05L.setMinerPoolFeeNumerator.call(uintd3ji4ED, {from: accounts[3]});

		assert.equal(boolQkv6Ztf, true)
		assert.equal(uint256pPrq88v, BigInt("0"))
		await expect(POWTokenQunG05L.claimReward.call(addressYyN652, uintQE3X3Vx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintIHzlB6 = BigInt("111")
		const addressVYl1Fn = accounts[3]
		await POWTokenQunG05L.updateIncomeRate.call({from: accounts[0]});
		const boolRXdpm9u = await POWTokenQunG05L.approve.call(addressVYl1Fn, uintIHzlB6, {from: accounts[4]});
		const boolsxqEFI5 = await POWTokenQunG05L.paused.call({from: accounts[3]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenQunG05L.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintYnZ1CB = BigInt("717")
		const addressNX11RNs = accounts[0]
		const uintd4l6DPC = BigInt("247")
		const addressiE0omKQ = accounts[1]
		const uinthh8r9x = BigInt("802")
		const addressLVil5OI = accounts[3]
		const addressfaUQM37 = await POWTokenQunG05L.mint.call(addressNX11RNs, uintYnZ1CB, {from: accounts[0]});
		const boolQkv6Ztf = await POWTokenQunG05L.approve.call(addressiE0omKQ, uintd4l6DPC, {from: accounts[0]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});
		const addressUPIAMeN = await POWTokenQunG05L.claimReward.call(addressLVil5OI, uinthh8r9x, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenQunG05L.mint.call(addressNX11RNs, uintYnZ1CB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintC4V95su = BigInt("111")
		const addressEJxrI2z = accounts[3]
		const boolRXdpm9u = await POWTokenQunG05L.approve.call(addressEJxrI2z, uintC4V95su, {from: accounts[4]});
		const boolsxqEFI5 = await POWTokenQunG05L.paused.call({from: accounts[3]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});

		assert.equal(boolRXdpm9u, true)
		assert.equal(boolsxqEFI5, false)
		assert.equal(uint256pPrq88v, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintdBhU1Az = BigInt("1091")
		const addressNejLWXY = accounts[3]
		const addressVCFgOnv = accounts[5]
		const uintg60YdmH = BigInt("776")
		const addressnaTGpcJ = accounts[4]
		const boolPJC9XZ9 = await POWTokenQunG05L.transferFrom.call(addressVCFgOnv, addressNejLWXY, uintdBhU1Az, {from: accounts[0]});
		const uint256pPrq88v = await POWTokenQunG05L.lpStakingRewardRate.call({from: accounts[2]});
		const addressMcJTe1D = await POWTokenQunG05L.claimIncome.call(addressnaTGpcJ, uintg60YdmH, {from: accounts[1]});
		await POWTokenQunG05L.unpause.call({from: accounts[3]});

		await expect(POWTokenQunG05L.transferFrom.call(addressVCFgOnv, addressNejLWXY, uintdBhU1Az, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQunG05L = await POWToken.new({from: accounts[1]});
		const uintfn04GAD = BigInt("1018")
		const uinteMmQSv = BigInt("880")
		const uintezN0Ljy = BigInt("1414")
		const uintnRCiSup = BigInt("1302")
		const uintqV130JB = BigInt("1056")
		const addressMFgF9FP = accounts[4]
		const addressZoti1Z = accounts[1]
		const addressFlj3Kli = accounts[3]
		const addressyO8amT = accounts[0]
		const addressprkGRnO = accounts[0]
		const addressTkNBdYH = accounts[4]
		const addressrlABj9g = accounts[4]
		const addressPZmADJn = accounts[1]
		const stringCSOj4bf = "LXdg3drRlaOH99FyNtyfGYnoeJsTSTkkgNXBIliTsNF8Jvb5u8Tb3McOahUNy6EdnOjZYk"
		const stringLoLYBoU = "2XwN"
		const uintakaTUxr = BigInt("1184")
		const uintptQdUc4 = BigInt("1074")
		const string2F5P6L = await POWTokenQunG05L.initialize.call(stringLoLYBoU, stringCSOj4bf, addressPZmADJn, addressrlABj9g, addressTkNBdYH, addressprkGRnO, addressyO8amT, addressFlj3Kli, addressZoti1Z, addressMFgF9FP, uintqV130JB, uintnRCiSup, uintezN0Ljy, uinteMmQSv, uintfn04GAD, {from: accounts[4]});
		const uint256JbnyeHE = await POWTokenQunG05L.setWorkingHashRate.call(uintakaTUxr, {from: accounts[4]});
		const uint2564kcZ3N = await POWTokenQunG05L.setStartMiningTime.call(uintptQdUc4, {from: accounts[3]});
		await POWTokenQunG05L.updateIncomeRate.call({from: accounts[0]});

		await expect(POWTokenQunG05L.initialize.call(stringLoLYBoU, stringCSOj4bf, addressPZmADJn, addressrlABj9g, addressTkNBdYH, addressprkGRnO, addressyO8amT, addressFlj3Kli, addressZoti1Z, addressMFgF9FP, uintqV130JB, uintnRCiSup, uintezN0Ljy, uinteMmQSv, uintfn04GAD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
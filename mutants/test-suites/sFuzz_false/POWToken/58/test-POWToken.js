const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenQUR5Af = await POWToken.new({from: accounts[4]});
		const uintxXkUJGk = BigInt("1011")
		const addressB1cTpuZ = accounts[1]
		const uintHeTFhLD = BigInt("983")
		const addressOIgjH8m = accounts[2]
		const uintkOzOkLX = BigInt("853")
		const addressO7cBQI = accounts[4]
		const uinto8znOmh = BigInt("1707")
//		const addressgH9Sxlo = await POWTokenQUR5Af.mint.call(addressB1cTpuZ, uintxXkUJGk, {from: accounts[3]});
//		const addressf5Cg9EJ = await POWTokenQUR5Af.claimIncome.call(addressOIgjH8m, uintHeTFhLD, {from: accounts[5]});
//		const addressXuaFsjX = await POWTokenQUR5Af.claimReward.call(addressO7cBQI, uintkOzOkLX, {from: accounts[5]});
//		await POWTokenQUR5Af.whenNotPaused.call({from: accounts[1]});
//		const uint256WkA2nfp = await POWTokenQUR5Af.notifyRewardAmount.call(uinto8znOmh, {from: accounts[2]});

		await expect(POWTokenQUR5Af.mint.call(addressB1cTpuZ, uintxXkUJGk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintQmeTgkH = BigInt("1505")
		const addressvp0DZyP = accounts[0]
//		const uint256ZIHn3qg = await POWTokenGciyXCB.addHashRate.call(uintQmeTgkH, {from: accounts[0]});
//		const addressgh5UJHS = await POWTokenGciyXCB.transferOwnership.call(addressvp0DZyP, {from: accounts[3]});

		await expect(POWTokenGciyXCB.addHashRate.call(uintQmeTgkH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenO7ub5Bz = await POWToken.new({from: accounts[2]});
		const uintJbTkag1 = BigInt("1178")
		const addresssKAWlC = accounts[4]
		const addressOfV1rHl = accounts[5]
//		await POWTokenO7ub5Bz.whenPaused.call({from: accounts[1]});
//		const uint256LBisVhg = await POWTokenO7ub5Bz.remainingAmount.call({from: accounts[4]});
//		await POWTokenO7ub5Bz.onlyOwner.call({from: accounts[1]});
//		const booluwMM1J = await POWTokenO7ub5Bz.transferFrom.call(addressOfV1rHl, addresssKAWlC, uintJbTkag1, {from: accounts[3]});
//		const uint256KLvhLHY = await POWTokenO7ub5Bz.getIncomeBTCInWeiPerSec.call({from: accounts[3]});

		await expect(POWTokenO7ub5Bz.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenUrnVPF = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		await POWTokenUrnVPF.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyg4YQgF = await POWTokenUrnVPF.paused.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenItuDLrG = await POWToken.new({from: accounts[1]});
		const addressR3xmL3 = accounts[4]
		const uintqXQ2836 = BigInt("1511")
		const addressBmIFo3n = accounts[1]
		const uintrtUzKmR = BigInt("1063")
		const uint256wbECVc5 = await POWTokenItuDLrG.remainingAmount.call({from: accounts[0]});
//		const addressj7VD9O1 = await POWTokenItuDLrG.setBtcParam.call(addressR3xmL3, {from: accounts[1]});
//		const addressbA3Mled = await POWTokenItuDLrG.claimReward.call(addressBmIFo3n, uintqXQ2836, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dewMqJw = await POWTokenItuDLrG.setMinerPoolFeeNumerator.call(uintrtUzKmR, {from: accounts[1]});

		assert.equal(uint256wbECVc5, BigInt("0"))
		await expect(POWTokenItuDLrG.setBtcParam.call(addressR3xmL3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenahJeq2 = await POWToken.new({from: accounts[3]});
		const uintSNUSR6f = BigInt("173")
		const addressPiqyfFK = accounts[3]
		const uintgfSD3i = BigInt("1669")
//		const addressstNMxw = await POWTokenahJeq2.claimReward.call(addressPiqyfFK, uintSNUSR6f, {from: accounts[2]});
//		const uint256q9U83hi = await POWTokenahJeq2.setElectricCharge.call(uintgfSD3i, {from: accounts[0]});

		await expect(POWTokenahJeq2.claimReward.call(addressPiqyfFK, uintSNUSR6f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqAg079b = await POWToken.new({from: accounts[1]});
		const uintC2hsYG = BigInt("1291")
		const uintMFr5fnd = BigInt("825")
		const boolowwKfQA = await POWTokenqAg079b.paused.call({from: accounts[4]});
//		const uint256suSCzG = await POWTokenqAg079b.notifyRewardAmount.call(uintC2hsYG, {from: accounts[3]});
//		const uint256evC3I9E = await POWTokenqAg079b.setStakingRewardRatio.call(uintMFr5fnd, {from: accounts[0]});

		assert.equal(boolowwKfQA, false)
		await expect(POWTokenqAg079b.notifyRewardAmount.call(uintC2hsYG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenItuDLrG = await POWToken.new({from: accounts[1]});
		const addressp3sneLo = accounts[4]
		const uintFBql59A = BigInt("1511")
		const addressWR8iGOd = accounts[2]
		const uintOByBGx = BigInt("1063")
		const uint256wbECVc5 = await POWTokenItuDLrG.remainingAmount.call({from: accounts[0]});
		const uint256CuBWz5p = await POWTokenItuDLrG.lpStakingRewardRate.call({from: accounts[5]});
//		const addressj7VD9O1 = await POWTokenItuDLrG.setBtcParam.call(addressp3sneLo, {from: accounts[1]});
//		const addressbA3Mled = await POWTokenItuDLrG.claimReward.call(addressWR8iGOd, uintFBql59A, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dewMqJw = await POWTokenItuDLrG.setMinerPoolFeeNumerator.call(uintOByBGx, {from: accounts[1]});

		assert.equal(uint256CuBWz5p, BigInt("0"))
		assert.equal(uint256wbECVc5, BigInt("0"))
		await expect(POWTokenItuDLrG.setBtcParam.call(addressp3sneLo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintC0g7djz = BigInt("1505")
		const addressGw2JKiL = accounts[1]
//		const uint256OVtcSd9 = await POWTokenGciyXCB.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
//		const uint256ZIHn3qg = await POWTokenGciyXCB.addHashRate.call(uintC0g7djz, {from: accounts[0]});
//		await POWTokenGciyXCB.onlyOwner.call({from: accounts[5]});
//		const addressgh5UJHS = await POWTokenGciyXCB.transferOwnership.call(addressGw2JKiL, {from: accounts[3]});

		await expect(POWTokenGciyXCB.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlUGxRHc = await POWToken.new({from: accounts[0]});
		const bytejw0StBs = "0x1e0f1f1d01131d0a130b060d05181502131001160b2004080402050600030b1c"
		const bytewCHNXQc = "0x0e0a101c101f041d1b1510090815161f07071b101a1c1c1f0304030a130c1218"
		const uintNokuSJM = BigInt("27")
		const uintARrEvMM = BigInt("1519")
		const uintmY5g2Ok = BigInt("998")
		const addresswT6qF11 = accounts[3]
		const addressq9QnyKh = accounts[2]
		const uintruk1cLv = BigInt("842")
		const uintmw5aAmr = BigInt("1247")
		const addressHYrgPwK = accounts[0]
//		const addressthb0yTV = await POWTokenlUGxRHc.permit.call(addressq9QnyKh, addresswT6qF11, uintmY5g2Ok, uintARrEvMM, uintNokuSJM, bytewCHNXQc, bytejw0StBs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256kvZBBbT = await POWTokenlUGxRHc.setStakingRewardRatio.call(uintruk1cLv, {from: accounts[0]});
//		const uint256VTKQKL = await POWTokenlUGxRHc.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const addresssn8orBW = await POWTokenlUGxRHc.claimReward.call(addressHYrgPwK, uintmw5aAmr, {from: accounts[5]});

		await expect(POWTokenlUGxRHc.permit.call(addressq9QnyKh, addresswT6qF11, uintmY5g2Ok, uintARrEvMM, uintNokuSJM, bytewCHNXQc, bytejw0StBs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintB9wcHyM = BigInt("310")
//		const uint256T45MdWQ = await POWTokenGciyXCB.getCurWorkingRate.call({from: accounts[1]});
//		const uint256ZIHn3qg = await POWTokenGciyXCB.addHashRate.call(uintB9wcHyM, {from: accounts[0]});

		await expect(POWTokenGciyXCB.getCurWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintHYvjW3H = BigInt("1511")
		const addressnEOwhNB = accounts[4]
		const uintjFYacv0 = BigInt("1499")
		const uint256gHMmiL2 = await POWTokenGciyXCB.remainingAmount.call({from: accounts[2]});
		const boolJu9sIcV = await POWTokenGciyXCB.approve.call(addressnEOwhNB, uintHYvjW3H, {from: accounts[4]});
//		const uint256ZIHn3qg = await POWTokenGciyXCB.addHashRate.call(uintjFYacv0, {from: accounts[0]});
//		await POWTokenGciyXCB.onlyOwner.call({from: accounts[0]});

		assert.equal(boolJu9sIcV, true)
		assert.equal(uint256gHMmiL2, BigInt("0"))
		await expect(POWTokenGciyXCB.addHashRate.call(uintjFYacv0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uinthPBvXCH = BigInt("1088")
		const uintrEPCDlr = BigInt("1708")
		const uintTkbCR1x = BigInt("1940")
		const uintN4Kniw4 = BigInt("1991")
		const uintAtvII5H = BigInt("411")
		const addressGew78Ph = accounts[1]
		const addressSxfptUg = accounts[3]
		const addressmc9YNjF = accounts[1]
		const addressp3kxSzd = accounts[0]
		const addressCd15IRr = accounts[1]
		const addressNDFcIk = accounts[0]
		const addressaED187b = accounts[4]
		const addressl9mCrpW = accounts[1]
		const stringBBB7GYq = "YizogiSHk56wajtoBqhGIS5lpRNd7C4Q3O9g67Vh9p726ucazSfyarOCCaDVhXOggVkzNi4MF1mNVSu6LXcLiY"
		const stringDShCPXF = "3JJTm6ciPoqd1yjEBrsreJKLtL9ODT0qnUbYIX5hxb"
		const uintZFZhAGG = BigInt("1868")
		const addressKwLkpE = accounts[0]
//		const uint256mmZ7U9 = await POWTokenGciyXCB.getHistoryWorkingRate.call({from: accounts[4]});
//		const stringGJCHHIG = await POWTokenGciyXCB.initialize.call(stringDShCPXF, stringBBB7GYq, addressl9mCrpW, addressaED187b, addressNDFcIk, addressCd15IRr, addressp3kxSzd, addressmc9YNjF, addressSxfptUg, addressGew78Ph, uintAtvII5H, uintN4Kniw4, uintTkbCR1x, uintrEPCDlr, uinthPBvXCH, {from: accounts[4]});
//		const uint256RPOXAxr = await POWTokenGciyXCB.remainingAmount.call({from: accounts[5]});
//		const uint256UwUGbE1 = await POWTokenGciyXCB.setElectricCharge.call(uintZFZhAGG, {from: accounts[0]});
//		const addressgh5UJHS = await POWTokenGciyXCB.transferOwnership.call(addressKwLkpE, {from: accounts[3]});

		await expect(POWTokenGciyXCB.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDx41ENg = await POWToken.new({from: accounts[4]});
		const addressZuqVPQ = accounts[1]
//		await POWTokenDx41ENg.updateIncomeRate.call({from: accounts[2]});
//		const addressZ8FYRov = await POWTokenDx41ENg.transferOwnership.call(addressZuqVPQ, {from: accounts[0]});

		await expect(POWTokenDx41ENg.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintMIBN8hO = BigInt("1759")
		const uintmH8B63 = BigInt("1392")
		const uintnSTh6CW = BigInt("1881")
		const uintiATEKg8 = BigInt("1941")
		const uintU5xjax1 = BigInt("395")
		const addressk3rYsGC = accounts[1]
		const addressyPE2WdW = accounts[3]
		const addressk3VL1KQ = accounts[4]
		const addressUV21tII = accounts[5]
		const addressJSW3gxW = accounts[5]
		const addressHUGekh = accounts[0]
		const addresseGAZtjH = accounts[5]
		const addressONuvTIa = accounts[1]
		const stringoJ3zN7n = "JDsTsGUEpUOSsFHIjJEixcA88bpniEBGgFRhNHOpZ1Qs5CuOG6zUY89IeSQSBYH6B2VOcLHbPjDRLGRfYysCaM1tfQ"
		const stringnp68eyy = "ugcQaUPKzKjvencauUg4NY6aU7bYkuuPtPrrv0Sh8H76dvgSV1D4EdCFLPQW6mpnc"
		const addressVDa26N0 = accounts[0]
//		const stringyeIiFZ2 = await POWTokenGciyXCB.initialize.call(stringnp68eyy, stringoJ3zN7n, addressONuvTIa, addresseGAZtjH, addressHUGekh, addressJSW3gxW, addressUV21tII, addressk3VL1KQ, addressyPE2WdW, addressk3rYsGC, uintU5xjax1, uintiATEKg8, uintnSTh6CW, uintmH8B63, uintMIBN8hO, {from: accounts[0]});
//		const uint256pHzNxuq = await POWTokenGciyXCB.stakingRewardRate.call({from: accounts[0]});
//		const addressgh5UJHS = await POWTokenGciyXCB.transferOwnership.call(addressVDa26N0, {from: accounts[3]});

		await expect(POWTokenGciyXCB.initialize.call(stringnp68eyy, stringoJ3zN7n, addressONuvTIa, addresseGAZtjH, addressHUGekh, addressJSW3gxW, addressUV21tII, addressk3VL1KQ, addressyPE2WdW, addressk3rYsGC, uintU5xjax1, uintiATEKg8, uintnSTh6CW, uintmH8B63, uintMIBN8hO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenE4sJkA4 = await POWToken.new({from: accounts[0]});
		const uintUMHtwmf = BigInt("206")
		const addressG3W8lnq = accounts[5]
		const uintTYN59kd = BigInt("1473")
		const addressFzwMaq1 = "0x0000000000000000000000000000000000000001"
		const uintc6plryc = BigInt("92")
//		const uint25690Ed7s = await POWTokenE4sJkA4.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
//		const address4iSPZb = await POWTokenE4sJkA4.mint.call(addressG3W8lnq, uintUMHtwmf, {from: accounts[4]});
//		const boolLLW2Xde = await POWTokenE4sJkA4.transfer.call(addressFzwMaq1, uintTYN59kd, {from: accounts[0]});
//		const uint256SP2KafU = await POWTokenE4sJkA4.setStartMiningTime.call(uintc6plryc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenE4sJkA4.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK6G6ndb = await POWToken.new({from: accounts[3]});
		const uintSRiOyox = BigInt("712")
		const addressWRVkB0J = accounts[4]
		const uintczyuIs0 = BigInt("1221")
		const uint7JPFnF = BigInt("1433")
		const uintFH28436 = BigInt("293")
		const uintyHwYMPz = BigInt("1217")
		const uintkS5bwhl = BigInt("755")
		const addressrNImyV4 = accounts[2]
		const addressYIj8huX = "0x0000000000000000000000000000000000000001"
		const addresszVElhjI = accounts[1]
		const addressxNyolRQ = accounts[1]
		const addresscRSTuId = accounts[1]
		const addressVojT5Qe = accounts[3]
		const address6FX4Up = accounts[0]
		const addressXgtMLRL = accounts[2]
		const stringXOfrw6I = "mD7AuKG7NHfBakRrXAqSrMY8pl21H5zG74KHWQEOI"
		const stringU0Is39 = "TLt25EpRDo8ogW"
		const addressG6mGz5 = accounts[0]
//		const boolnWK0v3V = await POWTokenK6G6ndb.transfer.call(addressWRVkB0J, uintSRiOyox, {from: accounts[0]});
//		const stringo9H9ZfC = await POWTokenK6G6ndb.initialize.call(stringU0Is39, stringXOfrw6I, addressXgtMLRL, address6FX4Up, addressVojT5Qe, addresscRSTuId, addressxNyolRQ, addresszVElhjI, addressYIj8huX, addressrNImyV4, uintkS5bwhl, uintyHwYMPz, uintFH28436, uint7JPFnF, uintczyuIs0, {from: accounts[0]});
//		const addresst3nHFE = await POWTokenK6G6ndb.transferOwnership.call(addressG6mGz5, {from: accounts[1]});
//		await POWTokenK6G6ndb.whenNotPaused.call({from: accounts[2]});

		await expect(POWTokenK6G6ndb.transfer.call(addressWRVkB0J, uintSRiOyox, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGciyXCB = await POWToken.new({from: accounts[1]});
		const uintEVE28IR = BigInt("203")
		const addressBlzTHu2 = accounts[4]
//		const addressSlDkTEe = await POWTokenGciyXCB.claimIncome.call(addressBlzTHu2, uintEVE28IR, {from: accounts[2]});
//		const uint256RPOXAxr = await POWTokenGciyXCB.remainingAmount.call({from: accounts[5]});
//		await POWTokenGciyXCB.onlyOwner.call({from: accounts[3]});

		await expect(POWTokenGciyXCB.claimIncome.call(addressBlzTHu2, uintEVE28IR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHpoPwdC = await POWToken.new({from: accounts[0]});
		const uintnEx4ISX = BigInt("432")
		const addressZ3DWkAv = accounts[2]
		const uinthx6evTI = BigInt("1363")
		const addressff9a1aw = accounts[4]
		const addressVTfO8UW = accounts[5]
		const uinteL4RKwG = BigInt("1935")
		const boolf4asy3j = await POWTokenHpoPwdC.approve.call(addressZ3DWkAv, uintnEx4ISX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSswqRbS = await POWTokenHpoPwdC.transferFrom.call(addressVTfO8UW, addressff9a1aw, uinthx6evTI, {from: accounts[2]});
//		await POWTokenHpoPwdC.whenNotPaused.call({from: accounts[4]});
//		const uint256G3JnS32 = await POWTokenHpoPwdC.notifyRewardAmount.call(uinteL4RKwG, {from: accounts[1]});

		assert.equal(boolf4asy3j, true)
		await expect(POWTokenHpoPwdC.transferFrom.call(addressVTfO8UW, addressff9a1aw, uinthx6evTI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
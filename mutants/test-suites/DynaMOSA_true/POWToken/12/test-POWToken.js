const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const uintME3g42t = BigInt("1764")
		const uintgr64FtE = BigInt("1345")
//		const uint256EMflu8 = await POWTokenrtsKD3b.setElectricCharge.call(uintME3g42t, {from: accounts[1]});
//		const uint256xdpvdGk = await POWTokenrtsKD3b.setElectricCharge.call(uintgr64FtE, {from: accounts[0]});

		await expect(POWTokenrtsKD3b.setElectricCharge.call(uintME3g42t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenc28rWy9 = await POWToken.new({from: accounts[0]});
		const uintQVTzyv = BigInt("118")
		const addresstXJo9sJ = accounts[1]
		const bytetypZdYe = "0x0f0b101a08201701130b170d1a021b19040106190713041011100203061a1608"
		const byteG98Tof2 = "0x1b131d1e021b0810111a0e150d1f120911140214140b0c0416180d1a0f080307"
		const uintDCmkFIP = BigInt("83")
		const uintK0aJZ05 = BigInt("1799")
		const uintBVpNygh = BigInt("425")
		const addressmDmbflG = accounts[1]
		const addressd02A8l = accounts[4]
		const uintdZJim0q = BigInt("1853")
		const uint256jZdMGiN = await POWTokenc28rWy9.remainingAmount.call({from: accounts[5]});
//		const addressiQnEpXk = await POWTokenc28rWy9.claimReward.call(addresstXJo9sJ, uintQVTzyv, {from: accounts[1]});
//		const addressXHa0bwg = await POWTokenc28rWy9.permit.call(addressd02A8l, addressmDmbflG, uintBVpNygh, uintK0aJZ05, uintDCmkFIP, byteG98Tof2, bytetypZdYe, {from: accounts[1]});
//		const boolsLlHPMc = await POWTokenc28rWy9.paused.call({from: accounts[4]});
//		await POWTokenc28rWy9.whenPaused.call({from: accounts[0]});
//		const uint256sQJ4WX7 = await POWTokenc28rWy9.setStartMiningTime.call(uintdZJim0q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jZdMGiN, BigInt("0"))
		await expect(POWTokenc28rWy9.claimReward.call(addresstXJo9sJ, uintQVTzyv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenghUO8T = await POWToken.new({from: accounts[4]});
		const addressqvpjbp = accounts[4]
//		await POWTokenghUO8T.onlyParamSetter.call({from: accounts[1]});
//		await POWTokenghUO8T.whenNotPaused.call({from: accounts[1]});
//		const addressTL1pFLX = await POWTokenghUO8T.setBtcParam.call(addressqvpjbp, {from: accounts[2]});

		await expect(POWTokenghUO8T.onlyParamSetter.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenyU0EFeK = await POWToken.new({from: accounts[1]});
		const uintRGGt0YV = BigInt("873")
		const uintfz9amZd = BigInt("1393")
//		const uint256gvrKdiM = await POWTokenyU0EFeK.setStakingRewardRatio.call(uintRGGt0YV, {from: accounts[4]});
//		const uint256VIZiW9r = await POWTokenyU0EFeK.setStakingRewardRatio.call(uintfz9amZd, {from: accounts[3]});

		await expect(POWTokenyU0EFeK.setStakingRewardRatio.call(uintRGGt0YV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHdNNRA = await POWToken.new({from: accounts[2]});
		const uintJcn7jo7 = BigInt("1887")
		const addresseSCuYLW = accounts[3]
		const uintO0QGCsd = BigInt("1530")
		const addressJpqQ3dx = accounts[0]
		const uintqE5ExEa = BigInt("339")
		const address2jiSzY = accounts[3]
//		const addressRwQLMOY = await POWTokenHdNNRA.mint.call(addresseSCuYLW, uintJcn7jo7, {from: accounts[3]});
//		const addressa11Ffmk = await POWTokenHdNNRA.claimReward.call(addressJpqQ3dx, uintO0QGCsd, {from: accounts[3]});
//		await POWTokenHdNNRA.whenPaused.call({from: accounts[1]});
//		const addressMYRrm0 = await POWTokenHdNNRA.claimIncome.call(address2jiSzY, uintqE5ExEa, {from: accounts[4]});
//		await POWTokenHdNNRA.onlyOwner.call({from: accounts[4]});
//		await POWTokenHdNNRA.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenHdNNRA.mint.call(addresseSCuYLW, uintJcn7jo7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenamWrpD4 = await POWToken.new({from: accounts[3]});
		const addressL1neXed = accounts[4]
//		const uint256taZiPbN = await POWTokenamWrpD4.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
//		const uint256WhyAIzm = await POWTokenamWrpD4.getHistoryWorkingRate.call({from: accounts[0]});
//		const uint256cgEIvMW = await POWTokenamWrpD4.remainingAmount.call({from: accounts[3]});
//		const addressou8Iekp = await POWTokenamWrpD4.setParamSetter.call(addressL1neXed, {from: accounts[4]});

		await expect(POWTokenamWrpD4.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxyfcOqS = await POWToken.new({from: accounts[4]});
		const uintnrq9v9Q = BigInt("82")
		const addressOtdWHAT = accounts[0]
		const uintsejqdLd = BigInt("1703")
		const boolnKTxQkg = await POWTokenxyfcOqS.approve.call(addressOtdWHAT, uintnrq9v9Q, {from: accounts[0]});
//		const uint256z7bVj0 = await POWTokenxyfcOqS.setStakingRewardRatio.call(uintsejqdLd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnKTxQkg, true)
		await expect(POWTokenxyfcOqS.setStakingRewardRatio.call(uintsejqdLd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenc28rWy9 = await POWToken.new({from: accounts[0]});
		const byteiB6m12 = "0x0f0b101a08201701130b170d1a021b19040106190713041011100203061a1608"
		const byteRDV5iYZ = "0x1b131d1e021b0810111a0e150d1f120911140214140b0c0416180d1a0f080307"
		const uintD5Au35x = BigInt("83")
		const uintnmmqfSp = BigInt("1799")
		const uintnGbUKWD = BigInt("425")
		const addressNrCujGL = accounts[1]
		const addressuNe9Hu3 = accounts[4]
		const byteNK97dDX = "0x0c0f0b01061b1a1a180c021c160d0308150c1f05020308111b18021e090d0c1d"
		const byteMKmgsiX = "0x1e1b1604190103041b0202140811190a00131a08181f150d0b09111c021a0e12"
		const uintVuq3AEb = BigInt("207")
		const uintZsmKfUq = BigInt("1497")
		const uintn3X1DAr = BigInt("70")
		const addressVKeG8XM = accounts[3]
		const addresskxBUDEO = accounts[0]
		const uintnyFXllH = BigInt("1853")
		const uint256jZdMGiN = await POWTokenc28rWy9.remainingAmount.call({from: accounts[5]});
//		const addressXHa0bwg = await POWTokenc28rWy9.permit.call(addressuNe9Hu3, addressNrCujGL, uintnGbUKWD, uintnmmqfSp, uintD5Au35x, byteRDV5iYZ, byteiB6m12, {from: accounts[1]});
//		const boolsLlHPMc = await POWTokenc28rWy9.paused.call({from: accounts[4]});
//		const addressT6LS4CW = await POWTokenc28rWy9.permit.call(addresskxBUDEO, addressVKeG8XM, uintn3X1DAr, uintZsmKfUq, uintVuq3AEb, byteMKmgsiX, byteNK97dDX, {from: accounts[0]});
//		await POWTokenc28rWy9.whenPaused.call({from: accounts[0]});
//		const uint256sQJ4WX7 = await POWTokenc28rWy9.setStartMiningTime.call(uintnyFXllH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jZdMGiN, BigInt("0"))
		await expect(POWTokenc28rWy9.permit.call(addressuNe9Hu3, addressNrCujGL, uintnGbUKWD, uintnmmqfSp, uintD5Au35x, byteRDV5iYZ, byteiB6m12, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const uintFW8wCmF = BigInt("1764")
		const uinti4bcTR0 = BigInt("673")
		const uint2565CCJbS = await POWTokenrtsKD3b.stakingRewardRate.call({from: accounts[1]});
//		const uint256EMflu8 = await POWTokenrtsKD3b.setElectricCharge.call(uintFW8wCmF, {from: accounts[1]});
//		const uint256xdpvdGk = await POWTokenrtsKD3b.setElectricCharge.call(uinti4bcTR0, {from: accounts[0]});

		assert.equal(uint2565CCJbS, BigInt("0"))
		await expect(POWTokenrtsKD3b.setElectricCharge.call(uintFW8wCmF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlLXOaSr = await POWToken.new({from: accounts[4]});
		const uintazYFmny = BigInt("582")
		const uint256SqdNmUY = await POWTokenlLXOaSr.remainingAmount.call({from: accounts[0]});
//		await POWTokenlLXOaSr.updateIncomeRate.call({from: accounts[2]});
//		const uint256F2y2Fbo = await POWTokenlLXOaSr.setWorkingHashRate.call(uintazYFmny, {from: accounts[5]});
//		const uint256DzxT7fR = await POWTokenlLXOaSr.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint256SqdNmUY, BigInt("0"))
		await expect(POWTokenlLXOaSr.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const uintZvvMwG = BigInt("624")
		const uintaeiw7ca = BigInt("960")
		const uintRh53jgt = BigInt("935")
		const uintIrUOjDF = BigInt("252")
		const uintWYAaouq = BigInt("1128")
		const addressLpogLDq = accounts[3]
		const addressjqx4ol = accounts[0]
		const addressTwTQNVx = accounts[1]
		const addresseA3bStM = accounts[4]
		const address7qMUZJ = accounts[1]
		const addresspb4UsbA = accounts[2]
		const addressXjoRPeI = accounts[0]
		const addressJjgW6vW = accounts[4]
		const stringfotQZDB = "S5tRCs2qrSjixg62wEbu6ASuhOXZkbsj219CcbGSSoFXwY7JN5VOidmCcW2BUuw91uFV848dQAAeJplLoMSIk7v6d"
		const stringuPoeGG = "qWMsGi1ffwnySTt3hKxcHUEOsHww"
		const uintipb7pAn = BigInt("244")
		const addressVVhye2Z = accounts[1]
		const uintUYp7co = BigInt("1335")
//		const stringzPDwWop = await POWTokenrtsKD3b.initialize.call(stringuPoeGG, stringfotQZDB, addressJjgW6vW, addressXjoRPeI, addresspb4UsbA, address7qMUZJ, addresseA3bStM, addressTwTQNVx, addressjqx4ol, addressLpogLDq, uintWYAaouq, uintIrUOjDF, uintRh53jgt, uintaeiw7ca, uintZvvMwG, {from: "0x0000000000000000000000000000000000000001"});
//		const addressL7tXkVu = await POWTokenrtsKD3b.claimReward.call(addressVVhye2Z, uintipb7pAn, {from: accounts[2]});
//		const uint256xdpvdGk = await POWTokenrtsKD3b.setElectricCharge.call(uintUYp7co, {from: accounts[0]});

		await expect(POWTokenrtsKD3b.initialize.call(stringuPoeGG, stringfotQZDB, addressJjgW6vW, addressXjoRPeI, addresspb4UsbA, address7qMUZJ, addresseA3bStM, addressTwTQNVx, addressjqx4ol, addressLpogLDq, uintWYAaouq, uintIrUOjDF, uintRh53jgt, uintaeiw7ca, uintZvvMwG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenq6XjuRd = await POWToken.new({from: accounts[1]});
		const uintpUt9eqG = BigInt("1852")
		const addressycV7OEU = accounts[2]
		const uintWriBQUN = BigInt("1651")
		const addressOwQBWqT = accounts[1]
		const addressybR3PXf = accounts[0]
		const boolW8OZdmO = await POWTokenq6XjuRd.paused.call({from: accounts[0]});
//		const addresszoyBZL6 = await POWTokenq6XjuRd.mint.call(addressycV7OEU, uintpUt9eqG, {from: accounts[1]});
//		const uint256Ul7Dpgn = await POWTokenq6XjuRd.lpStakingRewardRate.call({from: accounts[0]});
//		const addresszNOkdlg = await POWTokenq6XjuRd.claimIncome.call(addressOwQBWqT, uintWriBQUN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PTYGfxs = await POWTokenq6XjuRd.stakingRewardRate.call({from: accounts[1]});
//		const addressGgkzARN = await POWTokenq6XjuRd.setParamSetter.call(addressybR3PXf, {from: accounts[0]});

		assert.equal(boolW8OZdmO, false)
		await expect(POWTokenq6XjuRd.mint.call(addressycV7OEU, uintpUt9eqG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenwX2k3OZ = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBOVyhnx = BigInt("1168")
		const addressUCpaebA = accounts[4]
		const boolVj9Sl1k = await POWTokenwX2k3OZ.transfer.call(addressUCpaebA, uintBOVyhnx, {from: accounts[1]});
		const uint256YnsfCaG = await POWTokenwX2k3OZ.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256xt0WqR9 = await POWTokenwX2k3OZ.stakingRewardRate.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const uintwxJguE2 = BigInt("431")
		const addressz3SEA2n = accounts[4]
		const bytexgT6dg0 = "0x171f1903181a17121609040418081d1a0c200f140505141917181c1c0b1e1e1f"
		const bytea2o0mgw = "0x011118161c01120a020e18071b1f0a10100f0e060a12021b1b190f0509101a1c"
		const uintKfVJOlF = BigInt("71")
		const uintcMfap90 = BigInt("1853")
		const uinteleuixg = BigInt("1443")
		const addressw90bJ4 = accounts[3]
		const addressfliIHO2 = accounts[2]
//		const boolTGbHiOL = await POWTokenrtsKD3b.transfer.call(addressz3SEA2n, uintwxJguE2, {from: accounts[4]});
//		const addressXB6uGwH = await POWTokenrtsKD3b.permit.call(addressfliIHO2, addressw90bJ4, uinteleuixg, uintcMfap90, uintKfVJOlF, bytea2o0mgw, bytexgT6dg0, {from: accounts[1]});

		await expect(POWTokenrtsKD3b.transfer.call(addressz3SEA2n, uintwxJguE2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlLXOaSr = await POWToken.new({from: accounts[4]});
		const uint256SqdNmUY = await POWTokenlLXOaSr.remainingAmount.call({from: accounts[0]});
//		const uint256yGCAYju = await POWTokenlLXOaSr.getHistoryWorkingRate.call({from: accounts[4]});
//		await POWTokenlLXOaSr.updateIncomeRate.call({from: accounts[2]});
//		await POWTokenlLXOaSr.pause.call({from: accounts[3]});

		assert.equal(uint256SqdNmUY, BigInt("0"))
		await expect(POWTokenlLXOaSr.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlLXOaSr = await POWToken.new({from: accounts[4]});
		const uintEjdQfQh = BigInt("205")
		const addressG2M1aw3 = accounts[4]
		const addresswuEae1l = accounts[3]
//		const boolLpO26LF = await POWTokenlLXOaSr.transferFrom.call(addresswuEae1l, addressG2M1aw3, uintEjdQfQh, {from: accounts[0]});
//		await POWTokenlLXOaSr.updateIncomeRate.call({from: accounts[2]});

		await expect(POWTokenlLXOaSr.transferFrom.call(addresswuEae1l, addressG2M1aw3, uintEjdQfQh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const bytez8lkkU = "0x08050917020417101c0204110216171e1a03071a010f0812031d0c0d1c050216"
		const byteR1pM0la = "0x011118161c01120a020e18071b1f0a10100f0e060a12021b1b190f0509101a1c"
		const uintzmODCet = BigInt("71")
		const uintr6NekY8 = BigInt("1853")
		const uintZH0JIbp = BigInt("1443")
		const addresss9ITpSV = accounts[3]
		const addresskhLyI2m = accounts[2]
		const uintirrcB2H = BigInt("1105")
		const uint256VJXiAlc = await POWTokenrtsKD3b.lpStakingRewardRate.call({from: accounts[3]});
//		await POWTokenrtsKD3b.pause.call({from: accounts[1]});
//		const addressXB6uGwH = await POWTokenrtsKD3b.permit.call(addresskhLyI2m, addresss9ITpSV, uintZH0JIbp, uintr6NekY8, uintzmODCet, byteR1pM0la, bytez8lkkU, {from: accounts[1]});
//		await POWTokenrtsKD3b.pause.call({from: accounts[0]});
//		const uint256lxJ9RnO = await POWTokenrtsKD3b.notifyRewardAmount.call(uintirrcB2H, {from: accounts[4]});

		assert.equal(uint256VJXiAlc, BigInt("0"))
		await expect(POWTokenrtsKD3b.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrtsKD3b = await POWToken.new({from: accounts[3]});
		const uint5LsO9Y = BigInt("83")
		const uintDVlLPTL = BigInt("1046")
		const uintSkJAKq1 = BigInt("1709")
		const uintqaTdbLM = BigInt("1713")
		const uintZRiPzRH = BigInt("1911")
		const addressOKC2nyi = accounts[2]
		const addressYbpGGoO = accounts[3]
		const addresseMmvnib = accounts[3]
		const addressc76L4Vm = accounts[3]
		const addressky2OcxC = accounts[2]
		const addressFk1fQde = accounts[2]
		const addressYSj4FWW = "0x0000000000000000000000000000000000000001"
		const addressoecyUAA = "0x0000000000000000000000000000000000000000"
		const stringtdAsI8j = "R88XXQMqdNa1NOXOD9u8LwkoayKjO4KwpMKnXBxyAFLQdJV25FzJOfDjPOqeuo3YGb7psi"
		const stringR4b1mEq = "8rINdfn0I"
		const uintxkqNTSS = BigInt("864")
		const uintXhYdIsG = BigInt("1337")
		const uintHwxcnU8 = BigInt("311")
		const uintLpHeLJ = BigInt("157")
		const uintwP6rnWV = BigInt("1471")
		const addresspiX2Qdg = accounts[4]
		const addressiHVDe8m = accounts[1]
		const addressGzq5IZA = accounts[5]
		const addresso6Snve = accounts[0]
		const addressN7ykLJp = accounts[3]
		const addressLx4kbjY = accounts[4]
		const addressL1pUyvn = accounts[0]
		const addressTQQvovP = accounts[3]
		const stringkjrs2sz = "d3gu6bSqoId2yvmSSUnIPAl3HI9Mj5LQIx"
		const stringKwf10we = "Umya4cKkZ7AiP6CoideD4A9Kndxj2xcjiGq46ma"
		const uintJStteUo = BigInt("1345")
//		const stringHRbTBL = await POWTokenrtsKD3b.initialize.call(stringR4b1mEq, stringtdAsI8j, addressoecyUAA, addressYSj4FWW, addressFk1fQde, addressky2OcxC, addressc76L4Vm, addresseMmvnib, addressYbpGGoO, addressOKC2nyi, uintZRiPzRH, uintqaTdbLM, uintSkJAKq1, uintDVlLPTL, uint5LsO9Y, {from: accounts[3]});
//		const stringc4o3i3E = await POWTokenrtsKD3b.initialize.call(stringKwf10we, stringkjrs2sz, addressTQQvovP, addressL1pUyvn, addressLx4kbjY, addressN7ykLJp, addresso6Snve, addressGzq5IZA, addressiHVDe8m, addresspiX2Qdg, uintwP6rnWV, uintLpHeLJ, uintHwxcnU8, uintXhYdIsG, uintxkqNTSS, {from: accounts[5]});
//		const uint256xdpvdGk = await POWTokenrtsKD3b.setElectricCharge.call(uintJStteUo, {from: accounts[0]});

		await expect(POWTokenrtsKD3b.initialize.call(stringR4b1mEq, stringtdAsI8j, addressoecyUAA, addressYSj4FWW, addressFk1fQde, addressky2OcxC, addressc76L4Vm, addresseMmvnib, addressYbpGGoO, addressOKC2nyi, uintZRiPzRH, uintqaTdbLM, uintSkJAKq1, uintDVlLPTL, uint5LsO9Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenE90sfC = await POWToken.new({from: accounts[1]});
		const uintYxpJBZj = BigInt("204")
		const addressTE0CEd = accounts[5]
		const uinthf4QhCu = BigInt("446")
		const uintpQkKGL5 = BigInt("223")
		const uintzzezpl = BigInt("556")
		const uintMb84Cpz = BigInt("748")
		const uintT73i9AZ = BigInt("1716")
		const addressDKZ46E = accounts[1]
		const addressMheAeYF = "0x0000000000000000000000000000000000000001"
		const addressxve4Ob9 = accounts[2]
		const addressbCbx2J4 = accounts[4]
		const addressZPmu7OY = accounts[0]
		const addressSBcJCb = "0x0000000000000000000000000000000000000001"
		const addressrPc0xl = accounts[1]
		const addressYidrjmw = accounts[2]
		const stringNHc2Ng1 = "jqcO1v7lttW33xiMblpoLDI6pD8WU9qCIk5cqcSfokTs4EUQo4uAznOigp"
		const stringtOHFYue = "Vg7sTwSq1hhcMNOmqYFJwXauDwdcN71PgKSAyKunWPgnOiei0nfLk457kHINePaHg2T4AcwpzFTkkS3QrLFoCYOW"
		const uintGk4X1jg = BigInt("618")
		const addressHfMAdxm = accounts[2]
//		const addressvZNNUUt = await POWTokenE90sfC.claimIncome.call(addressTE0CEd, uintYxpJBZj, {from: accounts[4]});
//		const stringB9n7OYT = await POWTokenE90sfC.initialize.call(stringtOHFYue, stringNHc2Ng1, addressYidrjmw, addressrPc0xl, addressSBcJCb, addressZPmu7OY, addressbCbx2J4, addressxve4Ob9, addressMheAeYF, addressDKZ46E, uintT73i9AZ, uintMb84Cpz, uintzzezpl, uintpQkKGL5, uinthf4QhCu, {from: accounts[2]});
//		const boolv437r1 = await POWTokenE90sfC.approve.call(addressHfMAdxm, uintGk4X1jg, {from: accounts[5]});

		await expect(POWTokenE90sfC.claimIncome.call(addressTE0CEd, uintYxpJBZj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
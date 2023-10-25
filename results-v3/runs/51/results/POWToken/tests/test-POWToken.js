const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenOlCqQgD = await POWToken.new({from: accounts[0]});
		const uintgE93YBM = BigInt("1564")
		const byteC7gMLw = "0x200b1b0311160b1b0a1a08150e00060d121515141e1c190b0d0a17141e19081c"
		const byteU0SAvrU = "0x1c080c1313010f090c0712160f0e0d02010e060214160f1502071c0709130820"
		const uintFcWoLQb = BigInt("127")
		const uintBl1H0wQ = BigInt("228")
		const uintMxNjXS = BigInt("1135")
		const addressLQqYFQE = accounts[1]
		const addressG4bpGZx = accounts[3]
		await POWTokenOlCqQgD.pause.call({from: accounts[2]});
		const uint256e8t9ZF = await POWTokenOlCqQgD.setWorkingHashRate.call(uintgE93YBM, {from: accounts[1]});
		const addressrUC8Ftc = await POWTokenOlCqQgD.permit.call(addressG4bpGZx, addressLQqYFQE, uintMxNjXS, uintBl1H0wQ, uintFcWoLQb, byteU0SAvrU, byteC7gMLw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenOlCqQgD.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken4tsKgk = await POWToken.new({from: accounts[2]});
		await POWToken4tsKgk.whenPaused.call({from: accounts[3]});
		await POWToken4tsKgk.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWToken4tsKgk.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniD7NzeS = await POWToken.new({from: accounts[0]});
		const uintIcqhggb = BigInt("2038")
		const uintVcxOoiB = BigInt("1713")
		const uint256l1WCfBC = await POWTokeniD7NzeS.getHistoryWorkingRate.call({from: accounts[5]});
		const uint256eZ7aWX3 = await POWTokeniD7NzeS.stakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256O042aqI = await POWTokeniD7NzeS.addHashRate.call(uintIcqhggb, {from: accounts[4]});
		const uint256O7txOcq = await POWTokeniD7NzeS.lpStakingRewardRate.call({from: accounts[5]});
		const uint256Avd8DGv = await POWTokeniD7NzeS.setDepreciationNumerator.call(uintVcxOoiB, {from: accounts[1]});

		await expect(POWTokeniD7NzeS.getHistoryWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxDIUFB2 = await POWToken.new({from: accounts[5]});
		const uint256hsgD3pu = await POWTokenxDIUFB2.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
		await POWTokenxDIUFB2.updateIncomeRate.call({from: accounts[2]});
		await POWTokenxDIUFB2.onlyOwner.call({from: accounts[3]});

		await expect(POWTokenxDIUFB2.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkxt6WgW = await POWToken.new({from: accounts[2]});
		const uintvO3MLrL = BigInt("770")
		const addressyn5L3v8 = accounts[3]
		const bytea48KS5 = "0x1e1f1a071c051d091301080206190415171a050d100b1514151a0b11090e181b"
		const byteEVQl4Jy = "0x0c041c0c170b0406011f1f1b20180a1a171812180e150e0118120f0811161b17"
		const uintr6S4NiM = BigInt("135")
		const uintQnYVRkM = BigInt("712")
		const uintwKYLnzt = BigInt("1793")
		const addresskRDxjAq = accounts[3]
		const addressGsIEL5X = accounts[4]
		const uint256K8w8pJ = await POWTokenkxt6WgW.setElectricCharge.call(uintvO3MLrL, {from: accounts[3]});
		const addressbzAgvRK = await POWTokenkxt6WgW.setBtcParam.call(addressyn5L3v8, {from: accounts[0]});
		const addressqbtF8l = await POWTokenkxt6WgW.permit.call(addressGsIEL5X, addresskRDxjAq, uintwKYLnzt, uintQnYVRkM, uintr6S4NiM, byteEVQl4Jy, bytea48KS5, {from: accounts[4]});

		await expect(POWTokenkxt6WgW.setElectricCharge.call(uintvO3MLrL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniZI8fKn = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpkKdFgf = BigInt("66")
		const uint256SbXSKaw = await POWTokeniZI8fKn.getHistoryWorkingRate.call({from: accounts[0]});
		const uint256pMlQ7Dj = await POWTokeniZI8fKn.setDepreciationNumerator.call(uintpkKdFgf, {from: accounts[5]});
		const uint256hZQmug6 = await POWTokeniZI8fKn.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenck52WFk = await POWToken.new({from: accounts[1]});
		const uintGEtCqSO = BigInt("1403")
		const addressqNMRp9F = accounts[4]
		const uintJR85AYp = BigInt("1687")
		const uintj5xKbJc = BigInt("1105")
		const addresswNToLwI = accounts[3]
		const addressDANQtFc = await POWTokenck52WFk.mint.call(addressqNMRp9F, uintGEtCqSO, {from: accounts[1]});
		const uint256aXwkurc = await POWTokenck52WFk.setStartMiningTime.call(uintJR85AYp, {from: accounts[3]});
		const boolzXoRc63 = await POWTokenck52WFk.paused.call({from: accounts[0]});
		const addressXYg3VEw = await POWTokenck52WFk.inCaseTokensGetStuck.call(addresswNToLwI, uintj5xKbJc, {from: accounts[3]});

		await expect(POWTokenck52WFk.mint.call(addressqNMRp9F, uintGEtCqSO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniD7NzeS = await POWToken.new({from: accounts[0]});
		const uintNJSSNpG = BigInt("579")
		const addressLL3zV20 = accounts[5]
		const uintloSorUL = BigInt("2036")
		const uintOLNuRZO = BigInt("1713")
		const boolF7A9MuB = await POWTokeniD7NzeS.approve.call(addressLL3zV20, uintNJSSNpG, {from: accounts[0]});
		await POWTokeniD7NzeS.whenNotPaused.call({from: accounts[4]});
		const uint256eZ7aWX3 = await POWTokeniD7NzeS.stakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256O042aqI = await POWTokeniD7NzeS.addHashRate.call(uintloSorUL, {from: accounts[4]});
		const uint256O7txOcq = await POWTokeniD7NzeS.lpStakingRewardRate.call({from: accounts[5]});
		const uint256Avd8DGv = await POWTokeniD7NzeS.setDepreciationNumerator.call(uintOLNuRZO, {from: accounts[1]});

		assert.equal(boolF7A9MuB, true)
		await expect(POWTokeniD7NzeS.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIoPX0yv = await POWToken.new({from: accounts[3]});
		const uintFEwSaet = BigInt("1741")
		const addressZIorNwj = accounts[5]
		const byteB1aeGW = "0x13090d0d1f000711061e00180a031a1518141d0f0c170a070e14110205001a02"
		const byterTif2P = "0x091e061a1a120b1d0e20140d161919051f1d021007180d1d0a0b081b1f06191e"
		const uintGLgMsJH = BigInt("137")
		const uintKQ3Hphk = BigInt("614")
		const uintCMjjoI0 = BigInt("308")
		const addresswsEV9he = accounts[1]
		const addressbWwg9l7 = accounts[3]
		const uintFDcIJHG = BigInt("838")
		const addressVWINwjG = accounts[1]
		const boolN1wAEec = await POWTokenIoPX0yv.paused.call({from: accounts[0]});
		const addressCdMOCtQ = await POWTokenIoPX0yv.inCaseTokensGetStuck.call(addressZIorNwj, uintFEwSaet, {from: accounts[4]});
		const addressqsr9SYi = await POWTokenIoPX0yv.permit.call(addressbWwg9l7, addresswsEV9he, uintCMjjoI0, uintKQ3Hphk, uintGLgMsJH, byterTif2P, byteB1aeGW, {from: accounts[0]});
		const addressAXXVxf3 = await POWTokenIoPX0yv.claimIncome.call(addressVWINwjG, uintFDcIJHG, {from: accounts[2]});

		assert.equal(boolN1wAEec, false)
		await expect(POWTokenIoPX0yv.inCaseTokensGetStuck.call(addressZIorNwj, uintFEwSaet, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBTemcHB = await POWToken.new({from: accounts[0]});
		const uintf5vhs4v = BigInt("118")
		const addressxokNkDw = accounts[0]
		const addresspvPhBoG = accounts[5]
		const uint256uGCOROF = await POWTokenBTemcHB.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256Fqdb8N8 = await POWTokenBTemcHB.getHistoryWorkingRate.call({from: accounts[3]});
		const boolpztNCZ = await POWTokenBTemcHB.transferFrom.call(addresspvPhBoG, addressxokNkDw, uintf5vhs4v, {from: accounts[4]});

		await expect(POWTokenBTemcHB.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniD7NzeS = await POWToken.new({from: accounts[0]});
		const uintjPfW0b5 = BigInt("1770")
		const addresswZuvKe = accounts[0]
		const addressJFC3JcH = accounts[0]
		const uintKejPRCW = BigInt("2038")
		const bool8HuHYo = await POWTokeniD7NzeS.transferFrom.call(addressJFC3JcH, addresswZuvKe, uintjPfW0b5, {from: accounts[4]});
		const uint256l1WCfBC = await POWTokeniD7NzeS.getHistoryWorkingRate.call({from: accounts[5]});
		const uint256eZ7aWX3 = await POWTokeniD7NzeS.stakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256O042aqI = await POWTokeniD7NzeS.addHashRate.call(uintKejPRCW, {from: accounts[4]});
		const uint256O7txOcq = await POWTokeniD7NzeS.lpStakingRewardRate.call({from: accounts[5]});

		await expect(POWTokeniD7NzeS.transferFrom.call(addressJFC3JcH, addresswZuvKe, uintjPfW0b5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTFcDWwq = await POWToken.new({from: accounts[1]});
		const uinteumNWLh = BigInt("1770")
		const addressLC8hvKS = accounts[4]
		const uintFvqiqcP = BigInt("1126")
		const uintpBCD9qD = BigInt("751")
		const addressbjPbUZx = accounts[4]
		const addressiq3SGdE = accounts[1]
		const uint256cQV3IKk = await POWTokenTFcDWwq.remainingAmount.call({from: accounts[3]});
		const uint256rsZDrrz = await POWTokenTFcDWwq.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
		const boolH1h1MF = await POWTokenTFcDWwq.transfer.call(addressLC8hvKS, uinteumNWLh, {from: accounts[0]});
		const uint256RBq58yy = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[1]});
		const uint256XgJeuaE = await POWTokenTFcDWwq.lpStakingRewardRate.call({from: accounts[2]});
		const uint256f8dAIXT = await POWTokenTFcDWwq.setDepreciationNumerator.call(uintFvqiqcP, {from: "0x0000000000000000000000000000000000000001"});
		const boolvv1Td1 = await POWTokenTFcDWwq.transferFrom.call(addressiq3SGdE, addressbjPbUZx, uintpBCD9qD, {from: accounts[5]});
		const uint256diICKwP = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[5]});

		assert.equal(uint256cQV3IKk, BigInt("0"))
		await expect(POWTokenTFcDWwq.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAi5pbG = await POWToken.new({from: accounts[3]});
		const byteHsWCrPH = "0x170a0803150405151806041c0c20140e120c090f001119110e131a0c1709170f"
		const byterhA717x = "0x1e1e1714150c1c01160611151e011f15071a101a1a07061c19011c1d08051a1b"
		const uintoHC4SH = BigInt("179")
		const uintXzzrtOq = BigInt("358")
		const uintCLTo9N = BigInt("959")
		const addressYPeUMJd = accounts[5]
		const addressw1jkMyE = accounts[4]
		const uint256WkIeuNd = await POWTokenAi5pbG.lpStakingRewardRate.call({from: accounts[2]});
		const addressI4sp4GS = await POWTokenAi5pbG.permit.call(addressw1jkMyE, addressYPeUMJd, uintCLTo9N, uintXzzrtOq, uintoHC4SH, byterhA717x, byteHsWCrPH, {from: accounts[2]});

		assert.equal(uint256WkIeuNd, BigInt("0"))
		await expect(POWTokenAi5pbG.permit.call(addressw1jkMyE, addressYPeUMJd, uintCLTo9N, uintXzzrtOq, uintoHC4SH, byterhA717x, byteHsWCrPH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTFcDWwq = await POWToken.new({from: accounts[1]});
		const uintfnrlQ1J = BigInt("1770")
		const addressQ4pl4pO = accounts[4]
		const uintKo5diKX = BigInt("1122")
		const uintMm1fv1s = BigInt("751")
		const addressFBBqne = accounts[4]
		const addressn0qYrsy = accounts[1]
		const uint256cQV3IKk = await POWTokenTFcDWwq.remainingAmount.call({from: accounts[3]});
		const boolH1h1MF = await POWTokenTFcDWwq.transfer.call(addressQ4pl4pO, uintfnrlQ1J, {from: accounts[0]});
		await POWTokenTFcDWwq.pause.call({from: accounts[0]});
		const uint256RBq58yy = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[1]});
		const uint256XgJeuaE = await POWTokenTFcDWwq.lpStakingRewardRate.call({from: accounts[2]});
		const uint256HPrzAJ = await POWTokenTFcDWwq.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		const uint256f8dAIXT = await POWTokenTFcDWwq.setDepreciationNumerator.call(uintKo5diKX, {from: "0x0000000000000000000000000000000000000001"});
		const boolvv1Td1 = await POWTokenTFcDWwq.transferFrom.call(addressn0qYrsy, addressFBBqne, uintMm1fv1s, {from: accounts[5]});
		const uint256diICKwP = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[5]});

		assert.equal(uint256cQV3IKk, BigInt("0"))
		await expect(POWTokenTFcDWwq.transfer.call(addressQ4pl4pO, uintfnrlQ1J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAi5pbG = await POWToken.new({from: accounts[3]});
		const byteZ51DSyq = "0x170a0803150405151806041c0c20140e120c090f001119110e131a0c1709170f"
		const bytexpOt21n = "0x1e1e1714150c1c01160611151e011f15071a101a1a07061c19011c1d08051a1b"
		const uintF7wcHuh = BigInt("179")
		const uintIFTOMJv = BigInt("358")
		const uintqQS4qum = BigInt("959")
		const addressPw1TP85 = accounts[5]
		const addresswCSJ5el = accounts[4]
		const uint256WkIeuNd = await POWTokenAi5pbG.lpStakingRewardRate.call({from: accounts[2]});
		await POWTokenAi5pbG.updateIncomeRate.call({from: accounts[2]});
		const uint256fH57Vum = await POWTokenAi5pbG.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
		const addressI4sp4GS = await POWTokenAi5pbG.permit.call(addresswCSJ5el, addressPw1TP85, uintqQS4qum, uintIFTOMJv, uintF7wcHuh, bytexpOt21n, byteZ51DSyq, {from: accounts[2]});

		assert.equal(uint256WkIeuNd, BigInt("0"))
		await expect(POWTokenAi5pbG.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxDIUFB2 = await POWToken.new({from: accounts[5]});
		const uintKLyV5Za = BigInt("1886")
		const uintfYcu8v9 = BigInt("1642")
		const uintv2IvjoZ = BigInt("360")
		const uintSqfuHjL = BigInt("1391")
		const uintxSCV913 = BigInt("1231")
		const addressKGmvPpt = accounts[1]
		const addressDYS84id = accounts[4]
		const addressCbMStgU = accounts[0]
		const addressqj1rbP4 = accounts[3]
		const addressSCD1Mls = accounts[2]
		const addressANctqxJ = accounts[3]
		const addressyL9YAvC = "0x0000000000000000000000000000000000000001"
		const addresswrQpxB6 = "0x0000000000000000000000000000000000000001"
		const stringwKdxd9a = "MCE3nMJ4FeAr5bhYtHwBhO7ekd6pj3CHhuhALkNpf1S2GcYqPaa11pdlQdTwrEIputk"
		const stringyEeJMpm = "INUYesjEVRq3oA3KkDfEQfAGEckY9JlmpXLRxe6IOFQVWdtw8UCkUgUB8k"
		const stringY0n0rGV = await POWTokenxDIUFB2.initialize.call(stringyEeJMpm, stringwKdxd9a, addresswrQpxB6, addressyL9YAvC, addressANctqxJ, addressSCD1Mls, addressqj1rbP4, addressCbMStgU, addressDYS84id, addressKGmvPpt, uintxSCV913, uintSqfuHjL, uintv2IvjoZ, uintfYcu8v9, uintKLyV5Za, {from: accounts[4]});
		const uint256hsgD3pu = await POWTokenxDIUFB2.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
		await POWTokenxDIUFB2.updateIncomeRate.call({from: accounts[5]});

		await expect(POWTokenxDIUFB2.initialize.call(stringyEeJMpm, stringwKdxd9a, addresswrQpxB6, addressyL9YAvC, addressANctqxJ, addressSCD1Mls, addressqj1rbP4, addressCbMStgU, addressDYS84id, addressKGmvPpt, uintxSCV913, uintSqfuHjL, uintv2IvjoZ, uintfYcu8v9, uintKLyV5Za, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTFcDWwq = await POWToken.new({from: accounts[1]});
		const uintyAxJrea = BigInt("294")
		const addressobrAxOc = accounts[0]
		const uintdNAKyTE = BigInt("1766")
		const addressN1e9ut7 = accounts[4]
		const addressqxMkhA = accounts[4]
		const uinttMLkiWz = BigInt("455")
		const addressk4SlCy8 = accounts[1]
		const uint256cQV3IKk = await POWTokenTFcDWwq.remainingAmount.call({from: accounts[3]});
		const addressmzI1NdZ = await POWTokenTFcDWwq.claimReward.call(addressobrAxOc, uintyAxJrea, {from: accounts[0]});
		const uint256rsZDrrz = await POWTokenTFcDWwq.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
		const boolH1h1MF = await POWTokenTFcDWwq.transfer.call(addressN1e9ut7, uintdNAKyTE, {from: accounts[0]});
		const uint256RBq58yy = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[1]});
		const uint256XgJeuaE = await POWTokenTFcDWwq.lpStakingRewardRate.call({from: accounts[2]});
		const addresssTPYzQ4 = await POWTokenTFcDWwq.transferOwnership.call(addressqxMkhA, {from: accounts[4]});
		const uint256diICKwP = await POWTokenTFcDWwq.getCurWorkingRate.call({from: accounts[5]});
		const addressxDuJGos = await POWTokenTFcDWwq.claimReward.call(addressk4SlCy8, uinttMLkiWz, {from: accounts[0]});

		assert.equal(uint256cQV3IKk, BigInt("0"))
		await expect(POWTokenTFcDWwq.claimReward.call(addressobrAxOc, uintyAxJrea, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAi5pbG = await POWToken.new({from: accounts[3]});
		const uintaJQpMz = BigInt("480")
		const addressDVVbnmr = accounts[5]
		const bytek79b9fW = "0x0f1915150b1a031915071d030f0c190b030d0110090b1d010c1e05180f0d110f"
		const byteHvsxls0 = "0x0702171e130c1117130f1108020f0e1520150b18101b1a1e140c11051f031a04"
		const uintgESFmbw = BigInt("120")
		const uintzZFS5Ia = BigInt("212")
		const uintu4Mg4iA = BigInt("1749")
		const addressqOqA7CO = accounts[3]
		const addressVP81me3 = accounts[3]
		const uintAG1r3Wt = BigInt("813")
		const addressZmtOKF5 = await POWTokenAi5pbG.claimIncome.call(addressDVVbnmr, uintaJQpMz, {from: accounts[4]});
		const addressuPgreD = await POWTokenAi5pbG.permit.call(addressVP81me3, addressqOqA7CO, uintu4Mg4iA, uintzZFS5Ia, uintgESFmbw, byteHvsxls0, bytek79b9fW, {from: accounts[2]});
		const uint256bOL6O5W = await POWTokenAi5pbG.setMinerPoolFeeNumerator.call(uintAG1r3Wt, {from: accounts[0]});
		const uint256WkIeuNd = await POWTokenAi5pbG.lpStakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenAi5pbG.claimIncome.call(addressDVVbnmr, uintaJQpMz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
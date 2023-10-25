const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrUgj8vDf = accounts[1]
		const FOSTERAddre3mwfYc = accounts[1]
		const initialRategq7Vle = BigInt("213")
		const initialPeriodbcc5UR = BigInt("1372")
		const initialOwnerhj28xuI = accounts[2]
		const contractWVr8Cal = await Reseller.new(USDTAddrUgj8vDf, FOSTERAddre3mwfYc, initialRategq7Vle, initialPeriodbcc5UR, initialOwnerhj28xuI, {from: "0x0000000000000000000000000000000000000001"});
		const amountydlPRT6 = BigInt("1604")
		const commentiHUU9BM = "NmrgQC3Lxps5t4eH4AvQHW1WOd0tkq3K6WqJFzpPCSdWsnwwbLXZvYVEmUn4eKn"
		const _ref5YZiGYaS = accounts[1]
		const _ref4SXk4uja = accounts[4]
		const _ref3caSh9eq = "0x0000000000000000000000000000000000000001"
		const _ref2uRLiFm3 = accounts[3]
		const _ref1iYzwA9 = accounts[4]
		const valuetsO8KoR = BigInt("934")
		const newBoss4iFgoaSC = accounts[0]
		const commentIBSBer = "JFiKhXnpRHUAKWNa8VDMuhyIoiOJdKp"
		const _ref5vXKBRTt = accounts[1]
		const _ref4LoOVt8I = accounts[3]
		const _ref3ZubMrta = accounts[4]
		const _ref2G6y5CPh = accounts[4]
		const _ref1iZLSPBg = accounts[2]
		const valueuccDnQ = BigInt("1266")
		const commentdDEmrla = "gE4LffLWreOJD4RA7GjSog6uAsUTaB2i3sfFlorPqvF32jFwX6DqcycrdP8jEtgcdkZu5wg1hQvrh2ujeY1ooEQGGKAj"
		const _ref5H5qCgcl = accounts[5]
		const _ref4wUBi5la = accounts[2]
		const _ref3Uq45Q82 = accounts[1]
		const _ref2hTMTHL = accounts[4]
		const _ref1iLKXYm = accounts[2]
		const valuelx2HvV = BigInt("1632")
		const nullxih6LQF = await contractWVr8Cal.getEstimation.call(amountydlPRT6, {from: accounts[1]});
		await contractWVr8Cal.purchase.call(valuetsO8KoR, _ref1iYzwA9, _ref2uRLiFm3, _ref3caSh9eq, _ref4SXk4uja, _ref5YZiGYaS, commentiHUU9BM, {from: accounts[3]});
		await contractWVr8Cal.deposeBoss4.call(newBoss4iFgoaSC, {from: accounts[4]});
		await contractWVr8Cal.purchase.call(valueuccDnQ, _ref1iZLSPBg, _ref2G6y5CPh, _ref3ZubMrta, _ref4LoOVt8I, _ref5vXKBRTt, commentIBSBer, {from: accounts[4]});
		await contractWVr8Cal.purchase.call(valuelx2HvV, _ref1iLKXYm, _ref2hTMTHL, _ref3Uq45Q82, _ref4wUBi5la, _ref5H5qCgcl, commentdDEmrla, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrrNKbW7X = accounts[1]
		const FOSTERAddroRb2CKo = accounts[3]
		const initialRatejeitqp = BigInt("1545")
		const initialPeriodqf15H8I = BigInt("1131")
		const initialOwnerzvDWYR6 = accounts[0]
		const contractkoTlLFW = await Reseller.new(USDTAddrrNKbW7X, FOSTERAddroRb2CKo, initialRatejeitqp, initialPeriodqf15H8I, initialOwnerzvDWYR6, {from: accounts[0]});
		const _ref5TBZzuOr = accounts[2]
		const _ref4zfDtEyC = accounts[0]
		const _ref3NTtayr9 = accounts[2]
		const _ref2m3S5zpn = accounts[3]
		const _ref1Kfq6hM6 = accounts[0]
		const valueYpC4a0I = BigInt("1810")
		const newFeeIru4eh = BigInt("100")
		const accountJ2GSft8 = accounts[0]
		const commentd3IJRtX = "1SKC4nEndh2DxelV8pcW13FyMTWZ2EfN2kwWHqTT9wXLL3M96wvWrIiw7w7N2S3wfzyBRtOotuADMcT04"
		const _ref5nG9TvAx = accounts[1]
		const _ref4pxODIS4 = accounts[1]
		const _ref3xgfAMd3 = accounts[4]
		const _ref2Bw2qZHh = accounts[3]
		const _ref1mql8V0b = "0x0000000000000000000000000000000000000001"
		const valuedqUgfAn = BigInt("1814")
		const newBoss2boySyba = accounts[1]
		const newRateNfbTrFF = BigInt("1625")
		await contractkoTlLFW.buy.call(valueYpC4a0I, _ref1Kfq6hM6, _ref2m3S5zpn, _ref3NTtayr9, _ref4zfDtEyC, _ref5TBZzuOr, {from: accounts[5]});
		await contractkoTlLFW.setFee.call(newFeeIru4eh, {from: accounts[3]});
		const nullEBkJhJi = await contractkoTlLFW.allowanceFOSTER.call(accountJ2GSft8, {from: accounts[0]});
		await contractkoTlLFW.purchase.call(valuedqUgfAn, _ref1mql8V0b, _ref2Bw2qZHh, _ref3xgfAMd3, _ref4pxODIS4, _ref5nG9TvAx, commentd3IJRtX, {from: "0x0000000000000000000000000000000000000001"});
		await contractkoTlLFW.deposeBoss2.call(newBoss2boySyba, {from: "0x0000000000000000000000000000000000000001"});
		await contractkoTlLFW.setRate.call(newRateNfbTrFF, {from: accounts[5]});

		await expect(contractkoTlLFW.buy.call(valueYpC4a0I, _ref1Kfq6hM6, _ref2m3S5zpn, _ref3NTtayr9, _ref4zfDtEyC, _ref5TBZzuOr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddravvH3kd = accounts[1]
		const FOSTERAddrhglqDen = accounts[3]
		const initialRateeXky1BS = BigInt("727")
		const initialPeriodfzvwcBq = BigInt("405")
		const initialOwnerERve0Av = accounts[3]
		const contractqeLgBnc = await Reseller.new(USDTAddravvH3kd, FOSTERAddrhglqDen, initialRateeXky1BS, initialPeriodfzvwcBq, initialOwnerERve0Av, {from: accounts[3]});
		const newBoss4ACJnLA = accounts[2]
		const newFeeBsd9rQH = BigInt("99")
		const newBoss4uk7PBYa = accounts[1]
		const newRateKf9i2Zq = BigInt("1256")
		const newFeepgf27nE = BigInt("228")
		await contractqeLgBnc.deposeBoss4.call(newBoss4ACJnLA, {from: accounts[0]});
		await contractqeLgBnc.setFee.call(newFeeBsd9rQH, {from: "0x0000000000000000000000000000000000000001"});
		await contractqeLgBnc.deposeBoss4.call(newBoss4uk7PBYa, {from: accounts[3]});
		await contractqeLgBnc.setRate.call(newRateKf9i2Zq, {from: accounts[0]});
		await contractqeLgBnc.setFee.call(newFeepgf27nE, {from: accounts[4]});

		await expect(contractqeLgBnc.deposeBoss4.call(newBoss4ACJnLA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvHqqvr = accounts[5]
		const FOSTERAddrO4jwhy = accounts[5]
		const initialRatelGaXLAn = BigInt("1804")
		const initialPeriodLBEJ4xV = BigInt("1264")
		const initialOwnerXHCDb9K = accounts[2]
		const contractytEf8vY = await Reseller.new(USDTAddrvHqqvr, FOSTERAddrO4jwhy, initialRatelGaXLAn, initialPeriodLBEJ4xV, initialOwnerXHCDb9K, {from: accounts[0]});
		const newBoss2gskuMZJ = accounts[4]
		const accountwJhwrtn = accounts[4]
		const newRategswLPe0 = BigInt("1673")
		const newPeriodGMX1Be = BigInt("891")
		await contractytEf8vY.deposeBoss2.call(newBoss2gskuMZJ, {from: accounts[1]});
		const nullDutnbis = await contractytEf8vY.balanceUSDT.call(accountwJhwrtn, {from: accounts[0]});
		await contractytEf8vY.setRate.call(newRategswLPe0, {from: accounts[3]});
		await contractytEf8vY.setPeriod.call(newPeriodGMX1Be, {from: accounts[1]});

		await expect(contractytEf8vY.deposeBoss2.call(newBoss2gskuMZJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrK2WNDAL = accounts[4]
		const FOSTERAddrzAqH35t = accounts[0]
		const initialRateiR1P1yg = BigInt("1740")
		const initialPerioddMa3ZPa = BigInt("893")
		const initialOwnerf9NJFTv = accounts[1]
		const contractHBpBKhm = await Reseller.new(USDTAddrK2WNDAL, FOSTERAddrzAqH35t, initialRateiR1P1yg, initialPerioddMa3ZPa, initialOwnerf9NJFTv, {from: accounts[3]});
		const valuepshhYS9 = BigInt("1561")
		const newPeriodlSViXn = BigInt("1607")
		const newBoss1qc23VL6 = accounts[2]
		await contractHBpBKhm.withdraw.call(valuepshhYS9, {from: accounts[4]});
		await contractHBpBKhm.setPeriod.call(newPeriodlSViXn, {from: accounts[4]});
		await contractHBpBKhm.deposeBoss1.call(newBoss1qc23VL6, {from: accounts[4]});

		await expect(contractHBpBKhm.withdraw.call(valuepshhYS9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPOodJLm = accounts[3]
		const FOSTERAddrJFEx8Lr = "0x0000000000000000000000000000000000000001"
		const initialRateRAvzpda = BigInt("1187")
		const initialPeriodoMM8CW7 = BigInt("1540")
		const initialOwnerhDuYC5 = accounts[1]
		const contractGywvt2 = await Reseller.new(USDTAddrPOodJLm, FOSTERAddrJFEx8Lr, initialRateRAvzpda, initialPeriodoMM8CW7, initialOwnerhDuYC5, {from: accounts[5]});
		const newPeriodnj3WfyZ = BigInt("1585")
		const newMinimumfFEfZ2e = BigInt("716")
		await contractGywvt2.setPeriod.call(newPeriodnj3WfyZ, {from: accounts[4]});
		await contractGywvt2.setMinimum.call(newMinimumfFEfZ2e, {from: accounts[0]});

		await expect(contractGywvt2.setPeriod.call(newPeriodnj3WfyZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVKXcqO8 = accounts[4]
		const FOSTERAddrxakK4H6 = accounts[1]
		const initialRateLEmt81Q = BigInt("1944")
		const initialPeriodDBzlONT = BigInt("1069")
		const initialOwnerKJHsn6l = accounts[1]
		const contractyg5eZ8I = await Reseller.new(USDTAddrVKXcqO8, FOSTERAddrxakK4H6, initialRateLEmt81Q, initialPeriodDBzlONT, initialOwnerKJHsn6l, {from: accounts[4]});
		const _periodLPvw3PW = BigInt("1159")
		const amountdijvCZR = BigInt("704")
		const recipientJiwD9F = accounts[2]
		const accountmGvVM9v = accounts[2]
		const accountozxQ0nD = accounts[0]
		const newMinimumJUTmW8v = BigInt("347")
		const newBoss2sibRtZd = accounts[1]
		await contractyg5eZ8I.freezeAndTransfer.call(recipientJiwD9F, amountdijvCZR, _periodLPvw3PW, {from: accounts[4]});
		const nullZIb6eXT = await contractyg5eZ8I.allowanceUSDT.call(accountmGvVM9v, {from: accounts[2]});
		const nullHfuWud = await contractyg5eZ8I.allowanceFOSTER.call(accountozxQ0nD, {from: accounts[2]});
		await contractyg5eZ8I.setMinimum.call(newMinimumJUTmW8v, {from: accounts[3]});
		await contractyg5eZ8I.deposeBoss2.call(newBoss2sibRtZd, {from: accounts[4]});
		await contractyg5eZ8I.switchState.call({from: accounts[0]});

		await expect(contractyg5eZ8I.freezeAndTransfer.call(recipientJiwD9F, amountdijvCZR, _periodLPvw3PW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrkNDVD4 = accounts[1]
		const FOSTERAddrn5WqFz = accounts[2]
		const initialRateBTGga8H = BigInt("1366")
		const initialPeriodtDkr4K = BigInt("1478")
		const initialOwnervWyJTdP = accounts[2]
		const contractYpAhd3z = await Reseller.new(USDTAddrrkNDVD4, FOSTERAddrn5WqFz, initialRateBTGga8H, initialPeriodtDkr4K, initialOwnervWyJTdP, {from: accounts[3]});
		const newMinimumbrGAPRg = BigInt("452")
		const amountfB4CkZY = BigInt("996")
		await contractYpAhd3z.setMinimum.call(newMinimumbrGAPRg, {from: accounts[2]});
		const nullrXC3Ty = await contractYpAhd3z.getEstimation.call(amountfB4CkZY, {from: accounts[2]});

		assert.equal(nullrXC3Ty, 1360536)
	});

	it('test for Reseller', async () => {
		const USDTAddrlKdDlNk = accounts[0]
		const FOSTERAddrLWb0xuL = "0x0000000000000000000000000000000000000001"
		const initialRateCg8NgE = BigInt("1730")
		const initialPeriodXANfNKw = BigInt("1124")
		const initialOwner6livLj = accounts[3]
		const contractV1Okvj0 = await Reseller.new(USDTAddrlKdDlNk, FOSTERAddrLWb0xuL, initialRateCg8NgE, initialPeriodXANfNKw, initialOwner6livLj, {from: accounts[3]});
		const commentIFytj3V = "Qdut"
		const _ref5BAiCtCp = accounts[1]
		const _ref4T6xXl25 = accounts[3]
		const _ref3VFB470v = accounts[4]
		const _ref2DolESKk = accounts[1]
		const _ref1YISLvYC = accounts[2]
		const valuenm7E8rq = BigInt("107")
		const accounta1WXO0R = accounts[4]
		const newBoss3e8yherw = accounts[3]
		const newFeebz0sMys = BigInt("128")
		await contractV1Okvj0.purchase.call(valuenm7E8rq, _ref1YISLvYC, _ref2DolESKk, _ref3VFB470v, _ref4T6xXl25, _ref5BAiCtCp, commentIFytj3V, {from: accounts[4]});
		const nullYixOu1g = await contractV1Okvj0.balanceUSDT.call(accounta1WXO0R, {from: accounts[4]});
		await contractV1Okvj0.deposeBoss3.call(newBoss3e8yherw, {from: accounts[1]});
		await contractV1Okvj0.setFee.call(newFeebz0sMys, {from: accounts[4]});

		await expect(contractV1Okvj0.purchase.call(valuenm7E8rq, _ref1YISLvYC, _ref2DolESKk, _ref3VFB470v, _ref4T6xXl25, _ref5BAiCtCp, commentIFytj3V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGYnGkPu = accounts[0]
		const FOSTERAddrGFBlbtR = "0x0000000000000000000000000000000000000001"
		const initialRatejny81y1 = BigInt("1730")
		const initialPeriodmEyNGz = BigInt("1124")
		const initialOwnerTmGQeaI = accounts[3]
		const contractkIlfewZ = await Reseller.new(USDTAddrGYnGkPu, FOSTERAddrGFBlbtR, initialRatejny81y1, initialPeriodmEyNGz, initialOwnerTmGQeaI, {from: accounts[3]});
		const newBoss1htd8Cjp = accounts[4]
		const _ref5NEupR7V = accounts[5]
		const _ref4QsueFKn = accounts[1]
		const _ref3aw9lhY8 = accounts[1]
		const _ref2ied9d58 = accounts[5]
		const _ref1BuJqETU = accounts[4]
		const valueAJBRPNh = BigInt("1486")
		const commentjseFFbj = "Qdut"
		const _ref5nUv4vcv = accounts[1]
		const _ref4A6XABij = accounts[3]
		const _ref3DJAtyUN = accounts[4]
		const _ref2fnMP6DO = accounts[1]
		const _ref1YaXlShP = accounts[1]
		const valueXqeht0R = BigInt("107")
		const newBoss3G0KBLSt = accounts[3]
		const newFeedVmEs6Q = BigInt("128")
		await contractkIlfewZ.deposeBoss1.call(newBoss1htd8Cjp, {from: accounts[0]});
		await contractkIlfewZ.buy.call(valueAJBRPNh, _ref1BuJqETU, _ref2ied9d58, _ref3aw9lhY8, _ref4QsueFKn, _ref5NEupR7V, {from: accounts[1]});
		await contractkIlfewZ.purchase.call(valueXqeht0R, _ref1YaXlShP, _ref2fnMP6DO, _ref3DJAtyUN, _ref4A6XABij, _ref5nUv4vcv, commentjseFFbj, {from: accounts[4]});
		await contractkIlfewZ.deposeBoss3.call(newBoss3G0KBLSt, {from: accounts[1]});
		await contractkIlfewZ.setFee.call(newFeedVmEs6Q, {from: accounts[4]});

		await expect(contractkIlfewZ.deposeBoss1.call(newBoss1htd8Cjp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZB9WoBD = accounts[0]
		const FOSTERAddr2RvhGp = accounts[2]
		const initialRatete05qxI = BigInt("115")
		const initialPeriodayWW3ip = BigInt("60")
		const initialOwnerLtJ4Obw = accounts[4]
		const contractZuKYG9e = await Reseller.new(USDTAddrZB9WoBD, FOSTERAddr2RvhGp, initialRatete05qxI, initialPeriodayWW3ip, initialOwnerLtJ4Obw, {from: accounts[3]});
		const account7ocWEQ = accounts[0]
		const newFeedwB9JcT = BigInt("130")
		const newBoss2tSOg0QO = accounts[4]
		const nullNS129Z5 = await contractZuKYG9e.balanceUSDT.call(account7ocWEQ, {from: accounts[5]});
		await contractZuKYG9e.setFee.call(newFeedwB9JcT, {from: accounts[4]});
		await contractZuKYG9e.deposeBoss2.call(newBoss2tSOg0QO, {from: accounts[2]});

		await expect(contractZuKYG9e.balanceUSDT.call(account7ocWEQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDuD0JBz = accounts[3]
		const FOSTERAddrBDeBK0D = "0x0000000000000000000000000000000000000001"
		const initialRateZlhEHo1 = BigInt("1187")
		const initialPeriodjm992ZW = BigInt("1540")
		const initialOwnervwIxuuU = accounts[1]
		const contractdBG6772 = await Reseller.new(USDTAddrDuD0JBz, FOSTERAddrBDeBK0D, initialRateZlhEHo1, initialPeriodjm992ZW, initialOwnervwIxuuU, {from: accounts[5]});
		const newFeeveJr9Gr = BigInt("59")
		const _ref5RdDuYEp = accounts[3]
		const _ref4fTmTWFm = accounts[3]
		const _ref3vSFy9bO = accounts[2]
		const _ref2vMd7WHU = accounts[2]
		const _ref1L8VRGzx = accounts[1]
		const valuenKG6Akh = BigInt("1523")
		const newMinimumy1RQsaj = BigInt("729")
		await contractdBG6772.setFee.call(newFeeveJr9Gr, {from: accounts[0]});
		await contractdBG6772.buy.call(valuenKG6Akh, _ref1L8VRGzx, _ref2vMd7WHU, _ref3vSFy9bO, _ref4fTmTWFm, _ref5RdDuYEp, {from: accounts[3]});
		await contractdBG6772.setMinimum.call(newMinimumy1RQsaj, {from: accounts[0]});

		await expect(contractdBG6772.setFee.call(newFeeveJr9Gr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFP9SMG = accounts[3]
		const FOSTERAddrSusvMDG = "0x0000000000000000000000000000000000000001"
		const initialRateMhBCHWU = BigInt("905")
		const initialPeriodaFJvAGC = BigInt("533")
		const initialOwnerXtCqQJy = accounts[1]
		const contractehFWexC = await Reseller.new(USDTAddrFP9SMG, FOSTERAddrSusvMDG, initialRateMhBCHWU, initialPeriodaFJvAGC, initialOwnerXtCqQJy, {from: accounts[4]});
		const amountDkFlaCe = BigInt("1724")
		const accountvZBT2kV = accounts[2]
		const level5PsTHJ1X = BigInt("233")
		const level4NkDpalf = BigInt("240")
		const level3ZOZtPy = BigInt("190")
		const level2Qj4vMfO = BigInt("13")
		const level1tbK8o7O = BigInt("97")
		const amountcfZPhpa = BigInt("416")
		const accounty8LlLNZ = accounts[4]
		const nullVRTUDLb = await contractehFWexC.getEstimation.call(amountDkFlaCe, {from: accounts[5]});
		const nullaB6VQaj = await contractehFWexC.balanceFOSTER.call(accountvZBT2kV, {from: accounts[2]});
		await contractehFWexC.setRefBonus.call(level1tbK8o7O, level2Qj4vMfO, level3ZOZtPy, level4NkDpalf, level5PsTHJ1X, {from: accounts[4]});
		const nullwlVB4V4 = await contractehFWexC.getEstimation.call(amountcfZPhpa, {from: accounts[2]});
		const nullTOwVLAf = await contractehFWexC.balanceUSDT.call(accounty8LlLNZ, {from: accounts[1]});

		assert.equal(nullVRTUDLb, 1560220)
		await expect(contractehFWexC.balanceFOSTER.call(accountvZBT2kV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjIHLUU = "0x0000000000000000000000000000000000000001"
		const FOSTERAddriNcLLd3 = accounts[5]
		const initialRateoieGSLM = BigInt("1811")
		const initialPeriodoksLhVO = BigInt("61")
		const initialOwnerihlYZyR = accounts[5]
		const contracttciJBiW = await Reseller.new(USDTAddrjIHLUU, FOSTERAddriNcLLd3, initialRateoieGSLM, initialPeriodoksLhVO, initialOwnerihlYZyR, {from: accounts[4]});
		const accountnRoMSWZ = accounts[1]
		const newFeekFWpRa8 = BigInt("127")
		const newBoss3xY54kzx = accounts[0]
		const nulltr4QtDf = await contracttciJBiW.allowanceUSDT.call(accountnRoMSWZ, {from: accounts[4]});
		await contracttciJBiW.setFee.call(newFeekFWpRa8, {from: accounts[0]});
		await contracttciJBiW.deposeBoss3.call(newBoss3xY54kzx, {from: accounts[1]});

		await expect(contracttciJBiW.allowanceUSDT.call(accountnRoMSWZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqOuZ5pK = accounts[0]
		const FOSTERAddrYcsQhG = accounts[4]
		const initialRateEI3RLxE = BigInt("1960")
		const initialPeriodoxtS6G = BigInt("1657")
		const initialOwnerNHC9YTP = accounts[1]
		const contracttU6CHyw = await Reseller.new(USDTAddrqOuZ5pK, FOSTERAddrYcsQhG, initialRateEI3RLxE, initialPeriodoxtS6G, initialOwnerNHC9YTP, {from: accounts[0]});
		const newRatelkvt3pr = BigInt("138")
		const accountX7GRfpT = accounts[2]
		await contracttU6CHyw.switchState.call({from: accounts[4]});
		await contracttU6CHyw.setRate.call(newRatelkvt3pr, {from: accounts[5]});
		await contracttU6CHyw.switchState.call({from: accounts[3]});
		const nullqSmnfJg = await contracttU6CHyw.allowanceUSDT.call(accountX7GRfpT, {from: accounts[1]});

		await expect(contracttU6CHyw.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddre8I3HFk = accounts[5]
		const FOSTERAddre3gDdwS = accounts[5]
		const initialRatepLiF93j = BigInt("1804")
		const initialPeriodfippxPp = BigInt("1264")
		const initialOwnerbvWTGEr = accounts[2]
		const contractxHuAsLL = await Reseller.new(USDTAddre8I3HFk, FOSTERAddre3gDdwS, initialRatepLiF93j, initialPeriodfippxPp, initialOwnerbvWTGEr, {from: accounts[0]});
		const valueb677ZQD = BigInt("1197")
		const recipientN8UavuV = accounts[5]
		const ERC20TokenQTBSf0X = accounts[2]
		const newBoss2qILmUiX = accounts[4]
		const accountmKh0JD = accounts[4]
		const newRateKmb52O3 = BigInt("1673")
		const newPeriodmDsflYq = BigInt("891")
		await contractxHuAsLL.withdrawERC20.call(ERC20TokenQTBSf0X, recipientN8UavuV, valueb677ZQD, {from: accounts[4]});
		await contractxHuAsLL.deposeBoss2.call(newBoss2qILmUiX, {from: accounts[1]});
		const nullyV42RtI = await contractxHuAsLL.balanceUSDT.call(accountmKh0JD, {from: accounts[0]});
		await contractxHuAsLL.setRate.call(newRateKmb52O3, {from: accounts[3]});
		await contractxHuAsLL.setPeriod.call(newPeriodmDsflYq, {from: accounts[1]});

		await expect(contractxHuAsLL.withdrawERC20.call(ERC20TokenQTBSf0X, recipientN8UavuV, valueb677ZQD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYTNPwSq = accounts[5]
		const FOSTERAddraK1sgKl = accounts[1]
		const initialRatehdUuXx = BigInt("1757")
		const initialPeriodoSYQz5 = BigInt("190")
		const initialOwnerFKBT50q = accounts[2]
		const contractUkY0YEb = await Reseller.new(USDTAddrYTNPwSq, FOSTERAddraK1sgKl, initialRatehdUuXx, initialPeriodoSYQz5, initialOwnerFKBT50q, {from: accounts[2]});
		const accountEustmnA = accounts[2]
		const newFee2x5CI3 = BigInt("232")
		const commentAJS2Gtb = "hVETyRHm0XzGy5UpNofXIRUvrYijn9nUN6z382xDOefU49VuTCg8FWj"
		const _ref5DwQOoeB = "0x0000000000000000000000000000000000000001"
		const _ref4mxyMR8Q = accounts[4]
		const _ref3Nc177bg = accounts[1]
		const _ref2hLnsiry = accounts[3]
		const _ref1DAY89BQ = "0x0000000000000000000000000000000000000001"
		const valuetTCkYS0 = BigInt("1676")
		const _ref5hEtfdi8 = "0x0000000000000000000000000000000000000001"
		const _ref4PkYSoTm = accounts[0]
		const _ref3rv9OFTh = "0x0000000000000000000000000000000000000001"
		const _ref2GTatorH = accounts[3]
		const _ref1nIiuMN = accounts[4]
		const valueeGnK1F = BigInt("1404")
		const newPeriodGFMjPXO = BigInt("1480")
		const nullqJFPs9g = await contractUkY0YEb.allowanceFOSTER.call(accountEustmnA, {from: accounts[3]});
		await contractUkY0YEb.setFee.call(newFee2x5CI3, {from: accounts[4]});
		await contractUkY0YEb.purchase.call(valuetTCkYS0, _ref1DAY89BQ, _ref2hLnsiry, _ref3Nc177bg, _ref4mxyMR8Q, _ref5DwQOoeB, commentAJS2Gtb, {from: accounts[0]});
		await contractUkY0YEb.buy.call(valueeGnK1F, _ref1nIiuMN, _ref2GTatorH, _ref3rv9OFTh, _ref4PkYSoTm, _ref5hEtfdi8, {from: accounts[5]});
		await contractUkY0YEb.setPeriod.call(newPeriodGFMjPXO, {from: accounts[0]});

		await expect(contractUkY0YEb.allowanceFOSTER.call(accountEustmnA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjkqi3H = accounts[0]
		const FOSTERAddr31KBAW = accounts[4]
		const initialRateTLFyD3 = BigInt("1960")
		const initialPeriodhGxHTss = BigInt("1657")
		const initialOwnerxLZRgC7 = accounts[1]
		const contractLoFB9IQ = await Reseller.new(USDTAddrjkqi3H, FOSTERAddr31KBAW, initialRateTLFyD3, initialPeriodhGxHTss, initialOwnerxLZRgC7, {from: accounts[0]});
		const newRatePAHcsL = BigInt("138")
		const valueebCgrAq = BigInt("1628")
		const recipientbus42di = accounts[3]
		const ERC20TokenCgEuSJV = accounts[0]
		const _periodhSx3rCC = BigInt("873")
		const amountlIAgov7 = BigInt("1549")
		const recipientsbFu321 = accounts[3]
		const accountR7R5Txk = "0x0000000000000000000000000000000000000001"
		const accountRR2zlYl = accounts[5]
		const accountAxS7K6 = accounts[2]
		await contractLoFB9IQ.setRate.call(newRatePAHcsL, {from: accounts[5]});
		await contractLoFB9IQ.withdrawERC20.call(ERC20TokenCgEuSJV, recipientbus42di, valueebCgrAq, {from: accounts[0]});
		await contractLoFB9IQ.freezeAndTransfer.call(recipientsbFu321, amountlIAgov7, _periodhSx3rCC, {from: accounts[5]});
		await contractLoFB9IQ.switchState.call({from: accounts[3]});
		const nullLNIPre = await contractLoFB9IQ.allowanceUSDT.call(accountR7R5Txk, {from: accounts[1]});
		const nullI6KQOt = await contractLoFB9IQ.allowanceFOSTER.call(accountRR2zlYl, {from: accounts[0]});
		const nullJbCJXpH = await contractLoFB9IQ.allowanceUSDT.call(accountAxS7K6, {from: accounts[1]});

		await expect(contractLoFB9IQ.setRate.call(newRatePAHcsL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkaDvqzz = accounts[0]
		const FOSTERAddr9G1aNP = "0x0000000000000000000000000000000000000001"
		const initialRateqFxkmy5 = BigInt("1730")
		const initialPeriodlNKyhCB = BigInt("1124")
		const initialOwnervH63Y7O = accounts[3]
		const contractylwYvu = await Reseller.new(USDTAddrkaDvqzz, FOSTERAddr9G1aNP, initialRateqFxkmy5, initialPeriodlNKyhCB, initialOwnervH63Y7O, {from: accounts[3]});
		const newBoss3uLoQWUd = accounts[3]
		const _ref5GDiffXJ = accounts[2]
		const _ref4bzvKqHE = accounts[1]
		const _ref3wGVfEt = accounts[1]
		const _ref2hmha4Mg = accounts[4]
		const _ref1ci2dDNV = accounts[3]
		const valueBRl7tjY = BigInt("999")
		const accountiJmJXV = accounts[1]
		const commentmvxjl8n = "Qdut"
		const _ref5fMUfeLq = accounts[2]
		const _ref4kxC1dC2 = accounts[3]
		const _ref3LLbZrDy = accounts[4]
		const _ref2cqqViL = accounts[1]
		const _ref1DxeQ3WS = accounts[1]
		const valueC0FmdiX = BigInt("107")
		await contractylwYvu.deposeBoss3.call(newBoss3uLoQWUd, {from: "0x0000000000000000000000000000000000000001"});
		await contractylwYvu.buy.call(valueBRl7tjY, _ref1ci2dDNV, _ref2hmha4Mg, _ref3wGVfEt, _ref4bzvKqHE, _ref5GDiffXJ, {from: accounts[0]});
		const nullbKKEQYo = await contractylwYvu.balanceUSDT.call(accountiJmJXV, {from: "0x0000000000000000000000000000000000000001"});
		await contractylwYvu.purchase.call(valueC0FmdiX, _ref1DxeQ3WS, _ref2cqqViL, _ref3LLbZrDy, _ref4kxC1dC2, _ref5fMUfeLq, commentmvxjl8n, {from: accounts[4]});

		await expect(contractylwYvu.deposeBoss3.call(newBoss3uLoQWUd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDWlTU7v = accounts[0]
		const FOSTERAddrR0g3KV = "0x0000000000000000000000000000000000000001"
		const initialRates6ATNw7 = BigInt("1730")
		const initialPeriodmkh6ZKy = BigInt("1124")
		const initialOwnerKh9AXwc = accounts[3]
		const contractDtXzVtz = await Reseller.new(USDTAddrDWlTU7v, FOSTERAddrR0g3KV, initialRates6ATNw7, initialPeriodmkh6ZKy, initialOwnerKh9AXwc, {from: accounts[3]});
		const level57xmOem = BigInt("199")
		const level4w6TWjN1 = BigInt("71")
		const level3mDSTaoc = BigInt("131")
		const level2nWkJHfW = BigInt("69")
		const level1jGES7qe = BigInt("81")
		const valueovuHuu1 = BigInt("1972")
		const commentYlNDvDi = "Qdut"
		const _ref5nv3P8be = accounts[2]
		const _ref4E1m3MLu = accounts[4]
		const _ref3qdhWYLi = accounts[4]
		const _ref2TLKzL9L = accounts[1]
		const _ref1etpFPG = accounts[1]
		const valuev5n3yW = BigInt("107")
		await contractDtXzVtz.setRefBonus.call(level1jGES7qe, level2nWkJHfW, level3mDSTaoc, level4w6TWjN1, level57xmOem, {from: accounts[4]});
		await contractDtXzVtz.withdraw.call(valueovuHuu1, {from: accounts[4]});
		await contractDtXzVtz.purchase.call(valuev5n3yW, _ref1etpFPG, _ref2TLKzL9L, _ref3qdhWYLi, _ref4E1m3MLu, _ref5nv3P8be, commentYlNDvDi, {from: accounts[4]});

		await expect(contractDtXzVtz.setRefBonus.call(level1jGES7qe, level2nWkJHfW, level3mDSTaoc, level4w6TWjN1, level57xmOem, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryeLmd96 = accounts[1]
		const FOSTERAddrpMQci7i = "0x0000000000000000000000000000000000000001"
		const initialRateOt6k0BT = BigInt("1954")
		const initialPeriodomRSfOP = BigInt("989")
		const initialOwnerlVOYLt = accounts[1]
		const contractKw1p4Qs = await Reseller.new(USDTAddryeLmd96, FOSTERAddrpMQci7i, initialRateOt6k0BT, initialPeriodomRSfOP, initialOwnerlVOYLt, {from: accounts[2]});
		const newBoss3MHdHZEf = accounts[4]
		const newBoss1DxWCj8 = accounts[3]
		const newFeeu32J8ps = BigInt("51")
		const newBoss1zDVcUQ = accounts[1]
		const accountmiRgcq9 = accounts[2]
		const valueOrUZ6z8 = BigInt("173")
		await contractKw1p4Qs.deposeBoss3.call(newBoss3MHdHZEf, {from: accounts[1]});
		await contractKw1p4Qs.deposeBoss1.call(newBoss1DxWCj8, {from: accounts[1]});
		await contractKw1p4Qs.setFee.call(newFeeu32J8ps, {from: accounts[4]});
		await contractKw1p4Qs.deposeBoss1.call(newBoss1zDVcUQ, {from: accounts[5]});
		const null6AFZMK = await contractKw1p4Qs.balanceUSDT.call(accountmiRgcq9, {from: accounts[5]});
		await contractKw1p4Qs.withdraw.call(valueOrUZ6z8, {from: accounts[4]});

		await expect(contractKw1p4Qs.deposeBoss3.call(newBoss3MHdHZEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmnFn1lp = accounts[0]
		const FOSTERAddrKkmMfH9 = accounts[2]
		const initialRateWSNGU0q = BigInt("1196")
		const initialPeriodiWsPUaM = BigInt("424")
		const initialOwnerqmPKh1I = accounts[1]
		const contractxrCBC4G = await Reseller.new(USDTAddrmnFn1lp, FOSTERAddrKkmMfH9, initialRateWSNGU0q, initialPeriodiWsPUaM, initialOwnerqmPKh1I, {from: accounts[0]});
		const commentkEW2qPk = "kqxboYmMUNuXGSjDsrAxm4v9nlYhEgbtxJ3CqUedcPUxgJ6VwjaBuBFUZKWbuRmSk"
		const _ref5mWanfPA = accounts[2]
		const _ref4xiBkzO4 = accounts[5]
		const _ref3MgSBDlO = accounts[4]
		const _ref2VhfWqfB = accounts[0]
		const _ref1hE1nhjq = accounts[3]
		const valueNR1H9JX = BigInt("1229")
		const valuemgxGAxZ = BigInt("1038")
		const newMinimumnReFuf9 = BigInt("103")
		const newRateHW8LlSZ = BigInt("1032")
		const accountkYx7ysR = accounts[1]
		await contractxrCBC4G.purchase.call(valueNR1H9JX, _ref1hE1nhjq, _ref2VhfWqfB, _ref3MgSBDlO, _ref4xiBkzO4, _ref5mWanfPA, commentkEW2qPk, {from: accounts[1]});
		await contractxrCBC4G.withdraw.call(valuemgxGAxZ, {from: accounts[4]});
		await contractxrCBC4G.setMinimum.call(newMinimumnReFuf9, {from: accounts[1]});
		await contractxrCBC4G.setRate.call(newRateHW8LlSZ, {from: accounts[1]});
		await contractxrCBC4G.switchState.call({from: accounts[3]});
		const nullbbGlWv = await contractxrCBC4G.balanceUSDT.call(accountkYx7ysR, {from: accounts[3]});

		await expect(contractxrCBC4G.purchase.call(valueNR1H9JX, _ref1hE1nhjq, _ref2VhfWqfB, _ref3MgSBDlO, _ref4xiBkzO4, _ref5mWanfPA, commentkEW2qPk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQ2pAhpT = accounts[0]
		const FOSTERAddr1HQlPy = "0x0000000000000000000000000000000000000001"
		const initialRateCnJStyw = BigInt("1730")
		const initialPeriodrJUvKB8 = BigInt("1124")
		const initialOwnerrAd4bWW = accounts[3]
		const contractuEwvQjl = await Reseller.new(USDTAddrQ2pAhpT, FOSTERAddr1HQlPy, initialRateCnJStyw, initialPeriodrJUvKB8, initialOwnerrAd4bWW, {from: accounts[3]});
		const level5VJndd41 = BigInt("101")
		const level4YWSzV8a = BigInt("41")
		const level3kanY3G = BigInt("211")
		const level2W08LQJ4 = BigInt("2")
		const level1Ny8cwGs = BigInt("186")
		const newBoss4raKFWbC = accounts[4]
		const level5CmS6FGZ = BigInt("199")
		const level4jdOaH1E = BigInt("71")
		const level3v4IzJjN = BigInt("131")
		const level2AxJdDkV = BigInt("69")
		const level1E6BusMl = BigInt("81")
		const commentKVtoliC = "Rdut"
		const _ref5x2448tf = accounts[2]
		const _ref4Tv901g4 = accounts[4]
		const _ref3YTYdB9s = accounts[4]
		const _ref2hN69C7 = accounts[1]
		const _ref1vulAbOh = accounts[1]
		const valuemwTxrER = BigInt("107")
		await contractuEwvQjl.setRefBonus.call(level1Ny8cwGs, level2W08LQJ4, level3kanY3G, level4YWSzV8a, level5VJndd41, {from: accounts[3]});
		await contractuEwvQjl.deposeBoss4.call(newBoss4raKFWbC, {from: accounts[3]});
		await contractuEwvQjl.setRefBonus.call(level1E6BusMl, level2AxJdDkV, level3v4IzJjN, level4jdOaH1E, level5CmS6FGZ, {from: accounts[4]});
		await contractuEwvQjl.purchase.call(valuemwTxrER, _ref1vulAbOh, _ref2hN69C7, _ref3YTYdB9s, _ref4Tv901g4, _ref5x2448tf, commentKVtoliC, {from: accounts[4]});

		await expect(contractuEwvQjl.setRefBonus.call(level1Ny8cwGs, level2W08LQJ4, level3kanY3G, level4YWSzV8a, level5VJndd41, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUENwqIY = accounts[0]
		const FOSTERAddr8iC8hy = accounts[4]
		const initialRateGCIzjc = BigInt("1960")
		const initialPeriodGrmERRA = BigInt("1657")
		const initialOwnerDlmAlub = accounts[1]
		const contractRl6v6IL = await Reseller.new(USDTAddrUENwqIY, FOSTERAddr8iC8hy, initialRateGCIzjc, initialPeriodGrmERRA, initialOwnerDlmAlub, {from: accounts[0]});
		const _periodJpBIZc = BigInt("1438")
		const amountfu82dq6 = BigInt("505")
		const recipientL4mj5cJ = accounts[4]
		const valueY4yhzqv = BigInt("1310")
		const recipientdHja1XX = accounts[0]
		const ERC20TokenCuSN7uO = accounts[3]
		await contractRl6v6IL.freezeAndTransfer.call(recipientL4mj5cJ, amountfu82dq6, _periodJpBIZc, {from: accounts[1]});
		await contractRl6v6IL.withdrawERC20.call(ERC20TokenCuSN7uO, recipientdHja1XX, valueY4yhzqv, {from: accounts[2]});
		await contractRl6v6IL.switchState.call({from: accounts[4]});

		await expect(contractRl6v6IL.freezeAndTransfer.call(recipientL4mj5cJ, amountfu82dq6, _periodJpBIZc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtKlTVMv = accounts[3]
		const FOSTERAddrOdDzoDd = "0x0000000000000000000000000000000000000001"
		const initialRatefwzOSs3 = BigInt("1187")
		const initialPeriodG5HMJSn = BigInt("1540")
		const initialOwnerwz6k1Vj = accounts[1]
		const contractDItY7DE = await Reseller.new(USDTAddrtKlTVMv, FOSTERAddrOdDzoDd, initialRatefwzOSs3, initialPeriodG5HMJSn, initialOwnerwz6k1Vj, {from: accounts[5]});
		const newRateY41NIaa = BigInt("468")
		const valueWm29hOc = BigInt("488")
		const recipientDBjtSfw = accounts[2]
		const ERC20TokenctoLKVe = accounts[1]
		await contractDItY7DE.setRate.call(newRateY41NIaa, {from: accounts[1]});
		await contractDItY7DE.withdrawERC20.call(ERC20TokenctoLKVe, recipientDBjtSfw, valueWm29hOc, {from: accounts[4]});

		await expect(contractDItY7DE.setRate.call(newRateY41NIaa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQDtKBM = accounts[5]
		const FOSTERAddrY4uKqqp = accounts[5]
		const initialRateE1sjTY8 = BigInt("1804")
		const initialPeriodf3g96MZ = BigInt("1264")
		const initialOwnermemBP2H = accounts[2]
		const contractbAggQ3 = await Reseller.new(USDTAddrQDtKBM, FOSTERAddrY4uKqqp, initialRateE1sjTY8, initialPeriodf3g96MZ, initialOwnermemBP2H, {from: accounts[0]});
		const newBoss2BKN8hCq = accounts[7]
		await contractbAggQ3.switchState.call({from: accounts[2]});
		await contractbAggQ3.deposeBoss2.call(newBoss2BKN8hCq, {from: accounts[1]});

		await expect(contractbAggQ3.switchState.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroo0JpE8 = accounts[5]
		const FOSTERAddrzkZ1K2l = accounts[5]
		const initialRatefb4BsrC = BigInt("1804")
		const initialPeriodrwiMRN = BigInt("1264")
		const initialOwnerGKhJkgl = accounts[2]
		const contractitVkjB6 = await Reseller.new(USDTAddroo0JpE8, FOSTERAddrzkZ1K2l, initialRatefb4BsrC, initialPeriodrwiMRN, initialOwnerGKhJkgl, {from: accounts[0]});
		const newPeriodVD9OqO = BigInt("1688")
		const newBoss2yslgsfi = accounts[7]
		await contractitVkjB6.setPeriod.call(newPeriodVD9OqO, {from: accounts[2]});
		await contractitVkjB6.deposeBoss2.call(newBoss2yslgsfi, {from: accounts[1]});

		await expect(contractitVkjB6.setPeriod.call(newPeriodVD9OqO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
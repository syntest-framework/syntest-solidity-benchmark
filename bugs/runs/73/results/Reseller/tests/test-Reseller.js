const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddr4hPsZl = accounts[1]
		const FOSTERAddrQDucfPb = accounts[4]
		const initialRaterOSBPHk = BigInt("834")
		const initialPeriodGoBO1r = BigInt("26")
		const initialOwneraWXOTuj = accounts[2]
		const contractvGcVRY1 = await Reseller.new(USDTAddr4hPsZl, FOSTERAddrQDucfPb, initialRaterOSBPHk, initialPeriodGoBO1r, initialOwneraWXOTuj, {from: accounts[5]});
		const _periodsXzh3N5 = BigInt("1494")
		const amounts6k240n = BigInt("928")
		const recipientaydgPhJ = accounts[1]
		const accountGImvion = accounts[3]
		const newMinimumbGyum6o = BigInt("1363")
		await contractvGcVRY1.freezeAndTransfer.call(recipientaydgPhJ, amounts6k240n, _periodsXzh3N5, {from: accounts[1]});
		const nulliXNklAh = await contractvGcVRY1.balanceFOSTER.call(accountGImvion, {from: accounts[0]});
		await contractvGcVRY1.setMinimum.call(newMinimumbGyum6o, {from: accounts[1]});

		await expect(contractvGcVRY1.freezeAndTransfer.call(recipientaydgPhJ, amounts6k240n, _periodsXzh3N5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXsspq8t = accounts[0]
		const FOSTERAddrTMfwrnn = accounts[4]
		const initialRatexVUGz8e = BigInt("1132")
		const initialPeriodm9otki7 = BigInt("864")
		const initialOwnerZmZuus = accounts[0]
		const contractacYvRPs = await Reseller.new(USDTAddrXsspq8t, FOSTERAddrTMfwrnn, initialRatexVUGz8e, initialPeriodm9otki7, initialOwnerZmZuus, {from: accounts[0]});
		const newRatewUQNQ6L = BigInt("1836")
		const newBoss4J16Kts = accounts[2]
		const valuesztHjO1 = BigInt("1827")
		const recipientiQFG7ay = accounts[2]
		const ERC20TokenPKGT8ZH = accounts[4]
		const valueikFtQ7S = BigInt("646")
		await contractacYvRPs.switchState.call({from: accounts[4]});
		await contractacYvRPs.setRate.call(newRatewUQNQ6L, {from: accounts[0]});
		await contractacYvRPs.deposeBoss4.call(newBoss4J16Kts, {from: accounts[3]});
		await contractacYvRPs.withdrawERC20.call(ERC20TokenPKGT8ZH, recipientiQFG7ay, valuesztHjO1, {from: accounts[2]});
		await contractacYvRPs.withdraw.call(valueikFtQ7S, {from: accounts[5]});

		await expect(contractacYvRPs.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrw6pTyAD = accounts[0]
		const FOSTERAddrRjVCVbP = accounts[2]
		const initialRatem5QKrL9 = BigInt("1832")
		const initialPeriodRceqjX5 = BigInt("1294")
		const initialOwnerzqWYz8v = accounts[0]
		const contractXugyw8k = await Reseller.new(USDTAddrw6pTyAD, FOSTERAddrRjVCVbP, initialRatem5QKrL9, initialPeriodRceqjX5, initialOwnerzqWYz8v, {from: accounts[4]});
		const _periodFeKNvk7 = BigInt("1768")
		const amountSZx7vh3 = BigInt("407")
		const recipientkIrFhy = accounts[3]
		const accountTK5Op8q = accounts[4]
		const newBoss4FqJ4Ew = accounts[0]
		const _periodVjOf0cv = BigInt("441")
		const amountGNoPVD6 = BigInt("319")
		const recipientSEw6WAf = accounts[4]
		await contractXugyw8k.freezeAndTransfer.call(recipientkIrFhy, amountSZx7vh3, _periodFeKNvk7, {from: accounts[0]});
		const nullavdY17 = await contractXugyw8k.allowanceUSDT.call(accountTK5Op8q, {from: "0x0000000000000000000000000000000000000001"});
		await contractXugyw8k.deposeBoss4.call(newBoss4FqJ4Ew, {from: accounts[3]});
		await contractXugyw8k.freezeAndTransfer.call(recipientSEw6WAf, amountGNoPVD6, _periodVjOf0cv, {from: accounts[0]});

		await expect(contractXugyw8k.freezeAndTransfer.call(recipientkIrFhy, amountSZx7vh3, _periodFeKNvk7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrl1o7zYF = accounts[3]
		const FOSTERAddrgvrLMMB = accounts[3]
		const initialRatep1NeYLm = BigInt("84")
		const initialPeriodZgSPy9i = BigInt("151")
		const initialOwnerrnT26d9 = accounts[3]
		const contractx0WF76o = await Reseller.new(USDTAddrl1o7zYF, FOSTERAddrgvrLMMB, initialRatep1NeYLm, initialPeriodZgSPy9i, initialOwnerrnT26d9, {from: "0x0000000000000000000000000000000000000001"});
		const newPeriodic9zTu1 = BigInt("978")
		const newBoss1bI4FFn = accounts[1]
		await contractx0WF76o.setPeriod.call(newPeriodic9zTu1, {from: accounts[2]});
		await contractx0WF76o.deposeBoss1.call(newBoss1bI4FFn, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddryaU4Sda = accounts[0]
		const FOSTERAddrlh4SM7B = accounts[4]
		const initialRateDZKldko = BigInt("615")
		const initialPeriodga9QREr = BigInt("498")
		const initialOwnerdqB6BUc = accounts[5]
		const contractu27F4x = await Reseller.new(USDTAddryaU4Sda, FOSTERAddrlh4SM7B, initialRateDZKldko, initialPeriodga9QREr, initialOwnerdqB6BUc, {from: accounts[2]});
		const accountLbaOz3t = accounts[0]
		const newFeeRxIQfa7 = BigInt("134")
		const accountEuxDdK = accounts[4]
		const commentg0ghEMN = "BhuwO77wEYVh2mOr0rj2q3u3m8HCbAXTn2YpcFTBQ36jzxN3h8pFFQ8FAyrzszTms24sucp"
		const _ref5KjbMON7 = accounts[3]
		const _ref4PrhmMq = accounts[2]
		const _ref3W3sNwxl = accounts[4]
		const _ref2MPVbQWj = accounts[3]
		const _ref1Q20LyUL = accounts[3]
		const valueDeTv6B9 = BigInt("946")
		const nullPCO5cBu = await contractu27F4x.allowanceUSDT.call(accountLbaOz3t, {from: accounts[3]});
		await contractu27F4x.setFee.call(newFeeRxIQfa7, {from: "0x0000000000000000000000000000000000000001"});
		const nullGRVYsLJ = await contractu27F4x.allowanceUSDT.call(accountEuxDdK, {from: accounts[2]});
		await contractu27F4x.purchase.call(valueDeTv6B9, _ref1Q20LyUL, _ref2MPVbQWj, _ref3W3sNwxl, _ref4PrhmMq, _ref5KjbMON7, commentg0ghEMN, {from: accounts[1]});

		await expect(contractu27F4x.allowanceUSDT.call(accountLbaOz3t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsdb182 = accounts[0]
		const FOSTERAddrnUNWi9g = accounts[4]
		const initialRateEbwCUqT = BigInt("1642")
		const initialPeriodH0siNS3 = BigInt("1484")
		const initialOwneripFgp9E = "0x0000000000000000000000000000000000000001"
		const contractnTLuE7w = await Reseller.new(USDTAddrsdb182, FOSTERAddrnUNWi9g, initialRateEbwCUqT, initialPeriodH0siNS3, initialOwneripFgp9E, {from: accounts[5]});
		const accounts3hn75O = accounts[1]
		const accounto24578q = accounts[1]
		const _periodioIoZGP = BigInt("753")
		const amountMZSd3dj = BigInt("962")
		const recipientJdvEvOc = accounts[2]
		const newRateZVmXMSY = BigInt("1597")
		const newBoss1YKqjtUZ = accounts[5]
		const newBoss1Gws4XO = accounts[0]
		const nullkrcsRVx = await contractnTLuE7w.balanceUSDT.call(accounts3hn75O, {from: accounts[1]});
		const null8VNgGS = await contractnTLuE7w.balanceUSDT.call(accounto24578q, {from: accounts[2]});
		await contractnTLuE7w.freezeAndTransfer.call(recipientJdvEvOc, amountMZSd3dj, _periodioIoZGP, {from: accounts[4]});
		await contractnTLuE7w.setRate.call(newRateZVmXMSY, {from: accounts[1]});
		await contractnTLuE7w.deposeBoss1.call(newBoss1YKqjtUZ, {from: accounts[3]});
		await contractnTLuE7w.deposeBoss1.call(newBoss1Gws4XO, {from: accounts[2]});

		await expect(contractnTLuE7w.balanceUSDT.call(accounts3hn75O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr0nUDlm = accounts[2]
		const FOSTERAddrNvUKf61 = accounts[1]
		const initialRatelhXmsTo = BigInt("696")
		const initialPeriodszElgIJ = BigInt("2026")
		const initialOwnerwrnl3F = "0x0000000000000000000000000000000000000001"
		const contractUpLuPrx = await Reseller.new(USDTAddr0nUDlm, FOSTERAddrNvUKf61, initialRatelhXmsTo, initialPeriodszElgIJ, initialOwnerwrnl3F, {from: accounts[1]});
		const commentdg1tm4R = "uaLijlDGvinkgnCSsXNHCAWgsRZ5DTN719YnqnD3rdQs52TTg7UKQoFcaEttIEf0KtxCnM5mJHjC4E1v6js2nIc76"
		const _ref5t25rO9W = accounts[3]
		const _ref4FvDYvZH = accounts[1]
		const _ref3Laz9oVJ = accounts[3]
		const _ref2g2XpgtZ = accounts[1]
		const _ref1SeHYnEy = accounts[1]
		const valuemPoemTs = BigInt("821")
		const commentBtGsu2D = "a1HPQKHwJy"
		const _ref5vagr6y8 = accounts[2]
		const _ref4xJ97MYJ = accounts[1]
		const _ref3auc3vKJ = accounts[2]
		const _ref2Cyqza9n = accounts[2]
		const _ref1Dojdda = accounts[4]
		const valueHi61nK = BigInt("916")
		const newPeriodtDMfCjU = BigInt("259")
		const _periodysBvwNj = BigInt("693")
		const amountOpMNB9 = BigInt("1609")
		const recipientjEJWOMq = accounts[2]
		await contractUpLuPrx.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractUpLuPrx.purchase.call(valuemPoemTs, _ref1SeHYnEy, _ref2g2XpgtZ, _ref3Laz9oVJ, _ref4FvDYvZH, _ref5t25rO9W, commentdg1tm4R, {from: accounts[1]});
		await contractUpLuPrx.purchase.call(valueHi61nK, _ref1Dojdda, _ref2Cyqza9n, _ref3auc3vKJ, _ref4xJ97MYJ, _ref5vagr6y8, commentBtGsu2D, {from: accounts[5]});
		await contractUpLuPrx.setPeriod.call(newPeriodtDMfCjU, {from: accounts[2]});
		await contractUpLuPrx.freezeAndTransfer.call(recipientjEJWOMq, amountOpMNB9, _periodysBvwNj, {from: accounts[0]});

		await expect(contractUpLuPrx.switchState.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsrUa4qk = accounts[1]
		const FOSTERAddrhPGRQ5G = accounts[4]
		const initialRatezqIsHeJ = BigInt("498")
		const initialPeriodThrR0N6 = BigInt("1863")
		const initialOwnergc74jBT = accounts[4]
		const contractnvugDJb = await Reseller.new(USDTAddrsrUa4qk, FOSTERAddrhPGRQ5G, initialRatezqIsHeJ, initialPeriodThrR0N6, initialOwnergc74jBT, {from: accounts[1]});
		const valueeSRIaWJ = BigInt("1122")
		const recipientaId0Z5Z = accounts[2]
		const ERC20TokenylxwlA0 = "0x0000000000000000000000000000000000000001"
		const accountoAGsFzM = "0x0000000000000000000000000000000000000001"
		const _periodBcGSvvq = BigInt("1429")
		const amountPvEF7cW = BigInt("1652")
		const recipientpSViBF6 = accounts[4]
		const valueLBqNMe1 = BigInt("1902")
		const newBoss2SutG8Jw = accounts[0]
		await contractnvugDJb.withdrawERC20.call(ERC20TokenylxwlA0, recipientaId0Z5Z, valueeSRIaWJ, {from: "0x0000000000000000000000000000000000000001"});
		await contractnvugDJb.switchState.call({from: accounts[2]});
		const nullnvqRUtD = await contractnvugDJb.allowanceUSDT.call(accountoAGsFzM, {from: accounts[4]});
		await contractnvugDJb.freezeAndTransfer.call(recipientpSViBF6, amountPvEF7cW, _periodBcGSvvq, {from: accounts[0]});
		await contractnvugDJb.withdraw.call(valueLBqNMe1, {from: accounts[2]});
		await contractnvugDJb.deposeBoss2.call(newBoss2SutG8Jw, {from: accounts[0]});

		await expect(contractnvugDJb.withdrawERC20.call(ERC20TokenylxwlA0, recipientaId0Z5Z, valueeSRIaWJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKqqEcDb = accounts[1]
		const FOSTERAddr1ZeZhA = accounts[1]
		const initialRateYzT42vY = BigInt("998")
		const initialPeriodVEYO7dV = BigInt("1790")
		const initialOwnerhY0Btac = "0x0000000000000000000000000000000000000001"
		const contractWqQPwrR = await Reseller.new(USDTAddrKqqEcDb, FOSTERAddr1ZeZhA, initialRateYzT42vY, initialPeriodVEYO7dV, initialOwnerhY0Btac, {from: accounts[5]});
		const level5JIekuG = BigInt("41")
		const level4iuC0UIJ = BigInt("196")
		const level3hIm85O = BigInt("91")
		const level2zPRYEC = BigInt("67")
		const level1F6aieyR = BigInt("170")
		const newRatesM5wS0r = BigInt("845")
		await contractWqQPwrR.setRefBonus.call(level1F6aieyR, level2zPRYEC, level3hIm85O, level4iuC0UIJ, level5JIekuG, {from: accounts[1]});
		await contractWqQPwrR.setRate.call(newRatesM5wS0r, {from: accounts[5]});

		await expect(contractWqQPwrR.setRefBonus.call(level1F6aieyR, level2zPRYEC, level3hIm85O, level4iuC0UIJ, level5JIekuG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcAA5TFo = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrVsWARaI = accounts[5]
		const initialRate1yNEhV = BigInt("958")
		const initialPeriodJbMF2o = BigInt("1709")
		const initialOwnerwJ17fvw = accounts[4]
		const contractsT3hBJr = await Reseller.new(USDTAddrcAA5TFo, FOSTERAddrVsWARaI, initialRate1yNEhV, initialPeriodJbMF2o, initialOwnerwJ17fvw, {from: accounts[1]});
		const accountQuE4Zn = accounts[1]
		const level5eei4hXv = BigInt("209")
		const level4pEnMIyQ = BigInt("188")
		const level3rvo7nrA = BigInt("126")
		const level2RojiRZ = BigInt("83")
		const level1HSftDfA = BigInt("76")
		const amountUiD9SRK = BigInt("632")
		const newFeePDOENg = BigInt("151")
		const accountY1lblb = accounts[2]
		const nullxMqovFJ = await contractsT3hBJr.allowanceFOSTER.call(accountQuE4Zn, {from: accounts[1]});
		await contractsT3hBJr.setRefBonus.call(level1HSftDfA, level2RojiRZ, level3rvo7nrA, level4pEnMIyQ, level5eei4hXv, {from: accounts[0]});
		const nullGtdWUC = await contractsT3hBJr.getEstimation.call(amountUiD9SRK, {from: accounts[1]});
		await contractsT3hBJr.setFee.call(newFeePDOENg, {from: accounts[1]});
		const nullM0lNY7A = await contractsT3hBJr.allowanceFOSTER.call(accountY1lblb, {from: accounts[0]});

		await expect(contractsT3hBJr.allowanceFOSTER.call(accountQuE4Zn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPokO0Wh = accounts[2]
		const FOSTERAddrKYBS9DA = accounts[1]
		const initialRatejpQb9Cx = BigInt("296")
		const initialPeriodWQstAne = BigInt("126")
		const initialOwnerQmzzVDA = accounts[4]
		const contractVFBk9TA = await Reseller.new(USDTAddrPokO0Wh, FOSTERAddrKYBS9DA, initialRatejpQb9Cx, initialPeriodWQstAne, initialOwnerQmzzVDA, {from: accounts[2]});
		const newBoss3preXF8r = accounts[2]
		const accountD5nu1G = accounts[2]
		const valuejpnTMsk = BigInt("1892")
		await contractVFBk9TA.deposeBoss3.call(newBoss3preXF8r, {from: accounts[4]});
		const null9X5mpJ = await contractVFBk9TA.balanceUSDT.call(accountD5nu1G, {from: accounts[3]});
		await contractVFBk9TA.withdraw.call(valuejpnTMsk, {from: accounts[1]});

		await expect(contractVFBk9TA.deposeBoss3.call(newBoss3preXF8r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBex9cg = accounts[0]
		const FOSTERAddrOg4Ofv = accounts[2]
		const initialRaterUNeRjr = BigInt("1886")
		const initialPeriodLsYjNT = BigInt("643")
		const initialOwnerc7rZMp4 = accounts[2]
		const contractwRt4Ik0 = await Reseller.new(USDTAddrBex9cg, FOSTERAddrOg4Ofv, initialRaterUNeRjr, initialPeriodLsYjNT, initialOwnerc7rZMp4, {from: accounts[4]});
		const newBoss1aKm7KO = accounts[3]
		const newBoss19ssRj1 = accounts[2]
		const newBoss1UIdlknE = accounts[1]
		await contractwRt4Ik0.deposeBoss1.call(newBoss1aKm7KO, {from: "0x0000000000000000000000000000000000000001"});
		await contractwRt4Ik0.deposeBoss1.call(newBoss19ssRj1, {from: accounts[1]});
		await contractwRt4Ik0.deposeBoss1.call(newBoss1UIdlknE, {from: accounts[5]});

		await expect(contractwRt4Ik0.deposeBoss1.call(newBoss1aKm7KO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbSw3USj = accounts[2]
		const FOSTERAddrEwym88Y = accounts[3]
		const initialRateAamHuGY = BigInt("676")
		const initialPeriodauQmlGv = BigInt("426")
		const initialOwnerRBhdZqr = accounts[0]
		const contractmPmlH6q = await Reseller.new(USDTAddrbSw3USj, FOSTERAddrEwym88Y, initialRateAamHuGY, initialPeriodauQmlGv, initialOwnerRBhdZqr, {from: accounts[5]});
		const newBoss2NujmhI0 = accounts[0]
		const accountYSZsk6 = "0x0000000000000000000000000000000000000001"
		await contractmPmlH6q.deposeBoss2.call(newBoss2NujmhI0, {from: accounts[2]});
		const nullG5Yz81h = await contractmPmlH6q.allowanceUSDT.call(accountYSZsk6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractmPmlH6q.deposeBoss2.call(newBoss2NujmhI0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfaW9ARZ = accounts[3]
		const FOSTERAddrLbu6OiT = accounts[0]
		const initialRateTBFq6y = BigInt("1689")
		const initialPeriodrz41UDw = BigInt("1452")
		const initialOwnermQ2riih = accounts[0]
		const contractCW9nDHN = await Reseller.new(USDTAddrfaW9ARZ, FOSTERAddrLbu6OiT, initialRateTBFq6y, initialPeriodrz41UDw, initialOwnermQ2riih, {from: accounts[0]});
		const newRatejmql3Ks = BigInt("1861")
		const valuep2e6sDt = BigInt("1219")
		const recipientfoybJI9 = accounts[2]
		const ERC20TokenbKCKgZB = accounts[3]
		const newBoss2n29rt9 = accounts[4]
		const accountfKWaxz = accounts[0]
		const newRatec5ze0WU = BigInt("385")
		await contractCW9nDHN.setRate.call(newRatejmql3Ks, {from: accounts[0]});
		await contractCW9nDHN.withdrawERC20.call(ERC20TokenbKCKgZB, recipientfoybJI9, valuep2e6sDt, {from: accounts[2]});
		await contractCW9nDHN.deposeBoss2.call(newBoss2n29rt9, {from: "0x0000000000000000000000000000000000000001"});
		const nullx9uxsgS = await contractCW9nDHN.balanceUSDT.call(accountfKWaxz, {from: accounts[0]});
		await contractCW9nDHN.setRate.call(newRatec5ze0WU, {from: accounts[4]});

		await expect(contractCW9nDHN.setRate.call(newRatejmql3Ks, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvO9EbAy = accounts[2]
		const FOSTERAddrNxwfDE1 = accounts[3]
		const initialRatePMySCYZ = BigInt("606")
		const initialPeriodAK7TIPq = BigInt("1095")
		const initialOwnerXdPpODt = accounts[4]
		const contracteZgvccC = await Reseller.new(USDTAddrvO9EbAy, FOSTERAddrNxwfDE1, initialRatePMySCYZ, initialPeriodAK7TIPq, initialOwnerXdPpODt, {from: accounts[4]});
		const newBoss4kVFDCY2 = accounts[0]
		const accountpTBhis = accounts[4]
		const newBoss2l8M0GmZ = accounts[0]
		await contracteZgvccC.deposeBoss4.call(newBoss4kVFDCY2, {from: accounts[4]});
		const nullc4kNGbl = await contracteZgvccC.balanceFOSTER.call(accountpTBhis, {from: accounts[1]});
		await contracteZgvccC.deposeBoss2.call(newBoss2l8M0GmZ, {from: accounts[4]});

		await expect(contracteZgvccC.deposeBoss4.call(newBoss4kVFDCY2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjU4KKF4 = accounts[4]
		const FOSTERAddrifKzDr = accounts[1]
		const initialRateWhopavI = BigInt("812")
		const initialPeriodkUk1Eff = BigInt("1519")
		const initialOwnerEH7bzJw = accounts[4]
		const contractUOXAfmY = await Reseller.new(USDTAddrjU4KKF4, FOSTERAddrifKzDr, initialRateWhopavI, initialPeriodkUk1Eff, initialOwnerEH7bzJw, {from: accounts[1]});
		const newFeegVbqgZz = BigInt("4")
		await contractUOXAfmY.setFee.call(newFeegVbqgZz, {from: accounts[0]});
		await contractUOXAfmY.switchState.call({from: accounts[1]});

		await expect(contractUOXAfmY.setFee.call(newFeegVbqgZz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcxpTLPC = accounts[2]
		const FOSTERAddrBbWUXID = accounts[2]
		const initialRateS93Qdn = BigInt("641")
		const initialPeriodVXM13cj = BigInt("307")
		const initialOwner5P9RGo = accounts[0]
		const contractGEm7yA = await Reseller.new(USDTAddrcxpTLPC, FOSTERAddrBbWUXID, initialRateS93Qdn, initialPeriodVXM13cj, initialOwner5P9RGo, {from: accounts[3]});
		const valueiqN7eAu = BigInt("114")
		const newRatecOVCEKe = BigInt("1701")
		const newBoss4zwHeurR = accounts[2]
		await contractGEm7yA.withdraw.call(valueiqN7eAu, {from: "0x0000000000000000000000000000000000000001"});
		await contractGEm7yA.setRate.call(newRatecOVCEKe, {from: "0x0000000000000000000000000000000000000001"});
		await contractGEm7yA.deposeBoss4.call(newBoss4zwHeurR, {from: accounts[4]});

		await expect(contractGEm7yA.withdraw.call(valueiqN7eAu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLOAkPJ9 = accounts[2]
		const FOSTERAddrq6rQBL8 = accounts[3]
		const initialRaterE9yqts = BigInt("86")
		const initialPeriodqpwiLZU = BigInt("1251")
		const initialOwnerlReFzE = accounts[1]
		const contractkvKlsS8 = await Reseller.new(USDTAddrLOAkPJ9, FOSTERAddrq6rQBL8, initialRaterE9yqts, initialPeriodqpwiLZU, initialOwnerlReFzE, {from: accounts[0]});
		const amountwAWHctU = BigInt("170")
		const newMinimumeJv1nzJ = BigInt("395")
		const accountjfP6JSS = accounts[2]
		const nullNxzjyqL = await contractkvKlsS8.getEstimation.call(amountwAWHctU, {from: accounts[0]});
		await contractkvKlsS8.setMinimum.call(newMinimumeJv1nzJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullRyTlkBx = await contractkvKlsS8.allowanceFOSTER.call(accountjfP6JSS, {from: accounts[1]});

		assert.equal(nullNxzjyqL, 14620)
		await expect(contractkvKlsS8.setMinimum.call(newMinimumeJv1nzJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHlY7xxy = accounts[2]
		const FOSTERAddrLGIqiok = accounts[2]
		const initialRaterAhIhqd = BigInt("1363")
		const initialPeriodrZwBGHA = BigInt("787")
		const initialOwnerYiRiAh4 = accounts[0]
		const contractOtuQZ11 = await Reseller.new(USDTAddrHlY7xxy, FOSTERAddrLGIqiok, initialRaterAhIhqd, initialPeriodrZwBGHA, initialOwnerYiRiAh4, {from: accounts[1]});
		const newPeriodMNmC5NA = BigInt("606")
		const newBoss2BovsUED = accounts[4]
		const newMinimumCvcc0qC = BigInt("303")
		await contractOtuQZ11.setPeriod.call(newPeriodMNmC5NA, {from: accounts[3]});
		await contractOtuQZ11.deposeBoss2.call(newBoss2BovsUED, {from: accounts[0]});
		await contractOtuQZ11.setMinimum.call(newMinimumCvcc0qC, {from: accounts[0]});

		await expect(contractOtuQZ11.setPeriod.call(newPeriodMNmC5NA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcVsiLU8 = accounts[1]
		const FOSTERAddrS0Yfl8A = "0x0000000000000000000000000000000000000001"
		const initialRatexowu7lf = BigInt("108")
		const initialPeriodkkxaV2p = BigInt("843")
		const initialOwnervHNwiZ = accounts[5]
		const contractOZ6PV9 = await Reseller.new(USDTAddrcVsiLU8, FOSTERAddrS0Yfl8A, initialRatexowu7lf, initialPeriodkkxaV2p, initialOwnervHNwiZ, {from: accounts[4]});
		const _ref5Vj9Lfmg = accounts[0]
		const _ref4jmjpoG8 = accounts[3]
		const _ref3Kh5J1ix = accounts[0]
		const _ref2eeruQ21 = "0x0000000000000000000000000000000000000001"
		const _ref1zlZZbfU = accounts[1]
		const valuetWZhWLf = BigInt("1924")
		const newMinimumKVCbWn = BigInt("1653")
		const newMinimumyFLDyby = BigInt("1461")
		const newMinimumhoY4jVI = BigInt("1143")
		const valuerX2PsGR = BigInt("692")
		await contractOZ6PV9.buy.call(valuetWZhWLf, _ref1zlZZbfU, _ref2eeruQ21, _ref3Kh5J1ix, _ref4jmjpoG8, _ref5Vj9Lfmg, {from: accounts[4]});
		await contractOZ6PV9.setMinimum.call(newMinimumKVCbWn, {from: "0x0000000000000000000000000000000000000001"});
		await contractOZ6PV9.setMinimum.call(newMinimumyFLDyby, {from: accounts[4]});
		await contractOZ6PV9.setMinimum.call(newMinimumhoY4jVI, {from: accounts[0]});
		await contractOZ6PV9.withdraw.call(valuerX2PsGR, {from: accounts[0]});
		await contractOZ6PV9.switchState.call({from: accounts[4]});

		await expect(contractOZ6PV9.buy.call(valuetWZhWLf, _ref1zlZZbfU, _ref2eeruQ21, _ref3Kh5J1ix, _ref4jmjpoG8, _ref5Vj9Lfmg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
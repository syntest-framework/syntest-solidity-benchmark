const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrLE6co1Y = accounts[2]
		const FOSTERAddrUIpul4r = "0x0000000000000000000000000000000000000001"
		const initialRateHYX6ZCA = BigInt("804")
		const initialPeriodGHpPliN = BigInt("1743")
		const initialOwnermXtaF3 = "0x0000000000000000000000000000000000000001"
		const contractfLtmqKM = await Reseller.new(USDTAddrLE6co1Y, FOSTERAddrUIpul4r, initialRateHYX6ZCA, initialPeriodGHpPliN, initialOwnermXtaF3, {from: accounts[5]});
		const valuerkMlQzP = BigInt("1861")
		const newBoss4lffzCEc = accounts[0]
		const valuebj3CDcc = BigInt("235")
		const recipientwA6junX = accounts[0]
		const ERC20TokenStmbSxH = accounts[2]
		const accountadTqXtG = "0x0000000000000000000000000000000000000001"
		await contractfLtmqKM.withdraw.call(valuerkMlQzP, {from: accounts[3]});
		await contractfLtmqKM.switchState.call({from: accounts[1]});
		await contractfLtmqKM.deposeBoss4.call(newBoss4lffzCEc, {from: accounts[0]});
		await contractfLtmqKM.withdrawERC20.call(ERC20TokenStmbSxH, recipientwA6junX, valuebj3CDcc, {from: accounts[2]});
		const nulls9s3oNo = await contractfLtmqKM.allowanceUSDT.call(accountadTqXtG, {from: accounts[1]});

		await expect(contractfLtmqKM.withdraw.call(valuerkMlQzP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrG3YYv2e = accounts[4]
		const FOSTERAddrbNf0iPW = accounts[0]
		const initialRate1rIzeS = BigInt("235")
		const initialPeriodPJBdB8m = BigInt("1519")
		const initialOwnerbc3bkGr = accounts[3]
		const contractaRcycu4 = await Reseller.new(USDTAddrG3YYv2e, FOSTERAddrbNf0iPW, initialRate1rIzeS, initialPeriodPJBdB8m, initialOwnerbc3bkGr, {from: accounts[3]});
		const newBoss3A9HOpFC = "0x0000000000000000000000000000000000000001"
		const newFeeXaUOe1p = BigInt("171")
		const valueT1BtH4 = BigInt("1093")
		const recipientsPYPHZR = accounts[4]
		const ERC20Tokeni9B7evZ = accounts[5]
		const newPeriodg5ViaKl = BigInt("308")
		await contractaRcycu4.deposeBoss3.call(newBoss3A9HOpFC, {from: accounts[3]});
		await contractaRcycu4.setFee.call(newFeeXaUOe1p, {from: accounts[0]});
		await contractaRcycu4.withdrawERC20.call(ERC20Tokeni9B7evZ, recipientsPYPHZR, valueT1BtH4, {from: accounts[2]});
		await contractaRcycu4.setPeriod.call(newPeriodg5ViaKl, {from: accounts[0]});

		await expect(contractaRcycu4.deposeBoss3.call(newBoss3A9HOpFC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLm4Lc28 = accounts[5]
		const FOSTERAddrWL6mKzP = accounts[3]
		const initialRaterXCPDrb = BigInt("1224")
		const initialPeriodr3ujeCn = BigInt("875")
		const initialOwnerg0D2PP4 = accounts[3]
		const contractxxktMtR = await Reseller.new(USDTAddrLm4Lc28, FOSTERAddrWL6mKzP, initialRaterXCPDrb, initialPeriodr3ujeCn, initialOwnerg0D2PP4, {from: accounts[1]});
		const commentNeQ1Mzn = "JhG1g3ZpUobkLmdXZrdWPdDdL2Hb018Me5IXHQNJ9HxXCrHM7DnE3P6rgU"
		const _ref5DbC96MM = accounts[1]
		const _ref4gsZV5k3 = accounts[2]
		const _ref3qs29NFm = accounts[0]
		const _ref2ecoPZmE = accounts[2]
		const _ref1EFjBEWW = accounts[3]
		const valueF6YsKnK = BigInt("1437")
		const newRateRxSWN8H = BigInt("1355")
		const level5D95ciO = BigInt("101")
		const level4cLfDs9t = BigInt("139")
		const level3wfyzLeK = BigInt("227")
		const level2H1G9b6w = BigInt("124")
		const level1en5vEcy = BigInt("194")
		const newBoss4KW6HbIG = accounts[3]
		await contractxxktMtR.purchase.call(valueF6YsKnK, _ref1EFjBEWW, _ref2ecoPZmE, _ref3qs29NFm, _ref4gsZV5k3, _ref5DbC96MM, commentNeQ1Mzn, {from: accounts[3]});
		await contractxxktMtR.switchState.call({from: accounts[4]});
		await contractxxktMtR.setRate.call(newRateRxSWN8H, {from: accounts[3]});
		await contractxxktMtR.setRefBonus.call(level1en5vEcy, level2H1G9b6w, level3wfyzLeK, level4cLfDs9t, level5D95ciO, {from: accounts[4]});
		await contractxxktMtR.deposeBoss4.call(newBoss4KW6HbIG, {from: accounts[4]});

		await expect(contractxxktMtR.purchase.call(valueF6YsKnK, _ref1EFjBEWW, _ref2ecoPZmE, _ref3qs29NFm, _ref4gsZV5k3, _ref5DbC96MM, commentNeQ1Mzn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzMRX2d = accounts[5]
		const FOSTERAddrfTN1Cs0 = accounts[1]
		const initialRatexInRBJJ = BigInt("627")
		const initialPeriodmHmKHkG = BigInt("1850")
		const initialOwnerKSaZA4j = accounts[0]
		const contractObk2JU2 = await Reseller.new(USDTAddrzMRX2d, FOSTERAddrfTN1Cs0, initialRatexInRBJJ, initialPeriodmHmKHkG, initialOwnerKSaZA4j, {from: accounts[0]});
		const _period11P157 = BigInt("566")
		const amountqmBdTaz = BigInt("1678")
		const recipientOvnzipa = accounts[5]
		const amountQoEKcPC = BigInt("120")
		const valueC3bmYJO = BigInt("507")
		const recipiente7J5lNg = accounts[5]
		const ERC20Tokenn33UHSB = accounts[0]
		await contractObk2JU2.freezeAndTransfer.call(recipientOvnzipa, amountqmBdTaz, _period11P157, {from: accounts[5]});
		const nullP0Ztix8 = await contractObk2JU2.getEstimation.call(amountQoEKcPC, {from: accounts[2]});
		await contractObk2JU2.withdrawERC20.call(ERC20Tokenn33UHSB, recipiente7J5lNg, valueC3bmYJO, {from: accounts[5]});

		await expect(contractObk2JU2.freezeAndTransfer.call(recipientOvnzipa, amountqmBdTaz, _period11P157, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOa7GwU0 = accounts[4]
		const FOSTERAddrY7Z4bpV = accounts[2]
		const initialRateVstuXF = BigInt("13")
		const initialPeriodpUaj49U = BigInt("291")
		const initialOwnerdysptF5 = accounts[0]
		const contractARLf4PL = await Reseller.new(USDTAddrOa7GwU0, FOSTERAddrY7Z4bpV, initialRateVstuXF, initialPeriodpUaj49U, initialOwnerdysptF5, {from: accounts[5]});
		const amountXOVeXE5 = BigInt("1746")
		const newRatelWMM1Li = BigInt("1976")
		const newBoss2Cb1amiv = accounts[1]
		const level5wdi08mx = BigInt("84")
		const level4GmOlUB = BigInt("113")
		const level3RmwJcoy = BigInt("168")
		const level2Tj6qaMP = BigInt("23")
		const level1hL2wLnz = BigInt("42")
		const newBoss1o3l87vo = accounts[3]
		const accountyydxqP6 = accounts[0]
		const nullOvzGS8Q = await contractARLf4PL.getEstimation.call(amountXOVeXE5, {from: accounts[2]});
		await contractARLf4PL.setRate.call(newRatelWMM1Li, {from: accounts[0]});
		await contractARLf4PL.deposeBoss2.call(newBoss2Cb1amiv, {from: accounts[2]});
		await contractARLf4PL.setRefBonus.call(level1hL2wLnz, level2Tj6qaMP, level3RmwJcoy, level4GmOlUB, level5wdi08mx, {from: accounts[3]});
		await contractARLf4PL.deposeBoss1.call(newBoss1o3l87vo, {from: "0x0000000000000000000000000000000000000001"});
		const nullLiHMFNB = await contractARLf4PL.allowanceFOSTER.call(accountyydxqP6, {from: accounts[4]});

		assert.equal(nullOvzGS8Q, 22698)
		await expect(contractARLf4PL.setRate.call(newRatelWMM1Li, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBvxADWC = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrNL9GRkv = accounts[1]
		const initialRateiyMGpte = BigInt("1544")
		const initialPerioddsgvxz = BigInt("1173")
		const initialOwnerrSlmzpR = "0x0000000000000000000000000000000000000001"
		const contractbbS630c = await Reseller.new(USDTAddrBvxADWC, FOSTERAddrNL9GRkv, initialRateiyMGpte, initialPerioddsgvxz, initialOwnerrSlmzpR, {from: accounts[1]});
		const level5tm8WUZ = BigInt("118")
		const level4Dm4KnDh = BigInt("129")
		const level3n7AOwK = BigInt("12")
		const level2ON6k9tX = BigInt("1")
		const level1xyV1zR8 = BigInt("183")
		const commentVlUI0TQ = "WCyJHvMROtf4h3kUMbImHXdSDn2FrhQ7"
		const _ref5v6EPgSr = accounts[3]
		const _ref4pZeKLMy = accounts[4]
		const _ref3zSHv8gO = accounts[0]
		const _ref2WfAK0X3 = accounts[3]
		const _ref1jiXM9nb = accounts[4]
		const valueIL2qsuO = BigInt("1146")
		await contractbbS630c.setRefBonus.call(level1xyV1zR8, level2ON6k9tX, level3n7AOwK, level4Dm4KnDh, level5tm8WUZ, {from: accounts[4]});
		await contractbbS630c.purchase.call(valueIL2qsuO, _ref1jiXM9nb, _ref2WfAK0X3, _ref3zSHv8gO, _ref4pZeKLMy, _ref5v6EPgSr, commentVlUI0TQ, {from: accounts[4]});

		await expect(contractbbS630c.setRefBonus.call(level1xyV1zR8, level2ON6k9tX, level3n7AOwK, level4Dm4KnDh, level5tm8WUZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCwdxrD = accounts[1]
		const FOSTERAddrqVYBJN = accounts[1]
		const initialRatetaM0VXd = BigInt("1710")
		const initialPeriodBk7X4kg = BigInt("672")
		const initialOwnerkeexC1T = accounts[3]
		const contractGMpBQ8n = await Reseller.new(USDTAddrCwdxrD, FOSTERAddrqVYBJN, initialRatetaM0VXd, initialPeriodBk7X4kg, initialOwnerkeexC1T, {from: "0x0000000000000000000000000000000000000001"});
		const valuefQIET5r = BigInt("1683")
		const newBoss4u9q6bqL = accounts[2]
		const commentYS0mYbK = "UOSPd9CJE8Y4vcC"
		const _ref5EtQ2E4h = accounts[4]
		const _ref4Bdxb38c = accounts[2]
		const _ref3ch0S4Ys = accounts[4]
		const _ref2KrHpQrJ = accounts[1]
		const _ref1jJhnRHV = accounts[2]
		const valueQqyhbIm = BigInt("262")
		await contractGMpBQ8n.withdraw.call(valuefQIET5r, {from: accounts[4]});
		await contractGMpBQ8n.deposeBoss4.call(newBoss4u9q6bqL, {from: accounts[4]});
		await contractGMpBQ8n.purchase.call(valueQqyhbIm, _ref1jJhnRHV, _ref2KrHpQrJ, _ref3ch0S4Ys, _ref4Bdxb38c, _ref5EtQ2E4h, commentYS0mYbK, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrjUIo5m2 = accounts[2]
		const FOSTERAddrXnnCAiw = "0x0000000000000000000000000000000000000001"
		const initialRateSb6r6W = BigInt("1708")
		const initialPeriodSUCCDj8 = BigInt("1212")
		const initialOwnerubZmt6d = accounts[4]
		const contractsv1HeB = await Reseller.new(USDTAddrjUIo5m2, FOSTERAddrXnnCAiw, initialRateSb6r6W, initialPeriodSUCCDj8, initialOwnerubZmt6d, {from: accounts[2]});
		const accountisaIIil = accounts[1]
		const newBoss1a201SWF = accounts[3]
		const valuepktfdw = BigInt("1938")
		const recipientQGf4fKB = accounts[2]
		const ERC20TokenpaZzpRH = accounts[1]
		const nullclmFZpS = await contractsv1HeB.allowanceFOSTER.call(accountisaIIil, {from: accounts[1]});
		await contractsv1HeB.deposeBoss1.call(newBoss1a201SWF, {from: accounts[4]});
		await contractsv1HeB.withdrawERC20.call(ERC20TokenpaZzpRH, recipientQGf4fKB, valuepktfdw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractsv1HeB.allowanceFOSTER.call(accountisaIIil, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRULZdxS = accounts[5]
		const FOSTERAddrbO8Busk = accounts[3]
		const initialRatejMYcVeb = BigInt("1224")
		const initialPeriodPthUowE = BigInt("875")
		const initialOwnerQXaPrnM = accounts[3]
		const contractm2us3zW = await Reseller.new(USDTAddrRULZdxS, FOSTERAddrbO8Busk, initialRatejMYcVeb, initialPeriodPthUowE, initialOwnerQXaPrnM, {from: accounts[1]});
		const newBoss4UDtQct9 = accounts[2]
		const commenteHh16ey = "JhG1g3ZpUobkLmdXZrdWPdDdL2Hb018Me5IXHQNJ9HxXCrHM7DnE3P6rgU"
		const _ref5nJ3HA6B = accounts[1]
		const _ref4Qaiz783 = accounts[2]
		const _ref3Z9a7wrN = accounts[0]
		const _ref2MrUGD4k = accounts[2]
		const _ref1b8EFGo4 = accounts[3]
		const valuek2Fmc70 = BigInt("1437")
		const newRateWQsLkkY = BigInt("1355")
		const level5A3EDv2f = BigInt("101")
		const level4PMuZdt9 = BigInt("139")
		const level3mTQK5wz = BigInt("227")
		const level2KFeXvx4 = BigInt("124")
		const level1CY9tPMv = BigInt("194")
		const newBoss4JakL5TG = accounts[3]
		await contractm2us3zW.deposeBoss4.call(newBoss4UDtQct9, {from: accounts[1]});
		await contractm2us3zW.purchase.call(valuek2Fmc70, _ref1b8EFGo4, _ref2MrUGD4k, _ref3Z9a7wrN, _ref4Qaiz783, _ref5nJ3HA6B, commenteHh16ey, {from: accounts[3]});
		await contractm2us3zW.switchState.call({from: accounts[4]});
		await contractm2us3zW.setRate.call(newRateWQsLkkY, {from: accounts[3]});
		await contractm2us3zW.setRefBonus.call(level1CY9tPMv, level2KFeXvx4, level3mTQK5wz, level4PMuZdt9, level5A3EDv2f, {from: accounts[4]});
		await contractm2us3zW.deposeBoss4.call(newBoss4JakL5TG, {from: accounts[4]});

		await expect(contractm2us3zW.deposeBoss4.call(newBoss4UDtQct9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNRcTANs = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrXQHsd7b = accounts[3]
		const initialRatepN8GzL5 = BigInt("1587")
		const initialPeriodvgd8FS8 = BigInt("260")
		const initialOwnerASjtn5f = accounts[1]
		const contractHTmD2q5 = await Reseller.new(USDTAddrNRcTANs, FOSTERAddrXQHsd7b, initialRatepN8GzL5, initialPeriodvgd8FS8, initialOwnerASjtn5f, {from: accounts[2]});
		const amountnjOmSdT = BigInt("951")
		const valueFXeiRc0 = BigInt("516")
		const recipientNIzW487 = accounts[1]
		const ERC20TokenueR54hS = accounts[0]
		const newMinimumVYFbVAo = BigInt("976")
		const level5Zblk1ph = BigInt("62")
		const level4HDF9EhO = BigInt("187")
		const level3ElEgHOu = BigInt("20")
		const level2B0aT8Dy = BigInt("114")
		const level1yLIi0UD = BigInt("215")
		const accountuXBbG8Y = accounts[1]
		const nullSYpCipS = await contractHTmD2q5.getEstimation.call(amountnjOmSdT, {from: accounts[1]});
		await contractHTmD2q5.withdrawERC20.call(ERC20TokenueR54hS, recipientNIzW487, valueFXeiRc0, {from: accounts[0]});
		await contractHTmD2q5.setMinimum.call(newMinimumVYFbVAo, {from: accounts[2]});
		await contractHTmD2q5.setRefBonus.call(level1yLIi0UD, level2B0aT8Dy, level3ElEgHOu, level4HDF9EhO, level5Zblk1ph, {from: accounts[0]});
		const nullTjYNOk = await contractHTmD2q5.balanceFOSTER.call(accountuXBbG8Y, {from: accounts[4]});

		assert.equal(nullSYpCipS, 1509237)
		await expect(contractHTmD2q5.withdrawERC20.call(ERC20TokenueR54hS, recipientNIzW487, valueFXeiRc0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUE9WRtE = accounts[2]
		const FOSTERAddri3grb5s = "0x0000000000000000000000000000000000000001"
		const initialRateS5einH9 = BigInt("804")
		const initialPeriodboM6Cw = BigInt("1743")
		const initialOwneramQ2VRi = "0x0000000000000000000000000000000000000001"
		const contractjNqojXK = await Reseller.new(USDTAddrUE9WRtE, FOSTERAddri3grb5s, initialRateS5einH9, initialPeriodboM6Cw, initialOwneramQ2VRi, {from: accounts[5]});
		const newPeriodtQlmsaX = BigInt("43")
		const valueQsT3JHD = BigInt("1319")
		const recipientIJ6ECjJ = accounts[1]
		const ERC20TokenPpbLqwM = accounts[2]
		const valuefjdQuqh = BigInt("1861")
		const newBoss4j8rwqP6 = accounts[0]
		const accountr1ZJFUx = "0x0000000000000000000000000000000000000001"
		await contractjNqojXK.setPeriod.call(newPeriodtQlmsaX, {from: accounts[3]});
		await contractjNqojXK.withdrawERC20.call(ERC20TokenPpbLqwM, recipientIJ6ECjJ, valueQsT3JHD, {from: accounts[1]});
		await contractjNqojXK.withdraw.call(valuefjdQuqh, {from: accounts[3]});
		await contractjNqojXK.switchState.call({from: accounts[1]});
		await contractjNqojXK.deposeBoss4.call(newBoss4j8rwqP6, {from: accounts[0]});
		const nullReDPDRQ = await contractjNqojXK.allowanceUSDT.call(accountr1ZJFUx, {from: accounts[1]});

		await expect(contractjNqojXK.setPeriod.call(newPeriodtQlmsaX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTgjWEtv = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrVJEZ5Bn = accounts[1]
		const initialRateXN4zzuU = BigInt("1544")
		const initialPeriodMnRSL5Q = BigInt("1173")
		const initialOwneru1ugPl4 = "0x0000000000000000000000000000000000000001"
		const contractzzKMpK8 = await Reseller.new(USDTAddrTgjWEtv, FOSTERAddrVJEZ5Bn, initialRateXN4zzuU, initialPeriodMnRSL5Q, initialOwneru1ugPl4, {from: accounts[1]});
		const newMinimumQw9FFpL = BigInt("1245")
		const level5NbVGiRQ = BigInt("118")
		const level4ERJadGo = BigInt("129")
		const level3PUBDCr = BigInt("12")
		const level2j649YQI = BigInt("1")
		const level1gIssSbe = BigInt("183")
		const valueXBdzYYO = BigInt("616")
		await contractzzKMpK8.setMinimum.call(newMinimumQw9FFpL, {from: accounts[1]});
		await contractzzKMpK8.setRefBonus.call(level1gIssSbe, level2j649YQI, level3PUBDCr, level4ERJadGo, level5NbVGiRQ, {from: accounts[4]});
		await contractzzKMpK8.withdraw.call(valueXBdzYYO, {from: accounts[5]});

		await expect(contractzzKMpK8.setMinimum.call(newMinimumQw9FFpL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPEKDCqj = accounts[2]
		const FOSTERAddrZvxCnit = accounts[5]
		const initialRategkYMfhI = BigInt("1248")
		const initialPeriodiXQeGdx = BigInt("1244")
		const initialOwnerOCzneh = accounts[1]
		const contractPuWfpJ = await Reseller.new(USDTAddrPEKDCqj, FOSTERAddrZvxCnit, initialRategkYMfhI, initialPeriodiXQeGdx, initialOwnerOCzneh, {from: accounts[2]});
		const newBoss1vZMVLn = accounts[4]
		const accountugkorGj = accounts[5]
		const newBoss326KqyX = accounts[2]
		const commentOgIGgEk = "66"
		const _ref5IbXadGB = accounts[1]
		const _ref4xJv5RPR = accounts[1]
		const _ref3cH6Wi1r = "0x0000000000000000000000000000000000000001"
		const _ref2gLp4DlS = accounts[4]
		const _ref1sjji48 = accounts[0]
		const valuecHmA6sQ = BigInt("1924")
		const newBoss3EdWgQdv = accounts[1]
		await contractPuWfpJ.switchState.call({from: accounts[5]});
		await contractPuWfpJ.deposeBoss1.call(newBoss1vZMVLn, {from: accounts[1]});
		const nulllAjhirF = await contractPuWfpJ.allowanceUSDT.call(accountugkorGj, {from: accounts[2]});
		await contractPuWfpJ.deposeBoss3.call(newBoss326KqyX, {from: accounts[0]});
		await contractPuWfpJ.purchase.call(valuecHmA6sQ, _ref1sjji48, _ref2gLp4DlS, _ref3cH6Wi1r, _ref4xJv5RPR, _ref5IbXadGB, commentOgIGgEk, {from: accounts[2]});
		await contractPuWfpJ.deposeBoss3.call(newBoss3EdWgQdv, {from: accounts[5]});

		await expect(contractPuWfpJ.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKqrzkQ8 = accounts[0]
		const FOSTERAddrdEcrdON = accounts[3]
		const initialRater0FiEr0 = BigInt("723")
		const initialPeriodvF8otzV = BigInt("1076")
		const initialOwnerjsdNXa = accounts[1]
		const contractQHMZHVJ = await Reseller.new(USDTAddrKqrzkQ8, FOSTERAddrdEcrdON, initialRater0FiEr0, initialPeriodvF8otzV, initialOwnerjsdNXa, {from: accounts[1]});
		const newMinimumwQb0vtJ = BigInt("229")
		const commentP7YKcym = "evZtuh7Cri6CYioecnLwp9XWcwn2dSVbZiPrhdkStzdFivasDLOrRkNEPgQJEFAEwH3GkvyPsHlEzdKHPw3"
		const _ref5ljkNCDq = accounts[3]
		const _ref4AK8vUrD = accounts[3]
		const _ref3odHWjE6 = accounts[5]
		const _ref2ARHmqC = accounts[1]
		const _ref1eBVRpQ0 = accounts[4]
		const valueGRitKHr = BigInt("86")
		const newFeeXSXibLD = BigInt("37")
		const newBoss3LXRl5T = accounts[3]
		const newBoss3P30T5Ji = accounts[4]
		await contractQHMZHVJ.setMinimum.call(newMinimumwQb0vtJ, {from: accounts[1]});
		await contractQHMZHVJ.purchase.call(valueGRitKHr, _ref1eBVRpQ0, _ref2ARHmqC, _ref3odHWjE6, _ref4AK8vUrD, _ref5ljkNCDq, commentP7YKcym, {from: accounts[3]});
		await contractQHMZHVJ.setFee.call(newFeeXSXibLD, {from: accounts[2]});
		await contractQHMZHVJ.deposeBoss3.call(newBoss3LXRl5T, {from: accounts[2]});
		await contractQHMZHVJ.deposeBoss3.call(newBoss3P30T5Ji, {from: accounts[5]});

		await expect(contractQHMZHVJ.setMinimum.call(newMinimumwQb0vtJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr2pwG8F = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrugmfL4 = accounts[3]
		const initialRateyZrT8bR = BigInt("1587")
		const initialPeriodY1bcOn1 = BigInt("260")
		const initialOwnerXyPG7Q8 = accounts[1]
		const contract51VyqK = await Reseller.new(USDTAddr2pwG8F, FOSTERAddrugmfL4, initialRateyZrT8bR, initialPeriodY1bcOn1, initialOwnerXyPG7Q8, {from: accounts[2]});
		const accountcdjsEpd = "0x0000000000000000000000000000000000000001"
		const amountAlZ8f9H = BigInt("951")
		const newPeriodxsSlLVh = BigInt("664")
		const newMinimumlXoAyhK = BigInt("1000")
		const level5PwADhr = BigInt("62")
		const level4aI89y3r = BigInt("187")
		const level3ZqAIPVR = BigInt("20")
		const level2rQt1d7S = BigInt("114")
		const level1NIMKLGx = BigInt("215")
		const accountABA19dG = accounts[1]
		const nullzCODscH = await contract51VyqK.balanceFOSTER.call(accountcdjsEpd, {from: accounts[2]});
		const nullP4UnYRv = await contract51VyqK.getEstimation.call(amountAlZ8f9H, {from: accounts[1]});
		await contract51VyqK.setPeriod.call(newPeriodxsSlLVh, {from: accounts[2]});
		await contract51VyqK.setMinimum.call(newMinimumlXoAyhK, {from: accounts[2]});
		await contract51VyqK.setRefBonus.call(level1NIMKLGx, level2rQt1d7S, level3ZqAIPVR, level4aI89y3r, level5PwADhr, {from: accounts[0]});
		const nullalycfB6 = await contract51VyqK.balanceFOSTER.call(accountABA19dG, {from: accounts[4]});

		await expect(contract51VyqK.balanceFOSTER.call(accountcdjsEpd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzjUo7Gg = accounts[5]
		const FOSTERAddrzqTQEd4 = accounts[1]
		const initialRateY8KSWVW = BigInt("627")
		const initialPeriodIgq8DQy = BigInt("1850")
		const initialOwnerdFuyhM7 = accounts[0]
		const contractx27GDd6 = await Reseller.new(USDTAddrzjUo7Gg, FOSTERAddrzqTQEd4, initialRateY8KSWVW, initialPeriodIgq8DQy, initialOwnerdFuyhM7, {from: accounts[0]});
		const accounthFvlvU5 = accounts[0]
		const valuedsvA6AZ = BigInt("561")
		const _periodidSxOTP = BigInt("566")
		const amountzV0ewUY = BigInt("1678")
		const recipientGkMZuX0 = accounts[5]
		const valueEGl6TF3 = BigInt("496")
		const recipientQu6Ozy8 = accounts[6]
		const ERC20Tokeny3Jhwjo = accounts[0]
		const nullVouHc8r = await contractx27GDd6.allowanceUSDT.call(accounthFvlvU5, {from: accounts[3]});
		await contractx27GDd6.withdraw.call(valuedsvA6AZ, {from: accounts[1]});
		await contractx27GDd6.freezeAndTransfer.call(recipientGkMZuX0, amountzV0ewUY, _periodidSxOTP, {from: accounts[5]});
		await contractx27GDd6.withdrawERC20.call(ERC20Tokeny3Jhwjo, recipientQu6Ozy8, valueEGl6TF3, {from: accounts[5]});

		await expect(contractx27GDd6.allowanceUSDT.call(accounthFvlvU5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriLEkzjY = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrDfeydk = accounts[3]
		const initialRateMhK9ku = BigInt("1587")
		const initialPeriodNEZ2MlX = BigInt("260")
		const initialOwnerxoRI9v7 = accounts[1]
		const contract8Ukcrd = await Reseller.new(USDTAddriLEkzjY, FOSTERAddrDfeydk, initialRateMhK9ku, initialPeriodNEZ2MlX, initialOwnerxoRI9v7, {from: accounts[2]});
		const amountRnYVDeG = BigInt("951")
		const accountg5ywYve = accounts[1]
		const newMinimumgsuTaKc = BigInt("976")
		const newBoss1Hj8ShDQ = accounts[2]
		const level5MGemUN = BigInt("62")
		const level4aCms3Vc = BigInt("187")
		const level3icRBKlU = BigInt("20")
		const level2Od0I6A = BigInt("114")
		const level1PNdv1D = BigInt("215")
		const accountxlylSlf = accounts[1]
		const nulls2d3m3V = await contract8Ukcrd.getEstimation.call(amountRnYVDeG, {from: accounts[1]});
		const nullGTuRYVP = await contract8Ukcrd.balanceUSDT.call(accountg5ywYve, {from: accounts[0]});
		await contract8Ukcrd.setMinimum.call(newMinimumgsuTaKc, {from: accounts[2]});
		await contract8Ukcrd.deposeBoss1.call(newBoss1Hj8ShDQ, {from: accounts[2]});
		await contract8Ukcrd.setRefBonus.call(level1PNdv1D, level2Od0I6A, level3icRBKlU, level4aCms3Vc, level5MGemUN, {from: accounts[0]});
		const nully91Orh3 = await contract8Ukcrd.balanceFOSTER.call(accountxlylSlf, {from: accounts[4]});

		assert.equal(nulls2d3m3V, 1509237)
		await expect(contract8Ukcrd.balanceUSDT.call(accountg5ywYve, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwL8TBT8 = accounts[2]
		const FOSTERAddrPNn0i2 = "0x0000000000000000000000000000000000000001"
		const initialRateSJnV1Y4 = BigInt("804")
		const initialPeriodjwMqMz6 = BigInt("1743")
		const initialOwnerB4oTWst = "0x0000000000000000000000000000000000000001"
		const contractBPcZbSY = await Reseller.new(USDTAddrwL8TBT8, FOSTERAddrPNn0i2, initialRateSJnV1Y4, initialPeriodjwMqMz6, initialOwnerB4oTWst, {from: accounts[5]});
		const level5JNfdkJl = BigInt("67")
		const level4l5ewX69 = BigInt("117")
		const level3kf7zaOq = BigInt("64")
		const level2Xbqw0mm = BigInt("27")
		const level1WZm6pgj = BigInt("81")
		const newPeriodknxnzL = BigInt("1528")
		const valuekZmnFjb = BigInt("1319")
		const recipientCXg47RY = accounts[1]
		const ERC20TokenO9LgKoB = accounts[2]
		const accountepP7lnq = accounts[0]
		const valuewbHOu02 = BigInt("1861")
		const newBoss4uhpsTSW = accounts[0]
		const accounty55ygoi = "0x0000000000000000000000000000000000000001"
		await contractBPcZbSY.setRefBonus.call(level1WZm6pgj, level2Xbqw0mm, level3kf7zaOq, level4l5ewX69, level5JNfdkJl, {from: "0x0000000000000000000000000000000000000001"});
		await contractBPcZbSY.setPeriod.call(newPeriodknxnzL, {from: accounts[3]});
		await contractBPcZbSY.withdrawERC20.call(ERC20TokenO9LgKoB, recipientCXg47RY, valuekZmnFjb, {from: accounts[1]});
		const null9voh3X = await contractBPcZbSY.allowanceUSDT.call(accountepP7lnq, {from: accounts[3]});
		await contractBPcZbSY.withdraw.call(valuewbHOu02, {from: accounts[3]});
		await contractBPcZbSY.switchState.call({from: accounts[1]});
		await contractBPcZbSY.deposeBoss4.call(newBoss4uhpsTSW, {from: accounts[0]});
		const nullMpNpJ3F = await contractBPcZbSY.allowanceUSDT.call(accounty55ygoi, {from: accounts[1]});

		await expect(contractBPcZbSY.setRefBonus.call(level1WZm6pgj, level2Xbqw0mm, level3kf7zaOq, level4l5ewX69, level5JNfdkJl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNuBjf9V = accounts[5]
		const FOSTERAddrsYXdHEV = accounts[1]
		const initialRate24fwJj = BigInt("627")
		const initialPeriodM6X5VbI = BigInt("1850")
		const initialOwnerDjm2GVZ = accounts[0]
		const contractA5hSYN = await Reseller.new(USDTAddrNuBjf9V, FOSTERAddrsYXdHEV, initialRate24fwJj, initialPeriodM6X5VbI, initialOwnerDjm2GVZ, {from: accounts[0]});
		const _ref5rsqkTWj = accounts[4]
		const _ref4bwSU0va = accounts[0]
		const _ref3x3hLp3 = accounts[1]
		const _ref2HB7wQUI = accounts[1]
		const _ref1V3xZl11 = accounts[0]
		const valueVJ1G0JZ = BigInt("1805")
		const newPerioddp4gBzu = BigInt("1868")
		await contractA5hSYN.buy.call(valueVJ1G0JZ, _ref1V3xZl11, _ref2HB7wQUI, _ref3x3hLp3, _ref4bwSU0va, _ref5rsqkTWj, {from: accounts[4]});
		await contractA5hSYN.setPeriod.call(newPerioddp4gBzu, {from: accounts[5]});

		await expect(contractA5hSYN.buy.call(valueVJ1G0JZ, _ref1V3xZl11, _ref2HB7wQUI, _ref3x3hLp3, _ref4bwSU0va, _ref5rsqkTWj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnZF5X2 = accounts[5]
		const FOSTERAddrRL44oQL = accounts[1]
		const initialRateS5LoGzC = BigInt("627")
		const initialPeriodabCgbnq = BigInt("1850")
		const initialOwnermybEt17 = accounts[0]
		const contractivaXPGm = await Reseller.new(USDTAddrnZF5X2, FOSTERAddrRL44oQL, initialRateS5LoGzC, initialPeriodabCgbnq, initialOwnermybEt17, {from: accounts[0]});
		const newBoss11l1i0I = accounts[4]
		const newPeriodZ4bkid5 = BigInt("1847")
		const valuefngBCpj = BigInt("83")
		const recipientGFD2Pmc = accounts[3]
		const ERC20Tokena6FU8IZ = accounts[2]
		await contractivaXPGm.deposeBoss1.call(newBoss11l1i0I, {from: accounts[5]});
		await contractivaXPGm.setPeriod.call(newPeriodZ4bkid5, {from: accounts[5]});
		await contractivaXPGm.withdrawERC20.call(ERC20Tokena6FU8IZ, recipientGFD2Pmc, valuefngBCpj, {from: accounts[2]});

		await expect(contractivaXPGm.deposeBoss1.call(newBoss11l1i0I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruYTDFRt = accounts[0]
		const FOSTERAddrjWvX2YW = accounts[3]
		const initialRateFwU9mpl = BigInt("723")
		const initialPeriodhlWbHjh = BigInt("1076")
		const initialOwnerFhdMwIX = accounts[1]
		const contractORZu6fh = await Reseller.new(USDTAddruYTDFRt, FOSTERAddrjWvX2YW, initialRateFwU9mpl, initialPeriodhlWbHjh, initialOwnerFhdMwIX, {from: accounts[1]});
		const _periodceQ2obG = BigInt("1632")
		const amount4Ih15Y = BigInt("1325")
		const recipientcypeN9y = accounts[3]
		const _periodWung5VT = BigInt("119")
		const amountPKieVU = BigInt("842")
		const recipientZeVhamU = accounts[3]
		const newBoss3kPkppSn = accounts[5]
		await contractORZu6fh.freezeAndTransfer.call(recipientcypeN9y, amount4Ih15Y, _periodceQ2obG, {from: accounts[1]});
		await contractORZu6fh.freezeAndTransfer.call(recipientZeVhamU, amountPKieVU, _periodWung5VT, {from: accounts[3]});
		await contractORZu6fh.deposeBoss3.call(newBoss3kPkppSn, {from: accounts[5]});

		await expect(contractORZu6fh.freezeAndTransfer.call(recipientcypeN9y, amount4Ih15Y, _periodceQ2obG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgGHWOVp = accounts[4]
		const FOSTERAddrkxfOWj = "0x0000000000000000000000000000000000000001"
		const initialRateJc2O3tR = BigInt("1159")
		const initialPeriodpCGfOp1 = BigInt("290")
		const initialOwnerCvntHMF = accounts[4]
		const contractru6c9Yk = await Reseller.new(USDTAddrgGHWOVp, FOSTERAddrkxfOWj, initialRateJc2O3tR, initialPeriodpCGfOp1, initialOwnerCvntHMF, {from: accounts[4]});
		const newPeriodITEBhgL = BigInt("415")
		const newFeemTet0Ej = BigInt("138")
		const valueqsWU8KV = BigInt("874")
		const newRateoCP8Gv = BigInt("1340")
		await contractru6c9Yk.setPeriod.call(newPeriodITEBhgL, {from: accounts[4]});
		await contractru6c9Yk.setFee.call(newFeemTet0Ej, {from: accounts[3]});
		await contractru6c9Yk.switchState.call({from: accounts[0]});
		await contractru6c9Yk.withdraw.call(valueqsWU8KV, {from: "0x0000000000000000000000000000000000000001"});
		await contractru6c9Yk.setRate.call(newRateoCP8Gv, {from: accounts[1]});

		await expect(contractru6c9Yk.setPeriod.call(newPeriodITEBhgL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmzPsAry = accounts[5]
		const FOSTERAddrH68vbf6 = accounts[3]
		const initialRateGHGFHx = BigInt("1224")
		const initialPeriodpNMirgk = BigInt("875")
		const initialOwnerQiAGQIf = accounts[3]
		const contractqK4KZX2 = await Reseller.new(USDTAddrmzPsAry, FOSTERAddrH68vbf6, initialRateGHGFHx, initialPeriodpNMirgk, initialOwnerQiAGQIf, {from: accounts[1]});
		const newBoss4H2QahB5 = "0x0000000000000000000000000000000000000001"
		const newBoss4T8pm846 = accounts[4]
		await contractqK4KZX2.deposeBoss4.call(newBoss4H2QahB5, {from: accounts[3]});
		await contractqK4KZX2.deposeBoss4.call(newBoss4T8pm846, {from: accounts[4]});

		await expect(contractqK4KZX2.deposeBoss4.call(newBoss4H2QahB5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdVneuA6 = accounts[1]
		const FOSTERAddrnTPoxKP = accounts[4]
		const initialRatehuML9qx = BigInt("234")
		const initialPeriodLAjO1eM = BigInt("471")
		const initialOwnerSBSOOAO = accounts[0]
		const contractLGJ22XD = await Reseller.new(USDTAddrdVneuA6, FOSTERAddrnTPoxKP, initialRatehuML9qx, initialPeriodLAjO1eM, initialOwnerSBSOOAO, {from: accounts[5]});
		const commentTAXLXQ4 = "idjCH"
		const _ref5dFWB9uT = accounts[1]
		const _ref4VL9xjPn = accounts[1]
		const _ref3srIsGm7 = accounts[3]
		const _ref2Nt2EQnS = "0x0000000000000000000000000000000000000001"
		const _ref1lPgrkfD = accounts[3]
		const valuepGKKPMq = BigInt("1231")
		const newBoss3mBogI6T = accounts[0]
		await contractLGJ22XD.switchState.call({from: accounts[0]});
		await contractLGJ22XD.purchase.call(valuepGKKPMq, _ref1lPgrkfD, _ref2Nt2EQnS, _ref3srIsGm7, _ref4VL9xjPn, _ref5dFWB9uT, commentTAXLXQ4, {from: accounts[1]});
		await contractLGJ22XD.deposeBoss3.call(newBoss3mBogI6T, {from: accounts[5]});

		await expect(contractLGJ22XD.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfZkPtWH = accounts[1]
		const FOSTERAddrhnCA35L = accounts[2]
		const initialRateOADM0kl = BigInt("37")
		const initialPeriodzY4UF5h = BigInt("1812")
		const initialOwnerO1p1j63 = accounts[3]
		const contractJO5hRY7 = await Reseller.new(USDTAddrfZkPtWH, FOSTERAddrhnCA35L, initialRateOADM0kl, initialPeriodzY4UF5h, initialOwnerO1p1j63, {from: accounts[2]});
		const newFeeBHVy2GF = BigInt("53")
		const newPeriodEyRavKR = BigInt("1788")
		const newBoss32tc1xr = accounts[3]
		await contractJO5hRY7.setFee.call(newFeeBHVy2GF, {from: accounts[3]});
		await contractJO5hRY7.setPeriod.call(newPeriodEyRavKR, {from: "0x0000000000000000000000000000000000000001"});
		await contractJO5hRY7.deposeBoss3.call(newBoss32tc1xr, {from: accounts[3]});

		await expect(contractJO5hRY7.setFee.call(newFeeBHVy2GF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
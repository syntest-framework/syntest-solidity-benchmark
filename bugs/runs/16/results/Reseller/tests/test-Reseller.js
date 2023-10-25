const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrG38POEs = accounts[3]
		const FOSTERAddrHEMvGxN = accounts[5]
		const initialRateqwQTjAr = BigInt("1150")
		const initialPeriodNcgkZIh = BigInt("877")
		const initialOwnerYfA3q5V = "0x0000000000000000000000000000000000000001"
		const contractK7E5czm = await Reseller.new(USDTAddrG38POEs, FOSTERAddrHEMvGxN, initialRateqwQTjAr, initialPeriodNcgkZIh, initialOwnerYfA3q5V, {from: accounts[2]});
		const amountJdUf7W = BigInt("2024")
		const valuesnJ2luv = BigInt("1213")
		const recipientvgr89WA = accounts[0]
		const ERC20TokenSJQhJtC = accounts[3]
		const valueu7ZQGk = BigInt("459")
		const recipientPd1Zqm = accounts[3]
		const ERC20Tokenr21oMpO = accounts[4]
		const newFeeuTIn3gp = BigInt("67")
		const accountFmQI55J = accounts[1]
		const accountnocp7hC = accounts[1]
		const nullFmOe8Mb = await contractK7E5czm.getEstimation.call(amountJdUf7W, {from: accounts[1]});
		await contractK7E5czm.withdrawERC20.call(ERC20TokenSJQhJtC, recipientvgr89WA, valuesnJ2luv, {from: accounts[5]});
		await contractK7E5czm.withdrawERC20.call(ERC20Tokenr21oMpO, recipientPd1Zqm, valueu7ZQGk, {from: accounts[1]});
		await contractK7E5czm.setFee.call(newFeeuTIn3gp, {from: "0x0000000000000000000000000000000000000001"});
		const nullLUqAzMa = await contractK7E5czm.allowanceFOSTER.call(accountFmQI55J, {from: accounts[3]});
		const nullbzLfwDl = await contractK7E5czm.allowanceUSDT.call(accountnocp7hC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullFmOe8Mb, 2327600)
		await expect(contractK7E5czm.withdrawERC20.call(ERC20TokenSJQhJtC, recipientvgr89WA, valuesnJ2luv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhAW7ovE = accounts[4]
		const FOSTERAddrwhWWvEq = accounts[3]
		const initialRateK9DIUTY = BigInt("481")
		const initialPeriodPCkSi9r = BigInt("81")
		const initialOwnerfImE1ly = accounts[4]
		const contractMSR2hT = await Reseller.new(USDTAddrhAW7ovE, FOSTERAddrwhWWvEq, initialRateK9DIUTY, initialPeriodPCkSi9r, initialOwnerfImE1ly, {from: accounts[1]});
		const newBoss4ZHieWI = accounts[0]
		const valuecjjsjnm = BigInt("312")
		const recipientYuWCMxY = accounts[2]
		const ERC20TokenhRdxxq = accounts[4]
		await contractMSR2hT.deposeBoss4.call(newBoss4ZHieWI, {from: "0x0000000000000000000000000000000000000001"});
		await contractMSR2hT.withdrawERC20.call(ERC20TokenhRdxxq, recipientYuWCMxY, valuecjjsjnm, {from: accounts[0]});

		await expect(contractMSR2hT.deposeBoss4.call(newBoss4ZHieWI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruLPh0Rp = accounts[1]
		const FOSTERAddrARC2rSO = accounts[5]
		const initialRateRjTUXmc = BigInt("1415")
		const initialPeriodgjmvCBK = BigInt("258")
		const initialOwnerhRxSAn5 = accounts[1]
		const contractoFVwsWH = await Reseller.new(USDTAddruLPh0Rp, FOSTERAddrARC2rSO, initialRateRjTUXmc, initialPeriodgjmvCBK, initialOwnerhRxSAn5, {from: accounts[0]});
		const commentUNFVjEb = "kVLVOvria3Gbt78AQYw3Mt9nSmROHrgV788"
		const _ref5yCQGYgP = accounts[2]
		const _ref4Wpq2Xij = accounts[3]
		const _ref3kScqn2 = accounts[3]
		const _ref2xum5ELD = accounts[3]
		const _ref1a2TDwJ4 = "0x0000000000000000000000000000000000000001"
		const valuebs01p3 = BigInt("1540")
		const newPeriodgQI6OZ = BigInt("1533")
		const accountngjvqsT = accounts[5]
		const newFeebPMCpjE = BigInt("83")
		const newMinimumWzjnO91 = BigInt("1571")
		await contractoFVwsWH.purchase.call(valuebs01p3, _ref1a2TDwJ4, _ref2xum5ELD, _ref3kScqn2, _ref4Wpq2Xij, _ref5yCQGYgP, commentUNFVjEb, {from: accounts[3]});
		await contractoFVwsWH.setPeriod.call(newPeriodgQI6OZ, {from: accounts[0]});
		const nullX0F78EC = await contractoFVwsWH.balanceUSDT.call(accountngjvqsT, {from: accounts[3]});
		await contractoFVwsWH.setFee.call(newFeebPMCpjE, {from: accounts[4]});
		await contractoFVwsWH.setMinimum.call(newMinimumWzjnO91, {from: accounts[4]});

		await expect(contractoFVwsWH.purchase.call(valuebs01p3, _ref1a2TDwJ4, _ref2xum5ELD, _ref3kScqn2, _ref4Wpq2Xij, _ref5yCQGYgP, commentUNFVjEb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMXCVSqX = accounts[4]
		const FOSTERAddrxGKRmw1 = accounts[0]
		const initialRateu0tGGbi = BigInt("510")
		const initialPeriodCxVPNO4 = BigInt("1912")
		const initialOwnerOdrDYg4 = accounts[1]
		const contractwqdFC9 = await Reseller.new(USDTAddrMXCVSqX, FOSTERAddrxGKRmw1, initialRateu0tGGbi, initialPeriodCxVPNO4, initialOwnerOdrDYg4, {from: accounts[2]});
		const newMinimumM4wJKBc = BigInt("1218")
		const _periodzfhW5aV = BigInt("475")
		const amountXDywX9I = BigInt("967")
		const recipientvrWFP7W = "0x0000000000000000000000000000000000000001"
		await contractwqdFC9.setMinimum.call(newMinimumM4wJKBc, {from: accounts[1]});
		await contractwqdFC9.freezeAndTransfer.call(recipientvrWFP7W, amountXDywX9I, _periodzfhW5aV, {from: accounts[4]});

		await expect(contractwqdFC9.setMinimum.call(newMinimumM4wJKBc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpZowS8K = accounts[2]
		const FOSTERAddr25MLrr = accounts[0]
		const initialRateDXUvk1 = BigInt("1586")
		const initialPeriodlK0V72c = BigInt("26")
		const initialOwnerUTfiiR9 = accounts[0]
		const contractGREqLrx = await Reseller.new(USDTAddrpZowS8K, FOSTERAddr25MLrr, initialRateDXUvk1, initialPeriodlK0V72c, initialOwnerUTfiiR9, {from: accounts[4]});
		const newBoss2Wa1snZ = accounts[1]
		const accounthrMoTfM = accounts[4]
		await contractGREqLrx.deposeBoss2.call(newBoss2Wa1snZ, {from: "0x0000000000000000000000000000000000000001"});
		const nullJ6vGKiN = await contractGREqLrx.allowanceUSDT.call(accounthrMoTfM, {from: accounts[0]});

		await expect(contractGREqLrx.deposeBoss2.call(newBoss2Wa1snZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzLd5eEV = accounts[3]
		const FOSTERAddrFZncWL4 = accounts[4]
		const initialRateYatEQJ = BigInt("691")
		const initialPeriodxN4rcg = BigInt("413")
		const initialOwnerC962jyY = accounts[3]
		const contractRAH9mYp = await Reseller.new(USDTAddrzLd5eEV, FOSTERAddrFZncWL4, initialRateYatEQJ, initialPeriodxN4rcg, initialOwnerC962jyY, {from: accounts[3]});
		const accountfQ946MD = accounts[2]
		const newRate6IaODs = BigInt("1677")
		const newBoss3IOF9A5 = accounts[4]
		const newPeriodlWR8WKv = BigInt("1128")
		const nullc5XJKIF = await contractRAH9mYp.allowanceFOSTER.call(accountfQ946MD, {from: accounts[3]});
		await contractRAH9mYp.setRate.call(newRate6IaODs, {from: accounts[2]});
		await contractRAH9mYp.deposeBoss3.call(newBoss3IOF9A5, {from: accounts[3]});
		await contractRAH9mYp.setPeriod.call(newPeriodlWR8WKv, {from: accounts[0]});
		await contractRAH9mYp.switchState.call({from: accounts[1]});

		await expect(contractRAH9mYp.allowanceFOSTER.call(accountfQ946MD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCwVrfGe = accounts[4]
		const FOSTERAddrWyVlBxR = accounts[1]
		const initialRatenik3bto = BigInt("259")
		const initialPeriodMsUU1P = BigInt("252")
		const initialOwnerA9tsWIH = accounts[1]
		const contractkXJqjHY = await Reseller.new(USDTAddrCwVrfGe, FOSTERAddrWyVlBxR, initialRatenik3bto, initialPeriodMsUU1P, initialOwnerA9tsWIH, {from: accounts[4]});
		const valuebeBM71U = BigInt("238")
		const recipientsHRvbR = accounts[0]
		const ERC20TokenFXa4Te5 = accounts[4]
		const amountF5Qe59O = BigInt("1663")
		const comment7ypGB2 = "g1HDEVxl23Jm0NvXAAUsMMoVqvo3Myc3nYOaWbaekOegfBNuKKHnPkxMYbSEc6zbJOkB17G1m1PfANBa0t8Kh4cUq4CxXY"
		const _ref5wBJIvs7 = accounts[2]
		const _ref4EP1fdP = accounts[3]
		const _ref3CZjHhUn = accounts[1]
		const _ref2LkrL9GB = accounts[3]
		const _ref1cWvOm5O = accounts[4]
		const valuedJwwO0w = BigInt("1794")
		const newBoss1AlTZBUg = accounts[1]
		const newBoss1PMeHBtR = accounts[1]
		const accountBo6LtMX = accounts[2]
		await contractkXJqjHY.switchState.call({from: accounts[4]});
		await contractkXJqjHY.withdrawERC20.call(ERC20TokenFXa4Te5, recipientsHRvbR, valuebeBM71U, {from: accounts[3]});
		const nullhf9TZK7 = await contractkXJqjHY.getEstimation.call(amountF5Qe59O, {from: accounts[4]});
		await contractkXJqjHY.purchase.call(valuedJwwO0w, _ref1cWvOm5O, _ref2LkrL9GB, _ref3CZjHhUn, _ref4EP1fdP, _ref5wBJIvs7, comment7ypGB2, {from: accounts[0]});
		await contractkXJqjHY.deposeBoss1.call(newBoss1AlTZBUg, {from: accounts[3]});
		await contractkXJqjHY.deposeBoss1.call(newBoss1PMeHBtR, {from: accounts[1]});
		const nullNvmGNvU = await contractkXJqjHY.balanceFOSTER.call(accountBo6LtMX, {from: accounts[3]});

		await expect(contractkXJqjHY.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBTLBHo = accounts[4]
		const FOSTERAddrV0ZtiWE = accounts[1]
		const initialRateP51sNNb = BigInt("259")
		const initialPeriodrFjc9w = BigInt("252")
		const initialOwnersMTWwSG = accounts[1]
		const contractp0GtonL = await Reseller.new(USDTAddrBTLBHo, FOSTERAddrV0ZtiWE, initialRateP51sNNb, initialPeriodrFjc9w, initialOwnersMTWwSG, {from: accounts[4]});
		const valuesLEswf = BigInt("1092")
		const newMinimumAdKJNM = BigInt("1100")
		const valuenLUWlVZ = BigInt("238")
		const recipienteXjRwq = accounts[0]
		const ERC20TokengenaYMU = accounts[4]
		const commentkCCUlU9 = "g1HDEVxl23Jm0NvXAAUsMMoVqvo3Myc3nYOaWbaekOegfBNuKKHnPkxMYbSEc6zbJOkB17G1m1PfANBa0t8Kh4cUq4CxXY"
		const _ref5WhxIfmI = accounts[2]
		const _ref4mqSIX6 = accounts[3]
		const _ref3SbH5zSU = accounts[1]
		const _ref2fXvtxf = accounts[3]
		const _ref1V7HRCM5 = accounts[4]
		const valueAxu9V5 = BigInt("1794")
		const newBoss1KBORa7F = accounts[1]
		const accountstUESq = accounts[2]
		await contractp0GtonL.withdraw.call(valuesLEswf, {from: accounts[5]});
		await contractp0GtonL.setMinimum.call(newMinimumAdKJNM, {from: accounts[2]});
		await contractp0GtonL.withdrawERC20.call(ERC20TokengenaYMU, recipienteXjRwq, valuenLUWlVZ, {from: accounts[3]});
		await contractp0GtonL.purchase.call(valueAxu9V5, _ref1V7HRCM5, _ref2fXvtxf, _ref3SbH5zSU, _ref4mqSIX6, _ref5WhxIfmI, commentkCCUlU9, {from: accounts[0]});
		await contractp0GtonL.deposeBoss1.call(newBoss1KBORa7F, {from: accounts[1]});
		const nullL1lRjGr = await contractp0GtonL.balanceFOSTER.call(accountstUESq, {from: accounts[3]});

		await expect(contractp0GtonL.withdraw.call(valuesLEswf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfpMO90i = accounts[1]
		const FOSTERAddrQe75WvE = accounts[5]
		const initialRateUC0iDdl = BigInt("1415")
		const initialPeriodUlCMfXR = BigInt("258")
		const initialOwnerE2GuYhe = accounts[1]
		const contractHhM8tyf = await Reseller.new(USDTAddrfpMO90i, FOSTERAddrQe75WvE, initialRateUC0iDdl, initialPeriodUlCMfXR, initialOwnerE2GuYhe, {from: accounts[0]});
		const newBoss3N2sKXvn = accounts[3]
		const commenttSbBfFi = "kVLVOvria3Gbt78AQYw3Mt9nSmROHrgV788"
		const _ref5N5TWc6Y = accounts[2]
		const _ref4qLNFsi5 = accounts[3]
		const _ref3iesaSJN = accounts[3]
		const _ref2KuiBJqx = accounts[3]
		const _ref1BS0IJKM = "0x0000000000000000000000000000000000000001"
		const valuebvcPTNd = BigInt("1540")
		const newPeriodV0OwqJx = BigInt("1533")
		const commentlsDRJT = "pgXI07U2qe9IgkTovyuF42Iu48ZsolxLu18SS4JT61vgld4qSpV1vuLd3fu3QBOeNpMc1rd2lvdrs8YJJU2nT"
		const _ref5P0mwCUZ = accounts[4]
		const _ref4MlPY3c9 = accounts[1]
		const _ref3n21sDuY = accounts[4]
		const _ref2BjG6PUe = accounts[2]
		const _ref1rNMfpee = accounts[4]
		const valuefLxIJYv = BigInt("999")
		const accountyXxPtBW = accounts[5]
		const newFeejrRoCmR = BigInt("83")
		await contractHhM8tyf.deposeBoss3.call(newBoss3N2sKXvn, {from: accounts[1]});
		await contractHhM8tyf.purchase.call(valuebvcPTNd, _ref1BS0IJKM, _ref2KuiBJqx, _ref3iesaSJN, _ref4qLNFsi5, _ref5N5TWc6Y, commenttSbBfFi, {from: accounts[3]});
		await contractHhM8tyf.setPeriod.call(newPeriodV0OwqJx, {from: accounts[0]});
		await contractHhM8tyf.purchase.call(valuefLxIJYv, _ref1rNMfpee, _ref2BjG6PUe, _ref3n21sDuY, _ref4MlPY3c9, _ref5P0mwCUZ, commentlsDRJT, {from: accounts[4]});
		const nullbTKJdG9 = await contractHhM8tyf.balanceUSDT.call(accountyXxPtBW, {from: accounts[3]});
		await contractHhM8tyf.setFee.call(newFeejrRoCmR, {from: accounts[4]});

		await expect(contractHhM8tyf.deposeBoss3.call(newBoss3N2sKXvn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrc1GUwTC = accounts[2]
		const FOSTERAddrYLlmaY = accounts[0]
		const initialRatevvEzp1r = BigInt("1586")
		const initialPeriodlSxuIO = BigInt("26")
		const initialOwnerPg5dO2 = accounts[0]
		const contractMBO0rp = await Reseller.new(USDTAddrc1GUwTC, FOSTERAddrYLlmaY, initialRatevvEzp1r, initialPeriodlSxuIO, initialOwnerPg5dO2, {from: accounts[4]});
		const accountHiRYF3c = accounts[4]
		const nulltYtIl0B = await contractMBO0rp.allowanceUSDT.call(accountHiRYF3c, {from: accounts[0]});

		await expect(contractMBO0rp.allowanceUSDT.call(accountHiRYF3c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruYpad49 = accounts[4]
		const FOSTERAddrMvi2MI = accounts[3]
		const initialRateAHBj8f = BigInt("481")
		const initialPeriodo6b1akC = BigInt("81")
		const initialOwnervvjuPVZ = accounts[4]
		const contractnvbdbY = await Reseller.new(USDTAddruYpad49, FOSTERAddrMvi2MI, initialRateAHBj8f, initialPeriodo6b1akC, initialOwnervvjuPVZ, {from: accounts[1]});
		const level5E4gDwK7 = BigInt("156")
		const level4pfcqypg = BigInt("218")
		const level3T0IVTlv = BigInt("74")
		const level2wAZdFKr = BigInt("104")
		const level1mg72Vz = BigInt("41")
		const newBoss4xkhAr8q = accounts[0]
		const newBoss3loqqSdN = accounts[3]
		const valueWfgPop5 = BigInt("312")
		const recipientoICUhVL = accounts[2]
		const ERC20Tokent2u9B7W = accounts[4]
		await contractnvbdbY.setRefBonus.call(level1mg72Vz, level2wAZdFKr, level3T0IVTlv, level4pfcqypg, level5E4gDwK7, {from: accounts[1]});
		await contractnvbdbY.deposeBoss4.call(newBoss4xkhAr8q, {from: "0x0000000000000000000000000000000000000001"});
		await contractnvbdbY.deposeBoss3.call(newBoss3loqqSdN, {from: accounts[3]});
		await contractnvbdbY.withdrawERC20.call(ERC20Tokent2u9B7W, recipientoICUhVL, valueWfgPop5, {from: accounts[0]});

		await expect(contractnvbdbY.setRefBonus.call(level1mg72Vz, level2wAZdFKr, level3T0IVTlv, level4pfcqypg, level5E4gDwK7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfjpKBtQ = accounts[3]
		const FOSTERAddrqJ4iRD3 = accounts[2]
		const initialRateiSc3eyN = BigInt("807")
		const initialPeriodBtLUWrq = BigInt("448")
		const initialOwnerrKXwhXS = accounts[4]
		const contractYGl5Nqu = await Reseller.new(USDTAddrfjpKBtQ, FOSTERAddrqJ4iRD3, initialRateiSc3eyN, initialPeriodBtLUWrq, initialOwnerrKXwhXS, {from: accounts[0]});
		const newRatepurJDvK = BigInt("359")
		const newBoss1FXPkLXU = accounts[0]
		const accountXsJO29G = accounts[2]
		const newFeeuMEBXur = BigInt("171")
		const newBoss1sOm1HJz = accounts[1]
		await contractYGl5Nqu.setRate.call(newRatepurJDvK, {from: "0x0000000000000000000000000000000000000001"});
		await contractYGl5Nqu.deposeBoss1.call(newBoss1FXPkLXU, {from: accounts[3]});
		const nullUzFeAF = await contractYGl5Nqu.balanceUSDT.call(accountXsJO29G, {from: accounts[3]});
		await contractYGl5Nqu.setFee.call(newFeeuMEBXur, {from: accounts[4]});
		await contractYGl5Nqu.switchState.call({from: accounts[3]});
		await contractYGl5Nqu.deposeBoss1.call(newBoss1sOm1HJz, {from: accounts[0]});

		await expect(contractYGl5Nqu.setRate.call(newRatepurJDvK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUT820O = accounts[4]
		const FOSTERAddrxjFnH3d = accounts[0]
		const initialRatepuWbpJ3 = BigInt("510")
		const initialPeriodoqkCggW = BigInt("1912")
		const initialOwnervRR0vYI = accounts[1]
		const contractRf0Rg8I = await Reseller.new(USDTAddrUT820O, FOSTERAddrxjFnH3d, initialRatepuWbpJ3, initialPeriodoqkCggW, initialOwnervRR0vYI, {from: accounts[2]});
		const newFeeUU25WlC = BigInt("250")
		const _periodWiT5c4F = BigInt("475")
		const amountOiPeJs5 = BigInt("967")
		const recipientAarHXpM = "0x0000000000000000000000000000000000000002"
		const newRatePu0qkxb = BigInt("848")
		const accountIjMAhK7 = accounts[4]
		await contractRf0Rg8I.setFee.call(newFeeUU25WlC, {from: accounts[4]});
		await contractRf0Rg8I.freezeAndTransfer.call(recipientAarHXpM, amountOiPeJs5, _periodWiT5c4F, {from: accounts[4]});
		await contractRf0Rg8I.setRate.call(newRatePu0qkxb, {from: accounts[3]});
		const nullU0hzV0A = await contractRf0Rg8I.balanceUSDT.call(accountIjMAhK7, {from: accounts[0]});

		await expect(contractRf0Rg8I.setFee.call(newFeeUU25WlC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDkekyIi = accounts[2]
		const FOSTERAddraIf9PN0 = accounts[5]
		const initialRateOVZnfz = BigInt("1748")
		const initialPeriodalh2FoB = BigInt("604")
		const initialOwnerQsNVgAH = accounts[2]
		const contractnBiXiZp = await Reseller.new(USDTAddrDkekyIi, FOSTERAddraIf9PN0, initialRateOVZnfz, initialPeriodalh2FoB, initialOwnerQsNVgAH, {from: accounts[2]});
		const _periodY0ERLMj = BigInt("1440")
		const amountoxpDq5 = BigInt("927")
		const recipientEdli4vn = "0x0000000000000000000000000000000000000001"
		const accountW0A9KmE = accounts[2]
		const _periodlINVKSi = BigInt("486")
		const amountn8quizB = BigInt("109")
		const recipientpMoztEj = accounts[4]
		const accountZeGzzM1 = accounts[4]
		await contractnBiXiZp.freezeAndTransfer.call(recipientEdli4vn, amountoxpDq5, _periodY0ERLMj, {from: accounts[2]});
		const nullmnw9XKn = await contractnBiXiZp.balanceFOSTER.call(accountW0A9KmE, {from: accounts[1]});
		await contractnBiXiZp.freezeAndTransfer.call(recipientpMoztEj, amountn8quizB, _periodlINVKSi, {from: accounts[2]});
		const nullQSj5nW5 = await contractnBiXiZp.allowanceUSDT.call(accountZeGzzM1, {from: accounts[3]});

		await expect(contractnBiXiZp.freezeAndTransfer.call(recipientEdli4vn, amountoxpDq5, _periodY0ERLMj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr0rvwM8 = accounts[1]
		const FOSTERAddrNPqMhgA = accounts[1]
		const initialRateadgygUo = BigInt("1306")
		const initialPeriodhIqJZo7 = BigInt("1193")
		const initialOwneraITDhwq = accounts[0]
		const contractFfQSh2 = await Reseller.new(USDTAddr0rvwM8, FOSTERAddrNPqMhgA, initialRateadgygUo, initialPeriodhIqJZo7, initialOwneraITDhwq, {from: accounts[4]});
		const accountxpRYu6L = accounts[2]
		const newBoss2E7AdlQB = accounts[1]
		const newBoss2RLrAj4 = accounts[3]
		const newMinimumtLgM03W = BigInt("1647")
		const _periodcDp6PN1 = BigInt("1465")
		const amountWIk0jxg = BigInt("1081")
		const recipientHBo1vDM = accounts[3]
		const nullGewKVkd = await contractFfQSh2.balanceFOSTER.call(accountxpRYu6L, {from: "0x0000000000000000000000000000000000000001"});
		await contractFfQSh2.deposeBoss2.call(newBoss2E7AdlQB, {from: accounts[2]});
		await contractFfQSh2.deposeBoss2.call(newBoss2RLrAj4, {from: accounts[1]});
		await contractFfQSh2.setMinimum.call(newMinimumtLgM03W, {from: accounts[4]});
		await contractFfQSh2.switchState.call({from: accounts[1]});
		await contractFfQSh2.freezeAndTransfer.call(recipientHBo1vDM, amountWIk0jxg, _periodcDp6PN1, {from: accounts[0]});

		await expect(contractFfQSh2.balanceFOSTER.call(accountxpRYu6L, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFL2igRU = accounts[4]
		const FOSTERAddrec93Z38 = accounts[1]
		const initialRateCsajIoc = BigInt("1446")
		const initialPeriodVLpflUK = BigInt("1194")
		const initialOwnerp50YRMO = accounts[4]
		const contractZHY8opZ = await Reseller.new(USDTAddrFL2igRU, FOSTERAddrec93Z38, initialRateCsajIoc, initialPeriodVLpflUK, initialOwnerp50YRMO, {from: accounts[2]});
		const newPeriodZsa1cGy = BigInt("1012")
		const newBoss4wUmyMnb = accounts[4]
		await contractZHY8opZ.setPeriod.call(newPeriodZsa1cGy, {from: accounts[4]});
		await contractZHY8opZ.deposeBoss4.call(newBoss4wUmyMnb, {from: accounts[1]});

		await expect(contractZHY8opZ.setPeriod.call(newPeriodZsa1cGy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVeQYl2 = accounts[1]
		const FOSTERAddrkAOgeJB = accounts[4]
		const initialRateV4G1TT9 = BigInt("957")
		const initialPeriodHvlp3uB = BigInt("2003")
		const initialOwneriYX40bl = accounts[3]
		const contractlaeshD4 = await Reseller.new(USDTAddrVeQYl2, FOSTERAddrkAOgeJB, initialRateV4G1TT9, initialPeriodHvlp3uB, initialOwneriYX40bl, {from: "0x0000000000000000000000000000000000000001"});
		const commentqdvm7bD = "91fRmsVBJ7dxpLlHrd8xzcfgBIxsVKOoO5EgESAKkYRG99ZHsSSEeIlfZ2WoDdop5ufyoEQqwowxvZTkLxeOpq9EOQOmGmeIS"
		const _ref5C9HVNtE = accounts[0]
		const _ref4VuQKDvG = accounts[2]
		const _ref3NBbhYiS = accounts[0]
		const _ref2XyxAEJa = accounts[2]
		const _ref1IsDtWg0 = "0x0000000000000000000000000000000000000001"
		const valueofc6sQH = BigInt("1446")
		const newRater8Jb9ag = BigInt("1930")
		const commentaQPyY1k = "by4Fjzu6YChbpIltTAvnnr47sWrTypKHTacyzcgPxjE4"
		const _ref5RoOXRhf = "0x0000000000000000000000000000000000000001"
		const _ref4jqopkYi = accounts[2]
		const _ref3CemAwzd = accounts[5]
		const _ref2q1ksSDL = accounts[3]
		const _ref1z0EZgmw = accounts[3]
		const valuexy9nEMu = BigInt("428")
		const amountL22thse = BigInt("792")
		const accountMCpskrG = accounts[5]
		await contractlaeshD4.purchase.call(valueofc6sQH, _ref1IsDtWg0, _ref2XyxAEJa, _ref3NBbhYiS, _ref4VuQKDvG, _ref5C9HVNtE, commentqdvm7bD, {from: accounts[3]});
		await contractlaeshD4.setRate.call(newRater8Jb9ag, {from: accounts[3]});
		await contractlaeshD4.purchase.call(valuexy9nEMu, _ref1z0EZgmw, _ref2q1ksSDL, _ref3CemAwzd, _ref4jqopkYi, _ref5RoOXRhf, commentaQPyY1k, {from: accounts[4]});
		const nullf4fQ6pU = await contractlaeshD4.getEstimation.call(amountL22thse, {from: accounts[0]});
		const null38ZWXa = await contractlaeshD4.balanceUSDT.call(accountMCpskrG, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddre65hLlc = accounts[0]
		const FOSTERAddrlqm2RF2 = accounts[4]
		const initialRateUbDMvUL = BigInt("140")
		const initialPeriodD8tzKPy = BigInt("27")
		const initialOwner4ihUgp = "0x0000000000000000000000000000000000000001"
		const contractFV0A0MP = await Reseller.new(USDTAddre65hLlc, FOSTERAddrlqm2RF2, initialRateUbDMvUL, initialPeriodD8tzKPy, initialOwner4ihUgp, {from: accounts[4]});
		const _ref5XcnKAQh = accounts[0]
		const _ref4voY2Cfi = "0x0000000000000000000000000000000000000001"
		const _ref3XXCx10V = accounts[3]
		const _ref2jgPW0tG = accounts[0]
		const _ref1mQP2JdX = accounts[0]
		const value0HmJoi = BigInt("695")
		const newMinimumQlIL0sv = BigInt("4")
		const accountX0tr4W2 = accounts[1]
		const newBoss2TeATpDt = "0x0000000000000000000000000000000000000001"
		const accountQBUPZJZ = accounts[3]
		await contractFV0A0MP.buy.call(value0HmJoi, _ref1mQP2JdX, _ref2jgPW0tG, _ref3XXCx10V, _ref4voY2Cfi, _ref5XcnKAQh, {from: accounts[3]});
		await contractFV0A0MP.setMinimum.call(newMinimumQlIL0sv, {from: accounts[2]});
		const nullXpVz0rh = await contractFV0A0MP.allowanceFOSTER.call(accountX0tr4W2, {from: accounts[2]});
		await contractFV0A0MP.deposeBoss2.call(newBoss2TeATpDt, {from: accounts[2]});
		const nullIkMbFj7 = await contractFV0A0MP.balanceUSDT.call(accountQBUPZJZ, {from: accounts[5]});

		await expect(contractFV0A0MP.buy.call(value0HmJoi, _ref1mQP2JdX, _ref2jgPW0tG, _ref3XXCx10V, _ref4voY2Cfi, _ref5XcnKAQh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddro39qPzy = accounts[2]
		const FOSTERAddrBYzQpFv = accounts[0]
		const initialRateMeXGFcr = BigInt("1586")
		const initialPeriodc3ma9e8 = BigInt("26")
		const initialOwnerNlg1bu3 = accounts[0]
		const contractCTHFCxw = await Reseller.new(USDTAddro39qPzy, FOSTERAddrBYzQpFv, initialRateMeXGFcr, initialPeriodc3ma9e8, initialOwnerNlg1bu3, {from: accounts[4]});
		const newRateTnnf3c = BigInt("936")
		const valuefWgDH01 = BigInt("32")
		const recipientMNTCbQ1 = accounts[3]
		const ERC20Token2RzntH = accounts[2]
		const newMinimumi8b7haU = BigInt("633")
		const newBoss2DOBulD = accounts[3]
		await contractCTHFCxw.setRate.call(newRateTnnf3c, {from: accounts[0]});
		await contractCTHFCxw.withdrawERC20.call(ERC20Token2RzntH, recipientMNTCbQ1, valuefWgDH01, {from: accounts[0]});
		await contractCTHFCxw.setMinimum.call(newMinimumi8b7haU, {from: accounts[0]});
		await contractCTHFCxw.deposeBoss2.call(newBoss2DOBulD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCTHFCxw.setRate.call(newRateTnnf3c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddraQkPNDK = accounts[4]
		const FOSTERAddrL1vCQx = accounts[3]
		const initialRateUzclUf = BigInt("481")
		const initialPeriodObzFJf = BigInt("81")
		const initialOwnerJO3juQD = accounts[4]
		const contractEWhlWp1 = await Reseller.new(USDTAddraQkPNDK, FOSTERAddrL1vCQx, initialRateUzclUf, initialPeriodObzFJf, initialOwnerJO3juQD, {from: accounts[1]});
		const commentrdeVztH = "iGRZRYngds9QkI3Ic7CSvdTD3dxTz3K8XZTW4nkW3tXYxW3EOOeYgHmUrDRNtiJhUr"
		const _ref5vy7FRLW = accounts[4]
		const _ref4yG9Ns5G = accounts[1]
		const _ref3bRapPZq = accounts[4]
		const _ref2WqN4jFc = accounts[2]
		const _ref1yl9yOUt = accounts[2]
		const valueVpkYmo6 = BigInt("1620")
		const newFeevXiWNIp = BigInt("234")
		const newFeezTIM1hz = BigInt("100")
		const valueCTkSbyh = BigInt("312")
		const recipientTsVi9pu = accounts[2]
		const ERC20Tokendp4Y5M4 = accounts[5]
		await contractEWhlWp1.purchase.call(valueVpkYmo6, _ref1yl9yOUt, _ref2WqN4jFc, _ref3bRapPZq, _ref4yG9Ns5G, _ref5vy7FRLW, commentrdeVztH, {from: accounts[4]});
		await contractEWhlWp1.setFee.call(newFeevXiWNIp, {from: accounts[5]});
		await contractEWhlWp1.setFee.call(newFeezTIM1hz, {from: accounts[0]});
		await contractEWhlWp1.withdrawERC20.call(ERC20Tokendp4Y5M4, recipientTsVi9pu, valueCTkSbyh, {from: accounts[0]});

		await expect(contractEWhlWp1.purchase.call(valueVpkYmo6, _ref1yl9yOUt, _ref2WqN4jFc, _ref3bRapPZq, _ref4yG9Ns5G, _ref5vy7FRLW, commentrdeVztH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSnOXZx3 = accounts[4]
		const FOSTERAddrKTgF38s = accounts[3]
		const initialRateNw9owlH = BigInt("481")
		const initialPeriodPtePIOt = BigInt("81")
		const initialOwnerGeSjbju = accounts[4]
		const contractYAM1fxE = await Reseller.new(USDTAddrSnOXZx3, FOSTERAddrKTgF38s, initialRateNw9owlH, initialPeriodPtePIOt, initialOwnerGeSjbju, {from: accounts[1]});
		const accountoiHxTA4 = accounts[2]
		const valueL1oegX = BigInt("312")
		const recipientXThNDcT = accounts[3]
		const ERC20TokentnQ4NC2 = accounts[4]
		const nullR2xMgYa = await contractYAM1fxE.balanceUSDT.call(accountoiHxTA4, {from: accounts[0]});
		await contractYAM1fxE.withdrawERC20.call(ERC20TokentnQ4NC2, recipientXThNDcT, valueL1oegX, {from: accounts[0]});

		await expect(contractYAM1fxE.balanceUSDT.call(accountoiHxTA4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwM3y3k7 = accounts[2]
		const FOSTERAddrFbeYknW = accounts[0]
		const initialRateizwfWT = BigInt("1586")
		const initialPeriodj2h3Wxj = BigInt("26")
		const initialOwner1jl83z = accounts[0]
		const contractXdft6iR = await Reseller.new(USDTAddrwM3y3k7, FOSTERAddrFbeYknW, initialRateizwfWT, initialPeriodj2h3Wxj, initialOwner1jl83z, {from: accounts[4]});
		const newBoss1zF7scyH = accounts[3]
		const newPeriodbEvJkjC = BigInt("1764")
		const newBoss2rPgr8X9 = accounts[3]
		await contractXdft6iR.deposeBoss1.call(newBoss1zF7scyH, {from: accounts[0]});
		await contractXdft6iR.setPeriod.call(newPeriodbEvJkjC, {from: accounts[4]});
		await contractXdft6iR.deposeBoss2.call(newBoss2rPgr8X9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractXdft6iR.deposeBoss1.call(newBoss1zF7scyH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsHOrcID = accounts[4]
		const FOSTERAddrfdCOgcL = accounts[3]
		const initialRateRX4SeW2 = BigInt("481")
		const initialPeriodIXSdac3 = BigInt("81")
		const initialOwnerLjnoiRk = accounts[4]
		const contractdAtYW4H = await Reseller.new(USDTAddrsHOrcID, FOSTERAddrfdCOgcL, initialRateRX4SeW2, initialPeriodIXSdac3, initialOwnerLjnoiRk, {from: accounts[1]});
		const newBoss4WBAFVFk = accounts[1]
		const commentGnRPNkh = "iGRZRYngds9QkI3Ic7CSvdTD3dxTz3K8XZTW4nkW3tXYxW3EOOeYgHmUrDRNtiJhUr"
		const _ref5ge8G2mE = accounts[4]
		const _ref4Iz4gRz = accounts[1]
		const _ref3NqqlnVM = accounts[5]
		const _ref2mr9QcGQ = accounts[2]
		const _ref1bFVvo8f = accounts[2]
		const valueWbQKhiE = BigInt("1620")
		const newFeeglbtarJ = BigInt("234")
		await contractdAtYW4H.deposeBoss4.call(newBoss4WBAFVFk, {from: accounts[4]});
		await contractdAtYW4H.purchase.call(valueWbQKhiE, _ref1bFVvo8f, _ref2mr9QcGQ, _ref3NqqlnVM, _ref4Iz4gRz, _ref5ge8G2mE, commentGnRPNkh, {from: accounts[4]});
		await contractdAtYW4H.setFee.call(newFeeglbtarJ, {from: accounts[5]});

		await expect(contractdAtYW4H.deposeBoss4.call(newBoss4WBAFVFk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr88ku4j = accounts[2]
		const FOSTERAddrLj1Osub = accounts[0]
		const initialRatecSQd972 = BigInt("1586")
		const initialPeriod7X87Qx = BigInt("26")
		const initialOwnerBXUUbsS = accounts[0]
		const contractrAtkUfr = await Reseller.new(USDTAddr88ku4j, FOSTERAddrLj1Osub, initialRatecSQd972, initialPeriod7X87Qx, initialOwnerBXUUbsS, {from: accounts[4]});
		const newFeeIWlEzSV = BigInt("145")
		const newBoss1o6HeNDZ = accounts[4]
		await contractrAtkUfr.setFee.call(newFeeIWlEzSV, {from: accounts[0]});
		await contractrAtkUfr.deposeBoss1.call(newBoss1o6HeNDZ, {from: accounts[0]});

		await expect(contractrAtkUfr.setFee.call(newFeeIWlEzSV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGZdyTf6 = accounts[4]
		const FOSTERAddrM6VgMP9 = accounts[3]
		const initialRatekc7So0q = BigInt("481")
		const initialPeriodNA9FT5G = BigInt("81")
		const initialOwnerBcFWOW = accounts[4]
		const contractJlnIzoC = await Reseller.new(USDTAddrGZdyTf6, FOSTERAddrM6VgMP9, initialRatekc7So0q, initialPeriodNA9FT5G, initialOwnerBcFWOW, {from: accounts[1]});
		const level5ve2C2I2 = BigInt("142")
		const level4ERH1j87 = BigInt("8")
		const level3DNoWwxM = BigInt("136")
		const level2Dma3g8A = BigInt("9")
		const level1mVpUKsu = BigInt("123")
		const valueOxA4CpS = BigInt("312")
		const recipientaqQ60aH = accounts[2]
		const ERC20TokenpfaDhlF = accounts[4]
		await contractJlnIzoC.setRefBonus.call(level1mVpUKsu, level2Dma3g8A, level3DNoWwxM, level4ERH1j87, level5ve2C2I2, {from: accounts[4]});
		await contractJlnIzoC.withdrawERC20.call(ERC20TokenpfaDhlF, recipientaqQ60aH, valueOxA4CpS, {from: accounts[0]});

		await expect(contractJlnIzoC.setRefBonus.call(level1mVpUKsu, level2Dma3g8A, level3DNoWwxM, level4ERH1j87, level5ve2C2I2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmijgfdv = accounts[2]
		const FOSTERAddrselJ9Go = accounts[0]
		const initialRateI3n4iUq = BigInt("1586")
		const initialPeriodP4HM0hr = BigInt("26")
		const initialOwnerxqJsyvy = accounts[0]
		const contractfztBIm = await Reseller.new(USDTAddrmijgfdv, FOSTERAddrselJ9Go, initialRateI3n4iUq, initialPeriodP4HM0hr, initialOwnerxqJsyvy, {from: accounts[4]});
		const accountDXboSZd = accounts[0]
		const newBoss1DXRio5r = accounts[4]
		await contractfztBIm.switchState.call({from: accounts[0]});
		const nullfyE19Wl = await contractfztBIm.balanceUSDT.call(accountDXboSZd, {from: accounts[0]});
		await contractfztBIm.deposeBoss1.call(newBoss1DXRio5r, {from: accounts[0]});
		await contractfztBIm.switchState.call({from: accounts[5]});

		await expect(contractfztBIm.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
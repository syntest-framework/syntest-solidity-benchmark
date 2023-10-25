const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrP2tcbf = accounts[0]
		const FOSTERAddrEjPBaas = accounts[2]
		const initialRatezq824dy = BigInt("1759")
		const initialPeriodu6C2uht = BigInt("1084")
		const initialOwnervjEE1aE = accounts[3]
		const contractY0c2dpq = await Reseller.new(USDTAddrP2tcbf, FOSTERAddrEjPBaas, initialRatezq824dy, initialPeriodu6C2uht, initialOwnervjEE1aE, {from: accounts[2]});
		const newPeriodSq8833f = BigInt("853")
		const accountjal97Tf = accounts[2]
		const newBoss1svm9s4O = "0x0000000000000000000000000000000000000001"
		await contractY0c2dpq.setPeriod.call(newPeriodSq8833f, {from: accounts[1]});
		const nullMnHpvwE = await contractY0c2dpq.allowanceFOSTER.call(accountjal97Tf, {from: accounts[1]});
		await contractY0c2dpq.deposeBoss1.call(newBoss1svm9s4O, {from: accounts[2]});

		await expect(contractY0c2dpq.setPeriod.call(newPeriodSq8833f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruPAhp05 = accounts[0]
		const FOSTERAddrd5XX3VX = accounts[5]
		const initialRatefKocodz = BigInt("1352")
		const initialPeriodvd1rw8l = BigInt("1008")
		const initialOwnerzyqiBHp = accounts[1]
		const contractwx7l2cP = await Reseller.new(USDTAddruPAhp05, FOSTERAddrd5XX3VX, initialRatefKocodz, initialPeriodvd1rw8l, initialOwnerzyqiBHp, {from: accounts[2]});
		const newRateIUtLrP1 = BigInt("223")
		const newMinimumpLZBMy = BigInt("1461")
		const newPeriodymAZNed = BigInt("214")
		const amountObTvmje = BigInt("1044")
		const newBoss3VFISFW = accounts[4]
		await contractwx7l2cP.setRate.call(newRateIUtLrP1, {from: accounts[4]});
		await contractwx7l2cP.setMinimum.call(newMinimumpLZBMy, {from: accounts[0]});
		await contractwx7l2cP.setPeriod.call(newPeriodymAZNed, {from: accounts[0]});
		const nullrghDGmq = await contractwx7l2cP.getEstimation.call(amountObTvmje, {from: accounts[0]});
		await contractwx7l2cP.deposeBoss3.call(newBoss3VFISFW, {from: accounts[5]});

		await expect(contractwx7l2cP.setRate.call(newRateIUtLrP1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrW5Gcix = accounts[0]
		const FOSTERAddrXxH4yWt = accounts[0]
		const initialRatee0R4AQY = BigInt("1362")
		const initialPeriodtxV7SGc = BigInt("113")
		const initialOwnermLEeeG6 = accounts[4]
		const contractP6Oses4 = await Reseller.new(USDTAddrW5Gcix, FOSTERAddrXxH4yWt, initialRatee0R4AQY, initialPeriodtxV7SGc, initialOwnermLEeeG6, {from: accounts[4]});
		const value7DVdlR = BigInt("872")
		const newFeeMEejDC9 = BigInt("238")
		await contractP6Oses4.withdraw.call(value7DVdlR, {from: accounts[1]});
		await contractP6Oses4.setFee.call(newFeeMEejDC9, {from: accounts[5]});

		await expect(contractP6Oses4.withdraw.call(value7DVdlR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrI5Iu9hy = accounts[0]
		const FOSTERAddrFAFTCym = accounts[2]
		const initialRateagZilAM = BigInt("501")
		const initialPeriodRmqAipy = BigInt("627")
		const initialOwnerZDi6KBz = accounts[0]
		const contractxgvxNEe = await Reseller.new(USDTAddrI5Iu9hy, FOSTERAddrFAFTCym, initialRateagZilAM, initialPeriodRmqAipy, initialOwnerZDi6KBz, {from: accounts[1]});
		const newFeefjmqMsp = BigInt("33")
		const newMinimumXiHxiFb = BigInt("1060")
		await contractxgvxNEe.setFee.call(newFeefjmqMsp, {from: accounts[3]});
		await contractxgvxNEe.setMinimum.call(newMinimumXiHxiFb, {from: accounts[0]});

		await expect(contractxgvxNEe.setFee.call(newFeefjmqMsp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXlZCa8 = accounts[3]
		const FOSTERAddrcyQTj1z = accounts[2]
		const initialRaterQWTsHs = BigInt("104")
		const initialPeriodDCPzQTX = BigInt("285")
		const initialOwnerZmyOn2 = accounts[5]
		const contractkA2vhv7 = await Reseller.new(USDTAddrXlZCa8, FOSTERAddrcyQTj1z, initialRaterQWTsHs, initialPeriodDCPzQTX, initialOwnerZmyOn2, {from: accounts[2]});
		const accountJtdKem = accounts[2]
		const newMinimumTQLZgjY = BigInt("1291")
		const newBoss3IrsBgna = accounts[2]
		const valuepnWTjoq = BigInt("1485")
		const recipientrM2PdGq = accounts[2]
		const ERC20TokenqfVoIR4 = accounts[5]
		const nullLDxuWsY = await contractkA2vhv7.balanceUSDT.call(accountJtdKem, {from: accounts[2]});
		await contractkA2vhv7.setMinimum.call(newMinimumTQLZgjY, {from: accounts[4]});
		await contractkA2vhv7.deposeBoss3.call(newBoss3IrsBgna, {from: accounts[2]});
		await contractkA2vhv7.withdrawERC20.call(ERC20TokenqfVoIR4, recipientrM2PdGq, valuepnWTjoq, {from: accounts[4]});

		await expect(contractkA2vhv7.balanceUSDT.call(accountJtdKem, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBQPkwFj = accounts[4]
		const FOSTERAddrN8uQMt = accounts[4]
		const initialRateEGnF8x = BigInt("1503")
		const initialPeriodjoxilj3 = BigInt("1026")
		const initialOwnertrz6pq = accounts[0]
		const contractWk2ovay = await Reseller.new(USDTAddrBQPkwFj, FOSTERAddrN8uQMt, initialRateEGnF8x, initialPeriodjoxilj3, initialOwnertrz6pq, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss2pSuKce9 = accounts[2]
		const amountkH8H553 = BigInt("1860")
		const newPeriodAbqOGFT = BigInt("1692")
		const level5LM0p63b = BigInt("84")
		const level4itHqbFE = BigInt("4")
		const level3PfxUVnF = BigInt("57")
		const level2oUB3IPL = BigInt("149")
		const level1dPMPDCs = BigInt("59")
		await contractWk2ovay.deposeBoss2.call(newBoss2pSuKce9, {from: accounts[2]});
		await contractWk2ovay.switchState.call({from: accounts[5]});
		const nullLlE1AsB = await contractWk2ovay.getEstimation.call(amountkH8H553, {from: accounts[2]});
		await contractWk2ovay.setPeriod.call(newPeriodAbqOGFT, {from: accounts[1]});
		await contractWk2ovay.setRefBonus.call(level1dPMPDCs, level2oUB3IPL, level3PfxUVnF, level4itHqbFE, level5LM0p63b, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrwmJXRHx = accounts[0]
		const FOSTERAddrxtr9O6 = accounts[0]
		const initialRateX91oGna = BigInt("247")
		const initialPeriod7LVy1b = BigInt("937")
		const initialOwnerDdatWp2 = accounts[0]
		const contractdU53hRn = await Reseller.new(USDTAddrwmJXRHx, FOSTERAddrxtr9O6, initialRateX91oGna, initialPeriod7LVy1b, initialOwnerDdatWp2, {from: accounts[1]});
		const newBoss2STWz79l = accounts[5]
		const newBoss1UPJCj92 = accounts[1]
		const newBoss3Yn15B5 = accounts[4]
		const _periodnalYDNP = BigInt("472")
		const amountMnsfrno = BigInt("1703")
		const recipientmv6jeJ8 = accounts[4]
		await contractdU53hRn.deposeBoss2.call(newBoss2STWz79l, {from: accounts[2]});
		await contractdU53hRn.deposeBoss1.call(newBoss1UPJCj92, {from: accounts[0]});
		await contractdU53hRn.deposeBoss3.call(newBoss3Yn15B5, {from: accounts[4]});
		await contractdU53hRn.freezeAndTransfer.call(recipientmv6jeJ8, amountMnsfrno, _periodnalYDNP, {from: accounts[1]});

		await expect(contractdU53hRn.deposeBoss2.call(newBoss2STWz79l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwzWURlM = accounts[0]
		const FOSTERAddraZRAvQ6 = accounts[0]
		const initialRateJObVa9k = BigInt("1362")
		const initialPeriodd87jlLO = BigInt("113")
		const initialOwneru5y6r3A = accounts[4]
		const contractWxtGTzP = await Reseller.new(USDTAddrwzWURlM, FOSTERAddraZRAvQ6, initialRateJObVa9k, initialPeriodd87jlLO, initialOwneru5y6r3A, {from: accounts[4]});
		const valueU1hzsBJ = BigInt("446")
		const recipientnryWln0 = accounts[0]
		const ERC20Tokenk3HZaNS = accounts[2]
		const valueicb0mYr = BigInt("872")
		const newFeenCfLy1l = BigInt("238")
		await contractWxtGTzP.withdrawERC20.call(ERC20Tokenk3HZaNS, recipientnryWln0, valueU1hzsBJ, {from: accounts[0]});
		await contractWxtGTzP.withdraw.call(valueicb0mYr, {from: accounts[1]});
		await contractWxtGTzP.setFee.call(newFeenCfLy1l, {from: accounts[5]});

		await expect(contractWxtGTzP.withdrawERC20.call(ERC20Tokenk3HZaNS, recipientnryWln0, valueU1hzsBJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYlOhPeI = accounts[4]
		const FOSTERAddrgQTvP5R = accounts[1]
		const initialRateCsCqwST = BigInt("1837")
		const initialPeriodvUJV48 = BigInt("1243")
		const initialOwnerNsfBBfX = accounts[4]
		const contractxmo0c5Y = await Reseller.new(USDTAddrYlOhPeI, FOSTERAddrgQTvP5R, initialRateCsCqwST, initialPeriodvUJV48, initialOwnerNsfBBfX, {from: accounts[0]});
		const level5INI7zIn = BigInt("150")
		const level4ga7FS19 = BigInt("225")
		const level3Ayr7wmd = BigInt("195")
		const level2aVQwMgO = BigInt("250")
		const level1yTDNkUp = BigInt("110")
		const newFeehXAO0oi = BigInt("202")
		const newBoss4d2hD7H0 = accounts[0]
		await contractxmo0c5Y.setRefBonus.call(level1yTDNkUp, level2aVQwMgO, level3Ayr7wmd, level4ga7FS19, level5INI7zIn, {from: accounts[5]});
		await contractxmo0c5Y.setFee.call(newFeehXAO0oi, {from: accounts[3]});
		await contractxmo0c5Y.deposeBoss4.call(newBoss4d2hD7H0, {from: accounts[2]});

		await expect(contractxmo0c5Y.setRefBonus.call(level1yTDNkUp, level2aVQwMgO, level3Ayr7wmd, level4ga7FS19, level5INI7zIn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQIxtEOY = accounts[0]
		const FOSTERAddrGjrsKko = accounts[2]
		const initialRateScMTxwT = BigInt("501")
		const initialPeriodzmwjzCX = BigInt("627")
		const initialOwnergk2tF7 = accounts[0]
		const contractKirPZL = await Reseller.new(USDTAddrQIxtEOY, FOSTERAddrGjrsKko, initialRateScMTxwT, initialPeriodzmwjzCX, initialOwnergk2tF7, {from: accounts[1]});
		const amounty9STmJt = BigInt("1643")
		const newFeeC0P5r1Y = BigInt("7")
		const newMinimumjzGCePM = BigInt("1060")
		const nullvQDuTZh = await contractKirPZL.getEstimation.call(amounty9STmJt, {from: accounts[4]});
		await contractKirPZL.setFee.call(newFeeC0P5r1Y, {from: accounts[3]});
		await contractKirPZL.setMinimum.call(newMinimumjzGCePM, {from: accounts[0]});

		assert.equal(nullvQDuTZh, 823143)
		await expect(contractKirPZL.setFee.call(newFeeC0P5r1Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmQeC05k = accounts[0]
		const FOSTERAddrO1z8A9z = accounts[2]
		const initialRateyiaMR6F = BigInt("501")
		const initialPeriodhedulQ = BigInt("627")
		const initialOwnertdpCEBn = accounts[0]
		const contracttnSbeEv = await Reseller.new(USDTAddrmQeC05k, FOSTERAddrO1z8A9z, initialRateyiaMR6F, initialPeriodhedulQ, initialOwnertdpCEBn, {from: accounts[1]});
		const accountIhLweGd = accounts[0]
		const newMinimumTdhpfWn = BigInt("1060")
		const nullzFXl8SW = await contracttnSbeEv.allowanceUSDT.call(accountIhLweGd, {from: accounts[1]});
		await contracttnSbeEv.setMinimum.call(newMinimumTdhpfWn, {from: accounts[0]});

		await expect(contracttnSbeEv.allowanceUSDT.call(accountIhLweGd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbzPyJEu = accounts[0]
		const FOSTERAddrTIMfFz = accounts[2]
		const initialRateBTyJGqR = BigInt("501")
		const initialPeriodAGlQmB8 = BigInt("627")
		const initialOwnerPWpBdBw = accounts[0]
		const contractcsSVA2N = await Reseller.new(USDTAddrbzPyJEu, FOSTERAddrTIMfFz, initialRateBTyJGqR, initialPeriodAGlQmB8, initialOwnerPWpBdBw, {from: accounts[1]});
		const newMinimumMB4BGuX = BigInt("1067")
		const newBoss1V0qhxRG = accounts[4]
		await contractcsSVA2N.setMinimum.call(newMinimumMB4BGuX, {from: accounts[0]});
		await contractcsSVA2N.deposeBoss1.call(newBoss1V0qhxRG, {from: accounts[4]});

		await expect(contractcsSVA2N.setMinimum.call(newMinimumMB4BGuX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhevzrY = accounts[0]
		const FOSTERAddre82jZYw = accounts[3]
		const initialRateFv7llTJ = BigInt("1911")
		const initialPeriodYXCtIws = BigInt("376")
		const initialOwnerggizWjT = accounts[0]
		const contractbgGZNe = await Reseller.new(USDTAddrhevzrY, FOSTERAddre82jZYw, initialRateFv7llTJ, initialPeriodYXCtIws, initialOwnerggizWjT, {from: accounts[3]});
		const amountPtJnrP = BigInt("353")
		const newBoss4aQjG2UN = accounts[4]
		const nullhlLwk7 = await contractbgGZNe.getEstimation.call(amountPtJnrP, {from: accounts[1]});
		await contractbgGZNe.deposeBoss4.call(newBoss4aQjG2UN, {from: accounts[2]});

		assert.equal(nullhlLwk7, 674583)
		await expect(contractbgGZNe.deposeBoss4.call(newBoss4aQjG2UN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnYZOp3I = accounts[1]
		const FOSTERAddramN5Sa = accounts[5]
		const initialRatefh6X6c = BigInt("435")
		const initialPeriodt1jbWiZ = BigInt("1037")
		const initialOwnerr7VNwkj = accounts[4]
		const contractDJuktut = await Reseller.new(USDTAddrnYZOp3I, FOSTERAddramN5Sa, initialRatefh6X6c, initialPeriodt1jbWiZ, initialOwnerr7VNwkj, {from: accounts[0]});
		const _ref5iMv27mU = accounts[3]
		const _ref4yGxhTLZ = accounts[1]
		const _ref3MZpoCJ0 = accounts[3]
		const _ref2cE9H8S = accounts[0]
		const _ref1wbUteZC = accounts[4]
		const valueS4gCyYQ = BigInt("43")
		const newMinimumNtN4pN = BigInt("1534")
		const newPeriodLaY31AM = BigInt("329")
		const accountEx6f7OW = "0x0000000000000000000000000000000000000001"
		const accounttCvMLPE = accounts[3]
		await contractDJuktut.buy.call(valueS4gCyYQ, _ref1wbUteZC, _ref2cE9H8S, _ref3MZpoCJ0, _ref4yGxhTLZ, _ref5iMv27mU, {from: accounts[3]});
		await contractDJuktut.setMinimum.call(newMinimumNtN4pN, {from: accounts[3]});
		await contractDJuktut.setPeriod.call(newPeriodLaY31AM, {from: accounts[1]});
		const nullNIVzD8I = await contractDJuktut.allowanceUSDT.call(accountEx6f7OW, {from: accounts[0]});
		const nullo8ERuq = await contractDJuktut.balanceFOSTER.call(accounttCvMLPE, {from: accounts[3]});

		await expect(contractDJuktut.buy.call(valueS4gCyYQ, _ref1wbUteZC, _ref2cE9H8S, _ref3MZpoCJ0, _ref4yGxhTLZ, _ref5iMv27mU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjcIz3l = accounts[0]
		const FOSTERAddrv5gT9sy = accounts[0]
		const initialRateFAGw64 = BigInt("1788")
		const initialPeriodUL7X2yJ = BigInt("1289")
		const initialOwnerTumVwoe = accounts[2]
		const contractP3n2ppl = await Reseller.new(USDTAddrjcIz3l, FOSTERAddrv5gT9sy, initialRateFAGw64, initialPeriodUL7X2yJ, initialOwnerTumVwoe, {from: accounts[5]});
		const account2RVMKu = accounts[5]
		const accountdfiPTi = accounts[4]
		const nullj6Dh5rI = await contractP3n2ppl.allowanceFOSTER.call(account2RVMKu, {from: accounts[3]});
		const nullenBnwzf = await contractP3n2ppl.balanceUSDT.call(accountdfiPTi, {from: accounts[2]});

		await expect(contractP3n2ppl.allowanceFOSTER.call(account2RVMKu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrybxwnvW = accounts[0]
		const FOSTERAddrAWI7QsK = accounts[2]
		const initialRateUr0cnj6 = BigInt("501")
		const initialPeriodmyBwWti = BigInt("627")
		const initialOwnerlZ12pDC = accounts[0]
		const contractQE9OxP0 = await Reseller.new(USDTAddrybxwnvW, FOSTERAddrAWI7QsK, initialRateUr0cnj6, initialPeriodmyBwWti, initialOwnerlZ12pDC, {from: accounts[1]});
		const newMinimumABZYzvT = BigInt("737")
		const newBoss3LAuPAsd = accounts[3]
		await contractQE9OxP0.setMinimum.call(newMinimumABZYzvT, {from: accounts[0]});
		await contractQE9OxP0.deposeBoss3.call(newBoss3LAuPAsd, {from: accounts[4]});

		await expect(contractQE9OxP0.setMinimum.call(newMinimumABZYzvT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmT15zbp = accounts[0]
		const FOSTERAddreRMI5V4 = accounts[0]
		const initialRateR5Psiq = BigInt("1362")
		const initialPeriodlq0erNy = BigInt("113")
		const initialOwnerT0BCfMp = accounts[4]
		const contractlbWBFeR = await Reseller.new(USDTAddrmT15zbp, FOSTERAddreRMI5V4, initialRateR5Psiq, initialPeriodlq0erNy, initialOwnerT0BCfMp, {from: accounts[4]});
		const accountkt9UZLA = accounts[0]
		const _periodkh4tLd5 = BigInt("1378")
		const amountHJULxQR = BigInt("1979")
		const recipientLQ2zjtd = accounts[3]
		const valuevUxwXYO = BigInt("882")
		const nullr4DuBAO = await contractlbWBFeR.balanceFOSTER.call(accountkt9UZLA, {from: "0x0000000000000000000000000000000000000001"});
		await contractlbWBFeR.freezeAndTransfer.call(recipientLQ2zjtd, amountHJULxQR, _periodkh4tLd5, {from: accounts[0]});
		await contractlbWBFeR.withdraw.call(valuevUxwXYO, {from: accounts[1]});

		await expect(contractlbWBFeR.balanceFOSTER.call(accountkt9UZLA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrK9grE2p = accounts[0]
		const FOSTERAddrtxJ6BFN = accounts[2]
		const initialRatenb5aP7j = BigInt("501")
		const initialPeriodLUcTpYw = BigInt("627")
		const initialOwnerRtxOdKF = accounts[0]
		const contractXFQ8ecG = await Reseller.new(USDTAddrK9grE2p, FOSTERAddrtxJ6BFN, initialRatenb5aP7j, initialPeriodLUcTpYw, initialOwnerRtxOdKF, {from: accounts[1]});
		const newPeriodcFBqYf3 = BigInt("1245")
		const valueCsEVTU = BigInt("11")
		const newFeeaIAvIeb = BigInt("31")
		await contractXFQ8ecG.setPeriod.call(newPeriodcFBqYf3, {from: accounts[0]});
		await contractXFQ8ecG.withdraw.call(valueCsEVTU, {from: accounts[5]});
		await contractXFQ8ecG.setFee.call(newFeeaIAvIeb, {from: accounts[3]});

		await expect(contractXFQ8ecG.setPeriod.call(newPeriodcFBqYf3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdUnxkhq = accounts[4]
		const FOSTERAddrY9hWTAa = "0x0000000000000000000000000000000000000001"
		const initialRateO6VEdU0 = BigInt("678")
		const initialPeriodimgdVUD = BigInt("712")
		const initialOwnerahOvJ3U = accounts[2]
		const contractqpc0UAE = await Reseller.new(USDTAddrdUnxkhq, FOSTERAddrY9hWTAa, initialRateO6VEdU0, initialPeriodimgdVUD, initialOwnerahOvJ3U, {from: accounts[0]});
		const commentpUeXVkh = "W3Z79GJgOucdubAPThsjIUyUXUCyMrudxT7cHUKAFbfJ9"
		const _ref5BKNQFc = accounts[5]
		const _ref4aJpNQXE = accounts[3]
		const _ref3XIBMbGX = accounts[0]
		const _ref2nbGuvkK = accounts[5]
		const _ref1lswW6Jl = accounts[3]
		const valueJjiQc8R = BigInt("1046")
		const newBoss1SoT9GyG = accounts[1]
		const newMinimumm0AzSj = BigInt("1953")
		const level5pu6LEvN = BigInt("63")
		const level4mtVyu0M = BigInt("233")
		const level3selbG9P = BigInt("79")
		const level2dGWKwFV = BigInt("170")
		const level1zOPzGf1 = BigInt("123")
		const newBoss1VB3evO9 = accounts[1]
		await contractqpc0UAE.purchase.call(valueJjiQc8R, _ref1lswW6Jl, _ref2nbGuvkK, _ref3XIBMbGX, _ref4aJpNQXE, _ref5BKNQFc, commentpUeXVkh, {from: accounts[1]});
		await contractqpc0UAE.deposeBoss1.call(newBoss1SoT9GyG, {from: accounts[3]});
		await contractqpc0UAE.setMinimum.call(newMinimumm0AzSj, {from: accounts[1]});
		await contractqpc0UAE.setRefBonus.call(level1zOPzGf1, level2dGWKwFV, level3selbG9P, level4mtVyu0M, level5pu6LEvN, {from: accounts[1]});
		await contractqpc0UAE.deposeBoss1.call(newBoss1VB3evO9, {from: accounts[0]});

		await expect(contractqpc0UAE.purchase.call(valueJjiQc8R, _ref1lswW6Jl, _ref2nbGuvkK, _ref3XIBMbGX, _ref4aJpNQXE, _ref5BKNQFc, commentpUeXVkh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWWkY6ik = accounts[0]
		const FOSTERAddrjotwdj5 = accounts[4]
		const initialRateK06osoB = BigInt("416")
		const initialPeriodg7rq0Uw = BigInt("1225")
		const initialOwnerDz2cT1h = accounts[3]
		const contractY0TyHCt = await Reseller.new(USDTAddrWWkY6ik, FOSTERAddrjotwdj5, initialRateK06osoB, initialPeriodg7rq0Uw, initialOwnerDz2cT1h, {from: accounts[4]});
		const commentjmzHgj = "6rxHovxk7vFNFuAk6fzOxn0VZqcIn"
		const _ref5kOQuVNc = "0x0000000000000000000000000000000000000001"
		const _ref4ZRiDGVW = accounts[0]
		const _ref3jMI0plq = accounts[5]
		const _ref2O7QWugV = accounts[0]
		const _ref1Oim00RG = accounts[2]
		const valueyo74OIK = BigInt("1041")
		const newFeeUsZl49p = BigInt("118")
		const commentmu80Tqw = "TU4Emvryffbeyu1EPJ9wf9be1bZtGjM1ZgPP78EnZSBerQmKOkm"
		const _ref5m28scd = accounts[0]
		const _ref4CiHVniS = accounts[4]
		const _ref3PTaGJPR = accounts[0]
		const _ref2HzmxMWM = "0x0000000000000000000000000000000000000001"
		const _ref1V2kfcDA = accounts[5]
		const valuedB0wIe7 = BigInt("999")
		const amountKiZAIWR = BigInt("1641")
		await contractY0TyHCt.purchase.call(valueyo74OIK, _ref1Oim00RG, _ref2O7QWugV, _ref3jMI0plq, _ref4ZRiDGVW, _ref5kOQuVNc, commentjmzHgj, {from: accounts[3]});
		await contractY0TyHCt.setFee.call(newFeeUsZl49p, {from: accounts[4]});
		await contractY0TyHCt.purchase.call(valuedB0wIe7, _ref1V2kfcDA, _ref2HzmxMWM, _ref3PTaGJPR, _ref4CiHVniS, _ref5m28scd, commentmu80Tqw, {from: accounts[4]});
		const nullSxrbFuJ = await contractY0TyHCt.getEstimation.call(amountKiZAIWR, {from: accounts[5]});

		await expect(contractY0TyHCt.purchase.call(valueyo74OIK, _ref1Oim00RG, _ref2O7QWugV, _ref3jMI0plq, _ref4ZRiDGVW, _ref5kOQuVNc, commentjmzHgj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrywiielJ = accounts[5]
		const FOSTERAddrGX6cGJ7 = accounts[4]
		const initialRatecusY7Dq = BigInt("350")
		const initialPeriodV3ifU58 = BigInt("549")
		const initialOwnerKuH488d = accounts[2]
		const contractrrV9rLH = await Reseller.new(USDTAddrywiielJ, FOSTERAddrGX6cGJ7, initialRatecusY7Dq, initialPeriodV3ifU58, initialOwnerKuH488d, {from: accounts[3]});
		const _periodzdxGjY = BigInt("1819")
		const amount3pe9dh = BigInt("1539")
		const recipientjb4M1C = "0x0000000000000000000000000000000000000001"
		const _ref5ZFHARH = accounts[4]
		const _ref4nQ4kaG9 = accounts[3]
		const _ref3zLtfOmf = accounts[1]
		const _ref2eOd90sT = accounts[1]
		const _ref1TJ88guj = accounts[0]
		const value0BshTc = BigInt("1785")
		const newMinimumrI74vVg = BigInt("556")
		await contractrrV9rLH.freezeAndTransfer.call(recipientjb4M1C, amount3pe9dh, _periodzdxGjY, {from: accounts[4]});
		await contractrrV9rLH.buy.call(value0BshTc, _ref1TJ88guj, _ref2eOd90sT, _ref3zLtfOmf, _ref4nQ4kaG9, _ref5ZFHARH, {from: accounts[3]});
		await contractrrV9rLH.setMinimum.call(newMinimumrI74vVg, {from: accounts[1]});

		await expect(contractrrV9rLH.freezeAndTransfer.call(recipientjb4M1C, amount3pe9dh, _periodzdxGjY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtMM63zY = accounts[0]
		const FOSTERAddrz7WLrBr = accounts[0]
		const initialRateqSMKtcS = BigInt("1362")
		const initialPeriodvg2FkJy = BigInt("113")
		const initialOwnerOAuS2Kn = accounts[4]
		const contractSOxakrA = await Reseller.new(USDTAddrtMM63zY, FOSTERAddrz7WLrBr, initialRateqSMKtcS, initialPeriodvg2FkJy, initialOwnerOAuS2Kn, {from: accounts[4]});
		const newFeeXhqQxFo = BigInt("146")
		const valueD2GE3iX = BigInt("872")
		await contractSOxakrA.switchState.call({from: accounts[0]});
		await contractSOxakrA.setFee.call(newFeeXhqQxFo, {from: accounts[3]});
		await contractSOxakrA.withdraw.call(valueD2GE3iX, {from: accounts[1]});

		await expect(contractSOxakrA.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAnM8dL2 = accounts[0]
		const FOSTERAddrdX2cubN = accounts[2]
		const initialRateUFomF4l = BigInt("501")
		const initialPeriodk74bRJi = BigInt("627")
		const initialOwnerroTNjOP = accounts[0]
		const contractO4p5RLl = await Reseller.new(USDTAddrAnM8dL2, FOSTERAddrdX2cubN, initialRateUFomF4l, initialPeriodk74bRJi, initialOwnerroTNjOP, {from: accounts[1]});
		const newBoss4B1U0gTX = accounts[5]
		const commentG2WH3gM = "QeEbP"
		const _ref5RIfBPwl = accounts[4]
		const _ref4jIo8nsd = accounts[1]
		const _ref3cx0acUx = "0x0000000000000000000000000000000000000001"
		const _ref2h4y1B7 = accounts[5]
		const _ref1hgKE0su = accounts[3]
		const valuep4JCmu0 = BigInt("622")
		const newFeeTrLly1I = BigInt("156")
		await contractO4p5RLl.deposeBoss4.call(newBoss4B1U0gTX, {from: accounts[0]});
		await contractO4p5RLl.purchase.call(valuep4JCmu0, _ref1hgKE0su, _ref2h4y1B7, _ref3cx0acUx, _ref4jIo8nsd, _ref5RIfBPwl, commentG2WH3gM, {from: accounts[3]});
		await contractO4p5RLl.setFee.call(newFeeTrLly1I, {from: accounts[3]});

		await expect(contractO4p5RLl.deposeBoss4.call(newBoss4B1U0gTX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrY42wfk = accounts[0]
		const FOSTERAddrvUEC0w = accounts[0]
		const initialRateA2yXJjV = BigInt("1362")
		const initialPeriodGXxg2Rj = BigInt("113")
		const initialOwnerDIA25bL = accounts[4]
		const contractQR1lZO = await Reseller.new(USDTAddrY42wfk, FOSTERAddrvUEC0w, initialRateA2yXJjV, initialPeriodGXxg2Rj, initialOwnerDIA25bL, {from: accounts[4]});
		const valuea9oSKt0 = BigInt("835")
		const newBoss4s8iRCBv = accounts[3]
		await contractQR1lZO.switchState.call({from: accounts[4]});
		await contractQR1lZO.withdraw.call(valuea9oSKt0, {from: accounts[1]});
		await contractQR1lZO.deposeBoss4.call(newBoss4s8iRCBv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractQR1lZO.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVUY7ir0 = accounts[0]
		const FOSTERAddrXJEZ1dH = accounts[2]
		const initialRateaK7B6B = BigInt("501")
		const initialPeriodGi7xu17 = BigInt("627")
		const initialOwneriFEBMCO = accounts[0]
		const contractoBIEK8U = await Reseller.new(USDTAddrVUY7ir0, FOSTERAddrXJEZ1dH, initialRateaK7B6B, initialPeriodGi7xu17, initialOwneriFEBMCO, {from: accounts[1]});
		const level5n4YAusP = BigInt("70")
		const level4Y9iAWQb = BigInt("10")
		const level3kx98xW = BigInt("242")
		const level2cPcUIFy = BigInt("200")
		const level1j7E30vN = BigInt("65")
		const newFeeCfvJyZH = BigInt("24")
		const newPeriodXZabIue = BigInt("793")
		await contractoBIEK8U.setRefBonus.call(level1j7E30vN, level2cPcUIFy, level3kx98xW, level4Y9iAWQb, level5n4YAusP, {from: accounts[0]});
		await contractoBIEK8U.setFee.call(newFeeCfvJyZH, {from: accounts[3]});
		await contractoBIEK8U.setPeriod.call(newPeriodXZabIue, {from: accounts[4]});

		await expect(contractoBIEK8U.setRefBonus.call(level1j7E30vN, level2cPcUIFy, level3kx98xW, level4Y9iAWQb, level5n4YAusP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKVXJj6T = accounts[0]
		const FOSTERAddrIgARBYu = accounts[2]
		const initialRateUXRBCN = BigInt("501")
		const initialPeriodmOfaEgw = BigInt("627")
		const initialOwnerUijprpT = accounts[0]
		const contract5YzBQ8 = await Reseller.new(USDTAddrKVXJj6T, FOSTERAddrIgARBYu, initialRateUXRBCN, initialPeriodmOfaEgw, initialOwnerUijprpT, {from: accounts[1]});
		const newMinimumrLILGI9 = BigInt("1034")
		const newBoss3KmB8PMS = accounts[4]
		const newBoss1hlPDsOJ = accounts[2]
		const newFeelbzenxf = BigInt("42")
		await contract5YzBQ8.setMinimum.call(newMinimumrLILGI9, {from: accounts[0]});
		await contract5YzBQ8.deposeBoss3.call(newBoss3KmB8PMS, {from: accounts[0]});
		await contract5YzBQ8.deposeBoss1.call(newBoss1hlPDsOJ, {from: accounts[2]});
		await contract5YzBQ8.setFee.call(newFeelbzenxf, {from: accounts[4]});

		await expect(contract5YzBQ8.setMinimum.call(newMinimumrLILGI9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjknlUe = accounts[0]
		const FOSTERAddrS0tSDRk = accounts[0]
		const initialRatedl0nUDQ = BigInt("1362")
		const initialPeriodhqWI0PO = BigInt("113")
		const initialOwnereqQvdJ6 = accounts[4]
		const contractgcfr6H = await Reseller.new(USDTAddrjknlUe, FOSTERAddrS0tSDRk, initialRatedl0nUDQ, initialPeriodhqWI0PO, initialOwnereqQvdJ6, {from: accounts[4]});
		const _periodDIuxg1x = BigInt("225")
		const amountlBjFT8J = BigInt("1445")
		const recipienta54oAyG = "0x0000000000000000000000000000000000000001"
		const newBoss1mwpm1Lx = accounts[2]
		const accountPq8MwGv = accounts[4]
		const valuewIDXUNK = BigInt("913")
		await contractgcfr6H.freezeAndTransfer.call(recipienta54oAyG, amountlBjFT8J, _periodDIuxg1x, {from: accounts[4]});
		await contractgcfr6H.deposeBoss1.call(newBoss1mwpm1Lx, {from: accounts[4]});
		const nullQNEKRJH = await contractgcfr6H.balanceUSDT.call(accountPq8MwGv, {from: accounts[3]});
		await contractgcfr6H.withdraw.call(valuewIDXUNK, {from: accounts[1]});

		await expect(contractgcfr6H.freezeAndTransfer.call(recipienta54oAyG, amountlBjFT8J, _periodDIuxg1x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzMdHYn7 = accounts[4]
		const FOSTERAddrisnKGE = accounts[2]
		const initialRatebSsNMlW = BigInt("1995")
		const initialPeriodNSl2xuF = BigInt("1584")
		const initialOwnerDBq3q0M = accounts[3]
		const contractJA6A9fT = await Reseller.new(USDTAddrzMdHYn7, FOSTERAddrisnKGE, initialRatebSsNMlW, initialPeriodNSl2xuF, initialOwnerDBq3q0M, {from: accounts[4]});
		const newRateiiL8752 = BigInt("1728")
		const newBoss4QbPOSdj = accounts[4]
		const newMinimumz2JsWdp = BigInt("1085")
		const newBoss3nxB4Fhz = "0x0000000000000000000000000000000000000001"
		const newBoss2h8R8lZt = accounts[5]
		const newBoss2U5REUSQ = accounts[4]
		await contractJA6A9fT.setRate.call(newRateiiL8752, {from: accounts[3]});
		await contractJA6A9fT.deposeBoss4.call(newBoss4QbPOSdj, {from: accounts[4]});
		await contractJA6A9fT.setMinimum.call(newMinimumz2JsWdp, {from: accounts[4]});
		await contractJA6A9fT.deposeBoss3.call(newBoss3nxB4Fhz, {from: accounts[4]});
		await contractJA6A9fT.deposeBoss2.call(newBoss2h8R8lZt, {from: accounts[4]});
		await contractJA6A9fT.deposeBoss2.call(newBoss2U5REUSQ, {from: accounts[1]});

		await expect(contractJA6A9fT.setRate.call(newRateiiL8752, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdMeRBW1 = accounts[0]
		const FOSTERAddrLtZZ2Du = accounts[0]
		const initialRateSXPQgtq = BigInt("1362")
		const initialPeriodoP4n5vR = BigInt("113")
		const initialOwnerTHx075i = accounts[4]
		const contractTwVktoQ = await Reseller.new(USDTAddrdMeRBW1, FOSTERAddrLtZZ2Du, initialRateSXPQgtq, initialPeriodoP4n5vR, initialOwnerTHx075i, {from: accounts[4]});
		const newFeepzSLeTM = BigInt("88")
		const valueDIyJIzH = BigInt("302")
		const newBoss1gE2bgki = accounts[5]
		await contractTwVktoQ.setFee.call(newFeepzSLeTM, {from: accounts[4]});
		await contractTwVktoQ.withdraw.call(valueDIyJIzH, {from: accounts[1]});
		await contractTwVktoQ.deposeBoss1.call(newBoss1gE2bgki, {from: accounts[0]});

		await expect(contractTwVktoQ.setFee.call(newFeepzSLeTM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
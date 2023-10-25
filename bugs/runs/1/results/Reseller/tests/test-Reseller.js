const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrINrwgd = "0x0000000000000000000000000000000000000001"
		const FOSTERAddroG0GdaZ = accounts[3]
		const initialRateMhsIPAR = BigInt("1166")
		const initialPeriod7UB1Y9 = BigInt("924")
		const initialOwnerODO7a8E = accounts[1]
		const contractnJj9DN = await Reseller.new(USDTAddrINrwgd, FOSTERAddroG0GdaZ, initialRateMhsIPAR, initialPeriod7UB1Y9, initialOwnerODO7a8E, {from: accounts[4]});
		const level5a638qpD = BigInt("254")
		const level4ldQAYT = BigInt("93")
		const level3ZyxQYck = BigInt("219")
		const level2fRsUTRO = BigInt("107")
		const level15oJIDD = BigInt("110")
		const account2pBRFG = accounts[1]
		const newFeeJUkfrPN = BigInt("100")
		const commentZDsXSlu = "swmaHvrrmmUihPS7gywyM7vfSWvB1VyIQ6OtFo75GB8A6RrLtrDLc3e7lATd4qq6z5mfGrGqmRlzP"
		const _ref5BwLbZco = accounts[0]
		const _ref4ukNAIoH = accounts[0]
		const _ref38DuxWn = "0x0000000000000000000000000000000000000001"
		const _ref2gHHV6hq = accounts[1]
		const _ref1VTeaGsG = accounts[0]
		const valued8uBHn = BigInt("1191")
		const newRatekyhxM4A = BigInt("287")
		await contractnJj9DN.setRefBonus.call(level15oJIDD, level2fRsUTRO, level3ZyxQYck, level4ldQAYT, level5a638qpD, {from: accounts[1]});
		const nullUSZsm9 = await contractnJj9DN.allowanceFOSTER.call(account2pBRFG, {from: "0x0000000000000000000000000000000000000001"});
		await contractnJj9DN.setFee.call(newFeeJUkfrPN, {from: accounts[2]});
		await contractnJj9DN.purchase.call(valued8uBHn, _ref1VTeaGsG, _ref2gHHV6hq, _ref38DuxWn, _ref4ukNAIoH, _ref5BwLbZco, commentZDsXSlu, {from: accounts[1]});
		await contractnJj9DN.setRate.call(newRatekyhxM4A, {from: accounts[1]});

		await expect(contractnJj9DN.setRefBonus.call(level15oJIDD, level2fRsUTRO, level3ZyxQYck, level4ldQAYT, level5a638qpD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPQe6wih = accounts[0]
		const FOSTERAddrawm4sk9 = "0x0000000000000000000000000000000000000001"
		const initialRateJAksj8H = BigInt("143")
		const initialPeriodbsDLKtn = BigInt("1896")
		const initialOwnerfeytxjH = accounts[1]
		const contractsTCPzrE = await Reseller.new(USDTAddrPQe6wih, FOSTERAddrawm4sk9, initialRateJAksj8H, initialPeriodbsDLKtn, initialOwnerfeytxjH, {from: accounts[2]});
		const valuekHoKPZ3 = BigInt("533")
		const newBoss1oUgvSRF = accounts[1]
		const accountE49JrAQ = accounts[2]
		const accountJRWX7CK = accounts[3]
		const newBoss2DYEiQQy = accounts[4]
		await contractsTCPzrE.withdraw.call(valuekHoKPZ3, {from: accounts[5]});
		await contractsTCPzrE.deposeBoss1.call(newBoss1oUgvSRF, {from: accounts[0]});
		const nulliFhfWSL = await contractsTCPzrE.allowanceFOSTER.call(accountE49JrAQ, {from: "0x0000000000000000000000000000000000000001"});
		const nullSkHI1a = await contractsTCPzrE.allowanceUSDT.call(accountJRWX7CK, {from: accounts[2]});
		await contractsTCPzrE.deposeBoss2.call(newBoss2DYEiQQy, {from: accounts[2]});

		await expect(contractsTCPzrE.withdraw.call(valuekHoKPZ3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriVOutB = accounts[1]
		const FOSTERAddrLQ1R6yK = accounts[2]
		const initialRatemk90GdU = BigInt("450")
		const initialPeriodHKNQBA8 = BigInt("1197")
		const initialOwnerxVpnaPT = "0x0000000000000000000000000000000000000001"
		const contractRTCIbV = await Reseller.new(USDTAddriVOutB, FOSTERAddrLQ1R6yK, initialRatemk90GdU, initialPeriodHKNQBA8, initialOwnerxVpnaPT, {from: accounts[0]});
		const accountqiaV2l1 = accounts[5]
		const accountXpMENTM = accounts[1]
		const level5Ggf6JiS = BigInt("243")
		const level4Z9l45mA = BigInt("243")
		const level3lCQDyW = BigInt("171")
		const level2n95nqKx = BigInt("156")
		const level1li2CvYh = BigInt("153")
		const accountRh9R6t2 = accounts[0]
		const valueHS4AOkg = BigInt("1655")
		const recipientM3UzWDL = "0x0000000000000000000000000000000000000001"
		const ERC20TokenPCpwfLI = accounts[5]
		const nullNaDdzyi = await contractRTCIbV.allowanceUSDT.call(accountqiaV2l1, {from: accounts[1]});
		const nulllYVH2mE = await contractRTCIbV.balanceUSDT.call(accountXpMENTM, {from: accounts[4]});
		await contractRTCIbV.setRefBonus.call(level1li2CvYh, level2n95nqKx, level3lCQDyW, level4Z9l45mA, level5Ggf6JiS, {from: accounts[1]});
		const nullZtZfcTo = await contractRTCIbV.balanceUSDT.call(accountRh9R6t2, {from: accounts[5]});
		await contractRTCIbV.withdrawERC20.call(ERC20TokenPCpwfLI, recipientM3UzWDL, valueHS4AOkg, {from: accounts[3]});

		await expect(contractRTCIbV.allowanceUSDT.call(accountqiaV2l1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrI23XoCs = accounts[3]
		const FOSTERAddrXurJO0 = accounts[3]
		const initialRatewvXUcg = BigInt("982")
		const initialPeriodftbkK3J = BigInt("997")
		const initialOwnerIFc64CC = accounts[1]
		const contractTTHJC95 = await Reseller.new(USDTAddrI23XoCs, FOSTERAddrXurJO0, initialRatewvXUcg, initialPeriodftbkK3J, initialOwnerIFc64CC, {from: accounts[2]});
		const newBoss4FP5sFJL = accounts[0]
		const newBoss2w3l1yN = accounts[0]
		const newRatex417pne = BigInt("1804")
		const commentLTedKwq = "Mec89SviDdZ8jP"
		const _ref5fmMvx8K = "0x0000000000000000000000000000000000000001"
		const _ref4Eu96Duo = accounts[3]
		const _ref3hgTubSf = accounts[3]
		const _ref2J8uwB9b = accounts[2]
		const _ref1z1rIzu9 = accounts[3]
		const valueGFsjJK = BigInt("178")
		const newFeegR7D0Rc = BigInt("161")
		await contractTTHJC95.deposeBoss4.call(newBoss4FP5sFJL, {from: accounts[0]});
		await contractTTHJC95.deposeBoss2.call(newBoss2w3l1yN, {from: accounts[3]});
		await contractTTHJC95.setRate.call(newRatex417pne, {from: accounts[1]});
		await contractTTHJC95.purchase.call(valueGFsjJK, _ref1z1rIzu9, _ref2J8uwB9b, _ref3hgTubSf, _ref4Eu96Duo, _ref5fmMvx8K, commentLTedKwq, {from: accounts[1]});
		await contractTTHJC95.setFee.call(newFeegR7D0Rc, {from: accounts[5]});

		await expect(contractTTHJC95.deposeBoss4.call(newBoss4FP5sFJL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrorDv6i5 = accounts[3]
		const FOSTERAddr40fK0D = accounts[1]
		const initialRateYnQdCUY = BigInt("155")
		const initialPeriodXwznJCa = BigInt("1669")
		const initialOwnerAB3g5TS = accounts[4]
		const contractum2EBv = await Reseller.new(USDTAddrorDv6i5, FOSTERAddr40fK0D, initialRateYnQdCUY, initialPeriodXwznJCa, initialOwnerAB3g5TS, {from: accounts[3]});
		const newMinimumq46ksg = BigInt("1608")
		const accountNP1ZJAI = accounts[1]
		const newBoss1fe7pqmq = accounts[2]
		const level56US27E = BigInt("87")
		const level4z4XVEFT = BigInt("66")
		const level3sQNP7iT = BigInt("241")
		const level2xRNTHmN = BigInt("174")
		const level1N2yHTcI = BigInt("44")
		const accountWwzEB9G = "0x0000000000000000000000000000000000000001"
		const valueRElpoc = BigInt("861")
		const recipientnveDMAA = accounts[2]
		const ERC20Tokenw5ddWG9 = accounts[0]
		await contractum2EBv.setMinimum.call(newMinimumq46ksg, {from: accounts[0]});
		const nullcsre6i = await contractum2EBv.balanceUSDT.call(accountNP1ZJAI, {from: accounts[2]});
		await contractum2EBv.deposeBoss1.call(newBoss1fe7pqmq, {from: accounts[2]});
		await contractum2EBv.setRefBonus.call(level1N2yHTcI, level2xRNTHmN, level3sQNP7iT, level4z4XVEFT, level56US27E, {from: accounts[1]});
		const nulloZIgdtq = await contractum2EBv.allowanceUSDT.call(accountWwzEB9G, {from: accounts[3]});
		await contractum2EBv.withdrawERC20.call(ERC20Tokenw5ddWG9, recipientnveDMAA, valueRElpoc, {from: accounts[3]});

		await expect(contractum2EBv.setMinimum.call(newMinimumq46ksg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnWDCCJ = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrgKOSmwl = accounts[3]
		const initialRategOJ4zDT = BigInt("587")
		const initialPeriodAny7sYU = BigInt("502")
		const initialOwnerwwJ0Ou8 = accounts[2]
		const contracts2KJXsw = await Reseller.new(USDTAddrnWDCCJ, FOSTERAddrgKOSmwl, initialRategOJ4zDT, initialPeriodAny7sYU, initialOwnerwwJ0Ou8, {from: accounts[2]});
		const newPeriodthaG7VH = BigInt("1247")
		const _periodjS7GBuT = BigInt("1209")
		const amountNgcXxR4 = BigInt("298")
		const recipientJ2u5hvc = "0x0000000000000000000000000000000000000001"
		await contracts2KJXsw.setPeriod.call(newPeriodthaG7VH, {from: accounts[4]});
		await contracts2KJXsw.switchState.call({from: accounts[5]});
		await contracts2KJXsw.switchState.call({from: accounts[3]});
		await contracts2KJXsw.freezeAndTransfer.call(recipientJ2u5hvc, amountNgcXxR4, _periodjS7GBuT, {from: accounts[2]});

		await expect(contracts2KJXsw.setPeriod.call(newPeriodthaG7VH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVBueVav = accounts[3]
		const FOSTERAddrW6sSxEl = accounts[4]
		const initialRateaQsbbv = BigInt("15")
		const initialPeriodSBKUZXl = BigInt("742")
		const initialOwnerCCIcCTo = accounts[3]
		const contractEUIUGN = await Reseller.new(USDTAddrVBueVav, FOSTERAddrW6sSxEl, initialRateaQsbbv, initialPeriodSBKUZXl, initialOwnerCCIcCTo, {from: accounts[1]});
		const newBoss2D43yKHn = accounts[1]
		const accountdcl3Pjm = accounts[4]
		const valuebs3Tarf = BigInt("1183")
		const accountL88wjfn = accounts[1]
		await contractEUIUGN.deposeBoss2.call(newBoss2D43yKHn, {from: accounts[0]});
		const nullan0kbs = await contractEUIUGN.allowanceUSDT.call(accountdcl3Pjm, {from: accounts[4]});
		await contractEUIUGN.withdraw.call(valuebs3Tarf, {from: accounts[0]});
		const nulldPB3J87 = await contractEUIUGN.allowanceFOSTER.call(accountL88wjfn, {from: accounts[4]});

		await expect(contractEUIUGN.deposeBoss2.call(newBoss2D43yKHn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrD70BhU7 = accounts[3]
		const FOSTERAddrlEzCtR = accounts[4]
		const initialRateWCxVfWk = BigInt("15")
		const initialPeriodnu20yki = BigInt("742")
		const initialOwnerQYaPC9z = accounts[3]
		const contracte7ztY7l = await Reseller.new(USDTAddrD70BhU7, FOSTERAddrlEzCtR, initialRateWCxVfWk, initialPeriodnu20yki, initialOwnerQYaPC9z, {from: accounts[1]});
		const valueKgL3MO2 = BigInt("1183")
		await contracte7ztY7l.switchState.call({from: accounts[1]});
		await contracte7ztY7l.withdraw.call(valueKgL3MO2, {from: accounts[0]});

		await expect(contracte7ztY7l.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkWO3XXC = accounts[3]
		const FOSTERAddrfX8hy8K = accounts[4]
		const initialRateqDOuARU = BigInt("15")
		const initialPeriodn0GvMRH = BigInt("742")
		const initialOwnerPHYwiqG = accounts[3]
		const contractYglsrO = await Reseller.new(USDTAddrkWO3XXC, FOSTERAddrfX8hy8K, initialRateqDOuARU, initialPeriodn0GvMRH, initialOwnerPHYwiqG, {from: accounts[1]});
		const newFeeLFCs9P = BigInt("55")
		const valueqmiTY0 = BigInt("1153")
		const accountKpL1FRY = accounts[1]
		await contractYglsrO.setFee.call(newFeeLFCs9P, {from: accounts[0]});
		await contractYglsrO.withdraw.call(valueqmiTY0, {from: accounts[0]});
		const nullZ8nRHhZ = await contractYglsrO.allowanceFOSTER.call(accountKpL1FRY, {from: accounts[4]});

		await expect(contractYglsrO.setFee.call(newFeeLFCs9P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr8uULri = accounts[3]
		const FOSTERAddrvE3F19z = accounts[2]
		const initialRatezPtOeYW = BigInt("351")
		const initialPeriodtNwk5rc = BigInt("257")
		const initialOwnerHMgESI = accounts[4]
		const contractZACcJJ9 = await Reseller.new(USDTAddr8uULri, FOSTERAddrvE3F19z, initialRatezPtOeYW, initialPeriodtNwk5rc, initialOwnerHMgESI, {from: accounts[4]});
		const newRatedBpZbbn = BigInt("1001")
		const valuemRksvuq = BigInt("1171")
		const recipientWe96qa4 = accounts[3]
		const ERC20TokenpzRCs1 = accounts[5]
		const newBoss4smqB4Qu = accounts[3]
		const _ref5MNvIqCr = accounts[1]
		const _ref4K1YWS4t = accounts[0]
		const _ref363QkiA = accounts[0]
		const _ref2M1bgjaH = accounts[0]
		const _ref1cCz9iH = accounts[4]
		const valueChTwaPd = BigInt("171")
		const newBoss4mBr06Cc = accounts[5]
		const newPeriodeirOr75 = BigInt("307")
		await contractZACcJJ9.setRate.call(newRatedBpZbbn, {from: accounts[3]});
		await contractZACcJJ9.withdrawERC20.call(ERC20TokenpzRCs1, recipientWe96qa4, valuemRksvuq, {from: accounts[1]});
		await contractZACcJJ9.deposeBoss4.call(newBoss4smqB4Qu, {from: accounts[5]});
		await contractZACcJJ9.buy.call(valueChTwaPd, _ref1cCz9iH, _ref2M1bgjaH, _ref363QkiA, _ref4K1YWS4t, _ref5MNvIqCr, {from: accounts[5]});
		await contractZACcJJ9.deposeBoss4.call(newBoss4mBr06Cc, {from: accounts[0]});
		await contractZACcJJ9.setPeriod.call(newPeriodeirOr75, {from: accounts[4]});

		await expect(contractZACcJJ9.setRate.call(newRatedBpZbbn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrP0XR5k = accounts[3]
		const FOSTERAddrv7hPOCG = accounts[4]
		const initialRateqwpavJI = BigInt("15")
		const initialPeriodBWXhZuj = BigInt("742")
		const initialOwnervmUrYmB = accounts[3]
		const contractwV99i77 = await Reseller.new(USDTAddrP0XR5k, FOSTERAddrv7hPOCG, initialRateqwpavJI, initialPeriodBWXhZuj, initialOwnervmUrYmB, {from: accounts[1]});
		const accountC2G7zG4 = accounts[2]
		const accountxFvkQQD = accounts[2]
		const accountHDXwq8a = accounts[4]
		const nullyCYEPMY = await contractwV99i77.balanceUSDT.call(accountC2G7zG4, {from: accounts[3]});
		const nullJfpLnXu = await contractwV99i77.allowanceFOSTER.call(accountxFvkQQD, {from: accounts[4]});
		const nullJPN3Vcv = await contractwV99i77.allowanceUSDT.call(accountHDXwq8a, {from: accounts[1]});

		await expect(contractwV99i77.balanceUSDT.call(accountC2G7zG4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmZToOgA = accounts[3]
		const FOSTERAddrJYqeJ78 = accounts[4]
		const initialRateTmUT8VB = BigInt("15")
		const initialPeriodi8ZCXLS = BigInt("742")
		const initialOwnereaPQNn = accounts[3]
		const contractQnEMw5K = await Reseller.new(USDTAddrmZToOgA, FOSTERAddrJYqeJ78, initialRateTmUT8VB, initialPeriodi8ZCXLS, initialOwnereaPQNn, {from: accounts[1]});
		const commentIkud1Q = "nhhmP6BuPNuK3VDjOZ9eNdwCclDyZhO"
		const _ref5MAVFYBC = accounts[4]
		const _ref4LTUVgag = accounts[0]
		const _ref3jOmo0nK = accounts[1]
		const _ref2Hllj1Z = accounts[2]
		const _ref1HONQHEu = accounts[1]
		const valueqQFw7vx = BigInt("967")
		const accountWmSOrA5 = accounts[1]
		const valueeJocrjN = BigInt("796")
		const recipientYWCN1Rm = accounts[4]
		const ERC20TokenxFHgI2G = "0x0000000000000000000000000000000000000001"
		await contractQnEMw5K.purchase.call(valueqQFw7vx, _ref1HONQHEu, _ref2Hllj1Z, _ref3jOmo0nK, _ref4LTUVgag, _ref5MAVFYBC, commentIkud1Q, {from: accounts[0]});
		const nullmUIJ46B = await contractQnEMw5K.allowanceFOSTER.call(accountWmSOrA5, {from: accounts[4]});
		await contractQnEMw5K.withdrawERC20.call(ERC20TokenxFHgI2G, recipientYWCN1Rm, valueeJocrjN, {from: accounts[0]});

		await expect(contractQnEMw5K.purchase.call(valueqQFw7vx, _ref1HONQHEu, _ref2Hllj1Z, _ref3jOmo0nK, _ref4LTUVgag, _ref5MAVFYBC, commentIkud1Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrijq15j4 = accounts[3]
		const FOSTERAddrDr9uKLl = accounts[4]
		const initialRatexXk9V0 = BigInt("15")
		const initialPeriods3NiO4u = BigInt("742")
		const initialOwnerOaXCjs0 = accounts[3]
		const contractEkjGeXa = await Reseller.new(USDTAddrijq15j4, FOSTERAddrDr9uKLl, initialRatexXk9V0, initialPeriods3NiO4u, initialOwnerOaXCjs0, {from: accounts[1]});
		const newBoss3nRoSdNM = accounts[1]
		const accountdzQPEtO = accounts[2]
		const newFee870dtY = BigInt("11")
		const newPeriodkeNVMDX = BigInt("1981")
		await contractEkjGeXa.deposeBoss3.call(newBoss3nRoSdNM, {from: accounts[5]});
		const nullkXUWi7n = await contractEkjGeXa.allowanceFOSTER.call(accountdzQPEtO, {from: accounts[4]});
		await contractEkjGeXa.setFee.call(newFee870dtY, {from: accounts[1]});
		await contractEkjGeXa.setPeriod.call(newPeriodkeNVMDX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractEkjGeXa.deposeBoss3.call(newBoss3nRoSdNM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrd9zmOeT = accounts[3]
		const FOSTERAddrND676fo = accounts[4]
		const initialRatewc6hEe8 = BigInt("15")
		const initialPeriodUyd65X = BigInt("742")
		const initialOwnerXIB8fyt = accounts[3]
		const contractmzpXDDr = await Reseller.new(USDTAddrd9zmOeT, FOSTERAddrND676fo, initialRatewc6hEe8, initialPeriodUyd65X, initialOwnerXIB8fyt, {from: accounts[1]});
		const _ref5FOtxpG4 = accounts[4]
		const _ref4ROtnv9V = accounts[4]
		const _ref3htdUNsr = accounts[5]
		const _ref2nCCms9N = accounts[4]
		const _ref1ij3X9Yr = accounts[5]
		const valueiNaumIZ = BigInt("1214")
		const accountECPpXvg = accounts[2]
		const accountbBCaFmV = accounts[4]
		await contractmzpXDDr.buy.call(valueiNaumIZ, _ref1ij3X9Yr, _ref2nCCms9N, _ref3htdUNsr, _ref4ROtnv9V, _ref5FOtxpG4, {from: accounts[0]});
		const nullP6RzrP0 = await contractmzpXDDr.allowanceFOSTER.call(accountECPpXvg, {from: accounts[4]});
		const nullAqW2D4p = await contractmzpXDDr.allowanceUSDT.call(accountbBCaFmV, {from: accounts[1]});

		await expect(contractmzpXDDr.buy.call(valueiNaumIZ, _ref1ij3X9Yr, _ref2nCCms9N, _ref3htdUNsr, _ref4ROtnv9V, _ref5FOtxpG4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMV6x1yL = accounts[3]
		const FOSTERAddrxuq0PRq = accounts[4]
		const initialRatez8GHjpk = BigInt("15")
		const initialPeriodJTkrZfP = BigInt("742")
		const initialOwnerPM69jbS = accounts[3]
		const contractW8SFcd = await Reseller.new(USDTAddrMV6x1yL, FOSTERAddrxuq0PRq, initialRatez8GHjpk, initialPeriodJTkrZfP, initialOwnerPM69jbS, {from: accounts[1]});
		const valuepcqcpYF = BigInt("796")
		const recipientgKJwxh = accounts[6]
		const ERC20Tokenmcaayk1 = "0x0000000000000000000000000000000000000001"
		await contractW8SFcd.withdrawERC20.call(ERC20Tokenmcaayk1, recipientgKJwxh, valuepcqcpYF, {from: accounts[0]});

		await expect(contractW8SFcd.withdrawERC20.call(ERC20Tokenmcaayk1, recipientgKJwxh, valuepcqcpYF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddre2r8X1n = accounts[3]
		const FOSTERAddr49NqGG = accounts[4]
		const initialRateMxVX5TT = BigInt("15")
		const initialPeriodBUBQK9 = BigInt("742")
		const initialOwnerWCXpjxK = accounts[3]
		const contractTA9QoUQ = await Reseller.new(USDTAddre2r8X1n, FOSTERAddr49NqGG, initialRateMxVX5TT, initialPeriodBUBQK9, initialOwnerWCXpjxK, {from: accounts[1]});
		const newBoss1H1rMrh4 = accounts[0]
		const accountAkkmZkR = accounts[2]
		await contractTA9QoUQ.deposeBoss1.call(newBoss1H1rMrh4, {from: accounts[4]});
		const nullFlrz3Nf = await contractTA9QoUQ.allowanceFOSTER.call(accountAkkmZkR, {from: accounts[4]});

		await expect(contractTA9QoUQ.deposeBoss1.call(newBoss1H1rMrh4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqFvmXM3 = accounts[5]
		const FOSTERAddrdUrFoHz = accounts[4]
		const initialRatesAOxOkW = BigInt("1339")
		const initialPeriodpX9mHYl = BigInt("766")
		const initialOwnerDmpMbjH = accounts[4]
		const contractHj6Gdxl = await Reseller.new(USDTAddrqFvmXM3, FOSTERAddrdUrFoHz, initialRatesAOxOkW, initialPeriodpX9mHYl, initialOwnerDmpMbjH, {from: accounts[5]});
		const _periodkz4y3H = BigInt("265")
		const amountiDOKIEk = BigInt("198")
		const recipientZA5ULY7 = accounts[3]
		const newBoss2uoeoeAq = accounts[5]
		await contractHj6Gdxl.freezeAndTransfer.call(recipientZA5ULY7, amountiDOKIEk, _periodkz4y3H, {from: accounts[4]});
		await contractHj6Gdxl.deposeBoss2.call(newBoss2uoeoeAq, {from: accounts[1]});
		await contractHj6Gdxl.switchState.call({from: accounts[2]});

		await expect(contractHj6Gdxl.freezeAndTransfer.call(recipientZA5ULY7, amountiDOKIEk, _periodkz4y3H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNhdFACh = accounts[4]
		const FOSTERAddrrfQqoNB = accounts[1]
		const initialRatesFbGRvE = BigInt("1222")
		const initialPeriodWImfeak = BigInt("1952")
		const initialOwnerrbcruXY = accounts[0]
		const contractveuAXr = await Reseller.new(USDTAddrNhdFACh, FOSTERAddrrfQqoNB, initialRatesFbGRvE, initialPeriodWImfeak, initialOwnerrbcruXY, {from: "0x0000000000000000000000000000000000000001"});
		const valuemOPmdLZ = BigInt("668")
		const recipientZzpf32 = accounts[4]
		const ERC20TokenfkisSib = accounts[4]
		const newPeriodIGH44Fu = BigInt("1192")
		const newBoss1QCtUvR = accounts[1]
		await contractveuAXr.withdrawERC20.call(ERC20TokenfkisSib, recipientZzpf32, valuemOPmdLZ, {from: accounts[4]});
		await contractveuAXr.setPeriod.call(newPeriodIGH44Fu, {from: accounts[1]});
		await contractveuAXr.deposeBoss1.call(newBoss1QCtUvR, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Reseller', async () => {
		const USDTAddrxpQxRDW = accounts[3]
		const FOSTERAddrxQpCpcp = accounts[4]
		const initialRatenT4h8Ny = BigInt("15")
		const initialPeriodiO7FYcL = BigInt("742")
		const initialOwnerPR9dOVc = accounts[3]
		const contractKaMp4Gq = await Reseller.new(USDTAddrxpQxRDW, FOSTERAddrxQpCpcp, initialRatenT4h8Ny, initialPeriodiO7FYcL, initialOwnerPR9dOVc, {from: accounts[1]});
		const accountv1QrTDR = accounts[4]
		const accountAcOXCkQ = accounts[2]
		const valueszA6cNX = BigInt("796")
		const recipientPM1VB72 = accounts[6]
		const ERC20TokenVdIFjSP = "0x0000000000000000000000000000000000000002"
		const nullm2Y9X1G = await contractKaMp4Gq.balanceFOSTER.call(accountv1QrTDR, {from: accounts[4]});
		const nullvNlkmIo = await contractKaMp4Gq.allowanceUSDT.call(accountAcOXCkQ, {from: accounts[1]});
		await contractKaMp4Gq.withdrawERC20.call(ERC20TokenVdIFjSP, recipientPM1VB72, valueszA6cNX, {from: accounts[0]});

		await expect(contractKaMp4Gq.balanceFOSTER.call(accountv1QrTDR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrn3hnLEq = accounts[0]
		const FOSTERAddrskkunr = accounts[3]
		const initialRatetPMdxpK = BigInt("1275")
		const initialPeriodbD9JfsG = BigInt("699")
		const initialOwnerhg60Stv = "0x0000000000000000000000000000000000000001"
		const contractSM2S0z9 = await Reseller.new(USDTAddrn3hnLEq, FOSTERAddrskkunr, initialRatetPMdxpK, initialPeriodbD9JfsG, initialOwnerhg60Stv, {from: accounts[2]});
		const amountFq6NR8V = BigInt("1794")
		const accountup21tgg = accounts[4]
		const commentPbQxaE = "rPdth2GjDBDhDsnHhqYfT34PSSN0Zts7NyOrN9wyQLSaQj13dRC29XqYkmH61jQ"
		const _ref5Z9CCSlR = "0x0000000000000000000000000000000000000001"
		const _ref4EsPOVXa = "0x0000000000000000000000000000000000000001"
		const _ref39MTP2y = accounts[1]
		const _ref2loPUBr4 = accounts[3]
		const _ref1OHbn5mP = accounts[0]
		const valuefVfgjmb = BigInt("1055")
		const nullE0Ddip = await contractSM2S0z9.getEstimation.call(amountFq6NR8V, {from: accounts[0]});
		const null94ATMY = await contractSM2S0z9.allowanceFOSTER.call(accountup21tgg, {from: accounts[0]});
		await contractSM2S0z9.purchase.call(valuefVfgjmb, _ref1OHbn5mP, _ref2loPUBr4, _ref39MTP2y, _ref4EsPOVXa, _ref5Z9CCSlR, commentPbQxaE, {from: accounts[1]});

		assert.equal(nullE0Ddip, 2287350)
		await expect(contractSM2S0z9.allowanceFOSTER.call(accountup21tgg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
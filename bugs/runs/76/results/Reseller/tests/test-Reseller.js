const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrA9ETJ7r = accounts[4]
		const FOSTERAddrNb7HouI = accounts[2]
		const initialRate9qCkDM = BigInt("1150")
		const initialPeriodefmL5BV = BigInt("1035")
		const initialOwnerUWrVgL0 = accounts[3]
		const contractrED0H8v = await Reseller.new(USDTAddrA9ETJ7r, FOSTERAddrNb7HouI, initialRate9qCkDM, initialPeriodefmL5BV, initialOwnerUWrVgL0, {from: accounts[3]});
		const level5WJ5Cf3k = BigInt("91")
		const level4THwGCbX = BigInt("11")
		const level3Ko4vnz = BigInt("43")
		const level2d1aAQ7v = BigInt("125")
		const level1gqSvyq5 = BigInt("73")
		const accountiRcT4Qp = accounts[2]
		const level5ves9xwh = BigInt("14")
		const level4k8KorhP = BigInt("47")
		const level3rV3fHnL = BigInt("11")
		const level2BXXXYZl = BigInt("150")
		const level1hJ1IVY = BigInt("74")
		await contractrED0H8v.setRefBonus.call(level1gqSvyq5, level2d1aAQ7v, level3Ko4vnz, level4THwGCbX, level5WJ5Cf3k, {from: accounts[4]});
		const nullez6aakh = await contractrED0H8v.allowanceUSDT.call(accountiRcT4Qp, {from: accounts[2]});
		await contractrED0H8v.setRefBonus.call(level1hJ1IVY, level2BXXXYZl, level3rV3fHnL, level4k8KorhP, level5ves9xwh, {from: accounts[2]});

		await expect(contractrED0H8v.setRefBonus.call(level1gqSvyq5, level2d1aAQ7v, level3Ko4vnz, level4THwGCbX, level5WJ5Cf3k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgMDKRoW = accounts[2]
		const FOSTERAddra0reh7U = accounts[4]
		const initialRateKm0y3G = BigInt("147")
		const initialPeriodaSvNCU9 = BigInt("1646")
		const initialOwnerOyLPgAw = accounts[1]
		const contractn8ZRqG2 = await Reseller.new(USDTAddrgMDKRoW, FOSTERAddra0reh7U, initialRateKm0y3G, initialPeriodaSvNCU9, initialOwnerOyLPgAw, {from: accounts[0]});
		const newFeeUZ5Cvqx = BigInt("136")
		const newBoss1ofWoZzV = accounts[2]
		const newRateYzFDVn = BigInt("1000")
		const newBoss2qua8Or = accounts[2]
		const newBoss1mtlUv86 = accounts[0]
		await contractn8ZRqG2.setFee.call(newFeeUZ5Cvqx, {from: accounts[4]});
		await contractn8ZRqG2.deposeBoss1.call(newBoss1ofWoZzV, {from: "0x0000000000000000000000000000000000000001"});
		await contractn8ZRqG2.setRate.call(newRateYzFDVn, {from: accounts[1]});
		await contractn8ZRqG2.deposeBoss2.call(newBoss2qua8Or, {from: accounts[0]});
		await contractn8ZRqG2.deposeBoss1.call(newBoss1mtlUv86, {from: accounts[2]});

		await expect(contractn8ZRqG2.setFee.call(newFeeUZ5Cvqx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrA24Ei2r = accounts[1]
		const FOSTERAddrBRxhiTV = accounts[3]
		const initialRateIbpNkow = BigInt("150")
		const initialPeriodRiX94vn = BigInt("1759")
		const initialOwneraBBCGCm = accounts[4]
		const contractfb85vZe = await Reseller.new(USDTAddrA24Ei2r, FOSTERAddrBRxhiTV, initialRateIbpNkow, initialPeriodRiX94vn, initialOwneraBBCGCm, {from: accounts[2]});
		const _periodebyw36q = BigInt("22")
		const amountlHLLFcZ = BigInt("575")
		const recipientEO1mbID = accounts[0]
		const commentLkVm9vm = "ykBQcHlyXMQvkjVHNBWxdj2jJNByvYKY"
		const _ref5JGypLSr = accounts[5]
		const _ref4fe4nAP3 = accounts[0]
		const _ref3aTH3Xuy = accounts[1]
		const _ref2RvHm9PT = accounts[2]
		const _ref1grCgyJ = accounts[4]
		const valuezobpFhA = BigInt("1516")
		const _ref5pwMbVO9 = accounts[4]
		const _ref4kPZyUjP = "0x0000000000000000000000000000000000000001"
		const _ref3VqrsUlN = accounts[1]
		const _ref2OEBE5C6 = accounts[0]
		const _ref1AKZlbVg = "0x0000000000000000000000000000000000000001"
		const valuefR49O9 = BigInt("1960")
		const amount1MSUVY = BigInt("1996")
		await contractfb85vZe.freezeAndTransfer.call(recipientEO1mbID, amountlHLLFcZ, _periodebyw36q, {from: accounts[1]});
		await contractfb85vZe.purchase.call(valuezobpFhA, _ref1grCgyJ, _ref2RvHm9PT, _ref3aTH3Xuy, _ref4fe4nAP3, _ref5JGypLSr, commentLkVm9vm, {from: accounts[0]});
		await contractfb85vZe.buy.call(valuefR49O9, _ref1AKZlbVg, _ref2OEBE5C6, _ref3VqrsUlN, _ref4kPZyUjP, _ref5pwMbVO9, {from: accounts[3]});
		const nullcAAmH8Q = await contractfb85vZe.getEstimation.call(amount1MSUVY, {from: accounts[3]});

		await expect(contractfb85vZe.freezeAndTransfer.call(recipientEO1mbID, amountlHLLFcZ, _periodebyw36q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTDkkWiK = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrJvnsLVy = accounts[3]
		const initialRateFYxzeXA = BigInt("658")
		const initialPeriodtXWiFrJ = BigInt("1500")
		const initialOwnerGAVMrZU = accounts[4]
		const contractH4uCUH0 = await Reseller.new(USDTAddrTDkkWiK, FOSTERAddrJvnsLVy, initialRateFYxzeXA, initialPeriodtXWiFrJ, initialOwnerGAVMrZU, {from: accounts[1]});
		const accounti2qGHCK = accounts[0]
		const _periodNUCLMQF = BigInt("103")
		const amountdiHHsTB = BigInt("743")
		const recipientQCA6pVs = accounts[4]
		const newBoss2md6HIF = accounts[4]
		const valueXUNPgZq = BigInt("1607")
		const recipientMXLIpN = accounts[4]
		const ERC20TokenVAcD8b1 = accounts[1]
		const accountRKZUvWp = accounts[3]
		const nullWcOpXvk = await contractH4uCUH0.allowanceUSDT.call(accounti2qGHCK, {from: accounts[5]});
		await contractH4uCUH0.freezeAndTransfer.call(recipientQCA6pVs, amountdiHHsTB, _periodNUCLMQF, {from: accounts[0]});
		await contractH4uCUH0.deposeBoss2.call(newBoss2md6HIF, {from: "0x0000000000000000000000000000000000000001"});
		await contractH4uCUH0.withdrawERC20.call(ERC20TokenVAcD8b1, recipientMXLIpN, valueXUNPgZq, {from: accounts[5]});
		await contractH4uCUH0.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		const nullamk407N = await contractH4uCUH0.allowanceUSDT.call(accountRKZUvWp, {from: accounts[3]});

		await expect(contractH4uCUH0.allowanceUSDT.call(accounti2qGHCK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriTD72ak = accounts[0]
		const FOSTERAddrk9u8vqt = accounts[2]
		const initialRateMV8lAIR = BigInt("1625")
		const initialPeriodAIgZQ4G = BigInt("515")
		const initialOwnerulcOCJR = accounts[4]
		const contractCqHjMOE = await Reseller.new(USDTAddriTD72ak, FOSTERAddrk9u8vqt, initialRateMV8lAIR, initialPeriodAIgZQ4G, initialOwnerulcOCJR, {from: "0x0000000000000000000000000000000000000001"});
		const newMinimumZEo9uoX = BigInt("743")
		const valueJ4RgZCU = BigInt("686")
		const recipientYzSNnaf = accounts[4]
		const ERC20Tokend2A9BIh = accounts[5]
		const newBoss4O98oIws = accounts[0]
		const accountpM27vKJ = accounts[1]
		await contractCqHjMOE.setMinimum.call(newMinimumZEo9uoX, {from: accounts[2]});
		await contractCqHjMOE.withdrawERC20.call(ERC20Tokend2A9BIh, recipientYzSNnaf, valueJ4RgZCU, {from: "0x0000000000000000000000000000000000000001"});
		await contractCqHjMOE.deposeBoss4.call(newBoss4O98oIws, {from: accounts[4]});
		const nulluNJPmJN = await contractCqHjMOE.allowanceUSDT.call(accountpM27vKJ, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrPLbF9k = accounts[0]
		const FOSTERAddrpRHyU5 = accounts[1]
		const initialRate9R7rUq = BigInt("2016")
		const initialPeriodVw76j5a = BigInt("1857")
		const initialOwnerPhYKVrP = accounts[2]
		const contractCam3mPG = await Reseller.new(USDTAddrPLbF9k, FOSTERAddrpRHyU5, initialRate9R7rUq, initialPeriodVw76j5a, initialOwnerPhYKVrP, {from: accounts[0]});
		const accountRqpW1Bx = accounts[2]
		const accountnzmIC7 = accounts[0]
		const _periodXN7B0zm = BigInt("1828")
		const amountoYzcKPa = BigInt("1377")
		const recipientta4npI = accounts[1]
		const newRateuanJtPi = BigInt("224")
		const newPeriodCpbpdCm = BigInt("1668")
		const nullav0SvUU = await contractCam3mPG.balanceUSDT.call(accountRqpW1Bx, {from: accounts[3]});
		const nullMyw3AR = await contractCam3mPG.balanceUSDT.call(accountnzmIC7, {from: accounts[0]});
		await contractCam3mPG.freezeAndTransfer.call(recipientta4npI, amountoYzcKPa, _periodXN7B0zm, {from: accounts[4]});
		await contractCam3mPG.setRate.call(newRateuanJtPi, {from: accounts[3]});
		await contractCam3mPG.setPeriod.call(newPeriodCpbpdCm, {from: accounts[0]});

		await expect(contractCam3mPG.balanceUSDT.call(accountRqpW1Bx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreKYFLQD = accounts[4]
		const FOSTERAddrNw17Dez = accounts[0]
		const initialRatelKGUcGq = BigInt("1299")
		const initialPeriodgWyQE86 = BigInt("328")
		const initialOwnerD5NSEYQ = accounts[4]
		const contractKDyQr1S = await Reseller.new(USDTAddreKYFLQD, FOSTERAddrNw17Dez, initialRatelKGUcGq, initialPeriodgWyQE86, initialOwnerD5NSEYQ, {from: accounts[1]});
		const accountklsCDgH = accounts[3]
		const newBoss1OuPcuJ = accounts[4]
		const valueZAVfw5 = BigInt("2011")
		const recipientB2S4SwK = accounts[1]
		const ERC20TokenxLbYAwK = accounts[1]
		const amountAwD9Ksi = BigInt("1756")
		const amountNDKz2V0 = BigInt("521")
		const nullWp1cfg = await contractKDyQr1S.balanceFOSTER.call(accountklsCDgH, {from: accounts[5]});
		await contractKDyQr1S.deposeBoss1.call(newBoss1OuPcuJ, {from: accounts[0]});
		await contractKDyQr1S.withdrawERC20.call(ERC20TokenxLbYAwK, recipientB2S4SwK, valueZAVfw5, {from: accounts[4]});
		const nullGeUw6HD = await contractKDyQr1S.getEstimation.call(amountAwD9Ksi, {from: accounts[1]});
		const nullZxseAhF = await contractKDyQr1S.getEstimation.call(amountNDKz2V0, {from: accounts[4]});

		await expect(contractKDyQr1S.balanceFOSTER.call(accountklsCDgH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrw2TXdXX = accounts[3]
		const FOSTERAddrSkYCuNG = accounts[2]
		const initialRateDbNwYe = BigInt("1943")
		const initialPeriodIBDxNWS = BigInt("1438")
		const initialOwneruwqmdjC = accounts[4]
		const contractZn8Wg9V = await Reseller.new(USDTAddrw2TXdXX, FOSTERAddrSkYCuNG, initialRateDbNwYe, initialPeriodIBDxNWS, initialOwneruwqmdjC, {from: accounts[0]});
		const newRateyGZwx03 = BigInt("875")
		const amountES1yXRv = BigInt("194")
		await contractZn8Wg9V.setRate.call(newRateyGZwx03, {from: accounts[1]});
		const nullwhMjcJH = await contractZn8Wg9V.getEstimation.call(amountES1yXRv, {from: accounts[2]});

		await expect(contractZn8Wg9V.setRate.call(newRateyGZwx03, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNj8NnuX = accounts[5]
		const FOSTERAddrd2F3kjD = accounts[1]
		const initialRateVaCW8uO = BigInt("664")
		const initialPeriodCFPOULM = BigInt("728")
		const initialOwneriqnkeGq = accounts[1]
		const contractfaDez7 = await Reseller.new(USDTAddrNj8NnuX, FOSTERAddrd2F3kjD, initialRateVaCW8uO, initialPeriodCFPOULM, initialOwneriqnkeGq, {from: accounts[1]});
		const newBoss2bOrxRQN = accounts[2]
		const newFeeQkKCD1D = BigInt("158")
		const newPeriodep5h60d = BigInt("367")
		const newMinimumHiqo7t9 = BigInt("1928")
		await contractfaDez7.deposeBoss2.call(newBoss2bOrxRQN, {from: accounts[0]});
		await contractfaDez7.setFee.call(newFeeQkKCD1D, {from: accounts[3]});
		await contractfaDez7.setPeriod.call(newPeriodep5h60d, {from: accounts[4]});
		await contractfaDez7.setMinimum.call(newMinimumHiqo7t9, {from: accounts[1]});

		await expect(contractfaDez7.deposeBoss2.call(newBoss2bOrxRQN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVFKUKR8 = accounts[0]
		const FOSTERAddrFMElyMT = accounts[2]
		const initialRatekkGQ37r = BigInt("1021")
		const initialPeriodn4Kq4S = BigInt("274")
		const initialOwnerlS8OOJH = accounts[1]
		const contractkWd6DGy = await Reseller.new(USDTAddrVFKUKR8, FOSTERAddrFMElyMT, initialRatekkGQ37r, initialPeriodn4Kq4S, initialOwnerlS8OOJH, {from: accounts[4]});
		const amountvS0Qba = BigInt("308")
		const _periodaS01GoA = BigInt("545")
		const amountFuAJJ3 = BigInt("1448")
		const recipientkX8VC5K = accounts[3]
		const accountNfaxhkz = accounts[0]
		const nullLWkiwzH = await contractkWd6DGy.getEstimation.call(amountvS0Qba, {from: accounts[2]});
		await contractkWd6DGy.freezeAndTransfer.call(recipientkX8VC5K, amountFuAJJ3, _periodaS01GoA, {from: accounts[5]});
		const nullTMYAF0i = await contractkWd6DGy.balanceUSDT.call(accountNfaxhkz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullLWkiwzH, 314468)
		await expect(contractkWd6DGy.freezeAndTransfer.call(recipientkX8VC5K, amountFuAJJ3, _periodaS01GoA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVJolqNx = accounts[0]
		const FOSTERAddrOE1iCND = accounts[4]
		const initialRateE99a6TI = BigInt("1776")
		const initialPeriodSMrT3VL = BigInt("238")
		const initialOwnerhw0SMKc = "0x0000000000000000000000000000000000000001"
		const contracthOAIo3J = await Reseller.new(USDTAddrVJolqNx, FOSTERAddrOE1iCND, initialRateE99a6TI, initialPeriodSMrT3VL, initialOwnerhw0SMKc, {from: accounts[2]});
		const valuesqcK5ka = BigInt("724")
		const newBoss3a309qOU = accounts[2]
		await contracthOAIo3J.withdraw.call(valuesqcK5ka, {from: accounts[1]});
		await contracthOAIo3J.deposeBoss3.call(newBoss3a309qOU, {from: accounts[0]});

		await expect(contracthOAIo3J.withdraw.call(valuesqcK5ka, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriuSnoSf = accounts[0]
		const FOSTERAddrgTBjz39 = accounts[2]
		const initialRateDNmxbZ = BigInt("1021")
		const initialPeriodPKOVreD = BigInt("274")
		const initialOwnerEhgLup8 = accounts[1]
		const contractxPU8DkO = await Reseller.new(USDTAddriuSnoSf, FOSTERAddrgTBjz39, initialRateDNmxbZ, initialPeriodPKOVreD, initialOwnerEhgLup8, {from: accounts[4]});
		const amountW9OuHrK = BigInt("308")
		const valueaxrmdcj = BigInt("1598")
		const recipientj3qI5xw = accounts[3]
		const ERC20TokenE0hnFfc = accounts[5]
		const _periodhTmEcz = BigInt("545")
		const amountyV36XSz = BigInt("1448")
		const recipientmOqrJSZ = accounts[3]
		const accounta5zSbxM = accounts[0]
		const nullFCRkhyN = await contractxPU8DkO.getEstimation.call(amountW9OuHrK, {from: accounts[2]});
		await contractxPU8DkO.switchState.call({from: accounts[3]});
		await contractxPU8DkO.withdrawERC20.call(ERC20TokenE0hnFfc, recipientj3qI5xw, valueaxrmdcj, {from: accounts[0]});
		await contractxPU8DkO.freezeAndTransfer.call(recipientmOqrJSZ, amountyV36XSz, _periodhTmEcz, {from: accounts[5]});
		const nulltZQsaya = await contractxPU8DkO.balanceUSDT.call(accounta5zSbxM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullFCRkhyN, 314468)
		await expect(contractxPU8DkO.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzKEaKNf = accounts[4]
		const FOSTERAddrtWX9MaX = accounts[2]
		const initialRateEqHPivQ = BigInt("1150")
		const initialPeriodeDFZjf = BigInt("1035")
		const initialOwnerIMZo3hv = accounts[3]
		const contractaRDfMVe = await Reseller.new(USDTAddrzKEaKNf, FOSTERAddrtWX9MaX, initialRateEqHPivQ, initialPeriodeDFZjf, initialOwnerIMZo3hv, {from: accounts[3]});
		const accountsASc6qK = accounts[1]
		const commentRV3dBzg = "IVDcC7JjX7S67zIx8ihYgT7eFxvUXY5Z7cDg7a6JO7It9Shpc"
		const _ref5DzFyR9 = accounts[0]
		const _ref4ZzJMNV = accounts[3]
		const _ref3nr9CGMB = accounts[4]
		const _ref2SROzHFI = accounts[4]
		const _ref1fsOaPFH = accounts[3]
		const valuepV80JRO = BigInt("1879")
		const level5M7Mwd1v = BigInt("14")
		const level4frl0w4H = BigInt("47")
		const level3cAJ0YN8 = BigInt("11")
		const level2Wj22W9 = BigInt("150")
		const level1rzZcy3z = BigInt("74")
		const nullwaeCpYS = await contractaRDfMVe.allowanceFOSTER.call(accountsASc6qK, {from: accounts[2]});
		await contractaRDfMVe.purchase.call(valuepV80JRO, _ref1fsOaPFH, _ref2SROzHFI, _ref3nr9CGMB, _ref4ZzJMNV, _ref5DzFyR9, commentRV3dBzg, {from: accounts[5]});
		await contractaRDfMVe.setRefBonus.call(level1rzZcy3z, level2Wj22W9, level3cAJ0YN8, level4frl0w4H, level5M7Mwd1v, {from: accounts[2]});

		await expect(contractaRDfMVe.allowanceFOSTER.call(accountsASc6qK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdE5s69M = accounts[4]
		const FOSTERAddrVA3d68Q = accounts[2]
		const initialRateCNGa9wc = BigInt("1150")
		const initialPeriodJKEkOi1 = BigInt("1035")
		const initialOwnerp8nUYCX = accounts[3]
		const contractJ9or0zy = await Reseller.new(USDTAddrdE5s69M, FOSTERAddrVA3d68Q, initialRateCNGa9wc, initialPeriodJKEkOi1, initialOwnerp8nUYCX, {from: accounts[3]});
		const newBoss4E1vmCmf = accounts[0]
		const level5NtbZSB = BigInt("14")
		const level4NbdwCIW = BigInt("29")
		const level3xEjBJCE = BigInt("11")
		const level2nMwOT0A = BigInt("150")
		const level1y1FirdL = BigInt("74")
		await contractJ9or0zy.deposeBoss4.call(newBoss4E1vmCmf, {from: accounts[0]});
		await contractJ9or0zy.setRefBonus.call(level1y1FirdL, level2nMwOT0A, level3xEjBJCE, level4NbdwCIW, level5NtbZSB, {from: accounts[2]});

		await expect(contractJ9or0zy.deposeBoss4.call(newBoss4E1vmCmf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVmzEIZ2 = accounts[5]
		const FOSTERAddrQPJ4eED = accounts[1]
		const initialRatefCYl1jo = BigInt("664")
		const initialPeriodrwuNicu = BigInt("728")
		const initialOwnerUaq15Mr = accounts[1]
		const contractNX8PFj = await Reseller.new(USDTAddrVmzEIZ2, FOSTERAddrQPJ4eED, initialRatefCYl1jo, initialPeriodrwuNicu, initialOwnerUaq15Mr, {from: accounts[1]});
		const level5FGRjIR0 = BigInt("105")
		const level4fedMkl = BigInt("69")
		const level3sAEy3c9 = BigInt("116")
		const level2giPyE5d = BigInt("138")
		const level1YiXhGIB = BigInt("195")
		const newFeeiVAKnsA = BigInt("161")
		const accountKqBuhWV = "0x0000000000000000000000000000000000000001"
		const accountprAT8S = accounts[2]
		const newPeriodXmxIsUs = BigInt("378")
		await contractNX8PFj.setRefBonus.call(level1YiXhGIB, level2giPyE5d, level3sAEy3c9, level4fedMkl, level5FGRjIR0, {from: accounts[1]});
		await contractNX8PFj.setFee.call(newFeeiVAKnsA, {from: accounts[3]});
		const nullXDQXu7d = await contractNX8PFj.allowanceFOSTER.call(accountKqBuhWV, {from: accounts[1]});
		const nullWF8vp0c = await contractNX8PFj.allowanceUSDT.call(accountprAT8S, {from: accounts[1]});
		await contractNX8PFj.setPeriod.call(newPeriodXmxIsUs, {from: accounts[4]});

		await expect(contractNX8PFj.setRefBonus.call(level1YiXhGIB, level2giPyE5d, level3sAEy3c9, level4fedMkl, level5FGRjIR0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZHruaK = accounts[5]
		const FOSTERAddrJUOw0t6 = accounts[1]
		const initialRateJAMNsQD = BigInt("664")
		const initialPeriodJj7KtAB = BigInt("728")
		const initialOwnerqkvMHCI = accounts[1]
		const contractyVfxMX = await Reseller.new(USDTAddrZHruaK, FOSTERAddrJUOw0t6, initialRateJAMNsQD, initialPeriodJj7KtAB, initialOwnerqkvMHCI, {from: accounts[1]});
		const commentSGykUGr = "GAermfUJe8SR5ptCrTl53OznhFWth4SHu25w9IDTEGkIbCkDZ"
		const _ref5gO3yrj3 = accounts[0]
		const _ref4A9bfCfQ = accounts[1]
		const _ref3MsTbMi8 = accounts[5]
		const _ref2RVlkKlH = accounts[0]
		const _ref1Rb9NiJp = accounts[3]
		const valuenjOGLhb = BigInt("1805")
		const newFeezdzivgS = BigInt("161")
		const accountdgRPMP = "0x0000000000000000000000000000000000000002"
		const valueJQx0SjF = BigInt("1035")
		const amountD7m1rZv = BigInt("1683")
		const newPeriodIURRXoQ = BigInt("367")
		await contractyVfxMX.purchase.call(valuenjOGLhb, _ref1Rb9NiJp, _ref2RVlkKlH, _ref3MsTbMi8, _ref4A9bfCfQ, _ref5gO3yrj3, commentSGykUGr, {from: accounts[2]});
		await contractyVfxMX.setFee.call(newFeezdzivgS, {from: accounts[3]});
		const nulluX6S8aj = await contractyVfxMX.allowanceFOSTER.call(accountdgRPMP, {from: accounts[1]});
		await contractyVfxMX.withdraw.call(valueJQx0SjF, {from: accounts[5]});
		const nulliD2e57 = await contractyVfxMX.getEstimation.call(amountD7m1rZv, {from: accounts[1]});
		await contractyVfxMX.setPeriod.call(newPeriodIURRXoQ, {from: accounts[4]});

		await expect(contractyVfxMX.purchase.call(valuenjOGLhb, _ref1Rb9NiJp, _ref2RVlkKlH, _ref3MsTbMi8, _ref4A9bfCfQ, _ref5gO3yrj3, commentSGykUGr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTLV9hKn = accounts[3]
		const FOSTERAddrx9m7dHn = accounts[1]
		const initialRateaExw50a = BigInt("1230")
		const initialPeriodYQmw2VG = BigInt("629")
		const initialOwnerOvVtDAJ = accounts[0]
		const contractxlMU99o = await Reseller.new(USDTAddrTLV9hKn, FOSTERAddrx9m7dHn, initialRateaExw50a, initialPeriodYQmw2VG, initialOwnerOvVtDAJ, {from: accounts[3]});
		const _ref5ZytBm8 = accounts[4]
		const _ref4oVQjoia = accounts[3]
		const _ref3MyBTYsK = "0x0000000000000000000000000000000000000001"
		const _ref2NbH9MRQ = accounts[5]
		const _ref1MBJrXjY = accounts[3]
		const valuelqFiNVz = BigInt("720")
		const newRateSDcCcG2 = BigInt("1398")
		await contractxlMU99o.buy.call(valuelqFiNVz, _ref1MBJrXjY, _ref2NbH9MRQ, _ref3MyBTYsK, _ref4oVQjoia, _ref5ZytBm8, {from: accounts[3]});
		await contractxlMU99o.switchState.call({from: accounts[2]});
		await contractxlMU99o.setRate.call(newRateSDcCcG2, {from: accounts[0]});

		await expect(contractxlMU99o.buy.call(valuelqFiNVz, _ref1MBJrXjY, _ref2NbH9MRQ, _ref3MyBTYsK, _ref4oVQjoia, _ref5ZytBm8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYnJAa6e = accounts[0]
		const FOSTERAddrdiqoqYO = accounts[4]
		const initialRateUgy13DS = BigInt("1776")
		const initialPeriodYXoMPa = BigInt("238")
		const initialOwnerfX7EIFd = "0x0000000000000000000000000000000000000001"
		const contractmqrViV0 = await Reseller.new(USDTAddrYnJAa6e, FOSTERAddrdiqoqYO, initialRateUgy13DS, initialPeriodYXoMPa, initialOwnerfX7EIFd, {from: accounts[2]});
		const newBoss36URaSJ = accounts[2]
		await contractmqrViV0.deposeBoss3.call(newBoss36URaSJ, {from: accounts[0]});

		await expect(contractmqrViV0.deposeBoss3.call(newBoss36URaSJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbMISQdg = accounts[3]
		const FOSTERAddrd459L6K = accounts[2]
		const initialRateDVzuCyk = BigInt("1943")
		const initialPeriodirocIAa = BigInt("1438")
		const initialOwnertFPC0x = accounts[4]
		const contractTIGlUV5 = await Reseller.new(USDTAddrbMISQdg, FOSTERAddrd459L6K, initialRateDVzuCyk, initialPeriodirocIAa, initialOwnertFPC0x, {from: accounts[0]});
		const valuecp0h9Y = BigInt("1146")
		const recipientEJXgdKq = "0x0000000000000000000000000000000000000001"
		const ERC20TokenUOqsim = "0x0000000000000000000000000000000000000001"
		const newBoss2ZQ0zPFz = accounts[4]
		const amountbyZr4ui = BigInt("124")
		const newRatePg59JU8 = BigInt("893")
		await contractTIGlUV5.withdrawERC20.call(ERC20TokenUOqsim, recipientEJXgdKq, valuecp0h9Y, {from: accounts[0]});
		await contractTIGlUV5.deposeBoss2.call(newBoss2ZQ0zPFz, {from: accounts[1]});
		const nullj1BBwMp = await contractTIGlUV5.getEstimation.call(amountbyZr4ui, {from: accounts[0]});
		await contractTIGlUV5.setRate.call(newRatePg59JU8, {from: accounts[1]});

		await expect(contractTIGlUV5.withdrawERC20.call(ERC20TokenUOqsim, recipientEJXgdKq, valuecp0h9Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrP4sbMKw = accounts[5]
		const FOSTERAddrrvy9eDr = "0x0000000000000000000000000000000000000001"
		const initialRateuuj445R = BigInt("1225")
		const initialPeriodloLOGZN = BigInt("1389")
		const initialOwnerDPO16gk = accounts[4]
		const contractMvkuVV6 = await Reseller.new(USDTAddrP4sbMKw, FOSTERAddrrvy9eDr, initialRateuuj445R, initialPeriodloLOGZN, initialOwnerDPO16gk, {from: accounts[0]});
		const amounteyBCbz = BigInt("628")
		const newMinimumkPz7V2Q = BigInt("217")
		const newRateO1lXHB = BigInt("10")
		const nullLSZFRXF = await contractMvkuVV6.getEstimation.call(amounteyBCbz, {from: accounts[0]});
		await contractMvkuVV6.setMinimum.call(newMinimumkPz7V2Q, {from: accounts[4]});
		await contractMvkuVV6.setRate.call(newRateO1lXHB, {from: accounts[3]});

		assert.equal(nullLSZFRXF, 769300)
		await expect(contractMvkuVV6.setMinimum.call(newMinimumkPz7V2Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJZPMp5F = accounts[0]
		const FOSTERAddru7PqAt7 = accounts[4]
		const initialRateANqEuw = BigInt("1776")
		const initialPeriodqrFhu79 = BigInt("238")
		const initialOwnerLatoUVv = "0x0000000000000000000000000000000000000001"
		const contractzGQQWNT = await Reseller.new(USDTAddrJZPMp5F, FOSTERAddru7PqAt7, initialRateANqEuw, initialPeriodqrFhu79, initialOwnerLatoUVv, {from: accounts[2]});
		const newRateyicRxaM = BigInt("1318")
		const newBoss3BkqA9qT = accounts[3]
		await contractzGQQWNT.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractzGQQWNT.setRate.call(newRateyicRxaM, {from: accounts[0]});
		await contractzGQQWNT.deposeBoss3.call(newBoss3BkqA9qT, {from: accounts[0]});

		await expect(contractzGQQWNT.switchState.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTm3qrQA = accounts[0]
		const FOSTERAddrBtp0eL3 = accounts[1]
		const initialRateIGWtjqp = BigInt("377")
		const initialPeriodxSa6uHP = BigInt("1920")
		const initialOwnerCkSRKJ = "0x0000000000000000000000000000000000000001"
		const contractBKWPaGY = await Reseller.new(USDTAddrTm3qrQA, FOSTERAddrBtp0eL3, initialRateIGWtjqp, initialPeriodxSa6uHP, initialOwnerCkSRKJ, {from: accounts[2]});
		const amountnO25m4k = BigInt("304")
		const newPeriodaDd2u98 = BigInt("586")
		const _periodBXVj2IR = BigInt("375")
		const amountK0mFhec = BigInt("1194")
		const recipientu5QxYfA = accounts[4]
		const newPeriodeTcEwcT = BigInt("1500")
		const nullcEgBgQt = await contractBKWPaGY.getEstimation.call(amountnO25m4k, {from: accounts[4]});
		await contractBKWPaGY.setPeriod.call(newPeriodaDd2u98, {from: accounts[0]});
		await contractBKWPaGY.freezeAndTransfer.call(recipientu5QxYfA, amountK0mFhec, _periodBXVj2IR, {from: accounts[3]});
		await contractBKWPaGY.setPeriod.call(newPeriodeTcEwcT, {from: accounts[2]});
		await contractBKWPaGY.switchState.call({from: accounts[5]});

		assert.equal(nullcEgBgQt, 114608)
		await expect(contractBKWPaGY.setPeriod.call(newPeriodaDd2u98, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIEiHz4 = accounts[4]
		const FOSTERAddrPWtjJgj = accounts[2]
		const initialRateSKYBsif = BigInt("1150")
		const initialPerioduWDkhou = BigInt("1035")
		const initialOwnerLF5KNRJ = accounts[3]
		const contracta4Trlo = await Reseller.new(USDTAddrIEiHz4, FOSTERAddrPWtjJgj, initialRateSKYBsif, initialPerioduWDkhou, initialOwnerLF5KNRJ, {from: accounts[3]});
		const newBoss4tiXUsUz = accounts[1]
		const newBoss4r7ME7MK = accounts[1]
		const commentuJxWa8B = "IGRzVVT4xF3VgZxQJs3IouqVwYp6K68sc1qj7PyiM5zfBHX1kv95adKs92UQahVGE74vSsIHp"
		const _ref5NwyTh0z = "0x0000000000000000000000000000000000000001"
		const _ref4tH7b4uS = accounts[5]
		const _ref3xW7TvvD = accounts[5]
		const _ref2E2LMaez = accounts[1]
		const _ref1FyI3fd9 = accounts[0]
		const valueikc1eFd = BigInt("513")
		await contracta4Trlo.deposeBoss4.call(newBoss4tiXUsUz, {from: accounts[3]});
		await contracta4Trlo.deposeBoss4.call(newBoss4r7ME7MK, {from: accounts[0]});
		await contracta4Trlo.purchase.call(valueikc1eFd, _ref1FyI3fd9, _ref2E2LMaez, _ref3xW7TvvD, _ref4tH7b4uS, _ref5NwyTh0z, commentuJxWa8B, {from: accounts[3]});

		await expect(contracta4Trlo.deposeBoss4.call(newBoss4tiXUsUz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbSIm4nJ = accounts[5]
		const FOSTERAddro0AHItH = accounts[1]
		const initialRateUdMdXXE = BigInt("664")
		const initialPeriodSjiIxi0 = BigInt("728")
		const initialOwnerw5wHlhz = accounts[1]
		const contractjH5UVss = await Reseller.new(USDTAddrbSIm4nJ, FOSTERAddro0AHItH, initialRateUdMdXXE, initialPeriodSjiIxi0, initialOwnerw5wHlhz, {from: accounts[1]});
		const newBoss1GsrNE14 = "0x0000000000000000000000000000000000000001"
		const commentc0YwCmv = "GAermfUJe8SR5ptCrTl53OznhFWth4SHu25w9IDTEGkIbCkDZ"
		const _ref5fRuuP6P = accounts[0]
		const _ref4l0sS899 = accounts[1]
		const _ref3BqxS7IT = accounts[5]
		const _ref2EdZYsAy = accounts[0]
		const _ref1Pqjv8A = accounts[3]
		const valueBFdxFgF = BigInt("1805")
		const commentzicLaV0 = "Z7Nkfl9dgsBQEXwAaWYECepz0sCURaf7GQjRPA6IMVejStBoX4oBYMcGpGmIXtpkIFpSeWa9FWhGSfzr"
		const _ref5JWORHx = accounts[4]
		const _ref4pUtxH0e = accounts[2]
		const _ref3KBfbbfS = accounts[3]
		const _ref2Se2eM8 = accounts[3]
		const _ref1gRIsS2V = accounts[0]
		const valueLzOmHqy = BigInt("1901")
		const newFeeqEVt49s = BigInt("161")
		const accountKOkhgPm = "0x0000000000000000000000000000000000000002"
		const amountjvwvMiL = BigInt("1683")
		await contractjH5UVss.deposeBoss1.call(newBoss1GsrNE14, {from: accounts[2]});
		await contractjH5UVss.purchase.call(valueBFdxFgF, _ref1Pqjv8A, _ref2EdZYsAy, _ref3BqxS7IT, _ref4l0sS899, _ref5fRuuP6P, commentc0YwCmv, {from: accounts[2]});
		await contractjH5UVss.purchase.call(valueLzOmHqy, _ref1gRIsS2V, _ref2Se2eM8, _ref3KBfbbfS, _ref4pUtxH0e, _ref5JWORHx, commentzicLaV0, {from: accounts[2]});
		await contractjH5UVss.setFee.call(newFeeqEVt49s, {from: accounts[3]});
		const nully5OAQXX = await contractjH5UVss.allowanceFOSTER.call(accountKOkhgPm, {from: accounts[1]});
		const nullwfjarc4 = await contractjH5UVss.getEstimation.call(amountjvwvMiL, {from: accounts[1]});

		await expect(contractjH5UVss.deposeBoss1.call(newBoss1GsrNE14, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrohZWT2 = accounts[5]
		const FOSTERAddrqlDVjfs = accounts[1]
		const initialRateAmxfQdW = BigInt("664")
		const initialPeriodyQbZmS3 = BigInt("728")
		const initialOwnerAQ9UHmi = accounts[1]
		const contractCRhLaKS = await Reseller.new(USDTAddrohZWT2, FOSTERAddrqlDVjfs, initialRateAmxfQdW, initialPeriodyQbZmS3, initialOwnerAQ9UHmi, {from: accounts[1]});
		const newPeriodiaqKml = BigInt("1747")
		const commentyGrDmS3 = "GAermfUJe8SR5ptCrTl53OznhFWth4SHu25w9IDTEGkIbCkDZ"
		const _ref5WvMKE4P = accounts[0]
		const _ref4KLDZ67M = accounts[1]
		const _ref3Hi6SXQc = accounts[5]
		const _ref28uiNEq = accounts[0]
		const _ref1TYDlRS4 = accounts[3]
		const valueOs4gRro = BigInt("1805")
		const newPeriodNaa5w4h = BigInt("792")
		const newFee86IGwU = BigInt("141")
		const accountPyoW1lP = "0x0000000000000000000000000000000000000002"
		await contractCRhLaKS.setPeriod.call(newPeriodiaqKml, {from: accounts[1]});
		await contractCRhLaKS.purchase.call(valueOs4gRro, _ref1TYDlRS4, _ref28uiNEq, _ref3Hi6SXQc, _ref4KLDZ67M, _ref5WvMKE4P, commentyGrDmS3, {from: accounts[2]});
		await contractCRhLaKS.setPeriod.call(newPeriodNaa5w4h, {from: accounts[2]});
		await contractCRhLaKS.setFee.call(newFee86IGwU, {from: accounts[3]});
		const nullA0MwESn = await contractCRhLaKS.allowanceFOSTER.call(accountPyoW1lP, {from: accounts[1]});

		await expect(contractCRhLaKS.setPeriod.call(newPeriodiaqKml, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLj4Lsc = accounts[4]
		const FOSTERAddrEQOOYYw = accounts[4]
		const initialRateEaOshOM = BigInt("1236")
		const initialPeriodovutzGb = BigInt("1690")
		const initialOwnerEUX1Wq = accounts[1]
		const contractivxuAoq = await Reseller.new(USDTAddrLj4Lsc, FOSTERAddrEQOOYYw, initialRateEaOshOM, initialPeriodovutzGb, initialOwnerEUX1Wq, {from: accounts[3]});
		const newFeeNTc4X0D = BigInt("172")
		const accountFNxmeAe = accounts[5]
		const newBoss1TQKxje = accounts[3]
		const commentDYCoIt8 = "aDNvcL9DX7g"
		const _ref5BFMgfVQ = accounts[5]
		const _ref4Nrtmt7D = accounts[1]
		const _ref3cZZd4so = accounts[4]
		const _ref2utOPb30 = accounts[3]
		const _ref1VdAaP8 = accounts[4]
		const valueMpMchQz = BigInt("430")
		const valueMEk2kE6 = BigInt("1419")
		await contractivxuAoq.setFee.call(newFeeNTc4X0D, {from: accounts[1]});
		const nullXwU4GMv = await contractivxuAoq.allowanceFOSTER.call(accountFNxmeAe, {from: accounts[1]});
		await contractivxuAoq.deposeBoss1.call(newBoss1TQKxje, {from: accounts[3]});
		await contractivxuAoq.purchase.call(valueMpMchQz, _ref1VdAaP8, _ref2utOPb30, _ref3cZZd4so, _ref4Nrtmt7D, _ref5BFMgfVQ, commentDYCoIt8, {from: "0x0000000000000000000000000000000000000001"});
		await contractivxuAoq.withdraw.call(valueMEk2kE6, {from: accounts[1]});

		await expect(contractivxuAoq.setFee.call(newFeeNTc4X0D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruyxHyHE = accounts[5]
		const FOSTERAddrFE9OHNy = accounts[1]
		const initialRateYuHWt2s = BigInt("664")
		const initialPeriodDC1tz4F = BigInt("728")
		const initialOwnerjGJ6IqN = accounts[1]
		const contractLUSxao7 = await Reseller.new(USDTAddruyxHyHE, FOSTERAddrFE9OHNy, initialRateYuHWt2s, initialPeriodDC1tz4F, initialOwnerjGJ6IqN, {from: accounts[1]});
		const _periodmMrQ1tX = BigInt("1771")
		const amountZHsimjC = BigInt("763")
		const recipientHtiNSnC = "0x0000000000000000000000000000000000000001"
		const newFee52m7o7 = BigInt("187")
		const commentwcTQLXe = "GAermfUJe8SR5ptCrTl53OznhFWth4SHu25w9IDTEGkIbCkDZ"
		const _ref5NRsMg8G = accounts[1]
		const _ref4xLRUVn3 = accounts[1]
		const _ref351e5PG = accounts[5]
		const _ref2MsZlUyF = accounts[0]
		const _ref1UJAMqKb = accounts[4]
		const valueY5Lywc = BigInt("1805")
		await contractLUSxao7.freezeAndTransfer.call(recipientHtiNSnC, amountZHsimjC, _periodmMrQ1tX, {from: accounts[1]});
		await contractLUSxao7.setFee.call(newFee52m7o7, {from: accounts[3]});
		await contractLUSxao7.purchase.call(valueY5Lywc, _ref1UJAMqKb, _ref2MsZlUyF, _ref351e5PG, _ref4xLRUVn3, _ref5NRsMg8G, commentwcTQLXe, {from: accounts[2]});

		await expect(contractLUSxao7.freezeAndTransfer.call(recipientHtiNSnC, amountZHsimjC, _periodmMrQ1tX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWke1Hv7 = accounts[5]
		const FOSTERAddrtl8cnlY = accounts[1]
		const initialRatectg7PZK = BigInt("664")
		const initialPeriodG0B2YYD = BigInt("728")
		const initialOwnereW0upMB = accounts[1]
		const contracteiGe401 = await Reseller.new(USDTAddrWke1Hv7, FOSTERAddrtl8cnlY, initialRatectg7PZK, initialPeriodG0B2YYD, initialOwnereW0upMB, {from: accounts[1]});
		const newRateqE0F6u = BigInt("615")
		const commentYOEnrfc = "GAermfUJe8SR5ptCrTl53OznhFWth4SHu25w9IDTEGkIbCkDZ"
		const _ref5PVMmy0C = accounts[0]
		const _ref4misfDvZ = accounts[1]
		const _ref3LfHwWK1 = accounts[5]
		const _ref2WlFT3NE = accounts[0]
		const _ref1oOecZk = accounts[4]
		const valueMZD5rfR = BigInt("1375")
		await contracteiGe401.setRate.call(newRateqE0F6u, {from: accounts[1]});
		await contracteiGe401.purchase.call(valueMZD5rfR, _ref1oOecZk, _ref2WlFT3NE, _ref3LfHwWK1, _ref4misfDvZ, _ref5PVMmy0C, commentYOEnrfc, {from: accounts[2]});

		await expect(contracteiGe401.setRate.call(newRateqE0F6u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrk8OiO68 = accounts[0]
		const FOSTERAddrh4XI2js = accounts[3]
		const initialRatevtOr6Fk = BigInt("1512")
		const initialPeriodYQHvMs3 = BigInt("1416")
		const initialOwnertzp8fm3 = accounts[2]
		const contractCUlpNmE = await Reseller.new(USDTAddrk8OiO68, FOSTERAddrh4XI2js, initialRatevtOr6Fk, initialPeriodYQHvMs3, initialOwnertzp8fm3, {from: accounts[2]});
		const commentff7g9d = "KMwjFSYadiCGeKNc4BJfTu"
		const _ref5Wtaq26f = accounts[1]
		const _ref4baRuZKO = accounts[2]
		const _ref3gQjj7Zs = "0x0000000000000000000000000000000000000001"
		const _ref2eG7mgU9 = accounts[4]
		const _ref1BM8nXG = accounts[5]
		const valueb2idsq8 = BigInt("804")
		const newBoss4TWWTGl8 = accounts[0]
		const valuebZUsfhN = BigInt("797")
		const recipientpuvCF1s = accounts[0]
		const ERC20TokenxXtnTvY = accounts[0]
		const commentPTAqeRb = "b5XoyXAAzNz6vARHfTyVtJtSQTKzaiLqfogJ1oW2NaeHr53kVBP8a8AXYTizFx2OIVGUSHHXM24Pc8p"
		const _ref5tZKox6U = accounts[1]
		const _ref4aS7q6ZC = accounts[1]
		const _ref3GNivrKM = accounts[4]
		const _ref2K1iQMoC = accounts[2]
		const _ref1H3bdQTK = accounts[2]
		const valuerMskCdw = BigInt("64")
		const valueZCv2DZW = BigInt("1003")
		await contractCUlpNmE.purchase.call(valueb2idsq8, _ref1BM8nXG, _ref2eG7mgU9, _ref3gQjj7Zs, _ref4baRuZKO, _ref5Wtaq26f, commentff7g9d, {from: accounts[2]});
		await contractCUlpNmE.switchState.call({from: accounts[2]});
		await contractCUlpNmE.deposeBoss4.call(newBoss4TWWTGl8, {from: accounts[3]});
		await contractCUlpNmE.withdrawERC20.call(ERC20TokenxXtnTvY, recipientpuvCF1s, valuebZUsfhN, {from: accounts[1]});
		await contractCUlpNmE.purchase.call(valuerMskCdw, _ref1H3bdQTK, _ref2K1iQMoC, _ref3GNivrKM, _ref4aS7q6ZC, _ref5tZKox6U, commentPTAqeRb, {from: accounts[2]});
		await contractCUlpNmE.withdraw.call(valueZCv2DZW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCUlpNmE.purchase.call(valueb2idsq8, _ref1BM8nXG, _ref2eG7mgU9, _ref3gQjj7Zs, _ref4baRuZKO, _ref5Wtaq26f, commentff7g9d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrK1zeP7N = accounts[5]
		const FOSTERAddrYrY7DOn = accounts[3]
		const initialRatehw07Dye = BigInt("1914")
		const initialPeriod8akBWd = BigInt("1242")
		const initialOwnerMGGw7P = accounts[2]
		const contractdqeRvwi = await Reseller.new(USDTAddrK1zeP7N, FOSTERAddrYrY7DOn, initialRatehw07Dye, initialPeriod8akBWd, initialOwnerMGGw7P, {from: accounts[2]});
		const newBoss3q1IZM5h = accounts[1]
		const amountx6CiJwl = BigInt("1918")
		const newBoss1aCyv8aZ = accounts[0]
		const newBoss3C4Yt4qI = accounts[2]
		await contractdqeRvwi.deposeBoss3.call(newBoss3q1IZM5h, {from: accounts[2]});
		const nulllu0TYrD = await contractdqeRvwi.getEstimation.call(amountx6CiJwl, {from: accounts[0]});
		await contractdqeRvwi.deposeBoss1.call(newBoss1aCyv8aZ, {from: accounts[0]});
		await contractdqeRvwi.deposeBoss3.call(newBoss3C4Yt4qI, {from: accounts[1]});

		assert.equal(nulllu0TYrD, 3671052)
		await expect(contractdqeRvwi.getEstimation.call(amountx6CiJwl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
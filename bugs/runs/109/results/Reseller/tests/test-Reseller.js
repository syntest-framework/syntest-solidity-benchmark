const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddreBO5ETC = accounts[1]
		const FOSTERAddrNEchrNg = accounts[0]
		const initialRateVhcCDPx = BigInt("1797")
		const initialPeriodonBqBeD = BigInt("1544")
		const initialOwnerVR3dmJf = accounts[0]
		const contractMW5Bbi = await Reseller.new(USDTAddreBO5ETC, FOSTERAddrNEchrNg, initialRateVhcCDPx, initialPeriodonBqBeD, initialOwnerVR3dmJf, {from: accounts[0]});
		const newRateWx7KQFr = BigInt("88")
		const newBoss1Q9Xofrx = accounts[3]
		const accountgDMNHUc = accounts[1]
		const commentpXJl5ww = "GfMpkEXyyzhIFDa9vMinGwecpBidDxTDNpygNb14eb1EXeRrd13TzSYGaAApxSkCbb6Dr9551WcofRjtSJy4DHMT"
		const _ref5QrPK1TQ = accounts[3]
		const _ref4ZELEDkW = accounts[0]
		const _ref3yAQBzV = accounts[3]
		const _ref2cA4ZIim = accounts[0]
		const _ref1w9MTbma = accounts[0]
		const valueZ80aVeO = BigInt("1530")
		await contractMW5Bbi.setRate.call(newRateWx7KQFr, {from: "0x0000000000000000000000000000000000000001"});
		await contractMW5Bbi.deposeBoss1.call(newBoss1Q9Xofrx, {from: accounts[2]});
		const nullOrZEfK = await contractMW5Bbi.allowanceFOSTER.call(accountgDMNHUc, {from: accounts[0]});
		await contractMW5Bbi.purchase.call(valueZ80aVeO, _ref1w9MTbma, _ref2cA4ZIim, _ref3yAQBzV, _ref4ZELEDkW, _ref5QrPK1TQ, commentpXJl5ww, {from: accounts[0]});

		await expect(contractMW5Bbi.setRate.call(newRateWx7KQFr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnrgySWR = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrylpleVr = accounts[0]
		const initialRatecj2VmZO = BigInt("1008")
		const initialPeriodNHSVzzo = BigInt("1835")
		const initialOwnerQEjjJdo = accounts[1]
		const contractcZNGqb = await Reseller.new(USDTAddrnrgySWR, FOSTERAddrylpleVr, initialRatecj2VmZO, initialPeriodNHSVzzo, initialOwnerQEjjJdo, {from: accounts[1]});
		const accountMIwRCM = accounts[2]
		const newFeelQDsfSH = BigInt("56")
		const newBoss3JG2QGKW = accounts[3]
		const newRateMdQ3Lbi = BigInt("660")
		const newMinimumx5oHVRo = BigInt("648")
		const newBoss1wEMhyd3 = accounts[2]
		const nullmNBKQvh = await contractcZNGqb.allowanceUSDT.call(accountMIwRCM, {from: accounts[0]});
		await contractcZNGqb.setFee.call(newFeelQDsfSH, {from: accounts[1]});
		await contractcZNGqb.deposeBoss3.call(newBoss3JG2QGKW, {from: accounts[3]});
		await contractcZNGqb.setRate.call(newRateMdQ3Lbi, {from: accounts[0]});
		await contractcZNGqb.setMinimum.call(newMinimumx5oHVRo, {from: accounts[0]});
		await contractcZNGqb.deposeBoss1.call(newBoss1wEMhyd3, {from: accounts[1]});

		await expect(contractcZNGqb.allowanceUSDT.call(accountMIwRCM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrV26y9Ss = accounts[2]
		const FOSTERAddrUNzqW7Z = accounts[4]
		const initialRategerykS6 = BigInt("830")
		const initialPeriodwtfAOpy = BigInt("1274")
		const initialOwnerWiSFcUY = accounts[5]
		const contracturNheRp = await Reseller.new(USDTAddrV26y9Ss, FOSTERAddrUNzqW7Z, initialRategerykS6, initialPeriodwtfAOpy, initialOwnerWiSFcUY, {from: accounts[0]});
		const newMinimumxSCyumi = BigInt("529")
		const newPeriodo0nbQDT = BigInt("227")
		const level5eGIccAd = BigInt("41")
		const level4Fc0N4qp = BigInt("95")
		const level3L7ZsMWr = BigInt("134")
		const level2gazPZUu = BigInt("54")
		const level1jY4qr2R = BigInt("237")
		const level5EfiHNfW = BigInt("105")
		const level4rXhJ2Jh = BigInt("152")
		const level3WC48Em3 = BigInt("39")
		const level23fYvCD = BigInt("73")
		const level1Xyg8Sfl = BigInt("64")
		const newBoss2sdo8883 = accounts[2]
		const accountldQUwpU = accounts[4]
		await contracturNheRp.setMinimum.call(newMinimumxSCyumi, {from: accounts[1]});
		await contracturNheRp.setPeriod.call(newPeriodo0nbQDT, {from: accounts[3]});
		await contracturNheRp.setRefBonus.call(level1jY4qr2R, level2gazPZUu, level3L7ZsMWr, level4Fc0N4qp, level5eGIccAd, {from: accounts[4]});
		await contracturNheRp.setRefBonus.call(level1Xyg8Sfl, level23fYvCD, level3WC48Em3, level4rXhJ2Jh, level5EfiHNfW, {from: accounts[3]});
		await contracturNheRp.deposeBoss2.call(newBoss2sdo8883, {from: accounts[0]});
		const nullg4vy5c8 = await contracturNheRp.allowanceUSDT.call(accountldQUwpU, {from: accounts[1]});

		await expect(contracturNheRp.setMinimum.call(newMinimumxSCyumi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTFp1qbw = accounts[0]
		const FOSTERAddraFibI5P = accounts[0]
		const initialRatexjwnUq6 = BigInt("1396")
		const initialPeriodpoM9chB = BigInt("1248")
		const initialOwnerax6CT8w = "0x0000000000000000000000000000000000000001"
		const contractDLStQ1O = await Reseller.new(USDTAddrTFp1qbw, FOSTERAddraFibI5P, initialRatexjwnUq6, initialPeriodpoM9chB, initialOwnerax6CT8w, {from: accounts[2]});
		const newBoss17Y9aIw = accounts[4]
		const newBoss1CLzpwn = accounts[2]
		await contractDLStQ1O.deposeBoss1.call(newBoss17Y9aIw, {from: accounts[1]});
		await contractDLStQ1O.deposeBoss1.call(newBoss1CLzpwn, {from: accounts[1]});

		await expect(contractDLStQ1O.deposeBoss1.call(newBoss17Y9aIw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSXIUycc = accounts[2]
		const FOSTERAddrK06LCJS = accounts[2]
		const initialRate1chVY2 = BigInt("1983")
		const initialPeriodtdUCbqZ = BigInt("1217")
		const initialOwnerLO1Ctbd = accounts[1]
		const contractrnnRBKl = await Reseller.new(USDTAddrSXIUycc, FOSTERAddrK06LCJS, initialRate1chVY2, initialPeriodtdUCbqZ, initialOwnerLO1Ctbd, {from: accounts[0]});
		const accountMieHVoK = accounts[4]
		const newBoss2hzx3YI = accounts[0]
		const newBoss3wyzQXkZ = accounts[1]
		const accountJC2FgkA = accounts[1]
		const nullHiGG5TY = await contractrnnRBKl.balanceUSDT.call(accountMieHVoK, {from: accounts[1]});
		await contractrnnRBKl.switchState.call({from: accounts[0]});
		await contractrnnRBKl.deposeBoss2.call(newBoss2hzx3YI, {from: accounts[0]});
		await contractrnnRBKl.deposeBoss3.call(newBoss3wyzQXkZ, {from: accounts[1]});
		const nullRAstoRv = await contractrnnRBKl.allowanceFOSTER.call(accountJC2FgkA, {from: accounts[2]});

		await expect(contractrnnRBKl.balanceUSDT.call(accountMieHVoK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrp4CjCx1 = accounts[1]
		const FOSTERAddrUrkCfBF = accounts[0]
		const initialRatemywnrOl = BigInt("1410")
		const initialPeriodtYLyf1 = BigInt("935")
		const initialOwnerRdL1pxk = accounts[0]
		const contractR8qeQN = await Reseller.new(USDTAddrp4CjCx1, FOSTERAddrUrkCfBF, initialRatemywnrOl, initialPeriodtYLyf1, initialOwnerRdL1pxk, {from: accounts[5]});
		const level5Ub7RT3E = BigInt("29")
		const level4gEOMEBG = BigInt("138")
		const level3jV8Qd8h = BigInt("106")
		const level2mdLOtwx = BigInt("27")
		const level1KDPx2TH = BigInt("130")
		const newBoss3sPwVxm7 = accounts[1]
		const newBoss4aF3m1lK = accounts[4]
		const _periodfIulBMI = BigInt("1868")
		const amountBPsf3VP = BigInt("587")
		const recipientAxSh72H = "0x0000000000000000000000000000000000000001"
		const newBoss3QEpeFFn = accounts[3]
		const newBoss4MsjP4wo = accounts[2]
		await contractR8qeQN.setRefBonus.call(level1KDPx2TH, level2mdLOtwx, level3jV8Qd8h, level4gEOMEBG, level5Ub7RT3E, {from: accounts[0]});
		await contractR8qeQN.deposeBoss3.call(newBoss3sPwVxm7, {from: accounts[3]});
		await contractR8qeQN.deposeBoss4.call(newBoss4aF3m1lK, {from: accounts[5]});
		await contractR8qeQN.freezeAndTransfer.call(recipientAxSh72H, amountBPsf3VP, _periodfIulBMI, {from: accounts[0]});
		await contractR8qeQN.deposeBoss3.call(newBoss3QEpeFFn, {from: accounts[3]});
		await contractR8qeQN.deposeBoss4.call(newBoss4MsjP4wo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractR8qeQN.setRefBonus.call(level1KDPx2TH, level2mdLOtwx, level3jV8Qd8h, level4gEOMEBG, level5Ub7RT3E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlIzfVuj = accounts[4]
		const FOSTERAddrKgMqoDW = accounts[5]
		const initialRateL13QQf4 = BigInt("1838")
		const initialPeriodgD0im8O = BigInt("589")
		const initialOwnerwdLnxqm = accounts[1]
		const contractP0NxcrY = await Reseller.new(USDTAddrlIzfVuj, FOSTERAddrKgMqoDW, initialRateL13QQf4, initialPeriodgD0im8O, initialOwnerwdLnxqm, {from: accounts[1]});
		const accountN5Ibgb = accounts[3]
		const newFeecaG6Ds7 = BigInt("193")
		const newMinimumXbF4gVC = BigInt("962")
		const accountVkD7zZz = accounts[0]
		const valuevHBXwSV = BigInt("132")
		const recipientC0ocrDS = accounts[3]
		const ERC20TokenLkTfFIj = "0x0000000000000000000000000000000000000001"
		const nullX6bPaSj = await contractP0NxcrY.allowanceFOSTER.call(accountN5Ibgb, {from: accounts[2]});
		await contractP0NxcrY.setFee.call(newFeecaG6Ds7, {from: accounts[1]});
		await contractP0NxcrY.setMinimum.call(newMinimumXbF4gVC, {from: accounts[1]});
		const nullhXcy3YW = await contractP0NxcrY.allowanceUSDT.call(accountVkD7zZz, {from: accounts[4]});
		await contractP0NxcrY.withdrawERC20.call(ERC20TokenLkTfFIj, recipientC0ocrDS, valuevHBXwSV, {from: accounts[1]});

		await expect(contractP0NxcrY.allowanceFOSTER.call(accountN5Ibgb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGJejbpf = accounts[1]
		const FOSTERAddrKRYKKsj = accounts[3]
		const initialRateEDH0Hzl = BigInt("856")
		const initialPeriodZhmpuM = BigInt("1215")
		const initialOwnerkB3Jd2C = accounts[4]
		const contractRP81o3M = await Reseller.new(USDTAddrGJejbpf, FOSTERAddrKRYKKsj, initialRateEDH0Hzl, initialPeriodZhmpuM, initialOwnerkB3Jd2C, {from: accounts[2]});
		const commentPDWYrV7 = "zeveCS"
		const _ref5xN7dd0i = accounts[2]
		const _ref4QkPtDH = accounts[2]
		const _ref3E9ah1TR = "0x0000000000000000000000000000000000000001"
		const _ref2bbcVoy = accounts[1]
		const _ref1rPybaZh = "0x0000000000000000000000000000000000000001"
		const valueGTJV5iz = BigInt("415")
		const newFeeZeAUF2B = BigInt("117")
		const newBoss1pQKkInn = accounts[4]
		await contractRP81o3M.purchase.call(valueGTJV5iz, _ref1rPybaZh, _ref2bbcVoy, _ref3E9ah1TR, _ref4QkPtDH, _ref5xN7dd0i, commentPDWYrV7, {from: accounts[1]});
		await contractRP81o3M.setFee.call(newFeeZeAUF2B, {from: accounts[4]});
		await contractRP81o3M.deposeBoss1.call(newBoss1pQKkInn, {from: accounts[0]});

		await expect(contractRP81o3M.purchase.call(valueGTJV5iz, _ref1rPybaZh, _ref2bbcVoy, _ref3E9ah1TR, _ref4QkPtDH, _ref5xN7dd0i, commentPDWYrV7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryoPz4nT = accounts[1]
		const FOSTERAddrFZsUhs = accounts[3]
		const initialRatez250Ynl = BigInt("856")
		const initialPeriodkzaG4AH = BigInt("1215")
		const initialOwnertNCkcjo = accounts[4]
		const contractQCXMRvU = await Reseller.new(USDTAddryoPz4nT, FOSTERAddrFZsUhs, initialRatez250Ynl, initialPeriodkzaG4AH, initialOwnertNCkcjo, {from: accounts[2]});
		const valueGGXxWT = BigInt("1751")
		const recipientuW5YaDC = accounts[5]
		const ERC20TokenQQrkaWa = accounts[3]
		const commentbidv3KY = "zeveCS"
		const _ref5Xv08Wxf = accounts[2]
		const _ref4xrtqvbo = accounts[2]
		const _ref3zHHKaZU = "0x0000000000000000000000000000000000000001"
		const _ref2MznALKa = accounts[1]
		const _ref1o5fuuJ = "0x0000000000000000000000000000000000000001"
		const valueHTQLbLK = BigInt("415")
		const newFeeQwDA8O0 = BigInt("117")
		const newFeePOQuPJ = BigInt("16")
		const newBoss1ZOBZeyy = accounts[5]
		await contractQCXMRvU.withdrawERC20.call(ERC20TokenQQrkaWa, recipientuW5YaDC, valueGGXxWT, {from: accounts[3]});
		await contractQCXMRvU.purchase.call(valueHTQLbLK, _ref1o5fuuJ, _ref2MznALKa, _ref3zHHKaZU, _ref4xrtqvbo, _ref5Xv08Wxf, commentbidv3KY, {from: accounts[1]});
		await contractQCXMRvU.setFee.call(newFeeQwDA8O0, {from: accounts[4]});
		await contractQCXMRvU.setFee.call(newFeePOQuPJ, {from: accounts[0]});
		await contractQCXMRvU.deposeBoss1.call(newBoss1ZOBZeyy, {from: accounts[0]});

		await expect(contractQCXMRvU.withdrawERC20.call(ERC20TokenQQrkaWa, recipientuW5YaDC, valueGGXxWT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvWmGYTn = accounts[1]
		const FOSTERAddrGVnDCZ6 = accounts[3]
		const initialRateuHejJuv = BigInt("856")
		const initialPeriodsdv3ZGX = BigInt("1215")
		const initialOwnerQdJh7eW = accounts[4]
		const contractp5hpWGb = await Reseller.new(USDTAddrvWmGYTn, FOSTERAddrGVnDCZ6, initialRateuHejJuv, initialPeriodsdv3ZGX, initialOwnerQdJh7eW, {from: accounts[2]});
		const newFeeic78Lb3 = BigInt("117")
		const accountOQZFCVr = accounts[5]
		const newBoss1b4D7c4m = accounts[4]
		await contractp5hpWGb.setFee.call(newFeeic78Lb3, {from: accounts[4]});
		const nullKnxKKM9 = await contractp5hpWGb.allowanceUSDT.call(accountOQZFCVr, {from: accounts[0]});
		await contractp5hpWGb.deposeBoss1.call(newBoss1b4D7c4m, {from: accounts[0]});

		await expect(contractp5hpWGb.setFee.call(newFeeic78Lb3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHSNPTim = accounts[1]
		const FOSTERAddrv3VtGol = accounts[3]
		const initialRatexK9aT5f = BigInt("856")
		const initialPeriodtLuPqVm = BigInt("1215")
		const initialOwnerlzZysDx = accounts[4]
		const contractmk3JbPd = await Reseller.new(USDTAddrHSNPTim, FOSTERAddrv3VtGol, initialRatexK9aT5f, initialPeriodtLuPqVm, initialOwnerlzZysDx, {from: accounts[2]});
		const _ref5M8fYcYr = accounts[0]
		const _ref4BWvXluT = accounts[0]
		const _ref3GFb2dwS = "0x0000000000000000000000000000000000000001"
		const _ref2VBuMzeb = accounts[2]
		const _ref1AenqInC = accounts[0]
		const valueSCtq0WH = BigInt("612")
		const newBoss4xwtRC4y = accounts[2]
		const commentEOagwDb = "zeveCS"
		const _ref5iTHKBeT = accounts[2]
		const _ref4biImhq9 = accounts[2]
		const _ref3PdYpxRD = "0x0000000000000000000000000000000000000001"
		const _ref2w3hrJVT = accounts[2]
		const _ref1KTrLGq = "0x0000000000000000000000000000000000000001"
		const valueqHmXPjM = BigInt("415")
		const newBoss1dfDmgdE = accounts[4]
		await contractmk3JbPd.buy.call(valueSCtq0WH, _ref1AenqInC, _ref2VBuMzeb, _ref3GFb2dwS, _ref4BWvXluT, _ref5M8fYcYr, {from: accounts[0]});
		await contractmk3JbPd.deposeBoss4.call(newBoss4xwtRC4y, {from: accounts[2]});
		await contractmk3JbPd.purchase.call(valueqHmXPjM, _ref1KTrLGq, _ref2w3hrJVT, _ref3PdYpxRD, _ref4biImhq9, _ref5iTHKBeT, commentEOagwDb, {from: accounts[1]});
		await contractmk3JbPd.deposeBoss1.call(newBoss1dfDmgdE, {from: accounts[0]});

		await expect(contractmk3JbPd.buy.call(valueSCtq0WH, _ref1AenqInC, _ref2VBuMzeb, _ref3GFb2dwS, _ref4BWvXluT, _ref5M8fYcYr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzpUcdB7 = accounts[2]
		const FOSTERAddrY7V7Pg9 = accounts[1]
		const initialRatexbX0OEs = BigInt("1958")
		const initialPeriodrHHkD5I = BigInt("1967")
		const initialOwnerWGeru1J = accounts[0]
		const contractWtorRb0 = await Reseller.new(USDTAddrzpUcdB7, FOSTERAddrY7V7Pg9, initialRatexbX0OEs, initialPeriodrHHkD5I, initialOwnerWGeru1J, {from: accounts[4]});
		const newPeriodCHtCdyW = BigInt("1692")
		const commentNb0tGKC = "Y9viCkaaCLcAJEOULP"
		const _ref5ohUOVD = accounts[2]
		const _ref4ZmIN92Z = accounts[3]
		const _ref3CDx0PBS = accounts[3]
		const _ref2eSz1s8q = "0x0000000000000000000000000000000000000001"
		const _ref1IyB3Bx6 = accounts[2]
		const valuedtWCOPq = BigInt("218")
		const newPeriodAwcbzm8 = BigInt("608")
		const accountdJkwgFr = "0x0000000000000000000000000000000000000001"
		const value8D6MpY = BigInt("391")
		const recipientL3P7jlo = accounts[5]
		const ERC20TokenHHfds2 = accounts[2]
		const accountNo8vXpS = accounts[3]
		await contractWtorRb0.setPeriod.call(newPeriodCHtCdyW, {from: accounts[0]});
		await contractWtorRb0.purchase.call(valuedtWCOPq, _ref1IyB3Bx6, _ref2eSz1s8q, _ref3CDx0PBS, _ref4ZmIN92Z, _ref5ohUOVD, commentNb0tGKC, {from: accounts[2]});
		await contractWtorRb0.setPeriod.call(newPeriodAwcbzm8, {from: accounts[2]});
		const nullxMsBXdh = await contractWtorRb0.allowanceFOSTER.call(accountdJkwgFr, {from: accounts[0]});
		await contractWtorRb0.withdrawERC20.call(ERC20TokenHHfds2, recipientL3P7jlo, value8D6MpY, {from: accounts[3]});
		const nullKHJrpmE = await contractWtorRb0.balanceUSDT.call(accountNo8vXpS, {from: accounts[4]});

		await expect(contractWtorRb0.setPeriod.call(newPeriodCHtCdyW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqoNging = accounts[0]
		const FOSTERAddrf4v0Y8G = accounts[0]
		const initialRateUYtinIS = BigInt("1396")
		const initialPerioddnqnOmt = BigInt("1248")
		const initialOwnerKU3QoNG = "0x0000000000000000000000000000000000000001"
		const contractOkPmhq = await Reseller.new(USDTAddrqoNging, FOSTERAddrf4v0Y8G, initialRateUYtinIS, initialPerioddnqnOmt, initialOwnerKU3QoNG, {from: accounts[2]});
		const valuejmtcqtH = BigInt("1044")
		const newBoss1cJgSDf4 = accounts[4]
		await contractOkPmhq.withdraw.call(valuejmtcqtH, {from: accounts[5]});
		await contractOkPmhq.deposeBoss1.call(newBoss1cJgSDf4, {from: accounts[1]});

		await expect(contractOkPmhq.withdraw.call(valuejmtcqtH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrP7fs3O5 = accounts[1]
		const FOSTERAddrI4ORM2l = accounts[5]
		const initialRateQhTn5sz = BigInt("894")
		const initialPeriodX0oOIQ = BigInt("284")
		const initialOwnerxLtWy59 = accounts[4]
		const contractEGUDJe = await Reseller.new(USDTAddrP7fs3O5, FOSTERAddrI4ORM2l, initialRateQhTn5sz, initialPeriodX0oOIQ, initialOwnerxLtWy59, {from: accounts[0]});
		const amountEX53PqM = BigInt("1554")
		const valuerbyXr55 = BigInt("1687")
		const newFeeGIU4zvO = BigInt("49")
		const nullorr8KvZ = await contractEGUDJe.getEstimation.call(amountEX53PqM, {from: accounts[0]});
		await contractEGUDJe.withdraw.call(valuerbyXr55, {from: accounts[0]});
		await contractEGUDJe.setFee.call(newFeeGIU4zvO, {from: accounts[1]});

		assert.equal(nullorr8KvZ, 1389276)
		await expect(contractEGUDJe.withdraw.call(valuerbyXr55, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrV3UOpza = accounts[0]
		const FOSTERAddraxglzN8 = accounts[0]
		const initialRateFl4l637 = BigInt("1396")
		const initialPeriodCuBwCFx = BigInt("1248")
		const initialOwnerVMcYtl = "0x0000000000000000000000000000000000000001"
		const contracthb6PFM = await Reseller.new(USDTAddrV3UOpza, FOSTERAddraxglzN8, initialRateFl4l637, initialPeriodCuBwCFx, initialOwnerVMcYtl, {from: accounts[2]});
		const newBoss1gC2lY67 = accounts[5]
		const newBoss2BdGgOVT = accounts[2]
		await contracthb6PFM.switchState.call({from: accounts[4]});
		await contracthb6PFM.deposeBoss1.call(newBoss1gC2lY67, {from: accounts[1]});
		await contracthb6PFM.deposeBoss2.call(newBoss2BdGgOVT, {from: accounts[0]});

		await expect(contracthb6PFM.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLzbqOwO = accounts[0]
		const FOSTERAddrWwA9JbM = accounts[0]
		const initialRate749Frx = BigInt("1396")
		const initialPeriodNLEOgD7 = BigInt("1248")
		const initialOwnerZvF9IYc = "0x0000000000000000000000000000000000000001"
		const contractG9xdWdB = await Reseller.new(USDTAddrLzbqOwO, FOSTERAddrWwA9JbM, initialRate749Frx, initialPeriodNLEOgD7, initialOwnerZvF9IYc, {from: accounts[2]});
		const newBoss2YqYRayM = accounts[1]
		const newMinimumgvk1goM = BigInt("148")
		const newBoss1QkyQFf = accounts[5]
		await contractG9xdWdB.deposeBoss2.call(newBoss2YqYRayM, {from: accounts[4]});
		await contractG9xdWdB.setMinimum.call(newMinimumgvk1goM, {from: accounts[3]});
		await contractG9xdWdB.deposeBoss1.call(newBoss1QkyQFf, {from: accounts[1]});

		await expect(contractG9xdWdB.deposeBoss2.call(newBoss2YqYRayM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBORXP8 = accounts[0]
		const FOSTERAddrb8ciuEk = accounts[0]
		const initialRateljjFP4G = BigInt("1396")
		const initialPeriodAPLkIX7 = BigInt("1248")
		const initialOwnerp4WLJ8P = "0x0000000000000000000000000000000000000001"
		const contractfozyZxH = await Reseller.new(USDTAddrBORXP8, FOSTERAddrb8ciuEk, initialRateljjFP4G, initialPeriodAPLkIX7, initialOwnerp4WLJ8P, {from: accounts[2]});
		const _periodQlOtFxx = BigInt("2010")
		const amountsXJUoX8 = BigInt("862")
		const recipienteAbBWCj = accounts[3]
		const newBoss1vKJh65x = accounts[4]
		const newRatesoRpjZ = BigInt("47")
		await contractfozyZxH.freezeAndTransfer.call(recipienteAbBWCj, amountsXJUoX8, _periodQlOtFxx, {from: accounts[1]});
		await contractfozyZxH.deposeBoss1.call(newBoss1vKJh65x, {from: accounts[1]});
		await contractfozyZxH.setRate.call(newRatesoRpjZ, {from: accounts[1]});

		await expect(contractfozyZxH.freezeAndTransfer.call(recipienteAbBWCj, amountsXJUoX8, _periodQlOtFxx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqrwOzB = accounts[0]
		const FOSTERAddrnYGBoZg = accounts[0]
		const initialRatea1ganWT = BigInt("1396")
		const initialPeriodNrVnQww = BigInt("1248")
		const initialOwnerYa5f6dv = "0x0000000000000000000000000000000000000001"
		const contractnJ7Ji4 = await Reseller.new(USDTAddrqrwOzB, FOSTERAddrnYGBoZg, initialRatea1ganWT, initialPeriodNrVnQww, initialOwnerYa5f6dv, {from: accounts[2]});
		const newBoss4ojgQuIs = accounts[4]
		const newBoss1Eu2zoyo = accounts[5]
		await contractnJ7Ji4.deposeBoss4.call(newBoss4ojgQuIs, {from: accounts[3]});
		await contractnJ7Ji4.deposeBoss1.call(newBoss1Eu2zoyo, {from: accounts[1]});

		await expect(contractnJ7Ji4.deposeBoss4.call(newBoss4ojgQuIs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrl1YnAdM = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrGiN2tA4 = accounts[0]
		const initialRatewajWhg = BigInt("1181")
		const initialPeriodjD0rM2s = BigInt("965")
		const initialOwnerozvaAH = accounts[0]
		const contractmT7YWQJ = await Reseller.new(USDTAddrl1YnAdM, FOSTERAddrGiN2tA4, initialRatewajWhg, initialPeriodjD0rM2s, initialOwnerozvaAH, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss3ZXSOrzs = accounts[1]
		const level5oCNiEq4 = BigInt("110")
		const level4Xl5fg46 = BigInt("173")
		const level3M4E9jk = BigInt("83")
		const level2xEayE4O = BigInt("240")
		const level1fd45Oa = BigInt("160")
		await contractmT7YWQJ.deposeBoss3.call(newBoss3ZXSOrzs, {from: accounts[3]});
		await contractmT7YWQJ.setRefBonus.call(level1fd45Oa, level2xEayE4O, level3M4E9jk, level4Xl5fg46, level5oCNiEq4, {from: accounts[4]});
		await contractmT7YWQJ.switchState.call({from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrtD9L9JZ = accounts[0]
		const FOSTERAddrBmJvGLG = accounts[0]
		const initialRateNq4DNoN = BigInt("1396")
		const initialPeriodPgLuabK = BigInt("1248")
		const initialOwnertUFMoz1 = "0x0000000000000000000000000000000000000001"
		const contractzqcPFUo = await Reseller.new(USDTAddrtD9L9JZ, FOSTERAddrBmJvGLG, initialRateNq4DNoN, initialPeriodPgLuabK, initialOwnertUFMoz1, {from: accounts[2]});
		const accountmUfPqef = accounts[2]
		const newBoss1bO0mbY = accounts[5]
		const nullbvcVLiV = await contractzqcPFUo.balanceFOSTER.call(accountmUfPqef, {from: accounts[1]});
		await contractzqcPFUo.deposeBoss1.call(newBoss1bO0mbY, {from: accounts[1]});

		await expect(contractzqcPFUo.balanceFOSTER.call(accountmUfPqef, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
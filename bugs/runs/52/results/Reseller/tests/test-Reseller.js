const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrynHwGns = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrTiT9Ee0 = "0x0000000000000000000000000000000000000001"
		const initialRateeYJ8IL8 = BigInt("1858")
		const initialPeriodKftqk9L = BigInt("855")
		const initialOwnerJS7QUot = accounts[0]
		const contractO60pCcA = await Reseller.new(USDTAddrynHwGns, FOSTERAddrTiT9Ee0, initialRateeYJ8IL8, initialPeriodKftqk9L, initialOwnerJS7QUot, {from: accounts[4]});
		const _ref57Xz5BJ = "0x0000000000000000000000000000000000000001"
		const _ref4fyFDCi = accounts[2]
		const _ref3cX5uoxS = accounts[1]
		const _ref2lAmfurW = accounts[1]
		const _ref1bbjFgg5 = accounts[3]
		const valueewsfHt = BigInt("1508")
		const newBoss4GnhzQ7 = accounts[3]
		const valueEzdSOKC = BigInt("1622")
		const accountWQTJu3 = accounts[3]
		await contractO60pCcA.buy.call(valueewsfHt, _ref1bbjFgg5, _ref2lAmfurW, _ref3cX5uoxS, _ref4fyFDCi, _ref57Xz5BJ, {from: "0x0000000000000000000000000000000000000001"});
		await contractO60pCcA.deposeBoss4.call(newBoss4GnhzQ7, {from: accounts[4]});
		await contractO60pCcA.withdraw.call(valueEzdSOKC, {from: accounts[4]});
		const nullUfgfwQ = await contractO60pCcA.allowanceFOSTER.call(accountWQTJu3, {from: accounts[0]});

		await expect(contractO60pCcA.buy.call(valueewsfHt, _ref1bbjFgg5, _ref2lAmfurW, _ref3cX5uoxS, _ref4fyFDCi, _ref57Xz5BJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfAYFN80 = accounts[0]
		const FOSTERAddrp9k6yDi = accounts[5]
		const initialRateTvNbwZS = BigInt("1277")
		const initialPeriodL2unpKM = BigInt("1628")
		const initialOwneryYMqe4t = accounts[3]
		const contractXqtolV7 = await Reseller.new(USDTAddrfAYFN80, FOSTERAddrp9k6yDi, initialRateTvNbwZS, initialPeriodL2unpKM, initialOwneryYMqe4t, {from: accounts[3]});
		const accountManS1DH = accounts[4]
		const newFeeYuv5o7Q = BigInt("160")
		const nullpwJNFPF = await contractXqtolV7.allowanceFOSTER.call(accountManS1DH, {from: accounts[1]});
		await contractXqtolV7.setFee.call(newFeeYuv5o7Q, {from: accounts[2]});

		await expect(contractXqtolV7.allowanceFOSTER.call(accountManS1DH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtBTWgM4 = accounts[4]
		const FOSTERAddrfaxoDYZ = accounts[3]
		const initialRateTWEHc4p = BigInt("1194")
		const initialPeriodjedVbOV = BigInt("2042")
		const initialOwnerbkqVYB7 = accounts[0]
		const contractYHjTfz7 = await Reseller.new(USDTAddrtBTWgM4, FOSTERAddrfaxoDYZ, initialRateTWEHc4p, initialPeriodjedVbOV, initialOwnerbkqVYB7, {from: accounts[3]});
		const accountOJzGtP5 = accounts[3]
		const newPeriodm0bl2E = BigInt("1773")
		const valueM5FemgV = BigInt("452")
		const _periodKYSUbry = BigInt("217")
		const amountBKq9zRF = BigInt("694")
		const recipientf7dbWgq = accounts[2]
		const valueZzCe91h = BigInt("338")
		const recipientNztwYvd = accounts[2]
		const ERC20TokenoE0NB0i = accounts[1]
		const nulleo0YwaZ = await contractYHjTfz7.balanceFOSTER.call(accountOJzGtP5, {from: accounts[2]});
		await contractYHjTfz7.setPeriod.call(newPeriodm0bl2E, {from: accounts[1]});
		await contractYHjTfz7.withdraw.call(valueM5FemgV, {from: accounts[4]});
		await contractYHjTfz7.freezeAndTransfer.call(recipientf7dbWgq, amountBKq9zRF, _periodKYSUbry, {from: accounts[5]});
		await contractYHjTfz7.withdrawERC20.call(ERC20TokenoE0NB0i, recipientNztwYvd, valueZzCe91h, {from: accounts[5]});

		await expect(contractYHjTfz7.balanceFOSTER.call(accountOJzGtP5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwi3IkZ6 = accounts[1]
		const FOSTERAddrUJlLbzX = accounts[0]
		const initialRatevhPvF6u = BigInt("970")
		const initialPeriodznpH0ya = BigInt("707")
		const initialOwnerey5C7C6 = "0x0000000000000000000000000000000000000001"
		const contractntC8Aw9 = await Reseller.new(USDTAddrwi3IkZ6, FOSTERAddrUJlLbzX, initialRatevhPvF6u, initialPeriodznpH0ya, initialOwnerey5C7C6, {from: accounts[1]});
		const commentmymSFtQ = "fa5"
		const _ref5WTCjlk = accounts[1]
		const _ref4dLYmkJ = accounts[1]
		const _ref3jJKO8Yy = "0x0000000000000000000000000000000000000001"
		const _ref2lnfQlMd = accounts[2]
		const _ref1YgwtAco = accounts[2]
		const valuexJRlcFp = BigInt("789")
		const newBoss4w0JedcA = accounts[5]
		const commentizCGmGa = "2P67mFvTbBrl5BCtUWevNxOqxhXCvCGpM3z5grtJJzfK1MzsYsYuWChEJ25RY3sLYOD7gYZQv5VkpaQuGLfI"
		const _ref5qAQU5mr = accounts[3]
		const _ref4dGXSVg1 = accounts[3]
		const _ref3bFY7LUE = accounts[0]
		const _ref2onv1lx3 = accounts[2]
		const _ref1C31chdL = accounts[5]
		const valueTrSCA9A = BigInt("1481")
		const newBoss4Zbe9hzQ = accounts[1]
		await contractntC8Aw9.purchase.call(valuexJRlcFp, _ref1YgwtAco, _ref2lnfQlMd, _ref3jJKO8Yy, _ref4dLYmkJ, _ref5WTCjlk, commentmymSFtQ, {from: accounts[3]});
		await contractntC8Aw9.deposeBoss4.call(newBoss4w0JedcA, {from: accounts[1]});
		await contractntC8Aw9.switchState.call({from: accounts[0]});
		await contractntC8Aw9.purchase.call(valueTrSCA9A, _ref1C31chdL, _ref2onv1lx3, _ref3bFY7LUE, _ref4dGXSVg1, _ref5qAQU5mr, commentizCGmGa, {from: "0x0000000000000000000000000000000000000001"});
		await contractntC8Aw9.deposeBoss4.call(newBoss4Zbe9hzQ, {from: accounts[4]});

		await expect(contractntC8Aw9.purchase.call(valuexJRlcFp, _ref1YgwtAco, _ref2lnfQlMd, _ref3jJKO8Yy, _ref4dLYmkJ, _ref5WTCjlk, commentmymSFtQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNmjzUc = accounts[2]
		const FOSTERAddr1M2pCQ = accounts[4]
		const initialRatedD9EyWA = BigInt("1947")
		const initialPeriodZFGZfha = BigInt("1731")
		const initialOwnerUsuDLMY = accounts[0]
		const contractFYy1XKa = await Reseller.new(USDTAddrNmjzUc, FOSTERAddr1M2pCQ, initialRatedD9EyWA, initialPeriodZFGZfha, initialOwnerUsuDLMY, {from: accounts[4]});
		const accountusqMu6H = accounts[4]
		const newBoss4TNtgbpC = accounts[3]
		await contractFYy1XKa.switchState.call({from: accounts[3]});
		const nullH9K6OB4 = await contractFYy1XKa.balanceUSDT.call(accountusqMu6H, {from: accounts[1]});
		await contractFYy1XKa.deposeBoss4.call(newBoss4TNtgbpC, {from: accounts[0]});

		await expect(contractFYy1XKa.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxSVfZQY = accounts[0]
		const FOSTERAddrdUXWEHr = accounts[4]
		const initialRateDahlbRu = BigInt("1674")
		const initialPeriodJZmmawS = BigInt("580")
		const initialOwnerCe1nMJ5 = accounts[4]
		const contractemOio4 = await Reseller.new(USDTAddrxSVfZQY, FOSTERAddrdUXWEHr, initialRateDahlbRu, initialPeriodJZmmawS, initialOwnerCe1nMJ5, {from: accounts[5]});
		const valueS2LhC6K = BigInt("503")
		const newBoss1tsB0zon = "0x0000000000000000000000000000000000000001"
		const _periodLIbJVvo = BigInt("1529")
		const amountODBEce = BigInt("1812")
		const recipient1SkTAT = accounts[2]
		await contractemOio4.withdraw.call(valueS2LhC6K, {from: accounts[1]});
		await contractemOio4.switchState.call({from: accounts[1]});
		await contractemOio4.deposeBoss1.call(newBoss1tsB0zon, {from: accounts[2]});
		await contractemOio4.freezeAndTransfer.call(recipient1SkTAT, amountODBEce, _periodLIbJVvo, {from: accounts[2]});

		await expect(contractemOio4.withdraw.call(valueS2LhC6K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKacx1Rh = accounts[3]
		const FOSTERAddryLBRS9j = accounts[1]
		const initialRatee79JxEE = BigInt("1642")
		const initialPeriodFlufQ8e = BigInt("1995")
		const initialOwnerfkdWOwu = accounts[0]
		const contractaoO5wbj = await Reseller.new(USDTAddrKacx1Rh, FOSTERAddryLBRS9j, initialRatee79JxEE, initialPeriodFlufQ8e, initialOwnerfkdWOwu, {from: accounts[1]});
		const newBoss3k6X46mN = accounts[1]
		const accountnoiS6m = accounts[4]
		await contractaoO5wbj.deposeBoss3.call(newBoss3k6X46mN, {from: accounts[0]});
		const nullEATCOj2 = await contractaoO5wbj.allowanceFOSTER.call(accountnoiS6m, {from: accounts[0]});

		await expect(contractaoO5wbj.deposeBoss3.call(newBoss3k6X46mN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPpkqhA = accounts[5]
		const FOSTERAddrbiYE2fH = "0x0000000000000000000000000000000000000001"
		const initialRateCFU8zXl = BigInt("694")
		const initialPeriodCOkico0 = BigInt("585")
		const initialOwners952uvN = accounts[3]
		const contractcCeBPvj = await Reseller.new(USDTAddrPpkqhA, FOSTERAddrbiYE2fH, initialRateCFU8zXl, initialPeriodCOkico0, initialOwners952uvN, {from: accounts[4]});
		const level5E4rN3Hi = BigInt("186")
		const level4KRACSH3 = BigInt("116")
		const level3brWWHKm = BigInt("116")
		const level2C6xZIOL = BigInt("105")
		const level1PwprQGC = BigInt("142")
		const _periodzKrC27Y = BigInt("2018")
		const amountccjKQqA = BigInt("801")
		const recipientLYRYDRx = accounts[1]
		const newPeriodExwo5XS = BigInt("1491")
		const commentRvYnBiZ = "E8Y5hsEGsUBN1OmMhu7yTEQAvuyJUNz3xdtvDAuRwmw"
		const _ref5Wnsy024 = accounts[2]
		const _ref4JmoXiv = accounts[0]
		const _ref3vNTrkqa = accounts[2]
		const _ref2Y0BmWMw = accounts[1]
		const _ref1qm5yVeE = accounts[3]
		const valueyU0RMGo = BigInt("806")
		await contractcCeBPvj.setRefBonus.call(level1PwprQGC, level2C6xZIOL, level3brWWHKm, level4KRACSH3, level5E4rN3Hi, {from: accounts[3]});
		await contractcCeBPvj.freezeAndTransfer.call(recipientLYRYDRx, amountccjKQqA, _periodzKrC27Y, {from: accounts[2]});
		await contractcCeBPvj.setPeriod.call(newPeriodExwo5XS, {from: accounts[3]});
		await contractcCeBPvj.purchase.call(valueyU0RMGo, _ref1qm5yVeE, _ref2Y0BmWMw, _ref3vNTrkqa, _ref4JmoXiv, _ref5Wnsy024, commentRvYnBiZ, {from: accounts[1]});

		await expect(contractcCeBPvj.setRefBonus.call(level1PwprQGC, level2C6xZIOL, level3brWWHKm, level4KRACSH3, level5E4rN3Hi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRC6OxVd = accounts[1]
		const FOSTERAddrjHDsBYd = accounts[2]
		const initialRateBnyjJUs = BigInt("1146")
		const initialPeriodpuBiKZE = BigInt("1181")
		const initialOwnerXMlpT31 = accounts[3]
		const contractMnn2VHQ = await Reseller.new(USDTAddrRC6OxVd, FOSTERAddrjHDsBYd, initialRateBnyjJUs, initialPeriodpuBiKZE, initialOwnerXMlpT31, {from: "0x0000000000000000000000000000000000000001"});
		const level5NKkes18 = BigInt("227")
		const level4plNVV7 = BigInt("202")
		const level3Vu7n3l0 = BigInt("103")
		const level2NdtfZxJ = BigInt("20")
		const level1eeE7ZwF = BigInt("68")
		const amountmNQLw77 = BigInt("570")
		const newBoss2Mr2i9vH = accounts[2]
		const newBoss4pf5G6u9 = accounts[3]
		await contractMnn2VHQ.setRefBonus.call(level1eeE7ZwF, level2NdtfZxJ, level3Vu7n3l0, level4plNVV7, level5NKkes18, {from: accounts[1]});
		const nulln9SNel6 = await contractMnn2VHQ.getEstimation.call(amountmNQLw77, {from: accounts[3]});
		await contractMnn2VHQ.deposeBoss2.call(newBoss2Mr2i9vH, {from: accounts[2]});
		await contractMnn2VHQ.deposeBoss4.call(newBoss4pf5G6u9, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrqChUFKU = accounts[0]
		const FOSTERAddrlxEB5la = accounts[5]
		const initialRateegnrruL = BigInt("1277")
		const initialPeriodnb5L6uO = BigInt("1628")
		const initialOwnerfCNPeph = accounts[3]
		const contractxPA9lmJ = await Reseller.new(USDTAddrqChUFKU, FOSTERAddrlxEB5la, initialRateegnrruL, initialPeriodnb5L6uO, initialOwnerfCNPeph, {from: accounts[3]});
		const valueJPGg7wd = BigInt("1534")
		const recipientPNAIpfe = accounts[0]
		const ERC20TokenuhrGkOi = accounts[1]
		const accountIHzshBr = accounts[4]
		const amountplXIVNf = BigInt("1890")
		const newFeerqHs9LH = BigInt("160")
		await contractxPA9lmJ.withdrawERC20.call(ERC20TokenuhrGkOi, recipientPNAIpfe, valueJPGg7wd, {from: accounts[5]});
		const nullLh7gda = await contractxPA9lmJ.allowanceFOSTER.call(accountIHzshBr, {from: accounts[1]});
		const nulltW4yCi = await contractxPA9lmJ.getEstimation.call(amountplXIVNf, {from: accounts[0]});
		await contractxPA9lmJ.setFee.call(newFeerqHs9LH, {from: accounts[2]});

		await expect(contractxPA9lmJ.withdrawERC20.call(ERC20TokenuhrGkOi, recipientPNAIpfe, valueJPGg7wd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCfOQLud = accounts[5]
		const FOSTERAddrEQ7BdJ6 = "0x0000000000000000000000000000000000000001"
		const initialRatevT2p4Xe = BigInt("694")
		const initialPeriodXCEWGQS = BigInt("585")
		const initialOwnerz8bcTkU = accounts[3]
		const contractbFvGChU = await Reseller.new(USDTAddrCfOQLud, FOSTERAddrEQ7BdJ6, initialRatevT2p4Xe, initialPeriodXCEWGQS, initialOwnerz8bcTkU, {from: accounts[4]});
		const level5DBMfwjl = BigInt("186")
		const level4f5nOZAS = BigInt("116")
		const level3deUMIdN = BigInt("116")
		const level2W1jyOIn = BigInt("105")
		const level1yo2pwOB = BigInt("142")
		const newPeriodISIwVof = BigInt("1491")
		const commentI5fs6XF = "E8Y5hsEGsUBN1OmMhu7yTEQAvuyJUNz3xdtvDAuRwmw"
		const _ref5MWFGkmZ = accounts[2]
		const _ref4GDT0SfZ = accounts[0]
		const _ref3Rz9tYRt = accounts[2]
		const _ref2lqEItY = accounts[1]
		const _ref1zzvg2N = accounts[3]
		const valueqNuL1Hv = BigInt("806")
		await contractbFvGChU.setRefBonus.call(level1yo2pwOB, level2W1jyOIn, level3deUMIdN, level4f5nOZAS, level5DBMfwjl, {from: accounts[3]});
		await contractbFvGChU.setPeriod.call(newPeriodISIwVof, {from: accounts[3]});
		await contractbFvGChU.purchase.call(valueqNuL1Hv, _ref1zzvg2N, _ref2lqEItY, _ref3Rz9tYRt, _ref4GDT0SfZ, _ref5MWFGkmZ, commentI5fs6XF, {from: accounts[1]});

		await expect(contractbFvGChU.setRefBonus.call(level1yo2pwOB, level2W1jyOIn, level3deUMIdN, level4f5nOZAS, level5DBMfwjl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfm1iqVF = accounts[0]
		const FOSTERAddrrn4f7kk = "0x0000000000000000000000000000000000000001"
		const initialRatef7jobb = BigInt("1693")
		const initialPeriodrc1351Q = BigInt("883")
		const initialOwnerS0G80Cb = accounts[4]
		const contractSL0pFfE = await Reseller.new(USDTAddrfm1iqVF, FOSTERAddrrn4f7kk, initialRatef7jobb, initialPeriodrc1351Q, initialOwnerS0G80Cb, {from: accounts[4]});
		const accountiqJk60 = accounts[0]
		const valueGhEQD7m = BigInt("187")
		const recipienttYztH4 = "0x0000000000000000000000000000000000000001"
		const ERC20TokenbWDnHBF = accounts[2]
		const _periodijtmeXq = BigInt("1669")
		const amountZJhEwH5 = BigInt("1783")
		const recipientI5RBYfa = accounts[2]
		const newRateXxLKfAy = BigInt("750")
		const amountIAId8Oa = BigInt("1423")
		const newBoss1KYYYdLC = accounts[1]
		const accountLutCRf = accounts[2]
		const nullzMuAmD = await contractSL0pFfE.balanceUSDT.call(accountiqJk60, {from: accounts[1]});
		await contractSL0pFfE.withdrawERC20.call(ERC20TokenbWDnHBF, recipienttYztH4, valueGhEQD7m, {from: accounts[2]});
		await contractSL0pFfE.freezeAndTransfer.call(recipientI5RBYfa, amountZJhEwH5, _periodijtmeXq, {from: "0x0000000000000000000000000000000000000001"});
		await contractSL0pFfE.setRate.call(newRateXxLKfAy, {from: accounts[4]});
		const nullJusWN7e = await contractSL0pFfE.getEstimation.call(amountIAId8Oa, {from: accounts[0]});
		await contractSL0pFfE.deposeBoss1.call(newBoss1KYYYdLC, {from: accounts[4]});
		const nullLBzg9a6 = await contractSL0pFfE.balanceUSDT.call(accountLutCRf, {from: accounts[4]});

		await expect(contractSL0pFfE.balanceUSDT.call(accountiqJk60, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrM078a7G = accounts[1]
		const FOSTERAddrf5jUluW = accounts[0]
		const initialRateb99DmnT = BigInt("371")
		const initialPeriodXebjOJI = BigInt("1369")
		const initialOwnerdUro4st = accounts[2]
		const contracteYonHSc = await Reseller.new(USDTAddrM078a7G, FOSTERAddrf5jUluW, initialRateb99DmnT, initialPeriodXebjOJI, initialOwnerdUro4st, {from: accounts[4]});
		const newBoss12cH8uJ = accounts[2]
		const accountMvAx3M = "0x0000000000000000000000000000000000000001"
		const amountgCZbwP = BigInt("125")
		const valueDhK9Gl8 = BigInt("798")
		const newRatesu1tjB = BigInt("1263")
		await contracteYonHSc.deposeBoss1.call(newBoss12cH8uJ, {from: accounts[2]});
		const nullJPtZKym = await contracteYonHSc.allowanceFOSTER.call(accountMvAx3M, {from: accounts[1]});
		const nullWhiUupz = await contracteYonHSc.getEstimation.call(amountgCZbwP, {from: accounts[4]});
		await contracteYonHSc.withdraw.call(valueDhK9Gl8, {from: "0x0000000000000000000000000000000000000001"});
		await contracteYonHSc.setRate.call(newRatesu1tjB, {from: accounts[1]});

		await expect(contracteYonHSc.deposeBoss1.call(newBoss12cH8uJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreu17tz4 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrwryMRDc = "0x0000000000000000000000000000000000000001"
		const initialRateBnRiKM2 = BigInt("1858")
		const initialPeriodEDr5Sf8 = BigInt("855")
		const initialOwnerImiUW2f = accounts[0]
		const contractxxTGZEG = await Reseller.new(USDTAddreu17tz4, FOSTERAddrwryMRDc, initialRateBnRiKM2, initialPeriodEDr5Sf8, initialOwnerImiUW2f, {from: accounts[4]});
		const newRateO3nkNPU = BigInt("286")
		const _ref5q2rcaM5 = "0x0000000000000000000000000000000000000001"
		const _ref4dpI1QX8 = accounts[2]
		const _ref3evqxHL8 = accounts[1]
		const _ref2BrPEtSd = accounts[1]
		const _ref1lQqRKOg = accounts[3]
		const valuehxihZci = BigInt("1508")
		const accountWPAwOEZ = accounts[3]
		const accountb8ogjR = accounts[3]
		await contractxxTGZEG.setRate.call(newRateO3nkNPU, {from: accounts[4]});
		await contractxxTGZEG.buy.call(valuehxihZci, _ref1lQqRKOg, _ref2BrPEtSd, _ref3evqxHL8, _ref4dpI1QX8, _ref5q2rcaM5, {from: "0x0000000000000000000000000000000000000001"});
		const nullB7EjgUJ = await contractxxTGZEG.allowanceFOSTER.call(accountWPAwOEZ, {from: accounts[3]});
		const nullQ93SmRG = await contractxxTGZEG.allowanceFOSTER.call(accountb8ogjR, {from: accounts[0]});

		await expect(contractxxTGZEG.setRate.call(newRateO3nkNPU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsWI8lc = accounts[5]
		const FOSTERAddrj0dFY2s = "0x0000000000000000000000000000000000000001"
		const initialRatebW2qIwp = BigInt("694")
		const initialPeriodkFDEdse = BigInt("585")
		const initialOwnerr8jQr1 = accounts[3]
		const contractTT4klAL = await Reseller.new(USDTAddrsWI8lc, FOSTERAddrj0dFY2s, initialRatebW2qIwp, initialPeriodkFDEdse, initialOwnerr8jQr1, {from: accounts[4]});
		const level5SzS3AJW = BigInt("186")
		const level4NNMiElF = BigInt("116")
		const level3dhoxQVv = BigInt("116")
		const level2IHPYEuq = BigInt("84")
		const level1Du4bHLR = BigInt("142")
		const amountWSI3WuM = BigInt("122")
		const newPeriodqEITfe = BigInt("1491")
		const commentXQP82RV = "E8Y5hsEGsUBN1OmMhu7yTEQAvuyJUNz3xdtvDAuRwmw"
		const _ref5X7ZYsRk = accounts[2]
		const _ref4b3ofVxz = accounts[0]
		const _ref3EFIaAvf = accounts[2]
		const _ref27cugpz = accounts[1]
		const _ref1sALBIII = accounts[3]
		const valueqM8jsu7 = BigInt("806")
		await contractTT4klAL.setRefBonus.call(level1Du4bHLR, level2IHPYEuq, level3dhoxQVv, level4NNMiElF, level5SzS3AJW, {from: accounts[3]});
		const nullHza4ku = await contractTT4klAL.getEstimation.call(amountWSI3WuM, {from: accounts[2]});
		await contractTT4klAL.setPeriod.call(newPeriodqEITfe, {from: accounts[3]});
		await contractTT4klAL.purchase.call(valueqM8jsu7, _ref1sALBIII, _ref27cugpz, _ref3EFIaAvf, _ref4b3ofVxz, _ref5X7ZYsRk, commentXQP82RV, {from: accounts[1]});

		assert.equal(nullHza4ku, 84668)
		await expect(contractTT4klAL.getEstimation.call(amountWSI3WuM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmsmqBO = accounts[5]
		const FOSTERAddrX8qb9yG = "0x0000000000000000000000000000000000000001"
		const initialRateh5AtPme = BigInt("694")
		const initialPeriodw2TOPU = BigInt("585")
		const initialOwnertY9cIxm = accounts[3]
		const contractWpiHTCM = await Reseller.new(USDTAddrmsmqBO, FOSTERAddrX8qb9yG, initialRateh5AtPme, initialPeriodw2TOPU, initialOwnertY9cIxm, {from: accounts[4]});
		const newBoss2InIV2dF = accounts[2]
		const level5b5m3ZJQ = BigInt("186")
		const level4P74Iohe = BigInt("116")
		const level3aAHGoN = BigInt("116")
		const level2yd9XxhD = BigInt("105")
		const level1TdtrclV = BigInt("142")
		const newPeriodWMY9SdA = BigInt("1499")
		const commentTcFVPYB = "E8Y5hsEGsUBN1OmMhu7yTEQAvuyJUNz3xdtvDAuRwmw"
		const _ref5PPcWvOj = accounts[2]
		const _ref45ve95c = accounts[0]
		const _ref31dujHY = accounts[2]
		const _ref2JfaUiY = accounts[1]
		const _ref1y6DNuMq = accounts[3]
		const valuePo3xmO = BigInt("806")
		await contractWpiHTCM.deposeBoss2.call(newBoss2InIV2dF, {from: "0x0000000000000000000000000000000000000001"});
		await contractWpiHTCM.setRefBonus.call(level1TdtrclV, level2yd9XxhD, level3aAHGoN, level4P74Iohe, level5b5m3ZJQ, {from: accounts[3]});
		await contractWpiHTCM.setPeriod.call(newPeriodWMY9SdA, {from: accounts[3]});
		await contractWpiHTCM.purchase.call(valuePo3xmO, _ref1y6DNuMq, _ref2JfaUiY, _ref31dujHY, _ref45ve95c, _ref5PPcWvOj, commentTcFVPYB, {from: accounts[1]});

		await expect(contractWpiHTCM.deposeBoss2.call(newBoss2InIV2dF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlSP1XO0 = accounts[4]
		const FOSTERAddrYCtMlny = accounts[4]
		const initialRatemVF8ekU = BigInt("1824")
		const initialPeriodUziZ1D6 = BigInt("425")
		const initialOwnerMDVAu8B = accounts[3]
		const contractoWDW2u1 = await Reseller.new(USDTAddrlSP1XO0, FOSTERAddrYCtMlny, initialRatemVF8ekU, initialPeriodUziZ1D6, initialOwnerMDVAu8B, {from: accounts[0]});
		const commentZuc8N7b = "kLosUxlbMKbJtv3y0WztzXT2SSvPCi1c"
		const _ref5FpnkTXT = accounts[2]
		const _ref4ijcpy7j = accounts[4]
		const _ref3CsWL5TT = accounts[3]
		const _ref2do2IYGe = accounts[3]
		const _ref1q3muqjZ = accounts[2]
		const valueNYMPkyY = BigInt("1098")
		await contractoWDW2u1.switchState.call({from: accounts[3]});
		await contractoWDW2u1.purchase.call(valueNYMPkyY, _ref1q3muqjZ, _ref2do2IYGe, _ref3CsWL5TT, _ref4ijcpy7j, _ref5FpnkTXT, commentZuc8N7b, {from: accounts[1]});

		await expect(contractoWDW2u1.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJP87QPu = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrVYMZYKW = "0x0000000000000000000000000000000000000001"
		const initialRatepzibagr = BigInt("1858")
		const initialPeriodcaKZt3R = BigInt("855")
		const initialOwnerxD1hLR9 = accounts[0]
		const contractaXGUJMN = await Reseller.new(USDTAddrJP87QPu, FOSTERAddrVYMZYKW, initialRatepzibagr, initialPeriodcaKZt3R, initialOwnerxD1hLR9, {from: accounts[4]});
		const account7UjTKG = accounts[3]
		const _ref5ogSiWRA = "0x0000000000000000000000000000000000000001"
		const _ref4VmC8NF6 = accounts[2]
		const _ref3yGVucF5 = accounts[1]
		const _ref2dOFIm0s = accounts[2]
		const _ref1MRs2vP2 = accounts[3]
		const valueq6CbrL4 = BigInt("1508")
		const nullNx177HI = await contractaXGUJMN.allowanceUSDT.call(account7UjTKG, {from: "0x0000000000000000000000000000000000000001"});
		await contractaXGUJMN.buy.call(valueq6CbrL4, _ref1MRs2vP2, _ref2dOFIm0s, _ref3yGVucF5, _ref4VmC8NF6, _ref5ogSiWRA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractaXGUJMN.allowanceUSDT.call(account7UjTKG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrfPybbs = accounts[4]
		const FOSTERAddrnCx06Pu = accounts[4]
		const initialRateODZkcxq = BigInt("1824")
		const initialPeriodQyg6dAJ = BigInt("425")
		const initialOwnerRGzXs4E = accounts[3]
		const contracthKzvss0 = await Reseller.new(USDTAddrrfPybbs, FOSTERAddrnCx06Pu, initialRateODZkcxq, initialPeriodQyg6dAJ, initialOwnerRGzXs4E, {from: accounts[0]});
		const commentZPAS2Ta = "L58i58sUaoaFgHLhXtc1MjYBOzj6rpbrFWzGmqfnNADDvEB"
		const _ref5j5IqVeC = accounts[5]
		const _ref4EkyACv9 = accounts[0]
		const _ref3q2Imr5u = accounts[2]
		const _ref2AQn3xTU = accounts[3]
		const _ref1JQkr6QO = accounts[3]
		const valueV8m8SD1 = BigInt("1184")
		const commentd1TqEoM = "kLosUxlbMKbJtv3y0WztzXT2SSvPCi1c"
		const _ref5mluVC6 = accounts[3]
		const _ref4hiUDOCX = accounts[4]
		const _ref3Lj3mg6a = accounts[3]
		const _ref2QSjK8KL = accounts[3]
		const _ref1CjMYVmj = accounts[1]
		const valuebS9UcZ = BigInt("1098")
		await contracthKzvss0.purchase.call(valueV8m8SD1, _ref1JQkr6QO, _ref2AQn3xTU, _ref3q2Imr5u, _ref4EkyACv9, _ref5j5IqVeC, commentZPAS2Ta, {from: accounts[3]});
		await contracthKzvss0.purchase.call(valuebS9UcZ, _ref1CjMYVmj, _ref2QSjK8KL, _ref3Lj3mg6a, _ref4hiUDOCX, _ref5mluVC6, commentd1TqEoM, {from: accounts[1]});

		await expect(contracthKzvss0.purchase.call(valueV8m8SD1, _ref1JQkr6QO, _ref2AQn3xTU, _ref3q2Imr5u, _ref4EkyACv9, _ref5j5IqVeC, commentZPAS2Ta, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLCeWnV5 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrL4djn9C = "0x0000000000000000000000000000000000000001"
		const initialRatek6SUo3l = BigInt("1858")
		const initialPeriodCQmDiU = BigInt("855")
		const initialOwner4rNJdK = accounts[0]
		const contractWBHnriU = await Reseller.new(USDTAddrLCeWnV5, FOSTERAddrL4djn9C, initialRatek6SUo3l, initialPeriodCQmDiU, initialOwner4rNJdK, {from: accounts[4]});
		const newBoss4aJ41Ja0 = accounts[0]
		const _ref5vNOhyk2 = "0x0000000000000000000000000000000000000001"
		const _ref4lGptziA = accounts[2]
		const _ref3iudYNSp = accounts[1]
		const _ref2nJvRyIL = accounts[1]
		const _ref1c15jHKJ = accounts[4]
		const valuecPDyeQA = BigInt("1508")
		await contractWBHnriU.deposeBoss4.call(newBoss4aJ41Ja0, {from: accounts[3]});
		await contractWBHnriU.buy.call(valuecPDyeQA, _ref1c15jHKJ, _ref2nJvRyIL, _ref3iudYNSp, _ref4lGptziA, _ref5vNOhyk2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractWBHnriU.deposeBoss4.call(newBoss4aJ41Ja0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUWypqEa = accounts[4]
		const FOSTERAddr8B00Oi = accounts[4]
		const initialRateDU7b9c = BigInt("1824")
		const initialPeriodaS9jkHs = BigInt("425")
		const initialOwnerzjnsPpm = accounts[3]
		const contract7McME5 = await Reseller.new(USDTAddrUWypqEa, FOSTERAddr8B00Oi, initialRateDU7b9c, initialPeriodaS9jkHs, initialOwnerzjnsPpm, {from: accounts[0]});
		const newBoss4Bt9R7p = accounts[4]
		const comment9cNSXB = "L58i58sUaoaFgHLhXtc1MjYBOzj6rpbrFWzGmqfnNADDvEB"
		const _ref5UTJE2g = accounts[5]
		const _ref4A4zaUKh = accounts[0]
		const _ref3jd3OPwU = accounts[2]
		const _ref2TrVbLhz = accounts[3]
		const _ref15aW9hj = accounts[3]
		const valueWH6dl9b = BigInt("1184")
		const _periodncIenRa = BigInt("218")
		const amountrm2GYqy = BigInt("1521")
		const recipienta5iukR = accounts[0]
		const commentDWBeD9F = "kLosUxlbMKbJtv3y0WztzXT2SSvPCi1c"
		const _ref5LUEv2hb = accounts[3]
		const _ref4AZiUZN5 = accounts[5]
		const _ref3QN81QVE = accounts[3]
		const _ref2C6bwDtV = accounts[3]
		const _ref1fn02ekd = accounts[1]
		const valueWIXyAxL = BigInt("1098")
		await contract7McME5.deposeBoss4.call(newBoss4Bt9R7p, {from: accounts[3]});
		await contract7McME5.purchase.call(valueWH6dl9b, _ref15aW9hj, _ref2TrVbLhz, _ref3jd3OPwU, _ref4A4zaUKh, _ref5UTJE2g, comment9cNSXB, {from: accounts[3]});
		await contract7McME5.freezeAndTransfer.call(recipienta5iukR, amountrm2GYqy, _periodncIenRa, {from: accounts[2]});
		await contract7McME5.purchase.call(valueWIXyAxL, _ref1fn02ekd, _ref2C6bwDtV, _ref3QN81QVE, _ref4AZiUZN5, _ref5LUEv2hb, commentDWBeD9F, {from: accounts[1]});

		await expect(contract7McME5.deposeBoss4.call(newBoss4Bt9R7p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddraJFlHB = accounts[0]
		const FOSTERAddrcDJBSiB = accounts[4]
		const initialRateI4Cra1y = BigInt("950")
		const initialPeriodNq14Qd0 = BigInt("1917")
		const initialOwnerFMIEzyw = accounts[4]
		const contractPWTzhRU = await Reseller.new(USDTAddraJFlHB, FOSTERAddrcDJBSiB, initialRateI4Cra1y, initialPeriodNq14Qd0, initialOwnerFMIEzyw, {from: accounts[3]});
		const newFeejTu7tny = BigInt("64")
		const newBoss4gCvrqJy = accounts[5]
		const value3PwRUo = BigInt("761")
		const recipientM5SxVQa = accounts[4]
		const ERC20TokenYAjS0qk = "0x0000000000000000000000000000000000000001"
		await contractPWTzhRU.setFee.call(newFeejTu7tny, {from: accounts[2]});
		await contractPWTzhRU.deposeBoss4.call(newBoss4gCvrqJy, {from: accounts[3]});
		await contractPWTzhRU.withdrawERC20.call(ERC20TokenYAjS0qk, recipientM5SxVQa, value3PwRUo, {from: accounts[3]});

		await expect(contractPWTzhRU.setFee.call(newFeejTu7tny, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVSWau6n = accounts[4]
		const FOSTERAddrwLZXNyS = accounts[4]
		const initialRateaMuyPPM = BigInt("1824")
		const initialPerioddNk8h4W = BigInt("425")
		const initialOwnerwPrp2g = accounts[3]
		const contractVUtXQrw = await Reseller.new(USDTAddrVSWau6n, FOSTERAddrwLZXNyS, initialRateaMuyPPM, initialPerioddNk8h4W, initialOwnerwPrp2g, {from: accounts[0]});
		const newMinimumhjO8uez = BigInt("1131")
		const newRateSbNbap6 = BigInt("1438")
		const commentFTXmgme = "L58i58sUaoaFgHLhXtc1MjYBOzj6rpbrFWzGmqfnNADDvEB"
		const _ref5UdFZN0w = accounts[5]
		const _ref4K6WdC7P = accounts[0]
		const _ref3b2ccHrd = accounts[2]
		const _ref2zg1Coey = accounts[4]
		const _ref1PsZPpiJ = accounts[3]
		const valueJGhhi0r = BigInt("1184")
		await contractVUtXQrw.setMinimum.call(newMinimumhjO8uez, {from: accounts[3]});
		await contractVUtXQrw.setRate.call(newRateSbNbap6, {from: accounts[0]});
		await contractVUtXQrw.purchase.call(valueJGhhi0r, _ref1PsZPpiJ, _ref2zg1Coey, _ref3b2ccHrd, _ref4K6WdC7P, _ref5UdFZN0w, commentFTXmgme, {from: accounts[3]});

		await expect(contractVUtXQrw.setMinimum.call(newMinimumhjO8uez, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrb1PuBwK = accounts[5]
		const FOSTERAddrkKGcaaW = "0x0000000000000000000000000000000000000001"
		const initialRatezmzugKK = BigInt("694")
		const initialPerioddP03DHD = BigInt("585")
		const initialOwner6kP6ci = accounts[3]
		const contract5CVeie = await Reseller.new(USDTAddrb1PuBwK, FOSTERAddrkKGcaaW, initialRatezmzugKK, initialPerioddP03DHD, initialOwner6kP6ci, {from: accounts[4]});
		const newFeeex3iFJE = BigInt("112")
		const _periodiI1JeBj = BigInt("1685")
		const amounthgi4MCH = BigInt("783")
		const recipientz4CeDFM = accounts[1]
		const newBoss2i00Jf0L = accounts[4]
		await contract5CVeie.setFee.call(newFeeex3iFJE, {from: accounts[3]});
		await contract5CVeie.freezeAndTransfer.call(recipientz4CeDFM, amounthgi4MCH, _periodiI1JeBj, {from: accounts[2]});
		await contract5CVeie.deposeBoss2.call(newBoss2i00Jf0L, {from: accounts[2]});

		await expect(contract5CVeie.setFee.call(newFeeex3iFJE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXSX78EX = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrTzyikJD = "0x0000000000000000000000000000000000000001"
		const initialRateDpJUQs = BigInt("1858")
		const initialPeriods10xbkx = BigInt("855")
		const initialOwnerqnOiVC = accounts[0]
		const contractFK1j8fK = await Reseller.new(USDTAddrXSX78EX, FOSTERAddrTzyikJD, initialRateDpJUQs, initialPeriods10xbkx, initialOwnerqnOiVC, {from: accounts[4]});
		const newRate2UkZBm = BigInt("476")
		const _ref5WHLb4IS = "0x0000000000000000000000000000000000000001"
		const _ref4BB20ZOa = accounts[3]
		const _ref38eOOXu = accounts[2]
		const _ref2FDvF6OV = accounts[4]
		const _ref1dSzZtxz = accounts[2]
		const valueTG4h8uy = BigInt("365")
		await contractFK1j8fK.setRate.call(newRate2UkZBm, {from: accounts[0]});
		await contractFK1j8fK.buy.call(valueTG4h8uy, _ref1dSzZtxz, _ref2FDvF6OV, _ref38eOOXu, _ref4BB20ZOa, _ref5WHLb4IS, {from: accounts[0]});

		await expect(contractFK1j8fK.setRate.call(newRate2UkZBm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZSYHHdn = accounts[5]
		const FOSTERAddrj9X6agM = "0x0000000000000000000000000000000000000001"
		const initialRateeY0KG8b = BigInt("694")
		const initialPeriodsieYcC4 = BigInt("585")
		const initialOwnervOi8MmF = accounts[3]
		const contractvKiKq01 = await Reseller.new(USDTAddrZSYHHdn, FOSTERAddrj9X6agM, initialRateeY0KG8b, initialPeriodsieYcC4, initialOwnervOi8MmF, {from: accounts[4]});
		const _periodjnhXV7c = BigInt("1465")
		const amountusSNek = BigInt("563")
		const recipientS1bM8vB = accounts[1]
		const newBoss2S0mvFsv = accounts[3]
		await contractvKiKq01.freezeAndTransfer.call(recipientS1bM8vB, amountusSNek, _periodjnhXV7c, {from: accounts[3]});
		await contractvKiKq01.deposeBoss2.call(newBoss2S0mvFsv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractvKiKq01.freezeAndTransfer.call(recipientS1bM8vB, amountusSNek, _periodjnhXV7c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
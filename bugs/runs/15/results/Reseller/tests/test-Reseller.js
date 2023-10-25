const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrr6OyrI5 = accounts[0]
		const FOSTERAddrLQrkvmn = accounts[4]
		const initialRatezVZE0G9 = BigInt("784")
		const initialPeriodYW6GueE = BigInt("844")
		const initialOwnerGphMktA = accounts[1]
		const contractrK0ozF3 = await Reseller.new(USDTAddrr6OyrI5, FOSTERAddrLQrkvmn, initialRatezVZE0G9, initialPeriodYW6GueE, initialOwnerGphMktA, {from: accounts[2]});
		const commentQ0c2dwp = "H19Koz6CBLANeC5WM89XzK"
		const _ref5Tm2CLX = accounts[5]
		const _ref4pHJKT7e = accounts[5]
		const _ref35Dj62n = accounts[2]
		const _ref2DYofqvY = accounts[3]
		const _ref1xjwJ0y1 = accounts[4]
		const valueXgihio = BigInt("1059")
		const newBoss39ctPg7 = accounts[1]
		const _periodimq0eAF = BigInt("78")
		const amountpiCu4Y6 = BigInt("1427")
		const recipientIVZjXS8 = accounts[5]
		const accountitZum2X = accounts[0]
		const newMinimumS823Xo2 = BigInt("1382")
		await contractrK0ozF3.purchase.call(valueXgihio, _ref1xjwJ0y1, _ref2DYofqvY, _ref35Dj62n, _ref4pHJKT7e, _ref5Tm2CLX, commentQ0c2dwp, {from: accounts[4]});
		await contractrK0ozF3.deposeBoss3.call(newBoss39ctPg7, {from: accounts[4]});
		await contractrK0ozF3.freezeAndTransfer.call(recipientIVZjXS8, amountpiCu4Y6, _periodimq0eAF, {from: accounts[5]});
		const nullZdovJ8Y = await contractrK0ozF3.allowanceFOSTER.call(accountitZum2X, {from: accounts[5]});
		await contractrK0ozF3.setMinimum.call(newMinimumS823Xo2, {from: accounts[2]});

		await expect(contractrK0ozF3.purchase.call(valueXgihio, _ref1xjwJ0y1, _ref2DYofqvY, _ref35Dj62n, _ref4pHJKT7e, _ref5Tm2CLX, commentQ0c2dwp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlw3FB1i = accounts[0]
		const FOSTERAddr2cCHp7 = accounts[1]
		const initialRateBUIM4q9 = BigInt("435")
		const initialPeriodrIbF0Na = BigInt("1893")
		const initialOwnerYnQ4VTk = accounts[0]
		const contractKoZtruE = await Reseller.new(USDTAddrlw3FB1i, FOSTERAddr2cCHp7, initialRateBUIM4q9, initialPeriodrIbF0Na, initialOwnerYnQ4VTk, {from: accounts[2]});
		const newPeriodhZ3yRUv = BigInt("1370")
		const accountcuz4FVI = accounts[0]
		const newBoss2WPFX5zM = accounts[4]
		const level5acnqk3I = BigInt("140")
		const level4zBhVrzK = BigInt("99")
		const level3irvO8i9 = BigInt("26")
		const level2Mnzl3n = BigInt("69")
		const level1s27JiT = BigInt("215")
		await contractKoZtruE.setPeriod.call(newPeriodhZ3yRUv, {from: accounts[4]});
		const nullwReNEFz = await contractKoZtruE.balanceUSDT.call(accountcuz4FVI, {from: accounts[5]});
		await contractKoZtruE.deposeBoss2.call(newBoss2WPFX5zM, {from: accounts[3]});
		await contractKoZtruE.setRefBonus.call(level1s27JiT, level2Mnzl3n, level3irvO8i9, level4zBhVrzK, level5acnqk3I, {from: accounts[1]});

		await expect(contractKoZtruE.setPeriod.call(newPeriodhZ3yRUv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgHLAMzn = accounts[3]
		const FOSTERAddraXp70ac = accounts[0]
		const initialRateSmm45kE = BigInt("339")
		const initialPeriodS8cbApb = BigInt("132")
		const initialOwnerA6UB7rj = accounts[3]
		const contractajjQxbu = await Reseller.new(USDTAddrgHLAMzn, FOSTERAddraXp70ac, initialRateSmm45kE, initialPeriodS8cbApb, initialOwnerA6UB7rj, {from: accounts[0]});
		const accountEVa5S1G = accounts[0]
		const newPeriodWm8So5Q = BigInt("268")
		const newMinimumOLq5pF2 = BigInt("1909")
		const nullFPGWZdd = await contractajjQxbu.allowanceUSDT.call(accountEVa5S1G, {from: accounts[3]});
		await contractajjQxbu.setPeriod.call(newPeriodWm8So5Q, {from: accounts[4]});
		await contractajjQxbu.setMinimum.call(newMinimumOLq5pF2, {from: accounts[4]});

		await expect(contractajjQxbu.allowanceUSDT.call(accountEVa5S1G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHyr4PF3 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrmHmwiPD = accounts[5]
		const initialRateYBSEm8Q = BigInt("1262")
		const initialPeriodc1O85pC = BigInt("1696")
		const initialOwnerAfTACBh = accounts[4]
		const contractjBiVwmy = await Reseller.new(USDTAddrHyr4PF3, FOSTERAddrmHmwiPD, initialRateYBSEm8Q, initialPeriodc1O85pC, initialOwnerAfTACBh, {from: accounts[1]});
		const newRateZumwaYq = BigInt("700")
		const accountx3ESnl4 = accounts[1]
		await contractjBiVwmy.setRate.call(newRateZumwaYq, {from: accounts[4]});
		const nullckCJkti = await contractjBiVwmy.balanceUSDT.call(accountx3ESnl4, {from: accounts[4]});

		await expect(contractjBiVwmy.setRate.call(newRateZumwaYq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDC5av8Z = accounts[0]
		const FOSTERAddrKFdRop = accounts[0]
		const initialRateY3bq4ON = BigInt("1701")
		const initialPeriodKX8N3hL = BigInt("718")
		const initialOwnerfIWL5Ha = accounts[4]
		const contractlUM2HEi = await Reseller.new(USDTAddrDC5av8Z, FOSTERAddrKFdRop, initialRateY3bq4ON, initialPeriodKX8N3hL, initialOwnerfIWL5Ha, {from: "0x0000000000000000000000000000000000000001"});
		const valuejnTsd34 = BigInt("896")
		const newMinimumQ4Grni = BigInt("483")
		const accountK2DtHIG = accounts[0]
		const accountp3O2GTN = accounts[1]
		const newMinimumyDE87Mg = BigInt("545")
		const amountCaELaZE = BigInt("2046")
		await contractlUM2HEi.withdraw.call(valuejnTsd34, {from: "0x0000000000000000000000000000000000000001"});
		await contractlUM2HEi.setMinimum.call(newMinimumQ4Grni, {from: accounts[2]});
		const nullyvo1dRh = await contractlUM2HEi.allowanceUSDT.call(accountK2DtHIG, {from: accounts[1]});
		const nullOPfoPcW = await contractlUM2HEi.allowanceUSDT.call(accountp3O2GTN, {from: accounts[1]});
		await contractlUM2HEi.setMinimum.call(newMinimumyDE87Mg, {from: accounts[2]});
		const nullmFcz3hS = await contractlUM2HEi.getEstimation.call(amountCaELaZE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Reseller', async () => {
		const USDTAddry1GX313 = accounts[3]
		const FOSTERAddrMaBSdMq = accounts[0]
		const initialRateZajDiQ1 = BigInt("836")
		const initialPeriodpyBmx4w = BigInt("688")
		const initialOwnerbON7kj5 = accounts[4]
		const contractcaLA4Ds = await Reseller.new(USDTAddry1GX313, FOSTERAddrMaBSdMq, initialRateZajDiQ1, initialPeriodpyBmx4w, initialOwnerbON7kj5, {from: accounts[1]});
		const newMinimumYpGvL3Y = BigInt("926")
		const newBoss2OUBk2dZ = accounts[2]
		const valuejCFqZs0 = BigInt("1831")
		const recipient6jWgIf = accounts[5]
		const ERC20Tokenk6CVWKn = accounts[4]
		const commentMxM2FPD = "aIMzxzWIaM80l8jDxsSS0GRPsWuxl5Bmn9OQp"
		const _ref5iGXcTfX = accounts[1]
		const _ref4KyjX1kK = accounts[2]
		const _ref3UDKPbVr = accounts[0]
		const _ref2LkC4V0n = accounts[0]
		const _ref1aiMUtd = accounts[2]
		const valueHQRpf7I = BigInt("561")
		const accountWsZBYp = accounts[4]
		await contractcaLA4Ds.setMinimum.call(newMinimumYpGvL3Y, {from: accounts[3]});
		await contractcaLA4Ds.deposeBoss2.call(newBoss2OUBk2dZ, {from: accounts[0]});
		await contractcaLA4Ds.withdrawERC20.call(ERC20Tokenk6CVWKn, recipient6jWgIf, valuejCFqZs0, {from: accounts[2]});
		await contractcaLA4Ds.purchase.call(valueHQRpf7I, _ref1aiMUtd, _ref2LkC4V0n, _ref3UDKPbVr, _ref4KyjX1kK, _ref5iGXcTfX, commentMxM2FPD, {from: accounts[4]});
		const nullQ3kKfgs = await contractcaLA4Ds.allowanceFOSTER.call(accountWsZBYp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractcaLA4Ds.setMinimum.call(newMinimumYpGvL3Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxHBk5T = accounts[0]
		const FOSTERAddriGl3Igk = accounts[5]
		const initialRateTJgFJyW = BigInt("1380")
		const initialPerioddUMBc0x = BigInt("1419")
		const initialOwnerv0y4sB5 = "0x0000000000000000000000000000000000000001"
		const contracth8ZIpus = await Reseller.new(USDTAddrxHBk5T, FOSTERAddriGl3Igk, initialRateTJgFJyW, initialPerioddUMBc0x, initialOwnerv0y4sB5, {from: accounts[2]});
		const amountQrGjHv3 = BigInt("21")
		const amountbyKEcro = BigInt("524")
		const nullpeYAfB = await contracth8ZIpus.getEstimation.call(amountQrGjHv3, {from: accounts[2]});
		const nullr1EOdXB = await contracth8ZIpus.getEstimation.call(amountbyKEcro, {from: accounts[0]});

		assert.equal(nullpeYAfB, 28980)
		assert.equal(nullr1EOdXB, 723120)
	});

	it('test for Reseller', async () => {
		const USDTAddrGQOwTTf = accounts[4]
		const FOSTERAddrIIO3bE6 = accounts[2]
		const initialRateUa38PNR = BigInt("1233")
		const initialPeriodB7AGwYN = BigInt("972")
		const initialOwnero21RvTS = accounts[4]
		const contractVpQSroU = await Reseller.new(USDTAddrGQOwTTf, FOSTERAddrIIO3bE6, initialRateUa38PNR, initialPeriodB7AGwYN, initialOwnero21RvTS, {from: accounts[0]});
		const newBoss1rgU8Hbl = accounts[4]
		const level5obxybOa = BigInt("134")
		const level4QkVlhP7 = BigInt("34")
		const level3a6y6Kom = BigInt("177")
		const level2DfYYiI1 = BigInt("74")
		const level1mcvX28H = BigInt("251")
		const accountf7LXBkI = accounts[4]
		const valuePjILq0c = BigInt("129")
		await contractVpQSroU.deposeBoss1.call(newBoss1rgU8Hbl, {from: accounts[0]});
		await contractVpQSroU.setRefBonus.call(level1mcvX28H, level2DfYYiI1, level3a6y6Kom, level4QkVlhP7, level5obxybOa, {from: accounts[3]});
		const nulllQLBTSv = await contractVpQSroU.balanceUSDT.call(accountf7LXBkI, {from: "0x0000000000000000000000000000000000000001"});
		await contractVpQSroU.withdraw.call(valuePjILq0c, {from: accounts[0]});

		await expect(contractVpQSroU.deposeBoss1.call(newBoss1rgU8Hbl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr1ub3dU = accounts[0]
		const FOSTERAddroMtzbGI = accounts[5]
		const initialRateRuC41k = BigInt("1380")
		const initialPeriodzg3ntmX = BigInt("1419")
		const initialOwnerxZOw4Jt = "0x0000000000000000000000000000000000000001"
		const contracttCj6zxo = await Reseller.new(USDTAddr1ub3dU, FOSTERAddroMtzbGI, initialRateRuC41k, initialPeriodzg3ntmX, initialOwnerxZOw4Jt, {from: accounts[2]});
		const amountSCGJf1F = BigInt("0")
		const level5bJfPcQ0 = BigInt("46")
		const level4pRRQMPp = BigInt("223")
		const level3HtuFoOX = BigInt("74")
		const level2C4QP7FJ = BigInt("96")
		const level1a2yf5Jm = BigInt("90")
		const amounttAGpESB = BigInt("524")
		const nullkxG8SlF = await contracttCj6zxo.getEstimation.call(amountSCGJf1F, {from: accounts[2]});
		await contracttCj6zxo.setRefBonus.call(level1a2yf5Jm, level2C4QP7FJ, level3HtuFoOX, level4pRRQMPp, level5bJfPcQ0, {from: accounts[3]});
		const nullUt5Gqv = await contracttCj6zxo.getEstimation.call(amounttAGpESB, {from: accounts[0]});

		assert.equal(nullkxG8SlF, 0)
		await expect(contracttCj6zxo.setRefBonus.call(level1a2yf5Jm, level2C4QP7FJ, level3HtuFoOX, level4pRRQMPp, level5bJfPcQ0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrN7TU7J2 = accounts[3]
		const FOSTERAddrrAHPYAz = accounts[1]
		const initialRatedmotdO2 = BigInt("1284")
		const initialPeriodQVf7lwb = BigInt("1904")
		const initialOwnerLHVHNt = accounts[4]
		const contractkkpzoXj = await Reseller.new(USDTAddrN7TU7J2, FOSTERAddrrAHPYAz, initialRatedmotdO2, initialPeriodQVf7lwb, initialOwnerLHVHNt, {from: accounts[2]});
		const newBoss4QOKtipI = accounts[3]
		const newRateMRnz57w = BigInt("1420")
		const newMinimumGMOFqOG = BigInt("447")
		await contractkkpzoXj.deposeBoss4.call(newBoss4QOKtipI, {from: accounts[3]});
		await contractkkpzoXj.setRate.call(newRateMRnz57w, {from: accounts[0]});
		await contractkkpzoXj.setMinimum.call(newMinimumGMOFqOG, {from: accounts[1]});

		await expect(contractkkpzoXj.deposeBoss4.call(newBoss4QOKtipI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrd4gNxR9 = accounts[0]
		const FOSTERAddrSdqJcc9 = accounts[5]
		const initialRatej1YOJ1n = BigInt("1380")
		const initialPeriodnzslwQG = BigInt("1419")
		const initialOwnersHnOndG = "0x0000000000000000000000000000000000000001"
		const contractrhYmHZ = await Reseller.new(USDTAddrd4gNxR9, FOSTERAddrSdqJcc9, initialRatej1YOJ1n, initialPeriodnzslwQG, initialOwnersHnOndG, {from: accounts[2]});
		const amountBWHHQj1 = BigInt("45")
		const newBoss2PpMcuNE = accounts[0]
		const amountBT5NLP4 = BigInt("524")
		const nullunmj1sQ = await contractrhYmHZ.getEstimation.call(amountBWHHQj1, {from: accounts[2]});
		await contractrhYmHZ.deposeBoss2.call(newBoss2PpMcuNE, {from: accounts[0]});
		const nullSVupcdH = await contractrhYmHZ.getEstimation.call(amountBT5NLP4, {from: accounts[0]});

		assert.equal(nullunmj1sQ, 62100)
		await expect(contractrhYmHZ.deposeBoss2.call(newBoss2PpMcuNE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIsFb411 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddreZcqVeL = accounts[5]
		const initialRatevhaBigf = BigInt("1262")
		const initialPeriodC0Ej9f8 = BigInt("1696")
		const initialOwnerpIz9hNo = accounts[4]
		const contractTKnFp7B = await Reseller.new(USDTAddrIsFb411, FOSTERAddreZcqVeL, initialRatevhaBigf, initialPeriodC0Ej9f8, initialOwnerpIz9hNo, {from: accounts[1]});
		const newRatezyqCsli = BigInt("666")
		const valuem1yCyiB = BigInt("1594")
		const recipientH2J0ghQ = accounts[0]
		const ERC20TokenmBR2ETy = accounts[3]
		const valuefgwl8sL = BigInt("330")
		const accountZFTGtC = accounts[0]
		await contractTKnFp7B.setRate.call(newRatezyqCsli, {from: accounts[4]});
		await contractTKnFp7B.withdrawERC20.call(ERC20TokenmBR2ETy, recipientH2J0ghQ, valuem1yCyiB, {from: accounts[5]});
		await contractTKnFp7B.withdraw.call(valuefgwl8sL, {from: accounts[0]});
		const nullOsMYy86 = await contractTKnFp7B.balanceFOSTER.call(accountZFTGtC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractTKnFp7B.setRate.call(newRatezyqCsli, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwv2vebf = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrOktra8E = accounts[5]
		const initialRateB4lMxPx = BigInt("1262")
		const initialPeriodEFqemRh = BigInt("1696")
		const initialOwnerHVXfmNF = accounts[4]
		const contractaVSRSzG = await Reseller.new(USDTAddrwv2vebf, FOSTERAddrOktra8E, initialRateB4lMxPx, initialPeriodEFqemRh, initialOwnerHVXfmNF, {from: accounts[1]});
		const valuefPwC3wF = BigInt("1473")
		const commenty3XiPQf = "le3j9UG8FivzzkBWdCD6X8h1yhCqXbqMNlgNkAgOMnmf3Nycpkh1qpCP6v6pDW"
		const _ref56IFEC2 = accounts[3]
		const _ref4d8WMmA = accounts[3]
		const _ref3tZcZssd = accounts[0]
		const _ref24eAGNv = "0x0000000000000000000000000000000000000001"
		const _ref1VS6si0A = accounts[0]
		const valuecDSCMhQ = BigInt("84")
		const newFeeK51dkQy = BigInt("32")
		const newRateA78XxF5 = BigInt("639")
		await contractaVSRSzG.withdraw.call(valuefPwC3wF, {from: accounts[4]});
		await contractaVSRSzG.purchase.call(valuecDSCMhQ, _ref1VS6si0A, _ref24eAGNv, _ref3tZcZssd, _ref4d8WMmA, _ref56IFEC2, commenty3XiPQf, {from: "0x0000000000000000000000000000000000000001"});
		await contractaVSRSzG.setFee.call(newFeeK51dkQy, {from: accounts[0]});
		await contractaVSRSzG.setRate.call(newRateA78XxF5, {from: accounts[4]});

		await expect(contractaVSRSzG.withdraw.call(valuefPwC3wF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXHcaKDy = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrCwk3QoW = accounts[5]
		const initialRateslb9zBM = BigInt("1262")
		const initialPeriodkILHRs = BigInt("1696")
		const initialOwnerZMPv0Yx = accounts[4]
		const contractEnrNBMu = await Reseller.new(USDTAddrXHcaKDy, FOSTERAddrCwk3QoW, initialRateslb9zBM, initialPeriodkILHRs, initialOwnerZMPv0Yx, {from: accounts[1]});
		const newRateherL9k = BigInt("651")
		const newBoss3ehv4EHK = accounts[0]
		await contractEnrNBMu.setRate.call(newRateherL9k, {from: accounts[4]});
		await contractEnrNBMu.deposeBoss3.call(newBoss3ehv4EHK, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrdWdPaed = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrHdTWg3o = accounts[5]
		const initialRatefBzrgjn = BigInt("1262")
		const initialPeriodoEC6QIV = BigInt("1696")
		const initialOwnerzFG8WXG = accounts[4]
		const contractMdzYe1Z = await Reseller.new(USDTAddrdWdPaed, FOSTERAddrHdTWg3o, initialRatefBzrgjn, initialPeriodoEC6QIV, initialOwnerzFG8WXG, {from: accounts[1]});
		const _periodtX5gSqY = BigInt("2")
		const amountDzpRM4U = BigInt("1")
		const recipientaPzOrgX = accounts[0]
		const newRateVkGywGG = BigInt("708")
		const level5Rb38uP0 = BigInt("183")
		const level4MK7QHcs = BigInt("57")
		const level3XfDl361 = BigInt("108")
		const level2kbjjIr = BigInt("207")
		const level1VKYFQax = BigInt("175")
		await contractMdzYe1Z.freezeAndTransfer.call(recipientaPzOrgX, amountDzpRM4U, _periodtX5gSqY, {from: accounts[2]});
		await contractMdzYe1Z.setRate.call(newRateVkGywGG, {from: accounts[4]});
		await contractMdzYe1Z.setRefBonus.call(level1VKYFQax, level2kbjjIr, level3XfDl361, level4MK7QHcs, level5Rb38uP0, {from: accounts[3]});

		await expect(contractMdzYe1Z.freezeAndTransfer.call(recipientaPzOrgX, amountDzpRM4U, _periodtX5gSqY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrXfapP1 = accounts[3]
		const FOSTERAddriFT2AkF = accounts[5]
		const initialRate4Kzxwn = BigInt("1249")
		const initialPeriodD1P2DZA = BigInt("1656")
		const initialOwneruOCk2zg = accounts[4]
		const contractryLJu41 = await Reseller.new(USDTAddrrXfapP1, FOSTERAddriFT2AkF, initialRate4Kzxwn, initialPeriodD1P2DZA, initialOwneruOCk2zg, {from: accounts[5]});
		const _periodOlpamoY = BigInt("1890")
		const amountGQuhZO = BigInt("1541")
		const recipientpJwDlY = accounts[1]
		const newMinimumtc0M6Ao = BigInt("451")
		await contractryLJu41.freezeAndTransfer.call(recipientpJwDlY, amountGQuhZO, _periodOlpamoY, {from: accounts[4]});
		await contractryLJu41.setMinimum.call(newMinimumtc0M6Ao, {from: accounts[1]});

		await expect(contractryLJu41.freezeAndTransfer.call(recipientpJwDlY, amountGQuhZO, _periodOlpamoY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQM6N1N = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrWDvw1VO = accounts[5]
		const initialRateXwkbMw = BigInt("1262")
		const initialPeriodM23VeEW = BigInt("1696")
		const initialOwnerv80bNjK = accounts[4]
		const contractmR1UxWK = await Reseller.new(USDTAddrQM6N1N, FOSTERAddrWDvw1VO, initialRateXwkbMw, initialPeriodM23VeEW, initialOwnerv80bNjK, {from: accounts[1]});
		const newRateOX1dZFC = BigInt("1309")
		const accountXNcUR8A = "0x0000000000000000000000000000000000000001"
		const level5Yx6YHM = BigInt("5")
		const level4dejEuq4 = BigInt("35")
		const level3ni3eF5S = BigInt("152")
		const level2HQG99Ck = BigInt("189")
		const level1OoK3xx = BigInt("80")
		await contractmR1UxWK.setRate.call(newRateOX1dZFC, {from: accounts[4]});
		await contractmR1UxWK.switchState.call({from: accounts[0]});
		const nullXtBlkuj = await contractmR1UxWK.balanceFOSTER.call(accountXNcUR8A, {from: accounts[2]});
		await contractmR1UxWK.setRefBonus.call(level1OoK3xx, level2HQG99Ck, level3ni3eF5S, level4dejEuq4, level5Yx6YHM, {from: accounts[2]});

		await expect(contractmR1UxWK.setRate.call(newRateOX1dZFC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlW97M1j = accounts[2]
		const FOSTERAddry9RTWak = accounts[0]
		const initialRategG6mq3 = BigInt("647")
		const initialPeriodPdNsZz = BigInt("710")
		const initialOwnertpnp7a = accounts[4]
		const contractRcj5gAH = await Reseller.new(USDTAddrlW97M1j, FOSTERAddry9RTWak, initialRategG6mq3, initialPeriodPdNsZz, initialOwnertpnp7a, {from: accounts[4]});
		const newFee03tPxt = BigInt("63")
		const accountgwgEuKf = accounts[4]
		const accounthlAKIM1 = accounts[4]
		const accountLBE6NZ = accounts[0]
		const accountmXQdThR = accounts[0]
		await contractRcj5gAH.setFee.call(newFee03tPxt, {from: accounts[2]});
		const nullwe3ZePz = await contractRcj5gAH.allowanceFOSTER.call(accountgwgEuKf, {from: accounts[1]});
		const nulljeMEJMV = await contractRcj5gAH.allowanceFOSTER.call(accounthlAKIM1, {from: accounts[2]});
		const nullI1uENn = await contractRcj5gAH.allowanceFOSTER.call(accountLBE6NZ, {from: accounts[5]});
		const nullgLd0wc8 = await contractRcj5gAH.balanceUSDT.call(accountmXQdThR, {from: accounts[1]});

		await expect(contractRcj5gAH.setFee.call(newFee03tPxt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr3LwF4q = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrrTP9Onh = accounts[5]
		const initialRateBtM8VK4 = BigInt("1262")
		const initialPeriodvKn32mj = BigInt("1696")
		const initialOwnervlydm7 = accounts[4]
		const contractKtxdOJT = await Reseller.new(USDTAddr3LwF4q, FOSTERAddrrTP9Onh, initialRateBtM8VK4, initialPeriodvKn32mj, initialOwnervlydm7, {from: accounts[1]});
		const accountW5uWRu = accounts[0]
		const valuew4P40o0 = BigInt("336")
		const newBoss1LFIB3u2 = "0x0000000000000000000000000000000000000001"
		const newRatex0dzosA = BigInt("726")
		const nullAe2Fvbd = await contractKtxdOJT.allowanceFOSTER.call(accountW5uWRu, {from: accounts[2]});
		await contractKtxdOJT.withdraw.call(valuew4P40o0, {from: accounts[4]});
		await contractKtxdOJT.deposeBoss1.call(newBoss1LFIB3u2, {from: accounts[5]});
		await contractKtxdOJT.setRate.call(newRatex0dzosA, {from: accounts[4]});

		await expect(contractKtxdOJT.allowanceFOSTER.call(accountW5uWRu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjap1sx5 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrUtOc5j5 = accounts[5]
		const initialRateHxZ63x = BigInt("1262")
		const initialPeriodk1POonh = BigInt("1696")
		const initialOwnervpHHBTU = accounts[4]
		const contractqbEfDFB = await Reseller.new(USDTAddrjap1sx5, FOSTERAddrUtOc5j5, initialRateHxZ63x, initialPeriodk1POonh, initialOwnervpHHBTU, {from: accounts[1]});
		const newRateQEBixi8 = BigInt("735")
		const _ref5eGrt9G9 = accounts[1]
		const _ref4bu6nMjb = accounts[3]
		const _ref3QRhUAGk = accounts[0]
		const _ref2Qx2L2U0 = accounts[3]
		const _ref1HJfVeas = accounts[4]
		const valuewasnIZt = BigInt("215")
		const amountxn2GZB1 = BigInt("1764")
		const newBoss3A4EnT3x = accounts[4]
		await contractqbEfDFB.setRate.call(newRateQEBixi8, {from: accounts[4]});
		await contractqbEfDFB.buy.call(valuewasnIZt, _ref1HJfVeas, _ref2Qx2L2U0, _ref3QRhUAGk, _ref4bu6nMjb, _ref5eGrt9G9, {from: accounts[4]});
		const nullDDFCx6f = await contractqbEfDFB.getEstimation.call(amountxn2GZB1, {from: "0x0000000000000000000000000000000000000001"});
		await contractqbEfDFB.deposeBoss3.call(newBoss3A4EnT3x, {from: accounts[1]});

		await expect(contractqbEfDFB.setRate.call(newRateQEBixi8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrj4rQiQw = "0x0000000000000000000000000000000000000001"
		const FOSTERAddriWhgJlR = accounts[5]
		const initialRateCu8nVs = BigInt("1262")
		const initialPeriod6c2ZGt = BigInt("1696")
		const initialOwnerBmhahVy = accounts[4]
		const contractSEoCNNx = await Reseller.new(USDTAddrj4rQiQw, FOSTERAddriWhgJlR, initialRateCu8nVs, initialPeriod6c2ZGt, initialOwnerBmhahVy, {from: accounts[1]});
		const accountrTJwiDJ = accounts[1]
		const newRatenjTYSVH = BigInt("714")
		const null5JRO7k = await contractSEoCNNx.balanceFOSTER.call(accountrTJwiDJ, {from: "0x0000000000000000000000000000000000000001"});
		await contractSEoCNNx.setRate.call(newRatenjTYSVH, {from: accounts[4]});

		await expect(contractSEoCNNx.balanceFOSTER.call(accountrTJwiDJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxH5TGtJ = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrgAHn6Gb = accounts[5]
		const initialRateRzx4dhO = BigInt("1262")
		const initialPeriodNwVdMnr = BigInt("1696")
		const initialOwnerW3rL9rR = accounts[4]
		const contractzihgMG = await Reseller.new(USDTAddrxH5TGtJ, FOSTERAddrgAHn6Gb, initialRateRzx4dhO, initialPeriodNwVdMnr, initialOwnerW3rL9rR, {from: accounts[1]});
		const newRateMnPilYY = BigInt("701")
		const newPeriodd8yGvji = BigInt("1947")
		await contractzihgMG.setRate.call(newRateMnPilYY, {from: accounts[4]});
		await contractzihgMG.setPeriod.call(newPeriodd8yGvji, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrXU9bA3 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddriB179vY = accounts[5]
		const initialRateF3eDe0G = BigInt("1262")
		const initialPeriodm5Knls = BigInt("1696")
		const initialOwnerdw0368R = accounts[4]
		const contracto8IumIF = await Reseller.new(USDTAddrXU9bA3, FOSTERAddriB179vY, initialRateF3eDe0G, initialPeriodm5Knls, initialOwnerdw0368R, {from: accounts[1]});
		const newRatexJbAf5a = BigInt("656")
		await contracto8IumIF.switchState.call({from: accounts[4]});
		await contracto8IumIF.setRate.call(newRatexJbAf5a, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrTsLHZ5q = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrKhueFxJ = accounts[5]
		const initialRate72pB3S = BigInt("1262")
		const initialPeriodTucTtVB = BigInt("1696")
		const initialOwnerG38UEYu = accounts[4]
		const contractKy0xDzp = await Reseller.new(USDTAddrTsLHZ5q, FOSTERAddrKhueFxJ, initialRate72pB3S, initialPeriodTucTtVB, initialOwnerG38UEYu, {from: accounts[1]});
		const newBoss4nADQauJ = accounts[0]
		const newRateDC0RLbe = BigInt("728")
		await contractKy0xDzp.deposeBoss4.call(newBoss4nADQauJ, {from: accounts[4]});
		await contractKy0xDzp.setRate.call(newRateDC0RLbe, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrIjaZQC7 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddruzUUxof = accounts[5]
		const initialRateL7PIrm = BigInt("1262")
		const initialPerioddc1X38B = BigInt("1696")
		const initialOwnersHnXAoU = accounts[4]
		const contractdDwJFI2 = await Reseller.new(USDTAddrIjaZQC7, FOSTERAddruzUUxof, initialRateL7PIrm, initialPerioddc1X38B, initialOwnersHnXAoU, {from: accounts[1]});
		const commentLcSSnI0 = "DbaQ4FazwcuXExrF4TocOFJPUjhf5jgSgcU2N07OkE6bAeoyXURryyghAIEq2X63"
		const _ref5WXKL0Yf = accounts[2]
		const _ref4seAvyGa = accounts[4]
		const _ref37T7hNj = accounts[2]
		const _ref2ba9naRt = "0x0000000000000000000000000000000000000001"
		const _ref1Big9a4B = accounts[5]
		const valueyXeCHh4 = BigInt("1910")
		const newRateYY2fiK7 = BigInt("708")
		await contractdDwJFI2.purchase.call(valueyXeCHh4, _ref1Big9a4B, _ref2ba9naRt, _ref37T7hNj, _ref4seAvyGa, _ref5WXKL0Yf, commentLcSSnI0, {from: accounts[4]});
		await contractdDwJFI2.setRate.call(newRateYY2fiK7, {from: accounts[4]});

		await expect(contractdDwJFI2.purchase.call(valueyXeCHh4, _ref1Big9a4B, _ref2ba9naRt, _ref37T7hNj, _ref4seAvyGa, _ref5WXKL0Yf, commentLcSSnI0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVXtJmP6 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrSWOSsRl = accounts[5]
		const initialRatemeHNLGs = BigInt("1262")
		const initialPeriodHLpnaua = BigInt("1696")
		const initialOwnerGHm4fhh = accounts[4]
		const contractxeKTEmD = await Reseller.new(USDTAddrVXtJmP6, FOSTERAddrSWOSsRl, initialRatemeHNLGs, initialPeriodHLpnaua, initialOwnerGHm4fhh, {from: accounts[1]});
		const newMinimumg2znfNq = BigInt("1407")
		const newBoss4VOTkISV = accounts[1]
		const newRateEmSfkZG = BigInt("707")
		await contractxeKTEmD.setMinimum.call(newMinimumg2znfNq, {from: accounts[4]});
		await contractxeKTEmD.deposeBoss4.call(newBoss4VOTkISV, {from: accounts[1]});
		await contractxeKTEmD.setRate.call(newRateEmSfkZG, {from: accounts[4]});

		await expect(contractxeKTEmD.setMinimum.call(newMinimumg2znfNq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrb2mBhEr = "0x0000000000000000000000000000000000000001"
		const FOSTERAddryz8MTYk = accounts[5]
		const initialRateOEtS2Ig = BigInt("1262")
		const initialPeriod7ATRRU = BigInt("1696")
		const initialOwnerCSOjxKC = accounts[4]
		const contractkla7e3l = await Reseller.new(USDTAddrb2mBhEr, FOSTERAddryz8MTYk, initialRateOEtS2Ig, initialPeriod7ATRRU, initialOwnerCSOjxKC, {from: accounts[1]});
		const level5WC68Y59 = BigInt("225")
		const level4VdDoEvv = BigInt("111")
		const level3vxR95j9 = BigInt("182")
		const level20ynZI4 = BigInt("54")
		const level1os8yYaa = BigInt("5")
		const valueY8KHyWD = BigInt("336")
		const newMinimumaM9SEDo = BigInt("1213")
		await contractkla7e3l.setRefBonus.call(level1os8yYaa, level20ynZI4, level3vxR95j9, level4VdDoEvv, level5WC68Y59, {from: accounts[4]});
		await contractkla7e3l.withdraw.call(valueY8KHyWD, {from: accounts[4]});
		await contractkla7e3l.setMinimum.call(newMinimumaM9SEDo, {from: accounts[0]});

		await expect(contractkla7e3l.setRefBonus.call(level1os8yYaa, level20ynZI4, level3vxR95j9, level4VdDoEvv, level5WC68Y59, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbw7fiyt = accounts[3]
		const FOSTERAddrtdpvsGf = accounts[4]
		const initialRateSYTttJ7 = BigInt("1911")
		const initialPeriodqq0DUKr = BigInt("732")
		const initialOwnersqcMiK = accounts[4]
		const contractqnbBvs5 = await Reseller.new(USDTAddrbw7fiyt, FOSTERAddrtdpvsGf, initialRateSYTttJ7, initialPeriodqq0DUKr, initialOwnersqcMiK, {from: accounts[0]});
		const newFeeSRZJfoc = BigInt("192")
		const valuefgfcnE6 = BigInt("283")
		const recipientiy0PCTI = accounts[5]
		const ERC20Tokenvot2GGE = accounts[3]
		const _periodq40NGDx = BigInt("1825")
		const amountvaTeLur = BigInt("846")
		const recipientqUJaAJX = accounts[3]
		await contractqnbBvs5.setFee.call(newFeeSRZJfoc, {from: accounts[4]});
		await contractqnbBvs5.withdrawERC20.call(ERC20Tokenvot2GGE, recipientiy0PCTI, valuefgfcnE6, {from: accounts[2]});
		await contractqnbBvs5.freezeAndTransfer.call(recipientqUJaAJX, amountvaTeLur, _periodq40NGDx, {from: accounts[3]});

		await expect(contractqnbBvs5.setFee.call(newFeeSRZJfoc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
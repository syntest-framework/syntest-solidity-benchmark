const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringG9UDs4A = "cYNmdc5r6ObXUxRmOXxhbWiwexVqxD1T45wpXG1Rje64d13FHfYq7aQ"
		const stringv2NVVqd = "cdFQ4rXBubct8gMrjFGaUp7LodGnurXzKtQHk1bETuJ8s"
		const uintwZh0qj = BigInt("158")
		const NasiLiquidityPoolFactorylcWoTG = await NasiLiquidityPoolFactory.new(stringG9UDs4A, stringv2NVVqd, uintwZh0qj, {from: accounts[4]});
		const uintMDWmfig = BigInt("1867")
		const addresst2bMcLV = accounts[1]
		const uintV48FeNL = BigInt("1467")
		const addressM5CxDAT = accounts[1]
		const addressOtvF0ic = accounts[1]
		const addressCCtAE7A = accounts[5]
		await NasiLiquidityPoolFactorylcWoTG.pause.call({from: accounts[0]});
		const addressHfpHGJq = await NasiLiquidityPoolFactorylcWoTG.burnFrom.call(addresst2bMcLV, uintMDWmfig, {from: accounts[2]});
		const boolM2f3ksw = await NasiLiquidityPoolFactorylcWoTG.increaseAllowance.call(addressM5CxDAT, uintV48FeNL, {from: accounts[4]});
		const uint256bXOHmJ5 = await NasiLiquidityPoolFactorylcWoTG.allowance.call(addressCCtAE7A, addressOtvF0ic, {from: accounts[3]});
		await NasiLiquidityPoolFactorylcWoTG.renouncePauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZSRuOow = accounts[4]
		const addressADTRiLb = accounts[4]
		const uintbPdXJ9P = BigInt("538")
		const uintVgD7EH9 = BigInt("112")
		const NasiLiquidityPoolFactoryWN6ODwc = await NasiLiquidityPoolFactory.new(addressZSRuOow, addressADTRiLb, uintbPdXJ9P, uintVgD7EH9, {from: accounts[1]});
		const addressaOhsdHC = accounts[1]
		const addressFLaojud = accounts[3]
		const uintG18gmGQ = BigInt("1224")
		const addressW41zaBP = accounts[3]
		const addressX2sQ6P7 = accounts[1]
		const addressxFj9BAi = accounts[1]
		const addressNJsDw7P = await NasiLiquidityPoolFactoryWN6ODwc.dev.call(addressaOhsdHC, {from: accounts[0]});
		const boolDz5iF5o = await NasiLiquidityPoolFactoryWN6ODwc.isPauser.call(addressFLaojud, {from: accounts[2]});
		const boollKnFHo = await NasiLiquidityPoolFactoryWN6ODwc.increaseAllowance.call(addressW41zaBP, uintG18gmGQ, {from: accounts[5]});
		const boolV3UBB7I = await NasiLiquidityPoolFactoryWN6ODwc.isOwner.call({from: accounts[2]});
		const addressr8CKja = await NasiLiquidityPoolFactoryWN6ODwc._delegate.call(addressxFj9BAi, addressX2sQ6P7, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressvgcpeyQ = accounts[1]
		const addressrqTOT1r = accounts[3]
		const uintLciMZHF = BigInt("1548")
		const uintzHbgEmF = BigInt("806")
		const NasiLiquidityPoolFactoryhYlDGoG = await NasiLiquidityPoolFactory.new(addressvgcpeyQ, addressrqTOT1r, uintLciMZHF, uintzHbgEmF, {from: accounts[4]});
		const uintZPzR4Cg = BigInt("972")
		const addressP1Vwr7i = accounts[0]
		const addressabq61w = accounts[0]
		const addressOWLEJ0F = accounts[2]
		const uint45Zr2b = BigInt("3")
		const uintaT4dhut = BigInt("370")
		const uintsPHFOT = BigInt("1358")
		const addressF3PBSU = accounts[1]
		const boolj68zUj3 = await NasiLiquidityPoolFactoryhYlDGoG.mint.call(addressP1Vwr7i, uintZPzR4Cg, {from: accounts[3]});
		const addressCJG4Zrf = await NasiLiquidityPoolFactoryhYlDGoG.addPauser.call(addressabq61w, {from: accounts[3]});
		const addressWdcSPg6 = await NasiLiquidityPoolFactoryhYlDGoG.setMigrator.call(addressOWLEJ0F, {from: accounts[3]});
		const 
QLH6Ojj = await NasiLiquidityPoolFactoryhYlDGoG._writeCheckpoint.call(addressF3PBSU, uintsPHFOT, uintaT4dhut, uint45Zr2b, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresss4iy3TG = accounts[1]
		const addressNQmCR4M = accounts[3]
		const uintmAxZT4n = BigInt("1929")
		const uintJ2jj8i = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addresss4iy3TG, addressNQmCR4M, uintmAxZT4n, uintJ2jj8i, {from: accounts[0]});
		const uintN3oeTr8 = BigInt("1438")
		const uintsRwozRN = BigInt("1798")
		const uinto7R6gfr = BigInt("1661")
		const uint256lpYO70a = await NasiLiquidityPoolFactorypEni6vY.getBonusMultiplier.call(uintsRwozRN, uintN3oeTr8, {from: accounts[5]});
		await NasiLiquidityPoolFactorypEni6vY.onlyPauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactorypEni6vY.onlyOwner.call({from: accounts[4]});
		await NasiLiquidityPoolFactorypEni6vY.onlyOwner.call({from: accounts[3]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uinto7R6gfr, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJX7mcmI = "vFnr"
		const stringBGG8TuZ = "xxIUR9Pbjh32Hm6PJlVIQdy"
		const uintTiPPMxH = BigInt("29")
		const NasiLiquidityPoolFactoryn9wiZux = await NasiLiquidityPoolFactory.new(stringJX7mcmI, stringBGG8TuZ, uintTiPPMxH, {from: accounts[0]});
		const addressZj1Md3y = accounts[0]
		const uintTMxS3tM = BigInt("2")
		const uintW7qEhr = BigInt("1277")
		const addressN6pdyfq = "0x0000000000000000000000000000000000000001"
		const addressIU2f9hZ = accounts[2]
		const addresswrfsj6z = await NasiLiquidityPoolFactoryn9wiZux.delegates.call(addressZj1Md3y, {from: accounts[3]});
		const uint256yj7xIA = await NasiLiquidityPoolFactoryn9wiZux.burn.call(uintTMxS3tM, {from: accounts[1]});
		const boolFBmuOWC = await NasiLiquidityPoolFactoryn9wiZux.transferFrom.call(addressIU2f9hZ, addressN6pdyfq, uintW7qEhr, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringMBwN3Nf = "Kpb8F2sInIm3rwJe5VsjoLFW4g451DoFz"
		const stringZOx4yY = "o7lYfEBeetHxSWrKamA1X0DjAS"
		const uintuEgnnee = BigInt("11")
		const NasiLiquidityPoolFactoryWJkJGc = await NasiLiquidityPoolFactory.new(stringMBwN3Nf, stringZOx4yY, uintuEgnnee, {from: accounts[0]});
		const uintaf6vHDC = BigInt("1989")
		const uinttnO3wnu = BigInt("1971")
		const addresskc81HPM = accounts[3]
		const addressrZbnoo = accounts[2]
		const boolqZ1dfh = false
		const uintyOfJZYH = BigInt("96")
		const uintAidI7n = BigInt("1916")
		const uint256Prm5JfX = await NasiLiquidityPoolFactoryWJkJGc.deposit.call(uinttnO3wnu, uintaf6vHDC, {from: "0x0000000000000000000000000000000000000001"});
		const addressMEc2OAS = await NasiLiquidityPoolFactoryWJkJGc.delegates.call(addresskc81HPM, {from: accounts[1]});
		const addressULKSVQG = await NasiLiquidityPoolFactoryWJkJGc.addMinter.call(addressrZbnoo, {from: accounts[2]});
		const uint256vr9euz = await NasiLiquidityPoolFactoryWJkJGc.totalSupply.call({from: accounts[5]});
		const uint256LH6Vvwm = await NasiLiquidityPoolFactoryWJkJGc.setAllocationPoint.call(uintAidI7n, uintyOfJZYH, boolqZ1dfh, {from: accounts[1]});
		await NasiLiquidityPoolFactoryWJkJGc.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRwLLoeh = accounts[4]
		const addresstmZbYzh = accounts[4]
		const uinthkuVHq6 = BigInt("538")
		const uintQYo6oA3 = BigInt("112")
		const NasiLiquidityPoolFactoryWN6ODwc = await NasiLiquidityPoolFactory.new(addressRwLLoeh, addresstmZbYzh, uinthkuVHq6, uintQYo6oA3, {from: accounts[1]});
		const uintFXmEzpA = BigInt("121")
		const addressttpRq1 = accounts[2]
		const uintfXXnDrv = BigInt("1224")
		const addressRvCoSWk = accounts[3]
		const addressTbt3vMv = accounts[1]
		const addressRCn5qNa = accounts[1]
		const byterETPwXl = "0x0f05021e0d0508051402040f021009100c181f1f1210121b000b0f0b1d100b14"
		const bytePgpVXPJ = "0x0f09051b1309150d160b1504190713011b1d121c050a20171117071b171a1211"
		const uintsKkzuWg = BigInt("172")
		const uinttgf2J5P = BigInt("1437")
		const uintVzlCT6L = BigInt("75")
		const addressxBQSeh1 = accounts[2]
		const uint256hd5P7L = await NasiLiquidityPoolFactoryWN6ODwc.updatePool.call(uintFXmEzpA, {from: accounts[2]});
		const addressNJsDw7P = await NasiLiquidityPoolFactoryWN6ODwc.dev.call(addressttpRq1, {from: accounts[0]});
		const boollKnFHo = await NasiLiquidityPoolFactoryWN6ODwc.increaseAllowance.call(addressRvCoSWk, uintfXXnDrv, {from: accounts[5]});
		const boolV3UBB7I = await NasiLiquidityPoolFactoryWN6ODwc.isOwner.call({from: accounts[2]});
		const addressr8CKja = await NasiLiquidityPoolFactoryWN6ODwc._delegate.call(addressRCn5qNa, addressTbt3vMv, {from: accounts[1]});
		const 
bL9VYRA = await NasiLiquidityPoolFactoryWN6ODwc.delegateBySig.call(addressxBQSeh1, uintVzlCT6L, uinttgf2J5P, uintsKkzuWg, bytePgpVXPJ, byterETPwXl, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgcK7jzo = "51dsRToF85bm3XYfJGnOIEGH47rkLgQ4TeiTvsEPjPAXvC2"
		const stringEWG4kzP = "fvuVt16N"
		const uintcSAp74C = BigInt("64")
		const NasiLiquidityPoolFactorybf3vU9Q = await NasiLiquidityPoolFactory.new(stringgcK7jzo, stringEWG4kzP, uintcSAp74C, {from: accounts[3]});
		const uintiuTebG6 = BigInt("375")
		const addressmigSCWJ = accounts[1]
		const uintFpfkHxj = BigInt("1756")
		const addressNVtV8Sm = accounts[3]
		const address5Gsc2I = accounts[1]
		const addressB6Ka5hO = await NasiLiquidityPoolFactorybf3vU9Q.burnFrom.call(addressmigSCWJ, uintiuTebG6, {from: accounts[0]});
		const boolptxDsrO = await NasiLiquidityPoolFactorybf3vU9Q.approve.call(addressNVtV8Sm, uintFpfkHxj, {from: "0x0000000000000000000000000000000000000001"});
		const addressgdhv5ts = await NasiLiquidityPoolFactorybf3vU9Q.transferOwnership.call(address5Gsc2I, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressDc5TUFI = accounts[4]
		const addressMz3PmXr = accounts[4]
		const uintvoXWB4v = BigInt("538")
		const uintmG7m9FH = BigInt("112")
		const NasiLiquidityPoolFactoryWN6ODwc = await NasiLiquidityPoolFactory.new(addressDc5TUFI, addressMz3PmXr, uintvoXWB4v, uintmG7m9FH, {from: accounts[1]});
		const uintO2d9I21 = BigInt("1177")
		const addressIjD9csa = accounts[4]
		const uintGAbL3Mh = BigInt("1224")
		const addressBOq7LGz = accounts[1]
		const uint256qAQ6HhS = await NasiLiquidityPoolFactoryWN6ODwc.emergencyWithdraw.call(uintO2d9I21, {from: accounts[4]});
		const addressNJsDw7P = await NasiLiquidityPoolFactoryWN6ODwc.dev.call(addressIjD9csa, {from: accounts[0]});
		const boollKnFHo = await NasiLiquidityPoolFactoryWN6ODwc.increaseAllowance.call(addressBOq7LGz, uintGAbL3Mh, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringeaxqH72 = "GMiiT9M53vXjECjpkRRcZM9za7z9Nb6SXnBDsqIxr1Gmk6cM5hzBc73XKqjGwt4sCojqMzMU6yzk5fCyr8eSzQBK"
		const stringrNA69BW = "zQF76NcKEMxxfpdxpUWjP101WH1mf7CJbQgkVM9mtWS4WfGqOq03dolVRrGlI4LmNbeXPsbh1qvanTuVd2xPvvfC"
		const uintx6mVVj6 = BigInt("158")
		const NasiLiquidityPoolFactorylr6BPzO = await NasiLiquidityPoolFactory.new(stringeaxqH72, stringrNA69BW, uintx6mVVj6, {from: accounts[5]});
		const addressR2qvHJb = accounts[1]
		const addressoNDtphP = accounts[1]
		const addresssmVa7wB = accounts[3]
		const addressw3vQadI = await NasiLiquidityPoolFactorylr6BPzO.delegates.call(addressR2qvHJb, {from: accounts[0]});
		const uint8fHTkQae = await NasiLiquidityPoolFactorylr6BPzO.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorylr6BPzO.renounceMinter.call({from: accounts[3]});
		const addresskPWIKjH = await NasiLiquidityPoolFactorylr6BPzO.addMinter.call(addressoNDtphP, {from: accounts[5]});
		const addressUAMNJjB = await NasiLiquidityPoolFactorylr6BPzO.delegates.call(addresssmVa7wB, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIc2ZhvR = accounts[1]
		const addressMxJl5P1 = accounts[3]
		const uintp2KH2R6 = BigInt("1929")
		const uintgPHTCxk = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressIc2ZhvR, addressMxJl5P1, uintp2KH2R6, uintgPHTCxk, {from: accounts[0]});
		const uintKCWH6xj = BigInt("1855")
		const uintZ3lLzLI = BigInt("1625")
		const uintQ5WgNJP = BigInt("1438")
		const uintLoKlnzU = BigInt("1798")
		const uintaL8LKvD = BigInt("1661")
		const uint256U3dDARW = await NasiLiquidityPoolFactorypEni6vY.deposit.call(uintZ3lLzLI, uintKCWH6xj, {from: accounts[2]});
		const uint256lpYO70a = await NasiLiquidityPoolFactorypEni6vY.getBonusMultiplier.call(uintLoKlnzU, uintQ5WgNJP, {from: accounts[5]});
		await NasiLiquidityPoolFactorypEni6vY.onlyPauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactorypEni6vY.renounceMinter.call({from: accounts[2]});
		const stringjEPD0ui = await NasiLiquidityPoolFactorypEni6vY.name.call({from: accounts[1]});
		await NasiLiquidityPoolFactorypEni6vY.onlyOwner.call({from: accounts[3]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintaL8LKvD, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressirmami = accounts[1]
		const addressihbieMp = accounts[3]
		const uintzWoLCE = BigInt("1929")
		const uintOZIUjWy = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressirmami, addressihbieMp, uintzWoLCE, uintOZIUjWy, {from: accounts[0]});
		const uintzvyePnw = BigInt("1439")
		const uintE4yGw2 = BigInt("1798")
		const uintzWK4RLt = BigInt("1661")
		const boolYWmKaT1 = await NasiLiquidityPoolFactorypEni6vY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lpYO70a = await NasiLiquidityPoolFactorypEni6vY.getBonusMultiplier.call(uintE4yGw2, uintzvyePnw, {from: accounts[5]});
		await NasiLiquidityPoolFactorypEni6vY.onlyOwner.call({from: accounts[3]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintzWK4RLt, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUOBTk55 = "PxxNdH798yv2E7zlr5VBYX"
		const stringGXQTZfx = "LkeYTNyEe4FFWxyrNNftauYgPsbsX8hBrkD13jSF87b3SVqrLisoDwVT6yAFMyq4EByewu"
		const uintgypvimS = BigInt("228")
		const NasiLiquidityPoolFactoryx8nsI5C = await NasiLiquidityPoolFactory.new(stringUOBTk55, stringGXQTZfx, uintgypvimS, {from: accounts[4]});
		const addressQqzTeRZ = accounts[4]
		const addressOCk9BJX = "0x0000000000000000000000000000000000000001"
		const uintgeQgV49 = BigInt("1735")
		const addressEw8lqQt = accounts[2]
		const addressWQYqTF2 = accounts[0]
		const addressdF7ZmPT = accounts[0]
		const uint256aVazlnL = await NasiLiquidityPoolFactoryx8nsI5C.allowance.call(addressOCk9BJX, addressQqzTeRZ, {from: accounts[2]});
		const boolWd5HQa3 = await NasiLiquidityPoolFactoryx8nsI5C.decreaseAllowance.call(addressEw8lqQt, uintgeQgV49, {from: accounts[1]});
		const addressZkkZZPA = await NasiLiquidityPoolFactoryx8nsI5C.delegate.call(addressWQYqTF2, {from: accounts[1]});
		const addresst0Ndvnr = await NasiLiquidityPoolFactoryx8nsI5C.dev.call(addressdF7ZmPT, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressimbZFm = accounts[4]
		const addressE2FbCjR = accounts[4]
		const uintEmxhUeC = BigInt("538")
		const uintsa0ueR6 = BigInt("112")
		const NasiLiquidityPoolFactoryWN6ODwc = await NasiLiquidityPoolFactory.new(addressimbZFm, addressE2FbCjR, uintEmxhUeC, uintsa0ueR6, {from: accounts[1]});
		const uintCsXlrjx = BigInt("1548")
		const addressSopQP45 = accounts[3]
		const uintm4oMAS8 = BigInt("697")
		const uintGsxAdvM = BigInt("27")
		const uintR0X7xCB = BigInt("1636")
		const addressp0s4mo = accounts[3]
		const uint256rrpcSnK = await NasiLiquidityPoolFactoryWN6ODwc.migrate.call(uintCsXlrjx, {from: accounts[2]});
		const addressNJsDw7P = await NasiLiquidityPoolFactoryWN6ODwc.dev.call(addressSopQP45, {from: accounts[0]});
		const uint256vUTjbcP = await NasiLiquidityPoolFactoryWN6ODwc.updatePool.call(uintm4oMAS8, {from: accounts[1]});
		const uint256AfQQzIx = await NasiLiquidityPoolFactoryWN6ODwc.deposit.call(uintR0X7xCB, uintGsxAdvM, {from: "0x0000000000000000000000000000000000000001"});
		const addressjzQLoi5 = await NasiLiquidityPoolFactoryWN6ODwc.setMigrator.call(addressp0s4mo, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiU4rpbq = "16TaAD4unxKcOzSm2slwhz7WCHe4FjO"
		const stringEiFojxd = "ixdVAkyaU55BnQXP8Qw1mWfiCIP2u9ikunYBwB3QvNMFKyuyUwkmvNAoxhvFvcbQeafV"
		const uintpU7Af3P = BigInt("197")
		const NasiLiquidityPoolFactoryoH8I0J = await NasiLiquidityPoolFactory.new(stringiU4rpbq, stringEiFojxd, uintpU7Af3P, {from: accounts[2]});
		const uintEQDSchc = BigInt("459")
		const addressLhZQti = "0x0000000000000000000000000000000000000001"
		const uintllMyRgz = BigInt("1504")
		const addresslTO2Vgc = accounts[0]
		const addressjqSVQW6 = accounts[4]
		const uintRE2p59R = BigInt("1847")
		const uintoztnYyr = BigInt("1373")
		const addressaYJ4Xaf = accounts[4]
		const addressQX53eQ5 = accounts[1]
		const boolmKeOGP5 = await NasiLiquidityPoolFactoryoH8I0J.increaseAllowance.call(addressLhZQti, uintEQDSchc, {from: accounts[0]});
		await NasiLiquidityPoolFactoryoH8I0J.renounceMinter.call({from: accounts[2]});
		const boolIdjE6xz = await NasiLiquidityPoolFactoryoH8I0J.transferFrom.call(addressjqSVQW6, addresslTO2Vgc, uintllMyRgz, {from: accounts[5]});
		await NasiLiquidityPoolFactoryoH8I0J.whenPaused.call({from: accounts[5]});
		const uint256dkGeWq = await NasiLiquidityPoolFactoryoH8I0J.burn.call(uintRE2p59R, {from: accounts[5]});
		const booluRH3iGH = await NasiLiquidityPoolFactoryoH8I0J.transferFrom.call(addressQX53eQ5, addressaYJ4Xaf, uintoztnYyr, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqGT8G0E = accounts[1]
		const addressK0qalJ = accounts[3]
		const uintsHBpTfp = BigInt("1929")
		const uintCnRl89E = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressqGT8G0E, addressK0qalJ, uintsHBpTfp, uintCnRl89E, {from: accounts[0]});
		const uintiZGjGF = BigInt("1212")
		const boolYWmKaT1 = await NasiLiquidityPoolFactorypEni6vY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintiZGjGF, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressc9IvRi = accounts[1]
		const addressz02J01D = accounts[3]
		const uintXFylmny = BigInt("1929")
		const uintEqjVgl8 = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressc9IvRi, addressz02J01D, uintXFylmny, uintEqjVgl8, {from: accounts[0]});
		const uintJhOZSd2 = BigInt("1439")
		const uintjfb6Dby = BigInt("1798")
		const uintajmNrLy = BigInt("1661")
		const uintRtQwTY = BigInt("237")
		const addresseWQ2DlB = accounts[1]
		const addressmMmzAYO = accounts[4]
		const boolYWmKaT1 = await NasiLiquidityPoolFactorypEni6vY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorypEni6vY.renounceOwnership.call({from: accounts[4]});
		const uint256lpYO70a = await NasiLiquidityPoolFactorypEni6vY.getBonusMultiplier.call(uintjfb6Dby, uintJhOZSd2, {from: accounts[5]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintajmNrLy, {from: accounts[1]});
		const boolnZf4qGG = await NasiLiquidityPoolFactorypEni6vY.mint.call(addresseWQ2DlB, uintRtQwTY, {from: accounts[2]});
		const addressGBOMvHn = await NasiLiquidityPoolFactorypEni6vY.addMinter.call(addressmMmzAYO, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressX50eCw1 = accounts[1]
		const addressSFjz1lD = accounts[3]
		const uintp4GAhZG = BigInt("1929")
		const uintirddWGG = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressX50eCw1, addressSFjz1lD, uintp4GAhZG, uintirddWGG, {from: accounts[0]});
		const uintCwQeq2K = BigInt("1193")
		const uintoeA5Uu0 = BigInt("1794")
		const uintsx2NC2e = BigInt("1439")
		const uintL6oHasa = BigInt("1798")
		const uintOEIWAPM = BigInt("1639")
		const addressO7CJ7x = accounts[3]
		const addressZ200Kv = accounts[5]
		const uint256g82zHSf = await NasiLiquidityPoolFactorypEni6vY.withdraw.call(uintoeA5Uu0, uintCwQeq2K, {from: accounts[4]});
		const uint256lpYO70a = await NasiLiquidityPoolFactorypEni6vY.getBonusMultiplier.call(uintL6oHasa, uintsx2NC2e, {from: accounts[5]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintOEIWAPM, {from: accounts[1]});
		const uint256WdxcJ0 = await NasiLiquidityPoolFactorypEni6vY.allowance.call(addressZ200Kv, addressO7CJ7x, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqzyVFKj = "if9PcHiLTD7IvA4FzvVamF8hFXMZtJXxdWkmqtyCEqZpdAlw8LAkeFyv6oSwVEMwU3kLuOAmgEy9Vg3D8mFtEo"
		const string3pNrEV = "PkjxHkdV2j2qo4"
		const uintjVEEqmL = BigInt("29")
		const NasiLiquidityPoolFactoryuF1E941 = await NasiLiquidityPoolFactory.new(stringqzyVFKj, string3pNrEV, uintjVEEqmL, {from: accounts[1]});
		const address8rlKkU = accounts[3]
		const addressl28FLvW = accounts[4]
		const uintSRWPpY9 = BigInt("1308")
		const addressABAF1qD = "0x0000000000000000000000000000000000000001"
		const uintFgdrcYq = BigInt("1893")
		const bool7vMq0f = false
		const uintk8qLM6E = BigInt("308")
		const uintXv0gMci = BigInt("1576")
		const uintzAkSMJF = BigInt("768")
		const addressX1nrOOp = accounts[4]
		const addressmOJS4JB = await NasiLiquidityPoolFactoryuF1E941.addMinter.call(address8rlKkU, {from: accounts[3]});
		const addresswmV3fRZ = await NasiLiquidityPoolFactoryuF1E941.addPauser.call(addressl28FLvW, {from: accounts[3]});
		const boolnjo1tpu = await NasiLiquidityPoolFactoryuF1E941.increaseAllowance.call(addressABAF1qD, uintSRWPpY9, {from: accounts[2]});
		const uint256FfQtal = await NasiLiquidityPoolFactoryuF1E941.leaveStaking.call(uintFgdrcYq, {from: accounts[0]});
		const uint256VqmTjKP = await NasiLiquidityPoolFactoryuF1E941.setAllocationPoint.call(uintXv0gMci, uintk8qLM6E, bool7vMq0f, {from: accounts[3]});
		const boolJOFWnw2 = await NasiLiquidityPoolFactoryuF1E941.increaseAllowance.call(addressX1nrOOp, uintzAkSMJF, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAmcH4yd = "wQA1martEm7bSCtalVvq3mMUbX83MyM38jdROraCrFWojh3zL4"
		const stringjJJCIUB = "2rbfsHnspat6Ol38KoLaPshbcUKiRKTHbaUkHtPs3sO12Ug4ExFc2gkwCEYcX9uDfDG06y"
		const uintIkxOSM7 = BigInt("25")
		const NasiLiquidityPoolFactoryO4osei = await NasiLiquidityPoolFactory.new(stringAmcH4yd, stringjJJCIUB, uintIkxOSM7, {from: accounts[0]});
		const addresslQIOCq = accounts[5]
		const addressA6JdLR = accounts[5]
		const boolb3ZU3Ol = true
		const addressYH4YYH4 = accounts[2]
		const uintrxbudsG = BigInt("1302")
		const address7SR4cD = accounts[4]
		const address6XrSYY = accounts[4]
		const uint256FNl9S3 = await NasiLiquidityPoolFactoryO4osei.allowance.call(addressA6JdLR, addresslQIOCq, {from: accounts[1]});
		const uint256nAtbKv9 = await NasiLiquidityPoolFactoryO4osei.addLpToken.call(uintrxbudsG, addressYH4YYH4, boolb3ZU3Ol, {from: accounts[3]});
		const addressAPFHm3Y = await NasiLiquidityPoolFactoryO4osei._delegate.call(address6XrSYY, address7SR4cD, {from: accounts[4]});
		await NasiLiquidityPoolFactoryO4osei.massUpdatePools.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJ3u0L4z = "ogossrJBJcNJGUDItG19ArVCYjF6rEnsRpHZ6GcR26rEaufTru"
		const stringsRmv6Pq = "dLBlyGl22PcqYvtDCApCwM9lrrr"
		const uintyYmG7k6 = BigInt("197")
		const NasiLiquidityPoolFactoryKjDRya8 = await NasiLiquidityPoolFactory.new(stringJ3u0L4z, stringsRmv6Pq, uintyYmG7k6, {from: accounts[2]});
		const uintSAIYMqe = BigInt("1285")
		const addressvnDwQ1A = accounts[0]
		const addressxOvDYQJ = accounts[1]
		const addressKKOJ6XZ = accounts[3]
		const addressx3LmsbG = accounts[0]
		const uintjkTPuMW = BigInt("1661")
		const uintwWshHht = BigInt("1955")
		const addressdCdssAL = accounts[1]
		const uintIK61x8o = BigInt("1205")
		const addressEXUHPGO = accounts[1]
		const boolIdK3Ub4 = await NasiLiquidityPoolFactoryKjDRya8.transferFrom.call(addressxOvDYQJ, addressvnDwQ1A, uintSAIYMqe, {from: accounts[1]});
		const addresssMSTGSz = await NasiLiquidityPoolFactoryKjDRya8.delegates.call(addressKKOJ6XZ, {from: accounts[3]});
		const uint256EUtGm9R = await NasiLiquidityPoolFactoryKjDRya8.pendingNasi.call(uintjkTPuMW, addressx3LmsbG, {from: accounts[0]});
		const boolXT8UC92 = await NasiLiquidityPoolFactoryKjDRya8.mint.call(addressdCdssAL, uintwWshHht, {from: accounts[0]});
		const boolm9ZWOoJ = await NasiLiquidityPoolFactoryKjDRya8.increaseAllowance.call(addressEXUHPGO, uintIK61x8o, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkbzIhOY = "4KUGqflNbxC8i267hmQXBpUsseSW8nIOgDChg2nYMAPCS"
		const stringzxYq8Nu = "Ug7X5e3ezDNKslmWrR1ysAjsIublUdIdKbEKVL3yjeEJELKEwX5RwBQVNbN8V8PUg6eVJ7ADPXM1v1NsNwe"
		const uintAUf7jZY = BigInt("49")
		const NasiLiquidityPoolFactoryhWgt0da = await NasiLiquidityPoolFactory.new(stringkbzIhOY, stringzxYq8Nu, uintAUf7jZY, {from: accounts[1]});
		const address1DSwUj = accounts[2]
		await NasiLiquidityPoolFactoryhWgt0da.renouncePauser.call({from: accounts[2]});
		const addressZfrl9n = await NasiLiquidityPoolFactoryhWgt0da.addPauser.call(address1DSwUj, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJPnTluo = "WLPPDvA42IBIfkCuYUox2uFlSUtJ0lD"
		const stringu4B21GX = "tPtHxOE32rbk"
		const uintGkcwC3 = BigInt("193")
		const NasiLiquidityPoolFactoryWZPFRx = await NasiLiquidityPoolFactory.new(stringJPnTluo, stringu4B21GX, uintGkcwC3, {from: accounts[0]});
		const uintoyrySop = BigInt("1343")
		const uintFabPAid = BigInt("1369")
		const addressyxid4Do = accounts[3]
		const uintaImU6na = BigInt("1634")
		const uintv6N6dk7 = BigInt("1114")
		const addressA6CtNWn = accounts[2]
		const addresslWKvedI = accounts[0]
		const uint256rP4oJ4a = await NasiLiquidityPoolFactoryWZPFRx.leaveStaking.call(uintoyrySop, {from: accounts[0]});
		const boolc8HyfF = await NasiLiquidityPoolFactoryWZPFRx.transfer.call(addressyxid4Do, uintFabPAid, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mMxWk2i = await NasiLiquidityPoolFactoryWZPFRx.updatePool.call(uintaImU6na, {from: accounts[0]});
		await NasiLiquidityPoolFactoryWZPFRx.onlyOwner.call({from: accounts[1]});
		const boolVDNJaED = await NasiLiquidityPoolFactoryWZPFRx.transferFrom.call(addresslWKvedI, addressA6CtNWn, uintv6N6dk7, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringMFEtE9E = "eWSHhHySjdVZnsSsDE5IJhNXTUVvV33gBSz4GLDjUKAy8JjVsujEtYZGQh"
		const stringXrlTfpB = "a32Qx9WCNAbwnXwQmMmW318C"
		const uintFqNtNZc = BigInt("168")
		const NasiLiquidityPoolFactoryxaKfs96 = await NasiLiquidityPoolFactory.new(stringMFEtE9E, stringXrlTfpB, uintFqNtNZc, {from: accounts[0]});
		const uinteHjCL5P = BigInt("236")
		const addressWE0uWTy = accounts[2]
		const uintHpLsin5 = BigInt("1257")
		const addressOXCnL8C = accounts[4]
		const uintoJUr3R = BigInt("1587")
		const uint256W3uWnW = await NasiLiquidityPoolFactoryxaKfs96.burn.call(uinteHjCL5P, {from: accounts[0]});
		const addressXsjMI9 = await NasiLiquidityPoolFactoryxaKfs96.addMinter.call(addressWE0uWTy, {from: accounts[3]});
		await NasiLiquidityPoolFactoryxaKfs96.massUpdatePools.call({from: accounts[1]});
		const stringDre0QxL = await NasiLiquidityPoolFactoryxaKfs96.symbol.call({from: accounts[5]});
		const boolOoH9C2Q = await NasiLiquidityPoolFactoryxaKfs96.increaseAllowance.call(addressOXCnL8C, uintHpLsin5, {from: accounts[2]});
		const uint256htejG65 = await NasiLiquidityPoolFactoryxaKfs96.leaveStaking.call(uintoJUr3R, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressauQTEJw = accounts[1]
		const addressKyKhrb0 = accounts[3]
		const uintMj6hKeT = BigInt("1929")
		const uintM77IL49 = BigInt("158")
		const NasiLiquidityPoolFactorypEni6vY = await NasiLiquidityPoolFactory.new(addressauQTEJw, addressKyKhrb0, uintMj6hKeT, uintM77IL49, {from: accounts[0]});
		const uintqqVLMQK = BigInt("1012")
		const address6Ob0U3 = accounts[4]
		const uintKvrvaw6 = BigInt("1651")
		const uint256v0rc47W = await NasiLiquidityPoolFactorypEni6vY.leaveStaking.call(uintqqVLMQK, {from: accounts[2]});
		const addressVN0Ctb2 = await NasiLiquidityPoolFactorypEni6vY.delegate.call(address6Ob0U3, {from: accounts[0]});
		const uint256Nw2UkDj = await NasiLiquidityPoolFactorypEni6vY.enterStaking.call(uintKvrvaw6, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqD0Ixmi = accounts[1]
		const addresszwnX02N = accounts[3]
		const uintg9lwXa = BigInt("2001")
		const uintSVZFGiD = BigInt("836")
		const NasiLiquidityPoolFactorylEYYNmO = await NasiLiquidityPoolFactory.new(addressqD0Ixmi, addresszwnX02N, uintg9lwXa, uintSVZFGiD, {from: "0x0000000000000000000000000000000000000001"});
		const address78o3Dy = accounts[5]
		const uintYZCFXbP = BigInt("1287")
		const addressLHAFc3Z = accounts[0]
		const addresszpE1h28 = await NasiLiquidityPoolFactorylEYYNmO.addMinter.call(address78o3Dy, {from: accounts[5]});
		const boolh3GoEEq = await NasiLiquidityPoolFactorylEYYNmO.increaseAllowance.call(addressLHAFc3Z, uintYZCFXbP, {from: accounts[4]});
		await NasiLiquidityPoolFactorylEYYNmO.whenNotPaused.call({from: accounts[1]});
	});
})
const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringKhHvoUS = "uN7wBUJhrF3TUlDrR4BXHNo3Wa3yCkbXYa8F6iwPeeQazWFvUB41WVINhqyrr7FhwJ5TMlK9qPgWlHwAngQ775R5"
		const stringQSdbn8 = "jzOH7kMgIQwgoheKh7624w5Rc"
		const uintMvrrD9 = BigInt("134")
		const BACMARSLPTOKENPoolCQc5v10 = await BACMARSLPTOKENPool.new(stringKhHvoUS, stringQSdbn8, uintMvrrD9, {from: accounts[0]});
		const addressTfaPtkf = accounts[1]
		await BACMARSLPTOKENPoolCQc5v10.nonReentrant.call({from: accounts[4]});
		const uint256y3uDhv = await BACMARSLPTOKENPoolCQc5v10.earned.call(addressTfaPtkf, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Pp7IyHS = await BACMARSLPTOKENPoolCQc5v10.decimals.call({from: accounts[3]});
		const stringDgz3oP9 = await BACMARSLPTOKENPoolCQc5v10.symbol.call({from: accounts[4]});
		const uint256KVYiFcE = await BACMARSLPTOKENPoolCQc5v10.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolCQc5v10.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBBGrtc = "2R1O7Tv9oiqNXW4k1qQ9z"
		const stringSCLq1ET = "gF3gfeMAt7z16NN3o9TMvgRJG2dEmvam5vxEQ4EJuUoMl"
		const uintATlIyv1 = BigInt("231")
		const BACMARSLPTOKENPoolikUHzxI = await BACMARSLPTOKENPool.new(stringBBGrtc, stringSCLq1ET, uintATlIyv1, {from: accounts[2]});
		const uintLoQxFaX = BigInt("507")
		const byteIYISYZh = "0x180c191508090308061011161312130e1e07141a1a1e13161d0c0e0c0f08001d"
		const byteTlgKpci = "0x17000a1a1f010b0813100a1207071f020c16091b050c1d1a0108040f1809040b"
		const uintPh2F5dT = BigInt("12")
		const uintLqUEes = BigInt("1259")
		const uintrrFAKN7 = BigInt("1338")
		const uint256vMF0hmF = await BACMARSLPTOKENPoolikUHzxI.notifyRewardAmount.call(uintLoQxFaX, {from: accounts[3]});
		await BACMARSLPTOKENPoolikUHzxI.getReward.call({from: accounts[1]});
		const uint256TWJRn4S = await BACMARSLPTOKENPoolikUHzxI.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolikUHzxI.nonReentrant.call({from: accounts[2]});
		const uint256KE03kFO = await BACMARSLPTOKENPoolikUHzxI.stakeWithPermit.call(uintrrFAKN7, uintLqUEes, uintPh2F5dT, byteTlgKpci, byteIYISYZh, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssFu0TZs = accounts[2]
		const addresseLkgXd = accounts[3]
		const addressgjkyY3F = accounts[5]
		const BACMARSLPTOKENPooldOFCnb0 = await BACMARSLPTOKENPool.new(addresssFu0TZs, addresseLkgXd, addressgjkyY3F, {from: accounts[3]});
		const uintZNdFSB = BigInt("291")
		const uintRUeuPlW = BigInt("1425")
		const uint256IyWg3S = await BACMARSLPTOKENPooldOFCnb0.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256WazvGhK = await BACMARSLPTOKENPooldOFCnb0.withdraw.call(uintZNdFSB, {from: accounts[3]});
//		const uint256YdnoAVA = await BACMARSLPTOKENPooldOFCnb0.withdraw.call(uintRUeuPlW, {from: accounts[4]});
//		const uint256hiE2tPn = await BACMARSLPTOKENPooldOFCnb0.totalSupply.call({from: accounts[0]});
//		const uint256MLhMZU4 = await BACMARSLPTOKENPooldOFCnb0.totalSupply.call({from: accounts[3]});

		assert.equal(uint256IyWg3S, BigInt("0"))
		await expect(BACMARSLPTOKENPooldOFCnb0.withdraw.call(uintZNdFSB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRCk1p2G = accounts[3]
		const addresshO802V9 = accounts[5]
		const addressIJHdrKp = accounts[4]
		const BACMARSLPTOKENPooldwU4OPG = await BACMARSLPTOKENPool.new(addressRCk1p2G, addresshO802V9, addressIJHdrKp, {from: accounts[4]});
		const uintb8fj8eT = BigInt("1576")
//		await BACMARSLPTOKENPooldwU4OPG.getReward.call({from: accounts[1]});
//		const uint2560as6kB = await BACMARSLPTOKENPooldwU4OPG.rewardPerToken.call({from: accounts[2]});
//		const uint256b2GlUln = await BACMARSLPTOKENPooldwU4OPG.withdraw.call(uintb8fj8eT, {from: accounts[2]});
//		const uint256TCs89mU = await BACMARSLPTOKENPooldwU4OPG.totalSupply.call({from: accounts[3]});
//		const uint256bXUmhr = await BACMARSLPTOKENPooldwU4OPG.rewardPerToken.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPooldwU4OPG.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPkJVePr = "695J5woIFixFPGU4ynQ9UEv4AnbWyQfhlSPsbFfKzo2bKsNfJHFLXt695fWSjuIPFcEYM9pePRgi0E"
		const stringmyWitN = "y8Cx86mNjbkTG81d29VQnWsqRjNb8a5FJoDy"
		const uintqp8VCfr = BigInt("37")
		const BACMARSLPTOKENPoolenv8EV5 = await BACMARSLPTOKENPool.new(stringPkJVePr, stringmyWitN, uintqp8VCfr, {from: accounts[1]});
		const uinthQyTOul = BigInt("1926")
		const uint256tG2Nty3 = await BACMARSLPTOKENPoolenv8EV5.stake.call(uinthQyTOul, {from: accounts[0]});
		const stringGo109t = await BACMARSLPTOKENPoolenv8EV5.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVTDVXEN = accounts[3]
		const addresshSWYYC = "0x0000000000000000000000000000000000000001"
		const addressen367la = accounts[3]
		const BACMARSLPTOKENPooltFEInLr = await BACMARSLPTOKENPool.new(addressVTDVXEN, addresshSWYYC, addressen367la, {from: accounts[2]});
		const uintne1TRvc = BigInt("489")
		const addressxnxIeIJ = accounts[1]
//		const uint256pX6nzk2 = await BACMARSLPTOKENPooltFEInLr.stake.call(uintne1TRvc, {from: accounts[1]});
//		const uint256LyBmiRo = await BACMARSLPTOKENPooltFEInLr.earned.call(addressxnxIeIJ, {from: accounts[1]});
//		await BACMARSLPTOKENPooltFEInLr.getReward.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPooltFEInLr.stake.call(uintne1TRvc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaqsOYt8 = "UWyERHuLHBI2ed"
		const stringxr1vPgQ = "wgREIDOMdWiP5LTiDdtsTIO7X5vdEg4KSbvPrVYwFaNjltychQ5eSpT2tLVElbehWfWVSMJ3iBuhT1Auw"
		const uintOaFTSI1 = BigInt("250")
		const BACMARSLPTOKENPoolP7rOR7m = await BACMARSLPTOKENPool.new(stringaqsOYt8, stringxr1vPgQ, uintOaFTSI1, {from: accounts[4]});
		const uintyXTWm7D = BigInt("1879")
		const uintfKjlMLW = BigInt("269")
		const uint256SSjL8ti = await BACMARSLPTOKENPoolP7rOR7m.withdraw.call(uintyXTWm7D, {from: accounts[4]});
		const stringdnBwLTj = await BACMARSLPTOKENPoolP7rOR7m.symbol.call({from: accounts[4]});
		const uint256RRR9dko = await BACMARSLPTOKENPoolP7rOR7m.stake.call(uintfKjlMLW, {from: accounts[4]});
		await BACMARSLPTOKENPoolP7rOR7m.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTbF5EP6 = accounts[0]
		const addressGHh3af = accounts[1]
		const addressh2KHEZ2 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolnSeZQnA = await BACMARSLPTOKENPool.new(addressTbF5EP6, addressGHh3af, addressh2KHEZ2, {from: accounts[1]});
		const addressjGxicjZ = accounts[4]
		const addressyhb6O9B = accounts[1]
		const uintbwEvJoF = BigInt("1518")
		const addresstLg1dc0 = accounts[2]
//		const addressJtxfmxz = await BACMARSLPTOKENPoolnSeZQnA.updateReward.call(addressjGxicjZ, {from: accounts[1]});
//		const uint256vAw0tIr = await BACMARSLPTOKENPoolnSeZQnA.earned.call(addressyhb6O9B, {from: accounts[0]});
//		const uint256k6tfDMM = await BACMARSLPTOKENPoolnSeZQnA.stake.call(uintbwEvJoF, {from: accounts[4]});
//		const uint256Ue05dUT = await BACMARSLPTOKENPoolnSeZQnA.earned.call(addresstLg1dc0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tPAeGAL = await BACMARSLPTOKENPoolnSeZQnA.totalSupply.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolnSeZQnA.updateReward.call(addressjGxicjZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk7pbCs2 = "AAcn51U7AiA5BB7ILz1qKRUwdsV"
		const stringkjjkqo5 = "Us3FWZngAWXdlG6d9MtGuFxMA7OhRIneRt"
		const uintmyEBVTz = BigInt("17")
		const BACMARSLPTOKENPoolMz1xYxC = await BACMARSLPTOKENPool.new(stringk7pbCs2, stringkjjkqo5, uintmyEBVTz, {from: accounts[1]});
		const uint8BDdtlx = await BACMARSLPTOKENPoolMz1xYxC.decimals.call({from: accounts[5]});
		const uint256uI5iFM = await BACMARSLPTOKENPoolMz1xYxC.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolMz1xYxC.getReward.call({from: accounts[3]});
		const stringyZbu3Pp = await BACMARSLPTOKENPoolMz1xYxC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAsW6FX = accounts[3]
		const addressKCZd14 = accounts[5]
		const addressmWgWFGe = accounts[4]
		const BACMARSLPTOKENPooldwU4OPG = await BACMARSLPTOKENPool.new(addressAsW6FX, addressKCZd14, addressmWgWFGe, {from: accounts[4]});
//		await BACMARSLPTOKENPooldwU4OPG.getReward.call({from: accounts[1]});
//		const uint2560as6kB = await BACMARSLPTOKENPooldwU4OPG.rewardPerToken.call({from: accounts[2]});
//		const uint256TCs89mU = await BACMARSLPTOKENPooldwU4OPG.totalSupply.call({from: accounts[3]});
//		const uint256bXUmhr = await BACMARSLPTOKENPooldwU4OPG.rewardPerToken.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPooldwU4OPG.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJNurPay = accounts[5]
		const addresss4vVIO = accounts[3]
		const address2VaW8Q = accounts[1]
		const BACMARSLPTOKENPoolXwaOKp = await BACMARSLPTOKENPool.new(addressJNurPay, addresss4vVIO, address2VaW8Q, {from: accounts[4]});
		const addressTkLN920 = accounts[2]
		const uint256IVn77RG = await BACMARSLPTOKENPoolXwaOKp.getRewardForDuration.call({from: accounts[0]});
		const uint256FNAgaF0 = await BACMARSLPTOKENPoolXwaOKp.balanceOf.call(addressTkLN920, {from: accounts[2]});
//		await BACMARSLPTOKENPoolXwaOKp.nonReentrant.call({from: accounts[2]});
//		const uint8kmdsDPM = await BACMARSLPTOKENPoolXwaOKp.decimals.call({from: accounts[0]});

		assert.equal(uint256FNAgaF0, BigInt("0"))
		assert.equal(uint256IVn77RG, BigInt("0"))
		await expect(BACMARSLPTOKENPoolXwaOKp.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOm4umAR = accounts[1]
		const addresspJmqdkJ = accounts[0]
		const addresswRFBAxe = accounts[1]
		const BACMARSLPTOKENPoolYDTC1AJ = await BACMARSLPTOKENPool.new(addressOm4umAR, addresspJmqdkJ, addresswRFBAxe, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolYDTC1AJ.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256ZB0aIHV = await BACMARSLPTOKENPoolYDTC1AJ.rewardPerToken.call({from: accounts[1]});
		const uint256xX3KEsR = await BACMARSLPTOKENPoolYDTC1AJ.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolYDTC1AJ.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdgxsKLF = accounts[3]
		const addressLnInVh = "0x0000000000000000000000000000000000000001"
		const addressgNtw10x = accounts[3]
		const BACMARSLPTOKENPooltFEInLr = await BACMARSLPTOKENPool.new(addressdgxsKLF, addressLnInVh, addressgNtw10x, {from: accounts[2]});
		const addressjBKk1Kd = accounts[2]
		const uintEdtngZy = BigInt("1566")
		const uint256iGHZCHG = await BACMARSLPTOKENPooltFEInLr.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256LyBmiRo = await BACMARSLPTOKENPooltFEInLr.earned.call(addressjBKk1Kd, {from: accounts[1]});
//		const uint256PfxwHoB = await BACMARSLPTOKENPooltFEInLr.notifyRewardAmount.call(uintEdtngZy, {from: accounts[3]});
//		await BACMARSLPTOKENPooltFEInLr.exit.call({from: accounts[1]});

		assert.equal(uint256LyBmiRo, BigInt("0"))
		assert.equal(uint256iGHZCHG, BigInt("0"))
		await expect(BACMARSLPTOKENPooltFEInLr.notifyRewardAmount.call(uintEdtngZy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYeUrl0t = "scHmy0CKeBJ7EnGj1w6sgChvcf2KW0PsqqC4wdGV3EmHUwGJBNkMIDFrHu34v1yprjsJ"
		const stringfduc7LP = "eF3nimZCkuze807FYr6xM2367iMYgjv3my7GUEqr5qvQdynpS"
		const uintFHAmNpm = BigInt("97")
		const BACMARSLPTOKENPoolvVERRri = await BACMARSLPTOKENPool.new(stringYeUrl0t, stringfduc7LP, uintFHAmNpm, {from: "0x0000000000000000000000000000000000000001"});
		const uintp7fw3A4 = BigInt("1357")
		const uintxfrm50u = BigInt("101")
		const uint256yB0isEu = await BACMARSLPTOKENPoolvVERRri.stake.call(uintp7fw3A4, {from: accounts[4]});
		const uint256escLf19 = await BACMARSLPTOKENPoolvVERRri.notifyRewardAmount.call(uintxfrm50u, {from: accounts[2]});
		const uint256ZRcJvb5 = await BACMARSLPTOKENPoolvVERRri.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUbtri6B = accounts[3]
		const addressiJcBgXB = "0x0000000000000000000000000000000000000001"
		const addressRRSMLYJ = accounts[3]
		const BACMARSLPTOKENPooltFEInLr = await BACMARSLPTOKENPool.new(addressUbtri6B, addressiJcBgXB, addressRRSMLYJ, {from: accounts[2]});
		const addressFkPT7TR = accounts[2]
//		await BACMARSLPTOKENPooltFEInLr.exit.call({from: accounts[0]});
//		const uint256LyBmiRo = await BACMARSLPTOKENPooltFEInLr.earned.call(addressFkPT7TR, {from: accounts[1]});
//		await BACMARSLPTOKENPooltFEInLr.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPooltFEInLr.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressy0SwrRc = accounts[3]
		const addressaFxWWl8 = "0x0000000000000000000000000000000000000001"
		const addressXOxDO1m = accounts[3]
		const BACMARSLPTOKENPooltFEInLr = await BACMARSLPTOKENPool.new(addressy0SwrRc, addressaFxWWl8, addressXOxDO1m, {from: accounts[2]});
		const addresswOEWVI1 = accounts[1]
		const bytedXxLBr = "0x1213111918101b0d1f1505070b180e1d0612031818191f1f02010512181c1820"
		const bytepT4MUcA = "0x171f0c0d19171d0006031c19081913091b0a0b161402181c0c1c160620191920"
		const uinteskLl5Q = BigInt("1")
		const uintuiRZw1X = BigInt("833")
		const uintTkMNal = BigInt("187")
		const uint256LyBmiRo = await BACMARSLPTOKENPooltFEInLr.earned.call(addresswOEWVI1, {from: accounts[1]});
//		const uint256tmyiX4 = await BACMARSLPTOKENPooltFEInLr.stakeWithPermit.call(uintTkMNal, uintuiRZw1X, uinteskLl5Q, bytepT4MUcA, bytedXxLBr, {from: accounts[4]});

		assert.equal(uint256LyBmiRo, BigInt("0"))
		await expect(BACMARSLPTOKENPooltFEInLr.stakeWithPermit.call(uintTkMNal, uintuiRZw1X, uinteskLl5Q, bytepT4MUcA, bytedXxLBr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd3M0Psx = "mvihrzWKE993Q"
		const stringl1wTJCw = "L3Rki23WsYUgQpK"
		const uintzzkgrFa = BigInt("246")
		const BACMARSLPTOKENPoolS9mSbYt = await BACMARSLPTOKENPool.new(stringd3M0Psx, stringl1wTJCw, uintzzkgrFa, {from: accounts[3]});
		const uintW1M7d0m = BigInt("895")
		const addressqjGUnH7 = accounts[2]
		const uintCVlzXu5 = BigInt("2037")
		const uint256sQk8DiE = await BACMARSLPTOKENPoolS9mSbYt.getRewardForDuration.call({from: accounts[3]});
		const uint8p3sbH7 = await BACMARSLPTOKENPoolS9mSbYt.decimals.call({from: accounts[1]});
		const uint256fFXfT3 = await BACMARSLPTOKENPoolS9mSbYt.stake.call(uintW1M7d0m, {from: accounts[5]});
		await BACMARSLPTOKENPoolS9mSbYt.onlyRewardsDistribution.call({from: accounts[1]});
		const addressMsvyIUG = await BACMARSLPTOKENPoolS9mSbYt.updateReward.call(addressqjGUnH7, {from: accounts[4]});
		const uint256KqDSuJf = await BACMARSLPTOKENPoolS9mSbYt.stake.call(uintCVlzXu5, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDYLsApS = accounts[4]
		const addressJg5eO2 = accounts[1]
		const addressccHRbds = accounts[0]
		const BACMARSLPTOKENPoolxSqph41 = await BACMARSLPTOKENPool.new(addressDYLsApS, addressJg5eO2, addressccHRbds, {from: accounts[0]});
		const uintQ3Hlgb = BigInt("1035")
		const addressaVDBYc2 = accounts[2]
//		const uint256Ew02ZJh = await BACMARSLPTOKENPoolxSqph41.notifyRewardAmount.call(uintQ3Hlgb, {from: accounts[2]});
//		await BACMARSLPTOKENPoolxSqph41.getReward.call({from: accounts[1]});
//		const uint256YwhX02 = await BACMARSLPTOKENPoolxSqph41.rewardPerToken.call({from: accounts[1]});
//		const uint256rVv0Xqq = await BACMARSLPTOKENPoolxSqph41.earned.call(addressaVDBYc2, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolxSqph41.notifyRewardAmount.call(uintQ3Hlgb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlWE3Ymh = "uLUjlpn30llYBSFlAWk"
		const stringHDNJ8oE = "EXIXq2b2MQh"
		const uintcbVBbL0 = BigInt("68")
		const BACMARSLPTOKENPoolUEsC3C = await BACMARSLPTOKENPool.new(stringlWE3Ymh, stringHDNJ8oE, uintcbVBbL0, {from: accounts[2]});
		const address2VIiAA = accounts[1]
		const uintwhkSII = BigInt("868")
		const uintFOJ43v4 = BigInt("1898")
		const byteyRmGoM = "0x041503100114190918051017040e0a1107171f04061a1b08060e1712000b0f1c"
		const byteInkOFg3 = "0x02171c061505190d02191e0305071f1e1c030600171b1f030817170c04060a1f"
		const uintjBwWhup = BigInt("250")
		const uintQM1hm66 = BigInt("1934")
		const uintwJ1HDdC = BigInt("1143")
		const uint256AQvQIpm = await BACMARSLPTOKENPoolUEsC3C.balanceOf.call(address2VIiAA, {from: accounts[3]});
		const uint256w4NoE0 = await BACMARSLPTOKENPoolUEsC3C.stake.call(uintwhkSII, {from: accounts[0]});
		const uint256MRn05Oh = await BACMARSLPTOKENPoolUEsC3C.notifyRewardAmount.call(uintFOJ43v4, {from: accounts[1]});
		const uint256uGb5THi = await BACMARSLPTOKENPoolUEsC3C.stakeWithPermit.call(uintwJ1HDdC, uintQM1hm66, uintjBwWhup, byteInkOFg3, byteyRmGoM, {from: accounts[5]});
		const stringLm9Vglb = await BACMARSLPTOKENPoolUEsC3C.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr2dKQAv = "m4qUKRzawJ4jTIWZK5mPrYliqMG"
		const stringtM6Vzrf = "Z5sl092zCL1FzYJculVQjsbSMkoDc3rHsgcv6yuPkuS2A9ieoGF"
		const uintFJzAXh7 = BigInt("80")
		const BACMARSLPTOKENPooldfxjiFi = await BACMARSLPTOKENPool.new(stringr2dKQAv, stringtM6Vzrf, uintFJzAXh7, {from: accounts[4]});
		const uintZIr4X1P = BigInt("711")
		const addressCdO3u8g = accounts[4]
		const stringkCchugy = await BACMARSLPTOKENPooldfxjiFi.name.call({from: accounts[1]});
		const uint256LYeAMro = await BACMARSLPTOKENPooldfxjiFi.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPooldfxjiFi.exit.call({from: accounts[1]});
		const uint256p3jYsbq = await BACMARSLPTOKENPooldfxjiFi.stake.call(uintZIr4X1P, {from: accounts[1]});
		const uint256QXJa6gS = await BACMARSLPTOKENPooldfxjiFi.earned.call(addressCdO3u8g, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhJyZ5dP = "FdVuNyToQh2tRi8N4J1qX7jbLCVOHIhrnnLFb3x7jiLSGIsefJWQ3LpaJRqPIQ8QfXfRpBwlgWUx5dvCPb"
		const stringMFQ6Atm = "wNYx1LsmnX7MHGIMknuMrv3Ulxmu7NPN0U3o9sNQkk"
		const uintjh1dd7 = BigInt("145")
		const BACMARSLPTOKENPoolRP27c5S = await BACMARSLPTOKENPool.new(stringhJyZ5dP, stringMFQ6Atm, uintjh1dd7, {from: accounts[0]});
		const addresssrxhISL = accounts[3]
		await BACMARSLPTOKENPoolRP27c5S.nonReentrant.call({from: accounts[0]});
		const stringH4wvHTa = await BACMARSLPTOKENPoolRP27c5S.symbol.call({from: accounts[2]});
		const addressnme2dl8 = await BACMARSLPTOKENPoolRP27c5S.updateReward.call(addresssrxhISL, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringo1Xitvs = "DF4z77DADi1L3gOqlVKrIfJEa4uFHLr5Le6u"
		const stringYoHeCL1 = "P7Xee2IT7AcJU74BF6LBseDegtm3e2hmIOjhMT"
		const uintZxqcItW = BigInt("111")
		const BACMARSLPTOKENPoolR8tIM9b = await BACMARSLPTOKENPool.new(stringo1Xitvs, stringYoHeCL1, uintZxqcItW, {from: accounts[1]});
		const byteeMUelKj = "0x1d1a0b130805021600080c171514040a18121107070c110f1e17021b170d190f"
		const bytel86tBaO = "0x171e000818011d0e1616111b1501150c0a0a08170805101b0206101608190118"
		const uintR09MarJ = BigInt("11")
		const uintbvFekpe = BigInt("1296")
		const uintEkwpeIz = BigInt("1050")
		const uint256iRm4gvC = await BACMARSLPTOKENPoolR8tIM9b.stakeWithPermit.call(uintEkwpeIz, uintbvFekpe, uintR09MarJ, bytel86tBaO, byteeMUelKj, {from: accounts[0]});
		const stringUzVt3xo = await BACMARSLPTOKENPoolR8tIM9b.symbol.call({from: accounts[1]});
		const stringrMf15BA = await BACMARSLPTOKENPoolR8tIM9b.symbol.call({from: accounts[3]});
		const uint256bimf3H = await BACMARSLPTOKENPoolR8tIM9b.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolR8tIM9b.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringK26rYhE = "cDQ9J9U1zXmX2cF8E7Fsud4pEINp3rrw9YIexUXEKxut4TrzBGDW"
		const stringW5iIBQH = "4qsXBOqdT5CzxdUcgb73lznYDGlwz1nrBYvL53X119GFzsM9yCWqvHlLLGA1E7SyK4MET"
		const uintGifyyfk = BigInt("163")
		const BACMARSLPTOKENPoolc7T6Pin = await BACMARSLPTOKENPool.new(stringK26rYhE, stringW5iIBQH, uintGifyyfk, {from: accounts[1]});
		await BACMARSLPTOKENPoolc7T6Pin.nonReentrant.call({from: accounts[4]});
		const uint256Oqmqvq = await BACMARSLPTOKENPoolc7T6Pin.rewardPerToken.call({from: accounts[2]});
		const stringtb37t2 = await BACMARSLPTOKENPoolc7T6Pin.symbol.call({from: accounts[2]});
		const uint256Z9KQpaF = await BACMARSLPTOKENPoolc7T6Pin.getRewardForDuration.call({from: accounts[1]});
		const uint256atSrKvT = await BACMARSLPTOKENPoolc7T6Pin.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqkcOJ4g = "JAEK9KbQeg365hAgQmUzJ1HTIwTJP5zn1DOXJBfBOmiFuVUmYxg6gEMR14ubgHPCqvihGJzFCp"
		const stringG9IpgNM = "1shg7ZTZsvQlEJlwrUC6HQDra45sIYy2b3OrXdvsf"
		const uintsNgynE = BigInt("220")
		const BACMARSLPTOKENPoolUDTbHmL = await BACMARSLPTOKENPool.new(stringqkcOJ4g, stringG9IpgNM, uintsNgynE, {from: accounts[0]});
		const addresstbVP5uu = accounts[1]
		await BACMARSLPTOKENPoolUDTbHmL.exit.call({from: accounts[4]});
		const uint256By2fQ2k = await BACMARSLPTOKENPoolUDTbHmL.totalSupply.call({from: accounts[0]});
		const uint256W7rBer = await BACMARSLPTOKENPoolUDTbHmL.balanceOf.call(addresstbVP5uu, {from: accounts[1]});
		await BACMARSLPTOKENPoolUDTbHmL.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPoolUDTbHmL.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringddTuHQz = "sN9Xltu40gOJjn6vkCA16qIiPzQguSjeykmRFcHAd4g0WUk2kFSHP"
		const stringsoXSk7S = "lfucI29CXYzrm"
		const uintZJx97XP = BigInt("115")
		const BACMARSLPTOKENPoolFax1MP = await BACMARSLPTOKENPool.new(stringddTuHQz, stringsoXSk7S, uintZJx97XP, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolFax1MP.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256daudNRO = await BACMARSLPTOKENPoolFax1MP.totalSupply.call({from: accounts[0]});
		const uint8hFB9z29 = await BACMARSLPTOKENPoolFax1MP.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkeeQBF8 = "5JQvef5XHhoTGNSv4djZyM0y73Qe10rVBjlyZmZGQG"
		const stringjUQW4Iy = "RKujvDQWUokAHEK9M1YPaK2hLYybwOeRPvsIKOzsYNcxrPa2PIRjKbyuyiKrSui5shMLruQGEP9wt6eCZUqxQT9NfeVJX5S"
		const uintXstK2AJ = BigInt("192")
		const BACMARSLPTOKENPoolXwimpVA = await BACMARSLPTOKENPool.new(stringkeeQBF8, stringjUQW4Iy, uintXstK2AJ, {from: accounts[3]});
		const uintsgS2n67 = BigInt("964")
		const addressIgozanI = accounts[2]
		const uintXYpCjuY = BigInt("668")
		const uint256QHoBihn = await BACMARSLPTOKENPoolXwimpVA.notifyRewardAmount.call(uintsgS2n67, {from: accounts[0]});
		const addressroQH0AH = await BACMARSLPTOKENPoolXwimpVA.updateReward.call(addressIgozanI, {from: accounts[0]});
		const uint256vUwqHS6 = await BACMARSLPTOKENPoolXwimpVA.notifyRewardAmount.call(uintXYpCjuY, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGQNfzUF = "jxopYCufJbXWHhA52fzeY0fnr8n"
		const stringOAkx85D = "sUS8TunUOnEx214PpBrDqe7jDKxhqRJO6xxsM9lYwrZb81bMexiBLkqaTd4fG"
		const uint0JRFDC = BigInt("82")
		const BACMARSLPTOKENPoolN0ixwT = await BACMARSLPTOKENPool.new(stringGQNfzUF, stringOAkx85D, uint0JRFDC, {from: accounts[3]});
		const uint256Ts5VsVt = await BACMARSLPTOKENPoolN0ixwT.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolN0ixwT.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolN0ixwT.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolN0ixwT.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolN0ixwT.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFQXXfY = "UwdHjAJkqgDeJxnXgoDGEwVihiE2aAVDKRc1oF5vLbTWX434bsYSqUbsS8W6N4C"
		const stringJnSIQQl = "qYUTC4f5ytDyCBwFhA2fNZKMDDgReYPraZ7W9sicvDuA"
		const uintBgZfBrK = BigInt("242")
		const BACMARSLPTOKENPoolBMUVi8 = await BACMARSLPTOKENPool.new(stringFQXXfY, stringJnSIQQl, uintBgZfBrK, {from: accounts[3]});
		const addressc1ipl7r = "0x0000000000000000000000000000000000000001"
		const uint256WOLQBAf = await BACMARSLPTOKENPoolBMUVi8.rewardPerToken.call({from: accounts[1]});
		const uint256jZ4iokb = await BACMARSLPTOKENPoolBMUVi8.balanceOf.call(addressc1ipl7r, {from: accounts[4]});
		await BACMARSLPTOKENPoolBMUVi8.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringliuV00m = "uk33pHg62rMdgiXvIzrrI"
		const stringRMRUK29 = "WLvgMOIRyM97J7LhN7KNE8cm9Uo8s6EWSEBGaMgXXx3PxiiGtSx"
		const uintIwibpaO = BigInt("227")
		const BACMARSLPTOKENPoolT25pFvY = await BACMARSLPTOKENPool.new(stringliuV00m, stringRMRUK29, uintIwibpaO, {from: accounts[4]});
		await BACMARSLPTOKENPoolT25pFvY.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolT25pFvY.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTOAJHae = "xUMYJc"
		const stringiFiM2Ir = "i7WGctBV4InyffGmi7visVbq5sriRga"
		const uintHfyHTVr = BigInt("6")
		const BACMARSLPTOKENPooltsNOxTK = await BACMARSLPTOKENPool.new(stringTOAJHae, stringiFiM2Ir, uintHfyHTVr, {from: accounts[3]});
		const bytepkFC3Y = "0x120a1f0706141e081e1218201f040517201a1303150a0813120b120612030218"
		const byteouJtbHu = "0x031e131e0810180219160c1f1b14140510040a171c110d1f050912061b12141e"
		const uinttayZXJT = BigInt("109")
		const uintwve4G2t = BigInt("1501")
		const uintfprdRTO = BigInt("662")
		const uintf5wPe2j = BigInt("341")
		const uint256hFGsfbv = await BACMARSLPTOKENPooltsNOxTK.stakeWithPermit.call(uintfprdRTO, uintwve4G2t, uinttayZXJT, byteouJtbHu, bytepkFC3Y, {from: accounts[3]});
		await BACMARSLPTOKENPooltsNOxTK.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPooltsNOxTK.nonReentrant.call({from: accounts[4]});
		const uint256KvZPtU6 = await BACMARSLPTOKENPooltsNOxTK.withdraw.call(uintf5wPe2j, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxS5Rh8d = "c3Iebc8Gp6y7W6rTQqyC6HK34FszWgkELBn"
		const stringUDdr2Rs = "TS9i3mlHAnZhOlbnIQnj4Sbz3XBIwrseglOteMMGuvHzPizIll7jnhaKDc2KKFpAm71YYVnkUsUtoDmJUzzKwe9V"
		const uintFSomnOq = BigInt("178")
		const BACMARSLPTOKENPooltftYApy = await BACMARSLPTOKENPool.new(stringxS5Rh8d, stringUDdr2Rs, uintFSomnOq, {from: accounts[3]});
		const uintfaOVgJD = BigInt("1860")
		const uintcWfWFuf = BigInt("1444")
		const uint256zXYU0yZ = await BACMARSLPTOKENPooltftYApy.withdraw.call(uintfaOVgJD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RRX7HCC = await BACMARSLPTOKENPooltftYApy.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256vfqSDbW = await BACMARSLPTOKENPooltftYApy.notifyRewardAmount.call(uintcWfWFuf, {from: accounts[4]});
		const uint256Wmg4EVo = await BACMARSLPTOKENPooltftYApy.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkoEXuGA = "Eal5"
		const stringZMi9GMB = "DA9DU8PbanyqIQCV4WozYobytFVgveu2sfO6G"
		const uintjPk7tPU = BigInt("96")
		const BACMARSLPTOKENPoolKJrUddI = await BACMARSLPTOKENPool.new(stringkoEXuGA, stringZMi9GMB, uintjPk7tPU, {from: accounts[3]});
		const uintflJDWYn = BigInt("1144")
		const uint2560CXkmT = await BACMARSLPTOKENPoolKJrUddI.stake.call(uintflJDWYn, {from: accounts[3]});
		const uint256nbEVfcQ = await BACMARSLPTOKENPoolKJrUddI.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e7g3gR = await BACMARSLPTOKENPoolKJrUddI.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolKJrUddI.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256aFKacs = await BACMARSLPTOKENPoolKJrUddI.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvsF1FNC = "8APsFvHXLT7o3L2iQnbimUEnQubVvEXw1uewPhj2q0KROy14IKsqMRRaNYrujyJBTEsT"
		const string63udGJ = "SOkoQc89aIJ68tz4k5SL"
		const uinttGaSiQY = BigInt("81")
		const BACMARSLPTOKENPoolQZvAN6y = await BACMARSLPTOKENPool.new(stringvsF1FNC, string63udGJ, uinttGaSiQY, {from: accounts[5]});
		const uintPtSvAJM = BigInt("1358")
		await BACMARSLPTOKENPoolQZvAN6y.exit.call({from: accounts[1]});
		const uint256EGAAoK = await BACMARSLPTOKENPoolQZvAN6y.rewardPerToken.call({from: accounts[2]});
		const uint256CVt2YeZ = await BACMARSLPTOKENPoolQZvAN6y.notifyRewardAmount.call(uintPtSvAJM, {from: accounts[2]});
		const uint8FC1ErxR = await BACMARSLPTOKENPoolQZvAN6y.decimals.call({from: accounts[0]});
		const uint8QEBSQE7 = await BACMARSLPTOKENPoolQZvAN6y.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjwF1jHH = "cvipoLud68yWxdTqyybe87Bp82GddGLduwNK6kc4LzDU3xTQD96KcXSpvW6YUgXjluByflm4ylpH0l"
		const stringzSJNaKA = "nBBhr1eG4YGzq6DKVnrQHWUS7P84GnbcNEIaVmlKOv8Wp8CcdLxpH81WpSG7kGNANwNpYW1kR6c82INL"
		const uintw2IJVmX = BigInt("92")
		const BACMARSLPTOKENPoolQjKDG0q = await BACMARSLPTOKENPool.new(stringjwF1jHH, stringzSJNaKA, uintw2IJVmX, {from: accounts[0]});
		const uintvLGVvT = BigInt("865")
		await BACMARSLPTOKENPoolQjKDG0q.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolQjKDG0q.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8Dafcml4 = await BACMARSLPTOKENPoolQjKDG0q.decimals.call({from: accounts[0]});
		const uint256JfW9t5F = await BACMARSLPTOKENPoolQjKDG0q.rewardPerToken.call({from: accounts[3]});
		const uint256AwQRDUD = await BACMARSLPTOKENPoolQjKDG0q.notifyRewardAmount.call(uintvLGVvT, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM6PUy8c = "pwckKYysRp8ZkL"
		const stringOkswgw = "xaPD3bKGacXN7hv1CdBbtBSd3dzbc8vLBUjwl1MW"
		const uintBR5fEaV = BigInt("233")
		const BACMARSLPTOKENPoolcBPCXI7 = await BACMARSLPTOKENPool.new(stringM6PUy8c, stringOkswgw, uintBR5fEaV, {from: accounts[1]});
		const addresslRO8Sp = accounts[3]
		const uint256eRisA6v = await BACMARSLPTOKENPoolcBPCXI7.totalSupply.call({from: accounts[3]});
		const uint256tdpUTj5 = await BACMARSLPTOKENPoolcBPCXI7.balanceOf.call(addresslRO8Sp, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string4Hpbvl = "sIijUQhylhhaplQODIr92YrHDGahOGJFey"
		const stringzgzYHQ = "TazALyKCWQGablpWWEYAbNcNWqZv9Tp6mnbPEEdvyOZ4QuYQ"
		const uint028uY0 = BigInt("126")
		const BACMARSLPTOKENPoolyWBBfeX = await BACMARSLPTOKENPool.new(string4Hpbvl, stringzgzYHQ, uint028uY0, {from: accounts[4]});
		const uintrH7p47d = BigInt("2033")
		const addressxZZJgkR = accounts[4]
		const uint256skbJVbG = await BACMARSLPTOKENPoolyWBBfeX.stake.call(uintrH7p47d, {from: accounts[1]});
		const uint256UnIXxex = await BACMARSLPTOKENPoolyWBBfeX.balanceOf.call(addressxZZJgkR, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNd2eqQe = "CuP64SniUwTUCMcJT1lEBCWZdh4UuISYmvdtw3ZG2wuNbLJqaE2"
		const stringhEpXP6M = "CgihKyVMU8QgBlICnur0mKl3lQJdGpiamWngtmsDSQPTagDCLM5Ba3kYEMuktVaz"
		const uintDod4Yii = BigInt("140")
		const BACMARSLPTOKENPoolsVmVSLx = await BACMARSLPTOKENPool.new(stringNd2eqQe, stringhEpXP6M, uintDod4Yii, {from: accounts[1]});
		const addressFo5SQWh = accounts[4]
		const uintT163NuH = BigInt("1515")
		await BACMARSLPTOKENPoolsVmVSLx.exit.call({from: accounts[3]});
		const stringuxKLmZg = await BACMARSLPTOKENPoolsVmVSLx.name.call({from: accounts[0]});
		await BACMARSLPTOKENPoolsVmVSLx.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256YKKqUJP = await BACMARSLPTOKENPoolsVmVSLx.balanceOf.call(addressFo5SQWh, {from: accounts[4]});
		const uint256RBno2I = await BACMARSLPTOKENPoolsVmVSLx.stake.call(uintT163NuH, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringenOfCw = "zJu12yKyXcpdz9dKc7t1axiO5uynP3meGSF2ybhUgNnj6d5qrwzL1nHQYAQEc4pzslkYwqvfuOOaqR"
		const stringIsSIke3 = "AhZ1H"
		const uintC81nUF = BigInt("17")
		const BACMARSLPTOKENPoolYRGRNxi = await BACMARSLPTOKENPool.new(stringenOfCw, stringIsSIke3, uintC81nUF, {from: accounts[1]});
		const uintxXM1TMK = BigInt("1379")
		const uint256ZWqIRwd = await BACMARSLPTOKENPoolYRGRNxi.withdraw.call(uintxXM1TMK, {from: accounts[0]});
		await BACMARSLPTOKENPoolYRGRNxi.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolYRGRNxi.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolYRGRNxi.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGOMzMos = "lLhNbSvsH3GKl8UjVyeOkb3JuhivlIK78J1Hvueg"
		const stringMIHVr07 = "V9SjTw8vbwEGbvXlguimiWPi1AHQnpVZsCzhvh"
		const uintrrMjpmL = BigInt("178")
		const BACMARSLPTOKENPoolRcrWnIm = await BACMARSLPTOKENPool.new(stringGOMzMos, stringMIHVr07, uintrrMjpmL, {from: accounts[0]});
		const uint256CxATdH = await BACMARSLPTOKENPoolRcrWnIm.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolRcrWnIm.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolRcrWnIm.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolRcrWnIm.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlQ8zmNq = "lO2Fs6p0UaUbYe"
		const stringlZ0jqGc = "uzvwtH2pOLaIeFCWhZaRuHBn7xBgI0vJCu5eb9OuoUr9X3ao44dc3GHjVKks53amBe49ElYftUzkK2AeD"
		const uintvlwtqIr = BigInt("200")
		const BACMARSLPTOKENPoolkoAydIx = await BACMARSLPTOKENPool.new(stringlQ8zmNq, stringlZ0jqGc, uintvlwtqIr, {from: accounts[1]});
		const byteGyLhfVn = "0x0e0f0301060a181f20110214111618141e1f1b1f1c03041017081f180a1e020e"
		const byteIkgZ9Uc = "0x0119080110060207081c13101d0207090a0d061e170916100f1106011104181c"
		const uintLkUDEq = BigInt("192")
		const uintuVYdb9P = BigInt("1776")
		const uintJjv787D = BigInt("1929")
		const bytetK1c5uH = "0x180402051b120b150415111d141c020e0812040e0409040313171d0c14010b05"
		const byteYvMCHoh = "0x19140520120206091d0714120107150219031c1320181e171515070a0d0d0e1e"
		const uintvNtGr1B = BigInt("161")
		const uinttAhl2Pl = BigInt("586")
		const uintl95PZLG = BigInt("1743")
		const byteSXTpFaa = "0x150506080c1d01080202050b051f100d0f02141302051e1e1e131508161f070a"
		const byteMjdKgmc = "0x1313031518040803190d12140e0f020b2017141d1c061b0b1a140117160e0702"
		const uintG8EXy4x = BigInt("122")
		const uint0JoCE0 = BigInt("1118")
		const uintFDk61H1 = BigInt("2006")
		const uint256h91W4VA = await BACMARSLPTOKENPoolkoAydIx.stakeWithPermit.call(uintJjv787D, uintuVYdb9P, uintLkUDEq, byteIkgZ9Uc, byteGyLhfVn, {from: accounts[1]});
		const uint256eJ6FFYs = await BACMARSLPTOKENPoolkoAydIx.stakeWithPermit.call(uintl95PZLG, uinttAhl2Pl, uintvNtGr1B, byteYvMCHoh, bytetK1c5uH, {from: accounts[2]});
		await BACMARSLPTOKENPoolkoAydIx.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FbxLFms = await BACMARSLPTOKENPoolkoAydIx.stakeWithPermit.call(uintFDk61H1, uint0JoCE0, uintG8EXy4x, byteMjdKgmc, byteSXTpFaa, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkWFv3e7 = "H46U7"
		const stringKpys5f6 = "AjdtHpz5hY6Q6pWkkLCSBMLFtt4NUt7Vjpum1Chsk1CSf49joCeC2UEp"
		const uintoL6C4nm = BigInt("19")
		const BACMARSLPTOKENPoolPz2ktwz = await BACMARSLPTOKENPool.new(stringkWFv3e7, stringKpys5f6, uintoL6C4nm, {from: accounts[4]});
		const addresskwY6ov = accounts[4]
		const uinttT0QRyz = BigInt("719")
		await BACMARSLPTOKENPoolPz2ktwz.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolPz2ktwz.nonReentrant.call({from: accounts[2]});
		const uint256D7iwPG1 = await BACMARSLPTOKENPoolPz2ktwz.rewardPerToken.call({from: accounts[5]});
		const uint256qvUESNb = await BACMARSLPTOKENPoolPz2ktwz.earned.call(addresskwY6ov, {from: accounts[0]});
		const uint256GuwPY1v = await BACMARSLPTOKENPoolPz2ktwz.notifyRewardAmount.call(uinttT0QRyz, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrVVSLqs = "y7NYCpsKfs4wNwq2rCHYCVUhRFBdEtfECix626ZZ1lSLK72iFhrClvMGL"
		const stringD9BFX9i = "M1FkO68JCu9ua6tNViIln6lKRMKI1OJouUyeNEHn3JIAU4ihbiyQy7hlIxDUXr52Nqregtwaz8wUhYBQGOmisoI79Ks4wvFtKPe"
		const uintnmNKfQS = BigInt("53")
		const BACMARSLPTOKENPoolXr39Ji = await BACMARSLPTOKENPool.new(stringrVVSLqs, stringD9BFX9i, uintnmNKfQS, {from: accounts[3]});
		const addressjOawynl = accounts[3]
		const addressCqdLqF = accounts[1]
		await BACMARSLPTOKENPoolXr39Ji.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolXr39Ji.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZi0DByG = await BACMARSLPTOKENPoolXr39Ji.updateReward.call(addressjOawynl, {from: accounts[4]});
		const uint256KsJ75YZ = await BACMARSLPTOKENPoolXr39Ji.balanceOf.call(addressCqdLqF, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkkJbv4d = "NAej3RymhY2uy2okzGd4rmpHl0xT0J3rfuozZ5u7jdDe7i2JBUI"
		const stringgk2mANq = "L6QzsyJ1yNAVd3kGG37TT1tNcwMS7U2mHeuaDX2TtYKwuAl3irWoFPQF2KMuT8Ey7WB4yVJuFbhMACfqmxQLH"
		const uinteH9MAMd = BigInt("102")
		const BACMARSLPTOKENPoolNpnnd2k = await BACMARSLPTOKENPool.new(stringkkJbv4d, stringgk2mANq, uinteH9MAMd, {from: accounts[1]});
		const uintNaPsCo0 = BigInt("1644")
		const uint256fljA9Xn = await BACMARSLPTOKENPoolNpnnd2k.stake.call(uintNaPsCo0, {from: accounts[4]});
		await BACMARSLPTOKENPoolNpnnd2k.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEPFp76S = "qevhClc31jvbhMEtf47eogaouaLkPGgadxexUSvOVmGj7TUpleqQ2TGN"
		const stringoMfLnYJ = "3SexSXo1"
		const uintuk3OEV = BigInt("36")
		const BACMARSLPTOKENPoolTbQ1yk0 = await BACMARSLPTOKENPool.new(stringEPFp76S, stringoMfLnYJ, uintuk3OEV, {from: accounts[2]});
		const addressDUn1L7Z = accounts[1]
		const uint256QY7MhIq = await BACMARSLPTOKENPoolTbQ1yk0.balanceOf.call(addressDUn1L7Z, {from: accounts[4]});
		await BACMARSLPTOKENPoolTbQ1yk0.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuWSsyd1 = "JCECbcvtDC4DPJMVFgIssrvehozJocHbfH2L5VrqiV6rZGQ0TxHGjA6tG8k"
		const stringHDgMfAx = "ow1iEPNG"
		const uintv6dKRf = BigInt("28")
		const BACMARSLPTOKENPoolbukGxP = await BACMARSLPTOKENPool.new(stringuWSsyd1, stringHDgMfAx, uintv6dKRf, {from: "0x0000000000000000000000000000000000000001"});
		const uint2HHKwe = BigInt("1659")
		const byteMrv7WaP = "0x151b181e0f030b081419081d1e1f140a1b161818100919102010180115171a0d"
		const bytea1IpqxD = "0x0f0b031f0f0c0d030b00190b0d0e030a0b17041505131013031d191001180a1b"
		const uintYKGsQeB = BigInt("7")
		const uintjVVSVzu = BigInt("1781")
		const uint6kVgkJ = BigInt("858")
		const uintrYHrEHr = BigInt("422")
		const uint256SfSSCf5 = await BACMARSLPTOKENPoolbukGxP.notifyRewardAmount.call(uint2HHKwe, {from: accounts[2]});
		const uint256j4YxKf0 = await BACMARSLPTOKENPoolbukGxP.stakeWithPermit.call(uint6kVgkJ, uintjVVSVzu, uintYKGsQeB, bytea1IpqxD, byteMrv7WaP, {from: accounts[0]});
		const uint256VK8naxe = await BACMARSLPTOKENPoolbukGxP.notifyRewardAmount.call(uintrYHrEHr, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPXhJ7Cx = "NHaQMJXEiX5rOclRwI7TdWj6fmdUa6akcQx01Otbycf1jkrxPrSDNAaGvzjyHGP5K"
		const stringHWpW0py = "hBxKNsJNUAmghIRm9HylRdN9bZoEidA27TFFes1DJcBfbdLgQDpqXxhsR"
		const uintsJvizUi = BigInt("55")
		const BACMARSLPTOKENPoolyhfTz4N = await BACMARSLPTOKENPool.new(stringPXhJ7Cx, stringHWpW0py, uintsJvizUi, {from: accounts[3]});
		const uintMHahOmZ = BigInt("742")
		const byteSQR7g2I = "0x111516021b14101b040211080b1016020617081809030e191e0d0b0a18131212"
		const bytedqJM6Au = "0x1f0b16130b1a02150b1508101d1d18110004111e110c02190c0d0f160f120009"
		const uintf4PRJYU = BigInt("108")
		const uintCmFDC0Y = BigInt("1300")
		const uintlLp4P4s = BigInt("630")
		const uint256B08lAdN = await BACMARSLPTOKENPoolyhfTz4N.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256RL6C0ED = await BACMARSLPTOKENPoolyhfTz4N.withdraw.call(uintMHahOmZ, {from: accounts[4]});
		const uint256OnxWQb8 = await BACMARSLPTOKENPoolyhfTz4N.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolyhfTz4N.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZfnkW0a = await BACMARSLPTOKENPoolyhfTz4N.totalSupply.call({from: accounts[2]});
		const uint256QmLNZad = await BACMARSLPTOKENPoolyhfTz4N.stakeWithPermit.call(uintlLp4P4s, uintCmFDC0Y, uintf4PRJYU, bytedqJM6Au, byteSQR7g2I, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string0P0BZL = "eNznFuFrMA9mG7yRss7vfiSzgTIzSUXFSJPFC5I4fDMj5r2BkdD"
		const stringGgFA35c = "B1iMNGV6BIzvz56WIc4xmstvNy9s8RyjOX2fp"
		const uintZuCs3Xp = BigInt("186")
		const BACMARSLPTOKENPoolUaZdIQ0 = await BACMARSLPTOKENPool.new(string0P0BZL, stringGgFA35c, uintZuCs3Xp, {from: accounts[0]});
		const bytezhfctLP = "0x0d12041e1218180e0c03130c141b0d0813051501081505020808170109140f03"
		const byteO7VZCkO = "0x0d001f111807021c0c1a1f131d130a070b1c14050718080b0f040a0810140315"
		const uintLMCIVnN = BigInt("160")
		const uintHwpR2vu = BigInt("449")
		const uinttYpEthM = BigInt("749")
		const uintusfY7T = BigInt("553")
		const uintAgMZ2Hk = BigInt("1159")
		const uint256gXghxl7 = await BACMARSLPTOKENPoolUaZdIQ0.stakeWithPermit.call(uinttYpEthM, uintHwpR2vu, uintLMCIVnN, byteO7VZCkO, bytezhfctLP, {from: accounts[0]});
		const uint256FNUPnAP = await BACMARSLPTOKENPoolUaZdIQ0.withdraw.call(uintusfY7T, {from: accounts[0]});
		const uint256eenXDey = await BACMARSLPTOKENPoolUaZdIQ0.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256IYhKc7L = await BACMARSLPTOKENPoolUaZdIQ0.stake.call(uintAgMZ2Hk, {from: accounts[1]});
		const stringeCliySZ = await BACMARSLPTOKENPoolUaZdIQ0.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPPcpMcJ = "7Uy9WwHyEVaYUPxkfodYNRTC4uUbVyaoiiyyEtaRmkjQmavBwiU2siNd8A5Vx6l3vhIsHHvIzQtrHLv8VivmN6E"
		const stringUqxExZb = "Bz7b5U6nQmqomW1LnJokJyWuvV5yd4f9GWNOXzET9R1lYBmHw6b4c5ab4IYHakNRDYP18mXV2srYZdEHLo1aw4bfAc"
		const uintLzi37pt = BigInt("205")
		const BACMARSLPTOKENPoolgoptmwH = await BACMARSLPTOKENPool.new(stringPPcpMcJ, stringUqxExZb, uintLzi37pt, {from: accounts[5]});
		const byteFrAvTqp = "0x1e090a030818041b1206070d02120912151c1b1f1a1e020504071f1a05010b1c"
		const bytej4HSt6A = "0x140f05111d14081d1e1502180f06051b131b0b04000e08062005101b0d0f1b06"
		const uintg8pXe3P = BigInt("131")
		const uintDzVmK33 = BigInt("486")
		const uintmxhwmNf = BigInt("369")
		const uintG7Oj1Wb = BigInt("1246")
		const stringdqHZlk6 = await BACMARSLPTOKENPoolgoptmwH.name.call({from: accounts[2]});
		const uint256lZZNo7p = await BACMARSLPTOKENPoolgoptmwH.stakeWithPermit.call(uintmxhwmNf, uintDzVmK33, uintg8pXe3P, bytej4HSt6A, byteFrAvTqp, {from: accounts[3]});
		const stringuuRisJ = await BACMARSLPTOKENPoolgoptmwH.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JRQT6Xg = await BACMARSLPTOKENPoolgoptmwH.stake.call(uintG7Oj1Wb, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbaDyy3 = "BnhlnTOW5Pjq4h4NQCRhbeEx2hAHjxBlVNfxUKDOqJsXEnVdjH7XPFEhGecDY4m5j5WLF7k"
		const stringgr29Ck8 = "HGqFtZC29"
		const uintdtBJJ5 = BigInt("237")
		const BACMARSLPTOKENPoolAK0eDm7 = await BACMARSLPTOKENPool.new(stringbaDyy3, stringgr29Ck8, uintdtBJJ5, {from: accounts[0]});
		const uintLpr31YW = BigInt("629")
		const uint256Z0rjmR9 = await BACMARSLPTOKENPoolAK0eDm7.withdraw.call(uintLpr31YW, {from: accounts[2]});
		const stringshP2IzO = await BACMARSLPTOKENPoolAK0eDm7.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjLIF4YR = "nFed6rEvOodGo8zi2Hr4K1jiEegYapR1HBSk3eTprE2qrCaJACM8cfvcR9VAmYt84TKseex0dfHncHJIbBK8sBT"
		const stringoOtNl6R = "p"
		const uintWfhpne6 = BigInt("119")
		const BACMARSLPTOKENPoolAsqDxgR = await BACMARSLPTOKENPool.new(stringjLIF4YR, stringoOtNl6R, uintWfhpne6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256J45gN3c = await BACMARSLPTOKENPoolAsqDxgR.rewardPerToken.call({from: accounts[2]});
		const uint256g852Ptm = await BACMARSLPTOKENPoolAsqDxgR.lastTimeRewardApplicable.call({from: accounts[4]});
	});
})
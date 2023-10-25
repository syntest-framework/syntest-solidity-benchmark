const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringniCyqbc = "Vl8EyZqYxeS8"
		const stringqCU4xC9 = "GRqn3JuicgtaFoumjNtNXraawkZQtkdbuJSOGG6kfgpV8"
		const uintS4E18Pu = BigInt("148")
		const BACMARSLPTOKENPoolIMqqUoA = await BACMARSLPTOKENPool.new(stringniCyqbc, stringqCU4xC9, uintS4E18Pu, {from: accounts[4]});
		const uintaOpZfu6 = BigInt("728")
		const uintBbmgelU = BigInt("350")
		const uint256jRmTD77 = await BACMARSLPTOKENPoolIMqqUoA.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolIMqqUoA.getReward.call({from: accounts[1]});
		const uint256JUeTFoV = await BACMARSLPTOKENPoolIMqqUoA.withdraw.call(uintaOpZfu6, {from: accounts[0]});
		const string3qOJYJ = await BACMARSLPTOKENPoolIMqqUoA.symbol.call({from: accounts[1]});
		const uint8okCcG2j = await BACMARSLPTOKENPoolIMqqUoA.decimals.call({from: accounts[3]});
		const uint256eDBYdDQ = await BACMARSLPTOKENPoolIMqqUoA.stake.call(uintBbmgelU, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoU7bk8C = "LNztlR87j7XQxV244lJ30mH9pSzJoxLZlAwLa3gSBN815lOdKVGqPfrnvg9YzDc6jVyIYqxhbpwp2sC2WEmFElaEgEuxr"
		const stringESGQnvO = "s8vwSTELqI6D4DtjUBJYBj2wOx"
		const uintk7IlArT = BigInt("81")
		const BACMARSLPTOKENPoolpPcZEc = await BACMARSLPTOKENPool.new(stringoU7bk8C, stringESGQnvO, uintk7IlArT, {from: accounts[4]});
		const addressTSFaybu = accounts[5]
		const addressUApihta = accounts[0]
		const addressJXXdhE8 = accounts[3]
		const addressjVlBm83 = await BACMARSLPTOKENPoolpPcZEc.updateReward.call(addressTSFaybu, {from: accounts[3]});
		await BACMARSLPTOKENPoolpPcZEc.nonReentrant.call({from: accounts[4]});
		const addressod8myM5 = await BACMARSLPTOKENPoolpPcZEc.updateReward.call(addressUApihta, {from: accounts[1]});
		const stringb3UPC7k = await BACMARSLPTOKENPoolpPcZEc.symbol.call({from: accounts[4]});
		const uint256KVmTrSm = await BACMARSLPTOKENPoolpPcZEc.earned.call(addressJXXdhE8, {from: accounts[2]});
		await BACMARSLPTOKENPoolpPcZEc.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXU5VCc = accounts[1]
		const addressfenfbrZ = accounts[0]
		const addressFbBOahr = accounts[4]
		const BACMARSLPTOKENPoolZVyM1w = await BACMARSLPTOKENPool.new(addressXU5VCc, addressfenfbrZ, addressFbBOahr, {from: accounts[5]});
		const uintOlkz4Vg = BigInt("1475")
		const addressMUh8Doo = accounts[1]
		const uint256q9lVm7n = await BACMARSLPTOKENPoolZVyM1w.notifyRewardAmount.call(uintOlkz4Vg, {from: accounts[3]});
		await BACMARSLPTOKENPoolZVyM1w.getReward.call({from: accounts[1]});
		const uint256TQ7eHYl = await BACMARSLPTOKENPoolZVyM1w.earned.call(addressMUh8Doo, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolZVyM1w.notifyRewardAmount.call(uintOlkz4Vg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtPgTKBy = "muTNMkie6lOyrCRGDsnBPFqdtfV7XbPBKcYPBcvbSlQ7OXKiwkZDQiTHQOCQubdviB7nOyKcl"
		const stringI8q06cQ = "9WKYKklS1VYgrVtm0v"
		const uintSE6LVO4 = BigInt("103")
		const BACMARSLPTOKENPooly9l5NT = await BACMARSLPTOKENPool.new(stringtPgTKBy, stringI8q06cQ, uintSE6LVO4, {from: accounts[0]});
		const uintLGrR69H = BigInt("269")
		const uint256uOLKAVD = await BACMARSLPTOKENPooly9l5NT.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPooly9l5NT.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPooly9l5NT.getReward.call({from: accounts[1]});
		const uint256zEmyExz = await BACMARSLPTOKENPooly9l5NT.notifyRewardAmount.call(uintLGrR69H, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooly9l5NT.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressif3qHPA = accounts[4]
		const addressPFX7zAc = accounts[0]
		const addressxuhWRlU = accounts[4]
		const BACMARSLPTOKENPoolxIJmT1f = await BACMARSLPTOKENPool.new(addressif3qHPA, addressPFX7zAc, addressxuhWRlU, {from: accounts[0]});
		const uintIX9DqcL = BigInt("1160")
		const uint256jo3pIOt = await BACMARSLPTOKENPoolxIJmT1f.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QnshcbB = await BACMARSLPTOKENPoolxIJmT1f.stake.call(uintIX9DqcL, {from: accounts[0]});

		assert.equal(uint256jo3pIOt, BigInt("0"))
		await expect(BACMARSLPTOKENPoolxIJmT1f.stake.call(uintIX9DqcL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQXEqfFX = accounts[2]
		const addressmR6efwQ = accounts[2]
		const addressgWDmL1g = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolhzuCbvP = await BACMARSLPTOKENPool.new(addressQXEqfFX, addressmR6efwQ, addressgWDmL1g, {from: accounts[3]});
		const addressHN8bk7 = accounts[1]
		const stringaUHrxIV = await BACMARSLPTOKENPoolhzuCbvP.symbol.call({from: accounts[5]});
		const stringmntGtlP = await BACMARSLPTOKENPoolhzuCbvP.name.call({from: accounts[2]});
		const stringjdBIOqW = await BACMARSLPTOKENPoolhzuCbvP.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolhzuCbvP.nonReentrant.call({from: accounts[4]});
		const uint256iHbtm63 = await BACMARSLPTOKENPoolhzuCbvP.balanceOf.call(addressHN8bk7, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolhzuCbvP.symbol.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmnHEsM = "0x0000000000000000000000000000000000000001"
		const addressEIXKLf = accounts[2]
		const addressquTp2IS = accounts[2]
		const BACMARSLPTOKENPoolsqTqjna = await BACMARSLPTOKENPool.new(addressmnHEsM, addressEIXKLf, addressquTp2IS, {from: accounts[1]});
		const uintkgcZoFp = BigInt("679")
		const uintsNy0CTj = BigInt("47")
		await BACMARSLPTOKENPoolsqTqjna.exit.call({from: accounts[2]});
		const uint256b7jTAhh = await BACMARSLPTOKENPoolsqTqjna.getRewardForDuration.call({from: accounts[1]});
		const uint256CcpDG3 = await BACMARSLPTOKENPoolsqTqjna.withdraw.call(uintkgcZoFp, {from: "0x0000000000000000000000000000000000000001"});
		const stringC5TYC3b = await BACMARSLPTOKENPoolsqTqjna.symbol.call({from: accounts[2]});
		const stringH80SFqx = await BACMARSLPTOKENPoolsqTqjna.name.call({from: accounts[2]});
		const uint256JxSpli = await BACMARSLPTOKENPoolsqTqjna.stake.call(uintsNy0CTj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolsqTqjna.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAEty8j = accounts[4]
		const addressTD2BgOA = accounts[0]
		const addressL33fJfP = accounts[1]
		const BACMARSLPTOKENPoolrl0D2Ut = await BACMARSLPTOKENPool.new(addressAEty8j, addressTD2BgOA, addressL33fJfP, {from: accounts[2]});
		const uintYa9IfHm = BigInt("579")
		const byteMAA3w0U = "0x0c040b0107030c1219050f0c171b140b17131d041e0d1a02181801050e0b1a16"
		const bytekZNK7J = "0x1c0b1603150b0b031d19100a1e1b1b150817041a05160d0b171a181606011204"
		const uint40D8Py = BigInt("93")
		const uintsVPyl4 = BigInt("1203")
		const uintALAmvqx = BigInt("630")
		const uint256X2hDbO4 = await BACMARSLPTOKENPoolrl0D2Ut.totalSupply.call({from: accounts[1]});
		const uint8KFCBRcJ = await BACMARSLPTOKENPoolrl0D2Ut.decimals.call({from: accounts[2]});
		const stringW2ypBiK = await BACMARSLPTOKENPoolrl0D2Ut.symbol.call({from: accounts[0]});
		const uint256jjI7Zoj = await BACMARSLPTOKENPoolrl0D2Ut.stake.call(uintYa9IfHm, {from: accounts[1]});
		const uint256MwY91Fg = await BACMARSLPTOKENPoolrl0D2Ut.stakeWithPermit.call(uintALAmvqx, uintsVPyl4, uint40D8Py, bytekZNK7J, byteMAA3w0U, {from: accounts[0]});

		assert.equal(uint256X2hDbO4, BigInt("0"))
		await expect(BACMARSLPTOKENPoolrl0D2Ut.decimals.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWJ9uqP7 = "u4OJR1jkSQeUgw2jwPib2DBXUgYmdFbkgZpGlH2GQpkNJATiB6gmTJNI0XWFlU44rr6gAoJaivLctHT7elA"
		const stringnCIx8eg = "lSSbG9UaqbTDc8qLgnz02Ka6tboG2EqIa7yDMU9GxFllRmJzM2qVZo5I2XjWK5XV8QzltU6cyDU09YumsEXvM2KHj0XBch4je4"
		const uintneVeqcQ = BigInt("143")
		const BACMARSLPTOKENPoolo5S6BwV = await BACMARSLPTOKENPool.new(stringWJ9uqP7, stringnCIx8eg, uintneVeqcQ, {from: accounts[1]});
		const byted4JbSe5 = "0x100d1d0519041d0b05150c1c1d07101620081a0119011d090c0a081f1a101c07"
		const byteFiSbWDK = "0x0b070206070302110c101a121b06030b0612111a11101f0a170f15140c100408"
		const uinttGfRmBI = BigInt("54")
		const uintGn6bpt = BigInt("397")
		const uintJVWUr2 = BigInt("654")
		const uintUXdRWpk = BigInt("535")
		const uintTn350Le = BigInt("487")
		const uint256TjeUex = await BACMARSLPTOKENPoolo5S6BwV.stakeWithPermit.call(uintJVWUr2, uintGn6bpt, uinttGfRmBI, byteFiSbWDK, byted4JbSe5, {from: accounts[0]});
		const uint256OvOrpRB = await BACMARSLPTOKENPoolo5S6BwV.stake.call(uintUXdRWpk, {from: accounts[1]});
		const uint256LYleTob = await BACMARSLPTOKENPoolo5S6BwV.notifyRewardAmount.call(uintTn350Le, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnSyEnl4 = "CPGQkYO1Ae7oW2ZqhRfgR0Ye43cnJSfYVO6taY6giuFpjMU5jRgBWyzEFzmehwMTlu71VeXTW8xgXb5"
		const stringoQkC2rg = "NSFCyG"
		const uintDtG8GxX = BigInt("123")
		const BACMARSLPTOKENPoolaXQDSxk = await BACMARSLPTOKENPool.new(stringnSyEnl4, stringoQkC2rg, uintDtG8GxX, {from: accounts[3]});
		const uintvSISja6 = BigInt("1170")
		const uint256QqlrFm8 = await BACMARSLPTOKENPoolaXQDSxk.notifyRewardAmount.call(uintvSISja6, {from: accounts[0]});
		await BACMARSLPTOKENPoolaXQDSxk.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256ejTVpi = await BACMARSLPTOKENPoolaXQDSxk.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHq32GA2 = accounts[1]
		const addressEf6JqUt = accounts[0]
		const addressA1Xx5TS = accounts[4]
		const BACMARSLPTOKENPoolZVyM1w = await BACMARSLPTOKENPool.new(addressHq32GA2, addressEf6JqUt, addressA1Xx5TS, {from: accounts[5]});
		const addressnP82Y3U = accounts[0]
		await BACMARSLPTOKENPoolZVyM1w.getReward.call({from: accounts[1]});
		const uint256TQ7eHYl = await BACMARSLPTOKENPoolZVyM1w.earned.call(addressnP82Y3U, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolZVyM1w.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqrPrEge = "n"
		const stringOGsamr = "fY1CPuaboLPoFqEacP4yGfJSailNb3LtCChtnrlfHqlJ2lSi2OHO2EKqKHS"
		const uintjPFLMj5 = BigInt("124")
		const BACMARSLPTOKENPoolhIXgLlN = await BACMARSLPTOKENPool.new(stringqrPrEge, stringOGsamr, uintjPFLMj5, {from: accounts[3]});
		const uintJwnHIwR = BigInt("1260")
		const uintQD9ZLWB = BigInt("1375")
		const addressIfkJPSc = accounts[0]
		const uintSScr3VA = BigInt("1589")
		const uint256yDZuXmj = await BACMARSLPTOKENPoolhIXgLlN.stake.call(uintJwnHIwR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ERBg2Fc = await BACMARSLPTOKENPoolhIXgLlN.rewardPerToken.call({from: accounts[2]});
		const uint256xScDgIp = await BACMARSLPTOKENPoolhIXgLlN.withdraw.call(uintQD9ZLWB, {from: accounts[5]});
		const uint256t0Wrxfn = await BACMARSLPTOKENPoolhIXgLlN.earned.call(addressIfkJPSc, {from: accounts[0]});
		const uint256J9c9zTK = await BACMARSLPTOKENPoolhIXgLlN.withdraw.call(uintSScr3VA, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMSBl4Mp = "0x0000000000000000000000000000000000000001"
		const addressrRIYVgm = accounts[2]
		const addressz1GKJAV = accounts[2]
		const BACMARSLPTOKENPoolsqTqjna = await BACMARSLPTOKENPool.new(addressMSBl4Mp, addressrRIYVgm, addressz1GKJAV, {from: accounts[1]});
		const uintnlE7dyN = BigInt("647")
		const byteT8taTB = "0x030e1204070104020f1810120b200e10021e091a1f13071e030609060f1e1601"
		const byteJTqe7AB = "0x180a1c011219150a0112121d1a191303171c040e061111140e131e1e0002160c"
		const uintQrMQSFE = BigInt("36")
		const uintadAcTHs = BigInt("1351")
		const uintQgQXs2K = BigInt("1934")
		const uintU5PxKPc = BigInt("680")
		const uintN8KAcrs = BigInt("47")
		const uint256bFP3fcI = await BACMARSLPTOKENPoolsqTqjna.withdraw.call(uintnlE7dyN, {from: accounts[1]});
		await BACMARSLPTOKENPoolsqTqjna.exit.call({from: accounts[2]});
		const stringZzOw1em = await BACMARSLPTOKENPoolsqTqjna.symbol.call({from: accounts[4]});
		const uint256b7jTAhh = await BACMARSLPTOKENPoolsqTqjna.getRewardForDuration.call({from: accounts[1]});
		const uint2562htxE2 = await BACMARSLPTOKENPoolsqTqjna.stakeWithPermit.call(uintQgQXs2K, uintadAcTHs, uintQrMQSFE, byteJTqe7AB, byteT8taTB, {from: accounts[1]});
		const uint256CcpDG3 = await BACMARSLPTOKENPoolsqTqjna.withdraw.call(uintU5PxKPc, {from: "0x0000000000000000000000000000000000000001"});
		const stringC5TYC3b = await BACMARSLPTOKENPoolsqTqjna.symbol.call({from: accounts[2]});
		const stringH80SFqx = await BACMARSLPTOKENPoolsqTqjna.name.call({from: accounts[2]});
		const uint256JxSpli = await BACMARSLPTOKENPoolsqTqjna.stake.call(uintN8KAcrs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolsqTqjna.withdraw.call(uintnlE7dyN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdQVrBe9 = accounts[2]
		const addressbs9yzOX = accounts[3]
		const addressQtdinxS = accounts[4]
		const BACMARSLPTOKENPoolcCXavk = await BACMARSLPTOKENPool.new(addressdQVrBe9, addressbs9yzOX, addressQtdinxS, {from: accounts[1]});
		const bytesK5hpPX = "0x001916010118111c0f191b07141a01140f15170f170e1a170e1b090209160911"
		const byteiwS2UXp = "0x07030c151710161501050119190813170b1913140602161909061a020b111e07"
		const uintco8OwK = BigInt("95")
		const uintFDoY60 = BigInt("1607")
		const uintIJaM9Or = BigInt("1197")
		const uintBmTdgDV = BigInt("1391")
		const uinte2HoWau = BigInt("775")
		const uint256A6CAZpT = await BACMARSLPTOKENPoolcCXavk.stakeWithPermit.call(uintIJaM9Or, uintFDoY60, uintco8OwK, byteiwS2UXp, bytesK5hpPX, {from: accounts[4]});
		const uint256fl5R1G = await BACMARSLPTOKENPoolcCXavk.stake.call(uintBmTdgDV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256F1JMt8a = await BACMARSLPTOKENPoolcCXavk.totalSupply.call({from: accounts[3]});
		const uint256HD5qKbf = await BACMARSLPTOKENPoolcCXavk.notifyRewardAmount.call(uinte2HoWau, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolcCXavk.stakeWithPermit.call(uintIJaM9Or, uintFDoY60, uintco8OwK, byteiwS2UXp, bytesK5hpPX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKmehcJT = accounts[4]
		const addresskZEtHMH = accounts[0]
		const addressn8fUczO = accounts[4]
		const BACMARSLPTOKENPoolxIJmT1f = await BACMARSLPTOKENPool.new(addressKmehcJT, addresskZEtHMH, addressn8fUczO, {from: accounts[0]});
		const uintIKcbXiX = BigInt("828")
		const uintlQm1Q8Q = BigInt("1142")
		const uint256jvKK2xY = await BACMARSLPTOKENPoolxIJmT1f.notifyRewardAmount.call(uintIKcbXiX, {from: accounts[4]});
		const uint256QnshcbB = await BACMARSLPTOKENPoolxIJmT1f.stake.call(uintlQm1Q8Q, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolxIJmT1f.notifyRewardAmount.call(uintIKcbXiX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmuc54r3 = "Em3Vt3i4kFEsn8IXjLd11gnYV2DuUXgvae4lMzVGFfE1LSLf7WDlV4DTWkYvHVkSjVK5zMrs2rViN7cUXm6Z2bdci"
		const stringFZDNWeB = "FGy75rBusmLE4cD933PMjtdnWoWQAE5VBxkejXgdqAjS5lz"
		const uintYmQ1VBe = BigInt("103")
		const BACMARSLPTOKENPoolNLIWCZ = await BACMARSLPTOKENPool.new(stringmuc54r3, stringFZDNWeB, uintYmQ1VBe, {from: accounts[0]});
		const byteMhorRw = "0x1c090c021e0c021e1f01070008011f13050207091e060c1e1e131406150c0611"
		const bytecnFqfHp = "0x1b1b1c0c1b0b17110e0706141b050416151e0f0c0b020707200e0c0b1a1b1a05"
		const uintlDDfZk7 = BigInt("18")
		const uintoodWGWX = BigInt("610")
		const uintJshHjVf = BigInt("1314")
		const stringrr9NMTP = await BACMARSLPTOKENPoolNLIWCZ.name.call({from: accounts[5]});
		const uint256nqXpjT2 = await BACMARSLPTOKENPoolNLIWCZ.stakeWithPermit.call(uintJshHjVf, uintoodWGWX, uintlDDfZk7, bytecnFqfHp, byteMhorRw, {from: accounts[1]});
		const uint256QtO0jWC = await BACMARSLPTOKENPoolNLIWCZ.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdlJwIkM = accounts[1]
		const addressqviIOvg = accounts[0]
		const addressdVKalq3 = accounts[4]
		const BACMARSLPTOKENPoolZVyM1w = await BACMARSLPTOKENPool.new(addressdlJwIkM, addressqviIOvg, addressdVKalq3, {from: accounts[5]});
		const addressEJ3xYp3 = accounts[4]
		const uintCR6sYuV = BigInt("1576")
		const uint256mlD9qW = await BACMARSLPTOKENPoolZVyM1w.balanceOf.call(addressEJ3xYp3, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolZVyM1w.getReward.call({from: accounts[1]});
		const uint256DqMYoJe = await BACMARSLPTOKENPoolZVyM1w.notifyRewardAmount.call(uintCR6sYuV, {from: accounts[4]});

		assert.equal(uint256mlD9qW, BigInt("0"))
		await expect(BACMARSLPTOKENPoolZVyM1w.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc0yVQ8x = "iPcgGom6JXKMEVoTTG5f2UVY4KGlwvEYrlKGW8Ep"
		const stringwu8kchf = "52nbv1tk8CEMp0wEWW4tXxHjQcIapcQTTI35mdyj2xd1SqyozOtNnAVbT4iPkxphtBiSwl7VmCRO7XtFwKPmZ3"
		const uintfDbOtIe = BigInt("114")
		const BACMARSLPTOKENPoolbnf4MIa = await BACMARSLPTOKENPool.new(stringc0yVQ8x, stringwu8kchf, uintfDbOtIe, {from: accounts[1]});
		const addresslhaPSwt = accounts[2]
		const uint256x4TduOl = await BACMARSLPTOKENPoolbnf4MIa.balanceOf.call(addresslhaPSwt, {from: accounts[0]});
		const uint256p5Df9k1 = await BACMARSLPTOKENPoolbnf4MIa.totalSupply.call({from: accounts[1]});
		const stringo9yPuvr = await BACMARSLPTOKENPoolbnf4MIa.name.call({from: accounts[2]});
		const uint8LVOLOAm = await BACMARSLPTOKENPoolbnf4MIa.decimals.call({from: accounts[5]});
		const stringgWgnVmy = await BACMARSLPTOKENPoolbnf4MIa.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3fKYTQ = "i9Mw8YnWulsjIpspYRpmKlAtkahNnITwkbeoqxkVsqohCQMK52oNcVQqCVs5pISe2DrblnkggKKPgPtFlx"
		const stringtaSDryt = "mVwvrBXFQyWVpX9CV4XNDqa92ntrp0sv"
		const uintttdSARH = BigInt("1")
		const BACMARSLPTOKENPoolPRBzJof = await BACMARSLPTOKENPool.new(string3fKYTQ, stringtaSDryt, uintttdSARH, {from: "0x0000000000000000000000000000000000000001"});
		const addressuNsxyu7 = accounts[4]
		const bytetlAHlx = "0x1703160a10101b1c100e06191d001010120f1e1c12140b0b0a11030320021f19"
		const byteTvn7jEb = "0x0c09071308080d1b19101f07170a191c1a070d1e1a090a1e170d0d01021a1e1d"
		const uinthKQN5a7 = BigInt("233")
		const uintJNOLIlc = BigInt("405")
		const uintXGhF3hN = BigInt("1396")
		const byteOrOyOWg = "0x031517071b20090b0f121c1f1e050b0c10050b11091101181b191f0916051b10"
		const bytekbRwLks = "0x0b111517060f0008041c1a1207021a0e0c19021f1f1a06070b050d1b1d1d010c"
		const uintUhN0xyF = BigInt("193")
		const uintPVk1PCu = BigInt("1387")
		const uintlCACcyb = BigInt("689")
		const uint256ONPq9As = await BACMARSLPTOKENPoolPRBzJof.balanceOf.call(addressuNsxyu7, {from: accounts[2]});
		const uint256Ou5YzEQ = await BACMARSLPTOKENPoolPRBzJof.stakeWithPermit.call(uintXGhF3hN, uintJNOLIlc, uinthKQN5a7, byteTvn7jEb, bytetlAHlx, {from: accounts[0]});
		const uint256l0sEkw9 = await BACMARSLPTOKENPoolPRBzJof.stakeWithPermit.call(uintlCACcyb, uintPVk1PCu, uintUhN0xyF, bytekbRwLks, byteOrOyOWg, {from: accounts[4]});
		const uint256THErN0 = await BACMARSLPTOKENPoolPRBzJof.rewardPerToken.call({from: accounts[3]});
		const uint256YaW7wYn = await BACMARSLPTOKENPoolPRBzJof.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOd5ou1u = "tjyVfSG"
		const stringtvRAl0P = "ARX709PKy6pCj1nkEZ3uneTITxw5TuNgA4Vi9dVIn8w2Y1pGG3KxAPDax"
		const uintfhJi84d = BigInt("94")
		const BACMARSLPTOKENPoolGk1lr80 = await BACMARSLPTOKENPool.new(stringOd5ou1u, stringtvRAl0P, uintfhJi84d, {from: "0x0000000000000000000000000000000000000001"});
		const uintxJDrAai = BigInt("523")
		const uintGrcRqZz = BigInt("152")
		const uint256NUHnRfH = await BACMARSLPTOKENPoolGk1lr80.notifyRewardAmount.call(uintxJDrAai, {from: accounts[1]});
		const uint256j8MNp0L = await BACMARSLPTOKENPoolGk1lr80.withdraw.call(uintGrcRqZz, {from: accounts[0]});
		await BACMARSLPTOKENPoolGk1lr80.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256gnbxNQk = await BACMARSLPTOKENPoolGk1lr80.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolGk1lr80.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolGk1lr80.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2PkkFz = "zBzEgqwdDY11gSoZ8lpQs29oaucAKWd9tmH1CgtE2UsGGP3VIlBUU"
		const stringboowdnj = "aQF2zFFhHYAbVWkJMYTyT9ru3xjc7y3UCgP9mc4eMwuknwUYyU"
		const uintFETnoyy = BigInt("139")
		const BACMARSLPTOKENPoolftH0MoJ = await BACMARSLPTOKENPool.new(string2PkkFz, stringboowdnj, uintFETnoyy, {from: "0x0000000000000000000000000000000000000001"});
		const addressMCpVeiJ = accounts[4]
		const bytemKyQaOm = "0x16150a19011f1f1a00141e16021e1a1a0a06001b11061a0c0c070213041e141f"
		const byteTQO690N = "0x010e170d070c0f090208050404000c0f0b101c071f0e060e19141c040c0d061f"
		const uintlUWnoKy = BigInt("33")
		const uintHs1bUDJ = BigInt("172")
		const uintsqjyooF = BigInt("2041")
		await BACMARSLPTOKENPoolftH0MoJ.nonReentrant.call({from: accounts[4]});
		const addressAuRSxkP = await BACMARSLPTOKENPoolftH0MoJ.updateReward.call(addressMCpVeiJ, {from: accounts[1]});
		const uint256ehrMkmL = await BACMARSLPTOKENPoolftH0MoJ.stakeWithPermit.call(uintsqjyooF, uintHs1bUDJ, uintlUWnoKy, byteTQO690N, bytemKyQaOm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringl5RlhMT = "ai1H3PYq6N4T6E5Hh4USU2KNyhEmlp3WJ2JLIgNTEoHdPXxgv8qNI1My0rLztzYiXvN1uKS"
		const stringLNSLFXI = "EfIwNk799d4"
		const uintGPAxF2T = BigInt("17")
		const BACMARSLPTOKENPoolFvvDAoa = await BACMARSLPTOKENPool.new(stringl5RlhMT, stringLNSLFXI, uintGPAxF2T, {from: accounts[0]});
		const addressCHRCdl1 = accounts[2]
		await BACMARSLPTOKENPoolFvvDAoa.exit.call({from: accounts[0]});
		const uint256E4vDT9t = await BACMARSLPTOKENPoolFvvDAoa.earned.call(addressCHRCdl1, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnQhxWU8 = "Smuzb92VcQ2mcRxTaGn1WVORXRiCtPh8iKDySrgheeRSrxA0AljGdx1hKGqvJIfuyloLLk8QCp19yPq8uO34z"
		const stringY4CDlx0 = "C4z6HJZM0Zd6CgaybDaJaHCrz9B1QTXmg8Cv3E1sMmNfaRajfpSqkxSV5xJ"
		const uintrHv2HoL = BigInt("103")
		const BACMARSLPTOKENPoolzsixpKq = await BACMARSLPTOKENPool.new(stringnQhxWU8, stringY4CDlx0, uintrHv2HoL, {from: accounts[1]});
		const addressY5mkHD = accounts[2]
		const uint256UvVySjB = await BACMARSLPTOKENPoolzsixpKq.balanceOf.call(addressY5mkHD, {from: accounts[1]});
		await BACMARSLPTOKENPoolzsixpKq.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhUzZQtN = "bMTjpYfPacu3"
		const stringsiI8Cv = "pfrtcINGnrZluk1DybwCWSrV0eGfwhJqAs1mZxnCU6v4AOuz9xMTgnZuMIE3JbrO9EMhMb8uYFAABIrl5z3Fr97"
		const uinthHEnlej = BigInt("87")
		const BACMARSLPTOKENPoolOQuI435 = await BACMARSLPTOKENPool.new(stringhUzZQtN, stringsiI8Cv, uinthHEnlej, {from: accounts[1]});
		const address0Selbm = "0x0000000000000000000000000000000000000001"
		const uintHaZ3Xy = BigInt("377")
		const uint256TXGoM4H = await BACMARSLPTOKENPoolOQuI435.balanceOf.call(address0Selbm, {from: accounts[0]});
		await BACMARSLPTOKENPoolOQuI435.exit.call({from: accounts[5]});
		const uint256O7sc2MT = await BACMARSLPTOKENPoolOQuI435.withdraw.call(uintHaZ3Xy, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQWyP4lR = accounts[1]
		const addressWa1O8mP = accounts[2]
		const addressw5PKzQ = accounts[3]
		const BACMARSLPTOKENPooldSrpy7K = await BACMARSLPTOKENPool.new(addressQWyP4lR, addressWa1O8mP, addressw5PKzQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintl2Leq22 = BigInt("712")
		const uintVvTRBNq = BigInt("2023")
		const bytepO5VMUe = "0x201b0b100f1109060212141912160b18031c171f160f0708010d1a150208021c"
		const byteGUkTzpC = "0x010c141a020b0e10010802050c1c0e06140f0b1c120e1f171a07180319100404"
		const uintwW0iozw = BigInt("127")
		const uintejkk58E = BigInt("468")
		const uint28SLag = BigInt("1466")
		const uint256MPrdWNg = await BACMARSLPTOKENPooldSrpy7K.notifyRewardAmount.call(uintl2Leq22, {from: accounts[0]});
		const uint256BoKGFgf = await BACMARSLPTOKENPooldSrpy7K.stake.call(uintVvTRBNq, {from: accounts[3]});
		await BACMARSLPTOKENPooldSrpy7K.getReward.call({from: accounts[3]});
		const uint256IKbKBdO = await BACMARSLPTOKENPooldSrpy7K.getRewardForDuration.call({from: accounts[2]});
		const uint256JiqKitG = await BACMARSLPTOKENPooldSrpy7K.stakeWithPermit.call(uint28SLag, uintejkk58E, uintwW0iozw, byteGUkTzpC, bytepO5VMUe, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrukjFNe = "aJtQ7KMeo4UHQxQax9K0WcNr"
		const stringkBZaOgv = "oGjKzbCNuvTLvJAv8sXaouiAf7BeSINAOHnnteEDX85TscL2IpvKpLR5SNSpGOaCo1kATCEKPhUp2mij5FCknHyGREI"
		const uintSHq1k0M = BigInt("103")
		const BACMARSLPTOKENPoolDV7cvVR = await BACMARSLPTOKENPool.new(stringrukjFNe, stringkBZaOgv, uintSHq1k0M, {from: accounts[1]});
		const uintqNpWWma = BigInt("1410")
		const addressXt2Zgcp = accounts[1]
		const addresstq9xFf9 = accounts[5]
		const uint256fI5Gkf4 = await BACMARSLPTOKENPoolDV7cvVR.stake.call(uintqNpWWma, {from: accounts[0]});
		const uint256IwsAcAL = await BACMARSLPTOKENPoolDV7cvVR.totalSupply.call({from: accounts[4]});
		const uint256r3L6IpX = await BACMARSLPTOKENPoolDV7cvVR.balanceOf.call(addressXt2Zgcp, {from: accounts[3]});
		await BACMARSLPTOKENPoolDV7cvVR.getReward.call({from: accounts[1]});
		const uint256Q5Nbavj = await BACMARSLPTOKENPoolDV7cvVR.earned.call(addresstq9xFf9, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYi5JO1 = "SNZf3leCOikj6cg6LYu5fAgqPWKB5MC"
		const stringIjhlJYo = "e7QMr4fsx"
		const uintU6vsWK0 = BigInt("229")
		const BACMARSLPTOKENPooliItbkUf = await BACMARSLPTOKENPool.new(stringYi5JO1, stringIjhlJYo, uintU6vsWK0, {from: accounts[2]});
		const bytee3VoBKt = "0x10040c1c0513031b0d10011a1d0509190a1517181c13181719011f1b18161d1f"
		const byteLKw0H7S = "0x0d20130109121b0703021413080c070d1818121210070f1002101a1403120915"
		const uintATuIGf = BigInt("148")
		const uintmZEGonf = BigInt("1750")
		const uintWQNLF6L = BigInt("1051")
		const addressbQGmUMg = accounts[3]
		const uint256RNbjTzG = await BACMARSLPTOKENPooliItbkUf.stakeWithPermit.call(uintWQNLF6L, uintmZEGonf, uintATuIGf, byteLKw0H7S, bytee3VoBKt, {from: accounts[0]});
		const uint256szMSC3 = await BACMARSLPTOKENPooliItbkUf.totalSupply.call({from: accounts[1]});
		const stringTZqFjI4 = await BACMARSLPTOKENPooliItbkUf.symbol.call({from: accounts[2]});
		const uint256fPQDz3 = await BACMARSLPTOKENPooliItbkUf.balanceOf.call(addressbQGmUMg, {from: accounts[1]});
		const uint256v1As4y0 = await BACMARSLPTOKENPooliItbkUf.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPooliItbkUf.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUcKDLpu = "VptINAcLSf92J9UaDQOUalXg5Vqo76rNeAmP8epWsTo9wogdIuEn5FTFZWFbK73"
		const stringkU3Fmr0 = "F1utP5Wi2NetIRNkz4e2R1"
		const uinteWA3mm = BigInt("141")
		const BACMARSLPTOKENPoolGPr4iDY = await BACMARSLPTOKENPool.new(stringUcKDLpu, stringkU3Fmr0, uinteWA3mm, {from: accounts[3]});
		const uint256L9cJiO = await BACMARSLPTOKENPoolGPr4iDY.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolGPr4iDY.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYfnkwz = "LG"
		const stringjOQ1kY = "A9LyKcnpAAaC8eKIZLMi6CA"
		const uintRPu0m9n = BigInt("122")
		const BACMARSLPTOKENPoolyitXoMb = await BACMARSLPTOKENPool.new(stringYfnkwz, stringjOQ1kY, uintRPu0m9n, {from: accounts[2]});
		const uint8kgt84Py = await BACMARSLPTOKENPoolyitXoMb.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolyitXoMb.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPoolyitXoMb.getReward.call({from: accounts[4]});
		const uint256zj4qT4S = await BACMARSLPTOKENPoolyitXoMb.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolyitXoMb.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKxiEFYn = "NvzkWof6fup8ryRAs0x42VULCBVVmVJYCjLLCPT5PasHNKqGhlwt"
		const stringykxut3a = "PoASBSJXylBTXcSiGN1nf3IooGbbmnLrif5FFHKKZr18nu5iFOBkP3kZ9W1Au48NVs"
		const uintXuoumSB = BigInt("77")
		const BACMARSLPTOKENPool3BixbP = await BACMARSLPTOKENPool.new(stringKxiEFYn, stringykxut3a, uintXuoumSB, {from: accounts[1]});
		const uint8qBmgknf = await BACMARSLPTOKENPool3BixbP.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPool3BixbP.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkFy6hFg = "KcVLXDGSvsUhoge1E7xYy"
		const stringkD6Up4G = "WSofwXKxJ5PrgIXm"
		const uintYGVH4zj = BigInt("105")
		const BACMARSLPTOKENPoolI818Nwb = await BACMARSLPTOKENPool.new(stringkFy6hFg, stringkD6Up4G, uintYGVH4zj, {from: accounts[5]});
		const uintojeSkUv = BigInt("1525")
		const uintpjBIVrs = BigInt("1309")
		const uint256w8ptuql = await BACMARSLPTOKENPoolI818Nwb.notifyRewardAmount.call(uintojeSkUv, {from: accounts[1]});
		const uint256CCmqTVo = await BACMARSLPTOKENPoolI818Nwb.stake.call(uintpjBIVrs, {from: accounts[0]});
		await BACMARSLPTOKENPoolI818Nwb.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJ5kA3iN = "HpKS6onncIHT3D4cWvBN2Q2NUgFhs6qYg410ugKDdKsVS9klkuocTmwpqoXooU8SamHhpa8N6c7ugkr2hpNj18URQvvT4"
		const stringGTSbfDD = "kwAjf4t2YpNSnyebJL4nIy7RwAn9fHYY946953n2Mp9kFy78MOSBgzJmxW2hcneDF6Y7YmIWoCgwRRXscS0RO9I"
		const uintaYHOt3 = BigInt("107")
		const BACMARSLPTOKENPoolfSm9ql9 = await BACMARSLPTOKENPool.new(stringJ5kA3iN, stringGTSbfDD, uintaYHOt3, {from: accounts[0]});
		const uintupuw3d = BigInt("714")
		const uint256wNdIbwL = await BACMARSLPTOKENPoolfSm9ql9.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolfSm9ql9.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256MdoyboU = await BACMARSLPTOKENPoolfSm9ql9.stake.call(uintupuw3d, {from: accounts[1]});
		const uint8TCKCkCj = await BACMARSLPTOKENPoolfSm9ql9.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJfjYqB5 = "R7bxsJxIWfUjA1N5AFcyORxoAj3KYWXG8U2RZ1bnUDsPj95TKLz"
		const stringAyMQJU6 = "apomwW"
		const uintGhsCSR = BigInt("174")
		const BACMARSLPTOKENPoolklAvaT = await BACMARSLPTOKENPool.new(stringJfjYqB5, stringAyMQJU6, uintGhsCSR, {from: accounts[2]});
		const addressxvF7VBp = accounts[0]
		await BACMARSLPTOKENPoolklAvaT.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256s76aUko = await BACMARSLPTOKENPoolklAvaT.balanceOf.call(addressxvF7VBp, {from: accounts[0]});
		const uint256sNpOjUe = await BACMARSLPTOKENPoolklAvaT.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdsRkqkt = "xguYdgejQeObkrJVBMCUSGcwvvTMjvS6iM"
		const stringdJboz0a = "gwr1ynKCgEaH0oqbTuEk7HxzRnDKfcHTURqNWym516fDRLkocHSLiiSxr5PhQhDtmTPczhHTTCnrHNYltTbH8ASUbW"
		const uintIO3Hdzy = BigInt("157")
		const BACMARSLPTOKENPoolpnIrvS9 = await BACMARSLPTOKENPool.new(stringdsRkqkt, stringdJboz0a, uintIO3Hdzy, {from: accounts[3]});
		const addressIvAgKUZ = accounts[0]
		const uintGAdohJo = BigInt("34")
		await BACMARSLPTOKENPoolpnIrvS9.nonReentrant.call({from: accounts[5]});
		const uint84X46gc = await BACMARSLPTOKENPoolpnIrvS9.decimals.call({from: accounts[4]});
		const uint256irjQzAP = await BACMARSLPTOKENPoolpnIrvS9.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressrePlp8 = await BACMARSLPTOKENPoolpnIrvS9.updateReward.call(addressIvAgKUZ, {from: accounts[4]});
		const uint256dtXdtSn = await BACMARSLPTOKENPoolpnIrvS9.withdraw.call(uintGAdohJo, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjscT5A = "Xkr3yCRqVVLIOcg9wMKLyjJbEqamGt"
		const stringTc278Iw = "QX4AxHCYD5YStk4ihzBcqaIXg0AbjLUdIb5OD4XgzXT6fcMSJxsuCyKw2hOT84sX6hSzuRQBvM"
		const uintYGJZjQ6 = BigInt("25")
		const BACMARSLPTOKENPoolnDnbqGs = await BACMARSLPTOKENPool.new(stringjscT5A, stringTc278Iw, uintYGJZjQ6, {from: "0x0000000000000000000000000000000000000001"});
		const uintY03uKVS = BigInt("938")
		const uinttaEsbZx = BigInt("395")
		const uint256erJuXwM = await BACMARSLPTOKENPoolnDnbqGs.stake.call(uintY03uKVS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256G76wayy = await BACMARSLPTOKENPoolnDnbqGs.notifyRewardAmount.call(uinttaEsbZx, {from: accounts[0]});
		await BACMARSLPTOKENPoolnDnbqGs.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringK8n9oXK = "YM17MdZgyU3tvH8Djut0d3jnfC2xrjyqB5Pst"
		const stringlr8YKb6 = "G5duV9JI22biRC1o"
		const uintHrKeg7r = BigInt("47")
		const BACMARSLPTOKENPoolnx8T31 = await BACMARSLPTOKENPool.new(stringK8n9oXK, stringlr8YKb6, uintHrKeg7r, {from: accounts[2]});
		const uint256AtHG9ks = await BACMARSLPTOKENPoolnx8T31.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolnx8T31.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringx6EIbja = "8x9TdAxJhP7LMJtsVJOpdCdEetW7bkIukShxvLpG5diwBuZ4tY2Si8zj9yYlykbID1c1I4CdnR8qFTw5fHVUujU"
		const stringT9KhFDB = "p6lysxRwvLb3CFHR"
		const uinteoxHmSo = BigInt("208")
		const BACMARSLPTOKENPoolWdVwSOZ = await BACMARSLPTOKENPool.new(stringx6EIbja, stringT9KhFDB, uinteoxHmSo, {from: accounts[0]});
		const uintMfVlYcK = BigInt("1372")
		await BACMARSLPTOKENPoolWdVwSOZ.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWdVwSOZ.getReward.call({from: accounts[3]});
		const uint256iuSKcI = await BACMARSLPTOKENPoolWdVwSOZ.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Zk6lO3Z = await BACMARSLPTOKENPoolWdVwSOZ.notifyRewardAmount.call(uintMfVlYcK, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVjXhDGz = "uJHPR8AOXodGioWe5ldruwx5B2GzScWOhIFrXst5Fqo6jY95iKnKGC9iWwToz6ynJ5CLMBeEIWs2iyRazhSu"
		const stringzd5iZhL = "BEzTbWcM3tNZXAyI1PpttPqlQDisSSvGUPRzNnXge8"
		const uintzYqGQFG = BigInt("7")
		const BACMARSLPTOKENPoolzlqoy7Q = await BACMARSLPTOKENPool.new(stringVjXhDGz, stringzd5iZhL, uintzYqGQFG, {from: accounts[3]});
		const addresszz9buHV = accounts[0]
		const uintrymeLgD = BigInt("1842")
		const addressd0YunQE = accounts[5]
		const uint256g4KVXzS = await BACMARSLPTOKENPoolzlqoy7Q.balanceOf.call(addresszz9buHV, {from: accounts[3]});
		const uint256qXPPiIM = await BACMARSLPTOKENPoolzlqoy7Q.withdraw.call(uintrymeLgD, {from: accounts[5]});
		const uint256O7DCjH = await BACMARSLPTOKENPoolzlqoy7Q.balanceOf.call(addressd0YunQE, {from: accounts[0]});
		await BACMARSLPTOKENPoolzlqoy7Q.nonReentrant.call({from: accounts[1]});
		const uint256ZtWyaI2 = await BACMARSLPTOKENPoolzlqoy7Q.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkzUZrsD = "YLC5aAxNJS4CYcCb2yz"
		const stringQh4bR74 = "ONnRvnr2ex52Bk68hf54tM5xET5l4l4SSpCFwgtYxBNgvcJ0xGLGfPQSMlcqaZcad5"
		const uintCAzKDa = BigInt("238")
		const BACMARSLPTOKENPoolJqk9JEk = await BACMARSLPTOKENPool.new(stringkzUZrsD, stringQh4bR74, uintCAzKDa, {from: accounts[4]});
		const uintyz7Qzf = BigInt("360")
		const uintYx2l7Ed = BigInt("411")
		const uint256pSCXZIG = await BACMARSLPTOKENPoolJqk9JEk.rewardPerToken.call({from: accounts[3]});
		const uint256OQwzjdz = await BACMARSLPTOKENPoolJqk9JEk.stake.call(uintyz7Qzf, {from: accounts[0]});
		const uint25651zEMe = await BACMARSLPTOKENPoolJqk9JEk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256S1aOAf7 = await BACMARSLPTOKENPoolJqk9JEk.stake.call(uintYx2l7Ed, {from: accounts[0]});
		const uint84D8yuf = await BACMARSLPTOKENPoolJqk9JEk.decimals.call({from: accounts[3]});
		const uint256dKAhHIy = await BACMARSLPTOKENPoolJqk9JEk.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfP6g591 = "65KAfl1U"
		const stringkXQPEvA = "44665QdCDjaYKeLEJI6cddSzk2dxOtZej3NFOZqRp1T1QARzKOg0xPtVlXStdyEN2N6ThY6B3E7aMrX5k7vbaDdBpkDx6"
		const uintWRVMSb7 = BigInt("241")
		const BACMARSLPTOKENPoolbYnK9W = await BACMARSLPTOKENPool.new(stringfP6g591, stringkXQPEvA, uintWRVMSb7, {from: accounts[4]});
		const uint256KDG1ztz = await BACMARSLPTOKENPoolbYnK9W.rewardPerToken.call({from: accounts[4]});
		const stringXL5xdN7 = await BACMARSLPTOKENPoolbYnK9W.symbol.call({from: accounts[0]});
		const uint8kc8crnd = await BACMARSLPTOKENPoolbYnK9W.decimals.call({from: accounts[2]});
		const uint256uf8oeos = await BACMARSLPTOKENPoolbYnK9W.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbBKAYdD = "X2of885LuC2Lq1JfJl6aAozER8Tly"
		const stringUeIIX8H = "Su77fIzs8SHrpDBcXAcRT5qAbeEz5DqIJkzdxlyhRWtJalVj5"
		const uintH95i7zr = BigInt("135")
		const BACMARSLPTOKENPoolPEWBjBy = await BACMARSLPTOKENPool.new(stringbBKAYdD, stringUeIIX8H, uintH95i7zr, {from: accounts[3]});
		const uint256GBqCezi = await BACMARSLPTOKENPoolPEWBjBy.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolPEWBjBy.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCRbbR3g = "sGNl2nErPaqdRVCjbWyhz3KUvxf0mSGZpQdeu48e8eUYKaauAd89ngNjy24H7afYehZOkpvjuWpBspXf"
		const stringrNRp2j = "S247O9Cf6AK4Bmc2rUvjiKRKyutqhVUtq4Sve6enHJOwhVVwcqjkaxNWo3sz3gUTYDyb5t2mLVc1qAUsWF9ppNW5GHj8ev"
		const uinth27gcqC = BigInt("212")
		const BACMARSLPTOKENPoolnyZKcv3 = await BACMARSLPTOKENPool.new(stringCRbbR3g, stringrNRp2j, uinth27gcqC, {from: accounts[2]});
		const uint256PlRkccQ = await BACMARSLPTOKENPoolnyZKcv3.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256ijyzN7 = await BACMARSLPTOKENPoolnyZKcv3.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolnyZKcv3.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtUSFiie = "rWNOrJFvniTkqZodPdD2lcpbgQvecu7IAJBghxXEI9kqeRRvEFF3q6qhhq1YbmftTIL2elvzf1bpE"
		const stringBegv9yX = "xa91kEeKaCyCRBeJHIIGUczheWpmwAl6e7erU33XvI0LQ0NNf7jejLFNuBNWAALemA3cpiTMqpCkUTqfaCgditQ6D"
		const uintwF4mO4P = BigInt("159")
		const BACMARSLPTOKENPool1vBp1e = await BACMARSLPTOKENPool.new(stringtUSFiie, stringBegv9yX, uintwF4mO4P, {from: accounts[2]});
		const byteWtC4Uy1 = "0x01090217180c060d1c101c12011c09141f111e150c0a180a1a0c070910141403"
		const bytehC6Jdxj = "0x0e1e04100a03041a0c1c120e0914150803030c050e130a0b0d1d0c0006111e07"
		const uintmOD383Y = BigInt("242")
		const uintovQ2eYd = BigInt("1741")
		const uinttlNTKmU = BigInt("1729")
		const uint8Uo2LfWa = await BACMARSLPTOKENPool1vBp1e.decimals.call({from: accounts[2]});
		const uint256PopLFE5 = await BACMARSLPTOKENPool1vBp1e.stakeWithPermit.call(uinttlNTKmU, uintovQ2eYd, uintmOD383Y, bytehC6Jdxj, byteWtC4Uy1, {from: "0x0000000000000000000000000000000000000001"});
		const stringpzx7A8A = await BACMARSLPTOKENPool1vBp1e.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPUdPDV = "CnyFt"
		const stringB1W6yAZ = "dHpsrO8sthRTQtC6VhIOdVxOObzuy3kFOUvIR1uUUee64pS5ZlrmkgM2ru1Dbog8Kv7a4R0w5ZF"
		const uintKOHJK5J = BigInt("78")
		const BACMARSLPTOKENPoolZzUaKpe = await BACMARSLPTOKENPool.new(stringPUdPDV, stringB1W6yAZ, uintKOHJK5J, {from: accounts[0]});
		const addressRzP0oVC = accounts[2]
		const uint256xEPYVL = await BACMARSLPTOKENPoolZzUaKpe.totalSupply.call({from: accounts[1]});
		const uint256rLTYye6 = await BACMARSLPTOKENPoolZzUaKpe.balanceOf.call(addressRzP0oVC, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLLEdMGS = "cgX8hHUktuls9H28yBd6ojm1K"
		const stringw86VoL8 = "nvUMab9YUwRNdJsNT7uFKRMKxLRVSJ3ZU5X975Q7dDSSOeNjniz5l7u9uTmEkwOvwN"
		const uintvlW6OiE = BigInt("198")
		const BACMARSLPTOKENPoolHiDc07T = await BACMARSLPTOKENPool.new(stringLLEdMGS, stringw86VoL8, uintvlW6OiE, {from: accounts[2]});
		const uintkcyNbhB = BigInt("1624")
		const uint256oVtiARN = await BACMARSLPTOKENPoolHiDc07T.totalSupply.call({from: accounts[1]});
		const uint256VgByOyz = await BACMARSLPTOKENPoolHiDc07T.notifyRewardAmount.call(uintkcyNbhB, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolHiDc07T.getReward.call({from: accounts[2]});
		const stringLEzSBfS = await BACMARSLPTOKENPoolHiDc07T.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL7X63eR = "NgeywO7d5W4pfBdf7WPShfB54b9LHWQYjP4wYIKFGjwAKBN81TovwgpI2XXbJC95kiHHMBGf2gpU"
		const stringvJr3PoK = "ec8qU56EfC0YXP1km3dcJEx5pbyO1aO2JdhMdFQxWhE0w8OBkhkQaxTFK8BeoPDBVACLTkuaTEDDRpMCC"
		const uintljOR2D = BigInt("190")
		const BACMARSLPTOKENPoolPJOl2aL = await BACMARSLPTOKENPool.new(stringL7X63eR, stringvJr3PoK, uintljOR2D, {from: accounts[3]});
		const uint256DjeCBir = await BACMARSLPTOKENPoolPJOl2aL.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256wLzWJnS = await BACMARSLPTOKENPoolPJOl2aL.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolPJOl2aL.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtT9mlz = "9D7E3qyj4k9B7"
		const stringyUauqxi = "ShYCuleIl481VC"
		const uintyzDPPLd = BigInt("19")
		const BACMARSLPTOKENPoolbOHkd3 = await BACMARSLPTOKENPool.new(stringtT9mlz, stringyUauqxi, uintyzDPPLd, {from: accounts[3]});
		const addressd4WgNNC = accounts[5]
		const uintVVmEytm = BigInt("1222")
		const uint256vCPZpND = await BACMARSLPTOKENPoolbOHkd3.balanceOf.call(addressd4WgNNC, {from: accounts[3]});
		const uint256KMylcHi = await BACMARSLPTOKENPoolbOHkd3.rewardPerToken.call({from: accounts[3]});
		const uint256JzhVqLA = await BACMARSLPTOKENPoolbOHkd3.stake.call(uintVVmEytm, {from: accounts[5]});
		const uint256ll3B9pf = await BACMARSLPTOKENPoolbOHkd3.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolbOHkd3.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSCDoTMd = "Ti5hR7b8z1qgF6oDeLUt0g68jUt"
		const stringnyQuIaI = "yvHXjRVWtv"
		const uintD8ZIjzx = BigInt("178")
		const BACMARSLPTOKENPoolVqU7txI = await BACMARSLPTOKENPool.new(stringSCDoTMd, stringnyQuIaI, uintD8ZIjzx, {from: accounts[4]});
		const uintttHkoJs = BigInt("1543")
		const byteyAtlzmQ = "0x071d0d19190c011f0c131e1618010f200702170b050c19000e100c021f010f15"
		const bytelv6WQvC = "0x1e0b0b040e0d0a14160818130a0c06110c1c1e030e111d06091b1f1114151205"
		const uintV0YL2AI = BigInt("68")
		const uintyvonVjC = BigInt("698")
		const uinta6jn3q8 = BigInt("36")
		const uint256S0Da514 = await BACMARSLPTOKENPoolVqU7txI.withdraw.call(uintttHkoJs, {from: accounts[1]});
		const uint256QWz5CgO = await BACMARSLPTOKENPoolVqU7txI.stakeWithPermit.call(uinta6jn3q8, uintyvonVjC, uintV0YL2AI, bytelv6WQvC, byteyAtlzmQ, {from: accounts[2]});
		await BACMARSLPTOKENPoolVqU7txI.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmySZEyH = "Yx85tL8XEtjjWws6uJZwHxwMleck47SBzehgjYHVrOjf6R7wstv1WBUybl3v8lb0gjOxzaIkYuC6uLg"
		const stringNlkDGJp = "ucnGuzjF3tD"
		const uintdnvoU71 = BigInt("242")
		const BACMARSLPTOKENPoolNtbxLhE = await BACMARSLPTOKENPool.new(stringmySZEyH, stringNlkDGJp, uintdnvoU71, {from: "0x0000000000000000000000000000000000000001"});
		const uintyx1wSxh = BigInt("1523")
		const addressk1tnXJC = accounts[4]
		const addressdlWIHuG = accounts[0]
		const uint256TNLs5BQ = await BACMARSLPTOKENPoolNtbxLhE.stake.call(uintyx1wSxh, {from: accounts[4]});
		await BACMARSLPTOKENPoolNtbxLhE.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolNtbxLhE.getReward.call({from: accounts[0]});
		const uint256QZYSBuH = await BACMARSLPTOKENPoolNtbxLhE.balanceOf.call(addressk1tnXJC, {from: accounts[5]});
		const uint256dr5gxu = await BACMARSLPTOKENPoolNtbxLhE.balanceOf.call(addressdlWIHuG, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfmoUab = "Xwjh21dBg6V6oIBIxD3nbCP7pUa"
		const stringXrVHiVD = "IKz1wmjDGts4GLQQzoQwpt9smxtHzCULIUoVu"
		const uintmetg8eb = BigInt("160")
		const BACMARSLPTOKENPoolVDKcUnT = await BACMARSLPTOKENPool.new(stringfmoUab, stringXrVHiVD, uintmetg8eb, {from: "0x0000000000000000000000000000000000000001"});
		const uintBOMe28k = BigInt("947")
		const byteeSUcD3g = "0x0514070f0e1113020c1f170114080a08111b1104090a13150d1c1d0c021a1505"
		const byteThFIy2u = "0x1c021b07101d071a1117050f180d020a1e0204200d160b0f081918020d161701"
		const uintvENhzjp = BigInt("199")
		const uintPvvj3d1 = BigInt("1572")
		const uintHxvy6GK = BigInt("993")
		const stringecLB6HG = await BACMARSLPTOKENPoolVDKcUnT.symbol.call({from: accounts[1]});
		const uint256UKitSFS = await BACMARSLPTOKENPoolVDKcUnT.withdraw.call(uintBOMe28k, {from: accounts[1]});
		await BACMARSLPTOKENPoolVDKcUnT.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolVDKcUnT.exit.call({from: accounts[1]});
		const uint256KGM9MBd = await BACMARSLPTOKENPoolVDKcUnT.stakeWithPermit.call(uintHxvy6GK, uintPvvj3d1, uintvENhzjp, byteThFIy2u, byteeSUcD3g, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUm5QpNB = "qMpgSEvBFmK5HgFHG9GLvzXSS1PDeshkbqclWGnAlFXOgRPyDv04t3v7iZsG9QHr3N"
		const stringOfrUwuD = "cIDnty3haw6bRta8DQH2k4BJvCykAO7z6yx3I5CbSmVeP2QsHDTYFUxFvUHMgMSa9pWD"
		const uintKMPMR6 = BigInt("97")
		const BACMARSLPTOKENPoolB4daO1C = await BACMARSLPTOKENPool.new(stringUm5QpNB, stringOfrUwuD, uintKMPMR6, {from: accounts[0]});
		const uintlV7ZwjP = BigInt("751")
		const bytecNm8XZ9 = "0x1208200b080f15110a020f131f1818070b05081f1f0b131304141f07121e0118"
		const byteuwd2Xpt = "0x081e140f1616071f0a1b0d0c090805111f20011d0f140915070e110f1f0a1b0a"
		const uintrG1w6kd = BigInt("235")
		const uintYnc5kr = BigInt("11")
		const uintAVjd1sh = BigInt("145")
		const uint256MFSBOD2 = await BACMARSLPTOKENPoolB4daO1C.stake.call(uintlV7ZwjP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wZlKdgc = await BACMARSLPTOKENPoolB4daO1C.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256A8uaFXH = await BACMARSLPTOKENPoolB4daO1C.stakeWithPermit.call(uintAVjd1sh, uintYnc5kr, uintrG1w6kd, byteuwd2Xpt, bytecNm8XZ9, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string78s1Hu = "SVKkBfR6AcxFkFWTNJKFQzW4mbhTAe2blLQLLdLBTzYWaQnBPzAkjq3aD7OQQERRhqsOcKDQSHJmXCv"
		const stringQ6GpsgD = "l5v8NiJs"
		const uintEQAwdPw = BigInt("188")
		const BACMARSLPTOKENPoolTzfCPuU = await BACMARSLPTOKENPool.new(string78s1Hu, stringQ6GpsgD, uintEQAwdPw, {from: accounts[3]});
		const uinttAh92ra = BigInt("22")
		const addressAWoIbTE = accounts[0]
		const uint256jdZBj73 = await BACMARSLPTOKENPoolTzfCPuU.stake.call(uinttAh92ra, {from: accounts[4]});
		const addressihhPjYO = await BACMARSLPTOKENPoolTzfCPuU.updateReward.call(addressAWoIbTE, {from: accounts[2]});
		await BACMARSLPTOKENPoolTzfCPuU.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolTzfCPuU.nonReentrant.call({from: accounts[5]});
		const uint256eY63atP = await BACMARSLPTOKENPoolTzfCPuU.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCYSfPHh = "MyN4FyiOk157y7SDt5"
		const stringopYdYxc = "pkwT3gn9bCTPasMJWMCrTH5A0IFo3gBJHgutip8NENU1gX5JX4B2GEmRIJKdkoq6VfoUak2iErs9ix"
		const uintcSrdhZI = BigInt("198")
		const BACMARSLPTOKENPoolOC0zg6 = await BACMARSLPTOKENPool.new(stringCYSfPHh, stringopYdYxc, uintcSrdhZI, {from: accounts[0]});
		const uintQFEwR9H = BigInt("1594")
		const uinthYvTUJY = BigInt("803")
		const uintlQmgFl1 = BigInt("1781")
		const uint256Zc7LT9U = await BACMARSLPTOKENPoolOC0zg6.stake.call(uintQFEwR9H, {from: accounts[4]});
		const uint256FnqVXRO = await BACMARSLPTOKENPoolOC0zg6.notifyRewardAmount.call(uinthYvTUJY, {from: "0x0000000000000000000000000000000000000001"});
		const uint8vOSYlA4 = await BACMARSLPTOKENPoolOC0zg6.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolOC0zg6.nonReentrant.call({from: accounts[5]});
		const uint256elpjKHb = await BACMARSLPTOKENPoolOC0zg6.withdraw.call(uintlQmgFl1, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBLeomwu = "wt94tP6d3WAt6g5E1k"
		const stringFJsd9HY = "qsDfOsru"
		const uintoti0EHP = BigInt("154")
		const BACMARSLPTOKENPoolDTUdKel = await BACMARSLPTOKENPool.new(stringBLeomwu, stringFJsd9HY, uintoti0EHP, {from: accounts[1]});
		const bytevIf4bIu = "0x01200c0e131e121f1b07150b040b0504101d1f04071a0e1c0c0f011410120117"
		const byteRR3lHhf = "0x171317091a18020b181819041f0a130c15091c061f110f1c151f021412141a1b"
		const uintPElD4LS = BigInt("203")
		const uintWkTn5XN = BigInt("1457")
		const uinttM54IA = BigInt("2047")
		const uintnbJJzd = BigInt("781")
		const uintb05DfEe = BigInt("686")
		const uint256H9YqOls = await BACMARSLPTOKENPoolDTUdKel.stakeWithPermit.call(uinttM54IA, uintWkTn5XN, uintPElD4LS, byteRR3lHhf, bytevIf4bIu, {from: accounts[3]});
		const uint256EkbEMtV = await BACMARSLPTOKENPoolDTUdKel.notifyRewardAmount.call(uintnbJJzd, {from: accounts[4]});
		const stringgzxxpOY = await BACMARSLPTOKENPoolDTUdKel.symbol.call({from: accounts[1]});
		const uint256hIhTwBF = await BACMARSLPTOKENPoolDTUdKel.stake.call(uintb05DfEe, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2x6eWh = "uwtGwa3xfSCFrWfPCJb4xVVwFdmJYw8qvcJRxAmIJ3UMg6k3geSM6aRYrMpfv4vucwqgmmy8vUds71STqL5RTUL7L6NJD"
		const stringUH8qa38 = "BlLf1ImToBH3tzjbhZN2sn2mF6LC2Br96ggUpQkHT"
		const uintUGLEY8j = BigInt("124")
		const BACMARSLPTOKENPoollXHnHw = await BACMARSLPTOKENPool.new(string2x6eWh, stringUH8qa38, uintUGLEY8j, {from: "0x0000000000000000000000000000000000000001"});
		const addressssQAfWi = accounts[4]
		const byteHaNOI3Y = "0x03140904011304110f0709090c1d0d101205130a0e111e191e16001603080300"
		const bytex53TDC2 = "0x0b12090f001219110a19191c0e02061c1f101f05101d1e1d0e0515151e150e07"
		const uintqNT8OO5 = BigInt("113")
		const uintj9eQhM = BigInt("126")
		const uintVJauwYG = BigInt("1867")
		const uint256Ydm5osa = await BACMARSLPTOKENPoollXHnHw.earned.call(addressssQAfWi, {from: accounts[3]});
		const uint256i3LZSap = await BACMARSLPTOKENPoollXHnHw.rewardPerToken.call({from: accounts[2]});
		const uint256UGqjJbP = await BACMARSLPTOKENPoollXHnHw.stakeWithPermit.call(uintVJauwYG, uintj9eQhM, uintqNT8OO5, bytex53TDC2, byteHaNOI3Y, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmZ3ek7 = "KRlxI8LPQnkP3V7l6cAoBkXMw8cGH6nj84PdMos"
		const stringLSDS9OE = "FgHzBLkVBAn8ezbJ8Q1tTh7jVRRJtsQuS7GmWeEHBbjROg7owzkRwlPotTEsdvTSWr"
		const uintraGeVZU = BigInt("169")
		const BACMARSLPTOKENPoolM7084n = await BACMARSLPTOKENPool.new(stringmZ3ek7, stringLSDS9OE, uintraGeVZU, {from: "0x0000000000000000000000000000000000000001"});
		const uintC0d0lEd = BigInt("1801")
		const uinthoroqDo = BigInt("1216")
		const string2OVcTW = await BACMARSLPTOKENPoolM7084n.name.call({from: accounts[0]});
		const uint256EhYQVD0 = await BACMARSLPTOKENPoolM7084n.rewardPerToken.call({from: accounts[1]});
		const uint256qIWZP7 = await BACMARSLPTOKENPoolM7084n.withdraw.call(uintC0d0lEd, {from: accounts[0]});
		const uint256hundpn4 = await BACMARSLPTOKENPoolM7084n.stake.call(uinthoroqDo, {from: accounts[0]});
	});
})
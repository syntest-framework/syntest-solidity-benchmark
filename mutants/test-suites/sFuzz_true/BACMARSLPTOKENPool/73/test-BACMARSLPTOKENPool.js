const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringYUcjsj = "JBgeSEaKe3IMXF5"
		const stringINEfnq1 = "sjaMNDGV6FMuHSHz9Uv11jDJikeqvgZmuhlxdP5C3DljL5X4Pazgcianu1fH9Fn9YSlmIsZ2Y8rqidhLVXTJ3KE"
		const uintvNZoSNH = BigInt("95")
		const BACMARSLPTOKENPooljo5siF3 = await BACMARSLPTOKENPool.new(stringYUcjsj, stringINEfnq1, uintvNZoSNH, {from: accounts[4]});
		const addressix6JcL3 = accounts[5]
		const addressnxgYpY = accounts[2]
		const uint8YCdfZJE = await BACMARSLPTOKENPooljo5siF3.decimals.call({from: accounts[4]});
		const uint256H6S0Ue1 = await BACMARSLPTOKENPooljo5siF3.earned.call(addressix6JcL3, {from: accounts[4]});
		const uint256m26aviW = await BACMARSLPTOKENPooljo5siF3.earned.call(addressnxgYpY, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyYWVYZR = "0x0000000000000000000000000000000000000001"
		const addressTVbvsWm = accounts[0]
		const addressuo2QuYo = accounts[4]
		const BACMARSLPTOKENPoolrrwD1rx = await BACMARSLPTOKENPool.new(addressyYWVYZR, addressTVbvsWm, addressuo2QuYo, {from: accounts[0]});
		const uintiTNR1K0 = BigInt("1544")
//		await BACMARSLPTOKENPoolrrwD1rx.nonReentrant.call({from: accounts[1]});
//		const uint256c8pcAi4 = await BACMARSLPTOKENPoolrrwD1rx.stake.call(uintiTNR1K0, {from: accounts[1]});
//		const stringF2LdDle = await BACMARSLPTOKENPoolrrwD1rx.name.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolrrwD1rx.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolrrwD1rx.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxpgXk1F = accounts[3]
		const addressP3jene = accounts[2]
		const addressUUUIcgo = accounts[0]
		const BACMARSLPTOKENPoolLZx0nEQ = await BACMARSLPTOKENPool.new(addressxpgXk1F, addressP3jene, addressUUUIcgo, {from: accounts[5]});
		const uint2fOu99 = BigInt("472")
		const uintQz4pVGW = BigInt("496")
		const addressXClxGU = accounts[2]
//		const uint256znnrZnl = await BACMARSLPTOKENPoolLZx0nEQ.withdraw.call(uint2fOu99, {from: accounts[0]});
//		const stringbfuXLw = await BACMARSLPTOKENPoolLZx0nEQ.symbol.call({from: accounts[2]});
//		const uint256v4vUd2q = await BACMARSLPTOKENPoolLZx0nEQ.getRewardForDuration.call({from: accounts[5]});
//		const uint256LK9eHj0 = await BACMARSLPTOKENPoolLZx0nEQ.notifyRewardAmount.call(uintQz4pVGW, {from: accounts[1]});
//		const uint256MIGqFP = await BACMARSLPTOKENPoolLZx0nEQ.balanceOf.call(addressXClxGU, {from: accounts[0]});
//		await BACMARSLPTOKENPoolLZx0nEQ.onlyRewardsDistribution.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolLZx0nEQ.withdraw.call(uint2fOu99, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWAwfuTe = "HTUNNSOqRcWbesRzBEDzHO1eCnCCoJOO26j8OFaRbZMOBmUI79SnRvO9Oo5jpFpezvDmYnEMCYa1Hg4AdmbUN"
		const stringgSQIc3 = "ENbafmSR4JXfeJvHck8xv72O4MRXk3jIpvDfGtYhkX3GQCppJmw8AWyQzIJQ0KLBjoOF6ICzlg2YdUes17272zVPRNsi"
		const uintTK25P43 = BigInt("16")
		const BACMARSLPTOKENPoolB2vCPeA = await BACMARSLPTOKENPool.new(stringWAwfuTe, stringgSQIc3, uintTK25P43, {from: accounts[2]});
		const addressPqvPFVE = accounts[0]
		const uint256mRrlmt = await BACMARSLPTOKENPoolB2vCPeA.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolB2vCPeA.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256YknWwVN = await BACMARSLPTOKENPoolB2vCPeA.balanceOf.call(addressPqvPFVE, {from: accounts[2]});
		const uint8iL78XjP = await BACMARSLPTOKENPoolB2vCPeA.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmGrJXd = "zusfenVKGMVEUKYqNDt8WErmMb4QQYF5OkD2KYRzeA2FCg"
		const stringrcJqtTT = "BBD9RSDW3Nz5joGOLQvlaDoOq1xEr3Hqik9MPaFT4pP22ijrduuTwISAibdn6B3VbCbWqrNOczKFIeAiD"
		const uintz2etcq = BigInt("225")
		const BACMARSLPTOKENPoolAe3GjmO = await BACMARSLPTOKENPool.new(stringmGrJXd, stringrcJqtTT, uintz2etcq, {from: accounts[2]});
		const addresseHn1kSI = "0x0000000000000000000000000000000000000001"
		const uint256YT1L8e = await BACMARSLPTOKENPoolAe3GjmO.earned.call(addresseHn1kSI, {from: accounts[5]});
		await BACMARSLPTOKENPoolAe3GjmO.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolAe3GjmO.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYinjlnY = "68BhJX268Qvph112LyCtoCWwwSa6Uy7IcEE8Vl9UJrsJ09CoITd1iha9dGFGL4O"
		const stringGoMxUR8 = "VN62ZKJFpBgHP7LUaRljB6NJ5Jwl00SCTyFqSGSAO3HJ1SHzfIPxdCqXg9D"
		const uintzxsuBr = BigInt("234")
		const BACMARSLPTOKENPoolupGGXlz = await BACMARSLPTOKENPool.new(stringYinjlnY, stringGoMxUR8, uintzxsuBr, {from: accounts[0]});
		const addressa2MVyAD = accounts[0]
		const addressvVGOiiC = accounts[3]
		const uint256svfMIQB = await BACMARSLPTOKENPoolupGGXlz.earned.call(addressa2MVyAD, {from: accounts[3]});
		const addressx2NRvSj = await BACMARSLPTOKENPoolupGGXlz.updateReward.call(addressvVGOiiC, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHrtTrdq = "iY34lXhEU77VpgXTXpRW"
		const stringbBfvXho = "nm1LWelcatNLpcgduSLEEHdHeQIdGGWCuZJfYge0mc5"
		const uintADZKCvY = BigInt("120")
		const BACMARSLPTOKENPoolHeaj2C5 = await BACMARSLPTOKENPool.new(stringHrtTrdq, stringbBfvXho, uintADZKCvY, {from: accounts[1]});
		const uint256ntKHegI = await BACMARSLPTOKENPoolHeaj2C5.getRewardForDuration.call({from: accounts[2]});
		const uint256tv00BRU = await BACMARSLPTOKENPoolHeaj2C5.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyFcdTl = accounts[0]
		const addresslg7EH8r = accounts[1]
		const addressKom8Fjb = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressyFcdTl, addresslg7EH8r, addressKom8Fjb, {from: accounts[0]});
		const byter84yNh8 = "0x15171f190b071c0119161317200d1c120f030501150d110306091b101e0f0b0c"
		const bytej5UEKu = "0x1415181f1b0709080b0a0a0813011b1112031d0115060a0e0e1908171108061d"
		const uintRXhC5FO = BigInt("98")
		const uintYVVh8ML = BigInt("655")
		const uintckKnSCk = BigInt("364")
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const stringqzf9nYp = await BACMARSLPTOKENPoolKYATKRR.symbol.call({from: accounts[3]});
//		const uint256vZ6alnf = await BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintckKnSCk, uintYVVh8ML, uintRXhC5FO, bytej5UEKu, byter84yNh8, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVPj4rJ1 = "uS9i6oL3odM8Yfxsg5iVo2XdvyyWWfPMEDhem0bcfLs5TBdj6MJMndKXqrGHabPV1TTic"
		const stringUYXHDZG = "W1BxCCLtd3jKKNbFeT1TOsx1DvBSUf7liAPU7aqzl9gsIVzIG"
		const uintejrvb5L = BigInt("77")
		const BACMARSLPTOKENPoolY0zbZar = await BACMARSLPTOKENPool.new(stringVPj4rJ1, stringUYXHDZG, uintejrvb5L, {from: accounts[3]});
		const addressp6Wx6sG = accounts[1]
		const uintaIWvpr = BigInt("817")
		const uint256x9h2Yvy = await BACMARSLPTOKENPoolY0zbZar.earned.call(addressp6Wx6sG, {from: accounts[5]});
		const uint256ETS64NN = await BACMARSLPTOKENPoolY0zbZar.withdraw.call(uintaIWvpr, {from: "0x0000000000000000000000000000000000000001"});
		const stringLVSdUvU = await BACMARSLPTOKENPoolY0zbZar.name.call({from: accounts[1]});
		const uint256zhFnRnO = await BACMARSLPTOKENPoolY0zbZar.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256n0XC9ZZ = await BACMARSLPTOKENPoolY0zbZar.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZOKyiFG = accounts[0]
		const addressBe42TBz = accounts[1]
		const addressJBRWwyt = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressZOKyiFG, addressBe42TBz, addressJBRWwyt, {from: accounts[0]});
		const bytee4LJEnO = "0x15171f190b071c0119161317200d1c120f030501150d110306091b101e0f0b0c"
		const byteuRqAeZ = "0x1415181f1b0709080b0a0a0813011b1112031d0115060a0e0e1908171108061d"
		const uintg0FsjbT = BigInt("98")
		const uintCNPqBsv = BigInt("655")
		const uintHBJTOyf = BigInt("364")
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const uint256ARIovd6 = await BACMARSLPTOKENPoolKYATKRR.totalSupply.call({from: accounts[4]});
//		const stringqzf9nYp = await BACMARSLPTOKENPoolKYATKRR.symbol.call({from: accounts[3]});
//		const uint256vZ6alnf = await BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintHBJTOyf, uintCNPqBsv, uintg0FsjbT, byteuRqAeZ, bytee4LJEnO, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgJ6uakd = accounts[3]
		const addressVN9anKv = accounts[2]
		const addressSNY3it9 = accounts[0]
		const BACMARSLPTOKENPoolLZx0nEQ = await BACMARSLPTOKENPool.new(addressgJ6uakd, addressVN9anKv, addressSNY3it9, {from: accounts[5]});
		const uintehCixF9 = BigInt("472")
		const addresshglOnOJ = accounts[3]
		const uintl2YoTrq = BigInt("1663")
		const uintuEY18pm = BigInt("496")
		const addresse29IyV = accounts[0]
//		const uint256znnrZnl = await BACMARSLPTOKENPoolLZx0nEQ.withdraw.call(uintehCixF9, {from: accounts[0]});
//		const stringbfuXLw = await BACMARSLPTOKENPoolLZx0nEQ.symbol.call({from: accounts[2]});
//		const uint256Xnt69OG = await BACMARSLPTOKENPoolLZx0nEQ.balanceOf.call(addresshglOnOJ, {from: accounts[4]});
//		const uint256v4vUd2q = await BACMARSLPTOKENPoolLZx0nEQ.getRewardForDuration.call({from: accounts[5]});
//		const uint256HMIDSPs = await BACMARSLPTOKENPoolLZx0nEQ.notifyRewardAmount.call(uintl2YoTrq, {from: accounts[0]});
//		const uint256LK9eHj0 = await BACMARSLPTOKENPoolLZx0nEQ.notifyRewardAmount.call(uintuEY18pm, {from: accounts[1]});
//		const uint256MIGqFP = await BACMARSLPTOKENPoolLZx0nEQ.balanceOf.call(addresse29IyV, {from: accounts[0]});
//		await BACMARSLPTOKENPoolLZx0nEQ.onlyRewardsDistribution.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolLZx0nEQ.withdraw.call(uintehCixF9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszL0VQJ3 = accounts[0]
		const addressoTVuPxK = accounts[1]
		const addressj7d7Mu = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addresszL0VQJ3, addressoTVuPxK, addressj7d7Mu, {from: accounts[0]});
		const uintzwQuKDX = BigInt("1634")
//		await BACMARSLPTOKENPoolKYATKRR.exit.call({from: accounts[1]});
//		const uint2567bGoat = await BACMARSLPTOKENPoolKYATKRR.stake.call(uintzwQuKDX, {from: accounts[3]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const stringqzf9nYp = await BACMARSLPTOKENPoolKYATKRR.symbol.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolKYATKRR.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL1iOFvw = "eEOWAU69sbrgZh"
		const stringQynRoOo = "3ttp98ITWKFnwtV69EUyowexVx18N5Xq1fHBWJm2ncbJ1x6zYs0gBg8Zsby2oeBA3Yp43iW9BFE61Ck"
		const uintoeRdxeT = BigInt("216")
		const BACMARSLPTOKENPoolKqWtPZK = await BACMARSLPTOKENPool.new(stringL1iOFvw, stringQynRoOo, uintoeRdxeT, {from: accounts[4]});
		const uint256tctxak7 = await BACMARSLPTOKENPoolKqWtPZK.totalSupply.call({from: accounts[1]});
		const uint256pdfVKWF = await BACMARSLPTOKENPoolKqWtPZK.rewardPerToken.call({from: accounts[4]});
		const stringR72TCQb = await BACMARSLPTOKENPoolKqWtPZK.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address12WP9i = accounts[0]
		const addressHk5YZX9 = accounts[1]
		const addressNidTZA4 = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(address12WP9i, addressHk5YZX9, addressNidTZA4, {from: accounts[0]});
		const uintCyrDgKO = BigInt("1038")
		const addressRD519T3 = accounts[2]
//		const uint256xMDJ2KT = await BACMARSLPTOKENPoolKYATKRR.stake.call(uintCyrDgKO, {from: accounts[4]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const uint256ZBdMHzt = await BACMARSLPTOKENPoolKYATKRR.balanceOf.call(addressRD519T3, {from: accounts[0]});
//		const stringqzf9nYp = await BACMARSLPTOKENPoolKYATKRR.symbol.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolKYATKRR.stake.call(uintCyrDgKO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressENQQ4a = accounts[0]
		const addressxorNwuV = accounts[1]
		const addressAE6mAYn = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressENQQ4a, addressxorNwuV, addressAE6mAYn, {from: accounts[0]});
		const addressgbXYDYL = "0x0000000000000000000000000000000000000001"
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const addressH4iPCfV = await BACMARSLPTOKENPoolKYATKRR.updateReward.call(addressgbXYDYL, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAN2xyYw = accounts[1]
		const addressKiNIYPK = accounts[5]
		const addressAu2oWsS = accounts[3]
		const BACMARSLPTOKENPooliOH8NOp = await BACMARSLPTOKENPool.new(addressAN2xyYw, addressKiNIYPK, addressAu2oWsS, {from: accounts[1]});
		const uintlXtbSSL = BigInt("843")
		const uint256oBa2jiZ = await BACMARSLPTOKENPooliOH8NOp.getRewardForDuration.call({from: accounts[3]});
//		const uint256ccFmlz7 = await BACMARSLPTOKENPooliOH8NOp.withdraw.call(uintlXtbSSL, {from: accounts[4]});
//		const uint8m0cWsR = await BACMARSLPTOKENPooliOH8NOp.decimals.call({from: accounts[2]});
//		await BACMARSLPTOKENPooliOH8NOp.getReward.call({from: accounts[1]});

		assert.equal(uint256oBa2jiZ, BigInt("0"))
		await expect(BACMARSLPTOKENPooliOH8NOp.withdraw.call(uintlXtbSSL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKMiIa7o = accounts[0]
		const addressojWePiO = accounts[1]
		const addresstCIGzRx = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressKMiIa7o, addressojWePiO, addresstCIGzRx, {from: accounts[0]});
		const uinttpouzuj = BigInt("1038")
		const addressLbOIhWH = accounts[0]
		const addressiVwhVUY = accounts[2]
//		const uint256xMDJ2KT = await BACMARSLPTOKENPoolKYATKRR.stake.call(uinttpouzuj, {from: accounts[4]});
//		const addressd93HZsl = await BACMARSLPTOKENPoolKYATKRR.updateReward.call(addressLbOIhWH, {from: accounts[0]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolKYATKRR.nonReentrant.call({from: accounts[2]});
//		const uint256ZBdMHzt = await BACMARSLPTOKENPoolKYATKRR.balanceOf.call(addressiVwhVUY, {from: accounts[0]});
//		const stringqzf9nYp = await BACMARSLPTOKENPoolKYATKRR.symbol.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolKYATKRR.stake.call(uinttpouzuj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstFvG4pj = accounts[0]
		const addressww17GZS = accounts[1]
		const addressQlCgLrH = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addresstFvG4pj, addressww17GZS, addressQlCgLrH, {from: accounts[0]});
		const bytebAdUike = "0x1416051e1016121a1b0c0a020a07101e00061b0f180d0e1f0217021a02201806"
		const byteu3I6XCQ = "0x1c040a050f0009180a03151e01100b1012140402111b110f0a1c050b1f04041e"
		const uintuJCuEC4 = BigInt("154")
		const uintmJXp9VF = BigInt("1328")
		const uintEvJvd0K = BigInt("1956")
		const addressGZHlOXr = accounts[2]
//		const uint256n70N6hl = await BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintEvJvd0K, uintmJXp9VF, uintuJCuEC4, byteu3I6XCQ, bytebAdUike, {from: accounts[3]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		const uint256gzzTkYY = await BACMARSLPTOKENPoolKYATKRR.earned.call(addressGZHlOXr, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintEvJvd0K, uintmJXp9VF, uintuJCuEC4, byteu3I6XCQ, bytebAdUike, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhHxyYe8 = "NjxdQ5QdF6KnRvvSibYPGL3zp9RrrTsmuYwGbzppvnzgs"
		const stringfOAtBQm = "FKrcay6iR8w12ar0Ky0iCDtA0OsBUNiM4hTrmlf2HBdRCzSI9ruZklxUEl49yA5heuFLqTLicqpAbKuCnBeHhvXpheDlNs9HQ"
		const uintAjiMa2d = BigInt("164")
		const BACMARSLPTOKENPoolbFq17D6 = await BACMARSLPTOKENPool.new(stringhHxyYe8, stringfOAtBQm, uintAjiMa2d, {from: accounts[0]});
		await BACMARSLPTOKENPoolbFq17D6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolbFq17D6.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqUg28N1 = accounts[0]
		const addressMuZ9NxS = accounts[1]
		const addresssLzthhj = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressqUg28N1, addressMuZ9NxS, addresssLzthhj, {from: accounts[0]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolKYATKRR.nonReentrant.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRTrCCNQ = accounts[0]
		const addressiXB9IxA = accounts[1]
		const addressJM6iiKO = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressRTrCCNQ, addressiXB9IxA, addressJM6iiKO, {from: accounts[0]});
		const addressV8tJuuV = accounts[1]
		const uintbD3gpHN = BigInt("95")
		const uint256JhawXAE = await BACMARSLPTOKENPoolKYATKRR.balanceOf.call(addressV8tJuuV, {from: accounts[4]});
//		const uint256I2VnGt = await BACMARSLPTOKENPoolKYATKRR.notifyRewardAmount.call(uintbD3gpHN, {from: accounts[3]});
//		const uint256Gqh6Tum = await BACMARSLPTOKENPoolKYATKRR.rewardPerToken.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});

		assert.equal(uint256JhawXAE, BigInt("0"))
		await expect(BACMARSLPTOKENPoolKYATKRR.notifyRewardAmount.call(uintbD3gpHN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEdaZ3nY = "SLf7Ho9ViDxEFmy"
		const stringzwe34Dn = "kcJ18Vu6wJBAWS1G6UAXPg"
		const uintNayky58 = BigInt("193")
		const BACMARSLPTOKENPoolo1RQ3jT = await BACMARSLPTOKENPool.new(stringEdaZ3nY, stringzwe34Dn, uintNayky58, {from: accounts[3]});
		const uintu3ClrHq = BigInt("965")
		const uint256wNpGap7 = await BACMARSLPTOKENPoolo1RQ3jT.stake.call(uintu3ClrHq, {from: accounts[1]});
		const uint256FKb9uN = await BACMARSLPTOKENPoolo1RQ3jT.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256pkiACoQ = await BACMARSLPTOKENPoolo1RQ3jT.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKWSHHNl = "VItIlto77UADNdj6kvFnDd"
		const stringhboAcXH = "uPZakGxMScNBB3Qa7vAqc62W0TBPOypbGyAQH8sxUIxuKsReRTGgtasdjz07iLbN4aOl5mfMJ2xeiqU"
		const uint9CQ9ZW = BigInt("240")
		const BACMARSLPTOKENPoollZQFHkf = await BACMARSLPTOKENPool.new(stringKWSHHNl, stringhboAcXH, uint9CQ9ZW, {from: accounts[5]});
		const addresslNzCHRq = accounts[2]
		const addressi4uEgWU = await BACMARSLPTOKENPoollZQFHkf.updateReward.call(addresslNzCHRq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KNtRAfq = await BACMARSLPTOKENPoollZQFHkf.totalSupply.call({from: accounts[0]});
		const uint8J3kQgF = await BACMARSLPTOKENPoollZQFHkf.decimals.call({from: accounts[5]});
		const stringivKxyMy = await BACMARSLPTOKENPoollZQFHkf.symbol.call({from: accounts[0]});
		const uint256DrJPuMs = await BACMARSLPTOKENPoollZQFHkf.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL6RmcP4 = "WaoEmsuR8RWvg6RUH4nr4DHZj6ZGH2xYefYR7QTGXUpjRmmY36WN06eC92RKd2RyPaDRUxHzxvTyC5b4"
		const stringeFcxZgk = "HqWOrTc9fSX19I3l3a0AWWTDDdxGsX9kgRJ2ylYPwkYgIubX2MU8zuXc9nhlIwGST1QX7BuvdJgmTVoFogSc81"
		const uintkgumHAL = BigInt("9")
		const BACMARSLPTOKENPoolLzNNPN6 = await BACMARSLPTOKENPool.new(stringL6RmcP4, stringeFcxZgk, uintkgumHAL, {from: accounts[3]});
		const uintfT1v6ia = BigInt("926")
		const uint256zJf6Qr3 = await BACMARSLPTOKENPoolLzNNPN6.stake.call(uintfT1v6ia, {from: accounts[2]});
		const stringF96gOod = await BACMARSLPTOKENPoolLzNNPN6.name.call({from: accounts[3]});
		await BACMARSLPTOKENPoolLzNNPN6.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBcnUkrG = "X5uVveRTPlUtM59C8uYYvSsnVFQ"
		const stringFPiRNO = "BZa74Pv12wQEKd0EJNRNXJVJStlBEa3cs9EaSxFydn9Ini5o2KJXkKWIhu3nbt93Gqchvs8aqtNDQkDb"
		const uintzouScpj = BigInt("38")
		const BACMARSLPTOKENPoolTGIrzoZ = await BACMARSLPTOKENPool.new(stringBcnUkrG, stringFPiRNO, uintzouScpj, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolTGIrzoZ.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolTGIrzoZ.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256RX1xncj = await BACMARSLPTOKENPoolTGIrzoZ.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXgXCXC7 = accounts[0]
		const addressmbOcyur = accounts[1]
		const addressSI9y8ZY = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addressXgXCXC7, addressmbOcyur, addressSI9y8ZY, {from: accounts[0]});
		const addressiZhlIwJ = accounts[0]
		const byteaYzjU5 = "0x0b0c091e070113091a1000070b1e20030403090c090813190407190401190717"
		const byteSuGeFLE = "0x051b09201a1f06191e18111e10030c05180a170e030e1c01091a13091c151800"
		const uintNwFKrg6 = BigInt("61")
		const uintSv1deum = BigInt("280")
		const uintI4alV7K = BigInt("1126")
		const addressQJH0Avw = accounts[0]
		const uintr4Rt1zo = BigInt("1038")
		const uint256ArIrVJ = await BACMARSLPTOKENPoolKYATKRR.earned.call(addressiZhlIwJ, {from: accounts[4]});
//		const uint256kFqcASW = await BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintI4alV7K, uintSv1deum, uintNwFKrg6, byteSuGeFLE, byteaYzjU5, {from: accounts[1]});
//		const addressXL8p6v = await BACMARSLPTOKENPoolKYATKRR.updateReward.call(addressQJH0Avw, {from: accounts[3]});
//		const uint256xMDJ2KT = await BACMARSLPTOKENPoolKYATKRR.stake.call(uintr4Rt1zo, {from: accounts[4]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});

		assert.equal(uint256ArIrVJ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolKYATKRR.stakeWithPermit.call(uintI4alV7K, uintSv1deum, uintNwFKrg6, byteSuGeFLE, byteaYzjU5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOXA1jrH = "WLMgoGrxWlmTSLzvLhuaYNlxm2mt9UWd0c4qR8oEpju"
		const stringuL0YyCZ = "7P3XwsJPcpDsNmYh3f9Vow2VwPkR9KyHbVlUz"
		const uinth2iQEvd = BigInt("41")
		const BACMARSLPTOKENPoolKLkvPHP = await BACMARSLPTOKENPool.new(stringOXA1jrH, stringuL0YyCZ, uinth2iQEvd, {from: "0x0000000000000000000000000000000000000001"});
		const addressLly57be = accounts[4]
		await BACMARSLPTOKENPoolKLkvPHP.onlyRewardsDistribution.call({from: accounts[3]});
		const stringuPaFKaH = await BACMARSLPTOKENPoolKLkvPHP.name.call({from: accounts[0]});
		const uint256qzR9Ew0 = await BACMARSLPTOKENPoolKLkvPHP.earned.call(addressLly57be, {from: accounts[0]});
		await BACMARSLPTOKENPoolKLkvPHP.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDAkuRIo = "t57KCNnfq8QEo6hxzYoRPl"
		const stringB9TQHDu = "2HU6"
		const uintpQUOKpZ = BigInt("68")
		const BACMARSLPTOKENPoolCtbjdoP = await BACMARSLPTOKENPool.new(stringDAkuRIo, stringB9TQHDu, uintpQUOKpZ, {from: accounts[1]});
		const addressgCRefzW = accounts[5]
		const byteUhMsOeJ = "0x0c0b091e140717090e180e1b0520040e191f191d041c190c1c1c121d14181212"
		const bytelaZIv8 = "0x1112060a1e0a0a07170f1a13131600130f08070f05041415041406101611081e"
		const uintgAX6c9 = BigInt("173")
		const uintUWyCQxW = BigInt("271")
		const uintOuizOJV = BigInt("592")
		const uint256Fstpn1 = await BACMARSLPTOKENPoolCtbjdoP.totalSupply.call({from: accounts[5]});
		const uint256gbkhIMM = await BACMARSLPTOKENPoolCtbjdoP.totalSupply.call({from: accounts[3]});
		const uint256jkUSbyZ = await BACMARSLPTOKENPoolCtbjdoP.totalSupply.call({from: accounts[2]});
		const uint256cTz5sSr = await BACMARSLPTOKENPoolCtbjdoP.earned.call(addressgCRefzW, {from: accounts[0]});
		const uint256uCV9jBt = await BACMARSLPTOKENPoolCtbjdoP.stakeWithPermit.call(uintOuizOJV, uintUWyCQxW, uintgAX6c9, bytelaZIv8, byteUhMsOeJ, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUQrraAg = "sn6TcqahkOe"
		const stringaPoGyht = "pqi4U4Ld3ERE"
		const uintAh30XLa = BigInt("54")
		const BACMARSLPTOKENPoolWILlopA = await BACMARSLPTOKENPool.new(stringUQrraAg, stringaPoGyht, uintAh30XLa, {from: accounts[1]});
		const byte99jWLL = "0x1e1918060415161f0a0e1f1b0f1714021c1b1f04160c1c1e18110713141a140b"
		const bytekndwfSj = "0x04201a10181c170614131910030315081d200320010d13140a180906070c1c0c"
		const uintASf5Dgn = BigInt("94")
		const uint4DqoNB = BigInt("416")
		const uintg1dfpcy = BigInt("1648")
		const uintziLIBaL = BigInt("681")
		const addressLEPqnTV = accounts[0]
		await BACMARSLPTOKENPoolWILlopA.getReward.call({from: accounts[3]});
		const uint256Bzg3fW = await BACMARSLPTOKENPoolWILlopA.stakeWithPermit.call(uintg1dfpcy, uint4DqoNB, uintASf5Dgn, bytekndwfSj, byte99jWLL, {from: accounts[4]});
		await BACMARSLPTOKENPoolWILlopA.exit.call({from: accounts[1]});
		const uint256ZGkMsBq = await BACMARSLPTOKENPoolWILlopA.withdraw.call(uintziLIBaL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AEqdYTd = await BACMARSLPTOKENPoolWILlopA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HBoNHjR = await BACMARSLPTOKENPoolWILlopA.balanceOf.call(addressLEPqnTV, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringszsHk11 = "gwQmn8IKMV3"
		const stringMEJJxV4 = "POTWVCRuaBkJzkeXRUCc"
		const uintXCpgeCv = BigInt("182")
		const BACMARSLPTOKENPoolPm8DXXM = await BACMARSLPTOKENPool.new(stringszsHk11, stringMEJJxV4, uintXCpgeCv, {from: accounts[0]});
		const uintCYbSOtt = BigInt("1140")
		const uintILShDPy = BigInt("1806")
		const uint256uz7YSA3 = await BACMARSLPTOKENPoolPm8DXXM.notifyRewardAmount.call(uintCYbSOtt, {from: accounts[0]});
		const uint256wdqkJxe = await BACMARSLPTOKENPoolPm8DXXM.notifyRewardAmount.call(uintILShDPy, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfqTngdY = "TrhqRkqKNV7a7NYayJ55Ra6nIVBBsKh2v4z9X4CRPpKPQi"
		const string40T4SA = "pXH1RXQLG90DeLp5RJ0vDYbqVOMqUGOBm5DC98"
		const uinteuM7HY = BigInt("134")
		const BACMARSLPTOKENPoolaT5oI0 = await BACMARSLPTOKENPool.new(stringfqTngdY, string40T4SA, uinteuM7HY, {from: accounts[0]});
		const uint8YK7jJQ = await BACMARSLPTOKENPoolaT5oI0.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolaT5oI0.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhwossuB = "ZeAUwgQ8PHQSALJtmbM1X04fhqMcRhZN4KDRMQfPeKp"
		const stringzxvQxy4 = "B5FrwJ8HuXJoTF6vIzKb8pix9U3ym6pC3nR63B0YyRXaeB38BmsEbbiwDPal2NZz9n5PQVsDyO5"
		const uintqjkhAQA = BigInt("160")
		const BACMARSLPTOKENPoolcoX1qmd = await BACMARSLPTOKENPool.new(stringhwossuB, stringzxvQxy4, uintqjkhAQA, {from: accounts[2]});
		const addressX1O9Uiu = accounts[0]
		const uintgg1YzPP = BigInt("1952")
		const uint256vUZeNVC = await BACMARSLPTOKENPoolcoX1qmd.earned.call(addressX1O9Uiu, {from: accounts[3]});
		const uint256PXhoXN = await BACMARSLPTOKENPoolcoX1qmd.notifyRewardAmount.call(uintgg1YzPP, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfngjatQ = "GWDpPSq8aH"
		const stringTn1STLX = "S8U3l65cdxLBuYnf2HezHpIM6Locd6LvUOrwQjNmDkOQF4GVbTtvzA3EuqtB2xldHw8OsCHTFhIDPjhCvlzQkeVd8SgO"
		const uintarBxEeL = BigInt("123")
		const BACMARSLPTOKENPoolWMF3YZA = await BACMARSLPTOKENPool.new(stringfngjatQ, stringTn1STLX, uintarBxEeL, {from: accounts[1]});
		const stringt2kXTT = await BACMARSLPTOKENPoolWMF3YZA.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolWMF3YZA.nonReentrant.call({from: accounts[2]});
		const uint256p93CpX = await BACMARSLPTOKENPoolWMF3YZA.rewardPerToken.call({from: accounts[3]});
		const stringTf8K6uf = await BACMARSLPTOKENPoolWMF3YZA.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszpz4N87 = accounts[0]
		const addressBLjKHm = accounts[1]
		const addressiDfZmKr = accounts[3]
		const BACMARSLPTOKENPoolKYATKRR = await BACMARSLPTOKENPool.new(addresszpz4N87, addressBLjKHm, addressiDfZmKr, {from: accounts[0]});
		const uintpc7Sypw = BigInt("1066")
//		const uint256mmX0eVb = await BACMARSLPTOKENPoolKYATKRR.notifyRewardAmount.call(uintpc7Sypw, {from: accounts[0]});
//		await BACMARSLPTOKENPoolKYATKRR.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolKYATKRR.onlyRewardsDistribution.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolKYATKRR.notifyRewardAmount.call(uintpc7Sypw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringux0M5VC = "j7pGpk"
		const stringnMadfJ = "ibS35vpsUMi51oJwy5tWQVTbpOflnQH4RVe1utkytnJ2CUVUEUc2Z3hb1koTY4ToC"
		const uintgFRqbwU = BigInt("98")
		const BACMARSLPTOKENPoola4JaEk1 = await BACMARSLPTOKENPool.new(stringux0M5VC, stringnMadfJ, uintgFRqbwU, {from: accounts[4]});
		const addressjky0RAT = accounts[1]
		const uint7ApUoY = BigInt("1254")
		const addressL793zSY = await BACMARSLPTOKENPoola4JaEk1.updateReward.call(addressjky0RAT, {from: accounts[0]});
		await BACMARSLPTOKENPoola4JaEk1.exit.call({from: accounts[5]});
		const uint256UoGabER = await BACMARSLPTOKENPoola4JaEk1.notifyRewardAmount.call(uint7ApUoY, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcfwo84W = ""
		const stringweUMwjP = "4p26oX9aE8mgaef9z91ZQa2v8ZuIcbEiQPT"
		const uintHYXa18 = BigInt("19")
		const BACMARSLPTOKENPoolF8Qsdc1 = await BACMARSLPTOKENPool.new(stringcfwo84W, stringweUMwjP, uintHYXa18, {from: accounts[4]});
		const uintoHmCQQq = BigInt("1478")
		const stringxBaWPbz = await BACMARSLPTOKENPoolF8Qsdc1.symbol.call({from: accounts[0]});
		const uint256GmHknZ5 = await BACMARSLPTOKENPoolF8Qsdc1.getRewardForDuration.call({from: accounts[0]});
		const stringpePJCMW = await BACMARSLPTOKENPoolF8Qsdc1.symbol.call({from: accounts[1]});
		const stringq7tjSQd = await BACMARSLPTOKENPoolF8Qsdc1.symbol.call({from: accounts[1]});
		const uint256DdCCJeB = await BACMARSLPTOKENPoolF8Qsdc1.withdraw.call(uintoHmCQQq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringobQmCBp = "5debuU"
		const stringGq8KVZR = "3PFAFot9L2n7cq4l4T2qC3abJTvEN3PSORoQaQkStWe8lg"
		const uintdf8M4u9 = BigInt("231")
		const BACMARSLPTOKENPoolcevARdL = await BACMARSLPTOKENPool.new(stringobQmCBp, stringGq8KVZR, uintdf8M4u9, {from: accounts[4]});
		const uint256X9dHcOX = await BACMARSLPTOKENPoolcevARdL.rewardPerToken.call({from: accounts[3]});
		const uint256jjTLOoE = await BACMARSLPTOKENPoolcevARdL.rewardPerToken.call({from: accounts[0]});
		const uint256Iwb2QJq = await BACMARSLPTOKENPoolcevARdL.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJGl8zFv = "BAOmIjB6TlovqmJ6ObsBXTkjuFVvmBrTGAon8SiSLaEAjHRMa9KS2ymh1At4nz8GgY8m"
		const stringxTfWsCY = "VFVJ9rDnxRE0xKMih4K02eJM13Z3Xv4EJXpp5VKCrouHEfSEQNpfbfcIDgnLVNVwK1PhN9AAQ"
		const uintWcUE9xy = BigInt("102")
		const BACMARSLPTOKENPoolMAALJkJ = await BACMARSLPTOKENPool.new(stringJGl8zFv, stringxTfWsCY, uintWcUE9xy, {from: accounts[0]});
		const addressJ0j7xLR = accounts[2]
		const uintTZksA4x = BigInt("503")
		const uint256TUy352U = await BACMARSLPTOKENPoolMAALJkJ.balanceOf.call(addressJ0j7xLR, {from: accounts[4]});
		const uint256if3w9h = await BACMARSLPTOKENPoolMAALJkJ.withdraw.call(uintTZksA4x, {from: accounts[0]});
		const uint8jqAsbOM = await BACMARSLPTOKENPoolMAALJkJ.decimals.call({from: accounts[0]});
		const uint256RmKNcE = await BACMARSLPTOKENPoolMAALJkJ.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringchoieJ = "6tH6iFEwhdk7jMQN5U2Oa7WYT0Tkah9zKkMSoRzoahAABodNWWRksTHzx4FlRrlfVEPuFO5NH0INSIZa6PnY1QAwA"
		const stringrDVz6j = "VwF2opRrWjJgh8yOoiu27qxf81KjlvWB5EKd8kZRrrNnEyBw6mURgOOSLYoG8VBtMhKoxAKKcKTQzAfr6jh"
		const uintFgUPMH = BigInt("18")
		const BACMARSLPTOKENPoolo6EAGbe = await BACMARSLPTOKENPool.new(stringchoieJ, stringrDVz6j, uintFgUPMH, {from: accounts[0]});
		const uintjUrZw8U = BigInt("1827")
		const uintguTzzWp = BigInt("1901")
		const addressnOY6P1c = accounts[1]
		const uintIZWP0sU = BigInt("395")
		const uint256e9ntS80 = await BACMARSLPTOKENPoolo6EAGbe.notifyRewardAmount.call(uintjUrZw8U, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z03uooo = await BACMARSLPTOKENPoolo6EAGbe.notifyRewardAmount.call(uintguTzzWp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mVRS5o = await BACMARSLPTOKENPoolo6EAGbe.earned.call(addressnOY6P1c, {from: accounts[4]});
		await BACMARSLPTOKENPoolo6EAGbe.exit.call({from: accounts[2]});
		const uint256XbIlllN = await BACMARSLPTOKENPoolo6EAGbe.notifyRewardAmount.call(uintIZWP0sU, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMhkR6S = "IktUadrIJTltyPOK7NwpQUc3y5ujDQpC4g"
		const stringh1eEPEQ = "IG2tzPXeehLyDpNpBu69h"
		const uintboTKKb = BigInt("175")
		const BACMARSLPTOKENPoolEL5KMUy = await BACMARSLPTOKENPool.new(stringMhkR6S, stringh1eEPEQ, uintboTKKb, {from: accounts[5]});
		const byteVeIDfDc = "0x141d01041b0f150a06100b0a131c101b091218040e1b0b02150b190d190e1b10"
		const byteHQ1tE2y = "0x05200e1c111709081b07042020070c02010719170f00190c060217040b100c07"
		const uintzzLqQ1f = BigInt("12")
		const uintUajH1sx = BigInt("430")
		const uintBThirRf = BigInt("1306")
		const bytek2FNa05 = "0x1e160e1909071419031c11081d08190219161c04101d1b051d1b0a0f151a0f10"
		const bytexiZSaAj = "0x0a1d1f0c0e001f010213010a0808071b04090c11111403071a01171c1b0a1108"
		const uintLVCRpwf = BigInt("35")
		const uintJdmPsbv = BigInt("1965")
		const uintFblLtTF = BigInt("976")
		const byteFdQ7vmV = "0x160c14050d0f1217010a1014051119131f1c110618051d19120a0612150e1113"
		const bytefLrmN1n = "0x10021201190b09100c0c1f0a1c190d080e040f0e151e0b02091d171e061f1304"
		const uintZ2fMg4b = BigInt("25")
		const uintoEgkOrd = BigInt("689")
		const uinttM7XECw = BigInt("521")
		const uint256lNTyTXQ = await BACMARSLPTOKENPoolEL5KMUy.stakeWithPermit.call(uintBThirRf, uintUajH1sx, uintzzLqQ1f, byteHQ1tE2y, byteVeIDfDc, {from: accounts[3]});
		const uint256CMQb37a = await BACMARSLPTOKENPoolEL5KMUy.stakeWithPermit.call(uintFblLtTF, uintJdmPsbv, uintLVCRpwf, bytexiZSaAj, bytek2FNa05, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oVHVIXb = await BACMARSLPTOKENPoolEL5KMUy.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ChKS6iy = await BACMARSLPTOKENPoolEL5KMUy.stakeWithPermit.call(uinttM7XECw, uintoEgkOrd, uintZ2fMg4b, bytefLrmN1n, byteFdQ7vmV, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHeZxkrb = "c6jlO24MZXujPl5WxNwLVNyYZ4NGfQsEomJ0V5VvYN5AzeVrxfQfqKQMe1OF3jljU0B"
		const stringKYfxccD = "QJQTh5MWWk2JiyDMWTqBCLt8o2UbI"
		const uintF6PwNw6 = BigInt("4")
		const BACMARSLPTOKENPoolPSvRvOR = await BACMARSLPTOKENPool.new(stringHeZxkrb, stringKYfxccD, uintF6PwNw6, {from: accounts[3]});
		const addresswapF5D = accounts[4]
		const uintPg8qJ34 = BigInt("1017")
		const uint256mPNjzD = await BACMARSLPTOKENPoolPSvRvOR.earned.call(addresswapF5D, {from: accounts[2]});
		await BACMARSLPTOKENPoolPSvRvOR.nonReentrant.call({from: accounts[1]});
		const uint256oi3RpH = await BACMARSLPTOKENPoolPSvRvOR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nUCUoZA = await BACMARSLPTOKENPoolPSvRvOR.stake.call(uintPg8qJ34, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBXsMMnP = "vL3Cwa16tyWVqagAb7hcSe8vmbMucZ"
		const stringwKDaJ1U = "CS5q3P5VU6g3NjmU63BPrr6cafJJoPNo0TY"
		const uintdUnvGLo = BigInt("62")
		const BACMARSLPTOKENPool5yjfMf = await BACMARSLPTOKENPool.new(stringBXsMMnP, stringwKDaJ1U, uintdUnvGLo, {from: accounts[4]});
		const uintkfZptuu = BigInt("1445")
		const uintsXafNeS = BigInt("1051")
		const uint256uIbOJG = await BACMARSLPTOKENPool5yjfMf.stake.call(uintkfZptuu, {from: accounts[1]});
		const uint256aFOfPcd = await BACMARSLPTOKENPool5yjfMf.totalSupply.call({from: accounts[0]});
		const uint256kWgvUEp = await BACMARSLPTOKENPool5yjfMf.notifyRewardAmount.call(uintsXafNeS, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmeQSnr = "MbgOwJsjPvzy9teGJWxcXqHy90b6yJ0iWplVoHH1PaV"
		const stringHpuzppq = "q3U9CgYRx8ImaErzG3VsQHlNoUuiQK4sDvcMPssV8rBcdHhcchcGDn"
		const uintCrWnZw = BigInt("11")
		const BACMARSLPTOKENPoolHc6qoqm = await BACMARSLPTOKENPool.new(stringmeQSnr, stringHpuzppq, uintCrWnZw, {from: accounts[5]});
		const uintGEd7qQF = BigInt("228")
		const addressh4Ayrlb = accounts[4]
		const stringjyAjMmA = await BACMARSLPTOKENPoolHc6qoqm.symbol.call({from: accounts[1]});
		const uint256ZcilypT = await BACMARSLPTOKENPoolHc6qoqm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256el6kkPK = await BACMARSLPTOKENPoolHc6qoqm.stake.call(uintGEd7qQF, {from: "0x0000000000000000000000000000000000000001"});
		const stringQzJuA5u = await BACMARSLPTOKENPoolHc6qoqm.name.call({from: accounts[0]});
		const addressIVU4yK4 = await BACMARSLPTOKENPoolHc6qoqm.updateReward.call(addressh4Ayrlb, {from: accounts[2]});
		const uint256gnSKTMh = await BACMARSLPTOKENPoolHc6qoqm.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVPWV0N = "7a1Q8csIJiiJ32jHwikzY"
		const stringBTtEl2E = "KY5J6tcH6GkHmGopI4ebSY2xVOy2tIFnxIxi16eac1hPKWeCqHaqNkRbRj2l71O8k1JHuRhN"
		const uintQKF1xty = BigInt("5")
		const BACMARSLPTOKENPoolEbwVcDW = await BACMARSLPTOKENPool.new(stringVPWV0N, stringBTtEl2E, uintQKF1xty, {from: "0x0000000000000000000000000000000000000001"});
		const uinti1rhb3z = BigInt("1526")
		const uint8BsXUhrM = await BACMARSLPTOKENPoolEbwVcDW.decimals.call({from: accounts[4]});
		const uint256yXjmKkA = await BACMARSLPTOKENPoolEbwVcDW.stake.call(uinti1rhb3z, {from: accounts[1]});
		const uint8gIFjEsO = await BACMARSLPTOKENPoolEbwVcDW.decimals.call({from: accounts[0]});
		const uint256gkRApOu = await BACMARSLPTOKENPoolEbwVcDW.rewardPerToken.call({from: accounts[4]});
		const uint256pzryeva = await BACMARSLPTOKENPoolEbwVcDW.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringofnGn3Z = "XBT7Ch1FLBQIS0o"
		const stringKOnex38 = "MmJQAuadcfiC5T9jPV4ztd5LLF3URb6ObMSns7I6DeIlWDu2NCgzU"
		const uintOWt0x1E = BigInt("135")
		const BACMARSLPTOKENPooldj0s4A = await BACMARSLPTOKENPool.new(stringofnGn3Z, stringKOnex38, uintOWt0x1E, {from: accounts[5]});
		const uintxWP9XVG = BigInt("568")
		const stringA4amnSN = await BACMARSLPTOKENPooldj0s4A.name.call({from: accounts[5]});
		const uint256fki71rT = await BACMARSLPTOKENPooldj0s4A.notifyRewardAmount.call(uintxWP9XVG, {from: accounts[4]});
		const uint256Lnl6tt2 = await BACMARSLPTOKENPooldj0s4A.totalSupply.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOQHRFA = "OKEMsAj7B28zIJs5SMNYMfzs2uIeTodN8BdUQlQhHV4nGd83AkSjPQQ4oMT2Ad9ExUGJySmnqJ9YMJ"
		const stringPfnh3A1 = "3qz1XghT14iSfkqDfA05nMSSXY1I5ABzsPORDVwWWCb2tCGpvH9LcLgHjhYW0OrjemyAKgbahqOfLK5JK"
		const uintQudoFGY = BigInt("169")
		const BACMARSLPTOKENPoolzEBY9mj = await BACMARSLPTOKENPool.new(stringOQHRFA, stringPfnh3A1, uintQudoFGY, {from: accounts[3]});
		const uinteU0iMeO = BigInt("474")
		const uintmwVSpI = BigInt("1952")
		const stringCAhJ1Ac = await BACMARSLPTOKENPoolzEBY9mj.symbol.call({from: accounts[0]});
		const uint256bKRrnhC = await BACMARSLPTOKENPoolzEBY9mj.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZspJIHW = await BACMARSLPTOKENPoolzEBY9mj.withdraw.call(uinteU0iMeO, {from: accounts[1]});
		const uint256rk2Eo6e = await BACMARSLPTOKENPoolzEBY9mj.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolzEBY9mj.getReward.call({from: accounts[3]});
		const uint256xFu3pLm = await BACMARSLPTOKENPoolzEBY9mj.stake.call(uintmwVSpI, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVbtpLyV = "L2EeTv1hmypnjSvpoapyqatu3juykxRWIGNIGRjx7VjtIWAvuOBd"
		const stringLq6p3fw = "Er0VMh2FjbI83wyV1MapE3mw0zu7JfgXTwWpC4jjhY8xjVNMt2QiMBoBuFNWLd8"
		const uintnYDfFXZ = BigInt("168")
		const BACMARSLPTOKENPoolAixebQT = await BACMARSLPTOKENPool.new(stringVbtpLyV, stringLq6p3fw, uintnYDfFXZ, {from: accounts[0]});
		const uintFNaiYRI = BigInt("972")
		const uintz1HChv7 = BigInt("1400")
		const uint256DyTtuhg = await BACMARSLPTOKENPoolAixebQT.notifyRewardAmount.call(uintFNaiYRI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tNgWhT8 = await BACMARSLPTOKENPoolAixebQT.totalSupply.call({from: accounts[2]});
		const uint256dfBOQq = await BACMARSLPTOKENPoolAixebQT.withdraw.call(uintz1HChv7, {from: accounts[0]});
		const uint256vBIvgt = await BACMARSLPTOKENPoolAixebQT.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG6qivft = "7K18ZrT98J74"
		const stringZ57gkBq = "NULZNatOeyhL0Kf"
		const uintvwwGSw = BigInt("201")
		const BACMARSLPTOKENPoolSN8ZEFP = await BACMARSLPTOKENPool.new(stringG6qivft, stringZ57gkBq, uintvwwGSw, {from: accounts[4]});
		const uintnVEihHX = BigInt("111")
		const addresscbFYGzs = accounts[3]
		const uint256FYi2iZa = await BACMARSLPTOKENPoolSN8ZEFP.withdraw.call(uintnVEihHX, {from: accounts[5]});
		const uint8xK89ORi = await BACMARSLPTOKENPoolSN8ZEFP.decimals.call({from: accounts[3]});
		const uint256tpQxQMN = await BACMARSLPTOKENPoolSN8ZEFP.balanceOf.call(addresscbFYGzs, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLJMDfhg = "CcloL8XsBp3Tzmz4EeWLn0GVe0pUzMB0QAHQNsf7jZLl2oax8xus6FlSnkbWj"
		const stringZJ01LzI = "qdHUtXSG8SrAT7Rh8zbWY1mMiybzrMuyRfaJnBLckhK83rjgBHpM6X63BwrSlLmFS9tmWAVMM3GV"
		const uintSXE23i = BigInt("224")
		const BACMARSLPTOKENPoolhDXbIV5 = await BACMARSLPTOKENPool.new(stringLJMDfhg, stringZJ01LzI, uintSXE23i, {from: "0x0000000000000000000000000000000000000001"});
		const uint5IXpYA = BigInt("1865")
		const uint256ibddpCy = await BACMARSLPTOKENPoolhDXbIV5.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256scxHIoH = await BACMARSLPTOKENPoolhDXbIV5.notifyRewardAmount.call(uint5IXpYA, {from: accounts[2]});
		const uint8UzLphDd = await BACMARSLPTOKENPoolhDXbIV5.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCv6p99F = "nAEwIlEk3pwYO8En9rxQ4rzXZTKnrsuF5XKD08c22GJjuWNpU7Mjd"
		const stringA3GHHFi = "g1UsUzpLESdy4lEo9NY8FDIIzExjKaE3bXhz6hE3oFQwo0eYWZQcwnzLCWzFvc2waGPcu7OUUiekCv2emyAXV8IdC2ONgdcTj8"
		const uinttC24CyL = BigInt("54")
		const BACMARSLPTOKENPoolK1mWQGs = await BACMARSLPTOKENPool.new(stringCv6p99F, stringA3GHHFi, uinttC24CyL, {from: "0x0000000000000000000000000000000000000001"});
		const bytezKUs4Tj = "0x09040a16101a070a191c081c1f090b111f161f0714050e10171115020e061219"
		const byteqJmkWJ = "0x0b01021813161f16090f13131205101c0e1716031a010d170c03010c070d0f02"
		const uintaik1Lq = BigInt("118")
		const uintReD7Vwu = BigInt("1206")
		const uintEl7YRh9 = BigInt("451")
		const bytetN3uOJ7 = "0x121b0414170201090e04180203100a17111603181a02020017121b1d030a1205"
		const bytejU14Id = "0x0f1c02151e010505010e0d171c140a09171302080614150d12100e050f1f0b12"
		const uintvVbpWms = BigInt("166")
		const uintjlePeEb = BigInt("282")
		const uintslOyzxE = BigInt("501")
		const uint256olz5jfn = await BACMARSLPTOKENPoolK1mWQGs.getRewardForDuration.call({from: accounts[0]});
		const uint256h4zbKEq = await BACMARSLPTOKENPoolK1mWQGs.stakeWithPermit.call(uintEl7YRh9, uintReD7Vwu, uintaik1Lq, byteqJmkWJ, bytezKUs4Tj, {from: accounts[3]});
		const stringoc30UO = await BACMARSLPTOKENPoolK1mWQGs.symbol.call({from: accounts[4]});
		const uint256HM3N3EL = await BACMARSLPTOKENPoolK1mWQGs.stakeWithPermit.call(uintslOyzxE, uintjlePeEb, uintvVbpWms, bytejU14Id, bytetN3uOJ7, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIG18xYx = "n9I6UC9XHtMTtzqX9piPEVqyA2E7LVuvfmmxtODjez8cOhzw"
		const stringfXdyVRe = "KmWPkeGONCeNtERKIIB"
		const uintBBmpQJb = BigInt("46")
		const BACMARSLPTOKENPoolG0e1Aiq = await BACMARSLPTOKENPool.new(stringIG18xYx, stringfXdyVRe, uintBBmpQJb, {from: accounts[4]});
		const addressGf8JaTH = accounts[1]
		const uint256QZIY0am = await BACMARSLPTOKENPoolG0e1Aiq.balanceOf.call(addressGf8JaTH, {from: accounts[0]});
		await BACMARSLPTOKENPoolG0e1Aiq.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolG0e1Aiq.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings8uAMiC = "SKtMsEb9M1w2ahQyf"
		const stringIjfxDI0 = "qLTpaQXcwsUr9kyD7fldxSAXHXLLYJ8oRmdLoxBobvGHvaszJqs5y5GpcgiyvwUFIwr2wdAtNcI9aCX8AoY"
		const uintShwujo6 = BigInt("67")
		const BACMARSLPTOKENPoolLm1lnL = await BACMARSLPTOKENPool.new(strings8uAMiC, stringIjfxDI0, uintShwujo6, {from: accounts[1]});
		const stringzbLyjpI = await BACMARSLPTOKENPoolLm1lnL.symbol.call({from: accounts[1]});
		const uint256xAzSabm = await BACMARSLPTOKENPoolLm1lnL.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolLm1lnL.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBsK7sTR = "0x0000000000000000000000000000000000000001"
		const addresseBeZbI = accounts[2]
		const addressq9Xiq78 = accounts[3]
		const BACMARSLPTOKENPoolRuXOtmE = await BACMARSLPTOKENPool.new(addressBsK7sTR, addresseBeZbI, addressq9Xiq78, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolRuXOtmE.exit.call({from: accounts[0]});
		const uint256U2OD1xt = await BACMARSLPTOKENPoolRuXOtmE.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string6aMWxw = "VwaLEbKYIb9Uhh"
		const stringMXZCCPG = "SO2aE6feJDK3JgnMusgH6vetlapJBw1sMa7Y4KHjnyq6ULxzb6Wepouun5Lasv"
		const uintae4tHJm = BigInt("212")
		const BACMARSLPTOKENPoolVpzHvgr = await BACMARSLPTOKENPool.new(string6aMWxw, stringMXZCCPG, uintae4tHJm, {from: accounts[4]});
		const uintHQXO0mb = BigInt("1889")
		const address5Mff3o = accounts[4]
		const uint256oTK7T7y = await BACMARSLPTOKENPoolVpzHvgr.stake.call(uintHQXO0mb, {from: accounts[1]});
		const uint256qvEgRV2 = await BACMARSLPTOKENPoolVpzHvgr.totalSupply.call({from: accounts[5]});
		const uint256Tco8MzB = await BACMARSLPTOKENPoolVpzHvgr.earned.call(address5Mff3o, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPNH1xc4 = "bI5yJKEzve3KweWhuHlMaNNrOcaTxC5E8KeYvXAXbmIB8s7AcnjNl7ccBl2Q"
		const stringmP9Ntky = "GT3WbIIy2BbOlokNMlA2VzsCmb2"
		const uintzKlBHf = BigInt("128")
		const BACMARSLPTOKENPoolnXE9ruk = await BACMARSLPTOKENPool.new(stringPNH1xc4, stringmP9Ntky, uintzKlBHf, {from: accounts[3]});
		const addressfF1xBw = accounts[4]
		const addressOfYEtXo = accounts[1]
		const uint256jd3GiYC = await BACMARSLPTOKENPoolnXE9ruk.earned.call(addressfF1xBw, {from: accounts[2]});
		await BACMARSLPTOKENPoolnXE9ruk.exit.call({from: accounts[3]});
		const uint256q0wd0q = await BACMARSLPTOKENPoolnXE9ruk.totalSupply.call({from: accounts[0]});
		const uint256gW5JPqB = await BACMARSLPTOKENPoolnXE9ruk.totalSupply.call({from: accounts[2]});
		const uint256lbQTzxB = await BACMARSLPTOKENPoolnXE9ruk.balanceOf.call(addressOfYEtXo, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFJmOITs = "01oG5doPwGxQ7O9Ud5V7yY1m6FlnUodCp"
		const stringIj3q6r4 = "qheLjRde0oqOzIhk0HQErnBAQ8VkXO11BxDkFt18MONUO"
		const uintSYqxok3 = BigInt("3")
		const BACMARSLPTOKENPoolg4XVVy = await BACMARSLPTOKENPool.new(stringFJmOITs, stringIj3q6r4, uintSYqxok3, {from: accounts[4]});
		const uintAxPNxni = BigInt("1160")
		const uintbjWEEky = BigInt("1958")
		const uint256fVsGCK = await BACMARSLPTOKENPoolg4XVVy.notifyRewardAmount.call(uintAxPNxni, {from: accounts[4]});
		const uint256AVYmJTh = await BACMARSLPTOKENPoolg4XVVy.withdraw.call(uintbjWEEky, {from: accounts[0]});
		const stringgLB10BM = await BACMARSLPTOKENPoolg4XVVy.symbol.call({from: accounts[4]});
		const uint256EyByoX4 = await BACMARSLPTOKENPoolg4XVVy.totalSupply.call({from: accounts[5]});
	});
})
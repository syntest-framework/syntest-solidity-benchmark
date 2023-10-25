const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintj3E0C62 = BigInt("241")
		const BACMARSLPTOKENPoolv6IU9Us = await BACMARSLPTOKENPool.new(stringORNsUR1, stringJLirNdd, uintj3E0C62, {from: accounts[0]});
		const uint256FrjxDC7 = await BACMARSLPTOKENPoolv6IU9Us.getRewardForDuration.call({from: accounts[4]});
		const stringYGA5Dwi = await BACMARSLPTOKENPoolv6IU9Us.name.call({from: accounts[2]});
		const uint8WwMzmrQ = await BACMARSLPTOKENPoolv6IU9Us.decimals.call({from: accounts[4]});
		const stringSvObnAV = await BACMARSLPTOKENPoolv6IU9Us.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressFG632L2 = accounts[1]
		const addressqguoG7B = accounts[2]
		const addresshoOp9IP = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolSIOk06o = await BACMARSLPTOKENPool.new(addressFG632L2, addressqguoG7B, addresshoOp9IP, {from: accounts[5]});
		const uintBlp0SZq = BigInt("1513")
		const uintg5qyEVr = BigInt("65")
		const uint256IvYW17X = await BACMARSLPTOKENPoolSIOk06o.notifyRewardAmount.call(uintBlp0SZq, {from: accounts[4]});
		const uint256t7Tv2Xa = await BACMARSLPTOKENPoolSIOk06o.stake.call(uintg5qyEVr, {from: accounts[1]});
		await BACMARSLPTOKENPoolSIOk06o.getReward.call({from: accounts[5]});
		const uint256XwCzJ0I = await BACMARSLPTOKENPoolSIOk06o.totalSupply.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolSIOk06o.notifyRewardAmount.call(uintBlp0SZq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUvH7SbK = "IyOj6n8PxxGxWtPbPAoDEe3981BUpPCkrLm9NzeODkz85ywss3x5bjqZDnvLsCBoDnUnwKrUejzDod1"
		const stringTT1hb7r = "u4cfdE8yZySl9DzoJaAY6P9i588tnbIIClFoGaO5cY5eW5iA6A3inPsSJBLQ55LNX"
		const uintDy4GfiN = BigInt("228")
		const BACMARSLPTOKENPoolAXfA0kC = await BACMARSLPTOKENPool.new(stringUvH7SbK, stringTT1hb7r, uintDy4GfiN, {from: accounts[1]});
		const uintiZzkqYc = BigInt("924")
		await BACMARSLPTOKENPoolAXfA0kC.getReward.call({from: accounts[5]});
		const uint8tiM2JkI = await BACMARSLPTOKENPoolAXfA0kC.decimals.call({from: accounts[2]});
		const uint256XdOucNB = await BACMARSLPTOKENPoolAXfA0kC.notifyRewardAmount.call(uintiZzkqYc, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvGi7fDV = accounts[2]
		const addresszF2CQ9k = "0x0000000000000000000000000000000000000001"
		const addressudVXXLb = accounts[0]
		const BACMARSLPTOKENPoolh60Vt6 = await BACMARSLPTOKENPool.new(addressvGi7fDV, addresszF2CQ9k, addressudVXXLb, {from: accounts[4]});
		await BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]});
		const uint2563TezUB = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolh60Vt6.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressN6ZY5wD = accounts[3]
		const addressy4xpqcN = accounts[5]
		const addressPttfZts = accounts[3]
		const BACMARSLPTOKENPoolWPpY5nZ = await BACMARSLPTOKENPool.new(addressN6ZY5wD, addressy4xpqcN, addressPttfZts, {from: accounts[0]});
		const uintcnVeHwF = BigInt("1755")
		const uint256shgTnrG = await BACMARSLPTOKENPoolWPpY5nZ.stake.call(uintcnVeHwF, {from: "0x0000000000000000000000000000000000000001"});
		const stringMseB1z9 = await BACMARSLPTOKENPoolWPpY5nZ.name.call({from: accounts[0]});
		await BACMARSLPTOKENPoolWPpY5nZ.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolWPpY5nZ.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolWPpY5nZ.stake.call(uintcnVeHwF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressR8tme2 = accounts[1]
		const addressB8pPqJp = accounts[3]
		const addressS7ymZIx = accounts[0]
		const BACMARSLPTOKENPooly8ssE5X = await BACMARSLPTOKENPool.new(addressR8tme2, addressB8pPqJp, addressS7ymZIx, {from: "0x0000000000000000000000000000000000000001"});
		const uintEXqxni = BigInt("2047")
		const byteNzgMHLx = "0x0a0704071b0d0106040419190f021a0c191d011a15120e191b13161701020714"
		const byteZx2cbyN = "0x06151d0f06151615090e1e151101201f0e1b0a0c1701081517180103081a011d"
		const uintiDrKDmw = BigInt("120")
		const uintm5dPDRL = BigInt("269")
		const uintjj3NMi0 = BigInt("1286")
		const addressZXKalUZ = accounts[0]
		const uint8ndJRJvN = await BACMARSLPTOKENPooly8ssE5X.decimals.call({from: accounts[4]});
		const uint256vIR31cz = await BACMARSLPTOKENPooly8ssE5X.notifyRewardAmount.call(uintEXqxni, {from: accounts[3]});
		const string3oF2i2 = await BACMARSLPTOKENPooly8ssE5X.symbol.call({from: accounts[0]});
		const uint256vtOzhKM = await BACMARSLPTOKENPooly8ssE5X.stakeWithPermit.call(uintjj3NMi0, uintm5dPDRL, uintiDrKDmw, byteZx2cbyN, byteNzgMHLx, {from: accounts[3]});
		const uint256r87RVEN = await BACMARSLPTOKENPooly8ssE5X.earned.call(addressZXKalUZ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTQckz3N = "tahhayp6jrrG1KVmpXJMnCLWd"
		const stringKnVQ1RT = "PjSTOHVoSbVi8ACU9bSCN79xiuCytXRAknNaYyoraAsLw64uKWifo9Gn6dAUkhju"
		const uintppPeGAT = BigInt("210")
		const BACMARSLPTOKENPoolUae9mDp = await BACMARSLPTOKENPool.new(stringTQckz3N, stringKnVQ1RT, uintppPeGAT, {from: "0x0000000000000000000000000000000000000001"});
		const addressiQSHwjC = accounts[5]
		const uintEuGVNNR = BigInt("15")
		const addressoQf3er7 = accounts[0]
		const uint256CDgM8VQ = await BACMARSLPTOKENPoolUae9mDp.totalSupply.call({from: accounts[2]});
		const addresscLefbv = await BACMARSLPTOKENPoolUae9mDp.updateReward.call(addressiQSHwjC, {from: accounts[4]});
		const uint256Nd1xWNo = await BACMARSLPTOKENPoolUae9mDp.withdraw.call(uintEuGVNNR, {from: accounts[0]});
		const uint256x5byI5O = await BACMARSLPTOKENPoolUae9mDp.balanceOf.call(addressoQf3er7, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressT54lDo = accounts[2]
		const addressQAkmuMw = "0x0000000000000000000000000000000000000001"
		const addressVM9DtgC = accounts[0]
		const BACMARSLPTOKENPoolh60Vt6 = await BACMARSLPTOKENPool.new(addressT54lDo, addressQAkmuMw, addressVM9DtgC, {from: accounts[4]});
		await BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]});
		const uint2563TezUB = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolh60Vt6.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolh60Vt6.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPAmVAGh = accounts[0]
		const addressxUF8ORs = accounts[2]
		const addressWkJ46S7 = accounts[0]
		const BACMARSLPTOKENPooliGzpkOg = await BACMARSLPTOKENPool.new(addressPAmVAGh, addressxUF8ORs, addressWkJ46S7, {from: accounts[2]});
		const uintDOK8ddP = BigInt("1901")
		const uintNRPi6L = BigInt("816")
		const uint256yBPyWqQ = await BACMARSLPTOKENPooliGzpkOg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256kBr60rC = await BACMARSLPTOKENPooliGzpkOg.withdraw.call(uintDOK8ddP, {from: accounts[4]});
		const uint256Vwot4VQ = await BACMARSLPTOKENPooliGzpkOg.notifyRewardAmount.call(uintNRPi6L, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gy3F1PC = await BACMARSLPTOKENPooliGzpkOg.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256yBPyWqQ, BigInt("0"))
		await expect(BACMARSLPTOKENPooliGzpkOg.withdraw.call(uintDOK8ddP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringajhFZgk = "pz7yfnrQzVh0qXpCniinMUYHwP7BKkenoTwsEeDyYFY1QJ1HAMV94TlRDJ7w37U"
		const stringRthz7sb = "vFsZPCEgJEaHSKFERXRH7RlNIwSC88Q4V8SRn3TVEKcBqs"
		const uintKxphv0p = BigInt("102")
		const BACMARSLPTOKENPoolcWDIU7G = await BACMARSLPTOKENPool.new(stringajhFZgk, stringRthz7sb, uintKxphv0p, {from: accounts[1]});
		await BACMARSLPTOKENPoolcWDIU7G.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256BUh9SgN = await BACMARSLPTOKENPoolcWDIU7G.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolcWDIU7G.getReward.call({from: accounts[2]});
		const uint256ueVnqn5 = await BACMARSLPTOKENPoolcWDIU7G.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshHusLCE = accounts[2]
		const addresslVvxvp = "0x0000000000000000000000000000000000000001"
		const addressLhIIXT6 = accounts[0]
		const BACMARSLPTOKENPoolh60Vt6 = await BACMARSLPTOKENPool.new(addresshHusLCE, addresslVvxvp, addressLhIIXT6, {from: accounts[4]});
		const uintEdcfuzB = BigInt("891")
		await BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]});
		const uint256ftgnAQP = await BACMARSLPTOKENPoolh60Vt6.notifyRewardAmount.call(uintEdcfuzB, {from: accounts[2]});
		await BACMARSLPTOKENPoolh60Vt6.exit.call({from: accounts[3]});
		const uint2563TezUB = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolh60Vt6.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKHQvFWN = accounts[2]
		const addressf0c2GdY = "0x0000000000000000000000000000000000000001"
		const addressPEniNd = accounts[0]
		const BACMARSLPTOKENPoolh60Vt6 = await BACMARSLPTOKENPool.new(addressKHQvFWN, addressf0c2GdY, addressPEniNd, {from: accounts[4]});
		const byteYIUhYq4 = "0x1f041e1e15060401130d0c02010e14091a06140413160306190c1b20091d130c"
		const bytebJjitXy = "0x181c0e1a0f0219150601001f1d07071c141c071310161b1e12071b080a0f0d06"
		const uinthKHSu5R = BigInt("246")
		const uintdyDB4eE = BigInt("609")
		const uintlghNxCo = BigInt("1463")
		const uint256uOTWSBu = await BACMARSLPTOKENPoolh60Vt6.stakeWithPermit.call(uintlghNxCo, uintdyDB4eE, uinthKHSu5R, bytebJjitXy, byteYIUhYq4, {from: accounts[1]});
		await BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]});
		const uint2563TezUB = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringdtuE2ta = await BACMARSLPTOKENPoolh60Vt6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolh60Vt6.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolh60Vt6.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolh60Vt6.stakeWithPermit.call(uintlghNxCo, uintdyDB4eE, uinthKHSu5R, bytebJjitXy, byteYIUhYq4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfQDGKw9 = accounts[3]
		const addressjYiiui = accounts[5]
		const addressebJetHh = accounts[3]
		const BACMARSLPTOKENPoolWPpY5nZ = await BACMARSLPTOKENPool.new(addressfQDGKw9, addressjYiiui, addressebJetHh, {from: accounts[0]});
		const uintJAjHd52 = BigInt("1754")
		const uintuOoceNF = BigInt("1304")
		const uint256QX24H0e = await BACMARSLPTOKENPoolWPpY5nZ.getRewardForDuration.call({from: accounts[0]});
		const uint256shgTnrG = await BACMARSLPTOKENPoolWPpY5nZ.stake.call(uintJAjHd52, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolWPpY5nZ.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolWPpY5nZ.exit.call({from: accounts[3]});
		const uint256wChxQe2 = await BACMARSLPTOKENPoolWPpY5nZ.withdraw.call(uintuOoceNF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QX24H0e, BigInt("0"))
		await expect(BACMARSLPTOKENPoolWPpY5nZ.stake.call(uintJAjHd52, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressS6HN91b = accounts[0]
		const addressFmQkLIs = accounts[2]
		const addressxFlLRu5 = accounts[2]
		const BACMARSLPTOKENPoolOuyOqYb = await BACMARSLPTOKENPool.new(addressS6HN91b, addressFmQkLIs, addressxFlLRu5, {from: accounts[0]});
		const addressKkLSOrt = accounts[3]
		const uint9pMTfL = BigInt("1256")
		await BACMARSLPTOKENPoolOuyOqYb.getReward.call({from: accounts[0]});
		const uint256h0rq3Xm = await BACMARSLPTOKENPoolOuyOqYb.balanceOf.call(addressKkLSOrt, {from: accounts[0]});
		const uint256kUEq0UY = await BACMARSLPTOKENPoolOuyOqYb.stake.call(uint9pMTfL, {from: accounts[1]});
		const stringucCbpB = await BACMARSLPTOKENPoolOuyOqYb.symbol.call({from: accounts[4]});
		const uint8HsvgHeK = await BACMARSLPTOKENPoolOuyOqYb.decimals.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolOuyOqYb.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyRtT16 = accounts[2]
		const addressp5rkcwR = "0x0000000000000000000000000000000000000001"
		const addressL7OjFlr = accounts[0]
		const BACMARSLPTOKENPoolh60Vt6 = await BACMARSLPTOKENPool.new(addressyRtT16, addressp5rkcwR, addressL7OjFlr, {from: accounts[4]});
		const uint256bQkS33M = await BACMARSLPTOKENPoolh60Vt6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IPNymML = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]});
		const uint2563TezUB = await BACMARSLPTOKENPoolh60Vt6.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256IPNymML, BigInt("0"))
		assert.equal(uint256bQkS33M, BigInt("0"))
		await expect(BACMARSLPTOKENPoolh60Vt6.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringammPAin = "cZhnQmx4dT"
		const stringWjevbLx = "CkTXGvXyM34pcg0pKFoFItzD5OYbyUaLS7Vkhu6M1Y1qMus7"
		const uinthCVSHyf = BigInt("226")
		const BACMARSLPTOKENPoolpRBPnCT = await BACMARSLPTOKENPool.new(stringammPAin, stringWjevbLx, uinthCVSHyf, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolpRBPnCT.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolpRBPnCT.exit.call({from: accounts[4]});
		const stringTyrMEO = await BACMARSLPTOKENPoolpRBPnCT.symbol.call({from: accounts[1]});
		const uint256rOjhxL = await BACMARSLPTOKENPoolpRBPnCT.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringS0BMZ2s = "8A"
		const stringTij6473 = "oeQvk1Y9T76NiwCkQeelotQsYcQlnBiAnVenOyC5iyCvia0hi4FSPMA"
		const uintjQ5yI8M = BigInt("127")
		const BACMARSLPTOKENPoolrHNlVs0 = await BACMARSLPTOKENPool.new(stringS0BMZ2s, stringTij6473, uintjQ5yI8M, {from: accounts[2]});
		const byteZ98I9k3 = "0x0511020b070e1a0112060b021b01181a1007061a191713170a1d0e0e181e171e"
		const byter3vO3Xs = "0x0c0411180b08141b200918010910081101170a1005081f0e070317140f130516"
		const uintnnqW65I = BigInt("208")
		const uintKBRfEZx = BigInt("1909")
		const uintcNVpg0I = BigInt("740")
		await BACMARSLPTOKENPoolrHNlVs0.exit.call({from: accounts[4]});
		const uint256XjAbt1m = await BACMARSLPTOKENPoolrHNlVs0.stakeWithPermit.call(uintcNVpg0I, uintKBRfEZx, uintnnqW65I, byter3vO3Xs, byteZ98I9k3, {from: accounts[1]});
		const uint256hxQaybB = await BACMARSLPTOKENPoolrHNlVs0.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint8jxxf4kb = await BACMARSLPTOKENPoolrHNlVs0.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolrHNlVs0.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWU246Kq = "aukeebLj1eIDSctcJypa8zH8LUHmMdEJcP2wSpv660n4mTxDSnnxwerU9s818OYCHch2sOHY3zqyERJ4bHVQIdJ"
		const stringpy3SmSH = "Ow9WyvVMWVwjaLFLGFqeC65hj9NebykPaQ3R2LYFU5KajWEkq1K"
		const uintA7MuwxZ = BigInt("160")
		const BACMARSLPTOKENPoolmfHQ2FY = await BACMARSLPTOKENPool.new(stringWU246Kq, stringpy3SmSH, uintA7MuwxZ, {from: accounts[0]});
		const addresshHwDtb8 = accounts[0]
		const addresstUSYVe6 = accounts[1]
		const addressvr5SodH = await BACMARSLPTOKENPoolmfHQ2FY.updateReward.call(addresshHwDtb8, {from: accounts[4]});
		const uint256GQHjLi = await BACMARSLPTOKENPoolmfHQ2FY.earned.call(addresstUSYVe6, {from: accounts[2]});
		const stringPwWo6gy = await BACMARSLPTOKENPoolmfHQ2FY.symbol.call({from: accounts[2]});
		const uint890mzv7 = await BACMARSLPTOKENPoolmfHQ2FY.decimals.call({from: accounts[2]});
		const stringbfgsb8O = await BACMARSLPTOKENPoolmfHQ2FY.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkaHjDqT = "IJm304q"
		const stringZWzmuNT = "I5TOfa95lVoKk5GXHhypuiCmJKVgFTTY48CsJABHDYGLOmWh"
		const uintHAnGdaJ = BigInt("208")
		const BACMARSLPTOKENPoolejGNDuh = await BACMARSLPTOKENPool.new(stringkaHjDqT, stringZWzmuNT, uintHAnGdaJ, {from: accounts[4]});
		const uintikB4fJq = BigInt("914")
		const uint256l75zqXV = await BACMARSLPTOKENPoolejGNDuh.totalSupply.call({from: accounts[1]});
		const uint256C84hy0d = await BACMARSLPTOKENPoolejGNDuh.notifyRewardAmount.call(uintikB4fJq, {from: accounts[1]});
		const uint256um3QgzP = await BACMARSLPTOKENPoolejGNDuh.totalSupply.call({from: accounts[3]});
		const stringIvYaBB6 = await BACMARSLPTOKENPoolejGNDuh.name.call({from: accounts[5]});
		const uint256m6ViAhx = await BACMARSLPTOKENPoolejGNDuh.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNhmrdK7 = "CvC1T4jmOZDe7LQ1HqYlHIuF"
		const stringa8n5E6K = "4CdxXcRNMQRi3NNNL0isG9ziEsGKbaW6ceI3FtShTthuLzA1VHhgXm5lNUGTUnDgpykktflgrpdpsIFpv99qhCp"
		const uintqDSSJyC = BigInt("204")
		const BACMARSLPTOKENPoolg9qy6dm = await BACMARSLPTOKENPool.new(stringNhmrdK7, stringa8n5E6K, uintqDSSJyC, {from: accounts[4]});
		const uintN7jBwuO = BigInt("1367")
		const uint256CwliZLD = await BACMARSLPTOKENPoolg9qy6dm.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256fwzyjL = await BACMARSLPTOKENPoolg9qy6dm.notifyRewardAmount.call(uintN7jBwuO, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQkvDECV = "kUzunWJevhbwScjR7yvFfBV3qJHK5BDiGH9WXSxLEpYVYkN9RphyV"
		const stringtpGRf3a = "XWsaLV312SxuAHpQUKVr4JrUweTa8fg6K99NP8P4gJOojY8ngEsyohdpSN2vY276UQr4fIfbrie1r"
		const uintNBkotRC = BigInt("135")
		const BACMARSLPTOKENPoolgD0lmOj = await BACMARSLPTOKENPool.new(stringQkvDECV, stringtpGRf3a, uintNBkotRC, {from: accounts[2]});
		const address8ykyyA = "0x0000000000000000000000000000000000000001"
		const uintBP27j2W = BigInt("1256")
		const uintO8tX6UX = BigInt("2010")
		const addressD430aYO = accounts[5]
		const uint256jdMVfyx = await BACMARSLPTOKENPoolgD0lmOj.balanceOf.call(address8ykyyA, {from: accounts[5]});
		const uint256LcpR2HV = await BACMARSLPTOKENPoolgD0lmOj.stake.call(uintBP27j2W, {from: accounts[5]});
		await BACMARSLPTOKENPoolgD0lmOj.getReward.call({from: accounts[3]});
		const uint256zNadYa = await BACMARSLPTOKENPoolgD0lmOj.notifyRewardAmount.call(uintO8tX6UX, {from: accounts[4]});
		const uint256fVcwIdo = await BACMARSLPTOKENPoolgD0lmOj.balanceOf.call(addressD430aYO, {from: accounts[5]});
		const uint8SY4Elo7 = await BACMARSLPTOKENPoolgD0lmOj.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuNcOHNd = "o4iXIg1Pxnx1NuBUlcdvlKvdbqZOkfm1"
		const strings8uxsoT = "4ktocvvRPy11iHVjrSUYATnRPU"
		const uintz7YSScP = BigInt("160")
		const BACMARSLPTOKENPoolOlRjaNT = await BACMARSLPTOKENPool.new(stringuNcOHNd, strings8uxsoT, uintz7YSScP, {from: accounts[4]});
		const byteKDakEaJ = "0x100e1411021e071e081906100f00051e1d1419150720051c0e20030a1f170319"
		const byteHNR6Emw = "0x14160b200a0d1b0d201b0c1a010e1e030b18031817081309060e0b010f201903"
		const uintDAKzwZ = BigInt("215")
		const uintYGQ7gPT = BigInt("1008")
		const uintr8wv8Sl = BigInt("1502")
		const uintyuGQB1g = BigInt("1929")
		const uint256qoCWHeG = await BACMARSLPTOKENPoolOlRjaNT.stakeWithPermit.call(uintr8wv8Sl, uintYGQ7gPT, uintDAKzwZ, byteHNR6Emw, byteKDakEaJ, {from: accounts[1]});
		await BACMARSLPTOKENPoolOlRjaNT.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256OrjtIuw = await BACMARSLPTOKENPoolOlRjaNT.withdraw.call(uintyuGQB1g, {from: accounts[3]});
		const uint256r417DNU = await BACMARSLPTOKENPoolOlRjaNT.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string5T45Bf = "S9LuAD4xmPoId5HzPzIEV6gl7aYcQNB4AOLV5gGVJIj9d5noAaJDKFDEOLE8SGCnQlTTa6nWwlO1pbkBVb8lnut"
		const stringGmEVPM = "1CuOMSnyJX31H5NLfcUfiryp4vXvu93q9uaa7VY36geZ2oiuRPBfaJsm8JPmrb1mWR53xk5fUR1WJthTPApmdNbVW3y"
		const uintAw2dvBv = BigInt("73")
		const BACMARSLPTOKENPoolqwJOjmd = await BACMARSLPTOKENPool.new(string5T45Bf, stringGmEVPM, uintAw2dvBv, {from: accounts[5]});
		const bytetYZOwlf = "0x101e160017030a1d000708050d08170f0b0e0212120815111f1d1105110e0f17"
		const bytew4nWg5r = "0x0c1b1b051d06140c0f1d1f0018141d120420060c0f13091a1018151f0709040f"
		const uintxb3Xqo = BigInt("184")
		const uintE32XLIU = BigInt("235")
		const uintZPsePsm = BigInt("1810")
		const uintx1iR7w3 = BigInt("97")
		await BACMARSLPTOKENPoolqwJOjmd.getReward.call({from: accounts[3]});
		const uint256QKCOUk = await BACMARSLPTOKENPoolqwJOjmd.stakeWithPermit.call(uintZPsePsm, uintE32XLIU, uintxb3Xqo, bytew4nWg5r, bytetYZOwlf, {from: accounts[0]});
		const uint256V8tq0D = await BACMARSLPTOKENPoolqwJOjmd.stake.call(uintx1iR7w3, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNdmLi29 = "tvHm8z6rnnyEQnHmvw6M4uMw74m8o9SWPOch5TbIjDvxKv6kMBv8jdlL74"
		const stringfLvN4ng = "uNhhGhUEeVp"
		const uintaHJ9lji = BigInt("16")
		const BACMARSLPTOKENPoolvUYLjux = await BACMARSLPTOKENPool.new(stringNdmLi29, stringfLvN4ng, uintaHJ9lji, {from: accounts[4]});
		const uintPStL6ZT = BigInt("1009")
		const uintcT1rMgH = BigInt("1071")
		const addressPCfuy9Q = accounts[0]
		const uint256VKy9cI8 = await BACMARSLPTOKENPoolvUYLjux.notifyRewardAmount.call(uintPStL6ZT, {from: accounts[5]});
		const uint256TCOvS7R = await BACMARSLPTOKENPoolvUYLjux.withdraw.call(uintcT1rMgH, {from: accounts[1]});
		const uint256jNG9PnB = await BACMARSLPTOKENPoolvUYLjux.earned.call(addressPCfuy9Q, {from: accounts[2]});
		const uint256RDpVMXt = await BACMARSLPTOKENPoolvUYLjux.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDFV5KbV = "thnbfcqeFBBCcPr5Gs6wksKSQrFthQ5PcgHwETxM4jWx2"
		const stringVzDfkhb = "g4taXYsPHeTVfJ7QWH36luieSAjlXsJmtrLU2D"
		const uintrKkUEFC = BigInt("5")
		const BACMARSLPTOKENPoolWmpWEt = await BACMARSLPTOKENPool.new(stringDFV5KbV, stringVzDfkhb, uintrKkUEFC, {from: accounts[5]});
		const byteBtaUtk1 = "0x1d130813050e1b140b031f19191f1b01100203181014131d160c011800041a0a"
		const byteOinN539 = "0x1c070419100e121a021519160e061e0a120f10131f1a1713050a1e0208071d00"
		const uintQ8riXX = BigInt("81")
		const uintwiNJZCL = BigInt("387")
		const uintF95tx9t = BigInt("923")
		const uint8WyEhDi = await BACMARSLPTOKENPoolWmpWEt.decimals.call({from: accounts[3]});
		const uint8WvyPnKQ = await BACMARSLPTOKENPoolWmpWEt.decimals.call({from: accounts[0]});
		const uint256WWQK8hu = await BACMARSLPTOKENPoolWmpWEt.getRewardForDuration.call({from: accounts[3]});
		const uint256slqBhnf = await BACMARSLPTOKENPoolWmpWEt.stakeWithPermit.call(uintF95tx9t, uintwiNJZCL, uintQ8riXX, byteOinN539, byteBtaUtk1, {from: accounts[5]});
		const stringb8aUQs1 = await BACMARSLPTOKENPoolWmpWEt.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringW0aHHeu = "Ppkda2GEmmEeTb4LsPa10kxQwul8Zp3SflHXV0hjsurh8tkYzVR2ABbxAfZAXCK6wkF"
		const stringlb92ehN = "7JHRD8Jejwqcnbu"
		const uintT5z4BUP = BigInt("249")
		const BACMARSLPTOKENPoolBGCeL7p = await BACMARSLPTOKENPool.new(stringW0aHHeu, stringlb92ehN, uintT5z4BUP, {from: accounts[5]});
		const uintuSNMr9t = BigInt("1511")
		const uinthrltnnr = BigInt("901")
		const stringKOZD4m = await BACMARSLPTOKENPoolBGCeL7p.name.call({from: accounts[3]});
		const uint8MVdBa01 = await BACMARSLPTOKENPoolBGCeL7p.decimals.call({from: accounts[1]});
		const uint256dJdoq53 = await BACMARSLPTOKENPoolBGCeL7p.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolBGCeL7p.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cCtGdw = await BACMARSLPTOKENPoolBGCeL7p.stake.call(uintuSNMr9t, {from: accounts[3]});
		const uint256aoypQ0q = await BACMARSLPTOKENPoolBGCeL7p.withdraw.call(uinthrltnnr, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRFVRvLc = "lFw3taiLGfXVaV7"
		const stringNeaQIfM = "lifDbDOP967Nc52uf3advntEcLYY27cfX3yFOgI9MOOal4Df"
		const uintW6h77fk = BigInt("70")
		const BACMARSLPTOKENPoolUgHKb9 = await BACMARSLPTOKENPool.new(stringRFVRvLc, stringNeaQIfM, uintW6h77fk, {from: accounts[2]});
		await BACMARSLPTOKENPoolUgHKb9.exit.call({from: accounts[3]});
		const uint8vZid2Qr = await BACMARSLPTOKENPoolUgHKb9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJ9C0XAy = "QeqYtNT5RxwN7KA04wYr6fKz65UE1GwlpKwKL8Bnkbf5YdvdhhsIN9iK6iMGxsfSBPuzSguM7IJx9tP"
		const stringPap80d = "hAm7ZOnBkbNh3gQ2OXQjE"
		const uintwZUKu4T = BigInt("208")
		const BACMARSLPTOKENPool79leRw = await BACMARSLPTOKENPool.new(stringJ9C0XAy, stringPap80d, uintwZUKu4T, {from: accounts[1]});
		const addressANCj9T = accounts[4]
		const uint256wpGD2GB = await BACMARSLPTOKENPool79leRw.earned.call(addressANCj9T, {from: accounts[1]});
		const uint256Egrfz8Q = await BACMARSLPTOKENPool79leRw.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPool79leRw.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuByJsja = "EwwhlDzN1JfLDDsuCEwTvspiEhrxxCSDnHcY4GxQyMm2xbgV6tXMYxDkMWlMsqxWSEHFlC9P1qAIuzCQo78OCeay1B"
		const stringnWuf83M = "iyx9xQMSh44p5Mr"
		const uintjdNAm5F = BigInt("143")
		const BACMARSLPTOKENPoolx3XD2q4 = await BACMARSLPTOKENPool.new(stringuByJsja, stringnWuf83M, uintjdNAm5F, {from: accounts[1]});
		const bytetoiXnPL = "0x0c0f0c1e02101d131a010e0c081c041e0f1f1007040f151503131a161f1c021c"
		const bytes1VrG5L = "0x1803181d0f040c17010e0910131f150f0804090a1e08020019111d0d030a0b08"
		const uintkESiCru = BigInt("81")
		const uintFwLphm = BigInt("1175")
		const uintlHy6NWp = BigInt("10")
		const uintaTJ5A4 = BigInt("191")
		const addressnyffzLh = accounts[3]
		const uint256JjeoK37 = await BACMARSLPTOKENPoolx3XD2q4.stakeWithPermit.call(uintlHy6NWp, uintFwLphm, uintkESiCru, bytes1VrG5L, bytetoiXnPL, {from: accounts[4]});
		const uint256GI8KBq0 = await BACMARSLPTOKENPoolx3XD2q4.notifyRewardAmount.call(uintaTJ5A4, {from: accounts[5]});
		const stringNyw5g1I = await BACMARSLPTOKENPoolx3XD2q4.name.call({from: accounts[2]});
		const uint256hCEhctO = await BACMARSLPTOKENPoolx3XD2q4.balanceOf.call(addressnyffzLh, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeXhLrcf = "gyeHixnDQ6Kzl53juRcu"
		const stringGanTfEP = "bH6QsvzkG3HFUnX9WRVAiXBDl74H4M79lyfrDbSjoONH8R70nWbkksjgkFHz8RL"
		const uintsk0KS0A = BigInt("166")
		const BACMARSLPTOKENPooleA5EBt = await BACMARSLPTOKENPool.new(stringeXhLrcf, stringGanTfEP, uintsk0KS0A, {from: accounts[0]});
		const uintXAUeGX = BigInt("1029")
		await BACMARSLPTOKENPooleA5EBt.getReward.call({from: accounts[3]});
		const uint256vXQ9JUK = await BACMARSLPTOKENPooleA5EBt.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vzzqPqN = await BACMARSLPTOKENPooleA5EBt.notifyRewardAmount.call(uintXAUeGX, {from: accounts[1]});
		const uint256xCBzwUS = await BACMARSLPTOKENPooleA5EBt.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm1D6QHN = "MDRJeS9CVI6Mu4hMuNx1Kfmu0d3ODkIzfOm"
		const stringUFmqoJ4 = "EMUdtFzImFqNTXMTyts9WwaI9kqN2r"
		const uintt6CiAG = BigInt("110")
		const BACMARSLPTOKENPoolotuPefs = await BACMARSLPTOKENPool.new(stringm1D6QHN, stringUFmqoJ4, uintt6CiAG, {from: accounts[2]});
		const uintwjahtYL = BigInt("554")
		const uint256EQ9dkd = await BACMARSLPTOKENPoolotuPefs.getRewardForDuration.call({from: accounts[2]});
		const uint256jPsPpBy = await BACMARSLPTOKENPoolotuPefs.notifyRewardAmount.call(uintwjahtYL, {from: accounts[2]});
		const uint256wOEqOfN = await BACMARSLPTOKENPoolotuPefs.getRewardForDuration.call({from: accounts[0]});
		const stringrBNd0JB = await BACMARSLPTOKENPoolotuPefs.name.call({from: accounts[4]});
		const stringegRr28d = await BACMARSLPTOKENPoolotuPefs.symbol.call({from: accounts[2]});
		const uint256SX9lG1G = await BACMARSLPTOKENPoolotuPefs.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringijDdRSb = "5PBnQDikhYEnoeXPzorniarLFnrAOJyOsB61rjAscJohiWSMbhMTaJ5fjE9bnvqv2xwdiDPEtd9uIREKxDIjS2K8zC9ybeIabfA"
		const stringmRB6LDs = "A19uqYXjYQbSWB62fAEl75n2xcrxorK26gEAde"
		const uintAikc9UA = BigInt("175")
		const BACMARSLPTOKENPoolmrple0F = await BACMARSLPTOKENPool.new(stringijDdRSb, stringmRB6LDs, uintAikc9UA, {from: accounts[2]});
		const addresspuLWPjy = accounts[1]
		const uintoOheHsQ = BigInt("155")
		const uint256aHNER5L = await BACMARSLPTOKENPoolmrple0F.balanceOf.call(addresspuLWPjy, {from: accounts[4]});
		const stringjKADRbq = await BACMARSLPTOKENPoolmrple0F.symbol.call({from: accounts[4]});
		const uint256J0JVLwr = await BACMARSLPTOKENPoolmrple0F.notifyRewardAmount.call(uintoOheHsQ, {from: accounts[4]});
		const uint256eOvqraM = await BACMARSLPTOKENPoolmrple0F.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVcTDtOG = "cfjUkvspCtWY8De2GgBtZFFv7QGu3LwUWVUEftwEHdC9K1OudOzwX2cJsNVjKsb"
		const stringU0ljnK = "Z1EyaYHmampJ9VOINPRlaxDclda8Bupyz"
		const uint9HICME = BigInt("55")
		const BACMARSLPTOKENPoolwxFCnl = await BACMARSLPTOKENPool.new(stringVcTDtOG, stringU0ljnK, uint9HICME, {from: accounts[0]});
		const byteoVz6Ulk = "0x1015120b1d0d0005110c191a1a1820150d1a091c140713150f1b17111a0c151f"
		const byteRM6GMCm = "0x0e190d1707101e0109021a200f08041902170210051507151316141d1b091f00"
		const uintYWYbQHa = BigInt("253")
		const uintAMM2zE5 = BigInt("809")
		const uintIZ7ViRu = BigInt("695")
		const uint256YF8ObSd = await BACMARSLPTOKENPoolwxFCnl.stakeWithPermit.call(uintIZ7ViRu, uintAMM2zE5, uintYWYbQHa, byteRM6GMCm, byteoVz6Ulk, {from: accounts[0]});
		const uint256oHt1SAo = await BACMARSLPTOKENPoolwxFCnl.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256h3J79HF = await BACMARSLPTOKENPoolwxFCnl.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolwxFCnl.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEh35l4h = "x8"
		const stringt2QTzVm = "bei331dZLkP7mUqG2bGH1fiWusZbOQy89S8vvaJXtaTsKcYNQtmmrCfr3bmIilt8LPzwJM3It"
		const uintKbFfYvo = BigInt("37")
		const BACMARSLPTOKENPoolTzdEiz4 = await BACMARSLPTOKENPool.new(stringEh35l4h, stringt2QTzVm, uintKbFfYvo, {from: accounts[3]});
		const uintNPVOSh9 = BigInt("355")
		const addressf6Sl0qI = accounts[3]
		const uint256XCDEP6D = await BACMARSLPTOKENPoolTzdEiz4.totalSupply.call({from: accounts[5]});
		const uint256TKmjtpz = await BACMARSLPTOKENPoolTzdEiz4.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gz07cV4 = await BACMARSLPTOKENPoolTzdEiz4.notifyRewardAmount.call(uintNPVOSh9, {from: accounts[3]});
		const uint256F2iuKFe = await BACMARSLPTOKENPoolTzdEiz4.balanceOf.call(addressf6Sl0qI, {from: accounts[0]});
		await BACMARSLPTOKENPoolTzdEiz4.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolTzdEiz4.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string0Sl3K0 = "WiWANEnjIR"
		const stringRD5O2kH = "UuYffzMCXSBClBts"
		const uintDk4FUOJ = BigInt("74")
		const BACMARSLPTOKENPoolPxcqE9S = await BACMARSLPTOKENPool.new(string0Sl3K0, stringRD5O2kH, uintDk4FUOJ, {from: accounts[4]});
		const addressqEZVG2H = accounts[2]
		const uintBkR38gH = BigInt("291")
		const addressh5RtZta = await BACMARSLPTOKENPoolPxcqE9S.updateReward.call(addressqEZVG2H, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eeiTHt = await BACMARSLPTOKENPoolPxcqE9S.notifyRewardAmount.call(uintBkR38gH, {from: accounts[3]});
		const stringgZz0bOV = await BACMARSLPTOKENPoolPxcqE9S.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSGd5I0 = "pkANEjJBVuZWHZINq15iB8xszwmOnEWzT4Bcx2TK9svbKVX7tPtuxwGApKoxHv6i1zBwqUTSvzqLW34Z7Ezjm"
		const stringiuqO6tW = "uw3uLxL6K9jUmgnBI6N86J3NfvolTfPCGljzj7Z12du3OdIRjeqI2YP7GUqUYJ3OVwJAvLWK"
		const uintfQpW3de = BigInt("225")
		const BACMARSLPTOKENPoolhNxUg8 = await BACMARSLPTOKENPool.new(stringSGd5I0, stringiuqO6tW, uintfQpW3de, {from: accounts[1]});
		const addressscOCifi = accounts[5]
		const uintSDw3w3N = BigInt("1116")
		const uintU709NJO = BigInt("372")
		const uintOstDLnz = BigInt("265")
		const addressm6VdzH = await BACMARSLPTOKENPoolhNxUg8.updateReward.call(addressscOCifi, {from: accounts[3]});
		const uint256hlVzHYf = await BACMARSLPTOKENPoolhNxUg8.withdraw.call(uintSDw3w3N, {from: accounts[5]});
		const uint256SWZgdCC = await BACMARSLPTOKENPoolhNxUg8.withdraw.call(uintU709NJO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cYdRAjJ = await BACMARSLPTOKENPoolhNxUg8.stake.call(uintOstDLnz, {from: accounts[1]});
		await BACMARSLPTOKENPoolhNxUg8.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringH1WL8vP = "2rEWrfTUuCR5QtgHC0LPOEbyKPpwlAclANRkgiE6Jn3JqNRKWQ2mc"
		const stringAZh36zY = "tsVKs3bCKUXPMhCcpQUlojGT8RGglQEk4lYtVI7x2i2f7"
		const uintLg31Guv = BigInt("220")
		const BACMARSLPTOKENPooln1zzdDE = await BACMARSLPTOKENPool.new(stringH1WL8vP, stringAZh36zY, uintLg31Guv, {from: accounts[0]});
		const uintU9nWda = BigInt("1007")
		const uint256JRF8zc6 = await BACMARSLPTOKENPooln1zzdDE.notifyRewardAmount.call(uintU9nWda, {from: accounts[0]});
		const uint256cpDzgTZ = await BACMARSLPTOKENPooln1zzdDE.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eXWdVs9 = await BACMARSLPTOKENPooln1zzdDE.totalSupply.call({from: accounts[4]});
		const stringisIv09P = await BACMARSLPTOKENPooln1zzdDE.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsnRqY49 = "g9US1xdmXpO4niViNEBInrsbGslaJLwiOzxRJ"
		const stringtVMkQP8 = "lIwiqztUfSvXs8J99MhRH1xXARWddxmJCRiIUcwg2OOTW6tW"
		const uintEk9Me7v = BigInt("154")
		const BACMARSLPTOKENPoolw2JYkHo = await BACMARSLPTOKENPool.new(stringsnRqY49, stringtVMkQP8, uintEk9Me7v, {from: accounts[3]});
		const byteFn18iCX = "0x190705021a1f0d0f130d0c1b08181f0c181408090c0e151e1b1f0e1d13170d13"
		const bytesHcgZvt = "0x011e0f1e110b1a0f11130b0a0d17051819021f120418200b16161a0314130b0b"
		const uintMucworQ = BigInt("232")
		const uintNBDKVgg = BigInt("1796")
		const uintpcUYycx = BigInt("740")
		const uintlF33TyH = BigInt("1275")
		const uintcaRiVcD = BigInt("1128")
		const uintY6HGiph = BigInt("1433")
		const uint256eOZL5pA = await BACMARSLPTOKENPoolw2JYkHo.stakeWithPermit.call(uintpcUYycx, uintNBDKVgg, uintMucworQ, bytesHcgZvt, byteFn18iCX, {from: accounts[3]});
		const uint256FXjzc94 = await BACMARSLPTOKENPoolw2JYkHo.withdraw.call(uintlF33TyH, {from: accounts[4]});
		await BACMARSLPTOKENPoolw2JYkHo.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256HqkPqDK = await BACMARSLPTOKENPoolw2JYkHo.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256gaPX5Z1 = await BACMARSLPTOKENPoolw2JYkHo.withdraw.call(uintcaRiVcD, {from: accounts[4]});
		const uint256ROF5sx6 = await BACMARSLPTOKENPoolw2JYkHo.stake.call(uintY6HGiph, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvr2p19K = "csn7wKk3ZPPdFBiphQbyTeObda7TormhC3bCTMKus"
		const stringQRJEpJA = "C6oElZjG5zbnmSE575xrcf83GazgOdbR6EGiur89QVWcSbe9YcO8jexUsSNpS91FnCwWUoSS6lOHp3Jv4n5"
		const uintq6Jakc = BigInt("123")
		const BACMARSLPTOKENPoolwce91Y6 = await BACMARSLPTOKENPool.new(stringvr2p19K, stringQRJEpJA, uintq6Jakc, {from: accounts[2]});
		const address8OKkV0 = "0x0000000000000000000000000000000000000001"
		const uintIsh1Vp5 = BigInt("1361")
		const byteTUiKPGy = "0x1c05140b080f150400031315101600200c0f09020c13110517121c1e13101e13"
		const byteYBILAFA = "0x051f15030e071e1c080e170a1f100d14191d1214101e19050c040f1907120d08"
		const uintc6chyO = BigInt("75")
		const uinthAfVIA = BigInt("489")
		const uintAS0MRDH = BigInt("284")
		const uint256A7bZ4qc = await BACMARSLPTOKENPoolwce91Y6.earned.call(address8OKkV0, {from: accounts[1]});
		const uint256iSozsmK = await BACMARSLPTOKENPoolwce91Y6.stake.call(uintIsh1Vp5, {from: accounts[3]});
		const uint256LfCbhAV = await BACMARSLPTOKENPoolwce91Y6.stakeWithPermit.call(uintAS0MRDH, uinthAfVIA, uintc6chyO, byteYBILAFA, byteTUiKPGy, {from: accounts[2]});
		const uint256FJ0NrCI = await BACMARSLPTOKENPoolwce91Y6.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolwce91Y6.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPC45XHY = "tu8LUQMDz8UECwzDWVkXYexg4ELaqaNXrp7lQpVbiNCkbyXQ3wg8thxCavM6OIWem5ICHKLlu"
		const stringivSCTE = "80jAHDSJaVeTUsLAD0amMSn5T6VpPRQ"
		const uintg3VELVa = BigInt("111")
		const BACMARSLPTOKENPooln9Fiuza = await BACMARSLPTOKENPool.new(stringPC45XHY, stringivSCTE, uintg3VELVa, {from: accounts[5]});
		const uintfM6gd06 = BigInt("1979")
		const uint256eXqJNLn = await BACMARSLPTOKENPooln9Fiuza.totalSupply.call({from: accounts[5]});
		const uint256TjZ7jAE = await BACMARSLPTOKENPooln9Fiuza.rewardPerToken.call({from: accounts[5]});
		const uint256dH9hNUu = await BACMARSLPTOKENPooln9Fiuza.stake.call(uintfM6gd06, {from: accounts[5]});
		const uint256bet2zNY = await BACMARSLPTOKENPooln9Fiuza.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings404hR4 = "PocLmDcSbVsCdQebVlhLLd2P9Hm0ds6OJIQty7WITL"
		const stringYcjKkn5 = "644umG5NvRQn4ZPCyZmG4dzUWOA"
		const uintQu4ciTQ = BigInt("103")
		const BACMARSLPTOKENPoolkeMWLFm = await BACMARSLPTOKENPool.new(strings404hR4, stringYcjKkn5, uintQu4ciTQ, {from: accounts[3]});
		const stringNTmEf7R = await BACMARSLPTOKENPoolkeMWLFm.symbol.call({from: accounts[4]});
		const uint256gnX2NcJ = await BACMARSLPTOKENPoolkeMWLFm.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolkeMWLFm.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTXIbWIY = "zghd9wVgHDUE5qV7k8UdEJLhojAmelIGdFsqax2272pqy3hg8R8RoQWv7nW7H2a3WmbgMt9Mj7uUm"
		const stringJpfK5R2 = "ulUH7OmiFEuHx4DSuP84y1NFmNyph3d9pf7FSyg"
		const uintUG3bUsE = BigInt("157")
		const BACMARSLPTOKENPoolCNRzj8z = await BACMARSLPTOKENPool.new(stringTXIbWIY, stringJpfK5R2, uintUG3bUsE, {from: accounts[1]});
		const address39Sy8c = accounts[4]
		const addressagsWuO = accounts[5]
		const uintfS9JyfS = BigInt("63")
		const addressYIbkaL = await BACMARSLPTOKENPoolCNRzj8z.updateReward.call(address39Sy8c, {from: accounts[1]});
		const uint256fLvvjRk = await BACMARSLPTOKENPoolCNRzj8z.earned.call(addressagsWuO, {from: accounts[0]});
		const uint256kXqyit7 = await BACMARSLPTOKENPoolCNRzj8z.totalSupply.call({from: accounts[3]});
		const uint256akNVeTW = await BACMARSLPTOKENPoolCNRzj8z.stake.call(uintfS9JyfS, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjq04VY2 = "2Y8oMnmSImCYvhnEz8"
		const stringhf2jPJL = "q2Ro1FXUP726CLiZl1DprEXeo6bVysJB7hQfObflwrVCnPKcQx3pvL6D5SumwQHHymsFJ5E04r"
		const uintivK4ey = BigInt("12")
		const BACMARSLPTOKENPoolPcnS57R = await BACMARSLPTOKENPool.new(stringjq04VY2, stringhf2jPJL, uintivK4ey, {from: accounts[1]});
		const byte2HhSRO = "0x160a0b0c120a1614030c05071c09170b1e1b1418040d04200a191e161d031c14"
		const byteczlQ0h7 = "0x06091e131f05181b1b1e190615170401101a16081f010217091703141e1d0b02"
		const uintTe2lkqA = BigInt("67")
		const uintU2SWure = BigInt("1129")
		const uintVTJXIup = BigInt("212")
		const uint256oBa64bs = await BACMARSLPTOKENPoolPcnS57R.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringtVdwTw = await BACMARSLPTOKENPoolPcnS57R.symbol.call({from: accounts[1]});
		const uint256Os88P2w = await BACMARSLPTOKENPoolPcnS57R.stakeWithPermit.call(uintVTJXIup, uintU2SWure, uintTe2lkqA, byteczlQ0h7, byte2HhSRO, {from: accounts[1]});
		await BACMARSLPTOKENPoolPcnS57R.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlX3PZk = "Wf7O7Y28plzxypNTGm9DeuBaRcF71XLQaSbP2UFsy0EXcvNwPneA85iRFO4tD51szji"
		const stringG6Cnscb = "bYcMemYBmh2ralMEwLq3WiUXRgQCUuLYQpjWCSR6DHWjEwTU8I0Azn3eawoouYE"
		const uintZHPTTGy = BigInt("97")
		const BACMARSLPTOKENPoolFBiIhGG = await BACMARSLPTOKENPool.new(stringlX3PZk, stringG6Cnscb, uintZHPTTGy, {from: accounts[4]});
		const address9oItpH = accounts[2]
		const uint256bJkNioA = await BACMARSLPTOKENPoolFBiIhGG.balanceOf.call(address9oItpH, {from: accounts[1]});
		const uint256gP8nKZw = await BACMARSLPTOKENPoolFBiIhGG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringK3WIfle = "bCV4Eimb6dud1BqOT7kGvOha8w7rQnpqMO2BvJxaqNNviGUFzbJjmXieHjhqi7L7yuuvPXdDFIXkcN71WDaoXCoZj5Y6"
		const stringsSFgtvP = "Ev3q3yfalGh4fxT9zxziMw3Mh"
		const uinth2LDWWZ = BigInt("51")
		const BACMARSLPTOKENPoolesLCVYi = await BACMARSLPTOKENPool.new(stringK3WIfle, stringsSFgtvP, uinth2LDWWZ, {from: accounts[4]});
		const addressXKEqqMT = accounts[4]
		const uintoAPCyjm = BigInt("1831")
		const bytecW6Ca8A = "0x0502171b1d1814130d0308080c0213110d1d111e13190c111a051a0710151009"
		const byteK5e4G08 = "0x18190e1a0302081e01090a19031901031b1d1e04190d180f19080c1514071911"
		const uintOKtqHpA = BigInt("2")
		const uintY8Mpdg7 = BigInt("999")
		const uintzC3tQ2O = BigInt("1499")
		const stringAlYPQG = await BACMARSLPTOKENPoolesLCVYi.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressoUenuLD = await BACMARSLPTOKENPoolesLCVYi.updateReward.call(addressXKEqqMT, {from: accounts[5]});
		const uint256Au2shD1 = await BACMARSLPTOKENPoolesLCVYi.notifyRewardAmount.call(uintoAPCyjm, {from: accounts[5]});
		const uint256Ru2cBfc = await BACMARSLPTOKENPoolesLCVYi.stakeWithPermit.call(uintzC3tQ2O, uintY8Mpdg7, uintOKtqHpA, byteK5e4G08, bytecW6Ca8A, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqRdbuxO = "YToEMn3pRPHO2kzYgIpLkfTXSJRRGl5g8OXLogi"
		const stringwS5UDT5 = "uyu8hBk84j2DndvdTpuV6vlmutEsSxY6ZEXBOq5p9kL"
		const uintcCVIG28 = BigInt("111")
		const BACMARSLPTOKENPooluNwXeb = await BACMARSLPTOKENPool.new(stringqRdbuxO, stringwS5UDT5, uintcCVIG28, {from: accounts[1]});
		const uint8jI7W6Bc = await BACMARSLPTOKENPooluNwXeb.decimals.call({from: accounts[1]});
		const uint256VlQO9LW = await BACMARSLPTOKENPooluNwXeb.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbos3lqK = "0NElM4pUIjAHRwWTMCXSOIf2aoRcDRsYBYccj2ezr0eMx4mZw3QAcHMWJBWJxDeebzNjrKxY"
		const stringoKQP0S0 = "Idw6Orc4333UDOq4kGayZSmq5rJqKai4iMdSxnwd0opalNHrtcOseM1bZlSyqYrSKFdNWJPf1ToOD8upLwrdco87dBevQH1b8"
		const uintQwNqpx6 = BigInt("21")
		const BACMARSLPTOKENPoolWEvYVFb = await BACMARSLPTOKENPool.new(stringbos3lqK, stringoKQP0S0, uintQwNqpx6, {from: accounts[3]});
		const byteyINVTM = "0x0a0e16091e10071c0d0d06041a0411191c0907200d060f020d19021c0d13121b"
		const byteo7YZ64M = "0x120218171901011f161a0a04150b031f030503080406160e040d170b06111f0f"
		const uintoo1Nj5E = BigInt("118")
		const uintPFb7QtP = BigInt("272")
		const uintOPIcFSx = BigInt("1336")
		const addressckPtO0d = accounts[1]
		const uinto5rXElw = BigInt("411")
		const uint256fAmhe07 = await BACMARSLPTOKENPoolWEvYVFb.stakeWithPermit.call(uintOPIcFSx, uintPFb7QtP, uintoo1Nj5E, byteo7YZ64M, byteyINVTM, {from: accounts[0]});
		const uint256zeshwwm = await BACMARSLPTOKENPoolWEvYVFb.earned.call(addressckPtO0d, {from: accounts[3]});
		const uint256x8UPUw = await BACMARSLPTOKENPoolWEvYVFb.notifyRewardAmount.call(uinto5rXElw, {from: accounts[4]});
		await BACMARSLPTOKENPoolWEvYVFb.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256iA3hKo8 = await BACMARSLPTOKENPoolWEvYVFb.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolWEvYVFb.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwc0SSrb = "xXSmvFKIKEZzmPljUXVs9c2YeWnhOUrLxsI3YELhYDIJ8OYWxPG2O4oRATbLB2mrJTuQSNih7rDCSuNHevC8eYmhR"
		const stringRVOdWIb = "VaL0Rca17zlUKDYBBGiFNsnVXiV6j4kCR7gPD98iXusnjW94xUDxuOBJfJ"
		const uintwfrkmpo = BigInt("198")
		const BACMARSLPTOKENPoolYG1z8Dx = await BACMARSLPTOKENPool.new(stringwc0SSrb, stringRVOdWIb, uintwfrkmpo, {from: accounts[1]});
		const uintm6ldUJl = BigInt("1567")
		const addressZr966iC = accounts[3]
		const uint256V5lb81u = await BACMARSLPTOKENPoolYG1z8Dx.notifyRewardAmount.call(uintm6ldUJl, {from: accounts[4]});
		await BACMARSLPTOKENPoolYG1z8Dx.nonReentrant.call({from: accounts[1]});
		const uint256dEKvgJ5 = await BACMARSLPTOKENPoolYG1z8Dx.balanceOf.call(addressZr966iC, {from: accounts[2]});
		await BACMARSLPTOKENPoolYG1z8Dx.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTb4n0V9 = "BLO"
		const stringQ3LnG3v = "kI0ipTjPWjjaTHTcbzXZdJ52bvXWLHBbPoIDlye3qNRK4xdZFrzByRxvedIWDm2NUB93HKurlRr3Mb8a7SPdh7eUbkLV0WtLP"
		const uintjO2WzI5 = BigInt("133")
		const BACMARSLPTOKENPool58c4wa = await BACMARSLPTOKENPool.new(stringTb4n0V9, stringQ3LnG3v, uintjO2WzI5, {from: accounts[3]});
		const uintURkeYp = BigInt("1461")
		const uint256ymyOzH = await BACMARSLPTOKENPool58c4wa.stake.call(uintURkeYp, {from: accounts[4]});
		const uint256HthMw4a = await BACMARSLPTOKENPool58c4wa.getRewardForDuration.call({from: accounts[4]});
	});
})
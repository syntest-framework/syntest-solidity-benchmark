const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringhH0cNrT = "mJ5FMmUveNHO1ozeipT4HDnDPa"
		const stringNXTX8zl = "L74evjoc2IL41PE4bqAj7KecAyJKi8guTIDSOP6f2I9BglQYGAtBFkgQrAqZjkycuLVwQ5Nzxo3ehN12CeN6pYkNEQ"
		const uintvGt7o2X = BigInt("251")
		const BACMARSLPTOKENPoolRAuQDG = await BACMARSLPTOKENPool.new(stringhH0cNrT, stringNXTX8zl, uintvGt7o2X, {from: accounts[1]});
		const uintV1yRhs = BigInt("859")
		const uint8c6SS3jc = await BACMARSLPTOKENPoolRAuQDG.decimals.call({from: accounts[3]});
		const stringYaz8AYp = await BACMARSLPTOKENPoolRAuQDG.name.call({from: accounts[5]});
		const uint8hTcrcJZ = await BACMARSLPTOKENPoolRAuQDG.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolRAuQDG.exit.call({from: accounts[0]});
		const uint256xfiVspV = await BACMARSLPTOKENPoolRAuQDG.stake.call(uintV1yRhs, {from: accounts[3]});
		await BACMARSLPTOKENPoolRAuQDG.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressuDf9BSF = accounts[1]
		const addressUWErsol = accounts[2]
		const addressGVD32W4 = accounts[0]
		const BACMARSLPTOKENPoolIM39GWc = await BACMARSLPTOKENPool.new(addressuDf9BSF, addressUWErsol, addressGVD32W4, {from: accounts[1]});
		const bytersPlSpn = "0x0d011208151a0c0e1d1c0e2005191c1009180a0c190a1b0508031d15060b0f0c"
		const byteRExKgS9 = "0x030e1219180c160601180d0d1e1f101b1c00031a1e0b0716090e1b071f0d1c09"
		const uintRWS1PoF = BigInt("59")
		const uintRVFYjFT = BigInt("910")
		const uintHxd2auB = BigInt("1528")
		const uint3w1039 = BigInt("831")
		const uint256FKoyz1M = await BACMARSLPTOKENPoolIM39GWc.rewardPerToken.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolIM39GWc.nonReentrant.call({from: accounts[1]});
//		const uint256FRburz = await BACMARSLPTOKENPoolIM39GWc.stakeWithPermit.call(uintHxd2auB, uintRVFYjFT, uintRWS1PoF, byteRExKgS9, bytersPlSpn, {from: accounts[2]});
//		const uint256i9BLSDU = await BACMARSLPTOKENPoolIM39GWc.withdraw.call(uint3w1039, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FKoyz1M, BigInt("0"))
		await expect(BACMARSLPTOKENPoolIM39GWc.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvDuRcd = accounts[1]
		const addresslXS9za = accounts[3]
		const addressZsrT3M = accounts[3]
		const BACMARSLPTOKENPoolhB8HrzV = await BACMARSLPTOKENPool.new(addressvDuRcd, addresslXS9za, addressZsrT3M, {from: accounts[2]});
		const uintBjh1Awf = BigInt("1982")
//		const uint256JPMGC5C = await BACMARSLPTOKENPoolhB8HrzV.withdraw.call(uintBjh1Awf, {from: accounts[1]});
//		const uint256oSL8kFH = await BACMARSLPTOKENPoolhB8HrzV.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256fAQJoP5 = await BACMARSLPTOKENPoolhB8HrzV.getRewardForDuration.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolhB8HrzV.withdraw.call(uintBjh1Awf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNlTKKt = "lj44I9Coztz4cr3XqZLWT11Lxeq8Tlvq5kioYsLl5762NzA6EgqtYSwQENUKnWOiZplPchvQcH"
		const stringpxReVGl = "8Z2ET2pWW8GWkrdNGLY6gtye1fS8Ss7JsHH1ErOq4ERKFNBFcjlJTBWZ9hK5eyfPN7"
		const uinta4kw2eG = BigInt("2")
		const BACMARSLPTOKENPoolh0QGMq9 = await BACMARSLPTOKENPool.new(stringNlTKKt, stringpxReVGl, uinta4kw2eG, {from: accounts[2]});
		const addressJ6guTUf = "0x0000000000000000000000000000000000000001"
		const uintNGi7v3w = BigInt("466")
		const addressrZNlz4H = accounts[2]
		const addressDzNxfvv = accounts[4]
		await BACMARSLPTOKENPoolh0QGMq9.getReward.call({from: accounts[2]});
		const uint256NpS9mGd = await BACMARSLPTOKENPoolh0QGMq9.balanceOf.call(addressJ6guTUf, {from: accounts[3]});
		const uint256yN6koEB = await BACMARSLPTOKENPoolh0QGMq9.notifyRewardAmount.call(uintNGi7v3w, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tfcpiHi = await BACMARSLPTOKENPoolh0QGMq9.earned.call(addressrZNlz4H, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolh0QGMq9.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256inV4cOw = await BACMARSLPTOKENPoolh0QGMq9.earned.call(addressDzNxfvv, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG4S2n48 = "ODu0ks5oaOygAU99btxTmtisfxuArjprPck0dqT2YbPLnRDT1CDF6xnB0l85XpX7HP76RCl1KD6"
		const stringan9j5mh = "bQA5DcwQmZ7t6x90A9fw6ARhHG62BvxcCjhJKjYBega"
		const uintLb3GeZt = BigInt("21")
		const BACMARSLPTOKENPoolhUHXqQu = await BACMARSLPTOKENPool.new(stringG4S2n48, stringan9j5mh, uintLb3GeZt, {from: accounts[4]});
		const uintis3IGO5 = BigInt("1784")
		const addressFWAQehp = accounts[3]
		const uint256Wyz93zm = await BACMARSLPTOKENPoolhUHXqQu.notifyRewardAmount.call(uintis3IGO5, {from: accounts[1]});
		await BACMARSLPTOKENPoolhUHXqQu.getReward.call({from: accounts[4]});
		const addressaUJE4Uk = await BACMARSLPTOKENPoolhUHXqQu.updateReward.call(addressFWAQehp, {from: accounts[5]});
		const uint256y6jgs0k = await BACMARSLPTOKENPoolhUHXqQu.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSQMGUlT = accounts[0]
		const addressg95Wdk0 = accounts[5]
		const addressQ1WRpob = accounts[1]
		const BACMARSLPTOKENPoolFDH8K1 = await BACMARSLPTOKENPool.new(addressSQMGUlT, addressg95Wdk0, addressQ1WRpob, {from: accounts[1]});
		const uintO9JHwM = BigInt("549")
//		const uint256ytPobkw = await BACMARSLPTOKENPoolFDH8K1.notifyRewardAmount.call(uintO9JHwM, {from: accounts[1]});
//		await BACMARSLPTOKENPoolFDH8K1.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolFDH8K1.notifyRewardAmount.call(uintO9JHwM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkUePyRv = "c2D7B8Pj4ENaYKzjLFdtFDfscR8q734SLy4wm5fwpu8JewSgDZjPWcPrSbDx2qV7"
		const stringeEctEQH = "Vh8mlEkx19gpT9imdw2TlxYull736cL"
		const uintJWCJTDh = BigInt("152")
		const BACMARSLPTOKENPoolhPnA55 = await BACMARSLPTOKENPool.new(stringkUePyRv, stringeEctEQH, uintJWCJTDh, {from: accounts[3]});
		await BACMARSLPTOKENPoolhPnA55.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256J3xlnVA = await BACMARSLPTOKENPoolhPnA55.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCqH7VWs = "3upOfcxSU4CHa6hlgxRRemX16BcV"
		const stringuat3m6p = "hRHFn2d7Vy8NEgKDA7SvGg9XWvNkibhzSdHrvtEf7XOCHGZ1RfXzbtInegxOQppCRUdpoJJNseKccVhnORcQ1"
		const uintQkRguqw = BigInt("133")
		const BACMARSLPTOKENPooljSJ80Lm = await BACMARSLPTOKENPool.new(stringCqH7VWs, stringuat3m6p, uintQkRguqw, {from: accounts[3]});
		const addressyuXepMx = accounts[2]
		const addressWhod4Md = accounts[2]
		const uint256z2Uwtsa = await BACMARSLPTOKENPooljSJ80Lm.rewardPerToken.call({from: accounts[1]});
		const uint256jiz7Qar = await BACMARSLPTOKENPooljSJ80Lm.totalSupply.call({from: accounts[3]});
		const uint256IPNLCnb = await BACMARSLPTOKENPooljSJ80Lm.earned.call(addressyuXepMx, {from: accounts[4]});
		const addressFjJTx3U = await BACMARSLPTOKENPooljSJ80Lm.updateReward.call(addressWhod4Md, {from: accounts[1]});
		const stringmqy1EOO = await BACMARSLPTOKENPooljSJ80Lm.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGtaFjob = accounts[0]
		const addressL8YCrGa = accounts[1]
		const addressFGGf5ac = accounts[3]
		const BACMARSLPTOKENPoolOmIMJcJ = await BACMARSLPTOKENPool.new(addressGtaFjob, addressL8YCrGa, addressFGGf5ac, {from: accounts[4]});
		const bytexuYoobI = "0x0c0c151504101c020e0e0e190c121a17181818120815011f100d05100c0e121e"
		const byteFZQmZzO = "0x0d0c00100a191a111219080712201b08081a1c1a0f160a080700091b00041d13"
		const uintN9J7CxY = BigInt("224")
		const uintfR2y2M = BigInt("141")
		const uintVeshoW = BigInt("700")
//		await BACMARSLPTOKENPoolOmIMJcJ.exit.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolOmIMJcJ.getReward.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolOmIMJcJ.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256eAicOpz = await BACMARSLPTOKENPoolOmIMJcJ.stakeWithPermit.call(uintVeshoW, uintfR2y2M, uintN9J7CxY, byteFZQmZzO, bytexuYoobI, {from: accounts[0]});
//		await BACMARSLPTOKENPoolOmIMJcJ.getReward.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolOmIMJcJ.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUH28oR = accounts[1]
		const addressq8dOPXy = accounts[2]
		const addressg7oGPtI = accounts[0]
		const BACMARSLPTOKENPoolIM39GWc = await BACMARSLPTOKENPool.new(addressUH28oR, addressq8dOPXy, addressg7oGPtI, {from: accounts[1]});
		const uintm7BoTfl = BigInt("736")
		const uintqtU2PZe = BigInt("1678")
		const uintFlNrXra = BigInt("831")
		const uint256FKoyz1M = await BACMARSLPTOKENPoolIM39GWc.rewardPerToken.call({from: accounts[4]});
//		const uint256grF5bxK = await BACMARSLPTOKENPoolIM39GWc.stake.call(uintm7BoTfl, {from: accounts[2]});
//		const uint256sd5Dmwb = await BACMARSLPTOKENPoolIM39GWc.stake.call(uintqtU2PZe, {from: accounts[4]});
//		await BACMARSLPTOKENPoolIM39GWc.nonReentrant.call({from: accounts[1]});
//		const uint256i9BLSDU = await BACMARSLPTOKENPoolIM39GWc.withdraw.call(uintFlNrXra, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FKoyz1M, BigInt("0"))
		await expect(BACMARSLPTOKENPoolIM39GWc.stake.call(uintm7BoTfl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWk3uVxF = accounts[1]
		const addressIoGSfmW = accounts[0]
		const addressJA4W8WQ = accounts[5]
		const BACMARSLPTOKENPoolYatItBh = await BACMARSLPTOKENPool.new(addressWk3uVxF, addressIoGSfmW, addressJA4W8WQ, {from: accounts[4]});
		const addressbBj75hJ = accounts[4]
		const uintnaiC3vA = BigInt("1835")
		const uintDGrYsWt = BigInt("1940")
		const uint256XJMl2Wx = await BACMARSLPTOKENPoolYatItBh.balanceOf.call(addressbBj75hJ, {from: accounts[1]});
//		const uint256AV5k2GW = await BACMARSLPTOKENPoolYatItBh.withdraw.call(uintnaiC3vA, {from: accounts[2]});
//		const uint256Q2G01X1 = await BACMARSLPTOKENPoolYatItBh.stake.call(uintDGrYsWt, {from: accounts[3]});
//		const stringiDdOH0F = await BACMARSLPTOKENPoolYatItBh.name.call({from: accounts[0]});

		assert.equal(uint256XJMl2Wx, BigInt("0"))
		await expect(BACMARSLPTOKENPoolYatItBh.withdraw.call(uintnaiC3vA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWXHZb9t = "Hoh4qfT8xoL6THL4MogiXEqoz981ycPCi4LtJvRngHRx"
		const stringS4zFnKq = "q09X"
		const uintVeDJ4pY = BigInt("225")
		const BACMARSLPTOKENPoolshTZBiG = await BACMARSLPTOKENPool.new(stringWXHZb9t, stringS4zFnKq, uintVeDJ4pY, {from: accounts[2]});
		const addresssWsFbVT = accounts[5]
		const addressNljeho = accounts[0]
		const uint256Yu3NiKh = await BACMARSLPTOKENPoolshTZBiG.getRewardForDuration.call({from: accounts[3]});
		const uint256ABgh0Cx = await BACMARSLPTOKENPoolshTZBiG.earned.call(addresssWsFbVT, {from: accounts[1]});
		const uint256UVdqvY8 = await BACMARSLPTOKENPoolshTZBiG.earned.call(addressNljeho, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lhWyZJy = await BACMARSLPTOKENPoolshTZBiG.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJacmA68 = "0x0000000000000000000000000000000000000001"
		const addresssT07Qfw = "0x0000000000000000000000000000000000000001"
		const addressyDWQ2v7 = accounts[1]
		const BACMARSLPTOKENPoolSz4RxuU = await BACMARSLPTOKENPool.new(addressJacmA68, addresssT07Qfw, addressyDWQ2v7, {from: accounts[1]});
		const uinthCJwHE9 = BigInt("1947")
		const uint256K2RLo8W = await BACMARSLPTOKENPoolSz4RxuU.totalSupply.call({from: accounts[5]});
		const uint256EZdhuv = await BACMARSLPTOKENPoolSz4RxuU.totalSupply.call({from: accounts[3]});
//		const uint256OUBias = await BACMARSLPTOKENPoolSz4RxuU.stake.call(uinthCJwHE9, {from: accounts[3]});

		assert.equal(uint256EZdhuv, BigInt("0"))
		assert.equal(uint256K2RLo8W, BigInt("0"))
		await expect(BACMARSLPTOKENPoolSz4RxuU.stake.call(uinthCJwHE9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIvhaRXv = "zGnyTulNA7hCEteS0qaS0n7fy8Qkurdd57Os5VpYQQNsX7ubmChD8TpiNIYQFFG2f2oEUa0"
		const stringniJm5R = "d2OhGCRFwRctYOBVAR"
		const uintYFT792 = BigInt("56")
		const BACMARSLPTOKENPoolQhFTnx = await BACMARSLPTOKENPool.new(stringIvhaRXv, stringniJm5R, uintYFT792, {from: accounts[3]});
		const uintBuloZDx = BigInt("202")
		const uint256dPEuVL = await BACMARSLPTOKENPoolQhFTnx.stake.call(uintBuloZDx, {from: accounts[3]});
		const stringEponLDQ = await BACMARSLPTOKENPoolQhFTnx.name.call({from: accounts[3]});
		await BACMARSLPTOKENPoolQhFTnx.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressH4y14c1 = accounts[3]
		const addressNWyFOl1 = accounts[5]
		const addressofbc5xo = accounts[3]
		const BACMARSLPTOKENPoolyo1v4p = await BACMARSLPTOKENPool.new(addressH4y14c1, addressNWyFOl1, addressofbc5xo, {from: "0x0000000000000000000000000000000000000001"});
		const byteZ6xVFmc = "0x180f0f180d07010f160306051d011d0c03150206170302090112151a0c0a1708"
		const byteaKYrsHW = "0x13151b1c0f07062004190f0a0203131708161d120f0c080e16160c0106141f1d"
		const uint4j98vF = BigInt("80")
		const uinth7Haoax = BigInt("749")
		const uintglYnMHT = BigInt("867")
		const addressQVwsCwC = accounts[2]
		const uint256cM80TT = await BACMARSLPTOKENPoolyo1v4p.stakeWithPermit.call(uintglYnMHT, uinth7Haoax, uint4j98vF, byteaKYrsHW, byteZ6xVFmc, {from: accounts[4]});
		const uint256eUCypKQ = await BACMARSLPTOKENPoolyo1v4p.balanceOf.call(addressQVwsCwC, {from: accounts[3]});
		const uint8UPWCSRW = await BACMARSLPTOKENPoolyo1v4p.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrsIBIIy = "ZdxJK8tQS7DUpOR8CFJjEEUIcyOJPcH8jPyWomzgYYNm4rp2HfwolUflM77JAhmyDPc1ft"
		const stringU3Tljyq = "2SFw7Wy2zkt2iHHQMKig"
		const uintMoPRjB2 = BigInt("22")
		const BACMARSLPTOKENPoolFZrA5zM = await BACMARSLPTOKENPool.new(stringrsIBIIy, stringU3Tljyq, uintMoPRjB2, {from: "0x0000000000000000000000000000000000000001"});
		const byteSaq2al = "0x1508091c201a131b1c1f1c1d19121e190416030009111d08121b191a1a1d0a10"
		const bytewsoidt7 = "0x130b1e081c1c1f02100204100d101215090f0c1f0a1e0620050c150a130f0502"
		const uintZ7h7FMr = BigInt("232")
		const uintfqXxa7A = BigInt("1988")
		const uintgIXLsH6 = BigInt("856")
		const uinttU7JTgy = BigInt("1701")
		const uint256IrbVglL = await BACMARSLPTOKENPoolFZrA5zM.stakeWithPermit.call(uintgIXLsH6, uintfqXxa7A, uintZ7h7FMr, bytewsoidt7, byteSaq2al, {from: accounts[2]});
		const uint256JJtYDJ4 = await BACMARSLPTOKENPoolFZrA5zM.stake.call(uinttU7JTgy, {from: accounts[4]});
		const uint8PmpwISf = await BACMARSLPTOKENPoolFZrA5zM.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmvu97tf = "ij53aclgrmFIt7Roxp2R8oOz3KhxatEh9y7Ir493I24GnFwAPNOfA5IB3Zgs0OxBgy9QvxL3ckEm4NP1"
		const stringLA2PFbJ = "26UAki3UIXyPxRCTqx52GEfnxD"
		const uinteWZZSxE = BigInt("176")
		const BACMARSLPTOKENPoolwIfYrzr = await BACMARSLPTOKENPool.new(stringmvu97tf, stringLA2PFbJ, uinteWZZSxE, {from: accounts[4]});
		const uintXoENws5 = BigInt("1212")
		const uint256ZFMEK1 = await BACMARSLPTOKENPoolwIfYrzr.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256whDAv0o = await BACMARSLPTOKENPoolwIfYrzr.totalSupply.call({from: accounts[3]});
		const uint256hYG75DG = await BACMARSLPTOKENPoolwIfYrzr.withdraw.call(uintXoENws5, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressD81LF8 = "0x0000000000000000000000000000000000000001"
		const addressQmFzYC8 = "0x0000000000000000000000000000000000000001"
		const addressGbrrR8y = accounts[1]
		const BACMARSLPTOKENPoolSz4RxuU = await BACMARSLPTOKENPool.new(addressD81LF8, addressQmFzYC8, addressGbrrR8y, {from: accounts[1]});
		const byteiXzDVDM = "0x141410150805161c00120318051e0d1c0c03090e0d11090d1b03111a09051519"
		const bytefiCjkij = "0x191a011c010d1a150117120a060d101b081a15181205080613131b0f181b0219"
		const uintkjl021E = BigInt("187")
		const uintXktnoQr = BigInt("1066")
		const uintL7wHu9c = BigInt("1191")
		const uintvMRTxtz = BigInt("832")
		const uint256VEMuvsX = await BACMARSLPTOKENPoolSz4RxuU.rewardPerToken.call({from: accounts[2]});
//		const uint256AXrleCJ = await BACMARSLPTOKENPoolSz4RxuU.stakeWithPermit.call(uintL7wHu9c, uintXktnoQr, uintkjl021E, bytefiCjkij, byteiXzDVDM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OUBias = await BACMARSLPTOKENPoolSz4RxuU.stake.call(uintvMRTxtz, {from: accounts[3]});

		assert.equal(uint256VEMuvsX, BigInt("0"))
		await expect(BACMARSLPTOKENPoolSz4RxuU.stakeWithPermit.call(uintL7wHu9c, uintXktnoQr, uintkjl021E, bytefiCjkij, byteiXzDVDM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxWILCfQ = accounts[1]
		const addressKr0FbS = accounts[1]
		const addressBZPDcgS = accounts[3]
		const BACMARSLPTOKENPoolA8sRI0W = await BACMARSLPTOKENPool.new(addressxWILCfQ, addressKr0FbS, addressBZPDcgS, {from: accounts[3]});
		const address8mE8Fd = accounts[0]
//		await BACMARSLPTOKENPoolA8sRI0W.getReward.call({from: accounts[1]});
//		const uint256ilUKR93 = await BACMARSLPTOKENPoolA8sRI0W.balanceOf.call(address8mE8Fd, {from: accounts[4]});
//		const stringF4rwTAi = await BACMARSLPTOKENPoolA8sRI0W.symbol.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolA8sRI0W.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolA8sRI0W.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTBjveqA = accounts[4]
		const addresspiSqSal = accounts[3]
		const addressWpn55e = accounts[3]
		const BACMARSLPTOKENPoolqw08fWX = await BACMARSLPTOKENPool.new(addressTBjveqA, addresspiSqSal, addressWpn55e, {from: accounts[4]});
		const uintaYfEhm = BigInt("1186")
		const uint256g4zUrwr = await BACMARSLPTOKENPoolqw08fWX.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Hs2s5Rg = await BACMARSLPTOKENPoolqw08fWX.getRewardForDuration.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolqw08fWX.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256xc5pH3z = await BACMARSLPTOKENPoolqw08fWX.rewardPerToken.call({from: accounts[0]});
//		const uint256t72iAGy = await BACMARSLPTOKENPoolqw08fWX.notifyRewardAmount.call(uintaYfEhm, {from: accounts[2]});

		assert.equal(uint256Hs2s5Rg, BigInt("0"))
		assert.equal(uint256g4zUrwr, BigInt("0"))
		await expect(BACMARSLPTOKENPoolqw08fWX.onlyRewardsDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaiyYVDm = "DHrIcarH78l2ntc6jIzX1MLW2i4lGb55yPPo0RICMpOfmUuGVqW0PPeRtjywqzAUXYa4dJsF9FCLKGllCnMlH451F"
		const stringK0mQiry = "y08IoWmFzJywS9yyAbR"
		const uintEdH882R = BigInt("186")
		const BACMARSLPTOKENPoolIDdnbZ1 = await BACMARSLPTOKENPool.new(stringaiyYVDm, stringK0mQiry, uintEdH882R, {from: accounts[4]});
		const bytexo18Zq7 = "0x130a150415070515161d000912180e020e1c0a080a12181610070b0c1f10110d"
		const byteGV6jwce = "0x1b0e1f1916010c100b112005101f040314051d0418140b1b180320031a121f11"
		const uintJFiXyP3 = BigInt("126")
		const uintPPKaaMZ = BigInt("1992")
		const uintopv6n3t = BigInt("1556")
		const uint256SgNHr4p = await BACMARSLPTOKENPoolIDdnbZ1.stakeWithPermit.call(uintopv6n3t, uintPPKaaMZ, uintJFiXyP3, byteGV6jwce, bytexo18Zq7, {from: accounts[0]});
		const uint256UigO8ZI = await BACMARSLPTOKENPoolIDdnbZ1.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256bEJi6VZ = await BACMARSLPTOKENPoolIDdnbZ1.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdWCUJDG = "lU6H3jE5q4koQClCU"
		const stringMryuGu = "g8WK08tgPgmhuFOjIXa7TC"
		const uintSVInmGP = BigInt("209")
		const BACMARSLPTOKENPoolCPm7TYV = await BACMARSLPTOKENPool.new(stringdWCUJDG, stringMryuGu, uintSVInmGP, {from: accounts[1]});
		const addressxBIz7L = accounts[0]
		const uint256s4IADJf = await BACMARSLPTOKENPoolCPm7TYV.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolCPm7TYV.nonReentrant.call({from: accounts[1]});
		const stringzukHdJr = await BACMARSLPTOKENPoolCPm7TYV.name.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCPm7TYV.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256tVndTam = await BACMARSLPTOKENPoolCPm7TYV.balanceOf.call(addressxBIz7L, {from: accounts[4]});
		const uint256jwkqHJ = await BACMARSLPTOKENPoolCPm7TYV.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMJwpK4 = "Mbzy7y13wLKkridTiHfsyXqRK7ePlaHaN2Pb"
		const stringliWKLzh = "XcVlqm95THe2aiPjabWzJOaJQ"
		const uintAq2mke = BigInt("69")
		const BACMARSLPTOKENPoolVvVdWcn = await BACMARSLPTOKENPool.new(stringMJwpK4, stringliWKLzh, uintAq2mke, {from: accounts[4]});
		await BACMARSLPTOKENPoolVvVdWcn.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolVvVdWcn.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZGZuVi = "8uHcoP7aKAgHxou5CzLq9Mflreqzpu2J"
		const stringQzwYIPG = "FJPWu8SjPbzcg50Rn8jszm1lS9NO4U47AzyGHTwJQ7UuVURPq"
		const uinttapmOoT = BigInt("165")
		const BACMARSLPTOKENPoolaQOKiVk = await BACMARSLPTOKENPool.new(stringZGZuVi, stringQzwYIPG, uinttapmOoT, {from: accounts[0]});
		const uinto2WfovK = BigInt("682")
		const stringIhsaQfy = await BACMARSLPTOKENPoolaQOKiVk.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ykgjou9 = await BACMARSLPTOKENPoolaQOKiVk.notifyRewardAmount.call(uinto2WfovK, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBpojF6o = "JnN0KAlsVFCkYc7EnV1LB8PDckk7nff5f84C3yszsi3d5VBGTz397tFTM4knTgfOCyzvzNgYgJmD"
		const stringbp3x6ve = "OEjbk1qV2l5j2MNqf5CPaDCIjJcWCWwS"
		const uintLN5oY46 = BigInt("73")
		const BACMARSLPTOKENPoolcsbY7Y = await BACMARSLPTOKENPool.new(stringBpojF6o, stringbp3x6ve, uintLN5oY46, {from: accounts[1]});
		const bytewgYFBPk = "0x0a0406101a0e0b0705120c101f1b0620101218081f131e081e14070e03090009"
		const bytegZQJBFX = "0x10090a04190a180c1f000c132004160d011f07071a1d0d0f1b150a151c02111c"
		const uintAm5nB9s = BigInt("93")
		const uinteLv08xC = BigInt("1764")
		const uintmDSpUDa = BigInt("223")
		const addressAZhkyoJ = accounts[2]
		const uintYthQUDf = BigInt("442")
		await BACMARSLPTOKENPoolcsbY7Y.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolcsbY7Y.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256gp3nt8m = await BACMARSLPTOKENPoolcsbY7Y.stakeWithPermit.call(uintmDSpUDa, uinteLv08xC, uintAm5nB9s, bytegZQJBFX, bytewgYFBPk, {from: accounts[1]});
		const uint256Dcytr8P = await BACMARSLPTOKENPoolcsbY7Y.balanceOf.call(addressAZhkyoJ, {from: accounts[2]});
		await BACMARSLPTOKENPoolcsbY7Y.exit.call({from: accounts[4]});
		const uint256Xob8EiD = await BACMARSLPTOKENPoolcsbY7Y.withdraw.call(uintYthQUDf, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPMFVl73 = "0x0000000000000000000000000000000000000001"
		const addressg9dTr0i = "0x0000000000000000000000000000000000000001"
		const addressfQ1RT7y = accounts[1]
		const BACMARSLPTOKENPoolSz4RxuU = await BACMARSLPTOKENPool.new(addressPMFVl73, addressg9dTr0i, addressfQ1RT7y, {from: accounts[1]});
		const uintX9qhFx = BigInt("1272")
		const uintNVEE080 = BigInt("88")
		const uintgwdCXx7 = BigInt("791")
//		const uint256aAic5ga = await BACMARSLPTOKENPoolSz4RxuU.notifyRewardAmount.call(uintX9qhFx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Jq7ktxi = await BACMARSLPTOKENPoolSz4RxuU.totalSupply.call({from: accounts[2]});
//		const uint256nfVKMxW = await BACMARSLPTOKENPoolSz4RxuU.withdraw.call(uintNVEE080, {from: accounts[2]});
//		const uint256OUBias = await BACMARSLPTOKENPoolSz4RxuU.stake.call(uintgwdCXx7, {from: accounts[3]});
//		const uint256L7i2qHj = await BACMARSLPTOKENPoolSz4RxuU.getRewardForDuration.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolSz4RxuU.notifyRewardAmount.call(uintX9qhFx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXv3zck1 = "80W1o7wezUJywuAeh6w9164ETyv6pBceVBiI9dp38TxW1b"
		const stringcVcpKvo = "4Ncg8g3Qah9Boq1kc9Hy2XwYa31qe48DHknmdadQYHdjympmiTgd6dGeXu732nYtpBOXGIhIYVeSRKaAzAyMeDBuutM"
		const uintig7fB5 = BigInt("174")
		const BACMARSLPTOKENPooldnp2QzF = await BACMARSLPTOKENPool.new(stringXv3zck1, stringcVcpKvo, uintig7fB5, {from: accounts[1]});
		const uintAcxBlG = BigInt("1809")
		const addressXmIZm5K = accounts[0]
		const uintIcgVr4V = BigInt("189")
		const uint256CV4bsx6 = await BACMARSLPTOKENPooldnp2QzF.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPooldnp2QzF.exit.call({from: accounts[3]});
		const uint256giXWjVG = await BACMARSLPTOKENPooldnp2QzF.stake.call(uintAcxBlG, {from: accounts[0]});
		const addresslYnaBYS = await BACMARSLPTOKENPooldnp2QzF.updateReward.call(addressXmIZm5K, {from: accounts[3]});
		const uint256TLdpi4W = await BACMARSLPTOKENPooldnp2QzF.notifyRewardAmount.call(uintIcgVr4V, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKJ9XMvn = "eUEk3nnUBdFqu0fDcurOy8SqNc9SjKJq6fwETyPoZxSKivUspDBnuy3xefDGtlMgCL9T1xgxKOk"
		const stringEkptQKb = "NOsMl830KzPcTlt50Njq53b0UAdC3j7c3ju6n1fEWL2Vn3RUuyYbbFLDCbr83OtMSJIoMW9dUfbBPJ2dlQoBnoSEFYpk4yb"
		const uintEv6riR7 = BigInt("215")
		const BACMARSLPTOKENPoolbxqskfu = await BACMARSLPTOKENPool.new(stringKJ9XMvn, stringEkptQKb, uintEv6riR7, {from: accounts[4]});
		await BACMARSLPTOKENPoolbxqskfu.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolbxqskfu.nonReentrant.call({from: accounts[4]});
		const uint256P2suiK = await BACMARSLPTOKENPoolbxqskfu.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJvGE8ke = "SxMC1bhvScFIPzN28tsjbatmWjzphp6OCGN5yPS9xY5NxeMOKuTnRJ527NQW4hSLIPddSbsY"
		const stringjiMd0Gj = "eeFPlTZqcAOtsJEibuh8GQizVzqufzs8iSjoPIMgHBNYbYhnJC9bXssinrD9t67YtKmL"
		const uintATUcVQM = BigInt("53")
		const BACMARSLPTOKENPoolSzf25Vr = await BACMARSLPTOKENPool.new(stringJvGE8ke, stringjiMd0Gj, uintATUcVQM, {from: accounts[4]});
		const byteEoJ9QT0 = "0x07041b141220050c1d1b1c1e051511041c0b031e201416070d1e1911051c1f11"
		const byteZlsBGW = "0x1b0b190c00140301110d0b111b12050b0c141a1101181c031e01150403171a11"
		const uintnVDWIEp = BigInt("116")
		const uintW3XbGag = BigInt("1715")
		const uintqAZUay = BigInt("1980")
		const addressbiwPJcu = accounts[2]
		const uintmXy6Pix = BigInt("1143")
		const uintmDyW3L7 = BigInt("795")
		const uint256AM5Phc5 = await BACMARSLPTOKENPoolSzf25Vr.stakeWithPermit.call(uintqAZUay, uintW3XbGag, uintnVDWIEp, byteZlsBGW, byteEoJ9QT0, {from: accounts[4]});
		await BACMARSLPTOKENPoolSzf25Vr.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256RuJjbN9 = await BACMARSLPTOKENPoolSzf25Vr.balanceOf.call(addressbiwPJcu, {from: accounts[3]});
		const uint2565prq2V = await BACMARSLPTOKENPoolSzf25Vr.stake.call(uintmXy6Pix, {from: accounts[4]});
		const uint256Q7pdOZH = await BACMARSLPTOKENPoolSzf25Vr.withdraw.call(uintmDyW3L7, {from: accounts[4]});
		const uint256PMOUUto = await BACMARSLPTOKENPoolSzf25Vr.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhafOk0j = "pYf5Og3IM4xxAyavBuhFW6SAVxp8dGzALhHQ16z5uNbOAnsk8RupBhXKQB9Fsmp0MFkDa"
		const stringIgqsHxv = "qTO1N9TMFIKhMwGVy7KQ7PTuZpqBIvLcBitY1hCsZDgYe4gd8eYCQuPYQtOdxXFuZ21sriVIEMh6sHanPAh"
		const uintST6Kk9x = BigInt("253")
		const BACMARSLPTOKENPooloLGA9FA = await BACMARSLPTOKENPool.new(stringhafOk0j, stringIgqsHxv, uintST6Kk9x, {from: accounts[3]});
		await BACMARSLPTOKENPooloLGA9FA.exit.call({from: accounts[5]});
		const uint256yGZsbMu = await BACMARSLPTOKENPooloLGA9FA.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPooloLGA9FA.getReward.call({from: accounts[2]});
		const uint256Ub9CZKW = await BACMARSLPTOKENPooloLGA9FA.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPooloLGA9FA.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmVAqulw = "QFMQvwZfI4enrnKS15uJnbRwWRhNOYNHcVgpg5LPgz5Ddo3UW4rKZCp71nRSFA"
		const stringNJUA6VO = "gK5WaAS1mYJbzI2PqgRWXkt9rWMDRwYTd1FdUTuK8J5A3UhXpS6B6o3kJtv7PJ3tXrlg2sMzt7JHGGI6vooB"
		const uintiAKusvU = BigInt("249")
		const BACMARSLPTOKENPoolJsF9e1k = await BACMARSLPTOKENPool.new(stringmVAqulw, stringNJUA6VO, uintiAKusvU, {from: accounts[0]});
		const uinte9tR1kj = BigInt("1764")
		await BACMARSLPTOKENPoolJsF9e1k.exit.call({from: accounts[3]});
		const uint256gxh8QIx = await BACMARSLPTOKENPoolJsF9e1k.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolJsF9e1k.getReward.call({from: accounts[5]});
		const uint256aCQNQWm = await BACMARSLPTOKENPoolJsF9e1k.notifyRewardAmount.call(uinte9tR1kj, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLU6cmBf = "VBQNHA"
		const stringJ8quZD7 = "E6bRxrYArsTB6KhsYhKJg7O5PQcuD73x28W1f"
		const uintXCVCfB = BigInt("212")
		const BACMARSLPTOKENPooldqUxve7 = await BACMARSLPTOKENPool.new(stringLU6cmBf, stringJ8quZD7, uintXCVCfB, {from: accounts[0]});
		const uint8xAUXJ92 = await BACMARSLPTOKENPooldqUxve7.decimals.call({from: accounts[1]});
		const uint256fKuq9QO = await BACMARSLPTOKENPooldqUxve7.rewardPerToken.call({from: accounts[4]});
		const uint256cLCxX6 = await BACMARSLPTOKENPooldqUxve7.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyAsHTay = "cX7EH5WOV"
		const stringFJvnEnE = "DbgkBX8bCWudK9L4Qofml0V25zYtsmXLQED7tz2nfYGoqAJRPvhDptq65omEgjeYAspEPvX5g2xg8bIbwQbNtGifvcB"
		const uintVBKYdr5 = BigInt("161")
		const BACMARSLPTOKENPoolPktdAkZ = await BACMARSLPTOKENPool.new(stringyAsHTay, stringFJvnEnE, uintVBKYdr5, {from: accounts[3]});
		const addressv0fs0G5 = accounts[1]
		const byteKrFpnfj = "0x101c1507130f1e180314061007151506171a05140c0f0a0103081e0f0e081413"
		const byteuSFsvk = "0x1718181308201e1003171a18161006100e021c170514130c0b03020a10081a1c"
		const uintwqx8khm = BigInt("191")
		const uintnHwK76A = BigInt("1183")
		const uintGh59orG = BigInt("488")
		const addressG1h5Np0 = await BACMARSLPTOKENPoolPktdAkZ.updateReward.call(addressv0fs0G5, {from: accounts[4]});
		const uint8rFQeicp = await BACMARSLPTOKENPoolPktdAkZ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolPktdAkZ.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256XOBFteO = await BACMARSLPTOKENPoolPktdAkZ.stakeWithPermit.call(uintGh59orG, uintnHwK76A, uintwqx8khm, byteuSFsvk, byteKrFpnfj, {from: accounts[2]});
		const uint256ypnvvd0 = await BACMARSLPTOKENPoolPktdAkZ.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGXYOo8Y = "jNyiWCXFEP"
		const stringlrT2pIX = "ORVUCpCaDbAfBO3FvvxocQtRaolQ8IhrYVZoicn8sd26jUF3jV9vMHsvKD2CAoa6t"
		const uintjhEpWGk = BigInt("140")
		const BACMARSLPTOKENPoolS4jj01E = await BACMARSLPTOKENPool.new(stringGXYOo8Y, stringlrT2pIX, uintjhEpWGk, {from: accounts[0]});
		const uint256JqoxAGP = await BACMARSLPTOKENPoolS4jj01E.getRewardForDuration.call({from: accounts[0]});
		const stringuzvJDQ3 = await BACMARSLPTOKENPoolS4jj01E.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringREuDvIm = "MhvkodfMShN5B6SpSnQembANGv"
		const stringhDiTj5E = "zxMtIEejpL6ogfWGNWJpOWWEbXDdGSegtpYCrRUla6Fg3zLS296sXE3n"
		const uintAHjwhle = BigInt("202")
		const BACMARSLPTOKENPooljm0PxM = await BACMARSLPTOKENPool.new(stringREuDvIm, stringhDiTj5E, uintAHjwhle, {from: accounts[2]});
		const uintMWz5v5L = BigInt("1088")
		const address4nCgkr = accounts[5]
		await BACMARSLPTOKENPooljm0PxM.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPooljm0PxM.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256J0WhkIr = await BACMARSLPTOKENPooljm0PxM.stake.call(uintMWz5v5L, {from: accounts[4]});
		const uint256WJYfRO = await BACMARSLPTOKENPooljm0PxM.balanceOf.call(address4nCgkr, {from: accounts[4]});
		const stringnom31lj = await BACMARSLPTOKENPooljm0PxM.name.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZaNm766 = "klacBvvUcCl8MBTokH4YVrCJioTjHyr9BWjRQ2y9lrIwTf3MqFXbfacfFjTboBFQvUCS2"
		const stringtrl5jGU = "vkXPNAitSslQ1C7oskhMEVBbF0phDG8apZmWWkucq7V7Y4syikspjf979sJyTvu8IaQCNzosvGyvHhERaPB4n"
		const uintmDV55Pe = BigInt("58")
		const BACMARSLPTOKENPooln3FRtcX = await BACMARSLPTOKENPool.new(stringZaNm766, stringtrl5jGU, uintmDV55Pe, {from: accounts[4]});
		const addressw9HkWYa = accounts[2]
		const uint256iRjz6er = await BACMARSLPTOKENPooln3FRtcX.earned.call(addressw9HkWYa, {from: accounts[2]});
		const uint256jwIlCsx = await BACMARSLPTOKENPooln3FRtcX.rewardPerToken.call({from: accounts[0]});
		const uint8pvRhhU = await BACMARSLPTOKENPooln3FRtcX.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmVuZGGT = "ATPje5CAk9YbghPSAsEc64XNEKnaW9l8kMMGPEuRlaRJNHUkfV5mASG4r8We9"
		const stringgHjwDlz = "okI3TjFKyo"
		const uintCPzDRyf = BigInt("118")
		const BACMARSLPTOKENPoolWkX9RAb = await BACMARSLPTOKENPool.new(stringmVuZGGT, stringgHjwDlz, uintCPzDRyf, {from: accounts[0]});
		await BACMARSLPTOKENPoolWkX9RAb.exit.call({from: accounts[0]});
		const stringND7g89q = await BACMARSLPTOKENPoolWkX9RAb.name.call({from: accounts[5]});
		const uint256geOMFiy = await BACMARSLPTOKENPoolWkX9RAb.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWkX9RAb.getReward.call({from: accounts[2]});
		const uint256fxhmeZM = await BACMARSLPTOKENPoolWkX9RAb.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWkX9RAb.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr9YT2ly = "63Vz"
		const stringvsDXJZz = "2PYhLA18uQmy8Dgpuo0K1wsTNLXWc1AULsW8ZfAvqZmzeyeyhThi81gO5E8Eg28YHooOnH7j2xD4X8WI0ma"
		const uintmQmv3OV = BigInt("245")
		const BACMARSLPTOKENPooln4dgAkD = await BACMARSLPTOKENPool.new(stringr9YT2ly, stringvsDXJZz, uintmQmv3OV, {from: accounts[4]});
		const uintcYDsNHc = BigInt("1260")
		const uintDGwHsk6 = BigInt("716")
		const uint256KmtuQdE = await BACMARSLPTOKENPooln4dgAkD.notifyRewardAmount.call(uintcYDsNHc, {from: accounts[0]});
		const uint256oLbwix = await BACMARSLPTOKENPooln4dgAkD.totalSupply.call({from: accounts[1]});
		const uint256WyHXpQQ = await BACMARSLPTOKENPooln4dgAkD.withdraw.call(uintDGwHsk6, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpE3nz8n = "fmm3Namx5BDeOcvBUxYnoL5"
		const stringawjlx8v = "BXhKdhqpVJdQurnjbVitjHIL"
		const uintDcpffNo = BigInt("128")
		const BACMARSLPTOKENPoolqosBhLb = await BACMARSLPTOKENPool.new(stringpE3nz8n, stringawjlx8v, uintDcpffNo, {from: accounts[1]});
		const addressvGM0izZ = accounts[4]
		const uint256slE30v = await BACMARSLPTOKENPoolqosBhLb.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256jW4Nd4g = await BACMARSLPTOKENPoolqosBhLb.earned.call(addressvGM0izZ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrpabzj5 = "YA94wgQXKQVCeoGDBNSqZFnQ5DBrzD21QWKBzB31L2VdGw1ux1"
		const stringxDbq9fr = "ToOE1ZgiKRhghgx2OpHtyExqGrTVd7oc7duVAGrgz2m2Hnuhbc4DPtjRGXsykDe3kMEur"
		const uintveILev5 = BigInt("221")
		const BACMARSLPTOKENPooldsxPgYC = await BACMARSLPTOKENPool.new(stringrpabzj5, stringxDbq9fr, uintveILev5, {from: accounts[4]});
		const bytefXHP4kF = "0x030c0f1e0d191b151b1b1b1c180c0e1c181d19191004011f0f141b180e0f1518"
		const byteF6DLqzB = "0x08160c0a1e0a14091e08010d071b0407081a080d16161202140c1e0601191315"
		const uintlr9TKUP = BigInt("63")
		const uintG6ZijsP = BigInt("885")
		const uintvd1ijL = BigInt("776")
		const uintilvci6U = BigInt("969")
		const uintRYh0koo = BigInt("1820")
		const uintT0arZP4 = BigInt("111")
		const uint256ew1Suua = await BACMARSLPTOKENPooldsxPgYC.stakeWithPermit.call(uintvd1ijL, uintG6ZijsP, uintlr9TKUP, byteF6DLqzB, bytefXHP4kF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cf1b0uR = await BACMARSLPTOKENPooldsxPgYC.stake.call(uintilvci6U, {from: accounts[0]});
		const uint256aCuMnQJ = await BACMARSLPTOKENPooldsxPgYC.withdraw.call(uintRYh0koo, {from: accounts[4]});
		const uint8uzwru1I = await BACMARSLPTOKENPooldsxPgYC.decimals.call({from: accounts[0]});
		const uint256ouTeAF = await BACMARSLPTOKENPooldsxPgYC.notifyRewardAmount.call(uintT0arZP4, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringH0WAX4F = "qTNtFH53lBLWHO33NSjeh4krqQ7lxmBJR9PhjEtNhrOSzgl7tiaYcDzLl5chybjABXAe"
		const stringL8JiqLI = "EjRFucLXbhsJWuXK0maitQKH4WCaJV2PwplwtGwgBUugeWkuIrx9VQuBDRBLdKiT8FuzKtgHtr8vuMcIleEaYbr1lzKtKC"
		const uintPeUHyK = BigInt("105")
		const BACMARSLPTOKENPoolmLpLVSi = await BACMARSLPTOKENPool.new(stringH0WAX4F, stringL8JiqLI, uintPeUHyK, {from: accounts[3]});
		const uintrpUTb08 = BigInt("1297")
		const uintsYkyFtn = BigInt("1051")
		const byteARR4Dt = "0x0a1c09070c160a0b1c1406101119140906121a12071a120c0915011d0715170b"
		const byteJ6mYd9F = "0x1f04070206031c111c0710071d15161f171a121302061113021f190207041703"
		const uintrkRXCC = BigInt("124")
		const uintjBLiJpX = BigInt("289")
		const uintJoxfbwZ = BigInt("998")
		const uint256lsFYMz9 = await BACMARSLPTOKENPoolmLpLVSi.notifyRewardAmount.call(uintrpUTb08, {from: accounts[1]});
		const uint256Jz0qkBL = await BACMARSLPTOKENPoolmLpLVSi.withdraw.call(uintsYkyFtn, {from: accounts[3]});
		const uint256eYTr1tC = await BACMARSLPTOKENPoolmLpLVSi.stakeWithPermit.call(uintJoxfbwZ, uintjBLiJpX, uintrkRXCC, byteJ6mYd9F, byteARR4Dt, {from: accounts[0]});
		const uint256qnMIHJ3 = await BACMARSLPTOKENPoolmLpLVSi.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256i1PpR1t = await BACMARSLPTOKENPoolmLpLVSi.rewardPerToken.call({from: accounts[0]});
		const stringhaPXZSs = await BACMARSLPTOKENPoolmLpLVSi.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnmUnJo = "HEQmULMoNtPpHqfwOs1U2DXqgRRDeC8"
		const stringUQ8ADVf = "0ZOO0SYBmggaDaVcwLCeccnTQiFD7EDjujWeEpJoE5HBRPuGfDf9"
		const uintLa0AUxF = BigInt("126")
		const BACMARSLPTOKENPoolfQaHry = await BACMARSLPTOKENPool.new(stringnmUnJo, stringUQ8ADVf, uintLa0AUxF, {from: accounts[2]});
		const uint8W41md = BigInt("304")
		const uint256hkl6yd9 = await BACMARSLPTOKENPoolfQaHry.notifyRewardAmount.call(uint8W41md, {from: accounts[2]});
		await BACMARSLPTOKENPoolfQaHry.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPoolfQaHry.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWPq578z = "rTlPo3lKsGzEzcTMeyOh1eSDS"
		const stringkFpeKAJ = "8jgVuVD"
		const uintcO84zRl = BigInt("239")
		const BACMARSLPTOKENPoolj9vrIPW = await BACMARSLPTOKENPool.new(stringWPq578z, stringkFpeKAJ, uintcO84zRl, {from: accounts[4]});
		const uintWN9uyQB = BigInt("67")
		const uint256oEzfTuq = await BACMARSLPTOKENPoolj9vrIPW.rewardPerToken.call({from: accounts[2]});
		const uint256giPM8Ne = await BACMARSLPTOKENPoolj9vrIPW.stake.call(uintWN9uyQB, {from: accounts[0]});
		const uint256oV8n1Xd = await BACMARSLPTOKENPoolj9vrIPW.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAEYH9M = "X"
		const stringtLfnQb = "ypYlmUWfqNiVqTLAnHe1wwXi7SJP28e1GhTXZT6zX1N25"
		const uintmGWwIxy = BigInt("234")
		const BACMARSLPTOKENPoolcJqs8OG = await BACMARSLPTOKENPool.new(stringAEYH9M, stringtLfnQb, uintmGWwIxy, {from: accounts[0]});
		const byteIZN3TX2 = "0x15180e0b1b04020910061320101505190308101c1a0c1f151a0607120110131c"
		const byteQBxsOpj = "0x04081b161c1c011a0d08181810100d0216152016140608151e001d0e18181a1c"
		const uintZoVrSM4 = BigInt("75")
		const uintChZyefO = BigInt("74")
		const uintIbNiU5Z = BigInt("345")
		const addresscVyMov = accounts[1]
		const byteQcZAabB = "0x1d170911110b08200a191f0e100815180e0f1807010d191407141115051b0d00"
		const bytekReFL44 = "0x151d0c06150b0010141d0307061319120b0006130f1c1a1914040414081a1502"
		const uintpZMbwIg = BigInt("155")
		const uintdW7hzrw = BigInt("1311")
		const uinteWD597n = BigInt("1912")
		const uint256vCX7ky7 = await BACMARSLPTOKENPoolcJqs8OG.stakeWithPermit.call(uintIbNiU5Z, uintChZyefO, uintZoVrSM4, byteQBxsOpj, byteIZN3TX2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TvPR2A = await BACMARSLPTOKENPoolcJqs8OG.earned.call(addresscVyMov, {from: accounts[3]});
		const stringnB6I8g5 = await BACMARSLPTOKENPoolcJqs8OG.name.call({from: accounts[3]});
		const uint256MKb1Fu7 = await BACMARSLPTOKENPoolcJqs8OG.getRewardForDuration.call({from: accounts[1]});
		const uint256RHOLV4r = await BACMARSLPTOKENPoolcJqs8OG.stakeWithPermit.call(uinteWD597n, uintdW7hzrw, uintpZMbwIg, bytekReFL44, byteQcZAabB, {from: accounts[4]});
		const uint256OKjpQVK = await BACMARSLPTOKENPoolcJqs8OG.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIhhhLLs = "rZjBkBUi9Jkgge7zttJnGEXgYGzbYCyM"
		const stringaB7LB1g = "6xb9EUwfB21EojzPFK4RxiZdZX3Flsp2E4eXIvPG0DENcxssHyuDH0pBYo5A8dBsnWrd2mjP4MgBKJm"
		const uintReOwKGi = BigInt("89")
		const BACMARSLPTOKENPoolRDXYOIw = await BACMARSLPTOKENPool.new(stringIhhhLLs, stringaB7LB1g, uintReOwKGi, {from: "0x0000000000000000000000000000000000000001"});
		const bytetKIysy1 = "0x1e080300090d020f031c1d0710151120181a110c0a10120715030205040c051a"
		const bytegBKWXDS = "0x1e090e1c13160e1f11091916021a05180511000f0f0e03091b0c0805121f1914"
		const uintfiXhWq6 = BigInt("14")
		const uintPwKMUmY = BigInt("2035")
		const uinth9XOqrN = BigInt("650")
		const uintG2XHF0y = BigInt("437")
		const uint256jTF7TJ0 = await BACMARSLPTOKENPoolRDXYOIw.stakeWithPermit.call(uinth9XOqrN, uintPwKMUmY, uintfiXhWq6, bytegBKWXDS, bytetKIysy1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y1ehWet = await BACMARSLPTOKENPoolRDXYOIw.rewardPerToken.call({from: accounts[4]});
		const uint256abJozRk = await BACMARSLPTOKENPoolRDXYOIw.notifyRewardAmount.call(uintG2XHF0y, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQ7HF1Wv = "PoNqkBIiTlJbmvDwq7NrRVI6pBSMhgudkmxRwI67D6wvjLfF43G8nB71uj6nzK2WJBB6FU5H47ED9AkJq"
		const stringqiAQue = "2fZ5"
		const uintruzyM81 = BigInt("158")
		const BACMARSLPTOKENPoolWJnu78w = await BACMARSLPTOKENPool.new(stringQ7HF1Wv, stringqiAQue, uintruzyM81, {from: accounts[3]});
		const uintY3uMhNV = BigInt("1487")
		const uint256lbrEkt = await BACMARSLPTOKENPoolWJnu78w.withdraw.call(uintY3uMhNV, {from: accounts[3]});
		const uint256bRanzgq = await BACMARSLPTOKENPoolWJnu78w.totalSupply.call({from: accounts[1]});
	});
})
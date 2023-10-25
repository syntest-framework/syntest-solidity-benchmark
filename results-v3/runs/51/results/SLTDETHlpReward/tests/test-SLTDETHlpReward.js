const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgzaPu0B = await SLTDETHlpReward.new({from: accounts[2]});
		await SLTDETHlpRewardgzaPu0B.onlyOwner.call({from: accounts[0]});
		await SLTDETHlpRewardgzaPu0B.checkStart.call({from: accounts[4]});

		await expect(SLTDETHlpRewardgzaPu0B.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZHb87q3 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressERWFri3 = accounts[0]
		const boolDC0A68h = await SLTDETHlpRewardZHb87q3.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GTNy1bF = await SLTDETHlpRewardZHb87q3.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressWPqsYNq = await SLTDETHlpRewardZHb87q3.updateReward.call(addressERWFri3, {from: accounts[0]});
		const uint256k5Bq7B1 = await SLTDETHlpRewardZHb87q3.rewardPerToken.call({from: accounts[2]});

		assert.equal(boolDC0A68h, false)
		assert.equal(uint256GTNy1bF, BigInt("0"))
		await expect(SLTDETHlpRewardZHb87q3.updateReward.call(addressERWFri3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7z8T1C = await SLTDETHlpReward.new({from: accounts[3]});
		const uintDgUBM1s = BigInt("716")
		const addressMgYgWKY = accounts[3]
		const uint256WmsgfUv = await SLTDETHlpReward7z8T1C.stake.call(uintDgUBM1s, {from: accounts[5]});
		const addressKCnxP2F = await SLTDETHlpReward7z8T1C.updateReward.call(addressMgYgWKY, {from: accounts[3]});

		await expect(SLTDETHlpReward7z8T1C.stake.call(uintDgUBM1s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYVvuECk = await SLTDETHlpReward.new({from: accounts[0]});
		const addressN3TF2Cm = accounts[3]
		const uinteV7lzNb = BigInt("1713")
		const uint256gWEDO49 = await SLTDETHlpRewardYVvuECk.balanceOf.call(addressN3TF2Cm, {from: accounts[0]});
		const uint256GzabFON = await SLTDETHlpRewardYVvuECk.withdraw.call(uinteV7lzNb, {from: accounts[1]});
		const uint256xWYWOiY = await SLTDETHlpRewardYVvuECk.totalSupply.call({from: accounts[4]});

		assert.equal(uint256gWEDO49, BigInt("0"))
		await expect(SLTDETHlpRewardYVvuECk.withdraw.call(uinteV7lzNb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpRvdcCK = await SLTDETHlpReward.new({from: accounts[1]});
		const uintl0egd8L = BigInt("1530")
		const uintdZVJyX = BigInt("1465")
		const addressa41No8R = accounts[5]
		const uint256MUxUcof = await SLTDETHlpRewardpRvdcCK.notifyRewardAmount.call(uintl0egd8L, {from: accounts[4]});
		const uint256Shpggpt = await SLTDETHlpRewardpRvdcCK.withdraw.call(uintdZVJyX, {from: accounts[0]});
		const uint256IJlapSr = await SLTDETHlpRewardpRvdcCK.balanceOf.call(addressa41No8R, {from: accounts[2]});

		await expect(SLTDETHlpRewardpRvdcCK.notifyRewardAmount.call(uintl0egd8L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPdO2s3O = await SLTDETHlpReward.new({from: accounts[1]});
		const addressNOG7ebH = accounts[4]
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]});
		const addressXIEjswg = await SLTDETHlpRewardPdO2s3O.updateReward.call(addressNOG7ebH, {from: accounts[3]});

		await expect(SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardX4rtSTs = await SLTDETHlpReward.new({from: accounts[4]});
		const addressOPRqb9H = "0x0000000000000000000000000000000000000001"
		const boolskVUhWV = await SLTDETHlpRewardX4rtSTs.isOwner.call({from: accounts[1]});
		const addressMbxbebI = await SLTDETHlpRewardX4rtSTs.transferOwnership.call(addressOPRqb9H, {from: accounts[2]});

		assert.equal(boolskVUhWV, false)
		await expect(SLTDETHlpRewardX4rtSTs.transferOwnership.call(addressOPRqb9H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEdXlq3n = await SLTDETHlpReward.new({from: accounts[4]});
		const addressyMr457S = accounts[4]
		const uintSiZCimW = BigInt("683")
		const uint256nY9FG7F = await SLTDETHlpRewardEdXlq3n.remainingReward.call({from: accounts[5]});
		const uint256RDqWPvO = await SLTDETHlpRewardEdXlq3n.lastTimeRewardApplicable.call({from: accounts[0]});
		await SLTDETHlpRewardEdXlq3n.exit.call({from: accounts[4]});
		const uint256i7TfKya = await SLTDETHlpRewardEdXlq3n.earned.call(addressyMr457S, {from: accounts[5]});
		const uint256bxaiNlG = await SLTDETHlpRewardEdXlq3n.stake.call(uintSiZCimW, {from: accounts[4]});

		await expect(SLTDETHlpRewardEdXlq3n.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpRvdcCK = await SLTDETHlpReward.new({from: accounts[1]});
		const uintdEuUw3B = BigInt("1460")
		const addressGtxsMwS = accounts[3]
		const uintkEQUuj8 = BigInt("1530")
		const uinteEbkQO = BigInt("1479")
		const addresshI1bwLo = accounts[5]
		const uint256H3cEvgi = await SLTDETHlpRewardpRvdcCK.setStartTime.call(uintdEuUw3B, {from: accounts[1]});
		const addressGpgIllD = await SLTDETHlpRewardpRvdcCK.transferOwnership.call(addressGtxsMwS, {from: accounts[5]});
		const uint256k2iXEZZ = await SLTDETHlpRewardpRvdcCK.remainingReward.call({from: accounts[2]});
		const uint256MUxUcof = await SLTDETHlpRewardpRvdcCK.notifyRewardAmount.call(uintkEQUuj8, {from: accounts[4]});
		const uint256Shpggpt = await SLTDETHlpRewardpRvdcCK.withdraw.call(uinteEbkQO, {from: accounts[0]});
		const uint256IJlapSr = await SLTDETHlpRewardpRvdcCK.balanceOf.call(addresshI1bwLo, {from: accounts[2]});

		await expect(SLTDETHlpRewardpRvdcCK.transferOwnership.call(addressGtxsMwS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrZKgg5 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintj0Ij05P = BigInt("1658")
		const addressAtC8RQe = accounts[3]
		const addressxSTYOf = accounts[3]
		const uint256ebraj7c = await SLTDETHlpRewardrZKgg5.stake.call(uintj0Ij05P, {from: accounts[5]});
		const uint256W92yzT7 = await SLTDETHlpRewardrZKgg5.totalSupply.call({from: accounts[2]});
		const boolwDdFuG = await SLTDETHlpRewardrZKgg5.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256urGoDW = await SLTDETHlpRewardrZKgg5.earned.call(addressAtC8RQe, {from: accounts[2]});
		const addresskuZAC7 = await SLTDETHlpRewardrZKgg5.setRewardDistribution.call(addressxSTYOf, {from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPdO2s3O = await SLTDETHlpReward.new({from: accounts[1]});
		const addressdAbVY3E = accounts[5]
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]});
		const uint256XEnWK5 = await SLTDETHlpRewardPdO2s3O.rewardPerToken.call({from: accounts[4]});
		const uint256oNVpkJ = await SLTDETHlpRewardPdO2s3O.rewardPerToken.call({from: accounts[5]});
		await SLTDETHlpRewardPdO2s3O.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressXIEjswg = await SLTDETHlpRewardPdO2s3O.updateReward.call(addressdAbVY3E, {from: accounts[3]});
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256n4r1ToH = await SLTDETHlpRewardPdO2s3O.lastTimeRewardApplicable.call({from: accounts[1]});
		await SLTDETHlpRewardPdO2s3O.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7z8T1C = await SLTDETHlpReward.new({from: accounts[3]});
		const uintVCx5lmw = BigInt("514")
		const uintLV7DdU = BigInt("716")
		const addressTUFAWUO = accounts[3]
		const uint256Qj44SST = await SLTDETHlpReward7z8T1C.notifyRewardAmount.call(uintVCx5lmw, {from: accounts[3]});
		const uint256WmsgfUv = await SLTDETHlpReward7z8T1C.stake.call(uintLV7DdU, {from: accounts[5]});
		await SLTDETHlpReward7z8T1C.onlyOwner.call({from: accounts[1]});
		const addressKCnxP2F = await SLTDETHlpReward7z8T1C.updateReward.call(addressTUFAWUO, {from: accounts[3]});

		await expect(SLTDETHlpReward7z8T1C.stake.call(uintLV7DdU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPdO2s3O = await SLTDETHlpReward.new({from: accounts[1]});
		const addressIWEf48 = accounts[2]
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]});
		const addresss282vl = await SLTDETHlpRewardPdO2s3O.setStakeAddress.call(addressIWEf48, {from: accounts[1]});

		await expect(SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPdO2s3O = await SLTDETHlpReward.new({from: accounts[1]});
		const addresspHGCDGV = accounts[3]
		const uintNAscfS = BigInt("1704")
		const addressx77cOaV = await SLTDETHlpRewardPdO2s3O.setRewardDistribution.call(addresspHGCDGV, {from: accounts[1]});
		const uint256RJclIgf = await SLTDETHlpRewardPdO2s3O.stake.call(uintNAscfS, {from: accounts[0]});
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]});

		await expect(SLTDETHlpRewardPdO2s3O.stake.call(uintNAscfS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPdO2s3O = await SLTDETHlpReward.new({from: accounts[1]});
		const addressRiQ78uO = accounts[1]
		const addressIsbaLW4 = await SLTDETHlpRewardPdO2s3O.transferOwnership.call(addressRiQ78uO, {from: accounts[1]});
		await SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]});

		await expect(SLTDETHlpRewardPdO2s3O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7z8T1C = await SLTDETHlpReward.new({from: accounts[3]});
		const uintUscq9u3 = BigInt("514")
		const addresssFhee4f = accounts[2]
		const uinttK1YKZC = BigInt("699")
		const addressuK3f2fX = accounts[6]
		const addressXqNNyqe = accounts[5]
		const uint256Qj44SST = await SLTDETHlpReward7z8T1C.notifyRewardAmount.call(uintUscq9u3, {from: accounts[3]});
		const addressIoy9hVg = await SLTDETHlpReward7z8T1C.owner.call({from: accounts[4]});
		const uint256EWPskJR = await SLTDETHlpReward7z8T1C.earned.call(addresssFhee4f, {from: accounts[1]});
		const uint256WmsgfUv = await SLTDETHlpReward7z8T1C.stake.call(uinttK1YKZC, {from: accounts[5]});
		const addresseCiP5wa = await SLTDETHlpReward7z8T1C.setStakeAddress.call(addressuK3f2fX, {from: accounts[2]});
		const addressKCnxP2F = await SLTDETHlpReward7z8T1C.updateReward.call(addressXqNNyqe, {from: accounts[3]});
		const uint2561yJ6c4 = await SLTDETHlpReward7z8T1C.remainingReward.call({from: accounts[0]});

		assert.equal(addressIoy9hVg, 0xfFeFBC61a2a7202da3a14805a4906cb4150213C9)
		assert.equal(uint256EWPskJR, BigInt("0"))
		await expect(SLTDETHlpReward7z8T1C.stake.call(uinttK1YKZC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
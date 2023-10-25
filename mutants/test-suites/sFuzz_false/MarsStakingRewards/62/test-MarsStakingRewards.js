const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressDwmfoC = "0x0000000000000000000000000000000000000001"
		const addressZY3rHTx = accounts[3]
		const addressLTYClmR = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressDwmfoC, addressZY3rHTx, addressLTYClmR, {from: accounts[1]});
		const addressolp9Ef0 = accounts[5]
		const addressowtuBfr = accounts[2]
		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressolp9Ef0, {from: accounts[1]});
		const uint256gYsE9vj = await MarsStakingRewardsXrTAo2m.earned.call(addressowtuBfr, {from: accounts[2]});

		assert.equal(uint256Qyr1VQt, BigInt("0"))
		assert.equal(uint256gYsE9vj, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressmVEhx5e = accounts[1]
		const addressgpfjQSa = "0x0000000000000000000000000000000000000001"
		const addresskw22Zb6 = accounts[0]
		const MarsStakingRewardsGOaWJBG = await MarsStakingRewards.new(addressmVEhx5e, addressgpfjQSa, addresskw22Zb6, {from: accounts[4]});
		const addressEmT3p3v = await MarsStakingRewardsGOaWJBG.owner.call({from: accounts[3]});
//		await MarsStakingRewardsGOaWJBG.exit.call({from: accounts[3]});
//		const boolL0ag45k = await MarsStakingRewardsGOaWJBG.isOwner.call({from: accounts[4]});

		assert.equal(addressEmT3p3v, 0xa8F9bdb99AA999068F3Ff1BE8F44acc6DF29eD60)
		await expect(MarsStakingRewardsGOaWJBG.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressdhj7wiw = accounts[0]
		const addressqcDG9NZ = accounts[1]
		const addressKjDP5mS = accounts[3]
		const MarsStakingRewardsixOQSG = await MarsStakingRewards.new(addressdhj7wiw, addressqcDG9NZ, addressKjDP5mS, {from: accounts[0]});
		const addresseKaTPIn = accounts[1]
		const addressd0QF6fF = accounts[1]
//		const addressoBZqCbd = await MarsStakingRewardsixOQSG.setRewardsDistribution.call(addresseKaTPIn, {from: accounts[4]});
//		await MarsStakingRewardsixOQSG.nonReentrant.call({from: accounts[2]});
//		const addresseeqAyXM = await MarsStakingRewardsixOQSG.updateReward.call(addressd0QF6fF, {from: accounts[1]});
//		const uint2563yxMly = await MarsStakingRewardsixOQSG.totalSupply.call({from: accounts[1]});

		await expect(MarsStakingRewardsixOQSG.setRewardsDistribution.call(addresseKaTPIn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswR7dX6 = "0x0000000000000000000000000000000000000001"
		const addressLbSX10P = accounts[4]
		const addresss1iEHaE = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsSJMuWf = await MarsStakingRewards.new(addresswR7dX6, addressLbSX10P, addresss1iEHaE, {from: "0x0000000000000000000000000000000000000001"});
		const addressMfEYgzQ = accounts[4]
		const byteN8NxDL = "0x150e1d0e04130009060112131f1e19110c150d090a0e0b19171102200c1f1b0f"
		const byteq2qsrhF = "0x161a1405191612130c060104061b1e17061b0f1d000d13130c1a1a041920200a"
		const uinthI8qYjt = BigInt("197")
		const uinti5NnGv2 = BigInt("390")
		const uinttMU2siq = BigInt("1297")
		const addressWah4dyX = await MarsStakingRewardsSJMuWf.updateReward.call(addressMfEYgzQ, {from: accounts[2]});
		const uint256FSxaJq = await MarsStakingRewardsSJMuWf.stakeWithPermit.call(uinttMU2siq, uinti5NnGv2, uinthI8qYjt, byteq2qsrhF, byteN8NxDL, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsSJMuWf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MarsStakingRewards', async () => {
		const addressmCmHgnu = accounts[4]
		const addressm4VuuzY = accounts[0]
		const addressHeWvs4Q = accounts[1]
		const MarsStakingRewardsO4NsGWe = await MarsStakingRewards.new(addressmCmHgnu, addressm4VuuzY, addressHeWvs4Q, {from: accounts[0]});
		const addressYXaAUV = accounts[2]
		const boolVPByelQ = await MarsStakingRewardsO4NsGWe.isOwner.call({from: accounts[4]});
//		await MarsStakingRewardsO4NsGWe.nonReentrant.call({from: accounts[1]});
//		const addressmsvyVlT = await MarsStakingRewardsO4NsGWe.transferOwnership.call(addressYXaAUV, {from: accounts[3]});

		assert.equal(boolVPByelQ, false)
		await expect(MarsStakingRewardsO4NsGWe.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRrBsFP9 = accounts[4]
		const addressd3oqp9l = accounts[5]
		const addressLx3jw0g = accounts[0]
		const MarsStakingRewardsW9sR2E = await MarsStakingRewards.new(addressRrBsFP9, addressd3oqp9l, addressLx3jw0g, {from: accounts[5]});
		const uintdP4RJCA = BigInt("818")
		const uintkWUAaLr = BigInt("618")
		const addressTF2Zy3C = accounts[3]
		const uint256mMhQzL = await MarsStakingRewardsW9sR2E.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256IvMKD5l = await MarsStakingRewardsW9sR2E.notifyRewardAmount.call(uintkWUAaLr, uintdP4RJCA, {from: accounts[3]});
//		const addressAcYV9S = await MarsStakingRewardsW9sR2E.updateReward.call(addressTF2Zy3C, {from: accounts[3]});

		assert.equal(uint256mMhQzL, BigInt("0"))
		await expect(MarsStakingRewardsW9sR2E.notifyRewardAmount.call(uintkWUAaLr, uintdP4RJCA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressixDL0O7 = "0x0000000000000000000000000000000000000001"
		const addresspjN5Nc = accounts[3]
		const address0vAjHW = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressixDL0O7, addresspjN5Nc, address0vAjHW, {from: accounts[1]});
		const addressCNem2e6 = accounts[5]
		const addressb5067Fr = accounts[3]
		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressCNem2e6, {from: accounts[1]});
		const uint256gYsE9vj = await MarsStakingRewardsXrTAo2m.earned.call(addressb5067Fr, {from: accounts[2]});
		const uint256xQNo0py = await MarsStakingRewardsXrTAo2m.getRewardForDuration.call({from: accounts[0]});
		const boolve8gUI9 = await MarsStakingRewardsXrTAo2m.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCoA6x73 = await MarsStakingRewardsXrTAo2m.isOwner.call({from: accounts[1]});

		assert.equal(boolCoA6x73, true)
		assert.equal(boolve8gUI9, false)
		assert.equal(uint256Qyr1VQt, BigInt("0"))
		assert.equal(uint256gYsE9vj, BigInt("0"))
		assert.equal(uint256xQNo0py, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressMTaVMIZ = accounts[3]
		const addressZFyqwww = accounts[5]
		const addressi6mp6RU = accounts[0]
		const MarsStakingRewardsp55gPAK = await MarsStakingRewards.new(addressMTaVMIZ, addressZFyqwww, addressi6mp6RU, {from: accounts[2]});
		const addressum7RfyT = accounts[4]
		const addressbZdS5Iu = accounts[0]
		const uint256xG3vILj = await MarsStakingRewardsp55gPAK.balanceOf.call(addressum7RfyT, {from: accounts[4]});
		const uint256vcSez5 = await MarsStakingRewardsp55gPAK.balanceOf.call(addressbZdS5Iu, {from: accounts[3]});
//		await MarsStakingRewardsp55gPAK.getReward.call({from: accounts[3]});
//		await MarsStakingRewardsp55gPAK.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256vcSez5, BigInt("0"))
		assert.equal(uint256xG3vILj, BigInt("0"))
		await expect(MarsStakingRewardsp55gPAK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresst48Bgjy = "0x0000000000000000000000000000000000000001"
		const addressU6vecHu = accounts[3]
		const addressc1vRbzh = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addresst48Bgjy, addressU6vecHu, addressc1vRbzh, {from: accounts[1]});
		const addressOJ07Nz = accounts[4]
		const uint256dHnZ0yR = await MarsStakingRewardsXrTAo2m.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressOJ07Nz, {from: accounts[1]});
		const uint256zYhduFv = await MarsStakingRewardsXrTAo2m.totalSupply.call({from: accounts[0]});

		assert.equal(uint256Qyr1VQt, BigInt("0"))
		assert.equal(uint256dHnZ0yR, BigInt("0"))
		assert.equal(uint256zYhduFv, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresspZsxKLG = "0x0000000000000000000000000000000000000001"
		const addressme5Ycd9 = accounts[3]
		const addressDWKFCv8 = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addresspZsxKLG, addressme5Ycd9, addressDWKFCv8, {from: accounts[1]});
		const uintlUMxFNe = BigInt("736")
		const uintqCqRGw0 = BigInt("317")
		const addressF0UgCx = "0x0000000000000000000000000000000000000001"
		const uint2569m3ApE = await MarsStakingRewardsXrTAo2m.getRewardForDuration.call({from: accounts[2]});
//		const uint256CRDvfSy = await MarsStakingRewardsXrTAo2m.notifyRewardAmount.call(uintqCqRGw0, uintlUMxFNe, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressF0UgCx, {from: accounts[1]});

		assert.equal(uint2569m3ApE, BigInt("0"))
		await expect(MarsStakingRewardsXrTAo2m.notifyRewardAmount.call(uintqCqRGw0, uintlUMxFNe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMvrIpPC = "0x0000000000000000000000000000000000000001"
		const addressUVvt0gY = accounts[3]
		const addressWRX9gh = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressMvrIpPC, addressUVvt0gY, addressWRX9gh, {from: accounts[1]});
		const addressqQPWBy7 = "0x0000000000000000000000000000000000000001"
		const addressqxBSL5T = accounts[0]
		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressqQPWBy7, {from: accounts[1]});
		const addressxhfPVBW = await MarsStakingRewardsXrTAo2m.transferOwnership.call(addressqxBSL5T, {from: accounts[1]});

		assert.equal(uint256Qyr1VQt, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressXD02XC = "0x0000000000000000000000000000000000000001"
		const addressE10JJgW = accounts[3]
		const addressvca7NAt = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressXD02XC, addressE10JJgW, addressvca7NAt, {from: accounts[1]});
		const uintotxrOF3 = BigInt("31")
		const addressQrnUqK9 = "0x0000000000000000000000000000000000000001"
//		await MarsStakingRewardsXrTAo2m.renounceOwnership.call({from: accounts[1]});
//		const uint256d4teOXh = await MarsStakingRewardsXrTAo2m.stake.call(uintotxrOF3, {from: accounts[4]});
//		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressQrnUqK9, {from: accounts[1]});

		await expect(MarsStakingRewardsXrTAo2m.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUnvlYlA = "0x0000000000000000000000000000000000000001"
		const addressZjm98ZB = accounts[3]
		const addressTvMNhcq = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressUnvlYlA, addressZjm98ZB, addressTvMNhcq, {from: accounts[1]});
		const uintXDz2U7v = BigInt("2040")
		const addresscs7a6uj = accounts[2]
		const addresscF2b5wb = "0x0000000000000000000000000000000000000000"
//		const addresscCnUObD = await MarsStakingRewardsXrTAo2m.inCaseTokensGetStuck.call(addresscs7a6uj, uintXDz2U7v, {from: accounts[1]});
//		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addresscF2b5wb, {from: accounts[1]});
//		await MarsStakingRewardsXrTAo2m.onlyOwner.call({from: accounts[1]});

		await expect(MarsStakingRewardsXrTAo2m.inCaseTokensGetStuck.call(addresscs7a6uj, uintXDz2U7v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEugNrz2 = "0x0000000000000000000000000000000000000001"
		const addressdzCFMQs = accounts[3]
		const addressf0eUqa0 = accounts[3]
		const MarsStakingRewardsXrTAo2m = await MarsStakingRewards.new(addressEugNrz2, addressdzCFMQs, addressf0eUqa0, {from: accounts[1]});
		const addressan0cz0s = accounts[2]
		const addressO8smTO5 = accounts[3]
		const uint256xmqVCjV = await MarsStakingRewardsXrTAo2m.getRewardForDuration.call({from: accounts[4]});
		const addresshHQeiya = await MarsStakingRewardsXrTAo2m.setRewardsDistribution.call(addressan0cz0s, {from: accounts[1]});
//		await MarsStakingRewardsXrTAo2m.getReward.call({from: accounts[3]});
//		const uint256WM4I9K2 = await MarsStakingRewardsXrTAo2m.totalSupply.call({from: accounts[4]});
//		const uint256Qyr1VQt = await MarsStakingRewardsXrTAo2m.earned.call(addressO8smTO5, {from: accounts[1]});

		assert.equal(uint256xmqVCjV, BigInt("0"))
		await expect(MarsStakingRewardsXrTAo2m.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressR0eqL2M = accounts[3]
		const addressvCCf0AS = accounts[1]
		const addressbBgRr4z = accounts[2]
		const MarsStakingRewardsxxnBT6I = await MarsStakingRewards.new(addressR0eqL2M, addressvCCf0AS, addressbBgRr4z, {from: accounts[3]});
		const uintTuqliEk = BigInt("1424")
		const addressOowMxPU = accounts[2]
		const uintoXwUZ0Y = BigInt("788")
//		const addressDCGM0DZ = await MarsStakingRewardsxxnBT6I.inCaseTokensGetStuck.call(addressOowMxPU, uintTuqliEk, {from: accounts[3]});
//		const uint256CrWGFpS = await MarsStakingRewardsxxnBT6I.withdraw.call(uintoXwUZ0Y, {from: accounts[0]});
//		const uint256Xu0NmB = await MarsStakingRewardsxxnBT6I.getRewardForDuration.call({from: accounts[0]});
//		await MarsStakingRewardsxxnBT6I.renounceOwnership.call({from: accounts[4]});
//		const uint256kkH1JGw = await MarsStakingRewardsxxnBT6I.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsxxnBT6I.inCaseTokensGetStuck.call(addressOowMxPU, uintTuqliEk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
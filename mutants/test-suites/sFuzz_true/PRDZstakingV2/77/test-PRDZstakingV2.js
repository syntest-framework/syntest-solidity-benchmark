const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2V8LSFE5 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGcPZi1V = accounts[0]
		const addresscM20FcX = "0x0000000000000000000000000000000000000001"
		const addressM6UQ6n6 = await PRDZstakingV2V8LSFE5.transferOwnership.call(addressGcPZi1V, {from: accounts[1]});
		await PRDZstakingV2V8LSFE5.claimScoreEth.call({from: accounts[0]});
		const uintW4ZtibX = await PRDZstakingV2V8LSFE5.getStakingScore.call(addresscM20FcX, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JlLIQOP = await PRDZstakingV2.new({from: accounts[4]});
		const addressMmg6d6Z = accounts[0]
		const addressVI7MNWx = accounts[2]
//		await PRDZstakingV2JlLIQOP.claimReward.call({from: accounts[1]});
//		const uintnHfL7jH = await PRDZstakingV2JlLIQOP.getStakingScore.call(addressMmg6d6Z, {from: accounts[0]});
		await PRDZstakingV2JlLIQOP.claimReward.call({from: accounts[1]});
//		const uintFyg3ksv = await PRDZstakingV2JlLIQOP.getScoreEth.call(addressVI7MNWx, {from: accounts[4]});
//		await PRDZstakingV2JlLIQOP.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2JlLIQOP.claimReward.call({from: accounts[3]});

		await expect(PRDZstakingV2JlLIQOP.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qz1z8g0 = await PRDZstakingV2.new({from: accounts[3]});
		const addresshr7fiyV = accounts[0]
		const addressP5TeWN4 = accounts[1]
		const addressYNgLr3r = accounts[1]
		const uintpvBNBXh = await PRDZstakingV2Qz1z8g0.getStakingScore.call(addresshr7fiyV, {from: "0x0000000000000000000000000000000000000001"});
		const uintmJJevxC = await PRDZstakingV2Qz1z8g0.getStakingScore.call(addressP5TeWN4, {from: accounts[4]});
		const uintHercnzu = await PRDZstakingV2Qz1z8g0.getTotalUnStaked.call({from: accounts[3]});
		const uintEvTtPKs = await PRDZstakingV2Qz1z8g0.getPendingReward.call(addressYNgLr3r, {from: accounts[3]});

		assert.equal(uintEvTtPKs, BigInt("0"))
		assert.equal(uintHercnzu, BigInt("0"))
		assert.equal(uintmJJevxC, BigInt("0"))
		assert.equal(uintpvBNBXh, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TrNO2ru = await PRDZstakingV2.new({from: accounts[3]});
		const uintiMxolW7 = BigInt("101")
		const uintrpTqv3s = await PRDZstakingV2TrNO2ru.getTotalClaimed.call({from: accounts[4]});
//		const uintgSEL7jy = await PRDZstakingV2TrNO2ru.unstake.call(uintiMxolW7, {from: accounts[3]});

		assert.equal(uintrpTqv3s, BigInt("0"))
		await expect(PRDZstakingV2TrNO2ru.unstake.call(uintiMxolW7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mOEjzMy = await PRDZstakingV2.new({from: accounts[5]});
		const uintQYSdfvJ = await PRDZstakingV2mOEjzMy.getTotalFeeCollected.call({from: accounts[3]});
		const uintpyaD00j = await PRDZstakingV2mOEjzMy.getTotalStaked.call({from: accounts[4]});
//		await PRDZstakingV2mOEjzMy.claimScoreEth.call({from: accounts[0]});
//		const uintkAKYqPS = await PRDZstakingV2mOEjzMy.getTotalFeeCollected.call({from: accounts[2]});

		assert.equal(uintQYSdfvJ, BigInt("0"))
		assert.equal(uintpyaD00j, BigInt("0"))
		await expect(PRDZstakingV2mOEjzMy.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2B4WQses = await PRDZstakingV2.new({from: accounts[4]});
		const uintaZ08cDx = BigInt("813")
//		await PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[3]});
//		const uintUGW2sVS = await PRDZstakingV2B4WQses.updateScoreEth.call(uintaZ08cDx, {from: accounts[0]});

		await expect(PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oR2QWt = await PRDZstakingV2.new({from: accounts[3]});
		const uintIF3a7f4 = BigInt("60")
//		await PRDZstakingV2oR2QWt.deposit.call({from: accounts[4]});
//		const uintPRfaCzZ = await PRDZstakingV2oR2QWt.getTotalUnStaked.call({from: accounts[5]});
//		const uint6TtYBC = await PRDZstakingV2oR2QWt.updateScoreEth.call(uintIF3a7f4, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2oR2QWt.deposit.call({from: accounts[4]});

		await expect(PRDZstakingV2oR2QWt.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qz1z8g0 = await PRDZstakingV2.new({from: accounts[3]});
		const addressICe4n7f = accounts[0]
		const addressRiToPlf = accounts[2]
		const addressHaTOpU1 = accounts[1]
		const uintpvBNBXh = await PRDZstakingV2Qz1z8g0.getStakingScore.call(addressICe4n7f, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2Qz1z8g0.onlyOwner.call({from: accounts[3]});
//		const uintmJJevxC = await PRDZstakingV2Qz1z8g0.getStakingScore.call(addressRiToPlf, {from: accounts[4]});
//		const uintHercnzu = await PRDZstakingV2Qz1z8g0.getTotalUnStaked.call({from: accounts[3]});
//		const uintEvTtPKs = await PRDZstakingV2Qz1z8g0.getPendingReward.call(addressHaTOpU1, {from: accounts[3]});

		assert.equal(uintpvBNBXh, BigInt("0"))
		await expect(PRDZstakingV2Qz1z8g0.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2B4WQses = await PRDZstakingV2.new({from: accounts[4]});
		const uintWabge68 = BigInt("813")
		const addresshNamlN3 = accounts[2]
//		await PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[3]});
//		const uintzK4WxLb = await PRDZstakingV2B4WQses.getNumberOfHolders.call({from: accounts[0]});
//		const uintUGW2sVS = await PRDZstakingV2B4WQses.updateScoreEth.call(uintWabge68, {from: accounts[0]});
//		const addressiEkOFC2 = await PRDZstakingV2B4WQses.transferOwnership.call(addresshNamlN3, {from: accounts[0]});

		await expect(PRDZstakingV2B4WQses.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2SfF5axx = await PRDZstakingV2.new({from: accounts[5]});
		const uintUSdMwAu = BigInt("1565")
		const uintGfx204K = BigInt("1882")
//		const uintFw50n1V = await PRDZstakingV2SfF5axx.stake.call(uintUSdMwAu, {from: accounts[4]});
//		const uintRtIQFDZ = await PRDZstakingV2SfF5axx.getTotalUnStaked.call({from: accounts[1]});
//		const uintNv4tI1x = await PRDZstakingV2SfF5axx.getNumberOfHolders.call({from: accounts[5]});
//		const uintAb5Qey3 = await PRDZstakingV2SfF5axx.unstake.call(uintGfx204K, {from: accounts[0]});
//		await PRDZstakingV2SfF5axx.deposit.call({from: accounts[1]});
//		const uinth5SCgQX = await PRDZstakingV2SfF5axx.getTotalStaked.call({from: accounts[3]});

		await expect(PRDZstakingV2SfF5axx.stake.call(uintUSdMwAu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2V91O91f = await PRDZstakingV2.new({from: accounts[0]});
		const uintfGu9DwW = BigInt("579")
		const uintkKSryg2 = await PRDZstakingV2V91O91f.getTotalUnStaked.call({from: accounts[2]});
		const uintY8ANjoo = await PRDZstakingV2V91O91f.getTotalClaimed.call({from: accounts[4]});
		const uintVfeImqC = await PRDZstakingV2V91O91f.getTotalUnStaked.call({from: accounts[3]});
		const uint03Qsgv = await PRDZstakingV2V91O91f.updateScoreEth.call(uintfGu9DwW, {from: accounts[0]});

		assert.equal(uintVfeImqC, BigInt("0"))
		assert.equal(uintY8ANjoo, BigInt("0"))
		assert.equal(uintkKSryg2, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2kOqdXt5 = await PRDZstakingV2.new({from: accounts[3]});
		const addressbbCNo67 = accounts[4]
		const uintZsqiEIG = BigInt("1907")
		const uintbgDUTj3 = BigInt("499")
		const addressuStZwJb = accounts[3]
		const addressW9U6SJ3 = accounts[4]
		const addressN5Zkelo = await PRDZstakingV2kOqdXt5.transferOwnership.call(addressbbCNo67, {from: accounts[3]});
//		const uint0hKNp9 = await PRDZstakingV2kOqdXt5.updateOffer.call(uintbgDUTj3, uintZsqiEIG, {from: accounts[2]});
//		const uintOURtft = await PRDZstakingV2kOqdXt5.getScoreEth.call(addressuStZwJb, {from: accounts[5]});
//		await PRDZstakingV2kOqdXt5.claimReward.call({from: accounts[4]});
//		const addressG2AEadj = await PRDZstakingV2kOqdXt5.transferOwnership.call(addressW9U6SJ3, {from: accounts[2]});

		await expect(PRDZstakingV2kOqdXt5.updateOffer.call(uintbgDUTj3, uintZsqiEIG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2wsXVAsw = await PRDZstakingV2.new({from: accounts[0]});
		const uintVgG6QZ5 = BigInt("1629")
		const uintcMIfFw7 = BigInt("698")
		const uintjYt80dV = await PRDZstakingV2wsXVAsw.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
		const uintD2LiCu3 = await PRDZstakingV2wsXVAsw.updateOffer.call(uintcMIfFw7, uintVgG6QZ5, {from: accounts[0]});
//		await PRDZstakingV2wsXVAsw.claimReward.call({from: accounts[0]});

		assert.equal(uintjYt80dV, BigInt("0"))
		await expect(PRDZstakingV2wsXVAsw.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
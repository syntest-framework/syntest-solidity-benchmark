const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewards96KkGw = await JGNRewards.new({from: accounts[2]});
		const addressgmfiOmB = accounts[0]
		const addressX4Sf9tz = accounts[2]
		const addresswnVFsin = accounts[1]
		const uint256TNEQQnM = await JGNRewards96KkGw.balanceOf.call(addressgmfiOmB, {from: accounts[0]});
		const uint256qVxqnc7 = await JGNRewards96KkGw.earned.call(addressX4Sf9tz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DcdIFbh = await JGNRewards96KkGw.earned.call(addresswnVFsin, {from: accounts[2]});

		assert.equal(uint256DcdIFbh, BigInt("0"))
		assert.equal(uint256TNEQQnM, BigInt("0"))
		assert.equal(uint256qVxqnc7, BigInt("0"))
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsJLBPfpj = await JGNRewards.new({from: accounts[4]});
		const addressDQXUrF = accounts[3]
		const addressJMamAoh = accounts[2]
		const uintz7tdINi = BigInt("902")
//		await JGNRewardsJLBPfpj.exit.call({from: accounts[1]});
//		const uint256plJlfge = await JGNRewardsJLBPfpj.earned.call(addressDQXUrF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrCkc5zr = await JGNRewardsJLBPfpj.updateReward.call(addressJMamAoh, {from: accounts[5]});
//		const uint256K43w7Rt = await JGNRewardsJLBPfpj.withdraw.call(uintz7tdINi, {from: accounts[4]});

		await expect(JGNRewardsJLBPfpj.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBEsADpb = await JGNRewards.new({from: accounts[0]});
		const addressmhq8mS5 = accounts[4]
		const uintLoItRtA = BigInt("1456")
//		const addressBOM9oLQ = await JGNRewardsBEsADpb.updateReward.call(addressmhq8mS5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256m9PY1uU = await JGNRewardsBEsADpb.withdraw.call(uintLoItRtA, {from: accounts[4]});
//		await JGNRewardsBEsADpb.exit.call({from: accounts[1]});

		await expect(JGNRewardsBEsADpb.updateReward.call(addressmhq8mS5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszfF8ESs = await JGNRewards.new({from: accounts[2]});
		const uintpsh3osA = BigInt("1016")
		const uintu88JWgf = BigInt("474")
		const addresskMNyvf = "0x0000000000000000000000000000000000000001"
//		const uint256W3X4pLk = await JGNRewardszfF8ESs.withdraw.call(uintpsh3osA, {from: accounts[5]});
//		const uint256x6x4wET = await JGNRewardszfF8ESs.stake.call(uintu88JWgf, {from: accounts[4]});
//		const uint256Bg7vzc7 = await JGNRewardszfF8ESs.earned.call(addresskMNyvf, {from: accounts[0]});
//		const uint256fwOTVKI = await JGNRewardszfF8ESs.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(JGNRewardszfF8ESs.withdraw.call(uintpsh3osA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsXXVRDno = await JGNRewards.new({from: accounts[5]});
		const addressrYC6dS = accounts[1]
		const uintjgmajfR = BigInt("70")
		const uintKefc5S2 = BigInt("437")
//		await JGNRewardsXXVRDno.getReward.call({from: accounts[4]});
//		const uint256OnaMemR = await JGNRewardsXXVRDno.earned.call(addressrYC6dS, {from: accounts[2]});
//		const uint256uBj483J = await JGNRewardsXXVRDno.withdraw.call(uintjgmajfR, {from: accounts[4]});
//		const uint256AuPvfS9 = await JGNRewardsXXVRDno.totalSupply.call({from: accounts[3]});
//		const uint256fthTl92 = await JGNRewardsXXVRDno.totalSupply.call({from: accounts[2]});
//		const uint256SUvn2tE = await JGNRewardsXXVRDno.stake.call(uintKefc5S2, {from: accounts[2]});

		await expect(JGNRewardsXXVRDno.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewards9Xy9MP = await JGNRewards.new({from: accounts[3]});
		const uintydqf9fE = BigInt("753")
		const uint256Sfvoe9g = await JGNRewards9Xy9MP.totalSupply.call({from: accounts[2]});
//		const uint256Sm4bFht = await JGNRewards9Xy9MP.notifyRewardAmount.call(uintydqf9fE, {from: accounts[2]});
//		await JGNRewards9Xy9MP.getReward.call({from: accounts[3]});

		assert.equal(uint256Sfvoe9g, BigInt("0"))
		await expect(JGNRewards9Xy9MP.notifyRewardAmount.call(uintydqf9fE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsQ6y0wpr = await JGNRewards.new({from: accounts[1]});
		const uintyeqSFXh = BigInt("1330")
		const uintcOV4tk = BigInt("608")
		const addressB5Pt12U = accounts[4]
//		const uint256ajOqOi8 = await JGNRewardsQ6y0wpr.stake.call(uintyeqSFXh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YHiDmqM = await JGNRewardsQ6y0wpr.notifyRewardAmount.call(uintcOV4tk, {from: accounts[1]});
//		const addressqJQeNLj = await JGNRewardsQ6y0wpr.updateReward.call(addressB5Pt12U, {from: accounts[5]});

		await expect(JGNRewardsQ6y0wpr.stake.call(uintyeqSFXh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsXAhzHjS = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHhgMvyZ = BigInt("1088")
		const uint256w1NMg5X = await JGNRewardsXAhzHjS.stake.call(uintHhgMvyZ, {from: accounts[3]});
		await JGNRewardsXAhzHjS.checkStart.call({from: accounts[1]});
	});
})
const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardHLDamqR = await AavePoolReward.new({from: accounts[1]});
		const addresssAFlDqG = accounts[1]
		const uint256HgAwpHr = await AavePoolRewardHLDamqR.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256WYZ1c9 = await AavePoolRewardHLDamqR.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressUSf1SEX = await AavePoolRewardHLDamqR.updateReward.call(addresssAFlDqG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256HgAwpHr, BigInt("0"))
		assert.equal(uint256WYZ1c9, BigInt("0"))
		await expect(AavePoolRewardHLDamqR.updateReward.call(addresssAFlDqG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcPXFpeo = await AavePoolReward.new({from: accounts[5]});
		const uintajZ95Gv = BigInt("637")
		const addresswkYtLh = accounts[5]
		const uint256rhlxrG7 = await AavePoolRewardcPXFpeo.stake.call(uintajZ95Gv, {from: accounts[5]});
		await AavePoolRewardcPXFpeo.exit.call({from: accounts[5]});
		const uint256P0GGLOi = await AavePoolRewardcPXFpeo.earned.call(addresswkYtLh, {from: accounts[0]});

		await expect(AavePoolRewardcPXFpeo.stake.call(uintajZ95Gv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardngW0Tfe = await AavePoolReward.new({from: accounts[5]});
		const uinty6uZ1I = BigInt("1165")
		const uint256OrulpCd = await AavePoolRewardngW0Tfe.notifyRewardAmount.call(uinty6uZ1I, {from: accounts[1]});
		const uint256xg3auJ = await AavePoolRewardngW0Tfe.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardngW0Tfe.notifyRewardAmount.call(uinty6uZ1I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardACz626J = await AavePoolReward.new({from: accounts[2]});
		const addressOhOqn5D = accounts[2]
		const uintZMjGqVp = BigInt("306")
		const addressgDfZhkg = accounts[4]
		const uintVRJ3gBs = BigInt("1375")
		const addressQoByOmX = await AavePoolRewardACz626J.dev.call(addressOhOqn5D, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pwWn3lD = await AavePoolRewardACz626J.stake.call(uintZMjGqVp, {from: accounts[3]});
		const addresseMChVrI = await AavePoolRewardACz626J.updateReward.call(addressgDfZhkg, {from: accounts[1]});
		const uint256eiZTzhn = await AavePoolRewardACz626J.stake.call(uintVRJ3gBs, {from: accounts[3]});
		await AavePoolRewardACz626J.getReward.call({from: accounts[4]});

		await expect(AavePoolRewardACz626J.dev.call(addressOhOqn5D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardeulbJe = await AavePoolReward.new({from: accounts[0]});
		const uintNUsXbkK = BigInt("1811")
		const uintZNGHptD = BigInt("342")
		const uintullL7D = BigInt("2046")
		const uint256PKvZKC2 = await AavePoolRewardeulbJe.withdraw.call(uintNUsXbkK, {from: accounts[3]});
		const uint256IsLoKSY = await AavePoolRewardeulbJe.notifyRewardAmount.call(uintZNGHptD, {from: accounts[4]});
		await AavePoolRewardeulbJe.exit.call({from: accounts[1]});
		const uint256w9Gv1Jt = await AavePoolRewardeulbJe.stake.call(uintullL7D, {from: accounts[0]});
		const uint256NCpbEpM = await AavePoolRewardeulbJe.rewardPerToken.call({from: accounts[5]});

		await expect(AavePoolRewardeulbJe.withdraw.call(uintNUsXbkK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcPXFpeo = await AavePoolReward.new({from: accounts[5]});
		const addressf8f6qS7 = accounts[5]
		await AavePoolRewardcPXFpeo.exit.call({from: accounts[5]});
		const uint256P0GGLOi = await AavePoolRewardcPXFpeo.earned.call(addressf8f6qS7, {from: accounts[0]});

		await expect(AavePoolRewardcPXFpeo.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpdmTvxb = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseJZToxO = accounts[2]
		const addressoNZuPTK = await AavePoolRewardpdmTvxb.updateReward.call(addresseJZToxO, {from: accounts[0]});
		const uint256IAEHA4 = await AavePoolRewardpdmTvxb.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardpdmTvxb.exit.call({from: accounts[2]});
		const uint256AxeobxH = await AavePoolRewardpdmTvxb.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhVIJPH3 = await AavePoolReward.new({from: accounts[0]});
		const uintAagnXKy = BigInt("1959")
		const addressUsU4Ja3 = accounts[3]
		const uint6teGUG = BigInt("1299")
		const uintUCh5E2c = BigInt("1550")
		const uint256PGNDfvq = await AavePoolRewardhVIJPH3.notifyRewardAmount.call(uintAagnXKy, {from: accounts[0]});
		const uint256PAnmI6u = await AavePoolRewardhVIJPH3.earned.call(addressUsU4Ja3, {from: accounts[2]});
		const uint256FUTZEbI = await AavePoolRewardhVIJPH3.withdraw.call(uint6teGUG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LlSHiG9 = await AavePoolRewardhVIJPH3.rewardPerToken.call({from: accounts[2]});
		const uint256c3FUjDN = await AavePoolRewardhVIJPH3.stake.call(uintUCh5E2c, {from: accounts[0]});

		assert.equal(uint256PAnmI6u, BigInt("0"))
		await expect(AavePoolRewardhVIJPH3.withdraw.call(uint6teGUG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcPXFpeo = await AavePoolReward.new({from: accounts[5]});
		const addressn6LQ3zp = accounts[2]
		const uintbdIoKV0 = BigInt("433")
		const uintgNaE0AM = BigInt("1175")
		const addressVMWYVVW = await AavePoolRewardcPXFpeo.dev.call(addressn6LQ3zp, {from: accounts[5]});
		const uint256Ls78Ri6 = await AavePoolRewardcPXFpeo.notifyRewardAmount.call(uintbdIoKV0, {from: accounts[1]});
		const uint256rhlxrG7 = await AavePoolRewardcPXFpeo.stake.call(uintgNaE0AM, {from: accounts[5]});

		await expect(AavePoolRewardcPXFpeo.notifyRewardAmount.call(uintbdIoKV0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
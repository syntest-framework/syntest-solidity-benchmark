const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardwxVFqQr = await AavePoolReward.new({from: accounts[5]});
		const uintVm8zmV = BigInt("1809")
		const addressDKveLaU = accounts[4]
		const uintiofnxKm = BigInt("1520")
		const uint256WpSJH27 = await AavePoolRewardwxVFqQr.stake.call(uintVm8zmV, {from: accounts[3]});
		await AavePoolRewardwxVFqQr.getReward.call({from: accounts[2]});
		const uint256E3mHmbC = await AavePoolRewardwxVFqQr.earned.call(addressDKveLaU, {from: accounts[5]});
		const uint256XUYKzph = await AavePoolRewardwxVFqQr.withdraw.call(uintiofnxKm, {from: accounts[0]});

		await expect(AavePoolRewardwxVFqQr.stake.call(uintVm8zmV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardzk2xXqd = await AavePoolReward.new({from: accounts[3]});
		await AavePoolRewardzk2xXqd.getReward.call({from: accounts[1]});
		await AavePoolRewardzk2xXqd.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yW42uOW = await AavePoolRewardzk2xXqd.rewardPerToken.call({from: accounts[2]});
		await AavePoolRewardzk2xXqd.getReward.call({from: accounts[3]});

		await expect(AavePoolRewardzk2xXqd.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardHwzGhiF = await AavePoolReward.new({from: accounts[5]});
		const addressoLcyP67 = accounts[4]
		const uintrzsCv6r = BigInt("966")
		const addressFIeUt7Y = accounts[3]
		const addresshqJRmqv = await AavePoolRewardHwzGhiF.dev.call(addressoLcyP67, {from: accounts[3]});
		const uint256EG887DH = await AavePoolRewardHwzGhiF.stake.call(uintrzsCv6r, {from: accounts[4]});
		const addressA6U5X0W = await AavePoolRewardHwzGhiF.dev.call(addressFIeUt7Y, {from: accounts[0]});

		await expect(AavePoolRewardHwzGhiF.dev.call(addressoLcyP67, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardoh0uwN = await AavePoolReward.new({from: accounts[0]});
		const addressVBhpiC = accounts[0]
		const uintaXyFFZ7 = BigInt("1901")
		const uintLlrZy46 = BigInt("735")
		const uintCNctD4w = BigInt("417")
		const uint256kZmyBy2 = await AavePoolRewardoh0uwN.earned.call(addressVBhpiC, {from: accounts[4]});
		const uint256nCleFs = await AavePoolRewardoh0uwN.rewardPerToken.call({from: accounts[2]});
		const uint256BZjMDuC = await AavePoolRewardoh0uwN.notifyRewardAmount.call(uintaXyFFZ7, {from: accounts[1]});
		const uint256KPJc5K3 = await AavePoolRewardoh0uwN.notifyRewardAmount.call(uintLlrZy46, {from: accounts[3]});
		const uint256KYBtmco = await AavePoolRewardoh0uwN.withdraw.call(uintCNctD4w, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256kZmyBy2, BigInt("0"))
		assert.equal(uint256nCleFs, BigInt("0"))
		await expect(AavePoolRewardoh0uwN.notifyRewardAmount.call(uintaXyFFZ7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardHwzGhiF = await AavePoolReward.new({from: accounts[5]});
		const uintO4yQU4e = BigInt("1091")
		const addressJGJSwgM = accounts[4]
		const uintxUHNzzH = BigInt("966")
		const addressVDLEyqA = accounts[4]
		const uint256ohFkWXS = await AavePoolRewardHwzGhiF.withdraw.call(uintO4yQU4e, {from: accounts[2]});
		const addresshqJRmqv = await AavePoolRewardHwzGhiF.dev.call(addressJGJSwgM, {from: accounts[3]});
		const uint256EG887DH = await AavePoolRewardHwzGhiF.stake.call(uintxUHNzzH, {from: accounts[4]});
		const addressA6U5X0W = await AavePoolRewardHwzGhiF.dev.call(addressVDLEyqA, {from: accounts[0]});

		await expect(AavePoolRewardHwzGhiF.withdraw.call(uintO4yQU4e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardiPn1DWG = await AavePoolReward.new({from: accounts[1]});
		const addressKneYUul = accounts[1]
		const uint256JJJrqKi = await AavePoolRewardiPn1DWG.rewardPerToken.call({from: accounts[2]});
		const addressx0SThwc = await AavePoolRewardiPn1DWG.updateReward.call(addressKneYUul, {from: accounts[1]});
		await AavePoolRewardiPn1DWG.getReward.call({from: accounts[2]});
		await AavePoolRewardiPn1DWG.exit.call({from: accounts[4]});

		assert.equal(uint256JJJrqKi, BigInt("0"))
		await expect(AavePoolRewardiPn1DWG.updateReward.call(addressKneYUul, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardiPn1DWG = await AavePoolReward.new({from: accounts[1]});
		const uintZky9TgC = BigInt("313")
		await AavePoolRewardiPn1DWG.getReward.call({from: accounts[2]});
		const uint256KAK2rPQ = await AavePoolRewardiPn1DWG.notifyRewardAmount.call(uintZky9TgC, {from: accounts[1]});

		await expect(AavePoolRewardiPn1DWG.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardiPn1DWG = await AavePoolReward.new({from: accounts[1]});
		const addressyVmpRut = accounts[0]
		const addressDu8f5HV = accounts[1]
		await AavePoolRewardiPn1DWG.getReward.call({from: accounts[2]});
		const uint256NaSKzn1 = await AavePoolRewardiPn1DWG.earned.call(addressyVmpRut, {from: accounts[0]});
		const addressdKtFjZL = await AavePoolRewardiPn1DWG.dev.call(addressDu8f5HV, {from: accounts[1]});

		await expect(AavePoolRewardiPn1DWG.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardEGbcN0T = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintykMYAzZ = BigInt("1702")
		const addressfrRKGk = "0x0000000000000000000000000000000000000001"
		const uint256X7mudYn = await AavePoolRewardEGbcN0T.rewardPerToken.call({from: accounts[2]});
		const uint256ZPYkbI = await AavePoolRewardEGbcN0T.notifyRewardAmount.call(uintykMYAzZ, {from: accounts[2]});
		const uint256jObBUH = await AavePoolRewardEGbcN0T.earned.call(addressfrRKGk, {from: accounts[4]});
		const uint256vhMbsWg = await AavePoolRewardEGbcN0T.lastTimeRewardApplicable.call({from: accounts[2]});
	});
})
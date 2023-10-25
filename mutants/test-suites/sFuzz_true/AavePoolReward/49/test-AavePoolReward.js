const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardEiyPXcd = await AavePoolReward.new({from: accounts[2]});
		const uintc0YfzcH = BigInt("587")
		const uintL9sidR4 = BigInt("215")
		const addressI2T4bqr = accounts[3]
//		const uint256pDSo3Bg = await AavePoolRewardEiyPXcd.stake.call(uintc0YfzcH, {from: accounts[0]});
//		const uint256eDYrl0X = await AavePoolRewardEiyPXcd.withdraw.call(uintL9sidR4, {from: accounts[5]});
//		const uint256yDZlpIH = await AavePoolRewardEiyPXcd.earned.call(addressI2T4bqr, {from: accounts[1]});

		await expect(AavePoolRewardEiyPXcd.stake.call(uintc0YfzcH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardKmDy1Kc = await AavePoolReward.new({from: accounts[3]});
		const uintxFh0cxF = BigInt("350")
//		await AavePoolRewardKmDy1Kc.getReward.call({from: accounts[4]});
//		const uint256DAg4tDU = await AavePoolRewardKmDy1Kc.notifyRewardAmount.call(uintxFh0cxF, {from: accounts[5]});
//		await AavePoolRewardKmDy1Kc.exit.call({from: accounts[2]});

		await expect(AavePoolRewardKmDy1Kc.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardgUN8tHE = await AavePoolReward.new({from: accounts[3]});
		const uints4gRF2W = BigInt("800")
		const uintsM9RLGv = BigInt("1469")
		const addressTZjOYEg = accounts[3]
//		const uint256DjdGGEZ = await AavePoolRewardgUN8tHE.withdraw.call(uints4gRF2W, {from: accounts[2]});
//		const uint256ZTZ6Z6 = await AavePoolRewardgUN8tHE.stake.call(uintsM9RLGv, {from: accounts[0]});
//		const uint256Y5sUtqs = await AavePoolRewardgUN8tHE.earned.call(addressTZjOYEg, {from: accounts[2]});

		await expect(AavePoolRewardgUN8tHE.withdraw.call(uints4gRF2W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOzr2NUw = await AavePoolReward.new({from: accounts[4]});
		const addressRFLgUMa = accounts[0]
//		await AavePoolRewardOzr2NUw.exit.call({from: accounts[3]});
//		const uint256CzxYbAt = await AavePoolRewardOzr2NUw.earned.call(addressRFLgUMa, {from: accounts[4]});

		await expect(AavePoolRewardOzr2NUw.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardatDolHS = await AavePoolReward.new({from: accounts[0]});
		const addressLaOB5vH = accounts[2]
		const addressZXHPDWb = "0x0000000000000000000000000000000000000001"
//		const addressQErmfix = await AavePoolRewardatDolHS.updateReward.call(addressLaOB5vH, {from: accounts[1]});
//		const uint256uuxdq2O = await AavePoolRewardatDolHS.rewardPerToken.call({from: accounts[1]});
//		const addressrwZEfYa = await AavePoolRewardatDolHS.updateReward.call(addressZXHPDWb, {from: accounts[1]});

		await expect(AavePoolRewardatDolHS.updateReward.call(addressLaOB5vH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardEiyPXcd = await AavePoolReward.new({from: accounts[2]});
		const addresssqTCe31 = accounts[1]
		const uintbvKmtc1 = BigInt("565")
		const uintKGfpX8K = BigInt("215")
		const uintQNR4Myv = BigInt("533")
		const addressFCHYnNx = accounts[3]
		const addressIULkQVU = await AavePoolRewardEiyPXcd.dev.call(addresssqTCe31, {from: accounts[2]});
//		const uint256pDSo3Bg = await AavePoolRewardEiyPXcd.stake.call(uintbvKmtc1, {from: accounts[0]});
//		const uint256eDYrl0X = await AavePoolRewardEiyPXcd.withdraw.call(uintKGfpX8K, {from: accounts[5]});
//		const uint256V1ZubeR = await AavePoolRewardEiyPXcd.stake.call(uintQNR4Myv, {from: accounts[0]});
//		const uint256yDZlpIH = await AavePoolRewardEiyPXcd.earned.call(addressFCHYnNx, {from: accounts[1]});

		await expect(AavePoolRewardEiyPXcd.stake.call(uintbvKmtc1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOzr2NUw = await AavePoolReward.new({from: accounts[4]});
		const addressYvFF7u3 = accounts[5]
		const addressgTjAKw9 = accounts[0]
//		const addressceB0PAB = await AavePoolRewardOzr2NUw.dev.call(addressYvFF7u3, {from: accounts[2]});
//		const uint2568jI147 = await AavePoolRewardOzr2NUw.rewardPerToken.call({from: accounts[1]});
//		await AavePoolRewardOzr2NUw.exit.call({from: accounts[3]});
//		const uint256vIGgG3E = await AavePoolRewardOzr2NUw.earned.call(addressgTjAKw9, {from: accounts[3]});

		await expect(AavePoolRewardOzr2NUw.dev.call(addressYvFF7u3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardVQzmhFc = await AavePoolReward.new({from: accounts[3]});
		const uintmMBqxNS = BigInt("1180")
		const uint256FZaIa9A = await AavePoolRewardVQzmhFc.notifyRewardAmount.call(uintmMBqxNS, {from: accounts[3]});
//		await AavePoolRewardVQzmhFc.getReward.call({from: accounts[1]});

		await expect(AavePoolRewardVQzmhFc.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardx1EkUjx = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmrn9eRn = BigInt("278")
		const addresso6Khvyh = accounts[2]
		const uint256p0BUsdT = await AavePoolRewardx1EkUjx.notifyRewardAmount.call(uintmrn9eRn, {from: accounts[5]});
		const uint256Bohchos = await AavePoolRewardx1EkUjx.rewardPerToken.call({from: accounts[0]});
		const addressUYynt5T = await AavePoolRewardx1EkUjx.updateReward.call(addresso6Khvyh, {from: accounts[1]});
	});
})
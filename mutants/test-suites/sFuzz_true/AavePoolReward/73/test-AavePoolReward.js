const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardVEaJcwV = await AavePoolReward.new({from: accounts[3]});
		const addressAk0po7w = accounts[1]
		const uintWvbWCxx = BigInt("172")
		const addressbCBgoM6 = accounts[4]
		const uintWUJHzTu = BigInt("1258")
		const uint256UiVxauD = await AavePoolRewardVEaJcwV.earned.call(addressAk0po7w, {from: accounts[4]});
//		const uint256rpHLoVg = await AavePoolRewardVEaJcwV.withdraw.call(uintWvbWCxx, {from: accounts[5]});
//		const addressz4rqJT = await AavePoolRewardVEaJcwV.dev.call(addressbCBgoM6, {from: accounts[0]});
//		const uint256NXWlTN0 = await AavePoolRewardVEaJcwV.rewardPerToken.call({from: accounts[5]});
//		const uint256sIBtd8 = await AavePoolRewardVEaJcwV.withdraw.call(uintWUJHzTu, {from: accounts[4]});

		assert.equal(uint256UiVxauD, BigInt("0"))
		await expect(AavePoolRewardVEaJcwV.withdraw.call(uintWvbWCxx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardISbcUDo = await AavePoolReward.new({from: accounts[2]});
		const uintB04eZz = BigInt("202")
		const uintu9t1n6H = BigInt("2013")
		const uintM8E8ijx = BigInt("1113")
		const uintTyfpM7e = BigInt("1013")
		const addressplnVCEQ = accounts[1]
		const uintqPrkjbM = BigInt("1521")
		const uint256c6JHKm9 = await AavePoolRewardISbcUDo.notifyRewardAmount.call(uintB04eZz, {from: accounts[2]});
//		const uint256kOwby7h = await AavePoolRewardISbcUDo.stake.call(uintu9t1n6H, {from: accounts[1]});
//		const uint256GbkEnO = await AavePoolRewardISbcUDo.notifyRewardAmount.call(uintM8E8ijx, {from: accounts[1]});
//		const uint256L5O6W4g = await AavePoolRewardISbcUDo.notifyRewardAmount.call(uintTyfpM7e, {from: accounts[1]});
//		const uint256Vtjfvsp = await AavePoolRewardISbcUDo.earned.call(addressplnVCEQ, {from: accounts[3]});
//		const uint256LjjWEMq = await AavePoolRewardISbcUDo.withdraw.call(uintqPrkjbM, {from: accounts[3]});

		await expect(AavePoolRewardISbcUDo.stake.call(uintu9t1n6H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardfTDCmM = await AavePoolReward.new({from: accounts[1]});
		const uintMoB4PHk = BigInt("1254")
		const uintpwLYoPe = BigInt("68")
//		const uint256s2YIlGU = await AavePoolRewardfTDCmM.notifyRewardAmount.call(uintMoB4PHk, {from: accounts[2]});
//		await AavePoolRewardfTDCmM.getReward.call({from: accounts[1]});
//		const uint256jxqomkH = await AavePoolRewardfTDCmM.stake.call(uintpwLYoPe, {from: accounts[1]});

		await expect(AavePoolRewardfTDCmM.notifyRewardAmount.call(uintMoB4PHk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardyrIlKb2 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvyNxHwO = accounts[3]
		const addressSCpdWQS = accounts[4]
		const addressTRSvQWq = await AavePoolRewardyrIlKb2.dev.call(addressvyNxHwO, {from: accounts[5]});
		await AavePoolRewardyrIlKb2.getReward.call({from: accounts[4]});
		const uint256zENRKI = await AavePoolRewardyrIlKb2.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ZRwuWur = await AavePoolRewardyrIlKb2.earned.call(addressSCpdWQS, {from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardNzvOV7y = await AavePoolReward.new({from: accounts[1]});
		const addresshQeUwPR = accounts[5]
		const addressp9izUQX = accounts[2]
		const uintFtaJiAn = BigInt("1614")
//		const addresseyJGNm6 = await AavePoolRewardNzvOV7y.dev.call(addresshQeUwPR, {from: accounts[4]});
//		const address4lxtnl = await AavePoolRewardNzvOV7y.dev.call(addressp9izUQX, {from: accounts[3]});
//		const uint256pCeM59x = await AavePoolRewardNzvOV7y.stake.call(uintFtaJiAn, {from: accounts[2]});

		await expect(AavePoolRewardNzvOV7y.dev.call(addresshQeUwPR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardsE354mD = await AavePoolReward.new({from: accounts[4]});
		const addressmnEa6L = accounts[1]
		const uintiJbmDqU = BigInt("2033")
		const uint256uwsFgpE = await AavePoolRewardsE354mD.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256MDOvpLY = await AavePoolRewardsE354mD.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressnhWvcPn = await AavePoolRewardsE354mD.updateReward.call(addressmnEa6L, {from: accounts[2]});
//		const uint256IB7giHd = await AavePoolRewardsE354mD.stake.call(uintiJbmDqU, {from: accounts[2]});

		assert.equal(uint256MDOvpLY, BigInt("0"))
		assert.equal(uint256uwsFgpE, BigInt("0"))
		await expect(AavePoolRewardsE354mD.updateReward.call(addressmnEa6L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSdi5ndn = await AavePoolReward.new({from: accounts[0]});
		const addressxk2Yc0n = accounts[2]
		const uint256rO9hMWM = await AavePoolRewardSdi5ndn.lastTimeRewardApplicable.call({from: accounts[4]});
//		await AavePoolRewardSdi5ndn.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardSdi5ndn.getReward.call({from: accounts[1]});
//		const addressM47FCAd = await AavePoolRewardSdi5ndn.updateReward.call(addressxk2Yc0n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rO9hMWM, BigInt("0"))
		await expect(AavePoolRewardSdi5ndn.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSdi5ndn = await AavePoolReward.new({from: accounts[0]});
		const addressFkA8Y0X = accounts[1]
		const addressTe4CcZe = "0x0000000000000000000000000000000000000001"
		const addressLtiQiCH = await AavePoolRewardSdi5ndn.dev.call(addressFkA8Y0X, {from: accounts[0]});
//		const addressmNnVkBb = await AavePoolRewardSdi5ndn.dev.call(addressTe4CcZe, {from: accounts[4]});

		await expect(AavePoolRewardSdi5ndn.dev.call(addressTe4CcZe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
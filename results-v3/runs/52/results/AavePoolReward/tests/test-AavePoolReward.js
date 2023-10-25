const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardfQGmY4 = await AavePoolReward.new({from: accounts[3]});
		const uintc4tlfR = BigInt("118")
		const addresseYZdCAI = accounts[4]
		const uintUPOYZC3 = BigInt("792")
		const uint256LiYgWFM = await AavePoolRewardfQGmY4.lastTimeRewardApplicable.call({from: accounts[5]});
		await AavePoolRewardfQGmY4.getReward.call({from: accounts[1]});
		const uint256Kb40Tr7 = await AavePoolRewardfQGmY4.stake.call(uintc4tlfR, {from: accounts[0]});
		const addressdWwS5VJ = await AavePoolRewardfQGmY4.dev.call(addresseYZdCAI, {from: accounts[4]});
		const uint256OYWbKkv = await AavePoolRewardfQGmY4.notifyRewardAmount.call(uintUPOYZC3, {from: accounts[0]});

		assert.equal(uint256LiYgWFM, BigInt("0"))
		await expect(AavePoolRewardfQGmY4.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardp4GnLIx = await AavePoolReward.new({from: accounts[0]});
		const uintmj9fubm = BigInt("11")
		const uint256VnF0YEm = await AavePoolRewardp4GnLIx.withdraw.call(uintmj9fubm, {from: accounts[4]});
		const uint256FH0expE = await AavePoolRewardp4GnLIx.rewardPerToken.call({from: accounts[5]});
		await AavePoolRewardp4GnLIx.exit.call({from: accounts[4]});
		await AavePoolRewardp4GnLIx.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardp4GnLIx.withdraw.call(uintmj9fubm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardljGhkr6 = await AavePoolReward.new({from: accounts[0]});
		const uinta8pRML = BigInt("1274")
		const uintCQejpXd = BigInt("1580")
		const uint256FDpfhGA = await AavePoolRewardljGhkr6.notifyRewardAmount.call(uinta8pRML, {from: accounts[0]});
		await AavePoolRewardljGhkr6.getReward.call({from: accounts[1]});
		await AavePoolRewardljGhkr6.exit.call({from: accounts[1]});
		const uint256TtwstF = await AavePoolRewardljGhkr6.stake.call(uintCQejpXd, {from: accounts[4]});

		await expect(AavePoolRewardljGhkr6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhooR4qT = await AavePoolReward.new({from: accounts[5]});
		const uintVw0US69 = BigInt("1325")
		const uintCrpVo00 = BigInt("394")
		const uintRv5S5pB = BigInt("1034")
		const uintCOVMQ7j = BigInt("1847")
		const uint256uYxbfAe = await AavePoolRewardhooR4qT.notifyRewardAmount.call(uintVw0US69, {from: accounts[2]});
		const uint256ivbS55w = await AavePoolRewardhooR4qT.notifyRewardAmount.call(uintCrpVo00, {from: accounts[2]});
		const uint256FnPCm57 = await AavePoolRewardhooR4qT.notifyRewardAmount.call(uintRv5S5pB, {from: accounts[0]});
		const uint256BdVXcC1 = await AavePoolRewardhooR4qT.notifyRewardAmount.call(uintCOVMQ7j, {from: accounts[0]});

		await expect(AavePoolRewardhooR4qT.notifyRewardAmount.call(uintVw0US69, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardfo1mkPZ = await AavePoolReward.new({from: accounts[0]});
		const addressiWUuYzo = accounts[2]
		const addressSK3lnBr = accounts[0]
		const uint256R4l6Iz = await AavePoolRewardfo1mkPZ.rewardPerToken.call({from: accounts[2]});
		const addressupOhL1l = await AavePoolRewardfo1mkPZ.dev.call(addressiWUuYzo, {from: accounts[2]});
		const addresscHDCrsh = await AavePoolRewardfo1mkPZ.dev.call(addressSK3lnBr, {from: accounts[4]});

		assert.equal(uint256R4l6Iz, BigInt("0"))
		await expect(AavePoolRewardfo1mkPZ.dev.call(addressiWUuYzo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq76IjgA = await AavePoolReward.new({from: accounts[2]});
		const addressbwxgiBl = accounts[0]
		const addresskiH8p1p = accounts[4]
		const uintDAhXPXg = BigInt("1950")
		const addresspCarxNb = accounts[2]
		const uinti9ugoYs = BigInt("668")
		const uint256y75nwO = await AavePoolRewardq76IjgA.earned.call(addressbwxgiBl, {from: accounts[4]});
		const addressKIiJEsN = await AavePoolRewardq76IjgA.updateReward.call(addresskiH8p1p, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qMMnjkr = await AavePoolRewardq76IjgA.stake.call(uintDAhXPXg, {from: accounts[1]});
		const uint256CsbGWNH = await AavePoolRewardq76IjgA.rewardPerToken.call({from: accounts[0]});
		const uint256vHPYBE = await AavePoolRewardq76IjgA.earned.call(addresspCarxNb, {from: accounts[3]});
		const uint256VVdgcg = await AavePoolRewardq76IjgA.notifyRewardAmount.call(uinti9ugoYs, {from: accounts[1]});

		assert.equal(uint256y75nwO, BigInt("0"))
		await expect(AavePoolRewardq76IjgA.updateReward.call(addresskiH8p1p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardXRRTjOF = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXVlM4rU = accounts[5]
		const uintnS7j4fc = BigInt("1256")
		const uint256wPS8atd = await AavePoolRewardXRRTjOF.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256TtDMEbj = await AavePoolRewardXRRTjOF.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressZ1MWF3P = await AavePoolRewardXRRTjOF.updateReward.call(addressXVlM4rU, {from: accounts[4]});
		await AavePoolRewardXRRTjOF.exit.call({from: accounts[2]});
		const uint256X0iV1Sa = await AavePoolRewardXRRTjOF.notifyRewardAmount.call(uintnS7j4fc, {from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardfo1mkPZ = await AavePoolReward.new({from: accounts[0]});
		const addressYwAWCUH = accounts[2]
		const addressf1BIL8O = accounts[1]
		const addressKwf6Zlg = accounts[0]
		const uinty9lkuoz = BigInt("6")
		await AavePoolRewardfo1mkPZ.getReward.call({from: accounts[1]});
		const addressTJ004Qp = await AavePoolRewardfo1mkPZ.dev.call(addressYwAWCUH, {from: accounts[0]});
		const uint256DFLNDs8 = await AavePoolRewardfo1mkPZ.earned.call(addressf1BIL8O, {from: accounts[0]});
		const uint256R4l6Iz = await AavePoolRewardfo1mkPZ.rewardPerToken.call({from: accounts[2]});
		await AavePoolRewardfo1mkPZ.getReward.call({from: accounts[0]});
		const uint256Hro5udK = await AavePoolRewardfo1mkPZ.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256NJUtmnr = await AavePoolRewardfo1mkPZ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wV7CaM9 = await AavePoolRewardfo1mkPZ.lastTimeRewardApplicable.call({from: accounts[1]});
		const addresscHDCrsh = await AavePoolRewardfo1mkPZ.dev.call(addressKwf6Zlg, {from: accounts[4]});
		const uint256En8Bejk = await AavePoolRewardfo1mkPZ.stake.call(uinty9lkuoz, {from: accounts[0]});

		await expect(AavePoolRewardfo1mkPZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
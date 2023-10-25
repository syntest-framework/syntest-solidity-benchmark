const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingfm1S5tf = await LpStaking.new({from: accounts[4]});
		const uint1KmBIk = BigInt("251")
		const uint256hgYpFHr = await LpStakingfm1S5tf.weiToSatoshi.call(uint1KmBIk, {from: accounts[4]});
		const uint256kSetjgQ = await LpStakingfm1S5tf.lastTimeRewardApplicable.call({from: accounts[4]});
		await LpStakingfm1S5tf.lpIncomeRateChanged.call({from: accounts[1]});
		const uint256lTMiOrC = await LpStakingfm1S5tf.incomePerToken.call({from: accounts[1]});
		await LpStakingfm1S5tf.lpRewardRateChanged.call({from: accounts[2]});

		assert.equal(uint256hgYpFHr, BigInt("0"))
		await expect(LpStakingfm1S5tf.lastTimeRewardApplicable.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingnaXbZQF = await LpStaking.new({from: accounts[2]});
		const addresswGjF5JN = accounts[5]
		const bytesR8nYb8 = "0x08092009101e1f1f190c17131d0e1b020e0b03071b02181a1318170a00120c16"
		const byteMcOtm7 = "0x18040b20100406010e010c020d131b01070c11040c141c051c0c1c081e1b171f"
		const uintVlSInzc = BigInt("214")
		const uintl3vOHDT = BigInt("2042")
		const uintMPkw1rL = BigInt("29")
		const uint256K5dA1lP = await LpStakingnaXbZQF.rewardPerToken.call({from: accounts[4]});
		const addressnLsZwKz = await LpStakingnaXbZQF.updateIncome.call(addresswGjF5JN, {from: accounts[2]});
		const uint256OKJzc2m = await LpStakingnaXbZQF.stakeWithPermit.call(uintMPkw1rL, uintl3vOHDT, uintVlSInzc, byteMcOtm7, bytesR8nYb8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dk5LN8c = await LpStakingnaXbZQF.incomePerToken.call({from: accounts[2]});
		await LpStakingnaXbZQF.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256K5dA1lP, BigInt("0"))
		await expect(LpStakingnaXbZQF.updateIncome.call(addresswGjF5JN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsj1O0So = await LpStaking.new({from: accounts[1]});
		const addressBQSCSJ = accounts[4]
		const addressVhbi55j = accounts[3]
		const addressJLVgyw = accounts[0]
		const addresskDWd9At = accounts[3]
		const addressMCPvmdc = accounts[3]
		const addressjqrsC7g = await LpStakingsj1O0So.initialize.call(addresskDWd9At, addressJLVgyw, addressVhbi55j, addressBQSCSJ, {from: accounts[1]});
		const uint256G0vAdA1 = await LpStakingsj1O0So.rewardEarned.call(addressMCPvmdc, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingsj1O0So.nonEmergencyStop.call({from: accounts[3]});
		await LpStakingsj1O0So.nonEmergencyStop.call({from: accounts[4]});

		assert.equal(uint256G0vAdA1, BigInt("0"))
		await expect(LpStakingsj1O0So.nonEmergencyStop.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMdjUduY = await LpStaking.new({from: accounts[4]});
		const addressAaFOjiL = "0x0000000000000000000000000000000000000001"
		const uinthTzDscH = BigInt("254")
		const uint256k7cub8T = await LpStakingMdjUduY.incomeEarned.call(addressAaFOjiL, {from: accounts[4]});
		const uint256bvkCNe = await LpStakingMdjUduY.weiToSatoshi.call(uinthTzDscH, {from: accounts[3]});
		const uint256E6nD7Ff = await LpStakingMdjUduY.rewardPerToken.call({from: accounts[4]});

		await expect(LpStakingMdjUduY.incomeEarned.call(addressAaFOjiL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakings1HEZbo = await LpStaking.new({from: accounts[2]});
		const uintbxwS0Cb = BigInt("1106")
		const addressSFYbF8L = accounts[3]
		const uintjWCtYeT = BigInt("1336")
		const addressvfKx2l = accounts[0]
		const uint256K0aHyBS = await LpStakings1HEZbo.stake.call(uintbxwS0Cb, {from: accounts[4]});
		const addressZlx66Xe = await LpStakings1HEZbo.transferOwnership.call(addressSFYbF8L, {from: accounts[3]});
		const addressTN7Qdnq = await LpStakings1HEZbo.inCaseTokensGetStuck.call(addressvfKx2l, uintjWCtYeT, {from: accounts[4]});
		await LpStakings1HEZbo.getIncome.call({from: accounts[2]});

		await expect(LpStakings1HEZbo.stake.call(uintbxwS0Cb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingft5LogG = await LpStaking.new({from: accounts[2]});
		await LpStakingft5LogG.exit.call({from: accounts[4]});
		await LpStakingft5LogG.lpIncomeRateChanged.call({from: accounts[2]});

		await expect(LpStakingft5LogG.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingtZy7Ex = await LpStaking.new({from: accounts[5]});
		const addressMvtDZGG = accounts[2]
		const addresswyP7DRk = accounts[2]
		const uint256nsgTDzk = await LpStakingtZy7Ex.getUserAccumulatedWithdrawIncome.call(addressMvtDZGG, {from: accounts[0]});
		await LpStakingtZy7Ex.nonEmergencyStop.call({from: accounts[5]});
		const addressGHNBbkq = await LpStakingtZy7Ex.updateReward.call(addresswyP7DRk, {from: accounts[5]});

		assert.equal(uint256nsgTDzk, BigInt("0"))
		await expect(LpStakingtZy7Ex.nonEmergencyStop.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingtjhhQvi = await LpStaking.new({from: accounts[2]});
		const uintqO9ukEf = BigInt("767")
		const addressIXSikOX = accounts[1]
		const uintnvZbWUn = BigInt("1126")
		const uint256KnsRPj7 = await LpStakingtjhhQvi.rewardPerToken.call({from: accounts[0]});
		const addressOqEBZAs = await LpStakingtjhhQvi.inCaseTokensGetStuck.call(addressIXSikOX, uintqO9ukEf, {from: accounts[0]});
		await LpStakingtjhhQvi.nonEmergencyStop.call({from: accounts[4]});
		const uint256QcSOiYz = await LpStakingtjhhQvi.stake.call(uintnvZbWUn, {from: accounts[5]});

		assert.equal(uint256KnsRPj7, BigInt("0"))
		await expect(LpStakingtjhhQvi.inCaseTokensGetStuck.call(addressIXSikOX, uintqO9ukEf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsj1O0So = await LpStaking.new({from: accounts[1]});
		const addressKumKvlW = accounts[4]
		const uint256eFYV5kl = await LpStakingsj1O0So.getCurIncomeRate.call({from: accounts[2]});
		const uint256G0vAdA1 = await LpStakingsj1O0So.rewardEarned.call(addressKumKvlW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingsj1O0So.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingah8G64J = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNs8r0tg = accounts[3]
		const addressQ46N6SI = accounts[4]
		const addressS2p3pwp = accounts[1]
		const addressFSvvqiH = accounts[3]
		const addressUV4urrM = accounts[2]
		const uintQSlieef = BigInt("730")
		const uint256AVvnbrb = await LpStakingah8G64J.rewardEarned.call(addressNs8r0tg, {from: accounts[5]});
		await LpStakingah8G64J.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingah8G64J.lpRewardRateChanged.call({from: accounts[4]});
		const addressSCjk3y = await LpStakingah8G64J.initialize.call(addressUV4urrM, addressFSvvqiH, addressS2p3pwp, addressQ46N6SI, {from: accounts[2]});
		const uint256a9erd1T = await LpStakingah8G64J.withdraw.call(uintQSlieef, {from: accounts[3]});
	});
})
const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKA5GyUdb = await RainbowRAK.new({from: accounts[1]});
		const addressnondOX = accounts[0]
		const uint256kH5vOE4 = await RainbowRAKA5GyUdb.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressyEehims = await RainbowRAKA5GyUdb.transferOwnership.call(addressnondOX, {from: accounts[1]});
		await RainbowRAKA5GyUdb.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256kH5vOE4, BigInt("0"))
		await expect(RainbowRAKA5GyUdb.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlS7nYjl = await RainbowRAK.new({from: accounts[1]});
		await RainbowRAKlS7nYjl.exit.call({from: accounts[5]});
		const uint256A48swwV = await RainbowRAKlS7nYjl.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKlS7nYjl.renounceOwnership.call({from: accounts[4]});

		await expect(RainbowRAKlS7nYjl.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKM5WfMda = await RainbowRAK.new({from: accounts[4]});
		const addressCes5fJi = accounts[1]
		const uinttNJIdWS = BigInt("1346")
		const addressmxn7Kz = await RainbowRAKM5WfMda.transferOwnership.call(addressCes5fJi, {from: accounts[4]});
		await RainbowRAKM5WfMda.claimRewards.call({from: accounts[3]});
		const uint256SYcxBJ9 = await RainbowRAKM5WfMda.stake.call(uinttNJIdWS, {from: accounts[4]});

		await expect(RainbowRAKM5WfMda.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKhYDCQna = await RainbowRAK.new({from: accounts[3]});
		const uintqGJCli = BigInt("207")
		const addresszRi99Mp = accounts[4]
		const addressBmqxh71 = await RainbowRAKhYDCQna.owner.call({from: accounts[5]});
		const uint256mEg8kDU = await RainbowRAKhYDCQna.stake.call(uintqGJCli, {from: accounts[3]});
		const addressU0cayEb = await RainbowRAKhYDCQna.updateReward.call(addresszRi99Mp, {from: accounts[3]});

		assert.equal(addressBmqxh71, 0xd128A10D0169c5C799d0E1dc3de47A55b76a0Edf)
		await expect(RainbowRAKhYDCQna.stake.call(uintqGJCli, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKsyJ5Qf2 = await RainbowRAK.new({from: accounts[4]});
		const uintJOuziCY = BigInt("1162")
		const uintUh22okv = BigInt("785")
		const addresssbCpPr7 = accounts[1]
		const uint256UuBgiBU = await RainbowRAKsyJ5Qf2.unstake.call(uintJOuziCY, {from: accounts[1]});
		const uint256vx2OOSL = await RainbowRAKsyJ5Qf2.rewardPerToken.call({from: accounts[4]});
		const uint256yZspYSu = await RainbowRAKsyJ5Qf2.unstake.call(uintUh22okv, {from: accounts[5]});
		await RainbowRAKsyJ5Qf2.exit.call({from: accounts[4]});
		const addressHatrwBc = await RainbowRAKsyJ5Qf2.transferOwnership.call(addresssbCpPr7, {from: accounts[1]});

		await expect(RainbowRAKsyJ5Qf2.unstake.call(uintJOuziCY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKwPtHEqj = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshn7bR6L = accounts[3]
		const addresscMTYblL = accounts[3]
		const addressazbNDLu = accounts[5]
		const uint256kfjxv86 = await RainbowRAKwPtHEqj.earned.call(addresshn7bR6L, {from: accounts[0]});
		await RainbowRAKwPtHEqj.onlyOwner.call({from: accounts[2]});
		const addressNzT4r50 = await RainbowRAKwPtHEqj.transferOwnership.call(addresscMTYblL, {from: accounts[3]});
		const addressVCGfzoH = await RainbowRAKwPtHEqj.transferOwnership.call(addressazbNDLu, {from: accounts[0]});
		const uint256FTjMenA = await RainbowRAKwPtHEqj.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKf2A1BSD = await RainbowRAK.new({from: accounts[3]});
		const uintw6NWZdz = BigInt("1182")
		const uint256yzF4kNI = await RainbowRAKf2A1BSD.rewardPerToken.call({from: accounts[1]});
		const uint256eTJZ7eO = await RainbowRAKf2A1BSD.notifyRewardAmount.call(uintw6NWZdz, {from: accounts[1]});

		assert.equal(uint256yzF4kNI, BigInt("0"))
		await expect(RainbowRAKf2A1BSD.notifyRewardAmount.call(uintw6NWZdz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKf2A1BSD = await RainbowRAK.new({from: accounts[3]});
		const uint9v0avq = BigInt("129")
		const addressRQyzozu = accounts[3]
		await RainbowRAKf2A1BSD.renounceOwnership.call({from: accounts[3]});
		const uint256UBviIrq = await RainbowRAKf2A1BSD.stake.call(uint9v0avq, {from: accounts[2]});
		const addressMEIQiHK = await RainbowRAKf2A1BSD.updateReward.call(addressRQyzozu, {from: accounts[3]});

		await expect(RainbowRAKf2A1BSD.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKf2A1BSD = await RainbowRAK.new({from: accounts[3]});
		const uintc9EhYHy = BigInt("1995")
		const uint256Qed0SU = await RainbowRAKf2A1BSD.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256UBviIrq = await RainbowRAKf2A1BSD.stake.call(uintc9EhYHy, {from: accounts[2]});
		const uint256TiTJQ05 = await RainbowRAKf2A1BSD.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256Qed0SU, BigInt("0"))
		await expect(RainbowRAKf2A1BSD.stake.call(uintc9EhYHy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKf2A1BSD = await RainbowRAK.new({from: accounts[3]});
		const uintxt8ZLL = BigInt("135")
		const addressarrayVi96vje = await RainbowRAKf2A1BSD.getCommunity.call({from: accounts[4]});
		const uint256Fun8Cl = await RainbowRAKf2A1BSD.rewardPerToken.call({from: accounts[3]});
		const uint256UBviIrq = await RainbowRAKf2A1BSD.stake.call(uintxt8ZLL, {from: accounts[2]});

		assert.equal(addressarrayVi96vje, )
		assert.equal(uint256Fun8Cl, BigInt("0"))
		await expect(RainbowRAKf2A1BSD.stake.call(uintxt8ZLL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKh8wAWr3 = await RainbowRAK.new({from: accounts[1]});
		const uintMEFxCLK = BigInt("1036")
		const addressbMXglxu = accounts[0]
		const uintIL23uKP = BigInt("1971")
		const uint256QFNaydd = await RainbowRAKh8wAWr3.notifyRewardAmount.call(uintMEFxCLK, {from: accounts[1]});
		const uint256U7d8cuz = await RainbowRAKh8wAWr3.earned.call(addressbMXglxu, {from: accounts[4]});
		const uint256YRpFvF0 = await RainbowRAKh8wAWr3.notifyRewardAmount.call(uintIL23uKP, {from: accounts[1]});
		await RainbowRAKh8wAWr3.renounceOwnership.call({from: accounts[4]});

		await expect(RainbowRAKh8wAWr3.notifyRewardAmount.call(uintMEFxCLK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
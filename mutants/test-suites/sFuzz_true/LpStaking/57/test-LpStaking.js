const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingqs5nhfg = await LpStaking.new({from: accounts[2]});
		const addressFhppmvS = accounts[2]
		const addressx5dK7Iz = accounts[5]
		const addressWnBYd4m = accounts[5]
		const addressyXMYAwi = accounts[3]
		const addressCHI6eL = accounts[2]
		const byteId3DKZt = "0x1803181d0d0d1d0316141f16081710150902131b021c200d1b1912030d1e0112"
		const byteo0HzIbi = "0x130e07120703091a0d19131d061205031005200c150e150f050a0c1d1a1f1611"
		const uinty8iCQFA = BigInt("246")
		const uinthqzNoNM = BigInt("615")
		const uintbdTnRg2 = BigInt("187")
		const uintx9svzCw = BigInt("1470")
		const addressXqm8Eox = accounts[1]
		const addressfluitQr = await LpStakingqs5nhfg.initialize.call(addressyXMYAwi, addressWnBYd4m, addressx5dK7Iz, addressFhppmvS, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrsBRf6m = await LpStakingqs5nhfg.transferOwnership.call(addressCHI6eL, {from: accounts[4]});
//		const uint256MNFbkcA = await LpStakingqs5nhfg.stakeWithPermit.call(uintbdTnRg2, uinthqzNoNM, uinty8iCQFA, byteo0HzIbi, byteId3DKZt, {from: accounts[2]});
//		const uint256V0ZQmG = await LpStakingqs5nhfg.rewardPerToken.call({from: accounts[3]});
//		const addressgJevzNO = await LpStakingqs5nhfg.inCaseTokensGetStuck.call(addressXqm8Eox, uintx9svzCw, {from: accounts[1]});

		await expect(LpStakingqs5nhfg.transferOwnership.call(addressCHI6eL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingIgr446a = await LpStaking.new({from: accounts[5]});
//		await LpStakingIgr446a.nonEmergencyStop.call({from: accounts[2]});
//		await LpStakingIgr446a.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingIgr446a.nonEmergencyStop.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguXnKvIW = await LpStaking.new({from: accounts[4]});
		const addressHM8yl2Z = accounts[1]
		const addressVHypeH = accounts[4]
		const addressDs9dLcF = accounts[0]
//		await LpStakinguXnKvIW.lpRewardRateChanged.call({from: accounts[2]});
//		const addressdFsMoK = await LpStakinguXnKvIW.updateReward.call(addressHM8yl2Z, {from: accounts[1]});
//		await LpStakinguXnKvIW.exit.call({from: accounts[3]});
//		const addressUq66sa = await LpStakinguXnKvIW.transferOwnership.call(addressVHypeH, {from: accounts[4]});
//		const addresslA6dsUr = await LpStakinguXnKvIW.updateIncome.call(addressDs9dLcF, {from: accounts[4]});
//		await LpStakinguXnKvIW.lpIncomeRateChanged.call({from: accounts[4]});

		await expect(LpStakinguXnKvIW.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinga0R1it = await LpStaking.new({from: accounts[1]});
		const uintc4evUDi = BigInt("659")
		const addressWykbGG = accounts[2]
		const addressy1BXOtT = accounts[0]
//		const uint256xlPLJjY = await LpStakinga0R1it.stake.call(uintc4evUDi, {from: accounts[2]});
//		const uint256kpxbKhw = await LpStakinga0R1it.incomePerToken.call({from: accounts[4]});
//		await LpStakinga0R1it.getIncome.call({from: accounts[0]});
//		const uint256EH3OTG = await LpStakinga0R1it.incomeEarned.call(addressWykbGG, {from: accounts[4]});
//		const addressLKd3Zmg = await LpStakinga0R1it.transferOwnership.call(addressy1BXOtT, {from: accounts[2]});
//		await LpStakinga0R1it.getIncome.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakinga0R1it.stake.call(uintc4evUDi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingf4NAEMA = await LpStaking.new({from: accounts[2]});
		const uintrXtTDL8 = BigInt("1869")
		const addressmIE1zF = accounts[1]
		const addresst6F2UhZ = accounts[1]
		const addressqtXjKb = accounts[3]
		const addressNuhYWlm = accounts[1]
		const addressyM6k0Xa = accounts[1]
		const uintXOpTTbe = BigInt("1238")
		const uint256RoFdTxc = await LpStakingf4NAEMA.weiToSatoshi.call(uintrXtTDL8, {from: accounts[4]});
		const uint256r8E6C0y = await LpStakingf4NAEMA.rewardEarned.call(addressmIE1zF, {from: accounts[4]});
//		await LpStakingf4NAEMA.exit.call({from: accounts[4]});
//		const addresswdFwRGU = await LpStakingf4NAEMA.initialize.call(addressyM6k0Xa, addressNuhYWlm, addressqtXjKb, addresst6F2UhZ, {from: accounts[2]});
//		const uint256VAtAIG3 = await LpStakingf4NAEMA.stake.call(uintXOpTTbe, {from: accounts[1]});

		assert.equal(uint256RoFdTxc, BigInt("0"))
		assert.equal(uint256r8E6C0y, BigInt("0"))
		await expect(LpStakingf4NAEMA.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTkL2Fk = await LpStaking.new({from: accounts[3]});
		const uintnugGAJH = BigInt("807")
		const addressbu0NCSc = accounts[5]
//		const uint256HdzpMR = await LpStakingTkL2Fk.getCurIncomeRate.call({from: accounts[4]});
//		await LpStakingTkL2Fk.getIncome.call({from: accounts[0]});
//		const uint256C35PhM = await LpStakingTkL2Fk.stake.call(uintnugGAJH, {from: accounts[3]});
//		const uint256W4ooOQF = await LpStakingTkL2Fk.getUserAccumulatedWithdrawIncome.call(addressbu0NCSc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingTkL2Fk.getCurIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingiMLvOeX = await LpStaking.new({from: accounts[4]});
		const uintaOP02Sy = BigInt("654")
		const addresskL9SJyH = "0x0000000000000000000000000000000000000001"
//		const uint256rVVKTpr = await LpStakingiMLvOeX.incomePerToken.call({from: accounts[3]});
//		const uint256blF5nKX = await LpStakingiMLvOeX.withdraw.call(uintaOP02Sy, {from: accounts[4]});
//		const addressPx79XW9 = await LpStakingiMLvOeX.updateIncome.call(addresskL9SJyH, {from: accounts[2]});
//		await LpStakingiMLvOeX.nonEmergencyStop.call({from: accounts[0]});

		await expect(LpStakingiMLvOeX.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingf4NAEMA = await LpStaking.new({from: accounts[2]});
		const uintTcJwZW = BigInt("1869")
		const addressamktag0 = accounts[3]
		const addressSwTHfdP = accounts[1]
		const uint6zKaG1 = BigInt("907")
		const addressM1nL6lM = accounts[1]
		const addressk7qjh0a = accounts[3]
		const addressCbedPKI = accounts[1]
		const addressxRBUtDY = accounts[1]
		const uintMlgwon5 = BigInt("1035")
		const uint256RoFdTxc = await LpStakingf4NAEMA.weiToSatoshi.call(uintTcJwZW, {from: accounts[4]});
		const uint256XtXFgmP = await LpStakingf4NAEMA.getUserAccumulatedWithdrawIncome.call(addressamktag0, {from: accounts[3]});
		const uint256r8E6C0y = await LpStakingf4NAEMA.rewardEarned.call(addressSwTHfdP, {from: accounts[4]});
//		await LpStakingf4NAEMA.exit.call({from: accounts[4]});
//		const uint256ZpZXLAs = await LpStakingf4NAEMA.withdraw.call(uint6zKaG1, {from: accounts[1]});
//		const addresswdFwRGU = await LpStakingf4NAEMA.initialize.call(addressxRBUtDY, addressCbedPKI, addressk7qjh0a, addressM1nL6lM, {from: accounts[2]});
//		const uint256VAtAIG3 = await LpStakingf4NAEMA.stake.call(uintMlgwon5, {from: accounts[1]});

		assert.equal(uint256RoFdTxc, BigInt("0"))
		assert.equal(uint256XtXFgmP, BigInt("0"))
		assert.equal(uint256r8E6C0y, BigInt("0"))
		await expect(LpStakingf4NAEMA.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjg9mIOP = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQJw0l8M = accounts[3]
		const addresszj9ikab = accounts[1]
		const addressWPjgnsU = await LpStakingjg9mIOP.transferOwnership.call(addressQJw0l8M, {from: accounts[0]});
		const uint256RzYmyrn = await LpStakingjg9mIOP.rewardPerToken.call({from: accounts[3]});
		const uint256hMLsziT = await LpStakingjg9mIOP.getUserAccumulatedWithdrawIncome.call(addresszj9ikab, {from: accounts[4]});
	});

	it('test for LpStaking', async () => {
		const LpStakingf4NAEMA = await LpStaking.new({from: accounts[2]});
		const addressFNvgDoS = accounts[4]
		const addresscIfziVQ = accounts[2]
//		const uint256wky9K4x = await LpStakingf4NAEMA.incomeEarned.call(addressFNvgDoS, {from: accounts[4]});
//		const uint256r8E6C0y = await LpStakingf4NAEMA.rewardEarned.call(addresscIfziVQ, {from: accounts[4]});
//		await LpStakingf4NAEMA.onlyOwner.call({from: accounts[0]});
//		await LpStakingf4NAEMA.exit.call({from: accounts[4]});

		await expect(LpStakingf4NAEMA.incomeEarned.call(addressFNvgDoS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
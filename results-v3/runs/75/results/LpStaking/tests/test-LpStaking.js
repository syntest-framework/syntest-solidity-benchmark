const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingzoFql6F = await LpStaking.new({from: accounts[3]});
		const uintvxFhil2 = BigInt("1950")
		const addressX7Bov2r = accounts[2]
		const bytefLTjrjw = "0x062013011c142017120a13031b110e0f07171b1c090d200b1f090d1018181512"
		const byterAev2e6 = "0x180b0f0e13100c061c18131e0e1104151b0a0f200c071a1114171d1110041c07"
		const uintVhI6Iy = BigInt("70")
		const uintCDGJxZW = BigInt("1349")
		const uintrj6Tif1 = BigInt("13")
		const uint256eMevGVN = await LpStakingzoFql6F.weiToSatoshi.call(uintvxFhil2, {from: "0x0000000000000000000000000000000000000001"});
		const addressP0JasFS = await LpStakingzoFql6F.transferOwnership.call(addressX7Bov2r, {from: accounts[5]});
		await LpStakingzoFql6F.getReward.call({from: accounts[2]});
		const uint256bfTvJjt = await LpStakingzoFql6F.stakeWithPermit.call(uintrj6Tif1, uintCDGJxZW, uintVhI6Iy, byterAev2e6, bytefLTjrjw, {from: accounts[2]});

		assert.equal(uint256eMevGVN, BigInt("0"))
		await expect(LpStakingzoFql6F.transferOwnership.call(addressX7Bov2r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingK7gF0f = await LpStaking.new({from: accounts[4]});
		const addressxOSY6vZ = accounts[3]
		const uint256k3l15eS = await LpStakingK7gF0f.incomeEarned.call(addressxOSY6vZ, {from: accounts[2]});
		await LpStakingK7gF0f.getReward.call({from: accounts[3]});

		await expect(LpStakingK7gF0f.incomeEarned.call(addressxOSY6vZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW2d8H2d = await LpStaking.new({from: accounts[0]});
		const byteGx86pnX = "0x161a130d061019170e010313071d0617100703091f1f18011a1c10180f040f1d"
		const bytePabtIUU = "0x131d120207120f0e060f081d0c12161211000e0c15140b091210141f071e141d"
		const uintYIUD9bd = BigInt("21")
		const uintVQyun5i = BigInt("918")
		const uintuBpZrWq = BigInt("1436")
		await LpStakingW2d8H2d.onlyOwner.call({from: accounts[4]});
		await LpStakingW2d8H2d.onlyOwner.call({from: accounts[3]});
		await LpStakingW2d8H2d.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ErK6x6e = await LpStakingW2d8H2d.stakeWithPermit.call(uintuBpZrWq, uintVQyun5i, uintYIUD9bd, bytePabtIUU, byteGx86pnX, {from: accounts[0]});
		await LpStakingW2d8H2d.nonEmergencyStop.call({from: accounts[2]});

		await expect(LpStakingW2d8H2d.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingnv4vOUp = await LpStaking.new({from: accounts[1]});
		const addressmMI6zmK = accounts[3]
		const addressDZboIGt = accounts[1]
		const addresscZp4XMi = accounts[1]
		const addressBUtVqAM = accounts[1]
		const byteA0soJ7a = "0x0c1b0f0c160b0514151d0e0e161c000a080d1f171a1715011d1804101d0b1514"
		const byteklFb1mC = "0x130e04110718201e1c070b1407020b1f020c001a171c1402121d060a1e111e02"
		const uintNEM0AG9 = BigInt("205")
		const uintHMCdSUO = BigInt("1007")
		const uintRBt9RE1 = BigInt("1710")
		const addressKEjYFP = await LpStakingnv4vOUp.initialize.call(addressBUtVqAM, addresscZp4XMi, addressDZboIGt, addressmMI6zmK, {from: accounts[1]});
		await LpStakingnv4vOUp.exit.call({from: accounts[3]});
		const uint256hUh92F2 = await LpStakingnv4vOUp.stakeWithPermit.call(uintRBt9RE1, uintHMCdSUO, uintNEM0AG9, byteklFb1mC, byteA0soJ7a, {from: accounts[0]});
		await LpStakingnv4vOUp.onlyOwner.call({from: accounts[4]});

		await expect(LpStakingnv4vOUp.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingl7tuNpE = await LpStaking.new({from: accounts[4]});
		const addressCeWulH = accounts[0]
		const uint256ZBWkEq4 = await LpStakingl7tuNpE.getCurIncomeRate.call({from: accounts[1]});
		const uint256kfD6Mbr = await LpStakingl7tuNpE.getUserAccumulatedWithdrawIncome.call(addressCeWulH, {from: accounts[2]});

		await expect(LpStakingl7tuNpE.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingl7tuNpE = await LpStaking.new({from: accounts[4]});
		const uint256wFQiviz = await LpStakingl7tuNpE.rewardPerToken.call({from: accounts[2]});
		const uint256ZBWkEq4 = await LpStakingl7tuNpE.getCurIncomeRate.call({from: accounts[1]});
		const uint256MhdrC64 = await LpStakingl7tuNpE.lastTimeRewardApplicable.call({from: accounts[3]});
		await LpStakingl7tuNpE.exit.call({from: accounts[5]});
		const uint256Vn15kpm = await LpStakingl7tuNpE.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256wFQiviz, BigInt("0"))
		await expect(LpStakingl7tuNpE.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingD02WGDj = await LpStaking.new({from: accounts[5]});
		const uintTHNeUhO = BigInt("393")
		await LpStakingD02WGDj.lpRewardRateChanged.call({from: accounts[2]});
		const uint256QujTmy = await LpStakingD02WGDj.withdraw.call(uintTHNeUhO, {from: accounts[1]});

		await expect(LpStakingD02WGDj.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingK7gF0f = await LpStaking.new({from: accounts[4]});
		const addressje8SaZN = accounts[1]
		const uintUCjsA6k = BigInt("1659")
		const uint256s7epm7e = await LpStakingK7gF0f.getUserAccumulatedWithdrawIncome.call(addressje8SaZN, {from: accounts[4]});
		await LpStakingK7gF0f.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingK7gF0f.lpRewardRateChanged.call({from: accounts[3]});
		await LpStakingK7gF0f.getReward.call({from: accounts[3]});
		const uint256il3gfoj = await LpStakingK7gF0f.withdraw.call(uintUCjsA6k, {from: accounts[2]});

		assert.equal(uint256s7epm7e, BigInt("0"))
		await expect(LpStakingK7gF0f.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingD02WGDj = await LpStaking.new({from: accounts[5]});
		const addressiTLfVnx = "0x0000000000000000000000000000000000000001"
		const addressMfXQHsW = accounts[0]
		const uint256rhhkidf = await LpStakingD02WGDj.rewardEarned.call(addressiTLfVnx, {from: accounts[1]});
		await LpStakingD02WGDj.lpRewardRateChanged.call({from: accounts[2]});
		const uint256M6r3oDL = await LpStakingD02WGDj.getUserAccumulatedWithdrawIncome.call(addressMfXQHsW, {from: accounts[0]});

		assert.equal(uint256rhhkidf, BigInt("0"))
		await expect(LpStakingD02WGDj.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingK7gF0f = await LpStaking.new({from: accounts[4]});
		const addressRZpBtrz = accounts[2]
		const addressvXxma1F = accounts[0]
		const addresspmy31VB = accounts[2]
		const addressCnP5tPC = accounts[2]
		const addressS3aIvBU = "0x0000000000000000000000000000000000000000"
		const addressJ1Ylq6S = accounts[1]
		const addressCdXdMpr = accounts[3]
		const addressjDg5n8B = accounts[5]
		const uint256MshdSce = await LpStakingK7gF0f.rewardEarned.call(addressRZpBtrz, {from: accounts[5]});
		const addressgnwutO6 = await LpStakingK7gF0f.initialize.call(addressS3aIvBU, addressCnP5tPC, addresspmy31VB, addressvXxma1F, {from: accounts[5]});
		const addresswiJo5V = await LpStakingK7gF0f.updateIncome.call(addressJ1Ylq6S, {from: accounts[0]});
		const uint2567dzxyH = await LpStakingK7gF0f.rewardPerToken.call({from: accounts[3]});
		const addressUjarMHb = await LpStakingK7gF0f.updateIncome.call(addressCdXdMpr, {from: accounts[5]});
		const uint256k3l15eS = await LpStakingK7gF0f.incomeEarned.call(addressjDg5n8B, {from: accounts[2]});

		assert.equal(uint256MshdSce, BigInt("0"))
		await expect(LpStakingK7gF0f.initialize.call(addressS3aIvBU, addressCnP5tPC, addresspmy31VB, addressvXxma1F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFCAXBED = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingFCAXBED.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingFCAXBED.exit.call({from: accounts[4]});
		await LpStakingFCAXBED.exit.call({from: accounts[4]});
		await LpStakingFCAXBED.getReward.call({from: accounts[4]});
	});
})
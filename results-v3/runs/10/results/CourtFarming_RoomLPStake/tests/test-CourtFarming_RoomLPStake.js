const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakep6t6clq = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolMD2dwFV = true
		const uintxkxttWZ = BigInt("1211")
		const addressnlDHQDO = accounts[3]
		const boolCHt5qYf = false
		const uintuktTEJT = BigInt("1897")
		const uintzNg8wiE = BigInt("484")
		const uint256u7ohNCs = await CourtFarming_RoomLPStakep6t6clq.unstake.call(uintxkxttWZ, boolMD2dwFV, {from: accounts[3]});
		const addressGyr5zdA = await CourtFarming_RoomLPStakep6t6clq.setCourtStake.call(addressnlDHQDO, {from: accounts[4]});
		const uint256H9QtI3M = await CourtFarming_RoomLPStakep6t6clq.unstake.call(uintuktTEJT, boolCHt5qYf, {from: accounts[4]});
		const uint256ozKCAP3 = await CourtFarming_RoomLPStakep6t6clq.blockNumber.call({from: accounts[5]});
		const uint256zfLVCXT = await CourtFarming_RoomLPStakep6t6clq.incvRewardInfo.call({from: accounts[5]});
		const boolWA9Lji9 = await CourtFarming_RoomLPStakep6t6clq.stakeIncvRewards.call(uintzNg8wiE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeyDKnfXD = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const boolXN8cinB = true
		const uintDyowALA = BigInt("845")
		const addressZWJbsbv = accounts[1]
		const uint256rcP5uvP = await CourtFarming_RoomLPStakeyDKnfXD.unstake.call(uintDyowALA, boolXN8cinB, {from: accounts[0]});
		const addressF7Nc2hv = await CourtFarming_RoomLPStakeyDKnfXD.updateReward.call(addressZWJbsbv, {from: accounts[0]});
		const uint256cgBL2yk = await CourtFarming_RoomLPStakeyDKnfXD.totalStaked.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeyDKnfXD.unstake.call(uintDyowALA, boolXN8cinB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTFtEx6z = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressJfFVZ4 = accounts[4]
		const addressBZdmp9s = accounts[5]
		const uint256pEGez9m = await CourtFarming_RoomLPStakeTFtEx6z.blockNumber.call({from: accounts[0]});
		const addressYM5HFi = await CourtFarming_RoomLPStakeTFtEx6z.updateReward.call(addressJfFVZ4, {from: "0x0000000000000000000000000000000000000001"});
		const addressnLOjBt = await CourtFarming_RoomLPStakeTFtEx6z.getBeneficiaryInfo.call(addressBZdmp9s, {from: accounts[1]});

		assert.equal(uint256pEGez9m, BigInt("1280"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBooXdm0 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressdRTICpG = accounts[1]
		const addressac8NbZ = accounts[0]
		const uintjTCbN26 = BigInt("167")
		const uinteLKGkx = BigInt("1307")
		const uint256QL2dJsI = await CourtFarming_RoomLPStakeBooXdm0.totalStaked.call({from: accounts[3]});
		const uint256dCTW02a = await CourtFarming_RoomLPStakeBooXdm0.lastUpdateBlock.call({from: accounts[5]});
		const addressTSy40mu = await CourtFarming_RoomLPStakeBooXdm0.setCourtStake.call(addressdRTICpG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CGaYosB = await CourtFarming_RoomLPStakeBooXdm0.rewards.call(addressac8NbZ, {from: accounts[0]});
		const uint256PuzoDr1 = await CourtFarming_RoomLPStakeBooXdm0.expectedRewardsToday.call(uintjTCbN26, {from: accounts[3]});
		const uint256nGd9dUK = await CourtFarming_RoomLPStakeBooXdm0.stake.call(uinteLKGkx, {from: accounts[1]});

		assert.equal(uint256QL2dJsI, BigInt("0"))
		assert.equal(uint256dCTW02a, BigInt("1280"))
		await expect(CourtFarming_RoomLPStakeBooXdm0.setCourtStake.call(addressdRTICpG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakedIHt6C7 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintqLnptu = BigInt("701")
		const uintkFLaR7T = BigInt("1537")
		const boolVd9O5xA = await CourtFarming_RoomLPStakedIHt6C7.stakeIncvRewards.call(uintqLnptu, {from: accounts[2]});
		const uint256vJPPAL = await CourtFarming_RoomLPStakedIHt6C7.stake.call(uintkFLaR7T, {from: accounts[2]});
		const uint2561JeAAy = await CourtFarming_RoomLPStakedIHt6C7.getCurrentTime.call({from: accounts[5]});

		assert.equal(boolVd9O5xA, false)
		await expect(CourtFarming_RoomLPStakedIHt6C7.stake.call(uintkFLaR7T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegoNF58J = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressPr9SyvO = "0x0000000000000000000000000000000000000001"
		const addressiqvBZGm = accounts[2]
		const uint256yiUvA8o = await CourtFarming_RoomLPStakegoNF58J.blockNumber.call({from: accounts[1]});
		const addressbBAJGsr = await CourtFarming_RoomLPStakegoNF58J.getBeneficiaryInfo.call(addressPr9SyvO, {from: accounts[4]});
		const uint256epc8X88 = await CourtFarming_RoomLPStakegoNF58J.balanceOf.call(addressiqvBZGm, {from: accounts[4]});

		assert.equal(uint256epc8X88, BigInt("0"))
		assert.equal(uint256yiUvA8o, BigInt("1280"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWZMqV8H = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressaCGdkyf = accounts[3]
		const addressy55wxoa = accounts[3]
		const addressWuiQgdt = await CourtFarming_RoomLPStakeWZMqV8H.updateReward.call(addressaCGdkyf, {from: accounts[4]});
		const addressQcviwdp = await CourtFarming_RoomLPStakeWZMqV8H.updateReward.call(addressy55wxoa, {from: accounts[1]});
		const uint256nyYB5tc = await CourtFarming_RoomLPStakeWZMqV8H.lastUpdateBlock.call({from: accounts[5]});
		const uint256LGugF83 = await CourtFarming_RoomLPStakeWZMqV8H.incvRewardClaim.call({from: accounts[2]});
		const uint256hNDJlXp = await CourtFarming_RoomLPStakeWZMqV8H.getCurrentTime.call({from: accounts[4]});

		assert.equal(uint256LGugF83, BigInt("0"))
		assert.equal(uint256hNDJlXp, BigInt("1630200058"))
		assert.equal(uint256nyYB5tc, BigInt("1280"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTFtEx6z = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressTo5hZUM = accounts[3]
		const addressocFV2LR = accounts[5]
		const addressCDvAgOF = accounts[5]
		const addresswU07P36 = accounts[5]
		const addressnXb7NtG = await CourtFarming_RoomLPStakeTFtEx6z.setCourtStake.call(addressTo5hZUM, {from: accounts[3]});
		const uint256pEGez9m = await CourtFarming_RoomLPStakeTFtEx6z.blockNumber.call({from: accounts[0]});
		const addressSuEnlBI = await CourtFarming_RoomLPStakeTFtEx6z.updateReward.call(addressocFV2LR, {from: accounts[2]});
		const addressYM5HFi = await CourtFarming_RoomLPStakeTFtEx6z.updateReward.call(addressCDvAgOF, {from: "0x0000000000000000000000000000000000000001"});
		const addressnLOjBt = await CourtFarming_RoomLPStakeTFtEx6z.getBeneficiaryInfo.call(addresswU07P36, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeTFtEx6z.setCourtStake.call(addressTo5hZUM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTFtEx6z = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uint1ILdWc = BigInt("1984")
		const addressPAWsQQT = accounts[4]
		const addressVqchce5 = accounts[5]
		const uint256t0K91vO = await CourtFarming_RoomLPStakeTFtEx6z.expectedRewardsToday.call(uint1ILdWc, {from: accounts[4]});
		const uint256pEGez9m = await CourtFarming_RoomLPStakeTFtEx6z.blockNumber.call({from: accounts[0]});
		const addressYM5HFi = await CourtFarming_RoomLPStakeTFtEx6z.updateReward.call(addressPAWsQQT, {from: "0x0000000000000000000000000000000000000001"});
		const addressnLOjBt = await CourtFarming_RoomLPStakeTFtEx6z.getBeneficiaryInfo.call(addressVqchce5, {from: accounts[1]});

		assert.equal(uint256pEGez9m, BigInt("1280"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegtIyFt3 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresskkKoyx = accounts[1]
		const uintlXM1UO = BigInt("776")
		const addresslNHlRkE = accounts[2]
		const addressqnG2k4F = await CourtFarming_RoomLPStakegtIyFt3.updateReward.call(addresskkKoyx, {from: accounts[2]});
		const uint256Ughubm7 = await CourtFarming_RoomLPStakegtIyFt3.incvRewardInfo.call({from: accounts[1]});
		const uint256y4KulwI = await CourtFarming_RoomLPStakegtIyFt3.expectedRewardsToday.call(uintlXM1UO, {from: accounts[2]});
		const uint256oE8WBMK = await CourtFarming_RoomLPStakegtIyFt3.rewards.call(addresslNHlRkE, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWZMqV8H = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressgULTagv = accounts[3]
		const uinto9Uc9x6 = BigInt("481")
		const uinti0WNBtn = BigInt("42")
		const uint6JzW6S = BigInt("417")
		const boolErSfncF = false
		const uintgmmnL15 = BigInt("1256")
		const addressWuiQgdt = await CourtFarming_RoomLPStakeWZMqV8H.updateReward.call(addressgULTagv, {from: accounts[4]});
		const uint256nyYB5tc = await CourtFarming_RoomLPStakeWZMqV8H.lastUpdateBlock.call({from: accounts[5]});
		const uint256LGugF83 = await CourtFarming_RoomLPStakeWZMqV8H.incvRewardClaim.call({from: accounts[2]});
		await CourtFarming_RoomLPStakeWZMqV8H.changeStakeParameters.call(uint6JzW6S, uinti0WNBtn, uinto9Uc9x6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hNDJlXp = await CourtFarming_RoomLPStakeWZMqV8H.getCurrentTime.call({from: accounts[4]});
		const uint256eQFq29 = await CourtFarming_RoomLPStakeWZMqV8H.unstake.call(uintgmmnL15, boolErSfncF, {from: accounts[2]});

		assert.equal(uint256LGugF83, BigInt("0"))
		assert.equal(uint256nyYB5tc, BigInt("1280"))
		await expect(CourtFarming_RoomLPStakeWZMqV8H.changeStakeParameters.call(uint6JzW6S, uinti0WNBtn, uinto9Uc9x6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTFtEx6z = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintTMji9Yp = BigInt("0")
		const uint9H8T2V = BigInt("989")
		const addressbGzRi0 = accounts[1]
		const booldQMLWvn = await CourtFarming_RoomLPStakeTFtEx6z.stakeIncvRewards.call(uintTMji9Yp, {from: accounts[5]});
		const boolBFF9EHF = await CourtFarming_RoomLPStakeTFtEx6z.stakeIncvRewards.call(uint9H8T2V, {from: accounts[2]});
		const uint256zJwItfV = await CourtFarming_RoomLPStakeTFtEx6z.totalStaked.call({from: accounts[4]});
		const uint256VnnngAP = await CourtFarming_RoomLPStakeTFtEx6z.balanceOf.call(addressbGzRi0, {from: accounts[4]});

		assert.equal(boolBFF9EHF, false)
		assert.equal(booldQMLWvn, false)
		assert.equal(uint256VnnngAP, BigInt("0"))
		assert.equal(uint256zJwItfV, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWZMqV8H = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintaTT7RGe = BigInt("74")
		const bool1M9u8N = false
		const uintb8JngQu = BigInt("0")
		const uint256XW4vAR4 = await CourtFarming_RoomLPStakeWZMqV8H.blockNumber.call({from: accounts[3]});
		const uint256oZ8W7Rz = await CourtFarming_RoomLPStakeWZMqV8H.expectedRewardsToday.call(uintaTT7RGe, {from: accounts[1]});
		const uint256Zlz6qHp = await CourtFarming_RoomLPStakeWZMqV8H.unstake.call(uintb8JngQu, bool1M9u8N, {from: accounts[0]});

		assert.equal(uint256XW4vAR4, BigInt("1280"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeePqRub = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintGSbWyl3 = BigInt("0")
		const addressE0fexGP = accounts[5]
		const addressxaWqE9r = accounts[3]
		const uint256DoBwvK = await CourtFarming_RoomLPStakeePqRub.stake.call(uintGSbWyl3, {from: accounts[2]});
		const uint256NasMt5 = await CourtFarming_RoomLPStakeePqRub.rewards.call(addressE0fexGP, {from: accounts[5]});
		const addresslsybjaz = await CourtFarming_RoomLPStakeePqRub.updateReward.call(addressxaWqE9r, {from: accounts[1]});
	});
})
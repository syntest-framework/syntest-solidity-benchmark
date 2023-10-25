const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepKA4Ety = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintUBnpoRe = BigInt("1668")
		const uintf3si9Hr = BigInt("1501")
		const addresssJyWEdP = accounts[0]
//		const uint256XwaF1fA = await CourtFarming_HTStakepKA4Ety.stake.call(uintUBnpoRe, {from: accounts[1]});
//		const uint256cinOg44 = await CourtFarming_HTStakepKA4Ety.stake.call(uintf3si9Hr, {from: accounts[0]});
//		const uint256DcIKhRW = await CourtFarming_HTStakepKA4Ety.rewards.call(addresssJyWEdP, {from: accounts[4]});

		await expect(CourtFarming_HTStakepKA4Ety.stake.call(uintUBnpoRe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepTivnKB = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintojdna1v = BigInt("452")
		const uinthZ27Ywk = BigInt("584")
		const uintCwwmdmq = BigInt("347")
		const uintcRINQv = BigInt("444")
		const uintoDzt2Xm = BigInt("405")
		const uintLjTbgwP = BigInt("148")
		const boolVCIjZAD = true
		const uintN9STzq8 = BigInt("575")
		const uint256DkIsNpF = await CourtFarming_HTStakepTivnKB.lastUpdateBlock.call({from: accounts[4]});
//		const uint256g9JiB2 = await CourtFarming_HTStakepTivnKB._stakeParametrsCalculation.call(uintCwwmdmq, uinthZ27Ywk, uintojdna1v, {from: accounts[2]});
//		await CourtFarming_HTStakepTivnKB.changeStakeParameters.call(uintLjTbgwP, uintoDzt2Xm, uintcRINQv, {from: accounts[0]});
//		const uint256iKM71vJ = await CourtFarming_HTStakepTivnKB.getCurrentTime.call({from: accounts[0]});
//		const uint256Aat2cNl = await CourtFarming_HTStakepTivnKB.unstake.call(uintN9STzq8, boolVCIjZAD, {from: accounts[2]});

		assert.equal(uint256DkIsNpF, BigInt("1701"))
		await expect(CourtFarming_HTStakepTivnKB._stakeParametrsCalculation.call(uintCwwmdmq, uinthZ27Ywk, uintojdna1v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken2R6pNq = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintj0Si7AL = BigInt("159")
		const uintIlx05sK = BigInt("675")
		const uintYcmHbEQ = BigInt("276")
		const uint6Z5si8 = BigInt("21")
		const uintLgaH28R = BigInt("321")
		const uintWMwTQ9 = BigInt("1814")
		const uint256AAxTIqW = await CourtFarming_HTStaken2R6pNq.incvRewardInfo.call({from: accounts[0]});
//		await CourtFarming_HTStaken2R6pNq.changeStakeParameters.call(uintYcmHbEQ, uintIlx05sK, uintj0Si7AL, {from: accounts[0]});
//		await CourtFarming_HTStaken2R6pNq.changeStakeParameters.call(uintWMwTQ9, uintLgaH28R, uint6Z5si8, {from: accounts[4]});

		await expect(CourtFarming_HTStaken2R6pNq.changeStakeParameters.call(uintYcmHbEQ, uintIlx05sK, uintj0Si7AL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQYq5lYP = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolaaOMBij = true
		const uintEwALu7d = BigInt("1675")
		const addressGDVPFbT = accounts[2]
		const uintNJvRsP = BigInt("679")
		const addressHkvY9K7 = accounts[1]
		const addressjqwGrcS = accounts[0]
		const uint256KjvN7iw = await CourtFarming_HTStakeQYq5lYP.unstake.call(uintEwALu7d, boolaaOMBij, {from: accounts[0]});
		const addressChfk5z1 = await CourtFarming_HTStakeQYq5lYP.updateReward.call(addressGDVPFbT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256X8iE14s = await CourtFarming_HTStakeQYq5lYP.expectedRewardsToday.call(uintNJvRsP, {from: "0x0000000000000000000000000000000000000001"});
		const addressOnHqRKM = await CourtFarming_HTStakeQYq5lYP.updateReward.call(addressHkvY9K7, {from: accounts[2]});
		const uint256jGKjEP = await CourtFarming_HTStakeQYq5lYP.rewards.call(addressjqwGrcS, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeAujJakw = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolmRcMyO = true
		const uint0o990T = BigInt("2023")
		const uintoSvtbx6 = BigInt("1727")
		const boolhRwShhr = false
		const uinta3OsGOM = BigInt("1817")
//		const uint256OlKlltI = await CourtFarming_HTStakeAujJakw.unstake.call(uint0o990T, boolmRcMyO, {from: accounts[5]});
//		const uint256IGwFlTD = await CourtFarming_HTStakeAujJakw.blockNumber.call({from: accounts[1]});
//		const uint256SkT4tME = await CourtFarming_HTStakeAujJakw.stake.call(uintoSvtbx6, {from: accounts[4]});
//		const uint256d4znAhc = await CourtFarming_HTStakeAujJakw.unstake.call(uinta3OsGOM, boolhRwShhr, {from: accounts[3]});
//		const uint256cbKVT3 = await CourtFarming_HTStakeAujJakw.lastUpdateBlock.call({from: accounts[3]});

		await expect(CourtFarming_HTStakeAujJakw.unstake.call(uint0o990T, boolmRcMyO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedj6AFdz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintO5KxEeB = BigInt("544")
		const addresszYu0Rp0 = accounts[1]
		const uint256LApaFyY = await CourtFarming_HTStakedj6AFdz.expectedRewardsToday.call(uintO5KxEeB, {from: accounts[1]});
		const uint256vzfdHp1 = await CourtFarming_HTStakedj6AFdz.incvRewardClaim.call({from: accounts[3]});
		const uint256C8O4slX = await CourtFarming_HTStakedj6AFdz.blockNumber.call({from: accounts[1]});
		const uint256nz9LmfC = await CourtFarming_HTStakedj6AFdz.lastUpdateBlock.call({from: accounts[2]});
//		const addressjkLF3Ko = await CourtFarming_HTStakedj6AFdz.setCourtStake.call(addresszYu0Rp0, {from: accounts[0]});

		assert.equal(uint256C8O4slX, BigInt("1701"))
		assert.equal(uint256nz9LmfC, BigInt("1701"))
		assert.equal(uint256vzfdHp1, BigInt("0"))
		await expect(CourtFarming_HTStakedj6AFdz.setCourtStake.call(addresszYu0Rp0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEntH4xX = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintjsVI9o = BigInt("103")
		const uintAwNzsK4 = BigInt("594")
		const addressHg8uFby = accounts[3]
		const boolmmoQqTK = await CourtFarming_HTStakeEntH4xX.stakeIncvRewards.call(uintjsVI9o, {from: accounts[2]});
		const uint256GMSdQrn = await CourtFarming_HTStakeEntH4xX.incvRewardInfo.call({from: accounts[4]});
		const uint256h0UWMqX = await CourtFarming_HTStakeEntH4xX.incvRewardClaim.call({from: accounts[3]});
		const uint256hxTeiT5 = await CourtFarming_HTStakeEntH4xX.expectedRewardsToday.call(uintAwNzsK4, {from: accounts[2]});
		const uint256CwD81Hz = await CourtFarming_HTStakeEntH4xX.balanceOf.call(addressHg8uFby, {from: accounts[0]});

		assert.equal(boolmmoQqTK, false)
		assert.equal(uint256CwD81Hz, BigInt("0"))
		assert.equal(uint256h0UWMqX, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeB9WaaH5 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressJdEDjHa = accounts[4]
		const uintgpyqSSo = BigInt("476")
		const uintsEtllQ8 = BigInt("474")
		const uintHkPj1vR = BigInt("939")
		const addresse4GMBME = accounts[4]
		const addressmjddFnH = accounts[2]
		const addressUVtiHVv = await CourtFarming_HTStakeB9WaaH5.getBeneficiaryInfo.call(addressJdEDjHa, {from: accounts[4]});
//		const uint256lCHiRcP = await CourtFarming_HTStakeB9WaaH5._stakeParametrsCalculation.call(uintHkPj1vR, uintsEtllQ8, uintgpyqSSo, {from: accounts[2]});
//		const uint256d8xh7X9 = await CourtFarming_HTStakeB9WaaH5.rewards.call(addresse4GMBME, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cHApxuG = await CourtFarming_HTStakeB9WaaH5.balanceOf.call(addressmjddFnH, {from: accounts[3]});

		await expect(CourtFarming_HTStakeB9WaaH5._stakeParametrsCalculation.call(uintHkPj1vR, uintsEtllQ8, uintgpyqSSo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedj6AFdz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintEF1ul2j = BigInt("544")
		const uintFML4vl = BigInt("1858")
		const uintd1DUB9m = BigInt("788")
		const uintIvKSw5W = BigInt("1529")
		const addressJVmmDEZ = accounts[1]
		const uint256TeleCMp = await CourtFarming_HTStakedj6AFdz.totalStaked.call({from: accounts[0]});
		const uint256LApaFyY = await CourtFarming_HTStakedj6AFdz.expectedRewardsToday.call(uintEF1ul2j, {from: accounts[1]});
		const uint256vzfdHp1 = await CourtFarming_HTStakedj6AFdz.incvRewardClaim.call({from: accounts[3]});
		const uint256C8O4slX = await CourtFarming_HTStakedj6AFdz.blockNumber.call({from: accounts[1]});
		const uint256nz9LmfC = await CourtFarming_HTStakedj6AFdz.lastUpdateBlock.call({from: accounts[2]});
//		await CourtFarming_HTStakedj6AFdz.changeStakeParameters.call(uintIvKSw5W, uintd1DUB9m, uintFML4vl, {from: accounts[4]});
//		const addressjkLF3Ko = await CourtFarming_HTStakedj6AFdz.setCourtStake.call(addressJVmmDEZ, {from: accounts[0]});

		assert.equal(uint256C8O4slX, BigInt("1701"))
		assert.equal(uint256TeleCMp, BigInt("0"))
		assert.equal(uint256nz9LmfC, BigInt("1701"))
		assert.equal(uint256vzfdHp1, BigInt("0"))
		await expect(CourtFarming_HTStakedj6AFdz.changeStakeParameters.call(uintIvKSw5W, uintd1DUB9m, uintFML4vl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeB9WaaH5 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressYgjVOH0 = accounts[4]
		const addressh02RcWn = accounts[4]
		const uinth6TCgt5 = BigInt("476")
		const uintunljPF7 = BigInt("474")
		const uintYw2xdO = BigInt("939")
		const addressIxvm6f5 = accounts[2]
		const uint256DNJDzLI = await CourtFarming_HTStakeB9WaaH5.lastUpdateBlock.call({from: accounts[4]});
		const addressUVtiHVv = await CourtFarming_HTStakeB9WaaH5.getBeneficiaryInfo.call(addressYgjVOH0, {from: accounts[4]});
//		const addressr5fHNn = await CourtFarming_HTStakeB9WaaH5.setCourtStake.call(addressh02RcWn, {from: accounts[5]});
//		const uint256Ip6KoFq = await CourtFarming_HTStakeB9WaaH5.lastUpdateBlock.call({from: accounts[5]});
//		const uint256lCHiRcP = await CourtFarming_HTStakeB9WaaH5._stakeParametrsCalculation.call(uintYw2xdO, uintunljPF7, uinth6TCgt5, {from: accounts[2]});
//		const uint256cHApxuG = await CourtFarming_HTStakeB9WaaH5.balanceOf.call(addressIxvm6f5, {from: accounts[3]});

		assert.equal(uint256DNJDzLI, BigInt("1701"))
		await expect(CourtFarming_HTStakeB9WaaH5.setCourtStake.call(addressh02RcWn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexMyS5RT = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintvVDa54R = BigInt("559")
		const addresspNy0POO = accounts[2]
		const uintFc3mVwu = BigInt("884")
		const uintHWF8dqn = BigInt("627")
		const uintwymDBIH = BigInt("491")
		const uintV5xNrFP = BigInt("1131")
		const addressYBOM9y = accounts[3]
		const boolQ1rTl0w = await CourtFarming_HTStakexMyS5RT.stakeIncvRewards.call(uintvVDa54R, {from: accounts[1]});
		const addressIm5jtBe = await CourtFarming_HTStakexMyS5RT.updateReward.call(addresspNy0POO, {from: accounts[4]});
		const boolq8HUsV6 = await CourtFarming_HTStakexMyS5RT.stakeIncvRewards.call(uintFc3mVwu, {from: accounts[2]});
//		await CourtFarming_HTStakexMyS5RT.changeStakeParameters.call(uintV5xNrFP, uintwymDBIH, uintHWF8dqn, {from: accounts[0]});
//		const uint256auTh3Xf = await CourtFarming_HTStakexMyS5RT.blockNumber.call({from: accounts[3]});
//		const uint256oeViZsM = await CourtFarming_HTStakexMyS5RT.rewards.call(addressYBOM9y, {from: accounts[2]});

		assert.equal(boolQ1rTl0w, false)
		assert.equal(boolq8HUsV6, false)
		await expect(CourtFarming_HTStakexMyS5RT.changeStakeParameters.call(uintV5xNrFP, uintwymDBIH, uintHWF8dqn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepKA4Ety = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintzhvBrVR = BigInt("0")
		const uintrNkRL0Y = BigInt("647")
		const uintcDhiYXM = BigInt("308")
		const uintMkzfz0m = BigInt("1106")
		const uint256w55aMiH = await CourtFarming_HTStakepKA4Ety.stake.call(uintzhvBrVR, {from: accounts[1]});
//		await CourtFarming_HTStakepKA4Ety.changeStakeParameters.call(uintMkzfz0m, uintcDhiYXM, uintrNkRL0Y, {from: accounts[1]});

		await expect(CourtFarming_HTStakepKA4Ety.changeStakeParameters.call(uintMkzfz0m, uintcDhiYXM, uintrNkRL0Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEntH4xX = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintVbElot3 = BigInt("0")
		const uintwOhW5t = BigInt("1440")
		const boolmmoQqTK = await CourtFarming_HTStakeEntH4xX.stakeIncvRewards.call(uintVbElot3, {from: accounts[2]});
		const boolThQfpYL = await CourtFarming_HTStakeEntH4xX.stakeIncvRewards.call(uintwOhW5t, {from: accounts[2]});

		assert.equal(boolThQfpYL, false)
		assert.equal(boolmmoQqTK, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedj6AFdz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintLhq1a0S = BigInt("0")
		const addressYoCcXLk = accounts[1]
//		const uint256LApaFyY = await CourtFarming_HTStakedj6AFdz.expectedRewardsToday.call(uintLhq1a0S, {from: accounts[1]});
//		const uint256C8O4slX = await CourtFarming_HTStakedj6AFdz.blockNumber.call({from: accounts[1]});
//		const addressjkLF3Ko = await CourtFarming_HTStakedj6AFdz.setCourtStake.call(addressYoCcXLk, {from: accounts[0]});

		await expect(CourtFarming_HTStakedj6AFdz.expectedRewardsToday.call(uintLhq1a0S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZG4hbaZ = await CourtFarming_HTStake.new({from: accounts[2]});
		const bool3HqGeA = true
		const uintdWAu17 = BigInt("0")
		const uintRpIzn1s = BigInt("976")
		const uint256j4VUP3E = await CourtFarming_HTStakeZG4hbaZ.incvRewardInfo.call({from: accounts[1]});
		const uint256cz8JbT = await CourtFarming_HTStakeZG4hbaZ.incvRewardInfo.call({from: accounts[2]});
		const uint256iOSQ9Lv = await CourtFarming_HTStakeZG4hbaZ.lastUpdateBlock.call({from: accounts[3]});
		const uint256ApUWSzD = await CourtFarming_HTStakeZG4hbaZ.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JoYqAeX = await CourtFarming_HTStakeZG4hbaZ.unstake.call(uintdWAu17, bool3HqGeA, {from: accounts[2]});
		const uint256e9AGanu = await CourtFarming_HTStakeZG4hbaZ.expectedRewardsToday.call(uintRpIzn1s, {from: accounts[4]});

		assert.equal(uint256ApUWSzD, BigInt("1630201285"))
		assert.equal(uint256iOSQ9Lv, BigInt("1701"))
	});
})
const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegzaPu0B = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintYJlvYf9 = BigInt("1442")
		const addressXTRfQ6v = accounts[1]
		const uint256ssgV2Yq = await CourtFarming_HTStakegzaPu0B.stake.call(uintYJlvYf9, {from: accounts[1]});
		const uint256gqop0QY = await CourtFarming_HTStakegzaPu0B.rewards.call(addressXTRfQ6v, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakegzaPu0B.stake.call(uintYJlvYf9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedu5Bq7B = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintnP2FuWn = BigInt("1139")
		const uintOgWKYUC = BigInt("1298")
		const uintXxYFfrW = BigInt("1060")
		const uintlmR9U0N = BigInt("954")
		const uintUcwDq4b = BigInt("193")
		const uintYuTS92 = BigInt("1174")
		const uintGTNy1bF = BigInt("912")
		const uintORWFri = BigInt("1846")
		const uint256WfUv5bn = await CourtFarming_HTStakedu5Bq7B.totalStaked.call({from: accounts[1]});
		await CourtFarming_HTStakedu5Bq7B.changeStakeParameters.call(uintXxYFfrW, uintOgWKYUC, uintnP2FuWn, {from: accounts[1]});
		await CourtFarming_HTStakedu5Bq7B.changeStakeParameters.call(uintYuTS92, uintUcwDq4b, uintlmR9U0N, {from: accounts[5]});
		const uint256Utw5KK2 = await CourtFarming_HTStakedu5Bq7B.expectedRewardsToday.call(uintGTNy1bF, {from: accounts[0]});
		const uint256WPqsYNq = await CourtFarming_HTStakedu5Bq7B.expectedRewardsToday.call(uintORWFri, {from: accounts[0]});

		assert.equal(uint256WfUv5bn, BigInt("0"))
		await expect(CourtFarming_HTStakedu5Bq7B.changeStakeParameters.call(uintXxYFfrW, uintOgWKYUC, uintnP2FuWn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebapSriL = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressyvBJ0II = accounts[3]
		const addressyXschp = accounts[1]
		const uint256nZdO2s3 = await CourtFarming_HTStakebapSriL.totalStaked.call({from: accounts[0]});
		const uint256PO4JGeM = await CourtFarming_HTStakebapSriL.rewards.call(addressyvBJ0II, {from: accounts[4]});
		const uint256Wd8LuWU = await CourtFarming_HTStakebapSriL.incvRewardInfo.call({from: accounts[4]});
		const uint256WgptLHV = await CourtFarming_HTStakebapSriL.rewards.call(addressyXschp, {from: accounts[2]});

		assert.equal(uint256nZdO2s3, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebsS5q36 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintAzxznSF = BigInt("887")
		const uintJ0V4qwP = BigInt("281")
		const uintYDBjLgV = BigInt("1311")
		const uint256Ebsmjbs = await CourtFarming_HTStakebsS5q36.incvRewardInfo.call({from: accounts[0]});
		await CourtFarming_HTStakebsS5q36.changeStakeParameters.call(uintYDBjLgV, uintJ0V4qwP, uintAzxznSF, {from: accounts[4]});
		const uint256LG5v6Cc = await CourtFarming_HTStakebsS5q36.incvRewardInfo.call({from: accounts[1]});
		const uint256y30MNqY = await CourtFarming_HTStakebsS5q36.blockNumber.call({from: accounts[1]});

		await expect(CourtFarming_HTStakebsS5q36.changeStakeParameters.call(uintYDBjLgV, uintJ0V4qwP, uintAzxznSF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXNBKK3n = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintJ83LbRT = BigInt("2012")
		const addressTKxCv5j = accounts[0]
		const addressj8CFVBE = accounts[4]
		const uint256vrwTQF = await CourtFarming_HTStakeXNBKK3n.expectedRewardsToday.call(uintJ83LbRT, {from: accounts[2]});
		const uint256tF2kVUh = await CourtFarming_HTStakeXNBKK3n.rewards.call(addressTKxCv5j, {from: accounts[1]});
		const uint256JBYPRq = await CourtFarming_HTStakeXNBKK3n.balanceOf.call(addressj8CFVBE, {from: accounts[2]});

		assert.equal(uint256JBYPRq, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepm5RrtH = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolggFgAaO = true
		const uintQC0SOiu = BigInt("1722")
		const addressq2HxWZ = accounts[2]
		const uintPIDHrye = BigInt("137")
		const uint256Nlq3nws = await CourtFarming_HTStakepm5RrtH.unstake.call(uintQC0SOiu, boolggFgAaO, {from: accounts[3]});
		const addressSI1xcea = await CourtFarming_HTStakepm5RrtH.getBeneficiaryInfo.call(addressq2HxWZ, {from: accounts[1]});
		const uint256OSC0AAv = await CourtFarming_HTStakepm5RrtH.expectedRewardsToday.call(uintPIDHrye, {from: accounts[2]});
		const uint256T2uuSNq = await CourtFarming_HTStakepm5RrtH.getCurrentTime.call({from: accounts[2]});
		const uint256dr9AOCd = await CourtFarming_HTStakepm5RrtH.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CIpEg2B = await CourtFarming_HTStakepm5RrtH.blockNumber.call({from: accounts[4]});

		await expect(CourtFarming_HTStakepm5RrtH.unstake.call(uintQC0SOiu, boolggFgAaO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeW7ry8Mr = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresssDyPEQG = accounts[4]
		const uint256wmxY9FG = await CourtFarming_HTStakeW7ry8Mr.lastUpdateBlock.call({from: accounts[5]});
		const addresswhbDqWP = await CourtFarming_HTStakeW7ry8Mr.setCourtStake.call(addresssDyPEQG, {from: accounts[4]});
		const uint256Q5UIzFk = await CourtFarming_HTStakeW7ry8Mr.blockNumber.call({from: accounts[0]});

		assert.equal(uint256wmxY9FG, BigInt("1839"))
		await expect(CourtFarming_HTStakeW7ry8Mr.setCourtStake.call(addresssDyPEQG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken7JQS5k = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmOXrYmw = "0x0000000000000000000000000000000000000001"
		const addressc8Xkzus = accounts[2]
		const addressFoKmz6y = accounts[3]
		const addressRon58W5 = accounts[4]
		const uint256rJPoBxn = await CourtFarming_HTStaken7JQS5k.rewards.call(addressmOXrYmw, {from: accounts[1]});
		const uint256GlQrtuv = await CourtFarming_HTStaken7JQS5k.rewards.call(addressc8Xkzus, {from: accounts[1]});
		const uint256atgt7HL = await CourtFarming_HTStaken7JQS5k.incvRewardInfo.call({from: accounts[3]});
		const addressvCEhVgc = await CourtFarming_HTStaken7JQS5k.updateReward.call(addressFoKmz6y, {from: accounts[3]});
		const uint256pejxWXk = await CourtFarming_HTStaken7JQS5k.getCurrentTime.call({from: accounts[1]});
		const addressyuBBvUw = await CourtFarming_HTStaken7JQS5k.setCourtStake.call(addressRon58W5, {from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexj7jEyk = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintmnphtyc = BigInt("1985")
		const boolo8PEkn7 = await CourtFarming_HTStakexj7jEyk.stakeIncvRewards.call(uintmnphtyc, {from: accounts[4]});
		const uint256grQ6bqY = await CourtFarming_HTStakexj7jEyk.blockNumber.call({from: accounts[4]});
		const uint256I6yzlrY = await CourtFarming_HTStakexj7jEyk.incvRewardInfo.call({from: accounts[1]});

		assert.equal(boolo8PEkn7, false)
		assert.equal(uint256grQ6bqY, BigInt("1839"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegzaPu0B = await CourtFarming_HTStake.new({from: accounts[2]});
		const address3MUz0l = accounts[5]
		const addressn7j7K0x = accounts[2]
		const addressGQidjtu = await CourtFarming_HTStakegzaPu0B.setCourtStake.call(address3MUz0l, {from: accounts[4]});
		const uint256CLdrZ0M = await CourtFarming_HTStakegzaPu0B.incvRewardInfo.call({from: accounts[4]});
		const uint256gqop0QY = await CourtFarming_HTStakegzaPu0B.rewards.call(addressn7j7K0x, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakegzaPu0B.setCourtStake.call(address3MUz0l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefhNMv4 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintjk6ioQ3 = BigInt("946")
		const addresshbcgJLN = accounts[4]
		const boolpu4ZBFT = false
		const uintLy2aCj = BigInt("1622")
		const uint256Vs4nF3t = await CourtFarming_HTStakefhNMv4.incvRewardClaim.call({from: accounts[0]});
		const uint256Hcb3RPW = await CourtFarming_HTStakefhNMv4.stake.call(uintjk6ioQ3, {from: accounts[4]});
		const uint256nbMg6UW = await CourtFarming_HTStakefhNMv4.lastUpdateBlock.call({from: accounts[2]});
		const uint256ornJ3mQ = await CourtFarming_HTStakefhNMv4.rewards.call(addresshbcgJLN, {from: accounts[1]});
		const uint256HUsu6Ue = await CourtFarming_HTStakefhNMv4.unstake.call(uintLy2aCj, boolpu4ZBFT, {from: accounts[4]});

		assert.equal(uint256Vs4nF3t, BigInt("0"))
		await expect(CourtFarming_HTStakefhNMv4.stake.call(uintjk6ioQ3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXoE5ovr = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintvEkRM5a = BigInt("1994")
		const uintVNbDtUp = BigInt("1986")
		const uintvlevISZ = BigInt("1304")
		const addressM7fcDsM = accounts[3]
		const boolPp84PLG = true
		const uinto3ZesYr = BigInt("1361")
		const uint256lyML2Jd = await CourtFarming_HTStakeXoE5ovr._stakeParametrsCalculation.call(uintvlevISZ, uintVNbDtUp, uintvEkRM5a, {from: accounts[4]});
		const addresshsYMAV6 = await CourtFarming_HTStakeXoE5ovr.updateReward.call(addressM7fcDsM, {from: accounts[5]});
		const uint256RQ9s9F = await CourtFarming_HTStakeXoE5ovr.getCurrentTime.call({from: accounts[2]});
		const uint256FHihSi = await CourtFarming_HTStakeXoE5ovr.getCurrentTime.call({from: accounts[3]});
		const uint256GEAIBtJ = await CourtFarming_HTStakeXoE5ovr.unstake.call(uinto3ZesYr, boolPp84PLG, {from: accounts[3]});

		await expect(CourtFarming_HTStakeXoE5ovr._stakeParametrsCalculation.call(uintvlevISZ, uintVNbDtUp, uintvEkRM5a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegzaPu0B = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressyjHOWiE = accounts[0]
		const addressMVYyfdy = accounts[2]
		const uint2568oWIzZ = await CourtFarming_HTStakegzaPu0B.getCurrentTime.call({from: accounts[4]});
		const addressu5MclQG = await CourtFarming_HTStakegzaPu0B.getBeneficiaryInfo.call(addressyjHOWiE, {from: accounts[2]});
		const uint256gqop0QY = await CourtFarming_HTStakegzaPu0B.rewards.call(addressMVYyfdy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2568oWIzZ, BigInt("1630201597"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefhNMv4 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintTuKJ34I = BigInt("0")
		const addressQfiUsP6 = accounts[3]
		const uint256Hcb3RPW = await CourtFarming_HTStakefhNMv4.stake.call(uintTuKJ34I, {from: accounts[4]});
		const addressReVHwIp = await CourtFarming_HTStakefhNMv4.setCourtStake.call(addressQfiUsP6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakefhNMv4.setCourtStake.call(addressQfiUsP6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefhNMv4 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintigSeje3 = BigInt("0")
		const uintkfx40Uk = BigInt("18")
		const boolWb09RI = await CourtFarming_HTStakefhNMv4.stakeIncvRewards.call(uintigSeje3, {from: accounts[2]});
		const booliT79zNF = await CourtFarming_HTStakefhNMv4.stakeIncvRewards.call(uintkfx40Uk, {from: accounts[4]});

		assert.equal(boolWb09RI, false)
		assert.equal(booliT79zNF, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefhNMv4 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintHchAjqt = BigInt("1429")
		const boolcGyhP29 = false
		const uintB4w7oey = BigInt("0")
		const uintc2awdl8 = BigInt("0")
		const addressp7FeXa = accounts[6]
		const addressmzZmVlt = accounts[4]
		const uintX0WoxyU = BigInt("1592")
		const boolpu4ZBFT = false
		const uinta9QfWwE = BigInt("1622")
		const addressH3YI0au = accounts[3]
		const uint256hDo2dnn = await CourtFarming_HTStakefhNMv4.expectedRewardsToday.call(uintHchAjqt, {from: accounts[2]});
		const uint256G9xAq1Z = await CourtFarming_HTStakefhNMv4.totalStaked.call({from: accounts[3]});
		const uint256OMU79Hf = await CourtFarming_HTStakefhNMv4.incvRewardClaim.call({from: accounts[4]});
		const uint256tM9Cthj = await CourtFarming_HTStakefhNMv4.unstake.call(uintB4w7oey, boolcGyhP29, {from: accounts[3]});
		const uint256KyElRde = await CourtFarming_HTStakefhNMv4.stake.call(uintc2awdl8, {from: accounts[0]});
		const addressc81Dx0k = await CourtFarming_HTStakefhNMv4.setCourtStake.call(addressp7FeXa, {from: accounts[2]});
		const uint256nbMg6UW = await CourtFarming_HTStakefhNMv4.lastUpdateBlock.call({from: accounts[2]});
		const uint256ornJ3mQ = await CourtFarming_HTStakefhNMv4.rewards.call(addressmzZmVlt, {from: accounts[1]});
		const uint256svfkPur = await CourtFarming_HTStakefhNMv4.blockNumber.call({from: accounts[2]});
		const boolMX6RbD = await CourtFarming_HTStakefhNMv4.stakeIncvRewards.call(uintX0WoxyU, {from: accounts[5]});
		const uint256HUsu6Ue = await CourtFarming_HTStakefhNMv4.unstake.call(uinta9QfWwE, boolpu4ZBFT, {from: accounts[4]});
		const uint256hbsK5IW = await CourtFarming_HTStakefhNMv4.balanceOf.call(addressH3YI0au, {from: accounts[0]});

		assert.equal(uint256G9xAq1Z, BigInt("0"))
		assert.equal(uint256OMU79Hf, BigInt("0"))
		await expect(CourtFarming_HTStakefhNMv4.setCourtStake.call(addressp7FeXa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
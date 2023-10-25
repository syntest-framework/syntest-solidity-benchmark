const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBlpUxo = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressphb5sHt = accounts[2]
		const booleBccUKj = false
		const uinty78Mrnu = BigInt("1966")
		const addresstuh2uWQ = await CourtFarming_RoomLPStakeBlpUxo.setCourtStake.call(addressphb5sHt, {from: accounts[2]});
		const uint256buj4Ves = await CourtFarming_RoomLPStakeBlpUxo.getCurrentTime.call({from: accounts[4]});
		const uint256pkZQzt6 = await CourtFarming_RoomLPStakeBlpUxo.lastUpdateBlock.call({from: accounts[1]});
		const uint256F5kWBaK = await CourtFarming_RoomLPStakeBlpUxo.unstake.call(uinty78Mrnu, booleBccUKj, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeBlpUxo.setCourtStake.call(addressphb5sHt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeb7KweSk = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressb2xL1t = accounts[4]
		const uintCs7SvvQ = BigInt("760")
		const addressyvLItN = accounts[3]
		const addressqPb0Vpb = await CourtFarming_RoomLPStakeb7KweSk.updateReward.call(addressb2xL1t, {from: accounts[1]});
		const boolUn23jLf = await CourtFarming_RoomLPStakeb7KweSk.stakeIncvRewards.call(uintCs7SvvQ, {from: accounts[0]});
		const uint256dINPoFb = await CourtFarming_RoomLPStakeb7KweSk.balanceOf.call(addressyvLItN, {from: accounts[3]});

		assert.equal(boolUn23jLf, false)
		assert.equal(uint256dINPoFb, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaoEEaf = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8KvPZM = BigInt("1505")
		const addressqLs8M5C = accounts[0]
		const uint256GiLyQi = await CourtFarming_RoomLPStakeaoEEaf.incvRewardClaim.call({from: accounts[1]});
		const uint2563ucNaI = await CourtFarming_RoomLPStakeaoEEaf.stake.call(uint8KvPZM, {from: accounts[0]});
		const uint256PIEcPjB = await CourtFarming_RoomLPStakeaoEEaf.getCurrentTime.call({from: accounts[3]});
		const uint256U245ZPa = await CourtFarming_RoomLPStakeaoEEaf.balanceOf.call(addressqLs8M5C, {from: accounts[0]});
		const uint256dogOGg = await CourtFarming_RoomLPStakeaoEEaf.incvRewardClaim.call({from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOjd0bVP = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressi06kRz = accounts[0]
		const uintXuofBbr = BigInt("1416")
		const uint256tXq5PR7 = await CourtFarming_RoomLPStakeOjd0bVP.incvRewardInfo.call({from: accounts[1]});
		const uint256byPc0B3 = await CourtFarming_RoomLPStakeOjd0bVP.balanceOf.call(addressi06kRz, {from: accounts[1]});
		const uint256g4q8iLt = await CourtFarming_RoomLPStakeOjd0bVP.stake.call(uintXuofBbr, {from: accounts[3]});

		assert.equal(uint256byPc0B3, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeOjd0bVP.stake.call(uintXuofBbr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqjtt6YA = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uinti0Fq5jc = BigInt("1540")
		const uintQOipXfc = BigInt("1363")
		const uintz1lMeDG = BigInt("1484")
		const uint256yxA3ft = await CourtFarming_RoomLPStakeqjtt6YA.incvRewardClaim.call({from: accounts[0]});
		const uint256bMnQ5zV = await CourtFarming_RoomLPStakeqjtt6YA.totalStaked.call({from: accounts[4]});
		await CourtFarming_RoomLPStakeqjtt6YA.changeStakeParameters.call(uintz1lMeDG, uintQOipXfc, uinti0Fq5jc, {from: accounts[3]});

		assert.equal(uint256bMnQ5zV, BigInt("0"))
		assert.equal(uint256yxA3ft, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeqjtt6YA.changeStakeParameters.call(uintz1lMeDG, uintQOipXfc, uinti0Fq5jc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYynBVGg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressJ3CNhbN = accounts[0]
		const uint256HuUw8cX = await CourtFarming_RoomLPStakeYynBVGg.incvRewardInfo.call({from: accounts[1]});
		const addressfbSGpF1 = await CourtFarming_RoomLPStakeYynBVGg.getBeneficiaryInfo.call(addressJ3CNhbN, {from: accounts[5]});
		const uint256segxIV6 = await CourtFarming_RoomLPStakeYynBVGg.incvRewardInfo.call({from: accounts[4]});
		const uint256KP8jLZ6 = await CourtFarming_RoomLPStakeYynBVGg.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256G9sRmxa = await CourtFarming_RoomLPStakeYynBVGg.blockNumber.call({from: accounts[2]});

		assert.equal(uint256G9sRmxa, BigInt("1243"))
		assert.equal(uint256KP8jLZ6, BigInt("1243"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeb7KweSk = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressQy2OQWE = accounts[4]
		const uintMMkP4N0 = BigInt("1708")
		const uintMp9Va6j = BigInt("760")
		const addressvvtgDLN = accounts[4]
		const addressqPb0Vpb = await CourtFarming_RoomLPStakeb7KweSk.updateReward.call(addressQy2OQWE, {from: accounts[1]});
		const uint256Z2lTCRe = await CourtFarming_RoomLPStakeb7KweSk.incvRewardClaim.call({from: accounts[3]});
		const uint256K0tK43f = await CourtFarming_RoomLPStakeb7KweSk.expectedRewardsToday.call(uintMMkP4N0, {from: accounts[3]});
		const boolUn23jLf = await CourtFarming_RoomLPStakeb7KweSk.stakeIncvRewards.call(uintMp9Va6j, {from: accounts[0]});
		const uint256dINPoFb = await CourtFarming_RoomLPStakeb7KweSk.balanceOf.call(addressvvtgDLN, {from: accounts[3]});

		assert.equal(boolUn23jLf, false)
		assert.equal(uint256Z2lTCRe, BigInt("0"))
		assert.equal(uint256dINPoFb, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqjtt6YA = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolJuMRi4R = false
		const uintOC6hzFE = BigInt("221")
		const uintHffmp6w = BigInt("1540")
		const uintuBhCaV7 = BigInt("1363")
		const uintUwpMOBa = BigInt("1484")
		const uint256yxA3ft = await CourtFarming_RoomLPStakeqjtt6YA.incvRewardClaim.call({from: accounts[0]});
		const uint256aDh2QSn = await CourtFarming_RoomLPStakeqjtt6YA.unstake.call(uintOC6hzFE, boolJuMRi4R, {from: accounts[1]});
		const uint256bMnQ5zV = await CourtFarming_RoomLPStakeqjtt6YA.totalStaked.call({from: accounts[4]});
		await CourtFarming_RoomLPStakeqjtt6YA.changeStakeParameters.call(uintUwpMOBa, uintuBhCaV7, uintHffmp6w, {from: accounts[3]});

		assert.equal(uint256yxA3ft, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeqjtt6YA.unstake.call(uintOC6hzFE, boolJuMRi4R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqjtt6YA = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressoCOT7ua = accounts[0]
		const uintP4kKwSV = BigInt("1540")
		const uintRH3W8Wn = BigInt("1363")
		const uintN5FKupo = BigInt("1484")
		const addresstBjTg5Q = await CourtFarming_RoomLPStakeqjtt6YA.setCourtStake.call(addressoCOT7ua, {from: accounts[4]});
		const uint256yxA3ft = await CourtFarming_RoomLPStakeqjtt6YA.incvRewardClaim.call({from: accounts[0]});
		const uint256bMnQ5zV = await CourtFarming_RoomLPStakeqjtt6YA.totalStaked.call({from: accounts[4]});
		await CourtFarming_RoomLPStakeqjtt6YA.changeStakeParameters.call(uintN5FKupo, uintRH3W8Wn, uintP4kKwSV, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeqjtt6YA.setCourtStake.call(addressoCOT7ua, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeb7KweSk = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintEnmlT88 = BigInt("1949")
		const uintMtz97Aw = BigInt("860")
		const uintewfBal3 = BigInt("1149")
		const uintAbJcP7h = BigInt("1682")
		const uintSArls7X = BigInt("760")
		const uint256kHMA8w7 = await CourtFarming_RoomLPStakeb7KweSk.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QArZRhv = await CourtFarming_RoomLPStakeb7KweSk.expectedRewardsToday.call(uintEnmlT88, {from: accounts[5]});
		await CourtFarming_RoomLPStakeb7KweSk.changeStakeParameters.call(uintAbJcP7h, uintewfBal3, uintMtz97Aw, {from: accounts[3]});
		const boolUn23jLf = await CourtFarming_RoomLPStakeb7KweSk.stakeIncvRewards.call(uintSArls7X, {from: accounts[0]});

		assert.equal(uint256kHMA8w7, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeb7KweSk.changeStakeParameters.call(uintAbJcP7h, uintewfBal3, uintMtz97Aw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOjd0bVP = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolf0aUkuo = true
		const uintBwKpy6O = BigInt("0")
		const uint256j893H12 = await CourtFarming_RoomLPStakeOjd0bVP.unstake.call(uintBwKpy6O, boolf0aUkuo, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakev2lEYi = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintDTwfAvn = BigInt("0")
		const addressSLMYc5L = accounts[0]
		const uint256AlQqoQc = await CourtFarming_RoomLPStakev2lEYi.incvRewardClaim.call({from: accounts[5]});
		const uint256oav0z5F = await CourtFarming_RoomLPStakev2lEYi.stake.call(uintDTwfAvn, {from: accounts[1]});
		const uint256c8LA86H = await CourtFarming_RoomLPStakev2lEYi.blockNumber.call({from: accounts[2]});
		const uint256uQATYo7 = await CourtFarming_RoomLPStakev2lEYi.rewards.call(addressSLMYc5L, {from: accounts[4]});

		assert.equal(uint256AlQqoQc, BigInt("0"))
		assert.equal(uint256c8LA86H, BigInt("1243"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeb7KweSk = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintAylIHQ1 = BigInt("1662")
		const uinttdI4UrG = BigInt("0")
		const boolKCtFAeQ = await CourtFarming_RoomLPStakeb7KweSk.stakeIncvRewards.call(uintAylIHQ1, {from: accounts[3]});
		const boolUn23jLf = await CourtFarming_RoomLPStakeb7KweSk.stakeIncvRewards.call(uinttdI4UrG, {from: accounts[0]});

		assert.equal(boolKCtFAeQ, false)
		assert.equal(boolUn23jLf, false)
	});
})
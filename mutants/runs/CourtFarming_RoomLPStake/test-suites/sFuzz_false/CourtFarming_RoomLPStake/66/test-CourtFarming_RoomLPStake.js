const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegMj2Y2s = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressulJ8zTg = accounts[0]
		const boolTiRh2Mf = false
		const uintryEJ4Z1 = BigInt("637")
		const addressa3fG2fX = accounts[3]
		const addressWrdHTtM = await CourtFarming_RoomLPStakegMj2Y2s.setCourtStake.call(addressulJ8zTg, {from: accounts[3]});
		const uint256W38tJTm = await CourtFarming_RoomLPStakegMj2Y2s.unstake.call(uintryEJ4Z1, boolTiRh2Mf, {from: accounts[2]});
		const addressDzIeEvY = await CourtFarming_RoomLPStakegMj2Y2s.updateReward.call(addressa3fG2fX, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakegMj2Y2s.setCourtStake.call(addressulJ8zTg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakezgkXU9E = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintEFkAV3y = BigInt("534")
		const addressQrQVDTX = accounts[2]
		const uint256Vfi5Fq = await CourtFarming_RoomLPStakezgkXU9E.expectedRewardsToday.call(uintEFkAV3y, {from: accounts[0]});
		const addressT4cWO7D = await CourtFarming_RoomLPStakezgkXU9E.setCourtStake.call(addressQrQVDTX, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakezgkXU9E.setCourtStake.call(addressQrQVDTX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZBJTeSM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintQtvEF62 = BigInt("1449")
		const boolHP2hTlJ = true
		const uintjTALbAL = BigInt("1607")
		const uintHu6E62 = BigInt("633")
		const uint256D6H1Yf5 = await CourtFarming_RoomLPStakeZBJTeSM.stake.call(uintQtvEF62, {from: accounts[0]});
		const uint256EXOBXDx = await CourtFarming_RoomLPStakeZBJTeSM.totalStaked.call({from: accounts[3]});
		const uint256z97K5pR = await CourtFarming_RoomLPStakeZBJTeSM.unstake.call(uintjTALbAL, boolHP2hTlJ, {from: accounts[2]});
		const uint256FQZsaKl = await CourtFarming_RoomLPStakeZBJTeSM.expectedRewardsToday.call(uintHu6E62, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeZBJTeSM.stake.call(uintQtvEF62, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehAOCxlT = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressZktwZRS = "0x0000000000000000000000000000000000000001"
		const uintsLJAXsX = BigInt("791")
		const uint256QHQN6xc = await CourtFarming_RoomLPStakehAOCxlT.balanceOf.call(addressZktwZRS, {from: accounts[1]});
		const uint256hoPK3tF = await CourtFarming_RoomLPStakehAOCxlT.getCurrentTime.call({from: accounts[1]});
		const uint256JMtpCIF = await CourtFarming_RoomLPStakehAOCxlT.stake.call(uintsLJAXsX, {from: accounts[3]});

		assert.equal(uint256QHQN6xc, BigInt("0"))
		assert.equal(uint256hoPK3tF, BigInt("1630199399"))
		await expect(CourtFarming_RoomLPStakehAOCxlT.stake.call(uintsLJAXsX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiyTohI8 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolLVK4WOa = true
		const uints79PT2 = BigInt("737")
		const addressrpgMgKo = accounts[2]
		const uint256ZX0NoYu = await CourtFarming_RoomLPStakeiyTohI8.getCurrentTime.call({from: accounts[2]});
		const uint256mQCDD40 = await CourtFarming_RoomLPStakeiyTohI8.incvRewardClaim.call({from: accounts[4]});
		const uint256r4LQLMa = await CourtFarming_RoomLPStakeiyTohI8.unstake.call(uints79PT2, boolLVK4WOa, {from: accounts[0]});
		const uint256Z95vGL4 = await CourtFarming_RoomLPStakeiyTohI8.incvRewardClaim.call({from: accounts[1]});
		const addressfoBuYm4 = await CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressrpgMgKo, {from: accounts[4]});

		assert.equal(uint256ZX0NoYu, BigInt("1630199395"))
		assert.equal(uint256mQCDD40, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeiyTohI8.unstake.call(uints79PT2, boolLVK4WOa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiyTohI8 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolLVK4WOa = true
		const uintBoZ6jWN = BigInt("737")
		const addressj6bTkdq = accounts[2]
		const uint256ZX0NoYu = await CourtFarming_RoomLPStakeiyTohI8.getCurrentTime.call({from: accounts[2]});
		const uint256Z2E6q4H = await CourtFarming_RoomLPStakeiyTohI8.incvRewardInfo.call({from: accounts[0]});
		const uint256r4LQLMa = await CourtFarming_RoomLPStakeiyTohI8.unstake.call(uintBoZ6jWN, boolLVK4WOa, {from: accounts[0]});
		const uint256Z95vGL4 = await CourtFarming_RoomLPStakeiyTohI8.incvRewardClaim.call({from: accounts[1]});
		const addressfoBuYm4 = await CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressj6bTkdq, {from: accounts[4]});

		assert.equal(uint256ZX0NoYu, BigInt("1630199398"))
		await expect(CourtFarming_RoomLPStakeiyTohI8.unstake.call(uintBoZ6jWN, boolLVK4WOa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRIGqrFN = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrksiTxi = BigInt("726")
		const addressJwxxJwe = accounts[2]
		const boolSrzI1C0 = true
		const uintkDXmrgz = BigInt("777")
		const uint256EMUwtMY = await CourtFarming_RoomLPStakeRIGqrFN.stake.call(uintrksiTxi, {from: accounts[2]});
		const addressfS3HMze = await CourtFarming_RoomLPStakeRIGqrFN.setCourtStake.call(addressJwxxJwe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fFxuJ2J = await CourtFarming_RoomLPStakeRIGqrFN.incvRewardClaim.call({from: accounts[2]});
		const uint256SBy0cci = await CourtFarming_RoomLPStakeRIGqrFN.unstake.call(uintkDXmrgz, boolSrzI1C0, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiyTohI8 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintq2sHLS = BigInt("855")
		const addressUaYprYP = accounts[3]
		const boolLVK4WOa = true
		const uintOcdEMm = BigInt("737")
		const addressaP7ORmO = accounts[2]
		const boolsvYxfE = await CourtFarming_RoomLPStakeiyTohI8.stakeIncvRewards.call(uintq2sHLS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZX0NoYu = await CourtFarming_RoomLPStakeiyTohI8.getCurrentTime.call({from: accounts[2]});
		const addresscvJppq1 = await CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressUaYprYP, {from: accounts[3]});
		const uint256r4LQLMa = await CourtFarming_RoomLPStakeiyTohI8.unstake.call(uintOcdEMm, boolLVK4WOa, {from: accounts[0]});
		const addressfoBuYm4 = await CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressaP7ORmO, {from: accounts[4]});

		assert.equal(boolsvYxfE, false)
		assert.equal(uint256ZX0NoYu, BigInt("1630199404"))
		await expect(CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressUaYprYP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexowugx = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressMJpbJrn = "0x0000000000000000000000000000000000000001"
		const addressv8MyK44 = accounts[3]
		const uint256ULNvLp = await CourtFarming_RoomLPStakexowugx.rewards.call(addressMJpbJrn, {from: accounts[4]});
		const uint256ZXHpmRK = await CourtFarming_RoomLPStakexowugx.balanceOf.call(addressv8MyK44, {from: accounts[1]});
		const uint256jtD6CwW = await CourtFarming_RoomLPStakexowugx.getCurrentTime.call({from: accounts[2]});
		const uint256meFi9Ym = await CourtFarming_RoomLPStakexowugx.blockNumber.call({from: accounts[1]});

		assert.equal(uint256ZXHpmRK, BigInt("0"))
		assert.equal(uint256jtD6CwW, BigInt("1630199402"))
		assert.equal(uint256meFi9Ym, BigInt("1194"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeclUIYK9 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressVGESPI7 = accounts[2]
		const booliaboPI0 = true
		const uintuJmpcZ = BigInt("1856")
		const boolXX9pwNq = false
		const uintSN7keeJ = BigInt("1260")
		const uint256b5AvBl = await CourtFarming_RoomLPStakeclUIYK9.lastUpdateBlock.call({from: accounts[2]});
		const uint256mixKMPK = await CourtFarming_RoomLPStakeclUIYK9.balanceOf.call(addressVGESPI7, {from: accounts[5]});
		const uint256FV7bBn = await CourtFarming_RoomLPStakeclUIYK9.unstake.call(uintuJmpcZ, booliaboPI0, {from: accounts[3]});
		const uint256gAuMXs8 = await CourtFarming_RoomLPStakeclUIYK9.unstake.call(uintSN7keeJ, boolXX9pwNq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WiBC2de = await CourtFarming_RoomLPStakeclUIYK9.blockNumber.call({from: accounts[1]});

		assert.equal(uint256b5AvBl, BigInt("1194"))
		assert.equal(uint256mixKMPK, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeclUIYK9.unstake.call(uintuJmpcZ, booliaboPI0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexowugx = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresszGjLB5W = "0x0000000000000000000000000000000000000001"
		const addressZxrHMFW = accounts[4]
		const addressANWOtH = "0x0000000000000000000000000000000000000001"
		const addressRxqcO1C = accounts[0]
		const uint256ULNvLp = await CourtFarming_RoomLPStakexowugx.rewards.call(addresszGjLB5W, {from: accounts[4]});
		const uint256ZXHpmRK = await CourtFarming_RoomLPStakexowugx.balanceOf.call(addressZxrHMFW, {from: accounts[1]});
		const uint256VwIEAKl = await CourtFarming_RoomLPStakexowugx.balanceOf.call(addressANWOtH, {from: accounts[2]});
		const uint256jtD6CwW = await CourtFarming_RoomLPStakexowugx.getCurrentTime.call({from: accounts[2]});
		const uint256meFi9Ym = await CourtFarming_RoomLPStakexowugx.blockNumber.call({from: accounts[1]});
		const addressoUsWjrI = await CourtFarming_RoomLPStakexowugx.getBeneficiaryInfo.call(addressRxqcO1C, {from: accounts[0]});

		assert.equal(uint256VwIEAKl, BigInt("0"))
		assert.equal(uint256ZXHpmRK, BigInt("0"))
		assert.equal(uint256jtD6CwW, BigInt("1630199401"))
		assert.equal(uint256meFi9Ym, BigInt("1194"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKn4fXhU = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uint256e6C0PHb = await CourtFarming_RoomLPStakeKn4fXhU.blockNumber.call({from: accounts[0]});
		const uint256IZzosos = await CourtFarming_RoomLPStakeKn4fXhU.totalStaked.call({from: accounts[5]});

		assert.equal(uint256IZzosos, BigInt("0"))
		assert.equal(uint256e6C0PHb, BigInt("1194"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexowugx = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressnO4jMjv = "0x0000000000000000000000000000000000000001"
		const addresslgrmPlR = accounts[3]
		const uintRIa37vu = BigInt("1265")
		const uint9aQDzr = BigInt("1846")
		const uintYN9VWF3 = BigInt("992")
		const uintzNHxVUe = BigInt("77")
		const uintRs4CzC9 = BigInt("157")
		const addressWlbuG1m = accounts[2]
		const uintCipJP1v = BigInt("1535")
		const uintx8jIlzY = BigInt("183")
		const uint256ULNvLp = await CourtFarming_RoomLPStakexowugx.rewards.call(addressnO4jMjv, {from: accounts[4]});
		const uint256ZXHpmRK = await CourtFarming_RoomLPStakexowugx.balanceOf.call(addresslgrmPlR, {from: accounts[1]});
		const uint256uX6T040 = await CourtFarming_RoomLPStakexowugx.blockNumber.call({from: accounts[0]});
		const uint256iW5sznR = await CourtFarming_RoomLPStakexowugx.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZih5ilm = await CourtFarming_RoomLPStakexowugx.stakeIncvRewards.call(uintRIa37vu, {from: accounts[4]});
		const uint256ngLaHjr = await CourtFarming_RoomLPStakexowugx.lastUpdateBlock.call({from: accounts[5]});
		await CourtFarming_RoomLPStakexowugx.changeStakeParameters.call(uintzNHxVUe, uintYN9VWF3, uint9aQDzr, {from: accounts[3]});
		const boolBkIFAHS = await CourtFarming_RoomLPStakexowugx.stakeIncvRewards.call(uintRs4CzC9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jtD6CwW = await CourtFarming_RoomLPStakexowugx.getCurrentTime.call({from: accounts[2]});
		const addressSLVntA1 = await CourtFarming_RoomLPStakexowugx.updateReward.call(addressWlbuG1m, {from: accounts[0]});
		const boolYsuZZg1 = await CourtFarming_RoomLPStakexowugx.stakeIncvRewards.call(uintCipJP1v, {from: accounts[0]});
		const uint256meFi9Ym = await CourtFarming_RoomLPStakexowugx.blockNumber.call({from: accounts[1]});
		const boolMn4wkz = await CourtFarming_RoomLPStakexowugx.stakeIncvRewards.call(uintx8jIlzY, {from: accounts[0]});

		assert.equal(boolZih5ilm, false)
		assert.equal(uint256ZXHpmRK, BigInt("0"))
		assert.equal(uint256iW5sznR, BigInt("1630199406"))
		assert.equal(uint256ngLaHjr, BigInt("1194"))
		assert.equal(uint256uX6T040, BigInt("1194"))
		await expect(CourtFarming_RoomLPStakexowugx.changeStakeParameters.call(uintzNHxVUe, uintYN9VWF3, uint9aQDzr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiyTohI8 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressNYVemUS = accounts[2]
		const addresszcswt51 = await CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressNYVemUS, {from: accounts[2]});
		const uint256mQCDD40 = await CourtFarming_RoomLPStakeiyTohI8.incvRewardClaim.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeiyTohI8.setCourtStake.call(addressNYVemUS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakedArntTr = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintE49Ieyc = BigInt("0")
		const uint256hETHaj = await CourtFarming_RoomLPStakedArntTr.stake.call(uintE49Ieyc, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUO19wvf = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressnVbHyn9 = accounts[0]
		const uintup4c4MQ = BigInt("244")
		const uintdDhnLjp = BigInt("0")
		const uint256g9cBbDb = await CourtFarming_RoomLPStakeUO19wvf.blockNumber.call({from: accounts[5]});
		const uint256OdQsFQZ = await CourtFarming_RoomLPStakeUO19wvf.getCurrentTime.call({from: accounts[4]});
		const uint256ith1elU = await CourtFarming_RoomLPStakeUO19wvf.lastUpdateBlock.call({from: accounts[2]});
		const addressNgsmIZq = await CourtFarming_RoomLPStakeUO19wvf.updateReward.call(addressnVbHyn9, {from: accounts[0]});
		const boolFyTKNQA = await CourtFarming_RoomLPStakeUO19wvf.stakeIncvRewards.call(uintup4c4MQ, {from: accounts[0]});
		const boolpME6DCx = await CourtFarming_RoomLPStakeUO19wvf.stakeIncvRewards.call(uintdDhnLjp, {from: accounts[0]});

		assert.equal(boolFyTKNQA, false)
		assert.equal(boolpME6DCx, false)
		assert.equal(uint256OdQsFQZ, BigInt("1630199393"))
		assert.equal(uint256g9cBbDb, BigInt("1194"))
		assert.equal(uint256ith1elU, BigInt("1194"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakezgkXU9E = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const bool5EEock = false
		const uintgfk46S = BigInt("0")
		const uint256K215KhU = await CourtFarming_RoomLPStakezgkXU9E.unstake.call(uintgfk46S, bool5EEock, {from: "0x0000000000000000000000000000000000000001"});
	});
})
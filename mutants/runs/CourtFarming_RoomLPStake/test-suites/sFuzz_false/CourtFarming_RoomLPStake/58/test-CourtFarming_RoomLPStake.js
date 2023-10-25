const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehS3174p = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressfVeLh2S = accounts[4]
		const addressV0JYeqU = accounts[5]
		const uintIJjSl1l = BigInt("672")
		const addressIco4InC = await CourtFarming_RoomLPStakehS3174p.getBeneficiaryInfo.call(addressfVeLh2S, {from: accounts[2]});
		const uint256LWBpzLE = await CourtFarming_RoomLPStakehS3174p.rewards.call(addressV0JYeqU, {from: accounts[0]});
		const boolzZqckPm = await CourtFarming_RoomLPStakehS3174p.stakeIncvRewards.call(uintIJjSl1l, {from: accounts[0]});

		assert.equal(boolzZqckPm, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewaJqooj = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressyzpkR8l = accounts[1]
		const addressY9lMm7V = accounts[1]
		const uintm7AivKs = BigInt("743")
		const uintw70JOVX = BigInt("970")
		const addressBvYFEbZ = await CourtFarming_RoomLPStakewaJqooj.updateReward.call(addressyzpkR8l, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uT1oUG = await CourtFarming_RoomLPStakewaJqooj.balanceOf.call(addressY9lMm7V, {from: accounts[1]});
		const uint256vGZGp3E = await CourtFarming_RoomLPStakewaJqooj.stake.call(uintm7AivKs, {from: accounts[3]});
		const boolIHClFY0 = await CourtFarming_RoomLPStakewaJqooj.stakeIncvRewards.call(uintw70JOVX, {from: accounts[3]});

		assert.equal(uint256uT1oUG, BigInt("0"))
		await expect(CourtFarming_RoomLPStakewaJqooj.stake.call(uintm7AivKs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAurd3U = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressvQ39f6S = accounts[3]
		const uint256bfgAYSU = await CourtFarming_RoomLPStakeAurd3U.rewards.call(addressvQ39f6S, {from: accounts[0]});
		const uint256wzTiOTm = await CourtFarming_RoomLPStakeAurd3U.lastUpdateBlock.call({from: accounts[2]});

		assert.equal(uint256wzTiOTm, BigInt("1212"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeV68fCRM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintgvIucx6 = BigInt("351")
		const uintNuB4Izq = BigInt("277")
		const addressX1ZGd0u = accounts[3]
		const uint256wqE6RTk = await CourtFarming_RoomLPStakeV68fCRM.expectedRewardsToday.call(uintgvIucx6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BbbjEy = await CourtFarming_RoomLPStakeV68fCRM.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const boolz2cLFaa = await CourtFarming_RoomLPStakeV68fCRM.stakeIncvRewards.call(uintNuB4Izq, {from: accounts[5]});
		const uint256aNz8QPZ = await CourtFarming_RoomLPStakeV68fCRM.rewards.call(addressX1ZGd0u, {from: accounts[3]});
		const uint256Qpe5oTy = await CourtFarming_RoomLPStakeV68fCRM.getCurrentTime.call({from: accounts[4]});

		assert.equal(boolz2cLFaa, false)
		assert.equal(uint256BbbjEy, BigInt("0"))
		assert.equal(uint256Qpe5oTy, BigInt("1630199747"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRMIN8qK = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressWp8Ycs = accounts[5]
		const addressQwCuTiJ = accounts[5]
		const addressEDZVvr6 = accounts[1]
		const address7pZ8hz = accounts[2]
		const uint256Llk2hR9 = await CourtFarming_RoomLPStakeRMIN8qK.balanceOf.call(addressWp8Ycs, {from: accounts[4]});
		const addressHFNfJZe = await CourtFarming_RoomLPStakeRMIN8qK.setCourtStake.call(addressQwCuTiJ, {from: accounts[2]});
		const addressjBOW0zO = await CourtFarming_RoomLPStakeRMIN8qK.getBeneficiaryInfo.call(addressEDZVvr6, {from: accounts[1]});
		const uint256Ovm2Ap1 = await CourtFarming_RoomLPStakeRMIN8qK.blockNumber.call({from: accounts[3]});
		const addressIFHSg1H = await CourtFarming_RoomLPStakeRMIN8qK.setCourtStake.call(address7pZ8hz, {from: accounts[3]});

		assert.equal(uint256Llk2hR9, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeRMIN8qK.setCourtStake.call(addressQwCuTiJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHcobCKj = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressAAH5c6N = accounts[1]
		const addressPTisdP = accounts[3]
		const uint256z8nKsbk = await CourtFarming_RoomLPStakeHcobCKj.totalStaked.call({from: accounts[0]});
		const uint256Kw0nl6P = await CourtFarming_RoomLPStakeHcobCKj.incvRewardInfo.call({from: accounts[2]});
		const uint256EGo4ki = await CourtFarming_RoomLPStakeHcobCKj.rewards.call(addressAAH5c6N, {from: accounts[0]});
		const uint256oWaYqdM = await CourtFarming_RoomLPStakeHcobCKj.lastUpdateBlock.call({from: accounts[3]});
		const addressQzGS8Tw = await CourtFarming_RoomLPStakeHcobCKj.setCourtStake.call(addressPTisdP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y3v1LuL = await CourtFarming_RoomLPStakeHcobCKj.lastUpdateBlock.call({from: accounts[0]});

		assert.equal(uint256oWaYqdM, BigInt("1212"))
		assert.equal(uint256z8nKsbk, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeHcobCKj.setCourtStake.call(addressPTisdP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUFkNbj = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressTq5z4zn = accounts[0]
		const boolBciEys = true
		const uintrZNn7UP = BigInt("1956")
		const uint256dCRAnd2 = await CourtFarming_RoomLPStakeUFkNbj.totalStaked.call({from: accounts[1]});
		const addressYDWlx24 = await CourtFarming_RoomLPStakeUFkNbj.updateReward.call(addressTq5z4zn, {from: accounts[4]});
		const uint256jdJKSfj = await CourtFarming_RoomLPStakeUFkNbj.unstake.call(uintrZNn7UP, boolBciEys, {from: accounts[3]});
		const uint256wLsMJBv = await CourtFarming_RoomLPStakeUFkNbj.totalStaked.call({from: accounts[1]});

		assert.equal(uint256dCRAnd2, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeUFkNbj.unstake.call(uintrZNn7UP, boolBciEys, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecZ38N75 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGhAzKpV = accounts[1]
		const addressSQGHk1M = accounts[2]
		const addressqpdNQQu = "0x0000000000000000000000000000000000000001"
		const uint25687KKHI = await CourtFarming_RoomLPStakecZ38N75.balanceOf.call(addressGhAzKpV, {from: accounts[2]});
		const uint256ViJe7sA = await CourtFarming_RoomLPStakecZ38N75.balanceOf.call(addressSQGHk1M, {from: accounts[5]});
		const addressyhQPV1H = await CourtFarming_RoomLPStakecZ38N75.updateReward.call(addressqpdNQQu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeV68fCRM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintWwgXl79 = BigInt("351")
		const addressgTSwKXz = accounts[1]
		const uinttWoDEBL = BigInt("277")
		const addressczvSikY = accounts[4]
		const uint256wqE6RTk = await CourtFarming_RoomLPStakeV68fCRM.expectedRewardsToday.call(uintWwgXl79, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UOORrcS = await CourtFarming_RoomLPStakeV68fCRM.incvRewardClaim.call({from: accounts[4]});
		const uint256ohx4oY7 = await CourtFarming_RoomLPStakeV68fCRM.lastUpdateBlock.call({from: accounts[4]});
		const uint256aBU2a1z = await CourtFarming_RoomLPStakeV68fCRM.balanceOf.call(addressgTSwKXz, {from: accounts[3]});
		const boolz2cLFaa = await CourtFarming_RoomLPStakeV68fCRM.stakeIncvRewards.call(uinttWoDEBL, {from: accounts[5]});
		const uint256aNz8QPZ = await CourtFarming_RoomLPStakeV68fCRM.rewards.call(addressczvSikY, {from: accounts[3]});
		const uint256Qpe5oTy = await CourtFarming_RoomLPStakeV68fCRM.getCurrentTime.call({from: accounts[4]});

		assert.equal(boolz2cLFaa, false)
		assert.equal(uint256Qpe5oTy, BigInt("1630199730"))
		assert.equal(uint256UOORrcS, BigInt("0"))
		assert.equal(uint256aBU2a1z, BigInt("0"))
		assert.equal(uint256ohx4oY7, BigInt("1212"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAurd3U = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintRfL5DXM = BigInt("351")
		const uintc4OBIp6 = BigInt("717")
		const uintczGEqBD = BigInt("1697")
		const uint256wzTiOTm = await CourtFarming_RoomLPStakeAurd3U.lastUpdateBlock.call({from: accounts[2]});
		await CourtFarming_RoomLPStakeAurd3U.changeStakeParameters.call(uintczGEqBD, uintc4OBIp6, uintRfL5DXM, {from: accounts[5]});

		assert.equal(uint256wzTiOTm, BigInt("1212"))
		await expect(CourtFarming_RoomLPStakeAurd3U.changeStakeParameters.call(uintczGEqBD, uintc4OBIp6, uintRfL5DXM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeV68fCRM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintWnr49ej = BigInt("376")
		const uintk9FRW3 = BigInt("0")
		const uintO0XYjG2 = BigInt("1933")
		const uintqs1a2I8 = BigInt("1303")
		const boolHJyi3u4 = false
		const uintLpF10a = BigInt("1414")
		const boolNFE6CLb = await CourtFarming_RoomLPStakeV68fCRM.stakeIncvRewards.call(uintWnr49ej, {from: "0x0000000000000000000000000000000000000001"});
		const boolz2cLFaa = await CourtFarming_RoomLPStakeV68fCRM.stakeIncvRewards.call(uintk9FRW3, {from: accounts[5]});
		const uint256EhQxUgT = await CourtFarming_RoomLPStakeV68fCRM.expectedRewardsToday.call(uintO0XYjG2, {from: accounts[5]});
		const uint256dOOCNOf = await CourtFarming_RoomLPStakeV68fCRM.expectedRewardsToday.call(uintqs1a2I8, {from: accounts[2]});
		const uint256PjqyKys = await CourtFarming_RoomLPStakeV68fCRM.lastUpdateBlock.call({from: accounts[1]});
		const uint256L1iQPbs = await CourtFarming_RoomLPStakeV68fCRM.unstake.call(uintLpF10a, boolHJyi3u4, {from: accounts[0]});

		assert.equal(boolNFE6CLb, false)
		assert.equal(boolz2cLFaa, false)
		assert.equal(uint256PjqyKys, BigInt("1212"))
		await expect(CourtFarming_RoomLPStakeV68fCRM.unstake.call(uintLpF10a, boolHJyi3u4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUQVt0i8 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintO1YAJW = BigInt("1528")
		const addresswHC0zRy = accounts[1]
		const addressLVuxM0 = accounts[5]
		const addressPXTQWSq = accounts[4]
		const addressscsLM8y = accounts[2]
		const boolUKBpyw = await CourtFarming_RoomLPStakeUQVt0i8.stakeIncvRewards.call(uintO1YAJW, {from: accounts[0]});
		const uint256t9nL5d = await CourtFarming_RoomLPStakeUQVt0i8.balanceOf.call(addresswHC0zRy, {from: accounts[1]});
		const addresskXDRRw = await CourtFarming_RoomLPStakeUQVt0i8.setCourtStake.call(addressLVuxM0, {from: accounts[0]});
		const addressUmmqpld = await CourtFarming_RoomLPStakeUQVt0i8.updateReward.call(addressPXTQWSq, {from: accounts[0]});
		const uint256lLkkUN = await CourtFarming_RoomLPStakeUQVt0i8.rewards.call(addressscsLM8y, {from: accounts[0]});

		assert.equal(boolUKBpyw, false)
		assert.equal(uint256t9nL5d, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeUQVt0i8.setCourtStake.call(addressLVuxM0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeV68fCRM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintDvCXEGX = BigInt("364")
		const uintquNbRhg = BigInt("0")
		const uint256wqE6RTk = await CourtFarming_RoomLPStakeV68fCRM.expectedRewardsToday.call(uintDvCXEGX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OF0tdQ6 = await CourtFarming_RoomLPStakeV68fCRM.stake.call(uintquNbRhg, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAurd3U = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolPf3rNoT = true
		const uintkJK7A2B = BigInt("0")
		const uint256yv7Jegq = await CourtFarming_RoomLPStakeAurd3U.unstake.call(uintkJK7A2B, boolPf3rNoT, {from: accounts[3]});
	});
})
const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJ5FK3v5 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressdCV8v8e = accounts[1]
		const boolJqGJ8So = false
		const uintZP0489A = BigInt("1642")
		const boolgctGCHm = false
		const uintifPxokL = BigInt("989")
		const uint256Jq8Fz2I = await CourtFarming_HTStakeJ5FK3v5.rewards.call(addressdCV8v8e, {from: accounts[1]});
		const uint256UIVzJiJ = await CourtFarming_HTStakeJ5FK3v5.unstake.call(uintZP0489A, boolJqGJ8So, {from: accounts[0]});
		const uint256jiIVhGP = await CourtFarming_HTStakeJ5FK3v5.incvRewardClaim.call({from: accounts[1]});
		const uint256PzAvsKw = await CourtFarming_HTStakeJ5FK3v5.unstake.call(uintifPxokL, boolgctGCHm, {from: accounts[3]});
		const uint256PPSYcWi = await CourtFarming_HTStakeJ5FK3v5.getCurrentTime.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeJ5FK3v5.unstake.call(uintZP0489A, boolJqGJ8So, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSB8bTAH = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintMsK0gEO = BigInt("281")
		const uintOJ23SKG = BigInt("1855")
		const uintzGlX7v = BigInt("520")
		const addresswTwfsbJ = accounts[4]
		await CourtFarming_HTStakeSB8bTAH.changeStakeParameters.call(uintzGlX7v, uintOJ23SKG, uintMsK0gEO, {from: accounts[4]});
		const uint256jIdlHj = await CourtFarming_HTStakeSB8bTAH.rewards.call(addresswTwfsbJ, {from: accounts[4]});

		await expect(CourtFarming_HTStakeSB8bTAH.changeStakeParameters.call(uintzGlX7v, uintOJ23SKG, uintMsK0gEO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexUMwHQ = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintWVEOzEO = BigInt("1067")
		const uintGFZMXFJ = BigInt("1478")
		const uintNB86CUc = BigInt("1010")
		const uint256arCXjk9 = await CourtFarming_HTStakexUMwHQ.expectedRewardsToday.call(uintWVEOzEO, {from: accounts[4]});
		const uint256BTp1vPQ = await CourtFarming_HTStakexUMwHQ.getCurrentTime.call({from: accounts[1]});
		const uint256YMR3Irj = await CourtFarming_HTStakexUMwHQ.blockNumber.call({from: accounts[3]});
		const uint256CxgzR84 = await CourtFarming_HTStakexUMwHQ.expectedRewardsToday.call(uintGFZMXFJ, {from: accounts[2]});
		const uint256NlEq5r7 = await CourtFarming_HTStakexUMwHQ.stake.call(uintNB86CUc, {from: accounts[1]});

		assert.equal(uint256BTp1vPQ, BigInt("1630201376"))
		assert.equal(uint256YMR3Irj, BigInt("1728"))
		await expect(CourtFarming_HTStakexUMwHQ.stake.call(uintNB86CUc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexjB0aZj = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintQ1YCtFt = BigInt("1697")
		const addressmTefE5v = accounts[3]
		const uinttQkuDpR = BigInt("229")
		const uint256DSGYxv = await CourtFarming_HTStakexjB0aZj.expectedRewardsToday.call(uintQ1YCtFt, {from: accounts[1]});
		const addressijYl74L = await CourtFarming_HTStakexjB0aZj.setCourtStake.call(addressmTefE5v, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bXQjWb6 = await CourtFarming_HTStakexjB0aZj.expectedRewardsToday.call(uinttQkuDpR, {from: accounts[2]});

		await expect(CourtFarming_HTStakexjB0aZj.setCourtStake.call(addressmTefE5v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWitcHVQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressYFtM7L1 = accounts[2]
		const uintOgqqui = BigInt("1716")
		const boolyw6R8Wi = true
		const uintQHA14Qh = BigInt("391")
		const addressizJDn7p = accounts[5]
		const uint256KWLuK2t = await CourtFarming_HTStakeWitcHVQ.balanceOf.call(addressYFtM7L1, {from: accounts[3]});
		const boolckVMdrB = await CourtFarming_HTStakeWitcHVQ.stakeIncvRewards.call(uintOgqqui, {from: accounts[0]});
		const uint256VGVIGns = await CourtFarming_HTStakeWitcHVQ.unstake.call(uintQHA14Qh, boolyw6R8Wi, {from: accounts[2]});
		const addressOF3YKD = await CourtFarming_HTStakeWitcHVQ.setCourtStake.call(addressizJDn7p, {from: accounts[3]});

		assert.equal(boolckVMdrB, false)
		assert.equal(uint256KWLuK2t, BigInt("0"))
		await expect(CourtFarming_HTStakeWitcHVQ.unstake.call(uintQHA14Qh, boolyw6R8Wi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeuYs6UDi = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressyxsiUI = accounts[4]
		const addressNjlXfGp = accounts[4]
		const boolduA1Mbw = true
		const uintCUy9dDj = BigInt("1859")
		const addressZhwf6R = accounts[5]
		const uint256Nr4SKC5 = await CourtFarming_HTStakeuYs6UDi.rewards.call(addressyxsiUI, {from: accounts[2]});
		const uint256tRI9VoK = await CourtFarming_HTStakeuYs6UDi.incvRewardInfo.call({from: accounts[2]});
		const addressJDgiTm7 = await CourtFarming_HTStakeuYs6UDi.setCourtStake.call(addressNjlXfGp, {from: accounts[0]});
		const uint256W82J7Ue = await CourtFarming_HTStakeuYs6UDi.incvRewardClaim.call({from: accounts[5]});
		const uint256doQ3sxQ = await CourtFarming_HTStakeuYs6UDi.unstake.call(uintCUy9dDj, boolduA1Mbw, {from: accounts[4]});
		const addressRf7Kt7n = await CourtFarming_HTStakeuYs6UDi.getBeneficiaryInfo.call(addressZhwf6R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeuYs6UDi.setCourtStake.call(addressNjlXfGp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebk0h1Fy = await CourtFarming_HTStake.new({from: accounts[3]});
		const uinth5F4yHm = BigInt("1839")
		const uint256mIJA6pg = await CourtFarming_HTStakebk0h1Fy.lastUpdateBlock.call({from: accounts[0]});
		const uint256w9Lt8OB = await CourtFarming_HTStakebk0h1Fy.incvRewardClaim.call({from: accounts[4]});
		const uint256o6nznvr = await CourtFarming_HTStakebk0h1Fy.totalStaked.call({from: accounts[2]});
		const boolctd88eK = await CourtFarming_HTStakebk0h1Fy.stakeIncvRewards.call(uinth5F4yHm, {from: accounts[2]});
		const uint256tpqcWHu = await CourtFarming_HTStakebk0h1Fy.getCurrentTime.call({from: accounts[0]});
		const uint256G4m4tM2 = await CourtFarming_HTStakebk0h1Fy.incvRewardInfo.call({from: accounts[1]});

		assert.equal(boolctd88eK, false)
		assert.equal(uint256mIJA6pg, BigInt("1728"))
		assert.equal(uint256o6nznvr, BigInt("0"))
		assert.equal(uint256tpqcWHu, BigInt("1630201375"))
		assert.equal(uint256w9Lt8OB, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerxqvhKW = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const address2g5fJW = accounts[1]
		const addressIGob1e = accounts[2]
		const uint256Cwi3Hln = await CourtFarming_HTStakerxqvhKW.getCurrentTime.call({from: accounts[1]});
		const uint256CHBngJJ = await CourtFarming_HTStakerxqvhKW.rewards.call(address2g5fJW, {from: accounts[2]});
		const uint256p6pIwSV = await CourtFarming_HTStakerxqvhKW.balanceOf.call(addressIGob1e, {from: accounts[5]});
		const uint256nNYksPQ = await CourtFarming_HTStakerxqvhKW.getCurrentTime.call({from: accounts[3]});
		const uint256wxRVjKk = await CourtFarming_HTStakerxqvhKW.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSB8bTAH = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintxWUeUBt = BigInt("143")
		const uintTzQXyd = BigInt("44")
		const uintBhed577 = BigInt("2014")
		const uintrqYymeB = BigInt("281")
		const uintISgGD9F = BigInt("1855")
		const uintJvfJsXu = BigInt("520")
		const addressAqmh4Ri = accounts[5]
		const uint256eBDHYDP = await CourtFarming_HTStakeSB8bTAH.incvRewardClaim.call({from: accounts[1]});
		const uint256IqSQBOX = await CourtFarming_HTStakeSB8bTAH._stakeParametrsCalculation.call(uintBhed577, uintTzQXyd, uintxWUeUBt, {from: accounts[2]});
		await CourtFarming_HTStakeSB8bTAH.changeStakeParameters.call(uintJvfJsXu, uintISgGD9F, uintrqYymeB, {from: accounts[4]});
		const uint256jIdlHj = await CourtFarming_HTStakeSB8bTAH.rewards.call(addressAqmh4Ri, {from: accounts[4]});

		assert.equal(uint256eBDHYDP, BigInt("0"))
		await expect(CourtFarming_HTStakeSB8bTAH._stakeParametrsCalculation.call(uintBhed577, uintTzQXyd, uintxWUeUBt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexUMwHQ = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintZ4V0uv = BigInt("1067")
		const addresspiEX0Wy = accounts[1]
		const uintzuOzYAF = BigInt("586")
		const uintUb9Uubo = BigInt("1010")
		const uint256arCXjk9 = await CourtFarming_HTStakexUMwHQ.expectedRewardsToday.call(uintZ4V0uv, {from: accounts[4]});
		const addressiXupayE = await CourtFarming_HTStakexUMwHQ.getBeneficiaryInfo.call(addresspiEX0Wy, {from: accounts[1]});
		const uint256BTp1vPQ = await CourtFarming_HTStakexUMwHQ.getCurrentTime.call({from: accounts[1]});
		const uint256CxgzR84 = await CourtFarming_HTStakexUMwHQ.expectedRewardsToday.call(uintzuOzYAF, {from: accounts[2]});
		const uint256NlEq5r7 = await CourtFarming_HTStakexUMwHQ.stake.call(uintUb9Uubo, {from: accounts[1]});

		assert.equal(uint256BTp1vPQ, BigInt("1630201379"))
		await expect(CourtFarming_HTStakexUMwHQ.stake.call(uintUb9Uubo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepa0tiQe = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintpG0aoIs = BigInt("291")
		const addressLaNPN55 = accounts[1]
		const addressTytwb9g = accounts[2]
		const addressJnMY4Yl = accounts[3]
		const uintO5HKET3 = BigInt("81")
		const uintZxisMUr = BigInt("245")
		const addressHpoXzNz = accounts[3]
		const boolOJtBjf5 = await CourtFarming_HTStakepa0tiQe.stakeIncvRewards.call(uintpG0aoIs, {from: accounts[2]});
		const addresso6bLVlX = await CourtFarming_HTStakepa0tiQe.getBeneficiaryInfo.call(addressLaNPN55, {from: accounts[2]});
		const uint256DxVMH7y = await CourtFarming_HTStakepa0tiQe.incvRewardClaim.call({from: accounts[3]});
		const addressX6Cn9FJ = await CourtFarming_HTStakepa0tiQe.updateReward.call(addressTytwb9g, {from: accounts[0]});
		const uint256G0zG8b2 = await CourtFarming_HTStakepa0tiQe.blockNumber.call({from: accounts[2]});
		const addressGZGc0RP = await CourtFarming_HTStakepa0tiQe.setCourtStake.call(addressJnMY4Yl, {from: accounts[2]});
		const uint256IjpncGS = await CourtFarming_HTStakepa0tiQe.stake.call(uintO5HKET3, {from: accounts[3]});
		const boolfez6aY5 = await CourtFarming_HTStakepa0tiQe.stakeIncvRewards.call(uintZxisMUr, {from: accounts[3]});
		const uint256b8QG7xW = await CourtFarming_HTStakepa0tiQe.incvRewardInfo.call({from: accounts[2]});
		const addresscftUfNb = await CourtFarming_HTStakepa0tiQe.setCourtStake.call(addressHpoXzNz, {from: accounts[4]});

		assert.equal(boolOJtBjf5, false)
		assert.equal(uint256DxVMH7y, BigInt("0"))
		assert.equal(uint256G0zG8b2, BigInt("1728"))
		await expect(CourtFarming_HTStakepa0tiQe.setCourtStake.call(addressJnMY4Yl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQvDVgZv = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressyXfMSB2 = accounts[4]
		const addressI8ll3Vy = "0x00000000000000000000000000000000000000-1"
		const uint256FhM9YSd = await CourtFarming_HTStakeQvDVgZv.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrBB18bh = await CourtFarming_HTStakeQvDVgZv.updateReward.call(addressyXfMSB2, {from: accounts[0]});
		const address3h9pNZ = await CourtFarming_HTStakeQvDVgZv.getBeneficiaryInfo.call(addressI8ll3Vy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FhM9YSd, BigInt("0"))
		await expect(CourtFarming_HTStakeQvDVgZv.getBeneficiaryInfo.call(addressI8ll3Vy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQvDVgZv = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintJLOHGC4 = BigInt("0")
		const addressgsI9tC = accounts[4]
		const uint256xYLg7Ig = await CourtFarming_HTStakeQvDVgZv.stake.call(uintJLOHGC4, {from: accounts[2]});
		const addressrBB18bh = await CourtFarming_HTStakeQvDVgZv.updateReward.call(addressgsI9tC, {from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeog23eRn = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolm5AYVqB = true
		const uintwZWmwq = BigInt("0")
		const uint256xqfkEE = await CourtFarming_HTStakeog23eRn.getCurrentTime.call({from: accounts[0]});
		const uint256MJXwKUV = await CourtFarming_HTStakeog23eRn.unstake.call(uintwZWmwq, boolm5AYVqB, {from: accounts[2]});

		assert.equal(uint256xqfkEE, BigInt("1630201369"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJTrWI6 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintFQdgJvo = BigInt("0")
		const uintVdxNBzQ = BigInt("661")
		const boolwPErgGo = false
		const uintZfLXXkt = BigInt("2004")
		const boolx8lbsi = false
		const uintkhlZid = BigInt("1063")
		const boolwJL08m9 = await CourtFarming_HTStakeJTrWI6.stakeIncvRewards.call(uintFQdgJvo, {from: accounts[3]});
		const uint256w3GDxjz = await CourtFarming_HTStakeJTrWI6.incvRewardInfo.call({from: accounts[2]});
		const booljn4m62X = await CourtFarming_HTStakeJTrWI6.stakeIncvRewards.call(uintVdxNBzQ, {from: accounts[5]});
		const uint256ATKw5w = await CourtFarming_HTStakeJTrWI6.incvRewardClaim.call({from: accounts[4]});
		const uint256eLQR2mM = await CourtFarming_HTStakeJTrWI6.unstake.call(uintZfLXXkt, boolwPErgGo, {from: accounts[4]});
		const uint256yepwAjN = await CourtFarming_HTStakeJTrWI6.unstake.call(uintkhlZid, boolx8lbsi, {from: accounts[0]});

		assert.equal(booljn4m62X, false)
		assert.equal(boolwJL08m9, false)
		assert.equal(uint256ATKw5w, BigInt("0"))
		await expect(CourtFarming_HTStakeJTrWI6.unstake.call(uintZfLXXkt, boolwPErgGo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
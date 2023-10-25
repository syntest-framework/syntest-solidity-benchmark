const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKYmSKv2z = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGExQGNo = BigInt("337")
		const uintFnQp4Ll = BigInt("1063")
		await RainbowRAKYmSKv2z.renounceOwnership.call({from: accounts[2]});
		const uint256Xr4Q0NN = await RainbowRAKYmSKv2z.stake.call(uintGExQGNo, {from: accounts[5]});
		const uint256SMWT97n = await RainbowRAKYmSKv2z.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256QalwP5f = await RainbowRAKYmSKv2z.unstake.call(uintFnQp4Ll, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKU5YkTc3 = await RainbowRAK.new({from: accounts[3]});
		const addressyMZqSR = "0x0000000000000000000000000000000000000001"
		const addressDM4gPLA = accounts[2]
		await RainbowRAKU5YkTc3.exit.call({from: accounts[0]});
		const addressqBtSBGO = await RainbowRAKU5YkTc3.transferOwnership.call(addressyMZqSR, {from: accounts[0]});
		const addressYiWJDUy = await RainbowRAKU5YkTc3.owner.call({from: accounts[2]});
		const uint256Ep4LEWM = await RainbowRAKU5YkTc3.earned.call(addressDM4gPLA, {from: accounts[0]});

		await expect(RainbowRAKU5YkTc3.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKy7odUIA = await RainbowRAK.new({from: accounts[3]});
		const uint256bohDND = await RainbowRAKy7odUIA.rewardPerToken.call({from: accounts[5]});
		const uint256KrfcKXl = await RainbowRAKy7odUIA.rewardPerToken.call({from: accounts[2]});
		await RainbowRAKy7odUIA.renounceOwnership.call({from: accounts[3]});
		await RainbowRAKy7odUIA.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256KrfcKXl, BigInt("0"))
		assert.equal(uint256bohDND, BigInt("0"))
		await expect(RainbowRAKy7odUIA.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKY1mGgMy = await RainbowRAK.new({from: accounts[3]});
		const boolGVxbq9c = await RainbowRAKY1mGgMy.isOwner.call({from: accounts[1]});
		const addressarrayFg14Gyy = await RainbowRAKY1mGgMy.getCommunity.call({from: accounts[1]});
		const addressarrayiSmrWwK = await RainbowRAKY1mGgMy.getCommunity.call({from: accounts[4]});

		assert.equal(addressarrayFg14Gyy, )
		assert.equal(addressarrayiSmrWwK, )
		assert.equal(boolGVxbq9c, false)
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKNJza3x = await RainbowRAK.new({from: accounts[3]});
		const uintKyE3AP3 = BigInt("503")
		await RainbowRAKNJza3x.renounceOwnership.call({from: accounts[4]});
		await RainbowRAKNJza3x.claimRewards.call({from: accounts[1]});
		const uint256dke7OnG = await RainbowRAKNJza3x.stake.call(uintKyE3AP3, {from: accounts[4]});
		await RainbowRAKNJza3x.renounceOwnership.call({from: accounts[2]});
		const uint256rOkQEh = await RainbowRAKNJza3x.rewardPerToken.call({from: accounts[3]});

		await expect(RainbowRAKNJza3x.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdjvjCDl = await RainbowRAK.new({from: accounts[2]});
		const uintdj7Zi7U = BigInt("846")
		const uintshdvKdO = BigInt("1651")
		const uint256iw4Tgzx = await RainbowRAKdjvjCDl.stake.call(uintdj7Zi7U, {from: accounts[3]});
		const addressarraybdHpMSe = await RainbowRAKdjvjCDl.getCommunity.call({from: accounts[4]});
		const uint256WvOchx = await RainbowRAKdjvjCDl.stake.call(uintshdvKdO, {from: accounts[0]});
		const boolUKvowrq = await RainbowRAKdjvjCDl.isOwner.call({from: accounts[1]});

		await expect(RainbowRAKdjvjCDl.stake.call(uintdj7Zi7U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKm7KEZ0j = await RainbowRAK.new({from: accounts[2]});
		const uint256fi0kBW = await RainbowRAKm7KEZ0j.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256cmh7L9A = await RainbowRAKm7KEZ0j.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256cmh7L9A, BigInt("0"))
		assert.equal(uint256fi0kBW, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKm7KEZ0j = await RainbowRAK.new({from: accounts[2]});
		const uint256fi0kBW = await RainbowRAKm7KEZ0j.getCurrentRewardReserve.call({from: accounts[4]});
		await RainbowRAKm7KEZ0j.claimRewards.call({from: accounts[0]});
		const uint256cmh7L9A = await RainbowRAKm7KEZ0j.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256fi0kBW, BigInt("0"))
		await expect(RainbowRAKm7KEZ0j.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKU5YkTc3 = await RainbowRAK.new({from: accounts[3]});
		const addressNn9UBV7 = accounts[2]
		const addressYiWJDUy = await RainbowRAKU5YkTc3.owner.call({from: accounts[2]});
		const uint256Ep4LEWM = await RainbowRAKU5YkTc3.earned.call(addressNn9UBV7, {from: accounts[0]});

		assert.equal(addressYiWJDUy, 0xf92ABA419A276ccE26918E70B744FeDAD0cA7752)
		assert.equal(uint256Ep4LEWM, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKEvzhZno = await RainbowRAK.new({from: accounts[2]});
		const uintYkwTmrT = BigInt("794")
		const uint256LoYmWAA = await RainbowRAKEvzhZno.rewardPerToken.call({from: accounts[0]});
		const uint256VMvcT6d = await RainbowRAKEvzhZno.unstake.call(uintYkwTmrT, {from: accounts[4]});
		const uint256Ci16J2R = await RainbowRAKEvzhZno.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256LoYmWAA, BigInt("0"))
		await expect(RainbowRAKEvzhZno.unstake.call(uintYkwTmrT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKm7KEZ0j = await RainbowRAK.new({from: accounts[2]});
		const addressv2i3kuT = accounts[4]
		const uint256fi0kBW = await RainbowRAKm7KEZ0j.getCurrentRewardReserve.call({from: accounts[4]});
		const addressI1wPXKu = await RainbowRAKm7KEZ0j.transferOwnership.call(addressv2i3kuT, {from: accounts[2]});

		assert.equal(uint256fi0kBW, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKU5YkTc3 = await RainbowRAK.new({from: accounts[3]});
		const addressR4CQnQ = accounts[2]
		const uintLemy7Ic = BigInt("1110")
		const uint256Ep4LEWM = await RainbowRAKU5YkTc3.earned.call(addressR4CQnQ, {from: accounts[0]});
		const uint256tDw3QdC = await RainbowRAKU5YkTc3.notifyRewardAmount.call(uintLemy7Ic, {from: accounts[3]});

		assert.equal(uint256Ep4LEWM, BigInt("0"))
		await expect(RainbowRAKU5YkTc3.notifyRewardAmount.call(uintLemy7Ic, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
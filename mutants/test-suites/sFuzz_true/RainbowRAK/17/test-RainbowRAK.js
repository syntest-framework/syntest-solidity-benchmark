const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKsvr4Kyf = await RainbowRAK.new({from: accounts[3]});
		const uint256gnmWgWV = await RainbowRAKsvr4Kyf.rewardPerToken.call({from: accounts[4]});
//		await RainbowRAKsvr4Kyf.exit.call({from: accounts[4]});
//		const uint256zk4U2XF = await RainbowRAKsvr4Kyf.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256gnmWgWV, BigInt("0"))
		await expect(RainbowRAKsvr4Kyf.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfaALbq6 = await RainbowRAK.new({from: accounts[5]});
		const boolSXLdjKN = await RainbowRAKfaALbq6.isOwner.call({from: accounts[2]});
		const uint256lPtc2jV = await RainbowRAKfaALbq6.getCurrentRewardReserve.call({from: accounts[0]});

		assert.equal(boolSXLdjKN, false)
		assert.equal(uint256lPtc2jV, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKGfhjD3M = await RainbowRAK.new({from: accounts[1]});
		const addressHMLNc3 = accounts[0]
		const uintSJEcOv0 = BigInt("196")
//		const addressAifESYH = await RainbowRAKGfhjD3M.updateReward.call(addressHMLNc3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VpPCldr = await RainbowRAKGfhjD3M.stake.call(uintSJEcOv0, {from: accounts[5]});

		await expect(RainbowRAKGfhjD3M.updateReward.call(addressHMLNc3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuSY8Nwc = await RainbowRAK.new({from: accounts[0]});
		const addressWsXp0XO = accounts[1]
		const addressSzfhsA0 = accounts[0]
//		await RainbowRAKuSY8Nwc.claimRewards.call({from: accounts[1]});
//		const uint256CqhQ4XK = await RainbowRAKuSY8Nwc.rewardPerToken.call({from: accounts[3]});
//		const uint256PX8aQAQ = await RainbowRAKuSY8Nwc.earned.call(addressWsXp0XO, {from: accounts[3]});
//		const addressghiYIlx = await RainbowRAKuSY8Nwc.updateReward.call(addressSzfhsA0, {from: accounts[3]});

		await expect(RainbowRAKuSY8Nwc.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuJxTdSa = await RainbowRAK.new({from: accounts[2]});
		const uintRd2E6eg = BigInt("45")
		const addressarraynlISDMw = await RainbowRAKuJxTdSa.getCommunity.call({from: accounts[4]});
//		const uint256VPn5GPU = await RainbowRAKuJxTdSa.notifyRewardAmount.call(uintRd2E6eg, {from: accounts[4]});
//		await RainbowRAKuJxTdSa.renounceOwnership.call({from: accounts[1]});
//		await RainbowRAKuJxTdSa.onlyOwner.call({from: accounts[4]});
//		const uint256J2zBMxW = await RainbowRAKuJxTdSa.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(addressarraynlISDMw, )
		await expect(RainbowRAKuJxTdSa.notifyRewardAmount.call(uintRd2E6eg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWpiTnEU = await RainbowRAK.new({from: accounts[2]});
		const uintjPwJ23N = BigInt("971")
		const uintiLoOjyr = BigInt("552")
//		const uint256xzfXLW = await RainbowRAKWpiTnEU.stake.call(uintjPwJ23N, {from: accounts[3]});
//		const uint256DqKmHyC = await RainbowRAKWpiTnEU.unstake.call(uintiLoOjyr, {from: accounts[3]});

		await expect(RainbowRAKWpiTnEU.stake.call(uintjPwJ23N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfaALbq6 = await RainbowRAK.new({from: accounts[5]});
		const uintCrRrV9 = BigInt("1586")
		const uint256spjoWmF = await RainbowRAKfaALbq6.rewardPerToken.call({from: accounts[3]});
//		const uint256Pw9viq7 = await RainbowRAKfaALbq6.unstake.call(uintCrRrV9, {from: accounts[3]});
//		const boolSXLdjKN = await RainbowRAKfaALbq6.isOwner.call({from: accounts[2]});

		assert.equal(uint256spjoWmF, BigInt("0"))
		await expect(RainbowRAKfaALbq6.unstake.call(uintCrRrV9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfaALbq6 = await RainbowRAK.new({from: accounts[5]});
		const uintCIukOK = BigInt("1586")
		const addressUvjbyM = await RainbowRAKfaALbq6.owner.call({from: accounts[1]});
		const uint256spjoWmF = await RainbowRAKfaALbq6.rewardPerToken.call({from: accounts[3]});
//		const uint256Pw9viq7 = await RainbowRAKfaALbq6.unstake.call(uintCIukOK, {from: accounts[3]});
//		const boolSXLdjKN = await RainbowRAKfaALbq6.isOwner.call({from: accounts[2]});

		assert.equal(addressUvjbyM, 0xF90683F2899910F1F614f7A79248fd663CebA5C6)
		assert.equal(uint256spjoWmF, BigInt("0"))
		await expect(RainbowRAKfaALbq6.unstake.call(uintCIukOK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWpiTnEU = await RainbowRAK.new({from: accounts[2]});
		const addressTTgoAGK = accounts[0]
//		await RainbowRAKWpiTnEU.renounceOwnership.call({from: accounts[2]});
//		await RainbowRAKWpiTnEU.claimRewards.call({from: accounts[0]});
//		const uint256X2Rqu8o = await RainbowRAKWpiTnEU.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256CELNmEJ = await RainbowRAKWpiTnEU.earned.call(addressTTgoAGK, {from: accounts[5]});

		await expect(RainbowRAKWpiTnEU.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMGP7Y7y = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDRFsd9Z = accounts[4]
		await RainbowRAKMGP7Y7y.onlyOwner.call({from: accounts[2]});
		const uint256L4vW0Q = await RainbowRAKMGP7Y7y.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256e0p0sfk = await RainbowRAKMGP7Y7y.earned.call(addressDRFsd9Z, {from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuSY8Nwc = await RainbowRAK.new({from: accounts[0]});
		const addressto4oru = accounts[5]
		const addressHWBAwSB = await RainbowRAKuSY8Nwc.transferOwnership.call(addressto4oru, {from: accounts[0]});
//		await RainbowRAKuSY8Nwc.claimRewards.call({from: accounts[1]});

		await expect(RainbowRAKuSY8Nwc.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWpiTnEU = await RainbowRAK.new({from: accounts[2]});
		const uintbEQgMQC = BigInt("21")
		const uints0O81QP = BigInt("926")
		const uintphw22kR = BigInt("5")
		const uint256R2zGXT7 = await RainbowRAKWpiTnEU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FYihgpc = await RainbowRAKWpiTnEU.notifyRewardAmount.call(uintbEQgMQC, {from: accounts[2]});
//		const uint256cL4tU15 = await RainbowRAKWpiTnEU.unstake.call(uints0O81QP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xzfXLW = await RainbowRAKWpiTnEU.stake.call(uintphw22kR, {from: accounts[3]});

		assert.equal(uint256R2zGXT7, BigInt("0"))
		await expect(RainbowRAKWpiTnEU.notifyRewardAmount.call(uintbEQgMQC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
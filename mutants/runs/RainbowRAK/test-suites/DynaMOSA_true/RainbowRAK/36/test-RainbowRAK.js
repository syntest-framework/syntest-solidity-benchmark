const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKrO0IURT = await RainbowRAK.new({from: accounts[4]});
		const uintX9CQl24 = BigInt("1112")
		await RainbowRAKrO0IURT.onlyOwner.call({from: accounts[1]});
		const uint256c1ZWl5H = await RainbowRAKrO0IURT.rewardPerToken.call({from: accounts[4]});
		await RainbowRAKrO0IURT.claimRewards.call({from: accounts[3]});
		const uint256qjpdvej = await RainbowRAKrO0IURT.unstake.call(uintX9CQl24, {from: accounts[3]});
		const boolQJSBCK3 = await RainbowRAKrO0IURT.isOwner.call({from: accounts[0]});
		await RainbowRAKrO0IURT.claimRewards.call({from: accounts[1]});

		await expect(RainbowRAKrO0IURT.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaPljz17 = await RainbowRAK.new({from: accounts[0]});
		const uintY5nSmAE = BigInt("1767")
		await RainbowRAKaPljz17.claimRewards.call({from: accounts[5]});
		const uint256sfY7g7z = await RainbowRAKaPljz17.stake.call(uintY5nSmAE, {from: accounts[4]});

		await expect(RainbowRAKaPljz17.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKVPoAzNF = await RainbowRAK.new({from: accounts[1]});
		const uintNijp8fs = BigInt("1229")
		const uint256YMoCyek = await RainbowRAKVPoAzNF.rewardPerToken.call({from: accounts[4]});
		const uint256kHRmgQ1 = await RainbowRAKVPoAzNF.rewardPerToken.call({from: accounts[3]});
		const uint256yrAKrf7 = await RainbowRAKVPoAzNF.unstake.call(uintNijp8fs, {from: accounts[5]});

		assert.equal(uint256YMoCyek, BigInt("0"))
		assert.equal(uint256kHRmgQ1, BigInt("0"))
		await expect(RainbowRAKVPoAzNF.unstake.call(uintNijp8fs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYrxLezd = await RainbowRAK.new({from: accounts[3]});
		const uintR0I4MmX = BigInt("288")
		await RainbowRAKYrxLezd.exit.call({from: accounts[0]});
		const uint256GrRBrel = await RainbowRAKYrxLezd.unstake.call(uintR0I4MmX, {from: accounts[2]});
		const uint256WKrDkv8 = await RainbowRAKYrxLezd.rewardPerToken.call({from: accounts[4]});
		const addressarrayditwvuN = await RainbowRAKYrxLezd.getCommunity.call({from: accounts[0]});

		await expect(RainbowRAKYrxLezd.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKALhZVKU = await RainbowRAK.new({from: accounts[0]});
		const uintJ45VQa1 = BigInt("1796")
		const addresst7Rptvt = accounts[1]
		const uint256K0Fw14q = await RainbowRAKALhZVKU.notifyRewardAmount.call(uintJ45VQa1, {from: accounts[3]});
		const boolJxGa1k7 = await RainbowRAKALhZVKU.isOwner.call({from: accounts[1]});
		const uint256jsMdAZi = await RainbowRAKALhZVKU.earned.call(addresst7Rptvt, {from: accounts[4]});
		const boolmtnJfwd = await RainbowRAKALhZVKU.isOwner.call({from: accounts[2]});

		await expect(RainbowRAKALhZVKU.notifyRewardAmount.call(uintJ45VQa1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgVnOImV = await RainbowRAK.new({from: accounts[0]});
		const uintxrDnreb = BigInt("900")
		const addresswxvWSBp = accounts[0]
		const uint256t6TbDPL = await RainbowRAKgVnOImV.stake.call(uintxrDnreb, {from: accounts[1]});
		const addressZIfFutr = await RainbowRAKgVnOImV.updateReward.call(addresswxvWSBp, {from: accounts[0]});
		const boolfAsh0At = await RainbowRAKgVnOImV.isOwner.call({from: accounts[1]});
		await RainbowRAKgVnOImV.renounceOwnership.call({from: accounts[3]});

		await expect(RainbowRAKgVnOImV.stake.call(uintxrDnreb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJ2fke5Z = await RainbowRAK.new({from: accounts[4]});
		const addressSEhsxPY = await RainbowRAKJ2fke5Z.owner.call({from: accounts[0]});

		assert.equal(addressSEhsxPY, 0x82903D397eF243810A4C985b42F111b5D0a8D59e)
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuSOplJC = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZcnoGVc = BigInt("1683")
		const uintcFfCk09 = BigInt("1592")
		const boolEyEuLF5 = await RainbowRAKuSOplJC.isOwner.call({from: accounts[0]});
		const uint256hifIGPx = await RainbowRAKuSOplJC.stake.call(uintZcnoGVc, {from: accounts[4]});
		const uint256FMlCZI = await RainbowRAKuSOplJC.stake.call(uintcFfCk09, {from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgeQ7Wt = await RainbowRAK.new({from: accounts[2]});
		const addressU9B5jkn = accounts[2]
		const uintYHuEL5q = BigInt("139")
		const uint256i01Uu3N = await RainbowRAKgeQ7Wt.earned.call(addressU9B5jkn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zxysPoz = await RainbowRAKgeQ7Wt.getCurrentRewardReserve.call({from: accounts[0]});
		const boolmWL9dwa = await RainbowRAKgeQ7Wt.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256trkIKoT = await RainbowRAKgeQ7Wt.unstake.call(uintYHuEL5q, {from: accounts[1]});

		assert.equal(boolmWL9dwa, false)
		assert.equal(uint256i01Uu3N, BigInt("0"))
		assert.equal(uint256zxysPoz, BigInt("0"))
		await expect(RainbowRAKgeQ7Wt.unstake.call(uintYHuEL5q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaPljz17 = await RainbowRAK.new({from: accounts[0]});
		const addressarrayYekfGP = await RainbowRAKaPljz17.getCommunity.call({from: accounts[2]});
		const addresshSdpkR6 = await RainbowRAKaPljz17.owner.call({from: accounts[1]});
		await RainbowRAKaPljz17.claimRewards.call({from: accounts[5]});

		assert.equal(addressarrayYekfGP, )
		assert.equal(addresshSdpkR6, 0xaAB79832fD4eBEa8BB4BD2dF5cACe04A7cC2a4F6)
		await expect(RainbowRAKaPljz17.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaPljz17 = await RainbowRAK.new({from: accounts[0]});
		const addressF1zoDr = accounts[1]
		const addressTa16B31 = await RainbowRAKaPljz17.transferOwnership.call(addressF1zoDr, {from: accounts[0]});
		await RainbowRAKaPljz17.claimRewards.call({from: accounts[5]});
		const addressarrayGYhvLTr = await RainbowRAKaPljz17.getCommunity.call({from: accounts[1]});

		await expect(RainbowRAKaPljz17.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaPljz17 = await RainbowRAK.new({from: accounts[0]});
		const uintC1CZnWa = BigInt("1036")
		await RainbowRAKaPljz17.renounceOwnership.call({from: accounts[0]});
		const uint256H4yk60H = await RainbowRAKaPljz17.notifyRewardAmount.call(uintC1CZnWa, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKaPljz17.claimRewards.call({from: accounts[5]});

		await expect(RainbowRAKaPljz17.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaPljz17 = await RainbowRAK.new({from: accounts[0]});
		const uintSXb6VEk = BigInt("1799")
		const addressEYzEAjg = accounts[1]
		const uint256mmXK9H = await RainbowRAKaPljz17.notifyRewardAmount.call(uintSXb6VEk, {from: accounts[0]});
		await RainbowRAKaPljz17.claimRewards.call({from: accounts[5]});
		const addressHXX7PUX = await RainbowRAKaPljz17.transferOwnership.call(addressEYzEAjg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKaPljz17.notifyRewardAmount.call(uintSXb6VEk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKE4hXzzo = await RainbowRAK.new({from: accounts[5]});
		const addressPAxkKww = accounts[4]
		const addressBS4WC3E = accounts[3]
		const addressWobzLZY = accounts[1]
		const addresst2etZQp = accounts[1]
		const addressmKY0Ck = await RainbowRAKE4hXzzo.transferOwnership.call(addressPAxkKww, {from: accounts[2]});
		const addressv67G4L8 = await RainbowRAKE4hXzzo.updateReward.call(addressBS4WC3E, {from: accounts[5]});
		await RainbowRAKE4hXzzo.onlyOwner.call({from: accounts[2]});
		const uint256pk3ub5 = await RainbowRAKE4hXzzo.earned.call(addressWobzLZY, {from: accounts[1]});
		const addressf8O3Lt = await RainbowRAKE4hXzzo.updateReward.call(addresst2etZQp, {from: accounts[4]});
		const boole313LqY = await RainbowRAKE4hXzzo.isOwner.call({from: accounts[1]});

		await expect(RainbowRAKE4hXzzo.transferOwnership.call(addressPAxkKww, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQeSTXMT = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFffAAm1 = BigInt("339")
		const uint256Emztfh7 = await RainbowRAKQeSTXMT.stake.call(uintFffAAm1, {from: accounts[3]});
		const addressarrayL4rmcrA = await RainbowRAKQeSTXMT.getCommunity.call({from: accounts[3]});
		await RainbowRAKQeSTXMT.claimRewards.call({from: accounts[1]});
		await RainbowRAKQeSTXMT.renounceOwnership.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKiBIl2Je = await RainbowRAK.new({from: accounts[3]});
		const addresshcbCUL4 = accounts[4]
		const addressarraytADcEEQ = await RainbowRAKiBIl2Je.getCommunity.call({from: accounts[3]});
		const addressTNq2fZK = await RainbowRAKiBIl2Je.owner.call({from: accounts[4]});
		const uint256FqkAxRV = await RainbowRAKiBIl2Je.getCurrentRewardReserve.call({from: accounts[4]});
		const addressSg8HkRD = await RainbowRAKiBIl2Je.updateReward.call(addresshcbCUL4, {from: accounts[0]});
		await RainbowRAKiBIl2Je.exit.call({from: accounts[2]});

		assert.equal(addressTNq2fZK, 0x2DC8B9413bEddcF07Bc95f9acA3F4Fd2f283482a)
		assert.equal(addressarraytADcEEQ, )
		assert.equal(uint256FqkAxRV, BigInt("0"))
		await expect(RainbowRAKiBIl2Je.updateReward.call(addresshcbCUL4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKsnJWTJb = await RainbowRAK.new({from: accounts[2]});
		const addressMDxhc7c = accounts[0]
		const uint256Gseierq = await RainbowRAKsnJWTJb.rewardPerToken.call({from: accounts[4]});
		const boollyW3rYN = await RainbowRAKsnJWTJb.isOwner.call({from: accounts[2]});
		const uint256remrEhS = await RainbowRAKsnJWTJb.earned.call(addressMDxhc7c, {from: accounts[4]});
		const addressy9wQCzU = await RainbowRAKsnJWTJb.owner.call({from: accounts[2]});

		assert.equal(addressy9wQCzU, 0x0e9Aa68A0695942a1C96322dbEEa96EC9aF24239)
		assert.equal(boollyW3rYN, true)
		assert.equal(uint256Gseierq, BigInt("0"))
		assert.equal(uint256remrEhS, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjkoSXfB = await RainbowRAK.new({from: accounts[3]});
		const boolqXJVget = await RainbowRAKjkoSXfB.isOwner.call({from: accounts[4]});
		const addressvhLioI9 = await RainbowRAKjkoSXfB.owner.call({from: accounts[0]});
		await RainbowRAKjkoSXfB.claimRewards.call({from: accounts[2]});

		assert.equal(addressvhLioI9, 0x2DC8B9413bEddcF07Bc95f9acA3F4Fd2f283482a)
		assert.equal(boolqXJVget, false)
		await expect(RainbowRAKjkoSXfB.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdSFslr9 = await RainbowRAK.new({from: accounts[3]});
		await RainbowRAKdSFslr9.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nDnMTn5 = await RainbowRAKdSFslr9.rewardPerToken.call({from: accounts[0]});
		const boolewl1XJ = await RainbowRAKdSFslr9.isOwner.call({from: accounts[3]});
		const addressarraykU5qYoA = await RainbowRAKdSFslr9.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKdSFslr9.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtmoQDll = await RainbowRAK.new({from: accounts[2]});
		const uintkGMj5Dv = BigInt("43")
		const addressiFOYyp3 = accounts[2]
		const uint25646jxHP = await RainbowRAKtmoQDll.stake.call(uintkGMj5Dv, {from: accounts[4]});
		const uint256LolSy2g = await RainbowRAKtmoQDll.earned.call(addressiFOYyp3, {from: accounts[4]});

		await expect(RainbowRAKtmoQDll.stake.call(uintkGMj5Dv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJ25NtmL = await RainbowRAK.new({from: accounts[0]});
		const uint5AT6I3 = BigInt("1884")
		const addressNZP5QCP = accounts[2]
		const addressmgRdv66 = accounts[3]
		const uint256wtQn18V = await RainbowRAKJ25NtmL.unstake.call(uint5AT6I3, {from: accounts[5]});
		const uint256G4rDRg2 = await RainbowRAKJ25NtmL.earned.call(addressNZP5QCP, {from: accounts[1]});
		const addressarrayD3jKePS = await RainbowRAKJ25NtmL.getCommunity.call({from: accounts[0]});
		const addressxWQclt9 = await RainbowRAKJ25NtmL.transferOwnership.call(addressmgRdv66, {from: accounts[4]});

		await expect(RainbowRAKJ25NtmL.unstake.call(uint5AT6I3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjkoSXfB = await RainbowRAK.new({from: accounts[3]});
		const addressvhLioI9 = await RainbowRAKjkoSXfB.owner.call({from: accounts[0]});
		await RainbowRAKjkoSXfB.renounceOwnership.call({from: accounts[3]});
		await RainbowRAKjkoSXfB.claimRewards.call({from: accounts[2]});

		assert.equal(addressvhLioI9, 0x2DC8B9413bEddcF07Bc95f9acA3F4Fd2f283482a)
		await expect(RainbowRAKjkoSXfB.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtmoQDll = await RainbowRAK.new({from: accounts[2]});
		const uintZ3Ei68a = BigInt("884")
		const uintpjiSF7b = BigInt("9")
		const uint256H0yFXVX = await RainbowRAKtmoQDll.notifyRewardAmount.call(uintZ3Ei68a, {from: accounts[2]});
		const uint25646jxHP = await RainbowRAKtmoQDll.stake.call(uintpjiSF7b, {from: accounts[4]});
		await RainbowRAKtmoQDll.claimRewards.call({from: accounts[3]});
		await RainbowRAKtmoQDll.claimRewards.call({from: accounts[0]});
		const uint256azv39UL = await RainbowRAKtmoQDll.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(RainbowRAKtmoQDll.notifyRewardAmount.call(uintZ3Ei68a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJ25NtmL = await RainbowRAK.new({from: accounts[0]});
		const addressaXyatTZ = accounts[4]
		const uintyKksXYM = BigInt("107")
		const addressNXALvea = await RainbowRAKJ25NtmL.transferOwnership.call(addressaXyatTZ, {from: accounts[0]});
		const uint256JVPFIBb = await RainbowRAKJ25NtmL.rewardPerToken.call({from: accounts[3]});
		const uint256S0KmEZL = await RainbowRAKJ25NtmL.unstake.call(uintyKksXYM, {from: accounts[3]});

		assert.equal(uint256JVPFIBb, BigInt("0"))
		await expect(RainbowRAKJ25NtmL.unstake.call(uintyKksXYM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
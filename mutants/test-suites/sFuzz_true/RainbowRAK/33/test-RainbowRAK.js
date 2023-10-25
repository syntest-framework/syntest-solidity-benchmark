const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKWymDeE = await RainbowRAK.new({from: accounts[4]});
//		await RainbowRAKWymDeE.claimRewards.call({from: accounts[5]});
//		await RainbowRAKWymDeE.claimRewards.call({from: accounts[3]});
//		const addressarrayfcNTfMJ = await RainbowRAKWymDeE.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKWymDeE.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgw4cTQ2 = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKgw4cTQ2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressSEKmDhQ = await RainbowRAKgw4cTQ2.owner.call({from: accounts[1]});
		const uint256IwXvN8Q = await RainbowRAKgw4cTQ2.getCurrentRewardReserve.call({from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKq6qBpWJ = await RainbowRAK.new({from: accounts[3]});
		const uint256MXttdOP = await RainbowRAKq6qBpWJ.getCurrentRewardReserve.call({from: accounts[3]});
//		await RainbowRAKq6qBpWJ.onlyOwner.call({from: accounts[4]});
//		const boolLBbz1E9 = await RainbowRAKq6qBpWJ.isOwner.call({from: accounts[1]});
//		const boolVpOrgQ8 = await RainbowRAKq6qBpWJ.isOwner.call({from: accounts[2]});

		assert.equal(uint256MXttdOP, BigInt("0"))
		await expect(RainbowRAKq6qBpWJ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKrpjprI5 = await RainbowRAK.new({from: accounts[1]});
		const addressLzuNtpo = "0x0000000000000000000000000000000000000001"
		const uintZhDTNB0 = BigInt("1680")
		const boolNBq3I7g = await RainbowRAKrpjprI5.isOwner.call({from: accounts[1]});
		const uint256MguAU8G = await RainbowRAKrpjprI5.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256W2yl2Fx = await RainbowRAKrpjprI5.earned.call(addressLzuNtpo, {from: accounts[1]});
//		await RainbowRAKrpjprI5.exit.call({from: accounts[1]});
//		const uint256bPiSBJ = await RainbowRAKrpjprI5.unstake.call(uintZhDTNB0, {from: accounts[0]});

		assert.equal(boolNBq3I7g, true)
		assert.equal(uint256MguAU8G, BigInt("0"))
		assert.equal(uint256W2yl2Fx, BigInt("0"))
		await expect(RainbowRAKrpjprI5.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2tnffT = await RainbowRAK.new({from: accounts[3]});
		const addressZz5yHnx = accounts[5]
		const addressosZR0UJ = accounts[5]
		const addressO0dDcjp = await RainbowRAK2tnffT.owner.call({from: accounts[3]});
		const uint256jDyKeri = await RainbowRAK2tnffT.earned.call(addressZz5yHnx, {from: accounts[4]});
//		await RainbowRAK2tnffT.exit.call({from: accounts[1]});
//		const uint256J1dCC2S = await RainbowRAK2tnffT.earned.call(addressosZR0UJ, {from: accounts[4]});

		assert.equal(addressO0dDcjp, 0x9E87f1E4773e34fCecfb51b90470E6bedD32ff70)
		assert.equal(uint256jDyKeri, BigInt("0"))
		await expect(RainbowRAK2tnffT.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxoJQ0nl = await RainbowRAK.new({from: accounts[4]});
		const uintZRfRy4t = BigInt("333")
		const uint256MBlDby7 = await RainbowRAKxoJQ0nl.getCurrentRewardReserve.call({from: accounts[1]});
//		const uint256apXBwsF = await RainbowRAKxoJQ0nl.unstake.call(uintZRfRy4t, {from: accounts[4]});
//		const boolejraHWd = await RainbowRAKxoJQ0nl.isOwner.call({from: accounts[5]});

		assert.equal(uint256MBlDby7, BigInt("0"))
		await expect(RainbowRAKxoJQ0nl.unstake.call(uintZRfRy4t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxoJQ0nl = await RainbowRAK.new({from: accounts[4]});
		const uintZeVAa34 = BigInt("1153")
		const uint256MBlDby7 = await RainbowRAKxoJQ0nl.getCurrentRewardReserve.call({from: accounts[1]});
		const boolejraHWd = await RainbowRAKxoJQ0nl.isOwner.call({from: accounts[5]});
//		const uint256uyppLoi = await RainbowRAKxoJQ0nl.stake.call(uintZeVAa34, {from: accounts[5]});

		assert.equal(boolejraHWd, false)
		assert.equal(uint256MBlDby7, BigInt("0"))
		await expect(RainbowRAKxoJQ0nl.stake.call(uintZeVAa34, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFOxUQ6 = await RainbowRAK.new({from: accounts[2]});
		const addressRFNd0CV = accounts[2]
		const addressarraydNKnG8 = await RainbowRAKFOxUQ6.getCommunity.call({from: accounts[2]});
		const uint256xQlYtPO = await RainbowRAKFOxUQ6.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256pgUcM3z = await RainbowRAKFOxUQ6.rewardPerToken.call({from: accounts[1]});
//		const addressmPZqOl0 = await RainbowRAKFOxUQ6.transferOwnership.call(addressRFNd0CV, {from: accounts[4]});
//		await RainbowRAKFOxUQ6.exit.call({from: accounts[4]});

		assert.equal(addressarraydNKnG8, )
		assert.equal(uint256pgUcM3z, BigInt("0"))
		assert.equal(uint256xQlYtPO, BigInt("0"))
		await expect(RainbowRAKFOxUQ6.transferOwnership.call(addressRFNd0CV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxoJQ0nl = await RainbowRAK.new({from: accounts[4]});
		const addressWp59JOy = accounts[0]
		const addressfoYsu4P = accounts[0]
		const uint256MBlDby7 = await RainbowRAKxoJQ0nl.getCurrentRewardReserve.call({from: accounts[1]});
		const addresscemXO26 = await RainbowRAKxoJQ0nl.transferOwnership.call(addressWp59JOy, {from: accounts[4]});
//		const addressloFhl9N = await RainbowRAKxoJQ0nl.transferOwnership.call(addressfoYsu4P, {from: accounts[0]});

		assert.equal(uint256MBlDby7, BigInt("0"))
		await expect(RainbowRAKxoJQ0nl.transferOwnership.call(addressfoYsu4P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWymDeE = await RainbowRAK.new({from: accounts[4]});
		const uintluj5Ky7 = BigInt("1433")
		const addresstaTnxo = accounts[3]
//		const uint256XGm3RkS = await RainbowRAKWymDeE.notifyRewardAmount.call(uintluj5Ky7, {from: accounts[4]});
//		const uint256RoZN9II = await RainbowRAKWymDeE.earned.call(addresstaTnxo, {from: accounts[0]});
//		await RainbowRAKWymDeE.claimRewards.call({from: accounts[3]});

		await expect(RainbowRAKWymDeE.notifyRewardAmount.call(uintluj5Ky7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWymDeE = await RainbowRAK.new({from: accounts[4]});
//		await RainbowRAKWymDeE.renounceOwnership.call({from: accounts[4]});
//		const uint2568pZCmM = await RainbowRAKWymDeE.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256zZu6nnu = await RainbowRAKWymDeE.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(RainbowRAKWymDeE.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
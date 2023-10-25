const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingU986tnA = await SLTDStaking.new({from: accounts[3]});
		const addressTiAefTr = accounts[0]
		const uint256VwtPYL9 = await SLTDStakingU986tnA.totalSupply.call({from: accounts[2]});
		await SLTDStakingU986tnA.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDStakingU986tnA.getReward.call({from: accounts[3]});
		await SLTDStakingU986tnA.exit.call({from: accounts[3]});
		const uint256PXVgGpV = await SLTDStakingU986tnA.balanceOf.call(addressTiAefTr, {from: accounts[2]});

		assert.equal(uint256VwtPYL9, BigInt("0"))
		await expect(SLTDStakingU986tnA.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakings63TraP = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTSq0wj3 = BigInt("924")
		const uintcz2zApX = BigInt("1160")
		const uint256G4Aixkv = await SLTDStakings63TraP.stake.call(uintTSq0wj3, {from: accounts[4]});
		const uint256sj6LvP3 = await SLTDStakings63TraP.notifyRewardAmount.call(uintcz2zApX, {from: accounts[0]});
		const uint256L59D8zC = await SLTDStakings63TraP.totalSupply.call({from: accounts[2]});
		await SLTDStakings63TraP.exit.call({from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdw3ebY5 = await SLTDStaking.new({from: accounts[2]});
		const addressg9cdGE1 = "0x0000000000000000000000000000000000000001"
		const addressWXkYuUQ = accounts[5]
		const addressglrbkhU = accounts[1]
		const addressqlwQP9 = await SLTDStakingdw3ebY5.setSLTD.call(addressWXkYuUQ, addressg9cdGE1, {from: accounts[4]});
		await SLTDStakingdw3ebY5.renounceOwnership.call({from: accounts[3]});
		const addressuCkm4jb = await SLTDStakingdw3ebY5.transferOwnership.call(addressglrbkhU, {from: accounts[4]});

		await expect(SLTDStakingdw3ebY5.setSLTD.call(addressWXkYuUQ, addressg9cdGE1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinglWRryRP = await SLTDStaking.new({from: accounts[1]});
		const uintHO8dhD = BigInt("359")
		const addressuGXt5L = accounts[4]
		const addresshcJCW6o = accounts[3]
		await SLTDStakinglWRryRP.renounceOwnership.call({from: accounts[1]});
		await SLTDStakinglWRryRP.exit.call({from: accounts[3]});
		const uint256YUYjc9g = await SLTDStakinglWRryRP.withdraw.call(uintHO8dhD, {from: accounts[1]});
		const uint256qrC4IpS = await SLTDStakinglWRryRP.earned.call(addressuGXt5L, {from: accounts[5]});
		const addressicjEbWD = await SLTDStakinglWRryRP.transferOwnership.call(addresshcJCW6o, {from: accounts[4]});

		await expect(SLTDStakinglWRryRP.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqozDmMJ = await SLTDStaking.new({from: accounts[2]});
		const addressgkVsl9G = accounts[3]
		const addressfUTxAyv = accounts[2]
		const address4CZ7Wn = accounts[4]
		await SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressAZXBMzn = await SLTDStakingqozDmMJ.setSLTD.call(addressfUTxAyv, addressgkVsl9G, {from: accounts[2]});
		const uint256eK94Pxi = await SLTDStakingqozDmMJ.earned.call(address4CZ7Wn, {from: accounts[0]});

		await expect(SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinglWRryRP = await SLTDStaking.new({from: accounts[1]});
		const addressQKC24Fc = accounts[5]
		const uintdSzyC9r = BigInt("359")
		const addressL3iGqB = accounts[3]
		await SLTDStakinglWRryRP.renounceOwnership.call({from: accounts[1]});
		const addressdZ1YvcW = await SLTDStakinglWRryRP.transferOwnership.call(addressQKC24Fc, {from: accounts[0]});
		await SLTDStakinglWRryRP.exit.call({from: accounts[3]});
		const uint256YUYjc9g = await SLTDStakinglWRryRP.withdraw.call(uintdSzyC9r, {from: accounts[1]});
		const addressicjEbWD = await SLTDStakinglWRryRP.transferOwnership.call(addressL3iGqB, {from: accounts[4]});

		await expect(SLTDStakinglWRryRP.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingmB5u9D = await SLTDStaking.new({from: accounts[4]});
		const addressgXuM3fI = accounts[0]
		const uintQSaBY1P = BigInt("444")
		const uintmWzskHL = BigInt("1940")
		const uint256Lzmz2B8 = await SLTDStakingmB5u9D.totalSupply.call({from: accounts[2]});
		const uint2563gBloq = await SLTDStakingmB5u9D.earned.call(addressgXuM3fI, {from: accounts[2]});
		const uint256psUYXoG = await SLTDStakingmB5u9D.stake.call(uintQSaBY1P, {from: "0x0000000000000000000000000000000000000001"});
		const uint256869wGU = await SLTDStakingmB5u9D.withdraw.call(uintmWzskHL, {from: accounts[2]});
		await SLTDStakingmB5u9D.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint2563gBloq, BigInt("0"))
		assert.equal(uint256Lzmz2B8, BigInt("0"))
		await expect(SLTDStakingmB5u9D.stake.call(uintQSaBY1P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzQnc4mX = await SLTDStaking.new({from: accounts[2]});
		const addressw764uiC = accounts[4]
		const uinthDmyEab = BigInt("632")
		const uintxm4uLR4 = BigInt("1130")
		const uintOLzeJ7n = BigInt("304")
		const addressS6weCgo = accounts[0]
		const uint256zfdCKSw = await SLTDStakingzQnc4mX.earned.call(addressw764uiC, {from: accounts[1]});
		const uint256xB5n8tZ = await SLTDStakingzQnc4mX.withdraw.call(uinthDmyEab, {from: accounts[5]});
		const uint256KiA0F3I = await SLTDStakingzQnc4mX.withdraw.call(uintxm4uLR4, {from: accounts[1]});
		const uint256V64v2S = await SLTDStakingzQnc4mX.withdraw.call(uintOLzeJ7n, {from: accounts[4]});
		const uint256EEQMSq2 = await SLTDStakingzQnc4mX.balanceOf.call(addressS6weCgo, {from: accounts[0]});

		assert.equal(uint256zfdCKSw, BigInt("0"))
		await expect(SLTDStakingzQnc4mX.withdraw.call(uinthDmyEab, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqozDmMJ = await SLTDStaking.new({from: accounts[2]});
		const addresscBoAyvt = "0x0000000000000000000000000000000000000001"
		const addressONG4XqQ = accounts[4]
		const addresskeUwT8a = accounts[2]
		const addressLnMFluu = accounts[4]
		await SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jWZ3Cin = await SLTDStakingqozDmMJ.totalSupply.call({from: accounts[0]});
		const addressIEjn7To = await SLTDStakingqozDmMJ.transferOwnership.call(addresscBoAyvt, {from: accounts[2]});
		await SLTDStakingqozDmMJ.renounceOwnership.call({from: accounts[2]});
		const addressAZXBMzn = await SLTDStakingqozDmMJ.setSLTD.call(addresskeUwT8a, addressONG4XqQ, {from: accounts[2]});
		const uint256eK94Pxi = await SLTDStakingqozDmMJ.earned.call(addressLnMFluu, {from: accounts[0]});

		await expect(SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqozDmMJ = await SLTDStaking.new({from: accounts[2]});
		const addresssxuMSNa = accounts[4]
		const addresszwLKVAE = accounts[2]
		const addressucMhgzv = accounts[4]
		await SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressibOWDH9 = await SLTDStakingqozDmMJ.owner.call({from: accounts[0]});
		await SLTDStakingqozDmMJ.getReward.call({from: accounts[0]});
		await SLTDStakingqozDmMJ.renounceOwnership.call({from: accounts[2]});
		const addressAZXBMzn = await SLTDStakingqozDmMJ.setSLTD.call(addresszwLKVAE, addresssxuMSNa, {from: accounts[2]});
		const uint256RBGZUD = await SLTDStakingqozDmMJ.totalSupply.call({from: accounts[2]});
		const uint256eK94Pxi = await SLTDStakingqozDmMJ.earned.call(addressucMhgzv, {from: accounts[0]});

		await expect(SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqozDmMJ = await SLTDStaking.new({from: accounts[2]});
		const addressRIpEMYy = accounts[1]
		const addressG142SZf = accounts[3]
		const addresskPJMFa = accounts[2]
		const addressuump8S = accounts[5]
		await SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGC7Zysm = await SLTDStakingqozDmMJ.setRewardDistribution.call(addressRIpEMYy, {from: accounts[2]});
		const addressAZXBMzn = await SLTDStakingqozDmMJ.setSLTD.call(addresskPJMFa, addressG142SZf, {from: accounts[2]});
		const uint256eK94Pxi = await SLTDStakingqozDmMJ.earned.call(addressuump8S, {from: accounts[0]});

		await expect(SLTDStakingqozDmMJ.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
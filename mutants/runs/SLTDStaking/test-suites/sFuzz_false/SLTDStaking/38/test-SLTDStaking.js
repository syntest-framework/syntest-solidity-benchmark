const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingn6DD9p1 = await SLTDStaking.new({from: accounts[3]});
		const addressTHjYkVH = accounts[5]
		await SLTDStakingn6DD9p1.exit.call({from: accounts[0]});
		await SLTDStakingn6DD9p1.exit.call({from: accounts[2]});
		const addressyORN4N = await SLTDStakingn6DD9p1.setRewardDistribution.call(addressTHjYkVH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingn6DD9p1.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingN9FTTIC = await SLTDStaking.new({from: accounts[1]});
		const addresslu97AwS = accounts[2]
		const uintUDwjrsP = BigInt("475")
		const addressaJYcrJo = await SLTDStakingN9FTTIC.transferOwnership.call(addresslu97AwS, {from: accounts[2]});
		const uint256cb5E3g4 = await SLTDStakingN9FTTIC.stake.call(uintUDwjrsP, {from: accounts[2]});
		const boolENKcArg = await SLTDStakingN9FTTIC.isOwner.call({from: accounts[2]});

		await expect(SLTDStakingN9FTTIC.transferOwnership.call(addresslu97AwS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9ekKSP = await SLTDStaking.new({from: accounts[4]});
		const addressVFf55fF = accounts[0]
		const uintwa6PheK = BigInt("932")
		const addressLqJsNz = accounts[4]
		const addressPIiOVqb = await SLTDStakingM9ekKSP.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresseHNZV0 = await SLTDStakingM9ekKSP.setRewardDistribution.call(addressVFf55fF, {from: accounts[5]});
		const boolKsEbZTX = await SLTDStakingM9ekKSP.isOwner.call({from: accounts[2]});
		const boolrBKjLLN = await SLTDStakingM9ekKSP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YCmJdF6 = await SLTDStakingM9ekKSP.stake.call(uintwa6PheK, {from: accounts[4]});
		const addressjelJGWg = await SLTDStakingM9ekKSP.transferOwnership.call(addressLqJsNz, {from: accounts[3]});

		assert.equal(addressPIiOVqb, 0xd633172700de52E0feF741828CaA13E773C65Df4)
		await expect(SLTDStakingM9ekKSP.setRewardDistribution.call(addressVFf55fF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZfvjwUO = await SLTDStaking.new({from: accounts[3]});
		const uintkqrXjKK = BigInt("393")
		const uinttzaDAR6 = BigInt("735")
		const uintAiWY1tW = BigInt("1387")
		const uint256wKShmzW = await SLTDStakingZfvjwUO.withdraw.call(uintkqrXjKK, {from: "0x0000000000000000000000000000000000000001"});
		const uint2565SmqGG = await SLTDStakingZfvjwUO.stake.call(uinttzaDAR6, {from: accounts[3]});
		await SLTDStakingZfvjwUO.getReward.call({from: accounts[2]});
		await SLTDStakingZfvjwUO.exit.call({from: accounts[2]});
		const uint256cY8RFfR = await SLTDStakingZfvjwUO.stake.call(uintAiWY1tW, {from: accounts[1]});

		await expect(SLTDStakingZfvjwUO.withdraw.call(uintkqrXjKK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxoghRUj = await SLTDStaking.new({from: accounts[0]});
		const uintwswrq8u = BigInt("1867")
		const uint256h3UXhHU = await SLTDStakingxoghRUj.stake.call(uintwswrq8u, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TvtJGfc = await SLTDStakingxoghRUj.lastTimeRewardApplicable.call({from: accounts[2]});
		await SLTDStakingxoghRUj.onlyOwner.call({from: accounts[2]});

		await expect(SLTDStakingxoghRUj.stake.call(uintwswrq8u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingubZvW1N = await SLTDStaking.new({from: accounts[0]});
		const addressimvflng = accounts[0]
		const uintz0aKhcB = BigInt("1943")
		const addresskScnolb = await SLTDStakingubZvW1N.transferOwnership.call(addressimvflng, {from: accounts[0]});
		const uint256UsRDk7U = await SLTDStakingubZvW1N.stake.call(uintz0aKhcB, {from: accounts[2]});
		await SLTDStakingubZvW1N.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDStakingubZvW1N.stake.call(uintz0aKhcB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOuszeaQ = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswqwfkPQ = "0x0000000000000000000000000000000000000001"
		const addressKzEqSLt = accounts[0]
		const uintyusOqu7 = BigInt("1048")
		const addressMKOT66l = accounts[0]
		const uint256r0U8Y6W = await SLTDStakingOuszeaQ.balanceOf.call(addresswqwfkPQ, {from: accounts[4]});
		const addressi3VvBhO = await SLTDStakingOuszeaQ.setRewardDistribution.call(addressKzEqSLt, {from: accounts[5]});
		const uint256xIEmoY4 = await SLTDStakingOuszeaQ.notifyRewardAmount.call(uintyusOqu7, {from: accounts[4]});
		const uint256TN6n6HE = await SLTDStakingOuszeaQ.balanceOf.call(addressMKOT66l, {from: accounts[1]});
		await SLTDStakingOuszeaQ.onlyOwner.call({from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingR0jobGn = await SLTDStaking.new({from: accounts[5]});
		const addresskqtFxgr = accounts[2]
		const addressQqMBc2 = accounts[0]
		const addressJ4GpE3X = accounts[4]
		const addressg5eqZKo = accounts[4]
		const uint256xez1DQT = await SLTDStakingR0jobGn.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingR0jobGn.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDStakingR0jobGn.exit.call({from: accounts[3]});
		const addressOYFv3Py = await SLTDStakingR0jobGn.setSLTD.call(addressQqMBc2, addresskqtFxgr, {from: accounts[3]});
		const addressntfOL7 = await SLTDStakingR0jobGn.setRewardDistribution.call(addressJ4GpE3X, {from: accounts[3]});
		const addressdkHK73b = await SLTDStakingR0jobGn.transferOwnership.call(addressg5eqZKo, {from: accounts[0]});

		assert.equal(uint256xez1DQT, BigInt("0"))
		await expect(SLTDStakingR0jobGn.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingn6DD9p1 = await SLTDStaking.new({from: accounts[3]});
		const addressxLdrG67 = accounts[6]
		await SLTDStakingn6DD9p1.getReward.call({from: accounts[4]});
		await SLTDStakingn6DD9p1.exit.call({from: accounts[2]});
		const uint256phIMW08 = await SLTDStakingn6DD9p1.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressyORN4N = await SLTDStakingn6DD9p1.setRewardDistribution.call(addressxLdrG67, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingn6DD9p1.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingn6DD9p1 = await SLTDStaking.new({from: accounts[3]});
		const address5mXKdb = accounts[2]
		const addressQb9xnlP = accounts[6]
		await SLTDStakingn6DD9p1.getReward.call({from: accounts[4]});
		const uint256phIMW08 = await SLTDStakingn6DD9p1.lastTimeRewardApplicable.call({from: accounts[3]});
		const addresshgAFFmY = await SLTDStakingn6DD9p1.setRewardDistribution.call(address5mXKdb, {from: accounts[3]});
		const addressyORN4N = await SLTDStakingn6DD9p1.setRewardDistribution.call(addressQb9xnlP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingn6DD9p1.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingn6DD9p1 = await SLTDStaking.new({from: accounts[3]});
		await SLTDStakingn6DD9p1.renounceOwnership.call({from: accounts[3]});
		await SLTDStakingn6DD9p1.exit.call({from: accounts[0]});

		await expect(SLTDStakingn6DD9p1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingn6DD9p1 = await SLTDStaking.new({from: accounts[3]});
		const uintOnWANrm = BigInt("201")
		const addressQQX4AQ = accounts[6]
		const addressdMHuwW = accounts[5]
		const addressB3dG7ON = accounts[0]
		await SLTDStakingn6DD9p1.getReward.call({from: accounts[4]});
		const uint256r2VR3uf = await SLTDStakingn6DD9p1.notifyRewardAmount.call(uintOnWANrm, {from: accounts[1]});
		const uint256phIMW08 = await SLTDStakingn6DD9p1.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressyORN4N = await SLTDStakingn6DD9p1.setRewardDistribution.call(addressQQX4AQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressCpMgcj0 = await SLTDStakingn6DD9p1.setRewardDistribution.call(addressdMHuwW, {from: accounts[4]});
		const uint256ox8QsX = await SLTDStakingn6DD9p1.earned.call(addressB3dG7ON, {from: accounts[1]});

		await expect(SLTDStakingn6DD9p1.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
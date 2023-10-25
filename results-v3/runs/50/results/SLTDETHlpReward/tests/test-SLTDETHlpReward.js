const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintG7SebvT = BigInt("1854")
		const addressvy2K6NI = accounts[0]
		const uint256VjexQTd = await SLTDETHlpRewardpfOZqgI.withdraw.call(uintG7SebvT, {from: accounts[1]});
		const uint256WR1Tm0j = await SLTDETHlpRewardpfOZqgI.balanceOf.call(addressvy2K6NI, {from: accounts[4]});
		await SLTDETHlpRewardpfOZqgI.checkStart.call({from: accounts[3]});

		await expect(SLTDETHlpRewardpfOZqgI.withdraw.call(uintG7SebvT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS13dZI = await SLTDETHlpReward.new({from: accounts[1]});
		const uintNbX3ec = BigInt("1911")
		const uintCuD6oNd = BigInt("896")
		await SLTDETHlpRewardS13dZI.exit.call({from: accounts[0]});
		const uint256FQ2Vp8y = await SLTDETHlpRewardS13dZI.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jzqyfh = await SLTDETHlpRewardS13dZI.stake.call(uintNbX3ec, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DGvJjV = await SLTDETHlpRewardS13dZI.stake.call(uintCuD6oNd, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardS13dZI.getReward.call({from: accounts[2]});

		await expect(SLTDETHlpRewardS13dZI.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardSsDIsV = await SLTDETHlpReward.new({from: accounts[1]});
		const addressYV3F9Uh = accounts[4]
		const uintMja1oEV = BigInt("385")
		const boolj56Rlo = await SLTDETHlpRewardSsDIsV.isOwner.call({from: accounts[0]});
		const addressIP7O6e = await SLTDETHlpRewardSsDIsV.setStakeAddress.call(addressYV3F9Uh, {from: accounts[1]});
		const uint256bmB8Hpo = await SLTDETHlpRewardSsDIsV.stake.call(uintMja1oEV, {from: accounts[0]});
		const uint256hHXyv9l = await SLTDETHlpRewardSsDIsV.totalSupply.call({from: accounts[0]});
		const uint256t7UAqTc = await SLTDETHlpRewardSsDIsV.rewardPerToken.call({from: accounts[1]});
		const uint256Kq5YkQ = await SLTDETHlpRewardSsDIsV.totalSupply.call({from: accounts[5]});

		assert.equal(boolj56Rlo, false)
		await expect(SLTDETHlpRewardSsDIsV.stake.call(uintMja1oEV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIZkarkw = await SLTDETHlpReward.new({from: accounts[3]});
		const addresslg1Jmqk = accounts[0]
		const addresshwGqmXg = accounts[2]
		const addressTEqIMNf = await SLTDETHlpRewardIZkarkw.setRewardDistribution.call(addresslg1Jmqk, {from: "0x0000000000000000000000000000000000000001"});
		const addressCTaeFiC = await SLTDETHlpRewardIZkarkw.setRewardDistribution.call(addresshwGqmXg, {from: accounts[4]});
		await SLTDETHlpRewardIZkarkw.onlyRewardDistribution.call({from: accounts[3]});
		const uint256lQb8PET = await SLTDETHlpRewardIZkarkw.lastTimeRewardApplicable.call({from: accounts[5]});
		await SLTDETHlpRewardIZkarkw.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDETHlpRewardIZkarkw.setRewardDistribution.call(addresslg1Jmqk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardeixTXgZ = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmED2H9l = accounts[4]
		const addressQjmafQO = accounts[4]
		const addressIcNdPUS = accounts[2]
		const addresskpuSj1u = "0x0000000000000000000000000000000000000001"
		const addressqDXNpns = accounts[1]
		const addresscYtCXnN = accounts[0]
		const addresssPYu6ed = await SLTDETHlpRewardeixTXgZ.setStakeAddress.call(addressmED2H9l, {from: accounts[1]});
		const addressZuArn6e = await SLTDETHlpRewardeixTXgZ.transferOwnership.call(addressQjmafQO, {from: accounts[5]});
		const uint256mJSzLIZ = await SLTDETHlpRewardeixTXgZ.balanceOf.call(addressIcNdPUS, {from: accounts[0]});
		const addressk0yG11a = await SLTDETHlpRewardeixTXgZ.updateReward.call(addresskpuSj1u, {from: accounts[0]});
		const addressvI0YQXz = await SLTDETHlpRewardeixTXgZ.updateReward.call(addressqDXNpns, {from: accounts[0]});
		const uint256WfRcxep = await SLTDETHlpRewardeixTXgZ.balanceOf.call(addresscYtCXnN, {from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbXtnL1f = await SLTDETHlpReward.new({from: accounts[1]});
		const addressArJRGxJ = accounts[1]
		const uintGz9BopW = BigInt("227")
		const uintCR2kcMo = BigInt("270")
		const addressigPS1uC = accounts[3]
		const addressNXEjejJ = await SLTDETHlpRewardbXtnL1f.updateReward.call(addressArJRGxJ, {from: accounts[3]});
		const uint256tm5v7oR = await SLTDETHlpRewardbXtnL1f.withdraw.call(uintGz9BopW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jbkwO6Z = await SLTDETHlpRewardbXtnL1f.stake.call(uintCR2kcMo, {from: accounts[3]});
		const uint256HrICENV = await SLTDETHlpRewardbXtnL1f.balanceOf.call(addressigPS1uC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fa0W6OP = await SLTDETHlpRewardbXtnL1f.rewardPerToken.call({from: accounts[1]});

		await expect(SLTDETHlpRewardbXtnL1f.updateReward.call(addressArJRGxJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardzGcFNcB = await SLTDETHlpReward.new({from: accounts[2]});
		const uintqbVvUb5 = BigInt("214")
		const uint256TBiOwop = await SLTDETHlpRewardzGcFNcB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256fUqckJT = await SLTDETHlpRewardzGcFNcB.notifyRewardAmount.call(uintqbVvUb5, {from: accounts[0]});
		await SLTDETHlpRewardzGcFNcB.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256TBiOwop, BigInt("0"))
		await expect(SLTDETHlpRewardzGcFNcB.notifyRewardAmount.call(uintqbVvUb5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardH6vZKW = await SLTDETHlpReward.new({from: accounts[3]});
		const addressjsmQreG = "0x0000000000000000000000000000000000000001"
		const address1CnjKI = accounts[2]
		const uint256m5jvYgs = await SLTDETHlpRewardH6vZKW.balanceOf.call(addressjsmQreG, {from: accounts[2]});
		const uint256AMC2Tdc = await SLTDETHlpRewardH6vZKW.remainingReward.call({from: accounts[4]});
		const addressIkLQuIV = await SLTDETHlpRewardH6vZKW.setStakeAddress.call(address1CnjKI, {from: accounts[1]});
		await SLTDETHlpRewardH6vZKW.exit.call({from: accounts[3]});
		const uint256dNCn6XM = await SLTDETHlpRewardH6vZKW.remainingReward.call({from: accounts[3]});
		const boolZZuYIuU = await SLTDETHlpRewardH6vZKW.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256m5jvYgs, BigInt("0"))
		await expect(SLTDETHlpRewardH6vZKW.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintEfuqOVb = BigInt("1859")
		await SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]});
		const uint256j22P7OZ = await SLTDETHlpRewardpfOZqgI.totalSupply.call({from: accounts[5]});
		const uint256VjexQTd = await SLTDETHlpRewardpfOZqgI.withdraw.call(uintEfuqOVb, {from: accounts[1]});
		const address1QWXS1 = await SLTDETHlpRewardpfOZqgI.owner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintOW2rdRd = BigInt("1902")
		const uintmOQTDqw = BigInt("1859")
		await SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]});
		const uint256j22P7OZ = await SLTDETHlpRewardpfOZqgI.totalSupply.call({from: accounts[5]});
		const uint256ZFjRHSW = await SLTDETHlpRewardpfOZqgI.notifyRewardAmount.call(uintOW2rdRd, {from: accounts[5]});
		const uint256VjexQTd = await SLTDETHlpRewardpfOZqgI.withdraw.call(uintmOQTDqw, {from: accounts[1]});

		await expect(SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintcI3O3aB = BigInt("1860")
		const addressINichMP = await SLTDETHlpRewardpfOZqgI.owner.call({from: accounts[0]});
		const uint256VjexQTd = await SLTDETHlpRewardpfOZqgI.withdraw.call(uintcI3O3aB, {from: accounts[1]});
		await SLTDETHlpRewardpfOZqgI.onlyOwner.call({from: accounts[1]});
		const uint256m6ZfwXB = await SLTDETHlpRewardpfOZqgI.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressINichMP, 0xDC756b441AF70266F7eC8b2D6d9C7Cf09a94a17a)
		await expect(SLTDETHlpRewardpfOZqgI.withdraw.call(uintcI3O3aB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const addresstP0GM4J = accounts[4]
		const addresssVATfXp = accounts[4]
		const addresswpGN7wt = await SLTDETHlpRewardpfOZqgI.setRewardDistribution.call(addresstP0GM4J, {from: accounts[5]});
		const uint256mzAToQ9 = await SLTDETHlpRewardpfOZqgI.rewardPerToken.call({from: accounts[0]});
		const addresssiPsd2 = await SLTDETHlpRewardpfOZqgI.setStakeAddress.call(addresssVATfXp, {from: accounts[2]});
		await SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]});
		const uint256KSJDQc = await SLTDETHlpRewardpfOZqgI.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256mzAToQ9, BigInt("0"))
		await expect(SLTDETHlpRewardpfOZqgI.setStakeAddress.call(addresssVATfXp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintam5B2hX = BigInt("37")
		const uintS2cdDyc = BigInt("1837")
		const uint256Nyj5CP = await SLTDETHlpRewardpfOZqgI.setStartTime.call(uintam5B2hX, {from: accounts[5]});
		const uint256VjexQTd = await SLTDETHlpRewardpfOZqgI.withdraw.call(uintS2cdDyc, {from: accounts[1]});

		await expect(SLTDETHlpRewardpfOZqgI.withdraw.call(uintS2cdDyc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpfOZqgI = await SLTDETHlpReward.new({from: accounts[5]});
		await SLTDETHlpRewardpfOZqgI.renounceOwnership.call({from: accounts[5]});
		await SLTDETHlpRewardpfOZqgI.renounceOwnership.call({from: accounts[2]});
		await SLTDETHlpRewardpfOZqgI.getReward.call({from: accounts[0]});

		await expect(SLTDETHlpRewardpfOZqgI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqZlL17Z = await SLTDETHlpReward.new({from: accounts[2]});
		const addressKhQBqrS = "0x0000000000000000000000000000000000000001"
		const addressNU60kmx = accounts[0]
		const addressQ9OU1Ym = accounts[2]
		const uintVe2DCoN = BigInt("107")
		const addresskuUDXLb = accounts[1]
		const addressC8OaNOv = await SLTDETHlpRewardqZlL17Z.transferOwnership.call(addressKhQBqrS, {from: accounts[2]});
		const addressUzcuNkJ = await SLTDETHlpRewardqZlL17Z.setRewardDistribution.call(addressNU60kmx, {from: "0x0000000000000000000000000000000000000001"});
		const addressbG7HLyp = await SLTDETHlpRewardqZlL17Z.transferOwnership.call(addressQ9OU1Ym, {from: accounts[3]});
		const uint256VqEcSbc = await SLTDETHlpRewardqZlL17Z.withdraw.call(uintVe2DCoN, {from: "0x0000000000000000000000000000000000000001"});
		const addressYtrGtZW = await SLTDETHlpRewardqZlL17Z.setRewardDistribution.call(addresskuUDXLb, {from: accounts[4]});

		await expect(SLTDETHlpRewardqZlL17Z.setRewardDistribution.call(addressNU60kmx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
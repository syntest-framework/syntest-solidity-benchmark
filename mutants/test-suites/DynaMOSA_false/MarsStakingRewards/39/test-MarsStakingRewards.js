const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressvGvmQRM = accounts[3]
		const addressjOq0xn4 = accounts[2]
		const addressi7zJdZk = accounts[3]
		const MarsStakingRewardsYga06C2 = await MarsStakingRewards.new(addressvGvmQRM, addressjOq0xn4, addressi7zJdZk, {from: accounts[1]});
		const uintoQJWHFa = BigInt("1395")
		const uintWBpprAf = BigInt("983")
		const addressb6tnK0s = "0x0000000000000000000000000000000000000001"
//		const uint256kSQCaJZ = await MarsStakingRewardsYga06C2.notifyRewardAmount.call(uintWBpprAf, uintoQJWHFa, {from: accounts[0]});
//		await MarsStakingRewardsYga06C2.onlyOwner.call({from: accounts[0]});
//		const uint256oinREsA = await MarsStakingRewardsYga06C2.getRewardForDuration.call({from: accounts[0]});
//		const uint256oswdRqY = await MarsStakingRewardsYga06C2.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressTOFY1ot = await MarsStakingRewardsYga06C2.updateReward.call(addressb6tnK0s, {from: accounts[4]});
//		const uint256Yt3LwqM = await MarsStakingRewardsYga06C2.totalSupply.call({from: accounts[3]});

		await expect(MarsStakingRewardsYga06C2.notifyRewardAmount.call(uintWBpprAf, uintoQJWHFa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJL7dr3R = accounts[4]
		const address1YM2N3 = accounts[2]
		const addressuBz3dWv = accounts[4]
		const MarsStakingRewardsDNmhMjf = await MarsStakingRewards.new(addressJL7dr3R, address1YM2N3, addressuBz3dWv, {from: accounts[3]});
		const uintqbdIXEw = BigInt("83")
//		const uint256nMbGmfD = await MarsStakingRewardsDNmhMjf.stake.call(uintqbdIXEw, {from: accounts[4]});
//		const uint256FHdWqOd = await MarsStakingRewardsDNmhMjf.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsDNmhMjf.stake.call(uintqbdIXEw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressq2WiL3 = accounts[3]
		const addressSzMCKyE = accounts[1]
		const addressBL7y7x0 = accounts[4]
		const MarsStakingRewardst9kSIIa = await MarsStakingRewards.new(addressq2WiL3, addressSzMCKyE, addressBL7y7x0, {from: accounts[4]});
		const uintc9XzYXU = BigInt("134")
		const uint256MZdvDoC = await MarsStakingRewardst9kSIIa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ku9ZWdW = await MarsStakingRewardst9kSIIa.rewardPerToken.call({from: accounts[2]});
//		const uint2569jjGyH = await MarsStakingRewardst9kSIIa.stake.call(uintc9XzYXU, {from: accounts[2]});

		assert.equal(uint256Ku9ZWdW, BigInt("0"))
		assert.equal(uint256MZdvDoC, BigInt("0"))
		await expect(MarsStakingRewardst9kSIIa.stake.call(uintc9XzYXU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstVe9yju = accounts[1]
		const addressNBiItQ = accounts[3]
		const addressBmO2G9w = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsmt2Ipo = await MarsStakingRewards.new(addresstVe9yju, addressNBiItQ, addressBmO2G9w, {from: accounts[1]});
		const addressJQC1g9S = accounts[2]
		const addressuij0uUU = accounts[5]
//		const addressvFqaNqR = await MarsStakingRewardsmt2Ipo.setRewardsDistribution.call(addressJQC1g9S, {from: accounts[2]});
//		const uint256JMpGh80 = await MarsStakingRewardsmt2Ipo.earned.call(addressuij0uUU, {from: accounts[2]});
//		const boolxQgppVQ = await MarsStakingRewardsmt2Ipo.isOwner.call({from: accounts[5]});
//		const uint256CdyCS3w = await MarsStakingRewardsmt2Ipo.totalSupply.call({from: accounts[3]});

		await expect(MarsStakingRewardsmt2Ipo.setRewardsDistribution.call(addressJQC1g9S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address4cI2ed = accounts[0]
		const addresso5r7k2D = accounts[1]
		const addressJ8YoUyh = accounts[2]
		const MarsStakingRewardsVkDISD = await MarsStakingRewards.new(address4cI2ed, addresso5r7k2D, addressJ8YoUyh, {from: accounts[2]});
//		await MarsStakingRewardsVkDISD.onlyRewardsDistribution.call({from: accounts[4]});
//		const addressLlQMado = await MarsStakingRewardsVkDISD.owner.call({from: accounts[2]});

		await expect(MarsStakingRewardsVkDISD.onlyRewardsDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbQU69aF = accounts[2]
		const addresswOPdWSj = accounts[5]
		const addresswRmA8Op = accounts[3]
		const MarsStakingRewardsJPgVKy5 = await MarsStakingRewards.new(addressbQU69aF, addresswOPdWSj, addresswRmA8Op, {from: "0x0000000000000000000000000000000000000001"});
		const uintZBI7OdR = BigInt("1248")
		const uintejIaZJz = BigInt("1738")
		const uintTptjz3s = BigInt("1057")
		const addressVfS9PMs = accounts[0]
		const uint256l17aJDB = await MarsStakingRewardsJPgVKy5.notifyRewardAmount.call(uintejIaZJz, uintZBI7OdR, {from: accounts[2]});
		const uint256CHzX2RJ = await MarsStakingRewardsJPgVKy5.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolsdsbyDu = await MarsStakingRewardsJPgVKy5.isOwner.call({from: accounts[1]});
		const addressw7DudkQ = await MarsStakingRewardsJPgVKy5.inCaseTokensGetStuck.call(addressVfS9PMs, uintTptjz3s, {from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresspwdrTj = accounts[3]
		const addressFfYqOMm = accounts[1]
		const addressr3n6jtJ = accounts[1]
		const MarsStakingRewardsxUzdHfF = await MarsStakingRewards.new(addresspwdrTj, addressFfYqOMm, addressr3n6jtJ, {from: accounts[0]});
		const uint256RymbcLf = await MarsStakingRewardsxUzdHfF.totalSupply.call({from: accounts[1]});
//		await MarsStakingRewardsxUzdHfF.exit.call({from: accounts[4]});

		assert.equal(uint256RymbcLf, BigInt("0"))
		await expect(MarsStakingRewardsxUzdHfF.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressR1qdlXn = accounts[3]
		const addressI07Euoh = accounts[1]
		const addressQnzOs7 = accounts[4]
		const MarsStakingRewardst9kSIIa = await MarsStakingRewards.new(addressR1qdlXn, addressI07Euoh, addressQnzOs7, {from: accounts[4]});
		const addressJRMnI3D = accounts[2]
		const uintbqeHCB = BigInt("134")
		const uintuTdmcvZ = BigInt("1145")
		const addresshdbPYBs = accounts[0]
		const uint256MZdvDoC = await MarsStakingRewardst9kSIIa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ku9ZWdW = await MarsStakingRewardst9kSIIa.rewardPerToken.call({from: accounts[2]});
		const addressGzZfKRO = await MarsStakingRewardst9kSIIa.setRewardsDistribution.call(addressJRMnI3D, {from: accounts[4]});
//		const uint2569jjGyH = await MarsStakingRewardst9kSIIa.stake.call(uintbqeHCB, {from: accounts[2]});
//		const addressoS8RGDO = await MarsStakingRewardst9kSIIa.inCaseTokensGetStuck.call(addresshdbPYBs, uintuTdmcvZ, {from: accounts[2]});

		assert.equal(uint256Ku9ZWdW, BigInt("0"))
		assert.equal(uint256MZdvDoC, BigInt("0"))
		await expect(MarsStakingRewardst9kSIIa.stake.call(uintbqeHCB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiBvC1pK = accounts[0]
		const addressSRXacMD = accounts[1]
		const addresstu9Lzki = accounts[2]
		const MarsStakingRewardsVkDISD = await MarsStakingRewards.new(addressiBvC1pK, addressSRXacMD, addresstu9Lzki, {from: accounts[2]});
		const uint256ueXMNG = await MarsStakingRewardsVkDISD.getRewardForDuration.call({from: accounts[2]});
		const boolW6RsmTs = await MarsStakingRewardsVkDISD.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsVkDISD.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(boolW6RsmTs, false)
		assert.equal(uint256ueXMNG, BigInt("0"))
		await expect(MarsStakingRewardsVkDISD.onlyRewardsDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressdaW91ru = accounts[0]
		const addresstn3JeUm = accounts[1]
		const addresseRufJFO = accounts[2]
		const MarsStakingRewardsVkDISD = await MarsStakingRewards.new(addressdaW91ru, addresstn3JeUm, addresseRufJFO, {from: accounts[2]});
		const addressMpGYnxE = accounts[4]
		const uintqq9qA0D = BigInt("1117")
		const addressde4PBHH = "0x0000000000000000000000000000000000000001"
		const uint256z2b4uDl = await MarsStakingRewardsVkDISD.rewardPerToken.call({from: accounts[2]});
		const addressTf8OI7i = await MarsStakingRewardsVkDISD.transferOwnership.call(addressMpGYnxE, {from: accounts[2]});
//		await MarsStakingRewardsVkDISD.onlyOwner.call({from: accounts[3]});
//		await MarsStakingRewardsVkDISD.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256Xzcl6qc = await MarsStakingRewardsVkDISD.rewardPerToken.call({from: accounts[0]});
//		const uint256h72Xo68 = await MarsStakingRewardsVkDISD.rewardPerToken.call({from: accounts[1]});
//		const addressuxH4Aud = await MarsStakingRewardsVkDISD.inCaseTokensGetStuck.call(addressde4PBHH, uintqq9qA0D, {from: accounts[1]});
//		const addressLlQMado = await MarsStakingRewardsVkDISD.owner.call({from: accounts[2]});

		assert.equal(uint256z2b4uDl, BigInt("0"))
		await expect(MarsStakingRewardsVkDISD.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressboT3TPc = accounts[3]
		const addresszlZwfFM = accounts[1]
		const addressNqoB9rL = accounts[4]
		const MarsStakingRewardst9kSIIa = await MarsStakingRewards.new(addressboT3TPc, addresszlZwfFM, addressNqoB9rL, {from: accounts[4]});
		const uintQ8tl5cd = BigInt("773")
		const uinth5TpA4V = BigInt("1487")
		const uintlyTFIOg = BigInt("134")
//		const uint256JcoDwfi = await MarsStakingRewardst9kSIIa.notifyRewardAmount.call(uinth5TpA4V, uintQ8tl5cd, {from: accounts[3]});
//		const uint256MZdvDoC = await MarsStakingRewardst9kSIIa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ku9ZWdW = await MarsStakingRewardst9kSIIa.rewardPerToken.call({from: accounts[2]});
//		await MarsStakingRewardst9kSIIa.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint2569jjGyH = await MarsStakingRewardst9kSIIa.stake.call(uintlyTFIOg, {from: accounts[2]});

		await expect(MarsStakingRewardst9kSIIa.notifyRewardAmount.call(uinth5TpA4V, uintQ8tl5cd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgX7AXJo = "0x0000000000000000000000000000000000000001"
		const addressFbxBhR = accounts[5]
		const addressxNswfBI = accounts[4]
		const MarsStakingRewardspe4tTz = await MarsStakingRewards.new(addressgX7AXJo, addressFbxBhR, addressxNswfBI, {from: accounts[1]});
		const uintfYphfoG = BigInt("1086")
		const addressdRseAXg = accounts[2]
		const addresscK2vdvb = accounts[0]
		const addressz6CSeT = accounts[5]
//		const addresstEcEgeH = await MarsStakingRewardspe4tTz.inCaseTokensGetStuck.call(addressdRseAXg, uintfYphfoG, {from: accounts[1]});
//		const addresszyMrQR9 = await MarsStakingRewardspe4tTz.transferOwnership.call(addresscK2vdvb, {from: accounts[0]});
//		const addressBmTb1vO = await MarsStakingRewardspe4tTz.updateReward.call(addressz6CSeT, {from: accounts[4]});

		await expect(MarsStakingRewardspe4tTz.inCaseTokensGetStuck.call(addressdRseAXg, uintfYphfoG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ8npvvd = accounts[0]
		const addressxGi4pI9 = accounts[1]
		const addressW0cMh7N = accounts[2]
		const MarsStakingRewardsCvp4dC = await MarsStakingRewards.new(addressJ8npvvd, addressxGi4pI9, addressW0cMh7N, {from: accounts[4]});
		const addressRFzo8b5 = accounts[1]
		const addressk1lA3oS = accounts[4]
		const uint256L7oEYzh = await MarsStakingRewardsCvp4dC.totalSupply.call({from: accounts[3]});
		const uint256zd4J53C = await MarsStakingRewardsCvp4dC.balanceOf.call(addressRFzo8b5, {from: accounts[5]});
		const uint256zxEVvDb = await MarsStakingRewardsCvp4dC.rewardPerToken.call({from: accounts[4]});
//		await MarsStakingRewardsCvp4dC.nonReentrant.call({from: accounts[0]});
//		const uint256oQz7H7M = await MarsStakingRewardsCvp4dC.balanceOf.call(addressk1lA3oS, {from: accounts[1]});

		assert.equal(uint256L7oEYzh, BigInt("0"))
		assert.equal(uint256zd4J53C, BigInt("0"))
		assert.equal(uint256zxEVvDb, BigInt("0"))
		await expect(MarsStakingRewardsCvp4dC.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressozhaJ6Q = accounts[0]
		const address1jl5lQ = accounts[1]
		const addressNiZ2ofd = accounts[2]
		const MarsStakingRewardsCvp4dC = await MarsStakingRewards.new(addressozhaJ6Q, address1jl5lQ, addressNiZ2ofd, {from: accounts[4]});
		const addressNMdSxY8 = accounts[3]
		const addressiWYC0p0 = accounts[1]
		const addresssszWcYx = accounts[4]
		const uint256L7oEYzh = await MarsStakingRewardsCvp4dC.totalSupply.call({from: accounts[3]});
		const uint256Ujrnncv = await MarsStakingRewardsCvp4dC.earned.call(addressNMdSxY8, {from: accounts[3]});
		const uint256zd4J53C = await MarsStakingRewardsCvp4dC.balanceOf.call(addressiWYC0p0, {from: accounts[5]});
		const uint256zxEVvDb = await MarsStakingRewardsCvp4dC.rewardPerToken.call({from: accounts[4]});
//		await MarsStakingRewardsCvp4dC.nonReentrant.call({from: accounts[0]});
//		const uint256oQz7H7M = await MarsStakingRewardsCvp4dC.balanceOf.call(addresssszWcYx, {from: accounts[1]});

		assert.equal(uint256L7oEYzh, BigInt("0"))
		assert.equal(uint256Ujrnncv, BigInt("0"))
		assert.equal(uint256zd4J53C, BigInt("0"))
		assert.equal(uint256zxEVvDb, BigInt("0"))
		await expect(MarsStakingRewardsCvp4dC.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressemjJy0Z = accounts[0]
		const addressWz8E6GO = accounts[1]
		const addressIcBszQK = accounts[4]
		const MarsStakingRewardsTNqkPYz = await MarsStakingRewards.new(addressemjJy0Z, addressWz8E6GO, addressIcBszQK, {from: accounts[3]});
		const addresshY8xfil = accounts[4]
//		await MarsStakingRewardsTNqkPYz.renounceOwnership.call({from: accounts[3]});
//		const addressqlr9kfM = await MarsStakingRewardsTNqkPYz.owner.call({from: accounts[1]});
//		const uint256ehuy1ni = await MarsStakingRewardsTNqkPYz.balanceOf.call(addresshY8xfil, {from: accounts[5]});
//		await MarsStakingRewardsTNqkPYz.renounceOwnership.call({from: accounts[4]});

		await expect(MarsStakingRewardsTNqkPYz.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscUrauo9 = "0x0000000000000000000000000000000000000001"
		const addressBakOEMi = accounts[5]
		const addressDlmGHJ = accounts[4]
		const MarsStakingRewardspe4tTz = await MarsStakingRewards.new(addresscUrauo9, addressBakOEMi, addressDlmGHJ, {from: accounts[1]});
		const uintuQqv5w = BigInt("1086")
		const addresspDmfw9 = accounts[4]
		const addressYl3LL3J = accounts[0]
//		const addresstEcEgeH = await MarsStakingRewardspe4tTz.inCaseTokensGetStuck.call(addresspDmfw9, uintuQqv5w, {from: accounts[1]});
//		const addresszyMrQR9 = await MarsStakingRewardspe4tTz.transferOwnership.call(addressYl3LL3J, {from: accounts[0]});
//		const uint256zW3WOwG = await MarsStakingRewardspe4tTz.rewardPerToken.call({from: accounts[2]});

		await expect(MarsStakingRewardspe4tTz.inCaseTokensGetStuck.call(addresspDmfw9, uintuQqv5w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
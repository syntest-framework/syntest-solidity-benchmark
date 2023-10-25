const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressuhXzzo5 = accounts[0]
		const addressQH0Ke3 = accounts[5]
		const StakingDextokenAo313Lq = await StakingDextoken.new(addressuhXzzo5, addressQH0Ke3, {from: accounts[1]});
		const addressFr7IO1E = accounts[0]
		const addressrVhHc8m = accounts[3]
		const uintrAc8Pf = await StakingDextokenAo313Lq.getTotalStakes.call({from: accounts[1]});
		await StakingDextokenAo313Lq.notifyRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uinta0zBQwH = await StakingDextokenAo313Lq.earned.call(addressFr7IO1E, {from: accounts[2]});
		const uintKgobzLZ = await StakingDextokenAo313Lq.rewardOf.call(addressrVhHc8m, {from: accounts[1]});
		await StakingDextokenAo313Lq.notifyRewards.call({from: accounts[3]});

		assert.equal(uintrAc8Pf, BigInt("0"))
		await expect(StakingDextokenAo313Lq.notifyRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAZFsL2s = accounts[1]
		const addressCGl4fGr = accounts[1]
		const StakingDextokenQeSTXMT = await StakingDextoken.new(addressAZFsL2s, addressCGl4fGr, {from: "0x0000000000000000000000000000000000000001"});
		const addressurmcrAo = accounts[1]
		const uintEmztfh7 = await StakingDextokenQeSTXMT.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintQ2zkhNe = await StakingDextokenQeSTXMT.getClaimOf.call(addressurmcrAo, {from: accounts[3]});
		const uintngSk9ZQ = await StakingDextokenQeSTXMT.getStartTimestamp.call({from: accounts[1]});
		const uinthLT8wNr = await StakingDextokenQeSTXMT.rewardPerToken.call({from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressIl2Jet = accounts[3]
		const addressCeYGvdz = accounts[0]
		const StakingDextokenutbx3ZK = await StakingDextoken.new(addressIl2Jet, addressCeYGvdz, {from: accounts[4]});
		const addressY8eDKDy = accounts[5]
		const addressDq2fZKu = accounts[2]
		const addressiuDGEQd = accounts[2]
		const uintkadDfDD = await StakingDextokenutbx3ZK.getClaimOf.call(addressY8eDKDy, {from: accounts[1]});
		const addressAu1zmsj = await StakingDextokenutbx3ZK.notFrozen.call(addressDq2fZKu, {from: accounts[3]});
		const uintFqkAxRV = await StakingDextokenutbx3ZK.earned.call(addressiuDGEQd, {from: accounts[4]});
		await StakingDextokenutbx3ZK.notifyRewards.call({from: accounts[5]});

		assert.equal(uintkadDfDD, BigInt("0"))
		await expect(StakingDextokenutbx3ZK.notFrozen.call(addressDq2fZKu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPjOPDZ3 = accounts[2]
		const addressvhLioI9 = "0x0000000000000000000000000000000000000001"
		const StakingDextokenE3O7vXp = await StakingDextoken.new(addressPjOPDZ3, addressvhLioI9, {from: accounts[0]});
		const addressrXJrzRW = accounts[3]
		const uintNMjfgxD = await StakingDextokenE3O7vXp.rewardOf.call(addressrXJrzRW, {from: accounts[3]});
		const uintgYoA9RH = await StakingDextokenE3O7vXp.getEndTimestamp.call({from: accounts[4]});
		const uintbr9qoTs = await StakingDextokenE3O7vXp.remainingRewards.call({from: accounts[3]});
		const uintNoO1Q6A = await StakingDextokenE3O7vXp.totalRewards.call({from: accounts[2]});
		const uintoKMIuRA = await StakingDextokenE3O7vXp.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintNMjfgxD, BigInt("0"))
		assert.equal(uintNoO1Q6A, BigInt("0"))
		assert.equal(uintbr9qoTs, BigInt("0"))
		assert.equal(uintgYoA9RH, BigInt("0"))
		assert.equal(uintoKMIuRA, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressozfyh1U = accounts[2]
		const addressM5gy3m3 = accounts[0]
		const StakingDextokeni7dTiTf = await StakingDextoken.new(addressozfyh1U, addressM5gy3m3, {from: accounts[1]});
		const uintf8dUDI = BigInt("1958")
		const uintDFQV1z7 = await StakingDextokeni7dTiTf.getTotalStakes.call({from: accounts[2]});
		const uintyjtWYHD = await StakingDextokeni7dTiTf.deposit.call(uintf8dUDI, {from: accounts[3]});
		const uintdOamrgT = await StakingDextokeni7dTiTf.getStartTimestamp.call({from: accounts[5]});
		await StakingDextokeni7dTiTf.claim.call({from: accounts[5]});
		const uintjloMr8b = await StakingDextokeni7dTiTf.getTotalStakes.call({from: accounts[4]});

		assert.equal(uintDFQV1z7, BigInt("0"))
		await expect(StakingDextokeni7dTiTf.deposit.call(uintf8dUDI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswtVV6CH = accounts[1]
		const addressW7X0t7u = accounts[2]
		const StakingDextokenZlL0wG = await StakingDextoken.new(addresswtVV6CH, addressW7X0t7u, {from: accounts[4]});
		const addressWwPV0DR = accounts[1]
		const addresso2g3WmE = accounts[1]
		const addressblaFhiL = "0x0000000000000000000000000000000000000001"
		const uintT54Kv3r = await StakingDextokenZlL0wG.getClaimOf.call(addressWwPV0DR, {from: accounts[3]});
		const uinthjTKI8D = await StakingDextokenZlL0wG.getTotalStakes.call({from: accounts[2]});
		const uintZxHP4VR = await StakingDextokenZlL0wG.getTotalStakes.call({from: accounts[0]});
		const uintKVNnuuG = await StakingDextokenZlL0wG.getWithdrawalOf.call(addresso2g3WmE, {from: accounts[0]});
		const uintHfwCkbs = await StakingDextokenZlL0wG.earned.call(addressblaFhiL, {from: accounts[0]});

		assert.equal(uintHfwCkbs, BigInt("0"))
		assert.equal(uintKVNnuuG, BigInt("0"))
		assert.equal(uintT54Kv3r, BigInt("0"))
		assert.equal(uintZxHP4VR, BigInt("0"))
		assert.equal(uinthjTKI8D, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const address7ce5qy = accounts[2]
		const addressLUtlcYV = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(address7ce5qy, addressLUtlcYV, {from: accounts[4]});
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});
		const uintaLDVUq = await StakingDextokenPoJKF7Y.getEndTimestamp.call({from: accounts[0]});
		await StakingDextokenPoJKF7Y.claim.call({from: accounts[2]});

		assert.equal(uintaLDVUq, BigInt("0"))
		assert.equal(uintiSZNi97, BigInt("0"))
		await expect(StakingDextokenPoJKF7Y.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWEwPfNJ = accounts[2]
		const addressBCVxrnp = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressWEwPfNJ, addressBCVxrnp, {from: accounts[4]});
		const uintOjvFemb = BigInt("398")
		const uintoYgKTaZ = await StakingDextokenPoJKF7Y.withdraw.call(uintOjvFemb, {from: accounts[0]});
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});
		const uintaLDVUq = await StakingDextokenPoJKF7Y.getEndTimestamp.call({from: accounts[0]});

		await expect(StakingDextokenPoJKF7Y.withdraw.call(uintOjvFemb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmzLLrQo = accounts[3]
		const addressscs2XSI = accounts[2]
		const StakingDextokenVaQxUQT = await StakingDextoken.new(addressmzLLrQo, addressscs2XSI, {from: accounts[5]});
		const addresssn2LAHJ = accounts[5]
		const uintJcCTbpj = await StakingDextokenVaQxUQT.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintmcFGjra = await StakingDextokenVaQxUQT.getTotalStakes.call({from: accounts[3]});
		const uintLZ2Xw8m = await StakingDextokenVaQxUQT.stakeOf.call(addresssn2LAHJ, {from: accounts[5]});

		assert.equal(uintJcCTbpj, BigInt("0"))
		assert.equal(uintLZ2Xw8m, BigInt("0"))
		assert.equal(uintmcFGjra, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressZMO5cYr = accounts[2]
		const addressDKPQolt = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressZMO5cYr, addressDKPQolt, {from: accounts[4]});
		const addressYRfig4 = accounts[0]
		const uintPJlhQyQ = BigInt("884")
		const address4k5kXZ = accounts[3]
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});
		const uintwD7SgVn = await StakingDextokenPoJKF7Y.balanceOf.call(addressYRfig4, {from: accounts[1]});
		await StakingDextokenPoJKF7Y.notifyRewards.call({from: accounts[4]});
		const addressRIynhN = await StakingDextokenPoJKF7Y.capture.call(address4k5kXZ, uintPJlhQyQ, {from: accounts[3]});

		assert.equal(uintiSZNi97, BigInt("0"))
		assert.equal(uintwD7SgVn, BigInt("0"))
		await expect(StakingDextokenPoJKF7Y.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUTqhaJJ = accounts[3]
		const addresslxyqD3u = "0x0000000000000000000000000000000000000001"
		const StakingDextokenkfizjHo = await StakingDextoken.new(addressUTqhaJJ, addresslxyqD3u, {from: accounts[0]});
		const uintCFNGVrV = BigInt("1954")
		const uintp6cK1WB = BigInt("1521")
		const uintq7T4xU = BigInt("1892")
		const uintyTRZmEB = BigInt("1183")
		const uintxeP0wUE = BigInt("295")
		const uintK4T3dYi = BigInt("917")
		const uintHwDOYsU = BigInt("1012")
		const uintpsO4j5x = BigInt("1758")
		const uintb0kN0Ze = await StakingDextokenkfizjHo.setRewardRound.call(uintyTRZmEB, uintq7T4xU, uintp6cK1WB, uintCFNGVrV, {from: accounts[0]});
		const uintBpaLvuI = await StakingDextokenkfizjHo.setRewardRound.call(uintpsO4j5x, uintHwDOYsU, uintK4T3dYi, uintxeP0wUE, {from: accounts[5]});

		await expect(StakingDextokenkfizjHo.setRewardRound.call(uintpsO4j5x, uintHwDOYsU, uintK4T3dYi, uintxeP0wUE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstlfyXhe = accounts[2]
		const addresspNHk3i = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addresstlfyXhe, addresspNHk3i, {from: accounts[4]});
		const addressiclzvxz = accounts[0]
		const addressRf05DGW = accounts[3]
		await StakingDextokenPoJKF7Y.notifyRewards.call({from: accounts[4]});
		const addressVQ9bX00 = await StakingDextokenPoJKF7Y.setBeneficial.call(addressiclzvxz, {from: accounts[4]});
		const uintBs1k46B = await StakingDextokenPoJKF7Y.earned.call(addressRf05DGW, {from: accounts[0]});

		await expect(StakingDextokenPoJKF7Y.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLUwbFxV = accounts[2]
		const addressVWmAUuO = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressLUwbFxV, addressVWmAUuO, {from: accounts[4]});
		const uintX727GTM = BigInt("558")
		const uintA4uDuFo = BigInt("921")
		const uintwGG9lAr = BigInt("363")
		const uintgiUgjdn = BigInt("241")
		const uintXfTnfoT = await StakingDextokenPoJKF7Y.setRewardRound.call(uintgiUgjdn, uintwGG9lAr, uintA4uDuFo, uintX727GTM, {from: accounts[4]});
		await StakingDextokenPoJKF7Y.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenPoJKF7Y.setRewardRound.call(uintgiUgjdn, uintwGG9lAr, uintA4uDuFo, uintX727GTM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCZTC5Cy = accounts[2]
		const addressnglKicU = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressCZTC5Cy, addressnglKicU, {from: accounts[4]});
		const uinteLNZSCt = BigInt("421")
		const addressCpxs0IO = accounts[0]
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});
		const addresshNxkzb = await StakingDextokenPoJKF7Y.capture.call(addressCpxs0IO, uinteLNZSCt, {from: accounts[4]});

		assert.equal(uintiSZNi97, BigInt("0"))
		await expect(StakingDextokenPoJKF7Y.capture.call(addressCpxs0IO, uinteLNZSCt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvAyOISX = accounts[2]
		const addressS2iW504 = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressvAyOISX, addressS2iW504, {from: accounts[4]});
		const addressG3QbRkF = accounts[3]
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});
		const boolKGcHEWZ = await StakingDextokenPoJKF7Y.unfreezeAccount.call(addressG3QbRkF, {from: accounts[4]});

		assert.equal(uintiSZNi97, BigInt("0"))
		await expect(StakingDextokenPoJKF7Y.unfreezeAccount.call(addressG3QbRkF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdQEjnqK = accounts[2]
		const addressbfJ31R9 = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressdQEjnqK, addressbfJ31R9, {from: accounts[4]});
		const addressuS1IWch = "0x0000000000000000000000000000000000000001"
		const address7Oqnwk = accounts[1]
		const boolUZPx87N = await StakingDextokenPoJKF7Y.freezeAccount.call(addressuS1IWch, {from: accounts[4]});
		const uintVN7lMUK = await StakingDextokenPoJKF7Y.earned.call(address7Oqnwk, {from: accounts[4]});
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});

		assert.equal(boolUZPx87N, true)
		assert.equal(uintVN7lMUK, BigInt("0"))
		assert.equal(uintiSZNi97, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressEKueDjo = accounts[2]
		const addressHpZxJ0T = accounts[2]
		const StakingDextokenPoJKF7Y = await StakingDextoken.new(addressEKueDjo, addressHpZxJ0T, {from: accounts[4]});
		const uintA3daccm = BigInt("1254")
		const addressQdreEdk = accounts[2]
		const addressGw9l7vg = await StakingDextokenPoJKF7Y.capture.call(addressQdreEdk, uintA3daccm, {from: accounts[4]});
		const uintiSZNi97 = await StakingDextokenPoJKF7Y.rewardPerToken.call({from: accounts[5]});

		await expect(StakingDextokenPoJKF7Y.capture.call(addressQdreEdk, uintA3daccm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
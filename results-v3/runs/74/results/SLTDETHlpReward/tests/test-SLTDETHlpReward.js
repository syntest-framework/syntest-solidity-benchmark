const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressE7eC58t = accounts[3]
		const uint256Iw3fDW7 = await SLTDETHlpRewardpw8Gxv2.totalSupply.call({from: accounts[3]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressE7eC58t, {from: accounts[0]});

		assert.equal(uint256Iw3fDW7, BigInt("0"))
		await expect(SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressE7eC58t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardui6encg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressTyRecQl = accounts[1]
		const uintk6fF9CK = BigInt("801")
		const boolfaPMYMW = await SLTDETHlpRewardui6encg.isOwner.call({from: accounts[0]});
		await SLTDETHlpRewardui6encg.onlyOwner.call({from: accounts[3]});
		await SLTDETHlpRewardui6encg.renounceOwnership.call({from: accounts[2]});
		const addressgw9asyV = await SLTDETHlpRewardui6encg.setStakeAddress.call(addressTyRecQl, {from: accounts[5]});
		const uint256teBI4eB = await SLTDETHlpRewardui6encg.withdraw.call(uintk6fF9CK, {from: accounts[3]});

		assert.equal(boolfaPMYMW, false)
		await expect(SLTDETHlpRewardui6encg.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDuQwYVK = await SLTDETHlpReward.new({from: accounts[2]});
		const uintgRbaLn3 = BigInt("1142")
		const uinte7q1Pti = BigInt("1706")
		const addresskClfc4Z = accounts[2]
		const uint256NkdoxI = await SLTDETHlpRewardDuQwYVK.stake.call(uintgRbaLn3, {from: accounts[3]});
		const uint256kMKotOt = await SLTDETHlpRewardDuQwYVK.withdraw.call(uinte7q1Pti, {from: accounts[0]});
		const uint256WWFNczu = await SLTDETHlpRewardDuQwYVK.earned.call(addresskClfc4Z, {from: accounts[1]});
		const boolfwSAq9x = await SLTDETHlpRewardDuQwYVK.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardDuQwYVK.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDETHlpRewardDuQwYVK.stake.call(uintgRbaLn3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjAq3sPO = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVlYCrgS = BigInt("669")
		const uintzjmr1LW = BigInt("110")
		const uint256zu5xudd = await SLTDETHlpRewardjAq3sPO.stake.call(uintVlYCrgS, {from: accounts[2]});
		const uint256L80zfz1 = await SLTDETHlpRewardjAq3sPO.stake.call(uintzjmr1LW, {from: accounts[5]});
		await SLTDETHlpRewardjAq3sPO.exit.call({from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYpUptcU = await SLTDETHlpReward.new({from: accounts[0]});
		const uintqXsDHTB = BigInt("220")
		const uintbJ1QPl9 = BigInt("1868")
		const addressncQ9MVX = accounts[4]
		const uint256cnQsayh = await SLTDETHlpRewardYpUptcU.notifyRewardAmount.call(uintqXsDHTB, {from: accounts[4]});
		const addressLyHjI18 = await SLTDETHlpRewardYpUptcU.owner.call({from: accounts[2]});
		await SLTDETHlpRewardYpUptcU.exit.call({from: accounts[1]});
		const uint256TOLwfhc = await SLTDETHlpRewardYpUptcU.notifyRewardAmount.call(uintbJ1QPl9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TCUR2Bb = await SLTDETHlpRewardYpUptcU.balanceOf.call(addressncQ9MVX, {from: accounts[3]});

		await expect(SLTDETHlpRewardYpUptcU.notifyRewardAmount.call(uintqXsDHTB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressSc9JN3Q = accounts[3]
		const uint256MlePc8e = await SLTDETHlpRewardpw8Gxv2.remainingReward.call({from: accounts[4]});
		const uint256Iw3fDW7 = await SLTDETHlpRewardpw8Gxv2.totalSupply.call({from: accounts[3]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressSc9JN3Q, {from: accounts[0]});

		await expect(SLTDETHlpRewardpw8Gxv2.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDuQwYVK = await SLTDETHlpReward.new({from: accounts[2]});
		const uintLI8x1uz = BigInt("1706")
		const addressTlVvug9 = accounts[3]
		const uint256kMKotOt = await SLTDETHlpRewardDuQwYVK.withdraw.call(uintLI8x1uz, {from: accounts[0]});
		const uint256WWFNczu = await SLTDETHlpRewardDuQwYVK.earned.call(addressTlVvug9, {from: accounts[1]});
		await SLTDETHlpRewardDuQwYVK.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDETHlpRewardDuQwYVK.withdraw.call(uintLI8x1uz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardNe1efIJ = await SLTDETHlpReward.new({from: accounts[2]});
		const uintXI5aN0K = BigInt("1244")
		const uintUxb6QhE = BigInt("331")
		const addressxuHA7Li = accounts[3]
		await SLTDETHlpRewardNe1efIJ.exit.call({from: accounts[3]});
		const uint256O764ew = await SLTDETHlpRewardNe1efIJ.withdraw.call(uintXI5aN0K, {from: accounts[4]});
		const uint256blxtKEu = await SLTDETHlpRewardNe1efIJ.stake.call(uintUxb6QhE, {from: accounts[3]});
		const addresshO4kKgy = await SLTDETHlpRewardNe1efIJ.setStakeAddress.call(addressxuHA7Li, {from: accounts[1]});

		await expect(SLTDETHlpRewardNe1efIJ.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintdsw2afb = BigInt("335")
		const addressIFfnm4Z = accounts[4]
		await SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[3]});
		const uint256k8hb2r = await SLTDETHlpRewardpw8Gxv2.stake.call(uintdsw2afb, {from: accounts[1]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressIFfnm4Z, {from: accounts[0]});

		await expect(SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressmYYtUJU = accounts[4]
		const addresszhhrCYk = accounts[1]
		await SLTDETHlpRewardpw8Gxv2.getReward.call({from: accounts[5]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressmYYtUJU, {from: accounts[0]});
		const addressURkoUbH = await SLTDETHlpRewardpw8Gxv2.setStakeAddress.call(addresszhhrCYk, {from: accounts[4]});

		await expect(SLTDETHlpRewardpw8Gxv2.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintPALFFgp = BigInt("456")
		const addressY1t90HL = "0x0000000000000000000000000000000000000001"
		const addresssr0IbfD = await SLTDETHlpRewardpw8Gxv2.owner.call({from: accounts[1]});
		const uint256A5YKfM = await SLTDETHlpRewardpw8Gxv2.setStartTime.call(uintPALFFgp, {from: accounts[1]});
		const addressrAnlbtu = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressY1t90HL, {from: accounts[3]});

		assert.equal(addresssr0IbfD, 0x0f053E8435B2c282D75441A867946Dc747eAF074)
		await expect(SLTDETHlpRewardpw8Gxv2.setStartTime.call(uintPALFFgp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintawtyTZ0 = BigInt("1244")
		const uintmUhyIDh = BigInt("354")
		const uint256tLzmxZx = await SLTDETHlpRewardpw8Gxv2.setStartTime.call(uintawtyTZ0, {from: accounts[3]});
		await SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[5]});
		const uint256k8hb2r = await SLTDETHlpRewardpw8Gxv2.stake.call(uintmUhyIDh, {from: accounts[1]});

		await expect(SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressbzo8JVT = accounts[5]
		const addresstC9NY5u = accounts[4]
		const addressx5cEBIR = await SLTDETHlpRewardpw8Gxv2.setStakeAddress.call(addressbzo8JVT, {from: accounts[3]});
		await SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[2]});
		await SLTDETHlpRewardpw8Gxv2.getReward.call({from: accounts[5]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addresstC9NY5u, {from: accounts[0]});

		await expect(SLTDETHlpRewardpw8Gxv2.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardB2DXW1u = await SLTDETHlpReward.new({from: accounts[0]});
		const uintI4j0314 = BigInt("1446")
		const uintQ4d9won = BigInt("482")
		const uintdpBR8hm = BigInt("398")
		const address17Bfsx = accounts[3]
		const uintzP8Lc1g = BigInt("797")
		const uint256Icl7IcW = await SLTDETHlpRewardB2DXW1u.notifyRewardAmount.call(uintI4j0314, {from: accounts[0]});
		const uint256W0WBCh = await SLTDETHlpRewardB2DXW1u.withdraw.call(uintQ4d9won, {from: "0x0000000000000000000000000000000000000001"});
		const uint256p8JfKYf = await SLTDETHlpRewardB2DXW1u.notifyRewardAmount.call(uintdpBR8hm, {from: accounts[1]});
		const uint256F6CQqbK = await SLTDETHlpRewardB2DXW1u.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressdJKDsZ = await SLTDETHlpRewardB2DXW1u.setRewardDistribution.call(address17Bfsx, {from: accounts[4]});
		const uint256w7hJFIM = await SLTDETHlpRewardB2DXW1u.notifyRewardAmount.call(uintzP8Lc1g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardB2DXW1u.withdraw.call(uintQ4d9won, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpw8Gxv2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressQGq5ze2 = "0x0000000000000000000000000000000000000001"
		const addresssc1E2Fr = accounts[3]
		const addressFltt5Xf = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addressQGq5ze2, {from: accounts[3]});
		const uint256FdLyyH = await SLTDETHlpRewardpw8Gxv2.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256oGu3Vi0 = await SLTDETHlpRewardpw8Gxv2.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressOPtjlk5 = await SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addresssc1E2Fr, {from: accounts[0]});

		assert.equal(uint256FdLyyH, BigInt("0"))
		assert.equal(uint256oGu3Vi0, BigInt("0"))
		await expect(SLTDETHlpRewardpw8Gxv2.setRewardDistribution.call(addresssc1E2Fr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardthOMjbZ = await SLTDETHlpReward.new({from: accounts[3]});
		const addressYEq0Mrj = accounts[2]
		const uintOAuMREw = BigInt("1762")
		const addressoaTEz7g = await SLTDETHlpRewardthOMjbZ.transferOwnership.call(addressYEq0Mrj, {from: accounts[3]});
		const uint256LQWHEON = await SLTDETHlpRewardthOMjbZ.stake.call(uintOAuMREw, {from: accounts[0]});
		const uint256YW1lyr = await SLTDETHlpRewardthOMjbZ.rewardPerToken.call({from: accounts[2]});

		await expect(SLTDETHlpRewardthOMjbZ.stake.call(uintOAuMREw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
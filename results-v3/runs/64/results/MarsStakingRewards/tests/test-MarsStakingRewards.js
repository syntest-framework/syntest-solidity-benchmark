const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressiKD3bkZ = accounts[3]
		const addressYEqWAg = accounts[1]
		const addressh64FtEo = accounts[3]
		const MarsStakingRewardsxdpvdGk = await MarsStakingRewards.new(addressiKD3bkZ, addressYEqWAg, addressh64FtEo, {from: accounts[0]});
		const bytezQehya = "0x0e101303060b15071a1111070b1b0e050d1b1e1c070114130305080a1b131d1e"
		const byte8lVwDm = "0x17080610010012060a1f001c06130408060e19000b031c11011f0519030f1b1c"
		const uintuBEwpZa = BigInt("221")
		const uintN7AzfET = BigInt("472")
		const uintqq42QJ4 = BigInt("758")
		const addressDLyW0pa = accounts[2]
		const addresstg42t1D = "0x0000000000000000000000000000000000000001"
		const uint256eZ8iQhm = await MarsStakingRewardsxdpvdGk.stakeWithPermit.call(uintqq42QJ4, uintN7AzfET, uintuBEwpZa, byte8lVwDm, bytezQehya, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsxdpvdGk.exit.call({from: accounts[4]});
		const addressBA6K5o = await MarsStakingRewardsxdpvdGk.setRewardsDistribution.call(addressDLyW0pa, {from: accounts[4]});
		const uint256Mflu8Y = await MarsStakingRewardsxdpvdGk.balanceOf.call(addresstg42t1D, {from: accounts[4]});

		await expect(MarsStakingRewardsxdpvdGk.stakeWithPermit.call(uintqq42QJ4, uintN7AzfET, uintuBEwpZa, byte8lVwDm, bytezQehya, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLsZyD0v = accounts[3]
		const addressKvOlIe = accounts[0]
		const addressUDFLxqP = accounts[2]
		const MarsStakingRewardstypZdYe = await MarsStakingRewards.new(addressLsZyD0v, addressKvOlIe, addressUDFLxqP, {from: accounts[2]});
		const addressWSp5iKZ = accounts[1]
		const uintsiVX2IP = BigInt("1842")
		const uinttCghUO8 = BigInt("638")
		const addressrgpk5Q3 = accounts[0]
		const addressSCmUFi3 = await MarsStakingRewardstypZdYe.transferOwnership.call(addressWSp5iKZ, {from: accounts[2]});
		const uint256CdvEqvp = await MarsStakingRewardstypZdYe.notifyRewardAmount.call(uinttCghUO8, uintsiVX2IP, {from: accounts[2]});
		const uint256kZ4QtuK = await MarsStakingRewardstypZdYe.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256TMGiN6e = await MarsStakingRewardstypZdYe.lastTimeRewardApplicable.call({from: accounts[0]});
		await MarsStakingRewardstypZdYe.nonReentrant.call({from: accounts[0]});
		const addressNJo9sJG = await MarsStakingRewardstypZdYe.transferOwnership.call(addressrgpk5Q3, {from: accounts[1]});

		await expect(MarsStakingRewardstypZdYe.notifyRewardAmount.call(uinttCghUO8, uintsiVX2IP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressex5v3CK = accounts[2]
		const addressr4kNgD = accounts[1]
		const addresshYVzv2N = accounts[4]
		const MarsStakingRewardsdpP70az = await MarsStakingRewards.new(addressex5v3CK, addressr4kNgD, addresshYVzv2N, {from: accounts[4]});
		const uint2t7RHU = BigInt("23")
		const addressiLjFdJC = accounts[1]
		const boolChGjcBQ = await MarsStakingRewardsdpP70az.isOwner.call({from: accounts[4]});
		const addressJ6nQjsc = await MarsStakingRewardsdpP70az.inCaseTokensGetStuck.call(addressiLjFdJC, uint2t7RHU, {from: accounts[0]});

		assert.equal(boolChGjcBQ, true)
		await expect(MarsStakingRewardsdpP70az.inCaseTokensGetStuck.call(addressiLjFdJC, uint2t7RHU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrSPKepu = accounts[3]
		const addressURcdQg1 = accounts[0]
		const addressoCfGxkC = accounts[2]
		const MarsStakingRewardsOYieCiy = await MarsStakingRewards.new(addressrSPKepu, addressURcdQg1, addressoCfGxkC, {from: accounts[0]});
		const addressuKqNWEA = accounts[4]
		await MarsStakingRewardsOYieCiy.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWFNFSI2 = await MarsStakingRewardsOYieCiy.setRewardsDistribution.call(addressuKqNWEA, {from: accounts[4]});
		await MarsStakingRewardsOYieCiy.renounceOwnership.call({from: accounts[3]});
		const uint2564YAmke = await MarsStakingRewardsOYieCiy.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolUGKTpZ1 = await MarsStakingRewardsOYieCiy.isOwner.call({from: accounts[5]});

		await expect(MarsStakingRewardsOYieCiy.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqEFeKSy = accounts[1]
		const addresslX2foGP = accounts[1]
		const addressp9amZdq = accounts[3]
		const MarsStakingRewardsVIZiW9r = await MarsStakingRewards.new(addressqEFeKSy, addresslX2foGP, addressp9amZdq, {from: accounts[3]});
		const addressPCHdNNR = accounts[1]
		const uintGwNifBx = BigInt("1537")
		const uint256cizzjq = await MarsStakingRewardsVIZiW9r.earned.call(addressPCHdNNR, {from: accounts[5]});
		const uint256DrIdhp0 = await MarsStakingRewardsVIZiW9r.stake.call(uintGwNifBx, {from: accounts[0]});
		const uint256Gt0YVa = await MarsStakingRewardsVIZiW9r.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cizzjq, BigInt("0"))
		await expect(MarsStakingRewardsVIZiW9r.stake.call(uintGwNifBx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIvc492n = accounts[3]
		const addresssjiSzY0 = "0x0000000000000000000000000000000000000001"
		const addressvExEaKD = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsCYRrm0w = await MarsStakingRewards.new(addressIvc492n, addresssjiSzY0, addressvExEaKD, {from: accounts[4]});
		const uintrFfmkrh = BigInt("1350")
		const addressCsduk1 = accounts[1]
		const addressqpkQXI = accounts[4]
		const uint256d7jo75b = await MarsStakingRewardsCYRrm0w.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressvn9H3Ys = await MarsStakingRewardsCYRrm0w.inCaseTokensGetStuck.call(addressCsduk1, uintrFfmkrh, {from: accounts[3]});
		const uint256FQN9s4M = await MarsStakingRewardsCYRrm0w.earned.call(addressqpkQXI, {from: accounts[1]});

		assert.equal(uint256d7jo75b, BigInt("0"))
		await expect(MarsStakingRewardsCYRrm0w.inCaseTokensGetStuck.call(addressCsduk1, uintrFfmkrh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBlQNkmW = accounts[1]
		const addressfD4kD6D = accounts[3]
		const addressKGUXRzV = accounts[0]
		const MarsStakingRewardsrneXedy = await MarsStakingRewards.new(addressBlQNkmW, addressfD4kD6D, addressKGUXRzV, {from: accounts[3]});
		const addresslF0XmgE = accounts[0]
		const uint256YPbNPQf = await MarsStakingRewardsrneXedy.lastTimeRewardApplicable.call({from: accounts[3]});
		await MarsStakingRewardsrneXedy.exit.call({from: accounts[2]});
		const addressvMWr2r = await MarsStakingRewardsrneXedy.updateReward.call(addresslF0XmgE, {from: accounts[3]});

		assert.equal(uint256YPbNPQf, BigInt("0"))
		await expect(MarsStakingRewardsrneXedy.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIrz6ZPF = accounts[2]
		const addressffOuDeU = accounts[0]
		const addressmxIjWsq = accounts[4]
		const MarsStakingRewardspDXSOEQ = await MarsStakingRewards.new(addressIrz6ZPF, addressffOuDeU, addressmxIjWsq, {from: accounts[4]});
		const addresstdBIwBa = accounts[1]
		const uint256Z4mTtdA = await MarsStakingRewardspDXSOEQ.balanceOf.call(addresstdBIwBa, {from: accounts[4]});
		await MarsStakingRewardspDXSOEQ.renounceOwnership.call({from: accounts[5]});
		await MarsStakingRewardspDXSOEQ.renounceOwnership.call({from: accounts[3]});
		await MarsStakingRewardspDXSOEQ.nonReentrant.call({from: accounts[0]});
		const uint256cPoQ909 = await MarsStakingRewardspDXSOEQ.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256Z4mTtdA, BigInt("0"))
		await expect(MarsStakingRewardspDXSOEQ.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressb3hMLit = accounts[3]
		const addressSIt7nHK = accounts[5]
		const addressoOrTNgu = accounts[4]
		const MarsStakingRewardsZJMHEes = await MarsStakingRewards.new(addressb3hMLit, addressSIt7nHK, addressoOrTNgu, {from: accounts[5]});
		const addressxH8yse8 = accounts[3]
		const addressmZA6a8X = "0x0000000000000000000000000000000000000001"
		const uintE2MKUTY = BigInt("1310")
		const uint256M6HKRK8 = await MarsStakingRewardsZJMHEes.getRewardForDuration.call({from: accounts[3]});
		const uint256OtdWHAT = await MarsStakingRewardsZJMHEes.earned.call(addressxH8yse8, {from: accounts[4]});
		const uint256YKtrMNc = await MarsStakingRewardsZJMHEes.balanceOf.call(addressmZA6a8X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UjqdLdz = await MarsStakingRewardsZJMHEes.stake.call(uintE2MKUTY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256M6HKRK8, BigInt("0"))
		assert.equal(uint256OtdWHAT, BigInt("0"))
		assert.equal(uint256YKtrMNc, BigInt("0"))
		await expect(MarsStakingRewardsZJMHEes.stake.call(uintE2MKUTY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskYcW2yl = accounts[1]
		const addressdSNUKwQ = accounts[1]
		const addressQ10dCw7 = accounts[3]
		const MarsStakingRewardsVIZiW9r = await MarsStakingRewards.new(addresskYcW2yl, addressdSNUKwQ, addressQ10dCw7, {from: accounts[3]});
		const addressTgRSIJi = accounts[1]
		const uintk5fUAQt = BigInt("772")
		const addressBCaIzHq = accounts[1]
		const uint3iZf1Q = BigInt("1569")
		const uint256cizzjq = await MarsStakingRewardsVIZiW9r.earned.call(addressTgRSIJi, {from: accounts[5]});
		const address4GtX3o = await MarsStakingRewardsVIZiW9r.inCaseTokensGetStuck.call(addressBCaIzHq, uintk5fUAQt, {from: accounts[3]});
		const uint256DrIdhp0 = await MarsStakingRewardsVIZiW9r.stake.call(uint3iZf1Q, {from: accounts[0]});
		await MarsStakingRewardsVIZiW9r.onlyOwner.call({from: accounts[0]});
		const uint256Gt0YVa = await MarsStakingRewardsVIZiW9r.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cizzjq, BigInt("0"))
		await expect(MarsStakingRewardsVIZiW9r.inCaseTokensGetStuck.call(addressBCaIzHq, uintk5fUAQt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressc2RYNSB = accounts[3]
		const addressMSvM1ZM = accounts[5]
		const addressek1f1WS = accounts[4]
		const MarsStakingRewardsZJMHEes = await MarsStakingRewards.new(addressc2RYNSB, addressMSvM1ZM, addressek1f1WS, {from: accounts[5]});
		const addresskpf9ae3 = accounts[3]
		const uintO6SGBsN = BigInt("1789")
		const uint256H5QMale = await MarsStakingRewardsZJMHEes.totalSupply.call({from: accounts[2]});
		const uint256OtdWHAT = await MarsStakingRewardsZJMHEes.earned.call(addresskpf9ae3, {from: accounts[4]});
		await MarsStakingRewardsZJMHEes.renounceOwnership.call({from: accounts[2]});
		const uint256UjqdLdz = await MarsStakingRewardsZJMHEes.stake.call(uintO6SGBsN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256H5QMale, BigInt("0"))
		assert.equal(uint256OtdWHAT, BigInt("0"))
		await expect(MarsStakingRewardsZJMHEes.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressa6hp0Aw = accounts[1]
		const addresss4zIkLc = accounts[1]
		const addressU0QPl33 = accounts[3]
		const MarsStakingRewardsVIZiW9r = await MarsStakingRewards.new(addressa6hp0Aw, addresss4zIkLc, addressU0QPl33, {from: accounts[3]});
		const addressiBLnU0 = accounts[4]
		const addressEC1FOI4 = accounts[1]
		const uintvTEUKX5 = BigInt("1537")
		const addressujT3p0j = await MarsStakingRewardsVIZiW9r.setRewardsDistribution.call(addressiBLnU0, {from: accounts[3]});
		const uint256cizzjq = await MarsStakingRewardsVIZiW9r.earned.call(addressEC1FOI4, {from: accounts[5]});
		const uint256DrIdhp0 = await MarsStakingRewardsVIZiW9r.stake.call(uintvTEUKX5, {from: accounts[0]});
		const uint256Gt0YVa = await MarsStakingRewardsVIZiW9r.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cizzjq, BigInt("0"))
		await expect(MarsStakingRewardsVIZiW9r.stake.call(uintvTEUKX5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZSH3oH5 = accounts[1]
		const addressd2brjns = accounts[1]
		const addressPU8rmyD = accounts[3]
		const MarsStakingRewardsVIZiW9r = await MarsStakingRewards.new(addressZSH3oH5, addressd2brjns, addressPU8rmyD, {from: accounts[3]});
		const addressADP7qi3 = accounts[1]
		const uintak5duZW = BigInt("239")
		const uintCJwI5y4 = BigInt("1066")
		const uintHLJ16n = BigInt("772")
		const addressMorhcXm = accounts[1]
		const uinteq9O96x = BigInt("1569")
		const uint256cizzjq = await MarsStakingRewardsVIZiW9r.earned.call(addressADP7qi3, {from: accounts[5]});
		const uint256c986Lnt = await MarsStakingRewardsVIZiW9r.notifyRewardAmount.call(uintCJwI5y4, uintak5duZW, {from: accounts[1]});
		const address4GtX3o = await MarsStakingRewardsVIZiW9r.inCaseTokensGetStuck.call(addressMorhcXm, uintHLJ16n, {from: accounts[3]});
		const uint256DrIdhp0 = await MarsStakingRewardsVIZiW9r.stake.call(uinteq9O96x, {from: accounts[0]});
		await MarsStakingRewardsVIZiW9r.onlyOwner.call({from: accounts[0]});
		const uint256Gt0YVa = await MarsStakingRewardsVIZiW9r.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cizzjq, BigInt("0"))
		await expect(MarsStakingRewardsVIZiW9r.notifyRewardAmount.call(uintCJwI5y4, uintak5duZW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressc8CiDW = accounts[0]
		const addressxMUHm9p = accounts[3]
		const addressquVdtXN = accounts[3]
		const MarsStakingRewardsMfgfE3p = await MarsStakingRewards.new(addressc8CiDW, addressxMUHm9p, addressquVdtXN, {from: "0x0000000000000000000000000000000000000001"});
		const addressYrkLbJU = "0x0000000000000000000000000000000000000001"
		const uint256Mnhy0V9 = await MarsStakingRewardsMfgfE3p.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256x92ahFc = await MarsStakingRewardsMfgfE3p.lastTimeRewardApplicable.call({from: accounts[2]});
		await MarsStakingRewardsMfgfE3p.getReward.call({from: accounts[4]});
		const addressDjPKlyM = await MarsStakingRewardsMfgfE3p.updateReward.call(addressYrkLbJU, {from: accounts[1]});
		await MarsStakingRewardsMfgfE3p.onlyOwner.call({from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressuOb9AWh = accounts[3]
		const addressUAeYFTE = accounts[5]
		const addressKZ46Ed = accounts[4]
		const MarsStakingRewardsZJMHEes = await MarsStakingRewards.new(addressuOb9AWh, addressUAeYFTE, addressKZ46Ed, {from: accounts[5]});
		const addressRNjPmu7 = accounts[3]
		await MarsStakingRewardsZJMHEes.renounceOwnership.call({from: accounts[5]});
		const uint256OtdWHAT = await MarsStakingRewardsZJMHEes.earned.call(addressRNjPmu7, {from: accounts[4]});

		await expect(MarsStakingRewardsZJMHEes.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJeVnF8W = accounts[1]
		const addressyK34SjS = accounts[1]
		const addressbz6UTWi = accounts[3]
		const MarsStakingRewardsVIZiW9r = await MarsStakingRewards.new(addressJeVnF8W, addressyK34SjS, addressbz6UTWi, {from: accounts[3]});
		const addressVLfL7sy = accounts[1]
		const uintzhseGJc = BigInt("790")
		const addressC273Yem = accounts[3]
		const uintadvxOFP = BigInt("1569")
		const uint256cizzjq = await MarsStakingRewardsVIZiW9r.earned.call(addressVLfL7sy, {from: accounts[5]});
		const address4GtX3o = await MarsStakingRewardsVIZiW9r.inCaseTokensGetStuck.call(addressC273Yem, uintzhseGJc, {from: accounts[3]});
		const uint256DrIdhp0 = await MarsStakingRewardsVIZiW9r.stake.call(uintadvxOFP, {from: accounts[0]});
		await MarsStakingRewardsVIZiW9r.onlyOwner.call({from: accounts[0]});
		await MarsStakingRewardsVIZiW9r.nonReentrant.call({from: accounts[4]});

		assert.equal(uint256cizzjq, BigInt("0"))
		await expect(MarsStakingRewardsVIZiW9r.inCaseTokensGetStuck.call(addressC273Yem, uintzhseGJc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
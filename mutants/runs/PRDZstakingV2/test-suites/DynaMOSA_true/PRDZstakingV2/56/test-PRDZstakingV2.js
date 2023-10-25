const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2coeD7U = await PRDZstakingV2.new({from: accounts[1]});
		const uintiQIcJlS = BigInt("529")
		const uints8hajI2 = BigInt("1633")
		const addressScU2TFz = accounts[3]
		const uintiw9e19 = BigInt("1768")
		const uintWwuo4RB = await PRDZstakingV2coeD7U.stake.call(uintiQIcJlS, {from: accounts[2]});
		const uintCQMfsa = await PRDZstakingV2coeD7U.stake.call(uints8hajI2, {from: accounts[1]});
		const uintj4rhSih = await PRDZstakingV2coeD7U.getPendingReward.call(addressScU2TFz, {from: accounts[4]});
		const uint9HZcHS = await PRDZstakingV2coeD7U.updateScoreEth.call(uintiw9e19, {from: accounts[3]});

		await expect(PRDZstakingV2coeD7U.stake.call(uintiQIcJlS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ci68DNx = await PRDZstakingV2.new({from: accounts[3]});
		const addressmmRZhdX = accounts[2]
		const uintT3CLgTD = BigInt("1808")
		const uintSIdTam0 = await PRDZstakingV2ci68DNx.getTotalStaked.call({from: accounts[2]});
		const uintxXW0DO0 = await PRDZstakingV2ci68DNx.getTotalFeeCollected.call({from: accounts[1]});
		await PRDZstakingV2ci68DNx.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintwb4J0ox = await PRDZstakingV2ci68DNx.getPendingReward.call(addressmmRZhdX, {from: accounts[3]});
		const uintyT2ZIZt = await PRDZstakingV2ci68DNx.getNumberOfHolders.call({from: accounts[3]});
		const uinth8uGN9D = await PRDZstakingV2ci68DNx.updateScoreEth.call(uintT3CLgTD, {from: accounts[1]});

		assert.equal(uintSIdTam0, BigInt("0"))
		assert.equal(uintxXW0DO0, BigInt("0"))
		await expect(PRDZstakingV2ci68DNx.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qw1DNd8 = await PRDZstakingV2.new({from: accounts[0]});
		const uintclByc4 = BigInt("830")
		await PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]});
		const uintTuBPeyK = await PRDZstakingV2qw1DNd8.stake.call(uintclByc4, {from: accounts[1]});

		await expect(PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2arG4ThZ = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpqK6RuT = await PRDZstakingV2arG4ThZ.getTotalUnStaked.call({from: accounts[5]});
		await PRDZstakingV2arG4ThZ.claimReward.call({from: accounts[5]});
		const uintkyhTJ1C = await PRDZstakingV2arG4ThZ.getTotalUnStaked.call({from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b5C9n6M = await PRDZstakingV2.new({from: accounts[2]});
		const addressfd7p6b = accounts[3]
		const uintMWbBtv = BigInt("143")
		const addressxsUZ6Ow = accounts[1]
		const addressrn3bp0Z = "0x0000000000000000000000000000000000000001"
		const uintHMANv0a = await PRDZstakingV2b5C9n6M.getStakingScore.call(addressfd7p6b, {from: accounts[2]});
		const uintcXpAKG1 = await PRDZstakingV2b5C9n6M.updateScoreEth.call(uintMWbBtv, {from: accounts[0]});
		const uintGngM4h = await PRDZstakingV2b5C9n6M.getPendingReward.call(addressxsUZ6Ow, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2b5C9n6M.deposit.call({from: accounts[0]});
		const uintSaWJvei = await PRDZstakingV2b5C9n6M.getPendingReward.call(addressrn3bp0Z, {from: accounts[1]});

		assert.equal(uintHMANv0a, BigInt("0"))
		await expect(PRDZstakingV2b5C9n6M.updateScoreEth.call(uintMWbBtv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2iKOoZAC = await PRDZstakingV2.new({from: accounts[3]});
		const uintxeq8u4h = BigInt("218")
		await PRDZstakingV2iKOoZAC.deposit.call({from: accounts[3]});
		const uintfbBnSxD = await PRDZstakingV2iKOoZAC.getTotalFeeCollected.call({from: accounts[2]});
		const uintsGXrJ5O = await PRDZstakingV2iKOoZAC.unstake.call(uintxeq8u4h, {from: accounts[4]});

		await expect(PRDZstakingV2iKOoZAC.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qw1DNd8 = await PRDZstakingV2.new({from: accounts[0]});
		const uintFKZnKuC = BigInt("861")
		await PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]});
		const uintO7yOFXM = await PRDZstakingV2qw1DNd8.getTotalUnStaked.call({from: accounts[0]});
		const uintTuBPeyK = await PRDZstakingV2qw1DNd8.stake.call(uintFKZnKuC, {from: accounts[1]});

		await expect(PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YQucTEw = await PRDZstakingV2.new({from: accounts[1]});
		const address6raRh0 = accounts[2]
		const addressyWPbCsh = accounts[4]
		await PRDZstakingV2YQucTEw.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2YQucTEw.deposit.call({from: accounts[2]});
		await PRDZstakingV2YQucTEw.deposit.call({from: accounts[3]});
		const uintkrlvGbg = await PRDZstakingV2YQucTEw.getPendingReward.call(address6raRh0, {from: accounts[4]});
		const uintrCVVZLm = await PRDZstakingV2YQucTEw.getPendingReward.call(addressyWPbCsh, {from: accounts[4]});

		await expect(PRDZstakingV2YQucTEw.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qw1DNd8 = await PRDZstakingV2.new({from: accounts[0]});
		await PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]});
		await PRDZstakingV2qw1DNd8.onlyOwner.call({from: accounts[1]});

		await expect(PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qw1DNd8 = await PRDZstakingV2.new({from: accounts[0]});
		const addressLAmzSDT = accounts[4]
		const uintSYFnxY = BigInt("810")
		const uintXnxJNWj = await PRDZstakingV2qw1DNd8.getScoreEth.call(addressLAmzSDT, {from: accounts[4]});
		const uinteYjkNAs = await PRDZstakingV2qw1DNd8.getTotalFeeCollected.call({from: accounts[3]});
		await PRDZstakingV2qw1DNd8.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uintpagWdDL = await PRDZstakingV2qw1DNd8.updateScoreEth.call(uintSYFnxY, {from: accounts[0]});
		await PRDZstakingV2qw1DNd8.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintXnxJNWj, BigInt("0"))
		assert.equal(uinteYjkNAs, BigInt("0"))
		await expect(PRDZstakingV2qw1DNd8.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YQucTEw = await PRDZstakingV2.new({from: accounts[1]});
		await PRDZstakingV2YQucTEw.claimReward.call({from: accounts[1]});
		const uintB3epbWe = await PRDZstakingV2YQucTEw.getTotalClaimed.call({from: accounts[3]});
		await PRDZstakingV2YQucTEw.claimReward.call({from: accounts[4]});
		await PRDZstakingV2YQucTEw.deposit.call({from: accounts[3]});

		await expect(PRDZstakingV2YQucTEw.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qw1DNd8 = await PRDZstakingV2.new({from: accounts[0]});
		const addressLO9kiGh = accounts[1]
		const addressNIVk3Zw = accounts[2]
		const addressBTqMnX = await PRDZstakingV2qw1DNd8.transferOwnership.call(addressLO9kiGh, {from: accounts[0]});
		const uintmEhwFwd = await PRDZstakingV2qw1DNd8.getStakingScore.call(addressNIVk3Zw, {from: accounts[0]});
		const uintA4zUX5c = await PRDZstakingV2qw1DNd8.getTotalClaimed.call({from: accounts[0]});

		assert.equal(uintA4zUX5c, BigInt("0"))
		assert.equal(uintmEhwFwd, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qJdJ3u = await PRDZstakingV2.new({from: accounts[3]});
		const uintZtz15zL = BigInt("162")
		const uintrozGvSd = BigInt("66")
		const addressZWQxgPG = accounts[3]
		const uintOWB7Efo = BigInt("555")
		const uintZMUVIE7 = BigInt("887")
		const uintNkZJGsT = await PRDZstakingV2qJdJ3u.updateOffer.call(uintrozGvSd, uintZtz15zL, {from: accounts[3]});
		await PRDZstakingV2qJdJ3u.claimScoreEth.call({from: accounts[4]});
		const addressfYNsNG = await PRDZstakingV2qJdJ3u.transferOwnership.call(addressZWQxgPG, {from: accounts[3]});
		const uintsNcVp4X = await PRDZstakingV2qJdJ3u.updateScoreEth.call(uintOWB7Efo, {from: accounts[2]});
		const uintlbhHZft = await PRDZstakingV2qJdJ3u.unstake.call(uintZMUVIE7, {from: accounts[0]});
		await PRDZstakingV2qJdJ3u.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV2qJdJ3u.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YcUYgSb = await PRDZstakingV2.new({from: accounts[5]});
		const addressgF0aEsn = accounts[4]
		const uintmWoBoBa = BigInt("0")
		const uintZQUwwCF = await PRDZstakingV2YcUYgSb.getPendingReward.call(addressgF0aEsn, {from: accounts[0]});
		const uintmK84s6I = await PRDZstakingV2YcUYgSb.getTotalUnStaked.call({from: accounts[0]});
		const uintAqqis9 = await PRDZstakingV2YcUYgSb.stake.call(uintmWoBoBa, {from: accounts[0]});

		assert.equal(uintZQUwwCF, BigInt("0"))
		assert.equal(uintmK84s6I, BigInt("0"))
		await expect(PRDZstakingV2YcUYgSb.stake.call(uintmWoBoBa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2iKOoZAC = await PRDZstakingV2.new({from: accounts[3]});
		const addressafZMUi6 = "0x0000000000000000000000000000000000000001"
		const addressMppSKN = accounts[0]
		const addressevKEzFn = "0x00000000000000000000000000000000000000-1"
		const addressuOAa4i = accounts[1]
		const addressuCTF72N = accounts[0]
		const addressEJxYNkz = accounts[3]
		const uintSeHoeJ4 = BigInt("1413")
		const uintsdEcBc = await PRDZstakingV2iKOoZAC.getTotalStaked.call({from: accounts[0]});
		const uintNbVLSBC = await PRDZstakingV2iKOoZAC.getScoreEth.call(addressafZMUi6, {from: "0x0000000000000000000000000000000000000001"});
		const uintUagz8jr = await PRDZstakingV2iKOoZAC.getStakingScore.call(addressMppSKN, {from: accounts[4]});
		await PRDZstakingV2iKOoZAC.deposit.call({from: accounts[3]});
		await PRDZstakingV2iKOoZAC.deposit.call({from: accounts[3]});
		const uintKT0JUx = await PRDZstakingV2iKOoZAC.getTotalUnStaked.call({from: accounts[3]});
		const uintcOPJ8rz = await PRDZstakingV2iKOoZAC.getStakingScore.call(addressevKEzFn, {from: accounts[1]});
		const uintRE2qzOL = await PRDZstakingV2iKOoZAC.getStakingScore.call(addressuOAa4i, {from: accounts[1]});
		const uintAdbwAEs = await PRDZstakingV2iKOoZAC.getNumberOfHolders.call({from: accounts[3]});
		const uintY1geZeV = await PRDZstakingV2iKOoZAC.getPendingReward.call(addressuCTF72N, {from: accounts[0]});
		const uintjeQfufW = await PRDZstakingV2iKOoZAC.getPendingReward.call(addressEJxYNkz, {from: accounts[2]});
		await PRDZstakingV2iKOoZAC.claimReward.call({from: accounts[1]});
		await PRDZstakingV2iKOoZAC.claimScoreEth.call({from: accounts[4]});
		const uintsGXrJ5O = await PRDZstakingV2iKOoZAC.unstake.call(uintSeHoeJ4, {from: accounts[4]});

		assert.equal(uintNbVLSBC, BigInt("0"))
		assert.equal(uintUagz8jr, BigInt("0"))
		assert.equal(uintsdEcBc, BigInt("0"))
		await expect(PRDZstakingV2iKOoZAC.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gM4hl6P = await PRDZstakingV2.new({from: accounts[1]});
		const uint6FdDl8 = BigInt("1985")
		const uint0HTVTN = BigInt("1226")
		const uintzdbfQL = BigInt("1945")
		const uintcBUZ1y6 = BigInt("1255")
		const uintLi4GYGw = await PRDZstakingV2gM4hl6P.getNumberOfHolders.call({from: accounts[2]});
		const uintJF9MEAS = await PRDZstakingV2gM4hl6P.updateOffer.call(uint0HTVTN, uint6FdDl8, {from: accounts[0]});
		await PRDZstakingV2gM4hl6P.deposit.call({from: accounts[2]});
		const uintF4693Zr = await PRDZstakingV2gM4hl6P.unstake.call(uintzdbfQL, {from: accounts[3]});
		const uint2vd2by = await PRDZstakingV2gM4hl6P.updateScoreEth.call(uintcBUZ1y6, {from: accounts[0]});

		assert.equal(uintLi4GYGw, BigInt("0"))
		await expect(PRDZstakingV2gM4hl6P.updateOffer.call(uint0HTVTN, uint6FdDl8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ow1RoS = await PRDZstakingV2.new({from: accounts[4]});
		const uintM9HzzDM = BigInt("412")
		const addressMuvbI5S = accounts[2]
		await PRDZstakingV2ow1RoS.claimScoreEth.call({from: accounts[3]});
		const uintvIi2vQr = await PRDZstakingV2ow1RoS.getTotalFeeCollected.call({from: accounts[4]});
		const uintOYImm2n = await PRDZstakingV2ow1RoS.getNumberOfHolders.call({from: accounts[2]});
		const uintTVJviMg = await PRDZstakingV2ow1RoS.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const uintjImJ2TC = await PRDZstakingV2ow1RoS.updateScoreEth.call(uintM9HzzDM, {from: accounts[1]});
		const uintGPdSdph = await PRDZstakingV2ow1RoS.getStakingScore.call(addressMuvbI5S, {from: accounts[4]});

		await expect(PRDZstakingV2ow1RoS.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DGV5h3 = await PRDZstakingV2.new({from: accounts[4]});
		const addressCsVcths = accounts[0]
		const addressLC6AdsZ = accounts[2]
		const addresspSp4VRC = accounts[2]
		const uintsPdgqnK = await PRDZstakingV2DGV5h3.getScoreEth.call(addressCsVcths, {from: accounts[2]});
		const uint1f8GWk = await PRDZstakingV2DGV5h3.getTotalStaked.call({from: accounts[4]});
		const uintlBf2t69 = await PRDZstakingV2DGV5h3.getTotalUnStaked.call({from: accounts[3]});
		const addressnPTpmzI = await PRDZstakingV2DGV5h3.transferOwnership.call(addressLC6AdsZ, {from: accounts[1]});
		const uint3FoDG8 = await PRDZstakingV2DGV5h3.getStakingScore.call(addresspSp4VRC, {from: "0x0000000000000000000000000000000000000001"});
		const uintDwpA1rH = await PRDZstakingV2DGV5h3.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uint1f8GWk, BigInt("0"))
		assert.equal(uintlBf2t69, BigInt("0"))
		assert.equal(uintsPdgqnK, BigInt("0"))
		await expect(PRDZstakingV2DGV5h3.transferOwnership.call(addressLC6AdsZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2t4r5Q0b = await PRDZstakingV2.new({from: accounts[1]});
		const uintmecVSnF = await PRDZstakingV2t4r5Q0b.getTotalStaked.call({from: accounts[0]});
		await PRDZstakingV2t4r5Q0b.claimReward.call({from: accounts[0]});
		const uintLF4cS6B = await PRDZstakingV2t4r5Q0b.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintmecVSnF, BigInt("0"))
		await expect(PRDZstakingV2t4r5Q0b.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pE9Aryj = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRBEfUK = accounts[0]
		const addressHfTGUa7 = accounts[5]
		const addressitYDfDk = accounts[3]
		const uintMcFkHey = await PRDZstakingV2pE9Aryj.getTotalFeeCollected.call({from: accounts[2]});
		const addressLTgJibA = await PRDZstakingV2pE9Aryj.transferOwnership.call(addressRBEfUK, {from: accounts[0]});
		await PRDZstakingV2pE9Aryj.claimReward.call({from: accounts[0]});
		const uintY3D0kk5 = await PRDZstakingV2pE9Aryj.getTotalStaked.call({from: accounts[2]});
		const uintZSu6f20 = await PRDZstakingV2pE9Aryj.getStakingScore.call(addressHfTGUa7, {from: accounts[2]});
		const uintpjc2Fp = await PRDZstakingV2pE9Aryj.getStakingScore.call(addressitYDfDk, {from: accounts[5]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2A8AFjDy = await PRDZstakingV2.new({from: accounts[1]});
		const uintQWCr54f = BigInt("1223")
		const addressqCyBR6f = accounts[1]
		const uintXijGiKc = BigInt("769")
		const uintUAi1cPJ = await PRDZstakingV2A8AFjDy.stake.call(uintQWCr54f, {from: "0x0000000000000000000000000000000000000001"});
		const addressv2g0IVg = await PRDZstakingV2A8AFjDy.transferOwnership.call(addressqCyBR6f, {from: accounts[2]});
		const uintWD7eary = await PRDZstakingV2A8AFjDy.unstake.call(uintXijGiKc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2A8AFjDy.stake.call(uintQWCr54f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DGV5h3 = await PRDZstakingV2.new({from: accounts[4]});
		const addressNNnVMVN = accounts[0]
		const uintzOjD4od = BigInt("85")
		const addressPDnJld0 = accounts[2]
		const addressYAufu6F = accounts[3]
		const uintsPdgqnK = await PRDZstakingV2DGV5h3.getScoreEth.call(addressNNnVMVN, {from: accounts[2]});
		const uint1f8GWk = await PRDZstakingV2DGV5h3.getTotalStaked.call({from: accounts[4]});
		const uintlBf2t69 = await PRDZstakingV2DGV5h3.getTotalUnStaked.call({from: accounts[3]});
		const uintltOAM3Q = await PRDZstakingV2DGV5h3.unstake.call(uintzOjD4od, {from: accounts[5]});
		const addressnPTpmzI = await PRDZstakingV2DGV5h3.transferOwnership.call(addressPDnJld0, {from: accounts[1]});
		const uint3FoDG8 = await PRDZstakingV2DGV5h3.getStakingScore.call(addressYAufu6F, {from: "0x0000000000000000000000000000000000000001"});
		const uintDwpA1rH = await PRDZstakingV2DGV5h3.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uint1f8GWk, BigInt("0"))
		assert.equal(uintlBf2t69, BigInt("0"))
		assert.equal(uintsPdgqnK, BigInt("0"))
		await expect(PRDZstakingV2DGV5h3.unstake.call(uintzOjD4od, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DGV5h3 = await PRDZstakingV2.new({from: accounts[4]});
		const addressNkzIEy = accounts[1]
		const uintsVJT4BN = BigInt("845")
		const addressH8RrTh9 = accounts[3]
		const addressbkQQhvn = accounts[2]
		const uintsPdgqnK = await PRDZstakingV2DGV5h3.getScoreEth.call(addressNkzIEy, {from: accounts[2]});
		await PRDZstakingV2DGV5h3.onlyOwner.call({from: accounts[0]});
		const uint1f8GWk = await PRDZstakingV2DGV5h3.getTotalStaked.call({from: accounts[4]});
		const uintk1oKYGy = await PRDZstakingV2DGV5h3.stake.call(uintsVJT4BN, {from: accounts[2]});
		const addressnPTpmzI = await PRDZstakingV2DGV5h3.transferOwnership.call(addressH8RrTh9, {from: accounts[1]});
		const uint3FoDG8 = await PRDZstakingV2DGV5h3.getStakingScore.call(addressbkQQhvn, {from: "0x0000000000000000000000000000000000000001"});
		const uintDwpA1rH = await PRDZstakingV2DGV5h3.getNumberOfHolders.call({from: accounts[1]});
		const uintlxVVoYs = await PRDZstakingV2DGV5h3.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uintsPdgqnK, BigInt("0"))
		await expect(PRDZstakingV2DGV5h3.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2et6mHiJ = await PRDZstakingV2.new({from: accounts[4]});
		await PRDZstakingV2et6mHiJ.deposit.call({from: accounts[0]});
		await PRDZstakingV2et6mHiJ.claimScoreEth.call({from: accounts[1]});
		await PRDZstakingV2et6mHiJ.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV2et6mHiJ.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2wS8ecH = await PRDZstakingV2.new({from: accounts[5]});
		const addressWgJ9dkx = accounts[0]
		const uintD4dhDwp = await PRDZstakingV2wS8ecH.getNumberOfHolders.call({from: accounts[2]});
		const uintuNWcYt0 = await PRDZstakingV2wS8ecH.getStakingScore.call(addressWgJ9dkx, {from: accounts[1]});

		assert.equal(uintD4dhDwp, BigInt("0"))
		assert.equal(uintuNWcYt0, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2et6mHiJ = await PRDZstakingV2.new({from: accounts[4]});
		const uintSd0rLJ = BigInt("681")
		const uintDkFUQMG = BigInt("1789")
		const uinthJWe00U = await PRDZstakingV2et6mHiJ.updateOffer.call(uintDkFUQMG, uintSd0rLJ, {from: accounts[4]});
		await PRDZstakingV2et6mHiJ.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV2et6mHiJ.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DGV5h3 = await PRDZstakingV2.new({from: accounts[4]});
		const addressPhYkC7Z = accounts[1]
		const addresscWZFWKJ = accounts[1]
		const uintXkKCwE = BigInt("507")
		const addressLwKWPbS = accounts[2]
		const addresswPsqafx = accounts[3]
		const uintsPdgqnK = await PRDZstakingV2DGV5h3.getScoreEth.call(addressPhYkC7Z, {from: accounts[2]});
		const uintw66LGhn = await PRDZstakingV2DGV5h3.getPendingReward.call(addresscWZFWKJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintD0vWnw = await PRDZstakingV2DGV5h3.updateScoreEth.call(uintXkKCwE, {from: accounts[4]});
		const uint1f8GWk = await PRDZstakingV2DGV5h3.getTotalStaked.call({from: accounts[4]});
		const addressnPTpmzI = await PRDZstakingV2DGV5h3.transferOwnership.call(addressLwKWPbS, {from: accounts[1]});
		const uint3FoDG8 = await PRDZstakingV2DGV5h3.getStakingScore.call(addresswPsqafx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint1f8GWk, BigInt("0"))
		assert.equal(uintsPdgqnK, BigInt("0"))
		assert.equal(uintw66LGhn, BigInt("0"))
		await expect(PRDZstakingV2DGV5h3.transferOwnership.call(addressLwKWPbS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2et6mHiJ = await PRDZstakingV2.new({from: accounts[4]});
		const addressWZe1Ywh = accounts[0]
		await PRDZstakingV2et6mHiJ.deposit.call({from: accounts[0]});
		await PRDZstakingV2et6mHiJ.deposit.call({from: accounts[1]});
		await PRDZstakingV2et6mHiJ.claimScoreEth.call({from: accounts[1]});
		const addresshzIVhqZ = await PRDZstakingV2et6mHiJ.transferOwnership.call(addressWZe1Ywh, {from: accounts[4]});
		await PRDZstakingV2et6mHiJ.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV2et6mHiJ.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
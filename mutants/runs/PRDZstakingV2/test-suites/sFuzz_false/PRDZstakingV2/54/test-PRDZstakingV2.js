const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2LQEHKDM = await PRDZstakingV2.new({from: accounts[2]});
		const uintiiDLDuh = BigInt("1033")
		const uinttyN3ngz = await PRDZstakingV2LQEHKDM.getTotalUnStaked.call({from: accounts[3]});
		await PRDZstakingV2LQEHKDM.deposit.call({from: accounts[1]});
		await PRDZstakingV2LQEHKDM.claimReward.call({from: accounts[2]});
		const uintBLyYhEc = await PRDZstakingV2LQEHKDM.unstake.call(uintiiDLDuh, {from: accounts[5]});

		assert.equal(uinttyN3ngz, BigInt("0"))
		await expect(PRDZstakingV2LQEHKDM.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qQ5n8Ln = await PRDZstakingV2.new({from: accounts[4]});
		const addressUIdeb9 = accounts[2]
		const addresswYcm5rS = await PRDZstakingV2qQ5n8Ln.transferOwnership.call(addressUIdeb9, {from: accounts[1]});
		const uintJcTtu0s = await PRDZstakingV2qQ5n8Ln.getTotalUnStaked.call({from: accounts[1]});

		await expect(PRDZstakingV2qQ5n8Ln.transferOwnership.call(addressUIdeb9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RJIGGOM = await PRDZstakingV2.new({from: accounts[4]});
		const uintTztSL3x = BigInt("1418")
		const addressu9cSZYE = accounts[5]
		const uintweYx9Di = BigInt("499")
		const uintpWimZEQ = BigInt("2004")
		const uintJEKKkJM = await PRDZstakingV2RJIGGOM.stake.call(uintTztSL3x, {from: accounts[4]});
		const uintMzNXEpM = await PRDZstakingV2RJIGGOM.getPendingReward.call(addressu9cSZYE, {from: accounts[1]});
		const uintIO1yQr = await PRDZstakingV2RJIGGOM.updateOffer.call(uintpWimZEQ, uintweYx9Di, {from: accounts[3]});
		await PRDZstakingV2RJIGGOM.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV2RJIGGOM.stake.call(uintTztSL3x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ocPvXu = await PRDZstakingV2.new({from: accounts[2]});
		const addressYVfUD6d = accounts[4]
		await PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[1]});
		const uinthRPI2ym = await PRDZstakingV2ocPvXu.getScoreEth.call(addressYVfUD6d, {from: accounts[0]});
		await PRDZstakingV2ocPvXu.claimReward.call({from: accounts[4]});
		await PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[0]});

		await expect(PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ECYkW2 = await PRDZstakingV2.new({from: accounts[0]});
		const addressbkC7Vy9 = accounts[3]
		const uintOKHBE0 = BigInt("283")
		const uintKGcndrl = BigInt("456")
		const uintS6d3wlY = await PRDZstakingV2ECYkW2.getStakingScore.call(addressbkC7Vy9, {from: "0x0000000000000000000000000000000000000001"});
		const uintgNXeHKu = await PRDZstakingV2ECYkW2.updateScoreEth.call(uintOKHBE0, {from: accounts[0]});
		const uintv0lXKIv = await PRDZstakingV2ECYkW2.unstake.call(uintKGcndrl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintS6d3wlY, BigInt("0"))
		await expect(PRDZstakingV2ECYkW2.unstake.call(uintKGcndrl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PGOJExa = await PRDZstakingV2.new({from: accounts[5]});
		const addressseExei = accounts[5]
		const uintAHsxGv = await PRDZstakingV2PGOJExa.getTotalFeeCollected.call({from: accounts[1]});
		const uinthvhWRxU = await PRDZstakingV2PGOJExa.getPendingReward.call(addressseExei, {from: accounts[1]});
		await PRDZstakingV2PGOJExa.claimScoreEth.call({from: accounts[2]});

		assert.equal(uintAHsxGv, BigInt("0"))
		assert.equal(uinthvhWRxU, BigInt("0"))
		await expect(PRDZstakingV2PGOJExa.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2msnca6q = await PRDZstakingV2.new({from: accounts[1]});
		const uintTrTsnA7 = await PRDZstakingV2msnca6q.getNumberOfHolders.call({from: accounts[4]});
		await PRDZstakingV2msnca6q.deposit.call({from: accounts[2]});
		const uintEKiBEsE = await PRDZstakingV2msnca6q.getTotalClaimed.call({from: accounts[1]});

		assert.equal(uintTrTsnA7, BigInt("0"))
		await expect(PRDZstakingV2msnca6q.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PGOJExa = await PRDZstakingV2.new({from: accounts[5]});
		const addressnVWbjc = accounts[5]
		const uintAHsxGv = await PRDZstakingV2PGOJExa.getTotalFeeCollected.call({from: accounts[1]});
		const uinthvhWRxU = await PRDZstakingV2PGOJExa.getPendingReward.call(addressnVWbjc, {from: accounts[1]});
		const uint1plDln = await PRDZstakingV2PGOJExa.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2PGOJExa.onlyOwner.call({from: accounts[3]});
		await PRDZstakingV2PGOJExa.claimScoreEth.call({from: accounts[2]});

		assert.equal(uint1plDln, BigInt("0"))
		assert.equal(uintAHsxGv, BigInt("0"))
		assert.equal(uinthvhWRxU, BigInt("0"))
		await expect(PRDZstakingV2PGOJExa.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ocPvXu = await PRDZstakingV2.new({from: accounts[2]});
		const addresspgtvIX0 = accounts[5]
		await PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[1]});
		const uinthRPI2ym = await PRDZstakingV2ocPvXu.getScoreEth.call(addresspgtvIX0, {from: accounts[0]});
		await PRDZstakingV2ocPvXu.deposit.call({from: accounts[0]});
		const uintz6ViUx0 = await PRDZstakingV2ocPvXu.getTotalStaked.call({from: accounts[3]});
		await PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[0]});

		await expect(PRDZstakingV2ocPvXu.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ocPvXu = await PRDZstakingV2.new({from: accounts[2]});
		const address9kmFlo = accounts[5]
		await PRDZstakingV2ocPvXu.claimReward.call({from: accounts[3]});
		const uintAkB4Lr = await PRDZstakingV2ocPvXu.getNumberOfHolders.call({from: accounts[0]});
		await PRDZstakingV2ocPvXu.claimReward.call({from: accounts[4]});
		const addressJdvv7Pu = await PRDZstakingV2ocPvXu.transferOwnership.call(address9kmFlo, {from: accounts[2]});
		await PRDZstakingV2ocPvXu.onlyOwner.call({from: accounts[3]});

		await expect(PRDZstakingV2ocPvXu.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hGa7e8e = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBePUd9 = await PRDZstakingV2hGa7e8e.getTotalFeeCollected.call({from: accounts[4]});
		const uintiVDP2vS = await PRDZstakingV2hGa7e8e.getTotalUnStaked.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ECYkW2 = await PRDZstakingV2.new({from: accounts[0]});
		const addressGyF8FAE = accounts[4]
		const uintoWylpbK = BigInt("1184")
		const uintLyYavkn = BigInt("1654")
		const addressIVMcxpI = accounts[0]
		const uintS6d3wlY = await PRDZstakingV2ECYkW2.getStakingScore.call(addressGyF8FAE, {from: "0x0000000000000000000000000000000000000001"});
		const uintQFdQeMe = await PRDZstakingV2ECYkW2.getNumberOfHolders.call({from: accounts[5]});
		const uintMePPC7h = await PRDZstakingV2ECYkW2.updateOffer.call(uintLyYavkn, uintoWylpbK, {from: accounts[0]});
		const uintpCAdkvI = await PRDZstakingV2ECYkW2.getScoreEth.call(addressIVMcxpI, {from: accounts[4]});

		assert.equal(uintQFdQeMe, BigInt("0"))
		assert.equal(uintS6d3wlY, BigInt("0"))
		assert.equal(uintpCAdkvI, BigInt("0"))
	});
})
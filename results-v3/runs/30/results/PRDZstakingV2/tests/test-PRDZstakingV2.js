const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s5uH3Az = await PRDZstakingV2.new({from: accounts[3]});
		const addressrkpzcVF = accounts[4]
		await PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintEFI818A = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressrkpzcVF, {from: accounts[4]});
		const uintixXe8Ou = await PRDZstakingV2s5uH3Az.getTotalFeeCollected.call({from: accounts[4]});

		await expect(PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2k8yX3Me = await PRDZstakingV2.new({from: accounts[5]});
		const uintykMQ6r = BigInt("1211")
		const addressglBjJI2 = accounts[3]
		const addressjAettjx = accounts[5]
		const uinthoO9tO = await PRDZstakingV2k8yX3Me.updateScoreEth.call(uintykMQ6r, {from: accounts[3]});
		const uintt7IVvSq = await PRDZstakingV2k8yX3Me.getScoreEth.call(addressglBjJI2, {from: accounts[0]});
		const uintBSPRhBa = await PRDZstakingV2k8yX3Me.getScoreEth.call(addressjAettjx, {from: accounts[1]});

		await expect(PRDZstakingV2k8yX3Me.updateScoreEth.call(uintykMQ6r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dCMXsG = await PRDZstakingV2.new({from: accounts[3]});
		const uintgiisY7h = BigInt("765")
		const uintsmetTeE = await PRDZstakingV2dCMXsG.getNumberOfHolders.call({from: accounts[2]});
		const uintzG1t01 = await PRDZstakingV2dCMXsG.updateScoreEth.call(uintgiisY7h, {from: accounts[2]});

		assert.equal(uintsmetTeE, BigInt("0"))
		await expect(PRDZstakingV2dCMXsG.updateScoreEth.call(uintgiisY7h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ImPO6up = await PRDZstakingV2.new({from: accounts[5]});
		const uintdpTKOZI = BigInt("204")
		const uintl52AeCu = await PRDZstakingV2ImPO6up.unstake.call(uintdpTKOZI, {from: "0x0000000000000000000000000000000000000001"});
		const uintC41hE10 = await PRDZstakingV2ImPO6up.getTotalUnStaked.call({from: accounts[3]});
		const uintSobZCvd = await PRDZstakingV2ImPO6up.getTotalClaimed.call({from: accounts[0]});
		const uintDGTtQB4 = await PRDZstakingV2ImPO6up.getTotalFeeCollected.call({from: accounts[2]});

		await expect(PRDZstakingV2ImPO6up.unstake.call(uintdpTKOZI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2P4aJnDy = await PRDZstakingV2.new({from: accounts[2]});
		const addresshY854DL = accounts[3]
		const uintASSsLBq = await PRDZstakingV2P4aJnDy.getTotalStaked.call({from: accounts[1]});
		const uintg1NdWny = await PRDZstakingV2P4aJnDy.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2P4aJnDy.claimScoreEth.call({from: accounts[4]});
		const uintKa9cdf6 = await PRDZstakingV2P4aJnDy.getTotalFeeCollected.call({from: accounts[0]});
		const uinty4EMr8I = await PRDZstakingV2P4aJnDy.getScoreEth.call(addresshY854DL, {from: accounts[0]});

		assert.equal(uintASSsLBq, BigInt("0"))
		assert.equal(uintg1NdWny, BigInt("0"))
		await expect(PRDZstakingV2P4aJnDy.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TIWWFY1 = await PRDZstakingV2.new({from: accounts[2]});
		const uintqbPO8v = BigInt("1631")
		await PRDZstakingV2TIWWFY1.claimReward.call({from: accounts[1]});
		const uintoUIl0Mv = await PRDZstakingV2TIWWFY1.updateScoreEth.call(uintqbPO8v, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2TIWWFY1.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s5uH3Az = await PRDZstakingV2.new({from: accounts[3]});
		const addressX06FbT = accounts[3]
		const addressWQiQdpM = accounts[2]
		const addressnmEVgL = accounts[4]
		await PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintcsiw3tk = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressX06FbT, {from: accounts[3]});
		const addresse2NQrVM = await PRDZstakingV2s5uH3Az.transferOwnership.call(addressWQiQdpM, {from: accounts[3]});
		await PRDZstakingV2s5uH3Az.claimScoreEth.call({from: accounts[1]});
		await PRDZstakingV2s5uH3Az.deposit.call({from: accounts[1]});
		const uintEFI818A = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressnmEVgL, {from: accounts[4]});
		const uintixXe8Ou = await PRDZstakingV2s5uH3Az.getTotalFeeCollected.call({from: accounts[4]});

		await expect(PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2P4aJnDy = await PRDZstakingV2.new({from: accounts[2]});
		const addresswENSm9r = accounts[3]
		const uintASSsLBq = await PRDZstakingV2P4aJnDy.getTotalStaked.call({from: accounts[1]});
		const uintcNopP08 = await PRDZstakingV2P4aJnDy.getTotalUnStaked.call({from: accounts[2]});
		await PRDZstakingV2P4aJnDy.claimScoreEth.call({from: accounts[4]});
		const uintKa9cdf6 = await PRDZstakingV2P4aJnDy.getTotalFeeCollected.call({from: accounts[0]});
		const uinty4EMr8I = await PRDZstakingV2P4aJnDy.getScoreEth.call(addresswENSm9r, {from: accounts[0]});

		assert.equal(uintASSsLBq, BigInt("0"))
		assert.equal(uintcNopP08, BigInt("0"))
		await expect(PRDZstakingV2P4aJnDy.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s5uH3Az = await PRDZstakingV2.new({from: accounts[3]});
		const addressZMCywBv = accounts[5]
		await PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintmzWKUwP = await PRDZstakingV2s5uH3Az.getTotalStaked.call({from: accounts[4]});
		const uintEFI818A = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressZMCywBv, {from: accounts[4]});
		await PRDZstakingV2s5uH3Az.onlyOwner.call({from: accounts[1]});
		const uintixXe8Ou = await PRDZstakingV2s5uH3Az.getTotalFeeCollected.call({from: accounts[4]});

		await expect(PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s5uH3Az = await PRDZstakingV2.new({from: accounts[3]});
		const uintu6iHN8b = BigInt("786")
		const addressFmatL0P = accounts[4]
		await PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintdouhED4 = await PRDZstakingV2s5uH3Az.stake.call(uintu6iHN8b, {from: accounts[4]});
		await PRDZstakingV2s5uH3Az.deposit.call({from: accounts[3]});
		const uintEFI818A = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressFmatL0P, {from: accounts[4]});
		const uintixXe8Ou = await PRDZstakingV2s5uH3Az.getTotalFeeCollected.call({from: accounts[4]});

		await expect(PRDZstakingV2s5uH3Az.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pYs7LD8 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEkAF6D = accounts[1]
		const uintFAYMRES = await PRDZstakingV2pYs7LD8.getTotalUnStaked.call({from: accounts[0]});
		const addressgjXIsfC = await PRDZstakingV2pYs7LD8.transferOwnership.call(addressEkAF6D, {from: accounts[3]});
		const uintG1vJBkV = await PRDZstakingV2pYs7LD8.getTotalStaked.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DOuOL9a = await PRDZstakingV2.new({from: accounts[3]});
		const uintmhcByRe = BigInt("180")
		const uintsEBoQZl = BigInt("1295")
		const address9ppl97 = accounts[0]
		const uinto9MVZLg = BigInt("1029")
		const uintUUj59w8 = await PRDZstakingV2DOuOL9a.updateOffer.call(uintsEBoQZl, uintmhcByRe, {from: accounts[3]});
		const uintQxuCMSj = await PRDZstakingV2DOuOL9a.getPendingReward.call(address9ppl97, {from: accounts[0]});
		await PRDZstakingV2DOuOL9a.claimScoreEth.call({from: accounts[5]});
		const uinttshWPL4 = await PRDZstakingV2DOuOL9a.updateScoreEth.call(uinto9MVZLg, {from: accounts[4]});

		assert.equal(uintQxuCMSj, BigInt("0"))
		await expect(PRDZstakingV2DOuOL9a.claimScoreEth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DOuOL9a = await PRDZstakingV2.new({from: accounts[3]});
		const addressJdXhkAi = accounts[3]
		const uintsCdDUNx = BigInt("1948")
		const uintTzw9Scx = await PRDZstakingV2DOuOL9a.getPendingReward.call(addressJdXhkAi, {from: accounts[2]});
		await PRDZstakingV2DOuOL9a.claimScoreEth.call({from: accounts[5]});
		const uinthrWFsHJ = await PRDZstakingV2DOuOL9a.updateScoreEth.call(uintsCdDUNx, {from: accounts[3]});

		assert.equal(uintTzw9Scx, BigInt("0"))
		await expect(PRDZstakingV2DOuOL9a.claimScoreEth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s5uH3Az = await PRDZstakingV2.new({from: accounts[3]});
		const uintAq6sJjd = BigInt("0")
		const uintE1rAI11 = BigInt("1076")
		const addressD5IaCe = accounts[2]
		const addressNyvfJ3H = accounts[5]
		const uintaXJdZmA = await PRDZstakingV2s5uH3Az.getTotalUnStaked.call({from: accounts[2]});
		const uintPrtPCOI = await PRDZstakingV2s5uH3Az.unstake.call(uintAq6sJjd, {from: accounts[4]});
		const uintRX4buTL = await PRDZstakingV2s5uH3Az.updateScoreEth.call(uintE1rAI11, {from: accounts[4]});
		await PRDZstakingV2s5uH3Az.deposit.call({from: accounts[4]});
		const uintQVlXSc = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressD5IaCe, {from: accounts[2]});
		const uintEFI818A = await PRDZstakingV2s5uH3Az.getStakingScore.call(addressNyvfJ3H, {from: accounts[4]});

		assert.equal(uintaXJdZmA, BigInt("0"))
		await expect(PRDZstakingV2s5uH3Az.unstake.call(uintAq6sJjd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
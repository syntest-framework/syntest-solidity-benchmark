const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2glXZMRn = await PRDZstakingV2.new({from: accounts[5]});
		const uintraGzj22 = BigInt("1336")
		const addressNzBMcbE = accounts[0]
		const addressItJ9LWR = accounts[1]
//		const uintWeRsa6j = await PRDZstakingV2glXZMRn.stake.call(uintraGzj22, {from: accounts[1]});
//		const uintujLLlAM = await PRDZstakingV2glXZMRn.getTotalFeeCollected.call({from: accounts[4]});
//		const uintjfvTr2U = await PRDZstakingV2glXZMRn.getTotalFeeCollected.call({from: accounts[0]});
//		const uintEOJpxuP = await PRDZstakingV2glXZMRn.getScoreEth.call(addressNzBMcbE, {from: accounts[3]});
//		const uintE0DvcYy = await PRDZstakingV2glXZMRn.getPendingReward.call(addressItJ9LWR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2glXZMRn.stake.call(uintraGzj22, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DqEcUaO = await PRDZstakingV2.new({from: accounts[3]});
//		await PRDZstakingV2DqEcUaO.deposit.call({from: accounts[1]});
//		const uintv8d0lyQ = await PRDZstakingV2DqEcUaO.getTotalClaimed.call({from: accounts[4]});
//		const uintqYyLavC = await PRDZstakingV2DqEcUaO.getTotalStaked.call({from: accounts[0]});
//		const uintBecYmCE = await PRDZstakingV2DqEcUaO.getTotalClaimed.call({from: accounts[2]});

		await expect(PRDZstakingV2DqEcUaO.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VnkrpVw = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintO0NvT1j = BigInt("76")
		const uintmMPr46i = await PRDZstakingV2VnkrpVw.getTotalClaimed.call({from: accounts[4]});
		const uintIX1TeBr = await PRDZstakingV2VnkrpVw.updateScoreEth.call(uintO0NvT1j, {from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2stZVEQH = await PRDZstakingV2.new({from: accounts[2]});
//		await PRDZstakingV2stZVEQH.onlyOwner.call({from: accounts[0]});
//		const uintZ8gEyT3 = await PRDZstakingV2stZVEQH.getTotalClaimed.call({from: accounts[5]});
//		const uinthrFM6An = await PRDZstakingV2stZVEQH.getTotalUnStaked.call({from: accounts[1]});
//		const uintNhlVevB = await PRDZstakingV2stZVEQH.getTotalClaimed.call({from: accounts[0]});

		await expect(PRDZstakingV2stZVEQH.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2H5IeQPg = await PRDZstakingV2.new({from: accounts[4]});
		const addresssvljsUd = "0x0000000000000000000000000000000000000001"
		const uintME8uQ5n = BigInt("235")
		const uintZLPN90w = await PRDZstakingV2H5IeQPg.getScoreEth.call(addresssvljsUd, {from: accounts[0]});
//		const uintCkb1vCA = await PRDZstakingV2H5IeQPg.unstake.call(uintME8uQ5n, {from: "0x0000000000000000000000000000000000000001"});
//		const uintOFTcPh = await PRDZstakingV2H5IeQPg.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintZLPN90w, BigInt("0"))
		await expect(PRDZstakingV2H5IeQPg.unstake.call(uintME8uQ5n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const addressQXpj5i = accounts[2]
		const addressHl6nF9 = accounts[4]
		const addressa8CClLc = "0x0000000000000000000000000000000000000001"
		const uintSWQU7U = await PRDZstakingV2nHeR83F.getScoreEth.call(addressQXpj5i, {from: accounts[5]});
		const uintFdmzVuA = await PRDZstakingV2nHeR83F.getPendingReward.call(addressHl6nF9, {from: accounts[3]});
		const uint7TzA8Y = await PRDZstakingV2nHeR83F.getStakingScore.call(addressa8CClLc, {from: accounts[4]});

		assert.equal(uint7TzA8Y, BigInt("0"))
		assert.equal(uintFdmzVuA, BigInt("0"))
		assert.equal(uintSWQU7U, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2H5IeQPg = await PRDZstakingV2.new({from: accounts[4]});
		const addressxFImdGK = "0x0000000000000000000000000000000000000000"
		const uintltMJBl = BigInt("235")
		const uintZLPN90w = await PRDZstakingV2H5IeQPg.getScoreEth.call(addressxFImdGK, {from: accounts[0]});
//		await PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]});
//		const uintCkb1vCA = await PRDZstakingV2H5IeQPg.unstake.call(uintltMJBl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZLPN90w, BigInt("0"))
		await expect(PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2H5IeQPg = await PRDZstakingV2.new({from: accounts[4]});
		const addressdn8c2eb = "0x0000000000000000000000000000000000000000"
		const uintv2dqE6H = BigInt("246")
		const uintZLPN90w = await PRDZstakingV2H5IeQPg.getScoreEth.call(addressdn8c2eb, {from: accounts[0]});
		const uintbyparm2 = await PRDZstakingV2H5IeQPg.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]});
//		const uintCkb1vCA = await PRDZstakingV2H5IeQPg.unstake.call(uintv2dqE6H, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZLPN90w, BigInt("0"))
		assert.equal(uintbyparm2, BigInt("0"))
		await expect(PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const addressnhx5eBf = accounts[5]
		const addressXrheg0 = "0x0000000000000000000000000000000000000001"
		const addressVJRd91F = accounts[1]
		const uintImTKkdm = BigInt("1743")
		const uintFdmzVuA = await PRDZstakingV2nHeR83F.getPendingReward.call(addressnhx5eBf, {from: accounts[3]});
		const uint7TzA8Y = await PRDZstakingV2nHeR83F.getStakingScore.call(addressXrheg0, {from: accounts[4]});
		const uintKDPZrPH = await PRDZstakingV2nHeR83F.getTotalFeeCollected.call({from: accounts[1]});
		const uintAGbfc5D = await PRDZstakingV2nHeR83F.getScoreEth.call(addressVJRd91F, {from: accounts[2]});
//		const uintFePUTcH = await PRDZstakingV2nHeR83F.unstake.call(uintImTKkdm, {from: accounts[4]});

		assert.equal(uint7TzA8Y, BigInt("0"))
		assert.equal(uintAGbfc5D, BigInt("0"))
		assert.equal(uintFdmzVuA, BigInt("0"))
		assert.equal(uintKDPZrPH, BigInt("0"))
		await expect(PRDZstakingV2nHeR83F.unstake.call(uintImTKkdm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const addressqc3huSo = "0x0000000000000000000000000000000000000000"
		const uintYXBSasH = await PRDZstakingV2nHeR83F.getTotalUnStaked.call({from: accounts[3]});
		const uint7TzA8Y = await PRDZstakingV2nHeR83F.getStakingScore.call(addressqc3huSo, {from: accounts[4]});

		assert.equal(uint7TzA8Y, BigInt("0"))
		assert.equal(uintYXBSasH, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const addressQdnAgio = "0x00000000000000000000000000000000000000-1"
//		const uint7TzA8Y = await PRDZstakingV2nHeR83F.getStakingScore.call(addressQdnAgio, {from: accounts[4]});
//		await PRDZstakingV2nHeR83F.claimReward.call({from: accounts[2]});

		await expect(PRDZstakingV2nHeR83F.getStakingScore.call(addressQdnAgio, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV29AvTpf = await PRDZstakingV2.new({from: accounts[2]});
		const addressGR1K1g6 = "0x0000000000000000000000000000000000000001"
		const addressqhGPUZl = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV29AvTpf.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintiV7yD5u = await PRDZstakingV29AvTpf.getPendingReward.call(addressGR1K1g6, {from: accounts[1]});
//		const uintxhHT1hp = await PRDZstakingV29AvTpf.getScoreEth.call(addressqhGPUZl, {from: accounts[5]});

		await expect(PRDZstakingV29AvTpf.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const address1R9UVh = accounts[1]
		const addressKOaMsAZ = await PRDZstakingV2nHeR83F.transferOwnership.call(address1R9UVh, {from: accounts[4]});
//		await PRDZstakingV2nHeR83F.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2nHeR83F.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2H5IeQPg = await PRDZstakingV2.new({from: accounts[4]});
		const addressoeCelo0 = "0x0000000000000000000000000000000000000000"
		const uintPR5wL3Y = BigInt("662")
		const uintgBFWACf = BigInt("235")
		const uintZLPN90w = await PRDZstakingV2H5IeQPg.getScoreEth.call(addressoeCelo0, {from: accounts[0]});
//		await PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]});
//		const uintYPewCUM = await PRDZstakingV2H5IeQPg.getTotalFeeCollected.call({from: accounts[0]});
//		await PRDZstakingV2H5IeQPg.deposit.call({from: accounts[4]});
//		await PRDZstakingV2H5IeQPg.claimReward.call({from: accounts[0]});
//		const uintFmXTnI0 = await PRDZstakingV2H5IeQPg.updateScoreEth.call(uintPR5wL3Y, {from: accounts[4]});
//		const uintCkb1vCA = await PRDZstakingV2H5IeQPg.unstake.call(uintgBFWACf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZLPN90w, BigInt("0"))
		await expect(PRDZstakingV2H5IeQPg.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nHeR83F = await PRDZstakingV2.new({from: accounts[4]});
		const uintbGnZ9It = BigInt("0")
//		const uintXtnBbOR = await PRDZstakingV2nHeR83F.stake.call(uintbGnZ9It, {from: accounts[1]});

		await expect(PRDZstakingV2nHeR83F.stake.call(uintbGnZ9It, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV25mIpUX = await PRDZstakingV2.new({from: accounts[1]});
		const uintIuBDb5p = BigInt("1148")
		const uintwZXEfVF = BigInt("1584")
		const uintsvkSZ1 = BigInt("365")
		const uintzrR2kZG = await PRDZstakingV25mIpUX.updateOffer.call(uintwZXEfVF, uintIuBDb5p, {from: accounts[1]});
//		const uintI5fndj = await PRDZstakingV25mIpUX.unstake.call(uintsvkSZ1, {from: accounts[5]});
//		await PRDZstakingV25mIpUX.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV25mIpUX.unstake.call(uintsvkSZ1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
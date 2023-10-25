const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yk9JxTV = await PRDZstakingV2.new({from: accounts[0]});
		const addressosQ5W06 = accounts[2]
		const uintcZB2eb = await PRDZstakingV2yk9JxTV.getTotalUnStaked.call({from: accounts[4]});
		const uintGWKWC4d = await PRDZstakingV2yk9JxTV.getTotalUnStaked.call({from: accounts[1]});
		await PRDZstakingV2yk9JxTV.claimScoreEth.call({from: accounts[4]});
		await PRDZstakingV2yk9JxTV.onlyOwner.call({from: accounts[2]});
		const addresssWB0Xj3 = await PRDZstakingV2yk9JxTV.transferOwnership.call(addressosQ5W06, {from: accounts[5]});

		assert.equal(uintGWKWC4d, BigInt("0"))
		assert.equal(uintcZB2eb, BigInt("0"))
		await expect(PRDZstakingV2yk9JxTV.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lPNFI8z = await PRDZstakingV2.new({from: accounts[3]});
		const addressKqloo1M = accounts[1]
		const addressqFARxtC = accounts[4]
		const uintwW20FOY = await PRDZstakingV2lPNFI8z.getTotalFeeCollected.call({from: accounts[2]});
		const uintYTAk5s9 = await PRDZstakingV2lPNFI8z.getScoreEth.call(addressKqloo1M, {from: accounts[4]});
		const addresskN9YQB6 = await PRDZstakingV2lPNFI8z.transferOwnership.call(addressqFARxtC, {from: accounts[2]});

		assert.equal(uintYTAk5s9, BigInt("0"))
		assert.equal(uintwW20FOY, BigInt("0"))
		await expect(PRDZstakingV2lPNFI8z.transferOwnership.call(addressqFARxtC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2p9gCaEu = await PRDZstakingV2.new({from: accounts[5]});
		const uintOctuXK = BigInt("51")
		const uintp9TYG4h = await PRDZstakingV2p9gCaEu.getTotalStaked.call({from: accounts[0]});
		const uintt8gn8Hn = await PRDZstakingV2p9gCaEu.getTotalStaked.call({from: accounts[5]});
		const uintBnbwLru = await PRDZstakingV2p9gCaEu.stake.call(uintOctuXK, {from: accounts[1]});
		const uintxWfHXvO = await PRDZstakingV2p9gCaEu.getTotalUnStaked.call({from: accounts[4]});
		const uintLNVgKET = await PRDZstakingV2p9gCaEu.getTotalFeeCollected.call({from: accounts[0]});

		assert.equal(uintp9TYG4h, BigInt("0"))
		assert.equal(uintt8gn8Hn, BigInt("0"))
		await expect(PRDZstakingV2p9gCaEu.stake.call(uintOctuXK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tdZzj0B = await PRDZstakingV2.new({from: accounts[1]});
		const uintAayUE0 = BigInt("1285")
		const uintiXVIic = await PRDZstakingV2tdZzj0B.getTotalUnStaked.call({from: accounts[4]});
		const uintS8jF3m = await PRDZstakingV2tdZzj0B.updateScoreEth.call(uintAayUE0, {from: accounts[1]});
		await PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]});
		await PRDZstakingV2tdZzj0B.claimScoreEth.call({from: accounts[4]});

		assert.equal(uintiXVIic, BigInt("0"))
		await expect(PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Tgil72y = await PRDZstakingV2.new({from: accounts[5]});
		await PRDZstakingV2Tgil72y.claimScoreEth.call({from: accounts[1]});
		const uintufTS2Xh = await PRDZstakingV2Tgil72y.getTotalUnStaked.call({from: accounts[5]});
		const uintYcplyJQ = await PRDZstakingV2Tgil72y.getTotalClaimed.call({from: accounts[3]});
		await PRDZstakingV2Tgil72y.onlyOwner.call({from: accounts[2]});
		const uintAZIRaD = await PRDZstakingV2Tgil72y.getNumberOfHolders.call({from: accounts[0]});

		await expect(PRDZstakingV2Tgil72y.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2kEy61iH = await PRDZstakingV2.new({from: accounts[4]});
		const uintrQrAV7 = BigInt("1956")
		const addressab41CuI = accounts[5]
		const uintizkL8KD = await PRDZstakingV2kEy61iH.getNumberOfHolders.call({from: accounts[4]});
		const uintwwdTVC3 = await PRDZstakingV2kEy61iH.stake.call(uintrQrAV7, {from: accounts[4]});
		const addressHQF7HiA = await PRDZstakingV2kEy61iH.transferOwnership.call(addressab41CuI, {from: accounts[4]});
		await PRDZstakingV2kEy61iH.claimReward.call({from: accounts[3]});

		assert.equal(uintizkL8KD, BigInt("0"))
		await expect(PRDZstakingV2kEy61iH.stake.call(uintrQrAV7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lPNFI8z = await PRDZstakingV2.new({from: accounts[3]});
		const addressYPBASf8 = accounts[5]
		const addressyYHJQql = accounts[1]
		const addressszEfELI = accounts[4]
		const uintwW20FOY = await PRDZstakingV2lPNFI8z.getTotalFeeCollected.call({from: accounts[2]});
		const uinthhapq1S = await PRDZstakingV2lPNFI8z.getPendingReward.call(addressYPBASf8, {from: accounts[4]});
		const uintYTAk5s9 = await PRDZstakingV2lPNFI8z.getScoreEth.call(addressyYHJQql, {from: accounts[4]});
		const addresskN9YQB6 = await PRDZstakingV2lPNFI8z.transferOwnership.call(addressszEfELI, {from: accounts[2]});

		assert.equal(uintYTAk5s9, BigInt("0"))
		assert.equal(uinthhapq1S, BigInt("0"))
		assert.equal(uintwW20FOY, BigInt("0"))
		await expect(PRDZstakingV2lPNFI8z.transferOwnership.call(addressszEfELI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tdZzj0B = await PRDZstakingV2.new({from: accounts[1]});
		const uintSqf5pGV = BigInt("1294")
		const address9ObZZf = accounts[0]
		const uintS8jF3m = await PRDZstakingV2tdZzj0B.updateScoreEth.call(uintSqf5pGV, {from: accounts[1]});
		const addressc41A3jz = await PRDZstakingV2tdZzj0B.transferOwnership.call(address9ObZZf, {from: accounts[1]});
		const uintsTsW9FG = await PRDZstakingV2tdZzj0B.getTotalStaked.call({from: accounts[1]});
		await PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]});
		await PRDZstakingV2tdZzj0B.claimScoreEth.call({from: accounts[4]});

		assert.equal(uintsTsW9FG, BigInt("0"))
		await expect(PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tdZzj0B = await PRDZstakingV2.new({from: accounts[1]});
		const uintPUZf16w = BigInt("1285")
		const uintS8jF3m = await PRDZstakingV2tdZzj0B.updateScoreEth.call(uintPUZf16w, {from: accounts[1]});
		await PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]});
		await PRDZstakingV2tdZzj0B.claimScoreEth.call({from: accounts[4]});
		await PRDZstakingV2tdZzj0B.claimReward.call({from: accounts[1]});
		await PRDZstakingV2tdZzj0B.deposit.call({from: accounts[1]});

		await expect(PRDZstakingV2tdZzj0B.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lPNFI8z = await PRDZstakingV2.new({from: accounts[3]});
		const addressmCOKmjT = accounts[5]
		const uintYKN23BE = BigInt("1275")
		const address79rlcI = accounts[1]
		const addressAVGKbs8 = accounts[5]
		const uintwW20FOY = await PRDZstakingV2lPNFI8z.getTotalFeeCollected.call({from: accounts[2]});
		const uinthhapq1S = await PRDZstakingV2lPNFI8z.getPendingReward.call(addressmCOKmjT, {from: accounts[4]});
		const uintRhnihri = await PRDZstakingV2lPNFI8z.unstake.call(uintYKN23BE, {from: "0x0000000000000000000000000000000000000001"});
		const uintYTAk5s9 = await PRDZstakingV2lPNFI8z.getScoreEth.call(address79rlcI, {from: accounts[4]});
		const addresskN9YQB6 = await PRDZstakingV2lPNFI8z.transferOwnership.call(addressAVGKbs8, {from: accounts[2]});

		assert.equal(uinthhapq1S, BigInt("0"))
		assert.equal(uintwW20FOY, BigInt("0"))
		await expect(PRDZstakingV2lPNFI8z.unstake.call(uintYKN23BE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lPNFI8z = await PRDZstakingV2.new({from: accounts[3]});
		const addressHN7Y8LR = accounts[5]
		const addressHOkiVE = "0x0000000000000000000000000000000000000001"
		const uinthyVyDaZ = BigInt("958")
		const addressUTfAhi3 = accounts[2]
		const addresszV0RJzx = accounts[4]
		await PRDZstakingV2lPNFI8z.claimScoreEth.call({from: accounts[4]});
		const uintwW20FOY = await PRDZstakingV2lPNFI8z.getTotalFeeCollected.call({from: accounts[2]});
		const uinthhapq1S = await PRDZstakingV2lPNFI8z.getPendingReward.call(addressHN7Y8LR, {from: accounts[4]});
		const uintGVqyLKY = await PRDZstakingV2lPNFI8z.getStakingScore.call(addressHOkiVE, {from: accounts[4]});
		const uintcb01r3O = await PRDZstakingV2lPNFI8z.updateScoreEth.call(uinthyVyDaZ, {from: accounts[3]});
		const uintYTAk5s9 = await PRDZstakingV2lPNFI8z.getScoreEth.call(addressUTfAhi3, {from: accounts[4]});
		const addresskN9YQB6 = await PRDZstakingV2lPNFI8z.transferOwnership.call(addresszV0RJzx, {from: accounts[2]});

		await expect(PRDZstakingV2lPNFI8z.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2E4vkZDz = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgnpbWfU = BigInt("1866")
		const uintDEKobS3 = await PRDZstakingV2E4vkZDz.getNumberOfHolders.call({from: accounts[2]});
		await PRDZstakingV2E4vkZDz.claimReward.call({from: accounts[2]});
		await PRDZstakingV2E4vkZDz.claimScoreEth.call({from: accounts[3]});
		const uintgeDsoT9 = await PRDZstakingV2E4vkZDz.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNdaoSvQ = await PRDZstakingV2E4vkZDz.unstake.call(uintgnpbWfU, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lPNFI8z = await PRDZstakingV2.new({from: accounts[3]});
		const uintWEl5Apb = BigInt("869")
		const uintUA4ofz7 = BigInt("201")
		const addresstKDxJ5n = accounts[2]
		const uintweoDGxi = await PRDZstakingV2lPNFI8z.updateOffer.call(uintUA4ofz7, uintWEl5Apb, {from: accounts[3]});
		const uintYTAk5s9 = await PRDZstakingV2lPNFI8z.getScoreEth.call(addresstKDxJ5n, {from: accounts[4]});

		assert.equal(uintYTAk5s9, BigInt("0"))
	});
})
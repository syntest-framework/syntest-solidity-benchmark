const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2xmgFFJT = await PRDZstakingV2.new({from: accounts[0]});
		const addressqtC76k = accounts[2]
		const uintUTnxEtl = await PRDZstakingV2xmgFFJT.getPendingReward.call(addressqtC76k, {from: accounts[1]});
		const uintXA6uxhm = await PRDZstakingV2xmgFFJT.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const uintVQxZwUz = await PRDZstakingV2xmgFFJT.getTotalClaimed.call({from: accounts[4]});
		const uintGOvH5OK = await PRDZstakingV2xmgFFJT.getTotalStaked.call({from: accounts[1]});

		assert.equal(uintGOvH5OK, BigInt("0"))
		assert.equal(uintUTnxEtl, BigInt("0"))
		assert.equal(uintVQxZwUz, BigInt("0"))
		assert.equal(uintXA6uxhm, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ygHj0Dr = await PRDZstakingV2.new({from: accounts[4]});
		await PRDZstakingV2ygHj0Dr.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2ygHj0Dr.onlyOwner.call({from: accounts[5]});

		await expect(PRDZstakingV2ygHj0Dr.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fQpYff = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlhsRy1S = BigInt("1395")
		const uintb866Aoc = await PRDZstakingV2fQpYff.getTotalStaked.call({from: accounts[1]});
		const uintNzykXL = await PRDZstakingV2fQpYff.getTotalUnStaked.call({from: accounts[1]});
		const uintzg9j0VU = await PRDZstakingV2fQpYff.updateScoreEth.call(uintlhsRy1S, {from: accounts[4]});
		await PRDZstakingV2fQpYff.onlyOwner.call({from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DLzBWJM = await PRDZstakingV2.new({from: accounts[3]});
		const uintqa5m7oB = BigInt("895")
		const addressWj1nNUs = accounts[1]
		await PRDZstakingV2DLzBWJM.claimReward.call({from: accounts[0]});
		const uintGQRGXZD = await PRDZstakingV2DLzBWJM.getTotalClaimed.call({from: accounts[4]});
		const uintzrbPHR3 = await PRDZstakingV2DLzBWJM.stake.call(uintqa5m7oB, {from: accounts[4]});
		const uintgxqcMY = await PRDZstakingV2DLzBWJM.getPendingReward.call(addressWj1nNUs, {from: accounts[5]});

		await expect(PRDZstakingV2DLzBWJM.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Q2gbUjO = await PRDZstakingV2.new({from: accounts[5]});
		const uintMEOK8dG = BigInt("328")
		const uinte1aeJH5 = BigInt("1481")
		await PRDZstakingV2Q2gbUjO.deposit.call({from: accounts[4]});
		const uinttzb6A5 = await PRDZstakingV2Q2gbUjO.getTotalFeeCollected.call({from: accounts[1]});
		const uintnMhNVrv = await PRDZstakingV2Q2gbUjO.updateOffer.call(uinte1aeJH5, uintMEOK8dG, {from: accounts[4]});
		const uint1t8SCI = await PRDZstakingV2Q2gbUjO.getTotalUnStaked.call({from: accounts[2]});

		await expect(PRDZstakingV2Q2gbUjO.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lARXXUl = await PRDZstakingV2.new({from: accounts[3]});
		const addresseEoVajS = accounts[1]
		const addressae0Qorc = "0x0000000000000000000000000000000000000001"
		const uintXrl3BIk = await PRDZstakingV2lARXXUl.getTotalStaked.call({from: accounts[4]});
		const uintADEQFGQ = await PRDZstakingV2lARXXUl.getScoreEth.call(addresseEoVajS, {from: "0x0000000000000000000000000000000000000001"});
		const uintfU99zLt = await PRDZstakingV2lARXXUl.getStakingScore.call(addressae0Qorc, {from: accounts[3]});
		const uintxOP80uM = await PRDZstakingV2lARXXUl.getTotalClaimed.call({from: accounts[0]});
		const uintIxCk0hD = await PRDZstakingV2lARXXUl.getTotalUnStaked.call({from: accounts[2]});

		assert.equal(uintADEQFGQ, BigInt("0"))
		assert.equal(uintIxCk0hD, BigInt("0"))
		assert.equal(uintXrl3BIk, BigInt("0"))
		assert.equal(uintfU99zLt, BigInt("0"))
		assert.equal(uintxOP80uM, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV27Mjmi4 = await PRDZstakingV2.new({from: accounts[2]});
		const addressHsmO3HF = accounts[5]
		const uintCDxy5TF = BigInt("1432")
		const addresskKwPaUB = accounts[1]
		const addressEZWyadO = accounts[1]
		const uinte91bleS = await PRDZstakingV27Mjmi4.getStakingScore.call(addressHsmO3HF, {from: accounts[3]});
		const uintUStlPI9 = await PRDZstakingV27Mjmi4.unstake.call(uintCDxy5TF, {from: "0x0000000000000000000000000000000000000001"});
		const uintEZ9dvBh = await PRDZstakingV27Mjmi4.getScoreEth.call(addresskKwPaUB, {from: accounts[3]});
		const uintwp9jkHE = await PRDZstakingV27Mjmi4.getNumberOfHolders.call({from: accounts[4]});
		const uinttsOVXCZ = await PRDZstakingV27Mjmi4.getScoreEth.call(addressEZWyadO, {from: accounts[0]});

		assert.equal(uinte91bleS, BigInt("0"))
		await expect(PRDZstakingV27Mjmi4.unstake.call(uintCDxy5TF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ygHj0Dr = await PRDZstakingV2.new({from: accounts[4]});
		await PRDZstakingV2ygHj0Dr.onlyOwner.call({from: accounts[5]});

		await expect(PRDZstakingV2ygHj0Dr.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lARXXUl = await PRDZstakingV2.new({from: accounts[3]});
		const addressENxNXMr = accounts[1]
		const addressL5SRIvV = "0x0000000000000000000000000000000000000001"
		const addressTO8qPn4 = accounts[3]
		const uintXrl3BIk = await PRDZstakingV2lARXXUl.getTotalStaked.call({from: accounts[4]});
		const uintADEQFGQ = await PRDZstakingV2lARXXUl.getScoreEth.call(addressENxNXMr, {from: "0x0000000000000000000000000000000000000001"});
		const uintfU99zLt = await PRDZstakingV2lARXXUl.getStakingScore.call(addressL5SRIvV, {from: accounts[3]});
		const uintxOP80uM = await PRDZstakingV2lARXXUl.getTotalClaimed.call({from: accounts[0]});
		const uintCpE6ZnF = await PRDZstakingV2lARXXUl.getScoreEth.call(addressTO8qPn4, {from: accounts[5]});
		const uintGxkibRc = await PRDZstakingV2lARXXUl.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintIxCk0hD = await PRDZstakingV2lARXXUl.getTotalUnStaked.call({from: accounts[2]});

		assert.equal(uintADEQFGQ, BigInt("0"))
		assert.equal(uintCpE6ZnF, BigInt("0"))
		assert.equal(uintGxkibRc, BigInt("0"))
		assert.equal(uintIxCk0hD, BigInt("0"))
		assert.equal(uintXrl3BIk, BigInt("0"))
		assert.equal(uintfU99zLt, BigInt("0"))
		assert.equal(uintxOP80uM, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DHKFf4l = await PRDZstakingV2.new({from: accounts[1]});
		const uintvP85qGl = BigInt("1528")
		const uintG6kImi2 = await PRDZstakingV2DHKFf4l.getTotalUnStaked.call({from: accounts[0]});
		const uintYbyYNwL = await PRDZstakingV2DHKFf4l.getNumberOfHolders.call({from: accounts[3]});
		const uintTbmNxoC = await PRDZstakingV2DHKFf4l.updateScoreEth.call(uintvP85qGl, {from: accounts[1]});

		assert.equal(uintG6kImi2, BigInt("0"))
		assert.equal(uintYbyYNwL, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DLzBWJM = await PRDZstakingV2.new({from: accounts[3]});
		const addressbRRQWCT = accounts[5]
		const address2dynnL = await PRDZstakingV2DLzBWJM.transferOwnership.call(addressbRRQWCT, {from: accounts[3]});
		await PRDZstakingV2DLzBWJM.claimScoreEth.call({from: accounts[2]});
		await PRDZstakingV2DLzBWJM.claimReward.call({from: accounts[0]});

		await expect(PRDZstakingV2DLzBWJM.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lARXXUl = await PRDZstakingV2.new({from: accounts[3]});
		const addressnWpbvaB = "0x00000000000000000000000000000000000000-1"
		const addressjczTIgE = accounts[4]
		const uintluv3BjI = await PRDZstakingV2lARXXUl.getTotalUnStaked.call({from: accounts[2]});
		const uintfU99zLt = await PRDZstakingV2lARXXUl.getStakingScore.call(addressnWpbvaB, {from: accounts[3]});
		const uint57XHq6 = await PRDZstakingV2lARXXUl.getPendingReward.call(addressjczTIgE, {from: accounts[5]});

		assert.equal(uintluv3BjI, BigInt("0"))
		await expect(PRDZstakingV2lARXXUl.getStakingScore.call(addressnWpbvaB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DLzBWJM = await PRDZstakingV2.new({from: accounts[3]});
		const addressFs7sQf9 = accounts[4]
		const uintmOps07m = BigInt("1391")
		const uintlZaWU2J = BigInt("1712")
		const uintGtlABoI = await PRDZstakingV2DLzBWJM.getTotalClaimed.call({from: accounts[2]});
		await PRDZstakingV2DLzBWJM.claimReward.call({from: accounts[0]});
		const uint684JYH = await PRDZstakingV2DLzBWJM.getPendingReward.call(addressFs7sQf9, {from: accounts[2]});
		const uintvgVgiuy = await PRDZstakingV2DLzBWJM.updateOffer.call(uintlZaWU2J, uintmOps07m, {from: accounts[3]});

		assert.equal(uintGtlABoI, BigInt("0"))
		await expect(PRDZstakingV2DLzBWJM.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
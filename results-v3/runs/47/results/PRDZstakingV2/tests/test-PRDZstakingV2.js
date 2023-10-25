const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2K1oBfS4 = await PRDZstakingV2.new({from: accounts[3]});
		const uintgeXpIbc = await PRDZstakingV2K1oBfS4.getTotalStaked.call({from: accounts[2]});
		await PRDZstakingV2K1oBfS4.deposit.call({from: accounts[3]});
		const uintGosplgo = await PRDZstakingV2K1oBfS4.getTotalStaked.call({from: accounts[4]});

		assert.equal(uintgeXpIbc, BigInt("0"))
		await expect(PRDZstakingV2K1oBfS4.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I1CQVOQ = await PRDZstakingV2.new({from: accounts[2]});
		const addressJ3YPGek = accounts[3]
		const uintvqCgcl5 = BigInt("529")
		const uintySALkuH = BigInt("563")
		const uintieq45Q8 = BigInt("1783")
		const addressbzEcU8i = accounts[2]
		const uintS43KlBS = await PRDZstakingV2I1CQVOQ.getScoreEth.call(addressJ3YPGek, {from: "0x0000000000000000000000000000000000000001"});
		const uinteDwOPv7 = await PRDZstakingV2I1CQVOQ.updateOffer.call(uintySALkuH, uintvqCgcl5, {from: accounts[2]});
		const uintPwp6A4l = await PRDZstakingV2I1CQVOQ.updateScoreEth.call(uintieq45Q8, {from: accounts[5]});
		const uintVeEhTMT = await PRDZstakingV2I1CQVOQ.getNumberOfHolders.call({from: accounts[0]});
		const uintM3IGiLK = await PRDZstakingV2I1CQVOQ.getTotalClaimed.call({from: accounts[1]});
		const addresslcexFlx = await PRDZstakingV2I1CQVOQ.transferOwnership.call(addressbzEcU8i, {from: accounts[4]});

		assert.equal(uintS43KlBS, BigInt("0"))
		await expect(PRDZstakingV2I1CQVOQ.updateScoreEth.call(uintieq45Q8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TPMNU9e = await PRDZstakingV2.new({from: accounts[0]});
		const addresshla6yPc = accounts[3]
		const addressJO8AYYo = accounts[2]
		const uintlaCTzsW = await PRDZstakingV2TPMNU9e.getTotalFeeCollected.call({from: accounts[3]});
		const addressSdwRmdM = await PRDZstakingV2TPMNU9e.transferOwnership.call(addresshla6yPc, {from: accounts[3]});
		const addressqrqukSk = await PRDZstakingV2TPMNU9e.transferOwnership.call(addressJO8AYYo, {from: accounts[2]});

		assert.equal(uintlaCTzsW, BigInt("0"))
		await expect(PRDZstakingV2TPMNU9e.transferOwnership.call(addresshla6yPc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WkVloQ6 = await PRDZstakingV2.new({from: accounts[4]});
		const uint5XKBRT = BigInt("1494")
		const uintVRgoDz = BigInt("1636")
		const addressU4jubMr = accounts[0]
		const uinthf8GCz1 = await PRDZstakingV2WkVloQ6.getNumberOfHolders.call({from: accounts[3]});
		const uinti8DxkQ = await PRDZstakingV2WkVloQ6.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2WkVloQ6.claimScoreEth.call({from: accounts[2]});
		const uintJtpSuQ7 = await PRDZstakingV2WkVloQ6.updateOffer.call(uintVRgoDz, uint5XKBRT, {from: accounts[1]});
		const uintjaso9wC = await PRDZstakingV2WkVloQ6.getPendingReward.call(addressU4jubMr, {from: accounts[0]});

		assert.equal(uinthf8GCz1, BigInt("0"))
		assert.equal(uinti8DxkQ, BigInt("0"))
		await expect(PRDZstakingV2WkVloQ6.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qr6B6zN = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEuXEgHC = BigInt("743")
		const uintV96oW4X = BigInt("150")
		await PRDZstakingV2qr6B6zN.claimReward.call({from: accounts[4]});
		await PRDZstakingV2qr6B6zN.claimReward.call({from: accounts[4]});
		const uinttSsHUU9 = await PRDZstakingV2qr6B6zN.updateOffer.call(uintV96oW4X, uintEuXEgHC, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2qr6B6zN.claimReward.call({from: accounts[5]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV22eEwvz = await PRDZstakingV2.new({from: accounts[3]});
		const uintoCBxG9T = await PRDZstakingV22eEwvz.getTotalClaimed.call({from: accounts[4]});
		await PRDZstakingV22eEwvz.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV22eEwvz.deposit.call({from: accounts[2]});
		const uintkUyIWdL = await PRDZstakingV22eEwvz.getTotalUnStaked.call({from: accounts[4]});
		await PRDZstakingV22eEwvz.onlyOwner.call({from: accounts[4]});

		assert.equal(uintoCBxG9T, BigInt("0"))
		await expect(PRDZstakingV22eEwvz.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I1CQVOQ = await PRDZstakingV2.new({from: accounts[2]});
		const addressXrMy0iB = accounts[3]
		const uintf7OeEb0 = BigInt("95")
		const uintd9NGwQ = BigInt("529")
		const uintUWShD6D = BigInt("563")
		const uintJDJcpyZ = BigInt("1783")
		const addressCu5xVG8 = accounts[2]
		const uintS43KlBS = await PRDZstakingV2I1CQVOQ.getScoreEth.call(addressXrMy0iB, {from: "0x0000000000000000000000000000000000000001"});
		const uintr11wxC = await PRDZstakingV2I1CQVOQ.unstake.call(uintf7OeEb0, {from: accounts[2]});
		const uinteDwOPv7 = await PRDZstakingV2I1CQVOQ.updateOffer.call(uintUWShD6D, uintd9NGwQ, {from: accounts[2]});
		const uintPwp6A4l = await PRDZstakingV2I1CQVOQ.updateScoreEth.call(uintJDJcpyZ, {from: accounts[5]});
		const uintVeEhTMT = await PRDZstakingV2I1CQVOQ.getNumberOfHolders.call({from: accounts[0]});
		const addresslcexFlx = await PRDZstakingV2I1CQVOQ.transferOwnership.call(addressCu5xVG8, {from: accounts[4]});

		assert.equal(uintS43KlBS, BigInt("0"))
		await expect(PRDZstakingV2I1CQVOQ.unstake.call(uintf7OeEb0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I1CQVOQ = await PRDZstakingV2.new({from: accounts[2]});
		const addresss4xRKOD = accounts[3]
		const uintnweP9Sw = BigInt("529")
		const uintRJrdIVM = BigInt("563")
		const addressa8FW7Wr = accounts[2]
		const uintS43KlBS = await PRDZstakingV2I1CQVOQ.getScoreEth.call(addresss4xRKOD, {from: "0x0000000000000000000000000000000000000001"});
		const uinteDwOPv7 = await PRDZstakingV2I1CQVOQ.updateOffer.call(uintRJrdIVM, uintnweP9Sw, {from: accounts[2]});
		const uintVeEhTMT = await PRDZstakingV2I1CQVOQ.getNumberOfHolders.call({from: accounts[0]});
		const uintkENt9fE = await PRDZstakingV2I1CQVOQ.getNumberOfHolders.call({from: accounts[0]});
		const uintRvbqY2D = await PRDZstakingV2I1CQVOQ.getTotalUnStaked.call({from: accounts[4]});
		const addresslcexFlx = await PRDZstakingV2I1CQVOQ.transferOwnership.call(addressa8FW7Wr, {from: accounts[4]});

		assert.equal(uintRvbqY2D, BigInt("0"))
		assert.equal(uintS43KlBS, BigInt("0"))
		assert.equal(uintVeEhTMT, BigInt("0"))
		assert.equal(uintkENt9fE, BigInt("0"))
		await expect(PRDZstakingV2I1CQVOQ.transferOwnership.call(addressa8FW7Wr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2EHGB0Sr = await PRDZstakingV2.new({from: accounts[3]});
		const uintkfbGl55 = BigInt("756")
		const addressn7SIIUE = accounts[2]
		const uintBULTtO = await PRDZstakingV2EHGB0Sr.stake.call(uintkfbGl55, {from: accounts[1]});
		const uintznYrYHK = await PRDZstakingV2EHGB0Sr.getStakingScore.call(addressn7SIIUE, {from: accounts[3]});
		const uintLOlYpSF = await PRDZstakingV2EHGB0Sr.getNumberOfHolders.call({from: accounts[0]});

		await expect(PRDZstakingV2EHGB0Sr.stake.call(uintkfbGl55, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2SSsC9dx = await PRDZstakingV2.new({from: accounts[2]});
		const addressIfkKPXg = accounts[5]
		const addressmwBSIlN = accounts[4]
		const uintAAQoZ9G = BigInt("1627")
		const uintLdMkOYY = BigInt("609")
		const uintT3R0lCt = await PRDZstakingV2SSsC9dx.getStakingScore.call(addressIfkKPXg, {from: accounts[3]});
		const uintE7RxGcM = await PRDZstakingV2SSsC9dx.getScoreEth.call(addressmwBSIlN, {from: accounts[4]});
		const uintVXgJ2Yz = await PRDZstakingV2SSsC9dx.stake.call(uintAAQoZ9G, {from: accounts[3]});
		const uinth2IRHv = await PRDZstakingV2SSsC9dx.updateScoreEth.call(uintLdMkOYY, {from: accounts[2]});
		const uintnStIFa = await PRDZstakingV2SSsC9dx.getTotalUnStaked.call({from: accounts[2]});

		assert.equal(uintE7RxGcM, BigInt("0"))
		assert.equal(uintT3R0lCt, BigInt("0"))
		await expect(PRDZstakingV2SSsC9dx.stake.call(uintAAQoZ9G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yigUs5 = await PRDZstakingV2.new({from: accounts[2]});
		const addressZEvoy8 = accounts[1]
		await PRDZstakingV2yigUs5.deposit.call({from: accounts[1]});
		const uintmH8Kc7J = await PRDZstakingV2yigUs5.getPendingReward.call(addressZEvoy8, {from: accounts[2]});

		await expect(PRDZstakingV2yigUs5.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2C7TIR7G = await PRDZstakingV2.new({from: accounts[4]});
		const uintwf7IfZZ = BigInt("1491")
		const uintXq9aDPO = await PRDZstakingV2C7TIR7G.getTotalFeeCollected.call({from: accounts[2]});
		await PRDZstakingV2C7TIR7G.claimReward.call({from: accounts[4]});
		const uintF16EhYQ = await PRDZstakingV2C7TIR7G.updateScoreEth.call(uintwf7IfZZ, {from: accounts[4]});

		assert.equal(uintXq9aDPO, BigInt("0"))
		await expect(PRDZstakingV2C7TIR7G.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WkVloQ6 = await PRDZstakingV2.new({from: accounts[4]});
		const addressXBNej6N = accounts[2]
		const uintmY3dQiF = BigInt("1494")
		const uintR197SIZ = BigInt("1636")
		const addressLqzUpU = accounts[0]
		const uinthf8GCz1 = await PRDZstakingV2WkVloQ6.getNumberOfHolders.call({from: accounts[3]});
		const uinti8DxkQ = await PRDZstakingV2WkVloQ6.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslF3oBX = await PRDZstakingV2WkVloQ6.transferOwnership.call(addressXBNej6N, {from: accounts[4]});
		await PRDZstakingV2WkVloQ6.claimScoreEth.call({from: accounts[2]});
		const uintJtpSuQ7 = await PRDZstakingV2WkVloQ6.updateOffer.call(uintR197SIZ, uintmY3dQiF, {from: accounts[1]});
		const uintCjTH7dm = await PRDZstakingV2WkVloQ6.getNumberOfHolders.call({from: accounts[2]});
		const uintjaso9wC = await PRDZstakingV2WkVloQ6.getPendingReward.call(addressLqzUpU, {from: accounts[0]});

		assert.equal(uinthf8GCz1, BigInt("0"))
		assert.equal(uinti8DxkQ, BigInt("0"))
		await expect(PRDZstakingV2WkVloQ6.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tsJ5Pk8 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrXrOqoY = BigInt("1449")
		const addressJOKZlGI = accounts[1]
		const uintdEEkX2t = await PRDZstakingV2tsJ5Pk8.stake.call(uintrXrOqoY, {from: accounts[5]});
		const addressXm8HUjJ = await PRDZstakingV2tsJ5Pk8.transferOwnership.call(addressJOKZlGI, {from: accounts[4]});
		await PRDZstakingV2tsJ5Pk8.deposit.call({from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ap4dF5V = await PRDZstakingV2.new({from: accounts[0]});
		const addressJm96JHP = accounts[2]
		const addressP6nwERz = accounts[4]
		const addressbXED4RB = accounts[3]
		const uintwjcm353 = await PRDZstakingV2ap4dF5V.getPendingReward.call(addressJm96JHP, {from: accounts[2]});
		const uintS6ErAhL = await PRDZstakingV2ap4dF5V.getScoreEth.call(addressP6nwERz, {from: accounts[0]});
		const uintmCGMhRe = await PRDZstakingV2ap4dF5V.getScoreEth.call(addressbXED4RB, {from: accounts[0]});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[2]});
//		const uinthBUWT7f = await PRDZstakingV2ap4dF5V.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintBo0jHtW = await PRDZstakingV2ap4dF5V.getTotalFeeCollected.call({from: accounts[0]});

		assert.equal(uintS6ErAhL, BigInt("0"))
		assert.equal(uintmCGMhRe, BigInt("0"))
		assert.equal(uintwjcm353, BigInt("0"))
		await expect(PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JHH3lkk = await PRDZstakingV2.new({from: accounts[4]});
		const uint892loZ = await PRDZstakingV2JHH3lkk.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2JHH3lkk.claimScoreEth.call({from: accounts[2]});
//		const uintlSK3gJl = await PRDZstakingV2JHH3lkk.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2JHH3lkk.claimReward.call({from: accounts[3]});

		assert.equal(uint892loZ, BigInt("0"))
		await expect(PRDZstakingV2JHH3lkk.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rqX14k = await PRDZstakingV2.new({from: accounts[0]});
		const addressxNvpSPT = accounts[5]
//		await PRDZstakingV2rqX14k.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2rqX14k.deposit.call({from: accounts[3]});
//		await PRDZstakingV2rqX14k.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintvgfT8J = await PRDZstakingV2rqX14k.getScoreEth.call(addressxNvpSPT, {from: accounts[3]});
//		await PRDZstakingV2rqX14k.onlyOwner.call({from: accounts[2]});

		await expect(PRDZstakingV2rqX14k.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VkcSD3n = await PRDZstakingV2.new({from: accounts[5]});
		const addressiKPem62 = accounts[4]
		const uintQ4fu78k = await PRDZstakingV2VkcSD3n.getStakingScore.call(addressiKPem62, {from: accounts[4]});
		const uintpnG8Gq2 = await PRDZstakingV2VkcSD3n.getTotalUnStaked.call({from: accounts[1]});
//		await PRDZstakingV2VkcSD3n.onlyOwner.call({from: accounts[2]});

		assert.equal(uintQ4fu78k, BigInt("0"))
		assert.equal(uintpnG8Gq2, BigInt("0"))
		await expect(PRDZstakingV2VkcSD3n.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yteDUO = await PRDZstakingV2.new({from: accounts[3]});
		const addressoq5WFQQ = accounts[2]
		const addressOVO1YAm = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV2yteDUO.claimReward.call({from: accounts[3]});
//		const uintGD9JE9u = await PRDZstakingV2yteDUO.getTotalUnStaked.call({from: accounts[1]});
//		const uintz0dJuk = await PRDZstakingV2yteDUO.getTotalClaimed.call({from: accounts[3]});
//		const addressQGfHoUA = await PRDZstakingV2yteDUO.transferOwnership.call(addressoq5WFQQ, {from: accounts[1]});
//		const uintH9Qf5KR = await PRDZstakingV2yteDUO.getTotalUnStaked.call({from: accounts[1]});
//		const addressHdi8TOl = await PRDZstakingV2yteDUO.transferOwnership.call(addressOVO1YAm, {from: accounts[3]});

		await expect(PRDZstakingV2yteDUO.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VkcSD3n = await PRDZstakingV2.new({from: accounts[5]});
		const addressH8zzhJ4 = accounts[4]
		const uintqvSdpbc = BigInt("1851")
		const uintQ4fu78k = await PRDZstakingV2VkcSD3n.getStakingScore.call(addressH8zzhJ4, {from: accounts[4]});
//		const uintDBwM2TS = await PRDZstakingV2VkcSD3n.unstake.call(uintqvSdpbc, {from: accounts[2]});
//		const uintpnG8Gq2 = await PRDZstakingV2VkcSD3n.getTotalUnStaked.call({from: accounts[1]});
//		await PRDZstakingV2VkcSD3n.onlyOwner.call({from: accounts[2]});

		assert.equal(uintQ4fu78k, BigInt("0"))
		await expect(PRDZstakingV2VkcSD3n.unstake.call(uintqvSdpbc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ap4dF5V = await PRDZstakingV2.new({from: accounts[0]});
		const addressVYnsFes = accounts[3]
		const addressN7k0WZ = accounts[4]
		const address6biLT4 = accounts[3]
		const uintVkYv5dk = BigInt("420")
		const uintwjcm353 = await PRDZstakingV2ap4dF5V.getPendingReward.call(addressVYnsFes, {from: accounts[2]});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[1]});
//		const uintS6ErAhL = await PRDZstakingV2ap4dF5V.getScoreEth.call(addressN7k0WZ, {from: accounts[0]});
//		const uintmCGMhRe = await PRDZstakingV2ap4dF5V.getScoreEth.call(address6biLT4, {from: accounts[0]});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[2]});
//		const uintndMf8jn = await PRDZstakingV2ap4dF5V.getNumberOfHolders.call({from: accounts[1]});
//		const uinthBUWT7f = await PRDZstakingV2ap4dF5V.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintBo0jHtW = await PRDZstakingV2ap4dF5V.getTotalFeeCollected.call({from: accounts[0]});
//		const uintpKxSaPc = await PRDZstakingV2ap4dF5V.stake.call(uintVkYv5dk, {from: accounts[3]});

		assert.equal(uintwjcm353, BigInt("0"))
		await expect(PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ap4dF5V = await PRDZstakingV2.new({from: accounts[0]});
		const addressmHAmW5d = accounts[2]
		const addresspbWuTy8 = accounts[3]
		const addressqP4k0xa = accounts[3]
		const uintwjcm353 = await PRDZstakingV2ap4dF5V.getPendingReward.call(addressmHAmW5d, {from: accounts[2]});
		const addresslvFhc5c = await PRDZstakingV2ap4dF5V.transferOwnership.call(addresspbWuTy8, {from: accounts[0]});
		const uintmCGMhRe = await PRDZstakingV2ap4dF5V.getScoreEth.call(addressqP4k0xa, {from: accounts[0]});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[0]});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[2]});
//		const uinthBUWT7f = await PRDZstakingV2ap4dF5V.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[4]});
//		const uintBo0jHtW = await PRDZstakingV2ap4dF5V.getTotalFeeCollected.call({from: accounts[0]});

		assert.equal(uintmCGMhRe, BigInt("0"))
		assert.equal(uintwjcm353, BigInt("0"))
		await expect(PRDZstakingV2ap4dF5V.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JHH3lkk = await PRDZstakingV2.new({from: accounts[4]});
		const uintXyrnuXE = BigInt("1273")
		const uintg6y5qm6 = BigInt("744")
		const uintUIXgD7Y = BigInt("305")
		const uintmjOKtSE = await PRDZstakingV2JHH3lkk.updateOffer.call(uintg6y5qm6, uintXyrnuXE, {from: accounts[4]});
//		await PRDZstakingV2JHH3lkk.claimReward.call({from: accounts[3]});
//		const uintsmwkAYj = await PRDZstakingV2JHH3lkk.unstake.call(uintUIXgD7Y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2JHH3lkk.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2KOBtlFx = await PRDZstakingV2.new({from: accounts[0]});
		const uintakumMEy = BigInt("773")
		const addresshy3taW = accounts[3]
		const uintgWwLutl = BigInt("1917")
//		await PRDZstakingV2KOBtlFx.claimReward.call({from: accounts[3]});
//		const uintmX2iGyt = await PRDZstakingV2KOBtlFx.updateScoreEth.call(uintakumMEy, {from: accounts[0]});
//		const addressBDzDBmJ = await PRDZstakingV2KOBtlFx.transferOwnership.call(addresshy3taW, {from: accounts[3]});
//		const uintXPJaITD = await PRDZstakingV2KOBtlFx.unstake.call(uintgWwLutl, {from: accounts[2]});

		await expect(PRDZstakingV2KOBtlFx.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
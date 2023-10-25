const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2t6oT5KD = await PRDZstakingV2.new({from: accounts[4]});
		const uintHdVzu58 = BigInt("1956")
		const uintLVKj5Oj = BigInt("404")
		const addressdn6MQGr = accounts[2]
		const addresswXESPjU = accounts[3]
		const uintryeQfmJ = BigInt("423")
		const uintHb7k3k = await PRDZstakingV2t6oT5KD.unstake.call(uintHdVzu58, {from: "0x0000000000000000000000000000000000000001"});
		const uintlSe7eW = await PRDZstakingV2t6oT5KD.unstake.call(uintLVKj5Oj, {from: accounts[2]});
		const uintJ8IZmti = await PRDZstakingV2t6oT5KD.getPendingReward.call(addressdn6MQGr, {from: accounts[2]});
		const uintyJIN1PI = await PRDZstakingV2t6oT5KD.getPendingReward.call(addresswXESPjU, {from: accounts[4]});
		const uintN0yluK5 = await PRDZstakingV2t6oT5KD.updateScoreEth.call(uintryeQfmJ, {from: accounts[5]});
		await PRDZstakingV2t6oT5KD.claimReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2t6oT5KD.unstake.call(uintHdVzu58, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WwKNr70 = await PRDZstakingV2.new({from: accounts[5]});
		const uintO63pVt = BigInt("1397")
		const uintR4VTdtN = BigInt("250")
		const uinttoeBEQ6 = BigInt("715")
		const uintoeNa0UD = await PRDZstakingV2WwKNr70.updateScoreEth.call(uintO63pVt, {from: accounts[4]});
		await PRDZstakingV2WwKNr70.deposit.call({from: accounts[1]});
		const uintP5LOGiR = await PRDZstakingV2WwKNr70.updateOffer.call(uinttoeBEQ6, uintR4VTdtN, {from: accounts[1]});

		await expect(PRDZstakingV2WwKNr70.updateScoreEth.call(uintO63pVt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2GXHUtyB = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIVXMnMF = BigInt("215")
		const uintatHtmqy = BigInt("378")
		const uintxPwak9l = BigInt("1883")
		await PRDZstakingV2GXHUtyB.claimScoreEth.call({from: accounts[1]});
		const uintA8asaoF = await PRDZstakingV2GXHUtyB.getTotalUnStaked.call({from: accounts[3]});
		const uintamEiLW = await PRDZstakingV2GXHUtyB.unstake.call(uintIVXMnMF, {from: "0x0000000000000000000000000000000000000001"});
		const uintdKrYPKB = await PRDZstakingV2GXHUtyB.unstake.call(uintatHtmqy, {from: "0x0000000000000000000000000000000000000001"});
		const uintKom3IQ6 = await PRDZstakingV2GXHUtyB.stake.call(uintxPwak9l, {from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2UgOfDOS = await PRDZstakingV2.new({from: accounts[0]});
		const uintQSIlID1 = await PRDZstakingV2UgOfDOS.getNumberOfHolders.call({from: accounts[3]});
		await PRDZstakingV2UgOfDOS.onlyOwner.call({from: accounts[1]});

		assert.equal(uintQSIlID1, BigInt("0"))
		await expect(PRDZstakingV2UgOfDOS.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mn8HpX = await PRDZstakingV2.new({from: accounts[4]});
		const uintjczHmFv = await PRDZstakingV2mn8HpX.getNumberOfHolders.call({from: accounts[2]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[0]});
		await PRDZstakingV2mn8HpX.deposit.call({from: accounts[0]});

		assert.equal(uintjczHmFv, BigInt("0"))
		await expect(PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oxjTZ4L = await PRDZstakingV2.new({from: accounts[3]});
		const addressAgDpfu1 = accounts[3]
		await PRDZstakingV2oxjTZ4L.claimScoreEth.call({from: accounts[3]});
		const uintawCz9D = await PRDZstakingV2oxjTZ4L.getTotalUnStaked.call({from: accounts[4]});
		const uintxonyUxG = await PRDZstakingV2oxjTZ4L.getScoreEth.call(addressAgDpfu1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2oxjTZ4L.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yeJgCVu = await PRDZstakingV2.new({from: accounts[2]});
		const uintcYwYNCT = BigInt("1351")
		const uintN0IMCMd = BigInt("1911")
		const uintJoIZ51 = BigInt("858")
		const uintFOj2Vx7 = await PRDZstakingV2yeJgCVu.stake.call(uintcYwYNCT, {from: "0x0000000000000000000000000000000000000001"});
		const uintbcTxkbe = await PRDZstakingV2yeJgCVu.getTotalUnStaked.call({from: accounts[1]});
		const uintgTHYQRp = await PRDZstakingV2yeJgCVu.updateOffer.call(uintJoIZ51, uintN0IMCMd, {from: accounts[4]});

		await expect(PRDZstakingV2yeJgCVu.stake.call(uintcYwYNCT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ymOWZcl = await PRDZstakingV2.new({from: accounts[4]});
		const addressFJk8WU3 = accounts[5]
		const addressmfiZ8Ia = accounts[0]
		const uintTPWFLr9 = BigInt("1616")
		const uintm6CKlJ = await PRDZstakingV2ymOWZcl.getScoreEth.call(addressFJk8WU3, {from: "0x0000000000000000000000000000000000000001"});
		const uintvpQhON6 = await PRDZstakingV2ymOWZcl.getStakingScore.call(addressmfiZ8Ia, {from: accounts[4]});
		const uintV4MYWNI = await PRDZstakingV2ymOWZcl.stake.call(uintTPWFLr9, {from: accounts[2]});
		const uintmKmLx6 = await PRDZstakingV2ymOWZcl.getTotalFeeCollected.call({from: accounts[5]});

		assert.equal(uintm6CKlJ, BigInt("0"))
		assert.equal(uintvpQhON6, BigInt("0"))
		await expect(PRDZstakingV2ymOWZcl.stake.call(uintTPWFLr9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mn8HpX = await PRDZstakingV2.new({from: accounts[4]});
		const uintjczHmFv = await PRDZstakingV2mn8HpX.getNumberOfHolders.call({from: accounts[2]});
		const uintRTUb9TV = await PRDZstakingV2mn8HpX.getTotalClaimed.call({from: accounts[4]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[0]});
		const uintGqs7G82 = await PRDZstakingV2mn8HpX.getTotalStaked.call({from: accounts[1]});
		await PRDZstakingV2mn8HpX.deposit.call({from: accounts[0]});

		assert.equal(uintRTUb9TV, BigInt("0"))
		assert.equal(uintjczHmFv, BigInt("0"))
		await expect(PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mn8HpX = await PRDZstakingV2.new({from: accounts[4]});
		const uintAqY3IBl = BigInt("372")
		const addresswNvOz8u = accounts[2]
		const uintmzJpu12 = await PRDZstakingV2mn8HpX.getTotalFeeCollected.call({from: accounts[4]});
		const uintjczHmFv = await PRDZstakingV2mn8HpX.getNumberOfHolders.call({from: accounts[2]});
		const uintL6Jlc6 = await PRDZstakingV2mn8HpX.stake.call(uintAqY3IBl, {from: accounts[5]});
		const uintwUa0B7V = await PRDZstakingV2mn8HpX.getScoreEth.call(addresswNvOz8u, {from: accounts[1]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]});
		await PRDZstakingV2mn8HpX.deposit.call({from: accounts[0]});

		assert.equal(uintjczHmFv, BigInt("0"))
		assert.equal(uintmzJpu12, BigInt("0"))
		await expect(PRDZstakingV2mn8HpX.stake.call(uintAqY3IBl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oxjTZ4L = await PRDZstakingV2.new({from: accounts[3]});
		const addressnqRWD4l = accounts[4]
		const addressTR9WBqp = accounts[4]
		const addressvb2JNv = accounts[2]
		const uintYRuFmTw = BigInt("1776")
		await PRDZstakingV2oxjTZ4L.claimScoreEth.call({from: accounts[3]});
		const uintxonyUxG = await PRDZstakingV2oxjTZ4L.getScoreEth.call(addressnqRWD4l, {from: "0x0000000000000000000000000000000000000001"});
		const uintzH5ttd = await PRDZstakingV2oxjTZ4L.getStakingScore.call(addressTR9WBqp, {from: accounts[1]});
		const addressJ6UZRfB = await PRDZstakingV2oxjTZ4L.transferOwnership.call(addressvb2JNv, {from: accounts[3]});
		const uintM5NQGDE = await PRDZstakingV2oxjTZ4L.unstake.call(uintYRuFmTw, {from: accounts[4]});

		await expect(PRDZstakingV2oxjTZ4L.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mn8HpX = await PRDZstakingV2.new({from: accounts[4]});
		const uinti4gcQHu = BigInt("1836")
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]});
		const uintLEkNAl = await PRDZstakingV2mn8HpX.updateScoreEth.call(uinti4gcQHu, {from: accounts[4]});

		await expect(PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mn8HpX = await PRDZstakingV2.new({from: accounts[4]});
		const addressrMW4HNG = accounts[3]
		const uintJ3uYMS = BigInt("261")
		const uintYHfKtvb = BigInt("469")
		const uint8AusDL = await PRDZstakingV2mn8HpX.getNumberOfHolders.call({from: accounts[4]});
		const uintpryU9T1 = await PRDZstakingV2mn8HpX.getPendingReward.call(addressrMW4HNG, {from: accounts[5]});
		const uintWDoq3Ut = await PRDZstakingV2mn8HpX.updateOffer.call(uintYHfKtvb, uintJ3uYMS, {from: accounts[4]});
		await PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]});

		assert.equal(uint8AusDL, BigInt("0"))
		assert.equal(uintpryU9T1, BigInt("0"))
		await expect(PRDZstakingV2mn8HpX.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
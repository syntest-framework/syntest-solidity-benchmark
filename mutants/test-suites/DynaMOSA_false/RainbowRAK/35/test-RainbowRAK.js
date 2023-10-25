const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKWQ2PKTk = await RainbowRAK.new({from: accounts[2]});
		const uintUuK87eZ = BigInt("20")
		const addresshJvmZg = accounts[1]
//		const uint256YOYAuRm = await RainbowRAKWQ2PKTk.unstake.call(uintUuK87eZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKYdSJ3 = await RainbowRAKWQ2PKTk.transferOwnership.call(addresshJvmZg, {from: accounts[1]});
//		const uint256nTYo3Qg = await RainbowRAKWQ2PKTk.getCurrentRewardReserve.call({from: accounts[4]});

		await expect(RainbowRAKWQ2PKTk.unstake.call(uintUuK87eZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSlxTzdw = await RainbowRAK.new({from: accounts[4]});
		const uintLDDD08 = BigInt("1977")
		const uintQUmRSSu = BigInt("760")
//		const uint256rj5qCuU = await RainbowRAKSlxTzdw.stake.call(uintLDDD08, {from: accounts[3]});
//		await RainbowRAKSlxTzdw.claimRewards.call({from: accounts[1]});
//		await RainbowRAKSlxTzdw.onlyOwner.call({from: accounts[1]});
//		const uint256JrHu0V = await RainbowRAKSlxTzdw.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256w7oFOoy = await RainbowRAKSlxTzdw.stake.call(uintQUmRSSu, {from: accounts[2]});

		await expect(RainbowRAKSlxTzdw.stake.call(uintLDDD08, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKr7pLVeH = await RainbowRAK.new({from: accounts[3]});
		const addressiekR6iH = accounts[2]
		const addressygmRStJ = accounts[3]
		const uintVSsiGz3 = BigInt("1261")
		const uint256TlT0qBi = await RainbowRAKr7pLVeH.earned.call(addressiekR6iH, {from: accounts[3]});
		const uint256Ygeyhum = await RainbowRAKr7pLVeH.earned.call(addressygmRStJ, {from: accounts[5]});
		const addressarrayXQYOj7 = await RainbowRAKr7pLVeH.getCommunity.call({from: accounts[1]});
		const addressarraynp2rgWq = await RainbowRAKr7pLVeH.getCommunity.call({from: accounts[4]});
//		const uint256b0VNLfg = await RainbowRAKr7pLVeH.stake.call(uintVSsiGz3, {from: accounts[2]});

		assert.equal(addressarrayXQYOj7, )
		assert.equal(addressarraynp2rgWq, )
		assert.equal(uint256TlT0qBi, BigInt("0"))
		assert.equal(uint256Ygeyhum, BigInt("0"))
		await expect(RainbowRAKr7pLVeH.stake.call(uintVSsiGz3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKC2ioxGJ = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrxVIQRw = accounts[0]
		const uintWS7AIOF = BigInt("1215")
		const addressarrayL5Dw5u = await RainbowRAKC2ioxGJ.getCommunity.call({from: accounts[0]});
		const addressoTqOnlA = await RainbowRAKC2ioxGJ.updateReward.call(addressrxVIQRw, {from: accounts[0]});
		const uint256Ef7ihe = await RainbowRAKC2ioxGJ.stake.call(uintWS7AIOF, {from: accounts[1]});
		await RainbowRAKC2ioxGJ.onlyOwner.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKvfd99b3 = await RainbowRAK.new({from: accounts[3]});
		const addressGkYt5um = accounts[4]
		const uintEnpvLph = BigInt("669")
//		const addressPgwdKZK = await RainbowRAKvfd99b3.transferOwnership.call(addressGkYt5um, {from: accounts[2]});
//		const uint256mthbcH7 = await RainbowRAKvfd99b3.notifyRewardAmount.call(uintEnpvLph, {from: accounts[3]});
//		const boolmhec9wP = await RainbowRAKvfd99b3.isOwner.call({from: accounts[1]});

		await expect(RainbowRAKvfd99b3.transferOwnership.call(addressGkYt5um, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKbmnSqm = await RainbowRAK.new({from: accounts[1]});
		const uintYovU7g = BigInt("773")
		const uint256jcDd7W = await RainbowRAKKbmnSqm.getCurrentRewardReserve.call({from: accounts[5]});
//		const uint256V1rEsO = await RainbowRAKKbmnSqm.stake.call(uintYovU7g, {from: accounts[1]});

		assert.equal(uint256jcDd7W, BigInt("0"))
		await expect(RainbowRAKKbmnSqm.stake.call(uintYovU7g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgjo3S1g = await RainbowRAK.new({from: accounts[3]});
		const addressf1K6RfM = accounts[3]
//		const addressALMRXBg = await RainbowRAKgjo3S1g.updateReward.call(addressf1K6RfM, {from: accounts[1]});
//		const uint256KN0Vay = await RainbowRAKgjo3S1g.getCurrentRewardReserve.call({from: accounts[0]});

		await expect(RainbowRAKgjo3S1g.updateReward.call(addressf1K6RfM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKr7pLVeH = await RainbowRAK.new({from: accounts[3]});
		const addressCnsLkDc = accounts[2]
		const addressjK04LuZ = accounts[4]
		const uintcR3I0A4 = BigInt("1261")
		const uint256TlT0qBi = await RainbowRAKr7pLVeH.earned.call(addressCnsLkDc, {from: accounts[3]});
		const uint256Ygeyhum = await RainbowRAKr7pLVeH.earned.call(addressjK04LuZ, {from: accounts[5]});
//		await RainbowRAKr7pLVeH.exit.call({from: accounts[1]});
//		const uint256KrYMl4H = await RainbowRAKr7pLVeH.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressarrayXQYOj7 = await RainbowRAKr7pLVeH.getCommunity.call({from: accounts[1]});
//		const uint256b0VNLfg = await RainbowRAKr7pLVeH.stake.call(uintcR3I0A4, {from: accounts[2]});

		assert.equal(uint256TlT0qBi, BigInt("0"))
		assert.equal(uint256Ygeyhum, BigInt("0"))
		await expect(RainbowRAKr7pLVeH.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKr7pLVeH = await RainbowRAK.new({from: accounts[3]});
		const addressdPxt3bn = accounts[2]
		const addressyPBoAmF = accounts[4]
		const uintJDISI2 = BigInt("1261")
		const uint256TlT0qBi = await RainbowRAKr7pLVeH.earned.call(addressdPxt3bn, {from: accounts[3]});
//		await RainbowRAKr7pLVeH.claimRewards.call({from: accounts[0]});
//		await RainbowRAKr7pLVeH.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ygeyhum = await RainbowRAKr7pLVeH.earned.call(addressyPBoAmF, {from: accounts[5]});
//		await RainbowRAKr7pLVeH.onlyOwner.call({from: accounts[3]});
//		const addressarrayXQYOj7 = await RainbowRAKr7pLVeH.getCommunity.call({from: accounts[1]});
//		const uint256z7NwR0s = await RainbowRAKr7pLVeH.getCurrentRewardReserve.call({from: accounts[3]});
//		const addressarraynp2rgWq = await RainbowRAKr7pLVeH.getCommunity.call({from: accounts[4]});
//		const uint256b0VNLfg = await RainbowRAKr7pLVeH.stake.call(uintJDISI2, {from: accounts[2]});

		assert.equal(uint256TlT0qBi, BigInt("0"))
		await expect(RainbowRAKr7pLVeH.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKbmnSqm = await RainbowRAK.new({from: accounts[1]});
		const uinth7XId1D = BigInt("748")
		const addressemDmZJW = await RainbowRAKKbmnSqm.owner.call({from: accounts[0]});
		const uint256jcDd7W = await RainbowRAKKbmnSqm.getCurrentRewardReserve.call({from: accounts[5]});
		const addressUfqqZtN = await RainbowRAKKbmnSqm.owner.call({from: accounts[3]});
//		const uint256V1rEsO = await RainbowRAKKbmnSqm.stake.call(uinth7XId1D, {from: accounts[1]});

		assert.equal(addressUfqqZtN, 0x52E491E38a152db9EA5a295370A5EFDD7dc20997)
		assert.equal(addressemDmZJW, 0x52E491E38a152db9EA5a295370A5EFDD7dc20997)
		assert.equal(uint256jcDd7W, BigInt("0"))
		await expect(RainbowRAKKbmnSqm.stake.call(uinth7XId1D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKbmnSqm = await RainbowRAK.new({from: accounts[1]});
		const addresscixwlEm = accounts[4]
		const uintBEXT5e = BigInt("762")
		const addressd5uMMuo = await RainbowRAKKbmnSqm.transferOwnership.call(addresscixwlEm, {from: accounts[1]});
//		const uint256V1rEsO = await RainbowRAKKbmnSqm.stake.call(uintBEXT5e, {from: accounts[1]});

		await expect(RainbowRAKKbmnSqm.stake.call(uintBEXT5e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKbmnSqm = await RainbowRAK.new({from: accounts[1]});
		const uintJL0EGDj = BigInt("5")
		const uintZsv7AKQ = BigInt("779")
//		await RainbowRAKKbmnSqm.renounceOwnership.call({from: accounts[1]});
//		const uint256V1rEsO = await RainbowRAKKbmnSqm.stake.call(uintJL0EGDj, {from: accounts[1]});
//		await RainbowRAKKbmnSqm.exit.call({from: accounts[2]});
//		const uint256scLFKuQ = await RainbowRAKKbmnSqm.stake.call(uintZsv7AKQ, {from: accounts[4]});

		await expect(RainbowRAKKbmnSqm.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
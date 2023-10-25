const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3WJgo2Ma = await YRX3.new({from: accounts[0]});
		await YRX3WJgo2Ma.renounceOwnership.call({from: accounts[3]});
		const boold7ehNns = await YRX3WJgo2Ma.isOwner.call({from: accounts[1]});

		await expect(YRX3WJgo2Ma.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3DLg9EDF = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHQ1pgib = accounts[2]
		const addressMRdrbR8 = accounts[4]
		const addressUP4a2nC = await YRX3DLg9EDF.transferOwnership.call(addressHQ1pgib, {from: accounts[2]});
		await YRX3DLg9EDF.renounceOwnership.call({from: accounts[4]});
		await YRX3DLg9EDF.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNbRyZce = await YRX3DLg9EDF.updateReward.call(addressMRdrbR8, {from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3UTLCjSN = await YRX3.new({from: accounts[2]});
		const uintRABRz0r = BigInt("1724")
		const addresse8RQMI = await YRX3UTLCjSN.owner.call({from: accounts[1]});
		await YRX3UTLCjSN.renounceOwnership.call({from: accounts[0]});
		const uint256Tz0IbfB = await YRX3UTLCjSN.totalSupply.call({from: accounts[4]});
		const uint256LS0NWUi = await YRX3UTLCjSN.lastTimeRewardApplicable.call({from: accounts[3]});
		await YRX3UTLCjSN.checkNextEpoch.call({from: accounts[3]});
		const uint256mVJkMJc = await YRX3UTLCjSN.withdraw.call(uintRABRz0r, {from: accounts[0]});

		assert.equal(addresse8RQMI, 0xB79f336808CA1e247621Bc1B6e95fb57b672F75d)
		await expect(YRX3UTLCjSN.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3k7Dfa4Y = await YRX3.new({from: accounts[2]});
		const addressO4NbiK7 = accounts[3]
		const uintzv3tMX = BigInt("1374")
		const addressTNgv1CL = accounts[4]
		const addressw7FxhAn = accounts[2]
		const uint256R0llmpB = await YRX3k7Dfa4Y.totalSupply.call({from: accounts[3]});
		await YRX3k7Dfa4Y.exit.call({from: accounts[3]});
		const addressHRvmwv5 = await YRX3k7Dfa4Y.emergencyDrain.call(addressO4NbiK7, {from: accounts[2]});
		const uint256AmgzJ5V = await YRX3k7Dfa4Y.stake.call(uintzv3tMX, {from: accounts[4]});
		const addressZbNPKvQ = await YRX3k7Dfa4Y.emergencyDrain.call(addressTNgv1CL, {from: accounts[3]});
		const addressg14O0aK = await YRX3k7Dfa4Y.emergencyDrain.call(addressw7FxhAn, {from: accounts[4]});

		assert.equal(uint256R0llmpB, BigInt("0"))
		await expect(YRX3k7Dfa4Y.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3bBqqIYC = await YRX3.new({from: accounts[2]});
		const addressTMBo6E = accounts[1]
		const uint256aktwW6v = await YRX3bBqqIYC.rewardPerToken.call({from: accounts[1]});
		await YRX3bBqqIYC.notifyRewardAmount.call({from: accounts[3]});
		const addressxpSQfM = await YRX3bBqqIYC.transferOwnership.call(addressTMBo6E, {from: accounts[5]});

		assert.equal(uint256aktwW6v, BigInt("0"))
		await expect(YRX3bBqqIYC.notifyRewardAmount.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3CgIjh1f = await YRX3.new({from: accounts[2]});
		const addressRAuu7tW = accounts[4]
		const uintC9GNRpi = BigInt("1641")
		const addresshtASYjl = accounts[1]
		const addressgeQyQlY = await YRX3CgIjh1f.transferOwnership.call(addressRAuu7tW, {from: accounts[2]});
		const boolMo0bpUC = await YRX3CgIjh1f.isOwner.call({from: accounts[0]});
		const uint2567pKPfq = await YRX3CgIjh1f.withdraw.call(uintC9GNRpi, {from: accounts[2]});
		const addressxWI8b79 = await YRX3CgIjh1f.setRewardDistribution.call(addresshtASYjl, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3CgIjh1f.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolMo0bpUC, false)
		await expect(YRX3CgIjh1f.withdraw.call(uintC9GNRpi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RowJxwp = await YRX3.new({from: accounts[4]});
		const uintCA7cEp = BigInt("837")
		const addressncY99M = accounts[4]
		const uintUunnAIV = BigInt("1988")
		const uint256Y3Uuwv7 = await YRX3RowJxwp.stake.call(uintCA7cEp, {from: accounts[2]});
		await YRX3RowJxwp.checkNextEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256XCgaGyF = await YRX3RowJxwp.rewardPerToken.call({from: accounts[1]});
		const addressHEx3INr = await YRX3RowJxwp.updateReward.call(addressncY99M, {from: accounts[2]});
		const uint256BxPOrD6 = await YRX3RowJxwp.withdraw.call(uintUunnAIV, {from: accounts[4]});

		await expect(YRX3RowJxwp.stake.call(uintCA7cEp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZIU86eZ = await YRX3.new({from: accounts[0]});
		const addressuGhzgfJ = "0x0000000000000000000000000000000000000001"
		const addressq9CiPHJ = accounts[1]
		const addressvyZeExI = await YRX3ZIU86eZ.toPayable.call(addressuGhzgfJ, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3ZIU86eZ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JTVaAOH = await YRX3ZIU86eZ.earned.call(addressq9CiPHJ, {from: accounts[2]});
		await YRX3ZIU86eZ.notifyRewardAmount.call({from: accounts[1]});

		await expect(YRX3ZIU86eZ.toPayable.call(addressuGhzgfJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3bBqqIYC = await YRX3.new({from: accounts[2]});
		const addressIQ3oD6j = accounts[2]
		const addressNZErDYR = accounts[2]
		const uint256aktwW6v = await YRX3bBqqIYC.rewardPerToken.call({from: accounts[1]});
		const addressnkeK6i = await YRX3bBqqIYC.setRewardDistribution.call(addressIQ3oD6j, {from: accounts[2]});
		await YRX3bBqqIYC.notifyRewardAmount.call({from: accounts[3]});
		const addressxpSQfM = await YRX3bBqqIYC.transferOwnership.call(addressNZErDYR, {from: accounts[5]});

		assert.equal(uint256aktwW6v, BigInt("0"))
		await expect(YRX3bBqqIYC.notifyRewardAmount.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WJgo2Ma = await YRX3.new({from: accounts[0]});
		const uintaTkqqBa = BigInt("974")
		await YRX3WJgo2Ma.getReward.call({from: accounts[3]});
		await YRX3WJgo2Ma.checkNextEpoch.call({from: accounts[1]});
		const uint256CNIykeP = await YRX3WJgo2Ma.totalSupply.call({from: accounts[0]});
		const uint256M1fpZDG = await YRX3WJgo2Ma.withdraw.call(uintaTkqqBa, {from: accounts[2]});

		await expect(YRX3WJgo2Ma.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WJgo2Ma = await YRX3.new({from: accounts[0]});
		await YRX3WJgo2Ma.getReward.call({from: accounts[3]});
		await YRX3WJgo2Ma.renounceOwnership.call({from: accounts[0]});
		const uint256clH1mhn = await YRX3WJgo2Ma.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(YRX3WJgo2Ma.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
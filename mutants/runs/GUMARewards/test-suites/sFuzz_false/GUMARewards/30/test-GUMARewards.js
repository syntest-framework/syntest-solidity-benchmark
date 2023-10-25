const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsLsA5Zz8 = await GUMARewards.new({from: accounts[4]});
		const uintZPMawzn = BigInt("317")
		const uint256Cdv3m9Q = await GUMARewardsLsA5Zz8.totalSupply.call({from: accounts[1]});
		const uint256i0wIPkJ = await GUMARewardsLsA5Zz8.stake.call(uintZPMawzn, {from: accounts[4]});
		await GUMARewardsLsA5Zz8.getReward.call({from: accounts[3]});
		const uint256lMoWsSo = await GUMARewardsLsA5Zz8.totalSupply.call({from: accounts[3]});
		await GUMARewardsLsA5Zz8.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256Cdv3m9Q, BigInt("0"))
		await expect(GUMARewardsLsA5Zz8.stake.call(uintZPMawzn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBOBd7nl = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstpXHGb = accounts[0]
		const addressuAdgFjU = accounts[3]
		const address4reYPH = accounts[3]
		const addressCc6Ajhn = accounts[0]
		const addressPygprh = await GUMARewardsBOBd7nl.setGUMA.call(addressuAdgFjU, addresstpXHGb, {from: accounts[1]});
		const uint256ZE7z6H0 = await GUMARewardsBOBd7nl.earned.call(address4reYPH, {from: accounts[0]});
		const uint256WCBpfJA = await GUMARewardsBOBd7nl.totalSupply.call({from: accounts[2]});
		const addresscPcZElH = await GUMARewardsBOBd7nl.setRewardDistribution.call(addressCc6Ajhn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssI9oItr = await GUMARewards.new({from: accounts[0]});
		const uintunX7D5O = BigInt("261")
		await GUMARewardssI9oItr.onlyRewardDistribution.call({from: accounts[0]});
		await GUMARewardssI9oItr.onlyRewardDistribution.call({from: accounts[0]});
		const uint256QmXplc6 = await GUMARewardssI9oItr.stake.call(uintunX7D5O, {from: accounts[0]});

		await expect(GUMARewardssI9oItr.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswD42UQC = await GUMARewards.new({from: accounts[0]});
		const addressDU6H2Mj = accounts[2]
		const addressYgHWwNH = accounts[1]
		const uint256GB9mw9Y = await GUMARewardswD42UQC.earned.call(addressDU6H2Mj, {from: accounts[2]});
		await GUMARewardswD42UQC.renounceOwnership.call({from: accounts[2]});
		const uint256ppTdBW = await GUMARewardswD42UQC.earned.call(addressYgHWwNH, {from: accounts[2]});

		assert.equal(uint256GB9mw9Y, BigInt("0"))
		await expect(GUMARewardswD42UQC.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswD42UQC = await GUMARewards.new({from: accounts[0]});
		const addresspT7pied = accounts[3]
		const addressfs2ZvGz = accounts[1]
		const addressGrCR9kh = "0x0000000000000000000000000000000000000001"
		const uint256GB9mw9Y = await GUMARewardswD42UQC.earned.call(addresspT7pied, {from: accounts[2]});
		await GUMARewardswD42UQC.renounceOwnership.call({from: accounts[0]});
		await GUMARewardswD42UQC.renounceOwnership.call({from: accounts[2]});
		const booliygJw2Q = await GUMARewardswD42UQC.isOwner.call({from: accounts[5]});
		const uint256ppTdBW = await GUMARewardswD42UQC.earned.call(addressfs2ZvGz, {from: accounts[2]});
		const uint256UIb2loF = await GUMARewardswD42UQC.balanceOf.call(addressGrCR9kh, {from: accounts[4]});

		assert.equal(uint256GB9mw9Y, BigInt("0"))
		await expect(GUMARewardswD42UQC.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsHEmstvc = await GUMARewards.new({from: accounts[0]});
		const addressb4cWg9 = accounts[4]
		const addressHV7DWyF = accounts[3]
		const addressfr532H = accounts[4]
		const addressBNLNTho = accounts[2]
		const uint256BJtLZH9 = await GUMARewardsHEmstvc.balanceOf.call(addressb4cWg9, {from: accounts[2]});
		const addressZkLyyXE = await GUMARewardsHEmstvc.setGUMA.call(addressfr532H, addressHV7DWyF, {from: accounts[3]});
		const boolipm4QfJ = await GUMARewardsHEmstvc.isOwner.call({from: accounts[1]});
		const uint256VbsnC9c = await GUMARewardsHEmstvc.balanceOf.call(addressBNLNTho, {from: accounts[1]});

		assert.equal(uint256BJtLZH9, BigInt("0"))
		await expect(GUMARewardsHEmstvc.setGUMA.call(addressfr532H, addressHV7DWyF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswD42UQC = await GUMARewards.new({from: accounts[0]});
		const addressBnUptir = accounts[2]
		const uint256GB9mw9Y = await GUMARewardswD42UQC.earned.call(addressBnUptir, {from: accounts[2]});
		const addressR0RnInr = await GUMARewardswD42UQC.owner.call({from: accounts[2]});

		assert.equal(addressR0RnInr, 0x1c178fa83B47853353628f5095A0AF2d9386596C)
		assert.equal(uint256GB9mw9Y, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsHEmstvc = await GUMARewards.new({from: accounts[0]});
		const addresslNFCRtY = accounts[4]
		const addressK4x7yY = accounts[4]
		const uint256BJtLZH9 = await GUMARewardsHEmstvc.balanceOf.call(addresslNFCRtY, {from: accounts[2]});
		const addressHCzyPin = await GUMARewardsHEmstvc.transferOwnership.call(addressK4x7yY, {from: accounts[0]});

		assert.equal(uint256BJtLZH9, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsHEmstvc = await GUMARewards.new({from: accounts[0]});
		const addressgbzHj0Q = accounts[4]
		const uint256BJtLZH9 = await GUMARewardsHEmstvc.balanceOf.call(addressgbzHj0Q, {from: accounts[2]});
		await GUMARewardsHEmstvc.getReward.call({from: accounts[4]});

		assert.equal(uint256BJtLZH9, BigInt("0"))
		await expect(GUMARewardsHEmstvc.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLCdJrYw = await GUMARewards.new({from: accounts[1]});
		const addresssooWwzj = accounts[1]
		const addressEAuxRnh = accounts[1]
		const addressrUDU287 = "0x0000000000000000000000000000000000000001"
		await GUMARewardsLCdJrYw.getReward.call({from: accounts[3]});
		const addressohAgLF = await GUMARewardsLCdJrYw.setRewardDistribution.call(addresssooWwzj, {from: accounts[1]});
		const uint256o7aZ97 = await GUMARewardsLCdJrYw.totalSupply.call({from: accounts[0]});
		const addressHyrCIJ5 = await GUMARewardsLCdJrYw.setGUMA.call(addressrUDU287, addressEAuxRnh, {from: accounts[1]});

		await expect(GUMARewardsLCdJrYw.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
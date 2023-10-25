const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3vZK8Aij = await YRX3.new({from: accounts[2]});
		const uintZzHkJKw = BigInt("1129")
		const addressP684Grr = accounts[2]
//		const uint256iD5YMpX = await YRX3vZK8Aij.withdraw.call(uintZzHkJKw, {from: accounts[0]});
//		const uint256oqHNEbi = await YRX3vZK8Aij.lastTimeRewardApplicable.call({from: accounts[2]});
//		const address9ftdS5 = await YRX3vZK8Aij.transferOwnership.call(addressP684Grr, {from: accounts[2]});
//		await YRX3vZK8Aij.checkStart.call({from: accounts[3]});

		await expect(YRX3vZK8Aij.withdraw.call(uintZzHkJKw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xXEkzHT = await YRX3.new({from: accounts[1]});
		const addresswg2y4Yu = accounts[1]
		const uint256yvI0DUu = await YRX3xXEkzHT.lastTimeRewardApplicable.call({from: accounts[0]});
//		await YRX3xXEkzHT.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256xZf3UUy = await YRX3xXEkzHT.totalSupply.call({from: accounts[0]});
//		const uint256yVcgkux = await YRX3xXEkzHT.totalSupply.call({from: accounts[3]});
//		const uint256iXMRfzs = await YRX3xXEkzHT.balanceOf.call(addresswg2y4Yu, {from: accounts[0]});

		assert.equal(uint256yvI0DUu, BigInt("0"))
		await expect(YRX3xXEkzHT.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const uintgKdHE4j = BigInt("25")
		const boolHP9nuzT = await YRX3Z5NHLk.isOwner.call({from: accounts[0]});
//		await YRX3Z5NHLk.getReward.call({from: accounts[2]});
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uintgKdHE4j, {from: accounts[2]});
//		await YRX3Z5NHLk.getReward.call({from: accounts[0]});

		assert.equal(boolHP9nuzT, false)
		await expect(YRX3Z5NHLk.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Bse57bL = await YRX3.new({from: accounts[4]});
		const addressF6cbO5 = accounts[5]
		const addressJ5z6FOu = accounts[1]
		const uintwCyxDa = BigInt("1243")
		const boolpGbcFHV = await YRX3Bse57bL.isOwner.call({from: accounts[5]});
//		await YRX3Bse57bL.renounceOwnership.call({from: accounts[4]});
//		const addressNQ8sPJJ = await YRX3Bse57bL.toPayable.call(addressF6cbO5, {from: accounts[0]});
//		const addressxCBJCVZ = await YRX3Bse57bL.transferOwnership.call(addressJ5z6FOu, {from: accounts[1]});
//		const uint256a9eQZAB = await YRX3Bse57bL.stake.call(uintwCyxDa, {from: accounts[3]});

		assert.equal(boolpGbcFHV, false)
		await expect(YRX3Bse57bL.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vKMRdH9 = await YRX3.new({from: accounts[2]});
		const addressJmlu4Fg = accounts[1]
		const addressa8CctMW = accounts[2]
//		await YRX3vKMRdH9.renounceOwnership.call({from: accounts[3]});
//		const addressmVnBRz9 = await YRX3vKMRdH9.emergencyDrain.call(addressJmlu4Fg, {from: accounts[1]});
//		await YRX3vKMRdH9.getReward.call({from: accounts[2]});
//		await YRX3vKMRdH9.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressPYUVweg = await YRX3vKMRdH9.setRewardDistribution.call(addressa8CctMW, {from: accounts[3]});

		await expect(YRX3vKMRdH9.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vZK8Aij = await YRX3.new({from: accounts[2]});
		const address2cB42S = accounts[2]
		const uint256oqHNEbi = await YRX3vZK8Aij.lastTimeRewardApplicable.call({from: accounts[2]});
		const address9ftdS5 = await YRX3vZK8Aij.transferOwnership.call(address2cB42S, {from: accounts[2]});
//		await YRX3vZK8Aij.checkStart.call({from: accounts[3]});

		assert.equal(uint256oqHNEbi, BigInt("0"))
		await expect(YRX3vZK8Aij.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const addressK6bXjyP = accounts[2]
		const uintvbYzA8 = BigInt("25")
		const boolHP9nuzT = await YRX3Z5NHLk.isOwner.call({from: accounts[0]});
		const addresse40tPOr = await YRX3Z5NHLk.owner.call({from: accounts[3]});
//		await YRX3Z5NHLk.getReward.call({from: accounts[2]});
//		const addresskYJka4Z = await YRX3Z5NHLk.updateReward.call(addressK6bXjyP, {from: accounts[3]});
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uintvbYzA8, {from: accounts[2]});

		assert.equal(addresse40tPOr, 0xD2B85005651F00e976621e01A5F6519143C11DF7)
		assert.equal(boolHP9nuzT, false)
		await expect(YRX3Z5NHLk.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const addressBJRolhB = accounts[1]
		const uintXxjQxLh = BigInt("25")
		const bool6MLN66 = await YRX3Z5NHLk.isOwner.call({from: accounts[5]});
//		const addressRc7cPHt = await YRX3Z5NHLk.emergencyDrain.call(addressBJRolhB, {from: accounts[4]});
//		const boolHP9nuzT = await YRX3Z5NHLk.isOwner.call({from: accounts[0]});
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uintXxjQxLh, {from: accounts[2]});

		assert.equal(bool6MLN66, false)
		await expect(YRX3Z5NHLk.emergencyDrain.call(addressBJRolhB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const addressIiIokA = accounts[3]
		const uinttS3adls = BigInt("15")
		const addressZT8FxPz = await YRX3Z5NHLk.setRewardDistribution.call(addressIiIokA, {from: accounts[3]});
		const boolHP9nuzT = await YRX3Z5NHLk.isOwner.call({from: accounts[0]});
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uinttS3adls, {from: accounts[2]});

		assert.equal(boolHP9nuzT, false)
		await expect(YRX3Z5NHLk.stake.call(uinttS3adls, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const uintfQA2Viq = BigInt("25")
		const boolHP9nuzT = await YRX3Z5NHLk.isOwner.call({from: accounts[0]});
//		await YRX3Z5NHLk.exit.call({from: accounts[1]});
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uintfQA2Viq, {from: accounts[2]});

		assert.equal(boolHP9nuzT, false)
		await expect(YRX3Z5NHLk.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Z5NHLk = await YRX3.new({from: accounts[3]});
		const uintWWGgFYn = BigInt("0")
		const uintIWJRLLL = BigInt("952")
//		const uint256J389tRg = await YRX3Z5NHLk.stake.call(uintWWGgFYn, {from: accounts[2]});
//		const uint256REhVyUe = await YRX3Z5NHLk.withdraw.call(uintIWJRLLL, {from: accounts[3]});
//		await YRX3Z5NHLk.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3Z5NHLk.stake.call(uintWWGgFYn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tCyjuk7 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		await YRX3tCyjuk7.exit.call({from: accounts[4]});
		await YRX3tCyjuk7.checkNextEpoch.call({from: accounts[0]});
	});
})
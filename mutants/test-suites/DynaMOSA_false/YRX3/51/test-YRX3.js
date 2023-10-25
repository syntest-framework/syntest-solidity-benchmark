const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3bi83qvR = await YRX3.new({from: accounts[0]});
		const addressIXia9QU = accounts[3]
		const uintXOahh1z = BigInt("606")
		const addressGmY2TG = accounts[3]
//		const addressgsQ4YrK = await YRX3bi83qvR.toPayable.call(addressIXia9QU, {from: accounts[2]});
//		const uint256IknRJo1 = await YRX3bi83qvR.stake.call(uintXOahh1z, {from: accounts[3]});
//		const addressQCG9zzH = await YRX3bi83qvR.setRewardDistribution.call(addressGmY2TG, {from: accounts[3]});

		await expect(YRX3bi83qvR.toPayable.call(addressIXia9QU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Szg9rME = await YRX3.new({from: accounts[0]});
		const addressy0XnSfR = await YRX3Szg9rME.owner.call({from: accounts[1]});
//		await YRX3Szg9rME.checkNextEpoch.call({from: accounts[2]});
//		await YRX3Szg9rME.notifyRewardAmount.call({from: accounts[3]});

		assert.equal(addressy0XnSfR, 0x7202DC149A5e4684D7bf17343f98e7Fa559886c4)
		await expect(YRX3Szg9rME.checkNextEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NyYlpQw = await YRX3.new({from: accounts[3]});
		const uintr4WLBYg = BigInt("1646")
		const addressgnpeICM = accounts[4]
		const addressuk99OK1 = accounts[4]
		const uint256cBPPRhB = await YRX3NyYlpQw.totalSupply.call({from: accounts[5]});
//		const uint256KFdreXv = await YRX3NyYlpQw.stake.call(uintr4WLBYg, {from: accounts[1]});
//		const addressTTORjkV = await YRX3NyYlpQw.emergencyDrain.call(addressgnpeICM, {from: accounts[4]});
//		const addressnlNwQL = await YRX3NyYlpQw.setRewardDistribution.call(addressuk99OK1, {from: accounts[1]});

		assert.equal(uint256cBPPRhB, BigInt("0"))
		await expect(YRX3NyYlpQw.stake.call(uintr4WLBYg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3kwpEoYs = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressswSMOnN = accounts[3]
		const uint256GNjRSd7 = await YRX3kwpEoYs.lastTimeRewardApplicable.call({from: accounts[5]});
		await YRX3kwpEoYs.getReward.call({from: accounts[4]});
		const addressltZ7qPC = await YRX3kwpEoYs.toPayable.call(addressswSMOnN, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3nvsfFXX = await YRX3.new({from: accounts[4]});
//		await YRX3nvsfFXX.exit.call({from: accounts[0]});
//		await YRX3nvsfFXX.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3nvsfFXX.notifyRewardAmount.call({from: accounts[3]});
//		await YRX3nvsfFXX.getReward.call({from: accounts[2]});
//		await YRX3nvsfFXX.checkNextEpoch.call({from: accounts[4]});

		await expect(YRX3nvsfFXX.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3y5frNIF = await YRX3.new({from: accounts[3]});
		const addressHYPNXu1 = accounts[5]
//		await YRX3y5frNIF.renounceOwnership.call({from: accounts[2]});
//		const uint256lhscAq1 = await YRX3y5frNIF.balanceOf.call(addressHYPNXu1, {from: accounts[5]});
//		await YRX3y5frNIF.renounceOwnership.call({from: accounts[3]});

		await expect(YRX3y5frNIF.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xCAkJhU = await YRX3.new({from: accounts[2]});
		const uintcmvI7Kd = BigInt("1407")
		const uintwHMRiuG = BigInt("1038")
		const addressJyTEYWJ = accounts[3]
		const boolBWT6VR6 = await YRX3xCAkJhU.isOwner.call({from: accounts[0]});
//		const uint256Q9G98kI = await YRX3xCAkJhU.withdraw.call(uintcmvI7Kd, {from: accounts[2]});
//		await YRX3xCAkJhU.onlyRewardDistribution.call({from: accounts[5]});
//		const uint256FmvYH0 = await YRX3xCAkJhU.withdraw.call(uintwHMRiuG, {from: accounts[0]});
//		const addressyi94uzS = await YRX3xCAkJhU.updateReward.call(addressJyTEYWJ, {from: accounts[1]});

		assert.equal(boolBWT6VR6, false)
		await expect(YRX3xCAkJhU.withdraw.call(uintcmvI7Kd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rcwsJrz = await YRX3.new({from: accounts[4]});
		const uintFzMnC51 = BigInt("314")
		const uintxSxG0lx = BigInt("2043")
		const uintARcYEkJ = BigInt("1454")
//		await YRX3rcwsJrz.getReward.call({from: accounts[1]});
//		const uint256CxVt0tz = await YRX3rcwsJrz.totalSupply.call({from: accounts[1]});
//		const uint256vWXWzND = await YRX3rcwsJrz.stake.call(uintFzMnC51, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ch2gP9a = await YRX3rcwsJrz.stake.call(uintxSxG0lx, {from: accounts[2]});
//		const uint256wfGc6ZV = await YRX3rcwsJrz.stake.call(uintARcYEkJ, {from: accounts[4]});

		await expect(YRX3rcwsJrz.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NyYlpQw = await YRX3.new({from: accounts[3]});
		const addressgFDNAqm = accounts[4]
		const addressWkJxLHh = accounts[4]
		const uint256cBPPRhB = await YRX3NyYlpQw.totalSupply.call({from: accounts[5]});
//		const addressTTORjkV = await YRX3NyYlpQw.emergencyDrain.call(addressgFDNAqm, {from: accounts[4]});
//		const uint256R4gthmL = await YRX3NyYlpQw.totalSupply.call({from: accounts[2]});
//		const addressnlNwQL = await YRX3NyYlpQw.setRewardDistribution.call(addressWkJxLHh, {from: accounts[1]});

		assert.equal(uint256cBPPRhB, BigInt("0"))
		await expect(YRX3NyYlpQw.emergencyDrain.call(addressgFDNAqm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rcwsJrz = await YRX3.new({from: accounts[4]});
		const uintI7upkfu = BigInt("295")
		const uinthB3OHWq = BigInt("453")
		const uintpATjNFR = BigInt("1454")
//		await YRX3rcwsJrz.renounceOwnership.call({from: accounts[4]});
//		const uint256vWXWzND = await YRX3rcwsJrz.stake.call(uintI7upkfu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iExUV39 = await YRX3rcwsJrz.stake.call(uinthB3OHWq, {from: accounts[5]});
//		const uint256wfGc6ZV = await YRX3rcwsJrz.stake.call(uintpATjNFR, {from: accounts[4]});

		await expect(YRX3rcwsJrz.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3HceNlxg = await YRX3.new({from: accounts[3]});
		const uintaoOmkzR = BigInt("0")
//		const uint256DTl1hh6 = await YRX3HceNlxg.stake.call(uintaoOmkzR, {from: accounts[3]});

		await expect(YRX3HceNlxg.stake.call(uintaoOmkzR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rcwsJrz = await YRX3.new({from: accounts[4]});
		const addressT4BDNL9 = accounts[2]
		const addressHj4Hp8R = "0x0000000000000000000000000000000000000001"
//		await YRX3rcwsJrz.getReward.call({from: accounts[1]});
//		const addressFqcDV7V = await YRX3rcwsJrz.transferOwnership.call(addressT4BDNL9, {from: accounts[4]});
//		await YRX3rcwsJrz.exit.call({from: accounts[2]});
//		const addresskG7WKdC = await YRX3rcwsJrz.toPayable.call(addressHj4Hp8R, {from: accounts[1]});

		await expect(YRX3rcwsJrz.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rcwsJrz = await YRX3.new({from: accounts[4]});
		const addresskA9vjeY = accounts[2]
		const addressNmoIzr = await YRX3rcwsJrz.setRewardDistribution.call(addresskA9vjeY, {from: accounts[4]});
//		await YRX3rcwsJrz.getReward.call({from: accounts[1]});

		await expect(YRX3rcwsJrz.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
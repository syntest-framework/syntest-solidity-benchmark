const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressVwqaMw = "0x0000000000000000000000000000000000000001"
		const addressrvdekI7 = "0x0000000000000000000000000000000000000001"
		const uintL581dbc = BigInt("180")
		const uintsYdjPh5 = BigInt("22")
		const MisesLegacyPoollQEyBOR = await MisesLegacyPool.new(addressVwqaMw, addressrvdekI7, uintL581dbc, uintsYdjPh5, {from: accounts[4]});
		const uintkwxdI0l = BigInt("1627")
		const uint256ofdyubq = await MisesLegacyPoollQEyBOR.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256oOCoEOk = await MisesLegacyPoollQEyBOR.stake.call(uintkwxdI0l, {from: accounts[2]});
		await MisesLegacyPoollQEyBOR.exit.call({from: accounts[5]});
		const uint256IxHur21 = await MisesLegacyPoollQEyBOR.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256ofdyubq, BigInt("0"))
		await expect(MisesLegacyPoollQEyBOR.stake.call(uintkwxdI0l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUiWZI3f = accounts[1]
		const addressWlgKqXp = accounts[2]
		const uintth9cUVI = BigInt("1935")
		const uinteb3GJmg = BigInt("395")
		const MisesLegacyPoolhlbr2Uo = await MisesLegacyPool.new(addressUiWZI3f, addressWlgKqXp, uintth9cUVI, uinteb3GJmg, {from: "0x0000000000000000000000000000000000000001"});
		const uintDsfSrA = BigInt("357")
		const uint256szf0TP = await MisesLegacyPoolhlbr2Uo.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256ZchNHW = await MisesLegacyPoolhlbr2Uo.rewardPerToken.call({from: accounts[4]});
		const uint256C7leEyT = await MisesLegacyPoolhlbr2Uo.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Dc6JeY = await MisesLegacyPoolhlbr2Uo.withdraw.call(uintDsfSrA, {from: accounts[3]});
		await MisesLegacyPoolhlbr2Uo.exit.call({from: accounts[0]});
		await MisesLegacyPoolhlbr2Uo.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MisesLegacyPool', async () => {
		const addressIUG5PH6 = accounts[0]
		const addressgoAZYp = accounts[0]
		const uintXUQMS1 = BigInt("2013")
		const uintVI5cl6u = BigInt("796")
		const MisesLegacyPoolqbQCB8f = await MisesLegacyPool.new(addressIUG5PH6, addressgoAZYp, uintXUQMS1, uintVI5cl6u, {from: accounts[2]});
		const uintq2boPny = BigInt("548")
		const addresszg7PrrZ = accounts[4]
		const addressWOVrHIy = accounts[4]
		const uintzMF9ZWj = BigInt("1779")
		await MisesLegacyPoolqbQCB8f.checkStart.call({from: accounts[4]});
		const uint256EVXbgw8 = await MisesLegacyPoolqbQCB8f.notifyRewardAmount.call(uintq2boPny, {from: accounts[0]});
		const uint256DpWQRd = await MisesLegacyPoolqbQCB8f.earned.call(addresszg7PrrZ, {from: accounts[1]});
		const uint256Zs0wVSG = await MisesLegacyPoolqbQCB8f.earned.call(addressWOVrHIy, {from: accounts[5]});
		const uint256f5KWBw = await MisesLegacyPoolqbQCB8f.withdraw.call(uintzMF9ZWj, {from: accounts[0]});
		const uint256imopUqS = await MisesLegacyPoolqbQCB8f.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(MisesLegacyPoolqbQCB8f.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address5ZWELM = "0x0000000000000000000000000000000000000001"
		const addressnpoSdJ = accounts[2]
		const uintiYX6so = BigInt("1941")
		const uint4ndX4j = BigInt("937")
		const MisesLegacyPoolJQFt4dy = await MisesLegacyPool.new(address5ZWELM, addressnpoSdJ, uintiYX6so, uint4ndX4j, {from: accounts[2]});
		const uintM5GTXKM = BigInt("686")
		const uint256Cnnewtz = await MisesLegacyPoolJQFt4dy.rewardPerToken.call({from: accounts[0]});
		const uint256vGZ7CtJ = await MisesLegacyPoolJQFt4dy.withdraw.call(uintM5GTXKM, {from: accounts[0]});

		assert.equal(uint256Cnnewtz, BigInt("0"))
		await expect(MisesLegacyPoolJQFt4dy.withdraw.call(uintM5GTXKM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressyegKYv = accounts[2]
		const addressvYXlKvX = accounts[4]
		const uintpbyZWzq = BigInt("1568")
		const uintbgNkxcE = BigInt("1083")
		const MisesLegacyPoolxaDW8IZ = await MisesLegacyPool.new(addressyegKYv, addressvYXlKvX, uintpbyZWzq, uintbgNkxcE, {from: accounts[3]});
		const addressD0MAhBk = accounts[5]
		const addressggjc58 = accounts[1]
		const uint256d2lid9O = await MisesLegacyPoolxaDW8IZ.rewardPerToken.call({from: accounts[0]});
		await MisesLegacyPoolxaDW8IZ.exit.call({from: accounts[0]});
		const uint256GxCtT8f = await MisesLegacyPoolxaDW8IZ.earned.call(addressD0MAhBk, {from: accounts[4]});
		const addresswqpNWn = await MisesLegacyPoolxaDW8IZ.updateReward.call(addressggjc58, {from: accounts[5]});

		assert.equal(uint256d2lid9O, BigInt("0"))
		await expect(MisesLegacyPoolxaDW8IZ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressBFLw30U = accounts[2]
		const addressi2jXJL = accounts[4]
		const uinty5iNJGt = BigInt("1568")
		const uintFhDTWBp = BigInt("1083")
		const MisesLegacyPoolxaDW8IZ = await MisesLegacyPool.new(addressBFLw30U, addressi2jXJL, uinty5iNJGt, uintFhDTWBp, {from: accounts[3]});
		const uintShuajK = BigInt("154")
		const addressvRiy2Ho = accounts[5]
		const addressHeH2XSc = accounts[2]
		const addressUx0XfLi = accounts[1]
		const uint256d2lid9O = await MisesLegacyPoolxaDW8IZ.rewardPerToken.call({from: accounts[0]});
		const uint256uZrN45s = await MisesLegacyPoolxaDW8IZ.notifyRewardAmount.call(uintShuajK, {from: accounts[0]});
		await MisesLegacyPoolxaDW8IZ.exit.call({from: accounts[0]});
		const uint256GxCtT8f = await MisesLegacyPoolxaDW8IZ.earned.call(addressvRiy2Ho, {from: accounts[4]});
		const uint256FlUCyln = await MisesLegacyPoolxaDW8IZ.earned.call(addressHeH2XSc, {from: accounts[0]});
		const addresswqpNWn = await MisesLegacyPoolxaDW8IZ.updateReward.call(addressUx0XfLi, {from: accounts[5]});

		assert.equal(uint256d2lid9O, BigInt("0"))
		await expect(MisesLegacyPoolxaDW8IZ.notifyRewardAmount.call(uintShuajK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressoDSLxQ = "0x0000000000000000000000000000000000000001"
		const addressBaD1wRi = accounts[2]
		const uintmkFaMHt = BigInt("1941")
		const uintUfkvrlz = BigInt("937")
		const MisesLegacyPoolJQFt4dy = await MisesLegacyPool.new(addressoDSLxQ, addressBaD1wRi, uintmkFaMHt, uintUfkvrlz, {from: accounts[2]});
		const addressYzwvh0 = accounts[0]
		const uintTMaeHX9 = BigInt("686")
		await MisesLegacyPoolJQFt4dy.getReward.call({from: accounts[2]});
		const uint256Cnnewtz = await MisesLegacyPoolJQFt4dy.rewardPerToken.call({from: accounts[0]});
		const uint2561FXkgj = await MisesLegacyPoolJQFt4dy.earned.call(addressYzwvh0, {from: accounts[3]});
		const uint256vGZ7CtJ = await MisesLegacyPoolJQFt4dy.withdraw.call(uintTMaeHX9, {from: accounts[0]});

		await expect(MisesLegacyPoolJQFt4dy.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
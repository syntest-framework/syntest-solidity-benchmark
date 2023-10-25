const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressYIoqF0B = accounts[5]
		const addressJru6EvH = accounts[2]
		const uintGno2SQx = BigInt("1338")
		const uints28qimx = BigInt("728")
		const MisesLegacyPooldMm6W5I = await MisesLegacyPool.new(addressYIoqF0B, addressJru6EvH, uintGno2SQx, uints28qimx, {from: accounts[0]});
		const uintCMSlEIc = BigInt("619")
		const uint256ClyIdwB = await MisesLegacyPooldMm6W5I.rewardPerToken.call({from: accounts[2]});
//		const uint256ut7cCZ7 = await MisesLegacyPooldMm6W5I.stake.call(uintCMSlEIc, {from: accounts[3]});

		assert.equal(uint256ClyIdwB, BigInt("0"))
		await expect(MisesLegacyPooldMm6W5I.stake.call(uintCMSlEIc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressP34JI4c = accounts[3]
		const addresslYk91BW = accounts[1]
		const uintVUPYcV = BigInt("998")
		const uinteh50SGF = BigInt("1050")
		const MisesLegacyPoolIFNDimR = await MisesLegacyPool.new(addressP34JI4c, addresslYk91BW, uintVUPYcV, uinteh50SGF, {from: accounts[0]});
		const addresshrdyHx0 = accounts[0]
		const addressCBzWh3 = accounts[4]
//		await MisesLegacyPoolIFNDimR.getReward.call({from: accounts[3]});
//		await MisesLegacyPoolIFNDimR.exit.call({from: accounts[0]});
//		const addressXUxHgOR = await MisesLegacyPoolIFNDimR.updateReward.call(addresshrdyHx0, {from: accounts[2]});
//		const addresstiXfsJJ = await MisesLegacyPoolIFNDimR.updateReward.call(addressCBzWh3, {from: accounts[0]});

		await expect(MisesLegacyPoolIFNDimR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresscHM2sPE = accounts[5]
		const addresscgV38zz = accounts[3]
		const uintkR3h7pZ = BigInt("2018")
		const uintOUWzoCB = BigInt("757")
		const MisesLegacyPoolDMn5emY = await MisesLegacyPool.new(addresscHM2sPE, addresscgV38zz, uintkR3h7pZ, uintOUWzoCB, {from: accounts[4]});
		const uintvbzhHOL = BigInt("1063")
		const addressVu2qaN2 = accounts[0]
		const uintAniNH8W = BigInt("548")
//		await MisesLegacyPoolDMn5emY.checkStart.call({from: accounts[5]});
//		const uint256sbukC5W = await MisesLegacyPoolDMn5emY.stake.call(uintvbzhHOL, {from: accounts[1]});
//		const uint256PXqmina = await MisesLegacyPoolDMn5emY.earned.call(addressVu2qaN2, {from: accounts[1]});
//		await MisesLegacyPoolDMn5emY.exit.call({from: accounts[3]});
//		await MisesLegacyPoolDMn5emY.checkStart.call({from: accounts[3]});
//		const uint256HgPWpJJ = await MisesLegacyPoolDMn5emY.withdraw.call(uintAniNH8W, {from: accounts[3]});

		await expect(MisesLegacyPoolDMn5emY.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresso1QfNyL = accounts[2]
		const addressnxgTi8 = accounts[5]
		const uintd3hOtUk = BigInt("56")
		const uintz7BCdCw = BigInt("1141")
		const MisesLegacyPoolLv6Rika = await MisesLegacyPool.new(addresso1QfNyL, addressnxgTi8, uintd3hOtUk, uintz7BCdCw, {from: accounts[3]});
		const uintHEUiEr1 = BigInt("1849")
		const addressSRM1S2P = accounts[2]
		const addressYqp1l2L = accounts[2]
//		const uint256QeghwU7 = await MisesLegacyPoolLv6Rika.withdraw.call(uintHEUiEr1, {from: accounts[3]});
//		const uint256l3uTA36 = await MisesLegacyPoolLv6Rika.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolLv6Rika.exit.call({from: accounts[3]});
//		const uint256kxGq9AM = await MisesLegacyPoolLv6Rika.earned.call(addressSRM1S2P, {from: accounts[0]});
//		await MisesLegacyPoolLv6Rika.checkStart.call({from: accounts[5]});
//		const addresseZ644ZL = await MisesLegacyPoolLv6Rika.updateReward.call(addressYqp1l2L, {from: accounts[1]});

		await expect(MisesLegacyPoolLv6Rika.withdraw.call(uintHEUiEr1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressojdjsBg = accounts[2]
		const addressxbuMw2 = accounts[2]
		const uintTQ6pzz = BigInt("970")
		const uintL1GzNHi = BigInt("1096")
		const MisesLegacyPoolKj7gLi4 = await MisesLegacyPool.new(addressojdjsBg, addressxbuMw2, uintTQ6pzz, uintL1GzNHi, {from: accounts[0]});
		const uintXS7MgxI = BigInt("374")
		const uintA3Ureib = BigInt("1668")
//		const uint256AnlMH58 = await MisesLegacyPoolKj7gLi4.notifyRewardAmount.call(uintXS7MgxI, {from: accounts[1]});
//		await MisesLegacyPoolKj7gLi4.getReward.call({from: accounts[0]});
//		await MisesLegacyPoolKj7gLi4.checkStart.call({from: accounts[0]});
//		const uint256Nzcd57b = await MisesLegacyPoolKj7gLi4.stake.call(uintA3Ureib, {from: accounts[2]});

		await expect(MisesLegacyPoolKj7gLi4.notifyRewardAmount.call(uintXS7MgxI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressyT0sVlS = accounts[3]
		const addressb4kWvY0 = accounts[3]
		const uintjl1uNt0 = BigInt("1025")
		const uinttweWvoQ = BigInt("1023")
		const MisesLegacyPoolpMT4E9k = await MisesLegacyPool.new(addressyT0sVlS, addressb4kWvY0, uintjl1uNt0, uinttweWvoQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressuEoPDzH = accounts[0]
		const uintPfY5sz = BigInt("215")
		const uint256DQwK2ES = await MisesLegacyPoolpMT4E9k.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256toBdIbQ = await MisesLegacyPoolpMT4E9k.earned.call(addressuEoPDzH, {from: accounts[2]});
		const uint256O9ugaN9 = await MisesLegacyPoolpMT4E9k.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256CY0r1UM = await MisesLegacyPoolpMT4E9k.withdraw.call(uintPfY5sz, {from: accounts[1]});
	});
})
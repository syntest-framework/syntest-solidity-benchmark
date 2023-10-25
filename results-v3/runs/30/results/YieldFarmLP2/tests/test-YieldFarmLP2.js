const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UaYrxia = await YieldFarmLP2.new({from: accounts[2]});
		const uintfu5Inkr = BigInt("163")
		const uintWg09DK0 = BigInt("722")
		const addressZwiR7zZ = accounts[5]
		const uintxhQgGOO = await YieldFarmLP2UaYrxia.massHarvest.call({from: accounts[1]});
		const uintXrnCvYk = await YieldFarmLP2UaYrxia.getPoolSize.call(uintfu5Inkr, {from: accounts[5]});
		const uintIzn6iCS = await YieldFarmLP2UaYrxia.getEpochStake.call(addressZwiR7zZ, uintWg09DK0, {from: accounts[0]});

		await expect(YieldFarmLP2UaYrxia.massHarvest.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2opUiv8v = await YieldFarmLP2.new({from: accounts[0]});
		const uintpD38iWX = BigInt("1393")
		const uintzROjJtf = BigInt("1577")
		const addressHFAXKXW = accounts[1]
		const uintpTpgRT1 = BigInt("1626")
		const addressU7jf5AK = accounts[1]
		const uintBKGLH0u = BigInt("623")
		const addressAnZMipc = accounts[3]
		const uintQvQGiA = await YieldFarmLP2opUiv8v.getPoolSize.call(uintpD38iWX, {from: accounts[1]});
		const uintFSDzheA = await YieldFarmLP2opUiv8v.getEpochStake.call(addressHFAXKXW, uintzROjJtf, {from: accounts[3]});
		const uintofVqacR = await YieldFarmLP2opUiv8v.getEpochStake.call(addressU7jf5AK, uintpTpgRT1, {from: accounts[0]});
		const uintwb4vvLg = await YieldFarmLP2opUiv8v.harvest.call(uintBKGLH0u, {from: accounts[3]});
		const uintBz8aJE2 = await YieldFarmLP2opUiv8v.claimable.call(addressAnZMipc, {from: accounts[3]});

		await expect(YieldFarmLP2opUiv8v.getPoolSize.call(uintpD38iWX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2x0TwcG4 = await YieldFarmLP2.new({from: accounts[3]});
		const uintdQpWx1A = await YieldFarmLP2x0TwcG4.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintNPJ3luS = await YieldFarmLP2x0TwcG4.massHarvest.call({from: accounts[3]});
		const uintz1Lj5FH = await YieldFarmLP2x0TwcG4.massHarvest.call({from: accounts[2]});

		assert.equal(uintdQpWx1A, BigInt("0"))
		await expect(YieldFarmLP2x0TwcG4.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LSFwAlm = await YieldFarmLP2.new({from: accounts[4]});
		const addressiWRQWAn = accounts[2]
		const addressWt68KZN = accounts[3]
		const uintnOAg4ca = await YieldFarmLP2LSFwAlm.claimable.call(addressiWRQWAn, {from: accounts[3]});
		const uintlP5caza = await YieldFarmLP2LSFwAlm.claimable.call(addressWt68KZN, {from: accounts[5]});

		await expect(YieldFarmLP2LSFwAlm.claimable.call(addressiWRQWAn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2XrPYGi = await YieldFarmLP2.new({from: accounts[1]});
		const uintn5vQsN = BigInt("1925")
		const addressV9en96N = accounts[2]
		const uintBKUYVvL = await YieldFarmLP2XrPYGi.getEpochStake.call(addressV9en96N, uintn5vQsN, {from: "0x0000000000000000000000000000000000000001"});
		const uintrYsPcDb = await YieldFarmLP2XrPYGi.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2XrPYGi.getEpochStake.call(addressV9en96N, uintn5vQsN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LSFwAlm = await YieldFarmLP2.new({from: accounts[4]});
		const uintReM09Vl = BigInt("394")
		const uintxrVW2g6 = BigInt("447")
		const addressY8qWvwc = accounts[4]
		const addressLtQ9DeR = accounts[2]
		const addressrmQMxgL = accounts[3]
		const uintfzKDfQq = await YieldFarmLP2LSFwAlm.harvest.call(uintReM09Vl, {from: accounts[3]});
		const uintEiyRgkN = await YieldFarmLP2LSFwAlm.getEpochStake.call(addressY8qWvwc, uintxrVW2g6, {from: accounts[4]});
		const uintnOAg4ca = await YieldFarmLP2LSFwAlm.claimable.call(addressLtQ9DeR, {from: accounts[3]});
		const uintlP5caza = await YieldFarmLP2LSFwAlm.claimable.call(addressrmQMxgL, {from: accounts[5]});

		await expect(YieldFarmLP2LSFwAlm.harvest.call(uintReM09Vl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LSFwAlm = await YieldFarmLP2.new({from: accounts[4]});
		const uintV2AZmH = BigInt("702")
		const addressuMBjc9 = accounts[4]
		const addresszQ5yKaH = accounts[2]
		const uintUIs0n2 = await YieldFarmLP2LSFwAlm.getCurrentEpoch.call({from: accounts[1]});
		const uintpoLQJvK = await YieldFarmLP2LSFwAlm.getEpochStake.call(addressuMBjc9, uintV2AZmH, {from: accounts[4]});
		const uintnOAg4ca = await YieldFarmLP2LSFwAlm.claimable.call(addresszQ5yKaH, {from: accounts[3]});

		await expect(YieldFarmLP2LSFwAlm.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LSFwAlm = await YieldFarmLP2.new({from: accounts[4]});
		const addressiApQ9q = accounts[2]
		const addressiYZSwjM = accounts[3]
		const addressSnj0lRi = accounts[3]
		const addresseA9dK3j = accounts[0]
		const addressWTw9xN8 = accounts[2]
		const addresseuEinr8 = await YieldFarmLP2LSFwAlm.initialize.call(addresseA9dK3j, addressSnj0lRi, addressiYZSwjM, addressiApQ9q, {from: accounts[1]});
		const uintnOAg4ca = await YieldFarmLP2LSFwAlm.claimable.call(addressWTw9xN8, {from: accounts[3]});

		await expect(YieldFarmLP2LSFwAlm.initialize.call(addresseA9dK3j, addressSnj0lRi, addressiYZSwjM, addressiApQ9q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jb2mZxI = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssYGq7W5 = accounts[1]
		const uintPdLk3af = BigInt("712")
		const uintzQBskOA = BigInt("1914")
		const addressJubie47 = accounts[3]
		const uintsf4Z8nY = await YieldFarmLP2jb2mZxI.claimable.call(addresssYGq7W5, {from: accounts[2]});
		const uintDqceBSd = await YieldFarmLP2jb2mZxI.getPoolSize.call(uintPdLk3af, {from: accounts[2]});
		const uintLEdbti = await YieldFarmLP2jb2mZxI.getEpochStake.call(addressJubie47, uintzQBskOA, {from: accounts[2]});
	});
})
const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresswKkGwad = accounts[5]
		const addressJHZr1Pf = accounts[3]
		const uintO6nVFsi = BigInt("1289")
		const uintDcdIFbh = BigInt("1182")
		const MisesLegacyPoolYljpA2h = await MisesLegacyPool.new(addresswKkGwad, addressJHZr1Pf, uintO6nVFsi, uintDcdIFbh, {from: accounts[2]});
		const uintAWzTzlB = BigInt("639")
		const uint256cYr97td = await MisesLegacyPoolYljpA2h.lastTimeRewardApplicable.call({from: accounts[0]});
//		await MisesLegacyPoolYljpA2h.exit.call({from: accounts[3]});
//		const uint256jhsTJCz = await MisesLegacyPoolYljpA2h.stake.call(uintAWzTzlB, {from: accounts[3]});
//		const uint256gmfiOmB = await MisesLegacyPoolYljpA2h.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MisesLegacyPoolYljpA2h.getReward.call({from: accounts[0]});

		assert.equal(uint256cYr97td, BigInt("0"))
		await expect(MisesLegacyPoolYljpA2h.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressac5zr9p = "0x0000000000000000000000000000000000000001"
		const addressdtFbgq = accounts[4]
		const uintDQXUrF = BigInt("1687")
		const uintbJlfgeA = BigInt("254")
		const MisesLegacyPoolmJld0ov = await MisesLegacyPool.new(addressac5zr9p, addressdtFbgq, uintDQXUrF, uintbJlfgeA, {from: accounts[4]});
		const uintMVD8qJ4 = BigInt("299")
		const uintfLEsADp = BigInt("903")
		const addresseXFiytq = accounts[0]
//		const uint256XOVoItR = await MisesLegacyPoolmJld0ov.stake.call(uintMVD8qJ4, {from: accounts[3]});
//		const uint256EGXWcxV = await MisesLegacyPoolmJld0ov.stake.call(uintfLEsADp, {from: accounts[0]});
//		const uint256r3NwZl = await MisesLegacyPoolmJld0ov.earned.call(addresseXFiytq, {from: accounts[2]});

		await expect(MisesLegacyPoolmJld0ov.stake.call(uintMVD8qJ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszoLQDIt = accounts[0]
		const addressV5xgkvr = accounts[2]
		const uintxYS5Ymj = BigInt("1110")
		const uintTz4zXDN = BigInt("382")
		const MisesLegacyPoolgRvfGER = await MisesLegacyPool.new(addresszoLQDIt, addressV5xgkvr, uintxYS5Ymj, uintTz4zXDN, {from: accounts[2]});
		const uintW5juUhX = BigInt("1402")
		const addressga8usLi = accounts[1]
//		await MisesLegacyPoolgRvfGER.getReward.call({from: accounts[1]});
//		const uint256YUJ50kq = await MisesLegacyPoolgRvfGER.withdraw.call(uintW5juUhX, {from: accounts[3]});
//		const addressHw7qQYb = await MisesLegacyPoolgRvfGER.updateReward.call(addressga8usLi, {from: accounts[3]});

		await expect(MisesLegacyPoolgRvfGER.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressfwOTVKI = accounts[2]
		const addressVvP3ust = accounts[5]
		const uintWBDkMNy = BigInt("1575")
		const uintVLg7vzc = BigInt("1960")
		const MisesLegacyPoolANFwzVn = await MisesLegacyPool.new(addressfwOTVKI, addressVvP3ust, uintWBDkMNy, uintVLg7vzc, {from: accounts[3]});
		const addresse4C9TVY = accounts[3]
		const uinta4P1fZw = BigInt("1066")
		const uintpsh3osA = BigInt("1016")
//		const addressBn6lUef = await MisesLegacyPoolANFwzVn.updateReward.call(addresse4C9TVY, {from: accounts[2]});
//		const uint256EYNuiTB = await MisesLegacyPoolANFwzVn.notifyRewardAmount.call(uinta4P1fZw, {from: accounts[2]});
//		const uint256W3X4pLk = await MisesLegacyPoolANFwzVn.withdraw.call(uintpsh3osA, {from: accounts[5]});
//		const uint256x6x4wET = await MisesLegacyPoolANFwzVn.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(MisesLegacyPoolANFwzVn.updateReward.call(addresse4C9TVY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressPss08gW = "0x0000000000000000000000000000000000000001"
		const addressupcQa6y = accounts[3]
		const uintqwprSlj = BigInt("911")
		const uintDvEfWVw = BigInt("390")
		const MisesLegacyPoolvPt12U0 = await MisesLegacyPool.new(addressPss08gW, addressupcQa6y, uintqwprSlj, uintDvEfWVw, {from: accounts[0]});
		const addressZPn36LB = accounts[0]
		const uintNrTaJ8e = BigInt("1413")
		const uintF76I8Cc = BigInt("488")
		const uint256qHWyZC = await MisesLegacyPoolvPt12U0.earned.call(addressZPn36LB, {from: accounts[5]});
//		await MisesLegacyPoolvPt12U0.getReward.call({from: accounts[2]});
//		const uint2566ax63a = await MisesLegacyPoolvPt12U0.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256IFXhokj = await MisesLegacyPoolvPt12U0.notifyRewardAmount.call(uintNrTaJ8e, {from: accounts[0]});
//		const uint256L4tkSiH = await MisesLegacyPoolvPt12U0.stake.call(uintF76I8Cc, {from: accounts[2]});

		assert.equal(uint256qHWyZC, BigInt("0"))
		await expect(MisesLegacyPoolvPt12U0.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressZE8oiIu = accounts[5]
		const addresslU0na0C = accounts[3]
		const uintfaSUcg5 = BigInt("784")
		const uintrX65RZx = BigInt("838")
		const MisesLegacyPoolHjnOkXn = await MisesLegacyPool.new(addressZE8oiIu, addresslU0na0C, uintfaSUcg5, uintrX65RZx, {from: "0x0000000000000000000000000000000000000001"});
		const uintSch4Dum = BigInt("1526")
		const uintXhKcPHE = BigInt("44")
		const addressqVgb4xi = accounts[1]
		const uint256gbSuUDD = await MisesLegacyPoolHjnOkXn.notifyRewardAmount.call(uintSch4Dum, {from: accounts[0]});
		const uint256t4QgGtl = await MisesLegacyPoolHjnOkXn.stake.call(uintXhKcPHE, {from: accounts[3]});
		const addressHGF3tZ = await MisesLegacyPoolHjnOkXn.updateReward.call(addressqVgb4xi, {from: accounts[3]});
		await MisesLegacyPoolHjnOkXn.checkStart.call({from: accounts[5]});
	});
})
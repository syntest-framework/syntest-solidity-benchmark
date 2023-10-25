const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressa4Ha3y = accounts[3]
		const addressvuhrrc9 = accounts[4]
		const uintCtbYgV = BigInt("741")
		const uintgm5zEwc = BigInt("1004")
		const MisesLegacyPoolBLyo5hA = await MisesLegacyPool.new(addressa4Ha3y, addressvuhrrc9, uintCtbYgV, uintgm5zEwc, {from: accounts[3]});
		const uintPYZJMUB = BigInt("165")
		const uints3G20hP = BigInt("549")
		const uintaGREphz = BigInt("1085")
//		const uint256lfh78Qe = await MisesLegacyPoolBLyo5hA.stake.call(uintPYZJMUB, {from: accounts[0]});
//		const uint256vfGDas0 = await MisesLegacyPoolBLyo5hA.stake.call(uints3G20hP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RTA0qNV = await MisesLegacyPoolBLyo5hA.stake.call(uintaGREphz, {from: accounts[5]});

		await expect(MisesLegacyPoolBLyo5hA.stake.call(uintPYZJMUB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQohS2Am = accounts[1]
		const addressUCZb0w0 = accounts[1]
		const uintzws7cGg = BigInt("1112")
		const uintv9lklRd = BigInt("937")
		const MisesLegacyPoolDW32vc5 = await MisesLegacyPool.new(addressQohS2Am, addressUCZb0w0, uintzws7cGg, uintv9lklRd, {from: accounts[2]});
		const addressfhgarab = accounts[5]
//		await MisesLegacyPoolDW32vc5.exit.call({from: accounts[3]});
//		const addressYGAyCgb = await MisesLegacyPoolDW32vc5.updateReward.call(addressfhgarab, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolDW32vc5.exit.call({from: accounts[1]});
//		await MisesLegacyPoolDW32vc5.getReward.call({from: accounts[1]});

		await expect(MisesLegacyPoolDW32vc5.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressvia5EC = "0x0000000000000000000000000000000000000001"
		const addressjvQYl7l = accounts[2]
		const uintOx8EZMD = BigInt("1497")
		const uintcJbFYM8 = BigInt("566")
		const MisesLegacyPoolTGvwSyd = await MisesLegacyPool.new(addressvia5EC, addressjvQYl7l, uintOx8EZMD, uintcJbFYM8, {from: "0x0000000000000000000000000000000000000001"});
		const uintI2nMdec = BigInt("1020")
		const uint256YJOIgq = await MisesLegacyPoolTGvwSyd.notifyRewardAmount.call(uintI2nMdec, {from: accounts[4]});
		await MisesLegacyPoolTGvwSyd.exit.call({from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressy9jYYS = accounts[2]
		const addressW8LvufD = accounts[0]
		const uintxegrqhL = BigInt("745")
		const uintK3WEYGd = BigInt("1297")
		const MisesLegacyPoolWkwg9Ez = await MisesLegacyPool.new(addressy9jYYS, addressW8LvufD, uintxegrqhL, uintK3WEYGd, {from: accounts[0]});
		const addressSxUR5AZ = accounts[5]
		const addressjj9gmaV = accounts[2]
		const uint2568RCJda = await MisesLegacyPoolWkwg9Ez.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addresse8na1IT = await MisesLegacyPoolWkwg9Ez.updateReward.call(addressSxUR5AZ, {from: accounts[2]});
//		const addressE3COFie = await MisesLegacyPoolWkwg9Ez.updateReward.call(addressjj9gmaV, {from: accounts[3]});
//		await MisesLegacyPoolWkwg9Ez.getReward.call({from: accounts[3]});

		assert.equal(uint2568RCJda, BigInt("0"))
		await expect(MisesLegacyPoolWkwg9Ez.updateReward.call(addressSxUR5AZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressCixTcGl = accounts[4]
		const addressOgYvIl = accounts[3]
		const uintozCthg3 = BigInt("1540")
		const uintTzvMbNr = BigInt("1984")
		const MisesLegacyPoolFdnaW6k = await MisesLegacyPool.new(addressCixTcGl, addressOgYvIl, uintozCthg3, uintTzvMbNr, {from: accounts[3]});
		const uintwrJRUF = BigInt("230")
		const uintrz1clO = BigInt("2044")
//		const uint256gXQRdND = await MisesLegacyPoolFdnaW6k.withdraw.call(uintwrJRUF, {from: accounts[0]});
//		const uint256otm8xCQ = await MisesLegacyPoolFdnaW6k.withdraw.call(uintrz1clO, {from: accounts[4]});
//		const uint256ukMvWTp = await MisesLegacyPoolFdnaW6k.lastTimeRewardApplicable.call({from: accounts[5]});
//		await MisesLegacyPoolFdnaW6k.exit.call({from: accounts[3]});

		await expect(MisesLegacyPoolFdnaW6k.withdraw.call(uintwrJRUF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressEnboOed = accounts[4]
		const addresskxHptol = accounts[3]
		const uintB7IwyV = BigInt("153")
		const uintgFSQwXH = BigInt("284")
		const MisesLegacyPoolErrEFH = await MisesLegacyPool.new(addressEnboOed, addresskxHptol, uintB7IwyV, uintgFSQwXH, {from: accounts[5]});
		const uintudwydcO = BigInt("524")
		const uint256e3DxfT5 = await MisesLegacyPoolErrEFH.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256XWkYS8Z = await MisesLegacyPoolErrEFH.rewardPerToken.call({from: accounts[2]});
		const uint256jSSfHL9 = await MisesLegacyPoolErrEFH.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256rmONN3m = await MisesLegacyPoolErrEFH.notifyRewardAmount.call(uintudwydcO, {from: accounts[4]});

		assert.equal(uint256XWkYS8Z, BigInt("0"))
		assert.equal(uint256e3DxfT5, BigInt("0"))
		assert.equal(uint256jSSfHL9, BigInt("0"))
		await expect(MisesLegacyPoolErrEFH.notifyRewardAmount.call(uintudwydcO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressMxYylDM = accounts[0]
		const addressTUMOexb = accounts[5]
		const uintkxOBD1f = BigInt("707")
		const uintrSta9qT = BigInt("1146")
		const MisesLegacyPooliv9KzL = await MisesLegacyPool.new(addressMxYylDM, addressTUMOexb, uintkxOBD1f, uintrSta9qT, {from: accounts[1]});
//		await MisesLegacyPooliv9KzL.getReward.call({from: accounts[1]});
//		const uint256rxFULd = await MisesLegacyPooliv9KzL.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256Wm4x44 = await MisesLegacyPooliv9KzL.rewardPerToken.call({from: accounts[2]});

		await expect(MisesLegacyPooliv9KzL.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
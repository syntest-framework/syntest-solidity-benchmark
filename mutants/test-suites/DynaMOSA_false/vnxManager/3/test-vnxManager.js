const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagercSmOIH5 = await vnxManager.new({from: accounts[1]});
		const addressnuMFaj6 = accounts[4]
		const addressvtnMjo = accounts[3]
		const addressdKvJ6o4 = accounts[3]
//		const addressxG1tyRZ = await vnxManagercSmOIH5.transferOwnership.call(addressnuMFaj6, {from: accounts[0]});
//		const uint256Kp2bb1j = await vnxManagercSmOIH5.totalRoles.call({from: accounts[1]});
//		const boolVaibGe = await vnxManagercSmOIH5.transferContractOwnership.call(addressdKvJ6o4, addressvtnMjo, {from: accounts[1]});

		await expect(vnxManagercSmOIH5.transferOwnership.call(addressnuMFaj6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxHp96yo = await vnxManager.new({from: accounts[2]});
		const uintnOaVJl0 = BigInt("578")
		const stringLcAkBDb = "CvVf8VqEKbal1BlQLATC62WLxVcHXvtdSWHcqaYtyTM3Buvzfn45QV8tJag22g4RdIOxtW"
		const addressfFqvjyA = accounts[4]
		const addressbeiVZiN = accounts[2]
//		const uint256cklHmu9 = await vnxManagerxHp96yo.addRole.call(stringLcAkBDb, uintnOaVJl0, {from: accounts[0]});
//		const bools2Ttwl9 = await vnxManagerxHp96yo.transferContractOwnership.call(addressbeiVZiN, addressfFqvjyA, {from: accounts[4]});
//		await vnxManagerxHp96yo.onlyAdmin.call({from: accounts[1]});
//		const uint256ye1YXrO = await vnxManagerxHp96yo.totalRoles.call({from: accounts[5]});

		await expect(vnxManagerxHp96yo.addRole.call(stringLcAkBDb, uintnOaVJl0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRaXNim4 = await vnxManager.new({from: accounts[2]});
		const addressxmgMmdg = accounts[3]
		const addressXq1hs2j = accounts[1]
//		const boolhejAoBR = await vnxManagerRaXNim4.transferContractOwnership.call(addressXq1hs2j, addressxmgMmdg, {from: accounts[3]});
//		await vnxManagerRaXNim4.onlyOwner.call({from: accounts[0]});
//		await vnxManagerRaXNim4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerRaXNim4.transferContractOwnership.call(addressXq1hs2j, addressxmgMmdg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYqQcqTe = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAiZm4w5 = BigInt("1977")
		const addressFzOwU2 = accounts[3]
		const uintSl2FVc5 = BigInt("1210")
		const addressD7MSUsE = accounts[0]
		const addressFpFHq6 = accounts[1]
		const addressjop1H3F = await vnxManagerYqQcqTe.addBearer.call(addressFzOwU2, uintAiZm4w5, {from: accounts[0]});
		const addressflkP5or = await vnxManagerYqQcqTe.addBearer.call(addressD7MSUsE, uintSl2FVc5, {from: accounts[4]});
		const addressKMWDzeg = await vnxManagerYqQcqTe.transferOwnership.call(addressFpFHq6, {from: accounts[0]});
		await vnxManagerYqQcqTe.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for vnxManager', async () => {
		const vnxManagerOsQUuvs = await vnxManager.new({from: accounts[4]});
//		await vnxManagerOsQUuvs.onlyAdmin.call({from: accounts[3]});
//		const boolKUhJAk = await vnxManagerOsQUuvs.isAdmin.call({from: accounts[4]});

		await expect(vnxManagerOsQUuvs.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTvAdtTU = await vnxManager.new({from: accounts[2]});
		const uintJFLGqRT = BigInt("1165")
		const addressD6ClBSt = accounts[0]
		const uintpTcHHwe = BigInt("100")
		const stringBrawXB2 = "JakRJn9upvSnEt9fiCkxgztlGibBJjXRnSPoaMqI1z5dXe5a6VPCQA1NwEzNRPfoVDKM"
		const uintj5rGVIp = BigInt("44")
		const addressFrrxyB = accounts[4]
		const uintUXAdHGg = BigInt("945")
		const addressxYTPeAB = accounts[0]
		const boolA5tniFP = await vnxManagerTvAdtTU.isOwner.call({from: accounts[4]});
//		const addressZKiIJjz = await vnxManagerTvAdtTU.addBearer.call(addressD6ClBSt, uintJFLGqRT, {from: accounts[2]});
//		const uint256yxP2Hud = await vnxManagerTvAdtTU.addRole.call(stringBrawXB2, uintpTcHHwe, {from: accounts[2]});
//		const boolACqOfEG = await vnxManagerTvAdtTU.hasRole.call(addressFrrxyB, uintj5rGVIp, {from: accounts[1]});
//		const addressqzl5aY9 = await vnxManagerTvAdtTU.removeBearer.call(addressxYTPeAB, uintUXAdHGg, {from: accounts[0]});
//		const addressa8aCAL = await vnxManagerTvAdtTU.owner.call({from: accounts[2]});

		assert.equal(boolA5tniFP, false)
		await expect(vnxManagerTvAdtTU.addBearer.call(addressD6ClBSt, uintJFLGqRT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerOsQUuvs = await vnxManager.new({from: accounts[4]});
		const uint256bTs6QYV = await vnxManagerOsQUuvs.totalRoles.call({from: accounts[2]});
//		await vnxManagerOsQUuvs.onlyAdmin.call({from: accounts[3]});
//		const boolKUhJAk = await vnxManagerOsQUuvs.isAdmin.call({from: accounts[4]});

		assert.equal(uint256bTs6QYV, BigInt("1"))
		await expect(vnxManagerOsQUuvs.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxHp96yo = await vnxManager.new({from: accounts[2]});
		const uintzjGzwPC = BigInt("1537")
		const addressYi3Nqb = accounts[3]
		const uintyVqWbMI = BigInt("578")
		const stringLcAkBDb = "CvVf8VqEKbal14lQLATC62WLxVcHXvtdSWHcqaYtyTM3Buvzfn45QV8tJag22g4RdIOxtW"
		const addressWczTHWx = accounts[4]
		const addressKQ13Myx = accounts[2]
//		const addressb59hay1 = await vnxManagerxHp96yo.removeBearer.call(addressYi3Nqb, uintzjGzwPC, {from: accounts[2]});
//		const uint256cklHmu9 = await vnxManagerxHp96yo.addRole.call(stringLcAkBDb, uintyVqWbMI, {from: accounts[0]});
//		const bools2Ttwl9 = await vnxManagerxHp96yo.transferContractOwnership.call(addressKQ13Myx, addressWczTHWx, {from: accounts[4]});
//		await vnxManagerxHp96yo.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerxHp96yo.onlyAdmin.call({from: accounts[1]});
//		const boolHUENxW = await vnxManagerxHp96yo.isOwner.call({from: accounts[1]});
//		const uint256ye1YXrO = await vnxManagerxHp96yo.totalRoles.call({from: accounts[5]});

		await expect(vnxManagerxHp96yo.removeBearer.call(addressYi3Nqb, uintzjGzwPC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqkXVB8U = await vnxManager.new({from: accounts[5]});
		const stringlIMs5gG = "k2d8ifEA8CpR64GYaWuPhHrNOtBe4Uud9Zny4iNyD3xFY65FNQTla1Dlo6Js6Ql7Ihtgm"
		const address22wWWI = accounts[1]
		const addressowR8GNL = accounts[2]
		const uint256dI6oZNx = await vnxManagerqkXVB8U.addRootRole.call(stringlIMs5gG, {from: accounts[2]});
		const boolFOghqTq = await vnxManagerqkXVB8U.isOwner.call({from: accounts[1]});
		const addressks1gJzK = await vnxManagerqkXVB8U.transferOwnership.call(address22wWWI, {from: accounts[5]});
//		await vnxManagerqkXVB8U.onlyAdmin.call({from: accounts[2]});
//		const addressnwJmzns = await vnxManagerqkXVB8U.transferOwnership.call(addressowR8GNL, {from: accounts[3]});

		assert.equal(boolFOghqTq, false)
		assert.equal(uint256dI6oZNx, BigInt("0"))
		await expect(vnxManagerqkXVB8U.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerbKLJTZ7 = await vnxManager.new({from: accounts[1]});
		const uintCDTnODS = BigInt("727")
		const stringhiZfbu = "yLpMlvFzfGWSq1C9t6c2IsrvjFL4xMFwIdpmSiv6rpdp6FrSWuWQyIwMHBq32OoOrsCfWbTTcLtoTrN"
		const stringW7hvsfV = "Vgqc2aihyBNwZkLEJqbs9j1chzLtzu79Sv19CasFUkwoxfILkbUizFd1vg"
		const addressmpfXsL6 = await vnxManagerbKLJTZ7.owner.call({from: accounts[3]});
//		const uint256usAZ77V = await vnxManagerbKLJTZ7.addRole.call(stringhiZfbu, uintCDTnODS, {from: accounts[2]});
//		const uint256HIAnw8v = await vnxManagerbKLJTZ7.addRootRole.call(stringW7hvsfV, {from: accounts[5]});
//		const uint256yzFMUT = await vnxManagerbKLJTZ7.totalRoles.call({from: accounts[0]});
//		const boolKvTPGLK = await vnxManagerbKLJTZ7.isOwner.call({from: accounts[5]});

		assert.equal(addressmpfXsL6, 0x5aB7392d9c4A5371792A382D5D1B724d2b370B83)
		await expect(vnxManagerbKLJTZ7.addRole.call(stringhiZfbu, uintCDTnODS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerOsQUuvs = await vnxManager.new({from: accounts[4]});
//		await vnxManagerOsQUuvs.renounceOwnership.call({from: accounts[4]});
//		const boolKUhJAk = await vnxManagerOsQUuvs.isAdmin.call({from: accounts[4]});

		await expect(vnxManagerOsQUuvs.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxHp96yo = await vnxManager.new({from: accounts[2]});
		const addressA73vKgG = "0x0000000000000000000000000000000000000001"
		const addresstYwhTdE = accounts[0]
		const uintJkq0oks = BigInt("1512")
		const addressWxr7F7p = accounts[3]
//		const boolY67XQ2j = await vnxManagerxHp96yo.transferContractOwnership.call(addresstYwhTdE, addressA73vKgG, {from: accounts[2]});
//		await vnxManagerxHp96yo.onlyAdmin.call({from: accounts[2]});
//		const addressb59hay1 = await vnxManagerxHp96yo.removeBearer.call(addressWxr7F7p, uintJkq0oks, {from: accounts[2]});

		await expect(vnxManagerxHp96yo.transferContractOwnership.call(addresstYwhTdE, addressA73vKgG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
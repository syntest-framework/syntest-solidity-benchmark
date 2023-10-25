const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManageriX95Xqz = await vnxManager.new({from: accounts[2]});
		const uintAgkvE32 = BigInt("501")
		const addressk7lsxLP = accounts[0]
		const boolh0GXHoR = await vnxManageriX95Xqz.isAdmin.call({from: accounts[5]});
		const boolJTXQ1y8 = await vnxManageriX95Xqz.isAdmin.call({from: accounts[4]});
		const boolhlnV1qN = await vnxManageriX95Xqz.hasRole.call(addressk7lsxLP, uintAgkvE32, {from: accounts[5]});
//		await vnxManageriX95Xqz.onlyAdmin.call({from: accounts[0]});

		assert.equal(boolJTXQ1y8, false)
		assert.equal(boolh0GXHoR, false)
		assert.equal(boolhlnV1qN, false)
		await expect(vnxManageriX95Xqz.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUZU3Pkg = await vnxManager.new({from: accounts[5]});
		const addressgdgBHY = accounts[5]
		const stringDYXiTn = "duoSiNJUBqfEQ5HwBfPPoL7WS6llp1SfD9pKM6QvOzFHpldUwsVGxZzSm7IlooLODrhSG"
		const stringB1ZR4J = "txBsr2FBaUUUm7IdUGetTAQFsPadtoEXHJ28wf24NhC2W7rw9U1E3GVAoUFzQLzQBNevhXRSYE2lYwJgSjfEstYGMSJQTiJ71"
//		const addressJTkuxFd = await vnxManagerUZU3Pkg.transferOwnership.call(addressgdgBHY, {from: accounts[3]});
//		const uint256k8Ubn7e = await vnxManagerUZU3Pkg.addRootRole.call(stringDYXiTn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolomuNCxM = await vnxManagerUZU3Pkg.isAdmin.call({from: accounts[3]});
//		const uint256k9e1sB = await vnxManagerUZU3Pkg.addRootRole.call(stringB1ZR4J, {from: accounts[3]});

		await expect(vnxManagerUZU3Pkg.transferOwnership.call(addressgdgBHY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhUVdqsv = await vnxManager.new({from: accounts[2]});
		const addressIXuIN1X = accounts[3]
		const addressVzC21zk = accounts[3]
		const uintWYDReX6 = BigInt("1272")
		const stringnbdSgq = "y3pca8ua1U3pSuFGVTckzmW6tf3IEbfHLZK1SmVqGg3Tdkt2OBCJyicFL20cVfbPcwQ4j2RzC9hmYr1ndyrWMod1hNMJx6xL4"
		const stringL3tK5L = "bP5HvLt4dWbckRkiPDuRFvd4DvJ6YCQXew19slTGqIzceI4ie"
		const uintekjqoJg = BigInt("711")
		const addressfO7754W = accounts[3]
//		const boolAAc0rg6 = await vnxManagerhUVdqsv.transferContractOwnership.call(addressVzC21zk, addressIXuIN1X, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wOOhQsD = await vnxManagerhUVdqsv.addRole.call(stringnbdSgq, uintWYDReX6, {from: accounts[0]});
//		const uint256Gh6hkJf = await vnxManagerhUVdqsv.addRootRole.call(stringL3tK5L, {from: accounts[0]});
//		const addressEBriaYn = await vnxManagerhUVdqsv.addBearer.call(addressfO7754W, uintekjqoJg, {from: accounts[1]});

		await expect(vnxManagerhUVdqsv.transferContractOwnership.call(addressVzC21zk, addressIXuIN1X, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlxBkKGj = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const stringrllGPNO = "P1JpQyHy0ygvpBGHp1ea899ZFokW3s42inuFHcro2545yP"
		const uint256IUSRhce = await vnxManagerlxBkKGj.totalRoles.call({from: accounts[1]});
		const uint256UydtzxO = await vnxManagerlxBkKGj.addRootRole.call(stringrllGPNO, {from: accounts[4]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerwAtIDGz = await vnxManager.new({from: accounts[3]});
		const uint256ofE1Xx = await vnxManagerwAtIDGz.totalRoles.call({from: accounts[3]});
		const uint256MmKCLuO = await vnxManagerwAtIDGz.totalRoles.call({from: accounts[3]});

		assert.equal(uint256MmKCLuO, BigInt("1"))
		assert.equal(uint256ofE1Xx, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const uintLtyfDsM = BigInt("242")
		const addressZvUS7u = accounts[4]
		const addressUoOG9hQ = "0x0000000000000000000000000000000000000001"
		const boolfsksYua = await vnxManagerS0U7avg.isOwner.call({from: accounts[4]});
//		const addressrD6i5T1 = await vnxManagerS0U7avg.addBearer.call(addressZvUS7u, uintLtyfDsM, {from: accounts[3]});
//		await vnxManagerS0U7avg.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresspV4PnHI = await vnxManagerS0U7avg.transferOwnership.call(addressUoOG9hQ, {from: accounts[4]});
//		const boolDepJ1PJ = await vnxManagerS0U7avg.isOwner.call({from: accounts[1]});

		assert.equal(boolfsksYua, false)
		await expect(vnxManagerS0U7avg.addBearer.call(addressZvUS7u, uintLtyfDsM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const uintA2Go7Rv = BigInt("317")
		const addressMXLDX3 = accounts[2]
		const uinthjJCidV = BigInt("242")
		const addressx9PBHfb = accounts[4]
		const uint256LZkEbwz = await vnxManagerS0U7avg.totalRoles.call({from: accounts[5]});
//		const addressZNoNtvL = await vnxManagerS0U7avg.removeBearer.call(addressMXLDX3, uintA2Go7Rv, {from: accounts[4]});
//		const boolfsksYua = await vnxManagerS0U7avg.isOwner.call({from: accounts[4]});
//		const addressrD6i5T1 = await vnxManagerS0U7avg.addBearer.call(addressx9PBHfb, uinthjJCidV, {from: accounts[3]});
//		await vnxManagerS0U7avg.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LZkEbwz, BigInt("1"))
		await expect(vnxManagerS0U7avg.removeBearer.call(addressMXLDX3, uintA2Go7Rv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const addressGuoF0Fn = accounts[4]
		const uintpnBYaT9 = BigInt("242")
		const addressOZVenqE = accounts[4]
		const boolISdMiy = await vnxManagerS0U7avg.isAdmin.call({from: accounts[4]});
		const addressC57K6zu = await vnxManagerS0U7avg.transferOwnership.call(addressGuoF0Fn, {from: accounts[0]});
//		const addressrD6i5T1 = await vnxManagerS0U7avg.addBearer.call(addressOZVenqE, uintpnBYaT9, {from: accounts[3]});

		assert.equal(boolISdMiy, false)
		await expect(vnxManagerS0U7avg.addBearer.call(addressOZVenqE, uintpnBYaT9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const uintBNEFHgp = BigInt("242")
		const addressTJXS2TD = accounts[5]
		const addressyvIt8Tc = await vnxManagerS0U7avg.owner.call({from: accounts[1]});
//		await vnxManagerS0U7avg.onlyAdmin.call({from: accounts[4]});
//		const addressrD6i5T1 = await vnxManagerS0U7avg.addBearer.call(addressTJXS2TD, uintBNEFHgp, {from: accounts[3]});

		assert.equal(addressyvIt8Tc, 0x87C828f18e5bA9E34A07c044AC7D139A31D707e7)
		await expect(vnxManagerS0U7avg.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const uintipm0Sda = BigInt("250")
		const stringJyfZIz4 = "ncDa3DQyqRu7tikst9cVCzkIEs7sLsVY6e3uMJDpieGUn0BSQ2oGpe6Ep1TuO2NTmupqAyXP92VFYT0"
		const uint7MBoeI = BigInt("242")
		const addressvvoKwY7 = accounts[4]
//		const uint256v72qIc = await vnxManagerS0U7avg.addRole.call(stringJyfZIz4, uintipm0Sda, {from: accounts[2]});
//		const uint256KD8cs3z = await vnxManagerS0U7avg.totalRoles.call({from: accounts[1]});
//		const addressrD6i5T1 = await vnxManagerS0U7avg.addBearer.call(addressvvoKwY7, uint7MBoeI, {from: accounts[3]});

		await expect(vnxManagerS0U7avg.addRole.call(stringJyfZIz4, uintipm0Sda, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWLKIdwV = await vnxManager.new({from: accounts[0]});
		const addressk6P7hny = accounts[4]
		const addressKAXjEz6 = "0x0000000000000000000000000000000000000001"
//		await vnxManagerWLKIdwV.renounceOwnership.call({from: accounts[0]});
//		const boolB1YDoFX = await vnxManagerWLKIdwV.isAdmin.call({from: accounts[0]});
//		const boolay71j6 = await vnxManagerWLKIdwV.transferContractOwnership.call(addressKAXjEz6, addressk6P7hny, {from: accounts[4]});

		await expect(vnxManagerWLKIdwV.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS0U7avg = await vnxManager.new({from: accounts[0]});
		const uintviy7dEY = BigInt("909")
		const addressHmpLrsD = accounts[1]
		const addressbVqM8de = accounts[1]
		const addressHj346Rs = accounts[3]
		const uinth8XThA5 = BigInt("1880")
		const addressGQLwX9 = accounts[2]
		const boolpcB4UYm = await vnxManagerS0U7avg.hasRole.call(addressHmpLrsD, uintviy7dEY, {from: accounts[2]});
//		const boolfI6DIQ3 = await vnxManagerS0U7avg.transferContractOwnership.call(addressHj346Rs, addressbVqM8de, {from: accounts[0]});
//		const addressZNoNtvL = await vnxManagerS0U7avg.removeBearer.call(addressGQLwX9, uinth8XThA5, {from: accounts[4]});

		assert.equal(boolpcB4UYm, false)
		await expect(vnxManagerS0U7avg.transferContractOwnership.call(addressHj346Rs, addressbVqM8de, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
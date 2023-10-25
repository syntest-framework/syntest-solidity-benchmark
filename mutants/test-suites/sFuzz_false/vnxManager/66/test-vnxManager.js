const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManager0XAevu = await vnxManager.new({from: accounts[1]});
		const addressWr5czG = accounts[1]
//		const addressxd4xyMA = await vnxManager0XAevu.transferOwnership.call(addressWr5czG, {from: accounts[4]});
//		const boolYO6rVNS = await vnxManager0XAevu.isOwner.call({from: accounts[2]});
//		const boolSoalXM3 = await vnxManager0XAevu.isAdmin.call({from: accounts[5]});

		await expect(vnxManager0XAevu.transferOwnership.call(addressWr5czG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqiVw1ea = await vnxManager.new({from: accounts[1]});
		const uintPgwLthc = BigInt("1944")
		const stringuQctpSb = "YoKGCh9boob2qqzSWj9HWQbJHjEmBcBBk5p3W6c1iq9ScaMWDT7Ae"
//		const uint256gBPGeVg = await vnxManagerqiVw1ea.addRole.call(stringuQctpSb, uintPgwLthc, {from: accounts[3]});
//		await vnxManagerqiVw1ea.onlyAdmin.call({from: accounts[3]});
//		const uint256qU2rkh = await vnxManagerqiVw1ea.totalRoles.call({from: accounts[4]});

		await expect(vnxManagerqiVw1ea.addRole.call(stringuQctpSb, uintPgwLthc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerB7VkhNw = await vnxManager.new({from: accounts[0]});
		const addressGDz3qp1 = accounts[2]
		const addressdzBUFDx = accounts[3]
		const uintsaktD0U = BigInt("1967")
		const addressNqr8nu = accounts[1]
		const boolZHUTwa = await vnxManagerB7VkhNw.isAdmin.call({from: accounts[3]});
//		const boolPuhRR9B = await vnxManagerB7VkhNw.transferContractOwnership.call(addressdzBUFDx, addressGDz3qp1, {from: accounts[3]});
//		const boolk3tiP82 = await vnxManagerB7VkhNw.hasRole.call(addressNqr8nu, uintsaktD0U, {from: accounts[3]});
//		const uint256SO1zINb = await vnxManagerB7VkhNw.totalRoles.call({from: accounts[2]});
//		await vnxManagerB7VkhNw.renounceOwnership.call({from: accounts[2]});
//		await vnxManagerB7VkhNw.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolZHUTwa, false)
		await expect(vnxManagerB7VkhNw.transferContractOwnership.call(addressdzBUFDx, addressGDz3qp1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerzk6UeVP = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnq4nGM = accounts[0]
		const addressA9ixn4J = accounts[1]
		const uintb6MkVcQ = BigInt("1657")
		const addressy4RyQd = accounts[2]
		await vnxManagerzk6UeVP.onlyOwner.call({from: accounts[4]});
		const boolqbjMKOu = await vnxManagerzk6UeVP.transferContractOwnership.call(addressA9ixn4J, addressnq4nGM, {from: accounts[4]});
		const addresstUyuSJk = await vnxManagerzk6UeVP.addBearer.call(addressy4RyQd, uintb6MkVcQ, {from: accounts[3]});
		const boolYN8K6st = await vnxManagerzk6UeVP.isAdmin.call({from: accounts[5]});
		await vnxManagerzk6UeVP.onlyAdmin.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerGVUzwf = await vnxManager.new({from: accounts[5]});
		const uintzld4oa4 = BigInt("779")
		const addressc8zmdd4 = accounts[4]
		const bool4cUKSz = await vnxManagerGVUzwf.isOwner.call({from: accounts[2]});
		const booln8sJiqm = await vnxManagerGVUzwf.hasRole.call(addressc8zmdd4, uintzld4oa4, {from: accounts[1]});
//		await vnxManagerGVUzwf.onlyOwner.call({from: accounts[3]});
//		await vnxManagerGVUzwf.onlyOwner.call({from: accounts[2]});

		assert.equal(bool4cUKSz, false)
		assert.equal(booln8sJiqm, false)
		await expect(vnxManagerGVUzwf.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAdMZz9H = await vnxManager.new({from: accounts[0]});
		const uintiIN24Jy = BigInt("1983")
		const addressyRa8PlU = "0x0000000000000000000000000000000000000001"
		const addressD588Pur = accounts[4]
		const addressUfcKtJ9 = accounts[0]
		const uintB1F2N1y = BigInt("12")
		const addressdkTmsVB = accounts[2]
//		const addressJWHSBav = await vnxManagerAdMZz9H.addBearer.call(addressyRa8PlU, uintiIN24Jy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfsHJ6lT = await vnxManagerAdMZz9H.transferContractOwnership.call(addressUfcKtJ9, addressD588Pur, {from: accounts[5]});
//		const boolBPpgMD1 = await vnxManagerAdMZz9H.hasRole.call(addressdkTmsVB, uintB1F2N1y, {from: accounts[0]});

		await expect(vnxManagerAdMZz9H.addBearer.call(addressyRa8PlU, uintiIN24Jy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagernVaP5ma = await vnxManager.new({from: accounts[3]});
		const addressXHvJwuy = accounts[3]
		const addresslHPudbo = accounts[2]
		const uintdv5uJJo = BigInt("1866")
		const addressRAEyVQA = accounts[3]
//		const boolJiy8j6Z = await vnxManagernVaP5ma.transferContractOwnership.call(addresslHPudbo, addressXHvJwuy, {from: accounts[3]});
//		const addressbwG47Hv = await vnxManagernVaP5ma.owner.call({from: accounts[2]});
//		const addressazF04O3 = await vnxManagernVaP5ma.addBearer.call(addressRAEyVQA, uintdv5uJJo, {from: accounts[4]});
//		const uint256HWbOFpJ = await vnxManagernVaP5ma.totalRoles.call({from: accounts[4]});
//		await vnxManagernVaP5ma.onlyOwner.call({from: accounts[4]});

		await expect(vnxManagernVaP5ma.transferContractOwnership.call(addresslHPudbo, addressXHvJwuy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager0XAevu = await vnxManager.new({from: accounts[1]});
		const addressPvmOQRD = accounts[1]
		const addressxmsjU93 = accounts[1]
		const addressuV4RWN = accounts[3]
		const addressEi9fvHn = await vnxManager0XAevu.owner.call({from: accounts[4]});
//		const addressxd4xyMA = await vnxManager0XAevu.transferOwnership.call(addressPvmOQRD, {from: accounts[4]});
//		const boolYO6rVNS = await vnxManager0XAevu.isOwner.call({from: accounts[2]});
//		await vnxManager0XAevu.onlyOwner.call({from: accounts[4]});
//		await vnxManager0XAevu.renounceOwnership.call({from: accounts[3]});
//		const boolSoalXM3 = await vnxManager0XAevu.isAdmin.call({from: accounts[5]});
//		const boolvheyhFZ = await vnxManager0XAevu.transferContractOwnership.call(addressuV4RWN, addressxmsjU93, {from: accounts[0]});

		assert.equal(addressEi9fvHn, 0x843Bd1f3967695e8739F34Df8666C4cEF385E0e9)
		await expect(vnxManager0XAevu.transferOwnership.call(addressPvmOQRD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlS69MBV = await vnxManager.new({from: accounts[3]});
		const uint256oprtzE = await vnxManagerlS69MBV.totalRoles.call({from: accounts[4]});
//		await vnxManagerlS69MBV.onlyOwner.call({from: accounts[4]});
//		await vnxManagerlS69MBV.onlyAdmin.call({from: accounts[3]});

		assert.equal(uint256oprtzE, BigInt("1"))
		await expect(vnxManagerlS69MBV.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager0XAevu = await vnxManager.new({from: accounts[1]});
		const uintTJNnNH = BigInt("1726")
		const addresskkaYJD = accounts[4]
		const boolYO6rVNS = await vnxManager0XAevu.isOwner.call({from: accounts[2]});
//		const addressAJuRNUR = await vnxManager0XAevu.removeBearer.call(addresskkaYJD, uintTJNnNH, {from: accounts[1]});
//		await vnxManager0XAevu.onlyOwner.call({from: accounts[0]});

		assert.equal(boolYO6rVNS, false)
		await expect(vnxManager0XAevu.removeBearer.call(addresskkaYJD, uintTJNnNH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager0XAevu = await vnxManager.new({from: accounts[1]});
		const addresshjOLgz = accounts[0]
		const stringXdb2Cfv = "PekkKz9WYSRqK1xOOdSrzIOK3Dz7V8rywPh7GIJzEnEHAEbvgADTA"
		const addressqnssk86 = await vnxManager0XAevu.transferOwnership.call(addresshjOLgz, {from: accounts[1]});
		const uint256QLJJOAG = await vnxManager0XAevu.addRootRole.call(stringXdb2Cfv, {from: accounts[3]});
		const boolYO6rVNS = await vnxManager0XAevu.isOwner.call({from: accounts[2]});

		assert.equal(boolYO6rVNS, false)
		assert.equal(uint256QLJJOAG, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManager0XAevu = await vnxManager.new({from: accounts[1]});
//		await vnxManager0XAevu.renounceOwnership.call({from: accounts[1]});
//		const boolYO6rVNS = await vnxManager0XAevu.isOwner.call({from: accounts[2]});

		await expect(vnxManager0XAevu.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
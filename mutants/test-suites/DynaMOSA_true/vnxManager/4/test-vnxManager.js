const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagermD0qkqO = await vnxManager.new({from: accounts[3]});
		const addresskq8CZ7 = accounts[1]
		const addressE6SjKGv = accounts[4]
		const addresspAV3N6E = accounts[1]
//		const addressFZyFVHz = await vnxManagermD0qkqO.transferOwnership.call(addresskq8CZ7, {from: "0x0000000000000000000000000000000000000001"});
//		const addressP5EjFKz = await vnxManagermD0qkqO.transferOwnership.call(addressE6SjKGv, {from: accounts[3]});
//		const addressbYcHAp = await vnxManagermD0qkqO.transferOwnership.call(addresspAV3N6E, {from: accounts[0]});

		await expect(vnxManagermD0qkqO.transferOwnership.call(addresskq8CZ7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUCKNHBL = await vnxManager.new({from: accounts[2]});
		const uintCZ7zUeC = BigInt("1093")
		const stringgau27ia = "eczIs5KNvBQhHMGfT4WiufYylkf2Po2b8jWDSMyXArLqInzG9FfuzvTy9DMm"
		const uintV5EuCvj = BigInt("1179")
		const addressBH4jfJ9 = accounts[1]
//		await vnxManagerUCKNHBL.renounceOwnership.call({from: accounts[2]});
//		const uint256kHoCgUm = await vnxManagerUCKNHBL.addRole.call(stringgau27ia, uintCZ7zUeC, {from: accounts[0]});
//		const boolcscwIg5 = await vnxManagerUCKNHBL.hasRole.call(addressBH4jfJ9, uintV5EuCvj, {from: accounts[3]});
//		await vnxManagerUCKNHBL.onlyAdmin.call({from: accounts[3]});

		await expect(vnxManagerUCKNHBL.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerPv5UDAX = await vnxManager.new({from: accounts[3]});
		const uintEvRqeV = BigInt("1959")
		const addresstMO8lc0 = accounts[1]
		const stringQKqBPoK = "RHEl1BPVf8Y3zg8pNPMKFBEwE1"
		const addresstkjoWVI = await vnxManagerPv5UDAX.owner.call({from: accounts[2]});
//		const addressppQb4Ft = await vnxManagerPv5UDAX.addBearer.call(addresstMO8lc0, uintEvRqeV, {from: accounts[0]});
//		const uint256aHwU4hn = await vnxManagerPv5UDAX.addRootRole.call(stringQKqBPoK, {from: accounts[2]});

		assert.equal(addresstkjoWVI, 0xe6595d78F29E37F0973fc454220e124345CF38D4)
		await expect(vnxManagerPv5UDAX.addBearer.call(addresstMO8lc0, uintEvRqeV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTO7yyY = await vnxManager.new({from: accounts[0]});
		const uintURtwzKA = BigInt("2010")
		const addressfvdXTEp = "0x0000000000000000000000000000000000000001"
		const addresseJGD0SI = accounts[2]
		const addressejbvEQc = accounts[0]
		const addressEP0TcIM = accounts[3]
		const addressnLob8id = accounts[1]
		const boolLvt7jAO = await vnxManagerTO7yyY.hasRole.call(addressfvdXTEp, uintURtwzKA, {from: accounts[1]});
//		const addressmquF8q9 = await vnxManagerTO7yyY.transferOwnership.call(addresseJGD0SI, {from: accounts[2]});
//		const boolmR5DB0 = await vnxManagerTO7yyY.transferContractOwnership.call(addressEP0TcIM, addressejbvEQc, {from: accounts[3]});
//		const addressvL73qjp = await vnxManagerTO7yyY.transferOwnership.call(addressnLob8id, {from: accounts[4]});

		assert.equal(boolLvt7jAO, false)
		await expect(vnxManagerTO7yyY.transferOwnership.call(addresseJGD0SI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerx3P769R = await vnxManager.new({from: accounts[0]});
		const stringe87gIgV = "Y0Iy"
		const uintHQ6jXFm = BigInt("1088")
		const addressvyPvGtD = accounts[2]
		const uint25694ABPD = await vnxManagerx3P769R.addRootRole.call(stringe87gIgV, {from: accounts[2]});
		const addressEPEQdJR = await vnxManagerx3P769R.owner.call({from: accounts[4]});
//		await vnxManagerx3P769R.onlyOwner.call({from: accounts[1]});
//		const boolF0IpDFA = await vnxManagerx3P769R.hasRole.call(addressvyPvGtD, uintHQ6jXFm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressEPEQdJR, 0x9F5742FEc7b238a2B4de8a09294A30A93A8677BD)
		assert.equal(uint25694ABPD, BigInt("0"))
		await expect(vnxManagerx3P769R.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYlgmLLt = await vnxManager.new({from: accounts[2]});
		const uintZbAQHEH = BigInt("792")
		const addressEgdBKlR = accounts[1]
		const uintmsM5tFX = BigInt("1721")
		const addressAcFKoCi = accounts[1]
		const addressNesqRA = await vnxManagerYlgmLLt.owner.call({from: accounts[0]});
		const addressnufioEZ = await vnxManagerYlgmLLt.owner.call({from: accounts[1]});
		const boolWA7hbqY = await vnxManagerYlgmLLt.isAdmin.call({from: accounts[5]});
//		const addressJtnuLF5 = await vnxManagerYlgmLLt.addBearer.call(addressEgdBKlR, uintZbAQHEH, {from: accounts[3]});
//		const boolrVMJea = await vnxManagerYlgmLLt.hasRole.call(addressAcFKoCi, uintmsM5tFX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnZqOH1I = await vnxManagerYlgmLLt.isAdmin.call({from: accounts[2]});

		assert.equal(addressNesqRA, 0x348708C06391fccA4A4493f69EE054b043f43Cf5)
		assert.equal(addressnufioEZ, 0x348708C06391fccA4A4493f69EE054b043f43Cf5)
		assert.equal(boolWA7hbqY, false)
		await expect(vnxManagerYlgmLLt.addBearer.call(addressEgdBKlR, uintZbAQHEH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYlgmLLt = await vnxManager.new({from: accounts[2]});
		const uintECJDJb4 = BigInt("1686")
		const addressFWSDieN = accounts[4]
		const uintbcg6KGE = BigInt("792")
		const address3Yz7zH = accounts[0]
		const uintH0AzkU = BigInt("1915")
		const addressJUObFoG = accounts[2]
		const uintUMvG7Lq = BigInt("1721")
		const addressSRgDZnF = accounts[1]
		const addressNesqRA = await vnxManagerYlgmLLt.owner.call({from: accounts[0]});
		const addressnufioEZ = await vnxManagerYlgmLLt.owner.call({from: accounts[1]});
		const uint256DXuOKLV = await vnxManagerYlgmLLt.totalRoles.call({from: accounts[0]});
		const boolHBxVDkR = await vnxManagerYlgmLLt.hasRole.call(addressFWSDieN, uintECJDJb4, {from: accounts[0]});
//		const addressJtnuLF5 = await vnxManagerYlgmLLt.addBearer.call(address3Yz7zH, uintbcg6KGE, {from: accounts[3]});
//		const boolS9N4CLo = await vnxManagerYlgmLLt.hasRole.call(addressJUObFoG, uintH0AzkU, {from: accounts[2]});
//		const boolrVMJea = await vnxManagerYlgmLLt.hasRole.call(addressSRgDZnF, uintUMvG7Lq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnZqOH1I = await vnxManagerYlgmLLt.isAdmin.call({from: accounts[2]});

		assert.equal(addressNesqRA, 0x348708C06391fccA4A4493f69EE054b043f43Cf5)
		assert.equal(addressnufioEZ, 0x348708C06391fccA4A4493f69EE054b043f43Cf5)
		assert.equal(boolHBxVDkR, false)
		assert.equal(uint256DXuOKLV, BigInt("1"))
		await expect(vnxManagerYlgmLLt.addBearer.call(address3Yz7zH, uintbcg6KGE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYlgmLLt = await vnxManager.new({from: accounts[2]});
		const uintSZvIVc = BigInt("295")
		const addressmwUUnka = "0x0000000000000000000000000000000000000001"
		const uinte4o7PQB = BigInt("792")
		const addressWsCvHFg = accounts[0]
		const uintxUhTNGn = BigInt("1721")
		const addresslA3BwD0 = accounts[1]
		const addressNesqRA = await vnxManagerYlgmLLt.owner.call({from: accounts[0]});
//		const addressvZx697 = await vnxManagerYlgmLLt.removeBearer.call(addressmwUUnka, uintSZvIVc, {from: accounts[1]});
//		const addressVwnRcI = await vnxManagerYlgmLLt.owner.call({from: accounts[4]});
//		const addressnufioEZ = await vnxManagerYlgmLLt.owner.call({from: accounts[1]});
//		await vnxManagerYlgmLLt.onlyOwner.call({from: accounts[0]});
//		const addressJtnuLF5 = await vnxManagerYlgmLLt.addBearer.call(addressWsCvHFg, uinte4o7PQB, {from: accounts[3]});
//		const boolrVMJea = await vnxManagerYlgmLLt.hasRole.call(addresslA3BwD0, uintxUhTNGn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnZqOH1I = await vnxManagerYlgmLLt.isAdmin.call({from: accounts[2]});

		assert.equal(addressNesqRA, 0x348708C06391fccA4A4493f69EE054b043f43Cf5)
		await expect(vnxManagerYlgmLLt.removeBearer.call(addressmwUUnka, uintSZvIVc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUgTgHzA = await vnxManager.new({from: accounts[0]});
		const addressxQIrlRW = "0x0000000000000000000000000000000000000001"
		const stringdDVaRXY = "N6nznsHAC1jVy51O6cjohFRolGVHaBzlDAs5oPjUgycU69vM1XD3iwvhfEexra"
		const addressLuWTtxX = accounts[0]
		const addressrWh5Ls = accounts[4]
		const uintgJGjBx = BigInt("1508")
		const stringOe2XW7p = "SjuTh9VLEfen3I1P2kCbIYlGPJXZwHVxfWS9pCZn5cMiRMb6eR72PKpDhqddf6WOWOynTAgA9LQWW43kIr8x"
		const uintvKWtRAO = BigInt("2044")
		const stringIUz1TvD = "vzObBckE0nVFvmnreB2JCRN8gyClvmvAOdBnKH1TuBs3AaJNItYt1eU9B"
		const booliZllUgN = await vnxManagerUgTgHzA.isOwner.call({from: accounts[3]});
		const address2DcFUM = await vnxManagerUgTgHzA.transferOwnership.call(addressxQIrlRW, {from: accounts[0]});
		const uint256FYDHyU = await vnxManagerUgTgHzA.addRootRole.call(stringdDVaRXY, {from: accounts[5]});
//		const bool9okPoc = await vnxManagerUgTgHzA.transferContractOwnership.call(addressrWh5Ls, addressLuWTtxX, {from: accounts[3]});
//		const uint256lFvVvhN = await vnxManagerUgTgHzA.addRole.call(stringOe2XW7p, uintgJGjBx, {from: accounts[0]});
//		const uint256WMcZZu = await vnxManagerUgTgHzA.addRole.call(stringIUz1TvD, uintvKWtRAO, {from: accounts[2]});

		assert.equal(booliZllUgN, false)
		assert.equal(uint256FYDHyU, BigInt("0"))
		await expect(vnxManagerUgTgHzA.transferContractOwnership.call(addressrWh5Ls, addressLuWTtxX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagersZL6PY2 = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUszCWAC = accounts[3]
		const addressCL9fUOD = accounts[2]
		const boolP6XH9pR = await vnxManagersZL6PY2.transferContractOwnership.call(addressCL9fUOD, addressUszCWAC, {from: accounts[2]});
		await vnxManagersZL6PY2.onlyAdmin.call({from: accounts[4]});
		const boolB2IY4lq = await vnxManagersZL6PY2.isAdmin.call({from: accounts[0]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerDFRFSz = await vnxManager.new({from: accounts[2]});
		const addressfjwKURD = accounts[5]
		const addressWmQQ52 = accounts[3]
		const uintJytRYV5 = BigInt("1047")
		const addressNq0mLmm = accounts[2]
		const uintSL35p0A = BigInt("674")
		const addressJ8Q6GNP = accounts[4]
//		const boolJD9scr = await vnxManagerDFRFSz.transferContractOwnership.call(addressWmQQ52, addressfjwKURD, {from: accounts[2]});
//		const addressvpiO2FG = await vnxManagerDFRFSz.removeBearer.call(addressNq0mLmm, uintJytRYV5, {from: accounts[2]});
//		const addresslv4Dpsk = await vnxManagerDFRFSz.removeBearer.call(addressJ8Q6GNP, uintSL35p0A, {from: accounts[2]});

		await expect(vnxManagerDFRFSz.transferContractOwnership.call(addressWmQQ52, addressfjwKURD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDFRFSz = await vnxManager.new({from: accounts[2]});
		const addressmjO12PO = accounts[10]
		const addressSPIhxoe = accounts[3]
		const uintQLoqMT = BigInt("855")
		const addressyCJjtpZ = "0x0000000000000000000000000000000000000001"
//		const boolJD9scr = await vnxManagerDFRFSz.transferContractOwnership.call(addressSPIhxoe, addressmjO12PO, {from: accounts[2]});
//		const addressnyJ87do = await vnxManagerDFRFSz.removeBearer.call(addressyCJjtpZ, uintQLoqMT, {from: accounts[0]});

		await expect(vnxManagerDFRFSz.transferContractOwnership.call(addressSPIhxoe, addressmjO12PO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerCCnnrlH = await vnxManager.new({from: accounts[0]});
		const addressOPDadpz = accounts[0]
		const addressJC1hFzX = "0x0000000000000000000000000000000000000000"
		const addressquUKfup = accounts[0]
		const stringtaXdTZ = "77xk7mHlSGY1u39z4PovtZabKrHr7S9ctmjnWQCamj0DxWDFPhA673M4ngbdi9lmQbAyVqYl"
//		const boolHC5stMJ = await vnxManagerCCnnrlH.transferContractOwnership.call(addressJC1hFzX, addressOPDadpz, {from: accounts[0]});
//		const addressDR67eFc = await vnxManagerCCnnrlH.transferOwnership.call(addressquUKfup, {from: accounts[1]});
//		const addressYNHvEal = await vnxManagerCCnnrlH.owner.call({from: accounts[4]});
//		const uint256pbYfMTP = await vnxManagerCCnnrlH.addRootRole.call(stringtaXdTZ, {from: accounts[2]});
//		await vnxManagerCCnnrlH.renounceOwnership.call({from: accounts[4]});

		await expect(vnxManagerCCnnrlH.transferContractOwnership.call(addressJC1hFzX, addressOPDadpz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDFRFSz = await vnxManager.new({from: accounts[2]});
		const addressFHGd5Qv = "0x0000000000000000000000000000000000000000"
		const addressBd950ch = accounts[6]
		const addressGUJulZf = accounts[3]
		const addressAdfARaT = accounts[1]
		const addressN5inVp2 = accounts[2]
		const bool84nDvM = await vnxManagerDFRFSz.isAdmin.call({from: accounts[2]});
//		const addressntbgjD = await vnxManagerDFRFSz.transferOwnership.call(addressFHGd5Qv, {from: accounts[2]});
//		const boolJD9scr = await vnxManagerDFRFSz.transferContractOwnership.call(addressGUJulZf, addressBd950ch, {from: accounts[2]});
//		const boolCVCc1qb = await vnxManagerDFRFSz.transferContractOwnership.call(addressN5inVp2, addressAdfARaT, {from: accounts[5]});

		assert.equal(bool84nDvM, true)
		await expect(vnxManagerDFRFSz.transferOwnership.call(addressFHGd5Qv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDFRFSz = await vnxManager.new({from: accounts[2]});
		const addressGECIBrZ = "0x0000000000000000000000000000000000000000"
		const addressXgD73x = accounts[4]
//		const boolmEcQ3Ul = await vnxManagerDFRFSz.transferContractOwnership.call(addressXgD73x, addressGECIBrZ, {from: accounts[2]});
//		const booltQyStBt = await vnxManagerDFRFSz.isAdmin.call({from: accounts[2]});
//		await vnxManagerDFRFSz.onlyAdmin.call({from: accounts[3]});

		await expect(vnxManagerDFRFSz.transferContractOwnership.call(addressXgD73x, addressGECIBrZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
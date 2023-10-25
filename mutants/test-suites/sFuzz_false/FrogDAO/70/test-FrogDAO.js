const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOeE5R8Sy = await FrogDAO.new({from: accounts[2]});
		const uintEC058DN = BigInt("1233")
		const addressDGrNtGq = "0x0000000000000000000000000000000000000001"
		const uintp2UE6vE = BigInt("457")
		const uintLNzpd2L = BigInt("1367")
		const addressyjH9OGh = accounts[3]
		const uintwDOXlNl = BigInt("1526")
		const uintskb2Noa = BigInt("1243")
		const bools0iLfXE = await FrogDAOeE5R8Sy.approve.call(addressDGrNtGq, uintEC058DN, {from: accounts[2]});
		const uintfbn3du = await FrogDAOeE5R8Sy.safeAdd.call(uintLNzpd2L, uintp2UE6vE, {from: accounts[5]});
		const uinteOAjHK5 = await FrogDAOeE5R8Sy.balanceOf.call(addressyjH9OGh, {from: accounts[3]});
		const uintmX3xBTT = await FrogDAOeE5R8Sy.safeMul.call(uintskb2Noa, uintwDOXlNl, {from: accounts[1]});

		assert.equal(bools0iLfXE, true)
		assert.equal(uinteOAjHK5, BigInt("0"))
		assert.equal(uintfbn3du, BigInt("1824"))
		assert.equal(uintmX3xBTT, BigInt("1896818"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOXoGbIRW = await FrogDAO.new({from: accounts[5]});
		const addresscy0CpWL = "0x0000000000000000000000000000000000000001"
		const addressqJZf5X5 = accounts[5]
		const uintQaRfzyT = BigInt("1853")
		const uints1uOw5i = BigInt("201")
		const uintcMlrlYe = BigInt("1206")
		const addressu5AiFui = accounts[3]
		const uintaTLIJpG = BigInt("366")
		const uintdyy6c6h = BigInt("399")
		const uintuSdYBqo = BigInt("1009")
		const addressNIuNY6X = accounts[1]
		const uintRCvWCKA = await FrogDAOXoGbIRW.allowance.call(addressqJZf5X5, addresscy0CpWL, {from: accounts[3]});
//		const uintWyEuqUS = await FrogDAOXoGbIRW.safeSub.call(uints1uOw5i, uintQaRfzyT, {from: accounts[4]});
//		const boolqrKpy8o = await FrogDAOXoGbIRW.approve.call(addressu5AiFui, uintcMlrlYe, {from: accounts[0]});
//		const uintTCNtO0r = await FrogDAOXoGbIRW.safeSub.call(uintdyy6c6h, uintaTLIJpG, {from: accounts[2]});
//		const boolqCsyP0C = await FrogDAOXoGbIRW.transfer.call(addressNIuNY6X, uintuSdYBqo, {from: accounts[4]});

		assert.equal(uintRCvWCKA, BigInt("0"))
		await expect(FrogDAOXoGbIRW.safeSub.call(uints1uOw5i, uintQaRfzyT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAO6vF5bW = await FrogDAO.new({from: accounts[2]});
		const addressJ9gDNn = accounts[3]
		const addressXHI4n2q = accounts[4]
		const uintRwlP577 = BigInt("545")
		const addressyv73uNd = accounts[1]
		const addressmatB3ZQ = accounts[1]
		const uinteGQKQag = BigInt("1408")
		const uintHWsFOTK = BigInt("533")
		const uintnsIM1Ag = BigInt("1417")
		const addressebqrDIw = accounts[1]
		const uintv8noPLT = BigInt("100")
		const uintrTjHeJs = BigInt("26")
		const addressDBT3VE2 = accounts[2]
		const uintgo60xzH = await FrogDAO6vF5bW.allowance.call(addressXHI4n2q, addressJ9gDNn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolj3NrXM3 = await FrogDAO6vF5bW.transferFrom.call(addressmatB3ZQ, addressyv73uNd, uintRwlP577, {from: "0x0000000000000000000000000000000000000001"});
//		const uintQIwG0gk = await FrogDAO6vF5bW.safeSub.call(uintHWsFOTK, uinteGQKQag, {from: accounts[4]});
//		const boolJvpsA6d = await FrogDAO6vF5bW.transfer.call(addressebqrDIw, uintnsIM1Ag, {from: accounts[2]});
//		const uintlhIvTY6 = await FrogDAO6vF5bW.safeSub.call(uintrTjHeJs, uintv8noPLT, {from: accounts[4]});
//		const uintM3dIrAj = await FrogDAO6vF5bW.balanceOf.call(addressDBT3VE2, {from: accounts[1]});

		assert.equal(uintgo60xzH, BigInt("0"))
		await expect(FrogDAO6vF5bW.transferFrom.call(addressmatB3ZQ, addressyv73uNd, uintRwlP577, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOY5LbPeN = await FrogDAO.new({from: accounts[5]});
		const uintpV2GDOy = BigInt("831")
		const addressRxJ9GEg = accounts[4]
		const uinteg59vBJ = BigInt("516")
		const uintzdJmLnx = BigInt("751")
		const uintzpzQmhu = BigInt("1017")
		const uintOhNMX3y = BigInt("1660")
		const uintROs0Xju = BigInt("1590")
		const uintN0nruFi = BigInt("1151")
		const uintYm7c1M8 = BigInt("915")
		const addressK5Xiiu = accounts[4]
//		const boolCcs9WHc = await FrogDAOY5LbPeN.transfer.call(addressRxJ9GEg, uintpV2GDOy, {from: accounts[4]});
//		const uintsIZEBc0 = await FrogDAOY5LbPeN.safeMul.call(uintzdJmLnx, uinteg59vBJ, {from: accounts[0]});
//		const uintktmH75g = await FrogDAOY5LbPeN.safeAdd.call(uintOhNMX3y, uintzpzQmhu, {from: accounts[0]});
//		const uintwiBqGQx = await FrogDAOY5LbPeN.safeMul.call(uintN0nruFi, uintROs0Xju, {from: accounts[4]});
//		const boolxAFl07f = await FrogDAOY5LbPeN.approve.call(addressK5Xiiu, uintYm7c1M8, {from: accounts[4]});

		await expect(FrogDAOY5LbPeN.transfer.call(addressRxJ9GEg, uintpV2GDOy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOh3ZXQkK = await FrogDAO.new({from: accounts[2]});
		const uintnlWDDLt = BigInt("185")
		const uinto6ODcDX = BigInt("1036")
		const uintiyh0Y4V = BigInt("1542")
		const uintowTrXm = BigInt("1489")
		const uintFxv2uhh = await FrogDAOh3ZXQkK.totalSupply.call({from: accounts[2]});
		const uintXT4tQHC = await FrogDAOh3ZXQkK.safeSub.call(uinto6ODcDX, uintnlWDDLt, {from: accounts[1]});
		const uintN7Au8L0 = await FrogDAOh3ZXQkK.safeMul.call(uintowTrXm, uintiyh0Y4V, {from: accounts[3]});

		assert.equal(uintFxv2uhh, BigInt("1000000000000000000000000"))
		assert.equal(uintN7Au8L0, BigInt("2296038"))
		assert.equal(uintXT4tQHC, BigInt("851"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsPqNZ2d = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJ5HPgmx = accounts[1]
		const addressgtaqT99 = accounts[5]
		const addresswGAf92I = "0x0000000000000000000000000000000000000001"
		const uinthw9Msm = BigInt("1982")
		const uintDfUkRuh = BigInt("1939")
		const uintL7U5qKO = BigInt("418")
		const addressyLBAxz = accounts[1]
		const uintKzDzUV = await FrogDAOsPqNZ2d.balanceOf.call(addressJ5HPgmx, {from: accounts[2]});
		const uinte9C7dzV = await FrogDAOsPqNZ2d.allowance.call(addresswGAf92I, addressgtaqT99, {from: accounts[1]});
		const uintOBrd8CB = await FrogDAOsPqNZ2d.safeSub.call(uintDfUkRuh, uinthw9Msm, {from: accounts[2]});
		const boolmlC7lEN = await FrogDAOsPqNZ2d.approve.call(addressyLBAxz, uintL7U5qKO, {from: accounts[0]});
	});
})
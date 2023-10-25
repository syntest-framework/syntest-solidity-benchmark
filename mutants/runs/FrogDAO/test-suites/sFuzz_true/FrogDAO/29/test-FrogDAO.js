const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOwAPhZLt = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintphdCTvA = BigInt("357")
		const addressSgfzfs = accounts[0]
		const addressIdE0l4Q = accounts[2]
		const uintbheS3Dc = BigInt("268")
		const addressuen7SSk = accounts[3]
		const uintC9hlM1W = BigInt("183")
		const addressrHi3WrT = accounts[4]
		const boolQfiDcWV = await FrogDAOwAPhZLt.transferFrom.call(addressIdE0l4Q, addressSgfzfs, uintphdCTvA, {from: accounts[4]});
		const boolHYktqV0 = await FrogDAOwAPhZLt.approve.call(addressuen7SSk, uintbheS3Dc, {from: accounts[2]});
		const boolqqlZl3C = await FrogDAOwAPhZLt.transfer.call(addressrHi3WrT, uintC9hlM1W, {from: accounts[2]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOtnamF1w = await FrogDAO.new({from: accounts[0]});
		const uintGq6tco7 = BigInt("1378")
		const addressCMUGNS = accounts[2]
		const addressC9FsuFr = accounts[2]
		const addressxdNZ3Rl = accounts[2]
		const uintHaAH7vU = BigInt("1092")
		const uintKvM8cEE = BigInt("1946")
		const uintKnzoxav = BigInt("113")
		const uintQvBMjWj = BigInt("999")
		const boolRCAham = await FrogDAOtnamF1w.transfer.call(addressCMUGNS, uintGq6tco7, {from: accounts[3]});
		const uintT6rvk4k = await FrogDAOtnamF1w.balanceOf.call(addressC9FsuFr, {from: accounts[1]});
		const uintuIAkoAl = await FrogDAOtnamF1w.balanceOf.call(addressxdNZ3Rl, {from: accounts[4]});
		const uintDdgEaE = await FrogDAOtnamF1w.safeMul.call(uintKvM8cEE, uintHaAH7vU, {from: accounts[3]});
		const uintL2hbBhN = await FrogDAOtnamF1w.safeDiv.call(uintQvBMjWj, uintKnzoxav, {from: accounts[1]});

		await expect(FrogDAOtnamF1w.transfer.call(addressCMUGNS, uintGq6tco7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOvgRlQo = await FrogDAO.new({from: accounts[3]});
		const uintg7kEQu0 = BigInt("1779")
		const uintGJ9E4Ic = BigInt("737")
		const uintyvYsiUp = BigInt("854")
		const addressAfuP2b1 = accounts[0]
		const uintX8Xw523 = BigInt("168")
		const uintL3J0F2H = BigInt("1705")
		const uintj3uc6jI = BigInt("1846")
		const uintM3ATRLS = BigInt("269")
		const uintR2ZAKnt = BigInt("761")
		const uintu3CEUw2 = BigInt("889")
		const uintyqUFSa2 = BigInt("924")
		const uintleYunEe = BigInt("49")
		const uintzi9luUG = await FrogDAOvgRlQo.safeMul.call(uintGJ9E4Ic, uintg7kEQu0, {from: accounts[1]});
		const boolvMZfJFC = await FrogDAOvgRlQo.approve.call(addressAfuP2b1, uintyvYsiUp, {from: accounts[4]});
		const uintB1KKnJU = await FrogDAOvgRlQo.safeMul.call(uintL3J0F2H, uintX8Xw523, {from: accounts[3]});
		const uintWwgiyVs = await FrogDAOvgRlQo.safeDiv.call(uintM3ATRLS, uintj3uc6jI, {from: accounts[1]});
		const uintP4odWqM = await FrogDAOvgRlQo.safeMul.call(uintu3CEUw2, uintR2ZAKnt, {from: accounts[0]});
		const uintmyZOLN3 = await FrogDAOvgRlQo.safeSub.call(uintleYunEe, uintyqUFSa2, {from: accounts[4]});

		assert.equal(boolvMZfJFC, true)
		assert.equal(uintB1KKnJU, BigInt("286440"))
		assert.equal(uintP4odWqM, BigInt("676529"))
		assert.equal(uintWwgiyVs, BigInt("0"))
		assert.equal(uintzi9luUG, BigInt("1311123"))
		await expect(FrogDAOvgRlQo.safeSub.call(uintleYunEe, uintyqUFSa2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOBe50ARS = await FrogDAO.new({from: accounts[4]});
		const uintM2scOsS = BigInt("1223")
		const uintbatzquT = BigInt("1093")
		const uintl1rEQkY = BigInt("1903")
		const addressrX21eSA = accounts[3]
		const uintBI0sYFN = BigInt("1318")
		const uinttynWV9 = BigInt("1661")
		const uintfbX0OwY = BigInt("1129")
		const uintYTis9TN = BigInt("1199")
		const addressTzy4q4T = "0x0000000000000000000000000000000000000001"
		const uintxhNS5F2 = await FrogDAOBe50ARS.safeAdd.call(uintbatzquT, uintM2scOsS, {from: accounts[3]});
		const boolPEUst36 = await FrogDAOBe50ARS.transfer.call(addressrX21eSA, uintl1rEQkY, {from: accounts[0]});
		const uinteZIqwe4 = await FrogDAOBe50ARS.safeSub.call(uinttynWV9, uintBI0sYFN, {from: accounts[4]});
		const uint0GopVc = await FrogDAOBe50ARS.safeMul.call(uintYTis9TN, uintfbX0OwY, {from: "0x0000000000000000000000000000000000000001"});
		const uintyUAEPbu = await FrogDAOBe50ARS.balanceOf.call(addressTzy4q4T, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxhNS5F2, BigInt("2316"))
		await expect(FrogDAOBe50ARS.transfer.call(addressrX21eSA, uintl1rEQkY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOzQcAJmV = await FrogDAO.new({from: accounts[3]});
		const uintQxERrq = BigInt("254")
		const uintqyK3Hs2 = BigInt("736")
		const uinti0JFpdf = BigInt("1356")
		const addressugyAHfG = accounts[1]
		const addressJLAAupj = accounts[3]
		const addressiSrIHd = accounts[5]
		const uintQGnywbx = BigInt("685")
		const addressunV9nlJ = "0x0000000000000000000000000000000000000001"
		const uintJDuNo21 = await FrogDAOzQcAJmV.safeAdd.call(uintqyK3Hs2, uintQxERrq, {from: accounts[2]});
		const boolvY2srK4 = await FrogDAOzQcAJmV.approve.call(addressugyAHfG, uinti0JFpdf, {from: accounts[4]});
		const uintJSuCAx9 = await FrogDAOzQcAJmV.allowance.call(addressiSrIHd, addressJLAAupj, {from: accounts[5]});
		const boolzDMKhz = await FrogDAOzQcAJmV.transfer.call(addressunV9nlJ, uintQGnywbx, {from: accounts[3]});

		assert.equal(boolvY2srK4, true)
		assert.equal(boolzDMKhz, true)
		assert.equal(uintJDuNo21, BigInt("990"))
		assert.equal(uintJSuCAx9, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAO9PscJl = await FrogDAO.new({from: accounts[5]});
		const uintCdHYuaN = BigInt("1140")
		const uintQKI1HNT = BigInt("1448")
		const uintEX4JO2B = BigInt("851")
		const addressmNh7bT7 = accounts[1]
		const addressWfUMAzO = accounts[2]
		const uinttgLkyxI = BigInt("499")
		const addressUXWZPG = accounts[1]
		const uinthhEaOb = BigInt("562")
		const uintJ25ZWLe = BigInt("1733")
		const uintOaqSAW = await FrogDAO9PscJl.safeMul.call(uintQKI1HNT, uintCdHYuaN, {from: accounts[4]});
		const boolX0SaEtY = await FrogDAO9PscJl.transferFrom.call(addressWfUMAzO, addressmNh7bT7, uintEX4JO2B, {from: accounts[5]});
		const bool8DZq2v = await FrogDAO9PscJl.transfer.call(addressUXWZPG, uinttgLkyxI, {from: accounts[5]});
		const uintauRANma = await FrogDAO9PscJl.safeMul.call(uintJ25ZWLe, uinthhEaOb, {from: accounts[0]});

		assert.equal(uintOaqSAW, BigInt("1650720"))
		await expect(FrogDAO9PscJl.transferFrom.call(addressWfUMAzO, addressmNh7bT7, uintEX4JO2B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAO9PscJl = await FrogDAO.new({from: accounts[5]});
		const uintztZgNdl = BigInt("1140")
		const uintdbPFzBZ = BigInt("1461")
		const uintMPkHXk = BigInt("1079")
		const uintS7BNPbq = BigInt("242")
		const uintjs9kvt = BigInt("562")
		const uintKCWP7h = BigInt("1733")
		const uintOaqSAW = await FrogDAO9PscJl.safeMul.call(uintdbPFzBZ, uintztZgNdl, {from: accounts[4]});
		const uintdtsvMM6 = await FrogDAO9PscJl.safeAdd.call(uintS7BNPbq, uintMPkHXk, {from: accounts[4]});
		const uintauRANma = await FrogDAO9PscJl.safeMul.call(uintKCWP7h, uintjs9kvt, {from: accounts[0]});
		const uintJvOvd7M = await FrogDAO9PscJl.totalSupply.call({from: accounts[1]});

		assert.equal(uintJvOvd7M, BigInt("1000000000000000000000000"))
		assert.equal(uintOaqSAW, BigInt("1665540"))
		assert.equal(uintauRANma, BigInt("973946"))
		assert.equal(uintdtsvMM6, BigInt("1321"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAO9PscJl = await FrogDAO.new({from: accounts[5]});
		const addressyCOcMjb = "0x0000000000000000000000000000000000000001"
		const uintYJbQ9fC = BigInt("902")
		const uintJEeQWXQ = BigInt("396")
		const uints1BOQ4p = BigInt("1140")
		const uintBjFuK8m = BigInt("1437")
		const uintJF3H10Z = await FrogDAO9PscJl.balanceOf.call(addressyCOcMjb, {from: accounts[3]});
		const uintxK4Lxz5 = await FrogDAO9PscJl.safeMul.call(uintJEeQWXQ, uintYJbQ9fC, {from: "0x0000000000000000000000000000000000000001"});
		const uintOaqSAW = await FrogDAO9PscJl.safeMul.call(uintBjFuK8m, uints1BOQ4p, {from: accounts[4]});

		assert.equal(uintJF3H10Z, BigInt("0"))
		assert.equal(uintOaqSAW, BigInt("1638180"))
		assert.equal(uintxK4Lxz5, BigInt("357192"))
	});
})
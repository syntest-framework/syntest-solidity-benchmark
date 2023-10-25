const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElb49Yfi = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYmJiAxh = accounts[4]
		const uintz3PpK86 = BigInt("746")
		const addressfP0Orp = accounts[3]
		const uintpNsauDN = BigInt("1676")
		const addressb8a83PI = accounts[0]
		const addressj7hXEWl = accounts[3]
		const uintzyABCBV = BigInt("4")
		const addressTr8Nb5R = accounts[1]
		const uinte1dAocV = BigInt("292")
		const addresscKklVP4 = accounts[4]
		const uint256sHBQhZr = await REXUNIFINANCElb49Yfi.transferableTokens.call(addressYmJiAxh, {from: accounts[1]});
		const booluCkFa82 = await REXUNIFINANCElb49Yfi.decreaseApproval.call(addressfP0Orp, uintz3PpK86, {from: accounts[4]});
		const boolGtd8bTB = await REXUNIFINANCElb49Yfi.transferFrom.call(addressj7hXEWl, addressb8a83PI, uintpNsauDN, {from: accounts[4]});
		const boolAQNK7Pf = await REXUNIFINANCElb49Yfi.decreaseApproval.call(addressTr8Nb5R, uintzyABCBV, {from: accounts[5]});
		const boolibtANBb = await REXUNIFINANCElb49Yfi.approve.call(addresscKklVP4, uinte1dAocV, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEqBNUIAZ = await REXUNIFINANCE.new({from: accounts[4]});
		const uintL5X3XaL = BigInt("388")
		const addressENR15PG = accounts[0]
		const uintyL1JRxS = BigInt("1367")
		const addresswTEBOZB = accounts[0]
		const addresstgFyKn = accounts[3]
		const uintwm7kMjm = BigInt("1932")
		const addressoxQmyZE = accounts[1]
		const boolvixPilZ = await REXUNIFINANCEqBNUIAZ.increaseApproval.call(addressENR15PG, uintL5X3XaL, {from: accounts[2]});
//		const boolRooBZfk = await REXUNIFINANCEqBNUIAZ.transfer.call(addresswTEBOZB, uintyL1JRxS, {from: accounts[2]});
//		const uint256jlKjS0I = await REXUNIFINANCEqBNUIAZ.balanceOf.call(addresstgFyKn, {from: accounts[4]});
//		const boolay4Mikp = await REXUNIFINANCEqBNUIAZ.decreaseApproval.call(addressoxQmyZE, uintwm7kMjm, {from: accounts[2]});

		assert.equal(boolvixPilZ, true)
		await expect(REXUNIFINANCEqBNUIAZ.transfer.call(addresswTEBOZB, uintyL1JRxS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEB76zlAV = await REXUNIFINANCE.new({from: accounts[5]});
		const uintvG0DORx = BigInt("1495")
		const addressuvZCPjc = accounts[0]
		const addressf7d6EI = accounts[2]
		const addressqc4qikr = accounts[3]
		const uintqDDAWBa = BigInt("1540")
		const addressL8KTKsQ = accounts[0]
		const addressYRCqYZV = accounts[2]
		const addresslciocUw = accounts[2]
		const uintoYLz5Pl = BigInt("1549")
		const addressiz43QL = accounts[2]
		const boolfVhw0Bo = await REXUNIFINANCEB76zlAV.approve.call(addressuvZCPjc, uintvG0DORx, {from: accounts[3]});
		const uint256tF0WRoc = await REXUNIFINANCEB76zlAV.allowance.call(addressqc4qikr, addressf7d6EI, {from: accounts[3]});
		const boolJsa5San = await REXUNIFINANCEB76zlAV.approve.call(addressL8KTKsQ, uintqDDAWBa, {from: accounts[3]});
//		const addressf2YZQgK = await REXUNIFINANCEB76zlAV.transferOwnership.call(addressYRCqYZV, {from: accounts[2]});
//		const uint256GMi2c3o = await REXUNIFINANCEB76zlAV.balanceOf.call(addresslciocUw, {from: accounts[0]});
//		const boollfA7IIP = await REXUNIFINANCEB76zlAV.transfer.call(addressiz43QL, uintoYLz5Pl, {from: accounts[0]});

		assert.equal(boolJsa5San, true)
		assert.equal(boolfVhw0Bo, true)
		assert.equal(uint256tF0WRoc, BigInt("0"))
		await expect(REXUNIFINANCEB76zlAV.transferOwnership.call(addressYRCqYZV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEcRYfLSY = await REXUNIFINANCE.new({from: accounts[1]});
		const uintwsWHpXa = BigInt("135")
		const addresszQz4WG9 = accounts[4]
		const addressZWdD3aL = accounts[2]
		const uintniy9nfQ = BigInt("919")
		const addressay1XQfb = accounts[3]
		const uintx5uQj9 = BigInt("1292")
		const addressJAKoDft = accounts[4]
//		const boolT1Vgfsk = await REXUNIFINANCEcRYfLSY.transferFrom.call(addressZWdD3aL, addresszQz4WG9, uintwsWHpXa, {from: accounts[2]});
//		const boolLbpvXMz = await REXUNIFINANCEcRYfLSY.transfer.call(addressay1XQfb, uintniy9nfQ, {from: accounts[2]});
//		const boolQnHUjZX = await REXUNIFINANCEcRYfLSY.transfer.call(addressJAKoDft, uintx5uQj9, {from: accounts[2]});

		await expect(REXUNIFINANCEcRYfLSY.transferFrom.call(addressZWdD3aL, addresszQz4WG9, uintwsWHpXa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyMXeibG = await REXUNIFINANCE.new({from: accounts[2]});
		const uintB9mlPq3 = BigInt("466")
		const addressfGEsSkF = accounts[2]
		const addresso4I0asB = accounts[5]
		const uintwPtRPzg = BigInt("2023")
		const addressZCNsODw = "0x0000000000000000000000000000000000000001"
		const boolbPJ2j44 = await REXUNIFINANCEyMXeibG.decreaseApproval.call(addressfGEsSkF, uintB9mlPq3, {from: accounts[3]});
		const uint256SSnB15D = await REXUNIFINANCEyMXeibG.transferableTokens.call(addresso4I0asB, {from: accounts[1]});
//		const boolfceAu6d = await REXUNIFINANCEyMXeibG.transfer.call(addressZCNsODw, uintwPtRPzg, {from: accounts[1]});

		assert.equal(boolbPJ2j44, true)
		assert.equal(uint256SSnB15D, BigInt("0"))
		await expect(REXUNIFINANCEyMXeibG.transfer.call(addressZCNsODw, uintwPtRPzg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdiEGGIl = await REXUNIFINANCE.new({from: accounts[1]});
		const addressRwv7hom = "0x0000000000000000000000000000000000000001"
		const addressQqZ5DAD = accounts[4]
		const addressTiwMx4I = await REXUNIFINANCEdiEGGIl.transferOwnership.call(addressRwv7hom, {from: accounts[1]});
		const uint256RoqEv6a = await REXUNIFINANCEdiEGGIl.transferableTokens.call(addressQqZ5DAD, {from: accounts[1]});

		assert.equal(uint256RoqEv6a, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdiEGGIl = await REXUNIFINANCE.new({from: accounts[1]});
		const address0S0rFj = accounts[3]
		const uintLEZu7t = BigInt("1037")
		const addresszCxG9GJ = accounts[0]
		const uintOpkRb68 = BigInt("755")
		const addressrZzNlJE = accounts[2]
		const uintgAnHrhc = BigInt("0")
		const addressVXWbuSQ = accounts[5]
		const addressKswbHit = "0x0000000000000000000000000000000000000001"
		const uint256RoqEv6a = await REXUNIFINANCEdiEGGIl.transferableTokens.call(address0S0rFj, {from: accounts[1]});
		const boolxIPSkmD = await REXUNIFINANCEdiEGGIl.decreaseApproval.call(addresszCxG9GJ, uintLEZu7t, {from: accounts[3]});
		const boolDuYuTbP = await REXUNIFINANCEdiEGGIl.increaseApproval.call(addressrZzNlJE, uintOpkRb68, {from: accounts[3]});
		const boolLWE1WRZ = await REXUNIFINANCEdiEGGIl.transferFrom.call(addressKswbHit, addressVXWbuSQ, uintgAnHrhc, {from: accounts[0]});

		assert.equal(boolDuYuTbP, true)
		assert.equal(boolLWE1WRZ, true)
		assert.equal(boolxIPSkmD, true)
		assert.equal(uint256RoqEv6a, BigInt("0"))
	});
})
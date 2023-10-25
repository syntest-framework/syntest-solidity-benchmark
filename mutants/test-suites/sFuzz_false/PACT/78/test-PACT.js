const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTIBSWa7d = await PACT.new({from: accounts[1]});
		const addressvRE2Hq = accounts[1]
		const uintqqcghQ = BigInt("1718")
		const addressigS7Wgt = accounts[3]
		const addressgFh7nFq = accounts[2]
//		const boolCDrugu9 = await PACTIBSWa7d.setupRewards.call(addressvRE2Hq, {from: accounts[0]});
//		const booloS8ruOE = await PACTIBSWa7d.burn.call(addressigS7Wgt, uintqqcghQ, {from: accounts[0]});
//		const uintqvjcKXM = await PACTIBSWa7d.balanceOf.call(addressgFh7nFq, {from: accounts[0]});

		await expect(PACTIBSWa7d.setupRewards.call(addressvRE2Hq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfpzKkt = await PACT.new({from: accounts[0]});
		const uintQUWz0ek = BigInt("851")
		const addressPBOzkzb = accounts[1]
		const addressw2LPu5t = accounts[2]
		const boolXwfTlf4 = await PACTfpzKkt.approve.call(addressPBOzkzb, uintQUWz0ek, {from: accounts[2]});
		const stringMmdM0q5 = await PACTfpzKkt.name.call({from: accounts[2]});
//		const booljquvNm3 = await PACTfpzKkt.setupBasePool.call(addressw2LPu5t, {from: accounts[2]});

		assert.equal(boolXwfTlf4, true)
		assert.equal(stringMmdM0q5, "P2PB2B community token")
		await expect(PACTfpzKkt.setupBasePool.call(addressw2LPu5t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnagMkcN = await PACT.new({from: accounts[4]});
		const addressqnrU5X0 = accounts[0]
		const addressfWDWXB = "0x0000000000000000000000000000000000000001"
		const uintcImhpHS = BigInt("126")
		const addressz2ygRqZ = accounts[4]
		const addressmqdKIbD = "0x0000000000000000000000000000000000000001"
		const addressMHtX00z = accounts[1]
		const uintUsCaFly = await PACTnagMkcN.allowance.call(addressfWDWXB, addressqnrU5X0, {from: accounts[2]});
		const stringE1Zxf35 = await PACTnagMkcN.symbol.call({from: accounts[4]});
//		const boolvqo1LtX = await PACTnagMkcN.transferFrom.call(addressmqdKIbD, addressz2ygRqZ, uintcImhpHS, {from: accounts[3]});
//		const uintrqM4MnI = await PACTnagMkcN.balanceOf.call(addressMHtX00z, {from: accounts[3]});

		assert.equal(stringE1Zxf35, "PACT")
		assert.equal(uintUsCaFly, BigInt("0"))
		await expect(PACTnagMkcN.transferFrom.call(addressmqdKIbD, addressz2ygRqZ, uintcImhpHS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUbLaX4p = await PACT.new({from: accounts[4]});
		const addresswCpaSyl = accounts[4]
		const uintlU73q1q = BigInt("1516")
		const addressa8alQf3 = accounts[0]
		const addresszLm3n9 = accounts[2]
		const addressyAE1i1i = accounts[2]
		const addressm7nVy22 = "0x0000000000000000000000000000000000000001"
		const uintYuHFlik = BigInt("355")
		const addressbd8p6V = accounts[2]
//		const boolVJxfrz = await PACTUbLaX4p.setupReserve.call(addresswCpaSyl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolr5q7xfW = await PACTUbLaX4p.transferFrom.call(addresszLm3n9, addressa8alQf3, uintlU73q1q, {from: accounts[4]});
//		const uintS2pshej = await PACTUbLaX4p.allowance.call(addressm7nVy22, addressyAE1i1i, {from: accounts[3]});
//		const uint8J51B77o = await PACTUbLaX4p.decimals.call({from: accounts[5]});
//		const booltvokhe3 = await PACTUbLaX4p.approve.call(addressbd8p6V, uintYuHFlik, {from: accounts[0]});
//		const stringCiaR10 = await PACTUbLaX4p.symbol.call({from: accounts[2]});

		await expect(PACTUbLaX4p.setupReserve.call(addresswCpaSyl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOCPYtpN = await PACT.new({from: accounts[0]});
		const uinthbI4xGd = BigInt("506")
		const addressRJ5sVq = accounts[4]
		const address3jIifP = accounts[4]
		const address2jMf86 = accounts[2]
		const uintCbes7Ki = BigInt("1079")
		const addressNwXBW53 = "0x0000000000000000000000000000000000000001"
		const addressAQmiMRS = accounts[4]
		const addressNf7KNMl = accounts[3]
//		const booluESfA9Q = await PACTOCPYtpN.transfer.call(addressRJ5sVq, uinthbI4xGd, {from: accounts[2]});
//		const uintdlnCdOu = await PACTOCPYtpN.balanceOf.call(address3jIifP, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmqxY4u9 = await PACTOCPYtpN.totalSupply.call({from: accounts[1]});
//		const boolqZUFt4N = await PACTOCPYtpN.setupRewards.call(address2jMf86, {from: accounts[2]});
//		const boold68EJkQ = await PACTOCPYtpN.transferFrom.call(addressAQmiMRS, addressNwXBW53, uintCbes7Ki, {from: accounts[2]});
//		const boolFwQRzi9 = await PACTOCPYtpN.setupReserve.call(addressNf7KNMl, {from: accounts[0]});

		await expect(PACTOCPYtpN.transfer.call(addressRJ5sVq, uinthbI4xGd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTiGTNTK = await PACT.new({from: accounts[2]});
		const addressoYvOW4w = accounts[0]
		const addresslWB2AME = accounts[3]
		const stringsHXsSRM = await PACTiGTNTK.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolxxOQ0Y = await PACTiGTNTK.setupTeam.call(addressoYvOW4w, {from: accounts[3]});
//		const stringN3L0G3C = await PACTiGTNTK.symbol.call({from: accounts[2]});
//		const boollNAyGTE = await PACTiGTNTK.setupBasePool.call(addresslWB2AME, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringsHXsSRM, "P2PB2B community token")
		await expect(PACTiGTNTK.setupTeam.call(addressoYvOW4w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTj5ifN5O = await PACT.new({from: accounts[3]});
		const addressFVDe8mR = accounts[3]
		const addressHgrnV9s = accounts[2]
		const uintdOJk22L = await PACTj5ifN5O.allowance.call(addressHgrnV9s, addressFVDe8mR, {from: accounts[0]});
		const uintPyM2cD = await PACTj5ifN5O.totalSupply.call({from: accounts[0]});

		assert.equal(uintPyM2cD, BigInt("1000000000000000000000000000"))
		assert.equal(uintdOJk22L, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTj5ifN5O = await PACT.new({from: accounts[3]});
		const addressBJyYq6l = accounts[3]
		const addressxTkXDlT = accounts[2]
		const addressUi8HNtE = accounts[3]
		const addressEBLULPK = accounts[4]
		const uintdOJk22L = await PACTj5ifN5O.allowance.call(addressxTkXDlT, addressBJyYq6l, {from: accounts[0]});
//		const boolNYuRpV = await PACTj5ifN5O.setupFarming.call(addressUi8HNtE, {from: accounts[0]});
//		const bool0Xgy0h = await PACTj5ifN5O.setupBasePool.call(addressEBLULPK, {from: accounts[4]});
//		const uintPyM2cD = await PACTj5ifN5O.totalSupply.call({from: accounts[0]});

		assert.equal(uintdOJk22L, BigInt("0"))
		await expect(PACTj5ifN5O.setupFarming.call(addressUi8HNtE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTj5ifN5O = await PACT.new({from: accounts[3]});
		const addressWKEGUFg = accounts[3]
		const addresstkAJVsZ = accounts[2]
		const uintdOJk22L = await PACTj5ifN5O.allowance.call(addresstkAJVsZ, addressWKEGUFg, {from: accounts[0]});
		const uint8ozu28sw = await PACTj5ifN5O.decimals.call({from: accounts[2]});

		assert.equal(uint8ozu28sw, BigInt("18"))
		assert.equal(uintdOJk22L, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTj5ifN5O = await PACT.new({from: accounts[3]});
		const uintpJdrFTU = BigInt("1171")
		const addresseSmDFPV = accounts[5]
		const addresstzC65Pl = accounts[3]
		const addressEYLldE2 = accounts[2]
//		const boolXheioDJ = await PACTj5ifN5O.burn.call(addresseSmDFPV, uintpJdrFTU, {from: accounts[0]});
//		const uintdOJk22L = await PACTj5ifN5O.allowance.call(addressEYLldE2, addresstzC65Pl, {from: accounts[0]});

		await expect(PACTj5ifN5O.burn.call(addresseSmDFPV, uintpJdrFTU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTj5ifN5O = await PACT.new({from: accounts[3]});
		const addressvrnkvLC = accounts[0]
		const addressLBbeOvW = accounts[4]
		const addresskKQLiLR = accounts[2]
		const uintbRipJC = await PACTj5ifN5O.balanceOf.call(addressvrnkvLC, {from: "0x0000000000000000000000000000000000000001"});
		const uintdOJk22L = await PACTj5ifN5O.allowance.call(addresskKQLiLR, addressLBbeOvW, {from: accounts[0]});

		assert.equal(uintbRipJC, BigInt("0"))
		assert.equal(uintdOJk22L, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTxcv8y0n = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8v5BVqAS = await PACTxcv8y0n.decimals.call({from: accounts[0]});
		const stringUY92lxK = await PACTxcv8y0n.name.call({from: accounts[3]});
		const uint8vic3IW = await PACTxcv8y0n.decimals.call({from: accounts[2]});
	});
})
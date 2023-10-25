const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyCBD7ixJ = await HungryHoody.new({from: accounts[2]});
		const uintTvVuspg = BigInt("1379")
		const addressU7CjX69 = accounts[4]
		const uintWPDra7b = BigInt("1734")
		const addressx9ll8b = accounts[0]
		const uintef4w0Ll = BigInt("1619")
		const addressLQIZf6Z = accounts[5]
		const addressFssjaY = "0x0000000000000000000000000000000000000001"
		const uint9Ik5w7 = BigInt("211")
		const addressJVjLBlv = accounts[4]
		const uinta1WdNq = BigInt("1170")
		const uintoc3m7RV = BigInt("593")
		const bool2ZZayK = await HungryHoodyCBD7ixJ.approve.call(addressU7CjX69, uintTvVuspg, {from: accounts[1]});
		const boolOAOArW = await HungryHoodyCBD7ixJ.transfer.call(addressx9ll8b, uintWPDra7b, {from: accounts[2]});
		const boolW7cp9O5 = await HungryHoodyCBD7ixJ.approve.call(addressLQIZf6Z, uintef4w0Ll, {from: accounts[2]});
		const uintp2JYQTP = await HungryHoodyCBD7ixJ.balanceOf.call(addressFssjaY, {from: accounts[0]});
		const boola26S0IA = await HungryHoodyCBD7ixJ.approve.call(addressJVjLBlv, uint9Ik5w7, {from: accounts[1]});
		const uintP1sF16J = await HungryHoodyCBD7ixJ.safeDiv.call(uintoc3m7RV, uinta1WdNq, {from: accounts[1]});

		assert.equal(bool2ZZayK, true)
		assert.equal(boolOAOArW, true)
		assert.equal(boolW7cp9O5, true)
		assert.equal(boola26S0IA, true)
		assert.equal(uintP1sF16J, BigInt("0"))
		assert.equal(uintp2JYQTP, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyPesC4P5 = await HungryHoody.new({from: accounts[0]});
		const addressCNe2K7k = accounts[5]
		const addressed7bBii = accounts[4]
		const uintu80wYyM = BigInt("380")
		const addressFkAQeGq = accounts[0]
		const uintGZd79po = BigInt("1425")
		const addressgKrDdcQ = "0x0000000000000000000000000000000000000001"
		const uintkY4utx = await HungryHoodyPesC4P5.allowance.call(addressed7bBii, addressCNe2K7k, {from: "0x0000000000000000000000000000000000000001"});
		const uintpKjHFLg = await HungryHoodyPesC4P5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintKG7JNsD = await HungryHoodyPesC4P5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolPpo8TrW = await HungryHoodyPesC4P5.transfer.call(addressFkAQeGq, uintu80wYyM, {from: accounts[1]});
//		const booluzKeVho = await HungryHoodyPesC4P5.approve.call(addressgKrDdcQ, uintGZd79po, {from: accounts[4]});

		assert.equal(uintKG7JNsD, BigInt("25000000000000000000"))
		assert.equal(uintkY4utx, BigInt("0"))
		assert.equal(uintpKjHFLg, BigInt("25000000000000000000"))
		await expect(HungryHoodyPesC4P5.transfer.call(addressFkAQeGq, uintu80wYyM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyoz5ej0I = await HungryHoody.new({from: accounts[2]});
		const addresst50Dk3T = accounts[5]
		const addressR7iyjnx = accounts[5]
		const uintOdTHdxp = BigInt("139")
		const addresstjuKH5 = accounts[5]
		const addresseleX5Ln = accounts[0]
		const uintJ61aicr = BigInt("371")
		const addressUUfnqDp = accounts[4]
		const uintPFU4Nsg = BigInt("1991")
		const addressQTwMVMo = accounts[1]
		const addresssvLpT6v = accounts[1]
		const addresshKmEa0N = accounts[0]
		const uintIfio3JI = BigInt("1798")
		const addressIwwGgE = accounts[4]
		const addressM53YlGs = accounts[0]
		const uinte1WXdH0 = await HungryHoodyoz5ej0I.allowance.call(addressR7iyjnx, addresst50Dk3T, {from: accounts[4]});
//		const boolJ6NHY8Q = await HungryHoodyoz5ej0I.transferFrom.call(addresseleX5Ln, addresstjuKH5, uintOdTHdxp, {from: accounts[0]});
//		const boolRx2ok1k = await HungryHoodyoz5ej0I.approve.call(addressUUfnqDp, uintJ61aicr, {from: accounts[4]});
//		const boollfHz8mz = await HungryHoodyoz5ej0I.transfer.call(addressQTwMVMo, uintPFU4Nsg, {from: accounts[3]});
//		const uintDbfyta3 = await HungryHoodyoz5ej0I.allowance.call(addresshKmEa0N, addresssvLpT6v, {from: accounts[5]});
//		const boolgTU9xoG = await HungryHoodyoz5ej0I.transferFrom.call(addressM53YlGs, addressIwwGgE, uintIfio3JI, {from: accounts[1]});

		assert.equal(uinte1WXdH0, BigInt("0"))
		await expect(HungryHoodyoz5ej0I.transferFrom.call(addresseleX5Ln, addresstjuKH5, uintOdTHdxp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyyJIEmFV = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoFeI1EG = accounts[3]
		const addressDlfoOIE = accounts[0]
		const uintnP0OZNo = BigInt("1069")
		const addressEFBBooF = accounts[3]
		const uintX6i7iin = BigInt("834")
		const uintwhHGjJW = BigInt("1260")
		const uintuNNIq4u = BigInt("1397")
		const addressTWvKpjP = accounts[4]
		const uintIFSPXZ = BigInt("2025")
		const addressJ5s2RID = accounts[2]
		const uintb5GTOE6 = await HungryHoodyyJIEmFV.allowance.call(addressDlfoOIE, addressoFeI1EG, {from: accounts[2]});
		const boolNkZwpIU = await HungryHoodyyJIEmFV.transfer.call(addressEFBBooF, uintnP0OZNo, {from: accounts[0]});
		const uintn7nScuy = await HungryHoodyyJIEmFV.safeDiv.call(uintwhHGjJW, uintX6i7iin, {from: accounts[4]});
		const boolj3S6yXD = await HungryHoodyyJIEmFV.approve.call(addressTWvKpjP, uintuNNIq4u, {from: accounts[5]});
		const boolfR6uSxn = await HungryHoodyyJIEmFV.approve.call(addressJ5s2RID, uintIFSPXZ, {from: accounts[5]});
	});
})
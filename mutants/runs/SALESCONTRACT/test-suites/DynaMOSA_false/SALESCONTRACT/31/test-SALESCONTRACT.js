const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTftUNKI8 = await SALESCONTRACT.new({from: accounts[2]});
		const uintV0zcxb5 = BigInt("1473")
		await SALESCONTRACTftUNKI8.ff.call({from: accounts[5]});
		const uintleuCScZ = await SALESCONTRACTftUNKI8._setStage.call(uintV0zcxb5, {from: accounts[0]});

		await expect(SALESCONTRACTftUNKI8.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzye6evS = await SALESCONTRACT.new({from: accounts[3]});
		const uintpBdMsW = BigInt("1384")
		const addressQWOCJPN = accounts[1]
		const addressvFhirf = await SALESCONTRACTzye6evS._setSalesPool.call(addressQWOCJPN, uintpBdMsW, {from: accounts[4]});
		await SALESCONTRACTzye6evS.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTzye6evS._setSalesPool.call(addressQWOCJPN, uintpBdMsW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSOpUP1w = await SALESCONTRACT.new({from: accounts[4]});
		const addressOcgg4L0 = accounts[0]
		const boolTKIhkqQ = await SALESCONTRACTSOpUP1w.tokenSale.call(addressOcgg4L0, {from: accounts[4]});
		await SALESCONTRACTSOpUP1w.ff.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTSOpUP1w.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTSOpUP1w.tokenSale.call(addressOcgg4L0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAiFb8C3 = await SALESCONTRACT.new({from: accounts[0]});
		const addressEsQY7tp = accounts[0]
		await SALESCONTRACTAiFb8C3.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTAiFb8C3.ff.call({from: accounts[1]});
		await SALESCONTRACTAiFb8C3.clearETH.call({from: accounts[3]});
		const addressI0AWO19 = await SALESCONTRACTAiFb8C3.setToken.call(addressEsQY7tp, {from: accounts[4]});

		await expect(SALESCONTRACTAiFb8C3.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTVjlXs = await SALESCONTRACT.new({from: accounts[1]});
		const addressdzWPGCn = "0x0000000000000000000000000000000000000001"
		const addressbCPYnYy = accounts[5]
		await SALESCONTRACTTVjlXs.clearETH.call({from: accounts[1]});
		const address16fLik = await SALESCONTRACTTVjlXs.setToken.call(addressdzWPGCn, {from: "0x0000000000000000000000000000000000000001"});
		const boolgOBl9Kg = await SALESCONTRACTTVjlXs.tokenSale.call(addressbCPYnYy, {from: accounts[5]});

		await expect(SALESCONTRACTTVjlXs.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSOpUP1w = await SALESCONTRACT.new({from: accounts[4]});
		const addresszdCkCOQ = "0x0000000000000000000000000000000000000001"
		const addressPEXSDSo = await SALESCONTRACTSOpUP1w.setToken.call(addresszdCkCOQ, {from: accounts[4]});
		await SALESCONTRACTSOpUP1w.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTSOpUP1w.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSJFIP3e = await SALESCONTRACT.new({from: accounts[1]});
		const uintWZ6Nvf = BigInt("587")
		const addresspWNWO1X = accounts[1]
		const addressZ7Xqs1j = accounts[4]
		const addresst2SMCzk = accounts[2]
		const addressCT5SLUe = await SALESCONTRACTSJFIP3e._setSalesPool.call(addresspWNWO1X, uintWZ6Nvf, {from: accounts[1]});
		await SALESCONTRACTSJFIP3e.clearTokens.call({from: accounts[4]});
		const boolyN6oEfC = await SALESCONTRACTSJFIP3e.tokenSale.call(addressZ7Xqs1j, {from: "0x0000000000000000000000000000000000000001"});
		const boolzBazI7 = await SALESCONTRACTSJFIP3e.tokenSale.call(addresst2SMCzk, {from: accounts[5]});
		await SALESCONTRACTSJFIP3e.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTSJFIP3e.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTIT5i0nU = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfk80Dt9 = accounts[2]
		const uintRJiU3a = BigInt("1363")
		const addressvpzRY6B = accounts[2]
		const uintjQKod4K = BigInt("1703")
		const addressR2ZNG4H = accounts[0]
		const uintacLIZaM = BigInt("1377")
		const addressb6zr006 = accounts[4]
		await SALESCONTRACTIT5i0nU.clearETH.call({from: accounts[5]});
		const addresspn7btIO = await SALESCONTRACTIT5i0nU.setToken.call(addressfk80Dt9, {from: accounts[4]});
		const addressb5FCZnp = await SALESCONTRACTIT5i0nU._setSalesPool.call(addressvpzRY6B, uintRJiU3a, {from: accounts[4]});
		const addressy5tgGGf = await SALESCONTRACTIT5i0nU._setSalesPool.call(addressR2ZNG4H, uintjQKod4K, {from: accounts[4]});
		await SALESCONTRACTIT5i0nU.ff.call({from: accounts[3]});
		const address7NTMv4 = await SALESCONTRACTIT5i0nU._setSalesPool.call(addressb6zr006, uintacLIZaM, {from: accounts[0]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTftUNKI8 = await SALESCONTRACT.new({from: accounts[2]});
		const uintnsulGzA = BigInt("1159")
		const uintbT9v7Ax = await SALESCONTRACTftUNKI8._setStage.call(uintnsulGzA, {from: accounts[2]});
		await SALESCONTRACTftUNKI8.clearETH.call({from: accounts[3]});
		await SALESCONTRACTftUNKI8.ff.call({from: accounts[5]});

		await expect(SALESCONTRACTftUNKI8.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
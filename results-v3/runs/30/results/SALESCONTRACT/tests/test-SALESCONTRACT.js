const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTypDcgae = await SALESCONTRACT.new({from: accounts[0]});
		const addressNa1jAgW = accounts[3]
		const addressZ70ptw8 = accounts[2]
		await SALESCONTRACTypDcgae.clearTokens.call({from: accounts[0]});
		const addresscEBJWrk = await SALESCONTRACTypDcgae.setToken.call(addressNa1jAgW, {from: accounts[1]});
		const addressqOKOwg = await SALESCONTRACTypDcgae.setToken.call(addressZ70ptw8, {from: accounts[0]});

		await expect(SALESCONTRACTypDcgae.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTIxuK4az = await SALESCONTRACT.new({from: accounts[3]});
		const addressCWIaxD8 = accounts[0]
		const addressSqZORtP = accounts[1]
		await SALESCONTRACTIxuK4az.ff.call({from: accounts[0]});
		const addresswEF3QgU = await SALESCONTRACTIxuK4az.setToken.call(addressCWIaxD8, {from: accounts[5]});
		const addressB9ysQsi = await SALESCONTRACTIxuK4az.setToken.call(addressSqZORtP, {from: accounts[5]});

		await expect(SALESCONTRACTIxuK4az.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZ71dNUD = await SALESCONTRACT.new({from: accounts[1]});
		const addresshH3xoC8 = accounts[0]
		const uintmgBmQfu = BigInt("161")
		const addressfkb2rI6 = accounts[3]
		const uintBfO0wyd = BigInt("284")
		const addressokHDlHq = await SALESCONTRACTZ71dNUD.setToken.call(addresshH3xoC8, {from: accounts[1]});
		const addresscABKsd1 = await SALESCONTRACTZ71dNUD._setSalesPool.call(addressfkb2rI6, uintmgBmQfu, {from: accounts[5]});
		const uintCGnXB35 = await SALESCONTRACTZ71dNUD._setStage.call(uintBfO0wyd, {from: accounts[4]});

		await expect(SALESCONTRACTZ71dNUD._setSalesPool.call(addressfkb2rI6, uintmgBmQfu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTsB8w3HG = await SALESCONTRACT.new({from: accounts[3]});
		const uintr8J6zcg = BigInt("720")
		const addressl0arZfX = accounts[3]
		const address2kIuYj = await SALESCONTRACTsB8w3HG._setSalesPool.call(addressl0arZfX, uintr8J6zcg, {from: accounts[3]});
		await SALESCONTRACTsB8w3HG.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTsB8w3HG.ff.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTsB8w3HG.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTsB8w3HG.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTsB8w3HG.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZ71dNUD = await SALESCONTRACT.new({from: accounts[1]});
		const addressu6jczII = accounts[5]
		const uintFtLmtKz = BigInt("296")
		const booltMr5ak = await SALESCONTRACTZ71dNUD.tokenSale.call(addressu6jczII, {from: accounts[1]});
		await SALESCONTRACTZ71dNUD.clearTokens.call({from: accounts[1]});
		const uintCGnXB35 = await SALESCONTRACTZ71dNUD._setStage.call(uintFtLmtKz, {from: accounts[4]});

		await expect(SALESCONTRACTZ71dNUD.tokenSale.call(addressu6jczII, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZ71dNUD = await SALESCONTRACT.new({from: accounts[1]});
		const uintQ3PW1Jr = BigInt("1964")
		const uintTEGUKfr = BigInt("337")
		const uintBorpZza = await SALESCONTRACTZ71dNUD._setStage.call(uintQ3PW1Jr, {from: accounts[1]});
		const uintCGnXB35 = await SALESCONTRACTZ71dNUD._setStage.call(uintTEGUKfr, {from: accounts[4]});

		await expect(SALESCONTRACTZ71dNUD._setStage.call(uintTEGUKfr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZ71dNUD = await SALESCONTRACT.new({from: accounts[1]});
		const uintauJK7jJ = BigInt("1952")
		const uintBorpZza = await SALESCONTRACTZ71dNUD._setStage.call(uintauJK7jJ, {from: accounts[1]});
		await SALESCONTRACTZ71dNUD.clearETH.call({from: accounts[1]});
		await SALESCONTRACTZ71dNUD.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTZ71dNUD.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTi4cotQ = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrgpYyOk = BigInt("743")
		const addressdjW2JXN = accounts[0]
		const uintLkm1BUX = BigInt("676")
		const addressu3XMOb2 = accounts[4]
		const addressxniRfva = accounts[0]
		const addressA3VlthR = await SALESCONTRACTi4cotQ._setSalesPool.call(addressdjW2JXN, uintrgpYyOk, {from: accounts[1]});
		await SALESCONTRACTi4cotQ.ff.call({from: accounts[3]});
		const addressRTnMCn4 = await SALESCONTRACTi4cotQ._setSalesPool.call(addressu3XMOb2, uintLkm1BUX, {from: accounts[4]});
		const addressvsBJIfg = await SALESCONTRACTi4cotQ.setToken.call(addressxniRfva, {from: accounts[2]});
	});
})
const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTFP6Po1 = await SALESCONTRACT.new({from: accounts[2]});
		const addressvlkJxN4 = accounts[3]
		await SALESCONTRACTFP6Po1.ff.call({from: accounts[4]});
		await SALESCONTRACTFP6Po1.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTFP6Po1.clearTokens.call({from: accounts[3]});
		const addressWc72hKL = await SALESCONTRACTFP6Po1.setToken.call(addressvlkJxN4, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTFP6Po1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTFP6Po1.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTFP6Po1.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTkLUyjS1 = await SALESCONTRACT.new({from: accounts[1]});
		const uintKnuo77x = BigInt("96")
		const addressLcrs36i = accounts[4]
		const uintQQR1Rkq = BigInt("107")
		const addressC7qSI63 = accounts[2]
		const address3aaHsK = accounts[1]
		const addressVb2Fyh = await SALESCONTRACTkLUyjS1._setSalesPool.call(addressLcrs36i, uintKnuo77x, {from: accounts[1]});
		const addresseYFj71i = await SALESCONTRACTkLUyjS1._setSalesPool.call(addressC7qSI63, uintQQR1Rkq, {from: accounts[5]});
		const boolQbxzJ60 = await SALESCONTRACTkLUyjS1.tokenSale.call(address3aaHsK, {from: accounts[2]});

		await expect(SALESCONTRACTkLUyjS1._setSalesPool.call(addressC7qSI63, uintQQR1Rkq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSP76tRn = await SALESCONTRACT.new({from: accounts[1]});
		const addressamxZ3zR = accounts[4]
		const addressrCmu2rU = accounts[1]
		const uintOBmEJQ = BigInt("687")
		const addressnkQVFh6 = accounts[1]
		const boolxPeXt3S = await SALESCONTRACTSP76tRn.tokenSale.call(addressamxZ3zR, {from: accounts[4]});
		await SALESCONTRACTSP76tRn.clearTokens.call({from: accounts[0]});
		const boolcQKQ0DA = await SALESCONTRACTSP76tRn.tokenSale.call(addressrCmu2rU, {from: accounts[5]});
		const addressL7ukdxG = await SALESCONTRACTSP76tRn._setSalesPool.call(addressnkQVFh6, uintOBmEJQ, {from: accounts[3]});

		await expect(SALESCONTRACTSP76tRn.tokenSale.call(addressamxZ3zR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSVRCLQ0 = await SALESCONTRACT.new({from: accounts[4]});
		const addressTu4mZP = accounts[5]
		const uintSnxpCgG = BigInt("698")
		const uintv2AlUrc = BigInt("1359")
		const addressXhPIJ5i = await SALESCONTRACTSVRCLQ0.setToken.call(addressTu4mZP, {from: accounts[4]});
		await SALESCONTRACTSVRCLQ0.clearETH.call({from: accounts[3]});
		const uintRN6G0OT = await SALESCONTRACTSVRCLQ0._setStage.call(uintSnxpCgG, {from: accounts[5]});
		const uintnU8GZXi = await SALESCONTRACTSVRCLQ0._setStage.call(uintv2AlUrc, {from: accounts[3]});

		await expect(SALESCONTRACTSVRCLQ0.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRX5gogn = await SALESCONTRACT.new({from: accounts[5]});
		const uintPoIneu = BigInt("1938")
		const addressmWkcJb = accounts[3]
		const addressPUdMkhK = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTRX5gogn.clearETH.call({from: accounts[5]});
		const addressrQNF48F = await SALESCONTRACTRX5gogn._setSalesPool.call(addressmWkcJb, uintPoIneu, {from: "0x0000000000000000000000000000000000000001"});
		const boolmWNfwHP = await SALESCONTRACTRX5gogn.tokenSale.call(addressPUdMkhK, {from: accounts[0]});

		await expect(SALESCONTRACTRX5gogn.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTo8MRVcV = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb7HgCk = accounts[4]
		const addresss2KTxRT = accounts[5]
		const uintP1mEBlC = BigInt("1857")
		const addresseDo4nzh = "0x0000000000000000000000000000000000000001"
		const addressu84COqM = accounts[3]
		const addressh2MGE6X = accounts[2]
		const boolW4zDl7i = await SALESCONTRACTo8MRVcV.tokenSale.call(addressb7HgCk, {from: "0x0000000000000000000000000000000000000001"});
		const booltoqhKzN = await SALESCONTRACTo8MRVcV.tokenSale.call(addresss2KTxRT, {from: accounts[5]});
		const addresskPIVMe = await SALESCONTRACTo8MRVcV._setSalesPool.call(addresseDo4nzh, uintP1mEBlC, {from: accounts[4]});
		await SALESCONTRACTo8MRVcV.clearTokens.call({from: accounts[3]});
		const addressynU9vTY = await SALESCONTRACTo8MRVcV.setToken.call(addressu84COqM, {from: accounts[5]});
		const addressZEqUICR = await SALESCONTRACTo8MRVcV.setToken.call(addressh2MGE6X, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTd7WmXDx = await SALESCONTRACT.new({from: accounts[0]});
		const addressZIEPna3 = accounts[0]
		const addressK4HejVU = accounts[3]
		await SALESCONTRACTd7WmXDx.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTd7WmXDx.clearTokens.call({from: accounts[1]});
		await SALESCONTRACTd7WmXDx.clearTokens.call({from: accounts[4]});
		const boolcsKhEx = await SALESCONTRACTd7WmXDx.tokenSale.call(addressZIEPna3, {from: accounts[4]});
		const boolOTRPMi7 = await SALESCONTRACTd7WmXDx.tokenSale.call(addressK4HejVU, {from: accounts[0]});
		await SALESCONTRACTd7WmXDx.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTd7WmXDx.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRX5gogn = await SALESCONTRACT.new({from: accounts[5]});
		const uintfKrbel = BigInt("1385")
		const uintCq8vQAI = BigInt("1903")
		const addressq3FCCGq = accounts[3]
		const uintXekYITP = BigInt("1239")
		const addresstTBM5r5 = accounts[1]
		const uintsu3CVzH = await SALESCONTRACTRX5gogn._setStage.call(uintfKrbel, {from: accounts[5]});
		const addressdpZ4LV = await SALESCONTRACTRX5gogn._setSalesPool.call(addressq3FCCGq, uintCq8vQAI, {from: accounts[0]});
		const addressrTqtgV4 = await SALESCONTRACTRX5gogn._setSalesPool.call(addresstTBM5r5, uintXekYITP, {from: accounts[3]});

		await expect(SALESCONTRACTRX5gogn._setSalesPool.call(addressq3FCCGq, uintCq8vQAI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
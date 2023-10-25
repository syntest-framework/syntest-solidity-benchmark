const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdUoWXTx = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressi1hchAb = accounts[4]
		await SALESCONTRACTdUoWXTx.ff.call({from: accounts[1]});
		await SALESCONTRACTdUoWXTx.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTdUoWXTx.clearETH.call({from: accounts[2]});
		const boolTh5QJZC = await SALESCONTRACTdUoWXTx.tokenSale.call(addressi1hchAb, {from: accounts[3]});
		await SALESCONTRACTdUoWXTx.clearETH.call({from: accounts[5]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEb0TLpl = await SALESCONTRACT.new({from: accounts[3]});
		const addressu4VH4cP = accounts[1]
		await SALESCONTRACTEb0TLpl.ff.call({from: accounts[0]});
		await SALESCONTRACTEb0TLpl.clearTokens.call({from: accounts[5]});
		await SALESCONTRACTEb0TLpl.clearETH.call({from: accounts[2]});
		const boolNULmsgY = await SALESCONTRACTEb0TLpl.tokenSale.call(addressu4VH4cP, {from: accounts[0]});

		await expect(SALESCONTRACTEb0TLpl.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbeKdXPu = await SALESCONTRACT.new({from: accounts[2]});
		const addresswPuSfuB = accounts[5]
		const addressWe5fstE = accounts[2]
		const uintno9aJQi = BigInt("925")
		const addressFRcEv3Y = accounts[0]
		const addresspK5RmiU = accounts[1]
		const addresspd81TJ = await SALESCONTRACTbeKdXPu.setToken.call(addresswPuSfuB, {from: "0x0000000000000000000000000000000000000001"});
		const booljUoRgqm = await SALESCONTRACTbeKdXPu.tokenSale.call(addressWe5fstE, {from: accounts[0]});
		const addressqODN1gH = await SALESCONTRACTbeKdXPu._setSalesPool.call(addressFRcEv3Y, uintno9aJQi, {from: "0x0000000000000000000000000000000000000001"});
		const boolv2soU2v = await SALESCONTRACTbeKdXPu.tokenSale.call(addresspK5RmiU, {from: accounts[4]});

		await expect(SALESCONTRACTbeKdXPu.setToken.call(addresswPuSfuB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbsIBDS3 = await SALESCONTRACT.new({from: accounts[2]});
		const addressxCorSW1 = accounts[1]
		const uintTHKshGh = BigInt("1592")
		const addresswtoJPBt = accounts[2]
		const addressA1iuzHw = accounts[2]
		const boolaYxlBax = await SALESCONTRACTbsIBDS3.tokenSale.call(addressxCorSW1, {from: accounts[2]});
		await SALESCONTRACTbsIBDS3.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmqLtoEV = await SALESCONTRACTbsIBDS3._setSalesPool.call(addresswtoJPBt, uintTHKshGh, {from: accounts[1]});
		await SALESCONTRACTbsIBDS3.clearETH.call({from: accounts[1]});
		const addresscHVhQD = await SALESCONTRACTbsIBDS3.setToken.call(addressA1iuzHw, {from: accounts[1]});

		await expect(SALESCONTRACTbsIBDS3.tokenSale.call(addressxCorSW1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTx7oABQ = await SALESCONTRACT.new({from: accounts[2]});
		const uinthrK253O = BigInt("323")
		const addresskTh5see = accounts[1]
		const addresseOJ2I0 = accounts[2]
		const addressfOixvbd = accounts[5]
		const addressATye5e = await SALESCONTRACTx7oABQ._setSalesPool.call(addresskTh5see, uinthrK253O, {from: accounts[2]});
		const boolb7iXaU = await SALESCONTRACTx7oABQ.tokenSale.call(addresseOJ2I0, {from: accounts[4]});
		const addressQkiS1i = await SALESCONTRACTx7oABQ.setToken.call(addressfOixvbd, {from: accounts[3]});

		await expect(SALESCONTRACTx7oABQ.tokenSale.call(addresseOJ2I0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTx7oABQ = await SALESCONTRACT.new({from: accounts[2]});
		const addressyXIir0v = accounts[1]
		const uintsjuvQeg = BigInt("169")
		const addressNCaj5QC = accounts[3]
		const addressp71DILf = accounts[5]
		const addressoKVByw = await SALESCONTRACTx7oABQ.setToken.call(addressyXIir0v, {from: accounts[2]});
		const addresssTc0cuG = await SALESCONTRACTx7oABQ._setSalesPool.call(addressNCaj5QC, uintsjuvQeg, {from: accounts[0]});
		const addressQkiS1i = await SALESCONTRACTx7oABQ.setToken.call(addressp71DILf, {from: accounts[3]});

		await expect(SALESCONTRACTx7oABQ._setSalesPool.call(addressNCaj5QC, uintsjuvQeg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTiQrFdd = await SALESCONTRACT.new({from: accounts[0]});
		const uinty1anADw = BigInt("1713")
		const uintZ4viHu = BigInt("1589")
		const addressrdlxSX0 = accounts[1]
		await SALESCONTRACTiQrFdd.clearETH.call({from: accounts[0]});
		await SALESCONTRACTiQrFdd.clearETH.call({from: accounts[3]});
		const uintQgq7vRX = await SALESCONTRACTiQrFdd._setStage.call(uinty1anADw, {from: accounts[0]});
		const addresszeRWRfm = await SALESCONTRACTiQrFdd._setSalesPool.call(addressrdlxSX0, uintZ4viHu, {from: accounts[4]});
		await SALESCONTRACTiQrFdd.ff.call({from: accounts[5]});

		await expect(SALESCONTRACTiQrFdd.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTx7oABQ = await SALESCONTRACT.new({from: accounts[2]});
		const uint5pRcbA = BigInt("1430")
		const addressrVTDDEL = accounts[5]
		const addressN6aJ7EZ = "0x0000000000000000000000000000000000000001"
		const uintLTuXcOq = await SALESCONTRACTx7oABQ._setStage.call(uint5pRcbA, {from: accounts[2]});
		const addressQkiS1i = await SALESCONTRACTx7oABQ.setToken.call(addressrVTDDEL, {from: accounts[3]});
		const addressQLAsiX = await SALESCONTRACTx7oABQ.setToken.call(addressN6aJ7EZ, {from: accounts[2]});

		await expect(SALESCONTRACTx7oABQ.setToken.call(addressrVTDDEL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdWw2Lfw = await SALESCONTRACT.new({from: accounts[0]});
		const addressjzCKDis = accounts[4]
		const addressxzghxHl = accounts[0]
		const addressKxNMxv = await SALESCONTRACTdWw2Lfw.setToken.call(addressjzCKDis, {from: accounts[0]});
		await SALESCONTRACTdWw2Lfw.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTdWw2Lfw.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addresswl79Gij = await SALESCONTRACTdWw2Lfw.setToken.call(addressxzghxHl, {from: accounts[1]});
		await SALESCONTRACTdWw2Lfw.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTdWw2Lfw.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTH8M1KSy = await SALESCONTRACT.new({from: accounts[5]});
		const uintTBKBXoZ = BigInt("271")
		const addressrVblIbv = accounts[0]
		const addressQD1NIET = accounts[4]
//		const addressOolivCG = await SALESCONTRACTH8M1KSy._setSalesPool.call(addressrVblIbv, uintTBKBXoZ, {from: accounts[4]});
//		await SALESCONTRACTH8M1KSy.clearTokens.call({from: accounts[0]});
//		const boolaSYKQYn = await SALESCONTRACTH8M1KSy.tokenSale.call(addressQD1NIET, {from: accounts[1]});
//		await SALESCONTRACTH8M1KSy.clearETH.call({from: accounts[2]});

		await expect(SALESCONTRACTH8M1KSy._setSalesPool.call(addressrVblIbv, uintTBKBXoZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTM36nCD = await SALESCONTRACT.new({from: accounts[0]});
		const uintIIpP78E = BigInt("416")
		const addressHBaujC2 = accounts[1]
		const addressLkHuNe = accounts[5]
		const addressSljq9j = await SALESCONTRACTM36nCD._setSalesPool.call(addressHBaujC2, uintIIpP78E, {from: accounts[0]});
//		await SALESCONTRACTM36nCD.clearETH.call({from: accounts[2]});
//		await SALESCONTRACTM36nCD.ff.call({from: accounts[3]});
//		const addresstqGzwio = await SALESCONTRACTM36nCD.setToken.call(addressLkHuNe, {from: accounts[4]});
//		await SALESCONTRACTM36nCD.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTM36nCD.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzLV35U = await SALESCONTRACT.new({from: accounts[3]});
		const uintl5FJxZ3 = BigInt("300")
		const addressI126gmy = accounts[2]
		const addresspsflwdT = accounts[0]
//		await SALESCONTRACTzLV35U.clearTokens.call({from: accounts[3]});
//		const addressPfNcELp = await SALESCONTRACTzLV35U._setSalesPool.call(addressI126gmy, uintl5FJxZ3, {from: accounts[3]});
//		await SALESCONTRACTzLV35U.ff.call({from: accounts[0]});
//		const boolpyj0Jn2 = await SALESCONTRACTzLV35U.tokenSale.call(addresspsflwdT, {from: accounts[2]});

		await expect(SALESCONTRACTzLV35U.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT57oOCi = await SALESCONTRACT.new({from: accounts[1]});
		const addressIWaXckH = accounts[2]
		const uintumxoZUm = BigInt("1898")
		const addressYVxdVV6 = accounts[3]
//		await SALESCONTRACT57oOCi.ff.call({from: accounts[2]});
//		const addressvp7wOeb = await SALESCONTRACT57oOCi.setToken.call(addressIWaXckH, {from: accounts[4]});
//		const addressjisECes = await SALESCONTRACT57oOCi._setSalesPool.call(addressYVxdVV6, uintumxoZUm, {from: accounts[1]});

		await expect(SALESCONTRACT57oOCi.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQ4p6XWz = await SALESCONTRACT.new({from: accounts[5]});
//		await SALESCONTRACTQ4p6XWz.clearETH.call({from: accounts[5]});
//		await SALESCONTRACTQ4p6XWz.clearETH.call({from: accounts[0]});

		await expect(SALESCONTRACTQ4p6XWz.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAGcgWn = await SALESCONTRACT.new({from: accounts[5]});
		const addressu0hAdMw = accounts[4]
		const addressdQi9V7V = accounts[2]
		const uintgdCYKFl = BigInt("2060")
		const addressgbK84fO = accounts[0]
		const addressPvEOQoE = accounts[2]
//		const boollSCKT2e = await SALESCONTRACTAGcgWn.tokenSale.call(addressu0hAdMw, {from: accounts[0]});
//		const addressbVDeIr7 = await SALESCONTRACTAGcgWn.setToken.call(addressdQi9V7V, {from: accounts[1]});
//		const addressnVpOFpd = await SALESCONTRACTAGcgWn._setSalesPool.call(addressgbK84fO, uintgdCYKFl, {from: accounts[3]});
//		const boolJLlzz8J = await SALESCONTRACTAGcgWn.tokenSale.call(addressPvEOQoE, {from: accounts[1]});
//		await SALESCONTRACTAGcgWn.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTAGcgWn.tokenSale.call(addressu0hAdMw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTxIlDNbS = await SALESCONTRACT.new({from: accounts[1]});
		const uintnaFClUN = BigInt("1329")
		const addresskQlO5F = accounts[4]
		const uintjTkeSyo = BigInt("1546")
		const addresshHUroDD = accounts[0]
		const uintKY82U8T = BigInt("1660")
		const uintsHm136v = await SALESCONTRACTxIlDNbS._setStage.call(uintnaFClUN, {from: accounts[1]});
//		const boolyvccJjD = await SALESCONTRACTxIlDNbS.tokenSale.call(addresskQlO5F, {from: accounts[0]});
//		const addressGHE35V4 = await SALESCONTRACTxIlDNbS._setSalesPool.call(addresshHUroDD, uintjTkeSyo, {from: accounts[2]});
//		const uintio6Dw2B = await SALESCONTRACTxIlDNbS._setStage.call(uintKY82U8T, {from: accounts[0]});

		await expect(SALESCONTRACTxIlDNbS.tokenSale.call(addresskQlO5F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTppkqqBN = await SALESCONTRACT.new({from: accounts[3]});
		const addressnYmWh01 = accounts[5]
		const uintddwYMZd = BigInt("406")
		const uintNelRi5K = BigInt("1239")
		const addressYJbxG90 = await SALESCONTRACTppkqqBN.setToken.call(addressnYmWh01, {from: accounts[3]});
//		await SALESCONTRACTppkqqBN.ff.call({from: accounts[1]});
//		const uint9o1YeL = await SALESCONTRACTppkqqBN._setStage.call(uintddwYMZd, {from: accounts[2]});
//		const uinthagoXNj = await SALESCONTRACTppkqqBN._setStage.call(uintNelRi5K, {from: accounts[0]});

		await expect(SALESCONTRACTppkqqBN.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEWQBl4I = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWtnueqP = accounts[2]
		const addressbAEd12F = accounts[2]
		const addressmVHBW46 = accounts[5]
		const addressN5w4cIe = await SALESCONTRACTEWQBl4I.setToken.call(addressWtnueqP, {from: accounts[4]});
		const addressjf50yFj = await SALESCONTRACTEWQBl4I.setToken.call(addressbAEd12F, {from: accounts[0]});
		const boolrYDliX3 = await SALESCONTRACTEWQBl4I.tokenSale.call(addressmVHBW46, {from: accounts[4]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTLuDrd3A = await SALESCONTRACT.new({from: accounts[4]});
		const addressZSpUibV = "0x00000000000000000000000000000000000000-1"
		const uintB9BPNyU = BigInt("870")
		const addresszUtfR4S = accounts[0]
		const addresskkHQfih = accounts[2]
		const uintD0je4Vw = BigInt("1190")
		const addressFX5hQHd = accounts[0]
		const uintJgwnE4p = BigInt("898")
		const addressInRywav = accounts[4]
		const uintLlpzEyJ = BigInt("1870")
//		const boolcH3P2wl = await SALESCONTRACTLuDrd3A.tokenSale.call(addressZSpUibV, {from: accounts[2]});
//		await SALESCONTRACTLuDrd3A.clearTokens.call({from: accounts[1]});
//		const addressRevkvWu = await SALESCONTRACTLuDrd3A._setSalesPool.call(addresszUtfR4S, uintB9BPNyU, {from: accounts[5]});
//		await SALESCONTRACTLuDrd3A.clearTokens.call({from: accounts[0]});
//		const addresssbufCZX = await SALESCONTRACTLuDrd3A.setToken.call(addresskkHQfih, {from: "0x0000000000000000000000000000000000000001"});
//		const addressiHqE2nA = await SALESCONTRACTLuDrd3A._setSalesPool.call(addressFX5hQHd, uintD0je4Vw, {from: accounts[2]});
//		await SALESCONTRACTLuDrd3A.clearTokens.call({from: accounts[3]});
//		const addressidKrhLn = await SALESCONTRACTLuDrd3A._setSalesPool.call(addressInRywav, uintJgwnE4p, {from: accounts[4]});
//		const uint41aIwg = await SALESCONTRACTLuDrd3A._setStage.call(uintLlpzEyJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTLuDrd3A.tokenSale.call(addressZSpUibV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
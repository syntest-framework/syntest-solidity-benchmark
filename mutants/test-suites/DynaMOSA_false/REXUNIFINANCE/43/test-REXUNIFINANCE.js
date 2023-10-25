const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESFftL55 = await REXUNIFINANCE.new({from: accounts[3]});
		const addressTdAxOJb = accounts[3]
		const uintmHcFImP = BigInt("2026")
		const addressPQSADty = accounts[2]
		const addressZOMBVHj = accounts[0]
		const uint256TRFgNF = await REXUNIFINANCESFftL55.balanceOf.call(addressTdAxOJb, {from: accounts[0]});
//		const boolr7qTbhF = await REXUNIFINANCESFftL55.transferFrom.call(addressZOMBVHj, addressPQSADty, uintmHcFImP, {from: accounts[0]});

		assert.equal(uint256TRFgNF, BigInt("0"))
		await expect(REXUNIFINANCESFftL55.transferFrom.call(addressZOMBVHj, addressPQSADty, uintmHcFImP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEFkmZmrK = await REXUNIFINANCE.new({from: accounts[4]});
		const uintxe6b0rD = BigInt("974")
		const addressUodOflT = accounts[3]
		const uintp1Nk34O = BigInt("27")
		const addressDFEbFfg = accounts[4]
		const uints6iNDAj = BigInt("1588")
		const addressEKYkCzk = accounts[3]
		const addressLZ5hyIL = accounts[3]
		const addresstgLCiRK = accounts[2]
		const uintBxjdd7D = BigInt("1036")
		const addressLiO7YFG = accounts[3]
		const boole6mxNo = await REXUNIFINANCEFkmZmrK.approve.call(addressUodOflT, uintxe6b0rD, {from: "0x0000000000000000000000000000000000000001"});
		const boolHgUyqXH = await REXUNIFINANCEFkmZmrK.approve.call(addressDFEbFfg, uintp1Nk34O, {from: accounts[5]});
//		const boolfY0Q8K = await REXUNIFINANCEFkmZmrK.transferFrom.call(addressLZ5hyIL, addressEKYkCzk, uints6iNDAj, {from: "0x0000000000000000000000000000000000000001"});
//		const addresse4H5rEq = await REXUNIFINANCEFkmZmrK.transferOwnership.call(addresstgLCiRK, {from: accounts[4]});
//		const boolXD1xMjy = await REXUNIFINANCEFkmZmrK.increaseApproval.call(addressLiO7YFG, uintBxjdd7D, {from: accounts[2]});

		assert.equal(boolHgUyqXH, true)
		assert.equal(boole6mxNo, true)
		await expect(REXUNIFINANCEFkmZmrK.transferFrom.call(addressLZ5hyIL, addressEKYkCzk, uints6iNDAj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE3k1CFF = await REXUNIFINANCE.new({from: accounts[4]});
		const addressxOjIdBo = accounts[0]
		const addressqjWe68o = accounts[4]
		const uintw85Q7Gf = BigInt("169")
		const addressOnQdKaD = accounts[1]
//		const addressVKc5pJc = await REXUNIFINANCE3k1CFF.transferOwnership.call(addressxOjIdBo, {from: accounts[0]});
//		const uint256YnORMZx = await REXUNIFINANCE3k1CFF.balanceOf.call(addressqjWe68o, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRfQ0Tp = await REXUNIFINANCE3k1CFF.approve.call(addressOnQdKaD, uintw85Q7Gf, {from: accounts[5]});

		await expect(REXUNIFINANCE3k1CFF.transferOwnership.call(addressxOjIdBo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjr1xtKn = await REXUNIFINANCE.new({from: accounts[2]});
		const uintHSNgiYs = BigInt("1961")
		const address7JRQsu = accounts[2]
		const uintgsbe6qW = BigInt("1463")
		const addressxEOFckV = accounts[4]
		const uintUrCBQ3u = BigInt("824")
		const addressillUTbf = accounts[0]
//		const booljfp4xLr = await REXUNIFINANCEjr1xtKn.decreaseApproval.call(address7JRQsu, uintHSNgiYs, {from: accounts[2]});
//		const booldi8zrpS = await REXUNIFINANCEjr1xtKn.transfer.call(addressxEOFckV, uintgsbe6qW, {from: accounts[1]});
//		const boolGr4tOow = await REXUNIFINANCEjr1xtKn.transfer.call(addressillUTbf, uintUrCBQ3u, {from: accounts[1]});

		await expect(REXUNIFINANCEjr1xtKn.decreaseApproval.call(address7JRQsu, uintHSNgiYs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElhnEsh = await REXUNIFINANCE.new({from: accounts[3]});
		const addressyR7JhPv = accounts[1]
		const addressrWiYlg = accounts[0]
		const addressEhCscB = accounts[3]
		const addresspMKrLFU = accounts[0]
		const addresstxFxe31 = accounts[4]
		const addressoy5yHKc = accounts[2]
		const uintQs24J8 = BigInt("816")
		const address9fKzSz = accounts[4]
		const addressPosJ3oO = accounts[3]
		const uint256mrNExP = await REXUNIFINANCElhnEsh.allowance.call(addressrWiYlg, addressyR7JhPv, {from: accounts[4]});
		const uint256aXk4Cbz = await REXUNIFINANCElhnEsh.balanceOf.call(addressEhCscB, {from: accounts[3]});
		const uint256bWDjwHu = await REXUNIFINANCElhnEsh.allowance.call(addresstxFxe31, addresspMKrLFU, {from: accounts[2]});
//		const addressdzpRqlI = await REXUNIFINANCElhnEsh.transferOwnership.call(addressoy5yHKc, {from: accounts[1]});
//		const boolmCFuOmu = await REXUNIFINANCElhnEsh.transferFrom.call(addressPosJ3oO, address9fKzSz, uintQs24J8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256aXk4Cbz, BigInt("0"))
		assert.equal(uint256bWDjwHu, BigInt("0"))
		assert.equal(uint256mrNExP, BigInt("0"))
		await expect(REXUNIFINANCElhnEsh.transferOwnership.call(addressoy5yHKc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPJSAeEI = await REXUNIFINANCE.new({from: accounts[3]});
		const uintbaoP1m0 = BigInt("1694")
		const addressPW63OL3 = accounts[3]
		const uintmKWUbQK = BigInt("1028")
		const addressZfmsZD = "0x0000000000000000000000000000000000000001"
		const addresshvzOocL = accounts[0]
		const addressr6RvvA3 = accounts[1]
//		const boolREguGEi = await REXUNIFINANCEPJSAeEI.transfer.call(addressPW63OL3, uintbaoP1m0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolN7Sgunc = await REXUNIFINANCEPJSAeEI.approve.call(addressZfmsZD, uintmKWUbQK, {from: accounts[4]});
//		const uint256JLpWz1x = await REXUNIFINANCEPJSAeEI.balanceOf.call(addresshvzOocL, {from: accounts[1]});
//		const addressp5EoOlM = await REXUNIFINANCEPJSAeEI.transferOwnership.call(addressr6RvvA3, {from: accounts[3]});

		await expect(REXUNIFINANCEPJSAeEI.transfer.call(addressPW63OL3, uintbaoP1m0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjr1xtKn = await REXUNIFINANCE.new({from: accounts[2]});
		const uintds3nyYJ = BigInt("1961")
		const addresspRfJOWe = accounts[3]
		const uint4iIswu = BigInt("1463")
		const addressgGpJrl3 = accounts[4]
		const uintGAFmgnw = BigInt("824")
		const addressn50FyLW = accounts[0]
		const booljfp4xLr = await REXUNIFINANCEjr1xtKn.decreaseApproval.call(addresspRfJOWe, uintds3nyYJ, {from: accounts[2]});
//		const booldi8zrpS = await REXUNIFINANCEjr1xtKn.transfer.call(addressgGpJrl3, uint4iIswu, {from: accounts[1]});
//		const boolGr4tOow = await REXUNIFINANCEjr1xtKn.transfer.call(addressn50FyLW, uintGAFmgnw, {from: accounts[1]});

		assert.equal(booljfp4xLr, true)
		await expect(REXUNIFINANCEjr1xtKn.transfer.call(addressgGpJrl3, uint4iIswu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEfyLRDld = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvux4rc3 = accounts[0]
		const uintFjrARur = BigInt("191")
		const addressQMsVBoF = "0x0000000000000000000000000000000000000001"
		const addresssWyNXta = accounts[3]
		const uintA2YP2wi = BigInt("993")
		const addressYwMEiC0 = accounts[2]
		const uint256Z1NWNn8 = await REXUNIFINANCEfyLRDld.balanceOf.call(addressvux4rc3, {from: accounts[4]});
		const boolQEXn3Ax = await REXUNIFINANCEfyLRDld.transferFrom.call(addresssWyNXta, addressQMsVBoF, uintFjrARur, {from: accounts[4]});
		const boolB1cWLFZ = await REXUNIFINANCEfyLRDld.increaseApproval.call(addressYwMEiC0, uintA2YP2wi, {from: accounts[4]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYkVMyTS = await REXUNIFINANCE.new({from: accounts[1]});
		const uintvsxX4ik = BigInt("728")
		const addressDcidZsC = accounts[0]
		const addressbZThKFn = accounts[4]
		const uintfKgTIz9 = BigInt("274")
		const addressIpBhdh = accounts[1]
		const addressYvl6D9F = accounts[5]
		const uintaoU8fe8 = BigInt("25")
		const addressWCuaci8 = accounts[3]
		const booljfhApxh = await REXUNIFINANCEYkVMyTS.increaseApproval.call(addressDcidZsC, uintvsxX4ik, {from: accounts[4]});
//		const addressp0UjTzN = await REXUNIFINANCEYkVMyTS.transferOwnership.call(addressbZThKFn, {from: accounts[2]});
//		const boolOXVvZaZ = await REXUNIFINANCEYkVMyTS.approve.call(addressIpBhdh, uintfKgTIz9, {from: accounts[3]});
//		const uint256v61Udrq = await REXUNIFINANCEYkVMyTS.balanceOf.call(addressYvl6D9F, {from: accounts[1]});
//		const boolHMQ4cMV = await REXUNIFINANCEYkVMyTS.transfer.call(addressWCuaci8, uintaoU8fe8, {from: accounts[1]});

		assert.equal(booljfhApxh, true)
		await expect(REXUNIFINANCEYkVMyTS.transferOwnership.call(addressbZThKFn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
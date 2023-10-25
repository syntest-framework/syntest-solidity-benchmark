const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADbgwOyE = await ZAD.new({from: accounts[1]});
		const uintfo8v8g = BigInt("1055")
		const addressdnPRdi = accounts[5]
		const uintp9xDPuE = BigInt("1009")
		const addressnvrT6Kp = accounts[5]
		const boolI8yHJfi = await ZADbgwOyE.transfer.call(addressdnPRdi, uintfo8v8g, {from: accounts[4]});
		const stringxmv69fE = await ZADbgwOyE.name.call({from: accounts[3]});
		const uint256WE0uymC = await ZADbgwOyE.totalSupply.call({from: accounts[0]});
		const boolwUtVdFb = await ZADbgwOyE.increaseAllowance.call(addressnvrT6Kp, uintp9xDPuE, {from: accounts[0]});

		await expect(ZADbgwOyE.transfer.call(addressdnPRdi, uintfo8v8g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWuQoQZ7 = await ZAD.new({from: accounts[1]});
		const stringcp5ZWRf = await ZADWuQoQZ7.name.call({from: accounts[4]});
		const stringEA9yOJx = await ZADWuQoQZ7.symbol.call({from: accounts[1]});
		const uint256UGTArS2 = await ZADWuQoQZ7.totalSupply.call({from: accounts[2]});

		assert.equal(stringEA9yOJx, "ZAD")
		assert.equal(stringcp5ZWRf, "Zadkiel")
		assert.equal(uint256UGTArS2, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADkh8FziQ = await ZAD.new({from: accounts[0]});
		const uintGDK5ok = BigInt("1022")
		const addresst3ppn6H = accounts[1]
		const uintF0NvWcw = BigInt("516")
		const addressNT210S = "0x0000000000000000000000000000000000000001"
		const uintv1wjVyP = BigInt("626")
		const addresstahgVqJ = accounts[3]
		const uintGRYbAoH = BigInt("55")
		const addresskcXfGiT = accounts[2]
		const boolJCti8PV = await ZADkh8FziQ.increaseAllowance.call(addresst3ppn6H, uintGDK5ok, {from: accounts[5]});
		const boolW9NiWVk = await ZADkh8FziQ.decreaseAllowance.call(addressNT210S, uintF0NvWcw, {from: accounts[0]});
		const bool8DgTOF = await ZADkh8FziQ.increaseAllowance.call(addresstahgVqJ, uintv1wjVyP, {from: accounts[3]});
		const boolHmwf1oP = await ZADkh8FziQ.transfer.call(addresskcXfGiT, uintGRYbAoH, {from: accounts[0]});
		const stringBrFEEaw = await ZADkh8FziQ.symbol.call({from: accounts[2]});

		assert.equal(boolJCti8PV, true)
		await expect(ZADkh8FziQ.decreaseAllowance.call(addressNT210S, uintF0NvWcw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADEPUkWkC = await ZAD.new({from: accounts[3]});
		const uint8M5pVN = BigInt("974")
		const uintEDt5p9Y = BigInt("1542")
		const addressv08ijDm = accounts[3]
		const uint256qKK7EQg = await ZADEPUkWkC._burn.call(uint8M5pVN, {from: accounts[3]});
		const boolMUREmdQ = await ZADEPUkWkC.increaseAllowance.call(addressv08ijDm, uintEDt5p9Y, {from: accounts[3]});
		const uint8Tlsuxf = await ZADEPUkWkC.decimals.call({from: accounts[4]});

		await expect(ZADEPUkWkC._burn.call(uint8M5pVN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADI9cvEF = await ZAD.new({from: accounts[2]});
		const uintuan64KP = BigInt("1390")
		const addressEHAtOPF = accounts[0]
		const addressqvvlhjB = accounts[5]
		const addressl6kimCs = accounts[4]
		const boolAErzhtm = await ZADI9cvEF.approve.call(addressEHAtOPF, uintuan64KP, {from: accounts[5]});
		const uint256VMEdwaX = await ZADI9cvEF.allowance.call(addressl6kimCs, addressqvvlhjB, {from: accounts[0]});

		assert.equal(boolAErzhtm, true)
		assert.equal(uint256VMEdwaX, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADhCbYxr = await ZAD.new({from: accounts[4]});
		const uintKc50NXo = BigInt("737")
		const addresswAs3jdR = accounts[1]
		const addressf6nb5Wi = accounts[0]
		const uintnVZg9LH = BigInt("1675")
		const addressE3wRYC = accounts[5]
		const uinth7tdh0K = BigInt("96")
		const addressr5IC11X = "0x0000000000000000000000000000000000000001"
		const uint8cxP2Nsy = await ZADhCbYxr.decimals.call({from: accounts[0]});
		const boolqQT4kWS = await ZADhCbYxr.increaseAllowance.call(addresswAs3jdR, uintKc50NXo, {from: accounts[0]});
		const uint2566xL9ym = await ZADhCbYxr.balanceOf.call(addressf6nb5Wi, {from: accounts[2]});
		const boolUWrxav4 = await ZADhCbYxr.approve.call(addressE3wRYC, uintnVZg9LH, {from: accounts[1]});
		const uint8DAP2bBB = await ZADhCbYxr.decimals.call({from: accounts[3]});
		const boolALXNZUy = await ZADhCbYxr.increaseAllowance.call(addressr5IC11X, uinth7tdh0K, {from: accounts[5]});

		assert.equal(boolALXNZUy, true)
		assert.equal(boolUWrxav4, true)
		assert.equal(boolqQT4kWS, true)
		assert.equal(uint2566xL9ym, BigInt("0"))
		assert.equal(uint8DAP2bBB, BigInt("18"))
		assert.equal(uint8cxP2Nsy, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADOw8U1iN = await ZAD.new({from: accounts[3]});
		const uintDjYMSE4 = BigInt("1628")
		const addresspPfbNb = accounts[4]
		const addressA37Bo54 = accounts[2]
		const uintXyTPnMd = BigInt("1803")
		const addresshkkAJ7 = accounts[1]
		const stringXM4guIy = await ZADOw8U1iN.symbol.call({from: accounts[3]});
		const boolqFDMzhC = await ZADOw8U1iN.transferFrom.call(addressA37Bo54, addresspPfbNb, uintDjYMSE4, {from: accounts[0]});
		const boolclFKkPq = await ZADOw8U1iN.approve.call(addresshkkAJ7, uintXyTPnMd, {from: accounts[1]});

		assert.equal(stringXM4guIy, "ZAD")
		await expect(ZADOw8U1iN.transferFrom.call(addressA37Bo54, addresspPfbNb, uintDjYMSE4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADpLitCE = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn0e2vwl = BigInt("880")
		const addressbsJipt = accounts[0]
		const uintfxzEOQB = BigInt("1810")
		const addressB4cfEFs = "0x0000000000000000000000000000000000000001"
		const addressb7r4ezL = accounts[4]
		const addressufVFOpm = accounts[5]
		const uintwIY6SQS = BigInt("653")
		const addressBngVfbt = accounts[1]
		const addressfBtHkpm = accounts[2]
		const boolEqgwykd = await ZADpLitCE.increaseAllowance.call(addressbsJipt, uintn0e2vwl, {from: accounts[1]});
		const boolnuJVhZj = await ZADpLitCE.approve.call(addressB4cfEFs, uintfxzEOQB, {from: accounts[4]});
		const uint256t8o7g0Z = await ZADpLitCE.allowance.call(addressufVFOpm, addressb7r4ezL, {from: accounts[2]});
		const stringcff54QU = await ZADpLitCE.symbol.call({from: accounts[2]});
		const boolDRUgiNT = await ZADpLitCE.transferFrom.call(addressfBtHkpm, addressBngVfbt, uintwIY6SQS, {from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZADlL3xTbH = await ZAD.new({from: accounts[2]});
		const addressEv9Eoj = accounts[3]
		const addressTr6zZuF = accounts[3]
		const addressqxMtGmr = accounts[0]
		const uintOcXN10r = BigInt("853")
		const addressdr323FA = "0x0000000000000000000000000000000000000000"
		const addressPhf1ah2 = accounts[5]
		const addressTnAP6n5 = accounts[0]
		const uint256PfvJbIC = await ZADlL3xTbH.balanceOf.call(addressEv9Eoj, {from: accounts[3]});
		const string2fDNeE = await ZADlL3xTbH.symbol.call({from: accounts[1]});
		const uint256zqC7T6k = await ZADlL3xTbH.allowance.call(addressqxMtGmr, addressTr6zZuF, {from: accounts[4]});
		const boolAcX9I1X = await ZADlL3xTbH.transfer.call(addressdr323FA, uintOcXN10r, {from: accounts[2]});
		const uint256elHzy8j = await ZADlL3xTbH.allowance.call(addressTnAP6n5, addressPhf1ah2, {from: accounts[3]});

		assert.equal(string2fDNeE, "ZAD")
		assert.equal(uint256PfvJbIC, BigInt("0"))
		assert.equal(uint256zqC7T6k, BigInt("0"))
		await expect(ZADlL3xTbH.transfer.call(addressdr323FA, uintOcXN10r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintWDF4J4g = BigInt("354")
		const stringBRlgvR2 = "ytcWXl"
		const stringbQPT5m2 = "8vszHorfD3lA9qEcY8i9UcYfTOSoWFg6xQa7yKot47RwCk7hMClzKy16zbN5AUNyzWPnGXPtO"
		const GFCedhYDi = await GFC.new(uintWDF4J4g, stringBRlgvR2, stringbQPT5m2, {from: accounts[1]});
		const byteQ84EjuT = "0x13"
		const uintRQD9nZX = BigInt("589")
		const addressm9F8Vro = accounts[0]
		const uintcIECEvP = BigInt("887")
		const addressJJg2jhc = accounts[2]
		const uintDJFs2l = BigInt("1691")
		const addressld95eCL = accounts[1]
		const boolyXhDKCM = await GFCedhYDi.approveAndCall.call(addressm9F8Vro, uintRQD9nZX, byteQ84EjuT, {from: accounts[1]});
		const boolQalGRj = await GFCedhYDi.approve.call(addressJJg2jhc, uintcIECEvP, {from: accounts[1]});
		const boolwMMd1iA = await GFCedhYDi.approve.call(addressld95eCL, uintDJFs2l, {from: accounts[1]});

		await expect(GFCedhYDi.approveAndCall.call(addressm9F8Vro, uintRQD9nZX, byteQ84EjuT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintAdwdgz4 = BigInt("1137")
		const stringArdW5VN = "HPLoGXdldGsItbpglzF0BJxK4xFf6T7ETeQbzSEwrRPNMTaq7JIEK6XHVWfyL3NFzufRDFrqSicNOn0WiQvUtJuDo8"
		const stringJ8SMafW = "pCCzI0DVNcSsHHsEYlit1uvLJrkTDAGPFQsa9xX4VAkqDJmiWQkXgSJbPj479AACpuvbAgyep376dqN6q05FDhQQtDw"
		const GFCAx0dkiZ = await GFC.new(uintAdwdgz4, stringArdW5VN, stringJ8SMafW, {from: accounts[3]});
		const uintNLTzSI4 = BigInt("1181")
		const byteXSFikfN = "0x1d1c04"
		const uintqymbZUG = BigInt("380")
		const address8Aybr7 = accounts[4]
		const uintguWBAQ = BigInt("36")
		const uintYBuUJ69 = BigInt("587")
		const uintjpYATqe = BigInt("933")
		const addresskagsvjG = accounts[4]
		const uintjesQOZd = BigInt("298")
		const addressKb4Dwlj = accounts[4]
		const boolewE9DGY = await GFCAx0dkiZ.burn.call(uintNLTzSI4, {from: accounts[3]});
		const boolbTsT5W6 = await GFCAx0dkiZ.approveAndCall.call(address8Aybr7, uintqymbZUG, byteXSFikfN, {from: accounts[1]});
		const boolymCrrJ = await GFCAx0dkiZ.burn.call(uintguWBAQ, {from: accounts[5]});
		const boolHYSmUr = await GFCAx0dkiZ.burn.call(uintYBuUJ69, {from: accounts[4]});
		const boolWYK2Utr = await GFCAx0dkiZ.burnFrom.call(addresskagsvjG, uintjpYATqe, {from: accounts[5]});
		const boolcu83URr = await GFCAx0dkiZ.burnFrom.call(addressKb4Dwlj, uintjesQOZd, {from: accounts[3]});

		assert.equal(boolewE9DGY, true)
		await expect(GFCAx0dkiZ.approveAndCall.call(address8Aybr7, uintqymbZUG, byteXSFikfN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintJfNpsa9 = BigInt("395")
		const stringbar6gVs = "biHjQx5CvEOklRbPu36pWro19x6imLFKvgu6rWBLFlLbZG9wjnP6HrbFCIXbebDySbffgEFx"
		const stringhiEE8QZ = "stJQOAo"
		const GFCF8Fn0Ja = await GFC.new(uintJfNpsa9, stringbar6gVs, stringhiEE8QZ, {from: accounts[2]});
		const uintArSXiNS = BigInt("205")
		const addressYXb6VS = accounts[4]
		const addressT2rrQ9q = accounts[0]
		const uintf4PfO8B = BigInt("298")
		const addresswRYYfOO = accounts[3]
		const addressNhFa928 = accounts[1]
		const uintBNpglL = BigInt("772")
		const uintu8XOJHN = BigInt("1444")
		const uintW232cof = BigInt("794")
		const addressqAkcCBv = accounts[0]
		const addressQFIAH80 = accounts[0]
		const boolcKMROlZ = await GFCF8Fn0Ja.transferFrom.call(addressT2rrQ9q, addressYXb6VS, uintArSXiNS, {from: accounts[3]});
		const boolQZCcGJE = await GFCF8Fn0Ja.transferFrom.call(addressNhFa928, addresswRYYfOO, uintf4PfO8B, {from: "0x0000000000000000000000000000000000000001"});
		const boolSC2pDrK = await GFCF8Fn0Ja.burn.call(uintBNpglL, {from: accounts[2]});
		const boolwkfIFXw = await GFCF8Fn0Ja.burn.call(uintu8XOJHN, {from: accounts[4]});
		const boolxD7tidC = await GFCF8Fn0Ja.transferFrom.call(addressQFIAH80, addressqAkcCBv, uintW232cof, {from: accounts[3]});

		await expect(GFCF8Fn0Ja.transferFrom.call(addressT2rrQ9q, addressYXb6VS, uintArSXiNS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintj8Nimhs = BigInt("531")
		const stringnn2Evk = "lh4sVQa3cjl5yPadNWHsg8LnNjaLLcSMI49rnQcwbu4ilF90w6q"
		const stringMELVAj3 = "uNwkJUS5IPIpC3cdFnZFXcD7GX9mFK4vO6iNkAV"
		const GFCXwcH3aa = await GFC.new(uintj8Nimhs, stringnn2Evk, stringMELVAj3, {from: accounts[1]});
		const uintXPAXCoZ = BigInt("737")
		const addresseW3qOAA = accounts[4]
		const byteabfyL5m = "0x12021003190c200a090a161202140c1a061d0f1f1e170e0d0d14"
		const uintpBYxlu0 = BigInt("264")
		const addressNtBOXlO = accounts[0]
		const uintpwRnwkd = BigInt("2017")
		const addressKw5DhHb = accounts[4]
		const addressppCx0Vg = accounts[2]
		const bytez5vVu2N = "0x081809181e"
		const uinteIz9VhT = BigInt("1429")
		const addressKx8vlHr = accounts[0]
		const uintL9nlxiF = BigInt("163")
		const addressUNoAh2c = accounts[2]
		const boolBybbYEs = await GFCXwcH3aa.burnFrom.call(addresseW3qOAA, uintXPAXCoZ, {from: accounts[2]});
		const boolpIWsIJ2 = await GFCXwcH3aa.approveAndCall.call(addressNtBOXlO, uintpBYxlu0, byteabfyL5m, {from: accounts[2]});
		const boolwzbeQ9f = await GFCXwcH3aa.transferFrom.call(addressppCx0Vg, addressKw5DhHb, uintpwRnwkd, {from: accounts[2]});
		const boolBtlBU1r = await GFCXwcH3aa.approveAndCall.call(addressKx8vlHr, uinteIz9VhT, bytez5vVu2N, {from: accounts[0]});
		const boolVTzs2ys = await GFCXwcH3aa.burnFrom.call(addressUNoAh2c, uintL9nlxiF, {from: accounts[2]});

		await expect(GFCXwcH3aa.burnFrom.call(addresseW3qOAA, uintXPAXCoZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintTti5eE = BigInt("1525")
		const stringuz6whC = "U"
		const stringucHGSUr = "S68sx6jLnaG49dg0mrgWqwwfKAGEo"
		const GFCtiJ88lB = await GFC.new(uintTti5eE, stringuz6whC, stringucHGSUr, {from: accounts[4]});
		const uintfJ05rl = BigInt("994")
		const addressWCjdr5t = "0x0000000000000000000000000000000000000001"
		const uintZKazvYp = BigInt("1496")
		const addressp7lxl5K = accounts[5]
		const uintnrq6INX = BigInt("2059")
		const addressFCzWbBF = accounts[2]
		const byteBEYct2V = "0x0d0e1d1c"
		const uintLeth41o = BigInt("1455")
		const addressZA06EZy = accounts[4]
		const boolntq7mIH = await GFCtiJ88lB.approve.call(addressWCjdr5t, uintfJ05rl, {from: accounts[0]});
		const boolAP90mXA = await GFCtiJ88lB.approve.call(addressp7lxl5K, uintZKazvYp, {from: accounts[0]});
		const boolZETmtL4 = await GFCtiJ88lB.transfer.call(addressFCzWbBF, uintnrq6INX, {from: "0x0000000000000000000000000000000000000001"});
		const boolnQ0RW4s = await GFCtiJ88lB.approveAndCall.call(addressZA06EZy, uintLeth41o, byteBEYct2V, {from: accounts[1]});

		assert.equal(boolAP90mXA, true)
		assert.equal(boolntq7mIH, true)
		await expect(GFCtiJ88lB.transfer.call(addressFCzWbBF, uintnrq6INX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintuYNaTC = BigInt("1525")
		const stringuz6whC = "U"
		const stringucHGSUr = "S68sx6jLnaG49dg0mrgWqwwfKAGEo"
		const GFCtiJ88lB = await GFC.new(uintuYNaTC, stringuz6whC, stringucHGSUr, {from: accounts[4]});
		const uintRZTCPsv = BigInt("994")
		const addressfo6UHp7 = "0x0000000000000000000000000000000000000001"
		const uintJn5E4Tv = BigInt("1935")
		const addressohrV1hQ = accounts[4]
		const uintA7qi8cy = BigInt("1496")
		const addressKDEMoRm = accounts[5]
		const uinteMZkI0u = BigInt("2059")
		const addresss3EdsIR = accounts[2]
		const byteVIoBldw = "0x0d0e1d1c"
		const uintvij2DgX = BigInt("50")
		const addressLeBqAfo = accounts[4]
		const boolntq7mIH = await GFCtiJ88lB.approve.call(addressfo6UHp7, uintRZTCPsv, {from: accounts[0]});
		const boolzJCGHvp = await GFCtiJ88lB.burnFrom.call(addressohrV1hQ, uintJn5E4Tv, {from: "0x0000000000000000000000000000000000000001"});
		const boolAP90mXA = await GFCtiJ88lB.approve.call(addressKDEMoRm, uintA7qi8cy, {from: accounts[0]});
		const boolZETmtL4 = await GFCtiJ88lB.transfer.call(addresss3EdsIR, uinteMZkI0u, {from: "0x0000000000000000000000000000000000000001"});
		const boolnQ0RW4s = await GFCtiJ88lB.approveAndCall.call(addressLeBqAfo, uintvij2DgX, byteVIoBldw, {from: accounts[1]});

		assert.equal(boolntq7mIH, true)
		await expect(GFCtiJ88lB.burnFrom.call(addressohrV1hQ, uintJn5E4Tv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintZaKfgD3 = BigInt("1525")
		const stringuz6whC = "U"
		const stringucHGSUr = "S68sx6jLnaG49dg0mrgWqwwfKAGEo"
		const GFCtiJ88lB = await GFC.new(uintZaKfgD3, stringuz6whC, stringucHGSUr, {from: accounts[4]});
		const uintZev1Y9 = BigInt("994")
		const addressrYTTtrt = "0x00000000000000000000000000000000000000-1"
		const uintSoI90B = BigInt("631")
		const addressojJWZPh = "0x0000000000000000000000000000000000000002"
		const byteTLOwn4J = "0x0d0e1d1c"
		const uintoWRtCg7 = BigInt("1455")
		const addressvUeAsH = accounts[4]
		const boolntq7mIH = await GFCtiJ88lB.approve.call(addressrYTTtrt, uintZev1Y9, {from: accounts[0]});
		const boolnOlbDVc = await GFCtiJ88lB.transfer.call(addressojJWZPh, uintSoI90B, {from: accounts[3]});
		const boolnQ0RW4s = await GFCtiJ88lB.approveAndCall.call(addressvUeAsH, uintoWRtCg7, byteTLOwn4J, {from: accounts[1]});

		await expect(GFCtiJ88lB.approve.call(addressrYTTtrt, uintZev1Y9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPMhm1Lz = BigInt("808")
		const stringdYjyf24 = "rVIsg3baisiddeTX4XUrs68hzcKHN9mhqJKhQcXjttDuNBLCCN6OWYTsw5pgOLpNyGUngIYmhK"
		const stringEGiltNz = "LeSgktRowkcE15Gy3h4mBOyYcFAX2rErSL6O5E6Pi0Bhmgp1reackuqdbquLUvvukdx9zN5rCMRSMFdAQTlJ"
		const GFCw0xzeUP = await GFC.new(uintPMhm1Lz, stringdYjyf24, stringEGiltNz, {from: accounts[3]});
		const uintS82Mu0S = BigInt("1456")
		const addressb0P5cv6 = accounts[0]
		const uintTVxdDpj = BigInt("1167")
		const addressss3E4EX = accounts[5]
		const boole2UksKw = await GFCw0xzeUP.transfer.call(addressb0P5cv6, uintS82Mu0S, {from: accounts[3]});
		const boolAVAukeU = await GFCw0xzeUP.burnFrom.call(addressss3E4EX, uintTVxdDpj, {from: accounts[5]});

		assert.equal(boole2UksKw, true)
		await expect(GFCw0xzeUP.burnFrom.call(addressss3E4EX, uintTVxdDpj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintySQC7GS = BigInt("1056")
		const stringpTHzVdo = "lrFs1d6C8vrsCH8gosOPh1dVVppn"
		const stringqA1Afga = "Vkub4kol91oYU8J5a7VNJhGtYvBz4e5veSWsJxEtyUygHSshQVy5vxN1FdFyATuOAS5RD4"
		const GFCw9U0Nvg = await GFC.new(uintySQC7GS, stringpTHzVdo, stringqA1Afga, {from: "0x0000000000000000000000000000000000000001"});
		const uintfdehOx2 = BigInt("223")
		const addressXOGvra3 = accounts[1]
		const byteLNKaQ0z = "0x050108171e131b0906"
		const uintVqjoBW = BigInt("569")
		const address5EBhmW = accounts[3]
		const uintARGiTOY = BigInt("1405")
		const address0ztj9i = accounts[0]
		const uintaOz5qVJ = BigInt("1499")
		const addressxdqBsI = accounts[4]
		const uintju20KnQ = BigInt("1153")
		const addressFCFnT1i = accounts[4]
		const boolCRaJYge = await GFCw9U0Nvg.approve.call(addressXOGvra3, uintfdehOx2, {from: "0x0000000000000000000000000000000000000001"});
		const boollPTHaiP = await GFCw9U0Nvg.approveAndCall.call(address5EBhmW, uintVqjoBW, byteLNKaQ0z, {from: accounts[3]});
		const boolaviL5dL = await GFCw9U0Nvg.approve.call(address0ztj9i, uintARGiTOY, {from: accounts[5]});
		const boolA8NNtcW = await GFCw9U0Nvg.approve.call(addressxdqBsI, uintaOz5qVJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolVR05V2B = await GFCw9U0Nvg.approve.call(addressFCFnT1i, uintju20KnQ, {from: accounts[0]});
	});
})
const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADpfOZqgI = await ZAD.new({from: accounts[5]});
		const uintIrCCIh = BigInt("751")
		const addressJmvyX2 = accounts[5]
		const uintG7SebvT = BigInt("1854")
		const addressFq8nnmw = accounts[2]
		const uintkrSoUiR = BigInt("747")
		const addressHQD3djl = accounts[3]
		const boolTdfNIS1 = await ZADpfOZqgI.approve.call(addressJmvyX2, uintIrCCIh, {from: accounts[4]});
		const boolVjexQTd = await ZADpfOZqgI.increaseAllowance.call(addressFq8nnmw, uintG7SebvT, {from: accounts[1]});
//		const bool5y2K6N = await ZADpfOZqgI.transfer.call(addressHQD3djl, uintkrSoUiR, {from: accounts[0]});

		assert.equal(boolTdfNIS1, true)
		assert.equal(boolVjexQTd, true)
		await expect(ZADpfOZqgI.transfer.call(addressHQD3djl, uintkrSoUiR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADOMuD6oN = await ZAD.new({from: accounts[2]});
		const uintspMxJJQ = BigInt("329")
		const addressRDQjf0K = accounts[2]
		const uintlcoFOG = BigInt("1261")
		const addressZzqyfhC = "0x0000000000000000000000000000000000000001"
		const boolz17CJl = await ZADOMuD6oN.increaseAllowance.call(addressRDQjf0K, uintspMxJJQ, {from: accounts[4]});
//		const boolFQ2Vp8y = await ZADOMuD6oN.decreaseAllowance.call(addressZzqyfhC, uintlcoFOG, {from: "0x0000000000000000000000000000000000000001"});
//		const stringaAkb3sK = await ZADOMuD6oN.symbol.call({from: accounts[1]});

		assert.equal(boolz17CJl, true)
		await expect(ZADOMuD6oN.decreaseAllowance.call(addressZzqyfhC, uintlcoFOG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADJBKq5Yk = await ZAD.new({from: accounts[1]});
		const addressr3phN9K = accounts[3]
		const addressmTNajA1 = accounts[4]
		const address8PksUE = accounts[5]
		const uintCvpORpe = BigInt("1969")
		const addresscB8HpoI = accounts[3]
		const addressZa1oEVL = accounts[1]
		const uintlkpkDiB = BigInt("613")
		const addressxUAqTcV = accounts[4]
		const uint256LrRSZk = await ZADJBKq5Yk.allowance.call(addressmTNajA1, addressr3phN9K, {from: accounts[2]});
		const uint256j56Rlo = await ZADJBKq5Yk.balanceOf.call(address8PksUE, {from: accounts[0]});
//		const booloiV3F9U = await ZADJBKq5Yk.transferFrom.call(addressZa1oEVL, addresscB8HpoI, uintCvpORpe, {from: accounts[2]});
//		const boolhHXyv9l = await ZADJBKq5Yk.approve.call(addressxUAqTcV, uintlkpkDiB, {from: accounts[0]});

		assert.equal(uint256LrRSZk, BigInt("0"))
		assert.equal(uint256j56Rlo, BigInt("0"))
		await expect(ZADJBKq5Yk.transferFrom.call(addressZa1oEVL, addresscB8HpoI, uintCvpORpe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVCupuSj = await ZAD.new({from: accounts[4]});
		const uintmdnO1Pn = BigInt("1950")
//		const uint256kwED2H9 = await ZADVCupuSj._burn.call(uintmdnO1Pn, {from: accounts[3]});
//		const uint8uajmafQ = await ZADVCupuSj.decimals.call({from: accounts[0]});
//		const uint256mJSzLIZ = await ZADVCupuSj.totalSupply.call({from: accounts[0]});
//		const uint8EBDvLbW = await ZADVCupuSj.decimals.call({from: accounts[1]});

		await expect(ZADVCupuSj._burn.call(uintmdnO1Pn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmJfdAhy = await ZAD.new({from: accounts[2]});
		const stringHrICENV = await ZADmJfdAhy.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint25603W4zO = await ZADmJfdAhy.totalSupply.call({from: accounts[1]});
		const uint8B581RYs = await ZADmJfdAhy.decimals.call({from: accounts[3]});

		assert.equal(stringHrICENV, "Zadkiel")
		assert.equal(uint25603W4zO, BigInt("100000000000000000000000000"))
		assert.equal(uint8B581RYs, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADoYpwQz9 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvAXstSa = BigInt("711")
		const addressSstLawG = "0x0000000000000000000000000000000000000001"
		const uintfUqckJT = BigInt("412")
		const addressRVvUb5G = accounts[4]
		const addressfHfIrPI = accounts[1]
		const uinttoj3B3O = BigInt("1457")
		const addressD9yIbh2 = accounts[0]
		const uintqBgWKrJ = BigInt("592")
		const addressHBgVsz9 = accounts[3]
		const boolYH3weVC = await ZADoYpwQz9.decreaseAllowance.call(addressSstLawG, uintvAXstSa, {from: accounts[4]});
		const boolicAXiEB = await ZADoYpwQz9.decreaseAllowance.call(addressRVvUb5G, uintfUqckJT, {from: accounts[2]});
		const uint256ZSxHRMT = await ZADoYpwQz9.balanceOf.call(addressfHfIrPI, {from: accounts[5]});
		const boolXS3doUP = await ZADoYpwQz9.transfer.call(addressD9yIbh2, uinttoj3B3O, {from: accounts[5]});
		const boolxJXXEj = await ZADoYpwQz9.decreaseAllowance.call(addressHBgVsz9, uintqBgWKrJ, {from: accounts[2]});
	});

	it('test for ZAD', async () => {
		const ZADpfOZqgI = await ZAD.new({from: accounts[5]});
		const uintEQGywyX = BigInt("751")
		const addressfzqEQm = accounts[5]
		const uint9mBjlR = BigInt("1854")
		const addressr6QHw0p = accounts[2]
		const uintOODivcm = BigInt("747")
		const addressFKeyt6L = accounts[3]
		const uintCstsFuk = BigInt("1582")
		const addressBVd5Sh = accounts[3]
		const stringDk8YAEO = await ZADpfOZqgI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTdfNIS1 = await ZADpfOZqgI.approve.call(addressfzqEQm, uintEQGywyX, {from: accounts[4]});
		const boolVjexQTd = await ZADpfOZqgI.increaseAllowance.call(addressr6QHw0p, uint9mBjlR, {from: accounts[1]});
		const uint256lcr44hm = await ZADpfOZqgI.totalSupply.call({from: accounts[3]});
//		const bool5y2K6N = await ZADpfOZqgI.transfer.call(addressFKeyt6L, uintOODivcm, {from: accounts[0]});
//		const boolNjjBgV7 = await ZADpfOZqgI.transfer.call(addressBVd5Sh, uintCstsFuk, {from: accounts[5]});

		assert.equal(boolTdfNIS1, true)
		assert.equal(boolVjexQTd, true)
		assert.equal(stringDk8YAEO, "ZAD")
		assert.equal(uint256lcr44hm, BigInt("100000000000000000000000000"))
		await expect(ZADpfOZqgI.transfer.call(addressFKeyt6L, uintOODivcm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVSBWWIu = await ZAD.new({from: accounts[2]});
		const addresspl8wYUE = accounts[3]
		const uintRvZYAWz = BigInt("937")
		const addressibcFwaT = "0x0000000000000000000000000000000000000000"
		const address8gfhZt = accounts[4]
		const addressFT6LV49 = accounts[2]
		const uintcWa8NEz = BigInt("640")
		const addressvw4Qfcx = accounts[3]
		const uintOt4djUy = BigInt("82")
		const addressufJPy6r = accounts[5]
		const addressKDiVCTu = accounts[3]
		const addressCxu0Jdt = accounts[2]
		const addressT4Dzktb = accounts[3]
		const addressww00Hsj = accounts[3]
		const addressAOFtl0P = accounts[0]
		const uintYKu9pqr = BigInt("248")
		const addressp08I6jS = accounts[3]
		const addressWx2xNVW = accounts[1]
		const addressckXSJ0u = accounts[2]
		const uint256SxepmZf = await ZADVSBWWIu.balanceOf.call(addresspl8wYUE, {from: accounts[3]});
//		const boolyCxzCIE = await ZADVSBWWIu.transferFrom.call(address8gfhZt, addressibcFwaT, uintRvZYAWz, {from: accounts[2]});
//		const uint256ViAmQzz = await ZADVSBWWIu.balanceOf.call(addressFT6LV49, {from: accounts[5]});
//		const boolNgZAbR3 = await ZADVSBWWIu.decreaseAllowance.call(addressvw4Qfcx, uintcWa8NEz, {from: accounts[0]});
//		const boolN8KjSi = await ZADVSBWWIu.approve.call(addressufJPy6r, uintOt4djUy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rIvtTWA = await ZADVSBWWIu.allowance.call(addressCxu0Jdt, addressKDiVCTu, {from: accounts[3]});
//		const uint256vHvv5eA = await ZADVSBWWIu.balanceOf.call(addressT4Dzktb, {from: accounts[2]});
//		const uint256DpfdGiK = await ZADVSBWWIu.allowance.call(addressAOFtl0P, addressww00Hsj, {from: accounts[4]});
//		const boolSYP3I36 = await ZADVSBWWIu.transfer.call(addressp08I6jS, uintYKu9pqr, {from: accounts[5]});
//		const uint256xq7in62 = await ZADVSBWWIu.allowance.call(addressckXSJ0u, addressWx2xNVW, {from: accounts[4]});

		assert.equal(uint256SxepmZf, BigInt("0"))
		await expect(ZADVSBWWIu.transferFrom.call(address8gfhZt, addressibcFwaT, uintRvZYAWz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
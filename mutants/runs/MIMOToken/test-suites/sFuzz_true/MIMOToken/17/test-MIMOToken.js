const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenyIXGtgV = await MIMOToken.new({from: accounts[4]});
		const uintuLwUTKo = BigInt("353")
		const addresspFnzj5l = accounts[2]
		const addressoKMyro3 = accounts[2]
		const addressKl0v9gD = accounts[3]
		const uintNxPY4r = BigInt("836")
		const addresskpTKmNH = accounts[2]
		const addressPk14wXG = accounts[3]
		const addressPcgIOr = accounts[1]
		const addressglHKGDj = accounts[2]
		const uint256ExQs3fs = await MIMOTokenyIXGtgV.getFee.call(uintuLwUTKo, {from: accounts[5]});
		const uint8kUSwz = await MIMOTokenyIXGtgV.balanceOf.call(addresspFnzj5l, {from: accounts[0]});
		const uintvAfFv1D = await MIMOTokenyIXGtgV.balanceOf.call(addressoKMyro3, {from: accounts[1]});
		const uintc4Viox8 = await MIMOTokenyIXGtgV.balanceOf.call(addressKl0v9gD, {from: accounts[0]});
		const boolxBLJatA = await MIMOTokenyIXGtgV.transferFrom.call(addressPk14wXG, addresskpTKmNH, uintNxPY4r, {from: accounts[0]});
		const uintqA947Os = await MIMOTokenyIXGtgV.allowance.call(addressglHKGDj, addressPcgIOr, {from: accounts[1]});

		assert.equal(uint256ExQs3fs, BigInt("50000000000000000"))
		assert.equal(uint8kUSwz, BigInt("0"))
		assert.equal(uintc4Viox8, BigInt("0"))
		assert.equal(uintvAfFv1D, BigInt("0"))
		await expect(MIMOTokenyIXGtgV.transferFrom.call(addressPk14wXG, addresskpTKmNH, uintNxPY4r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqkgKLuF = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMmdLeOV = BigInt("1283")
		const uintnwaiawj = BigInt("1174")
		const addressR2tJcYB = accounts[2]
		const addressURmbQEU = "0x0000000000000000000000000000000000000001"
		const uint256oKUzEYP = await MIMOTokenqkgKLuF.setFeeRate.call(uintMmdLeOV, {from: accounts[3]});
		const uint256LGCUUVh = await MIMOTokenqkgKLuF.setFeeRate.call(uintnwaiawj, {from: accounts[4]});
		const uintg9MiyL = await MIMOTokenqkgKLuF.allowance.call(addressURmbQEU, addressR2tJcYB, {from: accounts[5]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenM5uo2Jm = await MIMOToken.new({from: accounts[1]});
		const uintp2nwLi8 = BigInt("478")
		const uintEI63K7S = BigInt("972")
		const addressTKizY8k = accounts[0]
		const uint256hJ0y0T1 = await MIMOTokenM5uo2Jm.setFeeRate.call(uintp2nwLi8, {from: accounts[1]});
		const boolhODCs3Y = await MIMOTokenM5uo2Jm.transfer.call(addressTKizY8k, uintEI63K7S, {from: accounts[5]});

		await expect(MIMOTokenM5uo2Jm.transfer.call(addressTKizY8k, uintEI63K7S, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGsmLT8C = await MIMOToken.new({from: accounts[4]});
		const uintuBpSJxQ = BigInt("1286")
		const uintcCBkbqD = BigInt("738")
		const uintAF6Vlwj = BigInt("1548")
		const addresso7O0enU = accounts[5]
		const addressypYKX4z = accounts[4]
		const addressKZueKFu = "0x0000000000000000000000000000000000000001"
		const uint256rXQJZaQ = await MIMOTokenGsmLT8C.setMinFee.call(uintuBpSJxQ, {from: accounts[3]});
		const uintjh2jMk = await MIMOTokenGsmLT8C.totalSupply.call({from: accounts[4]});
		const uint256OlBmu1 = await MIMOTokenGsmLT8C.getFee.call(uintcCBkbqD, {from: accounts[3]});
		const bool3beFCw = await MIMOTokenGsmLT8C.transferFrom.call(addressypYKX4z, addresso7O0enU, uintAF6Vlwj, {from: accounts[3]});
		const uintKXFzzy3 = await MIMOTokenGsmLT8C.balanceOf.call(addressKZueKFu, {from: accounts[4]});

		assert.equal(uint256OlBmu1, BigInt("50000000000000000"))
		assert.equal(uintjh2jMk, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenGsmLT8C.transferFrom.call(addressypYKX4z, addresso7O0enU, uintAF6Vlwj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenTFcV1KT = await MIMOToken.new({from: accounts[2]});
		const addressvYXapAD = accounts[3]
		const uintZgIjXtl = BigInt("1769")
		const uintfP7yhUU = BigInt("1386")
		const addressmSZCTID = accounts[1]
		const addressOGUwOwk = accounts[5]
		const uintblKn8pr = BigInt("942")
		const addresspXW9vII = accounts[2]
		const uintN5mqSpR = await MIMOTokenTFcV1KT.balanceOf.call(addressvYXapAD, {from: accounts[1]});
		const uint256JrFyxGz = await MIMOTokenTFcV1KT.setFeeRate.call(uintZgIjXtl, {from: accounts[5]});
		const uint256ztiZd5y = await MIMOTokenTFcV1KT.setMinFee.call(uintfP7yhUU, {from: accounts[3]});
		const uintjhOLL9 = await MIMOTokenTFcV1KT.allowance.call(addressOGUwOwk, addressmSZCTID, {from: accounts[5]});
		const boolfkyn7CK = await MIMOTokenTFcV1KT.transfer.call(addresspXW9vII, uintblKn8pr, {from: accounts[2]});

		assert.equal(uintN5mqSpR, BigInt("0"))
		assert.equal(uintjhOLL9, BigInt("0"))
		await expect(MIMOTokenTFcV1KT.transfer.call(addresspXW9vII, uintblKn8pr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenM5uo2Jm = await MIMOToken.new({from: accounts[1]});
		const uintq0Zpl5F = BigInt("1249")
		const addressrgrc1RD = accounts[0]
		const uintHNwj3X = BigInt("478")
		const uinttHuzCwX = BigInt("982")
		const addressYCPtlga = accounts[0]
		const boolKfT4qn = await MIMOTokenM5uo2Jm.approve.call(addressrgrc1RD, uintq0Zpl5F, {from: accounts[3]});
		const uint256hJ0y0T1 = await MIMOTokenM5uo2Jm.setFeeRate.call(uintHNwj3X, {from: accounts[1]});
		const boolhODCs3Y = await MIMOTokenM5uo2Jm.transfer.call(addressYCPtlga, uinttHuzCwX, {from: accounts[5]});

		assert.equal(boolKfT4qn, true)
		await expect(MIMOTokenM5uo2Jm.transfer.call(addressYCPtlga, uinttHuzCwX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenM5uo2Jm = await MIMOToken.new({from: accounts[1]});
		const uint1jGzFN = BigInt("531")
		const addressfLd9rXU = "0x0000000000000000000000000000000000000000"
		const uintYXC6if = BigInt("588")
		const boolxANwtoo = await MIMOTokenM5uo2Jm.transfer.call(addressfLd9rXU, uint1jGzFN, {from: accounts[4]});
		const uint256G8JJyt = await MIMOTokenM5uo2Jm.getFee.call(uintYXC6if, {from: accounts[1]});

		await expect(MIMOTokenM5uo2Jm.transfer.call(addressfLd9rXU, uint1jGzFN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
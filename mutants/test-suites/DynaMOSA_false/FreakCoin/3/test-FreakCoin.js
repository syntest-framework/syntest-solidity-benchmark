const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinWzxybow = await FreakCoin.new({from: accounts[4]});
		const uintMChIW2 = BigInt("1654")
		const addressV1XE23H = accounts[0]
		const uintGTHK2DG = BigInt("34")
		const addressQT5QPAT = accounts[0]
		const addressDyb8X83 = accounts[0]
		const uintSR9b1Pl = BigInt("360")
		const addressUgfYx4q = accounts[0]
		const bools5Cxh8M = await FreakCoinWzxybow.approve.call(addressV1XE23H, uintMChIW2, {from: accounts[2]});
//		const boolo5G6RpC = await FreakCoinWzxybow.transferFrom.call(addressDyb8X83, addressQT5QPAT, uintGTHK2DG, {from: accounts[2]});
//		const booliZ0hJDC = await FreakCoinWzxybow.transfer.call(addressUgfYx4q, uintSR9b1Pl, {from: accounts[0]});
//		const addressSDsu8J = await FreakCoinWzxybow.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bools5Cxh8M, true)
		await expect(FreakCoinWzxybow.transferFrom.call(addressDyb8X83, addressQT5QPAT, uintGTHK2DG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinHTUjWHC = await FreakCoin.new({from: accounts[0]});
		const addressqPysbgQ = accounts[0]
		const addressVC7AdeA = accounts[5]
		const uintplo6ys1 = BigInt("1313")
		const addressPkSdHmQ = accounts[4]
		const addressBwYy2yp = accounts[5]
		const uint256AE4c90f = await FreakCoinHTUjWHC.allowance.call(addressVC7AdeA, addressqPysbgQ, {from: accounts[2]});
//		const boolSZt0mRh = await FreakCoinHTUjWHC.transfer.call(addressPkSdHmQ, uintplo6ys1, {from: accounts[3]});
//		const uint256cJ1oMEm = await FreakCoinHTUjWHC.balanceOf.call(addressBwYy2yp, {from: accounts[1]});

		assert.equal(uint256AE4c90f, BigInt("0"))
		await expect(FreakCoinHTUjWHC.transfer.call(addressPkSdHmQ, uintplo6ys1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinuBRoER5 = await FreakCoin.new({from: accounts[4]});
		const uintmMu0ezq = BigInt("1944")
		const addressT108vhO = accounts[0]
		const addressUNfQWCr = accounts[2]
		const addressr5k7y4F = accounts[2]
		const addressYYsFnQK = accounts[5]
		const boolfJcZhPn = await FreakCoinuBRoER5.approve.call(addressT108vhO, uintmMu0ezq, {from: accounts[4]});
//		const addressg7ogS3L = await FreakCoinuBRoER5.setUniswapAddress.call(addressUNfQWCr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXLGQ1L4 = await FreakCoinuBRoER5.uniswapAddress.call({from: accounts[2]});
//		const uint256gPtbMLm = await FreakCoinuBRoER5.balanceOf.call(addressr5k7y4F, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sytU61k = await FreakCoinuBRoER5.allUserBalances.call(addressYYsFnQK, {from: accounts[0]});

		assert.equal(boolfJcZhPn, true)
		await expect(FreakCoinuBRoER5.setUniswapAddress.call(addressUNfQWCr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnXzavOG = await FreakCoin.new({from: accounts[4]});
		const uintFuPZmOf = BigInt("1852")
		const addresszveR5rQ = accounts[3]
		const addresskocjkTR = accounts[3]
		const addresslryZHWw = accounts[0]
		const addressQrlXUmx = accounts[0]
		const addressmDoJRo = await FreakCoinnXzavOG.uniswapAddress.call({from: accounts[0]});
//		const boolsHsANS3 = await FreakCoinnXzavOG.transferFrom.call(addresskocjkTR, addresszveR5rQ, uintFuPZmOf, {from: accounts[0]});
//		const addressrNtB0BV = await FreakCoinnXzavOG.uniswapAddress.call({from: accounts[3]});
//		const uint256ygo1rpY = await FreakCoinnXzavOG.allowance.call(addressQrlXUmx, addresslryZHWw, {from: accounts[5]});

		assert.equal(addressmDoJRo, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinnXzavOG.transferFrom.call(addresskocjkTR, addresszveR5rQ, uintFuPZmOf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinBpiM7rC = await FreakCoin.new({from: accounts[1]});
		const addressx8K3kWr = accounts[2]
		const uintn4UxFy2 = BigInt("304")
		const addresskuSrNuK = accounts[2]
		const addressjR9i4sE = accounts[0]
//		const uint256lbflmNn = await FreakCoinBpiM7rC.allUserBalances.call(addressx8K3kWr, {from: accounts[2]});
//		const boolQmzJTyq = await FreakCoinBpiM7rC.transferFrom.call(addressjR9i4sE, addresskuSrNuK, uintn4UxFy2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinBpiM7rC.allUserBalances.call(addressx8K3kWr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIM8CreA = await FreakCoin.new({from: accounts[4]});
		const uintQmZjrPw = BigInt("1690")
		const addresswQZ1x7 = accounts[1]
		const uintqXJrZD6 = BigInt("1476")
		const addresshcWxWQD = accounts[2]
		const uintkbhMILO = BigInt("240")
		const addressYegXY0O = "0x0000000000000000000000000000000000000001"
		const uintnEFOBvk = BigInt("516")
		const addressNMyp47o = accounts[5]
		const addressKX6O5g = accounts[3]
		const addressg2wK7fi = accounts[4]
		const boolOkxicr6 = await FreakCoinIM8CreA.transfer.call(addresswQZ1x7, uintQmZjrPw, {from: accounts[4]});
		const boolIOklQt5 = await FreakCoinIM8CreA.approve.call(addresshcWxWQD, uintqXJrZD6, {from: accounts[0]});
		const boolc1nm2cL = await FreakCoinIM8CreA.approve.call(addressYegXY0O, uintkbhMILO, {from: accounts[4]});
		const boolLYNiOMy = await FreakCoinIM8CreA.approve.call(addressNMyp47o, uintnEFOBvk, {from: accounts[3]});
		const uint256A9OfUMv = await FreakCoinIM8CreA.allowance.call(addressg2wK7fi, addressKX6O5g, {from: accounts[3]});

		assert.equal(boolIOklQt5, true)
		assert.equal(boolLYNiOMy, true)
		assert.equal(boolOkxicr6, true)
		assert.equal(boolc1nm2cL, true)
		assert.equal(uint256A9OfUMv, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinwvGs9Cb = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAOMoRFl = accounts[2]
		const addressN9dlrjT = accounts[1]
		const addressAfe3LSl = accounts[3]
		const addressuVuwAc3 = accounts[3]
		const uint256IKz7Rcn = await FreakCoinwvGs9Cb.balanceOf.call(addressAOMoRFl, {from: accounts[2]});
		const addressQOWLUBv = await FreakCoinwvGs9Cb.setUniswapAddress.call(addressN9dlrjT, {from: accounts[0]});
		const uint256T10wH7a = await FreakCoinwvGs9Cb.allUserBalances.call(addressAfe3LSl, {from: accounts[4]});
		const uint256ptogPGd = await FreakCoinwvGs9Cb.allUserBalances.call(addressuVuwAc3, {from: accounts[1]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIM8CreA = await FreakCoin.new({from: accounts[4]});
		const uintGh8eHiL = BigInt("1690")
		const address6IxZYn = accounts[4]
		const boolOkxicr6 = await FreakCoinIM8CreA.transfer.call(address6IxZYn, uintGh8eHiL, {from: accounts[4]});

		assert.equal(boolOkxicr6, true)
	});
})
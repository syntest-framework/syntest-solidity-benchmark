const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressjfTRWmo = accounts[2]
		const addressvXTuvEF = accounts[3]
		const SpiritCoiny2lr1A = await SpiritCoin.new(addressjfTRWmo, addressvXTuvEF, {from: accounts[1]});
		const addresstreZgpB = accounts[2]
		const addressORXL2Uv = accounts[1]
		const uintLuCn8RF = BigInt("581")
		const addressVQe9nbP = accounts[2]
		const addressuaQZDFN = accounts[1]
		const uintFkYDV6S = await SpiritCoiny2lr1A.allowance.call(addressORXL2Uv, addresstreZgpB, {from: accounts[0]});
//		const boolGg2wtYf = await SpiritCoiny2lr1A.transferFrom.call(addressuaQZDFN, addressVQe9nbP, uintLuCn8RF, {from: accounts[4]});

		assert.equal(uintFkYDV6S, BigInt("0"))
		await expect(SpiritCoiny2lr1A.transferFrom.call(addressuaQZDFN, addressVQe9nbP, uintLuCn8RF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressoBokdGG = accounts[4]
		const addressfHdxzKz = accounts[1]
		const SpiritCoinbnbtCHT = await SpiritCoin.new(addressoBokdGG, addressfHdxzKz, {from: accounts[5]});
		const uintpq3JGRN = BigInt("898")
		const addressAsd1Hlp = accounts[5]
		const uintm25PNF7 = BigInt("1036")
		const addressQqnsp8n = accounts[3]
//		const boolnJ7pcDt = await SpiritCoinbnbtCHT.transfer.call(addressAsd1Hlp, uintpq3JGRN, {from: accounts[2]});
//		const boolrvJDedZ = await SpiritCoinbnbtCHT.transfer.call(addressQqnsp8n, uintm25PNF7, {from: accounts[5]});

		await expect(SpiritCoinbnbtCHT.transfer.call(addressAsd1Hlp, uintpq3JGRN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressZORq6ps = accounts[3]
		const addressvks7ugc = accounts[1]
		const SpiritCoinfySHwE3 = await SpiritCoin.new(addressZORq6ps, addressvks7ugc, {from: accounts[5]});
		const addressaTE9pVe = accounts[3]
		const address2hJQ9J = accounts[2]
		const uintKHPJHMl = BigInt("1303")
		const addressu1ZPy0H = "0x0000000000000000000000000000000000000001"
		const uintX9MvrId = await SpiritCoinfySHwE3.allowance.call(address2hJQ9J, addressaTE9pVe, {from: accounts[2]});
//		const addressWRA5MA2 = await SpiritCoinfySHwE3.mint.call(addressu1ZPy0H, uintKHPJHMl, {from: accounts[2]});

		assert.equal(uintX9MvrId, BigInt("0"))
		await expect(SpiritCoinfySHwE3.mint.call(addressu1ZPy0H, uintKHPJHMl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresseNXEOs3 = accounts[2]
		const addressjwfUWA2 = accounts[3]
		const SpiritCoinWcK120J = await SpiritCoin.new(addresseNXEOs3, addressjwfUWA2, {from: accounts[4]});
		const uintYWg1xGy = BigInt("431")
		const addresse3lNT2A = accounts[2]
		const addressuXeEiKh = accounts[5]
		const uintPXyGivB = BigInt("44")
		const addressSUgcyKr = accounts[0]
		const boolXAGxrr9 = await SpiritCoinWcK120J.approve.call(addresse3lNT2A, uintYWg1xGy, {from: accounts[4]});
//		const addressr0bqJP = await SpiritCoinWcK120J.setMinter.call(addressuXeEiKh, {from: accounts[1]});
//		const boolFVJMF8 = await SpiritCoinWcK120J.transfer.call(addressSUgcyKr, uintPXyGivB, {from: accounts[4]});

		assert.equal(boolXAGxrr9, true)
		await expect(SpiritCoinWcK120J.setMinter.call(addressuXeEiKh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressmJRkDGI = accounts[2]
		const addressecWybUD = accounts[3]
		const SpiritCoinWcK120J = await SpiritCoin.new(addressmJRkDGI, addressecWybUD, {from: accounts[4]});
		const uintEwInZIx = BigInt("431")
		const addressuyfgF7e = accounts[2]
		const addressuOz0cJX = accounts[0]
		const addressPuqTSSl = accounts[5]
		const uintB6ylBKS = BigInt("255")
		const addressw0eV67a = accounts[3]
		const uintQ3w0xmA = BigInt("78")
		const addressQ5zQ9p = accounts[0]
		const boolXAGxrr9 = await SpiritCoinWcK120J.approve.call(addressuyfgF7e, uintEwInZIx, {from: accounts[4]});
		const uintClyZIM1 = await SpiritCoinWcK120J.balanceOf.call(addressuOz0cJX, {from: accounts[0]});
//		const addressr0bqJP = await SpiritCoinWcK120J.setMinter.call(addressPuqTSSl, {from: accounts[1]});
//		const boollEOKEu9 = await SpiritCoinWcK120J.approve.call(addressw0eV67a, uintB6ylBKS, {from: accounts[2]});
//		const boolFVJMF8 = await SpiritCoinWcK120J.transfer.call(addressQ5zQ9p, uintQ3w0xmA, {from: accounts[4]});

		assert.equal(boolXAGxrr9, true)
		assert.equal(uintClyZIM1, BigInt("0"))
		await expect(SpiritCoinWcK120J.setMinter.call(addressPuqTSSl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressd7xKpzj = accounts[2]
		const addressj7KAnI = accounts[3]
		const SpiritCoinWcK120J = await SpiritCoin.new(addressd7xKpzj, addressj7KAnI, {from: accounts[4]});
		const uintiC1UGTL = BigInt("140")
		const addresseEl8lCv = accounts[2]
		const uintRZzlCJ = BigInt("431")
		const addressJhXSLQ1 = accounts[3]
		const addressW2eXOWF = accounts[2]
		const uintiwBcu3w = BigInt("44")
		const addressnjeUrWp = accounts[0]
		const addressFQLa698 = await SpiritCoinWcK120J.mint.call(addresseEl8lCv, uintiC1UGTL, {from: accounts[3]});
		const boolXAGxrr9 = await SpiritCoinWcK120J.approve.call(addressJhXSLQ1, uintRZzlCJ, {from: accounts[4]});
//		const addressr0bqJP = await SpiritCoinWcK120J.setMinter.call(addressW2eXOWF, {from: accounts[1]});
//		const boolFVJMF8 = await SpiritCoinWcK120J.transfer.call(addressnjeUrWp, uintiwBcu3w, {from: accounts[4]});

		assert.equal(boolXAGxrr9, true)
		await expect(SpiritCoinWcK120J.setMinter.call(addressW2eXOWF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressUsbCbye = accounts[4]
		const addresswd4whw = accounts[2]
		const SpiritCoinxgfgsxi = await SpiritCoin.new(addressUsbCbye, addresswd4whw, {from: "0x0000000000000000000000000000000000000001"});
		const uintzC6R5W = BigInt("477")
		const addressZmbDsMa = accounts[0]
		const uint5R1199 = BigInt("1007")
		const addressw7RhC3 = accounts[1]
		const addressMvLWjsd = accounts[3]
		const addressg0fwMsW = accounts[5]
		const boolZnkSEb6 = await SpiritCoinxgfgsxi.approve.call(addressZmbDsMa, uintzC6R5W, {from: accounts[2]});
		const addressyqmRXyg = await SpiritCoinxgfgsxi.mint.call(addressw7RhC3, uint5R1199, {from: accounts[1]});
		const uintbeNQ3s = await SpiritCoinxgfgsxi.allowance.call(addressg0fwMsW, addressMvLWjsd, {from: accounts[4]});
	});
})
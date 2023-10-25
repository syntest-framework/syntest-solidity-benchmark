const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairh6UvkRi = await PlasmaswapPair.new({from: accounts[2]});
		const addressiFM1BuF = accounts[1]
		const addressf00ewms = accounts[4]
		const addressL16mTpU = accounts[1]
		const byteUzA72cC = "0x081e17131a111d03141d080a071120"
		const addressaJXr5sK = accounts[0]
		const uintYwNfkWW = BigInt("1139")
		const uintWc5PwE = BigInt("1030")
		const uintXLsl3cn = await PlasmaswapPairh6UvkRi.mint.call(addressiFM1BuF, {from: accounts[5]});
		await PlasmaswapPairh6UvkRi.lock.call({from: accounts[0]});
		const uintGHBGx8h = await PlasmaswapPairh6UvkRi.burn.call(addressf00ewms, {from: "0x0000000000000000000000000000000000000001"});
		const uintIFqk3sk = await PlasmaswapPairh6UvkRi.burn.call(addressL16mTpU, {from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairh6UvkRi.sync.call({from: accounts[4]});
		const uintJMbOmZ8 = await PlasmaswapPairh6UvkRi.swap.call(uintWc5PwE, uintYwNfkWW, addressaJXr5sK, byteUzA72cC, {from: accounts[3]});

		await expect(PlasmaswapPairh6UvkRi.mint.call(addressiFM1BuF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwTw3C9Z = await PlasmaswapPair.new({from: accounts[4]});
		const byteU3LLTZY = "0x1c120214150115"
		const addressqHMJzch = accounts[2]
		const uintFB9OGxd = BigInt("204")
		const uintiCFO5np = BigInt("1302")
		const addressSgQHyf3 = accounts[4]
		const addresse7H9dbA = accounts[4]
		const addresspMzaA1 = accounts[3]
		await PlasmaswapPairwTw3C9Z.sync.call({from: accounts[1]});
		const uintFSAZIsE = await PlasmaswapPairwTw3C9Z.swap.call(uintiCFO5np, uintFB9OGxd, addressqHMJzch, byteU3LLTZY, {from: accounts[4]});
		const addresslWwLqJx = await PlasmaswapPairwTw3C9Z.initialize.call(addresse7H9dbA, addressSgQHyf3, {from: accounts[3]});
		const addressseqraiY = await PlasmaswapPairwTw3C9Z.skim.call(addresspMzaA1, {from: accounts[3]});

		await expect(PlasmaswapPairwTw3C9Z.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircGP9BR9 = await PlasmaswapPair.new({from: accounts[2]});
		const byteLzBrovZ = "0x130610081e1c1b020c051f1e1e1318"
		const addressqVggbFf = accounts[0]
		const uintllEwy0 = BigInt("933")
		const uintnpdV8GP = BigInt("812")
		const bytepbgs30r = "0x1c110d0f161f1b0e011702110217160207"
		const addressgtkZihC = accounts[3]
		const uinte2NASc9 = BigInt("1461")
		const uintMpX0Hx = BigInt("1026")
		const addressRGtacJY = accounts[2]
		const address60XAkc = accounts[3]
		const uintDlT6nZT = await PlasmaswapPaircGP9BR9.swap.call(uintnpdV8GP, uintllEwy0, addressqVggbFf, byteLzBrovZ, {from: accounts[0]});
		const uintgUgVkM6 = await PlasmaswapPaircGP9BR9.swap.call(uintMpX0Hx, uinte2NASc9, addressgtkZihC, bytepbgs30r, {from: accounts[2]});
		const addressxKUArb = await PlasmaswapPaircGP9BR9.initialize.call(address60XAkc, addressRGtacJY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPaircGP9BR9.swap.call(uintnpdV8GP, uintllEwy0, addressqVggbFf, byteLzBrovZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZVva0t3 = await PlasmaswapPair.new({from: accounts[1]});
		const addressn742msp = "0x0000000000000000000000000000000000000001"
		const addresseku5Ho7 = accounts[0]
		const addressHiKdwiB = "0x0000000000000000000000000000000000000001"
		const byteULf8sWv = "0x031c1816"
		const addressxx1EZwL = accounts[5]
		const uintvT4WuSD = BigInt("886")
		const uint9RHPhV = BigInt("205")
		const addressMZDU0lc = await PlasmaswapPairZVva0t3.initialize.call(addresseku5Ho7, addressn742msp, {from: accounts[5]});
		const uintMOcZxRa = await PlasmaswapPairZVva0t3.mint.call(addressHiKdwiB, {from: accounts[5]});
		const uintJFIMfU8 = await PlasmaswapPairZVva0t3.swap.call(uint9RHPhV, uintvT4WuSD, addressxx1EZwL, byteULf8sWv, {from: accounts[4]});

		await expect(PlasmaswapPairZVva0t3.initialize.call(addresseku5Ho7, addressn742msp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairT5W4P4w = await PlasmaswapPair.new({from: accounts[4]});
		const addressRGO8u73 = accounts[0]
		const addressHnJxElE = accounts[4]
		const addresszRnS4mY = await PlasmaswapPairT5W4P4w.skim.call(addressRGO8u73, {from: accounts[0]});
		const uinta47hTBE = await PlasmaswapPairT5W4P4w.mint.call(addressHnJxElE, {from: accounts[2]});
		const uint112M8nH8n4 = await PlasmaswapPairT5W4P4w.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairT5W4P4w.sync.call({from: accounts[0]});
		await PlasmaswapPairT5W4P4w.sync.call({from: accounts[2]});

		await expect(PlasmaswapPairT5W4P4w.skim.call(addressRGO8u73, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZVva0t3 = await PlasmaswapPair.new({from: accounts[1]});
		const addressjhixQn = accounts[2]
		const addressltbbG1c = "0x0000000000000000000000000000000000000001"
		const addressA1lfGxF = accounts[2]
		const addressSNrfuGp = accounts[1]
		const addressb62EGEZ = "0x0000000000000000000000000000000000000001"
		const addressZI0fQh6 = "0x0000000000000000000000000000000000000001"
		const addressfwJHaWJ = accounts[4]
		const bytevobFSfu = "0x031c1816"
		const addresslpjJgqL = accounts[5]
		const uintVTQjy5T = BigInt("886")
		const uintUz63Zty = BigInt("205")
		const uintb1i9VUn = await PlasmaswapPairZVva0t3.burn.call(addressjhixQn, {from: accounts[2]});
		const uintMOcZxRa = await PlasmaswapPairZVva0t3.mint.call(addressltbbG1c, {from: accounts[5]});
		const addressJegwUMy = await PlasmaswapPairZVva0t3.skim.call(addressA1lfGxF, {from: accounts[0]});
		const addressbhEV3MX = await PlasmaswapPairZVva0t3.initialize.call(addressb62EGEZ, addressSNrfuGp, {from: accounts[3]});
		const uintqltNjKw = await PlasmaswapPairZVva0t3.burn.call(addressZI0fQh6, {from: accounts[5]});
		const uintysItcLw = await PlasmaswapPairZVva0t3.burn.call(addressfwJHaWJ, {from: accounts[5]});
		await PlasmaswapPairZVva0t3.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJFIMfU8 = await PlasmaswapPairZVva0t3.swap.call(uintUz63Zty, uintVTQjy5T, addresslpjJgqL, bytevobFSfu, {from: accounts[4]});

		await expect(PlasmaswapPairZVva0t3.burn.call(addressjhixQn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQYfLMmm = await PlasmaswapPair.new({from: accounts[3]});
		const addressAxYigal = accounts[1]
		const addressLGLmlaq = accounts[4]
		const uint112MHKyj4m = await PlasmaswapPairQYfLMmm.getReserves.call({from: accounts[2]});
		await PlasmaswapPairQYfLMmm.lock.call({from: accounts[1]});
		const addresspbwVMwa = await PlasmaswapPairQYfLMmm.initialize.call(addressLGLmlaq, addressAxYigal, {from: accounts[4]});

		await expect(PlasmaswapPairQYfLMmm.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZVva0t3 = await PlasmaswapPair.new({from: accounts[1]});
		const addressUmZTCAt = accounts[1]
		const addressbcUXeeF = accounts[0]
		const byteYkWrBWe = "0x031c1816"
		const addressvnfu3ez = accounts[5]
		const uintVlglNrx = BigInt("863")
		const uintULz4jlO = BigInt("205")
		const uint112XIFnjvG = await PlasmaswapPairZVva0t3.getReserves.call({from: accounts[0]});
		const addressNWzCYT8 = await PlasmaswapPairZVva0t3.initialize.call(addressbcUXeeF, addressUmZTCAt, {from: accounts[1]});
		const uintJFIMfU8 = await PlasmaswapPairZVva0t3.swap.call(uintULz4jlO, uintVlglNrx, addressvnfu3ez, byteYkWrBWe, {from: accounts[4]});
		await PlasmaswapPairZVva0t3.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairZVva0t3.swap.call(uintULz4jlO, uintVlglNrx, addressvnfu3ez, byteYkWrBWe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZF7wNWC = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb75sOmL = accounts[0]
		const byteSoiW0DX = "0x091715121c1503111717050e0c051f0018130e1f1015181a1e0a1120081f"
		const addressHovE0nl = accounts[2]
		const uintkOtKszt = BigInt("1148")
		const uintmC4BCA7 = BigInt("323")
		const addressNFfzU5K = accounts[0]
		const addresssk6TNkZ = accounts[4]
		const addressEZ4yUQk = await PlasmaswapPairZF7wNWC.skim.call(addressb75sOmL, {from: accounts[3]});
		await PlasmaswapPairZF7wNWC.lock.call({from: accounts[0]});
		const uintSk9Km0x = await PlasmaswapPairZF7wNWC.swap.call(uintmC4BCA7, uintkOtKszt, addressHovE0nl, byteSoiW0DX, {from: "0x0000000000000000000000000000000000000001"});
		const addressicjoR7f = await PlasmaswapPairZF7wNWC.initialize.call(addresssk6TNkZ, addressNFfzU5K, {from: accounts[5]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZVva0t3 = await PlasmaswapPair.new({from: accounts[1]});
		const addressEvPPsjL = "0x00000000000000000000000000000000000000-1"
		const uintMOcZxRa = await PlasmaswapPairZVva0t3.mint.call(addressEvPPsjL, {from: accounts[5]});

		await expect(PlasmaswapPairZVva0t3.mint.call(addressEvPPsjL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
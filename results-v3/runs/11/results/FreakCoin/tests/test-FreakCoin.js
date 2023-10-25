const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinhIcntH = await FreakCoin.new({from: accounts[2]});
		const addressyH29g9o = accounts[2]
		const addressFHnW6l = accounts[1]
		const addressu1HvgIG = accounts[4]
		const uintr4R33W = BigInt("1514")
		const addresscjlHeY8 = accounts[2]
		const addressqmxcgQ = await FreakCoinhIcntH.uniswapAddress.call({from: accounts[1]});
		const uint256Azab0uq = await FreakCoinhIcntH.balanceOf.call(addressyH29g9o, {from: "0x0000000000000000000000000000000000000001"});
		const addressCB2iVJt = await FreakCoinhIcntH.setUniswapAddress.call(addressFHnW6l, {from: accounts[4]});
		const addressFYtJ6WQ = await FreakCoinhIcntH.setUniswapAddress.call(addressu1HvgIG, {from: accounts[3]});
		const addressSqV6D7j = await FreakCoinhIcntH.uniswapAddress.call({from: accounts[1]});
		const boolaZ4yO8I = await FreakCoinhIcntH.transfer.call(addresscjlHeY8, uintr4R33W, {from: accounts[5]});

		assert.equal(addressqmxcgQ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256Azab0uq, BigInt("1000000"))
		await expect(FreakCoinhIcntH.setUniswapAddress.call(addressFHnW6l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinc1fhGcv = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNJRLWz5 = BigInt("1982")
		const addressqy2B9qE = "0x0000000000000000000000000000000000000001"
		const addressYlazeuG = "0x0000000000000000000000000000000000000001"
		const uintgAL4aEv = BigInt("1508")
		const addressndz3kHF = "0x0000000000000000000000000000000000000001"
		const uintx9V6K7l = BigInt("1052")
		const addressMDUiNxV = accounts[5]
		const uintPkMmNMQ = BigInt("1742")
		const addresssWMhb2l = accounts[0]
		const addressyIm1kar = accounts[4]
		const boolubOBvTq = await FreakCoinc1fhGcv.transferFrom.call(addressYlazeuG, addressqy2B9qE, uintNJRLWz5, {from: accounts[5]});
		const boolEzL2GcP = await FreakCoinc1fhGcv.transfer.call(addressndz3kHF, uintgAL4aEv, {from: accounts[0]});
		const boolTnGiqYu = await FreakCoinc1fhGcv.approve.call(addressMDUiNxV, uintx9V6K7l, {from: accounts[1]});
		const addressPhKa8Eo = await FreakCoinc1fhGcv.uniswapAddress.call({from: accounts[4]});
		const booltuAaQVs = await FreakCoinc1fhGcv.transferFrom.call(addressyIm1kar, addresssWMhb2l, uintPkMmNMQ, {from: accounts[5]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoingzabGur = await FreakCoin.new({from: accounts[5]});
		const uintXphAmUU = BigInt("585")
		const addresssYo4VXd = accounts[2]
		const addressAt41jf4 = accounts[1]
		const addressHE9W8aQ = accounts[1]
		const uintCbJjDHU = BigInt("553")
		const addressK0kNcIb = accounts[1]
		const addressXGYW7U7 = accounts[4]
		const uintC8xbfgd = BigInt("1197")
		const addressqZF1gU9 = accounts[4]
		const boolkA78iWR = await FreakCoingzabGur.transfer.call(addresssYo4VXd, uintXphAmUU, {from: accounts[2]});
		const uint256eQKaWZf = await FreakCoingzabGur.allowance.call(addressHE9W8aQ, addressAt41jf4, {from: accounts[2]});
		const boolqNcI5uJ = await FreakCoingzabGur.transfer.call(addressK0kNcIb, uintCbJjDHU, {from: accounts[3]});
		const addresslMpCPfX = await FreakCoingzabGur.setUniswapAddress.call(addressXGYW7U7, {from: "0x0000000000000000000000000000000000000001"});
		const booltxGhHnT = await FreakCoingzabGur.transfer.call(addressqZF1gU9, uintC8xbfgd, {from: accounts[5]});

		await expect(FreakCoingzabGur.transfer.call(addresssYo4VXd, uintXphAmUU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinjsUQs7 = await FreakCoin.new({from: accounts[0]});
		const uintAJprUC6 = BigInt("719")
		const addressPEPZn5m = accounts[1]
		const addressdNnPWPR = accounts[5]
		const uintOmdVrEM = BigInt("1903")
		const addressWL9MELS = accounts[1]
		const addressHhjqGo5 = accounts[3]
		const boolb9qVQaG = await FreakCoinjsUQs7.transferFrom.call(addressdNnPWPR, addressPEPZn5m, uintAJprUC6, {from: accounts[0]});
		const boolCcBZsS1 = await FreakCoinjsUQs7.transfer.call(addressWL9MELS, uintOmdVrEM, {from: accounts[0]});
		const uint256dJhOn1Q = await FreakCoinjsUQs7.allUserBalances.call(addressHhjqGo5, {from: accounts[2]});

		await expect(FreakCoinjsUQs7.transferFrom.call(addressdNnPWPR, addressPEPZn5m, uintAJprUC6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinyattEl4 = await FreakCoin.new({from: accounts[3]});
		const addressSjhzIQ6 = accounts[2]
		const uintZJN1KRh = BigInt("1879")
		const addresskp2Wsw2 = accounts[4]
		const addresstJt0sE = accounts[5]
		const addressRljclyA = accounts[2]
		const addressFsnwpi = accounts[2]
		const uint256hla9hFH = await FreakCoinyattEl4.allUserBalances.call(addressSjhzIQ6, {from: accounts[2]});
		const booliJzflcP = await FreakCoinyattEl4.transferFrom.call(addresstJt0sE, addresskp2Wsw2, uintZJN1KRh, {from: accounts[2]});
		const uint256skjZ2p3 = await FreakCoinyattEl4.balanceOf.call(addressRljclyA, {from: accounts[3]});
		const uint256A7Yoq59 = await FreakCoinyattEl4.balanceOf.call(addressFsnwpi, {from: accounts[5]});
		const addressUizzAl = await FreakCoinyattEl4.uniswapAddress.call({from: accounts[0]});

		await expect(FreakCoinyattEl4.allUserBalances.call(addressSjhzIQ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinaPuKg1J = await FreakCoin.new({from: accounts[4]});
		const addressCvstF6E = accounts[0]
		const addressNR7qpRt = accounts[4]
		const addresskBCF6Zq = accounts[5]
		const uint256SkZlWUf = await FreakCoinaPuKg1J.allowance.call(addressNR7qpRt, addressCvstF6E, {from: accounts[2]});
		const addressfivvOKF = await FreakCoinaPuKg1J.uniswapAddress.call({from: accounts[0]});
		const uint256kzE7zGQ = await FreakCoinaPuKg1J.allUserBalances.call(addresskBCF6Zq, {from: accounts[2]});

		assert.equal(addressfivvOKF, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256SkZlWUf, BigInt("0"))
		await expect(FreakCoinaPuKg1J.allUserBalances.call(addresskBCF6Zq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNAKuueP = await FreakCoin.new({from: accounts[2]});
		const uintOIf16mG = BigInt("709")
		const addresswaSqyP = accounts[4]
		const addressTjONsqF = accounts[3]
		const uintsHOl33L = BigInt("800")
		const addressBPtJRri = accounts[2]
		const addressh1mMvK0 = accounts[3]
		const addresstuO6rkH = accounts[5]
		const addressHbGEUwJ = accounts[2]
		const boolymxbFpG = await FreakCoinNAKuueP.approve.call(addresswaSqyP, uintOIf16mG, {from: accounts[0]});
		const addressQMNpOEJ = await FreakCoinNAKuueP.setUniswapAddress.call(addressTjONsqF, {from: accounts[4]});
		const boolA6uxWai = await FreakCoinNAKuueP.transferFrom.call(addressh1mMvK0, addressBPtJRri, uintsHOl33L, {from: accounts[0]});
		const uint256QOljspr = await FreakCoinNAKuueP.allowance.call(addressHbGEUwJ, addresstuO6rkH, {from: accounts[2]});

		assert.equal(boolymxbFpG, true)
		await expect(FreakCoinNAKuueP.setUniswapAddress.call(addressTjONsqF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKCmkiNv = await FreakCoin.new({from: accounts[0]});
		const uintWVlPhhN = BigInt("47")
		const addressCwFXgdt = accounts[0]
		const addressjLIHosZ = accounts[3]
		const address5BM1bx = accounts[2]
		const addressUfMKlb = accounts[1]
		const addressnmvaKMt = accounts[1]
		const addressdOl216u = accounts[3]
		const address0Vm43n = accounts[0]
		const boolDeYu8Q2 = await FreakCoinKCmkiNv.transfer.call(addressCwFXgdt, uintWVlPhhN, {from: accounts[0]});
		const uint256zbgtzWY = await FreakCoinKCmkiNv.totalSupply.call({from: accounts[3]});
		const uint256N24dnNL = await FreakCoinKCmkiNv.balanceOf.call(addressjLIHosZ, {from: accounts[4]});
		const uint256aBu5Dcx = await FreakCoinKCmkiNv.balanceOf.call(address5BM1bx, {from: accounts[4]});
		const uint256sLxUh5G = await FreakCoinKCmkiNv.allowance.call(addressnmvaKMt, addressUfMKlb, {from: accounts[2]});
		const uint256Gme4GqO = await FreakCoinKCmkiNv.allowance.call(address0Vm43n, addressdOl216u, {from: accounts[3]});

		assert.equal(boolDeYu8Q2, true)
		assert.equal(uint256Gme4GqO, BigInt("0"))
		assert.equal(uint256N24dnNL, BigInt("0"))
		assert.equal(uint256aBu5Dcx, BigInt("0"))
		assert.equal(uint256sLxUh5G, BigInt("0"))
		assert.equal(uint256zbgtzWY, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKCmkiNv = await FreakCoin.new({from: accounts[0]});
		const uintwdvTTf1 = BigInt("47")
		const addressmJJSmD2 = accounts[0]
		const uintkrjh8Kz = BigInt("261")
		const addresswPrlfE = accounts[3]
		const uintpAX6L4J = BigInt("1431")
		const addressLA3Qon = accounts[0]
		const addressrEltak0 = accounts[4]
		const uintVq0Wg9B = BigInt("1962")
		const addressP89OJH = accounts[5]
		const addressr3np5e4 = accounts[3]
		const addressMCOjMBT = accounts[1]
		const addressOpAMOM4 = accounts[1]
		const uintOpvkhNk = BigInt("1779")
		const addressBANYeMI = accounts[0]
		const addressM1mEnwP = accounts[2]
		const addressSh3xNYF = accounts[5]
		const addressWSlV01p = accounts[3]
		const addressbjYWWtN = accounts[0]
		const uintO6krqUU = BigInt("1346")
		const addressuBfG27K = accounts[2]
		const addressg0BGGf = accounts[1]
		const addressXmkyAPN = accounts[1]
		const boolDeYu8Q2 = await FreakCoinKCmkiNv.transfer.call(addressmJJSmD2, uintwdvTTf1, {from: accounts[0]});
		const uint256zbgtzWY = await FreakCoinKCmkiNv.totalSupply.call({from: accounts[3]});
		const boolQzCXcD = await FreakCoinKCmkiNv.approve.call(addresswPrlfE, uintkrjh8Kz, {from: accounts[2]});
		const boolnWp2yRX = await FreakCoinKCmkiNv.approve.call(addressLA3Qon, uintpAX6L4J, {from: accounts[4]});
		const uint256N24dnNL = await FreakCoinKCmkiNv.balanceOf.call(addressrEltak0, {from: accounts[4]});
		const boold6ZrD8i = await FreakCoinKCmkiNv.transfer.call(addressP89OJH, uintVq0Wg9B, {from: accounts[0]});
		const uint256aBu5Dcx = await FreakCoinKCmkiNv.balanceOf.call(addressr3np5e4, {from: accounts[4]});
		const uint256sLxUh5G = await FreakCoinKCmkiNv.allowance.call(addressOpAMOM4, addressMCOjMBT, {from: accounts[2]});
		const boolx4CcAsD = await FreakCoinKCmkiNv.transferFrom.call(addressM1mEnwP, addressBANYeMI, uintOpvkhNk, {from: accounts[4]});
		const address4EcoUn = await FreakCoinKCmkiNv.setUniswapAddress.call(addressSh3xNYF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Gme4GqO = await FreakCoinKCmkiNv.allowance.call(addressbjYWWtN, addressWSlV01p, {from: accounts[3]});
		const boolgi4YRsE = await FreakCoinKCmkiNv.transferFrom.call(addressg0BGGf, addressuBfG27K, uintO6krqUU, {from: accounts[2]});
		const uint256FFDQjGb = await FreakCoinKCmkiNv.allUserBalances.call(addressXmkyAPN, {from: accounts[5]});

		assert.equal(boolDeYu8Q2, true)
		assert.equal(boolQzCXcD, true)
		assert.equal(boold6ZrD8i, true)
		assert.equal(boolnWp2yRX, true)
		assert.equal(uint256N24dnNL, BigInt("0"))
		assert.equal(uint256aBu5Dcx, BigInt("0"))
		assert.equal(uint256sLxUh5G, BigInt("0"))
		assert.equal(uint256zbgtzWY, BigInt("1000000"))
		await expect(FreakCoinKCmkiNv.transferFrom.call(addressM1mEnwP, addressBANYeMI, uintOpvkhNk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
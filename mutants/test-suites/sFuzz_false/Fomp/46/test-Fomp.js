const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressLThIcg3 = accounts[0]
		const FompPapPUFv = await Fomp.new(addressLThIcg3, {from: accounts[2]});
		const addressfO0zVQK = accounts[0]
		const addressolB35kv = accounts[5]
		const uintu4dYPxH = BigInt("848")
		const address43pa7k = accounts[2]
		const addressiht7Ju = accounts[0]
		const uintxzy34Qe = await FompPapPUFv.allowance.call(addressolB35kv, addressfO0zVQK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzwpNKTi = await FompPapPUFv.transfer.call(address43pa7k, uintu4dYPxH, {from: accounts[4]});
//		const uint96HwrR5U5 = await FompPapPUFv.getCurrentVotes.call(addressiht7Ju, {from: accounts[5]});

		assert.equal(uintxzy34Qe, BigInt("0"))
		await expect(FompPapPUFv.transfer.call(address43pa7k, uintu4dYPxH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressr3Vu8Sb = accounts[1]
		const FompqiyknDu = await Fomp.new(addressr3Vu8Sb, {from: accounts[0]});
		const addressNGdLJO4 = accounts[5]
		const addressAN6gnyq = "0x0000000000000000000000000000000000000001"
		const addressPQ3M4pQ = accounts[2]
		const uinttGtie4 = BigInt("1959")
		const addressPQllNHa = accounts[4]
		const addressuSiQe4N = accounts[3]
		const uintBksqYBx = BigInt("1969")
		const addressikFpYy = accounts[3]
		const addressud4oVK8 = accounts[2]
		const addressNOJ1dhe = accounts[4]
		const uinttG2dS4d = await FompqiyknDu.allowance.call(addressAN6gnyq, addressNGdLJO4, {from: accounts[2]});
		const addresszh5qNRL = await FompqiyknDu.delegate.call(addressPQ3M4pQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSRs7Sfa = await FompqiyknDu.transferFrom.call(addressuSiQe4N, addressPQllNHa, uinttGtie4, {from: accounts[5]});
//		const boolOPW7l8 = await FompqiyknDu.approve.call(addressikFpYy, uintBksqYBx, {from: accounts[1]});
//		const uintqXN8Wpk = await FompqiyknDu.allowance.call(addressNOJ1dhe, addressud4oVK8, {from: accounts[1]});

		assert.equal(uinttG2dS4d, BigInt("0"))
		await expect(FompqiyknDu.transferFrom.call(addressuSiQe4N, addressPQllNHa, uinttGtie4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressc1KJl0 = accounts[3]
		const Fompbme46jL = await Fomp.new(addressc1KJl0, {from: accounts[4]});
		const bytemjPrmM = "0x1417170d07161e15101f1e09160b1f0e021a1600070f0e1d1a0f0f050714030e"
		const bytex7Lf1oz = "0x0c1e15011017041c19080e0e050a11130516191d040d0b18121005191904120a"
		const uintql8CtFn = BigInt("165")
		const uintgvbUcEu = BigInt("514")
		const uintZW9qU3a = BigInt("1359")
		const addressiJ9fVDZ = accounts[0]
		const uintDGZP3Oq = BigInt("504")
		const addressaoZnf0 = accounts[4]
		const addressJcqcQw3 = accounts[5]
//		const addressUvY3kbL = await Fompbme46jL.delegateBySig.call(addressiJ9fVDZ, uintZW9qU3a, uintgvbUcEu, uintql8CtFn, bytex7Lf1oz, bytemjPrmM, {from: accounts[2]});
//		const boolgYZL9Kd = await Fompbme46jL.transferFrom.call(addressJcqcQw3, addressaoZnf0, uintDGZP3Oq, {from: accounts[1]});

		await expect(Fompbme46jL.delegateBySig.call(addressiJ9fVDZ, uintZW9qU3a, uintgvbUcEu, uintql8CtFn, bytex7Lf1oz, bytemjPrmM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressf1Icbjc = accounts[1]
		const FompLwIhPNS = await Fomp.new(addressf1Icbjc, {from: accounts[2]});
		const addressjgWrwr9 = accounts[3]
		const addressFHqkrYO = accounts[4]
		const uintjkjRgZo = BigInt("1175")
		const addressuKXIMk0 = accounts[1]
		const addresskz0N0g = accounts[1]
		const addressz1uraES = accounts[3]
		const addressYq2X1Z = accounts[0]
		const uintzcytoF = BigInt("1290")
		const addressdfSYwHz = "0x0000000000000000000000000000000000000001"
		const addresssrSJ9AG = accounts[0]
		const addresslDY7aG3 = await FompLwIhPNS.delegate.call(addressjgWrwr9, {from: accounts[5]});
		const addressf8ifSi8 = await FompLwIhPNS.delegate.call(addressFHqkrYO, {from: "0x0000000000000000000000000000000000000001"});
		const uint96AQz7JA = await FompLwIhPNS.getPriorVotes.call(addressuKXIMk0, uintjkjRgZo, {from: accounts[3]});
		const uintlgOO4Hy = await FompLwIhPNS.allowance.call(addressz1uraES, addresskz0N0g, {from: accounts[0]});
		const uintVuMyScI = await FompLwIhPNS.balanceOf.call(addressYq2X1Z, {from: accounts[0]});
//		const boolZ42Ex9I = await FompLwIhPNS.transferFrom.call(addresssrSJ9AG, addressdfSYwHz, uintzcytoF, {from: accounts[3]});

		assert.equal(uint96AQz7JA, BigInt("0"))
		assert.equal(uintVuMyScI, BigInt("0"))
		assert.equal(uintlgOO4Hy, BigInt("0"))
		await expect(FompLwIhPNS.transferFrom.call(addresssrSJ9AG, addressdfSYwHz, uintzcytoF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressU3Qsn0G = accounts[3]
		const FomphTVjn9C = await Fomp.new(addressU3Qsn0G, {from: "0x0000000000000000000000000000000000000001"});
		const uintIq79R4 = BigInt("1877")
		const addressROXKZFh = accounts[2]
		const addressw0y92Ew = accounts[0]
		const bytexYE3LcP = "0x0108021f1711061607120b160009121210161611191a071d1210180909050c14"
		const byteZ8cFGLj = "0x1814080611071e1817030b180003011209010f160f091b0c0b082019060a0d00"
		const uintkiLgovg = BigInt("109")
		const uintzbjpwua = BigInt("174")
		const uintZwp21Nh = BigInt("591")
		const addressMPWvsKe = accounts[2]
		const addressubVxrTf = accounts[5]
		const booleQTrUmj = await FomphTVjn9C.approve.call(addressROXKZFh, uintIq79R4, {from: accounts[2]});
		const uintaHv4vZI = await FomphTVjn9C.balanceOf.call(addressw0y92Ew, {from: accounts[3]});
		const addressjb2yyTm = await FomphTVjn9C.delegateBySig.call(addressMPWvsKe, uintZwp21Nh, uintzbjpwua, uintkiLgovg, byteZ8cFGLj, bytexYE3LcP, {from: accounts[1]});
		const addressNlpniKk = await FomphTVjn9C.delegate.call(addressubVxrTf, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addressStHv3sV = accounts[3]
		const Fompbme46jL = await Fomp.new(addressStHv3sV, {from: accounts[4]});
		const addressnMfqOc = accounts[3]
		const byteV2pjus5 = "0x1417170d07161e15101f1e09160b1f0e021a1600070f0e1d1a0f0f050714030e"
		const byteXZFTU0K = "0x0c1e15011017041c19080e0e050a11130516191d040d0b18121005191904120a"
		const uintzsKANka = BigInt("192")
		const uintjWWgq5d = BigInt("514")
		const uintCklOaod = BigInt("1359")
		const addressiJGuTFG = accounts[0]
		const uintTT0TvES = BigInt("834")
		const addressJFRjrXy = accounts[1]
		const uint2CKp7K = BigInt("504")
		const addressyn8I86w = accounts[4]
		const addresso2DBkCp = accounts[5]
		const uint96nzrbsZv = await Fompbme46jL.getCurrentVotes.call(addressnMfqOc, {from: accounts[4]});
//		const addressUvY3kbL = await Fompbme46jL.delegateBySig.call(addressiJGuTFG, uintCklOaod, uintjWWgq5d, uintzsKANka, byteXZFTU0K, byteV2pjus5, {from: accounts[2]});
//		const boolsY6S7uR = await Fompbme46jL.approve.call(addressJFRjrXy, uintTT0TvES, {from: accounts[1]});
//		const boolgYZL9Kd = await Fompbme46jL.transferFrom.call(addresso2DBkCp, addressyn8I86w, uint2CKp7K, {from: accounts[1]});

		assert.equal(uint96nzrbsZv, BigInt("0"))
		await expect(Fompbme46jL.delegateBySig.call(addressiJGuTFG, uintCklOaod, uintjWWgq5d, uintzsKANka, byteXZFTU0K, byteV2pjus5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressO41BAHY = accounts[1]
		const FompqiyknDu = await Fomp.new(addressO41BAHY, {from: accounts[0]});
		const addresskpIHAr0 = accounts[6]
		const addressiKYgGHA = "0x0000000000000000000000000000000000000001"
		const uintOoVaF0 = BigInt("92")
		const addressuId4gle = accounts[4]
		const addressKqAs9W0 = accounts[2]
		const uintUOxPs2y = BigInt("1959")
		const address04NKDQ = accounts[4]
		const addressRsKlxat = accounts[3]
		const uintY1cekPo = BigInt("1969")
		const addressgsHq4ry = accounts[3]
		const addressrr3ZlpO = accounts[2]
		const addressKsdRV6H = accounts[4]
		const uinttG2dS4d = await FompqiyknDu.allowance.call(addressiKYgGHA, addresskpIHAr0, {from: accounts[2]});
		const boolKkMOweE = await FompqiyknDu.transfer.call(addressuId4gle, uintOoVaF0, {from: accounts[1]});
		const addresszh5qNRL = await FompqiyknDu.delegate.call(addressKqAs9W0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSRs7Sfa = await FompqiyknDu.transferFrom.call(addressRsKlxat, address04NKDQ, uintUOxPs2y, {from: accounts[5]});
//		const boolOPW7l8 = await FompqiyknDu.approve.call(addressgsHq4ry, uintY1cekPo, {from: accounts[1]});
//		const uintqXN8Wpk = await FompqiyknDu.allowance.call(addressKsdRV6H, addressrr3ZlpO, {from: accounts[1]});

		assert.equal(boolKkMOweE, true)
		assert.equal(uinttG2dS4d, BigInt("0"))
		await expect(FompqiyknDu.transferFrom.call(addressRsKlxat, address04NKDQ, uintUOxPs2y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressgl0kXm7 = accounts[1]
		const FompqiyknDu = await Fomp.new(addressgl0kXm7, {from: accounts[0]});
		const addressHn8HxwO = accounts[5]
		const addresst38CQdb = "0x0000000000000000000000000000000000000001"
		const addressleWypXh = accounts[2]
		const uintrjw4TOX = BigInt("1969")
		const addressLY7C9aW = accounts[3]
		const addressXs1Ktj = accounts[2]
		const addressJzlSxM4 = accounts[4]
		const uinttG2dS4d = await FompqiyknDu.allowance.call(addresst38CQdb, addressHn8HxwO, {from: accounts[2]});
		const addresszh5qNRL = await FompqiyknDu.delegate.call(addressleWypXh, {from: "0x0000000000000000000000000000000000000001"});
		const boolOPW7l8 = await FompqiyknDu.approve.call(addressLY7C9aW, uintrjw4TOX, {from: accounts[1]});
		const uintqXN8Wpk = await FompqiyknDu.allowance.call(addressJzlSxM4, addressXs1Ktj, {from: accounts[1]});

		assert.equal(boolOPW7l8, true)
		assert.equal(uintqXN8Wpk, BigInt("0"))
		assert.equal(uinttG2dS4d, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const address9WcB9o = accounts[1]
		const FompqiyknDu = await Fomp.new(address9WcB9o, {from: accounts[0]});
		const addressnHjpFkJ = accounts[1]
		const addressDsmTsAS = "0x0000000000000000000000000000000000000001"
		const addressZoLNfxM = accounts[2]
		const uintnZ6zlDb = BigInt("1409")
		const addressMJhyBRL = accounts[1]
		const uintLes2owq = BigInt("1969")
		const addressSpF5rAh = accounts[4]
		const addressBDjVW7H = accounts[2]
		const addressCfJf8p = accounts[4]
		const uintkI9RcUu = BigInt("1581")
		const addressLVFWzj1 = accounts[0]
		const uinttG2dS4d = await FompqiyknDu.allowance.call(addressDsmTsAS, addressnHjpFkJ, {from: accounts[2]});
		const addresszh5qNRL = await FompqiyknDu.delegate.call(addressZoLNfxM, {from: "0x0000000000000000000000000000000000000001"});
		const boolbgv3BVD = await FompqiyknDu.transfer.call(addressMJhyBRL, uintnZ6zlDb, {from: accounts[1]});
		const boolOPW7l8 = await FompqiyknDu.approve.call(addressSpF5rAh, uintLes2owq, {from: accounts[1]});
		const uintqXN8Wpk = await FompqiyknDu.allowance.call(addressCfJf8p, addressBDjVW7H, {from: accounts[1]});
		const boolQuLULp = await FompqiyknDu.approve.call(addressLVFWzj1, uintkI9RcUu, {from: accounts[0]});

		assert.equal(boolOPW7l8, true)
		assert.equal(boolQuLULp, true)
		assert.equal(boolbgv3BVD, true)
		assert.equal(uintqXN8Wpk, BigInt("0"))
		assert.equal(uinttG2dS4d, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressXBnJKE = "0x0000000000000000000000000000000000000001"
		const FompxzUxzX1 = await Fomp.new(addressXBnJKE, {from: accounts[2]});
		const addressMS7Le43 = accounts[5]
		const bytevs9v2a7 = "0x0309070213030c021e1b1313011d111c0b19150a1600081a1e1a1e031d0f0b1f"
		const byteIWR4doU = "0x1407041913111b12091d1013100713170709141e1c1d0914040309091e021b08"
		const uintDnNAe1y = BigInt("56")
		const uintpQTZlrk = BigInt("1868")
		const uintKN9iM89 = BigInt("573")
		const addressvyB4kw = accounts[3]
		const uint1hJLRh = BigInt("630")
		const addressi75wBlk = accounts[1]
		const addressop5D5py = accounts[0]
		const uintYrNNdtZ = await FompxzUxzX1.balanceOf.call(addressMS7Le43, {from: accounts[0]});
//		const addressGbqavKS = await FompxzUxzX1.delegateBySig.call(addressvyB4kw, uintKN9iM89, uintpQTZlrk, uintDnNAe1y, byteIWR4doU, bytevs9v2a7, {from: accounts[5]});
//		const booljMJEHci = await FompxzUxzX1.transferFrom.call(addressop5D5py, addressi75wBlk, uint1hJLRh, {from: accounts[2]});

		assert.equal(uintYrNNdtZ, BigInt("0"))
		await expect(FompxzUxzX1.delegateBySig.call(addressvyB4kw, uintKN9iM89, uintpQTZlrk, uintDnNAe1y, byteIWR4doU, bytevs9v2a7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressirZZblB = accounts[3]
		const Fompbme46jL = await Fomp.new(addressirZZblB, {from: accounts[4]});
		const uintIAReHfF = BigInt("408")
		const addressROnJi5 = accounts[5]
		const addressaSBPiL4 = accounts[1]
		const addressfGZUanK = accounts[1]
		const boolT3hesvJ = await Fompbme46jL.approve.call(addressROnJi5, uintIAReHfF, {from: accounts[3]});
		const uintyEeLQbs = await Fompbme46jL.balanceOf.call(addressaSBPiL4, {from: accounts[2]});
		const addressLvLwH3I = await Fompbme46jL.delegate.call(addressfGZUanK, {from: accounts[3]});

		assert.equal(boolT3hesvJ, true)
		assert.equal(uintyEeLQbs, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressJvmC1W = accounts[3]
		const Fompbme46jL = await Fomp.new(addressJvmC1W, {from: accounts[4]});
		const addressYSYhfN0 = accounts[2]
		const address32Fdaa = accounts[1]
		const uintYQgCefm = BigInt("126")
		const addressZlwnQpE = accounts[2]
		const uintyEeLQbs = await Fompbme46jL.balanceOf.call(addressYSYhfN0, {from: accounts[2]});
		const addressLvLwH3I = await Fompbme46jL.delegate.call(address32Fdaa, {from: accounts[3]});
		const uint967cMvvK = await Fompbme46jL.getPriorVotes.call(addressZlwnQpE, uintYQgCefm, {from: accounts[3]});

		assert.equal(uint967cMvvK, BigInt("0"))
		assert.equal(uintyEeLQbs, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressivYQ4Jj = accounts[2]
		const FompgYqnQpx = await Fomp.new(addressivYQ4Jj, {from: accounts[5]});
		const bytez8nCjH1 = "0x0e0c1c16160c0e0f151e15040415051200011308091e0f15160a101610020a19"
		const byteya8UaIj = "0x130f0c0c041d0c1d05070209051a0b19190f12061c150b081e0a08011e180e05"
		const uintyGXP1ea = BigInt("27")
		const uintzEVTi8U = BigInt("1124")
		const uintSkIJZml = BigInt("1486")
		const addresst48rmqg = accounts[3]
		const addressnQqEcwU = accounts[1]
		const addressA3hNEu = accounts[1]
		const addressVHZATMu = accounts[2]
		const uintVLcQ4XY = BigInt("843")
		const addressH8fk12F = accounts[3]
		const addressN5eeoVi = accounts[0]
		const uintZtPkwxK = BigInt("1830")
		const addresslFsBpFJ = accounts[3]
		const addressOUdjTUK = accounts[2]
		const addressWW1O9wM = accounts[3]
//		const addressxPDUvA = await FompgYqnQpx.delegateBySig.call(addresst48rmqg, uintSkIJZml, uintzEVTi8U, uintyGXP1ea, byteya8UaIj, bytez8nCjH1, {from: accounts[2]});
//		const uintlWiGfLh = await FompgYqnQpx.allowance.call(addressA3hNEu, addressnQqEcwU, {from: accounts[3]});
//		const uint964h4f6Z = await FompgYqnQpx.getCurrentVotes.call(addressVHZATMu, {from: accounts[2]});
//		const boolIKGlVSl = await FompgYqnQpx.transferFrom.call(addressN5eeoVi, addressH8fk12F, uintVLcQ4XY, {from: accounts[3]});
//		const boolPnyc8rD = await FompgYqnQpx.transferFrom.call(addressOUdjTUK, addresslFsBpFJ, uintZtPkwxK, {from: accounts[1]});
//		const uintzMqqeG = await FompgYqnQpx.balanceOf.call(addressWW1O9wM, {from: accounts[5]});

		await expect(FompgYqnQpx.delegateBySig.call(addresst48rmqg, uintSkIJZml, uintzEVTi8U, uintyGXP1ea, byteya8UaIj, bytez8nCjH1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
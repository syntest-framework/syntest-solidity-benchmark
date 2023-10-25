const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YATvifK = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwBxdmU = BigInt("1643")
		const addressggmvnaH = accounts[2]
		const uintKBaXSZ = BigInt("1763")
		const addressqgcl6gj = accounts[1]
		const uintiPn9Rr = BigInt("1030")
		const addresslwJNRLe = accounts[1]
		const addressfbUpTDM = accounts[0]
		const addressBZqEUrD = accounts[1]
		const uintxoNoDgO = BigInt("1515")
		const addressQu44Y3W = accounts[0]
		const boolpmxbPZ = await GAZ_ERC20YATvifK.approve.call(addressggmvnaH, uintwBxdmU, {from: accounts[4]});
		const boolyCuTpz = await GAZ_ERC20YATvifK.transfer.call(addressqgcl6gj, uintKBaXSZ, {from: accounts[5]});
		const booluv27Aw6 = await GAZ_ERC20YATvifK.transferFrom.call(addressfbUpTDM, addresslwJNRLe, uintiPn9Rr, {from: accounts[5]});
		const boolf69glR3 = await GAZ_ERC20YATvifK.approve.call(addressBZqEUrD, {from: "0x0000000000000000000000000000000000000001"});
		const boolzYZJqRn = await GAZ_ERC20YATvifK.approve.call(addressQu44Y3W, uintxoNoDgO, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20FBvai8 = await GAZ_ERC20.new({from: accounts[3]});
		const uintBMy18wS = BigInt("1849")
		const addressU9sPIus = accounts[5]
		const uintcCka2zd = BigInt("1823")
		const addresso4d3mk = accounts[3]
		const uintevJlMTP = BigInt("1232")
		const addressDT2rt8T = accounts[0]
		const uintXCCpIwa = BigInt("1402")
		const addressfGHlBDs = accounts[4]
		const boolv8V3g2i = await GAZ_ERC20FBvai8.transfer.call(addressU9sPIus, uintBMy18wS, {from: accounts[0]});
		const boolvTmLiG2 = await GAZ_ERC20FBvai8.transfer.call(addresso4d3mk, uintcCka2zd, {from: accounts[5]});
		const boolHzztkaw = await GAZ_ERC20FBvai8.transfer.call(addressDT2rt8T, uintevJlMTP, {from: accounts[0]});
		const boolNifL9u = await GAZ_ERC20FBvai8.transfer.call(addressfGHlBDs, uintXCCpIwa, {from: accounts[2]});

		await expect(GAZ_ERC20FBvai8.transfer.call(addressU9sPIus, uintBMy18wS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20HgQz65p = await GAZ_ERC20.new({from: accounts[0]});
		const uintE59kKpF = BigInt("1876")
		const addressOzmx4Fb = accounts[0]
		const addressrG1Gih = accounts[1]
		const uintKZTNsaH = BigInt("1246")
		const addressXayXpPV = accounts[0]
		const uintn9L3QN4 = BigInt("1772")
		const addressO7dkWkC = accounts[1]
		const uint4gS46P = BigInt("2037")
		const addressGdmNdJr = accounts[4]
		const boolRbziaET = await GAZ_ERC20HgQz65p.transferFrom.call(addressrG1Gih, addressOzmx4Fb, uintE59kKpF, {from: accounts[3]});
		const bool9IX6z6 = await GAZ_ERC20HgQz65p.transfer.call(addressXayXpPV, uintKZTNsaH, {from: accounts[1]});
		const boolMgohYBl = await GAZ_ERC20HgQz65p.transfer.call(addressO7dkWkC, uintn9L3QN4, {from: accounts[5]});
		const boolDvMkOVX = await GAZ_ERC20HgQz65p.transfer.call(addressGdmNdJr, uint4gS46P, {from: accounts[5]});

		await expect(GAZ_ERC20HgQz65p.transferFrom.call(addressrG1Gih, addressOzmx4Fb, uintE59kKpF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20hAIUgv = await GAZ_ERC20.new({from: accounts[2]});
		const addressiYy1vS = accounts[2]
		const uintWmBidy = BigInt("1571")
		const addressWzntgvl = accounts[3]
		const uintstg522M = BigInt("1592")
		const addressgRElkxN = accounts[1]
		const uintVLVWI0 = BigInt("278")
		const addressRILN3ad = accounts[4]
		const booleF4AgvY = await GAZ_ERC20hAIUgv.approve.call(addressiYy1vS, {from: accounts[5]});
		const boolf3qVGxe = await GAZ_ERC20hAIUgv.approve.call(addressWzntgvl, uintWmBidy, {from: "0x0000000000000000000000000000000000000001"});
		const booluSIYnKu = await GAZ_ERC20hAIUgv.transfer.call(addressgRElkxN, uintstg522M, {from: accounts[2]});
		const boolcqiz98x = await GAZ_ERC20hAIUgv.transfer.call(addressRILN3ad, uintVLVWI0, {from: accounts[4]});

		await expect(GAZ_ERC20hAIUgv.approve.call(addressiYy1vS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qFTKy8f = await GAZ_ERC20.new({from: accounts[1]});
		const uintT5A23vm = BigInt("1963")
		const addressHjMhOhz = accounts[2]
		const uintBKBbXLZ = BigInt("1802")
		const addressOfc3wog = accounts[0]
		const uintzjg0zZD = BigInt("546")
		const addressUyycg8d = accounts[1]
		const addressPIKawyq = accounts[0]
		const uintM62948q = BigInt("569")
		const addressj99rlz0 = accounts[1]
		const uintYouIjW9 = BigInt("1668")
		const addressQmJJzRU = accounts[2]
		const boolSD35u60 = await GAZ_ERC20qFTKy8f.approve.call(addressHjMhOhz, uintT5A23vm, {from: accounts[0]});
		const boolg7o3qTe = await GAZ_ERC20qFTKy8f.transfer.call(addressOfc3wog, uintBKBbXLZ, {from: accounts[3]});
		const boolSEMacS6 = await GAZ_ERC20qFTKy8f.transferFrom.call(addressPIKawyq, addressUyycg8d, uintzjg0zZD, {from: accounts[1]});
		const boolyK8SL2I = await GAZ_ERC20qFTKy8f.approve.call(addressj99rlz0, uintM62948q, {from: accounts[3]});
		const boolsoOqK0V = await GAZ_ERC20qFTKy8f.transfer.call(addressQmJJzRU, uintYouIjW9, {from: accounts[4]});

		assert.equal(boolSD35u60, true)
		await expect(GAZ_ERC20qFTKy8f.transfer.call(addressOfc3wog, uintBKBbXLZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fc1UUGC = await GAZ_ERC20.new({from: accounts[3]});
		const uintH9MeWnZ = BigInt("413")
		const addressxvQBqAI = accounts[1]
		const uintVUeH5ss = BigInt("1017")
		const addressqHqJj7 = accounts[4]
		const uinta97wcpP = BigInt("1458")
		const addressGiTv01 = accounts[0]
		const addressmODvqCl = accounts[4]
		const boolJ7hxZe = await GAZ_ERC20fc1UUGC.approve.call(addressxvQBqAI, uintH9MeWnZ, {from: accounts[2]});
		const boolxlsGIyw = await GAZ_ERC20fc1UUGC.approve.call(addressqHqJj7, uintVUeH5ss, {from: accounts[1]});
		const boolnrhLxsL = await GAZ_ERC20fc1UUGC.approve.call(addressGiTv01, uinta97wcpP, {from: "0x0000000000000000000000000000000000000001"});
		const boolJiGBp9D = await GAZ_ERC20fc1UUGC.approve.call(addressmODvqCl, {from: accounts[3]});

		assert.equal(boolJ7hxZe, true)
		assert.equal(boolnrhLxsL, true)
		assert.equal(boolxlsGIyw, true)
		await expect(GAZ_ERC20fc1UUGC.approve.call(addressmODvqCl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20JlQNGil = await GAZ_ERC20.new({from: accounts[1]});
		const uintA7sL3ti = BigInt("1124")
		const addressYX3n2ch = accounts[2]
		const uintqGWKE6 = BigInt("1392")
		const addressB0dx64D = accounts[1]
		const uintsf5pkZ = BigInt("1842")
		const addressd26c283 = accounts[2]
		const addressXuiKAf0 = accounts[2]
		const uintv5FreH = BigInt("452")
		const addressntbsYwi = accounts[4]
		const addressPIQG1VM = accounts[1]
		const uintwawWc87 = BigInt("850")
		const addressqLIPZkH = accounts[3]
		const boolu2wy1dX = await GAZ_ERC20JlQNGil.transfer.call(addressYX3n2ch, uintA7sL3ti, {from: accounts[1]});
		const boolVSDsuoY = await GAZ_ERC20JlQNGil.approve.call(addressB0dx64D, uintqGWKE6, {from: accounts[4]});
		const boolsTGkos = await GAZ_ERC20JlQNGil.transferFrom.call(addressXuiKAf0, addressd26c283, uintsf5pkZ, {from: accounts[3]});
		const boolnIFOdkM = await GAZ_ERC20JlQNGil.transferFrom.call(addressPIQG1VM, addressntbsYwi, uintv5FreH, {from: accounts[1]});
		const boolssVKAFQ = await GAZ_ERC20JlQNGil.approve.call(addressqLIPZkH, uintwawWc87, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVSDsuoY, true)
		assert.equal(boolu2wy1dX, true)
		await expect(GAZ_ERC20JlQNGil.transferFrom.call(addressXuiKAf0, addressd26c283, uintsf5pkZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xALmjBn = await GAZ_ERC20.new({from: accounts[3]});
		const addressTdrwvkw = accounts[1]
		const uinty19BhA4 = BigInt("1030")
		const addressfTRGtWT = accounts[0]
		const uintYFKBsmz = BigInt("303")
		const addressPAci7GW = accounts[0]
		const uintpdCxD4i = BigInt("1030")
		const addressgaWNba4 = accounts[4]
		const addressob0qdj7 = accounts[3]
		const uint7vSHlH = BigInt("1856")
		const addressHPcmp0b = accounts[3]
		const addressudjlPSj = accounts[4]
		const boolYClPH6 = await GAZ_ERC20xALmjBn.approve.call(addressTdrwvkw, {from: accounts[2]});
		const boolxJplfWF = await GAZ_ERC20xALmjBn.approve.call(addressfTRGtWT, uinty19BhA4, {from: accounts[1]});
		const boolmm2ELEQ = await GAZ_ERC20xALmjBn.approve.call(addressPAci7GW, uintYFKBsmz, {from: accounts[4]});
		const boolgMEgLfB = await GAZ_ERC20xALmjBn.transfer.call(addressgaWNba4, uintpdCxD4i, {from: accounts[3]});
		const boollx6By4L = await GAZ_ERC20xALmjBn.approve.call(addressob0qdj7, {from: "0x0000000000000000000000000000000000000001"});
		const boolFvu6ynD = await GAZ_ERC20xALmjBn.transferFrom.call(addressudjlPSj, addressHPcmp0b, uint7vSHlH, {from: accounts[2]});

		await expect(GAZ_ERC20xALmjBn.approve.call(addressTdrwvkw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20hCD2n0O = await GAZ_ERC20.new({from: accounts[2]});
		const uinte2upF9K = BigInt("1242")
		const addresscT313U = accounts[4]
		const addressUwaL0Ai = accounts[2]
		const addressL9HaOQN = accounts[4]
		const uintqXCsyfs = BigInt("664")
		const addressT2pffFg = accounts[3]
		const boolIBtupkN = await GAZ_ERC20hCD2n0O.transferFrom.call(addressUwaL0Ai, addresscT313U, uinte2upF9K, {from: accounts[2]});
		const boolCo6DdOG = await GAZ_ERC20hCD2n0O.approve.call(addressL9HaOQN, {from: accounts[1]});
		const boolMT797sd = await GAZ_ERC20hCD2n0O.approve.call(addressT2pffFg, uintqXCsyfs, {from: accounts[0]});

		assert.equal(boolIBtupkN, true)
		await expect(GAZ_ERC20hCD2n0O.approve.call(addressL9HaOQN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20T0nQT1f = await GAZ_ERC20.new({from: accounts[5]});
		const addressnNBKhzU = accounts[0]
		const uintW3NWRQ6 = BigInt("61")
		const addressEc7CEV = accounts[2]
		const uintffjxuNm = BigInt("1040")
		const addressSxSUDgP = accounts[3]
		const addressrIbJzux = accounts[1]
		const uintEur2hsf = BigInt("1185")
		const addresswbvc3nH = accounts[2]
		const boolbDSbqat = await GAZ_ERC20T0nQT1f.approve.call(addressnNBKhzU, {from: accounts[4]});
		const boolfENta0J = await GAZ_ERC20T0nQT1f.approve.call(addressEc7CEV, uintW3NWRQ6, {from: accounts[4]});
		const boolHi8nmTg = await GAZ_ERC20T0nQT1f.approve.call(addressSxSUDgP, uintffjxuNm, {from: accounts[3]});
		const boolvzsVi7Q = await GAZ_ERC20T0nQT1f.approve.call(addressrIbJzux, {from: accounts[4]});
		const boolyVcB20X = await GAZ_ERC20T0nQT1f.transfer.call(addresswbvc3nH, uintEur2hsf, {from: accounts[1]});

		await expect(GAZ_ERC20T0nQT1f.approve.call(addressnNBKhzU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BvVaFtW = await GAZ_ERC20.new({from: accounts[1]});
		const uintUVM9lBb = BigInt("1814")
		const addressCi5pRk9 = accounts[1]
		const addressC5PLdri = accounts[2]
		const uintZ59jP4k = BigInt("2045")
		const addressDaMBLWU = accounts[2]
		const uintQFlzuRu = BigInt("123")
		const addressHfkVAKD = accounts[5]
		const uintetwWIPa = BigInt("399")
		const addressgPPd1F0 = accounts[3]
		const booluhycgWK = await GAZ_ERC20BvVaFtW.approve.call(addressCi5pRk9, uintUVM9lBb, {from: accounts[3]});
		const boolVloV0ll = await GAZ_ERC20BvVaFtW.approve.call(addressC5PLdri, {from: accounts[0]});
		const booliy5SJQ = await GAZ_ERC20BvVaFtW.transfer.call(addressDaMBLWU, uintZ59jP4k, {from: accounts[1]});
		const boolGqgX1pc = await GAZ_ERC20BvVaFtW.approve.call(addressHfkVAKD, uintQFlzuRu, {from: accounts[4]});
		const boolbwqLgbK = await GAZ_ERC20BvVaFtW.approve.call(addressgPPd1F0, uintetwWIPa, {from: accounts[0]});

		assert.equal(booluhycgWK, true)
		await expect(GAZ_ERC20BvVaFtW.approve.call(addressC5PLdri, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20HgQz65p = await GAZ_ERC20.new({from: accounts[0]});
		const addresso0tYlV3 = accounts[4]
		const uintgqu5Ppj = BigInt("1917")
		const addressgQtXbVA = accounts[0]
		const addresstd4ZD5G = accounts[1]
		const boolEvSumx = await GAZ_ERC20HgQz65p.approve.call(addresso0tYlV3, {from: "0x0000000000000000000000000000000000000001"});
		const boolRbziaET = await GAZ_ERC20HgQz65p.transferFrom.call(addresstd4ZD5G, addressgQtXbVA, uintgqu5Ppj, {from: accounts[3]});

		await expect(GAZ_ERC20HgQz65p.approve.call(addresso0tYlV3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
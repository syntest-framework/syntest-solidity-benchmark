const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20FVQI2DW = await GAZ_ERC20.new({from: accounts[2]});
		const uintCPmul24 = BigInt("1191")
		const addressHxEZlij = accounts[3]
		const uintCfLwbJU = BigInt("227")
		const addressJmtTGyi = accounts[3]
		const uintCPy7zLW = BigInt("186")
		const addressualneWx = accounts[4]
		const uintnRJCLbX = BigInt("1722")
		const addressGUaCCEi = accounts[2]
		const uintbMbuCMb = BigInt("967")
		const addressqCoD24 = accounts[4]
		const boolSvBIGs6 = await GAZ_ERC20FVQI2DW.transfer.call(addressHxEZlij, uintCPmul24, {from: accounts[1]});
		const boolf20Gzgn = await GAZ_ERC20FVQI2DW.transfer.call(addressJmtTGyi, uintCfLwbJU, {from: accounts[5]});
		const booldKMsqv4 = await GAZ_ERC20FVQI2DW.approve.call(addressualneWx, uintCPy7zLW, {from: "0x0000000000000000000000000000000000000001"});
		const boolTAvjlHH = await GAZ_ERC20FVQI2DW.approve.call(addressGUaCCEi, uintnRJCLbX, {from: accounts[2]});
		const boolx3u4Erg = await GAZ_ERC20FVQI2DW.approve.call(addressqCoD24, uintbMbuCMb, {from: accounts[3]});

		await expect(GAZ_ERC20FVQI2DW.transfer.call(addressHxEZlij, uintCPmul24, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintfh6Xxyf = BigInt("599")
		const addressY5a10yR = accounts[1]
		const uintuQw1XxZ = BigInt("929")
		const addressnPyvj8 = accounts[5]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressY5a10yR, uintfh6Xxyf, {from: "0x0000000000000000000000000000000000000001"});
		const boolBgTvkxK = await GAZ_ERC20ELIwilt.transfer.call(addressnPyvj8, uintuQw1XxZ, {from: accounts[2]});

		assert.equal(boolIssWQUo, true)
		await expect(GAZ_ERC20ELIwilt.transfer.call(addressnPyvj8, uintuQw1XxZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20StXHiK = await GAZ_ERC20.new({from: accounts[4]});
		const uintVxVS12i = BigInt("867")
		const addressDREWwHE = accounts[1]
		const addressknY968 = accounts[3]
		const uintOnV814t = BigInt("1013")
		const addressTWneVgl = accounts[1]
		const uintMFXiwc = BigInt("1624")
		const addressp2ftuEH = accounts[5]
		const addressY6HM0Sm = accounts[2]
		const uintv9p5re9 = BigInt("379")
		const addressMK3W67X = accounts[3]
		const uintyFR7m3j = BigInt("463")
		const addressIEWn53O = accounts[2]
		const addressI2lHMG = accounts[1]
		const boolGjy2szA = await GAZ_ERC20StXHiK.transferFrom.call(addressknY968, addressDREWwHE, uintVxVS12i, {from: "0x0000000000000000000000000000000000000001"});
		const boolfs1tdQx = await GAZ_ERC20StXHiK.transfer.call(addressTWneVgl, uintOnV814t, {from: accounts[4]});
		const boolWXzNIzu = await GAZ_ERC20StXHiK.transferFrom.call(addressY6HM0Sm, addressp2ftuEH, uintMFXiwc, {from: accounts[3]});
		const boolm0ndBJL = await GAZ_ERC20StXHiK.transfer.call(addressMK3W67X, uintv9p5re9, {from: accounts[1]});
		const boolLvebFs = await GAZ_ERC20StXHiK.approve.call(addressIEWn53O, uintyFR7m3j, {from: accounts[4]});
		const boolqZhXpsI = await GAZ_ERC20StXHiK.approve.call(addressI2lHMG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20StXHiK.transferFrom.call(addressknY968, addressDREWwHE, uintVxVS12i, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SYPkqZm = await GAZ_ERC20.new({from: accounts[0]});
		const addressaWHbNE3 = accounts[4]
		const uintaFkVRSq = BigInt("1571")
		const addressI99exjP = accounts[1]
		const uintDt8mmBR = BigInt("389")
		const addressn33GH6p = accounts[0]
		const uintBkqqVxJ = BigInt("1460")
		const addressLcCpXfn = accounts[4]
		const addressGKguSdQ = accounts[3]
		const boolhrMPeye = await GAZ_ERC20SYPkqZm.approve.call(addressaWHbNE3, {from: accounts[1]});
		const boolSIiRFoO = await GAZ_ERC20SYPkqZm.transfer.call(addressI99exjP, uintaFkVRSq, {from: accounts[0]});
		const boolixso1jo = await GAZ_ERC20SYPkqZm.approve.call(addressn33GH6p, uintDt8mmBR, {from: accounts[0]});
		const boolmxvNazc = await GAZ_ERC20SYPkqZm.transferFrom.call(addressGKguSdQ, addressLcCpXfn, uintBkqqVxJ, {from: accounts[1]});

		await expect(GAZ_ERC20SYPkqZm.approve.call(addressaWHbNE3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Xuv4F2a = await GAZ_ERC20.new({from: accounts[2]});
		const uintNfFhrO1 = BigInt("1359")
		const addressePzbZ0n = accounts[1]
		const uintqegXbuP = BigInt("1534")
		const addressAW1V4ZS = accounts[4]
		const uintWR8TsFC = BigInt("1906")
		const addresspr9GODO = accounts[4]
		const boolnTNw91 = await GAZ_ERC20Xuv4F2a.approve.call(addressePzbZ0n, uintNfFhrO1, {from: accounts[0]});
		const boolZq8WqoV = await GAZ_ERC20Xuv4F2a.transfer.call(addressAW1V4ZS, uintqegXbuP, {from: accounts[2]});
		const boollFNGY93 = await GAZ_ERC20Xuv4F2a.approve.call(addresspr9GODO, uintWR8TsFC, {from: accounts[0]});

		assert.equal(boolZq8WqoV, true)
		assert.equal(boollFNGY93, true)
		assert.equal(boolnTNw91, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintwmerIlI = BigInt("599")
		const addressDcLRswH = accounts[1]
		const addressrZKYQFe = accounts[0]
		const addressPylkgC2 = accounts[1]
		const uintCvjvA77 = BigInt("919")
		const addressqC0RKsx = accounts[2]
		const uintHKXfVoq = BigInt("929")
		const addressAb1MJFf = accounts[5]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressDcLRswH, uintwmerIlI, {from: "0x0000000000000000000000000000000000000001"});
		const boolYkDg1uE = await GAZ_ERC20ELIwilt.approve.call(addressrZKYQFe, {from: accounts[5]});
		const bool8yRWDA = await GAZ_ERC20ELIwilt.approve.call(addressPylkgC2, {from: accounts[2]});
		const boolsZhOMxX = await GAZ_ERC20ELIwilt.approve.call(addressqC0RKsx, uintCvjvA77, {from: accounts[4]});
		const boolBgTvkxK = await GAZ_ERC20ELIwilt.transfer.call(addressAb1MJFf, uintHKXfVoq, {from: accounts[2]});

		assert.equal(boolIssWQUo, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addressrZKYQFe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintkkQ50RJ = BigInt("581")
		const addressiT5snMc = accounts[1]
		const addresscJlNC5H = accounts[0]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressiT5snMc, uintkkQ50RJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolfAx0CK = await GAZ_ERC20ELIwilt.approve.call(addresscJlNC5H, {from: accounts[0]});

		assert.equal(boolIssWQUo, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addresscJlNC5H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintoj642md = BigInt("581")
		const addressJYwawYo = accounts[2]
		const addressGiOQabM = accounts[0]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressJYwawYo, uintoj642md, {from: "0x0000000000000000000000000000000000000001"});
		const boolGxzqcQ2 = await GAZ_ERC20ELIwilt.approve.call(addressGiOQabM, {from: accounts[2]});

		assert.equal(boolIssWQUo, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addressGiOQabM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintMQP9Li8 = BigInt("581")
		const addresslAavChS = accounts[1]
		const uintIRaVA3G = BigInt("1748")
		const addressyniI56U = accounts[1]
		const addressRiFDNLg = accounts[4]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addresslAavChS, uintMQP9Li8, {from: "0x0000000000000000000000000000000000000001"});
		const boolOQnnunU = await GAZ_ERC20ELIwilt.approve.call(addressyniI56U, uintIRaVA3G, {from: accounts[5]});
		const boolAUvuZk1 = await GAZ_ERC20ELIwilt.approve.call(addressRiFDNLg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIssWQUo, true)
		assert.equal(boolOQnnunU, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addressRiFDNLg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintawnHGaX = BigInt("581")
		const addressChKvjZ = accounts[2]
		const addressk3IAQkg = accounts[1]
		const addressrH4GTW9 = accounts[2]
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressChKvjZ, uintawnHGaX, {from: "0x0000000000000000000000000000000000000001"});
		const boolIKIi9eh = await GAZ_ERC20ELIwilt.approve.call(addressk3IAQkg, {from: accounts[3]});
		const boolGN2VCfK = await GAZ_ERC20ELIwilt.approve.call(addressrH4GTW9, {from: accounts[3]});

		assert.equal(boolIssWQUo, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addressk3IAQkg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ELIwilt = await GAZ_ERC20.new({from: accounts[4]});
		const uintDfq8tYI = BigInt("713")
		const addressPcglnyy = accounts[2]
		const addressOBwy3dp = accounts[0]
		const uintWvrhaUl = BigInt("614")
		const addressnvJpJS7 = accounts[3]
		const uintOHIL82P = BigInt("258")
		const addressGnlIcf = accounts[3]
		const uinthdWtX4b = BigInt("581")
		const addressv2I6l8 = accounts[1]
		const boolGx7Vvr8 = await GAZ_ERC20ELIwilt.approve.call(addressPcglnyy, uintDfq8tYI, {from: accounts[4]});
		const boolmDApaNM = await GAZ_ERC20ELIwilt.approve.call(addressOBwy3dp, {from: accounts[4]});
		const boolxZ44vdY = await GAZ_ERC20ELIwilt.transfer.call(addressnvJpJS7, uintWvrhaUl, {from: accounts[4]});
		const boolxN0RAPS = await GAZ_ERC20ELIwilt.approve.call(addressGnlIcf, uintOHIL82P, {from: accounts[0]});
		const boolIssWQUo = await GAZ_ERC20ELIwilt.approve.call(addressv2I6l8, uinthdWtX4b, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGx7Vvr8, true)
		await expect(GAZ_ERC20ELIwilt.approve.call(addressOBwy3dp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oLKuVZz = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uinto4U3n6B = BigInt("430")
		const addressxSOO86x = accounts[0]
		const uintMHSp76B = BigInt("963")
		const address3mbiKQ = "0x0000000000000000000000000000000000000001"
		const addresssnqysBa = "0x0000000000000000000000000000000000000001"
		const addressPK9KYVn = accounts[4]
		const addressvZj46kf = accounts[3]
		const uinttQJNKeC = BigInt("1919")
		const addressLLlVjBi = accounts[4]
		const boolRQ12X3v = await GAZ_ERC20oLKuVZz.approve.call(addressxSOO86x, uinto4U3n6B, {from: accounts[1]});
		const boolYQFcqge = await GAZ_ERC20oLKuVZz.transfer.call(address3mbiKQ, uintMHSp76B, {from: accounts[1]});
		const boolFO1LTBg = await GAZ_ERC20oLKuVZz.approve.call(addresssnqysBa, {from: accounts[1]});
		const boolZmIJ3dD = await GAZ_ERC20oLKuVZz.approve.call(addressPK9KYVn, {from: accounts[0]});
		const boolSQuWZBa = await GAZ_ERC20oLKuVZz.approve.call(addressvZj46kf, {from: accounts[2]});
		const booloR0t65b = await GAZ_ERC20oLKuVZz.approve.call(addressLLlVjBi, uinttQJNKeC, {from: accounts[0]});
	});
})
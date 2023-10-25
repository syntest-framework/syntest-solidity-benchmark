const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYK9bsHhR = await LIBERAPAY.new({from: accounts[1]});
		const addressXXtyPkZ = "0x0000000000000000000000000000000000000001"
		const uintaKEHNuI = BigInt("1411")
		const addressldRih5e = accounts[4]
		const address4NpGin = accounts[2]
		const addressRlrK5me = accounts[5]
		const uintq4Gu76N = BigInt("97")
		const addresskMMqcGg = await LIBERAPAYK9bsHhR.upgradeTo.call(addressXXtyPkZ, {from: accounts[2]});
		const boolAaUCZOv = await LIBERAPAYK9bsHhR.distribute.call(addressldRih5e, uintaKEHNuI, {from: accounts[0]});
		const addressq9qu7cv = await LIBERAPAYK9bsHhR.notFrozen.call(address4NpGin, {from: accounts[3]});
		const addresspMswJ2w = await LIBERAPAYK9bsHhR.upgradeTo.call(addressRlrK5me, {from: accounts[3]});
		const booljZ0OHD5 = await LIBERAPAYK9bsHhR.burn.call(uintq4Gu76N, {from: accounts[3]});

		await expect(LIBERAPAYK9bsHhR.upgradeTo.call(addressXXtyPkZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCgl56xY = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintubYGZIn = BigInt("848")
		const uintw3sG1cl = BigInt("202")
		const address0BDBMX = accounts[2]
		const addressaIty0kq = accounts[3]
		const addressxYQcXk = accounts[3]
		await LIBERAPAYCgl56xY.pause.call({from: accounts[5]});
		const boolfBxzmj = await LIBERAPAYCgl56xY.lock.call(address0BDBMX, uintw3sG1cl, uintubYGZIn, {from: accounts[0]});
		const boolyTS3fN8 = await LIBERAPAYCgl56xY.freezeAccount.call(addressaIty0kq, {from: accounts[2]});
		const addressI6UUrp = await LIBERAPAYCgl56xY.upgradeTo.call(addressxYQcXk, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgahJPP3 = await LIBERAPAY.new({from: accounts[1]});
		const addressV2T0Ece = accounts[1]
		const uintZrs9CnD = BigInt("472")
		const addressFrFXDr2 = accounts[2]
		const uinthxEGbka = BigInt("392")
		const addressQpZhI3 = "0x0000000000000000000000000000000000000001"
		const uintQRQorql = BigInt("1427")
		const addressKIdUHtN = accounts[4]
		const addressmSV7bY = accounts[3]
		const addresststdL3 = accounts[0]
		const uint256TPgBxU7 = await LIBERAPAYgahJPP3.currentBalanceOf.call(addressV2T0Ece, {from: accounts[0]});
		const boolB2N89C = await LIBERAPAYgahJPP3.distribute.call(addressFrFXDr2, uintZrs9CnD, {from: accounts[4]});
		await LIBERAPAYgahJPP3.showLockState.call(addressQpZhI3, uinthxEGbka, {from: accounts[2]});
		const uint256ZxIFVHp = await LIBERAPAYgahJPP3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXr7HQfR = await LIBERAPAYgahJPP3.transferFrom.call(addressmSV7bY, addressKIdUHtN, uintQRQorql, {from: "0x0000000000000000000000000000000000000001"});
		const boolgvngumz = await LIBERAPAYgahJPP3.freezeAccount.call(addresststdL3, {from: accounts[4]});

		assert.equal(uint256TPgBxU7, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYgahJPP3.distribute.call(addressFrFXDr2, uintZrs9CnD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYob9oem8 = await LIBERAPAY.new({from: accounts[4]});
		const uint6TV63X = BigInt("1504")
		const addressX9Lr1Vs = accounts[4]
		const uintoCiw6zi = BigInt("719")
		const uintNELVGPl = BigInt("1510")
		const addresswADgPzX = accounts[3]
		const address2PLoHS = accounts[0]
		await LIBERAPAYob9oem8.showLockState.call(addressX9Lr1Vs, uint6TV63X, {from: accounts[4]});
		const boolbCvlxIL = await LIBERAPAYob9oem8.lock.call(addresswADgPzX, uintNELVGPl, uintoCiw6zi, {from: accounts[4]});
		const addresszr0ER2k = await LIBERAPAYob9oem8.notFrozen.call(address2PLoHS, {from: accounts[3]});
		const uint256FIvy8vj = await LIBERAPAYob9oem8.totalSupply.call({from: accounts[2]});

		await expect(LIBERAPAYob9oem8.showLockState.call(addressX9Lr1Vs, uint6TV63X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYEzPq1uB = await LIBERAPAY.new({from: accounts[2]});
		const uintWuHoasd = BigInt("43")
		const addressTOZFgqT = accounts[1]
		const addressM9cNUyQ = accounts[4]
		const uintlHeifZO = BigInt("1069")
		const addressm1PVZEq = accounts[3]
		const uintqOOINbq = BigInt("125")
		const addressklhC6i4 = accounts[1]
		const boolo24Qvfw = await LIBERAPAYEzPq1uB.burnFrom.call(addressTOZFgqT, uintWuHoasd, {from: accounts[4]});
		const addressV1EbtLF = await LIBERAPAYEzPq1uB.transferOwnership.call(addressM9cNUyQ, {from: accounts[1]});
		await LIBERAPAYEzPq1uB.showLockState.call(addressm1PVZEq, uintlHeifZO, {from: accounts[3]});
		await LIBERAPAYEzPq1uB.pause.call({from: accounts[4]});
		const boolFoH0AVN = await LIBERAPAYEzPq1uB.distribute.call(addressklhC6i4, uintqOOINbq, {from: accounts[1]});
		const uint256YQGBlXv = await LIBERAPAYEzPq1uB.totalSupply.call({from: accounts[1]});

		await expect(LIBERAPAYEzPq1uB.burnFrom.call(addressTOZFgqT, uintWuHoasd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb3Trsx6 = await LIBERAPAY.new({from: accounts[0]});
		const uintROoCHi = BigInt("57")
		const addressPq3DXZX = accounts[1]
		const addressz0fnqBb = accounts[5]
		const addressPi2UL8 = accounts[0]
		const booliJ2kaGR = await LIBERAPAYb3Trsx6.increaseAllowance.call(addressPq3DXZX, uintROoCHi, {from: accounts[2]});
		const addressARsxrcv = await LIBERAPAYb3Trsx6.transferOwnership.call(addressz0fnqBb, {from: accounts[4]});
		const uint256kF0govi = await LIBERAPAYb3Trsx6.currentBalanceOf.call(addressPi2UL8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliJ2kaGR, true)
		await expect(LIBERAPAYb3Trsx6.transferOwnership.call(addressz0fnqBb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb3Trsx6 = await LIBERAPAY.new({from: accounts[0]});
		const uintE59xVcy = BigInt("106")
		const addressnJJSyYG = accounts[1]
		const addressPQVIWMn = accounts[0]
		const booliJ2kaGR = await LIBERAPAYb3Trsx6.increaseAllowance.call(addressnJJSyYG, uintE59xVcy, {from: accounts[2]});
		const uint256kF0govi = await LIBERAPAYb3Trsx6.currentBalanceOf.call(addressPQVIWMn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eSIOHo4 = await LIBERAPAYb3Trsx6.getNowTime.call({from: accounts[2]});

		assert.equal(booliJ2kaGR, true)
		assert.equal(uint256eSIOHo4, BigInt("1630231580"))
		assert.equal(uint256kF0govi, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYob9oem8 = await LIBERAPAY.new({from: accounts[4]});
		const uintePzJKQK = BigInt("1504")
		const addressCChtFa6 = accounts[4]
		const addresshJBoFoV = accounts[3]
		const uintjqLn2K = BigInt("719")
		const uintf26X6K8 = BigInt("1510")
		const addressSdLaC9I = accounts[4]
		const addressZ1jXkJQ = accounts[0]
		const addressuNPZEN7 = accounts[4]
		await LIBERAPAYob9oem8.showLockState.call(addressCChtFa6, uintePzJKQK, {from: accounts[4]});
		const uint256ILoZ7sy = await LIBERAPAYob9oem8.currentBalanceOf.call(addresshJBoFoV, {from: accounts[1]});
		const boolbCvlxIL = await LIBERAPAYob9oem8.lock.call(addressSdLaC9I, uintf26X6K8, uintjqLn2K, {from: accounts[4]});
		const addresszr0ER2k = await LIBERAPAYob9oem8.notFrozen.call(addressZ1jXkJQ, {from: accounts[3]});
		const addressIGcJVvJ = await LIBERAPAYob9oem8.upgradeTo.call(addressuNPZEN7, {from: accounts[2]});
		const uint256FIvy8vj = await LIBERAPAYob9oem8.totalSupply.call({from: accounts[2]});

		await expect(LIBERAPAYob9oem8.showLockState.call(addressCChtFa6, uintePzJKQK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYob9oem8 = await LIBERAPAY.new({from: accounts[4]});
		const addressZ4jcqTu = accounts[5]
		const addresseCTsRWL = accounts[3]
		const uintowQb80M = BigInt("1504")
		const addressjsGNN0g = accounts[4]
		const uintENIu3b = BigInt("1304")
		const addressGE3mNtC = accounts[4]
		const uintQPh5V42 = BigInt("1306")
		const addressz5lnIWX = accounts[0]
		const uintTtL6uz = BigInt("719")
		const uintYZQaOqp = BigInt("1841")
		const addresst65DWC = accounts[3]
		const addressfPXkmNi = accounts[0]
		const uint256phqOfsD = await LIBERAPAYob9oem8.currentBalanceOf.call(addressZ4jcqTu, {from: accounts[2]});
		const addressk1VatuJ = await LIBERAPAYob9oem8.transferOwnership.call(addresseCTsRWL, {from: accounts[4]});
		await LIBERAPAYob9oem8.showLockState.call(addressjsGNN0g, uintowQb80M, {from: accounts[4]});
		const boolnHK6DX = await LIBERAPAYob9oem8.burnFrom.call(addressGE3mNtC, uintENIu3b, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYob9oem8.showLockState.call(addressz5lnIWX, uintQPh5V42, {from: accounts[0]});
		const boolbCvlxIL = await LIBERAPAYob9oem8.lock.call(addresst65DWC, uintYZQaOqp, uintTtL6uz, {from: accounts[4]});
		const addresszr0ER2k = await LIBERAPAYob9oem8.notFrozen.call(addressfPXkmNi, {from: accounts[3]});
		const uint256FIvy8vj = await LIBERAPAYob9oem8.totalSupply.call({from: accounts[2]});

		assert.equal(uint256phqOfsD, BigInt("0"))
		await expect(LIBERAPAYob9oem8.showLockState.call(addressjsGNN0g, uintowQb80M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYob9oem8 = await LIBERAPAY.new({from: accounts[4]});
		const uintHfoifu = BigInt("1504")
		const addressL1dhaOg = accounts[4]
		const uintGt8EcgZ = BigInt("1505")
		const addressOaW5Ms = accounts[4]
		const addressRPgcfBZ = accounts[2]
		const uintq5g8GxB = BigInt("1306")
		const address6O9EOn = accounts[0]
		const addressceAmZAo = accounts[0]
		await LIBERAPAYob9oem8.showLockState.call(addressL1dhaOg, uintHfoifu, {from: accounts[4]});
		const booljq6BaZ0 = await LIBERAPAYob9oem8.transferFrom.call(addressRPgcfBZ, addressOaW5Ms, uintGt8EcgZ, {from: accounts[1]});
		await LIBERAPAYob9oem8.showLockState.call(address6O9EOn, uintq5g8GxB, {from: accounts[0]});
		const addresszr0ER2k = await LIBERAPAYob9oem8.notFrozen.call(addressceAmZAo, {from: accounts[3]});
		const uint256FIvy8vj = await LIBERAPAYob9oem8.totalSupply.call({from: accounts[2]});

		await expect(LIBERAPAYob9oem8.showLockState.call(addressL1dhaOg, uintHfoifu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgahJPP3 = await LIBERAPAY.new({from: accounts[1]});
		const addressW1OMcMF = accounts[1]
		const uinteKVtLFC = BigInt("392")
		const addressgtXp5sc = "0x0000000000000000000000000000000000000001"
		const uintyhbRS40 = BigInt("1427")
		const addressjryew9l = accounts[4]
		const addressjCaTkdl = accounts[3]
		const addressI1ZIQB5 = accounts[0]
		const uint256TPgBxU7 = await LIBERAPAYgahJPP3.currentBalanceOf.call(addressW1OMcMF, {from: accounts[0]});
		await LIBERAPAYgahJPP3.showLockState.call(addressgtXp5sc, uinteKVtLFC, {from: accounts[2]});
		const uint256ZxIFVHp = await LIBERAPAYgahJPP3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXr7HQfR = await LIBERAPAYgahJPP3.transferFrom.call(addressjCaTkdl, addressjryew9l, uintyhbRS40, {from: "0x0000000000000000000000000000000000000001"});
		const boolgvngumz = await LIBERAPAYgahJPP3.freezeAccount.call(addressI1ZIQB5, {from: accounts[4]});

		assert.equal(uint256TPgBxU7, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYgahJPP3.showLockState.call(addressgtXp5sc, uinteKVtLFC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqfiFP5n = await LIBERAPAY.new({from: accounts[2]});
		const uint4R0SMq = BigInt("1963")
		const addressvHZ9mvD = accounts[2]
		const uintlDj19jG = BigInt("337")
		const addressSiPnVK = accounts[3]
		const uintr8TMLaK = BigInt("537")
		const addressqWbm7pl = accounts[3]
		const uintzV4jEv = BigInt("896")
		const addressJufg2eH = accounts[4]
		const booleToR0k6 = await LIBERAPAYqfiFP5n.transfer.call(addressvHZ9mvD, uint4R0SMq, {from: accounts[4]});
		const booleOUqHTU = await LIBERAPAYqfiFP5n.unlock.call(addressSiPnVK, uintlDj19jG, {from: accounts[5]});
		const boolauQBJfX = await LIBERAPAYqfiFP5n.burnFrom.call(addressqWbm7pl, uintr8TMLaK, {from: accounts[0]});
		const boolkXasmP7 = await LIBERAPAYqfiFP5n.burnFrom.call(addressJufg2eH, uintzV4jEv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYqfiFP5n.transfer.call(addressvHZ9mvD, uint4R0SMq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCtQ3hza = await LIBERAPAY.new({from: accounts[2]});
		const uintauEXTQd = BigInt("802")
		const addressgBBEGx8 = accounts[0]
		const boolU9bLkUH = await LIBERAPAYCtQ3hza.unlock.call(addressgBBEGx8, uintauEXTQd, {from: accounts[2]});
		await LIBERAPAYCtQ3hza.pause.call({from: accounts[0]});

		await expect(LIBERAPAYCtQ3hza.unlock.call(addressgBBEGx8, uintauEXTQd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgahJPP3 = await LIBERAPAY.new({from: accounts[1]});
		const addressrDMbfLB = accounts[1]
		const uinti6bNFDt = BigInt("392")
		const addressvbkDU70 = "0x0000000000000000000000000000000000000001"
		const addressGYIpUPW = accounts[0]
		const uintUEEpYz8 = BigInt("1004")
		const addresss4Iami5 = accounts[2]
		const addressGmNjlpt = accounts[5]
		const addressyICfjL = accounts[1]
		const uintyBuyavs = BigInt("1427")
		const addressjSyHjIa = accounts[4]
		const addresscmZew06 = accounts[4]
		const addressSVuKMzh = accounts[0]
		const uint256TPgBxU7 = await LIBERAPAYgahJPP3.currentBalanceOf.call(addressrDMbfLB, {from: accounts[0]});
		await LIBERAPAYgahJPP3.showLockState.call(addressvbkDU70, uinti6bNFDt, {from: accounts[2]});
		const uint256ZxIFVHp = await LIBERAPAYgahJPP3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolPGOjQQz = await LIBERAPAYgahJPP3.freezeAccount.call(addressGYIpUPW, {from: accounts[1]});
		const bool0ekwwL = await LIBERAPAYgahJPP3.decreaseAllowance.call(addresss4Iami5, uintUEEpYz8, {from: accounts[3]});
		const boolxr9NHFh = await LIBERAPAYgahJPP3.unfreezeAccount.call(addressGmNjlpt, {from: accounts[3]});
		const addressSfSyN8H = await LIBERAPAYgahJPP3.notFrozen.call(addressyICfjL, {from: accounts[0]});
		const boolXr7HQfR = await LIBERAPAYgahJPP3.transferFrom.call(addresscmZew06, addressjSyHjIa, uintyBuyavs, {from: "0x0000000000000000000000000000000000000001"});
		const boolgvngumz = await LIBERAPAYgahJPP3.freezeAccount.call(addressSVuKMzh, {from: accounts[4]});

		assert.equal(uint256TPgBxU7, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYgahJPP3.showLockState.call(addressvbkDU70, uinti6bNFDt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb3Trsx6 = await LIBERAPAY.new({from: accounts[0]});
		const uintKi5POlg = BigInt("106")
		const addresssd0Sghx = accounts[2]
		const addresso9G3mja = accounts[0]
		const addressfZdgZ2I = accounts[0]
		const booliJ2kaGR = await LIBERAPAYb3Trsx6.increaseAllowance.call(addresssd0Sghx, uintKi5POlg, {from: accounts[2]});
		const uint256kF0govi = await LIBERAPAYb3Trsx6.currentBalanceOf.call(addresso9G3mja, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uLWOIL7 = await LIBERAPAYb3Trsx6.balanceOf.call(addressfZdgZ2I, {from: accounts[0]});

		assert.equal(booliJ2kaGR, true)
		assert.equal(uint256kF0govi, BigInt("3000000000000000000000000000"))
		assert.equal(uint256uLWOIL7, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWUtALqi = await LIBERAPAY.new({from: accounts[4]});
		const uintIJPGF9H = BigInt("102")
		const addressRHCuMnX = accounts[2]
		const addressqmMlOEs = accounts[4]
		const boolJUcbwWK = await LIBERAPAYWUtALqi.approve.call(addressRHCuMnX, uintIJPGF9H, {from: "0x0000000000000000000000000000000000000001"});
		const boolje5AgPF = await LIBERAPAYWUtALqi.unfreezeAccount.call(addressqmMlOEs, {from: accounts[0]});
		const uint256GXcsz7R = await LIBERAPAYWUtALqi.totalSupply.call({from: accounts[1]});

		assert.equal(boolJUcbwWK, true)
		await expect(LIBERAPAYWUtALqi.unfreezeAccount.call(addressqmMlOEs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb3Trsx6 = await LIBERAPAY.new({from: accounts[0]});
		const addressdLicU0x = accounts[3]
		const uintdwo5D0 = BigInt("1612")
		const addressXIe4rnV = accounts[5]
		const boolP2q0aan = await LIBERAPAYb3Trsx6.unfreezeAccount.call(addressdLicU0x, {from: accounts[0]});
		await LIBERAPAYb3Trsx6.showLockState.call(addressXIe4rnV, uintdwo5D0, {from: accounts[1]});

		await expect(LIBERAPAYb3Trsx6.unfreezeAccount.call(addressdLicU0x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCtQ3hza = await LIBERAPAY.new({from: accounts[2]});
		const uintF8rRJiN = BigInt("1777")
		const addressgCaLmqF = accounts[0]
		const uintmAfQzRj = BigInt("791")
		const addressNKD6eoH = accounts[0]
		await LIBERAPAYCtQ3hza.f.call({from: accounts[5]});
		const booleIuNOBf = await LIBERAPAYCtQ3hza.burnFrom.call(addressgCaLmqF, uintF8rRJiN, {from: accounts[4]});
		const boolU9bLkUH = await LIBERAPAYCtQ3hza.unlock.call(addressNKD6eoH, uintmAfQzRj, {from: accounts[2]});

		await expect(LIBERAPAYCtQ3hza.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwCJrN61 = await LIBERAPAY.new({from: accounts[2]});
		const addressjcTrkvr = "0x0000000000000000000000000000000000000001"
		const addressh4lR0g6 = accounts[2]
		const uintdARIb2 = BigInt("538")
		const addressWlJDy8f = accounts[1]
		const addressVcquwGp = accounts[3]
		const uintDlDhRFi = BigInt("890")
		const uint256lCct5j6 = await LIBERAPAYwCJrN61.allowance.call(addressh4lR0g6, addressjcTrkvr, {from: accounts[5]});
		const boolqx3IkmL = await LIBERAPAYwCJrN61.burn.call(uintdARIb2, {from: accounts[2]});
		const uint256cRNBxIa = await LIBERAPAYwCJrN61.allowance.call(addressVcquwGp, addressWlJDy8f, {from: accounts[4]});
		await LIBERAPAYwCJrN61.onlyNewOwner.call({from: accounts[3]});
		await LIBERAPAYwCJrN61.whenNotPaused.call({from: accounts[2]});
		const boolA64K68X = await LIBERAPAYwCJrN61.burn.call(uintDlDhRFi, {from: accounts[0]});

		assert.equal(boolqx3IkmL, true)
		assert.equal(uint256cRNBxIa, BigInt("0"))
		assert.equal(uint256lCct5j6, BigInt("0"))
		await expect(LIBERAPAYwCJrN61.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCtQ3hza = await LIBERAPAY.new({from: accounts[2]});
		const uintuoyrDkw = BigInt("802")
		const addressR954jgt = accounts[1]
		await LIBERAPAYCtQ3hza.pause.call({from: accounts[2]});
		const boolU9bLkUH = await LIBERAPAYCtQ3hza.unlock.call(addressR954jgt, uintuoyrDkw, {from: accounts[2]});

		await expect(LIBERAPAYCtQ3hza.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgahJPP3 = await LIBERAPAY.new({from: accounts[1]});
		const addresshHix9j = accounts[1]
		const uintTa9d8vJ = BigInt("392")
		const addressDe3eotS = "0x0000000000000000000000000000000000000002"
		const addresscfPaDmQ = accounts[1]
		const uintekgJTIz = BigInt("1371")
		const addressKHLnjAO = accounts[2]
		const addressLP1hgyF = accounts[1]
		const uintBg5Y1zZ = BigInt("1427")
		const addressYmKuax4 = accounts[4]
		const addressu3AhCRz = accounts[3]
		const addresssuTVMNV = accounts[0]
		const uint256TPgBxU7 = await LIBERAPAYgahJPP3.currentBalanceOf.call(addresshHix9j, {from: accounts[0]});
		await LIBERAPAYgahJPP3.showLockState.call(addressDe3eotS, uintTa9d8vJ, {from: accounts[2]});
		const uint256fAiNbmb = await LIBERAPAYgahJPP3.balanceOf.call(addresscfPaDmQ, {from: accounts[5]});
		const uint256ZxIFVHp = await LIBERAPAYgahJPP3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIP2yrkF = await LIBERAPAYgahJPP3.transferFrom.call(addressLP1hgyF, addressKHLnjAO, uintekgJTIz, {from: accounts[2]});
		const boolXr7HQfR = await LIBERAPAYgahJPP3.transferFrom.call(addressu3AhCRz, addressYmKuax4, uintBg5Y1zZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolgvngumz = await LIBERAPAYgahJPP3.freezeAccount.call(addresssuTVMNV, {from: accounts[4]});

		assert.equal(uint256TPgBxU7, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYgahJPP3.showLockState.call(addressDe3eotS, uintTa9d8vJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYLEGTtX = await LIBERAPAY.new({from: accounts[3]});
		const addressfS8K0FU = accounts[3]
		const uintSWAn7MF = BigInt("471")
		const addressPoRIcCH = accounts[3]
		const addressvFG5UBj = accounts[3]
		const addressAWBLeJM = accounts[0]
		const addressrXhEHpz = accounts[0]
		const addressMUrA50o = await LIBERAPAYYLEGTtX.upgradeTo.call(addressfS8K0FU, {from: accounts[3]});
		const booliVZDm2Z = await LIBERAPAYYLEGTtX.approve.call(addressPoRIcCH, uintSWAn7MF, {from: accounts[4]});
		const booluSY93ET = await LIBERAPAYYLEGTtX.unfreezeAccount.call(addressvFG5UBj, {from: accounts[2]});
		const uint256aDRlGO = await LIBERAPAYYLEGTtX.allowance.call(addressrXhEHpz, addressAWBLeJM, {from: accounts[2]});

		assert.equal(booliVZDm2Z, true)
		await expect(LIBERAPAYYLEGTtX.unfreezeAccount.call(addressvFG5UBj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqfiFP5n = await LIBERAPAY.new({from: accounts[2]});
		const uinth4CjcvS = BigInt("1029")
		const addressr5ufOx9 = accounts[4]
		const uintcm90Ppq = BigInt("42")
		const addressQZEqaz4 = accounts[3]
		const uintQ830t5n = BigInt("1963")
		const addressTZZgE2i = accounts[3]
		const uintEGrcI83 = BigInt("123")
		const addressiFthlah = "0x0000000000000000000000000000000000000001"
		const addressVntuhbK = accounts[0]
		const boolO0qGD7i = await LIBERAPAYqfiFP5n.distribute.call(addressr5ufOx9, uinth4CjcvS, {from: accounts[2]});
		const uint256iOEyQwd = await LIBERAPAYqfiFP5n.totalSupply.call({from: accounts[0]});
		const boolfIkgrba = await LIBERAPAYqfiFP5n.burnFrom.call(addressQZEqaz4, uintcm90Ppq, {from: accounts[0]});
		const booleToR0k6 = await LIBERAPAYqfiFP5n.transfer.call(addressTZZgE2i, uintQ830t5n, {from: accounts[4]});
		const boolA6IPlJp = await LIBERAPAYqfiFP5n.transferFrom.call(addressVntuhbK, addressiFthlah, uintEGrcI83, {from: accounts[0]});

		assert.equal(boolO0qGD7i, true)
		assert.equal(uint256iOEyQwd, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYqfiFP5n.burnFrom.call(addressQZEqaz4, uintcm90Ppq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqfiFP5n = await LIBERAPAY.new({from: accounts[2]});
		const uintDl1Y5wB = BigInt("996")
		const addressLieMvs3 = accounts[3]
		const uintPzS49qb = BigInt("1203")
		const addressWBkJ7I8 = accounts[5]
		const uintTHQz1ED = BigInt("1306")
		const addressx5An1fD = "0x0000000000000000000000000000000000000001"
		const boolcamDfLP = await LIBERAPAYqfiFP5n.transfer.call(addressLieMvs3, uintDl1Y5wB, {from: accounts[2]});
		const booln1sg29n = await LIBERAPAYqfiFP5n.distribute.call(addressWBkJ7I8, uintPzS49qb, {from: accounts[2]});
		const boolrmIO7C = await LIBERAPAYqfiFP5n.transfer.call(addressx5An1fD, uintTHQz1ED, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcamDfLP, true)
		assert.equal(booln1sg29n, true)
		await expect(LIBERAPAYqfiFP5n.transfer.call(addressx5An1fD, uintTHQz1ED, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqfiFP5n = await LIBERAPAY.new({from: accounts[2]});
		const uintBzpZ04 = BigInt("1766")
		const addressiGXW79v = accounts[5]
		const uintbKs4wv0 = BigInt("994")
		const addressbJkwTk9 = accounts[0]
		const uint0HOgwn = BigInt("1268")
		const addressmV1ra3 = "0x0000000000000000000000000000000000000001"
		const boolerLV694 = await LIBERAPAYqfiFP5n.mint.call(addressiGXW79v, uintBzpZ04, {from: accounts[2]});
		const boolp25Lz4u = await LIBERAPAYqfiFP5n.approve.call(addressbJkwTk9, uintbKs4wv0, {from: "0x0000000000000000000000000000000000000001"});
		const boolrmIO7C = await LIBERAPAYqfiFP5n.transfer.call(addressmV1ra3, uint0HOgwn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYqfiFP5n.mint.call(addressiGXW79v, uintBzpZ04, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
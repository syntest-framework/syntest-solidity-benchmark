const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressSJcoLjR = accounts[3]
		const addressomHWUc6 = accounts[4]
		const SpiritCoinKsM8qaP = await SpiritCoin.new(addressSJcoLjR, addressomHWUc6, {from: "0x0000000000000000000000000000000000000001"});
		const uintj9W81hf = BigInt("762")
		const addressTXeTMbD = accounts[1]
		const uintjCxcMEj = BigInt("1438")
		const addressUuy3mcn = "0x0000000000000000000000000000000000000001"
		const addressu8BWIgh = accounts[3]
		const uintTPN4mZ2 = BigInt("769")
		const addressazl6Y7R = accounts[1]
		const addressHqLOnEP = accounts[2]
		const addressWxxBBz1 = accounts[0]
		const addressPTaNuQ = accounts[0]
		const addressZ9C10WK = await SpiritCoinKsM8qaP.mint.call(addressTXeTMbD, uintj9W81hf, {from: accounts[2]});
		const booldu4ucWu = await SpiritCoinKsM8qaP.transferFrom.call(addressu8BWIgh, addressUuy3mcn, uintjCxcMEj, {from: accounts[5]});
		const addressw0dozeU = await SpiritCoinKsM8qaP.mint.call(addressazl6Y7R, uintTPN4mZ2, {from: accounts[2]});
		const uintKrxURR = await SpiritCoinKsM8qaP.allowance.call(addressWxxBBz1, addressHqLOnEP, {from: accounts[2]});
		const uintjdHnH6v = await SpiritCoinKsM8qaP.balanceOf.call(addressPTaNuQ, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressT90kdQd = "0x0000000000000000000000000000000000000001"
		const addressltGTh2w = "0x0000000000000000000000000000000000000001"
		const SpiritCoinZCFMgF = await SpiritCoin.new(addressT90kdQd, addressltGTh2w, {from: accounts[2]});
		const uintQ1N6Uaa = BigInt("311")
		const addressaPHqA9Q = "0x0000000000000000000000000000000000000001"
		const uintyB1US4K = BigInt("1406")
		const addressh4s18sJ = accounts[5]
		const uintVk0uay = BigInt("3")
		const addressiMhliVq = "0x0000000000000000000000000000000000000001"
		const addressZ38zz9u = accounts[2]
		const addressP0H4MXV = "0x0000000000000000000000000000000000000001"
		const boolAhocReC = await SpiritCoinZCFMgF.approve.call(addressaPHqA9Q, uintQ1N6Uaa, {from: accounts[3]});
		const boolDu12khr = await SpiritCoinZCFMgF.approve.call(addressh4s18sJ, uintyB1US4K, {from: accounts[5]});
		const boolODcBa6Z = await SpiritCoinZCFMgF.approve.call(addressiMhliVq, uintVk0uay, {from: accounts[5]});
		const uintBqrFX2i = await SpiritCoinZCFMgF.allowance.call(addressP0H4MXV, addressZ38zz9u, {from: accounts[2]});

		assert.equal(boolAhocReC, true)
		assert.equal(boolDu12khr, true)
		assert.equal(boolODcBa6Z, true)
		assert.equal(uintBqrFX2i, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresslqcCKPJ = accounts[1]
		const addresscgIwMIs = accounts[2]
		const SpiritCoinBepObba = await SpiritCoin.new(addresslqcCKPJ, addresscgIwMIs, {from: accounts[2]});
		const uintMEvm9Pd = BigInt("1593")
		const addressozNhNGo = accounts[0]
		const addressdVm43G2 = accounts[3]
		const addresswV24Xlk = accounts[4]
		const addressWgCOMRQ = await SpiritCoinBepObba.mint.call(addressozNhNGo, uintMEvm9Pd, {from: accounts[5]});
		const uintjPtLrpf = await SpiritCoinBepObba.allowance.call(addresswV24Xlk, addressdVm43G2, {from: accounts[1]});

		await expect(SpiritCoinBepObba.mint.call(addressozNhNGo, uintMEvm9Pd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressbezHco7 = accounts[5]
		const addressyNI53Rw = accounts[0]
		const SpiritCoinbfC4ir1 = await SpiritCoin.new(addressbezHco7, addressyNI53Rw, {from: accounts[1]});
		const addressEYVhB60 = accounts[2]
		const addressP5fpQ7 = accounts[1]
		const address8XcWJI = accounts[0]
		const addressD2nD0rP = "0x0000000000000000000000000000000000000001"
		const addressj4vxkJ1 = accounts[4]
		const uinttA9FYA = BigInt("1592")
		const addressF7cnus0 = accounts[5]
		const uintRkyIT9X = await SpiritCoinbfC4ir1.allowance.call(addressP5fpQ7, addressEYVhB60, {from: accounts[1]});
		const uintVieDKi = await SpiritCoinbfC4ir1.balanceOf.call(address8XcWJI, {from: accounts[4]});
		const uintppt4m72 = await SpiritCoinbfC4ir1.allowance.call(addressj4vxkJ1, addressD2nD0rP, {from: accounts[5]});
		const boolISq9YlO = await SpiritCoinbfC4ir1.approve.call(addressF7cnus0, uinttA9FYA, {from: accounts[1]});

		assert.equal(boolISq9YlO, true)
		assert.equal(uintRkyIT9X, BigInt("0"))
		assert.equal(uintVieDKi, BigInt("0"))
		assert.equal(uintppt4m72, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressmEXETAi = accounts[5]
		const addresshU2ZkgH = accounts[3]
		const SpiritCoinx8yGQtn = await SpiritCoin.new(addressmEXETAi, addresshU2ZkgH, {from: accounts[0]});
		const addressxbswaqt = "0x0000000000000000000000000000000000000001"
		const addressyTQwgUB = accounts[3]
		const addressFVcRcPR = accounts[4]
		const uintk2lOu02 = BigInt("1445")
		const addressHZ1MgXE = "0x0000000000000000000000000000000000000001"
		const addressr8prvjv = accounts[3]
		const uintj5jpsLs = await SpiritCoinx8yGQtn.allowance.call(addressyTQwgUB, addressxbswaqt, {from: accounts[1]});
		const uinthlMCxfT = await SpiritCoinx8yGQtn.balanceOf.call(addressFVcRcPR, {from: accounts[3]});
		const boolJ998wyy = await SpiritCoinx8yGQtn.transferFrom.call(addressr8prvjv, addressHZ1MgXE, uintk2lOu02, {from: accounts[3]});

		assert.equal(uinthlMCxfT, BigInt("0"))
		assert.equal(uintj5jpsLs, BigInt("0"))
		await expect(SpiritCoinx8yGQtn.transferFrom.call(addressr8prvjv, addressHZ1MgXE, uintk2lOu02, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressjYxiZWJ = "0x0000000000000000000000000000000000000001"
		const addressEki58G = "0x0000000000000000000000000000000000000001"
		const SpiritCoinZCFMgF = await SpiritCoin.new(addressjYxiZWJ, addressEki58G, {from: accounts[2]});
		const uintuHu0RFo = BigInt("311")
		const addresssBzz9uF = "0x0000000000000000000000000000000000000001"
		const uintbIAS8i9 = BigInt("1406")
		const addressw0OgK4M = accounts[5]
		const uintdqypDFT = BigInt("608")
		const addressGeOjjSF = accounts[3]
		const uintZoUczIK = BigInt("3")
		const addressCjtOKJ = accounts[1]
		const addressBrwVCto = accounts[2]
		const addressZ6PSvXc = "0x0000000000000000000000000000000000000001"
		const boolAhocReC = await SpiritCoinZCFMgF.approve.call(addresssBzz9uF, uintuHu0RFo, {from: accounts[3]});
		const boolDu12khr = await SpiritCoinZCFMgF.approve.call(addressw0OgK4M, uintbIAS8i9, {from: accounts[5]});
		const boolXQDaCtq = await SpiritCoinZCFMgF.transfer.call(addressGeOjjSF, uintdqypDFT, {from: "0x0000000000000000000000000000000000000001"});
		const boolODcBa6Z = await SpiritCoinZCFMgF.approve.call(addressCjtOKJ, uintZoUczIK, {from: accounts[5]});
		const uintBqrFX2i = await SpiritCoinZCFMgF.allowance.call(addressZ6PSvXc, addressBrwVCto, {from: accounts[2]});

		assert.equal(boolAhocReC, true)
		assert.equal(boolDu12khr, true)
		assert.equal(boolODcBa6Z, true)
		assert.equal(boolXQDaCtq, true)
		assert.equal(uintBqrFX2i, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressuOR8vVs = accounts[4]
		const addressNPXYPC5 = accounts[3]
		const SpiritCoinBPmUxlP = await SpiritCoin.new(addressuOR8vVs, addressNPXYPC5, {from: accounts[2]});
		const addressaWI4wfQ = "0x0000000000000000000000000000000000000001"
		const uintEV4Ot62 = BigInt("933")
		const addressINhRlRK = accounts[5]
		const uintBGpZZd7 = BigInt("1282")
		const addresstOqCcpg = accounts[5]
		const addressby4zdVg = "0x0000000000000000000000000000000000000001"
		const addressJxKAPZf = accounts[4]
		const addressFaOp0N9 = accounts[0]
		const uintt0WbJo = BigInt("1446")
		const addressXF5ep3t = accounts[1]
		const uintCqLHYqP = await SpiritCoinBPmUxlP.balanceOf.call(addressaWI4wfQ, {from: accounts[4]});
		const boolooNBrRl = await SpiritCoinBPmUxlP.approve.call(addressINhRlRK, uintEV4Ot62, {from: accounts[0]});
		const boolNUoRKVN = await SpiritCoinBPmUxlP.transferFrom.call(addressby4zdVg, addresstOqCcpg, uintBGpZZd7, {from: accounts[1]});
		const uintK1EDXaa = await SpiritCoinBPmUxlP.allowance.call(addressFaOp0N9, addressJxKAPZf, {from: accounts[2]});
		const boolSrwQBhl = await SpiritCoinBPmUxlP.approve.call(addressXF5ep3t, uintt0WbJo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolooNBrRl, true)
		assert.equal(uintCqLHYqP, BigInt("0"))
		await expect(SpiritCoinBPmUxlP.transferFrom.call(addressby4zdVg, addresstOqCcpg, uintBGpZZd7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressfz6Crrt = "0x0000000000000000000000000000000000000001"
		const addressaDQ85o = "0x0000000000000000000000000000000000000001"
		const SpiritCoinZCFMgF = await SpiritCoin.new(addressfz6Crrt, addressaDQ85o, {from: accounts[2]});
		const address0peY6z = accounts[3]
		const uintqFe6am = BigInt("311")
		const addressUUb8f8 = accounts[2]
		const uint8BrR60 = BigInt("3")
		const addresslXVhzEk = "0x0000000000000000000000000000000000000001"
		const addressim0VdXY = await SpiritCoinZCFMgF.setMinter.call(address0peY6z, {from: accounts[4]});
		const boolAhocReC = await SpiritCoinZCFMgF.approve.call(addressUUb8f8, uintqFe6am, {from: accounts[3]});
		const boolODcBa6Z = await SpiritCoinZCFMgF.approve.call(addresslXVhzEk, uint8BrR60, {from: accounts[5]});

		await expect(SpiritCoinZCFMgF.setMinter.call(address0peY6z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresse9riUgc = accounts[1]
		const addressVCrpqh = accounts[2]
		const SpiritCoinBepObba = await SpiritCoin.new(addresse9riUgc, addressVCrpqh, {from: accounts[2]});
		const addressmQnXd67 = accounts[3]
		const uintFA7oEsG = BigInt("882")
		const addressgrJEnbT = accounts[0]
		const uintuLTXXZQ = BigInt("1594")
		const addresskkw5cJj = accounts[0]
		const uintTVkK0wb = await SpiritCoinBepObba.balanceOf.call(addressmQnXd67, {from: accounts[3]});
		const addressLOilQb0 = await SpiritCoinBepObba.mint.call(addressgrJEnbT, uintFA7oEsG, {from: accounts[2]});
		const addressWgCOMRQ = await SpiritCoinBepObba.mint.call(addresskkw5cJj, uintuLTXXZQ, {from: accounts[5]});

		assert.equal(uintTVkK0wb, BigInt("0"))
		await expect(SpiritCoinBepObba.mint.call(addresskkw5cJj, uintuLTXXZQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressBiM7xeP = accounts[4]
		const addresstz5Sna = accounts[4]
		const SpiritCoinYNUTQTK = await SpiritCoin.new(addressBiM7xeP, addresstz5Sna, {from: accounts[0]});
		const addressc5Qikyt = accounts[2]
		const addressSkxi4al = accounts[1]
		const addressodhZnJd = accounts[4]
		const addressjpHlj5M = accounts[4]
		const uintIP74jAU = BigInt("1819")
		const addressIxXWKfd = accounts[4]
		const addressgXMqtTf = accounts[3]
		const addressaO0r2G3 = accounts[3]
		const addresshzixUaZ = await SpiritCoinYNUTQTK.setMinter.call(addressc5Qikyt, {from: accounts[4]});
		const uintcZqAfx = await SpiritCoinYNUTQTK.allowance.call(addressodhZnJd, addressSkxi4al, {from: accounts[2]});
		const addressMDQlN6t = await SpiritCoinYNUTQTK.setMinter.call(addressjpHlj5M, {from: accounts[5]});
		const addressl2I82cP = await SpiritCoinYNUTQTK.mint.call(addressIxXWKfd, uintIP74jAU, {from: accounts[4]});
		const uinth0gl82A = await SpiritCoinYNUTQTK.allowance.call(addressaO0r2G3, addressgXMqtTf, {from: accounts[2]});

		assert.equal(uintcZqAfx, BigInt("0"))
		await expect(SpiritCoinYNUTQTK.setMinter.call(addressjpHlj5M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPFVQI2DW = await LUP.new({from: accounts[2]});
		const boolf20Gzgn = false
		const addressVLwbJUG = accounts[0]
		const addressualneWx = accounts[4]
		const uintnRJCLbX = BigInt("1722")
		const uintYQUaCCE = BigInt("1128")
		const addressQbIj18Z = accounts[4]
		const addressqCoD24 = accounts[4]
//		const boolpHc6t09 = await LUPFVQI2DW.freezeAccount.call(addressVLwbJUG, boolf20Gzgn, {from: accounts[3]});
//		const stringpWT59yF = await LUPFVQI2DW.name.call({from: accounts[3]});
//		const uint256CPy7zLW = await LUPFVQI2DW.balanceOf.call(addressualneWx, {from: accounts[0]});
//		const boolTAvjlHH = await LUPFVQI2DW.lock.call(addressQbIj18Z, uintYQUaCCE, uintnRJCLbX, {from: accounts[2]});
//		const addressbMbuCMb = await LUPFVQI2DW.notFrozen.call(addressqCoD24, {from: accounts[2]});

		await expect(LUPFVQI2DW.freezeAccount.call(addressVLwbJUG, boolf20Gzgn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPCcqpp64 = await LUP.new({from: accounts[5]});
		const addressAcSX4US = accounts[3]
		const addressY5a10yR = accounts[1]
		const addressGw1XxZc = accounts[4]
		const uintBIwilt3 = BigInt("125")
		const addressH26E4BO = accounts[1]
//		const addressv1xuDSt = await LUPCcqpp64.notFrozen.call(addressAcSX4US, {from: accounts[1]});
//		const stringuibP9tr = await LUPCcqpp64.name.call({from: accounts[4]});
//		const uint256fh6Xxyf = await LUPCcqpp64.balanceOf.call(addressY5a10yR, {from: accounts[1]});
//		const addressBgTvkxK = await LUPCcqpp64.upgradeTo.call(addressGw1XxZc, {from: accounts[2]});
//		const booltMLw4CG = await LUPCcqpp64.unlock.call(addressH26E4BO, uintBIwilt3, {from: accounts[2]});

		await expect(LUPCcqpp64.notFrozen.call(addressAcSX4US, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringUxpeSc = "Ni"
		const stringikWK3W6 = "5mDVTeY5hXCTze1cLur5ILr8tEa5Z"
		const uintxX59p5r = BigInt("123")
		const LUPzLw0ndB = await LUP.new(stringUxpeSc, stringikWK3W6, uintxX59p5r, {from: accounts[0]});
		const uintfxVS12 = BigInt("1132")
		const uintyXNREWw = BigInt("239")
		const addresskGknY96 = accounts[4]
		const uintbYnV814 = BigInt("1497")
		const uinthZdWneV = BigInt("1057")
		const addressRxgFlWc = accounts[3]
		const boolc9z2ftu = true
		const addressWi6HM0S = accounts[4]
		const boolQQjy2sz = await LUPzLw0ndB.transferWithLock.call(addresskGknY96, uintyXNREWw, uintfxVS12, {from: "0x0000000000000000000000000000000000000001"});
		const boolUps1tdQ = await LUPzLw0ndB.transferWithLock.call(addressRxgFlWc, uinthZdWneV, uintbYnV814, {from: accounts[4]});
		const boolAMFXiw = await LUPzLw0ndB.freezeAccount.call(addressWi6HM0S, boolc9z2ftu, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPaTzXo4U = await LUP.new({from: accounts[5]});
		const uintgg3cC3P = BigInt("297")
		const uintMVYv2zl = BigInt("348")
		const addresswDCcym4 = accounts[2]
		const uintFYF5HVH = BigInt("1831")
		const addresstVAkDtT = accounts[0]
		const addressnWEnqV = accounts[1]
		const uint8CTkR1CO = await LUPaTzXo4U.decimals.call({from: accounts[3]});
//		const boolmqsvBjV = await LUPaTzXo4U.lock.call(addresswDCcym4, uintMVYv2zl, uintgg3cC3P, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAYeaNma = await LUPaTzXo4U.unlock.call(addresstVAkDtT, uintFYF5HVH, {from: accounts[1]});
//		const uint83shp6F = await LUPaTzXo4U.decimals.call({from: accounts[3]});
//		const uint256aLN8USx = await LUPaTzXo4U.balanceOf.call(addressnWEnqV, {from: accounts[1]});
//		const stringOOfFP0e = await LUPaTzXo4U.symbol.call({from: accounts[3]});

		assert.equal(uint8CTkR1CO, BigInt("18"))
		await expect(LUPaTzXo4U.lock.call(addresswDCcym4, uintMVYv2zl, uintgg3cC3P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVt8YUCa = await LUP.new({from: accounts[2]});
		const uintj7oCVR = BigInt("829")
		const addressxVAjpL = accounts[1]
		const boolAT2pT9y = true
		const addressNff8M7b = accounts[2]
//		const booleN6rHRo = await LUPVt8YUCa.unlock.call(addressxVAjpL, uintj7oCVR, {from: accounts[2]});
//		const boolJ9f998Z = await LUPVt8YUCa.freezeAccount.call(addressNff8M7b, boolAT2pT9y, {from: accounts[4]});
//		const stringUf1G8Eo = await LUPVt8YUCa.symbol.call({from: accounts[3]});

		await expect(LUPVt8YUCa.unlock.call(addressxVAjpL, uintj7oCVR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqag1voX = await LUP.new({from: accounts[0]});
		const addressVlQAoiK = accounts[5]
		const uintUp1PNJN = BigInt("1413")
		const uintBpp4uUf = BigInt("583")
		const addressWdCBvl = accounts[2]
		const uint256j24fpvS = await LUPqag1voX.balanceOf.call(addressVlQAoiK, {from: accounts[3]});
		const boolV8Lo8bG = await LUPqag1voX.transferWithLock.call(addressWdCBvl, uintBpp4uUf, uintUp1PNJN, {from: accounts[0]});
		const uint8coyZlp = await LUPqag1voX.decimals.call({from: accounts[0]});

		assert.equal(boolV8Lo8bG, true)
		assert.equal(uint256j24fpvS, BigInt("0"))
		assert.equal(uint8coyZlp, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPqag1voX = await LUP.new({from: accounts[0]});
		const addressNOwu2cw = accounts[5]
		const boolgUWSqUQ = true
		const addressnpJdU9d = accounts[2]
		const uintFIboxSY = BigInt("1413")
		const uintaxoL8cu = BigInt("583")
		const addressziJez0C = accounts[2]
		const uint256j24fpvS = await LUPqag1voX.balanceOf.call(addressNOwu2cw, {from: accounts[3]});
		const boolV4H6I8d = await LUPqag1voX.freezeAccount.call(addressnpJdU9d, boolgUWSqUQ, {from: accounts[0]});
		const boolV8Lo8bG = await LUPqag1voX.transferWithLock.call(addressziJez0C, uintaxoL8cu, uintFIboxSY, {from: accounts[0]});
		const uint8coyZlp = await LUPqag1voX.decimals.call({from: accounts[0]});

		assert.equal(boolV4H6I8d, true)
		assert.equal(boolV8Lo8bG, true)
		assert.equal(uint256j24fpvS, BigInt("0"))
		assert.equal(uint8coyZlp, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPaTzXo4U = await LUP.new({from: accounts[5]});
		const uintb5l7qRz = BigInt("1658")
		const addressWTM3VXd = accounts[5]
		const uintRAQQD5b = BigInt("297")
		const uintWMLtc28 = BigInt("348")
		const addressxD6r5M = accounts[2]
		const uint9oCV5e = BigInt("1831")
		const addressnthFLmF = accounts[0]
		const addressWzgcw3f = accounts[2]
		const stringKeVZk4b = await LUPaTzXo4U.symbol.call({from: accounts[1]});
//		const boolWLa4D8 = await LUPaTzXo4U.unlock.call(addressWTM3VXd, uintb5l7qRz, {from: accounts[1]});
//		const uint8CTkR1CO = await LUPaTzXo4U.decimals.call({from: accounts[3]});
//		const boolmqsvBjV = await LUPaTzXo4U.lock.call(addressxD6r5M, uintWMLtc28, uintRAQQD5b, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAYeaNma = await LUPaTzXo4U.unlock.call(addressnthFLmF, uint9oCV5e, {from: accounts[1]});
//		const uint83shp6F = await LUPaTzXo4U.decimals.call({from: accounts[3]});
//		const uint256aLN8USx = await LUPaTzXo4U.balanceOf.call(addressWzgcw3f, {from: accounts[1]});
//		const stringOOfFP0e = await LUPaTzXo4U.symbol.call({from: accounts[3]});

		assert.equal(stringKeVZk4b, "LUP")
		await expect(LUPaTzXo4U.unlock.call(addressWTM3VXd, uintb5l7qRz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqag1voX = await LUP.new({from: accounts[0]});
		const addressM2g6TdB = accounts[5]
		const uintxuTcrgl = BigInt("1413")
		const uintqgBcuR3 = BigInt("583")
		const addressIySPg5v = accounts[2]
		const stringlsRyuZe = await LUPqag1voX.name.call({from: accounts[2]});
		const uint256j24fpvS = await LUPqag1voX.balanceOf.call(addressM2g6TdB, {from: accounts[3]});
		const boolV8Lo8bG = await LUPqag1voX.transferWithLock.call(addressIySPg5v, uintqgBcuR3, uintxuTcrgl, {from: accounts[0]});
		const uint8coyZlp = await LUPqag1voX.decimals.call({from: accounts[0]});

		assert.equal(boolV8Lo8bG, true)
		assert.equal(stringlsRyuZe, "LINKUP Token")
		assert.equal(uint256j24fpvS, BigInt("0"))
		assert.equal(uint8coyZlp, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPqag1voX = await LUP.new({from: accounts[0]});
		const addressJez6Gnx = accounts[5]
		const addresswteXo0M = accounts[1]
		const addresssnijj3C = accounts[2]
		const uintY3fTiRe = BigInt("1413")
		const uintN8ukjsE = BigInt("583")
		const addresshOQy7co = accounts[2]
		const addresscksqUG = accounts[0]
		const uint256j24fpvS = await LUPqag1voX.balanceOf.call(addressJez6Gnx, {from: accounts[3]});
		const addressTJdl8tC = await LUPqag1voX.upgradeTo.call(addresswteXo0M, {from: accounts[0]});
		const uint256llrPL6W = await LUPqag1voX.balanceOf.call(addresssnijj3C, {from: accounts[2]});
		const boolV8Lo8bG = await LUPqag1voX.transferWithLock.call(addresshOQy7co, uintN8ukjsE, uintY3fTiRe, {from: accounts[0]});
		const uint8coyZlp = await LUPqag1voX.decimals.call({from: accounts[0]});
//		const addressU8giu1s = await LUPqag1voX.notFrozen.call(addresscksqUG, {from: accounts[0]});

		assert.equal(boolV8Lo8bG, true)
		assert.equal(uint256j24fpvS, BigInt("0"))
		assert.equal(uint256llrPL6W, BigInt("0"))
		assert.equal(uint8coyZlp, BigInt("18"))
		await expect(LUPqag1voX.notFrozen.call(addresscksqUG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPNx6fsfZ = await LUP.new({from: accounts[3]});
		const uintTCTOq72 = BigInt("41")
		const addressSwptSye = accounts[2]
		const uintMdqABy = BigInt("85")
		const uintiLKxmqR = BigInt("482")
		const addressFa1LtgW = accounts[2]
		const boolK5AailL = false
		const addressSPdU9Ip = accounts[1]
		const boolqpfZwaV = await LUPNx6fsfZ.transfer.call(addressSwptSye, uintTCTOq72, {from: accounts[3]});
		const stringgnbfCw = await LUPNx6fsfZ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolleHhlUi = await LUPNx6fsfZ.lock.call(addressFa1LtgW, uintiLKxmqR, uintMdqABy, {from: accounts[4]});
//		const boolIXVcHB2 = await LUPNx6fsfZ.freezeAccount.call(addressSPdU9Ip, boolK5AailL, {from: accounts[3]});

		assert.equal(boolqpfZwaV, true)
		assert.equal(stringgnbfCw, "LUP")
		await expect(LUPNx6fsfZ.lock.call(addressFa1LtgW, uintiLKxmqR, uintMdqABy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqag1voX = await LUP.new({from: accounts[0]});
		const addresstzdyJrw = accounts[5]
		const boolgUWSqUQ = false
		const addressSGfEaFP = accounts[2]
		const addressxd75k7B = accounts[1]
		const uintHinB9Yr = BigInt("1413")
		const uintj8iePg1 = BigInt("583")
		const addressiS4DZ83 = accounts[2]
		const uintwlHb49q = BigInt("1017")
		const uintSTPVH8U = BigInt("1370")
		const addressVAHXWX6 = accounts[4]
		const uintoTXB5s = BigInt("503")
		const uintZmB2UUL = BigInt("584")
		const addressM6CvW05 = accounts[5]
		const uint256j24fpvS = await LUPqag1voX.balanceOf.call(addresstzdyJrw, {from: accounts[3]});
		const boolV4H6I8d = await LUPqag1voX.freezeAccount.call(addressSGfEaFP, boolgUWSqUQ, {from: accounts[0]});
//		const addressrKqFdQB = await LUPqag1voX.upgradeTo.call(addressxd75k7B, {from: accounts[4]});
//		const boolV8Lo8bG = await LUPqag1voX.transferWithLock.call(addressiS4DZ83, uintj8iePg1, uintHinB9Yr, {from: accounts[0]});
//		const uint8coyZlp = await LUPqag1voX.decimals.call({from: accounts[0]});
//		const boolG7CUeR4 = await LUPqag1voX.transferWithLock.call(addressVAHXWX6, uintSTPVH8U, uintwlHb49q, {from: accounts[3]});
//		const boolFRwF3Ce = await LUPqag1voX.lock.call(addressM6CvW05, uintZmB2UUL, uintoTXB5s, {from: accounts[3]});

		assert.equal(boolV4H6I8d, true)
		assert.equal(uint256j24fpvS, BigInt("0"))
		await expect(LUPqag1voX.upgradeTo.call(addressxd75k7B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8zlRV9 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const boolFFnzO0S = false
		const addresst66xNcW = accounts[4]
		const uintpIBZAWP = BigInt("1940")
		const addresstb4lgZK = accounts[0]
		const boolaDagT8U = await LUP8zlRV9.freezeAccount.call(addresst66xNcW, boolFFnzO0S, {from: accounts[0]});
		const boolPwKUxar = await LUP8zlRV9.transfer.call(addresstb4lgZK, uintpIBZAWP, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPNx6fsfZ = await LUP.new({from: accounts[3]});
		const uintbKoLlX = BigInt("41")
		const addressfWG8LA = accounts[2]
		const uintQESC1ho = BigInt("755")
		const addressddL76fc = accounts[4]
		const uintiK5KuEJ = BigInt("85")
		const uintxFgKaBX = BigInt("482")
		const addressTkFYMok = accounts[2]
		const boolK5AailL = false
		const addressJMKKPtp = accounts[1]
		const boolqpfZwaV = await LUPNx6fsfZ.transfer.call(addressfWG8LA, uintbKoLlX, {from: accounts[3]});
//		const booloZlQtc = await LUPNx6fsfZ.transfer.call(addressddL76fc, uintQESC1ho, {from: accounts[2]});
//		const stringgnbfCw = await LUPNx6fsfZ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolleHhlUi = await LUPNx6fsfZ.lock.call(addressTkFYMok, uintxFgKaBX, uintiK5KuEJ, {from: accounts[4]});
//		const boolIXVcHB2 = await LUPNx6fsfZ.freezeAccount.call(addressJMKKPtp, boolK5AailL, {from: accounts[3]});

		assert.equal(boolqpfZwaV, true)
		await expect(LUPNx6fsfZ.transfer.call(addressddL76fc, uintQESC1ho, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPNx6fsfZ = await LUP.new({from: accounts[3]});
		const uintMjuD1zL = BigInt("41")
		const addressIroU0ik = accounts[3]
		const uintVRKWy3D = BigInt("733")
		const uintoFRsiyu = BigInt("1734")
		const addressNj0qqNr = accounts[1]
		const addresst3DTvFl = accounts[2]
		const uintoeBwZWQ = BigInt("805")
		const uintOdtW2zV = BigInt("482")
		const addressQIl8mly = accounts[2]
		const uintjBYaTh = BigInt("2017")
		const uintA5WBl92 = BigInt("1017")
		const addressGRAw7uH = accounts[0]
		const boolK5AailL = false
		const addressZukqwTq = accounts[1]
		const boolqpfZwaV = await LUPNx6fsfZ.transfer.call(addressIroU0ik, uintMjuD1zL, {from: accounts[3]});
//		const boolaYvJ09 = await LUPNx6fsfZ.lock.call(addressNj0qqNr, uintoFRsiyu, uintVRKWy3D, {from: accounts[3]});
//		const uint256w36p6Gw = await LUPNx6fsfZ.balanceOf.call(addresst3DTvFl, {from: accounts[0]});
//		const stringgnbfCw = await LUPNx6fsfZ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolleHhlUi = await LUPNx6fsfZ.lock.call(addressQIl8mly, uintOdtW2zV, uintoeBwZWQ, {from: accounts[4]});
//		const boolEtxN8SO = await LUPNx6fsfZ.lock.call(addressGRAw7uH, uintA5WBl92, uintjBYaTh, {from: accounts[2]});
//		const boolIXVcHB2 = await LUPNx6fsfZ.freezeAccount.call(addressZukqwTq, boolK5AailL, {from: accounts[3]});

		assert.equal(boolqpfZwaV, true)
		await expect(LUPNx6fsfZ.lock.call(addressNj0qqNr, uintoFRsiyu, uintVRKWy3D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
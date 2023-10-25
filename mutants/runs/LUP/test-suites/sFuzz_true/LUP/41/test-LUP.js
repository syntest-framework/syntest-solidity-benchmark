const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringrLBiht7 = "ljx9swSpqFfk6Kz6aplwfU9"
		const stringPrXjI43 = "KhLHhUkVYUQobr"
		const uintfa7k44d = BigInt("101")
		const LUPFxHZ9wp = await LUP.new(stringrLBiht7, stringPrXjI43, uintfa7k44d, {from: accounts[0]});
		const uintspqm1cA = BigInt("1056")
		const uintOPW7l8 = BigInt("837")
		const addressasqYBx7 = accounts[0]
		const addressNN8WpkT = accounts[4]
		const addresstVu8Sb0 = accounts[4]
		const uintm0ZKXoN = BigInt("1379")
		const uintGeBKkfh = BigInt("1636")
		const addressGK7zy34 = accounts[1]
		const boole4SiQe4 = await LUPFxHZ9wp.transferWithLock.call(addressasqYBx7, uintOPW7l8, uintspqm1cA, {from: accounts[0]});
		const addressVAFubmH = await LUPFxHZ9wp.upgradeTo.call(addressNN8WpkT, {from: accounts[0]});
		const stringrXOJ1dh = await LUPFxHZ9wp.name.call({from: accounts[2]});
		const addressYyknDuF = await LUPFxHZ9wp.notFrozen.call(addresstVu8Sb0, {from: accounts[5]});
		const boolvzQaNof = await LUPFxHZ9wp.transferWithLock.call(addressGK7zy34, uintGeBKkfh, uintm0ZKXoN, {from: accounts[2]});
		const uint8ZzB9ylB = await LUPFxHZ9wp.decimals.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPyIm1uE8 = await LUP.new({from: accounts[1]});
		const uintXcrtyLB = BigInt("2")
		const addressKygZSTx = accounts[3]
		const uinthMRtfgZ = BigInt("1069")
		const uintjY3bdm = BigInt("654")
		const addressc7VsyFO = accounts[0]
		const uintmQIImvr = BigInt("2033")
		const uinthdluZyX = BigInt("1771")
		const addresshDciWGS = accounts[4]
		const boolK19G4d3 = await LUPyIm1uE8.unlock.call(addressKygZSTx, uintXcrtyLB, {from: accounts[5]});
		const boolQz6lBfC = await LUPyIm1uE8.transferWithLock.call(addressc7VsyFO, uintjY3bdm, uinthMRtfgZ, {from: accounts[4]});
		const stringRbhQa4L = await LUPyIm1uE8.symbol.call({from: accounts[0]});
		const stringzX3avG6 = await LUPyIm1uE8.symbol.call({from: accounts[3]});
		const boola7amn8C = await LUPyIm1uE8.lock.call(addresshDciWGS, uinthdluZyX, uintmQIImvr, {from: accounts[2]});

		await expect(LUPyIm1uE8.unlock.call(addressKygZSTx, uintXcrtyLB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const boolCIep7mS = true
		const addressUkH7iY = accounts[5]
		const addressMHFVvO1 = accounts[1]
		const uinthTTVnN0 = BigInt("1965")
		const uintMGUumww = BigInt("1256")
		const addresseqoRzeZ = accounts[3]
		const boolVppJssJ = await LUPg4rrezZ.freezeAccount.call(addressUkH7iY, boolCIep7mS, {from: accounts[1]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressMHFVvO1, {from: accounts[2]});
		const boolcZABkvE = await LUPg4rrezZ.lock.call(addresseqoRzeZ, uintMGUumww, uinthTTVnN0, {from: accounts[3]});
		const stringUkz9tbN = await LUPg4rrezZ.symbol.call({from: accounts[5]});
		const uint8dUJlx6 = await LUPg4rrezZ.decimals.call({from: accounts[3]});

		assert.equal(boolVppJssJ, true)
		assert.equal(uint256sZqthQ8, BigInt("50000000000000000000000000"))
		await expect(LUPg4rrezZ.lock.call(addresseqoRzeZ, uintMGUumww, uinthTTVnN0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const boolCIep7mS = true
		const addressIixQWg = accounts[5]
		const addressSA42OeW = accounts[1]
		const uintO3j9OtS = BigInt("1965")
		const uintktlGrMy = BigInt("1256")
		const addressbHtltLv = accounts[3]
		const boolSC2jx4M = false
		const addressVI7jyeW = accounts[0]
		const boolVppJssJ = await LUPg4rrezZ.freezeAccount.call(addressIixQWg, boolCIep7mS, {from: accounts[1]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressSA42OeW, {from: accounts[2]});
		const stringy6wD2CK = await LUPg4rrezZ.symbol.call({from: accounts[3]});
		const boolcZABkvE = await LUPg4rrezZ.lock.call(addressbHtltLv, uintktlGrMy, uintO3j9OtS, {from: accounts[3]});
		const stringUkz9tbN = await LUPg4rrezZ.symbol.call({from: accounts[5]});
		const booljvDYQGg = await LUPg4rrezZ.freezeAccount.call(addressVI7jyeW, boolSC2jx4M, {from: accounts[4]});
		const uint8dUJlx6 = await LUPg4rrezZ.decimals.call({from: accounts[3]});

		assert.equal(boolVppJssJ, true)
		assert.equal(stringy6wD2CK, "LUP")
		assert.equal(uint256sZqthQ8, BigInt("50000000000000000000000000"))
		await expect(LUPg4rrezZ.lock.call(addressbHtltLv, uintktlGrMy, uintO3j9OtS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjrhupv6 = await LUP.new({from: accounts[1]});
		const boolxrAdDKz = false
		const addresseh4kEZh = accounts[1]
		const uintwvrNhzo = BigInt("1107")
		const addressWwhZKTp = accounts[0]
		const uintLVPMbkM = BigInt("954")
		const uintGPHabg6 = BigInt("524")
		const addressfendCic = accounts[0]
		const boolUc3y7x9 = true
		const addressS7sVEVm = accounts[0]
		const stringASp45AJ = await LUPjrhupv6.name.call({from: accounts[0]});
		const booleUtLpWp = await LUPjrhupv6.freezeAccount.call(addresseh4kEZh, boolxrAdDKz, {from: accounts[2]});
		const booly3Ybxp0 = await LUPjrhupv6.transfer.call(addressWwhZKTp, uintwvrNhzo, {from: accounts[5]});
		const boolQuWVYnu = await LUPjrhupv6.transferWithLock.call(addressfendCic, uintGPHabg6, uintLVPMbkM, {from: accounts[4]});
		const boolkijSdXQ = await LUPjrhupv6.freezeAccount.call(addressS7sVEVm, boolUc3y7x9, {from: accounts[0]});
		const stringq4OSbxe = await LUPjrhupv6.symbol.call({from: accounts[3]});

		assert.equal(stringASp45AJ, "LINKUP Token")
		await expect(LUPjrhupv6.freezeAccount.call(addresseh4kEZh, boolxrAdDKz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const boolCIep7mS = true
		const addressBDD1FB5 = accounts[5]
		const addressf6sICH5 = accounts[1]
		const uintg1oNIfJ = BigInt("1965")
		const uintHC98Z0U = BigInt("1256")
		const addressMlXFGLb = accounts[3]
		const boolVppJssJ = await LUPg4rrezZ.freezeAccount.call(addressBDD1FB5, boolCIep7mS, {from: accounts[1]});
		const uint8mY5d0se = await LUPg4rrezZ.decimals.call({from: accounts[4]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressf6sICH5, {from: accounts[2]});
		const boolcZABkvE = await LUPg4rrezZ.lock.call(addressMlXFGLb, uintHC98Z0U, uintg1oNIfJ, {from: accounts[3]});
		const stringUkz9tbN = await LUPg4rrezZ.symbol.call({from: accounts[5]});
		const uint8dUJlx6 = await LUPg4rrezZ.decimals.call({from: accounts[3]});

		assert.equal(boolVppJssJ, true)
		assert.equal(uint256sZqthQ8, BigInt("50000000000000000000000000"))
		assert.equal(uint8mY5d0se, BigInt("18"))
		await expect(LUPg4rrezZ.lock.call(addressMlXFGLb, uintHC98Z0U, uintg1oNIfJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const uintmIwwi2u = BigInt("1188")
		const uintthRd87x = BigInt("1024")
		const addresslRweKe9 = accounts[4]
		const addressdR7haee = accounts[1]
		const addressxpbOBE = accounts[2]
		const uint1YFfty = BigInt("1965")
		const uintuJIr35H = BigInt("1256")
		const addresswJm7S3 = accounts[3]
		const boolVZNbniI = await LUPg4rrezZ.transferWithLock.call(addresslRweKe9, uintthRd87x, uintmIwwi2u, {from: accounts[1]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressdR7haee, {from: accounts[2]});
		const addressGY30U2v = await LUPg4rrezZ.notFrozen.call(addressxpbOBE, {from: accounts[3]});
		const boolcZABkvE = await LUPg4rrezZ.lock.call(addresswJm7S3, uintuJIr35H, uint1YFfty, {from: accounts[3]});
		const stringUkz9tbN = await LUPg4rrezZ.symbol.call({from: accounts[5]});
		const uint8xgQCsdC = await LUPg4rrezZ.decimals.call({from: accounts[2]});
		const uint8dUJlx6 = await LUPg4rrezZ.decimals.call({from: accounts[3]});

		assert.equal(boolVZNbniI, true)
		assert.equal(uint256sZqthQ8, BigInt("50000000000000000000000000"))
		await expect(LUPg4rrezZ.notFrozen.call(addressxpbOBE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj7xO5wl = await LUP.new({from: accounts[0]});
		const uintVmd0SVx = BigInt("1518")
		const addressYXM40ob = accounts[1]
		const addressQtyw4wx = accounts[3]
		const stringGvR6MMN = await LUPj7xO5wl.name.call({from: accounts[3]});
		const bool9rdTWv = await LUPj7xO5wl.transfer.call(addressYXM40ob, uintVmd0SVx, {from: accounts[4]});
		const addressIWUiTJb = await LUPj7xO5wl.notFrozen.call(addressQtyw4wx, {from: accounts[0]});

		assert.equal(stringGvR6MMN, "LINKUP Token")
		await expect(LUPj7xO5wl.transfer.call(addressYXM40ob, uintVmd0SVx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const boolCIep7mS = false
		const addressViJmVZI = accounts[5]
		const addressTl0AiBb = accounts[1]
		const addressDHhicsN = "0x0000000000000000000000000000000000000001"
		const boolVppJssJ = await LUPg4rrezZ.freezeAccount.call(addressViJmVZI, boolCIep7mS, {from: accounts[1]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressTl0AiBb, {from: accounts[2]});
		const addresscB1GhX = await LUPg4rrezZ.upgradeTo.call(addressDHhicsN, {from: accounts[0]});
		const uint8dUJlx6 = await LUPg4rrezZ.decimals.call({from: accounts[3]});

		assert.equal(boolVppJssJ, true)
		assert.equal(uint256sZqthQ8, BigInt("50000000000000000000000000"))
		await expect(LUPg4rrezZ.upgradeTo.call(addressDHhicsN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const uintQ7GIioq = BigInt("1539")
		const addressnDft48R = accounts[4]
		const addressjwuJU3S = accounts[1]
		const boolBFvzwq1 = await LUPg4rrezZ.unlock.call(addressnDft48R, uintQ7GIioq, {from: accounts[1]});
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressjwuJU3S, {from: accounts[2]});

		await expect(LUPg4rrezZ.unlock.call(addressnDft48R, uintQ7GIioq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const addresskv1WxNt = accounts[3]
		const uintdROymQJ = BigInt("1210")
		const uintmqE6T3 = BigInt("922")
		const addressIdoBU1V = accounts[0]
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addresskv1WxNt, {from: accounts[2]});
		const boolzamQMYl = await LUPg4rrezZ.lock.call(addressIdoBU1V, uintmqE6T3, uintdROymQJ, {from: accounts[1]});

		assert.equal(uint256sZqthQ8, BigInt("0"))
		await expect(LUPg4rrezZ.lock.call(addressIdoBU1V, uintmqE6T3, uintdROymQJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj7xO5wl = await LUP.new({from: accounts[0]});
		const addresscqV1ej2 = accounts[5]
		const uintSBSotyE = BigInt("1542")
		const addresszhhL4FQ = accounts[1]
		const addressGideaOE = await LUPj7xO5wl.upgradeTo.call(addresscqV1ej2, {from: accounts[0]});
		const bool9rdTWv = await LUPj7xO5wl.transfer.call(addresszhhL4FQ, uintSBSotyE, {from: accounts[4]});

		await expect(LUPj7xO5wl.transfer.call(addresszhhL4FQ, uintSBSotyE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOhMgZDu = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkX77W9L = BigInt("102")
		const addressqhvQUnr = accounts[3]
		const addressZetCfwn = "0x0000000000000000000000000000000000000001"
		const addressXAcAfMP = accounts[3]
		const boolEtRvM4O = await LUPOhMgZDu.transfer.call(addressqhvQUnr, uintkX77W9L, {from: accounts[1]});
		const addressNWUgfpZ = await LUPOhMgZDu.notFrozen.call(addressZetCfwn, {from: "0x0000000000000000000000000000000000000001"});
		const addressVMOSEd = await LUPOhMgZDu.notFrozen.call(addressXAcAfMP, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPg4rrezZ = await LUP.new({from: accounts[1]});
		const addressObMWT6k = accounts[2]
		const uintqmeAjqH = BigInt("1314")
		const uintUt1P5H = BigInt("1303")
		const addressm6Ew9Ny = accounts[1]
		const uint256sZqthQ8 = await LUPg4rrezZ.balanceOf.call(addressObMWT6k, {from: accounts[2]});
		const bool9mAgG5 = await LUPg4rrezZ.lock.call(addressm6Ew9Ny, uintUt1P5H, uintqmeAjqH, {from: accounts[1]});
		const stringYclNCn = await LUPg4rrezZ.symbol.call({from: accounts[4]});

		assert.equal(bool9mAgG5, true)
		assert.equal(stringYclNCn, "LUP")
		assert.equal(uint256sZqthQ8, BigInt("0"))
	});
})
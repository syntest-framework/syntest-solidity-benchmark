const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringPfTdVLD = "pVMDeaKTwkrEPNFlxIyXuyuFaCbcutcB"
		const stringNW8q61G = "fQPMhgh5bTSBGVxyd3fLxggowkRAbmecFeDtIECRu5pJYOBrsNUI2d28rFCBoYRLoeEWSEG"
		const uintY4n5IWB = BigInt("20")
		const LUPQiv4X5y = await LUP.new(stringPfTdVLD, stringNW8q61G, uintY4n5IWB, {from: accounts[4]});
		const uintHZakRmQ = BigInt("813")
		const addressfolYOxF = accounts[4]
		const uintmOOnKvT = BigInt("1566")
		const uintuPhA5A5 = BigInt("990")
		const addressjlED9kb = accounts[4]
		const boolvWStneR = await LUPQiv4X5y.transfer.call(addressfolYOxF, uintHZakRmQ, {from: accounts[1]});
		const boolnDYiK4B = await LUPQiv4X5y.lock.call(addressjlED9kb, uintuPhA5A5, uintmOOnKvT, {from: accounts[3]});
		const uint8g1W2dTA = await LUPQiv4X5y.decimals.call({from: accounts[4]});
		const stringbfVNmcV = await LUPQiv4X5y.symbol.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPpqtV4eH = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressm2ESW4 = "0x0000000000000000000000000000000000000001"
		const stringouJNN4 = await LUPpqtV4eH.symbol.call({from: accounts[1]});
		const uint8L3zx7JV = await LUPpqtV4eH.decimals.call({from: accounts[4]});
		const stringQH5AgK6 = await LUPpqtV4eH.name.call({from: accounts[2]});
		const uint256AHfL4jj = await LUPpqtV4eH.balanceOf.call(addressm2ESW4, {from: accounts[5]});
	});

	it('test for LUP', async () => {
		const LUPUYofjTh = await LUP.new({from: accounts[3]});
		const uintIr94QWF = BigInt("1498")
		const addressoXtZQUy = accounts[1]
		const uintxpfahvT = BigInt("656")
		const addressNoIwRMH = accounts[4]
		const uintc7vuGub = BigInt("1789")
		const addressku8ark = accounts[2]
//		const boolekwgOdB = await LUPUYofjTh.unlock.call(addressoXtZQUy, uintIr94QWF, {from: accounts[1]});
//		const boolANP1iEa = await LUPUYofjTh.transfer.call(addressNoIwRMH, uintxpfahvT, {from: accounts[0]});
//		const stringkvoJ5Lm = await LUPUYofjTh.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkwAkpie = await LUPUYofjTh.unlock.call(addressku8ark, uintc7vuGub, {from: accounts[4]});

		await expect(LUPUYofjTh.unlock.call(addressoXtZQUy, uintIr94QWF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPxUmYDxl = await LUP.new({from: accounts[2]});
		const addressrbZimb3 = accounts[4]
		const addresswNCJX2E = accounts[4]
		const uintD59zMN3 = BigInt("88")
		const uint8Ytu67 = BigInt("701")
		const addresslZIMSLi = accounts[1]
		const address5VLFcN = accounts[3]
//		const addressCI3jcy = await LUPxUmYDxl.notFrozen.call(addressrbZimb3, {from: accounts[2]});
//		const uint256bRLPMd = await LUPxUmYDxl.balanceOf.call(addresswNCJX2E, {from: accounts[4]});
//		const boolSkhxPew = await LUPxUmYDxl.transferWithLock.call(addresslZIMSLi, uint8Ytu67, uintD59zMN3, {from: accounts[4]});
//		const addresscJJcMCa = await LUPxUmYDxl.notFrozen.call(address5VLFcN, {from: accounts[2]});

		await expect(LUPxUmYDxl.notFrozen.call(addressrbZimb3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const uintWlM780V = BigInt("561")
		const addressGh9hWA = "0x0000000000000000000000000000000000000001"
		const uintpH1CHQB = BigInt("484")
		const addresscKap6nC = "0x0000000000000000000000000000000000000001"
		const uintNipTtRW = BigInt("2014")
		const uintn6Vup8h = BigInt("1905")
		const addressl6vmND = accounts[4]
		const boolSo5CgIK = false
		const addressRyaUmB = accounts[0]
		const addressEWOqQWY = accounts[5]
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addressGh9hWA, uintWlM780V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCwx67aS = await LUPj9oD1Jy.unlock.call(addresscKap6nC, uintpH1CHQB, {from: accounts[1]});
//		const booluyCI9el = await LUPj9oD1Jy.transferWithLock.call(addressl6vmND, uintn6Vup8h, uintNipTtRW, {from: accounts[4]});
//		const boolbRwhxz = await LUPj9oD1Jy.freezeAccount.call(addressRyaUmB, boolSo5CgIK, {from: "0x0000000000000000000000000000000000000001"});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressEWOqQWY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPj9oD1Jy.transfer.call(addressGh9hWA, uintWlM780V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPv56FAeT = await LUP.new({from: accounts[4]});
		const uint9tJHe8 = BigInt("1755")
		const addresseN4r07b = accounts[0]
		const uintQuJa57X = BigInt("1231")
		const uintsgAqG1i = BigInt("1916")
		const addressh7h6EkQ = accounts[2]
		const uintiXiRDVE = BigInt("1280")
		const addressSf5EYjE = accounts[2]
		const uint88BcO9f = await LUPv56FAeT.decimals.call({from: accounts[1]});
//		const boolFYPsMEz = await LUPv56FAeT.unlock.call(addresseN4r07b, uint9tJHe8, {from: accounts[4]});
//		const boolm55MqOu = await LUPv56FAeT.transferWithLock.call(addressh7h6EkQ, uintsgAqG1i, uintQuJa57X, {from: accounts[3]});
//		const boolsWUXkKt = await LUPv56FAeT.transfer.call(addressSf5EYjE, uintiXiRDVE, {from: accounts[2]});

		assert.equal(uint88BcO9f, BigInt("18"))
		await expect(LUPv56FAeT.unlock.call(addresseN4r07b, uint9tJHe8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtyiQIPD = await LUP.new({from: accounts[4]});
		const uintfwfML4d = BigInt("490")
		const uintpKxkl3M = BigInt("718")
		const addressQuvbVp7 = accounts[4]
		const uint9UWBqQ = BigInt("1277")
		const uint3VCzBL = BigInt("746")
		const addressWWPLn0c = accounts[3]
		const addresso3Qaebc = accounts[0]
		const boolntTd1X = await LUPtyiQIPD.transferWithLock.call(addressQuvbVp7, uintpKxkl3M, uintfwfML4d, {from: accounts[4]});
		const uint8oX8yu0H = await LUPtyiQIPD.decimals.call({from: accounts[1]});
		const uint8OIVWhiE = await LUPtyiQIPD.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolaqn7A8R = await LUPtyiQIPD.lock.call(addressWWPLn0c, uint3VCzBL, uint9UWBqQ, {from: accounts[3]});
//		const stringgPsZmKD = await LUPtyiQIPD.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256N29YDs0 = await LUPtyiQIPD.balanceOf.call(addresso3Qaebc, {from: accounts[1]});

		assert.equal(boolntTd1X, true)
		assert.equal(uint8OIVWhiE, BigInt("18"))
		assert.equal(uint8oX8yu0H, BigInt("18"))
		await expect(LUPtyiQIPD.lock.call(addressWWPLn0c, uint3VCzBL, uint9UWBqQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const uintbFiFCvy = BigInt("561")
		const addresszAa3X7s = "0x0000000000000000000000000000000000000000"
		const uintSYnzNku = BigInt("484")
		const addressnJkPZiB = "0x0000000000000000000000000000000000000001"
		const uint2l4l1x = BigInt("2014")
		const uinty0ijrNa = BigInt("1905")
		const addressAjiPU7j = accounts[5]
		const addressqQNryV7 = accounts[5]
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addresszAa3X7s, uintbFiFCvy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCwx67aS = await LUPj9oD1Jy.unlock.call(addressnJkPZiB, uintSYnzNku, {from: accounts[1]});
//		const booluyCI9el = await LUPj9oD1Jy.transferWithLock.call(addressAjiPU7j, uinty0ijrNa, uint2l4l1x, {from: accounts[4]});
//		const stringFL95ec = await LUPj9oD1Jy.name.call({from: accounts[3]});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressqQNryV7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPj9oD1Jy.transfer.call(addresszAa3X7s, uintbFiFCvy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const uintWgV7uXa = BigInt("561")
		const addressyp3E7i2 = "0x0000000000000000000000000000000000000001"
		const uintYdep6IH = BigInt("484")
		const addresshoI08XB = "0x0000000000000000000000000000000000000001"
		const uinto7Cos7 = BigInt("2014")
		const uintXd5Uz1B = BigInt("1905")
		const addressdUz2B0 = accounts[5]
		const addressU9KY20r = accounts[5]
		const stringWMlcwk3 = await LUPj9oD1Jy.name.call({from: accounts[1]});
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addressyp3E7i2, uintWgV7uXa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCwx67aS = await LUPj9oD1Jy.unlock.call(addresshoI08XB, uintYdep6IH, {from: accounts[1]});
//		const booluyCI9el = await LUPj9oD1Jy.transferWithLock.call(addressdUz2B0, uintXd5Uz1B, uinto7Cos7, {from: accounts[4]});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressU9KY20r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringWMlcwk3, "LINKUP Token")
		await expect(LUPj9oD1Jy.transfer.call(addressyp3E7i2, uintWgV7uXa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressro0Pg80 = accounts[0]
		const uintGB6LTrl = BigInt("66")
		const addresspMuoGb9 = accounts[4]
		const uintQnkqFeN = BigInt("561")
		const addresswvxYcI6 = "0x0000000000000000000000000000000000000001"
		const uintXJbYVl = BigInt("484")
		const addresspWqBOZ1 = "0x0000000000000000000000000000000000000000"
		const uintzhz2hdr = BigInt("1200")
		const uintNxMkC7Z = BigInt("347")
		const addressOn9edl = accounts[5]
		const addressQnpKkfd = accounts[5]
		const uint256e912VRO = await LUPj9oD1Jy.balanceOf.call(addressro0Pg80, {from: accounts[1]});
//		const boolxiMo4wo = await LUPj9oD1Jy.transfer.call(addresspMuoGb9, uintGB6LTrl, {from: accounts[3]});
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addresswvxYcI6, uintQnkqFeN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCwx67aS = await LUPj9oD1Jy.unlock.call(addresspWqBOZ1, uintXJbYVl, {from: accounts[1]});
//		const boolb7WuNXK = await LUPj9oD1Jy.lock.call(addressOn9edl, uintNxMkC7Z, uintzhz2hdr, {from: "0x0000000000000000000000000000000000000001"});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressQnpKkfd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e912VRO, BigInt("0"))
		await expect(LUPj9oD1Jy.transfer.call(addresspMuoGb9, uintGB6LTrl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressPvUOwZt = accounts[0]
		const uintEgLSVb = BigInt("1590")
		const uintaB0vGdp = BigInt("515")
		const addressPogNqe0 = accounts[3]
		const uintZoZ5Uiz = BigInt("609")
		const uintQz4HIBc = BigInt("70")
		const addresssonZktb = accounts[2]
		const uintazZFXTt = BigInt("561")
		const addressFQSNyn0 = "0x0000000000000000000000000000000000000000"
		const addressdqjxGdc = accounts[5]
		const uint256e912VRO = await LUPj9oD1Jy.balanceOf.call(addressPvUOwZt, {from: accounts[1]});
//		const boolScwcyYP = await LUPj9oD1Jy.lock.call(addressPogNqe0, uintaB0vGdp, uintEgLSVb, {from: accounts[1]});
//		const boolsoerN1j = await LUPj9oD1Jy.lock.call(addresssonZktb, uintQz4HIBc, uintZoZ5Uiz, {from: accounts[0]});
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addressFQSNyn0, uintazZFXTt, {from: "0x0000000000000000000000000000000000000001"});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressdqjxGdc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e912VRO, BigInt("0"))
		await expect(LUPj9oD1Jy.lock.call(addressPogNqe0, uintaB0vGdp, uintEgLSVb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressq0RUBMK = accounts[0]
		const uintYq9FPJ = BigInt("561")
		const addressLqzTHo = "0x0000000000000000000000000000000000000001"
		const stringscw3CLy = await LUPj9oD1Jy.name.call({from: accounts[3]});
//		const addressJX1wAN = await LUPj9oD1Jy.upgradeTo.call(addressq0RUBMK, {from: accounts[4]});
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addressLqzTHo, uintYq9FPJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringscw3CLy, "LINKUP Token")
		await expect(LUPj9oD1Jy.upgradeTo.call(addressq0RUBMK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressT4ndRi0 = accounts[0]
		const uintvTomgVP = BigInt("822")
		const addressPD4RDag = accounts[3]
		const uintJzAnwbc = BigInt("44")
		const addressm16EZSO = accounts[4]
		const addressk2wKzRt = accounts[5]
		const uint256e912VRO = await LUPj9oD1Jy.balanceOf.call(addressT4ndRi0, {from: accounts[1]});
		const stringQs6Jqai = await LUPj9oD1Jy.symbol.call({from: accounts[3]});
//		const boolcgiEsB8 = await LUPj9oD1Jy.unlock.call(addressPD4RDag, uintvTomgVP, {from: accounts[4]});
//		const boolxiMo4wo = await LUPj9oD1Jy.transfer.call(addressm16EZSO, uintJzAnwbc, {from: accounts[3]});
//		const address93pPDT = await LUPj9oD1Jy.notFrozen.call(addressk2wKzRt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringQs6Jqai, "LUP")
		assert.equal(uint256e912VRO, BigInt("0"))
		await expect(LUPj9oD1Jy.unlock.call(addressPD4RDag, uintvTomgVP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressG4EFXLW = accounts[2]
		const boolhZI9Ds3 = true
		const addressy7HhHjv = accounts[2]
		const addressIdo6Mqj = accounts[1]
		const uintQVdhtz1 = BigInt("845")
		const uinti3grg17 = BigInt("602")
		const addressSj7Nu9 = accounts[3]
		const uint256e912VRO = await LUPj9oD1Jy.balanceOf.call(addressG4EFXLW, {from: accounts[1]});
		const boolFNWuUUU = await LUPj9oD1Jy.freezeAccount.call(addressy7HhHjv, boolhZI9Ds3, {from: accounts[1]});
		const uint256r78SsI5 = await LUPj9oD1Jy.balanceOf.call(addressIdo6Mqj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgfHfj0y = await LUPj9oD1Jy.lock.call(addressSj7Nu9, uinti3grg17, uintQVdhtz1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFNWuUUU, true)
		assert.equal(uint256e912VRO, BigInt("0"))
		assert.equal(uint256r78SsI5, BigInt("50000000000000000000000000"))
		await expect(LUPj9oD1Jy.lock.call(addressSj7Nu9, uinti3grg17, uintQVdhtz1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPj9oD1Jy = await LUP.new({from: accounts[1]});
		const addressfJFA29w = accounts[4]
		const addresshymNERD = accounts[1]
		const uintpzxoFNC = BigInt("561")
		const addressxeqy2JR = "0x0000000000000000000000000000000000000000"
		const uint256qt0s5rB = await LUPj9oD1Jy.balanceOf.call(addressfJFA29w, {from: accounts[1]});
		const addressOXpAmua = await LUPj9oD1Jy.upgradeTo.call(addresshymNERD, {from: accounts[1]});
//		const boolqYJilUq = await LUPj9oD1Jy.transfer.call(addressxeqy2JR, uintpzxoFNC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qt0s5rB, BigInt("0"))
		await expect(LUPj9oD1Jy.transfer.call(addressxeqy2JR, uintpzxoFNC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
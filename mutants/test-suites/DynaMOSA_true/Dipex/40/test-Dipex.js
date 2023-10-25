const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringCZadTUP = "eY"
		const stringj9vsTAN = "DjbIrTuqRbzYUbugXe3hTFi7WmeBzaicy15D5A4LViBrp7CAGWNWuW"
		const uintXkifiY1 = BigInt("264")
		const DipexRb1lkV = await Dipex.new(stringCZadTUP, stringj9vsTAN, uintXkifiY1, {from: accounts[3]});
		const uintx4vZUb = BigInt("1515")
		const address29IIQd = accounts[4]
		const uintnVe98HA = BigInt("55")
		const addressgHXltCr = accounts[3]
		const uintAVipbD5 = BigInt("824")
		const addressp9Z8UCB = accounts[4]
		const uinthiEu3SR = BigInt("1226")
		const addresspN6ubAq = accounts[2]
		const uintxIY5nAI = BigInt("142")
		const addressotNADTA = accounts[2]
		const boolEfkEwmL = await DipexRb1lkV.approve.call(address29IIQd, uintx4vZUb, {from: accounts[3]});
		const boolijGFSFa = await DipexRb1lkV.approve.call(addressgHXltCr, uintnVe98HA, {from: "0x0000000000000000000000000000000000000001"});
		const boolFFTmN0j = await DipexRb1lkV.approve.call(addressp9Z8UCB, uintAVipbD5, {from: accounts[4]});
//		const boolcFRubeX = await DipexRb1lkV.approveAndCall.call(addresspN6ubAq, uinthiEu3SR, {from: accounts[5]});
//		const booltjQD8ba = await DipexRb1lkV.approve.call(addressotNADTA, uintxIY5nAI, {from: accounts[0]});

		assert.equal(boolEfkEwmL, true)
		assert.equal(boolFFTmN0j, true)
		assert.equal(boolijGFSFa, true)
		await expect(DipexRb1lkV.approveAndCall.call(addresspN6ubAq, uinthiEu3SR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringUdZJ1VG = "5WejaDuyjiTfKvVIFiP8Eh1QNyPW2u0k9NeeLTPHb3vlUHDaQGjwRkV6fXpVmDTdly1yeQj3"
		const stringEo22yZ = "VpefMG7MSQAgWWwQwcQu5OihnoC7Zz2v9kcd"
		const uintrPbSPm2 = BigInt("579")
		const DipexXFL4mvd = await Dipex.new(stringUdZJ1VG, stringEo22yZ, uintrPbSPm2, {from: accounts[3]});
		const uintI1sM1VN = BigInt("1196")
		const addressVrG6ASq = accounts[3]
		const uintvEbqWK7 = BigInt("1392")
		const addressjI1TU8n = accounts[0]
		const uinta9Jc9am = BigInt("840")
		const addressnXydSDr = accounts[2]
		const uintaE6mhb = BigInt("900")
		const addressgvjh0wi = accounts[2]
		const addressfPrQhUD = accounts[2]
		const boolSO76m6Z = await DipexXFL4mvd.approve.call(addressVrG6ASq, uintI1sM1VN, {from: accounts[4]});
		const boolgqfPTH1 = await DipexXFL4mvd.approve.call(addressjI1TU8n, uintvEbqWK7, {from: accounts[3]});
		const boolbpurnaP = await DipexXFL4mvd.approve.call(addressnXydSDr, uinta9Jc9am, {from: accounts[4]});
//		const boolmK2tgAd = await DipexXFL4mvd.transferFrom.call(addressfPrQhUD, addressgvjh0wi, uintaE6mhb, {from: accounts[2]});

		assert.equal(boolSO76m6Z, true)
		assert.equal(boolbpurnaP, true)
		assert.equal(boolgqfPTH1, true)
		await expect(DipexXFL4mvd.transferFrom.call(addressfPrQhUD, addressgvjh0wi, uintaE6mhb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXV1r7Mc = "NhdIRhBzxghdqKxHpayH8b2wGp9imXdlW35y1ihhgh9i4mUBZG2PVZfs25lweFiIZZ9UxPJnbl9"
		const stringvQjbOF = "Oo"
		const uintnkB0Dl = BigInt("153")
		const DipexbO3s7Wu = await Dipex.new(stringXV1r7Mc, stringvQjbOF, uintnkB0Dl, {from: "0x0000000000000000000000000000000000000001"});
		const uintBBNoZHV = BigInt("2034")
		const addresscRu0dpd = accounts[3]
		const uintKpTexbe = BigInt("1245")
		const addressUAD2CNO = accounts[4]
		const uintdfjq83v = BigInt("461")
		const addressoEBp76y = "0x0000000000000000000000000000000000000001"
		const uintiiq7awf = BigInt("668")
		const addressg80GmeJ = accounts[1]
		const boolR9odjzX = await DipexbO3s7Wu.approveAndCall.call(addresscRu0dpd, uintBBNoZHV, {from: accounts[5]});
		const booluLswWdo = await DipexbO3s7Wu.approve.call(addressUAD2CNO, uintKpTexbe, {from: accounts[2]});
		const boolTETnB5M = await DipexbO3s7Wu.transfer.call(addressoEBp76y, uintdfjq83v, {from: accounts[1]});
		const booljP8RZ1C = await DipexbO3s7Wu.approveAndCall.call(addressg80GmeJ, uintiiq7awf, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringQEBHavQ = "g"
		const stringuTtWvQ = "QltaRADS3ZK329cWasfQziSQlvbx"
		const uintVWUOH0U = BigInt("565")
		const DipexwhkrQiz = await Dipex.new(stringQEBHavQ, stringuTtWvQ, uintVWUOH0U, {from: accounts[2]});
		const uintqZdLLAf = BigInt("107")
		const address1GKCNz = accounts[1]
		const uintqKLqWC9 = BigInt("1262")
		const addressouMxG03 = accounts[4]
		const uintFH3XHwK = BigInt("58")
		const addressVevp9MP = accounts[4]
//		const boolN8v2eHn = await DipexwhkrQiz.transfer.call(address1GKCNz, uintqZdLLAf, {from: accounts[0]});
//		const booluAsABs1 = await DipexwhkrQiz.transfer.call(addressouMxG03, uintqKLqWC9, {from: accounts[5]});
//		const boollsQlk3s = await DipexwhkrQiz.approveAndCall.call(addressVevp9MP, uintFH3XHwK, {from: accounts[3]});

		await expect(DipexwhkrQiz.transfer.call(address1GKCNz, uintqZdLLAf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringKj4YNES = "5WzVVVHJWUQdxtFxk4jSK"
		const stringJtH4NJ = "TwjsOwva3tT4uH3E3tkAqdFaGeIv1dNNFp7doLtin1x8"
		const uintmmd4Axw = BigInt("689")
		const Dipexbbxq28k = await Dipex.new(stringKj4YNES, stringJtH4NJ, uintmmd4Axw, {from: accounts[2]});
		const uintSM2h0Il = BigInt("1637")
		const addressjCAZW8I = accounts[1]
		const addressVsxEv6x = accounts[1]
		const uint0Zder4 = BigInt("1859")
		const addressm1PATa8 = accounts[3]
		const addressVhpNNAD = accounts[0]
		const uintZIVEot = BigInt("1336")
		const addressXcYKfSu = accounts[0]
		const addressF8NSwU2 = accounts[4]
		const uintRfP7Wb = BigInt("1473")
		const addressKSdk6gl = accounts[2]
		const addressHagPnD = accounts[5]
//		const bool4irGT2 = await Dipexbbxq28k.transferFrom.call(addressVsxEv6x, addressjCAZW8I, uintSM2h0Il, {from: accounts[2]});
//		const boolEuv7FQm = await Dipexbbxq28k.transferFrom.call(addressVhpNNAD, addressm1PATa8, uint0Zder4, {from: accounts[2]});
//		const boolg5wTYMD = await Dipexbbxq28k.transferFrom.call(addressF8NSwU2, addressXcYKfSu, uintZIVEot, {from: accounts[2]});
//		const boolirjh91 = await Dipexbbxq28k.approve.call(addressKSdk6gl, uintRfP7Wb, {from: accounts[2]});
//		const boolILr8c7V = await Dipexbbxq28k.transferownership.call(addressHagPnD, {from: accounts[0]});

		await expect(Dipexbbxq28k.transferFrom.call(addressVsxEv6x, addressjCAZW8I, uintSM2h0Il, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSvnETm = "Yxl5ERttELl4GQcD"
		const string7f3CXu = "Vg52VmgeUB19JgyWMIkwRP9NoO6L21oNj432CaxIjCNLuiYo1Fx3oCGMKhLsCkt7"
		const uintcEAspyU = BigInt("236")
		const DipexjIEuCJf = await Dipex.new(stringSvnETm, string7f3CXu, uintcEAspyU, {from: accounts[3]});
		const uintJM2mqtN = BigInt("1335")
		const addressGH9NPvZ = accounts[2]
		const addressk5ejOnw = accounts[4]
		const uintuMQTmy = BigInt("11")
		const addressPUdCKb = accounts[4]
		const boolruBnlum = await DipexjIEuCJf.approve.call(addressGH9NPvZ, uintJM2mqtN, {from: accounts[2]});
		const boolKDI9EqF = await DipexjIEuCJf.transferownership.call(addressk5ejOnw, {from: accounts[3]});
//		const boolW5KXciM = await DipexjIEuCJf.approveAndCall.call(addressPUdCKb, uintuMQTmy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKDI9EqF, true)
		assert.equal(boolruBnlum, true)
		await expect(DipexjIEuCJf.approveAndCall.call(addressPUdCKb, uintuMQTmy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJdLKgvH = "4S7cPg9iGxOknxPU31HmZPnVgPfDD3FB74Fgr5k5HOzch6Xi0wYohB"
		const stringyRg99hM = "g3v3tmXgQed9faboizgf6Ga7SuMIPYzDJaPe0XKa0qYEq33G3cGoGXhGNC52LVoEMP"
		const uintRrGEMnC = BigInt("1834")
		const Dipexq1Tvw8M = await Dipex.new(stringJdLKgvH, stringyRg99hM, uintRrGEMnC, {from: accounts[3]});
		const uintKmozgok = BigInt("1173")
		const addressL57Dd3r = accounts[4]
		const uintCC16aVH = BigInt("533")
		const addressNKOwLHH = "0x0000000000000000000000000000000000000001"
		const uintghzzCc = BigInt("587")
		const addressyD6F56M = accounts[0]
		const addressDt7EEcI = "0x0000000000000000000000000000000000000001"
		const uintixfpAjL = BigInt("449")
		const addressUIxbmGQ = "0x0000000000000000000000000000000000000001"
		const boolXVyJfz = await Dipexq1Tvw8M.approve.call(addressL57Dd3r, uintKmozgok, {from: "0x0000000000000000000000000000000000000001"});
		const boolOb3Ghi = await Dipexq1Tvw8M.transfer.call(addressNKOwLHH, uintCC16aVH, {from: accounts[3]});
//		const boolIMogmO6 = await Dipexq1Tvw8M.transferFrom.call(addressDt7EEcI, addressyD6F56M, uintghzzCc, {from: accounts[4]});
//		const booleMv7Hml = await Dipexq1Tvw8M.transfer.call(addressUIxbmGQ, uintixfpAjL, {from: accounts[2]});

		assert.equal(boolOb3Ghi, true)
		assert.equal(boolXVyJfz, true)
		await expect(Dipexq1Tvw8M.transferFrom.call(addressDt7EEcI, addressyD6F56M, uintghzzCc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCZadTUP = "eY"
		const stringj9vsTAN = "DjbIrTuqRbzYUbugXe3hTFi7WmeBzaicy15D5A4LViBrp7CAGWNWuW"
		const uintWzbiSw = BigInt("264")
		const DipexRb1lkV = await Dipex.new(stringCZadTUP, stringj9vsTAN, uintWzbiSw, {from: accounts[3]});
		const uintIr4I6Sx = BigInt("1288")
		const addressM1gwsax = accounts[0]
		const addressfEciQW = accounts[3]
		const uintgWQWH9m = BigInt("1515")
		const address7G32c5 = accounts[4]
		const uinta9jIvtr = BigInt("824")
		const addressJe97IQl = accounts[5]
		const uintLDOCwQd = BigInt("32")
		const addressLcvIH3w = "0x0000000000000000000000000000000000000001"
		const uint43g7K3 = BigInt("1226")
		const addressFUqigGc = accounts[2]
		const uintZ2UWglT = BigInt("1291")
		const addresszRGwveh = accounts[0]
		const uintddOCVkT = BigInt("142")
		const addressu7i8bZI = accounts[2]
		const boolOqXltuS = await DipexRb1lkV.transferFrom.call(addressfEciQW, addressM1gwsax, uintIr4I6Sx, {from: accounts[3]});
		const boolEfkEwmL = await DipexRb1lkV.approve.call(address7G32c5, uintgWQWH9m, {from: accounts[3]});
		const boolFFTmN0j = await DipexRb1lkV.approve.call(addressJe97IQl, uinta9jIvtr, {from: accounts[4]});
		const boolhYUwphs = await DipexRb1lkV.approveAndCall.call(addressLcvIH3w, uintLDOCwQd, {from: accounts[3]});
//		const boolcFRubeX = await DipexRb1lkV.approveAndCall.call(addressFUqigGc, uint43g7K3, {from: accounts[5]});
//		const boolLiyjOKK = await DipexRb1lkV.approve.call(addresszRGwveh, uintZ2UWglT, {from: accounts[5]});
//		const booltjQD8ba = await DipexRb1lkV.approve.call(addressu7i8bZI, uintddOCVkT, {from: accounts[0]});

		assert.equal(boolEfkEwmL, true)
		assert.equal(boolFFTmN0j, true)
		assert.equal(boolOqXltuS, true)
		assert.equal(boolhYUwphs, true)
		await expect(DipexRb1lkV.approveAndCall.call(addressFUqigGc, uint43g7K3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringQEBHavQ = "g"
		const stringuTtWvQ = "QltaRADS3ZK329cWasfQziSQlvbx"
		const uintaudU5JC = BigInt("565")
		const DipexwhkrQiz = await Dipex.new(stringQEBHavQ, stringuTtWvQ, uintaudU5JC, {from: accounts[2]});
		const uint9GG3B7 = BigInt("0")
		const addressEQ8E4gs = accounts[1]
		const uintA5LvI6p = BigInt("177")
		const addressTBYtlBM = accounts[3]
		const boolN8v2eHn = await DipexwhkrQiz.transfer.call(addressEQ8E4gs, uint9GG3B7, {from: accounts[0]});
//		const boolgOj8q2 = await DipexwhkrQiz.approveAndCall.call(addressTBYtlBM, uintA5LvI6p, {from: accounts[4]});

		assert.equal(boolN8v2eHn, true)
		await expect(DipexwhkrQiz.approveAndCall.call(addressTBYtlBM, uintA5LvI6p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCZadTUP = "eY"
		const stringj9vsTAN = "DjbIrTuqRbzYUbugXe3hTFi7WmeBzaicy15D5A4LViBrp7CAGWNWuW"
		const uintacpsLKQ = BigInt("264")
		const DipexRb1lkV = await Dipex.new(stringCZadTUP, stringj9vsTAN, uintacpsLKQ, {from: accounts[3]});
		const uintUl3yKFV = BigInt("0")
		const addressNopm0B = accounts[2]
		const boolR0hVB0 = await DipexRb1lkV.approveAndCall.call(addressNopm0B, uintUl3yKFV, {from: accounts[3]});

		assert.equal(boolR0hVB0, true)
	});
})
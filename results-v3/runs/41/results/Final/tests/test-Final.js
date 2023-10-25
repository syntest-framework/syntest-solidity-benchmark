const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringijhfDWI = "V6LCghdtIeGPNDUCIWO9tpAywqQW2RpzyjBJIcTlyJSbMFcCEy8jiH1V3BWJDbQIte6oREJT"
		const stringC89Q5gB = "OIMthGorSPSd23SAOyDi4H06qVPGzRn3MJO9jHkeaya"
		const uintfprAfdy = BigInt("70")
		const FinalWHFaqu = await Final.new(stringijhfDWI, stringC89Q5gB, uintfprAfdy, {from: accounts[1]});
		const addressDNmhMjf = accounts[4]
		const addressr4Bz3dW = accounts[4]
		const addresstGt2UD3 = accounts[4]
		const uinthd5dBe9 = await FinalWHFaqu.allowance.call(addressr4Bz3dW, addressDNmhMjf, {from: accounts[0]});
		const uint8S1TL7dr = await FinalWHFaqu.decimals.call({from: accounts[4]});
		const booliYWecZ9 = await FinalWHFaqu.transferownership.call(addresstGt2UD3, {from: accounts[0]});

		assert.equal(uint8S1TL7dr, BigInt("18"))
		assert.equal(uinthd5dBe9, BigInt("0"))
		await expect(FinalWHFaqu.transferownership.call(addresstGt2UD3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringKyEzLL = "6Cv4LEcxPUhsRk7z1JizaUi80zx3n3sMmJ2GRmycSmsPd"
		const stringihZ3Ve9 = "OWMPTYAi99rNY1QFyxuaGCZnPonk49Yzz7N7zeLEVb75tkKYpmtmsGJg7aUfjmptL3E33mdPTmgOBSNM9Pm3iHAMvA85tbN"
		const uintojuqANB = BigInt("142")
		const FinaltQBLmO = await Final.new(stringKyEzLL, stringihZ3Ve9, uintojuqANB, {from: accounts[4]});
		const uinty0jGS1E = BigInt("348")
		const addressKUTMpGh = accounts[4]
		const uintviG7Qgp = BigInt("1371")
		const addressmlvcL6P = accounts[4]
		const boolB8QZTQC = await FinaltQBLmO.approve.call(addressKUTMpGh, uinty0jGS1E, {from: accounts[4]});
		const boolLQ6aQBD = await FinaltQBLmO.approve.call(addressmlvcL6P, uintviG7Qgp, {from: accounts[0]});
		const uint8eVNQPG7 = await FinaltQBLmO.decimals.call({from: accounts[1]});

		assert.equal(boolB8QZTQC, true)
		assert.equal(boolLQ6aQBD, true)
		assert.equal(uint8eVNQPG7, BigInt("18"))
	});

	it('test for Final', async () => {
		const stringPyftMgP = "t4buIMq"
		const stringJDvt3V5 = "Skb"
		const uintAlUch7B = BigInt("169")
		const Finalhkc8kg8 = await Final.new(stringPyftMgP, stringJDvt3V5, uintAlUch7B, {from: accounts[4]});
		const uintwyF8A4L = BigInt("48")
		const addressG2tWPz = accounts[2]
		const uinthgc0dX6 = BigInt("1427")
		const addressN58eWwN = accounts[1]
		const uintNiLRhhK = BigInt("1977")
		const addressqjC83Hl = accounts[5]
		const uint8C8H2IHF = await Finalhkc8kg8.decimals.call({from: accounts[1]});
		const boolM6u18iv = await Finalhkc8kg8.approve.call(addressG2tWPz, uintwyF8A4L, {from: accounts[0]});
		const boolJ6AGHoz = await Finalhkc8kg8.transfer.call(addressN58eWwN, uinthgc0dX6, {from: accounts[4]});
		const boolBF1EOF9 = await Finalhkc8kg8.approveAndCall.call(addressqjC83Hl, uintNiLRhhK, {from: accounts[4]});
		const stringu6IkguL = await Finalhkc8kg8.symbol.call({from: accounts[0]});

		assert.equal(boolBF1EOF9, true)
		assert.equal(boolJ6AGHoz, true)
		assert.equal(boolM6u18iv, true)
		assert.equal(stringu6IkguL, "Skb")
		assert.equal(uint8C8H2IHF, BigInt("18"))
	});

	it('test for Final', async () => {
		const stringvr7k2Dh = "Eza9Ts9RutpO"
		const stringO7d0D1k = "YoDkOx8lA39i3v6rktJDM31lBgcqtEw"
		const uintyIrOEws = BigInt("1874")
		const FinaltuT3DPQ = await Final.new(stringvr7k2Dh, stringO7d0D1k, uintyIrOEws, {from: accounts[3]});
		const uintswxZbMH = BigInt("1713")
		const addressoDuQHvu = accounts[2]
		const addressQHkH2ds = accounts[3]
		const uintI9PMsdp = BigInt("1517")
		const addresscKb1Mff = accounts[1]
		const uintRYctjlQ = BigInt("667")
		const addressLXLaxXL = accounts[1]
		const boolN2RJuFu = await FinaltuT3DPQ.transferFrom.call(addressQHkH2ds, addressoDuQHvu, uintswxZbMH, {from: accounts[5]});
		const boolZz3sf67 = await FinaltuT3DPQ.approve.call(addresscKb1Mff, uintI9PMsdp, {from: "0x0000000000000000000000000000000000000001"});
		const string8OpTPg = await FinaltuT3DPQ.symbol.call({from: accounts[1]});
		const boolw9aF56O = await FinaltuT3DPQ.decreaseAllowance.call(addressLXLaxXL, uintRYctjlQ, {from: accounts[0]});

		await expect(FinaltuT3DPQ.transferFrom.call(addressQHkH2ds, addressoDuQHvu, uintswxZbMH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPyftMgP = "t4buIMq"
		const stringJDvt3V5 = "Skb"
		const uintQjqyoEU = BigInt("169")
		const Finalhkc8kg8 = await Final.new(stringPyftMgP, stringJDvt3V5, uintQjqyoEU, {from: accounts[4]});
		const uintOsBvchQ = BigInt("48")
		const addressFQK7VpY = accounts[2]
		const uinte6plJCF = BigInt("1840")
		const addressKB7r3Li = accounts[0]
		const addressxPLy7oN = accounts[1]
		const uintijwkgT5 = BigInt("1429")
		const addressigCpHKe = accounts[1]
		const uint5vfm5E = BigInt("1977")
		const addressRUGo4DZ = accounts[5]
		const uint8C8H2IHF = await Finalhkc8kg8.decimals.call({from: accounts[1]});
		const boolM6u18iv = await Finalhkc8kg8.approve.call(addressFQK7VpY, uintOsBvchQ, {from: accounts[0]});
		const boolPOs5msl = await Finalhkc8kg8.transferFrom.call(addressxPLy7oN, addressKB7r3Li, uinte6plJCF, {from: accounts[1]});
		const boolJ6AGHoz = await Finalhkc8kg8.transfer.call(addressigCpHKe, uintijwkgT5, {from: accounts[4]});
		const boolBF1EOF9 = await Finalhkc8kg8.approveAndCall.call(addressRUGo4DZ, uint5vfm5E, {from: accounts[4]});
		const stringu6IkguL = await Finalhkc8kg8.symbol.call({from: accounts[0]});

		assert.equal(boolM6u18iv, true)
		assert.equal(uint8C8H2IHF, BigInt("18"))
		await expect(Finalhkc8kg8.transferFrom.call(addressxPLy7oN, addressKB7r3Li, uinte6plJCF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringepjlCL3 = "yL4zTyq4OtC2tzh9ysW5HeQQv1U2L5Q96Xg"
		const stringBlnAqL4 = "DQCCEavyMEJeaMiAWd9s"
		const uintSjxtT7 = BigInt("233")
		const FinalzlXIogr = await Final.new(stringepjlCL3, stringBlnAqL4, uintSjxtT7, {from: accounts[1]});
		const uintsZJZFqd = BigInt("931")
		const addressAqfTutq = accounts[5]
		const addressa8IdEWQ = accounts[3]
		const addressA3z6eU6 = accounts[3]
		const addressrfxNEKH = accounts[4]
		const addressaV8Ywqd = accounts[0]
		const addressOeMCK2M = "0x0000000000000000000000000000000000000001"
		const uintwHynLLa = BigInt("421")
		const addresskS2g4FZ = accounts[1]
		const boolHJsaQ5Y = await FinalzlXIogr.approve.call(addressAqfTutq, uintsZJZFqd, {from: accounts[2]});
		const uintaJtMWg7 = await FinalzlXIogr.allowance.call(addressA3z6eU6, addressa8IdEWQ, {from: accounts[0]});
		const uintRJoplDO = await FinalzlXIogr.allowance.call(addressaV8Ywqd, addressrfxNEKH, {from: accounts[5]});
		const boolGZHipHW = await FinalzlXIogr.transferownership.call(addressOeMCK2M, {from: accounts[1]});
		const booltmWtCbs = await FinalzlXIogr.transfer.call(addresskS2g4FZ, uintwHynLLa, {from: accounts[3]});
		const uint8MaPQoRT = await FinalzlXIogr.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGZHipHW, true)
		assert.equal(boolHJsaQ5Y, true)
		assert.equal(uintRJoplDO, BigInt("0"))
		assert.equal(uintaJtMWg7, BigInt("0"))
		await expect(FinalzlXIogr.transfer.call(addresskS2g4FZ, uintwHynLLa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringepjlCL3 = "yL4zTyq4OtC2tzh9ysW5HeQQv1U2L5Q96Xg"
		const stringBlnAqL4 = "DQCCEavyMEJeaMiAWd9s"
		const uint1r0fsO = BigInt("233")
		const FinalzlXIogr = await Final.new(stringepjlCL3, stringBlnAqL4, uint1r0fsO, {from: accounts[1]});
		const uinthDJMUK0 = BigInt("0")
		const addressXxVlqgD = accounts[4]
		const addressSD1X143 = accounts[1]
		const uintAWp9EP = BigInt("931")
		const addresslQ3kheo = accounts[5]
		const addressxClZ91v = accounts[3]
		const address7XHsxJ = accounts[3]
		const addressH7evfGP = accounts[4]
		const addressMAlbBHD = accounts[0]
		const addressXkaDYNM = "0x0000000000000000000000000000000000000001"
		const uintOzIkWKP = BigInt("421")
		const addressaIJ9wUA = accounts[2]
		const boolTWZGhbL = await FinalzlXIogr.transferFrom.call(addressSD1X143, addressXxVlqgD, uinthDJMUK0, {from: accounts[5]});
		const boolHJsaQ5Y = await FinalzlXIogr.approve.call(addresslQ3kheo, uintAWp9EP, {from: accounts[2]});
		const uintaJtMWg7 = await FinalzlXIogr.allowance.call(address7XHsxJ, addressxClZ91v, {from: accounts[0]});
		const uintRJoplDO = await FinalzlXIogr.allowance.call(addressMAlbBHD, addressH7evfGP, {from: accounts[5]});
		const boolGZHipHW = await FinalzlXIogr.transferownership.call(addressXkaDYNM, {from: accounts[1]});
		const booltmWtCbs = await FinalzlXIogr.transfer.call(addressaIJ9wUA, uintOzIkWKP, {from: accounts[3]});
		const uint8MaPQoRT = await FinalzlXIogr.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGZHipHW, true)
		assert.equal(boolHJsaQ5Y, true)
		assert.equal(boolTWZGhbL, true)
		assert.equal(uintRJoplDO, BigInt("0"))
		assert.equal(uintaJtMWg7, BigInt("0"))
		await expect(FinalzlXIogr.transfer.call(addressaIJ9wUA, uintOzIkWKP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPyftMgP = "t4buIMq"
		const stringJDvt3V5 = "Skb"
		const uintR4CUCSf = BigInt("169")
		const Finalhkc8kg8 = await Final.new(stringPyftMgP, stringJDvt3V5, uintR4CUCSf, {from: accounts[4]});
		const uintK4Qp4C4 = BigInt("1427")
		const addressU3M8II5 = accounts[1]
		const uintpJza7hD = BigInt("1977")
		const addressEH4oGhm = accounts[6]
		const uintGi0nVEO = BigInt("1622")
		const addressNUAzLMw = accounts[4]
		const uint8C8H2IHF = await Finalhkc8kg8.decimals.call({from: accounts[1]});
		const boolJ6AGHoz = await Finalhkc8kg8.transfer.call(addressU3M8II5, uintK4Qp4C4, {from: accounts[4]});
		const boolBF1EOF9 = await Finalhkc8kg8.approveAndCall.call(addressEH4oGhm, uintpJza7hD, {from: accounts[4]});
		const boolotdOvs = await Finalhkc8kg8.increaseAllowance.call(addressNUAzLMw, uintGi0nVEO, {from: accounts[1]});
		const stringvMnBZC6 = await Finalhkc8kg8.name.call({from: accounts[0]});
		const stringu6IkguL = await Finalhkc8kg8.symbol.call({from: accounts[0]});

		assert.equal(boolBF1EOF9, true)
		assert.equal(boolJ6AGHoz, true)
		assert.equal(uint8C8H2IHF, BigInt("18"))
		await expect(Finalhkc8kg8.increaseAllowance.call(addressNUAzLMw, uintGi0nVEO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringzjPW2HF = "Oqw"
		const stringT2ABEY = "96Q7eaf2Kyt6NsWFRdMI9vfdZN1TxNOESuHfNLfN"
		const uinti3jCEp9 = BigInt("1292")
		const FinalLqgwiDI = await Final.new(stringzjPW2HF, stringT2ABEY, uinti3jCEp9, {from: "0x0000000000000000000000000000000000000001"});
		const uintxB3EDng = BigInt("1924")
		const addressrQhJoUt = accounts[1]
		const addressPJpzWpR = accounts[0]
		const addressaFi1i5k = accounts[2]
		const stringMxYqkWk = await FinalLqgwiDI.symbol.call({from: accounts[3]});
		const boolB4TWo7o = await FinalLqgwiDI.approve.call(addressrQhJoUt, uintxB3EDng, {from: accounts[1]});
		const boolg4M1h0R = await FinalLqgwiDI.transferownership.call(addressPJpzWpR, {from: accounts[0]});
		const uintSUGCSl3 = await FinalLqgwiDI.balanceOf.call(addressaFi1i5k, {from: accounts[2]});
	});
})
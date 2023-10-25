const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressy6tnAnG = accounts[5]
		const addressCRHGXuX = accounts[0]
		const SpiritCoindiAefT = await SpiritCoin.new(addressy6tnAnG, addressCRHGXuX, {from: accounts[3]});
		const uintFEoU4hr = BigInt("42")
		const addressX263Tra = accounts[1]
		const uintmm3SBEq = BigInt("1389")
		const addressjPYL9bc = accounts[4]
		const uinteIMmmP = BigInt("937")
		const addresseLrjUr6 = accounts[4]
		const addressy8Ydg3N = accounts[0]
		const addressKg3m2Xu = await SpiritCoindiAefT.mint.call(addressX263Tra, uintFEoU4hr, {from: accounts[1]});
		const boollOm4akO = await SpiritCoindiAefT.approve.call(addressjPYL9bc, uintmm3SBEq, {from: accounts[4]});
		const addressj7BAcw = await SpiritCoindiAefT.mint.call(addresseLrjUr6, uinteIMmmP, {from: accounts[2]});
		const uint42gwxq = await SpiritCoindiAefT.balanceOf.call(addressy8Ydg3N, {from: accounts[3]});

		await expect(SpiritCoindiAefT.mint.call(addressX263Tra, uintFEoU4hr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressszApXj2 = accounts[4]
		const addresswLvP3Mm = accounts[2]
		const SpiritCoinE771za = await SpiritCoin.new(addressszApXj2, addresswLvP3Mm, {from: accounts[2]});
		const uint6E869w = BigInt("199")
		const addressULn3ooE = accounts[4]
		const addresstn6LqsA = accounts[4]
		const addressmB5u9D = accounts[2]
		const uintFdbJv23 = BigInt("318")
		const addressYxkv0PF = "0x0000000000000000000000000000000000000001"
		const addressKa1TQx1 = await SpiritCoinE771za.mint.call(addressULn3ooE, uint6E869w, {from: accounts[2]});
		const uinttKWCNfk = await SpiritCoinE771za.allowance.call(addressmB5u9D, addresstn6LqsA, {from: accounts[0]});
		const boolWX92xK9 = await SpiritCoinE771za.transfer.call(addressYxkv0PF, uintFdbJv23, {from: accounts[1]});

		assert.equal(uinttKWCNfk, BigInt("0"))
		await expect(SpiritCoinE771za.transfer.call(addressYxkv0PF, uintFdbJv23, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressDO0iI3 = accounts[2]
		const addressloqg3B = accounts[2]
		const SpiritCoinNStYO9 = await SpiritCoin.new(addressDO0iI3, addressloqg3B, {from: accounts[4]});
		const uintA97Vquj = BigInt("985")
		const addressGT6q6Ab = accounts[0]
		const addressQQAw5ZH = accounts[1]
		const addressNMPUVzm = accounts[3]
		const boolyJjOzIh = await SpiritCoinNStYO9.approve.call(addressGT6q6Ab, uintA97Vquj, {from: accounts[5]});
		const uintMjrmuk4 = await SpiritCoinNStYO9.balanceOf.call(addressQQAw5ZH, {from: accounts[2]});
		const uintp2B8aoV = await SpiritCoinNStYO9.balanceOf.call(addressNMPUVzm, {from: accounts[3]});

		assert.equal(boolyJjOzIh, true)
		assert.equal(uintMjrmuk4, BigInt("0"))
		assert.equal(uintp2B8aoV, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressso3L3mD = accounts[0]
		const addressDyo8YZh = accounts[3]
		const SpiritCoinXqjvO1u = await SpiritCoin.new(addressso3L3mD, addressDyo8YZh, {from: "0x0000000000000000000000000000000000000001"});
		const addressLZj3W2N = accounts[2]
		const addressCCeIptp = accounts[1]
		const addressX0jGfnP = accounts[1]
		const addressMuevBY0 = await SpiritCoinXqjvO1u.setMinter.call(addressLZj3W2N, {from: accounts[3]});
		const addressjFGKB7t = await SpiritCoinXqjvO1u.setMinter.call(addressCCeIptp, {from: accounts[1]});
		const addresseIZHMg7 = await SpiritCoinXqjvO1u.setMinter.call(addressX0jGfnP, {from: accounts[4]});
	});

	it('test for SpiritCoin', async () => {
		const addressQTaF78 = accounts[2]
		const addresscbsRFIA = accounts[2]
		const SpiritCoinNStYO9 = await SpiritCoin.new(addressQTaF78, addresscbsRFIA, {from: accounts[4]});
		const uintVB0xjN9 = BigInt("985")
		const addressJkfVnTT = accounts[0]
		const addressN0e0gZx = accounts[0]
		const addressWRLUjM = accounts[1]
		const addressEWpT6RE = accounts[2]
		const addressnfF7SF2 = accounts[5]
		const boolyJjOzIh = await SpiritCoinNStYO9.approve.call(addressJkfVnTT, uintVB0xjN9, {from: accounts[5]});
		const uintEN2eoil = await SpiritCoinNStYO9.balanceOf.call(addressN0e0gZx, {from: accounts[2]});
		const uintMjrmuk4 = await SpiritCoinNStYO9.balanceOf.call(addressWRLUjM, {from: accounts[2]});
		const addressvJDtvHM = await SpiritCoinNStYO9.setMinter.call(addressEWpT6RE, {from: accounts[2]});
		const uintp2B8aoV = await SpiritCoinNStYO9.balanceOf.call(addressnfF7SF2, {from: accounts[3]});

		assert.equal(boolyJjOzIh, true)
		assert.equal(uintEN2eoil, BigInt("0"))
		assert.equal(uintMjrmuk4, BigInt("0"))
		assert.equal(uintp2B8aoV, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressmxCdqt = accounts[4]
		const addressb9Ro1FZ = accounts[2]
		const SpiritCoinE771za = await SpiritCoin.new(addressmxCdqt, addressb9Ro1FZ, {from: accounts[2]});
		const uintqv8opja = BigInt("199")
		const addresshrohoI6 = accounts[4]
		const addressGOKMIDg = accounts[3]
		const addressML7u23s = accounts[4]
		const addressfBU72v = accounts[2]
		const uintnTbcMSU = BigInt("318")
		const addressVdj5mO = "0x0000000000000000000000000000000000000001"
		const addressKa1TQx1 = await SpiritCoinE771za.mint.call(addresshrohoI6, uintqv8opja, {from: accounts[2]});
		const addresshKibKQq = await SpiritCoinE771za.setMinter.call(addressGOKMIDg, {from: accounts[0]});
		const uinttKWCNfk = await SpiritCoinE771za.allowance.call(addressfBU72v, addressML7u23s, {from: accounts[0]});
		const boolWX92xK9 = await SpiritCoinE771za.transfer.call(addressVdj5mO, uintnTbcMSU, {from: accounts[1]});

		await expect(SpiritCoinE771za.setMinter.call(addressGOKMIDg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressc3BIwC = accounts[4]
		const addressWqO2ka9 = accounts[2]
		const SpiritCoinE771za = await SpiritCoin.new(addressc3BIwC, addressWqO2ka9, {from: accounts[2]});
		const uintcH81tLW = BigInt("199")
		const addresshyE0VfZ = accounts[4]
		const addresscJuks1t = accounts[4]
		const addressUOIOww3 = accounts[2]
		const uintRaIAC1X = BigInt("318")
		const addressCR64dyW = "0x0000000000000000000000000000000000000000"
		const addressKa1TQx1 = await SpiritCoinE771za.mint.call(addresshyE0VfZ, uintcH81tLW, {from: accounts[2]});
		const uinttKWCNfk = await SpiritCoinE771za.allowance.call(addressUOIOww3, addresscJuks1t, {from: accounts[0]});
		const boolWX92xK9 = await SpiritCoinE771za.transfer.call(addressCR64dyW, uintRaIAC1X, {from: accounts[1]});

		assert.equal(uinttKWCNfk, BigInt("0"))
		await expect(SpiritCoinE771za.transfer.call(addressCR64dyW, uintRaIAC1X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressDGBcEHq = accounts[2]
		const addressaoUmf6U = accounts[2]
		const SpiritCoinNStYO9 = await SpiritCoin.new(addressDGBcEHq, addressaoUmf6U, {from: accounts[4]});
		const uintdu6qfGC = BigInt("985")
		const address5P0rhC = accounts[0]
		const addresswkEi9jZ = accounts[3]
		const addressNHjKh1x = accounts[4]
		const addressk64DwzX = accounts[2]
		const uintTuG4GwQ = BigInt("1162")
		const addressw62amBH = accounts[2]
		const addressgSW9jIl = accounts[2]
		const addresseTeAFZm = accounts[3]
		const boolyJjOzIh = await SpiritCoinNStYO9.approve.call(address5P0rhC, uintdu6qfGC, {from: accounts[5]});
		const uintq1QddC = await SpiritCoinNStYO9.allowance.call(addressNHjKh1x, addresswkEi9jZ, {from: accounts[4]});
		const uintMjrmuk4 = await SpiritCoinNStYO9.balanceOf.call(addressk64DwzX, {from: accounts[2]});
		const boolDaPK4B8 = await SpiritCoinNStYO9.transferFrom.call(addressgSW9jIl, addressw62amBH, uintTuG4GwQ, {from: accounts[0]});
		const uintp2B8aoV = await SpiritCoinNStYO9.balanceOf.call(addresseTeAFZm, {from: accounts[3]});

		assert.equal(boolyJjOzIh, true)
		assert.equal(uintMjrmuk4, BigInt("10000000000000000000000000"))
		assert.equal(uintq1QddC, BigInt("0"))
		await expect(SpiritCoinNStYO9.transferFrom.call(addressgSW9jIl, addressw62amBH, uintTuG4GwQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
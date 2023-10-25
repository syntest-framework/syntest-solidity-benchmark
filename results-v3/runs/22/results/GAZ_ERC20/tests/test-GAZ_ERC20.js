const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Vq9JNoM = await GAZ_ERC20.new({from: accounts[5]});
		const uintVk2Vnel = BigInt("783")
		const addressT1w2pig = accounts[0]
		const uintue4dTJ = BigInt("1397")
		const addressud3ODZx = accounts[4]
		const uintc0yKMW0 = BigInt("1079")
		const addressnhI2wbu = accounts[0]
		const addresstbCY02 = accounts[3]
		const boolwQkr0Gi = await GAZ_ERC20Vq9JNoM.transfer.call(addressT1w2pig, uintVk2Vnel, {from: accounts[5]});
		const boolAD886rD = await GAZ_ERC20Vq9JNoM.transfer.call(addressud3ODZx, uintue4dTJ, {from: accounts[0]});
		const boolFlR4yAb = await GAZ_ERC20Vq9JNoM.approve.call(addressnhI2wbu, uintc0yKMW0, {from: accounts[0]});
		const boolg7VUHzX = await GAZ_ERC20Vq9JNoM.approve.call(addresstbCY02, {from: accounts[0]});

		assert.equal(boolwQkr0Gi, true)
		await expect(GAZ_ERC20Vq9JNoM.transfer.call(addressud3ODZx, uintue4dTJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z4bSyX2 = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintu4rT1yh = BigInt("1748")
		const addressntesHy = accounts[1]
		const uintt5o98BB = BigInt("861")
		const addressuR6fKv0 = accounts[5]
		const uintTjk3yi2 = BigInt("219")
		const addresstkbsmpU = accounts[0]
		const uintxri91v7 = BigInt("1207")
		const addressBla6KBH = "0x0000000000000000000000000000000000000001"
		const boolPnpfrH3 = await GAZ_ERC20Z4bSyX2.transfer.call(addressntesHy, uintu4rT1yh, {from: accounts[0]});
		const boolIY3IGDj = await GAZ_ERC20Z4bSyX2.approve.call(addressuR6fKv0, uintt5o98BB, {from: accounts[3]});
		const boollQX8qEA = await GAZ_ERC20Z4bSyX2.approve.call(addresstkbsmpU, uintTjk3yi2, {from: accounts[2]});
		const boolwY6IW9G = await GAZ_ERC20Z4bSyX2.transfer.call(addressBla6KBH, uintxri91v7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vsopOa = await GAZ_ERC20.new({from: accounts[0]});
		const uintqe9rUW = BigInt("1220")
		const addressx051B56 = accounts[4]
		const addressjsjDoAs = accounts[3]
		const uintcJWMkTk = BigInt("869")
		const addressw8Npb0P = accounts[3]
		const addresswcWSyV = accounts[3]
		const uinti0tRBre = BigInt("576")
		const addresskbDHZSc = "0x0000000000000000000000000000000000000001"
		const uintSh3Oj83 = BigInt("1468")
		const addressdJMSeAz = accounts[3]
		const boolB4w8m4r = await GAZ_ERC20vsopOa.approve.call(addressx051B56, uintqe9rUW, {from: accounts[1]});
		const boolwGrJ1n4 = await GAZ_ERC20vsopOa.approve.call(addressjsjDoAs, {from: accounts[4]});
		const boolufeiqqm = await GAZ_ERC20vsopOa.transferFrom.call(addresswcWSyV, addressw8Npb0P, uintcJWMkTk, {from: accounts[1]});
		const boolcje26Y = await GAZ_ERC20vsopOa.transfer.call(addresskbDHZSc, uinti0tRBre, {from: accounts[3]});
		const bool6JE5gC = await GAZ_ERC20vsopOa.transfer.call(addressdJMSeAz, uintSh3Oj83, {from: accounts[1]});

		assert.equal(boolB4w8m4r, true)
		await expect(GAZ_ERC20vsopOa.approve.call(addressjsjDoAs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20se3Wjg8 = await GAZ_ERC20.new({from: accounts[3]});
		const addressuv7A71D = accounts[1]
		const uintyP7Xkq2 = BigInt("1822")
		const addressaxnByNQ = accounts[2]
		const uintJMzX254 = BigInt("1820")
		const addressMW9bEI = accounts[0]
		const addressgLgocUX = "0x0000000000000000000000000000000000000001"
		const uintDI3dHi = BigInt("1519")
		const addressvmZPNH0 = accounts[2]
		const addressN3GnO84 = accounts[1]
		const uintZ3aMCs = BigInt("683")
		const addressJVJlcDY = accounts[4]
		const boolRXOJo5X = await GAZ_ERC20se3Wjg8.approve.call(addressuv7A71D, {from: accounts[3]});
		const boolRQ1LN5O = await GAZ_ERC20se3Wjg8.transfer.call(addressaxnByNQ, uintyP7Xkq2, {from: "0x0000000000000000000000000000000000000001"});
		const boolrPSXKvc = await GAZ_ERC20se3Wjg8.transferFrom.call(addressgLgocUX, addressMW9bEI, uintJMzX254, {from: accounts[0]});
		const boolz9VbQ0s = await GAZ_ERC20se3Wjg8.transfer.call(addressvmZPNH0, uintDI3dHi, {from: accounts[1]});
		const bool84UBvq = await GAZ_ERC20se3Wjg8.approve.call(addressN3GnO84, {from: accounts[3]});
		const boolTNM6088 = await GAZ_ERC20se3Wjg8.transfer.call(addressJVJlcDY, uintZ3aMCs, {from: accounts[2]});

		await expect(GAZ_ERC20se3Wjg8.approve.call(addressuv7A71D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ygddBKT = await GAZ_ERC20.new({from: accounts[1]});
		const uintjzCgoS = BigInt("2043")
		const addressZWXbztY = accounts[2]
		const addressxpNadJ = accounts[4]
		const uintHDu4DW6 = BigInt("241")
		const addressNnrkPk0 = accounts[0]
		const uintxRp4rBb = BigInt("1742")
		const addressJtft1yd = accounts[1]
		const uintCqVEeNT = BigInt("751")
		const addressxovwuY = accounts[4]
		const addressqmlaxSA = accounts[3]
		const uintuwZoFav = BigInt("440")
		const addressl4TCyIC = accounts[5]
		const boolIZwGjr5 = await GAZ_ERC20ygddBKT.transferFrom.call(addressxpNadJ, addressZWXbztY, uintjzCgoS, {from: "0x0000000000000000000000000000000000000001"});
		const boolvhDUy7 = await GAZ_ERC20ygddBKT.transfer.call(addressNnrkPk0, uintHDu4DW6, {from: accounts[0]});
		const boolOMkNgzY = await GAZ_ERC20ygddBKT.transfer.call(addressJtft1yd, uintxRp4rBb, {from: accounts[3]});
		const boolo5vHwyt = await GAZ_ERC20ygddBKT.transferFrom.call(addressqmlaxSA, addressxovwuY, uintCqVEeNT, {from: accounts[5]});
		const boolAa5UT3g = await GAZ_ERC20ygddBKT.transfer.call(addressl4TCyIC, uintuwZoFav, {from: accounts[4]});

		await expect(GAZ_ERC20ygddBKT.transferFrom.call(addressxpNadJ, addressZWXbztY, uintjzCgoS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YbdlgID = await GAZ_ERC20.new({from: accounts[0]});
		const uintpEzjCHN = BigInt("55")
		const addressEIh3ULD = accounts[1]
		const addressKldcWgL = accounts[1]
		const uintSIgPwam = BigInt("527")
		const addressHQM1Hgz = accounts[0]
		const uintXgqQA6v = BigInt("392")
		const addressJGWADCy = accounts[1]
		const boolTSqnU7e = await GAZ_ERC20YbdlgID.transfer.call(addressEIh3ULD, uintpEzjCHN, {from: accounts[0]});
		const boolwFDlrK4 = await GAZ_ERC20YbdlgID.approve.call(addressKldcWgL, {from: accounts[0]});
		const boolUI0oH1N = await GAZ_ERC20YbdlgID.transfer.call(addressHQM1Hgz, uintSIgPwam, {from: accounts[4]});
		const boolDDUhGD = await GAZ_ERC20YbdlgID.approve.call(addressJGWADCy, uintXgqQA6v, {from: accounts[3]});

		assert.equal(boolTSqnU7e, true)
		await expect(GAZ_ERC20YbdlgID.approve.call(addressKldcWgL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YbdlgID = await GAZ_ERC20.new({from: accounts[0]});
		const addressQgb1A6 = accounts[5]
		const uintfC6Y7vd = BigInt("55")
		const addressILXFSB5 = accounts[2]
		const boolLtiKnJS = await GAZ_ERC20YbdlgID.approve.call(addressQgb1A6, {from: accounts[1]});
		const boolTSqnU7e = await GAZ_ERC20YbdlgID.transfer.call(addressILXFSB5, uintfC6Y7vd, {from: accounts[0]});

		await expect(GAZ_ERC20YbdlgID.approve.call(addressQgb1A6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YbdlgID = await GAZ_ERC20.new({from: accounts[0]});
		const uintWY5MMMl = BigInt("43")
		const addressmzDrJpu = accounts[1]
		const addresss0nODJf = accounts[5]
		const boolTSqnU7e = await GAZ_ERC20YbdlgID.transfer.call(addressmzDrJpu, uintWY5MMMl, {from: accounts[0]});
		const boolLewtSDt = await GAZ_ERC20YbdlgID.approve.call(addresss0nODJf, {from: accounts[2]});

		assert.equal(boolTSqnU7e, true)
		await expect(GAZ_ERC20YbdlgID.approve.call(addresss0nODJf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YbdlgID = await GAZ_ERC20.new({from: accounts[0]});
		const uintDnV0N1S = BigInt("675")
		const addressXXNYy5V = accounts[4]
		const addressbMPoWUF = accounts[1]
		const uintWXuCOdZ = BigInt("78")
		const addressiqKofQO = accounts[1]
		const boolWnG16M5 = await GAZ_ERC20YbdlgID.approve.call(addressXXNYy5V, uintDnV0N1S, {from: accounts[2]});
		const boolKrxKOf3 = await GAZ_ERC20YbdlgID.approve.call(addressbMPoWUF, {from: "0x0000000000000000000000000000000000000001"});
		const boolTSqnU7e = await GAZ_ERC20YbdlgID.transfer.call(addressiqKofQO, uintWXuCOdZ, {from: accounts[0]});

		assert.equal(boolWnG16M5, true)
		await expect(GAZ_ERC20YbdlgID.approve.call(addressbMPoWUF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YbdlgID = await GAZ_ERC20.new({from: accounts[0]});
		const uintgQJZKgP = BigInt("52")
		const addressDt3psAU = accounts[1]
		const addressrcFhbav = accounts[4]
		const boolTSqnU7e = await GAZ_ERC20YbdlgID.transfer.call(addressDt3psAU, uintgQJZKgP, {from: accounts[0]});
		const boolgUjro2u = await GAZ_ERC20YbdlgID.approve.call(addressrcFhbav, {from: accounts[5]});

		assert.equal(boolTSqnU7e, true)
		await expect(GAZ_ERC20YbdlgID.approve.call(addressrcFhbav, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})
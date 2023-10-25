const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressj5oNDXf = accounts[2]
		const addressmj3BRmo = accounts[4]
		const SpiritCoinYWO645L = await SpiritCoin.new(addressj5oNDXf, addressmj3BRmo, {from: accounts[1]});
		const uinth63JMt4 = BigInt("520")
		const addresswO1FHTp = accounts[1]
		const uintBuOWMlb = BigInt("597")
		const addressizqHJ6 = accounts[1]
		const uintf8DhqtV = BigInt("39")
		const addressRG59WlW = accounts[1]
		const uintqaZ46bS = BigInt("369")
		const addressUGtVqAJ = accounts[1]
		const uintPylSv3Y = BigInt("32")
		const addressdOqvsXN = accounts[1]
		const boolHpI6sdu = await SpiritCoinYWO645L.approve.call(addresswO1FHTp, uinth63JMt4, {from: accounts[2]});
		const boolXrPFRpL = await SpiritCoinYWO645L.transfer.call(addressizqHJ6, uintBuOWMlb, {from: "0x0000000000000000000000000000000000000001"});
		const boolTI8m5hl = await SpiritCoinYWO645L.approve.call(addressRG59WlW, uintf8DhqtV, {from: accounts[3]});
		const addressFAvkKJ6 = await SpiritCoinYWO645L.mint.call(addressUGtVqAJ, uintqaZ46bS, {from: accounts[2]});
		const boolgMXX2T6 = await SpiritCoinYWO645L.approve.call(addressdOqvsXN, uintPylSv3Y, {from: accounts[2]});

		assert.equal(boolHpI6sdu, true)
		await expect(SpiritCoinYWO645L.transfer.call(addressizqHJ6, uintBuOWMlb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresspqdHEVx = accounts[3]
		const addresswQyVTc = accounts[0]
		const SpiritCoinzqEwLkQ = await SpiritCoin.new(addresspqdHEVx, addresswQyVTc, {from: accounts[0]});
		const uintO93FkSX = BigInt("599")
		const addresst3Cp8BW = accounts[2]
		const uintFAFVlmC = BigInt("1432")
		const addressLeNGeEm = accounts[2]
		const uinth3oYMnX = BigInt("414")
		const addresskdU3Vt = accounts[3]
		const addresscmg7iV7 = accounts[1]
		const addressXTE9vqf = accounts[3]
		const boolNr3haRd = await SpiritCoinzqEwLkQ.approve.call(addresst3Cp8BW, uintO93FkSX, {from: accounts[1]});
		const boolVcw5sqc = await SpiritCoinzqEwLkQ.approve.call(addressLeNGeEm, uintFAFVlmC, {from: accounts[1]});
		const addressPY3SXfk = await SpiritCoinzqEwLkQ.mint.call(addresskdU3Vt, uinth3oYMnX, {from: accounts[0]});
		const uintf6AcLw = await SpiritCoinzqEwLkQ.allowance.call(addressXTE9vqf, addresscmg7iV7, {from: accounts[5]});

		assert.equal(boolNr3haRd, true)
		assert.equal(boolVcw5sqc, true)
		assert.equal(uintf6AcLw, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressO2dSpwy = accounts[3]
		const addressGcgT17s = accounts[2]
		const SpiritCoingzIPNVU = await SpiritCoin.new(addressO2dSpwy, addressGcgT17s, {from: accounts[2]});
		const uintKip0yvj = BigInt("538")
		const addressNjSwuto = accounts[3]
		const uintPzD1C4 = BigInt("1657")
		const addressHYEBUIF = accounts[0]
		const uintXraPp0k = BigInt("1223")
		const addresswTaYnFD = accounts[5]
		const addressphT5GI9 = await SpiritCoingzIPNVU.mint.call(addressNjSwuto, uintKip0yvj, {from: accounts[0]});
		const boolACtfi2X = await SpiritCoingzIPNVU.transfer.call(addressHYEBUIF, uintPzD1C4, {from: accounts[4]});
		const boolE0shwdG = await SpiritCoingzIPNVU.approve.call(addresswTaYnFD, uintXraPp0k, {from: accounts[5]});

		await expect(SpiritCoingzIPNVU.mint.call(addressNjSwuto, uintKip0yvj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressOG6kGFr = accounts[2]
		const addressqSYn20G = accounts[4]
		const SpiritCoinybp9XKv = await SpiritCoin.new(addressOG6kGFr, addressqSYn20G, {from: "0x0000000000000000000000000000000000000001"});
		const uintnCSJuKs = BigInt("504")
		const addressRYngYfl = "0x0000000000000000000000000000000000000001"
		const addresso6BB7AC = accounts[2]
		const addressx3spQTx = accounts[5]
		const addressS6ENDH = accounts[1]
		const addressqGbVd4K = accounts[1]
		const addressfNh8Uuo = accounts[4]
		const uintauHQ6lq = BigInt("849")
		const addressCQsxzN = accounts[0]
		const addressWEGwfp7 = accounts[3]
		const addressFwS6zLJ = "0x0000000000000000000000000000000000000001"
		const uintxqDNHY = BigInt("313")
		const addressBRnQAsn = accounts[1]
		const addressR5tPU2 = accounts[1]
		const boolxp8yFm = await SpiritCoinybp9XKv.transferFrom.call(addresso6BB7AC, addressRYngYfl, uintnCSJuKs, {from: accounts[5]});
		const uinttIF43gQ = await SpiritCoinybp9XKv.allowance.call(addressS6ENDH, addressx3spQTx, {from: accounts[4]});
		const uintE9NysGy = await SpiritCoinybp9XKv.allowance.call(addressfNh8Uuo, addressqGbVd4K, {from: accounts[1]});
		const boolA1FRwN6 = await SpiritCoinybp9XKv.approve.call(addressCQsxzN, uintauHQ6lq, {from: accounts[4]});
		const uintTOkCNEr = await SpiritCoinybp9XKv.allowance.call(addressFwS6zLJ, addressWEGwfp7, {from: accounts[1]});
		const booleNJ7mg7 = await SpiritCoinybp9XKv.transferFrom.call(addressR5tPU2, addressBRnQAsn, uintxqDNHY, {from: accounts[2]});
	});

	it('test for SpiritCoin', async () => {
		const addressPx5Xiq = accounts[3]
		const addressqAVoQMM = accounts[1]
		const SpiritCoinyrQtPgh = await SpiritCoin.new(addressPx5Xiq, addressqAVoQMM, {from: accounts[1]});
		const addressU8qzWTU = accounts[4]
		const uintyS5Y6A = BigInt("1704")
		const addressjmnVJ47 = accounts[5]
		const addressGcBm092 = accounts[5]
		const addressXlBzQuC = accounts[1]
		const addressWy8TMmn = accounts[4]
		const addresst7xsHf = accounts[1]
		const address3uZ8sv = "0x0000000000000000000000000000000000000001"
		const addressoppeZO1 = await SpiritCoinyrQtPgh.setMinter.call(addressU8qzWTU, {from: "0x0000000000000000000000000000000000000001"});
		const addressuW3ok6 = await SpiritCoinyrQtPgh.mint.call(addressjmnVJ47, uintyS5Y6A, {from: "0x0000000000000000000000000000000000000001"});
		const uintcsCJnMO = await SpiritCoinyrQtPgh.allowance.call(addressXlBzQuC, addressGcBm092, {from: accounts[2]});
		const uintovqwmqA = await SpiritCoinyrQtPgh.balanceOf.call(addressWy8TMmn, {from: accounts[1]});
		const uintdepUky0 = await SpiritCoinyrQtPgh.allowance.call(address3uZ8sv, addresst7xsHf, {from: accounts[3]});

		await expect(SpiritCoinyrQtPgh.setMinter.call(addressU8qzWTU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresschxElyQ = accounts[2]
		const addressA0NGlxs = accounts[3]
		const SpiritCoinbLii0ue = await SpiritCoin.new(addresschxElyQ, addressA0NGlxs, {from: accounts[2]});
		const addressA9BU3o = accounts[0]
		const uintOzvUUyi = BigInt("80")
		const addressQKtOVUj = accounts[1]
		const uintRyoVMtx = BigInt("1784")
		const addressaOHm7dD = accounts[0]
		const addressbk8VVwy = accounts[5]
		const uintZP4Uyql = BigInt("405")
		const addressN5c2YzW = accounts[4]
		const uintXv7yZA = await SpiritCoinbLii0ue.balanceOf.call(addressA9BU3o, {from: accounts[0]});
		const addressk6rdXI9 = await SpiritCoinbLii0ue.mint.call(addressQKtOVUj, uintOzvUUyi, {from: accounts[3]});
		const addresszRrK24o = await SpiritCoinbLii0ue.mint.call(addressaOHm7dD, uintRyoVMtx, {from: accounts[3]});
		const addressvHAeXCz = await SpiritCoinbLii0ue.setMinter.call(addressbk8VVwy, {from: accounts[0]});
		const addressQux25ul = await SpiritCoinbLii0ue.mint.call(addressN5c2YzW, uintZP4Uyql, {from: accounts[5]});

		assert.equal(uintXv7yZA, BigInt("0"))
		await expect(SpiritCoinbLii0ue.setMinter.call(addressbk8VVwy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressilKXTfV = accounts[1]
		const addressVpVgkXV = accounts[3]
		const SpiritCoinbytLDiL = await SpiritCoin.new(addressilKXTfV, addressVpVgkXV, {from: accounts[1]});
		const uintU2lF6ei = BigInt("19")
		const addressYjumcYT = "0x0000000000000000000000000000000000000001"
		const uintKxF6kvz = BigInt("1374")
		const addressczJ2776 = accounts[4]
		const addresseEGXAb3 = accounts[4]
		const addressZ7Ywzdh = accounts[2]
		const uintImd7oH8 = BigInt("1265")
		const addressavLaj7B = accounts[4]
		const addressORTthLo = "0x0000000000000000000000000000000000000001"
		const addressGUFPUWu = accounts[3]
		const boolwu4YqQj = await SpiritCoinbytLDiL.transfer.call(addressYjumcYT, uintU2lF6ei, {from: accounts[1]});
		const boolca1C61 = await SpiritCoinbytLDiL.transfer.call(addressczJ2776, uintKxF6kvz, {from: accounts[0]});
		const uintCsenhZQ = await SpiritCoinbytLDiL.allowance.call(addressZ7Ywzdh, addresseEGXAb3, {from: accounts[5]});
		const boolRavVOdU = await SpiritCoinbytLDiL.transfer.call(addressavLaj7B, uintImd7oH8, {from: accounts[3]});
		const uintDD0BSF2 = await SpiritCoinbytLDiL.allowance.call(addressGUFPUWu, addressORTthLo, {from: accounts[3]});

		assert.equal(boolwu4YqQj, true)
		await expect(SpiritCoinbytLDiL.transfer.call(addressczJ2776, uintKxF6kvz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const address5oXois = accounts[2]
		const addressBozaQyd = accounts[4]
		const SpiritCoinYWO645L = await SpiritCoin.new(address5oXois, addressBozaQyd, {from: accounts[1]});
		const uintPFfXBVi = BigInt("520")
		const addressqldLJ8X = accounts[1]
		const addresstpjumzF = accounts[0]
		const uintkf7PKn = BigInt("39")
		const addressHlgsnVl = accounts[1]
		const addressNK4KEVV = accounts[1]
		const addressBKQXrLg = accounts[1]
		const addressSrBDRsr = accounts[2]
		const addresscnWJl4V = "0x0000000000000000000000000000000000000001"
		const uintn8RBgBF = BigInt("369")
		const addresszdx4v8w = accounts[2]
		const uintVNZtjUm = BigInt("410")
		const addressXXV4SD0 = accounts[4]
		const uintFGnKowq = BigInt("32")
		const addressdeHjWcE = accounts[1]
		const boolHpI6sdu = await SpiritCoinYWO645L.approve.call(addressqldLJ8X, uintPFfXBVi, {from: accounts[2]});
		const addressIST4AW = await SpiritCoinYWO645L.setMinter.call(addresstpjumzF, {from: accounts[4]});
		const boolTI8m5hl = await SpiritCoinYWO645L.approve.call(addressHlgsnVl, uintkf7PKn, {from: accounts[3]});
		const uintlM9XKY = await SpiritCoinYWO645L.allowance.call(addressBKQXrLg, addressNK4KEVV, {from: accounts[4]});
		const uintXa2eer = await SpiritCoinYWO645L.allowance.call(addresscnWJl4V, addressSrBDRsr, {from: "0x0000000000000000000000000000000000000001"});
		const addressFAvkKJ6 = await SpiritCoinYWO645L.mint.call(addresszdx4v8w, uintn8RBgBF, {from: accounts[2]});
		const booloPsZWdP = await SpiritCoinYWO645L.transfer.call(addressXXV4SD0, uintVNZtjUm, {from: accounts[5]});
		const boolgMXX2T6 = await SpiritCoinYWO645L.approve.call(addressdeHjWcE, uintFGnKowq, {from: accounts[2]});

		assert.equal(boolHpI6sdu, true)
		assert.equal(boolTI8m5hl, true)
		assert.equal(uintXa2eer, BigInt("0"))
		assert.equal(uintlM9XKY, BigInt("0"))
		await expect(SpiritCoinYWO645L.mint.call(addresszdx4v8w, uintn8RBgBF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressSaeGjA0 = accounts[3]
		const addressOORbiBg = accounts[0]
		const SpiritCoinzqEwLkQ = await SpiritCoin.new(addressSaeGjA0, addressOORbiBg, {from: accounts[0]});
		const uintjLUxH6f = BigInt("1093")
		const addressmjRy7iS = accounts[2]
		const addressALImH10 = accounts[4]
		const uintB3XrW3N = BigInt("414")
		const addressbMSr8zr = accounts[4]
		const addresshXr6W1q = accounts[1]
		const addressj2cDbBP = accounts[3]
		const boolop4yB4t = await SpiritCoinzqEwLkQ.transferFrom.call(addressALImH10, addressmjRy7iS, uintjLUxH6f, {from: accounts[4]});
		const addressPY3SXfk = await SpiritCoinzqEwLkQ.mint.call(addressbMSr8zr, uintB3XrW3N, {from: accounts[0]});
		const uintf6AcLw = await SpiritCoinzqEwLkQ.allowance.call(addressj2cDbBP, addresshXr6W1q, {from: accounts[5]});

		await expect(SpiritCoinzqEwLkQ.transferFrom.call(addressALImH10, addressmjRy7iS, uintjLUxH6f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressnZXVJmQ = accounts[2]
		const addressR56emUY = accounts[4]
		const SpiritCoinYWO645L = await SpiritCoin.new(addressnZXVJmQ, addressR56emUY, {from: accounts[1]});
		const uintnBzE5HG = BigInt("1194")
		const addressND66dmx = accounts[1]
		const addressNaJq26 = accounts[3]
		const uintwplUr0E = BigInt("520")
		const addressYYmLiP6 = accounts[1]
		const uintQ9QFhP3 = BigInt("1946")
		const addressvF85zUC = accounts[2]
		const uintYym6at = BigInt("39")
		const addressxNtuqfy = accounts[1]
		const addressOk7GVj = accounts[1]
		const addressip0dnjD = accounts[2]
		const uintfD9i7g = BigInt("369")
		const addressD3nFBiM = accounts[1]
		const uintZTiHoPM = BigInt("410")
		const addressIeNklt3 = accounts[4]
		const uintxrj5Au8 = BigInt("1283")
		const addressj7McTK6 = accounts[4]
		const boolFkDzJxQ = await SpiritCoinYWO645L.transferFrom.call(addressNaJq26, addressND66dmx, uintnBzE5HG, {from: accounts[0]});
		const boolHpI6sdu = await SpiritCoinYWO645L.approve.call(addressYYmLiP6, uintwplUr0E, {from: accounts[2]});
		const addresssSWXur7 = await SpiritCoinYWO645L.mint.call(addressvF85zUC, uintQ9QFhP3, {from: accounts[3]});
		const boolTI8m5hl = await SpiritCoinYWO645L.approve.call(addressxNtuqfy, uintYym6at, {from: accounts[3]});
		const uintlM9XKY = await SpiritCoinYWO645L.allowance.call(addressip0dnjD, addressOk7GVj, {from: accounts[4]});
		const addressFAvkKJ6 = await SpiritCoinYWO645L.mint.call(addressD3nFBiM, uintfD9i7g, {from: accounts[2]});
		const booloPsZWdP = await SpiritCoinYWO645L.transfer.call(addressIeNklt3, uintZTiHoPM, {from: accounts[5]});
		const boolP2FB3VJ = await SpiritCoinYWO645L.transfer.call(addressj7McTK6, uintxrj5Au8, {from: accounts[1]});

		await expect(SpiritCoinYWO645L.transferFrom.call(addressNaJq26, addressND66dmx, uintnBzE5HG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressaNsQ0aY = accounts[2]
		const uintQmuPL5g = BigInt("1273")
		const DatrixoEquityTokenlCIzeOW = await DatrixoEquityToken.new(addressaNsQ0aY, uintQmuPL5g, {from: accounts[1]});
		const uintWr9n1A1 = BigInt("1775")
		const addressovpwAyr = accounts[5]
		const addressancS2C = accounts[4]
		const uintVcdN5tI = BigInt("1373")
		const addressnAVsoG8 = accounts[1]
		const boolzCcF35q = await DatrixoEquityTokenlCIzeOW.transferFrom.call(addressancS2C, addressovpwAyr, uintWr9n1A1, {from: accounts[3]});
		const boolHQemBaW = await DatrixoEquityTokenlCIzeOW.transfer.call(addressnAVsoG8, uintVcdN5tI, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayY1QpT95 = await DatrixoEquityTokenlCIzeOW.getShareholdersArray.call({from: accounts[0]});

		await expect(DatrixoEquityTokenlCIzeOW.transferFrom.call(addressancS2C, addressovpwAyr, uintWr9n1A1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBWSeGtW = accounts[2]
		const uintpmukL4H = BigInt("876")
		const DatrixoEquityTokenzW1jyIu = await DatrixoEquityToken.new(addressBWSeGtW, uintpmukL4H, {from: "0x0000000000000000000000000000000000000001"});
		const uintH3wyee2 = BigInt("1624")
		const addressVCR8DLd = accounts[4]
		const addressarrayeHhd4Z = await DatrixoEquityTokenzW1jyIu.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const booldw185SF = await DatrixoEquityTokenzW1jyIu.transfer.call(addressVCR8DLd, uintH3wyee2, {from: accounts[0]});
		await DatrixoEquityTokenzW1jyIu.afterStartTime.call({from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const address24zb7X = accounts[0]
		const uintPdGNEA3 = BigInt("1553")
		const DatrixoEquityTokenlhKV7GM = await DatrixoEquityToken.new(address24zb7X, uintPdGNEA3, {from: accounts[4]});
		const uintXz6FJcU = BigInt("1840")
		const addressHCJcWLE = accounts[1]
		const addressmjHYHuU = accounts[0]
		const uinteGQSBf = BigInt("1118")
		const addressarrayNbbKW12 = await DatrixoEquityTokenlhKV7GM.getShareholdersArray.call({from: accounts[3]});
		const boolxgRpF5 = await DatrixoEquityTokenlhKV7GM.transferFrom.call(addressmjHYHuU, addressHCJcWLE, uintXz6FJcU, {from: accounts[0]});
		const uintzqaQ4G = await DatrixoEquityTokenlhKV7GM.setStart.call(uinteGQSBf, {from: accounts[1]});

		assert.equal(addressarrayNbbKW12, )
		assert.equal(boolxgRpF5, true)
		await expect(DatrixoEquityTokenlhKV7GM.setStart.call(uinteGQSBf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressn4Y8Qb0 = accounts[3]
		const uintmdKToy = BigInt("795")
		const DatrixoEquityTokenJtdz9FR = await DatrixoEquityToken.new(addressn4Y8Qb0, uintmdKToy, {from: accounts[4]});
		const addresscq4oy5X = "0x0000000000000000000000000000000000000001"
		const addresskmtgIh = accounts[3]
		const uintphBQr8V = BigInt("1639")
		const addresseaGvX3f = accounts[3]
		await DatrixoEquityTokenJtdz9FR.onlyOwner.call({from: accounts[1]});
		await DatrixoEquityTokenJtdz9FR.afterStartTime.call({from: accounts[1]});
		const boolTi04Jc6 = await DatrixoEquityTokenJtdz9FR.removeShareholder.call(addresscq4oy5X, {from: accounts[4]});
		const bool6I0kiJ = await DatrixoEquityTokenJtdz9FR.removeShareholder.call(addresskmtgIh, {from: accounts[0]});
		const addressarrayTJsFBA = await DatrixoEquityTokenJtdz9FR.getShareholdersArray.call({from: accounts[0]});
		const boolaN5DXS = await DatrixoEquityTokenJtdz9FR.transfer.call(addresseaGvX3f, uintphBQr8V, {from: accounts[2]});

		await expect(DatrixoEquityTokenJtdz9FR.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressFH9MowJ = accounts[1]
		const uintagVcvS = BigInt("326")
		const DatrixoEquityTokenlIa6emh = await DatrixoEquityToken.new(addressFH9MowJ, uintagVcvS, {from: accounts[2]});
		const addressqtwDJ9 = accounts[3]
		const boolVhPFwpX = await DatrixoEquityTokenlIa6emh.removeShareholder.call(addressqtwDJ9, {from: accounts[1]});
		const addressarrayHZGDag1 = await DatrixoEquityTokenlIa6emh.getShareholdersArray.call({from: accounts[5]});
		const addressarrayhJyXj8M = await DatrixoEquityTokenlIa6emh.getShareholdersArray.call({from: accounts[4]});

		await expect(DatrixoEquityTokenlIa6emh.removeShareholder.call(addressqtwDJ9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrqTq53B = accounts[0]
		const uintXg1WFI = BigInt("1553")
		const DatrixoEquityTokenlhKV7GM = await DatrixoEquityToken.new(addressrqTq53B, uintXg1WFI, {from: accounts[4]});
		const uintAwaBG7O = BigInt("1840")
		const addressfgwP1wk = accounts[1]
		const addressk32XuH = accounts[1]
		const uintxXhAK6l = BigInt("1118")
		const uintB6bziWX = BigInt("1247")
		const addressarrayNbbKW12 = await DatrixoEquityTokenlhKV7GM.getShareholdersArray.call({from: accounts[3]});
		const boolxgRpF5 = await DatrixoEquityTokenlhKV7GM.transferFrom.call(addressk32XuH, addressfgwP1wk, uintAwaBG7O, {from: accounts[0]});
		const uintzqaQ4G = await DatrixoEquityTokenlhKV7GM.setStart.call(uintxXhAK6l, {from: accounts[1]});
		const uintmvlWuE2 = await DatrixoEquityTokenlhKV7GM.setStart.call(uintB6bziWX, {from: accounts[2]});

		assert.equal(addressarrayNbbKW12, )
		await expect(DatrixoEquityTokenlhKV7GM.transferFrom.call(addressk32XuH, addressfgwP1wk, uintAwaBG7O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address4oSts8 = accounts[1]
		const uintT149yPP = BigInt("326")
		const DatrixoEquityTokenlIa6emh = await DatrixoEquityToken.new(address4oSts8, uintT149yPP, {from: accounts[2]});
		const uintoh3wfqI = BigInt("796")
		const addressJ6PXRwP = accounts[1]
		const uintYy3z5zA = BigInt("689")
		const addressSb7a1MJ = accounts[0]
		const addressh5i0VRG = accounts[2]
		const boolIdseVmK = await DatrixoEquityTokenlIa6emh.transfer.call(addressJ6PXRwP, uintoh3wfqI, {from: accounts[1]});
		await DatrixoEquityTokenlIa6emh.afterStartTime.call({from: accounts[0]});
		const boolYpfBqKC = await DatrixoEquityTokenlIa6emh.transfer.call(addressSb7a1MJ, uintYy3z5zA, {from: accounts[2]});
		const boolVhPFwpX = await DatrixoEquityTokenlIa6emh.removeShareholder.call(addressh5i0VRG, {from: accounts[1]});

		await expect(DatrixoEquityTokenlIa6emh.transfer.call(addressJ6PXRwP, uintoh3wfqI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspDGEDcz = accounts[0]
		const uintM6948rO = BigInt("1553")
		const DatrixoEquityTokenlhKV7GM = await DatrixoEquityToken.new(addresspDGEDcz, uintM6948rO, {from: accounts[4]});
		const uintKqmdGTN = BigInt("316")
		const uintctg1qEQ = BigInt("1840")
		const addresseb5Ude4 = accounts[1]
		const addressEMhyGZr = accounts[0]
		const uintwDR16Zl = BigInt("1118")
		const uintqAmwLTW = await DatrixoEquityTokenlhKV7GM.setStart.call(uintKqmdGTN, {from: accounts[0]});
		const addressarrayNbbKW12 = await DatrixoEquityTokenlhKV7GM.getShareholdersArray.call({from: accounts[3]});
		const addressarraynMedR44 = await DatrixoEquityTokenlhKV7GM.getShareholdersArray.call({from: accounts[2]});
		const boolxgRpF5 = await DatrixoEquityTokenlhKV7GM.transferFrom.call(addressEMhyGZr, addresseb5Ude4, uintctg1qEQ, {from: accounts[0]});
		const uintzqaQ4G = await DatrixoEquityTokenlhKV7GM.setStart.call(uintwDR16Zl, {from: accounts[1]});

		assert.equal(addressarrayNbbKW12, )
		assert.equal(addressarraynMedR44, )
		assert.equal(boolxgRpF5, true)
		await expect(DatrixoEquityTokenlhKV7GM.setStart.call(uintwDR16Zl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresssNWMBsl = accounts[0]
		const uintXVgUyYo = BigInt("1553")
		const DatrixoEquityTokenlhKV7GM = await DatrixoEquityToken.new(addresssNWMBsl, uintXVgUyYo, {from: accounts[4]});
		const uint2IgggZ = BigInt("1817")
		const addressiVoUDQa = accounts[4]
		const uintCino446 = BigInt("1840")
		const addressP73yaF = accounts[1]
		const addressMvSjTp = accounts[0]
		const uintAIxe39s = BigInt("1118")
		const boolj8aYLOL = await DatrixoEquityTokenlhKV7GM.transfer.call(addressiVoUDQa, uint2IgggZ, {from: accounts[0]});
		const addressarrayNbbKW12 = await DatrixoEquityTokenlhKV7GM.getShareholdersArray.call({from: accounts[3]});
		const boolxgRpF5 = await DatrixoEquityTokenlhKV7GM.transferFrom.call(addressMvSjTp, addressP73yaF, uintCino446, {from: accounts[0]});
		const uintzqaQ4G = await DatrixoEquityTokenlhKV7GM.setStart.call(uintAIxe39s, {from: accounts[1]});

		assert.equal(addressarrayNbbKW12, )
		assert.equal(boolj8aYLOL, true)
		assert.equal(boolxgRpF5, true)
		await expect(DatrixoEquityTokenlhKV7GM.setStart.call(uintAIxe39s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressCHbK7IT = accounts[1]
		const uintcnscact = BigInt("326")
		const DatrixoEquityTokenlIa6emh = await DatrixoEquityToken.new(addressCHbK7IT, uintcnscact, {from: accounts[2]});
		const uintqKZPwJ = BigInt("1946")
		const addressaS27uXI = accounts[1]
		const uintLssHar9 = await DatrixoEquityTokenlIa6emh.setStart.call(uintqKZPwJ, {from: accounts[1]});
		const boolVhPFwpX = await DatrixoEquityTokenlIa6emh.removeShareholder.call(addressaS27uXI, {from: accounts[1]});

		await expect(DatrixoEquityTokenlIa6emh.setStart.call(uintqKZPwJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})